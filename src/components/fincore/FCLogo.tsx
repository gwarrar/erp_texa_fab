import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";

interface FCLogoProps {
  showSlogan?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "text";
  className?: string;
}

export const FCLogo: React.FC<FCLogoProps> = ({ 
  showSlogan = false, 
  size = "md",
  variant = "full",
  className = "" 
}) => {
  const { language } = useLanguage();
  
  const sizeClasses = {
    sm: { icon: "w-8 h-8", text: "text-lg", slogan: "text-[8px]", dot: "w-2 h-2" },
    md: { icon: "w-10 h-10", text: "text-xl", slogan: "text-[10px]", dot: "w-3 h-3" },
    lg: { icon: "w-14 h-14", text: "text-2xl", slogan: "text-xs", dot: "w-4 h-4" },
  };

  const slogan = language === "ar" 
    ? "جوهر المال • روح التقنية" 
    : "The Core of Finance";

  const s = sizeClasses[size];

  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <div className={`${s.icon} rounded-xl bg-gradient-to-br from-[#0D9488] via-[#10B981] to-[#0D9488] flex items-center justify-center shadow-lg relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-white/30 rounded-full"></div>
            </div>
          </div>
          <span className={`${s.text} font-bold text-white relative z-10`}>F</span>
        </div>
        <div className={`absolute -bottom-1 -right-1 ${s.dot} rounded-full bg-[#0A1628] dark:bg-[#F59E0B] border-2 border-white dark:border-slate-900`}></div>
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <span className={`${s.text} font-bold text-[#0A1628] dark:text-white tracking-tight`}>
          Fin<span className="text-[#0D9488]">Core</span>
        </span>
        {showSlogan && (
          <p className={`${s.slogan} text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wide`}>
            {slogan}
          </p>
        )}
      </div>
    );
  }

  // Full variant (icon + text)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className={`${s.icon} rounded-xl bg-gradient-to-br from-[#0D9488] via-[#10B981] to-[#0D9488] flex items-center justify-center shadow-lg relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-white/30 rounded-full"></div>
            </div>
          </div>
          <span className={`${s.text} font-bold text-white relative z-10`}>F</span>
        </div>
        <div className={`absolute -bottom-1 -right-1 ${s.dot} rounded-full bg-[#0A1628] dark:bg-[#F59E0B] border-2 border-white dark:border-slate-900`}></div>
      </div>
      <div>
        <span className={`${s.text} font-bold text-[#0A1628] dark:text-white tracking-tight`}>
          Fin<span className="text-[#0D9488]">Core</span>
        </span>
        {showSlogan && (
          <p className={`${s.slogan} text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wide`}>
            {slogan}
          </p>
        )}
      </div>
    </div>
  );
};
