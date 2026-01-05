import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building,
  ArrowRight,
  HelpCircle,
  Shield,
  Server,
  Clock,
  Database,
  Globe,
  Lock,
  Sparkles,
  ShoppingCart,
  Rocket
} from "lucide-react";
import { TrialSignupModal } from "@/components/landing/TrialSignupModal";

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

// Base prices in USD
const basePricesUSD = {
  free: 0,
  basic: 199,
  professional: 399,
  enterprise: 999,
};

function PricingContent() {
  const { language, dir } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Currency based on selected currency (default USD)
  const currencyInfo = currencyConfig[selectedCurrency] || currencyConfig.USD;
  const currency = currencyInfo.symbol;
  const currencyCode = currencyInfo.code;

  // Convert USD price to local currency
  const convertPrice = (usdPrice: number) => {
    const localPrice = Math.round(usdPrice * currencyInfo.rate);
    return billingPeriod === "yearly" ? Math.round(localPrice * 10 * 0.8) : localPrice; // 20% discount for yearly
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const plans = [
    {
      nameAr: "الباقة المجانية",
      nameEn: "Free",
      priceUSD: basePricesUSD.free,
      descAr: "للتجربة والشركات الناشئة",
      descEn: "For trial and startups",
      featuresAr: [
        { text: "مستخدم واحد", included: true },
        { text: "إدارة مخزون أساسية", included: true },
        { text: "نقطة بيع واحدة", included: true },
        { text: "حتى 100 رولون", included: true },
        { text: "تقارير محدودة", included: true },
        { text: "دعم بالبريد الإلكتروني", included: true },
        { text: "المتجر الإلكتروني", included: false },
        { text: "إدارة الألوان", included: false },
        { text: "المحاسبة الكاملة", included: false },
        { text: "تكامل API", included: false }
      ],
      featuresEn: [
        { text: "1 User", included: true },
        { text: "Basic Inventory", included: true },
        { text: "1 Point of Sale", included: true },
        { text: "Up to 100 Rolls", included: true },
        { text: "Limited Reports", included: true },
        { text: "Email Support", included: true },
        { text: "E-commerce Store", included: false },
        { text: "Color Management", included: false },
        { text: "Full Accounting", included: false },
        { text: "API Integration", included: false }
      ],
      ctaAr: "ابدأ مجاناً",
      ctaEn: "Start Free",
      popular: false,
      recommended: false,
      icon: Zap,
      gradient: "from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/95",
      iconBg: "from-gray-400 to-gray-500"
    },
    {
      nameAr: "الباقة الأساسية",
      nameEn: "Basic",
      priceUSD: basePricesUSD.basic,
      descAr: "للشركات الصغيرة",
      descEn: "For small businesses",
      featuresAr: [
        { text: "حتى 3 مستخدمين", included: true },
        { text: "إدارة مخزون متوسطة", included: true },
        { text: "نقطتي بيع", included: true },
        { text: "حتى 500 رولون", included: true },
        { text: "تقارير أساسية", included: true },
        { text: "دعم فني مباشر", included: true },
        { text: "المتجر الإلكتروني (100 منتج) - بدون رسوم تصميم!", included: true, highlight: true },
        { text: "إدارة الألوان", included: true },
        { text: "المحاسبة الأساسية", included: true },
        { text: "تكامل API", included: false }
      ],
      featuresEn: [
        { text: "Up to 3 Users", included: true },
        { text: "Medium Inventory", included: true },
        { text: "2 Points of Sale", included: true },
        { text: "Up to 500 Rolls", included: true },
        { text: "Basic Reports", included: true },
        { text: "Live Support", included: true },
        { text: "E-commerce (100 products) - No design fees!", included: true, highlight: true },
        { text: "Color Management", included: true },
        { text: "Basic Accounting", included: true },
        { text: "API Integration", included: false }
      ],
      ctaAr: "ابدأ تجربة مجانية",
      ctaEn: "Start Free Trial",
      popular: false,
      recommended: false,
      icon: Rocket,
      gradient: "from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/95",
      iconBg: "from-blue-500 to-blue-600"
    },
    {
      nameAr: "الباقة الاحترافية",
      nameEn: "Professional",
      priceUSD: basePricesUSD.professional,
      descAr: "للشركات المتوسطة والمتنامية",
      descEn: "For growing businesses",
      featuresAr: [
        { text: "حتى 10 مستخدمين", included: true },
        { text: "إدارة مخزون كاملة", included: true },
        { text: "نقاط بيع غير محدودة", included: true },
        { text: "رولونات غير محدودة", included: true },
        { text: "تقارير متقدمة", included: true },
        { text: "دعم أولوية", included: true },
        { text: "المتجر الإلكتروني (غير محدود) - بدون رسوم!", included: true, highlight: true },
        { text: "إدارة الألوان الكاملة", included: true },
        { text: "المحاسبة الكاملة", included: true },
        { text: "تكامل API أساسي", included: true }
      ],
      featuresEn: [
        { text: "Up to 10 Users", included: true },
        { text: "Full Inventory", included: true },
        { text: "Unlimited POS", included: true },
        { text: "Unlimited Rolls", included: true },
        { text: "Advanced Reports", included: true },
        { text: "Priority Support", included: true },
        { text: "E-commerce (Unlimited) - No fees!", included: true, highlight: true },
        { text: "Full Color Management", included: true },
        { text: "Full Accounting", included: true },
        { text: "Basic API Integration", included: true }
      ],
      ctaAr: "ابدأ تجربة مجانية",
      ctaEn: "Start Free Trial",
      popular: true,
      recommended: true,
      icon: Crown,
      gradient: "from-texafab-emerald via-teal-600 to-texafab-emerald/95",
      iconBg: "from-white to-white/90"
    },
    {
      nameAr: "باقة المؤسسات",
      nameEn: "Enterprise",
      priceUSD: basePricesUSD.enterprise,
      descAr: "للشركات الكبيرة والمؤسسات",
      descEn: "For large enterprises",
      featuresAr: [
        { text: "مستخدمين غير محدود", included: true },
        { text: "جميع الميزات", included: true },
        { text: "استضافة خاصة", included: true },
        { text: "تقارير مخصصة", included: true },
        { text: "مدير حساب مخصص", included: true },
        { text: "تدريب فريق العمل", included: true },
        { text: "المتجر + تكاملات متعددة - بدون رسوم!", included: true, highlight: true },
        { text: "تخصيص كامل", included: true },
        { text: "تكامل API كامل", included: true },
        { text: "SLA مضمون 99.9%", included: true }
      ],
      featuresEn: [
        { text: "Unlimited Users", included: true },
        { text: "All Features", included: true },
        { text: "Dedicated Hosting", included: true },
        { text: "Custom Reports", included: true },
        { text: "Account Manager", included: true },
        { text: "Team Training", included: true },
        { text: "Store + Multi Integrations - No fees!", included: true, highlight: true },
        { text: "Full Customization", included: true },
        { text: "Full API Integration", included: true },
        { text: "99.9% SLA Guarantee", included: true }
      ],
      ctaAr: "تواصل معنا",
      ctaEn: "Contact Us",
      popular: false,
      recommended: false,
      icon: Building,
      gradient: "from-slate-50 to-white dark:from-slate-800/50 dark:to-gray-800/95",
      iconBg: "from-slate-700 to-slate-800"
    }
  ];

  // Technical features / Trust badges
  const techFeatures = [
    {
      icon: Shield,
      titleAr: "تشفير عالي المستوى",
      titleEn: "High-Level Encryption",
      descAr: "تشفير AES-256 لحماية بياناتك",
      descEn: "AES-256 encryption to protect your data"
    },
    {
      icon: Server,
      titleAr: "سيرفرات Hetzner الألمانية",
      titleEn: "German Hetzner Servers",
      descAr: "أداء عالي وموثوقية ألمانية",
      descEn: "High performance & German reliability"
    },
    {
      icon: Database,
      titleAr: "عزل تام للبيانات",
      titleEn: "Complete Data Isolation",
      descAr: "بياناتك معزولة ومحمية بالكامل",
      descEn: "Your data is fully isolated & protected"
    },
    {
      icon: Clock,
      titleAr: "عمل مستمر 24/7",
      titleEn: "24/7 Uptime",
      descAr: "ضمان توفر 99.9% على مدار الساعة",
      descEn: "99.9% uptime guarantee around the clock"
    },
    {
      icon: Globe,
      titleAr: "متوافق مع جميع المنصات",
      titleEn: "Cross-Platform Compatible",
      descAr: "يعمل على الويب والموبايل والديسكتوب",
      descEn: "Works on Web, Mobile & Desktop"
    },
    {
      icon: Lock,
      titleAr: "نسخ احتياطي تلقائي",
      titleEn: "Automatic Backup",
      descAr: "نسخ احتياطي مستمر لقواعد البيانات",
      descEn: "Continuous database backup"
    }
  ];

  const faqs = [
    {
      questionAr: "هل يمكنني الترقية لاحقاً؟",
      questionEn: "Can I upgrade later?",
      answerAr: "نعم، يمكنك الترقية في أي وقت مع الحفاظ على جميع بياناتك. سيتم احتساب الفرق فقط.",
      answerEn: "Yes, you can upgrade at any time while keeping all your data. Only the difference will be charged."
    },
    {
      questionAr: "هل هناك فترة تجربة مجانية؟",
      questionEn: "Is there a free trial?",
      answerAr: "نعم، نقدم 14 يوم تجربة مجانية لجميع الباقات المدفوعة بجميع الميزات.",
      answerEn: "Yes, we offer a 14-day free trial for all paid plans with all features."
    },
    {
      questionAr: "ما هي طرق الدفع المتاحة؟",
      questionEn: "What payment methods are available?",
      answerAr: "نقبل البطاقات الائتمانية، مدى، Apple Pay، STC Pay، والتحويل البنكي.",
      answerEn: "We accept credit cards, Mada, Apple Pay, STC Pay, and bank transfer."
    },
    {
      questionAr: "هل يمكنني إلغاء الاشتراك؟",
      questionEn: "Can I cancel my subscription?",
      answerAr: "نعم، يمكنك إلغاء الاشتراك في أي وقت مع ضمان استرداد خلال 30 يوم.",
      answerEn: "Yes, you can cancel anytime with a 30-day money-back guarantee."
    },
    {
      questionAr: "ما هو المتجر الإلكتروني المتضمن؟",
      questionEn: "What is the included E-commerce store?",
      answerAr: "متجر إلكتروني متكامل لعرض وبيع منتجاتك أونلاين مع ربط مباشر بالمخزون ونظام الطلبات.",
      answerEn: "A complete online store to showcase and sell your products with direct inventory and order system integration."
    },
    {
      questionAr: "أين يتم استضافة بياناتي؟",
      questionEn: "Where is my data hosted?",
      answerAr: "بياناتك مستضافة على سيرفرات Hetzner الألمانية عالية الأداء مع تشفير وعزل تام.",
      answerEn: "Your data is hosted on high-performance German Hetzner servers with encryption and complete isolation."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 dark:bg-texafab-emerald/20 text-texafab-emerald text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {language === "ar" ? "أسعار مرنة" : "Flexible Pricing"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {language === "ar" ? (
                <>اختر <span className="text-texafab-emerald">الباقة المناسبة</span> لعملك</>
              ) : (
                <>Choose the <span className="text-texafab-emerald">Right Plan</span> for You</>
              )}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {language === "ar"
                ? "أسعار شفافة بدون رسوم خفية. ابدأ مجاناً أو جرب أي باقة لمدة 14 يوم."
                : "Transparent pricing with no hidden fees. Start free or try any plan for 14 days."
              }
            </p>
            
            {/* Billing Period Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-gray-700 text-texafab-slate dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {language === "ar" ? "شهري" : "Monthly"}
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-gray-700 text-texafab-slate dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {language === "ar" ? "سنوي" : "Yearly"}
                <span className="absolute -top-2 -end-2 px-2 py-0.5 bg-texafab-gold text-texafab-slate text-[10px] font-bold rounded-full">
                  -17%
                </span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
                <Check className="w-4 h-4" />
                {language === "ar" ? "14 يوم تجربة مجانية" : "14-day free trial"}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                {language === "ar" ? "ضمان استرداد 30 يوم" : "30-day money back"}
              </div>
            </div>
            
            {/* Currency Selector */}
            <div className="mt-6 flex justify-center">
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
          </div>
        </div>
      </section>

      {/* E-commerce No Fee Banner */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                {language === "ar" 
                  ? "🎁 المتجر الإلكتروني مشمول بدون رسوم تصميم أو تشغيل إضافية!" 
                  : "🎁 E-commerce store included - NO design or setup fees!"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const features = language === "ar" ? plan.featuresAr : plan.featuresEn;
              const localPrice = convertPrice(plan.priceUSD);
              const displayPrice = plan.priceUSD === 0 ? (language === "ar" ? "مجاني" : "Free") : 
                                   formatPrice(localPrice);
              return (
                <Card 
                  key={i} 
                  className={`relative overflow-hidden flex flex-col transition-all duration-300 ${
                    plan.popular 
                      ? "bg-gradient-to-br from-texafab-emerald via-teal-600 to-texafab-emerald/95 text-white shadow-2xl shadow-texafab-emerald/30 lg:scale-105 z-10 border-0" 
                      : `bg-gradient-to-br ${plan.gradient} border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-texafab-emerald/30`
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 end-0 bg-texafab-gold text-texafab-slate px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-es-lg">
                      {language === "ar" ? "الأكثر طلباً" : "Best Value"}
                    </div>
                  )}
                  
                  {/* Recommended Badge */}
                  {plan.recommended && !plan.popular && (
                    <div className="absolute top-0 end-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-es-lg">
                      {language === "ar" ? "موصى به" : "Recommended"}
                    </div>
                  )}
                  
                  <div className="p-6 pb-0">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.popular ? "from-white/20 to-white/10" : plan.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-white"}`} />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                      {language === "ar" ? plan.nameAr : plan.nameEn}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-2">
                      {plan.priceUSD > 0 && (
                        <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                          {currency}
                        </span>
                      )}
                      <span className={`text-3xl font-black ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                        {displayPrice}
                      </span>
                      {plan.priceUSD > 0 && (
                        <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                          /{billingPeriod === "yearly" ? (language === "ar" ? "سنوياً" : "year") : (language === "ar" ? "شهرياً" : "mo")}
                        </span>
                      )}
                    </div>
                    
                    {/* Monthly equivalent for yearly */}
                    {billingPeriod === "yearly" && plan.priceUSD > 0 && (
                      <p className={`text-xs mb-3 ${plan.popular ? "text-white/60" : "text-gray-400 dark:text-gray-500"}`}>
                        {language === "ar" ? `≈ ${formatPrice(Math.round(localPrice / 12))} ${currency}/شهر` : `≈ ${currency}${formatPrice(Math.round(localPrice / 12))}/month`}
                      </p>
                    )}
                    
                    <p className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                      {language === "ar" ? plan.descAr : plan.descEn}
                    </p>
                  </div>

                  <div className="p-6 pt-0 flex-1 flex flex-col">
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? (plan.popular ? "bg-white/20" : "bg-texafab-emerald/10 dark:bg-texafab-teal/20")
                              : "bg-gray-100 dark:bg-gray-700"
                          }`}>
                            {feature.included ? (
                              <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-texafab-emerald dark:text-texafab-teal"}`} />
                            ) : (
                              <X className="w-3 h-3 text-gray-400" />
                            )}
                          </div>
                          <span className={`text-sm ${
                            feature.included 
                              ? (feature.highlight 
                                  ? (plan.popular ? "text-white font-semibold" : "text-texafab-emerald dark:text-texafab-teal font-semibold")
                                  : (plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"))
                              : "text-gray-400 dark:text-gray-500 line-through"
                          }`}>
                            {feature.text}
                            {feature.highlight && feature.included && (
                              <ShoppingCart className="w-3 h-3 inline-block ms-1" />
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={() => {
                        if (i === 3) {
                          window.location.href = "/contact";
                        } else {
                          setIsTrialModalOpen(true);
                        }
                      }}
                      className={`w-full h-11 text-sm font-semibold rounded-xl group transition-all ${
                        plan.popular 
                          ? "bg-white text-texafab-emerald hover:bg-white/90 shadow-lg" 
                          : "bg-texafab-emerald hover:bg-texafab-emerald/90 text-white"
                      }`}
                    >
                      {language === "ar" ? plan.ctaAr : plan.ctaEn}
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 me-2 group-hover:-translate-x-1" : "ms-2"}`} />
                    </Button>
                  </div>
                  
                  {/* Decorative Elements for Popular Card */}
                  {plan.popular && (
                    <>
                      <div className="absolute top-0 start-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 end-0 w-48 h-48 bg-texafab-gold/10 rounded-full blur-3xl" />
                    </>
                  )}
                </Card>
              );
            })}
          </div>
          
          {/* Value Highlight - Decoy Effect Explanation */}
          <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                <Crown className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-texafab-slate dark:text-white mb-1">
                  {language === "ar" ? "لماذا الباقة الاحترافية هي الأفضل؟" : "Why Professional is the Best Value?"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "ar" 
                    ? `بفرق ${formatPrice(language === "ar" ? 100 : 27)} ${currency} فقط عن الباقة الأساسية، تحصل على: مستخدمين أكثر بـ3 أضعاف، متجر إلكتروني غير محدود، نقاط بيع غير محدودة، ودعم أولوية!`
                    : `For just ${currency}${formatPrice(27)} more than Basic, you get: 3x more users, unlimited e-commerce, unlimited POS, and priority support!`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features / Trust Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
              <Server className="w-4 h-4" />
              {language === "ar" ? "بنية تحتية متقدمة" : "Advanced Infrastructure"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "أمان وأداء على مستوى المؤسسات" : "Enterprise-Grade Security & Performance"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "بياناتك محمية بأعلى معايير الأمان على سيرفرات ألمانية عالية الأداء"
                : "Your data is protected with the highest security standards on high-performance German servers"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-texafab-emerald to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white mb-1">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <img src="https://www.hetzner.com/favicon.ico" alt="Hetzner" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hetzner Cloud</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "مقارنة تفصيلية للباقات" : "Detailed Plan Comparison"}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-texafab-slate text-white">
                <tr>
                  <th className="p-4 text-start">{language === "ar" ? "الميزة" : "Feature"}</th>
                  <th className="p-4 text-center">{language === "ar" ? "المجانية" : "Free"}</th>
                  <th className="p-4 text-center">{language === "ar" ? "الأساسية" : "Basic"}</th>
                  <th className="p-4 text-center bg-texafab-emerald">{language === "ar" ? "الاحترافية" : "Professional"}</th>
                  <th className="p-4 text-center">{language === "ar" ? "المؤسسات" : "Enterprise"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: language === "ar" ? "المستخدمين" : "Users", free: "1", basic: "3", pro: "10", enterprise: "∞" },
                  { feature: language === "ar" ? "الرولونات" : "Rolls", free: "100", basic: "500", pro: "∞", enterprise: "∞" },
                  { feature: language === "ar" ? "نقاط البيع" : "POS", free: "1", basic: "2", pro: "∞", enterprise: "∞" },
                  { feature: language === "ar" ? "المتجر الإلكتروني" : "E-commerce", free: "—", basic: language === "ar" ? "100 منتج" : "100 products", pro: "∞", enterprise: "∞" },
                  { feature: language === "ar" ? "المحاسبة" : "Accounting", free: "—", basic: language === "ar" ? "أساسي" : "Basic", pro: language === "ar" ? "كامل" : "Full", enterprise: language === "ar" ? "مخصص" : "Custom" },
                  { feature: language === "ar" ? "التقارير" : "Reports", free: language === "ar" ? "محدود" : "Limited", basic: language === "ar" ? "أساسي" : "Basic", pro: language === "ar" ? "متقدم" : "Advanced", enterprise: language === "ar" ? "مخصص" : "Custom" },
                  { feature: language === "ar" ? "الدعم" : "Support", free: language === "ar" ? "بريد" : "Email", basic: language === "ar" ? "مباشر" : "Live", pro: language === "ar" ? "أولوية" : "Priority", enterprise: "24/7" },
                  { feature: language === "ar" ? "تكامل API" : "API", free: "—", basic: "—", pro: language === "ar" ? "أساسي" : "Basic", pro: language === "ar" ? "أساسي" : "Basic", enterprise: language === "ar" ? "كامل" : "Full" },
                  { feature: language === "ar" ? "الاستضافة" : "Hosting", free: language === "ar" ? "مشترك" : "Shared", basic: language === "ar" ? "مشترك" : "Shared", pro: language === "ar" ? "مشترك" : "Shared", enterprise: language === "ar" ? "خاص" : "Dedicated" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-200">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.free}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.basic}</td>
                    <td className="p-4 text-center bg-texafab-emerald/5 dark:bg-texafab-emerald/10 font-semibold text-texafab-emerald">{row.pro}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-5 bg-gray-50 dark:bg-gray-800 border-0">
                <h3 className="font-bold text-texafab-slate dark:text-white flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-texafab-emerald flex-shrink-0 mt-0.5" />
                  <span>{language === "ar" ? faq.questionAr : faq.questionEn}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 ps-7">
                  {language === "ar" ? faq.answerAr : faq.answerEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-texafab-emerald via-teal-600 to-texafab-emerald text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {language === "ar" 
              ? "ابدأ مجاناً اليوم أو تواصل معنا للحصول على استشارة مجانية لاختيار الباقة المناسبة."
              : "Start free today or contact us for a free consultation to choose the right plan."
            }
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={() => setIsTrialModalOpen(true)}
              className="h-12 px-8 bg-white text-texafab-emerald hover:bg-white/90 font-semibold rounded-xl shadow-lg"
            >
              {language === "ar" ? "ابدأ تجربة مجانية" : "Start Free Trial"}
              <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/contact"}
              className="h-12 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl"
            >
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Trial Signup Modal */}
      <TrialSignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </div>
  );
}

export default function PricingPage() {
  return <PricingContent />;
}
