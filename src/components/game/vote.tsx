import { Button } from "@/components/ui/button";
import { useNetPlay } from "@/components/game/net-app";
import { Display, Kicker } from "@/components/game/shell";
import { initials } from "@/lib/undercover/engine";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function VoteHandoffScreen() {
  const s = useGame();
  const x = t(s.lang);
  const voter = s.players.find((p) => p.id === s.voterId);
  if (!voter) return null;
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col justify-center">
        <Kicker>{x.passTo}</Kicker>
        <Display className="mt-3">{voter.name}</Display>
        <p className="mt-5 text-sm text-muted">{x.voteLead}</p>
      </div>
      <Button size="lg" className="w-full" onClick={s.confirmVoter}>
        {x.iAm}
      </Button>
    </div>
  );
}

export function VotePickScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const voter = net.isNet
    ? s.players.find((p) => p.id === s.selfId)
    : s.players.find((p) => p.id === s.voterId);
  const pool = s.tiedIds ?? s.players.filter((p) => p.alive).map((p) => p.id);
  const candidates = s.players.filter(
    (p) => pool.includes(p.id) && p.id !== voter?.id && p.alive,
  );
  const already = Boolean(net.isNet && voter && s.ballots[voter.id]);
  const votedN = Object.keys(s.ballots).length;
  const aliveN = s.players.filter((p) => p.alive).length;
  const directing = net.isHost && !voter;

  if (directing) {
    return (
      <div className="flex flex-1 flex-col">
        <Kicker>{x.directing}</Kicker>
        <h2 className="mt-2 font-display text-3xl tracking-tight">{x.watchVote}</h2>
        <p className="mt-3 text-sm text-muted">
          {votedN}/{aliveN} {x.votesIn}
        </p>
        <ul className="mt-6 flex flex-col gap-1.5">
          {s.players
            .filter((p) => p.alive)
            .map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-xl px-1 py-2 text-sm">
                <span>{p.name}</span>
                <span className={cn("text-xs", s.ballots[p.id] ? "text-ok" : "text-subtle")}>
                  {s.ballots[p.id] ? x.hasVoted : x.waiting}
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  if (!voter) {
    return (
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-center text-sm text-muted">{x.connecting}</p>
      </div>
    );
  }

  if (net.isNet && !voter.alive) {
    return (
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-center text-sm text-muted">{x.waitOthers}</p>
      </div>
    );
  }

  const confirm = () => {
    if (!s.pendingVote) return;
    if (net.isHost && s.selfId) {
      s.recordBallot(s.selfId, s.pendingVote);
      return;
    }
    if (net.isGuest) {
      net.sendToHost({ t: "vote", targetId: s.pendingVote });
      useGame.setState((prev) => ({
        ballots: prev.selfId
          ? { ...prev.ballots, [prev.selfId]: s.pendingVote! }
          : prev.ballots,
        pendingVote: null,
      }));
      return;
    }
    s.castVote();
  };

  if (already) {
    return (
      <div className="flex flex-1 flex-col">
        <Kicker>{x.voteTitle}</Kicker>
        <h2 className="mt-2 font-display text-3xl tracking-tight">{x.waitOthers}</h2>
        <p className="mt-3 text-sm text-muted">
          {votedN}/{aliveN} {x.votesIn}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Kicker>
          {net.isNet ? x.you : `${x.voteAs} ${voter.name}`}
        </Kicker>
        <h2 className="mt-2 font-display text-3xl tracking-tight">{x.voteTitle}</h2>
        <p className="mt-2 text-sm text-muted">{x.voteLead}</p>

        <ul className="mt-6 flex flex-col gap-2">
          {candidates.map((p) => {
            const on = s.pendingVote === p.id;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => s.pickVote(p.id)}
                  className={cn(
                    "flex h-14 w-full items-center gap-3 rounded-xl px-3 text-left transition-colors duration-(--motion-quick)",
                    on
                      ? "bg-accent text-accent-fg"
                      : "bg-elevated text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-lg text-xs font-medium",
                      on ? "bg-accent-fg/10" : "bg-surface text-muted",
                    )}
                  >
                    {initials(p.name)}
                  </span>
                  <span className="text-base">{p.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {candidates.length === 0 ? (
          <p className="mt-4 text-sm text-muted">{x.skipSelf}</p>
        ) : null}
      </div>

      <Button
        size="lg"
        className="mt-4 w-full shrink-0"
        disabled={!s.pendingVote}
        onClick={confirm}
      >
        {x.confirmVote}
      </Button>
    </div>
  );
}

export function VoteResultScreen() {
  const s = useGame();
  const x = t(s.lang);
  const net = useNetPlay();
  const alive = s.players.filter((p) => p.alive);
  const max = Math.max(1, ...Object.values(s.voteCounts));
  const tied = (s.tiedIds?.length ?? 0) > 1;
  const canAdvance = !net.isNet || net.isHost;
  const trio = s.players.length === 3;

  return (
    <div className="flex flex-1 flex-col">
      <Kicker>{x.voteResult}</Kicker>
      <h2 className="mt-2 font-display text-3xl tracking-tight">
        {tied ? x.tied : x.voteTitle}
      </h2>
      {tied ? (
        <p className="mt-2 text-pretty text-sm text-muted">
          {trio || s.didRevote ? x.tiedLead : x.revoteLead}
        </p>
      ) : null}

      <ul className="mt-6 flex flex-col gap-3">
        {alive.map((p) => {
          const n = s.voteCounts[p.id] ?? 0;
          return (
            <li key={p.id}>
              <div className="mb-1.5 flex items-baseline justify-between text-sm">
                <span>{p.name}</span>
                <span className="tabular-nums text-muted">
                  {n} {x.votes}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-(--motion-slow) ease-(--ease-smooth-out)"
                  style={{ width: `${(n / max) * 100}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 shrink-0 pt-2">
        {!canAdvance ? (
          <p className="py-3 text-center text-sm text-muted">{x.waitAdmin}</p>
        ) : tied && !trio && !s.didRevote ? (
          <Button size="lg" className="w-full" onClick={s.beginRevote}>
            {x.startRevote}
          </Button>
        ) : tied && (trio || s.didRevote) ? (
          <Button size="lg" className="w-full" onClick={s.skipTie}>
            {x.continueRound}
          </Button>
        ) : (
          <Button size="lg" className="w-full" onClick={s.resolveVotes}>
            {x.next}
          </Button>
        )}
      </div>
    </div>
  );
}
