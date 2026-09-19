import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Display, Kicker } from "@/components/game/shell";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";

export function DealScreen() {
  const s = useGame();
  const x = t(s.lang);
  const done = s.dealIndex >= s.players.length;
  const player = s.players[s.dealIndex];
  const revealing = s.phase === "dealReveal" && player;

  if (done) {
    return (
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center">
          <Kicker>{x.allDealt}</Kicker>
          <Display className="mt-3 max-w-[12ch]">{x.putDown}</Display>
        </div>
        <Button size="lg" className="w-full" onClick={s.beginTable}>
          {x.startRound}
        </Button>
      </div>
    );
  }

  if (!player) return null;

  if (revealing) {
    const isWhite = player.role === "mrwhite";
    return (
      <div className="flex flex-1 flex-col">
        <Kicker>{player.name}</Kicker>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-sm text-muted">{isWhite ? x.noWord : x.yourWord}</p>
          <p className="mt-4 font-display text-5xl leading-none tracking-tight text-balance uppercase">
            {isWhite ? "Mr. White" : player.word}
          </p>
          {isWhite ? (
            <p className="mt-5 max-w-[28ch] text-pretty text-base leading-relaxed text-muted">
              {x.youAreWhite}
            </p>
          ) : (
            <p className="mt-5 text-sm text-subtle">{x.hideNow}</p>
          )}
        </div>
        <Button size="lg" className="w-full" onClick={s.memorized}>
          <EyeOff className="size-4" />
          {x.memorized}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <button
        type="button"
        onClick={() => s.setAbortOpen(true)}
        className="self-end text-sm text-subtle hover:text-fg"
      >
        {x.abort}
      </button>
      <div className="flex flex-1 flex-col justify-center">
        <Kicker>{x.passTo}</Kicker>
        <Display className="mt-3">{player.name}</Display>
        <p className="mt-6 text-sm text-subtle">
          {s.dealIndex + 1} / {s.players.length}
        </p>
      </div>
      <Button size="lg" className="w-full" onClick={s.confirmIdentity}>
        <Eye className="size-4" />
        {x.iAm}
      </Button>
    </div>
  );
}
