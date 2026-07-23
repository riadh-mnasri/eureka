export type Badge = {
  id: string;
  emoji: string;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const BADGES: Badge[] = [
  {
    id: "premiere-decouverte",
    emoji: "🌱",
    label: { fr: "Première découverte", en: "First discovery" },
    description: { fr: "Termine ton tout premier défi.", en: "Complete your very first challenge." },
  },
  {
    id: "streak-3",
    emoji: "🔥",
    label: { fr: "3 jours de suite", en: "3-day streak" },
    description: { fr: "Entraîne-toi 3 jours d'affilée.", en: "Train 3 days in a row." },
  },
  {
    id: "streak-7",
    emoji: "⭐",
    label: { fr: "Une semaine entière", en: "Full week" },
    description: { fr: "Entraîne-toi 7 jours d'affilée.", en: "Train 7 days in a row." },
  },
  {
    id: "streak-14",
    emoji: "🌈",
    label: { fr: "Deux semaines", en: "Two weeks" },
    description: { fr: "Entraîne-toi 14 jours d'affilée.", en: "Train 14 days in a row." },
  },
  {
    id: "streak-30",
    emoji: "🏆",
    label: { fr: "Un mois entier", en: "Full month" },
    description: { fr: "Entraîne-toi 30 jours d'affilée.", en: "Train 30 days in a row." },
  },
  {
    id: "streak-100",
    emoji: "👑",
    label: { fr: "Cent jours", en: "100 days" },
    description: { fr: "Entraîne-toi 100 jours d'affilée.", en: "Train 100 days in a row." },
  },
  {
    id: "sans-faute",
    emoji: "🎯",
    label: { fr: "Sans faute", en: "Perfect round" },
    description: { fr: "Réponds juste à toutes les questions d'un défi.", en: "Answer every question right in one challenge." },
  },
  {
    id: "perfect-5",
    emoji: "💯",
    label: { fr: "Cinq sans-faute", en: "Five perfect rounds" },
    description: { fr: "Réussis 5 défis sans aucune erreur.", en: "Complete 5 challenges with no mistakes at all." },
  },
  {
    id: "defis-10",
    emoji: "📚",
    label: { fr: "Petit chercheur", en: "Budding researcher" },
    description: { fr: "Termine 10 défis.", en: "Complete 10 challenges." },
  },
  {
    id: "defis-50",
    emoji: "🎓",
    label: { fr: "Grand chercheur", en: "Seasoned researcher" },
    description: { fr: "Termine 50 défis.", en: "Complete 50 challenges." },
  },
  {
    id: "maitrise-logique",
    emoji: "🧩",
    label: { fr: "Maître de la logique", en: "Logic master" },
    description: { fr: "Atteins la maîtrise maximale en logique.", en: "Reach maximum mastery in logic." },
  },
  {
    id: "maitrise-calcul",
    emoji: "🧮",
    label: { fr: "Maître du calcul", en: "Calculation master" },
    description: { fr: "Atteins la maîtrise maximale en calcul astucieux.", en: "Reach maximum mastery in clever arithmetic." },
  },
  {
    id: "maitrise-geometrie",
    emoji: "📐",
    label: { fr: "Maître de la géométrie", en: "Geometry master" },
    description: { fr: "Atteins la maîtrise maximale en géométrie.", en: "Reach maximum mastery in geometry." },
  },
  {
    id: "maitrise-combinatoire",
    emoji: "🎲",
    label: { fr: "Maître de la combinatoire", en: "Combinatorics master" },
    description: { fr: "Atteins la maîtrise maximale en combinatoire.", en: "Reach maximum mastery in combinatorics." },
  },
  {
    id: "toutes-maitrises",
    emoji: "🏅",
    label: { fr: "Expert complet", en: "All-round expert" },
    description: { fr: "Atteins la maîtrise maximale dans les 4 domaines.", en: "Reach maximum mastery in all 4 domains." },
  },
];

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((badge) => badge.id === id);
}
