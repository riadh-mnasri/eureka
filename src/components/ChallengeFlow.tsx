"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import type { Domain } from "@/lib/domains";
import {
  getProblemsForTier,
  getProblemsForTierAndDomain,
  type Problem,
} from "@/lib/content/problems";
import { shuffle } from "@/lib/shuffle";
import { getStrategy } from "@/lib/strategies";
import { applyChallengeResult, loadProfileState, type AnsweredQuestion } from "@/lib/storage";
import { beltForXp, type Belt } from "@/lib/gamification";
import { getBadge } from "@/lib/badges";
import { BadgeChip } from "@/components/BadgeChip";
import { RobotMascot } from "@/components/RobotMascot";
import { Confetti } from "@/components/Confetti";
import { BeltBadge } from "@/components/BeltBadge";

const QUESTIONS_PER_CHALLENGE = 6;

export function ChallengeFlow({ profile, domain }: { profile: Profile; domain?: Domain }) {
  const t = useTranslations("challenge");
  const locale = useLocale() as "fr" | "en";
  const router = useRouter();

  const [problems, setProblems] = useState<Problem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);
  const [done, setDone] = useState(false);
  const [newBadgeIds, setNewBadgeIds] = useState<string[]>([]);
  const [newBelt, setNewBelt] = useState(false);
  const [currentBelt, setCurrentBelt] = useState<Belt>("blanche");
  const [earnedXp, setEarnedXp] = useState(0);

  useEffect(() => {
    const pool = domain
      ? getProblemsForTierAndDomain(profile.tier, domain)
      : getProblemsForTier(profile.tier);
    // The problem order is randomized on purpose; picking it after mount
    // (instead of during render) avoids a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProblems(shuffle(pool).slice(0, QUESTIONS_PER_CHALLENGE));
  }, [profile.tier, domain]);

  if (!problems) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <RobotMascot mood="idle" className="h-20 w-20 mx-auto" />
      </div>
    );
  }

  const current = problems[index];
  const isLast = index === problems.length - 1;
  const isCorrect = selected !== null && selected === current.correctIndex;

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    setAnswers((prev) => [...prev, { domain: current.domain, correct: optionIndex === current.correctIndex }]);
  }

  function handleNext() {
    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
      setShowHint(false);
      return;
    }
    finishChallenge();
  }

  function finishChallenge() {
    const before = loadProfileState(profile.id);
    const beltBefore = beltForXp(before.totalXp).belt;
    const { state: after, earnedXp: xp } = applyChallengeResult(profile.id, answers);
    const beltAfter = beltForXp(after.totalXp).belt;
    setNewBadgeIds(after.badges.filter((id) => !before.badges.includes(id)));
    setNewBelt(beltAfter !== beltBefore);
    setCurrentBelt(beltAfter);
    setEarnedXp(xp);
    setDone(true);
  }

  if (done) {
    const correctCount = answers.filter((a) => a.correct).length;
    const perfect = correctCount === problems.length;
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center animate-pop-in">
        <Confetti pieces={perfect ? 48 : 28} />
        <RobotMascot mood="excited" className="h-28 w-28 mx-auto mb-4" />
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold mb-6">
          {t("recapTitle")}
        </h1>
        <div className="notecard bg-card p-6 mb-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-extrabold text-coral">{correctCount}/{problems.length}</p>
            <p className="text-xs text-foreground/60 font-semibold">{t("correctAnswers")}</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-teal-dark">+{earnedXp}</p>
            <p className="text-xs text-foreground/60 font-semibold">{t("xpEarned")}</p>
          </div>
        </div>

        {perfect && <p className="font-semibold text-teal-dark mb-4">{t("perfect")}</p>}

        {newBelt && (
          <div className="mb-6">
            <p className="font-heading font-bold mb-2">{t("newBelt")}</p>
            <div className="flex justify-center">
              <BeltBadge belt={currentBelt} />
            </div>
          </div>
        )}

        {newBadgeIds.length > 0 && (
          <div className="mb-8">
            <p className="font-heading font-bold mb-3">{t("newBadge")}</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {newBadgeIds.map((id) => {
                const badge = getBadge(id);
                if (!badge) return null;
                return <BadgeChip key={id} badge={badge} unlocked />;
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => router.push(`/profil/${profile.id}`)}
          className="ink-button w-full rounded-2xl bg-coral text-white font-heading text-lg font-bold py-4 cursor-pointer"
          style={{
            // @ts-expect-error custom property read by the ink-button shadow
            "--btn-shadow": "var(--color-coral-dark)",
          }}
        >
          {t("backToDashboard")}
        </button>
      </div>
    );
  }

  const strategy = getStrategy(current.strategyId);

  return (
    <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground/60 mb-2">
          {t("question")} {index + 1} {t("of")} {problems.length}
        </p>
        <div className="h-2 w-full rounded-full bg-card-border overflow-hidden">
          <div
            className="h-full rounded-full bg-coral transition-all"
            style={{ width: `${((index + (selected !== null ? 1 : 0)) / problems.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="notecard bg-card p-6 mb-6">
        <p className="font-heading text-xl font-bold mb-4">{current.prompt[locale]}</p>

        {selected === null && (
          <button
            type="button"
            onClick={() => setShowHint(true)}
            className="mb-4 inline-flex items-center gap-2 rounded-2xl border-2 border-amber px-3 py-1.5 text-sm font-bold text-amber-dark hover:bg-amber/10 transition-colors cursor-pointer"
          >
            💡 {t("hint")}
          </button>
        )}
        {showHint && selected === null && (
          <p className="mb-4 text-sm text-foreground/70 bg-amber/10 border-2 border-amber/40 rounded-2xl p-3 animate-pop-in">
            {current.hint[locale]}
          </p>
        )}

        <div className="flex flex-col gap-3">
          {current.options.map((option, i) => {
            const isSelected = selected === i;
            const showCorrect = selected !== null && i === current.correctIndex;
            const showWrong = isSelected && i !== current.correctIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`text-left rounded-2xl border-2 px-4 py-3 font-semibold transition-colors ${
                  showCorrect
                    ? "border-teal bg-teal/15 text-teal-dark"
                    : showWrong
                      ? "border-coral bg-coral/10 text-coral-dark"
                      : "border-foreground/20 hover:border-teal/60"
                } ${selected === null ? "cursor-pointer" : "cursor-default"}`}
              >
                {option[locale]}
              </button>
            );
          })}
        </div>
      </div>

      {selected !== null && (
        <div
          className={`rounded-2xl p-4 mb-4 animate-pop-in border-2 ${
            isCorrect ? "bg-teal/15 border-teal" : "bg-coral/10 border-coral"
          }`}
        >
          <p className={`font-heading font-bold mb-1 ${isCorrect ? "text-teal-dark" : "text-coral-dark"}`}>
            {isCorrect ? t("correct") : t("incorrect")}
          </p>
          <p className="text-sm text-foreground/80">{current.explanation[locale]}</p>
        </div>
      )}

      {selected !== null && (
        <div className="rounded-2xl p-4 mb-6 bg-amber/10 border-2 border-amber/40 animate-pop-in flex items-start gap-3">
          <span className="text-2xl" aria-hidden>
            {strategy.emoji}
          </span>
          <div>
            <p className="font-heading font-bold text-amber-dark mb-1">
              {t("strategy")} : {strategy.label[locale]}
            </p>
            <p className="text-sm text-foreground/80">{strategy.description[locale]}</p>
          </div>
        </div>
      )}

      {selected !== null && (
        <button
          type="button"
          onClick={handleNext}
          className="ink-button w-full rounded-2xl bg-teal text-white font-heading text-lg font-bold py-4 cursor-pointer"
          style={{
            // @ts-expect-error custom property read by the ink-button shadow
            "--btn-shadow": "var(--color-teal-dark)",
          }}
        >
          {isLast ? t("finish") : t("next")}
        </button>
      )}
    </div>
  );
}
