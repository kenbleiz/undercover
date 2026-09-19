import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Display, Kicker } from "@/components/game/shell";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";

export function JoinScreen() {
  const s = useGame();
  const x = t(s.lang);
  const joining = s.joinIntent === "join" || s.joinCode.length >= 4;
  const canName = s.myName.trim().length > 0;
  const can = joining ? canName && s.joinCode.length >= 4 : canName;

  return (
    <form
      className="flex flex-1 flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        if (joining) s.joinSalon();
        else s.createSalon();
      }}
    >
      <header className="flex items-center justify-between">
        <Kicker>{joining ? x.joinRoom : x.createRoom}</Kicker>
        <Button variant="ghost" onClick={s.goHome}>
          {x.back}
        </Button>
      </header>
      <Display className="mt-3">{joining ? x.joinRoom : x.createRoom}</Display>
      <p className="mt-3 text-pretty text-sm text-muted">
        {joining ? x.joinLead : x.shareCode}
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <label className="text-sm text-muted" htmlFor="player-name">
          {x.yourName}
        </label>
        <Input
          id="player-name"
          value={s.myName}
          onChange={(e) => s.setMyName(e.target.value)}
          placeholder={x.playerPlaceholder}
          maxLength={18}
          autoCapitalize="words"
          autoFocus
        />
        {joining ? (
          <>
            <label className="mt-2 text-sm text-muted" htmlFor="room-code">
              {x.roomCode}
            </label>
            <Input
              id="room-code"
              value={s.joinCode}
              onChange={(e) => s.setJoinCode(e.target.value)}
              placeholder={x.roomCodePlaceholder}
              maxLength={8}
              autoCapitalize="characters"
              className="uppercase tracking-[0.3em]"
            />
          </>
        ) : null}
      </div>
      <div className="mt-auto flex flex-col gap-3">
        <Button size="lg" className="w-full" type="submit" disabled={!can}>
          {joining ? x.enterSalon : x.createRoom}
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          type="button"
          onClick={() => s.setJoinIntent(joining ? "create" : "join")}
        >
          {joining ? x.createRoom : x.joinRoom}
        </Button>
      </div>
    </form>
  );
}
