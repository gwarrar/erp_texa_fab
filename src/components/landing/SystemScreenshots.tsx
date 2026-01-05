import React from "react";
import { useLanguage } from "./LanguageContext";

interface ScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  variant?: "laptop" | "tablet" | "browser" | "simple";
}

// System Screenshots from ERPMAX - High quality dashboard images
export const SystemScreenshots = {
  // Sales Dashboard - Main overview with KPIs
  salesDashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=95",
  salesPerformance: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=95",
  
  // Accounting - Financial dashboards
  accountingDashboard: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=95",
  ledger: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=95",
  cashBox: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&q=95",
  
  // Warehouse - Inventory management
  warehouseDashboard: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=95",
  inventoryTracking: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=95",
  materialReceipt: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=95",
  
  // CRM - Customer management
  crmPipeline: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=95",
  customerManagement: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=95",
  
  // Fabric Management
  fabricOverview: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=95",
  rollTracking: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=95",
  
  // Container Tracking
  containerTracking: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=95",
  containerReceipt: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=95",
  
  // HR - Employee management
  hrDashboard: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=95",
  employeePerformance: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=95",
  
  // Reports & Analytics
  analyticsReports: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=95",
  collectionAnalysis: "https://images.unsplash.com/photo-1543286386-713bdc3e4a0b?w=1200&q=95",
  productReport: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=95",
  
  // Banks & Cash
  banksAndCash: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&q=95",
  
  // Login Screen
  loginScreen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=95"
};

// Laptop Mockup Component
export function LaptopMockup({ src, alt, className = "" }: ScreenshotProps) {
  const { language } = useLanguage();
  
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Frame */}
      <div className="relative mx-auto">
        {/* Screen */}
        <div className="relative bg-gray-800 rounded-t-xl border-[14px] border-gray-800 dark:border-gray-700">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 dark:bg-gray-700 rounded-b-lg z-10" />
          {/* Screen Content */}
          <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-900">
            <img 
              src={src} 
              alt={alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {/* Screen Glare */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Keyboard Base */}
        <div className="relative h-4 bg-gray-300 dark:bg-gray-600 rounded-b-lg mx-2">
          <div className="absolute inset-x-0 top-0 h-1 bg-gray-400 dark:bg-gray-500 rounded-t-sm" />
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-gray-500 dark:bg-gray-400 rounded-b" />
        </div>
        {/* Base Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-gray-900/10 dark:bg-black/20 blur-xl rounded-full" />
      </div>
    </div>
  );
}

// Browser Window Mockup
export function BrowserMockup({ src, alt, className = "" }: ScreenshotProps) {
  const { language } = useLanguage();
  
  return (
    <div className={`relative ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-7 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 flex items-center px-3">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {language === "ar" ? "erpmax.app/dashboard" : "erpmax.app/dashboard"}
              </span>
            </div>
          </div>
        </div>
        
        {/* Browser Content */}
        <div className="relative overflow-hidden">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Overlay Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// Tablet Mockup Component
export function TabletMockup({ src, alt, className = "" }: ScreenshotProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Tablet Frame */}
      <div className="relative bg-gray-800 dark:bg-gray-700 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Camera */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full" />
        
        {/* Screen */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Home Button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-700 dark:bg-gray-600 rounded-full border-2 border-gray-600 dark:border-gray-500" />
      </div>
    </div>
  );
}

// Simple Screenshot with Shadow and Border
export function SimpleScreenshot({ src, alt, className = "" }: ScreenshotProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-texafab-emerald rounded-tl-xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-texafab-gold rounded-br-xl opacity-60" />
      </div>
    </div>
  );
}

// Floating Cards Dashboard Preview
export function DashboardPreview({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Dashboard Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-texafab-emerald to-teal-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold">E</span>
            </div>
            <div>
              <h3 className="font-bold">ERPMAX</h3>
              <p className="text-xs text-white/80">{language === "ar" ? "لوحة التحكم" : "Dashboard"}</p>
            </div>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="p-6 grid grid-cols-4 gap-4">
          {[
            { label: language === "ar" ? "الإيرادات" : "Revenue", value: "3.36M", change: "+12%", color: "emerald" },
            { label: language === "ar" ? "المصاريف" : "Expenses", value: "1.24M", change: "-5%", color: "orange" },
            { label: language === "ar" ? "الربح" : "Profit", value: "2.12M", change: "+18%", color: "blue" },
            { label: language === "ar" ? "الطلبات" : "Orders", value: "924", change: "+8%", color: "purple" },
          ].map((kpi, i) => (
            <div key={i} className={`p-4 rounded-xl bg-${kpi.color}-50 dark:bg-${kpi.color}-900/20 border border-${kpi.color}-100 dark:border-${kpi.color}-800`}>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
              <p className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                {kpi.change}
              </p>
            </div>
          ))}
        </div>
        
        {/* Chart Area */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {language === "ar" ? "اتجاه المبيعات" : "Sales Trend"}
              </span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[45, 62, 78, 55, 90, 72, 85, 68, 92, 75, 88, 95].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 rounded-t bg-gradient-to-t from-texafab-emerald to-teal-400" 
                  style={{ height: `${h}%` }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Cards */}
      <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-100 dark:border-gray-700 animate-float">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
            <span className="text-emerald-500">📈</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">{language === "ar" ? "نمو" : "Growth"}</p>
            <p className="font-bold text-emerald-500">+24%</p>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-100 dark:border-gray-700 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <span className="text-blue-500">📦</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">{language === "ar" ? "المخزون" : "Stock"}</p>
            <p className="font-bold text-blue-500">10,847</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Screenshot Gallery Component
interface GalleryProps {
  screenshots: { src: string; alt: string; title: string }[];
  columns?: 2 | 3;
}

export function ScreenshotGallery({ screenshots, columns = 2 }: GalleryProps) {
  return (
    <div className={`grid gap-6 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {screenshots.map((screenshot, index) => (
        <div key={index} className="group relative">
          <BrowserMockup 
            src={screenshot.src} 
            alt={screenshot.alt} 
            className="transform group-hover:scale-[1.02] transition-transform duration-300"
          />
          <p className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
            {screenshot.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default { 
  LaptopMockup, 
  BrowserMockup, 
  TabletMockup, 
  SimpleScreenshot, 
  DashboardPreview,
  ScreenshotGallery,
  SystemScreenshots 
};
