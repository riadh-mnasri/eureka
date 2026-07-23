export function DragonMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Dragon">
      {/* back spikes */}
      <path d="M 60 60 L 52 40 L 68 48 Z" fill="#00947F" />
      <path d="M 100 46 L 96 22 L 112 38 Z" fill="#00947F" />
      <path d="M 140 60 L 148 40 L 132 48 Z" fill="#00947F" />

      {/* horns */}
      <path d="M 66 70 Q 50 50 58 30 Q 70 46 76 66 Z" fill="#FFC700" stroke="#E0A800" strokeWidth="2" />
      <path d="M 134 70 Q 150 50 142 30 Q 130 46 124 66 Z" fill="#FFC700" stroke="#E0A800" strokeWidth="2" />

      {/* head */}
      <path
        d="M 100 62
           Q 152 62 150 108
           Q 148 136 128 150
           Q 114 158 100 158
           Q 86 158 72 150
           Q 52 136 50 108
           Q 48 62 100 62 Z"
        fill="#00C2A8"
      />

      {/* snout */}
      <path d="M 76 128 Q 100 150 124 128 Q 112 140 100 140 Q 88 140 76 128 Z" fill="#00A28C" />

      {/* scale pattern accents */}
      <path d="M 80 84 L 88 76 L 96 84 L 88 92 Z" fill="#00A28C" opacity="0.6" />
      <path d="M 104 84 L 112 76 L 120 84 L 112 92 Z" fill="#00A28C" opacity="0.6" />

      {/* cheeks */}
      <ellipse cx="70" cy="124" rx="9" ry="6" fill="#FF8A65" opacity="0.5" />
      <ellipse cx="130" cy="124" rx="9" ry="6" fill="#FF8A65" opacity="0.5" />

      {/* nostrils with a little smoke */}
      <circle cx="90" cy="132" r="3" fill="#00594E" />
      <circle cx="110" cy="132" r="3" fill="#00594E" />
      <path d="M 90 126 Q 86 118 90 112" fill="none" stroke="#B9E9E1" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

      {/* friendly reptile eyes */}
      <ellipse cx="78" cy="100" rx="10" ry="12" fill="#FFC700" />
      <ellipse cx="122" cy="100" rx="10" ry="12" fill="#FFC700" />
      <ellipse cx="78" cy="102" rx="3" ry="9" fill="#1A1A1A" />
      <ellipse cx="122" cy="102" rx="3" ry="9" fill="#1A1A1A" />

      {/* eyebrow ridges for a bold look */}
      <path d="M 66 88 Q 78 82 90 88" fill="none" stroke="#00947F" strokeWidth="5" strokeLinecap="round" />
      <path d="M 110 88 Q 122 82 134 88" fill="none" stroke="#00947F" strokeWidth="5" strokeLinecap="round" />

      {/* big friendly grin with a couple of teeth */}
      <path d="M 78 132 Q 100 148 122 132" fill="none" stroke="#00594E" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 92 138 L 90 144 L 96 140 Z" fill="#ffffff" />
      <path d="M 108 138 L 110 144 L 104 140 Z" fill="#ffffff" />

      {/* ear frills */}
      <path d="M 48 96 Q 32 100 34 118 Q 44 108 52 104 Z" fill="#00A28C" />
      <path d="M 152 96 Q 168 100 166 118 Q 156 108 148 104 Z" fill="#00A28C" />
    </svg>
  );
}
