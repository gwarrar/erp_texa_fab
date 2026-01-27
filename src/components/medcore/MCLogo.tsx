import React from "react";

interface MCLogoProps {
  className?: string;
  showText?: boolean;
  showSlogan?: boolean;
  animated?: boolean;
}

// Generate unique ID for each logo instance to prevent gradient conflicts
let logoInstanceId = 0;

export function MCLogo({ 
  className = "h-10 w-auto", 
  showText = true,
  showSlogan = false,
  animated = true
}: MCLogoProps) {
  const uniqueId = React.useMemo(() => `mc-logo-${++logoInstanceId}`, []);
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Gradient Definitions with unique IDs */}
          <defs>
            <linearGradient id={`${uniqueId}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-grad2`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-pulse`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            
            {/* Clip path for ECG line animation */}
            <clipPath id={`${uniqueId}-ecg-clip`}>
              <rect x="8" y="16" width="32" height="16">
                {animated && (
                  <animate 
                    attributeName="x" 
                    values="-32;40" 
                    dur="2s" 
                    repeatCount="indefinite"
                  />
                )}
              </rect>
            </clipPath>
          </defs>
          
          {/* Background Shape - Modern Rounded Square */}
          <rect 
            x="2" 
            y="2" 
            width="44" 
            height="44" 
            rx="12" 
            fill={`url(#${uniqueId}-grad1)`}
          />
          
          {/* Inner Glow Border */}
          <rect 
            x="4" 
            y="4" 
            width="40" 
            height="40" 
            rx="10" 
            fill="none"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
          
          {/* Heart Shape - Beautiful Curved Design with Pulsating */}
          <g>
            <path
              d="M24 35
                 C24 35 11 26 11 18.5
                 C11 14 14.5 11 18.5 11
                 C21.5 11 23 13 24 15
                 C25 13 26.5 11 29.5 11
                 C33.5 11 37 14 37 18.5
                 C37 26 24 35 24 35Z"
              fill="white"
              opacity="0.95"
            >
              {animated && (
                <>
                  <animate 
                    attributeName="opacity" 
                    values="0.9;1;0.9" 
                    dur="0.8s" 
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.03;1"
                    dur="0.8s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </>
              )}
            </path>
            {/* Heart inner shadow for depth */}
            <path
              d="M24 33
                 C24 33 13 25 13 19
                 C13 15.5 15.5 13 18.5 13
                 C20.8 13 22.5 14.5 24 16.5
                 C25.5 14.5 27.2 13 29.5 13
                 C32.5 13 35 15.5 35 19
                 C35 25 24 33 24 33Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>
          
          {/* ECG Pulse Line - Animated */}
          <g clipPath={animated ? `url(#${uniqueId}-ecg-clip)` : undefined}>
            <path
              d="M6 23 H15 L17 19 L19 27 L21 17 L24 29 L27 19 L29 23 H42"
              stroke={`url(#${uniqueId}-pulse)`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
          
          {/* Static ECG background line */}
          <path
            d="M6 23 H15 L17 19 L19 27 L21 17 L24 29 L27 19 L29 23 H42"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent leading-tight">
            MedCore
          </span>
          {showSlogan && (
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide leading-tight">
              Healthcare Excellence
            </span>
          )}
        </div>
      )}
    </div>
  );
}
