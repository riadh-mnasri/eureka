"use client";

import { useTranslations } from "next-intl";
import { PROFILES } from "@/lib/profiles";
import { ProfileNode } from "@/components/ProfileNode";
import { RobotMascot } from "@/components/RobotMascot";

const CONFETTI_DOTS = [
  { top: "12%", left: "10%", size: "0.9rem", color: "#FFC700" },
  { top: "70%", left: "6%", size: "0.7rem", color: "#FFFFFF" },
  { top: "20%", left: "90%", size: "0.8rem", color: "#FF4B4B" },
  { top: "65%", left: "92%", size: "1rem", color: "#FFC700" },
  { top: "8%", left: "45%", size: "0.6rem", color: "#FFFFFF" },
  { top: "80%", left: "50%", size: "0.7rem", color: "#FFFFFF" },
];

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3.5rem] px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-20 text-center"
        style={{ background: "linear-gradient(160deg, var(--color-teal) 0%, var(--color-blue) 100%)" }}
      >
        {CONFETTI_DOTS.map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
            aria-hidden
          />
        ))}
        <RobotMascot
          mood="excited"
          className="relative h-32 w-32 sm:h-44 sm:w-44 mx-auto animate-bot-bounce drop-shadow-xl"
        />
        <h1 className="relative font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-2">
          {t("title")}
        </h1>
        <p className="relative text-base sm:text-xl text-white/90 font-semibold">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative">
        <div className="notecard bg-card px-4 sm:px-8 pt-6 pb-8 sm:pb-10">
          <h2 className="font-heading text-xl sm:text-2xl font-bold mb-8 text-foreground/90 text-center">
            {t("choose")}
          </h2>

          <div className="relative">
            <div
              className="hidden sm:block absolute left-0 right-0 top-16 h-0 border-t-4 border-dashed"
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
      </div>
    </div>
  );
}
