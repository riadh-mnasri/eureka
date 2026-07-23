"use client";

import { useTranslations } from "next-intl";
import { PROFILES } from "@/lib/profiles";
import { ProfileNode } from "@/components/ProfileNode";
import { RobotMascot } from "@/components/RobotMascot";
import { MathBackdrop } from "@/components/MathBackdrop";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <MathBackdrop />
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
        <RobotMascot
          mood="excited"
          className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 animate-bot-bounce"
        />
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-foreground/70">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <h2 className="font-heading text-xl sm:text-2xl font-bold mb-10 text-foreground/90 text-center sm:text-left">
        {t("choose")}
      </h2>

      <div className="relative">
        <div
          className="hidden sm:block absolute left-0 right-0 top-14 h-0 border-t-4 border-dashed"
          style={{ borderColor: "var(--color-card-border)" }}
          aria-hidden
        />
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-around gap-10 sm:gap-4">
          {PROFILES.map((profile, index) => (
            <div
              key={profile.id}
              className="animate-node-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProfileNode profile={profile} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
