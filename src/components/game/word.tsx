import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNetPlay } from "@/components/game/net-app";
import { Display, Kicker } from "@/components/game/shell";
import { initials } from "@/lib/undercover/engine";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function WordScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const me = s.players.find((p) => p.id === s.selfId);
  const directing = net.isHost && !me;
  const word = s.myWord || me?.word || "";
  const isWhite = Boolean(me) && word.length === 0;
  const already = Boolean(s.selfId && s.readyIds.includes(s.selfId));
  const readyN = s.readyIds.length;
  const total = Math.max(s.players.length, 1);

  const onReady = () => {
    if (!s.selfId || already || directing) return;
    if (net.isHost) {
      s.markReady(s.selfId);
      return;
    }
    net.sendToHost({ t: "ready" });
    useGame.setState((prev) => ({
      readyIds: prev.readyIds.includes(s.selfId!) ? prev.readyIds : [...prev.readyIds, s.selfId!],
    }));
  };

  if (directing) {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <header className="flex items-center justify-between">
          <Kicker>{x.directing}</Kicker>
          <span className="text-xs text-muted tabular-nums">
            {readyN}/{total} {x.playersReady}
          </span>
        </header>
        <div className="mt-6 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
          <Kicker>{x.theWords}</Kicker>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted">{x.civilWord}</p>
              <p className="mt-1 font-display text-2xl tracking-tight">{s.civilianWord}</p>
            </div>
            <div>
              <p className="text-xs text-muted">{x.underWord}</p>
              <p className="mt-1 font-display text-2xl tracking-tight">{s.undercoverWord}</p>
            </div>
          </div>
        </div>
        <ul className="mt-6 min-h-0 flex-1 overflow-y-auto">
          {s.players.map((p) => {
            const ready = s.readyIds.includes(p.id);
            return (
              <li key={p.id} className="flex items-center gap-3 rounded-xl px-1 py-2">
                <span className="flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted">
                  {initials(p.name)}
                </span>
                <span className="flex-1 text-sm">{p.name}</span>
                <span className={cn("text-xs", ready ? "text-ok" : "text-subtle")}>
                  {ready ? x.memorized : x.waiting}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="py-3 text-center text-sm text-muted">{x.waitOthers}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between">
        <Kicker>{s.myName || me?.name || x.yourWord}</Kicker>
        <span className="text-xs text-muted tabular-nums">
          {readyN}/{total}
        </span>
      </header>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-sm text-muted">{isWhite ? x.noWord : x.yourWord}</p>
        <Display className="mt-4 uppercase">{isWhite ? "Mr. White" : word || "…"}</Display>
        {isWhite ? (
          <p className="mt-5 max-w-[28ch] text-pretty text-base leading-relaxed text-muted">
            {x.youAreWhite}
          </p>
        ) : (
          <p className="mt-5 text-sm text-subtle">{x.hideNow}</p>
        )}
      </div>
      {already ? (
        <p className="mb-3 text-center text-sm text-muted">{x.waitOthers}</p>
      ) : null}
      <Button size="lg" className="w-full" disabled={already} onClick={onReady}>
        <EyeOff className="size-4" />
        {x.memorized}
      </Button>
    </div>
  );
}
