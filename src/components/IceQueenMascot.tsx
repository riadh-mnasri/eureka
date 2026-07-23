export function IceQueenMascot({ className }: { className?: string }) {
  const branches = [0, 60, 120, 180, 240, 300];

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Reine des neiges">
      <defs>
        <linearGradient id="iq-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF8FF" />
          <stop offset="100%" stopColor="#9FD8F5" />
        </linearGradient>
        <linearGradient id="iq-crystal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CDEEFB" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#iq-bg)" />

      {/* small sparkles scattered around */}
      <g fill="#FFFFFF" opacity="0.9">
        <circle cx="34" cy="150" r="3" />
        <circle cx="166" cy="150" r="3" />
        <circle cx="30" cy="60" r="2.4" />
        <circle cx="170" cy="60" r="2.4" />
        <circle cx="100" cy="176" r="2.6" />
      </g>

      {/* main snowflake, centered */}
      <g transform="translate(100,108)">
        {branches.map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-52" stroke="url(#iq-crystal)" strokeWidth="7" strokeLinecap="round" />
            <line x1="0" y1="-30" x2="-14" y2="-42" stroke="url(#iq-crystal)" strokeWidth="5" strokeLinecap="round" />
            <line x1="0" y1="-30" x2="14" y2="-42" stroke="url(#iq-crystal)" strokeWidth="5" strokeLinecap="round" />
            <line x1="0" y1="-16" x2="-9" y2="-24" stroke="url(#iq-crystal)" strokeWidth="4" strokeLinecap="round" />
            <line x1="0" y1="-16" x2="9" y2="-24" stroke="url(#iq-crystal)" strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
        <circle cx="0" cy="0" r="12" fill="url(#iq-crystal)" stroke="#6FCBEE" strokeWidth="2" />
      </g>

      {/* crown resting on top of the snowflake */}
      <g transform="translate(100,54)">
        <path
          d="M -26 14 L -18 -12 L -8 4 L 0 -20 L 8 4 L 18 -12 L 26 14 Z"
          fill="#FFFFFF"
          stroke="#6FCBEE"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="-18" cy="-12" r="4" fill="#FF9EBA" />
        <circle cx="0" cy="-20" r="5" fill="#9FE0F5" stroke="#4FB6E8" strokeWidth="1.5" />
        <circle cx="18" cy="-12" r="4" fill="#FF9EBA" />
        <rect x="-26" y="12" width="52" height="8" rx="3" fill="#FFFFFF" stroke="#6FCBEE" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
