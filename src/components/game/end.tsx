import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNetPlay } from "@/components/game/net-app";
import { Display, Kicker } from "@/components/game/shell";
import { initials } from "@/lib/undercover/engine";
import { roleLabel, t, winnerTitle } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function EliminatedScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const victim = s.players.find((p) => p.id === s.lastEliminatedId);
  if (!victim) return null;
  const canAdvance = !net.isNet || net.isHost;
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col justify-center">
        <Kicker>{x.eliminated}</Kicker>
        <Display className="mt-3">{victim.name}</Display>
        <p className="mt-6 font-display text-3xl italic tracking-tight">
          {x.was} {roleLabel(s.lang, victim.role)}
        </p>
      </div>
      {canAdvance ? (
        <Button size="lg" className="w-full" onClick={s.continueAfterElim}>
          {x.next}
        </Button>
      ) : (
        <p className="py-3 text-center text-sm text-muted">{x.waitAdmin}</p>
      )}
    </div>
  );
}

export function MrWhiteGuessScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const victim = s.players.find((p) => p.id === s.lastEliminatedId);
  const canGuess = !net.isNet || s.lastEliminatedId === s.selfId;

  if (!canGuess) {
    return (
      <div className="flex flex-1 flex-col justify-center">
        <Kicker>{victim?.name ?? x.mrWhite}</Kicker>
        <Display className="mt-3">{x.whiteGuessTitle}</Display>
        <p className="mt-4 text-center text-sm text-muted">{x.waitOthers}</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-1 flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        if (net.isGuest) {
          net.sendToHost({ t: "guess", text: s.guess });
          return;
        }
        s.submitWhiteGuess();
      }}
    >
      <Kicker>{victim?.name ?? x.mrWhite}</Kicker>
      <Display className="mt-3">{x.whiteGuessTitle}</Display>
      <p className="mt-3 text-pretty text-sm text-muted">{x.whiteGuessLead}</p>
      <div className="mt-8">
        <Input
          value={s.guess}
          onChange={(e) => s.setGuess(e.target.value)}
          placeholder={x.guessPlaceholder}
          autoFocus
          autoCapitalize="off"
        />
        {s.guessWrong ? (
          <p className="mt-3 text-sm text-danger">{x.wrongGuess}</p>
        ) : null}
      </div>
      <Button size="lg" className="mt-auto w-full" type="submit" disabled={!s.guess.trim()}>
        {x.submitGuess}
      </Button>
    </form>
  );
}

export function GameOverScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  if (!s.winner) return null;
  const ranked = Object.entries(s.scores).sort((a, b) => b[1] - a[1]);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <Kicker>{x.roster}</Kicker>
      <Display className="mt-3">{winnerTitle(s.lang, s.winner)}</Display>

      <div className="mt-8 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
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

      <ul className="mt-6 flex flex-col gap-2">
        {s.players.map((p) => (
          <li
            key={p.id}
            className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-elevated text-xs font-medium text-muted">
              {initials(p.name)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">{p.name}</p>
              <p className="text-xs text-muted">
                {roleLabel(s.lang, p.role)}
                {p.role !== "mrwhite" ? ` · ${p.word}` : ""}
              </p>
            </div>
            <span
              className={cn(
                "text-xs",
                p.alive ? "text-ok" : "text-subtle",
              )}
            >
              {p.alive ? x.alive : x.dead}
            </span>
          </li>
        ))}
      </ul>

      {ranked.length > 0 ? (
        <div className="mt-8">
          <Kicker>{x.scores}</Kicker>
          <ul className="mt-3 flex flex-col gap-1.5">
            {ranked.map(([name, pts]) => (
              <li key={name} className="flex items-baseline justify-between text-sm">
                <span>{name}</span>
                <span className="tabular-nums text-muted">
                  {pts} {x.points}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 pt-4">
        {net.isGuest ? (
          <p className="text-center text-sm text-muted">{x.waitAdmin}</p>
        ) : (
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              if (net.isHost) net.startHostGame();
              else s.rematch();
            }}
          >
            {x.rematch}
          </Button>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={net.isNet ? s.leaveRoom : s.goSetup}>
            {x.newGame}
          </Button>
          <Button variant="ghost" onClick={s.resetScores}>
            {x.resetScores}
          </Button>
        </div>
      </div>
    </div>
  );
}
