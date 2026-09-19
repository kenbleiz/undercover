import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/game/shell";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";

export function RulesOverlay() {
  const lang = useGame((s) => s.lang);
  const open = useGame((s) => s.rulesOpen);
  const setRulesOpen = useGame((s) => s.setRulesOpen);
  const x = t(lang);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex justify-center bg-bg/95">
      <div className="flex h-full w-full max-w-md flex-col px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between">
          <Kicker>{x.rulesTitle}</Kicker>
          <button
            type="button"
            onClick={() => setRulesOpen(false)}
            className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg"
            aria-label={x.close}
          >
            <X className="size-4" />
          </button>
        </div>
        <h2 className="mt-3 font-display text-4xl tracking-tight">{x.rulesTitle}</h2>
        <ol className="mt-8 flex flex-col gap-5">
          {x.how.map((line, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-display text-2xl italic text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-pretty text-base leading-relaxed text-fg">{line}</p>
            </li>
          ))}
        </ol>
        <Button className="mt-auto w-full" size="lg" onClick={() => setRulesOpen(false)}>
          {x.close}
        </Button>
      </div>
    </div>
  );
}

export function AbortOverlay() {
  const lang = useGame((s) => s.lang);
  const open = useGame((s) => s.abortOpen);
  const setAbortOpen = useGame((s) => s.setAbortOpen);
  const goHome = useGame((s) => s.goHome);
  const leaveRoom = useGame((s) => s.leaveRoom);
  const mode = useGame((s) => s.mode);
  const x = t(lang);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-bg/80 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mb-2 w-full max-w-md rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(238,234,228,0.12)]">
        <p className="font-display text-2xl tracking-tight">{x.abortConfirm}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => setAbortOpen(false)}>
            {x.abortNo}
          </Button>
          <Button variant="danger" onClick={mode === "local" ? goHome : leaveRoom}>
            {x.abortYes}
          </Button>
        </div>
      </div>
    </div>
  );
}
