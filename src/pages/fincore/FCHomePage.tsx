import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { NetworkBackground } from "@/components/fincore/NetworkBackground";
import { FloatingAgentButton } from "@/components/fincore/FloatingAgentButton";
import { ExchangeRateTicker } from "@/components/fincore/ExchangeRateTicker";
import { FCLogo } from "@/components/fincore/FCLogo";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SEOHead } from "@/components/seo/SEOHead";
import { CallbackWidget } from "@/components/widgets/CallbackWidget";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, Shield, Globe, Zap, Lock, 
  Building2, CreditCard, RefreshCcw, BarChart3, Users, 
  CheckCircle2, Wallet, Send, Landmark, PiggyBank,
  FileCheck, Clock, TrendingUp, BadgeCheck, Server
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Next-Generation",
    heroTitleHighlight: "Core Banking Platform",
    heroSubtitle: "Enterprise-grade banking infrastructure for financial institutions, exchange houses, and remittance companies. Built for scale, security, and compliance.",
    requestDemo: "Request Demo",
    exploreSolutions: "Explore Solutions",
    startFree: "Start Free",
    login: "Login",
    slogan: "The Core of Finance • The Soul of Tech",
    trustedBy: "Trusted by leading financial institutions worldwide",
    
    // Stats
    transactionsProcessed: "Transactions Processed",
    countriesServed: "Countries Served",
    uptime: "Uptime SLA",
    currenciesSupported: "Currencies",
    
    // Features Section
    featuresTitle: "Complete Banking Infrastructure",
    featuresSubtitle: "Everything you need to run modern financial operations",
    
    feature1Title: "Core Banking System",
    feature1Desc: "Full-featured CBS with real-time processing, multi-currency support, and seamless integration capabilities.",
    
    feature2Title: "Exchange & Treasury",
    feature2Desc: "Automated FX operations, real-time rates, position management, and comprehensive treasury tools.",
    
    feature3Title: "Remittance Network",
    feature3Desc: "Global money transfer infrastructure with SWIFT, SEPA, and correspondent banking integration.",
    
    feature4Title: "Compliance & KYC",
    feature4Desc: "Built-in AML screening, sanctions checking, KYC workflows, and regulatory reporting.",
    
    feature5Title: "Digital Channels",
    feature5Desc: "White-label mobile banking, internet banking, and API-first architecture for fintech partnerships.",
    
    feature6Title: "Analytics & Reporting",
    feature6Desc: "Real-time dashboards, regulatory reports, and AI-powered insights for better decision making.",
    
    // Solutions Section
    solutionsTitle: "Tailored Solutions",
    solutionsSubtitle: "Purpose-built modules for every financial vertical",
    
    solution1Title: "Commercial Banks",
    solution1Desc: "Full-stack digital banking platform with retail, corporate, and SME banking capabilities.",
    
    solution2Title: "Exchange Houses",
    solution2Desc: "Specialized currency exchange management with real-time rates and compliance tools.",
    
    solution3Title: "Remittance Companies",
    solution3Desc: "End-to-end money transfer platform with global payout network integration.",
    
    solution4Title: "Microfinance",
    solution4Desc: "Loan management, savings products, and mobile money for financial inclusion.",
    
    // Trust Section
    trustTitle: "Built for Enterprise",
    trustSubtitle: "Security, compliance, and reliability at every layer",
    
    trust1Title: "Bank-Grade Security",
    trust1Desc: "End-to-end encryption, HSM integration, and SOC 2 Type II certified infrastructure.",
    
    trust2Title: "Global Compliance",
    trust2Desc: "PCI DSS Level 1, ISO 27001, GDPR compliant, and ready for local regulatory requirements.",
    
    trust3Title: "99.99% Uptime",
    trust3Desc: "Multi-region deployment, automatic failover, and 24/7 NOC monitoring.",
    
    trust4Title: "Scalable Architecture",
    trust4Desc: "Cloud-native platform handling millions of transactions with sub-second latency.",
    
    // Exchange & Remittance Features
    exchangeTitle: "Complete Financial Solutions",
    exchangeSubtitle: "Everything you need to manage exchange, remittance, and digital wallets",
    
    ex1Title: "Instant Exchange",
    ex1Desc: "Real-time currency exchange with competitive rates and instant profit calculation.",
    
    ex2Title: "Global Remittance",
    ex2Desc: "Send and receive international transfers with real-time tracking and instant notifications.",
    
    ex3Title: "Digital Wallets",
    ex3Desc: "Create and manage multi-currency wallets with seamless deposits and withdrawals.",
    
    ex4Title: "Cash Management",
    ex4Desc: "Complete treasury management with automated daily reconciliation and detailed reports.",
    
    // Cloud Advantage Section
    cloudTitle: "Why Choose Cloud?",
    cloudSubtitle: "Modern infrastructure that saves you money and headaches",
    
    cloud1Title: "5-Minute Setup",
    cloud1Desc: "No installation required. Access from any browser instantly.",
    
    cloud2Title: "Zero Hardware",
    cloud2Desc: "No servers, no expensive routers, no firewalls to buy or maintain.",
    
    cloud3Title: "Bank-Grade Security",
    cloud3Desc: "End-to-end encryption, hosted in Hetzner (Germany), with AWS backups.",
    
    cloud4Title: "Work Anywhere",
    cloud4Desc: "Secure access from any device, anywhere in the world.",

    // Cost Comparison
    compareTitle: "Traditional vs FinCore",
    compareSubtitle: "See how much you save by switching to modern cloud banking",
    
    costTraditional: "Traditional Software",
    costFinCore: "FinCore Cloud",
    
    cmpHardware: "Servers & Hardware",
    cmpHardwareTrad: "$5,000+ upfront",
    cmpHardwareFin: "$0 (Included)",
    
    cmpMaintenance: "IT Maintenance",
    cmpMaintenanceTrad: "$1,000+/month",
    cmpMaintenanceFin: "$0 (Included)",
    
    cmpSecurity: "Security & Backups",
    cmpSecurityTrad: "Vulnerable & Manual",
    cmpSecurityFin: "Automated & Certified",
    
    cmpUpdates: "Updates",
    cmpUpdatesTrad: "Paid & Disruptive",
    cmpUpdatesFin: "Free & Instant",

    // Pricing Section
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Choose the plan that fits your institution's needs",
    
    monthly: "Monthly",
    annually: "Annually",
    savePercent: "Save 20%",
    
    // Plan Headers
    starterBadge: "For Single Branch",
    professionalBadge: "The Ambitious Banker",
    enterpriseBadge: "Large Corporations & Groups",
    
    // Starter Plan - Basic
    starterName: "Basic Plan",
    starterDesc: "For small exchange houses and startups",
    starterPrice: "$99",
    starterPeriod: "/month",
    
    // Starter - Business Management
    starterBizTitle: "💰 Business Management",
    starterBizFeatures: [
      "Manage 1 company",
      "3 users",
      "2 POS terminals",
      "Basic employee management",
    ],
    
    // Starter - Digital Presence
    starterDigitalTitle: "🌐 Digital Presence",
    starterDigitalFeatures: [
      "Shared Hetzner hosting",
      "E-commerce store (100 products)",
      "Free SSL certificate",
    ],
    
    // Starter - Expected ROI
    starterRoiTitle: "💵 Expected ROI",
    starterRoiSales: "Sales increase",
    starterRoiSalesValue: "$2,000 - $4,000/year",
    starterRoiRetention: "Customer retention",
    starterRoiRetentionValue: "$1,500 - $4,000/year",
    starterRoiProfit: "Annual net profit",
    starterRoiProfitValue: "+$6,800 - $13,800",
    starterRoiPercent: "573% - 1,162%",
    starterRoiLabel: "ROI",
    
    // Professional Plan
    professionalName: "Professional Plan",
    professionalDesc: "For growing financial institutions",
    professionalPrice: "$499",
    professionalPeriod: "/month",
    
    // Professional - Business Management
    profBizTitle: "💰 Business Management",
    profBizFeatures: [
      "Manage 2 companies",
      "10 users",
      "Unlimited POS terminals",
      "Advanced employee management",
      "Agents & distributors management",
    ],
    
    // Professional - Digital Presence
    profDigitalTitle: "🌐 Digital Presence",
    profDigitalFeatures: [
      "Hetzner dedicated hosting",
      "Free website for 1 year 🎁",
      "E-commerce store (unlimited)",
      "Custom SSL + dedicated domain",
    ],
    
    // Professional - AI Features
    profAiTitle: "🤖 Artificial Intelligence",
    profAiFeatures: [
      "Weekly smart reports",
    ],
    
    // Professional - Expected ROI
    profRoiTitle: "💵 Expected ROI",
    profRoiSales: "Sales increase",
    profRoiSalesValue: "$10,000 - $15,000/year",
    profRoiRetention: "Customer retention",
    profRoiRetentionValue: "$8,000 - $15,000/year",
    profRoiProfit: "Annual net profit",
    profRoiProfitValue: "+$12,000 - $24,000",
    profRoiPercent: "200% - 400%",
    
    // Professional - Mobile App
    profMobileTitle: "📱 Mobile Application",
    profMobileFeatures: [
      "Customer mobile app",
      "Push notifications",
      "Mobile payments",
    ],
    
    mostPopular: "Most Popular",
    
    // Enterprise Plan
    enterpriseName: "Enterprise Plan",
    enterpriseDesc: "For large banks and financial groups",
    enterprisePrice: "$999",
    enterprisePeriod: "/month",
    
    // Enterprise - Business Management
    entBizTitle: "💰 Business Management",
    entBizFeatures: [
      "Manage unlimited companies",
      "Unlimited users",
      "Unlimited POS terminals",
      "Advanced employee management",
      "Advanced agents system",
      "Dedicated account manager",
    ],
    
    // Enterprise - Digital Presence
    entDigitalTitle: "🌐 Digital Presence",
    entDigitalFeatures: [
      "Hetzner Premium dedicated hosting",
      "Free permanent website 🎁",
      "Custom design with company colors",
      "Advanced e-commerce store",
      "99.9% SLA guarantee",
    ],
    
    // Enterprise - AI Features
    entAiTitle: "🤖 Artificial Intelligence",
    entAiFeatures: [
      "AI analytics 🔮",
      "Automatic AI data entry",
      "Smart sales predictions",
      "Real-time advanced reports",
    ],
    
    // Enterprise - Mobile Apps
    entMobileTitle: "📱 Mobile Applications",
    entMobileFeatures: [
      "Customer mobile app",
      "Manager mobile app",
      "Admin dashboard app",
      "Custom branding",
    ],
    
    // Enterprise - Expected ROI
    entRoiTitle: "💵 Expected ROI",
    entRoiSales: "Sales increase",
    entRoiSalesValue: "$30,000 - $60,000/year",
    entRoiRetention: "Customer retention",
    entRoiRetentionValue: "$25,000 - $50,000/year",
    entRoiProfit: "Annual net profit",
    entRoiProfitValue: "+$43,000 - $98,000",
    entRoiPercent: "358% - 817%",
    
    contactSales: "Contact Sales",
    getStarted: "Get Started",
    viewAllPlans: "View All Plans & Features",
    
    // CTA Section
    ctaTitle: "Ready to Transform Your Financial Operations?",
    ctaSubtitle: "Join leading institutions that trust FinCore for their core banking needs.",
    ctaButton: "Schedule a Demo",
    ctaSecondary: "Contact Sales",
  },
  ar: {
    heroTitle: "منصة بنكية أساسية",
    heroTitleHighlight: "من الجيل التالي",
    heroSubtitle: "بنية تحتية بنكية للمؤسسات المالية وشركات الصرافة والحوالات. مصممة للتوسع والأمان والامتثال.",
    requestDemo: "اطلب عرضاً",
    exploreSolutions: "استكشف الحلول",
    startFree: "ابدأ مجاناً",
    login: "تسجيل الدخول",
    slogan: "جوهر المال • روح التقنية",
    trustedBy: "موثوق به من قبل المؤسسات المالية الرائدة حول العالم",
    
    transactionsProcessed: "معاملة تمت معالجتها",
    countriesServed: "دولة يتم خدمتها",
    uptime: "ضمان التشغيل",
    currenciesSupported: "عملة مدعومة",
    
    featuresTitle: "بنية تحتية بنكية متكاملة",
    featuresSubtitle: "كل ما تحتاجه لتشغيل عمليات مالية حديثة",
    
    feature1Title: "النظام البنكي الأساسي",
    feature1Desc: "نظام CBS متكامل مع معالجة فورية ودعم متعدد العملات وإمكانيات تكامل سلسة.",
    
    feature2Title: "الصرافة والخزينة",
    feature2Desc: "عمليات FX آلية، أسعار فورية، إدارة المراكز، وأدوات خزينة شاملة.",
    
    feature3Title: "شبكة الحوالات",
    feature3Desc: "بنية تحتية عالمية للتحويلات مع تكامل SWIFT و SEPA والبنوك المراسلة.",
    
    feature4Title: "الامتثال والتحقق",
    feature4Desc: "فحص AML مدمج، التحقق من العقوبات، سير عمل KYC، والتقارير التنظيمية.",
    
    feature5Title: "القنوات الرقمية",
    feature5Desc: "خدمات مصرفية عبر الجوال والإنترنت قابلة للتخصيص وبنية API-first للشراكات.",
    
    feature6Title: "التحليلات والتقارير",
    feature6Desc: "لوحات معلومات فورية، تقارير تنظيمية، ورؤى مدعومة بالذكاء الاصطناعي.",
    
    solutionsTitle: "حلول مخصصة",
    solutionsSubtitle: "وحدات مصممة خصيصاً لكل قطاع مالي",
    
    solution1Title: "البنوك التجارية",
    solution1Desc: "منصة مصرفية رقمية متكاملة مع قدرات التجزئة والشركات والمنشآت الصغيرة.",
    
    solution2Title: "شركات الصرافة",
    solution2Desc: "إدارة متخصصة لتبادل العملات مع أسعار فورية وأدوات الامتثال.",
    
    solution3Title: "شركات الحوالات",
    solution3Desc: "منصة تحويل أموال شاملة مع تكامل شبكة الدفع العالمية.",
    
    solution4Title: "التمويل الأصغر",
    solution4Desc: "إدارة القروض، منتجات الادخار، والأموال المتنقلة للشمول المالي.",
    
    trustTitle: "مصمم للمؤسسات",
    trustSubtitle: "الأمان والامتثال والموثوقية في كل طبقة",
    
    trust1Title: "أمان بمستوى البنوك",
    trust1Desc: "تشفير شامل، تكامل HSM، وبنية تحتية معتمدة من SOC 2 Type II.",
    
    trust2Title: "امتثال عالمي",
    trust2Desc: "PCI DSS Level 1، ISO 27001، متوافق مع GDPR، وجاهز للمتطلبات التنظيمية المحلية.",
    
    trust3Title: "99.99% وقت التشغيل",
    trust3Desc: "نشر متعدد المناطق، تجاوز الفشل التلقائي، ومراقبة NOC على مدار الساعة.",
    
    trust4Title: "بنية قابلة للتوسع",
    trust4Desc: "منصة سحابية تعالج ملايين المعاملات بزمن استجابة أقل من ثانية.",
    
    // Exchange & Remittance Features
    exchangeTitle: "حلول مالية متكاملة",
    exchangeSubtitle: "كل ما تحتاجه لإدارة الصرافة والحوالات والمحافظ الرقمية",
    
    ex1Title: "صرافة فورية",
    ex1Desc: "صرف عملات لحظي بأسعار تنافسية وحساب فوري للأرباح.",
    
    ex2Title: "حوالات دولية",
    ex2Desc: "إرسال واستقبال التحويلات الدولية مع تتبع لحظي وإشعارات فورية.",
    
    ex3Title: "المحافظ الرقمية",
    ex3Desc: "إنشاء وإدارة محافظ متعددة العملات مع إيداع وسحب سلس.",
    
    ex4Title: "إدارة النقد",
    ex4Desc: "إدارة خزينة كاملة مع تسوية يومية آلية وتقارير تفصيلية.",
    
    // Cloud Advantage Section
    cloudTitle: "لماذا تختار السحابة؟",
    cloudSubtitle: "بنية تحتية حديثة توفر عليك المال وعناء الإدارة",
    
    cloud1Title: "إعداد في 5 دقائق",
    cloud1Desc: "لا يتطلب تثبيتاً. وصول فوري من أي متصفح.",
    
    cloud2Title: "بدون أجهزة",
    cloud2Desc: "لا سيرفرات، لا راوترات باهظة، لا جدران حماية للشراء أو الصيانة.",
    
    cloud3Title: "أمان بمستوى البنوك",
    cloud3Desc: "تشفير شامل، استضافة في Hetzner (ألمانيا)، مع نسخ احتياطي AWS.",
    
    cloud4Title: "اعمل من أي مكان",
    cloud4Desc: "وصول آمن من أي جهاز، وفي أي مكان في العالم.",

    // Cost Comparison
    compareTitle: "البرامج التقليدية مقابل FinCore",
    compareSubtitle: "شاهد كم ستوفر عند الانتقال إلى البنوك السحابية الحديثة",
    
    costTraditional: "البرامج التقليدية",
    costFinCore: "سحابة FinCore",
    
    cmpHardware: "السيرفرات والأجهزة",
    cmpHardwareTrad: "$5,000+ مقدماً",
    cmpHardwareFin: "$0 (مشمول)",
    
    cmpMaintenance: "صيانة تقنية",
    cmpMaintenanceTrad: "$1,000+/شهرياً",
    cmpMaintenanceFin: "$0 (مشمول)",
    
    cmpSecurity: "الأمان والنسخ الاحتياطي",
    cmpSecurityTrad: "يدوي وعرضة للخطر",
    cmpSecurityFin: "آلي ومعتمد",
    
    cmpUpdates: "التحديثات",
    cmpUpdatesTrad: "مدفوعة ومربكة",
    cmpUpdatesFin: "مجانية وفورية",

    // Pricing Section
    pricingTitle: "أسعار بسيطة وشفافة",
    pricingSubtitle: "اختر الخطة التي تناسب احتياجات مؤسستك",
    
    monthly: "شهري",
    annually: "سنوي",
    savePercent: "وفر 20%",
    
    // Plan Headers
    starterBadge: "الشركة الخاصة الواحدة",
    professionalBadge: "رائد الأعمال الطموح",
    enterpriseBadge: "الشركات الكبيرة والمجموعات",
    
    // Starter Plan - Basic
    starterName: "الباقة الأساسية",
    starterDesc: "للشركات الصغيرة",
    starterPrice: "$99",
    starterPeriod: "/شهر",
    
    // Starter - Business Management
    starterBizTitle: "💰 إدارة الأعمال",
    starterBizFeatures: [
      "إدارة شركة واحدة",
      "3 مستخدمين",
      "نقطتي بيع",
      "شؤون الموظفين الأساسية",
    ],
    
    // Starter - Digital Presence
    starterDigitalTitle: "🌐 التواجد الرقمي",
    starterDigitalFeatures: [
      "استضافة Hetzner مشتركة",
      "المتجر الإلكتروني (100 منتج)",
      "شهادة SSL مجانية",
    ],
    
    // Starter - Expected ROI
    starterRoiTitle: "💵 العائد المتوقع",
    starterRoiSales: "زيادة المبيعات",
    starterRoiSalesValue: "$2,000 - $4,000/سنة",
    starterRoiRetention: "الاحتفاظ بالزبائن",
    starterRoiRetentionValue: "$1,500 - $4,000/سنة",
    starterRoiProfit: "صافي الربح السنوي",
    starterRoiProfitValue: "+$6,800 - $13,800",
    starterRoiPercent: "573% - 1,162%",
    starterRoiLabel: "ROI",
    
    // Professional Plan
    professionalName: "الباقة الاحترافية",
    professionalDesc: "للشركات المتوسطة",
    professionalPrice: "$499",
    professionalPeriod: "/شهر",
    
    // Professional - Business Management
    profBizTitle: "💰 إدارة الأعمال",
    profBizFeatures: [
      "إدارة شركتين",
      "10 مستخدمين",
      "نقاط بيع غير محدودة",
      "شؤون الموظفين المتقدمة",
      "إدارة الوكلاء والموزعين",
    ],
    
    // Professional - Digital Presence
    profDigitalTitle: "🌐 التواجد الرقمي",
    profDigitalFeatures: [
      "استضافة Hetzner مخصصة",
      "موقع إلكتروني مجاني لمدة سنة 🎁",
      "المتجر الإلكتروني (غير محدود)",
      "شهادة SSL + دومين مخصص",
    ],
    
    // Professional - AI Features
    profAiTitle: "🤖 الذكاء الاصطناعي",
    profAiFeatures: [
      "تقارير ذكية أسبوعية",
    ],
    
    // Professional - Expected ROI
    profRoiTitle: "💵 العائد المتوقع",
    profRoiSales: "زيادة المبيعات",
    profRoiSalesValue: "$10,000 - $15,000/سنة",
    profRoiRetention: "الاحتفاظ بالزبائن",
    profRoiRetentionValue: "$8,000 - $15,000/سنة",
    profRoiProfit: "صافي الربح السنوي",
    profRoiProfitValue: "+$12,000 - $24,000",
    profRoiPercent: "200% - 400%",
    
    // Professional - Mobile App
    profMobileTitle: "📱 تطبيق الموبايل",
    profMobileFeatures: [
      "تطبيق موبايل للعملاء",
      "إشعارات فورية",
      "الدفع عبر الموبايل",
    ],
    
    mostPopular: "الأكثر طلباً",
    
    // Enterprise Plan
    enterpriseName: "باقة المؤسسات",
    enterpriseDesc: "للمؤسسات الكبيرة",
    enterprisePrice: "$999",
    enterprisePeriod: "/شهر",
    
    // Enterprise - Business Management
    entBizTitle: "💰 إدارة الأعمال",
    entBizFeatures: [
      "إدارة عدد غير محدود من الشركات",
      "مستخدمين غير محدود",
      "نقاط بيع غير محدودة",
      "شؤون الموظفين الموسعة",
      "نظام الوكلاء المتقدم",
      "مدير حساب مخصص",
    ],
    
    // Enterprise - Digital Presence
    entDigitalTitle: "🌐 التواجد الرقمي",
    entDigitalFeatures: [
      "استضافة Hetzner Premium مخصصة",
      "موقع إلكتروني مجاني دائماً 🎁",
      "تخصيص التصميم بألوان الشركة",
      "المتجر الإلكتروني المتقدم",
      "SLA 99.9%",
    ],
    
    // Enterprise - AI Features
    entAiTitle: "🤖 الذكاء الاصطناعي",
    entAiFeatures: [
      "تحليلات الذكاء الاصطناعي 🔮",
      "الإدخال الآلي بالذكاء الاصطناعي",
      "تنبؤات المبيعات الذكية",
      "تقارير لحظية ومتقدمة",
    ],
    
    // Enterprise - Mobile Apps
    entMobileTitle: "📱 تطبيقات الموبايل",
    entMobileFeatures: [
      "تطبيق موبايل للعملاء",
      "تطبيق موبايل للمدراء",
      "لوحة تحكم للمسؤول",
      "علامة تجارية مخصصة",
    ],
    
    // Enterprise - Expected ROI
    entRoiTitle: "💵 العائد المتوقع",
    entRoiSales: "زيادة المبيعات",
    entRoiSalesValue: "$30,000 - $60,000/سنة",
    entRoiRetention: "الاحتفاظ بالزبائن",
    entRoiRetentionValue: "$25,000 - $50,000/سنة",
    entRoiProfit: "صافي الربح السنوي",
    entRoiProfitValue: "+$43,000 - $98,000",
    entRoiPercent: "358% - 817%",
    
    contactSales: "تواصل مع المبيعات",
    getStarted: "ابدأ الآن",
    viewAllPlans: "عرض جميع الخطط والميزات",
    
    ctaTitle: "هل أنت مستعد لتحويل عملياتك المالية؟",
    ctaSubtitle: "انضم إلى المؤسسات الرائدة التي تثق بـ FinCore لاحتياجاتها البنكية.",
    ctaButton: "احجز عرضاً توضيحياً",
    ctaSecondary: "تواصل مع المبيعات",
  },
  ru: {
    heroTitle: "Банковская платформа",
    heroTitleHighlight: "нового поколения",
    heroSubtitle: "Корпоративная банковская инфраструктура для финансовых учреждений, обменных пунктов и компаний денежных переводов.",
    requestDemo: "Запросить демо",
    exploreSolutions: "Решения",
    trustedBy: "Нам доверяют ведущие финансовые учреждения мира",
    
    transactionsProcessed: "Обработано транзакций",
    countriesServed: "Стран обслуживания",
    uptime: "SLA по времени работы",
    currenciesSupported: "Поддерживаемых валют",
    
    featuresTitle: "Полная банковская инфраструктура",
    featuresSubtitle: "Всё необходимое для современных финансовых операций",
    
    feature1Title: "Основная банковская система",
    feature1Desc: "Полнофункциональная CBS с обработкой в реальном времени и мультивалютной поддержкой.",
    
    feature2Title: "Обмен и казначейство",
    feature2Desc: "Автоматизированные FX-операции, курсы в реальном времени и инструменты казначейства.",
    
    feature3Title: "Сеть переводов",
    feature3Desc: "Глобальная инфраструктура переводов с интеграцией SWIFT, SEPA и банков-корреспондентов.",
    
    feature4Title: "Комплаенс и KYC",
    feature4Desc: "Встроенный AML-скрининг, проверка санкций, процессы KYC и регуляторная отчётность.",
    
    feature5Title: "Цифровые каналы",
    feature5Desc: "Мобильный и интернет-банкинг white-label, API-first архитектура для финтех-партнёрств.",
    
    feature6Title: "Аналитика и отчётность",
    feature6Desc: "Дашборды реального времени, регуляторные отчёты и AI-аналитика для принятия решений.",
    
    solutionsTitle: "Индивидуальные решения",
    solutionsSubtitle: "Специализированные модули для каждого финансового сегмента",
    
    solution1Title: "Коммерческие банки",
    solution1Desc: "Полноценная цифровая банковская платформа для розничного и корпоративного банкинга.",
    
    solution2Title: "Обменные пункты",
    solution2Desc: "Специализированное управление обменом валют с курсами в реальном времени.",
    
    solution3Title: "Компании денежных переводов",
    solution3Desc: "Комплексная платформа переводов с интеграцией глобальной сети выплат.",
    
    solution4Title: "Микрофинансирование",
    solution4Desc: "Управление займами, сберегательные продукты и мобильные деньги.",
    
    trustTitle: "Создано для предприятий",
    trustSubtitle: "Безопасность, соответствие и надёжность на каждом уровне",
    
    trust1Title: "Банковская безопасность",
    trust1Desc: "Сквозное шифрование, интеграция HSM и сертификация SOC 2 Type II.",
    
    trust2Title: "Глобальный комплаенс",
    trust2Desc: "PCI DSS Level 1, ISO 27001, соответствие GDPR и готовность к местным требованиям.",
    
    trust3Title: "99.99% время работы",
    trust3Desc: "Мультирегиональное развёртывание и мониторинг NOC 24/7.",
    
    trust4Title: "Масштабируемая архитектура",
    trust4Desc: "Облачная платформа, обрабатывающая миллионы транзакций.",
    
    // Pricing Section
    pricingTitle: "Простые, прозрачные цены",
    pricingSubtitle: "Выберите план, подходящий для вашего учреждения",
    starterPlan: "Базовый", starterDesc: "Для малых обменников", starterPrice: "$99",
    businessPlan: "Профессиональный", businessDesc: "Для растущих финансовых учреждений", businessPrice: "$499", businessPopular: "Популярный",
    enterprisePlan: "Корпоративный", enterpriseDesc: "Для банков и финансовых групп", enterprisePrice: "$999",
    perMonth: "/месяц", getStarted: "Начать", contactSales: "Связаться", viewAllPlans: "Все планы",
    pf1: "1 компания", pf2: "3 польз. • 2 POS", pf3: "Базовый банковский модуль", pf4: "Email поддержка",
    pf5: "2 компании", pf6: "10 польз. • Безлимит POS", pf7: "Сайт бесплатно на год 🎁", pf8: "📱 Мобильное приложение", pf9: "AI отчеты еженедельно",
    pf10: "Безлимит компаний и польз.", pf11: "🌐 Сайт навсегда 🎁", pf12: "📱 Полный мобильный пакет (3 прил.)", pf13: "🤖 AI аналитика и прогнозы", pf14: "👔 Личный менеджер",
    profRoi: "Ожидаемый ROI", profRoiValue: "+$12,000 - $24,000/год", entRoi: "Ожидаемый ROI", entRoiValue: "+$43,000 - $98,000/год",
    
    ctaTitle: "Готовы трансформировать ваши финансовые операции?",
    ctaSubtitle: "Присоединяйтесь к ведущим учреждениям, доверяющим FinCore.",
    ctaButton: "Запланировать демо",
    ctaSecondary: "Связаться с продажами",
  },
  uk: {
    heroTitle: "Банківська платформа",
    heroTitleHighlight: "нового покоління",
    heroSubtitle: "Корпоративна банківська інфраструктура для фінансових установ, обмінних пунктів та компаній грошових переказів.",
    requestDemo: "Запросити демо",
    exploreSolutions: "Рішення",
    trustedBy: "Нам довіряють провідні фінансові установи світу",
    
    transactionsProcessed: "Оброблено транзакцій",
    countriesServed: "Країн обслуговування",
    uptime: "SLA по часу роботи",
    currenciesSupported: "Підтримуваних валют",
    
    featuresTitle: "Повна банківська інфраструктура",
    featuresSubtitle: "Все необхідне для сучасних фінансових операцій",
    
    feature1Title: "Основна банківська система",
    feature1Desc: "Повнофункціональна CBS з обробкою в реальному часі та мультивалютною підтримкою.",
    
    feature2Title: "Обмін і казначейство",
    feature2Desc: "Автоматизовані FX-операції, курси в реальному часі та інструменти казначейства.",
    
    feature3Title: "Мережа переказів",
    feature3Desc: "Глобальна інфраструктура переказів з інтеграцією SWIFT, SEPA та банків-кореспондентів.",
    
    feature4Title: "Комплаєнс та KYC",
    feature4Desc: "Вбудований AML-скринінг, перевірка санкцій, процеси KYC та регуляторна звітність.",
    
    feature5Title: "Цифрові канали",
    feature5Desc: "Мобільний та інтернет-банкінг white-label, API-first архітектура.",
    
    feature6Title: "Аналітика та звітність",
    feature6Desc: "Дашборди реального часу, регуляторні звіти та AI-аналітика.",
    
    solutionsTitle: "Індивідуальні рішення",
    solutionsSubtitle: "Спеціалізовані модулі для кожного фінансового сегменту",
    
    solution1Title: "Комерційні банки",
    solution1Desc: "Повноцінна цифрова банківська платформа для роздрібного та корпоративного банкінгу.",
    
    solution2Title: "Обмінні пункти",
    solution2Desc: "Спеціалізоване управління обміном валют з курсами в реальному часі.",
    
    solution3Title: "Компанії грошових переказів",
    solution3Desc: "Комплексна платформа переказів з інтеграцією глобальної мережі виплат.",
    
    solution4Title: "Мікрофінансування",
    solution4Desc: "Управління позиками, ощадні продукти та мобільні гроші.",
    
    trustTitle: "Створено для підприємств",
    trustSubtitle: "Безпека, відповідність та надійність на кожному рівні",
    
    trust1Title: "Банківська безпека",
    trust1Desc: "Наскрізне шифрування, інтеграція HSM та сертифікація SOC 2 Type II.",
    
    trust2Title: "Глобальний комплаєнс",
    trust2Desc: "PCI DSS Level 1, ISO 27001, відповідність GDPR.",
    
    trust3Title: "99.99% час роботи",
    trust3Desc: "Мультирегіональне розгортання та моніторинг NOC 24/7.",
    
    trust4Title: "Масштабована архітектура",
    trust4Desc: "Хмарна платформа, що обробляє мільйони транзакцій.",
    
    // Pricing Section
    pricingTitle: "Прості, прозорі ціни",
    pricingSubtitle: "Оберіть план, що підходить вашій установі",
    starterPlan: "Базовий", starterDesc: "Для малих обмінників", starterPrice: "$99",
    businessPlan: "Професійний", businessDesc: "Для зростаючих фінансових установ", businessPrice: "$499", businessPopular: "Популярний",
    enterprisePlan: "Корпоративний", enterpriseDesc: "Для банків та фінансових груп", enterprisePrice: "$999",
    perMonth: "/місяць", getStarted: "Почати", contactSales: "Зв'язатися", viewAllPlans: "Усі плани",
    pf1: "1 компанія", pf2: "3 корист. • 2 POS", pf3: "Базовий банківський модуль", pf4: "Email підтримка",
    pf5: "2 компанії", pf6: "10 корист. • Безліміт POS", pf7: "Сайт безкоштовно на рік 🎁", pf8: "📱 Мобільний додаток для клієнтів", pf9: "Щотижневі AI звіти",
    pf10: "Безліміт компаній та корист.", pf11: "🌐 Сайт назавжди 🎁", pf12: "📱 Повний мобільний пакет (3 дод.)", pf13: "🤖 AI аналітика та прогнози", pf14: "👔 Особистий менеджер",
    profRoi: "Очікуваний ROI", profRoiValue: "+$12,000 - $24,000/рік", entRoi: "Очікуваний ROI", entRoiValue: "+$43,000 - $98,000/рік",
    
    ctaTitle: "Готові трансформувати ваші фінансові операції?",
    ctaSubtitle: "Приєднуйтесь до провідних установ, що довіряють FinCore.",
    ctaButton: "Запланувати демо",
    ctaSecondary: "Зв'язатися з продажами",
  },
  tr: {
    heroTitle: "Yeni Nesil",
    heroTitleHighlight: "Çekirdek Bankacılık Platformu",
    heroSubtitle: "Finans kuruluşları, döviz büroları ve havale şirketleri için kurumsal bankacılık altyapısı.",
    requestDemo: "Demo İste",
    exploreSolutions: "Çözümleri Keşfet",
    trustedBy: "Dünya genelindeki önde gelen finans kuruluşları tarafından güveniliyor",
    
    transactionsProcessed: "İşlenen İşlem",
    countriesServed: "Ülke",
    uptime: "Çalışma Süresi SLA",
    currenciesSupported: "Para Birimi",
    
    featuresTitle: "Tam Bankacılık Altyapısı",
    featuresSubtitle: "Modern finansal operasyonlar için ihtiyacınız olan her şey",
    
    feature1Title: "Çekirdek Bankacılık Sistemi",
    feature1Desc: "Gerçek zamanlı işleme ve çok para birimli destek ile tam özellikli CBS.",
    
    feature2Title: "Döviz ve Hazine",
    feature2Desc: "Otomatik FX operasyonları, gerçek zamanlı kurlar ve hazine araçları.",
    
    feature3Title: "Havale Ağı",
    feature3Desc: "SWIFT, SEPA ve muhabir banka entegrasyonu ile küresel transfer altyapısı.",
    
    feature4Title: "Uyum ve KYC",
    feature4Desc: "Yerleşik AML taraması, yaptırım kontrolü, KYC iş akışları.",
    
    feature5Title: "Dijital Kanallar",
    feature5Desc: "Beyaz etiketli mobil bankacılık, internet bankacılığı ve API-first mimari.",
    
    feature6Title: "Analitik ve Raporlama",
    feature6Desc: "Gerçek zamanlı gösterge panoları ve AI destekli içgörüler.",
    
    solutionsTitle: "Özel Çözümler",
    solutionsSubtitle: "Her finansal sektör için özel modüller",
    
    solution1Title: "Ticari Bankalar",
    solution1Desc: "Perakende, kurumsal ve KOBİ bankacılığı için tam yığın dijital platform.",
    
    solution2Title: "Döviz Büroları",
    solution2Desc: "Gerçek zamanlı kurlar ve uyum araçları ile uzman döviz yönetimi.",
    
    solution3Title: "Havale Şirketleri",
    solution3Desc: "Küresel ödeme ağı entegrasyonu ile uçtan uca transfer platformu.",
    
    solution4Title: "Mikrofinans",
    solution4Desc: "Kredi yönetimi, tasarruf ürünleri ve finansal içerme için mobil para.",
    
    trustTitle: "Kurumsal İçin Tasarlandı",
    trustSubtitle: "Her katmanda güvenlik, uyum ve güvenilirlik",
    
    trust1Title: "Banka Düzeyinde Güvenlik",
    trust1Desc: "Uçtan uca şifreleme, HSM entegrasyonu ve SOC 2 Type II sertifikası.",
    
    trust2Title: "Küresel Uyum",
    trust2Desc: "PCI DSS Seviye 1, ISO 27001, GDPR uyumlu.",
    
    trust3Title: "%99.99 Çalışma Süresi",
    trust3Desc: "Çok bölgeli dağıtım ve 7/24 NOC izleme.",
    
    trust4Title: "Ölçeklenebilir Mimari",
    trust4Desc: "Milyonlarca işlemi işleyen bulut yerel platform.",
    
    // Pricing Section
    pricingTitle: "Basit, Şeffaf Fiyatlandırma",
    pricingSubtitle: "Kurumunuza uygun planı seçin",
    starterPlan: "Temel", starterDesc: "Küçük döviz büroları için", starterPrice: "$99",
    businessPlan: "Profesyonel", businessDesc: "Büyüyen finans kurumları için", businessPrice: "$499", businessPopular: "En Popüler",
    enterprisePlan: "Kurumsal", enterpriseDesc: "Bankalar ve finans grupları için", enterprisePrice: "$999",
    perMonth: "/ay", getStarted: "Başla", contactSales: "İletişim", viewAllPlans: "Tüm Planlar",
    pf1: "1 şirket", pf2: "3 kull. • 2 POS", pf3: "Temel bankacılık modülü", pf4: "E-posta Destek",
    pf5: "2 şirket", pf6: "10 kull. • Sınırsız POS", pf7: "1 yıl ücretsiz site 🎁", pf8: "📱 Müşteri Mobil Uygulama", pf9: "Haftalık AI Raporlar",
    pf10: "Sınırsız şirket ve kullanıcı", pf11: "🌐 Kalıcı ücretsiz site 🎁", pf12: "📱 Tam mobil paket (3 uygulama)", pf13: "🤖 AI Analitik ve Tahmin", pf14: "👔 Özel Müdür",
    profRoi: "Beklenen ROI", profRoiValue: "+$12,000 - $24,000/yıl", entRoi: "Beklenen ROI", entRoiValue: "+$43,000 - $98,000/yıl",
    
    ctaTitle: "Finansal Operasyonlarınızı Dönüştürmeye Hazır mısınız?",
    ctaSubtitle: "FinCore'a güvenen önde gelen kuruluşlara katılın.",
    ctaButton: "Demo Planla",
    ctaSecondary: "Satışla İletişim",
  },
  pl: {
    heroTitle: "Platforma bankowa",
    heroTitleHighlight: "nowej generacji",
    heroSubtitle: "Korporacyjna infrastruktura bankowa dla instytucji finansowych, kantorów i firm przekazów pieniężnych.",
    requestDemo: "Poproś o demo",
    exploreSolutions: "Zobacz rozwiązania",
    trustedBy: "Zaufały nam wiodące instytucje finansowe na świecie",
    
    transactionsProcessed: "Przetworzonych transakcji",
    countriesServed: "Obsługiwanych krajów",
    uptime: "SLA dostępności",
    currenciesSupported: "Walut",
    
    featuresTitle: "Kompletna infrastruktura bankowa",
    featuresSubtitle: "Wszystko czego potrzebujesz do nowoczesnych operacji finansowych",
    
    feature1Title: "System Core Banking",
    feature1Desc: "W pełni funkcjonalny CBS z przetwarzaniem w czasie rzeczywistym i obsługą wielu walut.",
    
    feature2Title: "Wymiana i skarbiec",
    feature2Desc: "Automatyczne operacje FX, kursy w czasie rzeczywistym i narzędzia skarbcowe.",
    
    feature3Title: "Sieć przekazów",
    feature3Desc: "Globalna infrastruktura transferów z integracją SWIFT, SEPA i banków korespondentów.",
    
    feature4Title: "Zgodność i KYC",
    feature4Desc: "Wbudowany screening AML, kontrola sankcji, procesy KYC i raportowanie regulacyjne.",
    
    feature5Title: "Kanały cyfrowe",
    feature5Desc: "Bankowość mobilna i internetowa white-label, architektura API-first.",
    
    feature6Title: "Analityka i raporty",
    feature6Desc: "Dashboardy w czasie rzeczywistym, raporty regulacyjne i wglądy AI.",
    
    solutionsTitle: "Dedykowane rozwiązania",
    solutionsSubtitle: "Specjalistyczne moduły dla każdego sektora finansowego",
    
    solution1Title: "Banki komercyjne",
    solution1Desc: "Pełnostackowa platforma bankowości cyfrowej dla detalicznej i korporacyjnej.",
    
    solution2Title: "Kantory",
    solution2Desc: "Specjalistyczne zarządzanie wymianą walut z kursami w czasie rzeczywistym.",
    
    solution3Title: "Firmy przekazów pieniężnych",
    solution3Desc: "Kompleksowa platforma transferów z integracją globalnej sieci wypłat.",
    
    solution4Title: "Mikrofinanse",
    solution4Desc: "Zarządzanie pożyczkami, produkty oszczędnościowe i pieniądz mobilny.",
    
    trustTitle: "Stworzone dla przedsiębiorstw",
    trustSubtitle: "Bezpieczeństwo, zgodność i niezawodność na każdym poziomie",
    
    trust1Title: "Bezpieczeństwo bankowe",
    trust1Desc: "Szyfrowanie end-to-end, integracja HSM i certyfikacja SOC 2 Type II.",
    
    trust2Title: "Globalna zgodność",
    trust2Desc: "PCI DSS Poziom 1, ISO 27001, zgodność z GDPR.",
    
    trust3Title: "99.99% dostępności",
    trust3Desc: "Wdrożenie wieloregionowe i monitoring NOC 24/7.",
    
    trust4Title: "Skalowalna architektura",
    trust4Desc: "Platforma chmurowa przetwarzająca miliony transakcji.",
    
    // Pricing Section
    pricingTitle: "Proste, Przejrzyste Ceny",
    pricingSubtitle: "Wybierz plan odpowiedni dla Twojej instytucji",
    starterPlan: "Podstawowy", starterDesc: "Dla małych kantorów", starterPrice: "$99",
    businessPlan: "Profesjonalny", businessDesc: "Dla rosnących instytucji finansowych", businessPrice: "$499", businessPopular: "Najpopularniejszy",
    enterprisePlan: "Korporacyjny", enterpriseDesc: "Dla banków i grup finansowych", enterprisePrice: "$999",
    perMonth: "/miesiąc", getStarted: "Rozpocznij", contactSales: "Kontakt", viewAllPlans: "Wszystkie Plany",
    pf1: "1 firma", pf2: "3 użyt. • 2 POS", pf3: "Podstawowy moduł bankowy", pf4: "Wsparcie Email",
    pf5: "2 firmy", pf6: "10 użyt. • Bez limitu POS", pf7: "Strona gratis na rok 🎁", pf8: "📱 Aplikacja dla klientów", pf9: "Tygodniowe raporty AI",
    pf10: "Bez limitu firm i użyt.", pf11: "🌐 Strona na zawsze 🎁", pf12: "📱 Pełny pakiet mobilny (3 aplik.)", pf13: "🤖 Analityka i prognozy AI", pf14: "👔 Dedykowany Manager",
    profRoi: "Oczekiwany ROI", profRoiValue: "+$12,000 - $24,000/rok", entRoi: "Oczekiwany ROI", entRoiValue: "+$43,000 - $98,000/rok",
    
    ctaTitle: "Gotowy do transformacji operacji finansowych?",
    ctaSubtitle: "Dołącz do wiodących instytucji, które ufają FinCore.",
    ctaButton: "Zaplanuj demo",
    ctaSecondary: "Skontaktuj się ze sprzedażą",
  },
  ro: {
    heroTitle: "Platformă bancară",
    heroTitleHighlight: "de nouă generație",
    heroSubtitle: "Infrastructură bancară enterprise pentru instituții financiare, case de schimb și companii de remitențe.",
    requestDemo: "Solicită demo",
    exploreSolutions: "Explorează soluțiile",
    trustedBy: "De încredere pentru instituții financiare de top din întreaga lume",
    
    transactionsProcessed: "Tranzacții procesate",
    countriesServed: "Țări deservite",
    uptime: "SLA timp de funcționare",
    currenciesSupported: "Monede",
    
    featuresTitle: "Infrastructură bancară completă",
    featuresSubtitle: "Tot ce ai nevoie pentru operațiuni financiare moderne",
    
    feature1Title: "Sistem Core Banking",
    feature1Desc: "CBS complet cu procesare în timp real și suport multi-monedă.",
    
    feature2Title: "Schimb și trezorerie",
    feature2Desc: "Operațiuni FX automatizate, cursuri în timp real și instrumente de trezorerie.",
    
    feature3Title: "Rețea de remitențe",
    feature3Desc: "Infrastructură globală de transfer cu integrare SWIFT, SEPA și bănci corespondente.",
    
    feature4Title: "Conformitate și KYC",
    feature4Desc: "Screening AML integrat, verificare sancțiuni, procese KYC și raportare.",
    
    feature5Title: "Canale digitale",
    feature5Desc: "Mobile banking și internet banking white-label, arhitectură API-first.",
    
    feature6Title: "Analiză și raportare",
    feature6Desc: "Dashboarduri în timp real, rapoarte de reglementare și insight-uri AI.",
    
    solutionsTitle: "Soluții personalizate",
    solutionsSubtitle: "Module specializate pentru fiecare sector financiar",
    
    solution1Title: "Bănci comerciale",
    solution1Desc: "Platformă bancară digitală completă pentru retail și corporate.",
    
    solution2Title: "Case de schimb",
    solution2Desc: "Management specializat al schimbului valutar cu cursuri în timp real.",
    
    solution3Title: "Companii de remitențe",
    solution3Desc: "Platformă completă de transfer cu integrare rețea globală de plăți.",
    
    solution4Title: "Microfinanțare",
    solution4Desc: "Management credite, produse de economisire și bani mobili.",
    
    trustTitle: "Construit pentru enterprise",
    trustSubtitle: "Securitate, conformitate și fiabilitate la fiecare nivel",
    
    trust1Title: "Securitate bancară",
    trust1Desc: "Criptare end-to-end, integrare HSM și certificare SOC 2 Type II.",
    
    trust2Title: "Conformitate globală",
    trust2Desc: "PCI DSS Nivel 1, ISO 27001, conform GDPR.",
    
    trust3Title: "99.99% timp de funcționare",
    trust3Desc: "Deployment multi-regiune și monitorizare NOC 24/7.",
    
    trust4Title: "Arhitectură scalabilă",
    trust4Desc: "Platformă cloud nativă procesând milioane de tranzacții.",
    
    // Pricing Section
    pricingTitle: "Prețuri Simple și Transparente",
    pricingSubtitle: "Alege planul potrivit pentru instituția ta",
    starterPlan: "Basic", starterDesc: "Pentru case de schimb mici", starterPrice: "$99",
    businessPlan: "Profesional", businessDesc: "Pentru instituții financiare în creștere", businessPrice: "$499", businessPopular: "Cel Mai Popular",
    enterprisePlan: "Enterprise", enterpriseDesc: "Pentru bănci și grupuri financiare", enterprisePrice: "$999",
    perMonth: "/lună", getStarted: "Începe", contactSales: "Contact", viewAllPlans: "Toate Planurile",
    pf1: "1 companie", pf2: "3 util. • 2 POS", pf3: "Modul bancar de bază", pf4: "Suport Email",
    pf5: "2 companii", pf6: "10 util. • POS nelimitat", pf7: "Site gratuit 1 an 🎁", pf8: "📱 Aplicație mobilă pentru clienți", pf9: "Rapoarte AI săptămânale",
    pf10: "Companii și util. nelimitate", pf11: "🌐 Site gratuit permanent 🎁", pf12: "📱 Pachet mobil complet (3 aplic.)", pf13: "🤖 Analitică și predicții AI", pf14: "👔 Manager Dedicat",
    profRoi: "ROI așteptat", profRoiValue: "+$12,000 - $24,000/an", entRoi: "ROI așteptat", entRoiValue: "+$43,000 - $98,000/an",
    
    ctaTitle: "Pregătit să transformi operațiunile financiare?",
    ctaSubtitle: "Alătură-te instituțiilor de top care au încredere în FinCore.",
    ctaButton: "Programează demo",
    ctaSecondary: "Contactează vânzări",
  },
  it: {
    heroTitle: "Piattaforma bancaria",
    heroTitleHighlight: "di nuova generazione",
    heroSubtitle: "Infrastruttura bancaria enterprise per istituzioni finanziarie, uffici di cambio e società di rimesse.",
    requestDemo: "Richiedi demo",
    exploreSolutions: "Esplora soluzioni",
    trustedBy: "Affidato alle principali istituzioni finanziarie mondiali",
    
    transactionsProcessed: "Transazioni elaborate",
    countriesServed: "Paesi serviti",
    uptime: "SLA uptime",
    currenciesSupported: "Valute",
    
    featuresTitle: "Infrastruttura bancaria completa",
    featuresSubtitle: "Tutto ciò di cui hai bisogno per operazioni finanziarie moderne",
    
    feature1Title: "Sistema Core Banking",
    feature1Desc: "CBS completo con elaborazione in tempo reale e supporto multi-valuta.",
    
    feature2Title: "Cambio e tesoreria",
    feature2Desc: "Operazioni FX automatizzate, tassi in tempo reale e strumenti di tesoreria.",
    
    feature3Title: "Rete rimesse",
    feature3Desc: "Infrastruttura globale di trasferimento con integrazione SWIFT, SEPA e banche corrispondenti.",
    
    feature4Title: "Compliance e KYC",
    feature4Desc: "Screening AML integrato, verifica sanzioni, processi KYC e reporting.",
    
    feature5Title: "Canali digitali",
    feature5Desc: "Mobile banking e internet banking white-label, architettura API-first.",
    
    feature6Title: "Analytics e reporting",
    feature6Desc: "Dashboard in tempo reale, report regolamentari e insight AI.",
    
    solutionsTitle: "Soluzioni personalizzate",
    solutionsSubtitle: "Moduli specializzati per ogni settore finanziario",
    
    solution1Title: "Banche commerciali",
    solution1Desc: "Piattaforma bancaria digitale completa per retail e corporate.",
    
    solution2Title: "Uffici di cambio",
    solution2Desc: "Gestione specializzata del cambio valuta con tassi in tempo reale.",
    
    solution3Title: "Società di rimesse",
    solution3Desc: "Piattaforma completa di trasferimento con integrazione rete globale.",
    
    solution4Title: "Microfinanza",
    solution4Desc: "Gestione prestiti, prodotti di risparmio e denaro mobile.",
    
    trustTitle: "Costruito per l'enterprise",
    trustSubtitle: "Sicurezza, compliance e affidabilità ad ogni livello",
    
    trust1Title: "Sicurezza bancaria",
    trust1Desc: "Crittografia end-to-end, integrazione HSM e certificazione SOC 2 Type II.",
    
    trust2Title: "Compliance globale",
    trust2Desc: "PCI DSS Livello 1, ISO 27001, conforme GDPR.",
    
    trust3Title: "99.99% uptime",
    trust3Desc: "Deployment multi-regione e monitoraggio NOC 24/7.",
    
    trust4Title: "Architettura scalabile",
    trust4Desc: "Piattaforma cloud nativa che elabora milioni di transazioni.",
    
    // Pricing Section
    pricingTitle: "Prezzi Semplici e Trasparenti",
    pricingSubtitle: "Scegli il piano adatto alla tua istituzione",
    starterPlan: "Base", starterDesc: "Per piccoli uffici di cambio", starterPrice: "$99",
    businessPlan: "Professionale", businessDesc: "Per istituzioni finanziarie in crescita", businessPrice: "$499", businessPopular: "Più Popolare",
    enterprisePlan: "Enterprise", enterpriseDesc: "Per banche e gruppi finanziari", enterprisePrice: "$999",
    perMonth: "/mese", getStarted: "Inizia", contactSales: "Contatta", viewAllPlans: "Tutti i Piani",
    pf1: "1 azienda", pf2: "3 utenti • 2 POS", pf3: "Modulo bancario di base", pf4: "Supporto Email",
    pf5: "2 aziende", pf6: "10 utenti • POS illimitati", pf7: "Sito gratis 1 anno 🎁", pf8: "📱 App mobile per clienti", pf9: "Report AI settimanali",
    pf10: "Aziende e utenti illimitati", pf11: "🌐 Sito gratis per sempre 🎁", pf12: "📱 Pacchetto mobile completo (3 app)", pf13: "🤖 Analisi e previsioni AI", pf14: "👔 Manager Dedicato",
    profRoi: "ROI previsto", profRoiValue: "+$12,000 - $24,000/anno", entRoi: "ROI previsto", entRoiValue: "+$43,000 - $98,000/anno",
    
    ctaTitle: "Pronto a trasformare le tue operazioni finanziarie?",
    ctaSubtitle: "Unisciti alle istituzioni leader che si fidano di FinCore.",
    ctaButton: "Pianifica demo",
    ctaSecondary: "Contatta vendite",
  },
};

export default function FCHomePage() {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = React.useState(false);
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags
  const seoMeta = {
    en: {
      title: "FinCore Banking | Next-Generation Core Banking Platform",
      description: "Enterprise-grade core banking platform for financial institutions, exchange houses, and remittance companies. PCI DSS, ISO 27001, GDPR compliant.",
    },
    ar: {
      title: "فين كور | منصة بنكية أساسية من الجيل التالي",
      description: "منصة بنكية للمؤسسات المالية وشركات الصرافة والحوالات. متوافقة مع PCI DSS و ISO 27001 و GDPR.",
    },
  };

  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;

  const features = [
    { icon: Building2, title: t.feature1Title, desc: t.feature1Desc, color: "from-blue-500 to-indigo-600" },
    { icon: RefreshCcw, title: t.feature2Title, desc: t.feature2Desc, color: "from-amber-500 to-orange-600" },
    { icon: Send, title: t.feature3Title, desc: t.feature3Desc, color: "from-emerald-500 to-teal-600" },
    { icon: Shield, title: t.feature4Title, desc: t.feature4Desc, color: "from-red-500 to-rose-600" },
    { icon: CreditCard, title: t.feature5Title, desc: t.feature5Desc, color: "from-purple-500 to-violet-600" },
    { icon: BarChart3, title: t.feature6Title, desc: t.feature6Desc, color: "from-cyan-500 to-blue-600" },
  ];

  const solutions = [
    { icon: Landmark, title: t.solution1Title, desc: t.solution1Desc },
    { icon: Wallet, title: t.solution2Title, desc: t.solution2Desc },
    { icon: Send, title: t.solution3Title, desc: t.solution3Desc },
    { icon: PiggyBank, title: t.solution4Title, desc: t.solution4Desc },
  ];

  const trustFeatures = [
    { icon: Lock, title: t.trust1Title, desc: t.trust1Desc },
    { icon: FileCheck, title: t.trust2Title, desc: t.trust2Desc },
    { icon: Clock, title: t.trust3Title, desc: t.trust3Desc },
    { icon: Server, title: t.trust4Title, desc: t.trust4Desc },
  ];

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  return (
    <AnalyticsProvider>
      <ChatProvider>
        <SEOHead 
          title={currentSeo.title}
          description={currentSeo.description}
        />
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
          <FCHeader />
      
      {/* Exchange Rate Ticker */}
      <div className="fixed top-20 left-0 right-0 z-40">
        <ExchangeRateTicker />
      </div>
      
      {/* Hero Section - with World Map Background */}
      <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Network Background - Hexagonal Grid with Currencies - with overlay for better readability */}
        <NetworkBackground withOverlay={true} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 dark:bg-[#0D9488]/20 rounded-full mb-8 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <BadgeCheck className="w-4 h-4 text-[#0D9488]" />
                <span className="text-sm font-medium text-[#0D9488]">Enterprise Ready</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-slate-900 dark:text-white">{t.heroTitle}</span>
                <br />
                <span className="text-[#0D9488]">{t.heroTitleHighlight}</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t.heroSubtitle}
              </motion.p>
              
              {/* Slogan */}
              <motion.p
                className="text-sm text-[#0D9488] dark:text-emerald-400 font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                {t.slogan || translations.en.slogan}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link to="/fincore/register">
                  <Button className="bg-[#0D9488] dark:bg-[#0D9488] text-white dark:text-[#0A1628] hover:bg-[#0D9488]/90 dark:hover:bg-[#0D9488]/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    {t.startFree || translations.en.startFree}
                    <ArrowIcon className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Link to="/fincore/login">
                  <Button variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-8 py-6 text-base font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all">
                    {t.login || translations.en.login}
                  </Button>
                </Link>
                <Link to="/fincore/solutions">
                  <Button variant="ghost" className="text-slate-600 dark:text-slate-400 hover:text-[#0D9488] px-6 py-6 text-base font-medium rounded-xl">
                    {t.exploreSolutions}
                    <ArrowIcon className="w-4 h-4 ms-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#0A1628] dark:to-[#1a2d4a] rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                {/* Dashboard Preview */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 backdrop-blur border border-slate-100 dark:border-transparent">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0D9488] flex items-center justify-center">
                        <span className="text-white dark:text-[#0A1628] font-bold">F</span>
                      </div>
                      <span className="text-slate-900 dark:text-white font-semibold">FinCore Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-700/50 rounded-xl p-4 border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
                      <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Daily Volume</p>
                      <p className="text-slate-900 dark:text-white text-xl font-bold">$12.4M</p>
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs mt-1">
                        <TrendingUp className="w-3 h-3" />
                        +12.5%
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-700/50 rounded-xl p-4 border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
                      <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Transactions</p>
                      <p className="text-slate-900 dark:text-white text-xl font-bold">8,432</p>
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs mt-1">
                        <TrendingUp className="w-3 h-3" />
                        +8.3%
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="h-32 bg-slate-100 dark:bg-slate-700/30 rounded-xl flex items-end justify-around p-4 border border-slate-200 dark:border-transparent">
                    {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                      <div key={i} className="w-6 bg-gradient-to-t from-[#0D9488] to-[#14B8A6] rounded-t" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -end-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">All Systems Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "50B+", label: t.transactionsProcessed },
              { value: "45+", label: t.countriesServed },
              { value: "99.99%", label: t.uptime },
              { value: "150+", label: t.currenciesSupported },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[#0D9488] dark:text-[#0D9488] mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section - Bento Grid */}
      <section className="py-24 bg-[#FAF8F5] dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.featuresSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-[#0D9488]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.solutionsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.solutionsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-[#0D9488]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 end-0 w-40 h-40 bg-[#0D9488]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 dark:bg-[#0D9488] flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-[#0D9488] dark:text-[#0A1628]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {solution.desc}
                  </p>
                  <Link to="/fincore/solutions" className="inline-flex items-center gap-2 text-[#0D9488] font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-24 bg-slate-100 dark:bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.trustTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.trustSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange & Remittance Features Section */}
      <section className="py-24 bg-gradient-to-br from-[#0D9488]/5 via-white to-emerald-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold mb-6">
              <Wallet className="w-4 h-4" />
              {t.exchangeTitle || translations.en.exchangeTitle}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.exchangeTitle || translations.en.exchangeTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.exchangeSubtitle || translations.en.exchangeSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t.ex1Title || translations.en.ex1Title, 
                desc: t.ex1Desc || translations.en.ex1Desc, 
                icon: RefreshCcw, 
                color: "from-amber-500 to-orange-500",
                bgColor: "bg-amber-50 dark:bg-amber-900/20"
              },
              { 
                title: t.ex2Title || translations.en.ex2Title, 
                desc: t.ex2Desc || translations.en.ex2Desc, 
                icon: Send, 
                color: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20"
              },
              { 
                title: t.ex3Title || translations.en.ex3Title, 
                desc: t.ex3Desc || translations.en.ex3Desc, 
                icon: Wallet, 
                color: "from-emerald-500 to-teal-500",
                bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
              },
              { 
                title: t.ex4Title || translations.en.ex4Title, 
                desc: t.ex4Desc || translations.en.ex4Desc, 
                icon: PiggyBank, 
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`${item.bgColor} rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Advantage Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.cloudTitle || translations.en.cloudTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.cloudSubtitle || translations.en.cloudSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.cloud1Title || translations.en.cloud1Title, desc: t.cloud1Desc || translations.en.cloud1Desc, icon: Zap, color: "text-amber-500" },
              { title: t.cloud2Title || translations.en.cloud2Title, desc: t.cloud2Desc || translations.en.cloud2Desc, icon: Server, color: "text-blue-500" },
              { title: t.cloud3Title || translations.en.cloud3Title, desc: t.cloud3Desc || translations.en.cloud3Desc, icon: Shield, color: "text-emerald-500" },
              { title: t.cloud4Title || translations.en.cloud4Title, desc: t.cloud4Desc || translations.en.cloud4Desc, icon: Globe, color: "text-purple-500" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center hover:shadow-lg transition-all">
                <div className={`w-12 h-12 mx-auto rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-4 shadow-sm ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.compareTitle || translations.en.compareTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.compareSubtitle || translations.en.compareSubtitle}
            </p>
          </div>

          <div className="overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800 p-6 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
              <div className="col-span-1"></div>
              <div className="text-center text-slate-500 dark:text-slate-400">{t.costTraditional || translations.en.costTraditional}</div>
              <div className="text-center text-[#0D9488]">{t.costFinCore || translations.en.costFinCore}</div>
            </div>
            
            {[
              { label: t.cmpHardware || translations.en.cmpHardware, trad: t.cmpHardwareTrad || translations.en.cmpHardwareTrad, fin: t.cmpHardwareFin || translations.en.cmpHardwareFin },
              { label: t.cmpMaintenance || translations.en.cmpMaintenance, trad: t.cmpMaintenanceTrad || translations.en.cmpMaintenanceTrad, fin: t.cmpMaintenanceFin || translations.en.cmpMaintenanceFin },
              { label: t.cmpSecurity || translations.en.cmpSecurity, trad: t.cmpSecurityTrad || translations.en.cmpSecurityTrad, fin: t.cmpSecurityFin || translations.en.cmpSecurityFin },
              { label: t.cmpUpdates || translations.en.cmpUpdates, trad: t.cmpUpdatesTrad || translations.en.cmpUpdatesTrad, fin: t.cmpUpdatesFin || translations.en.cmpUpdatesFin },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors items-center">
                <div className="font-semibold text-slate-900 dark:text-white">{row.label}</div>
                <div className="text-center text-red-500 dark:text-red-400">{row.trad}</div>
                <div className="text-center font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 py-1 px-3 rounded-full mx-auto w-fit">
                  {row.fin}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold mb-6">
              <CreditCard className="w-4 h-4" />
              {t.pricingTitle}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.pricingTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.pricingSubtitle}
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-medium ${!isAnnual ? "text-[#0D9488]" : "text-slate-500"}`}>
                {t.monthly || translations.en.monthly}
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isAnnual ? "bg-[#0D9488]" : "bg-slate-300 dark:bg-slate-600"
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    isAnnual ? "end-1" : "start-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-[#0D9488]" : "text-slate-500"}`}>
                {t.annually || translations.en.annually}
              </span>
              {isAnnual && (
                <span className="bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold px-2 py-1 rounded-full">
                  {t.savePercent || translations.en.savePercent}
                </span>
              )}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Starter Plan - Basic */}
            <motion.div 
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-slate-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.starterName}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.starterDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isAnnual ? "$79" : t.starterPrice}
                  </span>
                  <span className="text-slate-500">{t.starterPeriod || "/month"}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-center">
                <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  {t.starterBadge || translations.en.starterBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.starterBizTitle || translations.en.starterBizTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.starterBizFeatures || translations.en.starterBizFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.starterDigitalTitle || translations.en.starterDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.starterDigitalFeatures || translations.en.starterDigitalFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  💵 {t.starterRoiTitle || translations.en.starterRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.starterRoiSales || translations.en.starterRoiSales}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{t.starterRoiSalesValue || translations.en.starterRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      ❤️ {t.starterRoiRetention || translations.en.starterRoiRetention}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{t.starterRoiRetentionValue || translations.en.starterRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.starterRoiProfit || translations.en.starterRoiProfit}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.starterRoiProfitValue || translations.en.starterRoiProfitValue}</span>
                    </div>
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                        {t.starterRoiLabel || "ROI"} {t.starterRoiPercent || translations.en.starterRoiPercent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-6 rounded-xl hover:bg-[#0D9488] hover:text-white hover:border-[#0D9488] transition-all">
                    {t.getStarted}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              className="relative bg-gradient-to-br from-[#0D9488] to-teal-600 rounded-3xl overflow-hidden border-2 border-[#0D9488] shadow-2xl transform lg:-translate-y-4 lg:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {/* Most Popular Badge */}
              <div className="absolute top-4 start-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                {t.businessPopular || t.mostPopular || "Most Popular"}
              </div>
              
              {/* Header */}
              <div className="bg-white/10 backdrop-blur p-6 text-center pt-12">
                <div className="w-14 h-14 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.professionalName || t.businessPlan}</h3>
                <p className="text-sm text-white/80 mt-1">{t.professionalDesc || t.businessDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-white/20">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {isAnnual ? "$399" : (t.professionalPrice || t.businessPrice)}
                  </span>
                  <span className="text-white/70">{t.professionalPeriod || "/month"}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-white/10 text-center">
                <span className="text-sm text-white/90 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  {t.professionalBadge || translations.en.professionalBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profBizTitle || translations.en.profBizTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.profBizFeatures || translations.en.profBizFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profDigitalTitle || translations.en.profDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.profDigitalFeatures || translations.en.profDigitalFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* AI Features */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profAiTitle || translations.en.profAiTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.profAiFeatures || translations.en.profAiFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile App */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profMobileTitle || translations.en.profMobileTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.profMobileFeatures || translations.en.profMobileFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-white/10 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profRoiTitle || translations.en.profRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.profRoiSales || translations.en.profRoiSales}
                    </span>
                    <span className="font-bold text-amber-300">{t.profRoiSalesValue || translations.en.profRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 flex items-center gap-2">
                      ❤️ {t.profRoiRetention || translations.en.profRoiRetention}
                    </span>
                    <span className="font-bold text-amber-300">{t.profRoiRetentionValue || translations.en.profRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{t.profRoiProfit || translations.en.profRoiProfit}</span>
                      <span className="font-bold text-emerald-300">{t.profRoiProfitValue || translations.en.profRoiProfitValue}</span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-bold">
                        ROI {t.profRoiPercent || translations.en.profRoiPercent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button className="w-full bg-white hover:bg-white/90 text-[#0D9488] py-6 rounded-xl font-bold text-lg shadow-lg">
                    {t.getStarted}
                    <ArrowIcon className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-700 dark:to-slate-600 p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.enterpriseName}</h3>
                <p className="text-sm text-white/80 mt-1">{t.enterpriseDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isAnnual ? "$799" : t.enterprisePrice}
                  </span>
                  <span className="text-slate-500">{t.enterprisePeriod || "/month"}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-center">
                <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t.enterpriseBadge || translations.en.enterpriseBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entBizTitle || translations.en.entBizTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.entBizFeatures || translations.en.entBizFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entDigitalTitle || translations.en.entDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.entDigitalFeatures || translations.en.entDigitalFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* AI Features */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entAiTitle || translations.en.entAiTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.entAiFeatures || translations.en.entAiFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile Apps */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entMobileTitle || translations.en.entMobileTitle}
                </h4>
                <ul className="space-y-3">
                  {(t.entMobileFeatures || translations.en.entMobileFeatures)?.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entRoiTitle || translations.en.entRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.entRoiSales || translations.en.entRoiSales}
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiSalesValue || translations.en.entRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      ❤️ {t.entRoiRetention || translations.en.entRoiRetention}
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiRetentionValue || translations.en.entRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.entRoiProfit || translations.en.entRoiProfit}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiProfitValue || translations.en.entRoiProfitValue}</span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-bold">
                        ROI {t.entRoiPercent || translations.en.entRoiPercent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button className="w-full bg-[#0A1628] dark:bg-[#0D9488] text-white dark:text-[#0A1628] py-6 rounded-xl font-semibold hover:opacity-90 transition-all">
                    {t.contactSales}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* View All Plans Link */}
          <div className="text-center mt-12">
            <Link to="/fincore/pricing">
              <Button variant="ghost" className="text-[#0D9488] hover:text-[#0D9488]/80 hover:bg-[#0D9488]/10 font-semibold">
                {t.viewAllPlans}
                <ArrowIcon className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#FAF8F5] to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/fincore/contact">
              <Button className="bg-[#0D9488] dark:bg-[#0D9488] text-white dark:text-[#0A1628] hover:bg-[#0D9488]/90 dark:hover:bg-[#0D9488]/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg">
                {t.ctaButton}
                <ArrowIcon className="w-5 h-5 ms-2" />
              </Button>
            </Link>
            <Link to="/fincore/contact">
              <Button variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-6 text-base font-semibold rounded-xl">
                {t.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
          <FCFooter />
          <ScrollToTop />
          <FloatingAgentButton />
          <CallbackWidget />
          <ChatWidget />
        </div>
      </ChatProvider>
    </AnalyticsProvider>
  );
}
