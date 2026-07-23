type Mood = "idle" | "happy" | "excited" | "thinking";

export function RobotMascot({
  mood = "idle",
  className,
}: {
  mood?: Mood;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Eureka le robot"
    >
      {/* antenna */}
      <line x1="100" y1="46" x2="100" y2="22" stroke="#0E7E7A" strokeWidth="6" strokeLinecap="round" />
      <circle cx="100" cy="16" r="9" fill={mood === "excited" ? "#F5A742" : "#1FAAA6"} />

      {/* ears */}
      <rect x="24" y="90" width="16" height="34" rx="6" fill="#0E7E7A" />
      <rect x="160" y="90" width="16" height="34" rx="6" fill="#0E7E7A" />

      {/* head */}
      <rect x="42" y="46" width="116" height="112" rx="30" fill="#1FAAA6" />

      {/* screen */}
      <rect x="58" y="66" width="84" height="72" rx="18" fill="#0E3B39" />

      {/* cheeks */}
      <circle cx="70" cy="112" r="8" fill="#F97362" opacity="0.45" />
      <circle cx="130" cy="112" r="8" fill="#F97362" opacity="0.45" />

      {mood === "excited" && (
        <g stroke="#F5A742" strokeWidth="5" strokeLinecap="round" opacity="0.9">
          <path d="M 46 44 L 36 32" />
          <path d="M 154 44 L 164 32" />
        </g>
      )}

      {/* eyes */}
      {mood === "idle" && (
        <g fill="#7FE8E3">
          <rect x="76" y="92" width="14" height="14" rx="4" />
          <rect x="110" y="92" width="14" height="14" rx="4" />
        </g>
      )}
      {mood === "happy" && (
        <g stroke="#7FE8E3" strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M 74 100 Q 83 90 92 100" />
          <path d="M 108 100 Q 117 90 126 100" />
        </g>
      )}
      {mood === "thinking" && (
        <g fill="#7FE8E3">
          <rect x="76" y="98" width="14" height="6" rx="3" />
          <rect x="110" y="90" width="14" height="14" rx="4" />
        </g>
      )}
      {mood === "excited" && (
        <g fill="#F5A742">
          <path d="M 83 88 L 87 98 L 97 98 L 89 104 L 92 114 L 83 108 L 74 114 L 77 104 L 69 98 L 79 98 Z" />
          <path d="M 117 88 L 121 98 L 131 98 L 123 104 L 126 114 L 117 108 L 108 114 L 111 104 L 103 98 L 113 98 Z" />
        </g>
      )}

      {/* mouth */}
      {mood === "idle" && (
        <rect x="88" y="118" width="24" height="6" rx="3" fill="#7FE8E3" />
      )}
      {mood === "happy" && (
        <path d="M 82 118 Q 100 132 118 118" fill="none" stroke="#7FE8E3" strokeWidth="6" strokeLinecap="round" />
      )}
      {mood === "thinking" && (
        <path d="M 90 122 Q 100 118 110 122" fill="none" stroke="#7FE8E3" strokeWidth="5" strokeLinecap="round" />
      )}
      {mood === "excited" && (
        <path d="M 80 116 Q 100 138 120 116 Q 100 128 80 116 Z" fill="#F5A742" stroke="#7FE8E3" strokeWidth="3" strokeLinejoin="round" />
      )}

      {/* bolts */}
      <circle cx="54" cy="150" r="4" fill="#0E7E7A" />
      <circle cx="146" cy="150" r="4" fill="#0E7E7A" />
    </svg>
  );
}
