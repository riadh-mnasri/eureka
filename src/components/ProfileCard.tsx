"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { beltForXp } from "@/lib/gamification";
import { loadProfileState, setSelectedProfileId, type ProfileState } from "@/lib/storage";
import { BeltBadge } from "@/components/BeltBadge";

const HEXAGON = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const TILT = [-2, 1.5, -1] as const;

export function ProfileCard({ profile, index }: { profile: Profile; index: number }) {
  const t = useTranslations("home");
  const router = useRouter();
  const [state, setState] = useState<ProfileState | null>(null);

  useEffect(() => {
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadProfileState(profile.id));
  }, [profile.id]);

  const belt = state ? beltForXp(state.totalXp).belt : "blanche";
  const tilt = TILT[index % TILT.length];

  function handleSelect() {
    setSelectedProfileId(profile.id);
    router.push(`/profil/${profile.id}`);
  }

  return (
    <button
      type="button"
      onClick={handleSelect}
      className="notecard group relative bg-card border-2 border-card-border px-6 py-7 text-center transition-transform hover:-translate-y-1 hover:rotate-0 cursor-pointer"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className="mx-auto mb-4 flex h-20 w-20 items-center justify-center text-4xl"
        style={{
          background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
          clipPath: HEXAGON,
        }}
        aria-hidden
      >
        {profile.emoji}
      </div>
      <p className="font-heading text-xl font-bold text-foreground">{profile.name}</p>
      <p className="text-sm text-foreground/60 mb-3">
        {profile.age} {t("yearsOld")}
      </p>
      {state && state.totalXp > 0 && (
        <div className="mb-3 flex justify-center">
          <BeltBadge belt={belt} size="sm" />
        </div>
      )}
      <span
        className="inline-block rounded-lg px-4 py-1.5 text-sm font-bold text-white"
        style={{ backgroundColor: profile.color.solid }}
      >
        {state && state.totalXp > 0 ? t("continue") : t("play")}
      </span>
    </button>
  );
}
