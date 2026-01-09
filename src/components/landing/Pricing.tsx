import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { getText, landingPageTranslations as t, pricingPageTranslations as pt } from "@/lib/translations/pages";
import { useSiteData, PricingContent } from "@/hooks/useSiteData";
import { cms, type Language } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Zap, Crown, Building, Rocket, ShoppingCart, Shield, Server, Clock, Gift, Users, Globe, Cpu, TrendingUp, Heart, DollarSign, Target, Building2, Briefcase, User, Smartphone, Warehouse, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrialSignupModal } from "./TrialSignupModal";

// Currency configuration
const currencyConfig: Record<string, { symbol: string; code: string; rate: number; nameKey: string }> = {
  USD: { symbol: "$", code: "USD", rate: 1, nameKey: "currUSD" },
  SAR: { symbol: "ر.س", code: "SAR", rate: 3.75, nameKey: "currSAR" },
  AED: { symbol: "د.إ", code: "AED", rate: 3.67, nameKey: "currAED" },
  EUR: { symbol: "€", code: "EUR", rate: 0.92, nameKey: "currEUR" },
  GBP: { symbol: "£", code: "GBP", rate: 0.79, nameKey: "currGBP" },
  UAH: { symbol: "₴", code: "UAH", rate: 41, nameKey: "currUAH" },
  RUB: { symbol: "₽", code: "RUB", rate: 92, nameKey: "currRUB" },
  PLN: { symbol: "zł", code: "PLN", rate: 4, nameKey: "currPLN" },
  TRY: { symbol: "₺", code: "TRY", rate: 32, nameKey: "currTRY" },
  EGP: { symbol: "ج.م", code: "EGP", rate: 50, nameKey: "currEGP" },
  KWD: { symbol: "د.ك", code: "KWD", rate: 0.31, nameKey: "currKWD" },
  QAR: { symbol: "ر.ق", code: "QAR", rate: 3.64, nameKey: "currQAR" },
  BHD: { symbol: "د.ب", code: "BHD", rate: 0.38, nameKey: "currBHD" },
  OMR: { symbol: "ر.ع", code: "OMR", rate: 0.39, nameKey: "currOMR" },
};

export function Pricing() {
  const { language, dir, siteId } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [supabasePricing, setSupabasePricing] = useState<any[]>([]);
  const loadedRef = useRef<string | null>(null);
  
  // Load pricing from CMS (JSON fallback)
  const { data: cmsPricing } = useSiteData<PricingContent>('pricing', language);
  
  // Load pricing from Supabase (with deduplication)
  useEffect(() => {
    const cacheKey = `${siteId}-${language}`;
    if (loadedRef.current === cacheKey) return;
    
    const loadSupabaseData = async () => {
      try {
        const cmsLanguage = (language === 'ar' || language === 'en' || language === 'ru') ? language : 'en';
        const data = await cms.pricing.getAll(siteId as any, cmsLanguage as Language);
        if (data && data.length > 0) {
          setSupabasePricing(data);
          loadedRef.current = cacheKey;
        }
      } catch (error) {
        console.log('Using JSON fallback for pricing data');
      }
    };
    loadSupabaseData();
  }, [language, siteId]);

  // Currency based on selected currency (default USD)
  const currencyInfo = currencyConfig[selectedCurrency] || currencyConfig.USD;
  const currency = currencyInfo.symbol;
  
  // Always use static translations for section titles
  const sectionTitle = getText(pt.mainTitle, language);
  const sectionSubtitle = getText(pt.subtitle, language);
  
  // Use Supabase pricing if available
  const hasSupabasePlans = supabasePricing.length > 0;

  // Convert USD price to local currency
  const convertPrice = (usdPrice: number) => {
    return Math.round(usdPrice * currencyInfo.rate);
  };

  // Base prices in USD (Original prices)
  const basePrices = {
    basic: 99,
    professional: 799,
    enterprise: 1199,
  };

  // Offer prices (50% OFF - Limited Time)
  const offerPrices = {
    basic: 49,
    professional: 399,
    enterprise: 599,
  };

  // Feature categories for organized display
  const featureCategories = {
    business: getText(t.catBusiness, language),
    digital: getText(t.catDigital, language),
    ai: getText(t.catAI, language),
    mobile: getText(t.catMobile, language),
    returns: getText(t.catReturns, language),
    target: getText(t.catTarget, language)
  };

  const plans = [
    {
      name: getText(pt.basicPlan, language),
      priceUSD: offerPrices.basic,
      originalPriceUSD: basePrices.basic,
      desc: getText(pt.basicDesc, language),
      target: getText(t.targetSingle, language),
      targetIcon: User,
      // Business Management Features
      businessFeatures: [
        getText(t.manageOneCompany, language),
        getText(t.threeUsers, language),
        getText(t.twoPOS, language),
        getText(t.basicHR, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(t.sharedHosting, language),
        getText(t.ecommerce100, language),
        getText(t.freeSSL, language)
      ],
      // AI Features
      aiFeatures: [],
      // Mobile Apps Features
      mobileFeatures: [],
      // Expected Returns
      returns: {
        salesIncrease: "$2,000 - $4,000",
        customerRetention: "$1,500 - $4,000",
        totalReturn: "$8,000 - $15,000",
        netProfit: "+$6,800 - $13,800",
        roi: "573% - 1,162%"
      },
      cta: getText(t.ctaDemo, language),
      popular: false,
      hasEcommerce: true,
      icon: Rocket,
      gradient: "from-blue-50 to-white",
      iconBg: "from-blue-500 to-blue-600",
    },
    {
      name: getText(pt.professionalPlan, language),
      priceUSD: offerPrices.professional,
      originalPriceUSD: basePrices.professional,
      desc: getText(pt.professionalDesc, language),
      target: getText(t.targetAmbitious, language),
      targetIcon: Briefcase,
      // Business Management Features
      businessFeatures: [
        getText(t.manageTwoCompanies, language),
        getText(t.tenUsers, language),
        getText(t.unlimitedPOS, language),
        getText(t.advancedHR, language),
        getText(t.agentsManagement, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(t.dedicatedHosting, language),
        getText(t.freeWebsite1Year, language),
        getText(t.ecommerceUnlimited, language),
        getText(t.sslCustomDomain, language)
      ],
      // AI Features
      aiFeatures: [
        getText(t.weeklyReports, language)
      ],
      // Mobile Apps Features
      mobileFeatures: [],
      // Expected Returns
      returns: {
        salesIncrease: "$12,000 - $20,000",
        customerRetention: "$8,000 - $15,000",
        totalReturn: "$45,000 - $75,000",
        netProfit: "+$39,000 - $69,000",
        roi: "652% - 1,152%",
        competitiveEdge: "25-35%"
      },
      cta: getText(t.ctaDemo, language),
      popular: true,
      hasEcommerce: true,
      icon: Crown,
      gradient: "from-texafab-emerald to-texafab-emerald/90",
      iconBg: "from-white to-white/90",
    },
    {
      name: getText(pt.enterprisePlan, language),
      priceUSD: offerPrices.enterprise,
      originalPriceUSD: basePrices.enterprise,
      desc: getText(pt.enterpriseDesc, language),
      target: getText(t.targetLarge, language),
      targetIcon: Building2,
      // Business Management Features
      businessFeatures: [
        getText(t.manageUnlimitedCompanies, language),
        getText(t.unlimitedUsersLanding, language),
        getText(t.unlimitedPOS, language),
        getText(t.extendedHR, language),
        getText(t.advancedAgents, language),
        getText(t.dedicatedManager, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(t.premiumHosting, language),
        getText(t.freeWebsiteForever, language),
        getText(t.customDesign, language),
        getText(t.advancedEcommerce, language),
        getText(t.sla999, language)
      ],
      // AI Features
      aiFeatures: [
        getText(t.aiAnalytics, language),
        getText(t.aiDataEntry, language),
        getText(t.salesPredictions, language),
        getText(t.realtimeReports, language)
      ],
      // Mobile Apps Features
      mobileFeatures: [
        getText(t.adminApp, language),
        getText(t.warehouseApp, language),
        getText(t.driverApp, language)
      ],
      // Expected Returns
      returns: {
        salesIncrease: "$25,000 - $50,000",
        customerRetention: "$15,000 - $35,000",
        totalReturn: "$120,000 - $250,000",
        netProfit: "+$108,000 - $238,000",
        roi: "901% - 1,985%",
        competitiveEdge: "40-50%"
      },
      cta: getText(pt.contactUs, language),
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
            {getText(t.transparentPricing, language)}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {getText(t.choosePlan, language)}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {getText(t.pricingDescLanding, language)}
          </p>
        </div>

        {/* Currency Selector */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {getText(t.currencyLabel, language)}
            </span>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-texafab-emerald cursor-pointer"
            >
              {Object.entries(currencyConfig).map(([code, info]) => (
                <option key={code} value={code}>
                  {info.symbol} {getText(pt[info.nameKey as keyof typeof pt], language)} ({code})
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
              {getText(t.ecommerceIncluded, language)}
            </p>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {(hasSupabasePlans ? supabasePricing.map((sp, i) => ({
            name: sp.name,
            priceUSD: sp.price,
            desc: sp.description,
            target: '',
            targetIcon: User,
            businessFeatures: sp.features?.filter((f: string) => f) || [],
            digitalFeatures: [],
            aiFeatures: [],
            mobileFeatures: [],
            returns: null,
            cta: getText(t.ctaDemo, language),
            popular: sp.is_popular,
            hasEcommerce: false,
            icon: Rocket,
            gradient: "from-blue-50 to-white",
            iconBg: "from-blue-500 to-blue-600",
          })) : plans).map((plan, i) => {
            const Icon = plan.icon;
            const TargetIcon = plan.targetIcon;
            const businessFeatures = plan.businessFeatures;
            const digitalFeatures = plan.digitalFeatures;
            const aiFeatures = plan.aiFeatures;
            const mobileFeatures = plan.mobileFeatures;
            const returns = plan.returns;
            const localPrice = convertPrice(plan.priceUSD);
            const displayPrice = localPrice.toLocaleString();
            const categories = featureCategories;
            
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
                    {getText(t.bestValue, language)}
                  </div>
                )}
                
                <div className={`p-5 pb-0 ${plan.popular ? "pt-9" : ""}`}>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.popular ? "from-white/20 to-white/10" : plan.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                      {currency}
                    </span>
                    <span className={`text-2xl font-black ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                      {displayPrice}
                    </span>
                    <span className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                      {getText(t.perMonth, language)}
                    </span>
                  </div>
                  
                  <p className={`text-xs mb-3 ${plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                    {plan.desc}
                  </p>

                  {/* Target Audience Badge */}
                  <div className={`mb-4 p-2 rounded-lg flex items-center gap-2 ${
                    plan.popular 
                      ? "bg-white/10 border border-white/20" 
                      : "bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
                  }`}>
                    <TargetIcon className={`w-4 h-4 ${plan.popular ? "text-yellow-300" : "text-texafab-emerald"}`} />
                    <span className={`text-xs font-medium ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                      {plan.target}
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
                  <div className={`mb-4 p-4 rounded-xl ${
                    plan.popular 
                      ? "bg-white/15 border-2 border-white/30" 
                      : "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50"
                  }`}>
                    <h4 className={`text-sm font-bold mb-3 flex items-center gap-2 ${plan.popular ? "text-white" : "text-green-700 dark:text-green-400"}`}>
                      <DollarSign className="w-4 h-4" />
                      {categories.returns}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                          <TrendingUp className="w-3.5 h-3.5 inline me-1" />
                          {getText(t.metricSales, language)}
                        </span>
                        <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-green-600 dark:text-green-400"}`}>
                          {returns.salesIncrease}{getText(t.perYear, language)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                          <Heart className="w-3.5 h-3.5 inline me-1" />
                          {getText(t.metricRetention, language)}
                        </span>
                        <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-green-600 dark:text-green-400"}`}>
                          {returns.customerRetention}{getText(t.perYear, language)}
                        </span>
                      </div>
                      <div className={`pt-2 mt-2 border-t ${plan.popular ? "border-white/30" : "border-green-200 dark:border-green-700"}`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-semibold ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
                            {getText(t.metricProfit, language)}
                          </span>
                          <span className={`text-base font-black ${plan.popular ? "text-white" : "text-green-600 dark:text-green-400"}`}>
                            {returns.netProfit}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1.5">
                          <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-500 dark:text-gray-400"}`}>
                            ROI
                          </span>
                          <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-emerald-600 dark:text-emerald-400"}`}>
                            {returns.roi}
                          </span>
                        </div>
                        {returns.competitiveEdge && (
                          <div className="flex justify-between items-center mt-1.5">
                            <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-500 dark:text-gray-400"}`}>
                              {getText(t.metricEdge, language)}
                            </span>
                            <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-blue-600 dark:text-blue-400"}`}>
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
                    {plan.cta}
                    <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 me-1" : "ms-1"}`} />
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
              {getText(t.aesEncryption, language)}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Server className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {getText(t.germanServers, language)}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {getText(t.uptime247, language)}
            </span>
          </div>
        </div>
        
        {/* Money Back Guarantee + CTA */}
        <div className="text-center mt-8 space-y-4">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-300 font-medium text-sm">
              {getText(t.moneyBack, language)}
            </span>
          </div>
          <div>
            <Link to="/pricing">
              <Button variant="outline" className="h-11 px-6 border-2 border-gray-200 dark:border-gray-700 text-texafab-slate dark:text-white font-semibold rounded-xl">
                {getText(t.compareAllPlans, language)}
                <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
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
