import type { Player, Role, Winner } from "./types";

export function fisherYates<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = arr[i];
    const b = arr[j];
    if (a === undefined || b === undefined) continue;
    arr[i] = b;
    arr[j] = a;
  }
  return arr;
}

export function suggestedRoles(n: number): {
  undercover: number;
  mrWhite: number;
} {
  if (n <= 4) return { undercover: 1, mrWhite: 0 };
  if (n <= 6) return { undercover: 1, mrWhite: 1 };
  if (n <= 9) return { undercover: 2, mrWhite: 1 };
  if (n <= 12) return { undercover: 3, mrWhite: 1 };
  if (n <= 14) return { undercover: 4, mrWhite: 1 };
  return { undercover: Math.max(4, Math.floor(n / 4)), mrWhite: 2 };
}

export function maxUndercover(n: number, mrWhite: number): number {
  // Keep civilians strictly above undercovers at deal time.
  return Math.max(1, Math.floor((n - mrWhite - 1) / 2));
}

export function clampRoles(
  n: number,
  undercover: number,
  mrWhite: number,
): { undercover: number; mrWhite: number } {
  const w = Math.max(0, Math.min(mrWhite, n <= 4 ? 0 : 2, Math.max(0, n - 3)));
  const maxU = maxUndercover(n, w);
  const minCivilians = n === 3 ? 2 : 2;
  const u = Math.max(1, Math.min(undercover, maxU, n - w - minCivilians));
  return { undercover: u, mrWhite: w };
}

export function isTrioTable(playerCount: number): boolean {
  return playerCount === 3;
}

export function speechLapsFor(playerCount: number): number {
  return isTrioTable(playerCount) ? 2 : 1;
}

export function dealPlayers(
  seats: { id?: string; name: string }[],
  undercoverCount: number,
  mrWhiteCount: number,
  civilianWord: string,
  undercoverWord: string,
): Player[] {
  const n = seats.length;
  const roles: Role[] = [
    ...Array<Role>(mrWhiteCount).fill("mrwhite"),
    ...Array<Role>(undercoverCount).fill("undercover"),
    ...Array<Role>(n - undercoverCount - mrWhiteCount).fill("civilian"),
  ];
  const shuffled = fisherYates(roles);
  return seats.map((seat, i) => {
    const role = shuffled[i] ?? "civilian";
    return {
      id: seat.id ?? `p-${i}-${Math.random().toString(36).slice(2, 8)}`,
      name: seat.name,
      role,
      word: role === "civilian" ? civilianWord : role === "undercover" ? undercoverWord : "",
      alive: true,
    };
  });
}

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function makeRoomCode(): string {
  let out = "";
  for (let i = 0; i < 4; i++) {
    out += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return out;
}

export function normalizeRoomCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
}

export function evaluateWinner(players: Player[]): Winner | null {
  const alive = players.filter((p) => p.alive);
  const C = alive.filter((p) => p.role === "civilian").length;
  const U = alive.filter((p) => p.role === "undercover").length;
  const W = alive.filter((p) => p.role === "mrwhite").length;
  if (U === 0 && W === 0) return "civilians";
  if (C === 0 && U === 0 && W > 0) return "mrwhite";
  if (C === 0 && U > 0) return "undercover";
  if (U > 0 && U >= C) return "undercover";
  return null;
}

export function normalizeWord(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/gi, "");
}

export function wordsMatch(guess: string, target: string): boolean {
  const a = normalizeWord(guess);
  const b = normalizeWord(target);
  return a.length > 0 && a === b;
}

export function tallyVotes(ballots: Record<string, string>): {
  counts: Record<string, number>;
  topIds: string[];
} {
  const counts: Record<string, number> = {};
  for (const target of Object.values(ballots)) {
    counts[target] = (counts[target] ?? 0) + 1;
  }
  let max = 0;
  for (const n of Object.values(counts)) max = Math.max(max, n);
  const topIds = Object.entries(counts)
    .filter(([, n]) => n === max && max > 0)
    .map(([id]) => id);
  return { counts, topIds };
}

export function nextAliveId(
  players: Player[],
  afterId: string | null,
): string | null {
  const alive = players.filter((p) => p.alive);
  if (alive.length === 0) return null;
  if (!afterId) {
    const pick = alive[Math.floor(Math.random() * alive.length)];
    return pick?.id ?? null;
  }
  const idx = players.findIndex((p) => p.id === afterId);
  for (let i = 1; i <= players.length; i++) {
    const p = players[(idx + i) % players.length];
    if (p?.alive) return p.id;
  }
  return alive[0]?.id ?? null;
}

export function awardScores(
  players: Player[],
  winner: Winner,
  scores: Record<string, number>,
): Record<string, number> {
  const next = { ...scores };
  const bump = (name: string, n: number) => {
    next[name] = (next[name] ?? 0) + n;
  };
  if (winner === "civilians") {
    for (const p of players.filter((x) => x.role === "civilian")) {
      bump(p.name, p.alive ? 2 : 1);
    }
  } else if (winner === "undercover") {
    for (const p of players.filter((x) => x.role === "undercover")) {
      bump(p.name, p.alive ? 5 : 3);
    }
  } else {
    for (const p of players.filter((x) => x.role === "mrwhite")) {
      bump(p.name, 6);
    }
  }
  return next;
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return (parts[0] ?? "?").slice(0, 2).toUpperCase();
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
