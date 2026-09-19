import { useEffect } from "react";
import { DealScreen } from "@/components/game/deal";
import { EliminatedScreen, GameOverScreen, MrWhiteGuessScreen } from "@/components/game/end";
import { HomeScreen } from "@/components/game/home";
import { JoinScreen } from "@/components/game/join";
import { LobbyScreen } from "@/components/game/lobby";
import { NetSession } from "@/components/game/net-app";
import { AbortOverlay, RulesOverlay } from "@/components/game/overlays";
import { Screen, Shell } from "@/components/game/shell";
import { SetupScreen } from "@/components/game/setup";
import { TableScreen } from "@/components/game/table";
import { VoteHandoffScreen, VotePickScreen, VoteResultScreen } from "@/components/game/vote";
import { WordScreen } from "@/components/game/word";
import { normalizeRoomCode } from "@/lib/undercover/engine";
import { useGame } from "@/lib/undercover/store";

function PhaseView() {
  const phase = useGame((s) => s.phase);
  switch (phase) {
    case "home":
      return (
        <Screen key="home">
          <HomeScreen />
        </Screen>
      );
    case "join":
      return (
        <Screen key="join">
          <JoinScreen />
        </Screen>
      );
    case "lobby":
      return (
        <Screen key="lobby">
          <LobbyScreen />
        </Screen>
      );
    case "setup":
      return (
        <Screen key="setup">
          <SetupScreen />
        </Screen>
      );
    case "word":
      return (
        <Screen key="word">
          <WordScreen />
        </Screen>
      );
    case "dealHandoff":
    case "dealReveal":
      return (
        <Screen key={`deal-${phase}`}>
          <DealScreen />
        </Screen>
      );
    case "table":
      return (
        <Screen key="table">
          <TableScreen />
        </Screen>
      );
    case "voteHandoff":
      return (
        <Screen key="vote-h">
          <VoteHandoffScreen />
        </Screen>
      );
    case "votePick":
      return (
        <Screen key="vote-p">
          <VotePickScreen />
        </Screen>
      );
    case "voteResult":
      return (
        <Screen key="vote-r">
          <VoteResultScreen />
        </Screen>
      );
    case "eliminated":
      return (
        <Screen key="out">
          <EliminatedScreen />
        </Screen>
      );
    case "mrWhiteGuess":
      return (
        <Screen key="white">
          <MrWhiteGuessScreen />
        </Screen>
      );
    case "gameover":
      return (
        <Screen key="over">
          <GameOverScreen />
        </Screen>
      );
    default:
      return (
        <Screen key="home">
          <HomeScreen />
        </Screen>
      );
  }
}

export function UndercoverApp() {
  const roomCode = useGame((s) => s.roomCode);
  const mode = useGame((s) => s.mode);
  const myName = useGame((s) => s.myName);

  useEffect(() => {
    void Promise.resolve(useGame.persist.rehydrate()).then(() => {
      const params = new URLSearchParams(window.location.search);
      const room = params.get("room");
      if (!room) return;
      const code = normalizeRoomCode(room);
      if (code.length < 4) return;
      const s = useGame.getState();
      if (s.phase === "home" || s.phase === "join") {
        useGame.setState({
          joinCode: code,
          joinIntent: "join",
          phase: "join",
        });
      }
    });
  }, []);

  const body = (
    <>
      <PhaseView />
      <RulesOverlay />
      <AbortOverlay />
    </>
  );

  return (
    <Shell>
      {roomCode ? (
        <NetSession key={roomCode} code={roomCode} name={myName || "?"} isHost={mode === "host"}>
          {body}
        </NetSession>
      ) : (
        body
      )}
    </Shell>
  );
}
