'use client';

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size * 3.2}
      height={size}
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Zeekaz Web Design Logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f8ef7" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f8ef7" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>

      {/* Z icon mark */}
      <rect width="44" height="44" rx="10" fill="url(#logoGrad)" x="0" y="3" />
      {/* Z letter */}
      <path
        d="M11 13H33L11 35H33"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Company name */}
      <text
        x="52"
        y="22"
        fontFamily="'Space Grotesk', 'Arial', sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="url(#logoGrad)"
        letterSpacing="0.5"
      >
        Zeekaz
      </text>
      <text
        x="52"
        y="38"
        fontFamily="'Space Grotesk', 'Arial', sans-serif"
        fontWeight="400"
        fontSize="11"
        fill="#8fa3c0"
        letterSpacing="1.2"
      >
        WEB DESIGN
      </text>
    </svg>
  );
}
