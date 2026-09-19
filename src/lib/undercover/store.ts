import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ALL_CATEGORIES,
  MAX_PLAYERS,
  MIN_PLAYERS,
  type Category,
  type Hint,
  type Lang,
  type Phase,
  type PlayMode,
  type Player,
  type Winner,
} from "./types";
import {
  awardScores,
  clampRoles,
  dealPlayers,
  evaluateWinner,
  makeRoomCode,
  nextAliveId,
  normalizeRoomCode,
  speechLapsFor,
  suggestedRoles,
  tallyVotes,
  wordsMatch,
} from "./engine";
import { pickPair } from "./words";
import type { PublicSnap } from "./net";

const DEFAULT_NAMES = ["Léa", "Marc", "Inès", "Tom", "Sofia"];

export type GameState = {
  version: 1;
  lang: Lang;
  setupNames: string[];
  undercoverCount: number;
  mrWhiteCount: number;
  categories: Category[];
  customCivilian: string;
  customUndercover: string;
  useCustom: boolean;
  secretVote: boolean;
  phase: Phase;
  dealIndex: number;
  players: Player[];
  civilianWord: string;
  undercoverWord: string;
  pairId: string | null;
  usedPairIds: string[];
  round: number;
  speechLap: number;
  speakerId: string | null;
  spokenIds: string[];
  hints: Hint[];
  voterId: string | null;
  voterQueue: string[];
  ballots: Record<string, string>;
  pendingVote: string | null;
  tiedIds: string[] | null;
  didRevote: boolean;
  lastEliminatedId: string | null;
  voteCounts: Record<string, number>;
  winner: Winner | null;
  scores: Record<string, number>;
  guess: string;
  guessWrong: boolean;
  rulesOpen: boolean;
  abortOpen: boolean;
  mode: PlayMode;
  selfId: string | null;
  roomCode: string | null;
  myName: string;
  myWord: string;
  readyIds: string[];
  pairHidden: boolean;
  joinCode: string;
  hostId: string | null;
  joinIntent: "create" | "join";
  hostPlays: boolean;
};

type Actions = {
  setLang: (lang: Lang) => void;
  setName: (index: number, name: string) => void;
  addPlayer: () => void;
  removePlayer: (index: number) => void;
  setUndercover: (n: number, total?: number) => void;
  setMrWhite: (n: number, total?: number) => void;
  toggleCategory: (c: Category) => void;
  setCustom: (field: "civilian" | "undercover", value: string) => void;
  setUseCustom: (v: boolean) => void;
  setSecretVote: (v: boolean) => void;
  setGuess: (v: string) => void;
  setRulesOpen: (v: boolean) => void;
  setAbortOpen: (v: boolean) => void;
  goHome: () => void;
  goSetup: () => void;
  startGame: (opts?: { newPair?: boolean }) => boolean;
  confirmIdentity: () => void;
  memorized: () => void;
  beginTable: () => void;
  submitHint: (text: string) => void;
  startVote: () => void;
  confirmVoter: () => void;
  pickVote: (targetId: string) => void;
  castVote: () => void;
  resolveVotes: () => void;
  beginRevote: () => void;
  skipTie: () => void;
  continueAfterElim: () => void;
  submitWhiteGuess: () => void;
  rematch: () => void;
  resetScores: () => void;
  generatePair: () => boolean;
  setPairHidden: (v: boolean) => void;
  setMyName: (v: string) => void;
  setJoinCode: (v: string) => void;
  setJoinIntent: (v: "create" | "join") => void;
  goJoin: () => void;
  goCreate: () => void;
  createSalon: () => void;
  joinSalon: () => boolean;
  leaveRoom: () => void;
  setSelfId: (id: string) => void;
  setHostId: (id: string | null) => void;
  applySnap: (snap: PublicSnap) => void;
  setMyWord: (word: string) => void;
  markReady: (id: string) => void;
  recordBallot: (voterId: string, targetId: string) => void;
  startOnlineGame: (seats: { id: string; name: string }[], opts?: { newPair?: boolean }) => boolean;
  startNetVote: () => void;
  setHostPlays: (v: boolean) => void;
};

const initial: GameState = {
  version: 1,
  lang: "fr",
  setupNames: [...DEFAULT_NAMES],
  undercoverCount: 1,
  mrWhiteCount: 1,
  categories: [...ALL_CATEGORIES],
  customCivilian: "",
  customUndercover: "",
  useCustom: false,
  secretVote: true,
  phase: "home",
  dealIndex: 0,
  players: [],
  civilianWord: "",
  undercoverWord: "",
  pairId: null,
  usedPairIds: [],
  round: 1,
  speechLap: 1,
  speakerId: null,
  spokenIds: [],
  hints: [],
  voterId: null,
  voterQueue: [],
  ballots: {},
  pendingVote: null,
  tiedIds: null,
  didRevote: false,
  lastEliminatedId: null,
  voteCounts: {},
  winner: null,
  scores: {},
  guess: "",
  guessWrong: false,
  rulesOpen: false,
  abortOpen: false,
  mode: "local",
  selfId: null,
  roomCode: null,
  myName: "",
  myWord: "",
  readyIds: [],
  pairHidden: false,
  joinCode: "",
  hostId: null,
  joinIntent: "create",
  hostPlays: false,
};

function filledNames(names: string[]): string[] {
  return names.map((n) => n.trim()).filter(Boolean);
}

function roleFields(n: number, u: number, w: number) {
  const r = clampRoles(n, u, w);
  return { undercoverCount: r.undercover, mrWhiteCount: r.mrWhite };
}

function suggestedFields(n: number) {
  const r = suggestedRoles(n);
  return { undercoverCount: r.undercover, mrWhiteCount: r.mrWhite };
}

function playerCount(names: string[]) {
  return Math.max(MIN_PLAYERS, filledNames(names).length || names.length);
}

function persistable(s: GameState): GameState {
  const online = s.mode !== "local";
  return {
    version: s.version,
    lang: s.lang,
    setupNames: s.setupNames,
    undercoverCount: s.undercoverCount,
    mrWhiteCount: s.mrWhiteCount,
    categories: s.categories,
    customCivilian: s.customCivilian,
    customUndercover: s.customUndercover,
    useCustom: s.useCustom,
    secretVote: s.secretVote,
    phase: online || s.phase === "join" || s.phase === "lobby" ? "home" : s.phase,
    dealIndex: online ? 0 : s.dealIndex,
    players: online ? [] : s.players,
    civilianWord: online ? "" : s.civilianWord,
    undercoverWord: online ? "" : s.undercoverWord,
    pairId: s.pairId,
    usedPairIds: s.usedPairIds,
    round: online ? 1 : s.round,
    speechLap: online ? 1 : s.speechLap,
    speakerId: online ? null : s.speakerId,
    spokenIds: online ? [] : s.spokenIds,
    hints: online ? [] : s.hints,
    voterId: online ? null : s.voterId,
    voterQueue: online ? [] : s.voterQueue,
    ballots: online ? {} : s.ballots,
    pendingVote: null,
    tiedIds: online ? null : s.tiedIds,
    didRevote: false,
    lastEliminatedId: online ? null : s.lastEliminatedId,
    voteCounts: online ? {} : s.voteCounts,
    winner: online ? null : s.winner,
    scores: s.scores,
    guess: "",
    guessWrong: false,
    rulesOpen: false,
    abortOpen: false,
    mode: "local",
    selfId: null,
    roomCode: null,
    myName: s.myName,
    myWord: "",
    readyIds: [],
    pairHidden: s.pairHidden,
    joinCode: "",
    hostId: null,
    joinIntent: "create",
    hostPlays: s.hostPlays,
  };
}

function takePair(s: GameState, forceNew: boolean) {
  let civilianWord = forceNew ? "" : s.customCivilian.trim();
  let undercoverWord = forceNew ? "" : s.customUndercover.trim();
  let pairId: string | null = forceNew ? null : s.pairId;
  let usedPairIds = s.usedPairIds;
  if (!civilianWord || !undercoverWord) {
    const pair = pickPair(s.lang, s.categories, s.usedPairIds);
    if (!pair) return null;
    civilianWord = pair.civilian;
    undercoverWord = pair.undercover;
    pairId = pair.id;
    usedPairIds = [...s.usedPairIds, pair.id].slice(-200);
  }
  return { civilianWord, undercoverWord, pairId, usedPairIds };
}

export const useGame = create<GameState & Actions>()(
  persist(
    (set, get) => ({
      ...initial,

      setLang: (lang) => set({ lang }),
      setName: (index, name) =>
        set((s) => {
          const setupNames = s.setupNames.map((n, i) => (i === index ? name : n));
          return {
            setupNames,
            ...roleFields(playerCount(setupNames), s.undercoverCount, s.mrWhiteCount),
          };
        }),
      addPlayer: () =>
        set((s) => {
          if (s.setupNames.length >= MAX_PLAYERS) return s;
          const setupNames = [...s.setupNames, ""];
          return {
            setupNames,
            ...roleFields(playerCount(setupNames), s.undercoverCount, s.mrWhiteCount),
          };
        }),
      removePlayer: (index) =>
        set((s) => {
          if (s.setupNames.length <= MIN_PLAYERS) return s;
          const setupNames = s.setupNames.filter((_, i) => i !== index);
          return { setupNames, ...suggestedFields(playerCount(setupNames)) };
        }),
      setUndercover: (n, total) =>
        set((s) => roleFields(total ?? playerCount(s.setupNames), n, s.mrWhiteCount)),
      setMrWhite: (n, total) =>
        set((s) => roleFields(total ?? playerCount(s.setupNames), s.undercoverCount, n)),
      toggleCategory: (c) =>
        set((s) => {
          const has = s.categories.includes(c);
          if (has && s.categories.length === 1) return s;
          return {
            categories: has ? s.categories.filter((x) => x !== c) : [...s.categories, c],
          };
        }),
      setCustom: (field, value) =>
        set(field === "civilian" ? { customCivilian: value } : { customUndercover: value }),
      setUseCustom: (v) => set({ useCustom: v }),
      setSecretVote: (v) => set({ secretVote: v }),
      setGuess: (v) => set({ guess: v, guessWrong: false }),
      setRulesOpen: (v) => set({ rulesOpen: v }),
      setAbortOpen: (v) => set({ abortOpen: v }),
      goHome: () =>
        set({
          phase: "home",
          abortOpen: false,
          rulesOpen: false,
          players: [],
          winner: null,
          mode: "local",
          roomCode: null,
          selfId: null,
          myWord: "",
          readyIds: [],
          hostId: null,
        }),
      goSetup: () =>
        set({ phase: "setup", abortOpen: false, mode: "local", roomCode: null, hostId: null }),

      startGame: (opts) => {
        const s = get();
        const names = filledNames(s.setupNames);
        if (names.length < MIN_PLAYERS) return false;
        const roles = clampRoles(names.length, s.undercoverCount, s.mrWhiteCount);
        const pair = takePair(s, Boolean(opts?.newPair));
        if (!pair) return false;
        const { civilianWord, undercoverWord, pairId, usedPairIds } = pair;
        const players = dealPlayers(
          names.map((name) => ({ name })),
          roles.undercover,
          roles.mrWhite,
          civilianWord,
          undercoverWord,
        );
        set({
          undercoverCount: roles.undercover,
          mrWhiteCount: roles.mrWhite,
          players,
          civilianWord,
          undercoverWord,
          pairId,
          usedPairIds,
          customCivilian: civilianWord,
          customUndercover: undercoverWord,
          dealIndex: 0,
          phase: "dealHandoff",
          round: 1,
          speechLap: 1,
          speakerId: null,
          spokenIds: [],
          hints: [],
          voterId: null,
          voterQueue: [],
          ballots: {},
          pendingVote: null,
          tiedIds: null,
          didRevote: false,
          lastEliminatedId: null,
          voteCounts: {},
          winner: null,
          guess: "",
          guessWrong: false,
          abortOpen: false,
          readyIds: [],
          myWord: "",
          mode: "local",
        });
        return true;
      },

      confirmIdentity: () => set({ phase: "dealReveal" }),

      memorized: () =>
        set((s) => ({
          phase: "dealHandoff",
          dealIndex: s.dealIndex + 1,
        })),

      beginTable: () =>
        set((s) => ({
          phase: "table",
          speakerId: nextAliveId(s.players, null),
          spokenIds: [],
          speechLap: 1,
        })),

      submitHint: (text) =>
        set((s) => {
          if (!s.speakerId) return s;
          const hintText = text.trim();
          const hints = hintText
            ? [...s.hints, { round: s.round, playerId: s.speakerId, text: hintText }]
            : s.hints;
          const spokenIds = [...s.spokenIds, s.speakerId];
          const alive = s.players.filter((p) => p.alive);
          const allSpoken = alive.every((p) => spokenIds.includes(p.id));
          if (allSpoken && s.speechLap < speechLapsFor(s.players.length)) {
            return {
              hints,
              spokenIds: [],
              speechLap: s.speechLap + 1,
              speakerId: nextAliveId(s.players, s.speakerId),
            };
          }
          return {
            hints,
            spokenIds,
            speakerId: allSpoken ? s.speakerId : nextAliveId(s.players, s.speakerId),
          };
        }),

      startVote: () =>
        set((s) => {
          if (s.mode !== "local") {
            return {
              voterQueue: [],
              voterId: null,
              ballots: {},
              pendingVote: null,
              voteCounts: {},
              tiedIds: null,
              didRevote: false,
              phase: "votePick" as const,
            };
          }
          const queue = s.players.filter((p) => p.alive).map((p) => p.id);
          return {
            voterQueue: queue,
            voterId: queue[0] ?? null,
            ballots: {},
            pendingVote: null,
            voteCounts: {},
            tiedIds: null,
            didRevote: false,
            phase: s.secretVote ? "voteHandoff" : "votePick",
          };
        }),

      confirmVoter: () => set({ phase: "votePick" }),

      pickVote: (targetId) => set({ pendingVote: targetId }),

      castVote: () =>
        set((s) => {
          if (!s.voterId || !s.pendingVote) return s;
          const ballots = { ...s.ballots, [s.voterId]: s.pendingVote };
          const rest = s.voterQueue.filter((id) => id !== s.voterId);
          const nextVoter = rest[0] ?? null;
          if (!nextVoter) {
            const { counts, topIds } = tallyVotes(ballots);
            return {
              ballots,
              voterQueue: rest,
              voterId: null,
              pendingVote: null,
              phase: "voteResult" as const,
              voteCounts: counts,
              tiedIds: topIds.length === 1 ? null : topIds,
            };
          }
          return {
            ballots,
            voterQueue: rest,
            voterId: nextVoter,
            pendingVote: null,
            phase: s.secretVote ? ("voteHandoff" as const) : ("votePick" as const),
          };
        }),

      resolveVotes: () =>
        set((s) => {
          const { topIds, counts } = tallyVotes(s.ballots);
          if (topIds.length !== 1) {
            return { voteCounts: counts, tiedIds: topIds, phase: "voteResult" as const };
          }
          const eliminatedId = topIds[0]!;
          const players = s.players.map((p) =>
            p.id === eliminatedId ? { ...p, alive: false } : p,
          );
          return {
            players,
            lastEliminatedId: eliminatedId,
            voteCounts: counts,
            tiedIds: null,
            phase: "eliminated" as const,
            winner: null,
          };
        }),

      beginRevote: () =>
        set((s) => {
          if (s.mode !== "local") {
            return {
              voterQueue: [],
              voterId: null,
              ballots: {},
              pendingVote: null,
              didRevote: true,
              phase: "votePick" as const,
            };
          }
          const queue = s.players.filter((p) => p.alive).map((p) => p.id);
          return {
            voterQueue: queue,
            voterId: queue[0] ?? null,
            ballots: {},
            pendingVote: null,
            didRevote: true,
            phase: s.secretVote ? "voteHandoff" : "votePick",
          };
        }),

      skipTie: () =>
        set((s) => ({
          phase: "table",
          round: s.round + 1,
          speechLap: 1,
          spokenIds: [],
          speakerId: nextAliveId(s.players, s.speakerId),
          tiedIds: null,
          didRevote: false,
          ballots: {},
          pendingVote: null,
        })),

      continueAfterElim: () =>
        set((s) => {
          const victim = s.players.find((p) => p.id === s.lastEliminatedId);
          if (victim?.role === "mrwhite") {
            return { phase: "mrWhiteGuess", guess: "", guessWrong: false };
          }
          const winner = evaluateWinner(s.players);
          if (winner) {
            return {
              winner,
              scores: awardScores(s.players, winner, s.scores),
              phase: "gameover",
            };
          }
          return {
            phase: "table",
            round: s.round + 1,
            speechLap: 1,
            spokenIds: [],
            speakerId: nextAliveId(s.players, s.lastEliminatedId),
            ballots: {},
            pendingVote: null,
            tiedIds: null,
            didRevote: false,
          };
        }),

      submitWhiteGuess: () =>
        set((s) => {
          if (wordsMatch(s.guess, s.civilianWord)) {
            const winner: Winner = "mrwhite";
            return {
              winner,
              guessWrong: false,
              scores: awardScores(s.players, winner, s.scores),
              phase: "gameover" as const,
            };
          }
          const winner = evaluateWinner(s.players);
          if (winner) {
            return {
              winner,
              guessWrong: true,
              scores: awardScores(s.players, winner, s.scores),
              phase: "gameover" as const,
            };
          }
          return {
            guessWrong: true,
            phase: "table" as const,
            round: s.round + 1,
            speechLap: 1,
            spokenIds: [],
            speakerId: nextAliveId(s.players, s.lastEliminatedId),
            guess: "",
          };
        }),

      rematch: () => {
        if (get().mode === "local") get().startGame({ newPair: true });
      },

      resetScores: () => set({ scores: {} }),

      generatePair: () => {
        const s = get();
        const pair = pickPair(s.lang, s.categories, s.usedPairIds);
        if (!pair) return false;
        set({
          useCustom: true,
          customCivilian: pair.civilian,
          customUndercover: pair.undercover,
          pairId: pair.id,
          usedPairIds: [...s.usedPairIds, pair.id].slice(-200),
          pairHidden: false,
        });
        return true;
      },

      setPairHidden: (v) => set({ pairHidden: v }),
      setMyName: (v) => set({ myName: v }),
      setJoinCode: (v) => set({ joinCode: normalizeRoomCode(v) }),
      setJoinIntent: (v) => set({ joinIntent: v }),
      goCreate: () =>
        set({ phase: "join", joinCode: "", joinIntent: "create", abortOpen: false }),
      goJoin: () => set({ phase: "join", joinIntent: "join", abortOpen: false }),
      createSalon: () => {
        const s = get();
        const name = s.myName.trim();
        if (!name) return;
        set({
          mode: "host",
          roomCode: makeRoomCode(),
          phase: "lobby",
          players: [],
          winner: null,
          abortOpen: false,
        });
      },
      joinSalon: () => {
        const s = get();
        const name = s.myName.trim();
        const code = normalizeRoomCode(s.joinCode);
        if (!name || code.length < 4) return false;
        set({
          mode: "guest",
          roomCode: code,
          joinCode: code,
          phase: "lobby",
          abortOpen: false,
        });
        return true;
      },
      leaveRoom: () =>
        set({
          mode: "local",
          roomCode: null,
          selfId: null,
          hostId: null,
          phase: "home",
          myWord: "",
          readyIds: [],
          players: [],
          abortOpen: false,
        }),
      setSelfId: (id) => set({ selfId: id }),
      setHostId: (id) => set({ hostId: id }),
      setMyWord: (word) => set({ myWord: word }),
      applySnap: (snap) =>
        set((s) => ({
          phase: snap.phase,
          players: snap.players.map((p) => {
            const prev = s.players.find((x) => x.id === p.id);
            return {
              id: p.id,
              name: p.name,
              alive: p.alive,
              role: p.role ?? prev?.role ?? "civilian",
              word: prev?.word ?? (p.id === s.selfId ? s.myWord : ""),
            };
          }),
          round: snap.round,
          speakerId: snap.speakerId,
          spokenIds: snap.spokenIds,
          hints: snap.hints,
          voteCounts: snap.voteCounts,
          tiedIds: snap.tiedIds,
          lastEliminatedId: snap.lastEliminatedId,
          winner: snap.winner,
          civilianWord: snap.civilianWord || s.civilianWord,
          undercoverWord: snap.undercoverWord || s.undercoverWord,
          guessWrong: snap.guessWrong,
          readyIds: snap.readyIds,
          hostId: snap.hostId || s.hostId,
          ballots: Object.fromEntries(snap.votedIds.map((id) => [id, s.ballots[id] ?? "_"])),
        })),
      markReady: (id) =>
        set((s) => {
          const readyIds = s.readyIds.includes(id) ? s.readyIds : [...s.readyIds, id];
          const all = s.players.length > 0 && s.players.every((p) => readyIds.includes(p.id));
          if (all) {
            return {
              readyIds,
              phase: "table" as const,
              speakerId: nextAliveId(s.players, null),
              spokenIds: [],
              speechLap: 1,
            };
          }
          return { readyIds };
        }),
      recordBallot: (voterId, targetId) =>
        set((s) => {
          const ballots = { ...s.ballots, [voterId]: targetId };
          const alive = s.players.filter((p) => p.alive);
          const allIn = alive.every((p) => ballots[p.id]);
          if (allIn) {
            const { counts, topIds } = tallyVotes(ballots);
            return {
              ballots,
              pendingVote: null,
              phase: "voteResult" as const,
              voteCounts: counts,
              tiedIds: topIds.length === 1 ? null : topIds,
            };
          }
          return { ballots, pendingVote: null };
        }),
      startOnlineGame: (seats, opts) => {
        const s = get();
        if (seats.length < MIN_PLAYERS) return false;
        const roles = clampRoles(seats.length, s.undercoverCount, s.mrWhiteCount);
        const pair = takePair(s, Boolean(opts?.newPair));
        if (!pair) return false;
        const { civilianWord, undercoverWord, pairId, usedPairIds } = pair;
        const players = dealPlayers(
          seats,
          roles.undercover,
          roles.mrWhite,
          civilianWord,
          undercoverWord,
        );
        const me = players.find((p) => p.id === s.selfId);
        set({
          undercoverCount: roles.undercover,
          mrWhiteCount: roles.mrWhite,
          players,
          civilianWord,
          undercoverWord,
          pairId,
          usedPairIds,
          customCivilian: civilianWord,
          customUndercover: undercoverWord,
          myWord: me?.word ?? "",
          phase: "word",
          round: 1,
          speechLap: 1,
          speakerId: null,
          spokenIds: [],
          hints: [],
          readyIds: [],
          ballots: {},
          pendingVote: null,
          tiedIds: null,
          didRevote: false,
          lastEliminatedId: null,
          voteCounts: {},
          winner: null,
          guess: "",
          guessWrong: false,
        });
        return true;
      },
      startNetVote: () =>
        set({
          phase: "votePick",
          ballots: {},
          pendingVote: null,
          voteCounts: {},
          tiedIds: null,
          didRevote: false,
        }),
      setHostPlays: (v) => set({ hostPlays: v }),
    }),
    {
      name: "undercover-save-v1",
      version: 2,
      skipHydration: true,
      partialize: (s) => persistable(s),
    },
  ),
);
