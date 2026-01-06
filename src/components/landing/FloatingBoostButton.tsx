import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { TrendingUp, Sparkles, X } from "lucide-react";

export function FloatingBoostButton() {
  const { dir, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    // Show immediately
    setIsVisible(true);
    setIsExpanded(true);
  }, []);
  
  if (isDismissed) return null;
  
  return (
    <div 
      className={`fixed bottom-6 z-50 transition-all duration-500 ${
        dir === "rtl" ? "left-6" : "right-6"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="relative group">
        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 dark:bg-gray-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-gray-700 dark:hover:bg-gray-500"
        >
          <X className="w-3 h-3" />
        </button>
        
        {/* Main button */}
        <Link
          to="/comparison"
          onMouseEnter={() => setIsExpanded(true)}
          className={`flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white rounded-full shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 ${
            isExpanded ? "px-5 py-3" : "p-4"
          }`}
        >
          <div className="relative">
            <TrendingUp className="w-6 h-6" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
          
          <div className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          }`}>
            <div className="whitespace-nowrap">
              <p className="font-bold text-sm">
                {t("floating.boostSales")}
              </p>
              <p className="text-xs text-emerald-100">
                {t("floating.seeTheDifference")}
              </p>
            </div>
          </div>
        </Link>
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
      </div>
    </div>
  );
}
