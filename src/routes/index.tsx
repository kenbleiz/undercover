import { createFileRoute } from "@tanstack/react-router";
import { UndercoverApp } from "@/components/game/app";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <UndercoverApp />;
}
