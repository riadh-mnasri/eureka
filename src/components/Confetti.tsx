"use client";

import { useEffect, useState } from "react";

const COLORS = ["#1FAAA6", "#F5A742", "#F97362", "#7C6BCC", "#5FA8D3"];

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  rotate: number;
  drift: number;
  size: number;
};

function generatePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    duration: 1.6 + Math.random() * 1,
    color: COLORS[i % COLORS.length],
    rotate: Math.random() * 360,
    drift: (Math.random() - 0.5) * 120,
    size: 6 + Math.random() * 6,
  }));
}

export function Confetti({ pieces = 32 }: { pieces?: number }) {
  const [items, setItems] = useState<Piece[]>([]);

  useEffect(() => {
    // Confetti placement is randomized on purpose; generating it after mount
    // (instead of during render) keeps rendering pure and avoids re-randomizing on re-render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(generatePieces(pieces));
  }, [pieces]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute top-0 block animate-confetti-fall"
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size * 0.4,
            backgroundColor: item.color,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            // @ts-expect-error custom property read by the keyframes
            "--drift": `${item.drift}px`,
            "--rotate": `${item.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}
