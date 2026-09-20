import { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PairEditor } from "@/components/game/pair-editor";
import { Display, Kicker } from "@/components/game/shell";
import { useNetPlay } from "@/components/game/net-app";
import { initials, maxUndercover } from "@/lib/undercover/engine";
import { categoryLabel, t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { ALL_CATEGORIES, MAX_ONLINE, MIN_PLAYERS } from "@/lib/undercover/types";
import { cn } from "@/lib/utils";

function Stepper({
  label,
  value,
  onDec,
  onInc,
  decDisabled,
  incDisabled,
}: {
  label: string;
  value: number;
  onDec: () => void;
  onInc: () => void;
  decDisabled?: boolean;
  incDisabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-elevated px-4 py-2.5 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
      <span className="text-sm text-fg">{label}</span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={decDisabled}
          onClick={onDec}
          className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg disabled:opacity-30"
        >
          −
        </button>
        <span className="w-6 text-center font-medium tabular-nums">{value}</span>
        <button
          type="button"
          disabled={incDisabled}
          onClick={onInc}
          className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function LobbyScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const [copied, setCopied] = useState(false);
  const connected = net.peers.filter((p) => p.connectionState === "connected");
  const n = (s.hostPlays ? 1 : 0) + connected.length;
  const civilians = Math.max(0, n - s.undercoverCount - s.mrWhiteCount);
  const canStart = net.isHost && n >= MIN_PLAYERS && n <= MAX_ONLINE;

  useEffect(() => {
    if (!net.isHost) return;
    const st = useGame.getState();
    st.setUndercover(st.undercoverCount, n);
    st.setMrWhite(st.mrWhiteCount, n);
  }, [n, net.isHost]);

  const copy = async () => {
    if (!s.roomCode) return;
    try {
      await navigator.clipboard.writeText(s.roomCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto pb-2">
        <header className="flex items-center justify-between">
          <Kicker>{net.joined ? x.waitingPlayers : x.connecting}</Kicker>
          <Button variant="ghost" onClick={s.leaveRoom}>
            {x.back}
          </Button>
        </header>

        <p className="mt-2 text-sm text-muted">{net.isHost ? x.shareCode : x.waitingHost}</p>
        <button type="button" onClick={copy} className="mt-3 flex w-full items-center justify-between rounded-2xl bg-elevated px-5 py-4 shadow-[0_0_0_1px_rgba(238,234,228,0.12)]">
          <Display className="text-5xl tracking-[0.18em]">{s.roomCode}</Display>
          <span className="flex items-center gap-2 text-sm text-muted">
            <Copy className="size-4" />
            {copied ? x.copied : x.copyCode}
          </span>
        </button>

        <ul className="mt-6 flex flex-col gap-1.5">
          <li className="flex items-center gap-3 rounded-xl bg-elevated px-3 py-2">
            <span className="flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted">
              {initials(s.myName || "?")}
            </span>
            <span className="flex-1 text-sm">
              {s.myName}{" "}
              <span className="text-subtle">({x.you})</span>
            </span>
            {net.isHost ? <span className="text-xs text-muted">{x.hostBadge}</span> : null}
          </li>
          {net.peers.map((p) => (
            <li key={p.id} className="flex items-center gap-3 rounded-xl px-3 py-2">
              <span className="flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted">
                {initials(p.name || "?")}
              </span>
              <span className="flex-1 text-sm">{p.name || "…"}</span>
              <span className="text-xs text-subtle">
                {p.id === s.hostId ? `${x.hostBadge} · ` : ""}
                {p.connectionState === "connected"
                  ? x.alive
                  : p.connectionState === "failed"
                    ? "—"
                    : x.connecting}
              </span>
            </li>
          ))}
        </ul>

        {net.isHost ? (
          <>
            <button
              type="button"
              onClick={() => s.setHostPlays(!s.hostPlays)}
              className="mt-6 flex w-full items-center justify-between gap-3 rounded-xl bg-elevated px-4 py-3 text-left shadow-[0_0_0_1px_rgba(238,234,228,0.1)]"
            >
              <span className="min-w-0">
                <span className="block text-sm">{x.hostPlays}</span>
                <span className="mt-0.5 block text-xs text-subtle">
                  {s.hostPlays ? x.hostPlayingHint : x.hostSpectateHint}
                </span>
              </span>
              <span
                className={cn(
                  "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                  s.hostPlays ? "bg-accent" : "bg-surface shadow-[0_0_0_1px_rgba(238,234,228,0.14)]",
                )}
              >
                <span
                  className={cn(
                    "absolute top-1 size-5 rounded-full transition-transform",
                    s.hostPlays ? "translate-x-6 bg-accent-fg" : "translate-x-1 bg-fg",
                  )}
                />
              </span>
            </button>

            <div className="mt-8">
              <Kicker>{x.roles}</Kicker>
              <div className="mt-3 flex flex-col gap-2">
                <Stepper
                  label={x.undercovers}
                  value={s.undercoverCount}
                  onDec={() => s.setUndercover(s.undercoverCount - 1, n)}
                  onInc={() => s.setUndercover(s.undercoverCount + 1, n)}
                  decDisabled={s.undercoverCount <= 1}
                  incDisabled={s.undercoverCount >= maxUndercover(n, s.mrWhiteCount)}
                />
                <Stepper
                  label={x.mrWhite}
                  value={s.mrWhiteCount}
                  onDec={() => s.setMrWhite(s.mrWhiteCount - 1, n)}
                  onInc={() => s.setMrWhite(s.mrWhiteCount + 1, n)}
                  decDisabled={s.mrWhiteCount <= 0}
                  incDisabled={s.mrWhiteCount >= (n <= 4 ? 0 : 2)}
                />
                <div className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted">
                  <span>{x.civilians}</span>
                  <span className="font-medium tabular-nums text-fg">{civilians}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Kicker>{x.categories}</Kicker>
              <div className="mt-3 flex flex-wrap gap-2">
                {ALL_CATEGORIES.map((c) => {
                  const on = s.categories.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => s.toggleCategory(c)}
                      className={cn(
                        "h-10 rounded-full px-3.5 text-sm",
                        on ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
                      )}
                    >
                      {categoryLabel(s.lang, c)}
                    </button>
                  );
                })}
              </div>
            </div>

            <PairEditor className="mt-8" />
          </>
        ) : (
          <p className="mt-10 text-center text-sm text-muted">{x.waitingHost}</p>
        )}
      </div>

      {net.isHost ? (
        <div className="relative z-10 shrink-0 border-t border-line bg-bg pt-3">
          {!canStart ? (
            <p className="mb-3 text-center text-sm text-muted">
              {s.hostPlays ? x.needOnline : x.needOnlineSpectate}
            </p>
          ) : n === 3 ? (
            <p className="mb-3 text-center text-sm text-muted">{x.trioHint}</p>
          ) : null}
          <Button
            size="lg"
            className="w-full"
            disabled={!canStart}
            onClick={() => net.startHostGame()}
          >
            {x.startSalon}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
