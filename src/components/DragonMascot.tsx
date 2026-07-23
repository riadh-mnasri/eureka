export function DragonMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Dragon">
      <defs>
        <linearGradient id="dragon-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF4B4B" />
          <stop offset="55%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FFE066" />
        </linearGradient>
        <linearGradient id="dragon-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1FE0C2" />
          <stop offset="100%" stopColor="#00A28C" />
        </linearGradient>
      </defs>

      {/* flame breath */}
      <path
        d="M 100 190 Q 88 170 92 150 Q 96 162 100 158 Q 100 140 108 128 Q 108 148 116 150 Q 120 134 128 128 Q 122 148 126 162 Q 132 150 130 172 Q 118 190 100 190 Z"
        fill="url(#dragon-flame)"
      />

      {/* wings, bold and clearly membraned */}
      <path
        d="M 44 112 L 2 76 L 16 92 L 4 84 L 22 108 L 10 100 L 34 128 Z"
        fill="#00A28C"
        stroke="#00453B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M 156 112 L 198 76 L 184 92 L 196 84 L 178 108 L 190 100 L 166 128 Z"
        fill="#00A28C"
        stroke="#00453B"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* neck spikes */}
      <path d="M 78 66 L 72 42 L 90 58 Z" fill="#00453B" />
      <path d="M 100 58 L 100 32 L 114 52 Z" fill="#00453B" />
      <path d="M 122 66 L 128 42 L 110 58 Z" fill="#00453B" />

      {/* horns, large and swept back */}
      <path
        d="M 62 76 Q 30 54 30 16 Q 62 30 76 62 Z"
        fill="#5C2E1A"
        stroke="#3A1B0F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M 138 76 Q 170 54 170 16 Q 138 30 124 62 Z"
        fill="#5C2E1A"
        stroke="#3A1B0F"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* head, angular rather than round */}
      <path
        d="M 100 60
           L 140 72
           Q 156 82 154 104
           Q 152 122 138 132
           L 148 146
           Q 124 140 116 150
           L 100 158
           L 84 150
           Q 76 140 52 146
           L 62 132
           Q 48 122 46 104
           Q 44 82 60 72
           Z"
        fill="url(#dragon-head)"
        stroke="#00453B"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* scale diamonds */}
      <path d="M 100 78 L 108 88 L 100 98 L 92 88 Z" fill="#00453B" opacity="0.35" />
      <path d="M 78 86 L 86 96 L 78 106 L 70 96 Z" fill="#00453B" opacity="0.3" />
      <path d="M 122 86 L 130 96 L 122 106 L 114 96 Z" fill="#00453B" opacity="0.3" />

      {/* fierce brows */}
      <path d="M 62 96 L 88 92" stroke="#00453B" strokeWidth="6" strokeLinecap="round" />
      <path d="M 112 92 L 138 96" stroke="#00453B" strokeWidth="6" strokeLinecap="round" />

      {/* narrow reptile eyes */}
      <ellipse cx="76" cy="106" rx="9" ry="11" fill="#FFE066" stroke="#00453B" strokeWidth="2" />
      <ellipse cx="124" cy="106" rx="9" ry="11" fill="#FFE066" stroke="#00453B" strokeWidth="2" />
      <ellipse cx="76" cy="108" rx="2.5" ry="8" fill="#1A1A1A" />
      <ellipse cx="124" cy="108" rx="2.5" ry="8" fill="#1A1A1A" />

      {/* open, roaring jaw */}
      <path
        d="M 78 128 Q 100 122 122 128 Q 118 140 100 146 Q 82 140 78 128 Z"
        fill="#5C1A14"
        stroke="#00453B"
        strokeWidth="2.5"
      />
      <path d="M 86 128 L 84 138 L 92 130 Z" fill="#ffffff" />
      <path d="M 114 128 L 116 138 L 108 130 Z" fill="#ffffff" />
    </svg>
  );
}
