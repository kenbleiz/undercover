export type Lang = "fr" | "en";

export type Category =
  | "everyday"
  | "food"
  | "places"
  | "nature"
  | "objects"
  | "culture"
  | "manga";

export type Role = "civilian" | "undercover" | "mrwhite";

export type Winner = "civilians" | "undercover" | "mrwhite";

export type Phase =
  | "home"
  | "join"
  | "lobby"
  | "setup"
  | "dealHandoff"
  | "dealReveal"
  | "word"
  | "table"
  | "voteHandoff"
  | "votePick"
  | "voteResult"
  | "eliminated"
  | "mrWhiteGuess"
  | "gameover";

export type PlayMode = "local" | "host" | "guest";

export type WordPair = {
  id: string;
  civilian: string;
  undercover: string;
  category: Category;
};

export type Player = {
  id: string;
  name: string;
  role: Role;
  word: string;
  alive: boolean;
};

export type Hint = {
  round: number;
  playerId: string;
  text: string;
};

export const ALL_CATEGORIES: Category[] = [
  "everyday",
  "food",
  "places",
  "nature",
  "objects",
  "culture",
  "manga",
];

export const MAX_PLAYERS = 16;
export const MAX_ONLINE = 8;
export const MIN_PLAYERS = 3;
