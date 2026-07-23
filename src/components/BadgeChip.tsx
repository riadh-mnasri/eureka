import { useLocale } from "next-intl";
import type { Badge } from "@/lib/badges";

export function BadgeChip({ badge, unlocked }: { badge: Badge; unlocked: boolean }) {
  const locale = useLocale() as "fr" | "en";

  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-xl p-3 text-center transition-opacity ${
        unlocked ? "bg-amber/15" : "bg-card-border/40 grayscale opacity-50"
      }`}
      title={badge.label[locale]}
    >
      <span className="text-3xl" aria-hidden>
        {badge.emoji}
      </span>
      <span className="text-[11px] font-semibold leading-tight text-foreground/70">
        {badge.label[locale]}
      </span>
    </div>
  );
}
