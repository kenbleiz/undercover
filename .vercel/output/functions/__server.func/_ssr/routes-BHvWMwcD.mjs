import { o as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shuffle, c as Languages, d as Copy, f as BookOpen, i as Smartphone, l as Eye, n as Users, o as Plus, s as Minus, t as X, u as EyeOff } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BHvWMwcD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-bg),0_0_0_4px_var(--color-accent)] disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-[0_0_0_1px_rgba(238,234,228,0.08)] hover:bg-fg",
			secondary: "bg-elevated text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.12)] hover:shadow-[0_0_0_1px_rgba(238,234,228,0.22)]",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-elevated",
			danger: "bg-transparent text-danger shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-danger)_45%,transparent)] hover:bg-danger/10"
		},
		size: {
			md: "h-11 rounded-lg px-4 text-sm",
			lg: "h-12 rounded-xl px-5 text-base",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay",
		style: { backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`)}")` }
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(238,234,228,0.07),transparent_55%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex h-dvh max-h-dvh w-full max-w-md flex-col overflow-hidden px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]",
				children
			})
		]
	});
}
function Screen({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("screen-enter flex min-h-0 flex-1 flex-col", className),
		children
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
		children
	});
}
function Display({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: cn("font-display text-[2.75rem] leading-[1.05] tracking-[-0.03em] text-balance text-fg", className),
		children
	});
}
var copy = {
	fr: {
		appName: "Undercover",
		tagline: "Un mot. Un doute. Un infiltré.",
		classified: "Dossier confidentiel",
		kicker: "Dossier de soirée",
		play: "Nouvelle partie",
		continue: "Reprendre",
		rules: "Règles",
		language: "Langue",
		setupTitle: "La table",
		setupLead: "Ajoutez les prénoms, puis lancez le briefing.",
		players: "Joueurs",
		addPlayer: "Ajouter",
		removePlayer: "Retirer",
		playerPlaceholder: "Prénom",
		roles: "Rôles",
		civilians: "Civils",
		undercovers: "Undercovers",
		mrWhite: "Mr. White",
		categories: "Thèmes",
		customDuo: "Duo personnalisé",
		customCivil: "Mot des civils",
		customUnder: "Mot des undercovers",
		secretVote: "Vote secret",
		secretVoteOn: "Le téléphone tourne",
		secretVoteOff: "Vote à voix haute",
		deal: "Distribuer les mots",
		needPlayers: "Il faut au moins 3 prénoms.",
		passTo: "Passe le téléphone à",
		iAm: "C’est moi",
		yourWord: "Ton mot",
		noWord: "Tu n’as pas de mot.",
		youAreWhite: "Tu es Mr. White. Bluffe.",
		memorized: "J’ai mémorisé",
		hideNow: "Cache l’écran, puis passe.",
		allDealt: "Tout le monde a son mot.",
		putDown: "Posez le téléphone au centre de la table.",
		startRound: "Commencer le tour",
		round: "Tour",
		speaking: "Parle",
		waiting: "Attend",
		spoken: "A parlé",
		eliminated: "Éliminé",
		yourHint: "Ton indice (un mot)",
		hintPlaceholder: "Un seul mot…",
		sayHint: "Donner l’indice",
		saidAloud: "Dit à l’oral",
		goVote: "Passer au vote",
		hints: "Indices",
		voteTitle: "Vote",
		voteLead: "Qui est l’infiltré ?",
		voteAs: "Vote de",
		confirmVote: "Confirmer",
		skipSelf: "On ne vote pas pour soi.",
		voteResult: "Résultat du vote",
		tied: "Égalité",
		tiedLead: "Personne n’est éliminé. Nouveau tour.",
		revoteLead: "Revotez entre les ex aequo.",
		startRevote: "Revoter",
		continueRound: "Continuer",
		out: "a été éliminé",
		was: "était",
		roleCivilian: "un civil",
		roleUndercover: "un undercover",
		roleMrWhite: "Mr. White",
		whiteGuessTitle: "Mr. White peut encore gagner",
		whiteGuessLead: "Devine le mot des civils.",
		guessPlaceholder: "Le mot…",
		submitGuess: "Tenter",
		wrongGuess: "Ce n’est pas ça.",
		civiliansWin: "Les civils gagnent",
		undercoverWin: "Les undercovers gagnent",
		mrWhiteWin: "Mr. White gagne",
		theWords: "Les mots",
		civilWord: "Civils",
		underWord: "Undercovers",
		roster: "Révélation",
		scores: "Scores",
		rematch: "Revanche",
		newGame: "Nouvelle table",
		resetScores: "Réinitialiser les scores",
		back: "Retour",
		close: "Fermer",
		rulesTitle: "Comment jouer",
		catEveryday: "Quotidien",
		catFood: "Nourriture",
		catPlaces: "Lieux",
		catNature: "Nature",
		catObjects: "Objets",
		catCulture: "Culture",
		catManga: "Manga / Anime",
		alive: "en vie",
		dead: "éliminé",
		points: "pts",
		nobody: "Personne",
		votes: "voix",
		voteCount: "voix",
		next: "Suivant",
		abort: "Abandonner",
		abortConfirm: "Quitter la partie en cours ?",
		abortYes: "Quitter",
		abortNo: "Rester",
		createRoom: "Créer un salon",
		joinRoom: "Rejoindre",
		localPlay: "Un seul téléphone",
		yourName: "Ton prénom",
		roomCode: "Code du salon",
		roomCodePlaceholder: "A7K3",
		enterSalon: "Entrer",
		hostBadge: "Admin",
		you: "toi",
		shareCode: "Donne ce code aux joueurs",
		joinLead: "Entre le code que l’admin t’a donné.",
		copied: "Copié",
		copyCode: "Copier le code",
		waitingHost: "En attente de l’admin…",
		waitingPlayers: "En attente des joueurs",
		connecting: "Connexion…",
		generatePair: "Générer une paire",
		hidePair: "Masquer les mots",
		showPair: "Afficher les mots",
		pairHint: "Toi seul vois ces mots. Ne montre pas l’écran.",
		startSalon: "Lancer la partie",
		needOnline: "Il faut au moins 3 joueurs connectés.",
		needOnlineSpectate: "Il faut 3 joueurs — tu n’en fais pas partie.",
		salonFull: "Salon plein (8 joueurs).",
		waitAdmin: "L’admin continue…",
		waitOthers: "En attente des autres…",
		yourTurn: "C’est à toi",
		theirTurn: "C’est à",
		votesIn: "ont voté",
		hostPlays: "Je joue aussi",
		hostSpectates: "J’anime seulement",
		hostSpectateHint: "Tu vois les deux mots et tu lances les tours. Pas de mot, pas de vote.",
		hostPlayingHint: "Tu reçois un mot, comme les autres.",
		directing: "Tu animes cette partie",
		watchVote: "Les joueurs votent…",
		playersReady: "prêts",
		hasVoted: "a voté",
		speechPass: "Parole",
		trioHint: "À 3 : deux tours de parole, puis un seul vote.",
		how: [
			"Les civils reçoivent le même mot. Les undercovers reçoivent un mot proche. Mr. White n’a rien.",
			"Chacun donne un indice d’un mot, à tour de rôle — sans dire le mot secret.",
			"Puis votez pour éliminer un joueur. Son rôle est révélé.",
			"Si Mr. White est éliminé, il peut encore gagner en devinant le mot des civils.",
			"Civils : éliminez tous les undercovers et Mr. White. Undercovers : égaler ou dépasser les civils.",
			"À 3 joueurs : deux tours de parole avant le vote, et pas de revote."
		]
	},
	en: {
		appName: "Undercover",
		tagline: "One word. One doubt. One mole.",
		classified: "Classified file",
		kicker: "Party dossier",
		play: "New game",
		continue: "Resume",
		rules: "Rules",
		language: "Language",
		setupTitle: "The table",
		setupLead: "Add first names, then start the briefing.",
		players: "Players",
		addPlayer: "Add",
		removePlayer: "Remove",
		playerPlaceholder: "First name",
		roles: "Roles",
		civilians: "Civilians",
		undercovers: "Undercovers",
		mrWhite: "Mr. White",
		categories: "Themes",
		customDuo: "Custom pair",
		customCivil: "Civilian word",
		customUnder: "Undercover word",
		secretVote: "Secret vote",
		secretVoteOn: "Pass the phone",
		secretVoteOff: "Open vote",
		deal: "Deal the words",
		needPlayers: "You need at least 3 names.",
		passTo: "Pass the phone to",
		iAm: "That’s me",
		yourWord: "Your word",
		noWord: "You have no word.",
		youAreWhite: "You are Mr. White. Bluff.",
		memorized: "Got it",
		hideNow: "Hide the screen, then pass.",
		allDealt: "Everyone has a word.",
		putDown: "Put the phone in the middle of the table.",
		startRound: "Start the round",
		round: "Round",
		speaking: "Speaking",
		waiting: "Waiting",
		spoken: "Spoken",
		eliminated: "Out",
		yourHint: "Your hint (one word)",
		hintPlaceholder: "One word…",
		sayHint: "Give hint",
		saidAloud: "Said aloud",
		goVote: "Go to vote",
		hints: "Hints",
		voteTitle: "Vote",
		voteLead: "Who is the mole?",
		voteAs: "Voting as",
		confirmVote: "Confirm",
		skipSelf: "You can’t vote for yourself.",
		voteResult: "Vote result",
		tied: "Tie",
		tiedLead: "Nobody is out. New round.",
		revoteLead: "Revote between the tied players.",
		startRevote: "Revote",
		continueRound: "Continue",
		out: "is out",
		was: "was",
		roleCivilian: "a civilian",
		roleUndercover: "an undercover",
		roleMrWhite: "Mr. White",
		whiteGuessTitle: "Mr. White can still win",
		whiteGuessLead: "Guess the civilians’ word.",
		guessPlaceholder: "The word…",
		submitGuess: "Guess",
		wrongGuess: "That’s not it.",
		civiliansWin: "Civilians win",
		undercoverWin: "Undercovers win",
		mrWhiteWin: "Mr. White wins",
		theWords: "The words",
		civilWord: "Civilians",
		underWord: "Undercovers",
		roster: "Reveal",
		scores: "Scores",
		rematch: "Rematch",
		newGame: "New table",
		resetScores: "Reset scores",
		back: "Back",
		close: "Close",
		rulesTitle: "How to play",
		catEveryday: "Everyday",
		catFood: "Food",
		catPlaces: "Places",
		catNature: "Nature",
		catObjects: "Objects",
		catCulture: "Culture",
		catManga: "Manga / Anime",
		alive: "alive",
		dead: "out",
		points: "pts",
		nobody: "Nobody",
		votes: "votes",
		voteCount: "votes",
		next: "Next",
		abort: "Quit",
		abortConfirm: "Leave the current game?",
		abortYes: "Leave",
		abortNo: "Stay",
		createRoom: "Create a room",
		joinRoom: "Join",
		localPlay: "One phone",
		yourName: "Your first name",
		roomCode: "Room code",
		roomCodePlaceholder: "A7K3",
		enterSalon: "Enter",
		hostBadge: "Host",
		you: "you",
		shareCode: "Give this code to the players",
		joinLead: "Enter the code the host gave you.",
		copied: "Copied",
		copyCode: "Copy code",
		waitingHost: "Waiting for the host…",
		waitingPlayers: "Waiting for players",
		connecting: "Connecting…",
		generatePair: "Generate a pair",
		hidePair: "Hide the words",
		showPair: "Show the words",
		pairHint: "Only you see these words. Don’t show the screen.",
		startSalon: "Start the game",
		needOnline: "You need at least 3 connected players.",
		needOnlineSpectate: "You need 3 players — you are not one of them.",
		salonFull: "Room full (8 players).",
		waitAdmin: "Waiting for the host…",
		waitOthers: "Waiting for the others…",
		yourTurn: "Your turn",
		theirTurn: "Waiting on",
		votesIn: "have voted",
		hostPlays: "I play too",
		hostSpectates: "I only host",
		hostSpectateHint: "You see both words and run the rounds. No word, no vote.",
		hostPlayingHint: "You get a word, like everyone else.",
		directing: "You’re running this game",
		watchVote: "The players are voting…",
		playersReady: "ready",
		hasVoted: "voted",
		speechPass: "Speak",
		trioHint: "With 3: two speaking rounds, then a single vote.",
		how: [
			"Civilians share one word. Undercovers get a close word. Mr. White gets nothing.",
			"Take turns giving a one-word hint — never say the secret word.",
			"Then vote someone out. Their role is revealed.",
			"If Mr. White is out, they can still win by guessing the civilian word.",
			"Civilians: find every undercover and Mr. White. Undercovers: match or outnumber civilians.",
			"With 3 players: two speaking rounds before the vote, and no revote."
		]
	}
};
function t(lang) {
	return copy[lang];
}
function categoryLabel(lang, c) {
	const x = t(lang);
	return {
		everyday: x.catEveryday,
		food: x.catFood,
		places: x.catPlaces,
		nature: x.catNature,
		objects: x.catObjects,
		culture: x.catCulture,
		manga: x.catManga
	}[c];
}
function roleLabel(lang, role) {
	const x = t(lang);
	if (role === "civilian") return x.roleCivilian;
	if (role === "undercover") return x.roleUndercover;
	return x.roleMrWhite;
}
function winnerTitle(lang, winner) {
	const x = t(lang);
	if (winner === "civilians") return x.civiliansWin;
	if (winner === "undercover") return x.undercoverWin;
	return x.mrWhiteWin;
}
var ALL_CATEGORIES = [
	"everyday",
	"food",
	"places",
	"nature",
	"objects",
	"culture",
	"manga"
];
function fisherYates(items) {
	const arr = [...items];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = arr[i];
		const b = arr[j];
		if (a === void 0 || b === void 0) continue;
		arr[i] = b;
		arr[j] = a;
	}
	return arr;
}
function suggestedRoles(n) {
	if (n <= 4) return {
		undercover: 1,
		mrWhite: 0
	};
	if (n <= 6) return {
		undercover: 1,
		mrWhite: 1
	};
	if (n <= 9) return {
		undercover: 2,
		mrWhite: 1
	};
	if (n <= 12) return {
		undercover: 3,
		mrWhite: 1
	};
	if (n <= 14) return {
		undercover: 4,
		mrWhite: 1
	};
	return {
		undercover: Math.max(4, Math.floor(n / 4)),
		mrWhite: 2
	};
}
function maxUndercover(n, mrWhite) {
	return Math.max(1, Math.floor((n - mrWhite - 1) / 2));
}
function clampRoles(n, undercover, mrWhite) {
	const w = Math.max(0, Math.min(mrWhite, n <= 4 ? 0 : 2, Math.max(0, n - 3)));
	const maxU = maxUndercover(n, w);
	const minCivilians = n === 3 ? 2 : 2;
	return {
		undercover: Math.max(1, Math.min(undercover, maxU, n - w - minCivilians)),
		mrWhite: w
	};
}
function isTrioTable(playerCount) {
	return playerCount === 3;
}
function speechLapsFor(playerCount) {
	return isTrioTable(playerCount) ? 2 : 1;
}
function dealPlayers(seats, undercoverCount, mrWhiteCount, civilianWord, undercoverWord) {
	const n = seats.length;
	const shuffled = fisherYates([
		...Array(mrWhiteCount).fill("mrwhite"),
		...Array(undercoverCount).fill("undercover"),
		...Array(n - undercoverCount - mrWhiteCount).fill("civilian")
	]);
	return seats.map((seat, i) => {
		const role = shuffled[i] ?? "civilian";
		return {
			id: seat.id ?? `p-${i}-${Math.random().toString(36).slice(2, 8)}`,
			name: seat.name,
			role,
			word: role === "civilian" ? civilianWord : role === "undercover" ? undercoverWord : "",
			alive: true
		};
	});
}
var CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function makeRoomCode() {
	let out = "";
	for (let i = 0; i < 4; i++) out += CODE_ALPHABET[Math.floor(Math.random() * 32)];
	return out;
}
function normalizeRoomCode(raw) {
	return raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
}
function evaluateWinner(players) {
	const alive = players.filter((p) => p.alive);
	const C = alive.filter((p) => p.role === "civilian").length;
	const U = alive.filter((p) => p.role === "undercover").length;
	const W = alive.filter((p) => p.role === "mrwhite").length;
	if (U === 0 && W === 0) return "civilians";
	if (C === 0 && U === 0 && W > 0) return "mrwhite";
	if (C === 0 && U > 0) return "undercover";
	if (U > 0 && U >= C) return "undercover";
	return null;
}
function normalizeWord(value) {
	return value.trim().toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/[^a-z0-9]+/gi, "");
}
function wordsMatch(guess, target) {
	const a = normalizeWord(guess);
	const b = normalizeWord(target);
	return a.length > 0 && a === b;
}
function tallyVotes(ballots) {
	const counts = {};
	for (const target of Object.values(ballots)) counts[target] = (counts[target] ?? 0) + 1;
	let max = 0;
	for (const n of Object.values(counts)) max = Math.max(max, n);
	return {
		counts,
		topIds: Object.entries(counts).filter(([, n]) => n === max && max > 0).map(([id]) => id)
	};
}
function nextAliveId(players, afterId) {
	const alive = players.filter((p) => p.alive);
	if (alive.length === 0) return null;
	if (!afterId) return alive[Math.floor(Math.random() * alive.length)]?.id ?? null;
	const idx = players.findIndex((p) => p.id === afterId);
	for (let i = 1; i <= players.length; i++) {
		const p = players[(idx + i) % players.length];
		if (p?.alive) return p.id;
	}
	return alive[0]?.id ?? null;
}
function awardScores(players, winner, scores) {
	const next = { ...scores };
	const bump = (name, n) => {
		next[name] = (next[name] ?? 0) + n;
	};
	if (winner === "civilians") for (const p of players.filter((x) => x.role === "civilian")) bump(p.name, p.alive ? 2 : 1);
	else if (winner === "undercover") for (const p of players.filter((x) => x.role === "undercover")) bump(p.name, p.alive ? 5 : 3);
	else for (const p of players.filter((x) => x.role === "mrwhite")) bump(p.name, 6);
	return next;
}
function initials(name) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return (parts[0] ?? "?").slice(0, 2).toUpperCase();
	return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
var FR = {
	everyday: [
		["Chat", "Chien"],
		["Café", "Thé"],
		["Lit", "Canapé"],
		["Fenêtre", "Porte"],
		["Téléphone", "Tablette"],
		["Lunettes", "Lentilles"],
		["Chapeau", "Casquette"],
		["Manteau", "Veste"],
		["Savon", "Shampoing"],
		["Oreiller", "Coussin"],
		["Réveil", "Horloge"],
		["Serviette", "Torchon"],
		["Tapis", "Moquette"],
		["Brosse", "Peigne"],
		["Parapluie", "Imperméable"]
	],
	food: [
		["Pizza", "Tarte"],
		["Croissant", "Pain au chocolat"],
		["Fromage", "Beurre"],
		["Chocolat", "Caramel"],
		["Frites", "Chips"],
		["Soupe", "Potage"],
		["Steak", "Hamburger"],
		["Sushi", "Maki"],
		["Glace", "Sorbet"],
		["Vin", "Champagne"],
		["Bière", "Cidre"],
		["Pâtes", "Riz"],
		["Pomme", "Poire"],
		["Citron", "Orange"],
		["Yaourt", "Fromage blanc"]
	],
	places: [
		["Plage", "Piscine"],
		["Montagne", "Colline"],
		["Forêt", "Jungle"],
		["Ville", "Village"],
		["École", "Université"],
		["Hôpital", "Clinique"],
		["Restaurant", "Café"],
		["Cinéma", "Théâtre"],
		["Musée", "Galerie"],
		["Aéroport", "Gare"],
		["Hôtel", "Auberge"],
		["Bibliothèque", "Librairie"],
		["Parc", "Jardin"],
		["Église", "Cathédrale"],
		["Supermarché", "Marché"]
	],
	nature: [
		["Lune", "Soleil"],
		["Étoile", "Planète"],
		["Rivière", "Lac"],
		["Océan", "Mer"],
		["Fleur", "Plante"],
		["Arbre", "Buisson"],
		["Rose", "Tulipe"],
		["Nuage", "Brouillard"],
		["Pluie", "Neige"],
		["Vent", "Tempête"],
		["Volcan", "Montagne"],
		["Île", "Presqu'île"],
		["Désert", "Savane"],
		["Papillon", "Abeille"],
		["Loup", "Renard"]
	],
	objects: [
		["Stylo", "Crayon"],
		["Livre", "Cahier"],
		["Ciseaux", "Cutter"],
		["Marteau", "Maillet"],
		["Clé", "Cadenas"],
		["Bouteille", "Carafe"],
		["Verre", "Tasse"],
		["Assiette", "Bol"],
		["Fourchette", "Cuillère"],
		["Lampe", "Bougie"],
		["Miroir", "Vitre"],
		["Sac", "Valise"],
		["Vélo", "Trottinette"],
		["Voiture", "Camion"],
		["Avion", "Hélicoptère"],
		["Bateau", "Voilier"],
		["Train", "Métro"],
		["Piano", "Clavier"],
		["Guitare", "Ukulélé"],
		["Télévision", "Ordinateur"]
	],
	culture: [
		["Football", "Rugby"],
		["Tennis", "Badminton"],
		["Ski", "Snowboard"],
		["Danse", "Gymnastique"],
		["Roman", "Nouvelle"],
		["Film", "Série"],
		["Chanson", "Mélodie"],
		["Photo", "Peinture"],
		["Pirate", "Viking"],
		["Magicien", "Sorcier"],
		["Vampire", "Loup-garou"],
		["Roi", "Empereur"],
		["Château", "Palais"],
		["Dragon", "Dinosaure"],
		["Super-héros", "Vilain"]
	],
	manga: [
		["Naruto", "Sasuke"],
		["Goku", "Vegeta"],
		["Luffy", "Zoro"],
		["Pikachu", "Évoli"],
		["Totoro", "Chihiro"],
		["Tanjiro", "Nezuko"],
		["Eren", "Lévi"],
		["Light", "L"],
		["Gon", "Killua"],
		["Saitama", "Genos"],
		["Ninja", "Samouraï"],
		["Mecha", "Kaiju"],
		["Manga", "Anime"],
		["Pokémon", "Digimon"],
		["Shonen", "Seinen"]
	]
};
var EN = {
	everyday: [
		["Cat", "Dog"],
		["Coffee", "Tea"],
		["Bed", "Sofa"],
		["Window", "Door"],
		["Phone", "Tablet"],
		["Glasses", "Contacts"],
		["Hat", "Cap"],
		["Coat", "Jacket"],
		["Soap", "Shampoo"],
		["Pillow", "Cushion"],
		["Alarm", "Clock"],
		["Towel", "Rag"],
		["Rug", "Carpet"],
		["Brush", "Comb"],
		["Umbrella", "Raincoat"]
	],
	food: [
		["Pizza", "Pie"],
		["Croissant", "Muffin"],
		["Cheese", "Butter"],
		["Chocolate", "Caramel"],
		["Fries", "Chips"],
		["Soup", "Stew"],
		["Steak", "Burger"],
		["Sushi", "Sashimi"],
		["Ice cream", "Sorbet"],
		["Wine", "Champagne"],
		["Beer", "Cider"],
		["Pasta", "Rice"],
		["Apple", "Pear"],
		["Lemon", "Orange"],
		["Yogurt", "Cream"]
	],
	places: [
		["Beach", "Pool"],
		["Mountain", "Hill"],
		["Forest", "Jungle"],
		["City", "Village"],
		["School", "University"],
		["Hospital", "Clinic"],
		["Restaurant", "Cafe"],
		["Cinema", "Theatre"],
		["Museum", "Gallery"],
		["Airport", "Station"],
		["Hotel", "Inn"],
		["Library", "Bookstore"],
		["Park", "Garden"],
		["Church", "Cathedral"],
		["Supermarket", "Market"]
	],
	nature: [
		["Moon", "Sun"],
		["Star", "Planet"],
		["River", "Lake"],
		["Ocean", "Sea"],
		["Flower", "Plant"],
		["Tree", "Bush"],
		["Rose", "Tulip"],
		["Cloud", "Fog"],
		["Rain", "Snow"],
		["Wind", "Storm"],
		["Volcano", "Mountain"],
		["Island", "Peninsula"],
		["Desert", "Savanna"],
		["Butterfly", "Bee"],
		["Wolf", "Fox"]
	],
	objects: [
		["Pen", "Pencil"],
		["Book", "Notebook"],
		["Scissors", "Cutter"],
		["Hammer", "Mallet"],
		["Key", "Padlock"],
		["Bottle", "Jug"],
		["Glass", "Mug"],
		["Plate", "Bowl"],
		["Fork", "Spoon"],
		["Lamp", "Candle"],
		["Mirror", "Window"],
		["Bag", "Suitcase"],
		["Bike", "Scooter"],
		["Car", "Truck"],
		["Plane", "Helicopter"],
		["Boat", "Sailboat"],
		["Train", "Subway"],
		["Piano", "Keyboard"],
		["Guitar", "Ukulele"],
		["Television", "Computer"]
	],
	culture: [
		["Football", "Rugby"],
		["Tennis", "Badminton"],
		["Ski", "Snowboard"],
		["Dance", "Gymnastics"],
		["Novel", "Short story"],
		["Movie", "Series"],
		["Song", "Melody"],
		["Photo", "Painting"],
		["Pirate", "Viking"],
		["Magician", "Wizard"],
		["Vampire", "Werewolf"],
		["King", "Emperor"],
		["Castle", "Palace"],
		["Dragon", "Dinosaur"],
		["Superhero", "Villain"]
	],
	manga: [
		["Naruto", "Sasuke"],
		["Goku", "Vegeta"],
		["Luffy", "Zoro"],
		["Pikachu", "Eevee"],
		["Totoro", "Chihiro"],
		["Tanjiro", "Nezuko"],
		["Eren", "Levi"],
		["Light", "L"],
		["Gon", "Killua"],
		["Saitama", "Genos"],
		["Ninja", "Samurai"],
		["Mecha", "Kaiju"],
		["Manga", "Anime"],
		["Pokemon", "Digimon"],
		["Shonen", "Seinen"]
	]
};
function flatten(lang, raw) {
	const out = [];
	for (const [category, pairs] of Object.entries(raw)) pairs.forEach(([civilian, undercover], i) => {
		out.push({
			id: `${lang}-${category}-${i}`,
			civilian,
			undercover,
			category
		});
	});
	return out;
}
var WORDS = {
	fr: flatten("fr", FR),
	en: flatten("en", EN)
};
function pairsFor(lang, categories, usedIds) {
	const set = new Set(categories);
	const all = WORDS[lang].filter((p) => set.has(p.category));
	const fresh = all.filter((p) => !usedIds.includes(p.id));
	return fresh.length > 0 ? fresh : all;
}
function pickPair(lang, categories, usedIds) {
	const pool = pairsFor(lang, categories, usedIds);
	if (pool.length === 0) return null;
	return pool[Math.floor(Math.random() * pool.length)] ?? null;
}
var initial = {
	version: 1,
	lang: "fr",
	setupNames: [...[
		"Léa",
		"Marc",
		"Inès",
		"Tom",
		"Sofia"
	]],
	undercoverCount: 1,
	mrWhiteCount: 1,
	categories: [...ALL_CATEGORIES],
	customCivilian: "",
	customUndercover: "",
	useCustom: false,
	secretVote: true,
	phase: "home",
	dealIndex: 0,
	players: [],
	civilianWord: "",
	undercoverWord: "",
	pairId: null,
	usedPairIds: [],
	round: 1,
	speechLap: 1,
	speakerId: null,
	spokenIds: [],
	hints: [],
	voterId: null,
	voterQueue: [],
	ballots: {},
	pendingVote: null,
	tiedIds: null,
	didRevote: false,
	lastEliminatedId: null,
	voteCounts: {},
	winner: null,
	scores: {},
	guess: "",
	guessWrong: false,
	rulesOpen: false,
	abortOpen: false,
	mode: "local",
	selfId: null,
	roomCode: null,
	myName: "",
	myWord: "",
	readyIds: [],
	pairHidden: false,
	joinCode: "",
	hostId: null,
	joinIntent: "create",
	hostPlays: false
};
function filledNames(names) {
	return names.map((n) => n.trim()).filter(Boolean);
}
function roleFields(n, u, w) {
	const r = clampRoles(n, u, w);
	return {
		undercoverCount: r.undercover,
		mrWhiteCount: r.mrWhite
	};
}
function suggestedFields(n) {
	const r = suggestedRoles(n);
	return {
		undercoverCount: r.undercover,
		mrWhiteCount: r.mrWhite
	};
}
function playerCount(names) {
	return Math.max(3, filledNames(names).length || names.length);
}
function persistable(s) {
	const online = s.mode !== "local";
	return {
		version: s.version,
		lang: s.lang,
		setupNames: s.setupNames,
		undercoverCount: s.undercoverCount,
		mrWhiteCount: s.mrWhiteCount,
		categories: s.categories,
		customCivilian: s.customCivilian,
		customUndercover: s.customUndercover,
		useCustom: s.useCustom,
		secretVote: s.secretVote,
		phase: online || s.phase === "join" || s.phase === "lobby" ? "home" : s.phase,
		dealIndex: online ? 0 : s.dealIndex,
		players: online ? [] : s.players,
		civilianWord: online ? "" : s.civilianWord,
		undercoverWord: online ? "" : s.undercoverWord,
		pairId: s.pairId,
		usedPairIds: s.usedPairIds,
		round: online ? 1 : s.round,
		speechLap: online ? 1 : s.speechLap,
		speakerId: online ? null : s.speakerId,
		spokenIds: online ? [] : s.spokenIds,
		hints: online ? [] : s.hints,
		voterId: online ? null : s.voterId,
		voterQueue: online ? [] : s.voterQueue,
		ballots: online ? {} : s.ballots,
		pendingVote: null,
		tiedIds: online ? null : s.tiedIds,
		didRevote: false,
		lastEliminatedId: online ? null : s.lastEliminatedId,
		voteCounts: online ? {} : s.voteCounts,
		winner: online ? null : s.winner,
		scores: s.scores,
		guess: "",
		guessWrong: false,
		rulesOpen: false,
		abortOpen: false,
		mode: "local",
		selfId: null,
		roomCode: null,
		myName: s.myName,
		myWord: "",
		readyIds: [],
		pairHidden: s.pairHidden,
		joinCode: "",
		hostId: null,
		joinIntent: "create",
		hostPlays: s.hostPlays
	};
}
function takePair(s, forceNew) {
	let civilianWord = forceNew ? "" : s.customCivilian.trim();
	let undercoverWord = forceNew ? "" : s.customUndercover.trim();
	let pairId = forceNew ? null : s.pairId;
	let usedPairIds = s.usedPairIds;
	if (!civilianWord || !undercoverWord) {
		const pair = pickPair(s.lang, s.categories, s.usedPairIds);
		if (!pair) return null;
		civilianWord = pair.civilian;
		undercoverWord = pair.undercover;
		pairId = pair.id;
		usedPairIds = [...s.usedPairIds, pair.id].slice(-200);
	}
	return {
		civilianWord,
		undercoverWord,
		pairId,
		usedPairIds
	};
}
var useGame = create()(persist((set, get) => ({
	...initial,
	setLang: (lang) => set({ lang }),
	setName: (index, name) => set((s) => {
		const setupNames = s.setupNames.map((n, i) => i === index ? name : n);
		return {
			setupNames,
			...roleFields(playerCount(setupNames), s.undercoverCount, s.mrWhiteCount)
		};
	}),
	addPlayer: () => set((s) => {
		if (s.setupNames.length >= 16) return s;
		const setupNames = [...s.setupNames, ""];
		return {
			setupNames,
			...roleFields(playerCount(setupNames), s.undercoverCount, s.mrWhiteCount)
		};
	}),
	removePlayer: (index) => set((s) => {
		if (s.setupNames.length <= 3) return s;
		const setupNames = s.setupNames.filter((_, i) => i !== index);
		return {
			setupNames,
			...suggestedFields(playerCount(setupNames))
		};
	}),
	setUndercover: (n, total) => set((s) => roleFields(total ?? playerCount(s.setupNames), n, s.mrWhiteCount)),
	setMrWhite: (n, total) => set((s) => roleFields(total ?? playerCount(s.setupNames), s.undercoverCount, n)),
	toggleCategory: (c) => set((s) => {
		const has = s.categories.includes(c);
		if (has && s.categories.length === 1) return s;
		return { categories: has ? s.categories.filter((x) => x !== c) : [...s.categories, c] };
	}),
	setCustom: (field, value) => set(field === "civilian" ? { customCivilian: value } : { customUndercover: value }),
	setUseCustom: (v) => set({ useCustom: v }),
	setSecretVote: (v) => set({ secretVote: v }),
	setGuess: (v) => set({
		guess: v,
		guessWrong: false
	}),
	setRulesOpen: (v) => set({ rulesOpen: v }),
	setAbortOpen: (v) => set({ abortOpen: v }),
	goHome: () => set({
		phase: "home",
		abortOpen: false,
		rulesOpen: false,
		players: [],
		winner: null,
		mode: "local",
		roomCode: null,
		selfId: null,
		myWord: "",
		readyIds: [],
		hostId: null
	}),
	goSetup: () => set({
		phase: "setup",
		abortOpen: false,
		mode: "local",
		roomCode: null,
		hostId: null
	}),
	startGame: (opts) => {
		const s = get();
		const names = filledNames(s.setupNames);
		if (names.length < 3) return false;
		const roles = clampRoles(names.length, s.undercoverCount, s.mrWhiteCount);
		const pair = takePair(s, Boolean(opts?.newPair));
		if (!pair) return false;
		const { civilianWord, undercoverWord, pairId, usedPairIds } = pair;
		const players = dealPlayers(names.map((name) => ({ name })), roles.undercover, roles.mrWhite, civilianWord, undercoverWord);
		set({
			undercoverCount: roles.undercover,
			mrWhiteCount: roles.mrWhite,
			players,
			civilianWord,
			undercoverWord,
			pairId,
			usedPairIds,
			customCivilian: civilianWord,
			customUndercover: undercoverWord,
			dealIndex: 0,
			phase: "dealHandoff",
			round: 1,
			speechLap: 1,
			speakerId: null,
			spokenIds: [],
			hints: [],
			voterId: null,
			voterQueue: [],
			ballots: {},
			pendingVote: null,
			tiedIds: null,
			didRevote: false,
			lastEliminatedId: null,
			voteCounts: {},
			winner: null,
			guess: "",
			guessWrong: false,
			abortOpen: false,
			readyIds: [],
			myWord: "",
			mode: "local"
		});
		return true;
	},
	confirmIdentity: () => set({ phase: "dealReveal" }),
	memorized: () => set((s) => ({
		phase: "dealHandoff",
		dealIndex: s.dealIndex + 1
	})),
	beginTable: () => set((s) => ({
		phase: "table",
		speakerId: nextAliveId(s.players, null),
		spokenIds: [],
		speechLap: 1
	})),
	submitHint: (text) => set((s) => {
		if (!s.speakerId) return s;
		const hintText = text.trim();
		const hints = hintText ? [...s.hints, {
			round: s.round,
			playerId: s.speakerId,
			text: hintText
		}] : s.hints;
		const spokenIds = [...s.spokenIds, s.speakerId];
		const allSpoken = s.players.filter((p) => p.alive).every((p) => spokenIds.includes(p.id));
		if (allSpoken && s.speechLap < speechLapsFor(s.players.length)) return {
			hints,
			spokenIds: [],
			speechLap: s.speechLap + 1,
			speakerId: nextAliveId(s.players, s.speakerId)
		};
		return {
			hints,
			spokenIds,
			speakerId: allSpoken ? s.speakerId : nextAliveId(s.players, s.speakerId)
		};
	}),
	startVote: () => set((s) => {
		if (s.mode !== "local") return {
			voterQueue: [],
			voterId: null,
			ballots: {},
			pendingVote: null,
			voteCounts: {},
			tiedIds: null,
			didRevote: false,
			phase: "votePick"
		};
		const queue = s.players.filter((p) => p.alive).map((p) => p.id);
		return {
			voterQueue: queue,
			voterId: queue[0] ?? null,
			ballots: {},
			pendingVote: null,
			voteCounts: {},
			tiedIds: null,
			didRevote: false,
			phase: s.secretVote ? "voteHandoff" : "votePick"
		};
	}),
	confirmVoter: () => set({ phase: "votePick" }),
	pickVote: (targetId) => set({ pendingVote: targetId }),
	castVote: () => set((s) => {
		if (!s.voterId || !s.pendingVote) return s;
		const ballots = {
			...s.ballots,
			[s.voterId]: s.pendingVote
		};
		const rest = s.voterQueue.filter((id) => id !== s.voterId);
		const nextVoter = rest[0] ?? null;
		if (!nextVoter) {
			const { counts, topIds } = tallyVotes(ballots);
			return {
				ballots,
				voterQueue: rest,
				voterId: null,
				pendingVote: null,
				phase: "voteResult",
				voteCounts: counts,
				tiedIds: topIds.length === 1 ? null : topIds
			};
		}
		return {
			ballots,
			voterQueue: rest,
			voterId: nextVoter,
			pendingVote: null,
			phase: s.secretVote ? "voteHandoff" : "votePick"
		};
	}),
	resolveVotes: () => set((s) => {
		const { topIds, counts } = tallyVotes(s.ballots);
		if (topIds.length !== 1) return {
			voteCounts: counts,
			tiedIds: topIds,
			phase: "voteResult"
		};
		const eliminatedId = topIds[0];
		return {
			players: s.players.map((p) => p.id === eliminatedId ? {
				...p,
				alive: false
			} : p),
			lastEliminatedId: eliminatedId,
			voteCounts: counts,
			tiedIds: null,
			phase: "eliminated",
			winner: null
		};
	}),
	beginRevote: () => set((s) => {
		if (s.mode !== "local") return {
			voterQueue: [],
			voterId: null,
			ballots: {},
			pendingVote: null,
			didRevote: true,
			phase: "votePick"
		};
		const queue = s.players.filter((p) => p.alive).map((p) => p.id);
		return {
			voterQueue: queue,
			voterId: queue[0] ?? null,
			ballots: {},
			pendingVote: null,
			didRevote: true,
			phase: s.secretVote ? "voteHandoff" : "votePick"
		};
	}),
	skipTie: () => set((s) => ({
		phase: "table",
		round: s.round + 1,
		speechLap: 1,
		spokenIds: [],
		speakerId: nextAliveId(s.players, s.speakerId),
		tiedIds: null,
		didRevote: false,
		ballots: {},
		pendingVote: null
	})),
	continueAfterElim: () => set((s) => {
		if (s.players.find((p) => p.id === s.lastEliminatedId)?.role === "mrwhite") return {
			phase: "mrWhiteGuess",
			guess: "",
			guessWrong: false
		};
		const winner = evaluateWinner(s.players);
		if (winner) return {
			winner,
			scores: awardScores(s.players, winner, s.scores),
			phase: "gameover"
		};
		return {
			phase: "table",
			round: s.round + 1,
			speechLap: 1,
			spokenIds: [],
			speakerId: nextAliveId(s.players, s.lastEliminatedId),
			ballots: {},
			pendingVote: null,
			tiedIds: null,
			didRevote: false
		};
	}),
	submitWhiteGuess: () => set((s) => {
		if (wordsMatch(s.guess, s.civilianWord)) {
			const winner = "mrwhite";
			return {
				winner,
				guessWrong: false,
				scores: awardScores(s.players, winner, s.scores),
				phase: "gameover"
			};
		}
		const winner = evaluateWinner(s.players);
		if (winner) return {
			winner,
			guessWrong: true,
			scores: awardScores(s.players, winner, s.scores),
			phase: "gameover"
		};
		return {
			guessWrong: true,
			phase: "table",
			round: s.round + 1,
			speechLap: 1,
			spokenIds: [],
			speakerId: nextAliveId(s.players, s.lastEliminatedId),
			guess: ""
		};
	}),
	rematch: () => {
		if (get().mode === "local") get().startGame({ newPair: true });
	},
	resetScores: () => set({ scores: {} }),
	generatePair: () => {
		const s = get();
		const pair = pickPair(s.lang, s.categories, s.usedPairIds);
		if (!pair) return false;
		set({
			useCustom: true,
			customCivilian: pair.civilian,
			customUndercover: pair.undercover,
			pairId: pair.id,
			usedPairIds: [...s.usedPairIds, pair.id].slice(-200),
			pairHidden: false
		});
		return true;
	},
	setPairHidden: (v) => set({ pairHidden: v }),
	setMyName: (v) => set({ myName: v }),
	setJoinCode: (v) => set({ joinCode: normalizeRoomCode(v) }),
	setJoinIntent: (v) => set({ joinIntent: v }),
	goCreate: () => set({
		phase: "join",
		joinCode: "",
		joinIntent: "create",
		abortOpen: false
	}),
	goJoin: () => set({
		phase: "join",
		joinIntent: "join",
		abortOpen: false
	}),
	createSalon: () => {
		if (!get().myName.trim()) return;
		set({
			mode: "host",
			roomCode: makeRoomCode(),
			phase: "lobby",
			players: [],
			winner: null,
			abortOpen: false
		});
	},
	joinSalon: () => {
		const s = get();
		const name = s.myName.trim();
		const code = normalizeRoomCode(s.joinCode);
		if (!name || code.length < 4) return false;
		set({
			mode: "guest",
			roomCode: code,
			joinCode: code,
			phase: "lobby",
			abortOpen: false
		});
		return true;
	},
	leaveRoom: () => set({
		mode: "local",
		roomCode: null,
		selfId: null,
		hostId: null,
		phase: "home",
		myWord: "",
		readyIds: [],
		players: [],
		abortOpen: false
	}),
	setSelfId: (id) => set({ selfId: id }),
	setHostId: (id) => set({ hostId: id }),
	setMyWord: (word) => set({ myWord: word }),
	applySnap: (snap) => set((s) => ({
		phase: snap.phase,
		players: snap.players.map((p) => {
			const prev = s.players.find((x) => x.id === p.id);
			return {
				id: p.id,
				name: p.name,
				alive: p.alive,
				role: p.role ?? prev?.role ?? "civilian",
				word: prev?.word ?? (p.id === s.selfId ? s.myWord : "")
			};
		}),
		round: snap.round,
		speakerId: snap.speakerId,
		spokenIds: snap.spokenIds,
		hints: snap.hints,
		voteCounts: snap.voteCounts,
		tiedIds: snap.tiedIds,
		lastEliminatedId: snap.lastEliminatedId,
		winner: snap.winner,
		civilianWord: snap.civilianWord || s.civilianWord,
		undercoverWord: snap.undercoverWord || s.undercoverWord,
		guessWrong: snap.guessWrong,
		readyIds: snap.readyIds,
		hostId: snap.hostId || s.hostId,
		ballots: Object.fromEntries(snap.votedIds.map((id) => [id, s.ballots[id] ?? "_"]))
	})),
	markReady: (id) => set((s) => {
		const readyIds = s.readyIds.includes(id) ? s.readyIds : [...s.readyIds, id];
		if (s.players.length > 0 && s.players.every((p) => readyIds.includes(p.id))) return {
			readyIds,
			phase: "table",
			speakerId: nextAliveId(s.players, null),
			spokenIds: [],
			speechLap: 1
		};
		return { readyIds };
	}),
	recordBallot: (voterId, targetId) => set((s) => {
		const ballots = {
			...s.ballots,
			[voterId]: targetId
		};
		if (s.players.filter((p) => p.alive).every((p) => ballots[p.id])) {
			const { counts, topIds } = tallyVotes(ballots);
			return {
				ballots,
				pendingVote: null,
				phase: "voteResult",
				voteCounts: counts,
				tiedIds: topIds.length === 1 ? null : topIds
			};
		}
		return {
			ballots,
			pendingVote: null
		};
	}),
	startOnlineGame: (seats, opts) => {
		const s = get();
		if (seats.length < 3) return false;
		const roles = clampRoles(seats.length, s.undercoverCount, s.mrWhiteCount);
		const pair = takePair(s, Boolean(opts?.newPair));
		if (!pair) return false;
		const { civilianWord, undercoverWord, pairId, usedPairIds } = pair;
		const players = dealPlayers(seats, roles.undercover, roles.mrWhite, civilianWord, undercoverWord);
		const me = players.find((p) => p.id === s.selfId);
		set({
			undercoverCount: roles.undercover,
			mrWhiteCount: roles.mrWhite,
			players,
			civilianWord,
			undercoverWord,
			pairId,
			usedPairIds,
			customCivilian: civilianWord,
			customUndercover: undercoverWord,
			myWord: me?.word ?? "",
			phase: "word",
			round: 1,
			speechLap: 1,
			speakerId: null,
			spokenIds: [],
			hints: [],
			readyIds: [],
			ballots: {},
			pendingVote: null,
			tiedIds: null,
			didRevote: false,
			lastEliminatedId: null,
			voteCounts: {},
			winner: null,
			guess: "",
			guessWrong: false
		});
		return true;
	},
	startNetVote: () => set({
		phase: "votePick",
		ballots: {},
		pendingVote: null,
		voteCounts: {},
		tiedIds: null,
		didRevote: false
	}),
	setHostPlays: (v) => set({ hostPlays: v })
}), {
	name: "undercover-save-v1",
	version: 2,
	skipHydration: true,
	partialize: (s) => persistable(s)
}));
function DealScreen() {
	const s = useGame();
	const x = t(s.lang);
	const done = s.dealIndex >= s.players.length;
	const player = s.players[s.dealIndex];
	const revealing = s.phase === "dealReveal" && player;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.allDealt }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
				className: "mt-3 max-w-[12ch]",
				children: x.putDown
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "lg",
			className: "w-full",
			onClick: s.beginTable,
			children: x.startRound
		})]
	});
	if (!player) return null;
	if (revealing) {
		const isWhite = player.role === "mrwhite";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: player.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: isWhite ? x.noWord : x.yourWord
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-5xl leading-none tracking-tight text-balance uppercase",
							children: isWhite ? "Mr. White" : player.word
						}),
						isWhite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-[28ch] text-pretty text-base leading-relaxed text-muted",
							children: x.youAreWhite
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-subtle",
							children: x.hideNow
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					className: "w-full",
					onClick: s.memorized,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }), x.memorized]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => s.setAbortOpen(true),
				className: "self-end text-sm text-subtle hover:text-fg",
				children: x.abort
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.passTo }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
						className: "mt-3",
						children: player.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-subtle",
						children: [
							s.dealIndex + 1,
							" / ",
							s.players.length
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				className: "w-full",
				onClick: s.confirmIdentity,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), x.iAm]
			})
		]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg bg-elevated px-3.5 text-base text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.12)] placeholder:text-subtle outline-none transition-[box-shadow] duration-(--motion-quick) ease-(--ease-out) focus-visible:shadow-[0_0_0_1px_rgba(238,234,228,0.4)]", className),
		...props
	});
}
var FAST_POLL_MS = 400;
var IDLE_POLL_MS = 2e3;
var PING_INTERVAL_MS = 2e3;
var STALL_MS = 1e4;
var MAX_RECOVERY_ATTEMPTS = 3;
var SIGNAL_RETRY_DELAYS_MS = [250, 750];
function defaultIceServers() {
	return [{ urls: ["stun:stun.l.google.com:19302", "stun:stun.cloudflare.com:3478"] }];
}
var P2PRoom = class {
	opts;
	peers = /* @__PURE__ */ new Map();
	/** Per-remote-peer signal delivery chains (order-preserving). */
	signalQueues = /* @__PURE__ */ new Map();
	cursor = 0;
	pollTimer = null;
	pingTimer = null;
	closed = false;
	everPolled = false;
	lastPeersFingerprint = "";
	constructor(opts) {
		this.opts = opts;
	}
	/**
	* The first poll IS the join: it registers this peer and returns the
	* roster. A failed first poll (cold DB, offline tab) must not strand the
	* room: the loop and timers start regardless and the next poll retries.
	*/
	async join() {
		try {
			await this.pollOnce();
		} catch {}
		if (this.closed) return;
		this.schedulePoll(this.anyPairConnecting() ? FAST_POLL_MS : IDLE_POLL_MS);
		this.pingTimer = setInterval(() => {
			this.pingAll();
			this.watchdog();
		}, PING_INTERVAL_MS);
	}
	close() {
		this.closed = true;
		if (this.pollTimer) clearTimeout(this.pollTimer);
		if (this.pingTimer) clearInterval(this.pingTimer);
		for (const slot of this.peers.values()) slot.pc.close();
		this.peers.clear();
		fetch("/api/rtc", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				op: "leave",
				room: this.opts.room,
				peer: this.opts.selfId
			}),
			keepalive: true
		}).catch(() => {});
	}
	/** Send on the unreliable game-state channel (drops stale packets). */
	broadcast(data) {
		const wire = JSON.stringify({
			t: "d",
			d: data
		});
		for (const slot of this.peers.values()) if (slot.state?.readyState === "open") slot.state.send(wire);
	}
	/** Send reliably (ordered) to one peer, or to all when peerId is omitted. */
	send(data, peerId) {
		const wire = JSON.stringify({
			t: "d",
			d: data
		});
		const targets = peerId ? [this.peers.get(peerId)] : [...this.peers.values()];
		for (const slot of targets) if (slot?.reliable?.readyState === "open") slot.reliable.send(wire);
	}
	peerList() {
		return [...this.peers.values()].map((s) => ({ ...s.info }));
	}
	schedulePoll(delay) {
		if (this.closed) return;
		if (this.pollTimer) clearTimeout(this.pollTimer);
		this.pollTimer = setTimeout(() => void this.poll(), delay);
	}
	anyPairConnecting() {
		for (const s of this.peers.values()) {
			if (s.terminal) continue;
			if (s.info.connectionState !== "connected") return true;
		}
		return false;
	}
	async pollOnce() {
		const params = new URLSearchParams({
			room: this.opts.room,
			peer: this.opts.selfId,
			name: this.opts.name ?? "",
			since: String(this.cursor)
		});
		const res = await fetch(`/api/rtc?${params}`);
		if (this.closed) return;
		if (!res.ok) throw new Error(`signaling poll failed: ${res.status}`);
		const body = await res.json();
		if (this.closed) return;
		if (!this.everPolled) {
			this.everPolled = true;
			this.opts.onConnected?.();
		}
		this.reconcileRoster(body.peers);
		const roster = new Set(body.peers.map((p) => p.id));
		for (const sig of body.signals) {
			this.cursor = Math.max(this.cursor, sig.id);
			await this.onSignal(sig.from, sig.kind, sig.payload, roster);
			if (this.closed) return;
		}
	}
	async poll() {
		if (this.closed) return;
		try {
			await this.pollOnce();
		} catch {}
		this.schedulePoll(this.anyPairConnecting() ? FAST_POLL_MS : IDLE_POLL_MS);
	}
	reconcileRoster(peers) {
		const alive = new Set(peers.map((p) => p.id));
		for (const p of peers) {
			if (p.id === this.opts.selfId) continue;
			const existing = this.peers.get(p.id);
			if (existing) existing.info.name = p.name;
			else this.connectTo(p.id, p.name, this.opts.selfId > p.id);
		}
		for (const [id, slot] of this.peers) if (!alive.has(id)) {
			slot.pc.close();
			this.peers.delete(id);
		}
		this.emitPeers();
	}
	connectTo(peerId, name, initiator) {
		if (this.closed) return null;
		const pc = new RTCPeerConnection({ iceServers: this.opts.iceServers ?? defaultIceServers() });
		const slot = {
			pc,
			makingOffer: false,
			ignoreOffer: false,
			pendingCandidates: [],
			lastProgressAt: Date.now(),
			recoveryAttempts: 0,
			info: {
				id: peerId,
				name,
				connectionState: pc.connectionState,
				candidateType: null,
				rttMs: null
			}
		};
		this.peers.set(peerId, slot);
		pc.onicecandidate = (e) => {
			if (e.candidate) this.sendSignal(peerId, "ice", e.candidate.toJSON());
		};
		pc.onconnectionstatechange = () => {
			slot.info.connectionState = pc.connectionState;
			if (pc.connectionState === "connecting" || pc.connectionState === "connected") slot.lastProgressAt = Date.now();
			if (pc.connectionState === "connected") {
				slot.recoveryAttempts = 0;
				slot.terminal = false;
				this.readCandidateType(slot);
			}
			this.emitPeers();
			if (pc.connectionState === "failed") pc.restartIce();
			if (pc.connectionState === "failed" || pc.connectionState === "disconnected") this.schedulePoll(FAST_POLL_MS);
		};
		pc.onnegotiationneeded = async () => {
			try {
				slot.makingOffer = true;
				await pc.setLocalDescription();
				await this.sendSignal(peerId, "offer", pc.localDescription.toJSON());
			} catch {} finally {
				slot.makingOffer = false;
			}
		};
		pc.ondatachannel = (e) => this.attachChannel(slot, e.channel);
		if (initiator) {
			this.attachChannel(slot, pc.createDataChannel("state", {
				ordered: false,
				maxRetransmits: 0
			}));
			this.attachChannel(slot, pc.createDataChannel("reliable", { ordered: true }));
		}
		return slot;
	}
	attachChannel(slot, channel) {
		if (channel.label === "state") slot.state = channel;
		else slot.reliable = channel;
		channel.onopen = () => {
			slot.lastProgressAt = Date.now();
		};
		channel.onmessage = (e) => {
			let msg;
			try {
				msg = JSON.parse(e.data);
			} catch {
				return;
			}
			if (msg.t === "ping") {
				if (slot.state?.readyState === "open") slot.state.send(JSON.stringify({ t: "pong" }));
			} else if (msg.t === "pong") {
				if (slot.pingSentAt) {
					slot.info.rttMs = Math.round(performance.now() - slot.pingSentAt);
					slot.pingSentAt = void 0;
					this.emitPeers();
				}
			} else this.opts.onMessage?.(slot.info.id, msg.d, channel.label === "state" ? "state" : "reliable");
		};
	}
	/** Apply buffered ICE candidates once a remote description is in place. */
	async flushPendingCandidates(slot) {
		while (slot.pendingCandidates.length > 0) {
			const candidate = slot.pendingCandidates.shift();
			try {
				await slot.pc.addIceCandidate(candidate);
			} catch (err) {
				if (!slot.ignoreOffer) console.warn("[p2p] addIceCandidate failed:", err);
			}
			if (this.closed) return;
		}
	}
	async onSignal(from, kind, payload, roster) {
		if (this.closed) return;
		let slot = this.peers.get(from);
		if (!slot) {
			if (!roster.has(from)) return;
			const created = this.connectTo(from, "", false);
			if (!created) return;
			slot = created;
		}
		const polite = this.opts.selfId < from;
		try {
			if (kind === "offer" || kind === "answer") {
				const description = payload;
				const collision = kind === "offer" && (slot.makingOffer || slot.pc.signalingState !== "stable");
				slot.ignoreOffer = !polite && collision;
				if (slot.ignoreOffer) return;
				try {
					await slot.pc.setRemoteDescription(description);
				} catch (err) {
					if (kind !== "offer" || slot.recreatedForOffer) throw err;
					const attempts = slot.recoveryAttempts;
					const name = slot.info.name;
					slot.pc.close();
					this.peers.delete(from);
					const fresh = this.connectTo(from, name, false);
					if (!fresh) return;
					fresh.recoveryAttempts = attempts;
					fresh.recreatedForOffer = true;
					slot = fresh;
					await slot.pc.setRemoteDescription(description);
				}
				if (this.closed) return;
				await this.flushPendingCandidates(slot);
				if (this.closed) return;
				if (kind === "offer") {
					await slot.pc.setLocalDescription();
					if (this.closed) return;
					await this.sendSignal(from, "answer", slot.pc.localDescription.toJSON());
				}
			} else if (kind === "ice") {
				const candidate = payload;
				if (!slot.pc.remoteDescription) {
					slot.pendingCandidates.push(candidate);
					return;
				}
				try {
					await slot.pc.addIceCandidate(candidate);
				} catch (err) {
					if (!slot.ignoreOffer) console.warn("[p2p] addIceCandidate failed:", err);
				}
			}
		} catch {}
	}
	/**
	* Signals are serialized per remote peer (a candidate must never overtake
	* its SDP into the DB) and retried on failure with short backoff.
	*/
	sendSignal(to, kind, payload) {
		const next = (this.signalQueues.get(to) ?? Promise.resolve()).then(() => this.postSignal(to, kind, payload));
		this.signalQueues.set(to, next.catch(() => {}));
		return next;
	}
	async postSignal(to, kind, payload) {
		for (let attempt = 0;; attempt++) {
			if (this.closed) return;
			try {
				const res = await fetch("/api/rtc", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						op: "signal",
						room: this.opts.room,
						from: this.opts.selfId,
						to,
						kind,
						payload
					})
				});
				if (res.ok) return;
				throw new Error(`signal POST failed: ${res.status}`);
			} catch (err) {
				if (attempt >= SIGNAL_RETRY_DELAYS_MS.length) {
					console.warn(`[p2p] signal ${kind} to ${to} failed after retries`, err);
					return;
				}
				await new Promise((r) => setTimeout(r, SIGNAL_RETRY_DELAYS_MS[attempt]));
			}
		}
	}
	pingAll() {
		const wire = JSON.stringify({ t: "ping" });
		for (const slot of this.peers.values()) {
			if (slot.state?.readyState !== "open") continue;
			const stale = slot.pingSentAt !== void 0 && performance.now() - slot.pingSentAt > 2 * PING_INTERVAL_MS;
			if (slot.pingSentAt === void 0 || stale) {
				slot.pingSentAt = performance.now();
				slot.state.send(wire);
			}
		}
	}
	/**
	* Stuck-pair recovery, piggybacked on the ping interval. A pair that has
	* made no progress for STALL_MS gets rebuilt by the dialer with a FRESH
	* RTCPeerConnection (new DTLS identity — fixes the suspend/resume
	* fingerprint wedge). After MAX_RECOVERY_ATTEMPTS the pair is terminal:
	* visible to the app as its last connectionState, ignored by fast-poll.
	*/
	watchdog() {
		if (this.closed) return;
		const now = Date.now();
		for (const [peerId, slot] of this.peers) {
			const live = slot.pc.connectionState;
			if (live !== slot.info.connectionState) {
				slot.info.connectionState = live;
				if (live === "connecting" || live === "connected") slot.lastProgressAt = now;
				this.emitPeers();
			}
			if (slot.terminal || live === "connected") continue;
			if (now - slot.lastProgressAt <= STALL_MS) continue;
			if (slot.recoveryAttempts >= MAX_RECOVERY_ATTEMPTS) {
				slot.terminal = true;
				this.emitPeers();
				continue;
			}
			slot.recoveryAttempts += 1;
			slot.lastProgressAt = now;
			if (this.opts.selfId > peerId) {
				const { name } = slot.info;
				const attempts = slot.recoveryAttempts;
				slot.pc.close();
				this.peers.delete(peerId);
				const fresh = this.connectTo(peerId, name, true);
				if (fresh) fresh.recoveryAttempts = attempts;
				this.schedulePoll(FAST_POLL_MS);
			}
		}
	}
	async readCandidateType(slot) {
		try {
			const stats = await slot.pc.getStats();
			let selected;
			stats.forEach((s) => {
				if (s.type === "candidate-pair" && s.nominated) selected = s;
			});
			const localId = selected?.localCandidateId;
			if (localId) {
				const local = stats.get(localId);
				slot.info.candidateType = local?.candidateType ?? null;
				this.emitPeers();
			}
		} catch {}
	}
	emitPeers() {
		const list = this.peerList();
		const fingerprint = JSON.stringify(list.map((p) => [
			p.id,
			p.name,
			p.connectionState,
			p.candidateType,
			p.rttMs
		]));
		if (fingerprint === this.lastPeersFingerprint) return;
		this.lastPeersFingerprint = fingerprint;
		this.opts.onPeersChanged?.(list);
	}
};
/**
* React binding for P2PRoom. Identity and room id are captured once on mount
* (useState initializers) so re-renders never tear down the mesh: the P2PRoom
* instance lives exactly as long as the component that mounted it, and
* changing `room`/`name` requires a remount (key the component on them).
*/
function defaultRoom() {
	if (typeof window === "undefined") return "room-ssr";
	return `room-${window.location.hostname.split(".")[0]}`.slice(0, 64);
}
function useP2PRoom(options = {}) {
	const [selfId] = (0, import_react.useState)(() => `p-${Math.random().toString(36).slice(2, 10)}`);
	const [room] = (0, import_react.useState)(() => options.room ?? defaultRoom());
	const [name] = (0, import_react.useState)(() => options.name ?? selfId);
	const [peers, setPeers] = (0, import_react.useState)([]);
	const [joined, setJoined] = (0, import_react.useState)(false);
	const roomRef = (0, import_react.useRef)(null);
	const listeners = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const p2p = new P2PRoom({
			room,
			selfId,
			name,
			onPeersChanged: setPeers,
			onMessage: (from, data, channel) => {
				for (const fn of listeners.current) fn(from, data, channel);
			},
			onConnected: () => setJoined(true)
		});
		roomRef.current = p2p;
		p2p.join();
		return () => {
			roomRef.current = null;
			p2p.close();
		};
	}, [
		room,
		selfId,
		name
	]);
	return {
		selfId,
		room,
		peers,
		joined,
		broadcast: (0, import_react.useCallback)((data) => roomRef.current?.broadcast(data), []),
		send: (0, import_react.useCallback)((data, peerId) => roomRef.current?.send(data, peerId), []),
		onMessage: (0, import_react.useCallback)((fn) => {
			listeners.current.add(fn);
			return () => {
				listeners.current.delete(fn);
			};
		}, [])
	};
}
function isNetMsg(data) {
	return Boolean(data && typeof data === "object" && "t" in data);
}
var NetCtx = (0, import_react.createContext)(null);
function useNetPlay() {
	const ctx = (0, import_react.useContext)(NetCtx);
	const mode = useGame((s) => s.mode);
	const selfId = useGame((s) => s.selfId);
	return {
		isNet: mode !== "local",
		isHost: mode === "host",
		isGuest: mode === "guest",
		selfId,
		sendToHost: ctx?.sendToHost ?? (() => {}),
		peers: ctx?.peers ?? [],
		joined: ctx?.joined ?? false,
		startHostGame: ctx?.startHostGame ?? (() => false)
	};
}
function toPublic(s, hostId) {
	const revealAll = s.phase === "gameover";
	return {
		phase: s.phase,
		players: s.players.map((p) => ({
			id: p.id,
			name: p.name,
			alive: p.alive,
			role: revealAll || !p.alive && s.phase !== "word" ? p.role : void 0
		})),
		round: s.round,
		speakerId: s.speakerId,
		spokenIds: s.spokenIds,
		hints: s.hints,
		votedIds: Object.keys(s.ballots),
		voteCounts: s.phase === "voteResult" || s.phase === "eliminated" || s.phase === "gameover" ? s.voteCounts : {},
		tiedIds: s.tiedIds,
		lastEliminatedId: s.lastEliminatedId,
		winner: s.winner,
		civilianWord: revealAll ? s.civilianWord : "",
		undercoverWord: revealAll ? s.undercoverWord : "",
		guessWrong: s.guessWrong,
		hostId,
		readyIds: s.readyIds
	};
}
function NetSession({ code, name, isHost, children }) {
	const p2p = useP2PRoom({
		room: code,
		name
	});
	(0, import_react.useEffect)(() => {
		useGame.getState().setSelfId(p2p.selfId);
		if (isHost) useGame.getState().setHostId(p2p.selfId);
	}, [isHost, p2p.selfId]);
	(0, import_react.useEffect)(() => {
		if (!isHost) return;
		return useGame.subscribe((s) => {
			if (s.phase === "lobby" || s.phase === "home" || s.phase === "join" || s.phase === "setup") return;
			p2p.send({
				t: "snap",
				state: toPublic(s, p2p.selfId)
			});
		});
	}, [isHost, p2p]);
	(0, import_react.useEffect)(() => {
		if (!isHost) return;
		for (const peer of p2p.peers) if (peer.connectionState === "connected") p2p.send({
			t: "welcome",
			hostId: p2p.selfId
		}, peer.id);
	}, [
		isHost,
		p2p,
		p2p.peers
	]);
	(0, import_react.useEffect)(() => {
		return p2p.onMessage((from, data, channel) => {
			if (channel !== "reliable" || !isNetMsg(data)) return;
			const s = useGame.getState();
			if (isHost) {
				if (data.t === "hello") {
					p2p.send({
						t: "welcome",
						hostId: p2p.selfId
					}, from);
					if (s.phase !== "lobby" && s.phase !== "home" && s.phase !== "join") {
						const pl = s.players.find((p) => p.id === from);
						if (!pl) {
							p2p.send({ t: "full" }, from);
							return;
						}
						p2p.send({
							t: "card",
							word: pl.word
						}, from);
						p2p.send({
							t: "snap",
							state: toPublic(s, p2p.selfId)
						}, from);
					}
					return;
				}
				if (data.t === "ready") s.markReady(from);
				if (data.t === "hint" && from === s.speakerId) s.submitHint(data.text);
				if (data.t === "vote") s.recordBallot(from, data.targetId);
				if (data.t === "guess") {
					s.setGuess(data.text);
					s.submitWhiteGuess();
				}
				return;
			}
			if (data.t === "welcome") s.setHostId(data.hostId);
			if (data.t === "snap") s.applySnap(data.state);
			if (data.t === "card") {
				s.setMyWord(data.word);
				useGame.setState((prev) => ({ players: prev.players.map((p) => p.id === prev.selfId ? {
					...p,
					word: data.word
				} : p) }));
			}
			if (data.t === "full") s.leaveRoom();
		});
	}, [isHost, p2p]);
	(0, import_react.useEffect)(() => {
		if (isHost || !p2p.joined) return;
		p2p.send({ t: "hello" });
	}, [
		isHost,
		p2p,
		p2p.joined
	]);
	const api = (0, import_react.useMemo)(() => ({
		sendToHost: (msg) => {
			if (isHost) return;
			const hostId = useGame.getState().hostId;
			if (hostId) p2p.send(msg, hostId);
			else p2p.send(msg);
		},
		peers: p2p.peers,
		joined: p2p.joined,
		selfId: p2p.selfId,
		startHostGame: () => {
			const hostPlays = useGame.getState().hostPlays;
			const connected = p2p.peers.filter((p) => p.connectionState === "connected");
			const maxGuests = hostPlays ? 7 : 8;
			const guestSeats = connected.slice(0, maxGuests).map((p) => ({
				id: p.id,
				name: p.name || "?"
			}));
			const seats = hostPlays ? [{
				id: p2p.selfId,
				name
			}, ...guestSeats] : guestSeats;
			const newPair = useGame.getState().phase === "gameover";
			if (!useGame.getState().startOnlineGame(seats, { newPair })) return false;
			const s = useGame.getState();
			for (const pl of s.players) {
				if (pl.id === p2p.selfId) continue;
				p2p.send({
					t: "card",
					word: pl.word
				}, pl.id);
			}
			p2p.send({
				t: "snap",
				state: toPublic(s, p2p.selfId)
			});
			return true;
		}
	}), [
		isHost,
		p2p,
		name
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetCtx.Provider, {
		value: api,
		children
	});
}
function EliminatedScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const victim = s.players.find((p) => p.id === s.lastEliminatedId);
	if (!victim) return null;
	const canAdvance = !net.isNet || net.isHost;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.eliminated }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
					className: "mt-3",
					children: victim.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-display text-3xl italic tracking-tight",
					children: [
						x.was,
						" ",
						roleLabel(s.lang, victim.role)
					]
				})
			]
		}), canAdvance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "lg",
			className: "w-full",
			onClick: s.continueAfterElim,
			children: x.next
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-3 text-center text-sm text-muted",
			children: x.waitAdmin
		})]
	});
}
function MrWhiteGuessScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const victim = s.players.find((p) => p.id === s.lastEliminatedId);
	if (!(!net.isNet || s.lastEliminatedId === s.selfId)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: victim?.name ?? x.mrWhite }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
				className: "mt-3",
				children: x.whiteGuessTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-sm text-muted",
				children: x.waitOthers
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-1 flex-col",
		onSubmit: (e) => {
			e.preventDefault();
			if (net.isGuest) {
				net.sendToHost({
					t: "guess",
					text: s.guess
				});
				return;
			}
			s.submitWhiteGuess();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: victim?.name ?? x.mrWhite }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
				className: "mt-3",
				children: x.whiteGuessTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-pretty text-sm text-muted",
				children: x.whiteGuessLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: s.guess,
					onChange: (e) => s.setGuess(e.target.value),
					placeholder: x.guessPlaceholder,
					autoFocus: true,
					autoCapitalize: "off"
				}), s.guessWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: x.wrongGuess
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "mt-auto w-full",
				type: "submit",
				disabled: !s.guess.trim(),
				children: x.submitGuess
			})
		]
	});
}
function GameOverScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	if (!s.winner) return null;
	const ranked = Object.entries(s.scores).sort((a, b) => b[1] - a[1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.roster }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
				className: "mt-3",
				children: winnerTitle(s.lang, s.winner)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.theWords }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.civilWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl tracking-tight",
						children: s.civilianWord
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.underWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl tracking-tight",
						children: s.undercoverWord
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-col gap-2",
				children: s.players.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-lg bg-elevated text-xs font-medium text-muted",
							children: initials(p.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [roleLabel(s.lang, p.role), p.role !== "mrwhite" ? ` · ${p.word}` : ""]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-xs", p.alive ? "text-ok" : "text-subtle"),
							children: p.alive ? x.alive : x.dead
						})
					]
				}, p.id))
			}),
			ranked.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.scores }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-1.5",
					children: ranked.map(([name, pts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted",
							children: [
								pts,
								" ",
								x.points
							]
						})]
					}, name))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 pt-4",
				children: [net.isGuest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted",
					children: x.waitAdmin
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: () => {
						if (net.isHost) net.startHostGame();
						else s.rematch();
					},
					children: x.rematch
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: net.isNet ? s.leaveRoom : s.goSetup,
						children: x.newGame
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: s.resetScores,
						children: x.resetScores
					})]
				})]
			})
		]
	});
}
function HomeScreen() {
	const lang = useGame((s) => s.lang);
	const setLang = useGame((s) => s.setLang);
	const goSetup = useGame((s) => s.goSetup);
	const goJoin = useGame((s) => s.goJoin);
	const goCreate = useGame((s) => s.goCreate);
	const setRulesOpen = useGame((s) => s.setRulesOpen);
	const x = t(lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.classified }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-lg bg-elevated p-1 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
					children: ["fr", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLang(code),
						className: cn("h-8 min-w-10 rounded-md px-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-(--motion-quick)", lang === code ? "bg-accent text-accent-fg" : "text-muted"),
						children: code
					}, code))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-center py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.kicker }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
						className: "mt-3 italic",
						children: "Undercover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[20ch] text-pretty text-lg leading-snug text-muted",
						children: x.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-24 bg-line-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[32ch] text-pretty text-sm leading-relaxed text-subtle",
						children: lang === "fr" ? "Crée un salon, envoie le code. Chacun a son téléphone. Trouve l’infiltré." : "Create a room, send the code. Everyone on their phone. Find the mole."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: goCreate,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), x.createRoom]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: goJoin,
						children: x.joinRoom
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: goSetup,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }), x.localPlay]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => setRulesOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }), x.rules]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => setLang(lang === "fr" ? "en" : "fr"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4" }), lang === "fr" ? "English" : "Français"]
					})
				]
			})
		]
	});
}
function JoinScreen() {
	const s = useGame();
	const x = t(s.lang);
	const joining = s.joinIntent === "join" || s.joinCode.length >= 4;
	const canName = s.myName.trim().length > 0;
	const can = joining ? canName && s.joinCode.length >= 4 : canName;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-1 flex-col",
		onSubmit: (e) => {
			e.preventDefault();
			if (joining) s.joinSalon();
			else s.createSalon();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: joining ? x.joinRoom : x.createRoom }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: s.goHome,
					children: x.back
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
				className: "mt-3",
				children: joining ? x.joinRoom : x.createRoom
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-pretty text-sm text-muted",
				children: joining ? x.joinLead : x.shareCode
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm text-muted",
						htmlFor: "player-name",
						children: x.yourName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "player-name",
						value: s.myName,
						onChange: (e) => s.setMyName(e.target.value),
						placeholder: x.playerPlaceholder,
						maxLength: 18,
						autoCapitalize: "words",
						autoFocus: true
					}),
					joining ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-2 text-sm text-muted",
						htmlFor: "room-code",
						children: x.roomCode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "room-code",
						value: s.joinCode,
						onChange: (e) => s.setJoinCode(e.target.value),
						placeholder: x.roomCodePlaceholder,
						maxLength: 8,
						autoCapitalize: "characters",
						className: "uppercase tracking-[0.3em]"
					})] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					type: "submit",
					disabled: !can,
					children: joining ? x.enterSalon : x.createRoom
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "w-full",
					type: "button",
					onClick: () => s.setJoinIntent(joining ? "create" : "join"),
					children: joining ? x.createRoom : x.joinRoom
				})]
			})
		]
	});
}
function Stepper$1({ label, value, onDec, onInc, decDisabled, incDisabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 rounded-xl bg-elevated px-4 py-2.5 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-fg",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: decDisabled,
					onClick: onDec,
					className: "flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg disabled:opacity-30",
					children: "−"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-6 text-center font-medium tabular-nums",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: incDisabled,
					onClick: onInc,
					className: "flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg disabled:opacity-30",
					children: "+"
				})
			]
		})]
	});
}
function LobbyScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const connected = net.peers.filter((p) => p.connectionState === "connected");
	const n = (s.hostPlays ? 1 : 0) + connected.length;
	const civilians = Math.max(0, n - s.undercoverCount - s.mrWhiteCount);
	const canStart = net.isHost && n >= 3 && n <= 8;
	(0, import_react.useEffect)(() => {
		if (!net.isHost) return;
		const st = useGame.getState();
		st.setUndercover(st.undercoverCount, n);
		st.setMrWhite(st.mrWhiteCount, n);
	}, [n, net.isHost]);
	const copy = async () => {
		if (!s.roomCode) return;
		try {
			await navigator.clipboard.writeText(s.roomCode);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: net.joined ? x.waitingPlayers : x.connecting }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: s.leaveRoom,
						children: x.back
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: net.isHost ? x.shareCode : x.waitingHost
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: copy,
					className: "mt-3 flex w-full items-center justify-between rounded-2xl bg-elevated px-5 py-4 shadow-[0_0_0_1px_rgba(238,234,228,0.12)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
						className: "text-5xl tracking-[0.18em]",
						children: s.roomCode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? x.copied : x.copyCode]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl bg-elevated px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted",
								children: initials(s.myName || "?")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex-1 text-sm",
								children: [
									s.myName,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"(",
											x.you,
											")"
										]
									})
								]
							}),
							net.isHost ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: x.hostBadge
							}) : null
						]
					}), net.peers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted",
								children: initials(p.name || "?")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm",
								children: p.name || "…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-subtle",
								children: [p.id === s.hostId ? `${x.hostBadge} · ` : "", p.connectionState === "connected" ? x.alive : p.connectionState === "failed" ? "—" : x.connecting]
							})
						]
					}, p.id))]
				}),
				net.isHost ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => s.setHostPlays(!s.hostPlays),
						className: "mt-6 flex w-full items-center justify-between gap-3 rounded-xl bg-elevated px-4 py-3 text-left shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: x.hostPlays
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs text-subtle",
								children: s.hostPlays ? x.hostPlayingHint : x.hostSpectateHint
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("relative h-7 w-12 shrink-0 rounded-full transition-colors", s.hostPlays ? "bg-accent" : "bg-surface shadow-[0_0_0_1px_rgba(238,234,228,0.14)]"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-1 size-5 rounded-full transition-transform", s.hostPlays ? "translate-x-6 bg-accent-fg" : "translate-x-1 bg-fg") })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.roles }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper$1, {
									label: x.undercovers,
									value: s.undercoverCount,
									onDec: () => s.setUndercover(s.undercoverCount - 1, n),
									onInc: () => s.setUndercover(s.undercoverCount + 1, n),
									decDisabled: s.undercoverCount <= 1,
									incDisabled: s.undercoverCount >= maxUndercover(n, s.mrWhiteCount)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper$1, {
									label: x.mrWhite,
									value: s.mrWhiteCount,
									onDec: () => s.setMrWhite(s.mrWhiteCount - 1, n),
									onInc: () => s.setMrWhite(s.mrWhiteCount + 1, n),
									decDisabled: s.mrWhiteCount <= 0,
									incDisabled: s.mrWhiteCount >= (n <= 4 ? 0 : 2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x.civilians }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium tabular-nums text-fg",
										children: civilians
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.categories }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: ALL_CATEGORIES.map((c) => {
								const on = s.categories.includes(c);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.toggleCategory(c),
									className: cn("h-10 rounded-full px-3.5 text-sm", on ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
									children: categoryLabel(s.lang, c)
								}, c);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.generatePair }), s.customCivilian ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.setPairHidden(!s.pairHidden),
									className: "flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg",
									children: s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" })
								}) : null]
							}),
							s.customCivilian && s.customUndercover && !s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: x.civilWord
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl tracking-tight",
									children: s.customCivilian
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: x.underWord
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl tracking-tight",
									children: s.customUndercover
								})] })]
							}) : s.customCivilian && s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: x.hidePair
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: x.pairHint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "mt-4 w-full",
								variant: "secondary",
								onClick: () => s.generatePair(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4" }), x.generatePair]
							})
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-sm text-muted",
					children: x.waitingHost
				})
			]
		}), net.isHost ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 shrink-0 border-t border-line bg-bg pt-3",
			children: [!canStart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-sm text-muted",
				children: s.hostPlays ? x.needOnline : x.needOnlineSpectate
			}) : n === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-sm text-muted",
				children: x.trioHint
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "w-full",
				disabled: !canStart,
				onClick: () => net.startHostGame(),
				children: x.startSalon
			})]
		}) : null]
	});
}
function RulesOverlay() {
	const lang = useGame((s) => s.lang);
	const open = useGame((s) => s.rulesOpen);
	const setRulesOpen = useGame((s) => s.setRulesOpen);
	const x = t(lang);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 flex justify-center bg-bg/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full w-full max-w-md flex-col px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.rulesTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRulesOpen(false),
						className: "flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg",
						"aria-label": x.close,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-tight",
					children: x.rulesTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 flex flex-col gap-5",
					children: x.how.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl italic text-muted tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-1 text-pretty text-base leading-relaxed text-fg",
							children: line
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-auto w-full",
					size: "lg",
					onClick: () => setRulesOpen(false),
					children: x.close
				})
			]
		})
	});
}
function AbortOverlay() {
	const lang = useGame((s) => s.lang);
	const open = useGame((s) => s.abortOpen);
	const setAbortOpen = useGame((s) => s.setAbortOpen);
	const goHome = useGame((s) => s.goHome);
	const leaveRoom = useGame((s) => s.leaveRoom);
	const mode = useGame((s) => s.mode);
	const x = t(lang);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 flex items-end justify-center bg-bg/80 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 w-full max-w-md rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(238,234,228,0.12)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl tracking-tight",
				children: x.abortConfirm
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => setAbortOpen(false),
					children: x.abortNo
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: mode === "local" ? goHome : leaveRoom,
					children: x.abortYes
				})]
			})]
		})
	});
}
function Stepper({ label, value, onDec, onInc, decDisabled, incDisabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 rounded-xl bg-elevated px-4 py-2.5 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-fg",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "−",
					disabled: decDisabled,
					onClick: onDec,
					className: "flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg disabled:opacity-30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-6 text-center font-medium tabular-nums",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "+",
					disabled: incDisabled,
					onClick: onInc,
					className: "flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg disabled:opacity-30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			]
		})]
	});
}
function SetupScreen() {
	const s = useGame();
	const x = t(s.lang);
	const filled = s.setupNames.map((n) => n.trim()).filter(Boolean);
	const n = Math.max(filled.length, 3);
	const civilians = Math.max(0, n - s.undercoverCount - s.mrWhiteCount);
	const canStart = filled.length >= 3 && (s.customCivilian.trim().length > 0 && s.customUndercover.trim().length > 0 || s.categories.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.setupTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
						className: "mt-1 text-[2rem]",
						children: x.players
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: s.goHome,
						children: x.back
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-pretty text-sm leading-relaxed text-muted",
					children: x.setupLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-2",
					children: [s.setupNames.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-lg bg-elevated text-xs font-medium text-muted shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								maxLength: 18,
								placeholder: `${x.playerPlaceholder} ${i + 1}`,
								onChange: (e) => s.setName(i, e.target.value),
								autoCapitalize: "words"
							}),
							s.setupNames.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": x.removePlayer,
								onClick: () => s.removePlayer(i),
								className: "flex size-11 shrink-0 items-center justify-center rounded-lg text-subtle hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							}) : null
						]
					}, i)), s.setupNames.length < 16 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: s.addPlayer,
						className: "self-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), x.addPlayer]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.roles }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
								label: x.undercovers,
								value: s.undercoverCount,
								onDec: () => s.setUndercover(s.undercoverCount - 1),
								onInc: () => s.setUndercover(s.undercoverCount + 1),
								decDisabled: s.undercoverCount <= 1,
								incDisabled: s.undercoverCount >= maxUndercover(n, s.mrWhiteCount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
								label: x.mrWhite,
								value: s.mrWhiteCount,
								onDec: () => s.setMrWhite(s.mrWhiteCount - 1),
								onInc: () => s.setMrWhite(s.mrWhiteCount + 1),
								decDisabled: s.mrWhiteCount <= 0,
								incDisabled: s.mrWhiteCount >= (n <= 4 ? 0 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x.civilians }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium tabular-nums text-fg",
									children: civilians
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.categories }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: ALL_CATEGORIES.map((c) => {
							const on = s.categories.includes(c);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => s.toggleCategory(c),
								className: cn("h-10 rounded-full px-3.5 text-sm transition-colors duration-(--motion-quick)", on ? "bg-accent text-accent-fg" : "bg-elevated text-muted shadow-[0_0_0_1px_rgba(238,234,228,0.1)]"),
								children: categoryLabel(s.lang, c)
							}, c);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.generatePair }), s.customCivilian ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => s.setPairHidden(!s.pairHidden),
								className: "flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg",
								"aria-label": s.pairHidden ? x.showPair : x.hidePair,
								children: s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" })
							}) : null]
						}),
						s.customCivilian && s.customUndercover && !s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: x.civilWord
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl tracking-tight",
								children: s.customCivilian
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: x.underWord
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl tracking-tight",
								children: s.customUndercover
							})] })]
						}) : s.customCivilian && s.pairHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: x.hidePair
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: x.pairHint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-4 w-full",
							variant: "secondary",
							onClick: () => s.generatePair(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4" }), x.generatePair]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.customCivilian,
								onChange: (e) => s.setCustom("civilian", e.target.value),
								placeholder: x.customCivil
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.customUndercover,
								onChange: (e) => s.setCustom("undercover", e.target.value),
								placeholder: x.customUnder
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => s.setSecretVote(!s.secretVote),
					className: "mt-3 mb-4 flex w-full items-center justify-between rounded-xl bg-elevated px-4 py-3 text-sm shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x.secretVote }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.secretVote ? x.secretVoteOn : x.secretVoteOff
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 shrink-0 border-t border-line bg-bg pt-3",
			children: [!canStart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-sm text-muted",
				children: x.needPlayers
			}) : filled.length === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-sm text-muted",
				children: x.trioHint
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "w-full",
				disabled: !canStart,
				onClick: () => s.startGame(),
				children: x.deal
			})]
		})]
	});
}
function TableScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const [draft, setDraft] = (0, import_react.useState)("");
	const alive = s.players.filter((p) => p.alive);
	const speaker = s.players.find((p) => p.id === s.speakerId);
	const allSpoken = alive.every((p) => s.spokenIds.includes(p.id));
	const lapsNeeded = speechLapsFor(s.players.length);
	const readyToVote = allSpoken && s.speechLap >= lapsNeeded;
	const roundHints = s.hints.filter((h) => h.round === s.round);
	const myTurn = !net.isNet || s.speakerId === s.selfId;
	const canAdvance = !net.isNet || net.isHost;
	const directing = net.isHost && !s.players.some((p) => p.id === s.selfId);
	const giveHint = (text) => {
		if (net.isGuest) {
			net.sendToHost({
				t: "hint",
				text
			});
			return;
		}
		s.submitHint(text);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [
						x.round,
						" ",
						s.round,
						lapsNeeded > 1 ? ` · ${x.speechPass} ${s.speechLap}/${lapsNeeded}` : "",
						directing ? ` · ${x.hostBadge}` : ""
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => s.setAbortOpen(true),
						className: "text-sm text-subtle hover:text-fg",
						children: x.abort
					})]
				}),
				directing && s.civilianWord ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 rounded-xl bg-elevated px-4 py-3 text-sm shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.civilWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 font-display text-xl tracking-tight",
						children: s.civilianWord
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.underWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 font-display text-xl tracking-tight",
						children: s.undercoverWord
					})] })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 flex flex-col gap-1.5",
					children: s.players.map((p) => {
						const speaking = p.id === s.speakerId && p.alive && !allSpoken;
						const spoken = s.spokenIds.includes(p.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: cn("flex items-center gap-3 rounded-xl px-3 py-2", speaking && "bg-elevated shadow-[0_0_0_1px_rgba(238,234,228,0.14)]", !p.alive && "opacity-40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium tracking-wide text-muted",
									children: initials(p.name)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex-1 text-sm", !p.alive && "line-through"),
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-subtle",
									children: !p.alive ? x.eliminated : speaking ? x.speaking : spoken ? x.spoken : x.waiting
								})
							]
						}, p.id);
					})
				}),
				roundHints.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.hints }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: roundHints.map((h, i) => {
							const p = s.players.find((pl) => pl.id === h.playerId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: p?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl italic tracking-tight",
									children: h.text
								})]
							}, `${h.playerId}-${i}`);
						})
					})]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 shrink-0 border-t border-line bg-bg pt-3",
			children: readyToVote ? canAdvance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				className: "w-full",
				onClick: s.startVote,
				children: x.goVote
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-3 text-center text-sm text-muted",
				children: x.waitAdmin
			}) : myTurn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault();
					giveHint(draft);
					setDraft("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: net.isNet ? x.yourTurn : speaker ? `${speaker.name} — ${x.yourHint}` : x.yourHint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						placeholder: x.hintPlaceholder,
						maxLength: 24,
						autoCapitalize: "off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: () => {
								giveHint("");
								setDraft("");
							},
							children: x.saidAloud
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !draft.trim(),
							children: x.sayHint
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-3 text-center text-sm text-muted",
				children: [
					x.theirTurn,
					" ",
					speaker?.name ?? "…"
				]
			})
		})]
	});
}
function VoteHandoffScreen() {
	const s = useGame();
	const x = t(s.lang);
	const voter = s.players.find((p) => p.id === s.voterId);
	if (!voter) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.passTo }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
					className: "mt-3",
					children: voter.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-muted",
					children: x.voteLead
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "lg",
			className: "w-full",
			onClick: s.confirmVoter,
			children: x.iAm
		})]
	});
}
function VotePickScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const voter = net.isNet ? s.players.find((p) => p.id === s.selfId) : s.players.find((p) => p.id === s.voterId);
	const pool = s.tiedIds ?? s.players.filter((p) => p.alive).map((p) => p.id);
	const candidates = s.players.filter((p) => pool.includes(p.id) && p.id !== voter?.id && p.alive);
	const already = Boolean(net.isNet && voter && s.ballots[voter.id]);
	const votedN = Object.keys(s.ballots).length;
	const aliveN = s.players.filter((p) => p.alive).length;
	if (net.isHost && !voter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.directing }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl tracking-tight",
				children: x.watchVote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					votedN,
					"/",
					aliveN,
					" ",
					x.votesIn
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-col gap-1.5",
				children: s.players.filter((p) => p.alive).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-xl px-1 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-xs", s.ballots[p.id] ? "text-ok" : "text-subtle"),
						children: s.ballots[p.id] ? x.hasVoted : x.waiting
					})]
				}, p.id))
			})
		]
	});
	if (!voter) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-1 flex-col justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted",
			children: x.connecting
		})
	});
	if (net.isNet && !voter.alive) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-1 flex-col justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted",
			children: x.waitOthers
		})
	});
	const confirm = () => {
		if (!s.pendingVote) return;
		if (net.isHost && s.selfId) {
			s.recordBallot(s.selfId, s.pendingVote);
			return;
		}
		if (net.isGuest) {
			net.sendToHost({
				t: "vote",
				targetId: s.pendingVote
			});
			useGame.setState((prev) => ({
				ballots: prev.selfId ? {
					...prev.ballots,
					[prev.selfId]: s.pendingVote
				} : prev.ballots,
				pendingVote: null
			}));
			return;
		}
		s.castVote();
	};
	if (already) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.voteTitle }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl tracking-tight",
				children: x.waitOthers
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					votedN,
					"/",
					aliveN,
					" ",
					x.votesIn
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: net.isNet ? x.you : `${x.voteAs} ${voter.name}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight",
					children: x.voteTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: x.voteLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-col gap-2",
					children: candidates.map((p) => {
						const on = s.pendingVote === p.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => s.pickVote(p.id),
							className: cn("flex h-14 w-full items-center gap-3 rounded-xl px-3 text-left transition-colors duration-(--motion-quick)", on ? "bg-accent text-accent-fg" : "bg-elevated text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.1)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("flex size-10 items-center justify-center rounded-lg text-xs font-medium", on ? "bg-accent-fg/10" : "bg-surface text-muted"),
								children: initials(p.name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: p.name
							})]
						}) }, p.id);
					})
				}),
				candidates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: x.skipSelf
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "lg",
			className: "mt-4 w-full shrink-0",
			disabled: !s.pendingVote,
			onClick: confirm,
			children: x.confirmVote
		})]
	});
}
function VoteResultScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const alive = s.players.filter((p) => p.alive);
	const max = Math.max(1, ...Object.values(s.voteCounts));
	const tied = (s.tiedIds?.length ?? 0) > 1;
	const canAdvance = !net.isNet || net.isHost;
	const trio = s.players.length === 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.voteResult }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl tracking-tight",
				children: tied ? x.tied : x.voteTitle
			}),
			tied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-pretty text-sm text-muted",
				children: trio || s.didRevote ? x.tiedLead : x.revoteLead
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-col gap-3",
				children: alive.map((p) => {
					const n = s.voteCounts[p.id] ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-baseline justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted",
							children: [
								n,
								" ",
								x.votes
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-elevated",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent transition-[width] duration-(--motion-slow) ease-(--ease-smooth-out)",
							style: { width: `${n / max * 100}%` }
						})
					})] }, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 shrink-0 pt-2",
				children: !canAdvance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-3 text-center text-sm text-muted",
					children: x.waitAdmin
				}) : tied && !trio && !s.didRevote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: s.beginRevote,
					children: x.startRevote
				}) : tied && (trio || s.didRevote) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: s.skipTie,
					children: x.continueRound
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: s.resolveVotes,
					children: x.next
				})
			})
		]
	});
}
function WordScreen() {
	const s = useGame();
	const x = t(s.lang);
	const net = useNetPlay();
	const me = s.players.find((p) => p.id === s.selfId);
	const directing = net.isHost && !me;
	const word = s.myWord || me?.word || "";
	const isWhite = Boolean(me) && word.length === 0;
	const already = Boolean(s.selfId && s.readyIds.includes(s.selfId));
	const readyN = s.readyIds.length;
	const total = Math.max(s.players.length, 1);
	const onReady = () => {
		if (!s.selfId || already || directing) return;
		if (net.isHost) {
			s.markReady(s.selfId);
			return;
		}
		net.sendToHost({ t: "ready" });
		useGame.setState((prev) => ({ readyIds: prev.readyIds.includes(s.selfId) ? prev.readyIds : [...prev.readyIds, s.selfId] }));
	};
	if (directing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.directing }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted tabular-nums",
					children: [
						readyN,
						"/",
						total,
						" ",
						x.playersReady
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl bg-elevated p-4 shadow-[0_0_0_1px_rgba(238,234,228,0.1)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: x.theWords }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.civilWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl tracking-tight",
						children: s.civilianWord
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: x.underWord
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl tracking-tight",
						children: s.undercoverWord
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 min-h-0 flex-1 overflow-y-auto",
				children: s.players.map((p) => {
					const ready = s.readyIds.includes(p.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl px-1 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-lg bg-surface text-xs font-medium text-muted",
								children: initials(p.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs", ready ? "text-ok" : "text-subtle"),
								children: ready ? x.memorized : x.waiting
							})
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-3 text-center text-sm text-muted",
				children: x.waitOthers
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: s.myName || me?.name || x.yourWord }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted tabular-nums",
					children: [
						readyN,
						"/",
						total
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: isWhite ? x.noWord : x.yourWord
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, {
						className: "mt-4 uppercase",
						children: isWhite ? "Mr. White" : word || "…"
					}),
					isWhite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-[28ch] text-pretty text-base leading-relaxed text-muted",
						children: x.youAreWhite
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-subtle",
						children: x.hideNow
					})
				]
			}),
			already ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-sm text-muted",
				children: x.waitOthers
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				className: "w-full",
				disabled: already,
				onClick: onReady,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }), x.memorized]
			})
		]
	});
}
function PhaseView() {
	const phase = useGame((s) => s.phase);
	switch (phase) {
		case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}) }, "home");
		case "join": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinScreen, {}) }, "join");
		case "lobby": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LobbyScreen, {}) }, "lobby");
		case "setup": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupScreen, {}) }, "setup");
		case "word": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordScreen, {}) }, "word");
		case "dealHandoff":
		case "dealReveal": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DealScreen, {}) }, `deal-${phase}`);
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableScreen, {}) }, "table");
		case "voteHandoff": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteHandoffScreen, {}) }, "vote-h");
		case "votePick": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VotePickScreen, {}) }, "vote-p");
		case "voteResult": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteResultScreen, {}) }, "vote-r");
		case "eliminated": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EliminatedScreen, {}) }, "out");
		case "mrWhiteGuess": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MrWhiteGuessScreen, {}) }, "white");
		case "gameover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameOverScreen, {}) }, "over");
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}) }, "home");
	}
}
function UndercoverApp() {
	const roomCode = useGame((s) => s.roomCode);
	const mode = useGame((s) => s.mode);
	const myName = useGame((s) => s.myName);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useGame.persist.rehydrate()).then(() => {
			const room = new URLSearchParams(window.location.search).get("room");
			if (!room) return;
			const code = normalizeRoomCode(room);
			if (code.length < 4) return;
			const s = useGame.getState();
			if (s.phase === "home" || s.phase === "join") useGame.setState({
				joinCode: code,
				joinIntent: "join",
				phase: "join"
			});
		});
	}, []);
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseView, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesOverlay, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbortOverlay, {})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: roomCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetSession, {
		code: roomCode,
		name: myName || "?",
		isHost: mode === "host",
		children: body
	}, roomCode) : body });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UndercoverApp, {});
}
//#endregion
export { Home as component };
