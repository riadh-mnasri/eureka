"use client";

import { useTranslations } from "next-intl";
import { PROFILES } from "@/lib/profiles";
import { ProfileCard } from "@/components/ProfileCard";
import { RobotMascot } from "@/components/RobotMascot";
import { MathBackdrop } from "@/components/MathBackdrop";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
      <MathBackdrop />
      <div className="relative">
        <RobotMascot mood="excited" className="h-32 w-32 sm:h-40 sm:w-40 mx-auto mb-2" />
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground mb-3">
          {t("title")}
        </h1>
        <p className="text-base sm:text-lg text-foreground/70 mb-10">
          {t("subtitle")}
        </p>
        <h2 className="font-heading text-xl sm:text-2xl font-bold mb-8 text-foreground/90">
          {t("choose")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {PROFILES.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
