export type StrategyId =
  | "dessiner"
  | "petits-cas"
  | "a-rebours"
  | "chercher-motif"
  | "essai-organise"
  | "compter-organise";

export type Strategy = {
  id: StrategyId;
  emoji: string;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const STRATEGIES: Strategy[] = [
  {
    id: "dessiner",
    emoji: "✏️",
    label: { fr: "Dessine un schéma", en: "Draw a picture" },
    description: {
      fr: "Fais un petit dessin ou un schéma de la situation : ça aide souvent à voir la solution.",
      en: "Make a small drawing or diagram of the situation: it often helps reveal the solution.",
    },
  },
  {
    id: "petits-cas",
    emoji: "🔍",
    label: { fr: "Teste un petit cas", en: "Try a small case" },
    description: {
      fr: "Si le nombre est trop grand, essaie d'abord avec un nombre plus petit pour comprendre le mécanisme.",
      en: "If the number is too big, try a smaller one first to understand the mechanism.",
    },
  },
  {
    id: "a-rebours",
    emoji: "↩️",
    label: { fr: "Travaille à rebours", en: "Work backwards" },
    description: {
      fr: "Pars du résultat final et remonte les étapes une par une jusqu'au départ.",
      en: "Start from the final result and go back through the steps one by one.",
    },
  },
  {
    id: "chercher-motif",
    emoji: "🔁",
    label: { fr: "Cherche un motif qui se répète", en: "Look for a repeating pattern" },
    description: {
      fr: "Écris les premiers termes ou étapes : un motif qui se répète apparaît souvent.",
      en: "Write out the first few terms or steps: a repeating pattern often shows up.",
    },
  },
  {
    id: "essai-organise",
    emoji: "🗂️",
    label: { fr: "Essaie de façon organisée", en: "Try things in an organized way" },
    description: {
      fr: "Teste les possibilités une par une, dans un ordre logique, pour n'en oublier aucune.",
      en: "Test the possibilities one by one, in a logical order, so you don't miss any.",
    },
  },
  {
    id: "compter-organise",
    emoji: "📋",
    label: { fr: "Compte sans rien oublier", en: "Count without missing anything" },
    description: {
      fr: "Range ce que tu comptes dans un ordre précis (par exemple du plus petit au plus grand) pour ne rien compter deux fois.",
      en: "Sort what you're counting in a precise order (for example smallest to largest) so nothing is counted twice.",
    },
  },
];

export function getStrategy(id: StrategyId): Strategy {
  const strategy = STRATEGIES.find((s) => s.id === id);
  if (!strategy) throw new Error(`Unknown strategy: ${id}`);
  return strategy;
}
