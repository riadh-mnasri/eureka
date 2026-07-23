export function IceQueenMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Reine des neiges">
      <defs>
        <linearGradient id="iq-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF8FF" />
          <stop offset="100%" stopColor="#BEE9FF" />
        </linearGradient>
        <linearGradient id="iq-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFEFC2" />
          <stop offset="100%" stopColor="#F4C95D" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#iq-bg)" />

      {/* sparkles */}
      <g fill="#FFFFFF" opacity="0.9">
        <circle cx="30" cy="50" r="3" />
        <circle cx="172" cy="56" r="2.4" />
        <circle cx="26" cy="150" r="2.6" />
        <circle cx="176" cy="150" r="2.2" />
      </g>

      {/* snow ground */}
      <ellipse cx="100" cy="196" rx="72" ry="16" fill="#FFFFFF" opacity="0.8" />

      {/* stubby arms */}
      <circle cx="58" cy="164" r="12" fill="#FFDFC0" />
      <circle cx="142" cy="164" r="12" fill="#FFDFC0" />

      {/* dress body, small and bell-shaped under the big head */}
      <path d="M 68 148 Q 100 138 132 148 L 148 198 L 52 198 Z" fill="#7FD4F5" stroke="#4FB6E8" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="168" r="5" fill="#EAF8FF" stroke="#4FB6E8" strokeWidth="2" />
      <circle cx="100" cy="184" r="5" fill="#EAF8FF" stroke="#4FB6E8" strokeWidth="2" />

      {/* hair behind big head */}
      <path d="M 44 100 Q 40 46 100 42 Q 160 46 156 100 L 160 150 L 146 150 L 142 104 L 58 104 L 54 150 L 40 150 Z" fill="url(#iq-hair)" stroke="#D8A63C" strokeWidth="3" strokeLinejoin="round" />

      {/* big round head, chibi proportions */}
      <circle cx="100" cy="98" r="56" fill="#FFE9D6" stroke="#E8B98A" strokeWidth="3" />

      {/* fringe */}
      <path d="M 46 92 Q 42 48 100 44 Q 158 48 154 92 Q 146 74 128 80 Q 116 62 100 76 Q 84 62 72 80 Q 54 74 46 92 Z" fill="url(#iq-hair)" stroke="#D8A63C" strokeWidth="3" strokeLinejoin="round" />

      {/* blush */}
      <ellipse cx="66" cy="112" rx="10" ry="7" fill="#FF9EBA" opacity="0.6" />
      <ellipse cx="134" cy="112" rx="10" ry="7" fill="#FF9EBA" opacity="0.6" />

      {/* big close-set cute eyes */}
      <ellipse cx="82" cy="100" rx="10" ry="13" fill="#3C3C3C" />
      <ellipse cx="118" cy="100" rx="10" ry="13" fill="#3C3C3C" />
      <circle cx="85.5" cy="93" r="3.6" fill="#ffffff" />
      <circle cx="121.5" cy="93" r="3.6" fill="#ffffff" />
      <circle cx="79" cy="103" r="2" fill="#ffffff" />
      <circle cx="115" cy="103" r="2" fill="#ffffff" />

      {/* tiny cute smile */}
      <path d="M 92 118 Q 100 124 108 118" fill="none" stroke="#E8779A" strokeWidth="3.5" strokeLinecap="round" />

      {/* snowflake crown */}
      <path d="M 74 56 L 80 36 L 91 50 L 100 28 L 109 50 L 120 36 L 126 56 Z" fill="#FFFFFF" stroke="#6FCBEE" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="44" r="4.5" fill="#9FE0F5" stroke="#4FB6E8" strokeWidth="1.5" />
      <circle cx="80" cy="42" r="3" fill="#FF9EBA" />
      <circle cx="120" cy="42" r="3" fill="#FF9EBA" />
    </svg>
  );
}
