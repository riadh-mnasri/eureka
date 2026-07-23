const SYMBOLS: { char: string; top: string; left: string; size: string; rotate: number; color: string }[] = [
  { char: "π", top: "6%", left: "8%", size: "2.4rem", rotate: -12, color: "var(--color-teal)" },
  { char: "+", top: "16%", left: "88%", size: "2rem", rotate: 8, color: "var(--color-coral)" },
  { char: "√", top: "66%", left: "5%", size: "2.2rem", rotate: 6, color: "var(--color-amber)" },
  { char: "×", top: "76%", left: "90%", size: "2.5rem", rotate: -10, color: "var(--color-blue)" },
  { char: "∑", top: "8%", left: "48%", size: "2rem", rotate: 10, color: "var(--color-violet)" },
];

export function MathBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SYMBOLS.map((symbol, i) => (
        <span
          key={i}
          className="absolute font-heading font-bold opacity-[0.15] select-none"
          style={{
            top: symbol.top,
            left: symbol.left,
            fontSize: symbol.size,
            color: symbol.color,
            transform: `rotate(${symbol.rotate}deg)`,
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
}
