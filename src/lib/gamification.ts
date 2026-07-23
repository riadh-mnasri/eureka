import type { Domain } from "./domains";

export const XP_PER_CORRECT = 10;
export const PERFECT_BONUS_XP = 20;

export const BELTS = ["blanche", "jaune", "orange", "verte", "bleue", "marron", "noire"] as const;
export type Belt = (typeof BELTS)[number];

export const BELT_LABELS: Record<Belt, { fr: string; en: string }> = {
  blanche: { fr: "Ceinture blanche", en: "White belt" },
  jaune: { fr: "Ceinture jaune", en: "Yellow belt" },
  orange: { fr: "Ceinture orange", en: "Orange belt" },
  verte: { fr: "Ceinture verte", en: "Green belt" },
  bleue: { fr: "Ceinture bleue", en: "Blue belt" },
  marron: { fr: "Ceinture marron", en: "Brown belt" },
  noire: { fr: "Ceinture noire", en: "Black belt" },
};

export const BELT_COLORS: Record<Belt, string> = {
  blanche: "#F5F1E8",
  jaune: "#FFD84D",
  orange: "#F5A742",
  verte: "#2EC4B6",
  bleue: "#5FA8D3",
  marron: "#8B5A2B",
  noire: "#2B2140",
};

const BELT_THRESHOLDS = [0, 150, 350, 600, 900, 1300, 1800];

export function beltForXp(xp: number): { belt: Belt; index: number; nextThreshold: number | null } {
  let index = 0;
  for (let i = 0; i < BELT_THRESHOLDS.length; i++) {
    if (xp >= BELT_THRESHOLDS[i]) index = i;
  }
  const nextThreshold = index + 1 < BELT_THRESHOLDS.length ? BELT_THRESHOLDS[index + 1] : null;
  return { belt: BELTS[index], index, nextThreshold };
}

const MASTERY_XP_PER_STAR = 60;
const MASTERY_MAX_STARS = 5;

export function masteryStars(domainXp: number): number {
  return Math.min(MASTERY_MAX_STARS, Math.floor(domainXp / MASTERY_XP_PER_STAR));
}

export function masteryRatio(domainXp: number): number {
  const capped = Math.min(domainXp, MASTERY_MAX_STARS * MASTERY_XP_PER_STAR);
  return capped / (MASTERY_MAX_STARS * MASTERY_XP_PER_STAR);
}

export function emptyDomainXp(): Record<Domain, number> {
  return { logique: 0, calcul: 0, geometrie: 0, combinatoire: 0 };
}

export function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function isoWeekKey(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

export type StreakState = {
  streak: number;
  lastPlayedDate: string | null;
  jokerUsedWeek: string | null;
};

export function updateStreak(prev: StreakState, today: Date = new Date()): StreakState {
  const todayKey = toDateKey(today);
  if (prev.lastPlayedDate === todayKey) {
    return prev;
  }

  const currentWeek = isoWeekKey(today);
  const jokerAvailable = prev.jokerUsedWeek !== currentWeek;

  if (!prev.lastPlayedDate) {
    return { streak: 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
  }

  const last = new Date(prev.lastPlayedDate + "T00:00:00Z");
  const todayUtc = new Date(todayKey + "T00:00:00Z");
  const diffDays = Math.round((todayUtc.getTime() - last.getTime()) / 86400000);

  if (diffDays === 1) {
    return { streak: prev.streak + 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
  }

  if (diffDays === 2 && jokerAvailable) {
    return { streak: prev.streak + 1, lastPlayedDate: todayKey, jokerUsedWeek: currentWeek };
  }

  return { streak: 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
}
