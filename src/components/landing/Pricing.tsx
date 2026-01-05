import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Zap, Crown, Building, Rocket, ShoppingCart, Shield, Server, Clock, Gift, Users, Globe, Cpu, TrendingUp, Heart, DollarSign, Target, Building2, Briefcase, User, Smartphone, Warehouse, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrialSignupModal } from "./TrialSignupModal";

// Currency configuration
const currencyConfig: Record<string, { symbol: string; code: string; rate: number; nameAr: string; nameEn: string }> = {
  USD: { symbol: "$", code: "USD", rate: 1, nameAr: "دولار أمريكي", nameEn: "US Dollar" },
  SAR: { symbol: "ر.س", code: "SAR", rate: 3.75, nameAr: "ريال سعودي", nameEn: "Saudi Riyal" },
  AED: { symbol: "د.إ", code: "AED", rate: 3.67, nameAr: "درهم إماراتي", nameEn: "UAE Dirham" },
  EUR: { symbol: "€", code: "EUR", rate: 0.92, nameAr: "يورو", nameEn: "Euro" },
  GBP: { symbol: "£", code: "GBP", rate: 0.79, nameAr: "جنيه إسترليني", nameEn: "British Pound" },
  UAH: { symbol: "₴", code: "UAH", rate: 41, nameAr: "هريفنيا أوكرانية", nameEn: "Ukrainian Hryvnia" },
  RUB: { symbol: "₽", code: "RUB", rate: 92, nameAr: "روبل روسي", nameEn: "Russian Ruble" },
  PLN: { symbol: "zł", code: "PLN", rate: 4, nameAr: "زلوتي بولندي", nameEn: "Polish Zloty" },
  TRY: { symbol: "₺", code: "TRY", rate: 32, nameAr: "ليرة تركية", nameEn: "Turkish Lira" },
  EGP: { symbol: "ج.م", code: "EGP", rate: 50, nameAr: "جنيه مصري", nameEn: "Egyptian Pound" },
  KWD: { symbol: "د.ك", code: "KWD", rate: 0.31, nameAr: "دينار كويتي", nameEn: "Kuwaiti Dinar" },
  QAR: { symbol: "ر.ق", code: "QAR", rate: 3.64, nameAr: "ريال قطري", nameEn: "Qatari Riyal" },
  BHD: { symbol: "د.ب", code: "BHD", rate: 0.38, nameAr: "دينار بحريني", nameEn: "Bahraini Dinar" },
  OMR: { symbol: "ر.ع", code: "OMR", rate: 0.39, nameAr: "ريال عماني", nameEn: "Omani Rial" },
};

export function Pricing() {
  const { t, language } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Currency based on selected currency (default USD)
  const currencyInfo = currencyConfig[selectedCurrency] || currencyConfig.USD;
  const currency = currencyInfo.symbol;

  // Convert USD price to local currency
  const convertPrice = (usdPrice: number) => {
    return Math.round(usdPrice * currencyInfo.rate);
  };

  // Base prices in USD
  const basePrices = {
    basic: 99,
    professional: 499,
    enterprise: 999,
  };

  // Feature categories for organized display
  const featureCategories = {
    ar: {
      business: "📦 إدارة الأعمال",
      digital: "🌐 التواجد الرقمي",
      ai: "🤖 الذكاء الاصطناعي",
      mobile: "📱 تطبيقات الموبايل",
      returns: "💰 العائد المتوقع",
      target: "🎯 مناسب لـ"
    },
    en: {
      business: "📦 Business Management",
      digital: "🌐 Digital Presence",
      ai: "🤖 Artificial Intelligence",
      mobile: "📱 Mobile Apps",
      returns: "💰 Expected Returns",
      target: "🎯 Ideal For"
    }
  };

  const plans = [
    {
      nameAr: "الأساسية",
      nameEn: "Basic",
      priceUSD: basePrices.basic,
      descAr: "للشركات الخاصة والناشئة",
      descEn: "For private & startup companies",
      targetAr: "الشركة الخاصة الواحدة",
      targetEn: "Single Private Company",
      targetIcon: User,
      // Business Management Features
      businessFeaturesAr: [
        "إدارة شركة واحدة",
        "3 مستخدمين",
        "نقطتي بيع",
        "شؤون الموظفين الأساسية"
      ],
      businessFeaturesEn: [
        "Manage 1 Company",
        "3 Users",
        "2 POS Terminals",
        "Basic HR Module"
      ],
      // Digital Presence Features
      digitalFeaturesAr: [
        "استضافة Hetzner مشتركة",
        "المتجر الإلكتروني (100 منتج)",
        "شهادة SSL مجانية"
      ],
      digitalFeaturesEn: [
        "Shared Hetzner Hosting",
        "E-commerce (100 products)",
        "Free SSL Certificate"
      ],
      // AI Features
      aiFeaturesAr: [],
      aiFeaturesEn: [],
      // Mobile Apps Features
      mobileFeaturesAr: [],
      mobileFeaturesEn: [],
      // Expected Returns
      returnsAr: {
        salesIncrease: "$2,000 - $4,000",
        customerRetention: "$1,500 - $4,000",
        totalReturn: "$8,000 - $15,000",
        netProfit: "+$6,800 - $13,800",
        roi: "573% - 1,162%"
      },
      returnsEn: {
        salesIncrease: "$2,000 - $4,000",
        customerRetention: "$1,500 - $4,000",
        totalReturn: "$8,000 - $15,000",
        netProfit: "+$6,800 - $13,800",
        roi: "573% - 1,162%"
      },
      ctaAr: "ابدأ تجربة مجانية",
      ctaEn: "Start Free Trial",
      popular: false,
      hasEcommerce: true,
      icon: Rocket,
      gradient: "from-blue-50 to-white",
      iconBg: "from-blue-500 to-blue-600",
    },
    {
      nameAr: "الاحترافية",
      nameEn: "Professional",
      priceUSD: basePrices.professional,
      descAr: "لمدير الأعمال الواعد والطموح",
      descEn: "For the ambitious business leader",
      targetAr: "رائد الأعمال الطموح",
      targetEn: "Ambitious Entrepreneur",
      targetIcon: Briefcase,
      // Business Management Features
      businessFeaturesAr: [
        "إدارة شركتين",
        "10 مستخدمين",
        "نقاط بيع غير محدودة",
        "شؤون الموظفين المتقدمة",
        "إدارة الوكلاء والموزعين"
      ],
      businessFeaturesEn: [
        "Manage 2 Companies",
        "10 Users",
        "Unlimited POS Terminals",
        "Advanced HR Module",
        "Agents & Dealers Management"
      ],
      // Digital Presence Features
      digitalFeaturesAr: [
        "استضافة Hetzner مخصصة",
        "موقع إلكتروني مجاني لمدة سنة 🎁",
        "المتجر الإلكتروني (غير محدود)",
        "شهادة SSL + دومين مخصص"
      ],
      digitalFeaturesEn: [
        "Dedicated Hetzner Hosting",
        "Free Website for 1 Year 🎁",
        "E-commerce (Unlimited)",
        "SSL + Custom Domain"
      ],
      // AI Features
      aiFeaturesAr: [
        "تقارير ذكية أسبوعية"
      ],
      aiFeaturesEn: [
        "Weekly Smart Reports"
      ],
      // Mobile Apps Features
      mobileFeaturesAr: [],
      mobileFeaturesEn: [],
      // Expected Returns
      returnsAr: {
        salesIncrease: "$12,000 - $20,000",
        customerRetention: "$8,000 - $15,000",
        totalReturn: "$45,000 - $75,000",
        netProfit: "+$39,000 - $69,000",
        roi: "652% - 1,152%",
        competitiveEdge: "25-35%"
      },
      returnsEn: {
        salesIncrease: "$12,000 - $20,000",
        customerRetention: "$8,000 - $15,000",
        totalReturn: "$45,000 - $75,000",
        netProfit: "+$39,000 - $69,000",
        roi: "652% - 1,152%",
        competitiveEdge: "25-35%"
      },
      ctaAr: "ابدأ تجربة مجانية",
      ctaEn: "Start Free Trial",
      popular: true,
      hasEcommerce: true,
      icon: Crown,
      gradient: "from-texafab-emerald to-texafab-emerald/90",
      iconBg: "from-white to-white/90",
    },
    {
      nameAr: "المؤسساتية",
      nameEn: "Enterprise",
      priceUSD: basePrices.enterprise,
      descAr: "للشركات الكبيرة والمجموعات التجارية",
      descEn: "For large enterprises & business groups",
      targetAr: "الشركات الكبيرة والمجموعات",
      targetEn: "Large Enterprises & Groups",
      targetIcon: Building2,
      // Business Management Features
      businessFeaturesAr: [
        "إدارة عدد غير محدود من الشركات ♾️",
        "مستخدمين غير محدود",
        "نقاط بيع غير محدودة",
        "شؤون الموظفين الموسعة",
        "نظام الوكلاء المتقدم",
        "مدير حساب مخصص"
      ],
      businessFeaturesEn: [
        "Unlimited Companies ♾️",
        "Unlimited Users",
        "Unlimited POS Terminals",
        "Extended HR Module",
        "Advanced Agents System",
        "Dedicated Account Manager"
      ],
      // Digital Presence Features
      digitalFeaturesAr: [
        "استضافة Hetzner Premium مخصصة",
        "موقع إلكتروني مجاني دائماً 🎁",
        "تخصيص التصميم بألوان الشركة 🎨",
        "المتجر الإلكتروني المتقدم",
        "SLA 99.9%"
      ],
      digitalFeaturesEn: [
        "Premium Dedicated Hetzner",
        "Free Website Forever 🎁",
        "Custom Brand Design 🎨",
        "Advanced E-commerce",
        "99.9% SLA"
      ],
      // AI Features
      aiFeaturesAr: [
        "تحليلات الذكاء الاصطناعي 🧠",
        "الإدخال الآلي بالذكاء الاصطناعي",
        "تنبؤات المبيعات الذكية",
        "تقارير لحظية ومتقدمة"
      ],
      aiFeaturesEn: [
        "AI Analytics 🧠",
        "AI Auto Data Entry",
        "Smart Sales Predictions",
        "Real-time Advanced Reports"
      ],
      // Mobile Apps Features
      mobileFeaturesAr: [
        "تطبيق الإدارة للمدراء 👔",
        "تطبيق المستودعات والجرد 📦",
        "تطبيق السائقين والتوصيل 🚚"
      ],
      mobileFeaturesEn: [
        "Management App for Executives 👔",
        "Warehouse & Inventory App 📦",
        "Drivers & Delivery App 🚚"
      ],
      // Expected Returns
      returnsAr: {
        salesIncrease: "$25,000 - $50,000",
        customerRetention: "$15,000 - $35,000",
        totalReturn: "$120,000 - $250,000",
        netProfit: "+$108,000 - $238,000",
        roi: "901% - 1,985%",
        competitiveEdge: "40-50%"
      },
      returnsEn: {
        salesIncrease: "$25,000 - $50,000",
        customerRetention: "$15,000 - $35,000",
        totalReturn: "$120,000 - $250,000",
        netProfit: "+$108,000 - $238,000",
        roi: "901% - 1,985%",
        competitiveEdge: "40-50%"
      },
      ctaAr: "تواصل معنا",
      ctaEn: "Contact Us",
      popular: false,
      icon: Building,
      gradient: "from-slate-50 to-white",
      iconBg: "from-slate-700 to-slate-800",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-texafab-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-texafab-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            {language === "ar" ? "أسعار شفافة" : "Transparent Pricing"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {language === "ar" ? "اختر الباقة المناسبة لك" : "Choose Your Perfect Plan"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === "ar" 
              ? "أسعار واضحة بدون رسوم خفية. جرب مجاناً لمدة 14 يوم"
              : "Clear pricing with no hidden fees. Start with a 14-day free trial"
            }
          </p>
        </div>

        {/* Currency Selector */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {language === "ar" ? "العملة:" : "Currency:"}
            </span>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-texafab-emerald cursor-pointer"
            >
              {Object.entries(currencyConfig).map(([code, info]) => (
                <option key={code} value={code}>
                  {info.symbol} {language === "ar" ? info.nameAr : info.nameEn} ({code})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* E-commerce No Design Fee Banner */}
        <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Gift className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 text-center">
              {language === "ar" 
                ? "🎁 المتجر الإلكتروني مشمول بدون رسوم تصميم أو تشغيل إضافية!" 
                : "🎁 E-commerce store included with NO design or setup fees!"}
            </p>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const TargetIcon = plan.targetIcon;
            const businessFeatures = language === "ar" ? plan.businessFeaturesAr : plan.businessFeaturesEn;
            const digitalFeatures = language === "ar" ? plan.digitalFeaturesAr : plan.digitalFeaturesEn;
            const aiFeatures = language === "ar" ? plan.aiFeaturesAr : plan.aiFeaturesEn;
            const mobileFeatures = language === "ar" ? plan.mobileFeaturesAr : plan.mobileFeaturesEn;
            const returns = language === "ar" ? plan.returnsAr : plan.returnsEn;
            const localPrice = convertPrice(plan.priceUSD);
            const displayPrice = localPrice.toLocaleString();
            const categories = language === "ar" ? featureCategories.ar : featureCategories.en;
            
            return (
              <Card 
                key={i} 
                className={`relative overflow-hidden flex flex-col transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-br from-texafab-emerald via-teal-600 to-texafab-emerald/95 text-white shadow-2xl shadow-texafab-emerald/30 lg:scale-105 z-10 border-0" 
                    : `bg-gradient-to-br ${plan.gradient} dark:from-gray-800 dark:to-gray-800/95 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-texafab-emerald/20`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-texafab-gold text-texafab-slate px-4 py-1 text-xs font-bold uppercase tracking-wider text-center">
                    {language === "ar" ? "الأكثر طلباً" : "Best Value"}
                  </div>
                )}
                
                <div className={`p-5 pb-0 ${plan.popular ? "pt-9" : ""}`}>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.popular ? "from-white/20 to-white/10" : plan.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                    {language === "ar" ? plan.nameAr : plan.nameEn}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                      {currency}
                    </span>
                    <span className={`text-2xl font-black ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                      {displayPrice}
                    </span>
                    <span className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                      /{language === "ar" ? "شهر" : "mo"}
                    </span>
                  </div>
                  
                  <p className={`text-xs mb-3 ${plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                    {language === "ar" ? plan.descAr : plan.descEn}
                  </p>

                  {/* Target Audience Badge */}
                  <div className={`mb-4 p-2 rounded-lg flex items-center gap-2 ${
                    plan.popular 
                      ? "bg-white/10 border border-white/20" 
                      : "bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
                  }`}>
                    <TargetIcon className={`w-4 h-4 ${plan.popular ? "text-texafab-gold" : "text-texafab-emerald"}`} />
                    <span className={`text-xs font-medium ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                      {language === "ar" ? plan.targetAr : plan.targetEn}
                    </span>
                  </div>
                </div>

                <div className="p-5 pt-0 flex-1 flex flex-col">
                  {/* Business Management Section */}
                  <div className="mb-3">
                    <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                      {categories.business}
                    </h4>
                    <ul className="space-y-1.5">
                      {businessFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? "bg-white/20" : "bg-texafab-emerald/10 dark:bg-texafab-teal/20"
                          }`}>
                            <Check className={`w-2 h-2 ${plan.popular ? "text-white" : "text-texafab-emerald dark:text-texafab-teal"}`} />
                          </div>
                          <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Digital Presence Section */}
                  <div className="mb-3">
                    <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                      {categories.digital}
                    </h4>
                    <ul className="space-y-1.5">
                      {digitalFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? "bg-white/20" : "bg-blue-500/10 dark:bg-blue-400/20"
                          }`}>
                            <Globe className={`w-2 h-2 ${plan.popular ? "text-white" : "text-blue-500 dark:text-blue-400"}`} />
                          </div>
                          <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"} ${
                            feature.includes("Hetzner") || feature.includes("استضافة") ? "font-medium" : ""
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Section (if available) */}
                  {aiFeatures.length > 0 && (
                    <div className="mb-3">
                      <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                        {categories.ai}
                      </h4>
                      <ul className="space-y-1.5">
                        {aiFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular ? "bg-white/20" : "bg-purple-500/10 dark:bg-purple-400/20"
                            }`}>
                              <Cpu className={`w-2 h-2 ${plan.popular ? "text-white" : "text-purple-500 dark:text-purple-400"}`} />
                            </div>
                            <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mobile Apps Section (if available) */}
                  {mobileFeatures.length > 0 && (
                    <div className="mb-3">
                      <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                        {categories.mobile}
                      </h4>
                      <ul className="space-y-1.5">
                        {mobileFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular ? "bg-white/20" : "bg-orange-500/10 dark:bg-orange-400/20"
                            }`}>
                              <Smartphone className={`w-2 h-2 ${plan.popular ? "text-white" : "text-orange-500 dark:text-orange-400"}`} />
                            </div>
                            <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expected Returns Section */}
                  <div className={`mb-4 p-3 rounded-lg ${
                    plan.popular 
                      ? "bg-white/10 border border-white/20" 
                      : "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50"
                  }`}>
                    <h4 className={`text-xs font-bold mb-2 flex items-center gap-1 ${plan.popular ? "text-white" : "text-green-700 dark:text-green-400"}`}>
                      <DollarSign className="w-3 h-3" />
                      {categories.returns}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] ${plan.popular ? "text-white/70" : "text-gray-600 dark:text-gray-400"}`}>
                          <TrendingUp className="w-2.5 h-2.5 inline me-1" />
                          {language === "ar" ? "زيادة المبيعات" : "Sales Increase"}
                        </span>
                        <span className={`text-[10px] font-bold ${plan.popular ? "text-texafab-gold" : "text-green-600 dark:text-green-400"}`}>
                          {returns.salesIncrease}/{language === "ar" ? "سنة" : "yr"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] ${plan.popular ? "text-white/70" : "text-gray-600 dark:text-gray-400"}`}>
                          <Heart className="w-2.5 h-2.5 inline me-1" />
                          {language === "ar" ? "الاحتفاظ بالزبائن" : "Customer Retention"}
                        </span>
                        <span className={`text-[10px] font-bold ${plan.popular ? "text-texafab-gold" : "text-green-600 dark:text-green-400"}`}>
                          {returns.customerRetention}/{language === "ar" ? "سنة" : "yr"}
                        </span>
                      </div>
                      <div className={`pt-1 mt-1 border-t ${plan.popular ? "border-white/20" : "border-green-200 dark:border-green-700"}`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-[10px] font-medium ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
                            {language === "ar" ? "صافي الربح السنوي" : "Annual Net Profit"}
                          </span>
                          <span className={`text-xs font-black ${plan.popular ? "text-white" : "text-green-600 dark:text-green-400"}`}>
                            {returns.netProfit}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-0.5">
                          <span className={`text-[10px] ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                            ROI
                          </span>
                          <span className={`text-[10px] font-bold ${plan.popular ? "text-texafab-gold" : "text-emerald-600 dark:text-emerald-400"}`}>
                            {returns.roi}
                          </span>
                        </div>
                        {returns.competitiveEdge && (
                          <div className="flex justify-between items-center mt-0.5">
                            <span className={`text-[10px] ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                              {language === "ar" ? "التفوق التنافسي" : "Competitive Edge"}
                            </span>
                            <span className={`text-[10px] font-bold ${plan.popular ? "text-texafab-gold" : "text-blue-600 dark:text-blue-400"}`}>
                              {returns.competitiveEdge}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      if (i === 2) {
                        window.location.href = "/contact";
                      } else {
                        setIsTrialModalOpen(true);
                      }
                    }}
                    className={`w-full h-10 text-xs font-semibold group rounded-xl mt-auto ${
                      plan.popular 
                        ? "bg-white text-texafab-emerald hover:bg-white/90 shadow-lg" 
                        : i === 0 
                          ? "bg-blue-500 hover:bg-blue-600 text-white"
                          : "bg-texafab-emerald hover:bg-texafab-emerald/90 text-white"
                    }`}
                  >
                    {language === "ar" ? plan.ctaAr : plan.ctaEn}
                    <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180 me-1" : "ms-1"}`} />
                  </Button>
                </div>
                
                {/* Decorative Elements for Popular Card */}
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-texafab-gold/10 rounded-full blur-3xl" />
                  </>
                )}
              </Card>
            );
          })}
        </div>
        
        {/* Technical Features Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {language === "ar" ? "تشفير AES-256" : "AES-256 Encryption"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Server className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {language === "ar" ? "سيرفرات Hetzner الألمانية" : "German Hetzner Servers"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {language === "ar" ? "عمل مستمر 24/7" : "24/7 Uptime"}
            </span>
          </div>
        </div>
        
        {/* Money Back Guarantee + CTA */}
        <div className="text-center mt-8 space-y-4">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-300 font-medium text-sm">
              {language === "ar" ? "ضمان استرداد الأموال خلال 30 يوم" : "30-day money-back guarantee"}
            </span>
          </div>
          <div>
            <Link to="/pricing">
              <Button variant="outline" className="h-11 px-6 border-2 border-gray-200 dark:border-gray-700 text-texafab-slate dark:text-white font-semibold rounded-xl">
                {language === "ar" ? "مقارنة جميع الباقات" : "Compare All Plans"}
                <ArrowRight className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trial Signup Modal */}
      <TrialSignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </section>
  );
}
