import React from "react";

interface ICLogoProps {
  className?: string;
  showText?: boolean;
  showSlogan?: boolean;
  animated?: boolean;
  language?: "en" | "ar" | "ru" | "tr" | "de" | "fr" | "nl" | "it" | "uk" | "pl" | "ro";
}

// Generate unique ID for each logo instance to prevent gradient conflicts
let logoInstanceId = 0;

// Slogan translations - "Quality Worthy of Trust"
const slogans: Record<string, string> = {
  en: "Quality Worthy of Trust",
  ar: "جودة تستحق الثقة",
  ru: "Качество достойно доверия",
  tr: "Güvene Layık Kalite",
  de: "Qualität, die Vertrauen verdient",
  fr: "Qualité digne de confiance",
  nl: "Kwaliteit waardig van vertrouwen",
  it: "Qualità degna di fiducia",
  uk: "Якість, гідна довіри",
  pl: "Jakość godna zaufania",
  ro: "Calitate demnă de încredere",
};

export function ICLogo({ 
  className = "h-10 w-auto", 
  showText = true,
  showSlogan = false,
  animated = true,
  language = "en"
}: ICLogoProps) {
  const uniqueId = React.useMemo(() => `ic-logo-${++logoInstanceId}`, []);
  
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
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-grad2`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#450a0a" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-gear`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-metal`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#e5e7eb" />
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
          
          {/* Large Gear (Left) - Animated */}
          <g transform="translate(22, 28)">
            {/* Gear teeth - Large gear */}
            <g>
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="8s"
                  repeatCount="indefinite"
                />
              )}
              {/* Outer ring with teeth */}
              <circle cx="0" cy="0" r="14" fill={`url(#${uniqueId}-metal)`} />
              {/* Gear teeth */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <rect
                  key={i}
                  x="-2"
                  y="-17"
                  width="4"
                  height="6"
                  rx="1"
                  fill={`url(#${uniqueId}-metal)`}
                  transform={`rotate(${angle})`}
                />
              ))}
              {/* Inner circle */}
              <circle cx="0" cy="0" r="9" fill={`url(#${uniqueId}-grad1)`} />
              {/* Center hole */}
              <circle cx="0" cy="0" r="4" fill={`url(#${uniqueId}-metal)`} />
              <circle cx="0" cy="0" r="2.5" fill={`url(#${uniqueId}-grad2)`} />
            </g>
          </g>
          
          {/* Small Gear (Right) - Counter Animated */}
          <g transform="translate(42, 36)">
            <g>
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="15"
                  to="-345"
                  dur="6s"
                  repeatCount="indefinite"
                />
              )}
              {/* Outer ring with teeth */}
              <circle cx="0" cy="0" r="10" fill={`url(#${uniqueId}-metal)`} />
              {/* Gear teeth - 8 teeth */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                  key={i}
                  x="-2"
                  y="-13"
                  width="4"
                  height="5"
                  rx="1"
                  fill={`url(#${uniqueId}-metal)`}
                  transform={`rotate(${angle})`}
                />
              ))}
              {/* Inner circle */}
              <circle cx="0" cy="0" r="6" fill={`url(#${uniqueId}-grad1)`} />
              {/* Center hole */}
              <circle cx="0" cy="0" r="3" fill={`url(#${uniqueId}-metal)`} />
              <circle cx="0" cy="0" r="2" fill={`url(#${uniqueId}-grad2)`} />
            </g>
          </g>
          
          {/* Accent dots */}
          <circle cx="52" cy="12" r="2" fill="white" opacity="0.4" />
          <circle cx="12" cy="52" r="2" fill="white" opacity="0.4" />
        </svg>
        
        {/* Animated glow effect */}
        {animated && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-800/20 to-orange-500/20 blur-xl animate-pulse" />
        )}
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-red-800 dark:text-red-400">Indu</span>
            <span className="text-slate-800 dark:text-white">Core</span>
          </span>
          {showSlogan && (
            <span className={`text-[10px] text-slate-400 dark:text-slate-500 tracking-wider mt-0.5 font-light uppercase ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {slogans[language] || slogans.en}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
