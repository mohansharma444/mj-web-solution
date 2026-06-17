import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColorClass?: string;
  iconSize?: number;
}

export default function Logo({
  className = "",
  showText = true,
  textColorClass = "text-slate-900",
  iconSize = 40,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" /> {/* Blue 600 */}
            <stop offset="100%" stopColor="#1d4ed8" /> {/* Blue 700 */}
          </linearGradient>
          <linearGradient id="logo-accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" /> {/* Sky 400 */}
            <stop offset="100%" stopColor="#0284c7" /> {/* Sky 600 */}
          </linearGradient>
        </defs>

        {/* Outer Hexagon Shield */}
        <polygon
          points="50,5 90,28 90,72 50,95 10,72 10,28"
          fill="url(#logo-gradient)"
          className="drop-shadow-md"
        />

        {/* Stylized M & J Inner Path */}
        {/* We can construct M on top, J connecting below in white/sky blue */}
        
        {/* The 'M' path in White */}
        <path
          d="M 28 32 L 28 65 M 28 32 L 50 50 L 72 32 M 72 32 L 72 55"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The 'J' path in Bright Sky Blue */}
        <path
          d="M 72 48 L 72 68 C 72 78, 55 78, 50 78 C 42 78, 38 72, 38 68"
          stroke="url(#logo-accent-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Core connection point dot */}
        <circle cx="50" cy="50" r="4" fill="#ffffff" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-bold tracking-tight ${textColorClass}`}>
            MJ <span className="text-blue-600">Web</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 mt-0.5">
            Solution
          </span>
        </div>
      )}
    </div>
  );
}
