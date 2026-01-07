import React, { useMemo } from "react";
import { useTheme } from "@/components/landing/ThemeContext";
import { motion } from "framer-motion";

interface City {
  id: string;
  name: string;
  nameAr: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  size: "small" | "medium" | "large";
  flag?: string;
}

interface WorldMapBackgroundProps {
  className?: string;
  lightMode?: boolean;
  interactive?: boolean;
  showCurrencies?: boolean;
  numTransfers?: number;
}

// 1. Accurate City Positions for a standard 1000x500 Mercator Map
const cities: City[] = [
  // Americas
  { id: "newyork", name: "New York", nameAr: "نيويورك", x: 29.5, y: 32, size: "large", flag: "🇺🇸" },
  { id: "losangeles", name: "Los Angeles", nameAr: "لوس أنجلوس", x: 16.5, y: 36, size: "medium", flag: "🇺🇸" },
  { id: "saopaulo", name: "Sao Paulo", nameAr: "ساو باولو", x: 32, y: 72, size: "medium", flag: "🇧🇷" },
  
  // Europe
  { id: "london", name: "London", nameAr: "لندن", x: 49.5, y: 23.5, size: "large", flag: "🇬🇧" },
  { id: "berlin", name: "Berlin", nameAr: "برلين", x: 52.5, y: 22.5, size: "medium", flag: "🇩🇪" },
  { id: "istanbul", name: "Istanbul", nameAr: "إسطنبول", x: 56.5, y: 30, size: "large", flag: "🇹🇷" },
  { id: "moscow", name: "Moscow", nameAr: "موسكو", x: 62, y: 18, size: "medium", flag: "🇷🇺" },

  // Middle East & Africa
  { id: "dubai", name: "Dubai", nameAr: "دبي", x: 63.5, y: 41, size: "large", flag: "🇦🇪" },
  { id: "riyadh", name: "Riyadh", nameAr: "الرياض", x: 61, y: 42, size: "medium", flag: "🇸🇦" },
  { id: "cairo", name: "Cairo", nameAr: "القاهرة", x: 57, y: 38, size: "medium", flag: "🇪🇬" },
  { id: "capetown", name: "Cape Town", nameAr: "كيب تاون", x: 55, y: 82, size: "medium", flag: "🇿🇦" },

  // Asia & Pacific
  { id: "mumbai", name: "Mumbai", nameAr: "مومباي", x: 70, y: 46, size: "medium", flag: "🇮🇳" },
  { id: "singapore", name: "Singapore", nameAr: "سنغافورة", x: 80, y: 56, size: "medium", flag: "🇸🇬" },
  { id: "beijing", name: "Beijing", nameAr: "بكين", x: 83, y: 30, size: "large", flag: "🇨🇳" },
  { id: "tokyo", name: "Tokyo", nameAr: "طوكيو", x: 91, y: 32, size: "large", flag: "🇯🇵" },
  { id: "sydney", name: "Sydney", nameAr: "سيدني", x: 93, y: 78, size: "medium", flag: "🇦🇺" },
];

function WorldMapBackground({
  className = "",
  lightMode: propLightMode,
  interactive = true,
  showCurrencies = true,
  numTransfers,
}: WorldMapBackgroundProps = {}) {
  const { theme } = useTheme();
  // Use prop if provided, otherwise derive from theme
  const lightMode = propLightMode !== undefined ? propLightMode : theme === "light";
  
  // Colors
  const primaryColor = lightMode ? "#0D9488" : "#14B8A6"; // Teal
  const gridColor = lightMode ? "#0D9488" : "#2DD4BF";

  // 2. Generate Mesh Connections (Triangles & Lines) dynamically
  const { connections, triangles } = useMemo(() => {
    const lines = [];
    const tris = [];
    const maxDist = 25; // Max distance to connect two cities (percentage)

    // Find connections
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        const c1 = cities[i];
        const c2 = cities[j];
        const dist = Math.sqrt(Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2));
        
        if (dist < maxDist) {
          lines.push({ from: c1, to: c2, dist });
          
          // Try to find a third city to form a triangle
          for (let k = j + 1; k < cities.length; k++) {
            const c3 = cities[k];
            const dist13 = Math.sqrt(Math.pow(c1.x - c3.x, 2) + Math.pow(c1.y - c3.y, 2));
            const dist23 = Math.sqrt(Math.pow(c2.x - c3.x, 2) + Math.pow(c2.y - c3.y, 2));
            
            if (dist13 < maxDist && dist23 < maxDist) {
              tris.push([c1, c2, c3]);
            }
          }
        }
      }
    }
    return { connections: lines, triangles: tris };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background gradient */}
      <div 
        className={`absolute inset-0 ${
          lightMode 
            ? "bg-gradient-to-br from-[#FAF8F5] via-[#F5F3EF] to-[#FDF9F3]" 
            : "bg-gradient-to-br from-[#0A1628] via-[#0D1829] to-[#0A1628]"
        }`} 
      />

      <svg
        className={`absolute inset-0 w-full h-full ${
          lightMode ? "opacity-[0.15]" : "opacity-[0.2]"
        }`}
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- 1. World Map Continents (Accurate Simplified Paths) --- */}
        <g fill={primaryColor} fillOpacity="0.05" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.2">
           {/* North America */}
           <path d="M50,40 L120,45 L180,50 L250,35 L280,30 L300,35 L280,90 L250,110 L220,130 L200,160 L180,180 L150,175 L120,160 L90,140 L70,120 L60,100 L50,80 Z" />
           {/* South America */}
           <path d="M220,240 L280,260 L320,300 L300,420 L280,480 L260,490 L240,460 L220,380 L210,320 L200,280 Z" />
           {/* Europe */}
           <path d="M420,120 L480,110 L520,100 L550,130 L540,160 L510,170 L480,165 L460,180 L440,170 L430,150 Z" />
           {/* Africa */}
           <path d="M420,190 L480,185 L540,200 L580,250 L600,300 L580,380 L520,440 L480,420 L450,350 L420,280 L400,220 Z" />
           {/* Asia */}
           <path d="M560,90 L650,80 L750,90 L850,100 L900,120 L920,180 L880,250 L820,280 L750,260 L680,240 L620,200 L580,150 Z" />
           {/* Australia */}
           <path d="M800,350 L880,340 L940,360 L920,420 L860,440 L820,400 Z" />
        </g>

        {/* --- 2. Triangular Mesh (The "Network") --- */}
        <g>
          {triangles.map((tri, i) => (
            <polygon
              key={`tri-${i}`}
              points={`${tri[0].x * 10},${tri[0].y * 5} ${tri[1].x * 10},${tri[1].y * 5} ${tri[2].x * 10},${tri[2].y * 5}`}
              fill={gridColor}
              fillOpacity="0.03"
              stroke="none"
            />
          ))}
        </g>

        {/* --- 3. Connection Lines --- */}
        <g stroke={gridColor} strokeWidth="0.8" strokeOpacity="0.2">
          {connections.map((line, i) => (
            <line
              key={`line-${i}`}
              x1={line.from.x * 10}
              y1={line.from.y * 5}
              x2={line.to.x * 10}
              y2={line.to.y * 5}
              strokeDasharray="4 4"
            />
          ))}
        </g>

        {/* --- 4. Animated Particles (Shipments) --- */}
        {connections.map((line, i) => (
            <circle key={`particle-${i}`} r="2" fill={primaryColor} filter="url(#glow)">
              <animateMotion
                dur={`${3 + (i % 5)}s`}
                repeatCount="indefinite"
                path={`M${line.from.x * 10},${line.from.y * 5} L${line.to.x * 10},${line.to.y * 5}`}
              />
            </circle>
        ))}

        {/* --- 5. City Nodes --- */}
        {cities.map((city) => (
          <g key={city.id} transform={`translate(${city.x * 10}, ${city.y * 5})`}>
            {/* Pulse Effect */}
            <circle r={city.size === 'large' ? 12 : 8} fill={primaryColor} opacity="0.1">
              <animate attributeName="r" values={city.size === 'large' ? "12;16;12" : "8;12;8"} dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.1;0;0.1" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Core */}
            <circle r={city.size === 'large' ? 4 : 2.5} fill={lightMode ? "#fff" : "#0A1628"} stroke={primaryColor} strokeWidth="1.5" />
          </g>
        ))}

      </svg>
      
      {/* Animated background blobs */}
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
    </div>
  );
}

export { WorldMapBackground };
export default WorldMapBackground;
