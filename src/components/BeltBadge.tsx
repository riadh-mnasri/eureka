import { useLocale } from "next-intl";
import { BELT_COLORS, BELT_LABELS, type Belt } from "@/lib/gamification";

export function BeltBadge({
  belt,
  size = "md",
  showLabel = true,
}: {
  belt: Belt;
  size?: "sm" | "md";
  showLabel?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";
  const color = BELT_COLORS[belt];
  const isDark = belt === "noire";

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`inline-block rounded-full border-2 border-black/10 ${size === "sm" ? "h-3 w-8" : "h-4 w-12"}`}
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {showLabel && (
        <span className={`font-bold ${size === "sm" ? "text-xs" : "text-sm"} ${isDark ? "text-foreground" : "text-foreground/80"}`}>
          {BELT_LABELS[belt][locale]}
        </span>
      )}
    </div>
  );
}
