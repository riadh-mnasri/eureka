const SYMBOLS: {
  char: string;
  top: string;
  left: string;
  size: string;
  rotate: number;
  color: string;
  duration: string;
  delay: string;
}[] = [
  { char: "π", top: "6%", left: "8%", size: "2.6rem", rotate: -12, color: "var(--color-teal)", duration: "5.5s", delay: "0s" },
  { char: "+", top: "16%", left: "88%", size: "2.1rem", rotate: 8, color: "var(--color-coral)", duration: "4.5s", delay: "0.4s" },
  { char: "√", top: "66%", left: "5%", size: "2.3rem", rotate: 6, color: "var(--color-amber)", duration: "6s", delay: "0.8s" },
  { char: "×", top: "76%", left: "90%", size: "2.7rem", rotate: -10, color: "var(--color-violet)", duration: "5s", delay: "0.2s" },
  { char: "=", top: "40%", left: "2%", size: "1.9rem", rotate: -6, color: "var(--color-coral)", duration: "4.8s", delay: "1s" },
  { char: "∑", top: "8%", left: "48%", size: "2.1rem", rotate: 10, color: "var(--color-teal)", duration: "5.2s", delay: "0.6s" },
  { char: "÷", top: "84%", left: "45%", size: "1.9rem", rotate: -8, color: "var(--color-amber)", duration: "4.6s", delay: "1.2s" },
  { char: "%", top: "30%", left: "94%", size: "1.7rem", rotate: 14, color: "var(--color-violet)", duration: "5.8s", delay: "0.3s" },
];

export function MathBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SYMBOLS.map((symbol, i) => (
        <span
          key={i}
          className="absolute font-heading font-bold opacity-25 select-none animate-symbol-float"
          style={{
            top: symbol.top,
            left: symbol.left,
            fontSize: symbol.size,
            color: symbol.color,
            animationDuration: symbol.duration,
            animationDelay: symbol.delay,
            // @ts-expect-error custom property read by the keyframes
            "--rot": `${symbol.rotate}deg`,
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
}
