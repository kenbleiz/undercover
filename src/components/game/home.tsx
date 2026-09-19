import { BookOpen, Languages, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Display, Kicker } from "@/components/game/shell";
import { t } from "@/lib/undercover/i18n";
import { useGame } from "@/lib/undercover/store";
import { cn } from "@/lib/utils";

export function HomeScreen() {
  const lang = useGame((s) => s.lang);
  const setLang = useGame((s) => s.setLang);
  const goSetup = useGame((s) => s.goSetup);
  const goJoin = useGame((s) => s.goJoin);
  const goCreate = useGame((s) => s.goCreate);
  const setRulesOpen = useGame((s) => s.setRulesOpen);
  const x = t(lang);

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between pt-2">
        <Kicker>{x.classified}</Kicker>
        <div className="flex rounded-lg bg-elevated p-1 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]">
          {(["fr", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={cn(
                "h-8 min-w-10 rounded-md px-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-(--motion-quick)",
                lang === code ? "bg-accent text-accent-fg" : "text-muted",
              )}
            >
              {code}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-1 flex-col justify-center py-10">
        <Kicker>{x.kicker}</Kicker>
        <Display className="mt-3 italic">Undercover</Display>
        <p className="mt-4 max-w-[20ch] text-pretty text-lg leading-snug text-muted">
          {x.tagline}
        </p>
        <div className="mt-8 h-px w-24 bg-line-strong" />
        <p className="mt-6 max-w-[32ch] text-pretty text-sm leading-relaxed text-subtle">
          {lang === "fr"
            ? "Crée un salon, envoie le code. Chacun a son téléphone. Trouve l’infiltré."
            : "Create a room, send the code. Everyone on their phone. Find the mole."}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button size="lg" onClick={goCreate}>
          <Users className="size-4" />
          {x.createRoom}
        </Button>
        <Button size="lg" variant="secondary" onClick={goJoin}>
          {x.joinRoom}
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" onClick={goSetup}>
            <Smartphone className="size-4" />
            {x.localPlay}
          </Button>
          <Button variant="ghost" onClick={() => setRulesOpen(true)}>
            <BookOpen className="size-4" />
            {x.rules}
          </Button>
        </div>
        <Button variant="ghost" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
          <Languages className="size-4" />
          {lang === "fr" ? "English" : "Français"}
        </Button>
      </div>
    </div>
  );
}
