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
        <circle cx="26" cy="46" r="3" />
        <circle cx="174" cy="52" r="2.4" />
        <circle cx="22" cy="150" r="2.6" />
        <circle cx="178" cy="150" r="2.2" />
      </g>

      {/* snow ground */}
      <ellipse cx="100" cy="198" rx="66" ry="14" fill="#FFFFFF" opacity="0.8" />

      {/* dress body, more torso, less oversized head */}
      <path
        d="M 66 148 Q 100 138 134 148 L 148 198 L 52 198 Z"
        fill="#7FD4F5"
        stroke="#4FB6E8"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="164" r="4.5" fill="#EAF8FF" stroke="#4FB6E8" strokeWidth="1.5" />
      <circle cx="100" cy="178" r="4.5" fill="#EAF8FF" stroke="#4FB6E8" strokeWidth="1.5" />

      {/* stubby arms */}
      <circle cx="60" cy="160" r="10" fill="#FFDFC0" />
      <circle cx="140" cy="160" r="10" fill="#FFDFC0" />

      {/* neck */}
      <rect x="90" y="122" width="20" height="18" fill="#FFDFC0" />

      {/* hair behind head */}
      <path
        d="M 52 92 Q 48 40 100 36 Q 152 40 148 92 L 150 132 L 138 132 L 134 96 L 66 96 L 62 132 L 50 132 Z"
        fill="url(#iq-hair)"
        stroke="#D8A63C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* head, smaller and rounder proportion to the body */}
      <circle cx="100" cy="88" r="46" fill="#FFE9D6" stroke="#E8B98A" strokeWidth="2.5" />

      {/* fringe */}
      <path
        d="M 56 84 Q 52 42 100 38 Q 148 42 144 84 Q 137 68 121 74 Q 111 58 100 70 Q 89 58 79 74 Q 63 68 56 84 Z"
        fill="url(#iq-hair)"
        stroke="#D8A63C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* blush */}
      <ellipse cx="70" cy="98" rx="8" ry="5.5" fill="#FF9EBA" opacity="0.6" />
      <ellipse cx="130" cy="98" rx="8" ry="5.5" fill="#FF9EBA" opacity="0.6" />

      {/* cute close-set eyes */}
      <ellipse cx="85" cy="88" rx="8" ry="10.5" fill="#3C3C3C" />
      <ellipse cx="115" cy="88" rx="8" ry="10.5" fill="#3C3C3C" />
      <circle cx="88" cy="82" r="3" fill="#ffffff" />
      <circle cx="118" cy="82" r="3" fill="#ffffff" />
      <circle cx="82.5" cy="91" r="1.6" fill="#ffffff" />
      <circle cx="112.5" cy="91" r="1.6" fill="#ffffff" />

      {/* tiny cute smile */}
      <path d="M 93 104 Q 100 109 107 104" fill="none" stroke="#E8779A" strokeWidth="3" strokeLinecap="round" />

      {/* snowflake crown */}
      <path
        d="M 78 48 L 83 30 L 92 42 L 100 22 L 108 42 L 117 30 L 122 48 Z"
        fill="#FFFFFF"
        stroke="#6FCBEE"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="38" r="4" fill="#9FE0F5" stroke="#4FB6E8" strokeWidth="1.5" />
      <circle cx="83" cy="36" r="2.6" fill="#FF9EBA" />
      <circle cx="117" cy="36" r="2.6" fill="#FF9EBA" />
    </svg>
  );
}
