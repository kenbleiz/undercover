import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useP2PRoom, type PeerInfo } from "@/lib/multiplayer";
import type { NetMsg, PublicSnap } from "@/lib/undercover/net";
import { isNetMsg } from "@/lib/undercover/net";
import { useGame } from "@/lib/undercover/store";
import type { GameState } from "@/lib/undercover/store";
import { MAX_ONLINE } from "@/lib/undercover/types";

type NetApi = {
  sendToHost: (msg: NetMsg) => void;
  peers: PeerInfo[];
  joined: boolean;
  selfId: string;
  startHostGame: () => boolean;
};

const NetCtx = createContext<NetApi | null>(null);

export function useNetPlay() {
  const ctx = useContext(NetCtx);
  const mode = useGame((s) => s.mode);
  const selfId = useGame((s) => s.selfId);
  return {
    isNet: mode !== "local",
    isHost: mode === "host",
    isGuest: mode === "guest",
    selfId,
    sendToHost: ctx?.sendToHost ?? (() => {}),
    peers: ctx?.peers ?? [],
    joined: ctx?.joined ?? false,
    startHostGame: ctx?.startHostGame ?? (() => false),
  };
}

function toPublic(s: GameState, hostId: string): PublicSnap {
  const revealAll = s.phase === "gameover";
  return {
    phase: s.phase,
    players: s.players.map((p) => ({
      id: p.id,
      name: p.name,
      alive: p.alive,
      role: revealAll || (!p.alive && s.phase !== "word") ? p.role : undefined,
    })),
    round: s.round,
    speakerId: s.speakerId,
    spokenIds: s.spokenIds,
    hints: s.hints,
    votedIds: Object.keys(s.ballots),
    voteCounts:
      s.phase === "voteResult" || s.phase === "eliminated" || s.phase === "gameover"
        ? s.voteCounts
        : {},
    tiedIds: s.tiedIds,
    lastEliminatedId: s.lastEliminatedId,
    winner: s.winner,
    civilianWord: revealAll ? s.civilianWord : "",
    undercoverWord: revealAll ? s.undercoverWord : "",
    guessWrong: s.guessWrong,
    hostId,
    readyIds: s.readyIds,
  };
}

export function NetSession({
  code,
  name,
  isHost,
  children,
}: {
  code: string;
  name: string;
  isHost: boolean;
  children: ReactNode;
}) {
  const p2p = useP2PRoom({ room: code, name });

  useEffect(() => {
    useGame.getState().setSelfId(p2p.selfId);
    if (isHost) useGame.getState().setHostId(p2p.selfId);
  }, [isHost, p2p.selfId]);

  useEffect(() => {
    if (!isHost) return;
    return useGame.subscribe((s) => {
      if (s.phase === "lobby" || s.phase === "home" || s.phase === "join" || s.phase === "setup") {
        return;
      }
      p2p.send({ t: "snap", state: toPublic(s, p2p.selfId) });
    });
  }, [isHost, p2p]);

  useEffect(() => {
    if (!isHost) return;
    for (const peer of p2p.peers) {
      if (peer.connectionState === "connected") {
        p2p.send({ t: "welcome", hostId: p2p.selfId }, peer.id);
      }
    }
  }, [isHost, p2p, p2p.peers]);

  useEffect(() => {
    return p2p.onMessage((from, data, channel) => {
      if (channel !== "reliable" || !isNetMsg(data)) return;
      const s = useGame.getState();

      if (isHost) {
        if (data.t === "hello") {
          p2p.send({ t: "welcome", hostId: p2p.selfId }, from);
          if (s.phase !== "lobby" && s.phase !== "home" && s.phase !== "join") {
            const pl = s.players.find((p) => p.id === from);
            if (!pl) {
              p2p.send({ t: "full" }, from);
              return;
            }
            p2p.send({ t: "card", word: pl.word }, from);
            p2p.send({ t: "snap", state: toPublic(s, p2p.selfId) }, from);
          }
          return;
        }
        if (data.t === "ready") s.markReady(from);
        if (data.t === "hint" && from === s.speakerId) s.submitHint(data.text);
        if (data.t === "vote") s.recordBallot(from, data.targetId);
        if (data.t === "guess") {
          s.setGuess(data.text);
          s.submitWhiteGuess();
        }
        return;
      }

      if (data.t === "welcome") s.setHostId(data.hostId);
      if (data.t === "snap") s.applySnap(data.state);
      if (data.t === "card") {
        s.setMyWord(data.word);
        useGame.setState((prev) => ({
          players: prev.players.map((p) => (p.id === prev.selfId ? { ...p, word: data.word } : p)),
        }));
      }
      if (data.t === "full") s.leaveRoom();
    });
  }, [isHost, p2p]);

  useEffect(() => {
    if (isHost || !p2p.joined) return;
    p2p.send({ t: "hello" });
  }, [isHost, p2p, p2p.joined]);

  const api = useMemo<NetApi>(
    () => ({
      sendToHost: (msg) => {
        if (isHost) return;
        const hostId = useGame.getState().hostId;
        if (hostId) p2p.send(msg, hostId);
        else p2p.send(msg);
      },
      peers: p2p.peers,
      joined: p2p.joined,
      selfId: p2p.selfId,
      startHostGame: () => {
        const hostPlays = useGame.getState().hostPlays;
        const connected = p2p.peers.filter((p) => p.connectionState === "connected");
        const maxGuests = hostPlays ? MAX_ONLINE - 1 : MAX_ONLINE;
        const guestSeats = connected.slice(0, maxGuests).map((p) => ({
          id: p.id,
          name: p.name || "?",
        }));
        const seats = hostPlays ? [{ id: p2p.selfId, name }, ...guestSeats] : guestSeats;
        const st = useGame.getState();
        const typed =
          st.customCivilian.trim().length > 0 && st.customUndercover.trim().length > 0;
        const newPair = st.phase === "gameover" && !typed;
        const ok = st.startOnlineGame(seats, { newPair });
        if (!ok) return false;
        const s = useGame.getState();
        for (const pl of s.players) {
          if (pl.id === p2p.selfId) continue;
          p2p.send({ t: "card", word: pl.word }, pl.id);
        }
        p2p.send({ t: "snap", state: toPublic(s, p2p.selfId) });
        return true;
      },
    }),
    [isHost, p2p, name],
  );

  return <NetCtx.Provider value={api}>{children}</NetCtx.Provider>;
}
