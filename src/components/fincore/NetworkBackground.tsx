import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useTheme } from "@/components/landing/ThemeContext";
import { useLanguage } from "@/components/landing/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface NetworkBackgroundProps {
  className?: string;
  lightMode?: boolean;
  withOverlay?: boolean;
  spotlightRadius?: number;
}

// العملات مع مواقعها الجغرافية الحقيقية (بالنسبة المئوية)
const geoCurrencies = [
  // أمريكا الشمالية (أعلى يسار)
  { symbol: "$", name: "USD", color: "#4ade80", flag: "🇺🇸", x: 15, y: 22 },
  { symbol: "C$", name: "CAD", color: "#ef4444", flag: "🇨🇦", x: 18, y: 15 },
  
  // أمريكا الجنوبية (أسفل يسار)
  { symbol: "R$", name: "BRL", color: "#22c55e", flag: "🇧🇷", x: 25, y: 70 },
  
  // غرب أوروبا (أعلى وسط)
  { symbol: "€", name: "EUR", color: "#1d4ed8", flag: "🇪🇺", x: 48, y: 18 },
  { symbol: "£", name: "GBP", color: "#8b5cf6", flag: "🇬🇧", x: 44, y: 14 },
  { symbol: "CHF", name: "CHF", color: "#dc2626", flag: "🇨🇭", x: 50, y: 22 },
  
  // شرق أوروبا (أعلى يمين وسط)
  { symbol: "zł", name: "PLN", color: "#f43f5e", flag: "🇵🇱", x: 54, y: 16 },
  { symbol: "₴", name: "UAH", color: "#fbbf24", flag: "🇺🇦", x: 60, y: 18 },
  { symbol: "lei", name: "RON", color: "#0ea5e9", flag: "🇷🇴", x: 56, y: 24 },
  { symbol: "₽", name: "RUB", color: "#14b8a6", flag: "🇷🇺", x: 68, y: 14 },
  
  // تركيا (وسط)
  { symbol: "₺", name: "TRY", color: "#ef4444", flag: "🇹🇷", x: 58, y: 32 },
  
  // الشام (وسط يمين)
  { symbol: "ل.س", name: "SYP", color: "#22c55e", flag: "🇸🇾", x: 62, y: 36 },
  { symbol: "د.أ", name: "JOD", color: "#84cc16", flag: "🇯🇴", x: 60, y: 40 },
  { symbol: "ل.ل", name: "LBP", color: "#06b6d4", flag: "🇱🇧", x: 61, y: 34 },
  
  // الخليج (وسط أسفل يمين)
  { symbol: "ر.س", name: "SAR", color: "#15803d", flag: "🇸🇦", x: 66, y: 48 },
  { symbol: "د.إ", name: "AED", color: "#eab308", flag: "🇦🇪", x: 72, y: 46 },
  { symbol: "د.ك", name: "KWD", color: "#06b6d4", flag: "🇰🇼", x: 68, y: 42 },
  { symbol: "ر.ع", name: "OMR", color: "#dc2626", flag: "🇴🇲", x: 75, y: 50 },
  { symbol: "ر.ق", name: "QAR", color: "#9333ea", flag: "🇶🇦", x: 70, y: 44 },
  { symbol: "د.ب", name: "BHD", color: "#ec4899", flag: "🇧🇭", x: 71, y: 43 },
  
  // مصر وشمال أفريقيا (أسفل وسط)
  { symbol: "ج.م", name: "EGP", color: "#3b82f6", flag: "🇪🇬", x: 56, y: 45 },
  { symbol: "د.ت", name: "TND", color: "#f97316", flag: "🇹🇳", x: 48, y: 38 },
  { symbol: "د.ج", name: "DZD", color: "#10b981", flag: "🇩🇿", x: 44, y: 40 },
  { symbol: "د.م", name: "MAD", color: "#f43f5e", flag: "🇲🇦", x: 40, y: 38 },
  
  // آسيا (يمين)
  { symbol: "¥", name: "CNY", color: "#f97316", flag: "🇨🇳", x: 82, y: 35 },
  { symbol: "₹", name: "INR", color: "#fb923c", flag: "🇮🇳", x: 76, y: 42 },
  { symbol: "₩", name: "KRW", color: "#3b82f6", flag: "🇰🇷", x: 88, y: 32 },
  { symbol: "¥", name: "JPY", color: "#f472b6", flag: "🇯🇵", x: 90, y: 35 },
  { symbol: "฿", name: "THB", color: "#14b8a6", flag: "🇹🇭", x: 80, y: 50 },
  
  // أفريقيا جنوب الصحراء
  { symbol: "R", name: "ZAR", color: "#22c55e", flag: "🇿🇦", x: 55, y: 75 },
  { symbol: "₦", name: "NGN", color: "#15803d", flag: "🇳🇬", x: 48, y: 55 },
];

interface DotPoint {
  x: number;
  y: number;
  id: number;
}

interface DynamicLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
}

interface ActiveCurrency {
  id: string;
  currency: typeof geoCurrencies[0];
  phase: "appearing" | "visible" | "disappearing";
}

function NetworkBackground({
  className = "",
  lightMode: propLightMode,
  withOverlay = false,
  spotlightRadius = 250,
}: NetworkBackgroundProps = {}) {
  const { theme } = useTheme();
  const { dir } = useLanguage();
  const isRTL = dir === "rtl";
  const lightMode = propLightMode !== undefined ? propLightMode : theme === "light";
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position for spotlight effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!withOverlay || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [withOverlay]);
  
  const [activeCurrencies, setActiveCurrencies] = useState<ActiveCurrency[]>([]);
  const [dynamicLines, setDynamicLines] = useState<DynamicLine[]>([]);
  const lineIdCounter = useRef(0);

  // ألوان حسب الوضع
  const primaryColor = lightMode ? "#0D9488" : "#14B8A6";
  const dotColor = lightMode ? "#0D9488" : "#2DD4BF";

  // توليد شبكة النقاط
  const dotGrid = useMemo(() => {
    const dots: DotPoint[] = [];
    const cols = 32;
    const rows = 18;
    const spacingX = 100 / cols;
    const spacingY = 100 / rows;
    
    let id = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // إزاحة طفيفة للصفوف الفردية
        const offsetX = (row % 2) * (spacingX / 2);
        const x = col * spacingX + offsetX + spacingX / 2;
        const y = row * spacingY + spacingY / 2;
        dots.push({ x, y, id: id++ });
      }
    }
    return dots;
  }, []);

  // إنشاء خطوط ديناميكية عشوائية
  const createDynamicLine = useCallback(() => {
    const startDot = dotGrid[Math.floor(Math.random() * dotGrid.length)];
    
    // إيجاد نقطة قريبة (ضمن مسافة معينة)
    const nearbyDots = dotGrid.filter(dot => {
      const dist = Math.sqrt(Math.pow(dot.x - startDot.x, 2) + Math.pow(dot.y - startDot.y, 2));
      return dist > 2 && dist < 12;
    });
    
    if (nearbyDots.length === 0) return;
    
    const endDot = nearbyDots[Math.floor(Math.random() * nearbyDots.length)];
    
    const newLine: DynamicLine = {
      id: `line-${lineIdCounter.current++}`,
      x1: startDot.x,
      y1: startDot.y,
      x2: endDot.x,
      y2: endDot.y,
      progress: 0,
    };
    
    setDynamicLines(prev => [...prev, newLine]);
    
    // حذف الخط بعد فترة
    setTimeout(() => {
      setDynamicLines(prev => prev.filter(l => l.id !== newLine.id));
    }, 2000);
  }, [dotGrid]);

  // إنشاء خطوط ديناميكية بشكل مستمر
  useEffect(() => {
    const interval = setInterval(() => {
      if (dynamicLines.length < 15) {
        createDynamicLine();
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, [createDynamicLine, dynamicLines.length]);

  // توليد عملة جديدة
  const spawnCurrency = useCallback(() => {
    // اختيار عملة عشوائية غير نشطة حالياً
    const activeSymbols = activeCurrencies.map(c => c.currency.symbol + c.currency.name);
    const availableCurrencies = geoCurrencies.filter(c => !activeSymbols.includes(c.symbol + c.name));
    
    if (availableCurrencies.length === 0) return;
    
    const randomCurrency = availableCurrencies[Math.floor(Math.random() * availableCurrencies.length)];
    
    const newCurrency: ActiveCurrency = {
      id: `${Date.now()}-${Math.random()}`,
      currency: randomCurrency,
      phase: "appearing",
    };
    
    setActiveCurrencies(prev => [...prev, newCurrency]);
    
    // تحويل إلى visible
    setTimeout(() => {
      setActiveCurrencies(prev =>
        prev.map(c => c.id === newCurrency.id ? { ...c, phase: "visible" } : c)
      );
    }, 400);
    
    // تحويل إلى disappearing
    setTimeout(() => {
      setActiveCurrencies(prev =>
        prev.map(c => c.id === newCurrency.id ? { ...c, phase: "disappearing" } : c)
      );
    }, 2500 + Math.random() * 2000);
    
    // إزالة العملة
    setTimeout(() => {
      setActiveCurrencies(prev => prev.filter(c => c.id !== newCurrency.id));
    }, 3500 + Math.random() * 2000);
  }, [activeCurrencies]);

  // توليد عملات بشكل مستمر
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeCurrencies.length < 10) {
        spawnCurrency();
      }
    }, 600);
    
    return () => clearInterval(interval);
  }, [spawnCurrency, activeCurrencies.length]);

  // توليد بعض العملات عند البداية
  useEffect(() => {
    const initialSpawn = setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => spawnCurrency(), i * 300);
      }
    }, 500);
    
    return () => clearTimeout(initialSpawn);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden select-none ${withOverlay ? "pointer-events-auto" : "pointer-events-none"} ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
      onMouseEnter={() => withOverlay && setIsHovered(true)}
      onMouseLeave={() => withOverlay && setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* خلفية gradient */}
      <div
        className={`absolute inset-0 ${
          lightMode
            ? "bg-gradient-to-br from-[#FAF8F5] via-[#F5F3EF] to-[#FDF9F3]"
            : "bg-gradient-to-br from-[#0A1628] via-[#0D1829] to-[#0A1628]"
        }`}
      />

      {/* طبقة الشفافية مع تأثير spotlight */}
      {withOverlay && (
        <div 
          className={`absolute inset-0 z-10 transition-all duration-300 ${
            lightMode 
              ? "bg-white/70" 
              : "bg-[#0A1628]/70"
          }`}
          style={{
            maskImage: isHovered 
              ? `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 30%, black 100%)`
              : 'none',
            WebkitMaskImage: isHovered 
              ? `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 30%, black 100%)`
              : 'none',
          }}
        />
      )}

      {/* شبكة النقاط */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${withOverlay ? "opacity-60" : "opacity-100"}`}>
        {dotGrid.map(dot => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${isRTL ? 100 - dot.x : dot.x}%`,
              top: `${dot.y}%`,
              transform: "translate(-50%, -50%)",
              backgroundColor: dotColor,
              opacity: lightMode ? 0.2 : 0.25,
            }}
          />
        ))}
      </div>

      {/* الخطوط الديناميكية */}
      <svg 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${withOverlay ? "opacity-50" : "opacity-100"}`}
        style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0" />
            <stop offset="50%" stopColor={primaryColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {dynamicLines.map(line => (
          <g key={line.id}>
            {/* الخط الرئيسي */}
            <line
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke={primaryColor}
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0;0.5;0.5;0"
                dur="2s"
                fill="freeze"
              />
            </line>
            
            {/* جزيء متحرك على الخط */}
            <circle r="3" fill={primaryColor} filter="url(#glow)">
              <animate
                attributeName="cx"
                values={`${line.x1}%;${line.x2}%`}
                dur="1.5s"
                fill="freeze"
              />
              <animate
                attributeName="cy"
                values={`${line.y1}%;${line.y2}%`}
                dur="1.5s"
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="1.5s"
                fill="freeze"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* العملات المتوهجة في مواقعها الجغرافية */}
      <div className={`transition-opacity duration-500 ${withOverlay ? "opacity-50" : "opacity-100"}`}>
      <AnimatePresence>
        {activeCurrencies.map(activeCurrency => {
          const currency = activeCurrency.currency;
          const xPos = isRTL ? 100 - currency.x : currency.x;
          
          return (
            <motion.div
              key={activeCurrency.id}
              className="absolute flex flex-col items-center justify-center z-10"
              style={{
                left: `${xPos}%`,
                top: `${currency.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: activeCurrency.phase === "disappearing" ? 0 : 1,
                scale: activeCurrency.phase === "appearing" ? 1.3 : activeCurrency.phase === "visible" ? 1 : 0.3,
              }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* توهج الخلفية الكبير */}
              <motion.div
                className="absolute w-24 h-24 rounded-full blur-2xl"
                style={{
                  backgroundColor: currency.color,
                  opacity: 0.25,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* دائرة العملة */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
                style={{
                  backgroundColor: lightMode ? "rgba(255,255,255,0.95)" : "rgba(10,22,40,0.95)",
                  borderColor: currency.color,
                  boxShadow: `0 0 25px ${currency.color}90, 0 0 50px ${currency.color}50, inset 0 0 20px ${currency.color}20`,
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: currency.color }}
                >
                  {currency.symbol}
                </span>
              </div>
              
              {/* علم الدولة */}
              <div
                className="absolute -top-1 -right-1 text-base z-20"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
              >
                {currency.flag}
              </div>
              
              {/* اسم العملة */}
              <motion.div
                className="absolute -bottom-6 text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: lightMode ? "rgba(255,255,255,0.9)" : "rgba(10,22,40,0.9)",
                  color: currency.color,
                  border: `1px solid ${currency.color}40`,
                }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {currency.name}
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      </div>

      {/* تأثيرات الخلفية المتحركة */}
      <motion.div
        className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
          lightMode ? "bg-teal-400/5" : "bg-teal-500/10"
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
          lightMode ? "bg-cyan-400/5" : "bg-teal-600/5"
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* تأثير إضافي للعمق */}
      <motion.div
        className={`absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          lightMode ? "bg-emerald-300/3" : "bg-emerald-500/5"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export { NetworkBackground };
export default NetworkBackground;
