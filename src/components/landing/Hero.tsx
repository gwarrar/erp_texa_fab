import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { getText, landingPageTranslations as t } from "@/lib/translations/pages";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  BarChart3, 
  ShoppingCart, 
  Package, 
  Users,
  TrendingUp,
  Sparkles,
  Calculator,
  Warehouse,
  Receipt,
  Ruler,
  Palette,
  Scissors
} from "lucide-react";
import { TrialSignupModal } from "./TrialSignupModal";

export function Hero() {
  const { dir, language } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const stats = [
    { value: "500+", label: getText(t.statCompanies, language) },
    { value: "10M+", label: getText(t.statRolls, language) },
    { value: "50+", label: getText(t.statCountries, language) },
    { value: "#1", label: getText(t.statIndustry, language) },
  ];

  const features = [
    { icon: Ruler, label: getText(t.featureMeters, language) },
    { icon: Package, label: getText(t.featureRolls, language) },
    { icon: Palette, label: getText(t.featureColors, language) },
    { icon: Scissors, label: getText(t.featureCutting, language) },
    { icon: Warehouse, label: getText(t.featureWarehouses, language) },
    { icon: Calculator, label: getText(t.featureAccounting, language) },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-teal-500/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/8 via-transparent to-transparent rounded-full blur-3xl" />
        {/* Floating Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-texafab-emerald/5 rounded-2xl rotate-12 animate-pulse" />
        <div className="absolute bottom-1/3 left-[15%] w-16 h-16 bg-texafab-gold/5 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className={`space-y-8 min-h-[400px] ${dir === "rtl" ? "lg:order-1" : ""}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-texafab-emerald/10 to-texafab-gold/10 border border-texafab-emerald/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-texafab-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-texafab-emerald"></span>
              </span>
              <span className="text-texafab-emerald font-semibold text-sm">
                {getText(t.badge, language)}
              </span>
              <Sparkles className="w-4 h-4 text-texafab-gold" />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4 min-h-[180px]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-texafab-slate dark:text-white leading-[1.1] tracking-tight">
                {getText(t.heroTitle, language).split(" ").length > 4 ? (
                  <>
                    <span className="block">{getText(t.heroTitle, language).split(" ").slice(0, Math.ceil(getText(t.heroTitle, language).split(" ").length / 2)).join(" ")}</span>
                    <span className="block text-texafab-emerald">{getText(t.heroTitle, language).split(" ").slice(Math.ceil(getText(t.heroTitle, language).split(" ").length / 2)).join(" ")}</span>
                  </>
                ) : (
                  <span className="text-texafab-emerald">{getText(t.heroTitle, language)}</span>
                )}
              </h1>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-texafab-emerald to-texafab-gold rounded-full" />
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              {getText(t.heroSubtitle, language)}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 transition-all cursor-pointer"
                >
                  <feature.icon className="w-3.5 h-3.5 text-texafab-emerald" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={() => setIsTrialModalOpen(true)}
                className="group h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold shadow-lg shadow-texafab-emerald/25 hover:shadow-xl hover:shadow-texafab-emerald/30 transition-all duration-300 rounded-xl"
              >
                {getText(t.ctaDemo, language)}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Link to="/features">
                <Button variant="outline" className="group h-14 px-8 border-2 border-gray-200 dark:border-gray-700 text-texafab-slate dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 text-base font-semibold transition-all duration-300 rounded-xl">
                  <Play className="w-5 h-5 me-2 fill-texafab-gold text-texafab-gold" />
                  {getText(t.ctaTrial, language)}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-texafab-emerald" />
                <span>{getText(t.noCreditCard, language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-texafab-emerald" />
                <span>{getText(t.quickSetup, language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-texafab-emerald" />
                <span>{getText(t.arabicSupport, language)}</span>
              </div>
            </div>
          </div>

          {/* Visual Side - Dashboard Preview */}
          <div className={`relative ${dir === "rtl" ? "lg:order-2" : ""}`}>
            <div className="relative">
              {/* Main Dashboard Frame */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 flex items-center px-3">
                      <span className="text-xs text-gray-400">texacore.app</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4">
                    {[
                      { label: getText(t.revenue, language), value: "$124,500", change: "+12.5%", color: "text-green-600", bg: "bg-green-50" },
                      { label: getText(t.expenses, language), value: "$45,200", change: "-2.4%", color: "text-red-500", bg: "bg-red-50" },
                      { label: getText(t.profit, language), value: "$79,300", change: "+8.2%", color: "text-green-600", bg: "bg-green-50" },
                      { label: getText(t.cash, language), value: "$32,000", change: "+5.1%", color: "text-green-600", bg: "bg-green-50" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">{stat.label}</div>
                        <div className="text-sm sm:text-base font-bold text-texafab-slate dark:text-white">{stat.value}</div>
                        <div className={`text-[10px] font-semibold ${stat.color} ${stat.bg} px-1.5 py-0.5 rounded-full inline-block mt-1`}>{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{getText(t.cashFlow, language)}</span>
                        <BarChart3 className="w-4 h-4 text-texafab-emerald dark:text-texafab-teal" />
                      </div>
                      <div className="flex items-end gap-1 h-20">
                        {[45, 62, 78, 55, 90, 72, 85].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-texafab-emerald to-teal-400" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{getText(t.orders, language)}</span>
                        <ShoppingCart className="w-4 h-4 text-texafab-gold" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-texafab-slate dark:text-white">2,847</div>
                      <div className="flex items-center gap-1 text-green-600 text-xs mt-1 font-medium">
                        <TrendingUp className="w-3 h-3" />
                        <span>+23% {getText(t.thisMonth, language)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Table */}
                  <div className="mt-3 bg-white dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2">{getText(t.recentOrders, language)}</div>
                    <div className="space-y-2">
                      {[
                        { id: "PO-2024-0125", status: getText(t.orderPending, language), amount: "SAR 15,800", statusColor: "bg-yellow-100 text-yellow-700" },
                        { id: "PO-2024-0124", status: getText(t.orderApproved, language), amount: "SAR 28,500", statusColor: "bg-green-100 text-green-700" },
                        { id: "PO-2024-0123", status: getText(t.orderCompleted, language), amount: "SAR 42,300", statusColor: "bg-blue-100 text-blue-700" },
                      ].map((order, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-gray-50 dark:border-gray-600 last:border-0">
                          <span className="font-medium text-gray-700 dark:text-gray-200">{order.id}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${order.statusColor}`}>{order.status}</span>
                          <span className="font-semibold text-texafab-slate dark:text-white">{order.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 - Top Right */}
              <div className="absolute -top-4 -right-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 w-40 animate-float hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-texafab-emerald to-teal-500 flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">{getText(t.inventory, language)}</div>
                    <div className="text-sm font-bold text-texafab-slate dark:text-white">1,450</div>
                  </div>
                </div>
                <div className="text-[10px] text-green-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  {getText(t.healthy, language)}
                </div>
              </div>

              {/* Floating Card 2 - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 w-44 animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-texafab-gold to-orange-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">{getText(t.salesGrowth, language)}</div>
                    <div className="text-sm font-bold text-texafab-slate dark:text-white">+18.5%</div>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-texafab-gold to-orange-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-texafab-emerald dark:text-texafab-teal">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 0.5s;
        }
      `}</style>

      {/* Trial Signup Modal */}
      <TrialSignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </section>
  );
}
