import type { Hint, Phase, Role, Winner } from "./types";

export type PublicPlayer = {
  id: string;
  name: string;
  alive: boolean;
  role?: Role;
};

export type PublicSnap = {
  phase: Phase;
  players: PublicPlayer[];
  round: number;
  speakerId: string | null;
  spokenIds: string[];
  hints: Hint[];
  votedIds: string[];
  voteCounts: Record<string, number>;
  tiedIds: string[] | null;
  lastEliminatedId: string | null;
  winner: Winner | null;
  civilianWord: string;
  undercoverWord: string;
  guessWrong: boolean;
  hostId: string;
  readyIds: string[];
};

export type NetMsg =
  | { t: "hello" }
  | { t: "welcome"; hostId: string }
  | { t: "snap"; state: PublicSnap }
  | { t: "card"; word: string }
  | { t: "hint"; text: string }
  | { t: "vote"; targetId: string }
  | { t: "ready" }
  | { t: "guess"; text: string }
  | { t: "full" };


export function isNetMsg(data: unknown): data is NetMsg {
  return Boolean(data && typeof data === "object" && "t" in data);
}
