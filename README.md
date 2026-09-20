# Undercover

**Un mot. Un doute. Un infiltré.**

Jeu de soirée en ligne : les civils partagent un mot, les undercovers en ont un tout proche, Mr. White n’a rien. Indices d’un mot, vote, élimination. Trouve l’infiltré avant qu’il ne se fonde dans le groupe.

![Undercover](public/og.jpg)

Français et anglais. 3 joueurs minimum.

---

## Jouer

**Salon (recommandé)** — chacun sur son téléphone.

1. Crée un salon, envoie le code.
2. Les joueurs rejoignent (jusqu’à 8).
3. Toi, l’admin : tu animes par défaut (tu vois les deux mots, tu lances les tours). Active **Je joue aussi** si tu veux une carte.
4. Écris tes mots, génère une paire, ou laisse le tirage au hasard.
5. Lance la partie.

**Un seul téléphone** — jusqu’à 16 prénoms. Le téléphone tourne pour la distribution et le vote secret.

---

## Règles

- Les **civils** reçoivent le même mot. Les **undercovers** reçoivent un mot proche. **Mr. White** n’a rien.
- Chacun donne un indice d’un mot, à tour de rôle — sans dire le mot secret.
- Puis vote pour éliminer quelqu’un. Son rôle est révélé.
- Si Mr. White est éliminé, il peut encore gagner en devinant le mot des civils.
- **Civils** : éliminez tous les undercovers et Mr. White. **Undercovers** : égaler ou dépasser les civils.
- **À 3 joueurs** : deux tours de parole avant le vote, et pas de revote.

À la revanche, l’admin peut taper une nouvelle paire, en générer une, ou laisser vide pour un tirage — jamais le duo de la partie d’avant.

---

## Thèmes

Quotidien, nourriture, lieux, nature, objets, culture, manga / anime.

Les paires du générateur évitent les répétitions. L’admin peut toujours imposer ses propres mots.

---

## Stack

- [TanStack Start](https://tanstack.com/start) + React 19 + Tailwind v4
- Zustand (sauvegarde locale)
- WebRTC pair-à-pair pour les salons (l’hôte fait autorité)

Pas de compte. Le signaling des salons passe par une petite API ; en production, une base Postgres / Neon.

---

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvre l’app dans le navigateur. `npm run build` produit le build de production.

---

## English

Party game: civilians share a word, undercovers get a close one, Mr. White gets nothing. One-word hints, then a vote. Find the mole.

Create a room, share the code, play on separate phones (3–8). The host spectates by default and can type or generate the word pair. Solo-phone mode for up to 16 names. Trio tables get two speaking rounds and a single vote. FR / EN.
