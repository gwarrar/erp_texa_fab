import React from "react";

interface NCLogoProps {
  className?: string;
  showText?: boolean;
  showSlogan?: boolean;
  animated?: boolean;
  language?: "en" | "ar" | "ru" | "tr" | "de" | "fr" | "nl" | "it" | "uk" | "pl" | "ro";
}

// Generate unique ID for each logo instance to prevent gradient conflicts
let logoInstanceId = 0;

// Slogan translations - "All-in-One Business Intelligence"
const slogans: Record<string, string> = {
  en: "All-in-One Business Intelligence",
  ar: "الكل في واحد لذكاء الأعمال",
  ru: "Комплексная бизнес-аналитика",
  tr: "Hepsi Bir Arada İş Zekası",
  de: "Alles-in-einem Business Intelligence",
  fr: "Intelligence d'affaires tout-en-un",
  nl: "Alles-in-één Business Intelligence",
  it: "Business Intelligence All-in-One",
  uk: "Все-в-одному бізнес-аналітика",
  pl: "Kompleksowa Inteligencja Biznesowa",
  ro: "Inteligență de afaceri all-in-one",
};

export function NCLogo({ 
  className = "h-10 w-auto", 
  showText = true,
  showSlogan = false,
  animated = true,
  language = "en"
}: NCLogoProps) {
  const uniqueId = React.useMemo(() => `nc-logo-${++logoInstanceId}`, []);
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Gradient Definitions with unique IDs */}
          <defs>
            <linearGradient id={`${uniqueId}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-grad2`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-accent`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-glow`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          
          {/* Background Shape - Modern Rounded Square */}
          <rect 
            x="2" 
            y="2" 
            width="60" 
            height="60" 
            rx="14" 
            fill={`url(#${uniqueId}-grad1)`}
          />
          
          {/* Inner Glow Border */}
          <rect 
            x="4" 
            y="4" 
            width="56" 
            height="56" 
            rx="12" 
            fill="none"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
          
          {/* Central Core Circle */}
          <circle
            cx="32"
            cy="32"
            r="12"
            fill={`url(#${uniqueId}-glow)`}
            fillOpacity="0.3"
          >
            {animated && (
              <animate
                attributeName="r"
                values="10;12;10"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          
          {/* Hexagon Network Pattern */}
          <g transform="translate(32, 32)">
            {/* Rotating outer nodes */}
            <g>
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="30s"
                  repeatCount="indefinite"
                />
              )}
              {/* 6 connection points */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <circle cx="18" cy="0" r="3" fill="white" fillOpacity="0.9" />
                  <line x1="0" y1="0" x2="15" y2="0" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
                </g>
              ))}
            </g>
          </g>
          
          {/* "N" Letter - Stylized */}
          <g transform="translate(22, 22)">
            <path
              d="M4 20V4h2l12 12V4h2v16h-2L6 8v12H4z"
              fill="white"
            />
            {animated && (
              <animate
                attributeName="opacity"
                values="0.85;1;0.85"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </g>
          
          {/* Data Flow Lines */}
          <g opacity="0.6">
            <path
              d="M8 20 Q16 32 8 44"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 2"
            >
              {animated && (
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="12"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </path>
            <path
              d="M56 20 Q48 32 56 44"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 2"
            >
              {animated && (
                <animate
                  attributeName="stroke-dashoffset"
                  from="12"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </path>
          </g>
          
          {/* Corner Accent */}
          <circle
            cx="52"
            cy="12"
            r="4"
            fill={`url(#${uniqueId}-accent)`}
          >
            {animated && (
              <animate
                attributeName="r"
                values="3;4;3"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Nexa<span className="text-blue-600 dark:text-blue-400">Core</span>
          </span>
          {showSlogan && (
            <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wide">
              {slogans[language] || slogans.en}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
