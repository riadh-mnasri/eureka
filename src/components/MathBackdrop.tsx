const SYMBOLS: { char: string; top: string; left: string; size: string; rotate: number }[] = [
  { char: "π", top: "6%", left: "8%", size: "2.5rem", rotate: -12 },
  { char: "+", top: "18%", left: "88%", size: "2rem", rotate: 8 },
  { char: "√", top: "68%", left: "5%", size: "2.2rem", rotate: 6 },
  { char: "×", top: "78%", left: "90%", size: "2.6rem", rotate: -10 },
  { char: "=", top: "42%", left: "2%", size: "1.8rem", rotate: -6 },
  { char: "∑", top: "10%", left: "48%", size: "2rem", rotate: 10 },
  { char: "÷", top: "85%", left: "45%", size: "1.8rem", rotate: -8 },
];

export function MathBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SYMBOLS.map((symbol, i) => (
        <span
          key={i}
          className="absolute font-heading font-bold text-teal opacity-[0.12] select-none"
          style={{
            top: symbol.top,
            left: symbol.left,
            fontSize: symbol.size,
            transform: `rotate(${symbol.rotate}deg)`,
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
}
