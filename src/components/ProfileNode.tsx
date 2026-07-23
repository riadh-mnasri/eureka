"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { beltForXp } from "@/lib/gamification";
import { loadProfileState, setSelectedProfileId, type ProfileState } from "@/lib/storage";
import { BeltBadge } from "@/components/BeltBadge";

const HEXAGON = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const OFFSET = [0, 34, 6] as const;

export function ProfileNode({ profile, index }: { profile: Profile; index: number }) {
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
  const offset = OFFSET[index % OFFSET.length];

  function handleSelect() {
    setSelectedProfileId(profile.id);
    router.push(`/profil/${profile.id}`);
  }

  return (
    <button
      type="button"
      onClick={handleSelect}
      className="group flex flex-col items-center gap-2 cursor-pointer"
      style={{ marginTop: offset }}
    >
      <div
        className="ink-shadow flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center text-4xl sm:text-5xl transition-transform group-hover:-translate-y-1"
        style={{
          background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
          clipPath: HEXAGON,
        }}
        aria-hidden
      >
        {profile.emoji}
      </div>
      <p className="font-heading text-lg font-bold text-foreground">{profile.name}</p>
      <p className="text-xs text-foreground/60">
        {profile.age} {t("yearsOld")}
      </p>
      {state && state.totalXp > 0 && <BeltBadge belt={belt} size="sm" />}
      <span
        className="ink-button inline-block px-4 py-1 text-xs font-bold text-white mt-1"
        style={{ backgroundColor: profile.color.solid }}
      >
        {state && state.totalXp > 0 ? t("continue") : t("play")}
      </span>
    </button>
  );
}
