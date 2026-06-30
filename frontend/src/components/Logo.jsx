export default function Logo({ className = "h-9 w-auto" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Outpro.India logo"
    >
      <rect x="0" y="6" width="28" height="28" rx="8" fill="#1A56DB" />
      <path
        d="M8 27 L14 12 L20 27 M10.5 21 H17.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text x="36" y="27" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#0F172A">
        Outpro<tspan fill="#1A56DB">.India</tspan>
      </text>
    </svg>
  );
}
