export function ChessboardIcon({ className }: { className?: string }) {
  const size = 8;
  const cell = 200 / size;

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Échiquier">
      <rect x="0" y="0" width="200" height="200" fill="#B58863" />
      {Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, col) => {
          const isDark = (row + col) % 2 === 1;
          return (
            <rect
              key={`${row}-${col}`}
              x={col * cell}
              y={row * cell}
              width={cell}
              height={cell}
              fill={isDark ? "#7A4B2C" : "#F0D9B5"}
            />
          );
        })
      )}

      {/* a couple of pieces mid-game, for flavor */}
      <text x={cell * 1.5} y={cell * 1.5 + 14} textAnchor="middle" fontSize={cell * 0.9} fill="#1A1A1A">
        ♞
      </text>
      <text x={cell * 5.5} y={cell * 2.5 + 14} textAnchor="middle" fontSize={cell * 0.9} fill="#F5F5F5" stroke="#1A1A1A" strokeWidth="1">
        ♛
      </text>
      <text x={cell * 3.5} y={cell * 5.5 + 14} textAnchor="middle" fontSize={cell * 0.9} fill="#1A1A1A">
        ♟
      </text>
      <text x={cell * 6.5} y={cell * 6.5 + 14} textAnchor="middle" fontSize={cell * 0.9} fill="#F5F5F5" stroke="#1A1A1A" strokeWidth="1">
        ♙
      </text>
    </svg>
  );
}
