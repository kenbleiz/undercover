import { useId } from "react";
import { Eye, EyeOff, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kicker } from "@/components/game/shell";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function PairEditor({
  title,
  hint,
  className,
}: {
  title?: string;
  hint?: string;
  className?: string;
}) {
  const s = useGame();
  const x = t(s.lang);
  const uid = useId();
  const filled = Boolean(s.customCivilian.trim() && s.customUndercover.trim());
  const hidden = s.pairHidden && filled;

  return (
    <div
      className={cn(
        "rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Kicker>{title ?? x.customDuo}</Kicker>
        {filled ? (
          <button
            type="button"
            onClick={() => s.setPairHidden(!s.pairHidden)}
            className="flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg"
            aria-label={s.pairHidden ? x.showPair : x.hidePair}
          >
            {s.pairHidden ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
          </button>
        ) : null}
      </div>

      {hidden ? (
        <p className="mt-3 text-sm text-muted">{x.hidePair}</p>
      ) : (
        <>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
            {hint ?? x.pairHint}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <label className="sr-only" htmlFor={`${uid}-civil`}>
              {x.customCivil}
            </label>
            <Input
              id={`${uid}-civil`}
              value={s.customCivilian}
              onChange={(e) => s.setCustom("civilian", e.target.value)}
              placeholder={x.customCivil}
              maxLength={32}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className="bg-surface"
            />
            <label className="sr-only" htmlFor={`${uid}-under`}>
              {x.customUnder}
            </label>
            <Input
              id={`${uid}-under`}
              value={s.customUndercover}
              onChange={(e) => s.setCustom("undercover", e.target.value)}
              placeholder={x.customUnder}
              maxLength={32}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className="bg-surface"
            />
          </div>
        </>
      )}

      <Button className="mt-4 w-full" variant="secondary" onClick={() => s.generatePair()}>
        <Shuffle className="size-4" />
        {x.generatePair}
      </Button>
    </div>
  );
}
