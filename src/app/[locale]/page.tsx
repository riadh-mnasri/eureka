"use client";

import { useTranslations } from "next-intl";
import { PROFILES } from "@/lib/profiles";
import { ProfileNode } from "@/components/ProfileNode";
import { RobotMascot } from "@/components/RobotMascot";
import { MathBackdrop } from "@/components/MathBackdrop";

const SPARKLES = [
  { top: "2%", left: "58%", size: "1.4rem", duration: "1.8s", delay: "0s" },
  { top: "14%", left: "20%", size: "1rem", duration: "2.2s", delay: "0.5s" },
  { top: "-6%", left: "34%", size: "0.8rem", duration: "1.6s", delay: "1s" },
  { top: "20%", left: "72%", size: "1.1rem", duration: "2s", delay: "0.3s" },
];

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <MathBackdrop />
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
        <div className="relative shrink-0">
          <div
            className="absolute inset-0 -m-4 rounded-full blur-2xl opacity-60"
            style={{ background: "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)" }}
            aria-hidden
          />
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              className="absolute animate-twinkle select-none"
              style={{
                top: s.top,
                left: s.left,
                fontSize: s.size,
                animationDuration: s.duration,
                animationDelay: s.delay,
              }}
              aria-hidden
            >
              ✨
            </span>
          ))}
          <RobotMascot
            mood="excited"
            className="relative h-20 w-20 sm:h-24 sm:w-24 animate-bot-bounce"
          />
        </div>
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
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProfileNode profile={profile} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
