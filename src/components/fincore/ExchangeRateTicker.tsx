import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ExchangeRate {
  pair: string;
  rate: number;
  change: number;
  flag1?: string;
  flag2?: string;
}

const mockRates: ExchangeRate[] = [
  { pair: "USD/EUR", rate: 0.9245, change: 0.12, flag1: "🇺🇸", flag2: "🇪🇺" },
  { pair: "USD/GBP", rate: 0.7892, change: -0.08, flag1: "🇺🇸", flag2: "🇬🇧" },
  { pair: "EUR/GBP", rate: 0.8538, change: 0.05, flag1: "🇪🇺", flag2: "🇬🇧" },
  { pair: "USD/TRY", rate: 32.45, change: 0.34, flag1: "🇺🇸", flag2: "🇹🇷" },
  { pair: "USD/SAR", rate: 3.7502, change: 0.00, flag1: "🇺🇸", flag2: "🇸🇦" },
  { pair: "EUR/SAR", rate: 4.0825, change: 0.15, flag1: "🇪🇺", flag2: "🇸🇦" },
  { pair: "USD/AED", rate: 3.6725, change: -0.02, flag1: "🇺🇸", flag2: "🇦🇪" },
  { pair: "Gold/oz", rate: 2340.50, change: 12.30, flag1: "🥇", flag2: "" },
  { pair: "Silver/oz", rate: 27.85, change: -0.45, flag1: "🥈", flag2: "" },
];

const translations = {
  en: {
    liveRates: "Live Rates",
    lastUpdate: "Last update",
  },
  ar: {
    liveRates: "أسعار مباشرة",
    lastUpdate: "آخر تحديث",
  },
  tr: {
    liveRates: "Canlı Kurlar",
    lastUpdate: "Son güncelleme",
  },
};

export const ExchangeRateTicker: React.FC = () => {
  const { language, dir } = useLanguage();
  const [rates, setRates] = useState<ExchangeRate[]>(mockRates);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const t = translations[language as keyof typeof translations] || translations.en;

  // Simulate rate updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates => 
        prevRates.map(rate => ({
          ...rate,
          rate: rate.rate * (1 + (Math.random() - 0.5) * 0.001),
          change: (Math.random() - 0.5) * 0.5,
        }))
      );
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === "ar" ? "ar-SA" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[#0A1628] dark:bg-slate-950 text-white py-2 overflow-hidden border-b border-slate-800" dir="ltr">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 px-4 py-1 bg-[#0D9488] text-white text-xs font-bold flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          {t.liveRates}
        </div>

        {/* Scrolling Ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {[...rates, ...rates].map((rate, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4">
                <span className="text-sm">
                  {rate.flag1}
                  {rate.flag2 && <span className="opacity-50">/</span>}
                  {rate.flag2}
                </span>
                <span className="font-medium text-slate-300">{rate.pair}</span>
                <span className="font-bold text-white">
                  {rate.rate < 100 ? rate.rate.toFixed(4) : rate.rate.toFixed(2)}
                </span>
                <span className={`flex items-center text-xs ${
                  rate.change > 0 
                    ? "text-emerald-400" 
                    : rate.change < 0 
                    ? "text-red-400" 
                    : "text-slate-400"
                }`}>
                  {rate.change > 0 ? (
                    <TrendingUp className="w-3 h-3 me-0.5" />
                  ) : rate.change < 0 ? (
                    <TrendingDown className="w-3 h-3 me-0.5" />
                  ) : (
                    <Minus className="w-3 h-3 me-0.5" />
                  )}
                  {rate.change > 0 ? "+" : ""}{rate.change.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time */}
        <div className="flex-shrink-0 px-4 text-xs text-slate-400 hidden sm:block">
          {t.lastUpdate}: {formatTime(lastUpdate)}
        </div>
      </div>
    </div>
  );
};
