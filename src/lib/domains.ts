export type Domain = "logique" | "calcul" | "geometrie" | "combinatoire";

export type DomainInfo = {
  id: Domain;
  emoji: string;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  color: string;
};

export const DOMAINS: DomainInfo[] = [
  {
    id: "logique",
    emoji: "🧩",
    label: { fr: "Logique", en: "Logic" },
    description: {
      fr: "Suites, motifs, déductions et énigmes visuelles.",
      en: "Sequences, patterns, deductions and visual puzzles.",
    },
    color: "#7C6BCC",
  },
  {
    id: "calcul",
    emoji: "🧮",
    label: { fr: "Calcul astucieux", en: "Clever arithmetic" },
    description: {
      fr: "Des calculs qui se résolvent avec une astuce plutôt qu'en force.",
      en: "Calculations solved with a trick rather than brute force.",
    },
    color: "#F97362",
  },
  {
    id: "geometrie",
    emoji: "📐",
    label: { fr: "Géométrie", en: "Geometry" },
    description: {
      fr: "Formes, symétries, aires et périmètres.",
      en: "Shapes, symmetry, areas and perimeters.",
    },
    color: "#1FAAA6",
  },
  {
    id: "combinatoire",
    emoji: "🎲",
    label: { fr: "Combinatoire", en: "Combinatorics" },
    description: {
      fr: "Compter les façons de faire quelque chose, sans se tromper.",
      en: "Counting the ways to do something, without making mistakes.",
    },
    color: "#F5A742",
  },
];

export function getDomain(id: Domain): DomainInfo {
  const domain = DOMAINS.find((d) => d.id === id);
  if (!domain) throw new Error(`Unknown domain: ${id}`);
  return domain;
}
