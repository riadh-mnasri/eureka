import { useLocale } from "next-intl";
import { DOMAINS, type Domain } from "@/lib/domains";
import { masteryRatio, masteryStars } from "@/lib/gamification";

const CENTER = 110;
const MAX_RADIUS = 78;
const RINGS = [0.25, 0.5, 0.75, 1];

function pointAt(index: number, ratio: number) {
  const angleDeg = -90 + index * 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = ratio * MAX_RADIUS;
  return {
    x: CENTER + radius * Math.cos(angleRad),
    y: CENTER + radius * Math.sin(angleRad),
  };
}

export function MasteryRadar({ domainXp }: { domainXp: Record<Domain, number> }) {
  const locale = useLocale() as "fr" | "en";

  const dataPoints = DOMAINS.map((domain, i) => pointAt(i, masteryRatio(domainXp[domain.id])));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 220 220" className="w-56 h-56 sm:w-64 sm:h-64">
        {RINGS.map((ring) => {
          const ringPoints = DOMAINS.map((_, i) => pointAt(i, ring));
          return (
            <polygon
              key={ring}
              points={ringPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="var(--color-card-border)"
              strokeWidth="1"
            />
          );
        })}

        {DOMAINS.map((_, i) => {
          const outer = pointAt(i, 1);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={outer.x}
              y2={outer.y}
              stroke="var(--color-card-border)"
              strokeWidth="1"
            />
          );
        })}

        <polygon points={dataPath} fill="var(--color-teal)" fillOpacity="0.28" stroke="var(--color-teal)" strokeWidth="2.5" />

        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--color-teal-dark)" />
        ))}

        {DOMAINS.map((domain, i) => {
          const labelPoint = pointAt(i, 1.32);
          return (
            <text
              key={domain.id}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
            >
              {domain.emoji}
            </text>
          );
        })}
      </svg>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2">
        {DOMAINS.map((domain) => {
          const stars = masteryStars(domainXp[domain.id]);
          return (
            <div key={domain.id} className="flex items-center gap-2 text-sm">
              <span aria-hidden>{domain.emoji}</span>
              <span className="font-semibold text-foreground/80">{domain.label[locale]}</span>
              <span className="text-amber-dark font-bold">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
