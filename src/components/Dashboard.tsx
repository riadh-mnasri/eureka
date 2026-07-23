"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { DOMAINS } from "@/lib/domains";
import { beltForXp, toDateKey } from "@/lib/gamification";
import { loadProfileState, type ProfileState } from "@/lib/storage";
import { BADGES } from "@/lib/badges";
import { BeltBadge } from "@/components/BeltBadge";
import { BadgeChip } from "@/components/BadgeChip";
import { MasteryRadar } from "@/components/MasteryRadar";

export function Dashboard({ profile }: { profile: Profile }) {
  const t = useTranslations("dashboard");
  const tDomains = useTranslations("domains");
  const locale = useLocale() as "fr" | "en";
  const router = useRouter();
  const [state, setState] = useState<ProfileState | null>(null);

  useEffect(() => {
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadProfileState(profile.id));
  }, [profile.id]);

  if (!state) {
    return <div className="max-w-3xl mx-auto px-4 py-16 text-center">…</div>;
  }

  const { belt, nextThreshold } = beltForXp(state.totalXp);
  const playedToday = state.lastPlayedDate === toDateKey(new Date());
  const previewBadges = BADGES.slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex items-center gap-3 mb-10">
        <div
          className="flex h-12 w-12 items-center justify-center text-xl shrink-0 rounded-full ink-shadow"
          style={{
            background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
          }}
          aria-hidden
        >
          {profile.emoji}
        </div>
        <p className="font-heading text-xl font-bold flex-1">{profile.name}</p>
        <Link
          href="/"
          className="text-sm font-semibold text-foreground/60 hover:text-foreground underline"
        >
          {t("switchProfileCta")}
        </Link>
      </div>

      <div className="relative mt-6 mb-10">
        <div className="absolute -top-6 left-4 z-10 rounded-lg bg-card px-3 py-1.5 ink-button flex items-center gap-1.5">
          <span aria-hidden>🥋</span>
          <BeltBadge belt={belt} size="sm" showLabel={false} />
        </div>
        <div className="absolute -top-6 right-4 z-10 rounded-lg bg-card px-3 py-1.5 ink-button flex items-center gap-1 text-sm font-bold">
          <span aria-hidden>🔥</span>
          {state.streak}
        </div>

        <div className="notecard bg-card pt-10 pb-6 px-6 sm:px-8 text-center">
          <MasteryRadar domainXp={state.domainXp} />

          <div className="mt-4">
            {nextThreshold !== null ? (
              <p className="text-xs text-foreground/60 font-semibold">
                {state.totalXp}/{nextThreshold} {t("xpToNextBelt")}
              </p>
            ) : (
              <p className="text-xs text-teal-dark font-semibold">{t("maxBelt")}</p>
            )}
            <div className="h-3 w-full max-w-xs mx-auto mt-2 rounded-full bg-card-border overflow-hidden">
              <div
                className="h-full rounded-full bg-teal transition-all"
                style={{
                  width: `${
                    nextThreshold ? Math.min(100, (state.totalXp / nextThreshold) * 100) : 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {playedToday ? (
        <div className="notecard bg-teal/15 text-center py-4 px-4 font-semibold text-foreground mb-10">
          {t("playedToday")}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => router.push(`/profil/${profile.id}/defi`)}
          className="ink-button w-full rounded-2xl bg-coral text-white font-heading text-lg font-bold py-4 mb-10 cursor-pointer"
          style={{
            // @ts-expect-error custom property read by the ink-button shadow
            "--btn-shadow": "var(--color-coral-dark)",
          }}
        >
          {t("startChallenge")}
        </button>
      )}

      <p className="font-heading text-sm font-bold uppercase tracking-wide text-foreground/50 mb-4">
        {tDomains("title")}
      </p>
      <div className="flex justify-between sm:justify-start sm:gap-8 mb-10">
        {DOMAINS.map((domain) => (
          <Link
            key={domain.id}
            href={`/profil/${profile.id}/competence/${domain.id}`}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className="ink-shadow flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center text-2xl bg-card rounded-full transition-transform group-hover:-translate-y-1"
            >
              <span aria-hidden>{domain.emoji}</span>
            </div>
            <span className="text-xs font-semibold text-foreground/70 text-center max-w-[5rem]">
              {domain.label[locale]}
            </span>
          </Link>
        ))}
      </div>

      <div className="notecard bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="font-heading text-lg font-bold">{t("badges")}</p>
          <Link
            href={`/profil/${profile.id}/badges`}
            className="text-sm font-semibold text-teal hover:underline"
          >
            {t("seeAllBadges")}
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {previewBadges.map((badge) => (
            <BadgeChip key={badge.id} badge={badge} unlocked={state.badges.includes(badge.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
