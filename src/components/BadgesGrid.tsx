"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { BADGES } from "@/lib/badges";
import { loadProfileState, type ProfileState } from "@/lib/storage";

export function BadgesGrid({ profile }: { profile: Profile }) {
  const t = useTranslations("badges");
  const locale = useLocale() as "fr" | "en";
  const [state, setState] = useState<ProfileState | null>(null);

  useEffect(() => {
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadProfileState(profile.id));
  }, [profile.id]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Link
        href={`/profil/${profile.id}`}
        className="text-sm font-semibold text-foreground/60 hover:text-foreground mb-4 inline-block"
      >
        ← {t("back")}
      </Link>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold mb-8">{t("title")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {BADGES.map((badge) => {
          const unlocked = state?.badges.includes(badge.id) ?? false;
          return (
            <div
              key={badge.id}
              className={`notecard p-5 text-center ${
                unlocked ? "bg-amber/10" : "bg-card grayscale opacity-60"
              }`}
            >
              <span className="text-4xl block mb-2" aria-hidden>
                {badge.emoji}
              </span>
              <p className="font-heading font-bold text-sm mb-1">{badge.label[locale]}</p>
              <p className="text-xs text-foreground/60 mb-2">{badge.description[locale]}</p>
              <span
                className={`text-[10px] font-bold uppercase tracking-wide ${
                  unlocked ? "text-amber-dark" : "text-foreground/40"
                }`}
              >
                {unlocked ? t("unlocked") : t("locked")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
