import { Eye, EyeOff, Minus, Plus, Shuffle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Display, Kicker } from "@/components/game/shell";
import { maxUndercover } from "@/lib/undercover/engine";
import { categoryLabel, t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { ALL_CATEGORIES, MIN_PLAYERS } from "@/lib/undercover/types";
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
          aria-label="−"
          disabled={decDisabled}
          onClick={onDec}
          className="flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg disabled:opacity-30"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-6 text-center font-medium tabular-nums">{value}</span>
        <button
          type="button"
          aria-label="+"
          disabled={incDisabled}
          onClick={onInc}
          className="flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg disabled:opacity-30"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function SetupScreen() {
  const s = useGame();
  const x = t(s.lang);
  const filled = s.setupNames.map((n) => n.trim()).filter(Boolean);
  const n = Math.max(filled.length, MIN_PLAYERS);
  const civilians = Math.max(0, n - s.undercoverCount - s.mrWhiteCount);
  const canStart =
    filled.length >= MIN_PLAYERS &&
    ((s.customCivilian.trim().length > 0 && s.customUndercover.trim().length > 0) ||
      s.categories.length > 0);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto pb-2">
      <header className="flex items-start justify-between gap-3">
        <div>
          <Kicker>{x.setupTitle}</Kicker>
          <Display className="mt-1 text-[2rem]">{x.players}</Display>
        </div>
        <Button variant="ghost" onClick={s.goHome}>
          {x.back}
        </Button>
      </header>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{x.setupLead}</p>

      <div className="mt-6 flex flex-col gap-2">
        {s.setupNames.map((name, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-elevated text-xs font-medium text-muted shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Input
              value={name}
              maxLength={18}
              placeholder={`${x.playerPlaceholder} ${i + 1}`}
              onChange={(e) => s.setName(i, e.target.value)}
              autoCapitalize="words"
            />
            {s.setupNames.length > MIN_PLAYERS ? (
              <button
                type="button"
                aria-label={x.removePlayer}
                onClick={() => s.removePlayer(i)}
                className="flex size-11 shrink-0 items-center justify-center rounded-lg text-subtle hover:text-fg"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </div>
        ))}
        {s.setupNames.length < 16 ? (
          <Button variant="ghost" onClick={s.addPlayer} className="self-start">
            <Plus className="size-4" />
            {x.addPlayer}
          </Button>
        ) : null}
      </div>

      <div className="mt-8">
        <Kicker>{x.roles}</Kicker>
        <div className="mt-3 flex flex-col gap-2">
          <Stepper
            label={x.undercovers}
            value={s.undercoverCount}
            onDec={() => s.setUndercover(s.undercoverCount - 1)}
            onInc={() => s.setUndercover(s.undercoverCount + 1)}
            decDisabled={s.undercoverCount <= 1}
            incDisabled={s.undercoverCount >= maxUndercover(n, s.mrWhiteCount)}
          />
          <Stepper
            label={x.mrWhite}
            value={s.mrWhiteCount}
            onDec={() => s.setMrWhite(s.mrWhiteCount - 1)}
            onInc={() => s.setMrWhite(s.mrWhiteCount + 1)}
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
                  "h-10 rounded-full px-3.5 text-sm transition-colors duration-(--motion-quick)",
                  on
                    ? "bg-accent text-accent-fg"
                    : "bg-elevated text-muted shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
                )}
              >
                {categoryLabel(s.lang, c)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
        <div className="flex items-center justify-between gap-3">
          <Kicker>{x.generatePair}</Kicker>
          {s.customCivilian ? (
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
        {s.customCivilian && s.customUndercover && !s.pairHidden ? (
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted">{x.civilWord}</p>
              <p className="mt-1 font-display text-2xl tracking-tight">{s.customCivilian}</p>
            </div>
            <div>
              <p className="text-xs text-muted">{x.underWord}</p>
              <p className="mt-1 font-display text-2xl tracking-tight">{s.customUndercover}</p>
            </div>
          </div>
        ) : s.customCivilian && s.pairHidden ? (
          <p className="mt-3 text-sm text-muted">{x.hidePair}</p>
        ) : (
          <p className="mt-3 text-sm text-muted">{x.pairHint}</p>
        )}
        <Button className="mt-4 w-full" variant="secondary" onClick={() => s.generatePair()}>
          <Shuffle className="size-4" />
          {x.generatePair}
        </Button>
        <div className="mt-3 flex flex-col gap-2">
          <Input
            value={s.customCivilian}
            onChange={(e) => s.setCustom("civilian", e.target.value)}
            placeholder={x.customCivil}
          />
          <Input
            value={s.customUndercover}
            onChange={(e) => s.setCustom("undercover", e.target.value)}
            placeholder={x.customUnder}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => s.setSecretVote(!s.secretVote)}
        className="mt-3 mb-4 flex w-full items-center justify-between rounded-xl bg-elevated px-4 py-3 text-sm shadow-[0_0_0_1px_rgba(238,234,228,0.1)]"
      >
        <span>{x.secretVote}</span>
        <span className="text-muted">{s.secretVote ? x.secretVoteOn : x.secretVoteOff}</span>
      </button>
      </div>

      <div className="relative z-10 shrink-0 border-t border-line bg-bg pt-3">
        {!canStart ? (
          <p className="mb-3 text-center text-sm text-muted">{x.needPlayers}</p>
        ) : filled.length === 3 ? (
          <p className="mb-3 text-center text-sm text-muted">{x.trioHint}</p>
        ) : null}
        <Button size="lg" className="w-full" disabled={!canStart} onClick={() => s.startGame()}>
          {x.deal}
        </Button>
      </div>
    </div>
  );
}
