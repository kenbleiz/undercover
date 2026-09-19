import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNetPlay } from "@/components/game/net-app";
import { Kicker } from "@/components/game/shell";
import { initials, speechLapsFor } from "@/lib/undercover/engine";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function TableScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const [draft, setDraft] = useState("");
  const alive = s.players.filter((p) => p.alive);
  const speaker = s.players.find((p) => p.id === s.speakerId);
  const allSpoken = alive.every((p) => s.spokenIds.includes(p.id));
  const lapsNeeded = speechLapsFor(s.players.length);
  const readyToVote = allSpoken && s.speechLap >= lapsNeeded;
  const roundHints = s.hints.filter((h) => h.round === s.round);
  const myTurn = !net.isNet || s.speakerId === s.selfId;
  const canAdvance = !net.isNet || net.isHost;
  const directing = net.isHost && !s.players.some((p) => p.id === s.selfId);

  const giveHint = (text: string) => {
    if (net.isGuest) {
      net.sendToHost({ t: "hint", text });
      return;
    }
    s.submitHint(text);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
      <header className="flex items-center justify-between">
        <Kicker>
          {x.round} {s.round}
          {lapsNeeded > 1 ? ` · ${x.speechPass} ${s.speechLap}/${lapsNeeded}` : ""}
          {directing ? ` · ${x.hostBadge}` : ""}
        </Kicker>
        <button
          type="button"
          onClick={() => s.setAbortOpen(true)}
          className="text-sm text-subtle hover:text-fg"
        >
          {x.abort}
        </button>
      </header>

      {directing && s.civilianWord ? (
        <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-elevated px-4 py-3 text-sm shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
          <div>
            <p className="text-xs text-muted">{x.civilWord}</p>
            <p className="mt-0.5 font-display text-xl tracking-tight">{s.civilianWord}</p>
          </div>
          <div>
            <p className="text-xs text-muted">{x.underWord}</p>
            <p className="mt-0.5 font-display text-xl tracking-tight">{s.undercoverWord}</p>
          </div>
        </div>
      ) : null}

      <ul className="mt-5 flex flex-col gap-1.5">
        {s.players.map((p) => {
          const speaking = p.id === s.speakerId && p.alive && !allSpoken;
          const spoken = s.spokenIds.includes(p.id);
          return (
            <li
              key={p.id}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2",
                speaking && "bg-elevated shadow-[0_0_0_1px_rgba(238,234,228,0.14)]",
                !p.alive && "opacity-40",
              )}
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium tracking-wide text-muted">
                {initials(p.name)}
              </span>
              <span className={cn("flex-1 text-sm", !p.alive && "line-through")}>{p.name}</span>
              <span className="text-xs text-subtle">
                {!p.alive ? x.eliminated : speaking ? x.speaking : spoken ? x.spoken : x.waiting}
              </span>
            </li>
          );
        })}
      </ul>

      {roundHints.length > 0 ? (
        <div className="mt-6">
          <Kicker>{x.hints}</Kicker>
          <ul className="mt-3 flex flex-col gap-2">
            {roundHints.map((h, i) => {
              const p = s.players.find((pl) => pl.id === h.playerId);
              return (
                <li key={`${h.playerId}-${i}`} className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-muted">{p?.name}</span>
                  <span className="font-display text-xl italic tracking-tight">{h.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      </div>

      <div className="relative z-10 shrink-0 border-t border-line bg-bg pt-3">
        {readyToVote ? (
          canAdvance ? (
            <Button size="lg" className="w-full" onClick={s.startVote}>
              {x.goVote}
            </Button>
          ) : (
            <p className="py-3 text-center text-sm text-muted">{x.waitAdmin}</p>
          )
        ) : myTurn ? (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              giveHint(draft);
              setDraft("");
            }}
          >
            <p className="text-sm text-muted">
              {net.isNet ? x.yourTurn : speaker ? `${speaker.name} — ${x.yourHint}` : x.yourHint}
            </p>
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={x.hintPlaceholder}
              maxLength={24}
              autoCapitalize="off"
            />
            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="secondary" onClick={() => { giveHint(""); setDraft(""); }}>
                {x.saidAloud}
              </Button>
              <Button type="submit" disabled={!draft.trim()}>
                {x.sayHint}
              </Button>
            </div>
          </form>
        ) : (
          <p className="py-3 text-center text-sm text-muted">
            {x.theirTurn} {speaker?.name ?? "…"}
          </p>
        )}
      </div>
    </div>
  );
}
