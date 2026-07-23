export function IceQueenMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Reine des neiges">
      <defs>
        <linearGradient id="iq-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF8FF" />
          <stop offset="100%" stopColor="#BEE9FF" />
        </linearGradient>
        <linearGradient id="iq-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7FD4F5" />
          <stop offset="100%" stopColor="#4FB6E8" />
        </linearGradient>
        <linearGradient id="iq-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF6E0" />
          <stop offset="100%" stopColor="#F2D98C" />
        </linearGradient>
      </defs>

      {/* background */}
      <rect x="0" y="0" width="200" height="200" fill="url(#iq-bg)" />

      {/* floating snowflakes */}
      <g stroke="#8FCBEA" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <g transform="translate(30,44)">
          <line x1="-10" y1="0" x2="10" y2="0" />
          <line x1="0" y1="-10" x2="0" y2="10" />
          <line x1="-7" y1="-7" x2="7" y2="7" />
          <line x1="-7" y1="7" x2="7" y2="-7" />
        </g>
        <g transform="translate(168,60) scale(0.7)">
          <line x1="-10" y1="0" x2="10" y2="0" />
          <line x1="0" y1="-10" x2="0" y2="10" />
          <line x1="-7" y1="-7" x2="7" y2="7" />
          <line x1="-7" y1="7" x2="7" y2="-7" />
        </g>
      </g>

      {/* hair back */}
      <path d="M 50 90 Q 44 40 100 36 Q 156 40 150 90 L 152 150 L 140 150 L 136 100 L 64 100 L 60 150 L 48 150 Z" fill="url(#iq-hair)" stroke="#D8B96A" strokeWidth="2" />

      {/* braid over shoulder */}
      <path
        d="M 140 96 Q 158 110 148 128 Q 162 134 152 150 Q 164 156 154 172 L 142 168 Q 150 156 140 150 Q 148 136 136 130 Q 146 116 130 104 Z"
        fill="url(#iq-hair)"
        stroke="#D8B96A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* dress / shoulders */}
      <path d="M 46 200 Q 52 156 100 150 Q 148 156 154 200 Z" fill="url(#iq-dress)" stroke="#2E93C4" strokeWidth="3" />
      <path d="M 86 158 L 100 174 L 114 158 L 100 166 Z" fill="#EAF8FF" />

      {/* neck */}
      <rect x="88" y="130" width="24" height="26" fill="#FFE0C2" />

      {/* face */}
      <path
        d="M 100 58
           Q 144 58 144 104
           Q 144 132 126 144
           Q 114 152 100 152
           Q 86 152 74 144
           Q 56 132 56 104
           Q 56 58 100 58 Z"
        fill="#FFE9D6"
        stroke="#E0A800"
        strokeWidth="0"
      />

      {/* ears */}
      <circle cx="55" cy="106" r="7" fill="#FFE9D6" />
      <circle cx="145" cy="106" r="7" fill="#FFE9D6" />

      {/* front hair fringe */}
      <path d="M 52 92 Q 48 46 100 42 Q 152 46 148 92 Q 140 74 124 80 Q 112 62 100 76 Q 88 62 76 80 Q 60 74 52 92 Z" fill="url(#iq-hair)" stroke="#D8B96A" strokeWidth="2" />

      {/* soft brows */}
      <path d="M 74 98 Q 82 94 92 98" fill="none" stroke="#D8B96A" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 108 98 Q 118 94 126 98" fill="none" stroke="#D8B96A" strokeWidth="3.5" strokeLinecap="round" />

      {/* big friendly eyes */}
      <circle cx="80" cy="110" r="8" fill="#3C3C3C" />
      <circle cx="120" cy="110" r="8" fill="#3C3C3C" />
      <circle cx="82.5" cy="107" r="2.6" fill="#fff" />
      <circle cx="122.5" cy="107" r="2.6" fill="#fff" />

      {/* blush */}
      <ellipse cx="70" cy="126" rx="9" ry="6" fill="#FF9E80" opacity="0.45" />
      <ellipse cx="130" cy="126" rx="9" ry="6" fill="#FF9E80" opacity="0.45" />

      {/* gentle smile */}
      <path d="M 82 134 Q 100 146 118 134" fill="none" stroke="#D8925A" strokeWidth="4" strokeLinecap="round" />

      {/* snowflake tiara */}
      <path d="M 66 52 L 74 30 L 88 46 L 100 22 L 112 46 L 126 30 L 134 52 Z" fill="#EAF8FF" stroke="#8FCBEA" strokeWidth="3" strokeLinejoin="round" />
      <g stroke="#4FB6E8" strokeWidth="3" strokeLinecap="round">
        <line x1="100" y1="18" x2="100" y2="34" />
        <line x1="92" y1="22" x2="108" y2="30" />
        <line x1="108" y1="22" x2="92" y2="30" />
      </g>
    </svg>
  );
}
