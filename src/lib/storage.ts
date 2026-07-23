import { DOMAINS, type Domain } from "./domains";
import {
  PERFECT_BONUS_XP,
  XP_PER_CORRECT,
  emptyDomainXp,
  masteryStars,
  updateStreak,
  type StreakState,
} from "./gamification";

export type ProfileState = {
  totalXp: number;
  domainXp: Record<Domain, number>;
  streak: number;
  lastPlayedDate: string | null;
  jokerUsedWeek: string | null;
  badges: string[];
  totalChallengesCompleted: number;
  perfectChallengesCompleted: number;
};

const SELECTED_PROFILE_KEY = "eureka:selected-profile";

function stateKey(profileId: string): string {
  return `eureka:state:${profileId}`;
}

export function createEmptyState(): ProfileState {
  return {
    totalXp: 0,
    domainXp: emptyDomainXp(),
    streak: 0,
    lastPlayedDate: null,
    jokerUsedWeek: null,
    badges: [],
    totalChallengesCompleted: 0,
    perfectChallengesCompleted: 0,
  };
}

export function loadProfileState(profileId: string): ProfileState {
  if (typeof window === "undefined") return createEmptyState();
  try {
    const raw = window.localStorage.getItem(stateKey(profileId));
    if (!raw) return createEmptyState();
    const parsed = JSON.parse(raw);
    return {
      ...createEmptyState(),
      ...parsed,
      domainXp: { ...emptyDomainXp(), ...parsed.domainXp },
    };
  } catch {
    return createEmptyState();
  }
}

export function saveProfileState(profileId: string, state: ProfileState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(stateKey(profileId), JSON.stringify(state));
}

export function getSelectedProfileId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(SELECTED_PROFILE_KEY);
}

export function setSelectedProfileId(profileId: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SELECTED_PROFILE_KEY, profileId);
}

export type AnsweredQuestion = {
  domain: Domain;
  correct: boolean;
};

export function applyChallengeResult(
  profileId: string,
  answers: AnsweredQuestion[]
): { state: ProfileState; earnedXp: number } {
  const state = loadProfileState(profileId);
  const streakInput: StreakState = {
    streak: state.streak,
    lastPlayedDate: state.lastPlayedDate,
    jokerUsedWeek: state.jokerUsedWeek,
  };
  const nextStreak = updateStreak(streakInput);

  const correctCount = answers.filter((a) => a.correct).length;
  const perfect = answers.length > 0 && correctCount === answers.length;
  const domainXp = { ...state.domainXp };
  for (const answer of answers) {
    if (answer.correct) {
      domainXp[answer.domain] += XP_PER_CORRECT;
    }
  }
  const earnedXp = correctCount * XP_PER_CORRECT + (perfect ? PERFECT_BONUS_XP : 0);

  const next: ProfileState = {
    ...state,
    totalXp: state.totalXp + earnedXp,
    domainXp,
    streak: nextStreak.streak,
    lastPlayedDate: nextStreak.lastPlayedDate,
    jokerUsedWeek: nextStreak.jokerUsedWeek,
    totalChallengesCompleted: state.totalChallengesCompleted + 1,
    perfectChallengesCompleted: state.perfectChallengesCompleted + (perfect ? 1 : 0),
  };

  const newBadges = new Set(next.badges);
  newBadges.add("premiere-decouverte");
  if (next.streak >= 3) newBadges.add("streak-3");
  if (next.streak >= 7) newBadges.add("streak-7");
  if (next.streak >= 14) newBadges.add("streak-14");
  if (next.streak >= 30) newBadges.add("streak-30");
  if (next.streak >= 100) newBadges.add("streak-100");
  if (perfect) newBadges.add("sans-faute");
  if (next.perfectChallengesCompleted >= 5) newBadges.add("perfect-5");
  if (next.totalChallengesCompleted >= 10) newBadges.add("defis-10");
  if (next.totalChallengesCompleted >= 50) newBadges.add("defis-50");

  const masteryBadgeByDomain: Record<Domain, string> = {
    logique: "maitrise-logique",
    calcul: "maitrise-calcul",
    geometrie: "maitrise-geometrie",
    combinatoire: "maitrise-combinatoire",
  };
  let allMastered = true;
  for (const domain of DOMAINS) {
    const stars = masteryStars(next.domainXp[domain.id]);
    if (stars >= 5) {
      newBadges.add(masteryBadgeByDomain[domain.id]);
    } else {
      allMastered = false;
    }
  }
  if (allMastered) newBadges.add("toutes-maitrises");

  next.badges = Array.from(newBadges);
  saveProfileState(profileId, next);
  return { state: next, earnedXp };
}
