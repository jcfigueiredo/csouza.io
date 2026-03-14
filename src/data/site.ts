export type InterestAccent =
  | "indigo"
  | "amber"
  | "cyan"
  | "violet"
  | "rose"
  | "emerald"
  | "sky";

export interface BeyondCodeItem {
  emoji: string;
  title: string;
  body: string;
  accent: InterestAccent;
  span?: 2;
  url?: string;
}

export const beyondCode: BeyondCodeItem[] = [
  {
    emoji: "📕",
    title: "Published Author",
    body: "Leadership Paradigms for Remote Agile Development — from Broken Window Theory to Dunning-Kruger. Rethinking how we lead remote teams. APress, 2022.",
    accent: "indigo",
    span: 2,
    url: "https://link.springer.com/book/10.1007/978-1-4842-8719-4",
  },
  {
    emoji: "🧩",
    title: "Puzzle Brain",
    body: "Mechanical puzzles, escape rooms, and any problem that looks impossible until you find the trick.",
    accent: "amber",
  },
  {
    emoji: "🔧",
    title: "Always Building",
    body: "A compiler (for fun), custom water-cooled PCs with hard tubing, and Lego Architecture sets. If it can be assembled or overengineered — I'm in.",
    accent: "cyan",
  },
  {
    emoji: "🚀",
    title: "Sci-Fi & Fantasy",
    body: "Foundation, Culture, Hyperion Cantos, Cosmere. Always hunting for the next great series. Scroll down for the full shelf.",
    accent: "violet",
  },
  {
    emoji: "🎲",
    title: "Games & Stories",
    body: "D&D campaigns, CRPGs, and anything with good world-building. RPGs are just collaborative puzzle-solving with better soundtracks.",
    accent: "rose",
  },
  {
    emoji: "🎾",
    title: "Off Screen",
    body: "Tennis on weekends, scuba diving when I can, traveling whenever possible, and enough outdoor time to justify all the screen time.",
    accent: "emerald",
  },
  {
    emoji: "🔭",
    title: "Endlessly Curious",
    body: "Physics, math, futurology, alternative economic systems, and how programming languages shape the way we think.",
    accent: "sky",
    span: 2,
  },
];

export const socials = [
  {
    href: "https://www.linkedin.com/in/claudiofsouza",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jcfigueiredo",
    label: "GitHub",
  },
] as const;
