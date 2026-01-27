import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, Factory, Package, Boxes, 
  Warehouse, Receipt, BarChart3, Shield, Globe, 
  Zap, Lock, Building2, Users, CheckCircle2, 
  Calendar, ClipboardList, FileText, Smartphone,
  Clock, TrendingUp, BadgeCheck, Server, Settings,
  Cpu, Cog, Wrench, DollarSign, Truck, Layers,
  Sparkles, Crown, Rocket, X, Check, Building,
  ScanLine, Tag, Timer, CircleDollarSign, UserCog,
  PackageCheck, LayoutGrid, Gauge, ShieldCheck, Award,
  Cloud, Database, Landmark, Star, ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    heroTitle: "First ERP System For",
    heroTitleHighlight: "Manufacturing Industry",
    heroSubtitle: "The world's first system designed specifically for factories and workshops. Manages raw materials, production stages, costing, warehouses, orders, and everything you need.",
    requestDemo: "Start Free Trial",
    watchDemo: "Watch Demo",
    badge: "#1 Manufacturing Software in Europe",
    tagline: "The Secret Behind European Industrial Excellence",
    noCreditCard: "No credit card",
    quickSetup: "Quick setup",
    isoCompliant: "ISO Compliant",
    
    // Stats
    factories: "Manufacturing Facilities",
    units: "Units Produced",
    countries: "Countries",
    inManufacturing: "yrs in Manufacturing",
    
    // Features
    featuresTitle: "Everything You Need in One System",
    featuresSubtitle: "Complete ERP system covering all your manufacturing needs from raw materials to finished goods",
    exploreAll: "Explore All Features",
    
    productionTitle: "Production Management",
    productionDesc: "Complete production line management with real-time tracking, stage monitoring, and quality control at every step.",
    productionStat: "Full Control",
    
    inventoryTitle: "Raw Materials Management",
    inventoryDesc: "Track raw materials, components, and supplies with automatic reorder points and supplier management.",
    inventoryStat: "Smart Tracking",
    
    warehouseTitle: "Warehouse Management",
    warehouseDesc: "Manage multiple warehouses for raw materials and finished goods with RFID support and location tracking.",
    warehouseStat: "RFID Ready",
    
    ordersTitle: "Orders & Reservations",
    ordersDesc: "Handle customer orders, production scheduling, and delivery reservations in one integrated system.",
    ordersStat: "Auto-Scheduling",
    
    costingTitle: "Costing & Pricing",
    costingDesc: "Calculate unit costs, total production costs, overhead, and set pricing with real-time profit margins.",
    costingStat: "Live Margins",
    
    analyticsTitle: "Manufacturing Analytics",
    analyticsDesc: "Real-time dashboards, production KPIs, and AI-powered predictions for optimal decision making.",
    analyticsStat: "AI Insights",
    
    // Trust Section
    trustTitle: "Trusted by Manufacturing Leaders",
    trustSubtitle: "Join thousands of factories worldwide",
    
    // CTA
    ctaTitle: "Ready to Transform Your Manufacturing?",
    ctaSubtitle: "Join 500+ factories using InduCore for efficient production management",
    ctaButton: "Start Digital Transformation",
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Full support",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Hear from manufacturing professionals using InduCore",
    
    // Dashboard Preview
    dashboardLabel: "inducore",
    safeLevel: "Safe Level",
    revenue: "Revenue",
    expenses: "Expenses",
    profits: "Profits",
    productionLabel: "Production",
    orders: "Orders",
    thisMonth: "this month",
    cashFlow: "Cash Flow",
    recentOrders: "Recent Orders",
    pending: "Pending",
    confirmed: "In Progress",
    completed: "Completed",
    productionGrowth: "Production Growth",
    
    // Feature Tags
    production: "Production",
    materials: "Materials",
    warehouse: "Warehouse",
    quality: "Quality",
    costing: "Costing",
    
    // Pricing Section
    pricingTitle: "Choose the Perfect Plan",
    pricingSubtitle: "Flexible pricing designed for manufacturing facilities of all sizes",
    transparentPricing: "Transparent Pricing",
    perMonth: "/month",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    
    // Plans
    starterPlan: "Starter",
    starterDesc: "Perfect for small workshops",
    professionalPlan: "Professional",
    professionalDesc: "Ideal for growing factories",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Complete solution for large facilities",
    
    // Features per plan
    upToUsers: "Up to {n} users",
    productsLimit: "Up to {n} products",
    unlimitedUsers: "Unlimited users",
    unlimitedProducts: "Unlimited products",
    basicProduction: "Basic Production",
    advancedProduction: "Advanced Production",
    fullProduction: "Full Production Suite",
    orderManagement: "Order Management",
    basicReports: "Basic Reports",
    advancedReports: "Advanced Reports",
    customReports: "Custom Reports & Analytics",
    emailSupport: "Email Support",
    prioritySupport: "Priority Support 24/7",
    dedicatedSupport: "Dedicated Account Manager",
    warehouseModule: "Warehouse Module",
    rfidIntegration: "RFID Integration",
    costingBilling: "Costing & Billing",
    apiAccess: "API Access",
    customIntegrations: "Custom Integrations",
    multiLocation: "Multi-location Support",
    
    // Comparison Section
    comparisonTitle: "Why Choose InduCore?",
    comparisonSubtitle: "See the difference InduCore makes in your manufacturing operations",
    withoutInducore: "Without InduCore",
    withInducore: "With InduCore",
    
    // Comparison items
    comp1Without: "Manual tracking of production stages",
    comp1With: "Automated real-time production monitoring",
    comp2Without: "Spreadsheet-based inventory management",
    comp2With: "AI-powered inventory with auto-reorder",
    comp3Without: "Delayed cost calculations",
    comp3With: "Real-time unit cost & profit margins",
    comp4Without: "Paper-based quality control",
    comp4With: "Digital quality checkpoints with photos",
    comp5Without: "No visibility into production efficiency",
    comp5With: "Real-time KPIs and AI predictions",
    comp6Without: "Multiple disconnected systems",
    comp6With: "One integrated platform for everything",
    
    // NEXA AI Agent Section
    nexaTitle: "NEXA AI Agent",
    nexaBadge: "AI-Powered Manufacturing Assistant",
    nexaSubtitle: "Your intelligent manufacturing partner that revolutionizes production with advanced AI capabilities",
    nexaFeature1Title: "Production Optimization",
    nexaFeature1Desc: "AI-driven production scheduling that maximizes throughput and minimizes waste",
    nexaFeature2Title: "Quality Prediction",
    nexaFeature2Desc: "Predict quality issues before they occur with machine learning analysis",
    nexaFeature3Title: "Cost Analysis Reports",
    nexaFeature3Desc: "AI-generated comprehensive reports on costs, margins, and profit optimization",
    nexaFeature4Title: "Voice-Enabled Operations",
    nexaFeature4Desc: "Operators can use voice commands for hands-free production updates",
    nexaFeature5Title: "Demand Forecasting",
    nexaFeature5Desc: "Accurate demand predictions based on historical data and market trends",
    nexaFeature6Title: "Maintenance Alerts",
    nexaFeature6Desc: "Predictive maintenance alerts to prevent equipment downtime",
    nexaPartner: "Your Effective Manufacturing Partner",
    nexaPartnerDesc: "NEXA AI works alongside your team to enhance production efficiency, reduce errors, and maximize output",
    
    // Mobile Apps Section
    mobileAppsTitle: "Complete Mobile Ecosystem",
    mobileAppsBadge: "Mobile Apps",
    mobileAppsSubtitle: "Full production lifecycle management with dedicated apps for every role",
    adminAppTitle: "Admin & Management App",
    adminAppDesc: "Complete control over operations, staff, finances, and multi-factory management from anywhere",
    supervisorAppTitle: "Supervisor App",
    supervisorAppDesc: "Production monitoring, quality control, and team management at your fingertips",
    warehouseAppTitle: "Warehouse App",
    warehouseAppDesc: "Inventory management, receiving, shipping, and RFID scanning on the go",
    workerAppTitle: "Worker App",
    workerAppDesc: "Production updates, task assignments, and quality checkpoints for floor workers",
    customerAppTitle: "Customer Portal",
    customerAppDesc: "Order tracking, delivery status, and communication with your factory",
    completeLifecycle: "Complete Production Lifecycle",
    lifecycleDesc: "Seamless integration from raw materials to finished goods delivery",
    
    // Compliance & Security Section
    complianceTitle: "Enterprise-Grade Security & Compliance",
    complianceBadge: "Security & Compliance",
    complianceSubtitle: "Meeting the highest international standards for industrial data protection",
    isoTitle: "ISO 9001 Compliant",
    isoDesc: "Full compliance with international quality management standards",
    gdprTitle: "GDPR Compliant",
    gdprDesc: "Adherence to European Union General Data Protection Regulation",
    encryptionTitle: "Advanced Encryption",
    encryptionDesc: "AES-256 encryption for data at rest and TLS 1.3 for data in transit",
    uptimeTitle: "99.99% Uptime",
    uptimeDesc: "Enterprise infrastructure with redundancy and disaster recovery",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Certified security, availability, and confidentiality controls",
    iso27001Title: "ISO 27001",
    iso27001Desc: "International standard for information security management",
    
    // ROI & Statistics Section
    roiTitle: "Transform Your Manufacturing Operations",
    roiBadge: "Proven Results",
    roiSubtitle: "Data-driven improvements that impact your bottom line and production quality",
    productivityIncrease: "Productivity Increase",
    productivityDesc: "Average improvement in factory operational efficiency",
    wasteReduction: "Waste Reduction",
    wasteDesc: "Decrease in material waste and production inefficiencies",
    theftPrevention: "Loss Prevention",
    theftDesc: "Reduction in inventory shrinkage and unauthorized access",
    accountControl: "Complete Financial Control",
    accountControlDesc: "Full visibility over costs, salaries, employees, and expenses",
    qualitySatisfaction: "Quality Improvement",
    qualitySatisfactionDesc: "Improvement in product quality and customer satisfaction",
    timesSaved: "Time Saved",
    timesSavedDesc: "Reduction in administrative tasks and manual processes",
    
    // HR Section
    hrTitle: "HR & Payroll Management",
    hrSubtitle: "Complete employee management from hiring to retirement",
    salaries: "Salaries & Wages",
    salariesDesc: "Automated payroll with overtime, bonuses, and deductions",
    incentives: "Incentives & Bonuses",
    incentivesDesc: "Performance-based incentive calculations and distribution",
    attendance: "Attendance Tracking",
    attendanceDesc: "Biometric and RFID-based attendance with shift management",
    expenses: "Expense Management",
    expensesDesc: "Track and approve employee expenses and reimbursements",
    
    // Certifications & Trust Section
    certificationsTitle: "Licensed & Certified Software",
    certificationsSubtitle: "Trusted by European & American regulatory bodies with full compliance to international data protection standards",
    certificationsBadge: "Enterprise Security",
    gdprCompliant: "GDPR Compliant",
    gdprDesc: "Full compliance with EU General Data Protection Regulation",
    soc2Certified: "SOC 2 Type II",
    soc2CertDesc: "Certified security, availability, and confidentiality",
    iso27001Cert: "ISO 27001",
    iso27001CertDesc: "International standard for information security",
    hipaaCompliant: "HIPAA Ready",
    hipaaDesc: "Healthcare data protection compliance",
    encryptionStandard: "AES-256 Encryption",
    encryptionDesc: "Military-grade encryption for all data at rest and in transit",
    cloudInfra: "Enterprise Cloud Infrastructure",
    cloudDesc: "Hosted on Google Cloud & Amazon AWS with 99.99% uptime SLA",
    
    // Client Logos Section
    trustedByTitle: "Trusted by Industry Leaders",
    trustedBySubtitle: "Leading European manufacturing companies rely on InduCore",
    
    // Chamber of Commerce Section
    chamberTitle: "Chamber of Commerce Solutions",
    chamberSubtitle: "Special pricing and ready-made solutions for chamber members",
    chamberBadge: "Industry Associations",
    chamberFeature1: "Pre-configured Templates",
    chamberFeature1Desc: "Industry-specific templates ready for immediate deployment",
    chamberFeature2: "Volume Discounts",
    chamberFeature2Desc: "Special pricing for chamber member companies",
    chamberFeature3: "Dedicated Support",
    chamberFeature3Desc: "Priority support channel for association members",
    chamberFeature4: "Training Programs",
    chamberFeature4Desc: "Free training workshops for member companies",
    chamberCTA: "Contact for Chamber Pricing",
  },
  ar: {
    heroTitle: "أول نظام ERP",
    heroTitleHighlight: "لصناعة التصنيع",
    heroSubtitle: "أول نظام في العالم مصمم خصيصاً للمصانع والورشات. يدير المواد الأولية، مراحل الإنتاج، التكلفة، المستودعات، الطلبات، وكل ما تحتاجه.",
    requestDemo: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    badge: "البرنامج التصنيعي الأول في أوروبا",
    tagline: "السر وراء التميز الصناعي الأوروبي",
    noCreditCard: "بدون بطاقة ائتمان",
    quickSetup: "إعداد سريع",
    isoCompliant: "متوافق مع ISO",
    
    factories: "منشأة تصنيع",
    units: "وحدة منتجة",
    countries: "دولة",
    inManufacturing: "سنة في التصنيع",
    
    featuresTitle: "كل ما تحتاجه في نظام واحد",
    featuresSubtitle: "نظام ERP متكامل يغطي جميع احتياجات التصنيع من المواد الأولية إلى البضائع الجاهزة",
    exploreAll: "استكشف جميع المميزات",
    
    productionTitle: "إدارة الإنتاج",
    productionDesc: "إدارة كاملة لخطوط الإنتاج مع التتبع في الوقت الفعلي ومراقبة المراحل وضبط الجودة في كل خطوة.",
    productionStat: "تحكم كامل",
    
    inventoryTitle: "إدارة المواد الأولية",
    inventoryDesc: "تتبع المواد الخام والمكونات والإمدادات مع نقاط إعادة الطلب التلقائية وإدارة الموردين.",
    inventoryStat: "تتبع ذكي",
    
    warehouseTitle: "إدارة المستودعات",
    warehouseDesc: "إدارة مستودعات متعددة للمواد الأولية والبضائع الجاهزة مع دعم RFID وتتبع المواقع.",
    warehouseStat: "جاهز لـ RFID",
    
    ordersTitle: "الطلبات والحجوزات",
    ordersDesc: "التعامل مع طلبات العملاء وجدولة الإنتاج وحجوزات التسليم في نظام متكامل واحد.",
    ordersStat: "جدولة تلقائية",
    
    costingTitle: "التكلفة والتسعير",
    costingDesc: "حساب تكلفة الوحدة وإجمالي تكاليف الإنتاج والمصاريف وتحديد الأسعار مع هوامش الربح في الوقت الفعلي.",
    costingStat: "هوامش حية",
    
    analyticsTitle: "تحليلات التصنيع",
    analyticsDesc: "لوحات معلومات في الوقت الفعلي ومؤشرات أداء الإنتاج وتنبؤات مدعومة بالذكاء الاصطناعي.",
    analyticsStat: "رؤى ذكية",
    
    trustTitle: "موثوق من قادة التصنيع",
    trustSubtitle: "انضم لآلاف المصانع حول العالم",
    
    ctaTitle: "مستعد لتحويل تصنيعك؟",
    ctaSubtitle: "انضم لأكثر من 500 مصنع يستخدم InduCore لإدارة الإنتاج بكفاءة",
    ctaButton: "ابدأ التحول الرقمي",
    benefit1: "14 يوم تجربة مجانية",
    benefit2: "بدون بطاقة ائتمان",
    benefit3: "دعم كامل",
    
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "استمع لمتخصصي التصنيع الذين يستخدمون InduCore",
    
    dashboardLabel: "inducore",
    safeLevel: "مستوى آمن",
    revenue: "الإيرادات",
    expenses: "المصاريف",
    profits: "الأرباح",
    productionLabel: "الإنتاج",
    orders: "الطلبات",
    thisMonth: "هذا الشهر",
    cashFlow: "التدفق النقدي",
    recentOrders: "الطلبات الأخيرة",
    pending: "قيد الانتظار",
    confirmed: "قيد التنفيذ",
    completed: "مكتمل",
    productionGrowth: "نمو الإنتاج",
    
    production: "الإنتاج",
    materials: "المواد",
    warehouse: "المستودع",
    quality: "الجودة",
    costing: "التكلفة",
    
    pricingTitle: "اختر الخطة المثالية",
    pricingSubtitle: "أسعار مرنة مصممة لمنشآت التصنيع من جميع الأحجام",
    transparentPricing: "تسعير شفاف",
    perMonth: "/شهر",
    mostPopular: "الأكثر شعبية",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل مع المبيعات",
    
    starterPlan: "البداية",
    starterDesc: "مثالي للورشات الصغيرة",
    professionalPlan: "المحترف",
    professionalDesc: "مثالي للمصانع النامية",
    enterprisePlan: "المؤسسات",
    enterpriseDesc: "حل كامل للمنشآت الكبيرة",
    
    upToUsers: "حتى {n} مستخدم",
    productsLimit: "حتى {n} منتج",
    unlimitedUsers: "مستخدمين غير محدودين",
    unlimitedProducts: "منتجات غير محدودة",
    basicProduction: "إنتاج أساسي",
    advancedProduction: "إنتاج متقدم",
    fullProduction: "جناح إنتاج كامل",
    orderManagement: "إدارة الطلبات",
    basicReports: "تقارير أساسية",
    advancedReports: "تقارير متقدمة",
    customReports: "تقارير وتحليلات مخصصة",
    emailSupport: "دعم البريد الإلكتروني",
    prioritySupport: "دعم أولوية 24/7",
    dedicatedSupport: "مدير حساب مخصص",
    warehouseModule: "وحدة المستودعات",
    rfidIntegration: "تكامل RFID",
    costingBilling: "التكلفة والفوترة",
    apiAccess: "وصول API",
    customIntegrations: "تكاملات مخصصة",
    multiLocation: "دعم مواقع متعددة",
    
    comparisonTitle: "لماذا تختار InduCore؟",
    comparisonSubtitle: "شاهد الفرق الذي يحدثه InduCore في عمليات التصنيع الخاصة بك",
    withoutInducore: "بدون InduCore",
    withInducore: "مع InduCore",
    
    comp1Without: "تتبع يدوي لمراحل الإنتاج",
    comp1With: "مراقبة إنتاج آلية في الوقت الفعلي",
    comp2Without: "إدارة المخزون عبر جداول البيانات",
    comp2With: "مخزون مدعوم بالذكاء الاصطناعي مع إعادة الطلب التلقائي",
    comp3Without: "حسابات تكلفة متأخرة",
    comp3With: "تكلفة الوحدة وهوامش الربح في الوقت الفعلي",
    comp4Without: "مراقبة جودة ورقية",
    comp4With: "نقاط فحص جودة رقمية مع صور",
    comp5Without: "لا رؤية لكفاءة الإنتاج",
    comp5With: "مؤشرات أداء في الوقت الفعلي وتنبؤات ذكية",
    comp6Without: "أنظمة متعددة منفصلة",
    comp6With: "منصة متكاملة واحدة لكل شيء",
    
    nexaTitle: "وكيل NEXA AI",
    nexaBadge: "مساعد التصنيع المدعوم بالذكاء الاصطناعي",
    nexaSubtitle: "شريكك التصنيعي الذكي الذي يحدث ثورة في الإنتاج بقدرات الذكاء الاصطناعي المتقدمة",
    nexaFeature1Title: "تحسين الإنتاج",
    nexaFeature1Desc: "جدولة إنتاج مدفوعة بالذكاء الاصطناعي تزيد الإنتاجية وتقلل الهدر",
    nexaFeature2Title: "التنبؤ بالجودة",
    nexaFeature2Desc: "توقع مشاكل الجودة قبل حدوثها باستخدام تحليل التعلم الآلي",
    nexaFeature3Title: "تقارير تحليل التكلفة",
    nexaFeature3Desc: "تقارير شاملة مولدة بالذكاء الاصطناعي عن التكاليف والهوامش وتحسين الربح",
    nexaFeature4Title: "عمليات صوتية",
    nexaFeature4Desc: "يمكن للمشغلين استخدام الأوامر الصوتية لتحديثات الإنتاج بدون يدين",
    nexaFeature5Title: "التنبؤ بالطلب",
    nexaFeature5Desc: "توقعات طلب دقيقة بناءً على البيانات التاريخية واتجاهات السوق",
    nexaFeature6Title: "تنبيهات الصيانة",
    nexaFeature6Desc: "تنبيهات صيانة تنبؤية لمنع توقف المعدات",
    nexaPartner: "شريكك التصنيعي الفعال",
    nexaPartnerDesc: "يعمل NEXA AI جنباً إلى جنب مع فريقك لتعزيز كفاءة الإنتاج وتقليل الأخطاء وزيادة الإنتاجية",
    
    mobileAppsTitle: "نظام بيئي متنقل كامل",
    mobileAppsBadge: "تطبيقات الهاتف",
    mobileAppsSubtitle: "إدارة كاملة لدورة حياة الإنتاج مع تطبيقات مخصصة لكل دور",
    adminAppTitle: "تطبيق الإدارة",
    adminAppDesc: "تحكم كامل في العمليات والموظفين والمالية وإدارة المصانع المتعددة من أي مكان",
    supervisorAppTitle: "تطبيق المشرف",
    supervisorAppDesc: "مراقبة الإنتاج وضبط الجودة وإدارة الفريق في متناول يدك",
    warehouseAppTitle: "تطبيق المستودع",
    warehouseAppDesc: "إدارة المخزون والاستلام والشحن ومسح RFID أثناء التنقل",
    workerAppTitle: "تطبيق العامل",
    workerAppDesc: "تحديثات الإنتاج وتعيين المهام ونقاط فحص الجودة لعمال الأرضية",
    customerAppTitle: "بوابة العملاء",
    customerAppDesc: "تتبع الطلبات وحالة التسليم والتواصل مع مصنعك",
    completeLifecycle: "دورة حياة إنتاج كاملة",
    lifecycleDesc: "تكامل سلس من المواد الخام إلى تسليم البضائع الجاهزة",
    
    complianceTitle: "أمان وامتثال بمستوى المؤسسات",
    complianceBadge: "الأمان والامتثال",
    complianceSubtitle: "تلبية أعلى المعايير الدولية لحماية البيانات الصناعية",
    isoTitle: "متوافق مع ISO 9001",
    isoDesc: "امتثال كامل لمعايير إدارة الجودة الدولية",
    gdprTitle: "متوافق مع GDPR",
    gdprDesc: "الالتزام بلائحة حماية البيانات العامة للاتحاد الأوروبي",
    encryptionTitle: "تشفير متقدم",
    encryptionDesc: "تشفير AES-256 للبيانات في السكون وTLS 1.3 للبيانات أثناء النقل",
    uptimeTitle: "99.99% وقت التشغيل",
    uptimeDesc: "بنية تحتية للمؤسسات مع التكرار واستعادة الكوارث",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "ضوابط أمان وتوافر وسرية معتمدة",
    iso27001Title: "ISO 27001",
    iso27001Desc: "المعيار الدولي لإدارة أمن المعلومات",
    
    roiTitle: "حوّل عمليات التصنيع الخاصة بك",
    roiBadge: "نتائج مثبتة",
    roiSubtitle: "تحسينات مدفوعة بالبيانات تؤثر على أرباحك وجودة الإنتاج",
    productivityIncrease: "زيادة الإنتاجية",
    productivityDesc: "متوسط التحسن في كفاءة تشغيل المصنع",
    wasteReduction: "تقليل الهدر",
    wasteDesc: "انخفاض في هدر المواد وعدم كفاءة الإنتاج",
    theftPrevention: "منع الخسائر",
    theftDesc: "انخفاض في انكماش المخزون والوصول غير المصرح به",
    accountControl: "تحكم مالي كامل",
    accountControlDesc: "رؤية كاملة على التكاليف والرواتب والموظفين والمصاريف",
    qualitySatisfaction: "تحسين الجودة",
    qualitySatisfactionDesc: "تحسن في جودة المنتج ورضا العملاء",
    timesSaved: "توفير الوقت",
    timesSavedDesc: "انخفاض في المهام الإدارية والعمليات اليدوية",
    
    hrTitle: "إدارة الموارد البشرية والرواتب",
    hrSubtitle: "إدارة كاملة للموظفين من التوظيف إلى التقاعد",
    salaries: "الرواتب والأجور",
    salariesDesc: "كشوف رواتب آلية مع العمل الإضافي والمكافآت والخصومات",
    incentives: "الحوافز والمكافآت",
    incentivesDesc: "حسابات الحوافز المبنية على الأداء والتوزيع",
    attendance: "تتبع الحضور",
    attendanceDesc: "حضور بيومتري ومعتمد على RFID مع إدارة الورديات",
    expenses: "إدارة المصاريف",
    expensesDesc: "تتبع واعتماد مصاريف الموظفين والتعويضات",
    
    // Certifications & Trust Section
    certificationsTitle: "برنامج مرخص ومعتمد",
    certificationsSubtitle: "موثوق من الهيئات التنظيمية الأوروبية والأمريكية مع الامتثال الكامل لمعايير حماية البيانات الدولية",
    certificationsBadge: "أمان المؤسسات",
    gdprCompliant: "متوافق مع GDPR",
    gdprDesc: "امتثال كامل للائحة حماية البيانات العامة للاتحاد الأوروبي",
    soc2Certified: "SOC 2 Type II",
    soc2CertDesc: "أمان وتوافر وسرية معتمدة",
    iso27001Cert: "ISO 27001",
    iso27001CertDesc: "المعيار الدولي لأمن المعلومات",
    hipaaCompliant: "جاهز لـ HIPAA",
    hipaaDesc: "امتثال حماية بيانات الرعاية الصحية",
    encryptionStandard: "تشفير AES-256",
    encryptionDesc: "تشفير بمستوى عسكري لجميع البيانات المخزنة والمنقولة",
    cloudInfra: "بنية سحابية للمؤسسات",
    cloudDesc: "مستضاف على Google Cloud و Amazon AWS مع ضمان وقت تشغيل 99.99%",
    
    // Client Logos Section
    trustedByTitle: "موثوق من قادة الصناعة",
    trustedBySubtitle: "تعتمد شركات التصنيع الأوروبية الرائدة على InduCore",
    
    // Chamber of Commerce Section
    chamberTitle: "حلول غرف الصناعة والتجارة",
    chamberSubtitle: "أسعار خاصة وحلول جاهزة لأعضاء الغرف",
    chamberBadge: "الجمعيات الصناعية",
    chamberFeature1: "قوالب مُعدة مسبقاً",
    chamberFeature1Desc: "قوالب خاصة بالصناعة جاهزة للنشر الفوري",
    chamberFeature2: "خصومات كمية",
    chamberFeature2Desc: "أسعار خاصة لشركات أعضاء الغرف",
    chamberFeature3: "دعم مخصص",
    chamberFeature3Desc: "قناة دعم ذات أولوية لأعضاء الجمعيات",
    chamberFeature4: "برامج تدريبية",
    chamberFeature4Desc: "ورش عمل تدريبية مجانية للشركات الأعضاء",
    chamberCTA: "تواصل للحصول على أسعار الغرف",
  },
  tr: {
    heroTitle: "İlk ERP Sistemi",
    heroTitleHighlight: "Üretim Sektörü İçin",
    heroSubtitle: "Özellikle fabrikalar ve atölyeler için tasarlanmış dünyanın ilk sistemi. Hammaddeler, üretim aşamaları, maliyetlendirme, depolar, siparişler ve ihtiyacınız olan her şeyi yönetir.",
    requestDemo: "Ücretsiz Deneme Başlat",
    watchDemo: "Demo İzle",
    badge: "Avrupa'nın #1 Üretim Yazılımı",
    tagline: "Avrupa Endüstriyel Mükemmelliğinin Arkasındaki Sır",
    noCreditCard: "Kredi kartı yok",
    quickSetup: "Hızlı kurulum",
    isoCompliant: "ISO Uyumlu",
    
    factories: "Üretim Tesisi",
    units: "Üretilen Birim",
    countries: "Ülke",
    inManufacturing: "yıl Üretimde",
    
    featuresTitle: "Tek Sistemde İhtiyacınız Olan Her Şey",
    featuresSubtitle: "Hammaddeden bitmiş ürünlere kadar tüm üretim ihtiyaçlarınızı karşılayan komple ERP sistemi",
    exploreAll: "Tüm Özellikleri Keşfet",
    
    productionTitle: "Üretim Yönetimi",
    productionDesc: "Gerçek zamanlı takip, aşama izleme ve her adımda kalite kontrolü ile tam üretim hattı yönetimi.",
    productionStat: "Tam Kontrol",
    
    inventoryTitle: "Hammadde Yönetimi",
    inventoryDesc: "Otomatik yeniden sipariş noktaları ve tedarikçi yönetimi ile hammaddeleri, bileşenleri ve malzemeleri takip edin.",
    inventoryStat: "Akıllı Takip",
    
    warehouseTitle: "Depo Yönetimi",
    warehouseDesc: "RFID desteği ve konum takibi ile hammaddeler ve bitmiş ürünler için çoklu depo yönetimi.",
    warehouseStat: "RFID Hazır",
    
    ordersTitle: "Siparişler ve Rezervasyonlar",
    ordersDesc: "Tek entegre sistemde müşteri siparişleri, üretim planlaması ve teslimat rezervasyonlarını yönetin.",
    ordersStat: "Otomatik Planlama",
    
    costingTitle: "Maliyetlendirme ve Fiyatlandırma",
    costingDesc: "Gerçek zamanlı kar marjları ile birim maliyetleri, toplam üretim maliyetleri, genel giderler ve fiyatlandırma hesaplayın.",
    costingStat: "Canlı Marjlar",
    
    analyticsTitle: "Üretim Analitiği",
    analyticsDesc: "Optimal karar verme için gerçek zamanlı panolar, üretim KPI'ları ve AI destekli tahminler.",
    analyticsStat: "AI İçgörüleri",
    
    trustTitle: "Üretim Liderleri Tarafından Güvenilir",
    trustSubtitle: "Dünya çapında binlerce fabrikaya katılın",
    
    ctaTitle: "Üretiminizi Dönüştürmeye Hazır mısınız?",
    ctaSubtitle: "Verimli üretim yönetimi için InduCore kullanan 500+ fabrikaya katılın",
    ctaButton: "Dijital Dönüşümü Başlat",
    benefit1: "14 günlük ücretsiz deneme",
    benefit2: "Kredi kartı gerekmez",
    benefit3: "Tam destek",
    
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonialsSubtitle: "InduCore kullanan üretim profesyonellerinden dinleyin",
    
    dashboardLabel: "inducore",
    safeLevel: "Güvenli Seviye",
    revenue: "Gelir",
    expenses: "Giderler",
    profits: "Karlar",
    productionLabel: "Üretim",
    orders: "Siparişler",
    thisMonth: "bu ay",
    cashFlow: "Nakit Akışı",
    recentOrders: "Son Siparişler",
    pending: "Beklemede",
    confirmed: "Devam Ediyor",
    completed: "Tamamlandı",
    productionGrowth: "Üretim Büyümesi",
    
    production: "Üretim",
    materials: "Malzemeler",
    warehouse: "Depo",
    quality: "Kalite",
    costing: "Maliyetlendirme",
    
    pricingTitle: "Mükemmel Planı Seçin",
    pricingSubtitle: "Her boyutta üretim tesisi için tasarlanmış esnek fiyatlandırma",
    transparentPricing: "Şeffaf Fiyatlandırma",
    perMonth: "/ay",
    mostPopular: "En Popüler",
    getStarted: "Başla",
    contactSales: "Satışla İletişim",
    
    starterPlan: "Başlangıç",
    starterDesc: "Küçük atölyeler için mükemmel",
    professionalPlan: "Profesyonel",
    professionalDesc: "Büyüyen fabrikalar için ideal",
    enterprisePlan: "Kurumsal",
    enterpriseDesc: "Büyük tesisler için komple çözüm",
    
    upToUsers: "{n} kullanıcıya kadar",
    productsLimit: "{n} ürüne kadar",
    unlimitedUsers: "Sınırsız kullanıcı",
    unlimitedProducts: "Sınırsız ürün",
    basicProduction: "Temel Üretim",
    advancedProduction: "Gelişmiş Üretim",
    fullProduction: "Tam Üretim Paketi",
    orderManagement: "Sipariş Yönetimi",
    basicReports: "Temel Raporlar",
    advancedReports: "Gelişmiş Raporlar",
    customReports: "Özel Raporlar ve Analitik",
    emailSupport: "E-posta Desteği",
    prioritySupport: "7/24 Öncelikli Destek",
    dedicatedSupport: "Özel Hesap Yöneticisi",
    warehouseModule: "Depo Modülü",
    rfidIntegration: "RFID Entegrasyonu",
    costingBilling: "Maliyetlendirme ve Faturalama",
    apiAccess: "API Erişimi",
    customIntegrations: "Özel Entegrasyonlar",
    multiLocation: "Çok Lokasyonlu Destek",
    
    comparisonTitle: "Neden InduCore?",
    comparisonSubtitle: "InduCore'un üretim operasyonlarınızda yarattığı farkı görün",
    withoutInducore: "InduCore Olmadan",
    withInducore: "InduCore İle",
    
    comp1Without: "Üretim aşamalarının manuel takibi",
    comp1With: "Otomatik gerçek zamanlı üretim izleme",
    comp2Without: "Elektronik tablo tabanlı envanter yönetimi",
    comp2With: "Otomatik yeniden siparişli AI destekli envanter",
    comp3Without: "Geciken maliyet hesaplamaları",
    comp3With: "Gerçek zamanlı birim maliyeti ve kar marjları",
    comp4Without: "Kağıt tabanlı kalite kontrol",
    comp4With: "Fotoğraflı dijital kalite kontrol noktaları",
    comp5Without: "Üretim verimliliğine görünürlük yok",
    comp5With: "Gerçek zamanlı KPI'lar ve AI tahminleri",
    comp6Without: "Birden fazla bağlantısız sistem",
    comp6With: "Her şey için tek entegre platform",
    
    nexaTitle: "NEXA AI Ajanı",
    nexaBadge: "AI Destekli Üretim Asistanı",
    nexaSubtitle: "Gelişmiş AI yetenekleriyle üretimde devrim yaratan akıllı üretim ortağınız",
    nexaFeature1Title: "Üretim Optimizasyonu",
    nexaFeature1Desc: "Verimliliği maksimize eden ve israfı minimize eden AI destekli üretim planlaması",
    nexaFeature2Title: "Kalite Tahmini",
    nexaFeature2Desc: "Makine öğrenimi analizi ile kalite sorunlarını olmadan önce tahmin edin",
    nexaFeature3Title: "Maliyet Analiz Raporları",
    nexaFeature3Desc: "Maliyetler, marjlar ve kar optimizasyonu hakkında AI tarafından oluşturulan kapsamlı raporlar",
    nexaFeature4Title: "Sesli Operasyonlar",
    nexaFeature4Desc: "Operatörler eller serbest üretim güncellemeleri için sesli komutları kullanabilir",
    nexaFeature5Title: "Talep Tahmini",
    nexaFeature5Desc: "Geçmiş verilere ve pazar trendlerine dayalı doğru talep tahminleri",
    nexaFeature6Title: "Bakım Uyarıları",
    nexaFeature6Desc: "Ekipman arıza süresini önlemek için öngörücü bakım uyarıları",
    nexaPartner: "Etkili Üretim Ortağınız",
    nexaPartnerDesc: "NEXA AI, üretim verimliliğini artırmak, hataları azaltmak ve çıktıyı maksimize etmek için ekibinizle birlikte çalışır",
    
    mobileAppsTitle: "Komple Mobil Ekosistem",
    mobileAppsBadge: "Mobil Uygulamalar",
    mobileAppsSubtitle: "Her rol için özel uygulamalarla tam üretim yaşam döngüsü yönetimi",
    adminAppTitle: "Yönetim Uygulaması",
    adminAppDesc: "Her yerden operasyonlar, personel, finans ve çok fabrika yönetimi üzerinde tam kontrol",
    supervisorAppTitle: "Süpervizör Uygulaması",
    supervisorAppDesc: "Parmaklarınızın ucunda üretim izleme, kalite kontrol ve ekip yönetimi",
    warehouseAppTitle: "Depo Uygulaması",
    warehouseAppDesc: "Hareket halinde envanter yönetimi, alma, sevkiyat ve RFID tarama",
    workerAppTitle: "İşçi Uygulaması",
    workerAppDesc: "Zemin işçileri için üretim güncellemeleri, görev atamaları ve kalite kontrol noktaları",
    customerAppTitle: "Müşteri Portalı",
    customerAppDesc: "Sipariş takibi, teslimat durumu ve fabrikanızla iletişim",
    completeLifecycle: "Komple Üretim Yaşam Döngüsü",
    lifecycleDesc: "Hammaddeden bitmiş ürün teslimatına sorunsuz entegrasyon",
    
    complianceTitle: "Kurumsal Düzeyde Güvenlik ve Uyumluluk",
    complianceBadge: "Güvenlik ve Uyumluluk",
    complianceSubtitle: "Endüstriyel veri koruma için en yüksek uluslararası standartları karşılama",
    isoTitle: "ISO 9001 Uyumlu",
    isoDesc: "Uluslararası kalite yönetimi standartlarına tam uyumluluk",
    gdprTitle: "GDPR Uyumlu",
    gdprDesc: "AB Genel Veri Koruma Yönetmeliğine uygunluk",
    encryptionTitle: "Gelişmiş Şifreleme",
    encryptionDesc: "Beklemede veriler için AES-256 ve aktarımda veriler için TLS 1.3 şifreleme",
    uptimeTitle: "99.99% Çalışma Süresi",
    uptimeDesc: "Yedeklilik ve felaket kurtarma ile kurumsal altyapı",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Sertifikalı güvenlik, kullanılabilirlik ve gizlilik kontrolleri",
    iso27001Title: "ISO 27001",
    iso27001Desc: "Bilgi güvenliği yönetimi için uluslararası standart",
    
    roiTitle: "Üretim Operasyonlarınızı Dönüştürün",
    roiBadge: "Kanıtlanmış Sonuçlar",
    roiSubtitle: "Karlılığınızı ve üretim kalitenizi etkileyen veri odaklı iyileştirmeler",
    productivityIncrease: "Verimlilik Artışı",
    productivityDesc: "Fabrika operasyonel verimliliğinde ortalama iyileşme",
    wasteReduction: "İsraf Azaltma",
    wasteDesc: "Malzeme israfı ve üretim verimsizliklerinde azalma",
    theftPrevention: "Kayıp Önleme",
    theftDesc: "Envanter kayıpları ve yetkisiz erişimde azalma",
    accountControl: "Tam Finansal Kontrol",
    accountControlDesc: "Maliyetler, maaşlar, çalışanlar ve giderler üzerinde tam görünürlük",
    qualitySatisfaction: "Kalite İyileştirme",
    qualitySatisfactionDesc: "Ürün kalitesi ve müşteri memnuniyetinde iyileşme",
    timesSaved: "Zaman Tasarrufu",
    timesSavedDesc: "İdari görevler ve manuel süreçlerde azalma",
    
    hrTitle: "İK ve Bordro Yönetimi",
    hrSubtitle: "İşe alımdan emekliliğe tam çalışan yönetimi",
    salaries: "Maaşlar ve Ücretler",
    salariesDesc: "Fazla mesai, ikramiye ve kesintilerle otomatik bordro",
    incentives: "Teşvikler ve İkramiyeler",
    incentivesDesc: "Performansa dayalı teşvik hesaplamaları ve dağıtımı",
    attendance: "Devam Takibi",
    attendanceDesc: "Vardiya yönetimi ile biyometrik ve RFID tabanlı devam",
    expenses: "Gider Yönetimi",
    expensesDesc: "Çalışan giderlerini ve geri ödemeleri takip edin ve onaylayın",
    
    // Certifications & Trust Section
    certificationsTitle: "Lisanslı ve Sertifikalı Yazılım",
    certificationsSubtitle: "Uluslararası veri koruma standartlarına tam uyumluluk ile Avrupa ve Amerikan düzenleyici kurumları tarafından güvenilir",
    certificationsBadge: "Kurumsal Güvenlik",
    gdprCompliant: "GDPR Uyumlu",
    gdprDesc: "AB Genel Veri Koruma Yönetmeliğine tam uyumluluk",
    soc2Certified: "SOC 2 Type II",
    soc2CertDesc: "Sertifikalı güvenlik, kullanılabilirlik ve gizlilik",
    iso27001Cert: "ISO 27001",
    iso27001CertDesc: "Bilgi güvenliği için uluslararası standart",
    hipaaCompliant: "HIPAA Hazır",
    hipaaDesc: "Sağlık verisi koruma uyumluluğu",
    encryptionStandard: "AES-256 Şifreleme",
    encryptionDesc: "Tüm veriler için askeri düzeyde şifreleme",
    cloudInfra: "Kurumsal Bulut Altyapısı",
    cloudDesc: "Google Cloud ve Amazon AWS'de %99.99 çalışma süresi garantisi ile barındırılıyor",
    
    // Client Logos Section
    trustedByTitle: "Sektör Liderlerinin Güveni",
    trustedBySubtitle: "Önde gelen Avrupa üretim şirketleri InduCore'a güveniyor",
    
    // Chamber of Commerce Section
    chamberTitle: "Ticaret Odası Çözümleri",
    chamberSubtitle: "Oda üyeleri için özel fiyatlandırma ve hazır çözümler",
    chamberBadge: "Sanayi Birlikleri",
    chamberFeature1: "Önceden Yapılandırılmış Şablonlar",
    chamberFeature1Desc: "Hemen dağıtım için hazır sektöre özel şablonlar",
    chamberFeature2: "Toplu İndirimler",
    chamberFeature2Desc: "Oda üyesi şirketler için özel fiyatlandırma",
    chamberFeature3: "Özel Destek",
    chamberFeature3Desc: "Birlik üyeleri için öncelikli destek kanalı",
    chamberFeature4: "Eğitim Programları",
    chamberFeature4Desc: "Üye şirketler için ücretsiz eğitim atölyeleri",
    chamberCTA: "Oda Fiyatlandırması İçin İletişime Geçin",
  },
  // Add more languages as needed (ru, fr, de, nl, it, uk)
};

// Add Russian translations
const ruTranslations = {
  heroTitle: "Первая ERP-система для",
  heroTitleHighlight: "производственной отрасли",
  heroSubtitle: "Первая в мире система, разработанная специально для заводов и мастерских. Управляет сырьём, этапами производства, себестоимостью, складами, заказами и всем необходимым.",
  requestDemo: "Начать бесплатную пробную версию",
  watchDemo: "Смотреть демо",
  badge: "#1 Производственное ПО в Европе",
  tagline: "Секрет европейского промышленного совершенства",
  noCreditCard: "Без кредитной карты",
  quickSetup: "Быстрая настройка",
  isoCompliant: "Соответствует ISO",
  factories: "Производственных объектов",
  units: "Произведённых единиц",
  countries: "Стран",
  inManufacturing: "лет в производстве",
  featuresTitle: "Всё, что вам нужно в одной системе",
  featuresSubtitle: "Полная ERP-система, охватывающая все ваши производственные потребности от сырья до готовой продукции",
  exploreAll: "Исследовать все функции",
  productionTitle: "Управление производством",
  productionDesc: "Полное управление производственной линией с отслеживанием в реальном времени, мониторингом этапов и контролем качества на каждом шаге.",
  productionStat: "Полный контроль",
  inventoryTitle: "Управление сырьём",
  inventoryDesc: "Отслеживание сырья, компонентов и материалов с автоматическими точками повторного заказа и управлением поставщиками.",
  inventoryStat: "Умное отслеживание",
  warehouseTitle: "Управление складами",
  warehouseDesc: "Управление несколькими складами для сырья и готовой продукции с поддержкой RFID и отслеживанием местоположения.",
  warehouseStat: "RFID Ready",
  ordersTitle: "Заказы и бронирования",
  ordersDesc: "Управление заказами клиентов, планированием производства и бронированием доставки в одной интегрированной системе.",
  ordersStat: "Авто-планирование",
  costingTitle: "Себестоимость и ценообразование",
  costingDesc: "Расчёт себестоимости единицы, общих затрат на производство, накладных расходов и ценообразования с маржой прибыли в реальном времени.",
  costingStat: "Живая маржа",
  analyticsTitle: "Производственная аналитика",
  analyticsDesc: "Панели мониторинга в реальном времени, производственные KPI и прогнозы на основе ИИ для оптимального принятия решений.",
  analyticsStat: "ИИ-аналитика",
  trustTitle: "Доверие лидеров производства",
  trustSubtitle: "Присоединяйтесь к тысячам заводов по всему миру",
  ctaTitle: "Готовы преобразовать своё производство?",
  ctaSubtitle: "Присоединяйтесь к 500+ заводам, использующим InduCore для эффективного управления производством",
  ctaButton: "Начать цифровую трансформацию",
  benefit1: "14-дневная бесплатная пробная версия",
  benefit2: "Кредитная карта не требуется",
  benefit3: "Полная поддержка",
  
  // Certifications & Trust Section
  certificationsTitle: "Лицензированное и сертифицированное ПО",
  certificationsSubtitle: "Доверие европейских и американских регулирующих органов с полным соответствием международным стандартам защиты данных",
  certificationsBadge: "Корпоративная безопасность",
  gdprCompliant: "Соответствует GDPR",
  gdprDesc: "Полное соответствие Общему регламенту защиты данных ЕС",
  soc2Certified: "SOC 2 Type II",
  soc2CertDesc: "Сертифицированная безопасность, доступность и конфиденциальность",
  iso27001Cert: "ISO 27001",
  iso27001CertDesc: "Международный стандарт информационной безопасности",
  hipaaCompliant: "Готов к HIPAA",
  hipaaDesc: "Соответствие защите медицинских данных",
  encryptionStandard: "Шифрование AES-256",
  encryptionDesc: "Шифрование военного уровня для всех данных",
  cloudInfra: "Корпоративная облачная инфраструктура",
  cloudDesc: "Размещение на Google Cloud и Amazon AWS с SLA 99.99%",
  
  // Client Logos Section
  trustedByTitle: "Доверие лидеров отрасли",
  trustedBySubtitle: "Ведущие европейские производственные компании полагаются на InduCore",
  
  // Chamber of Commerce Section
  chamberTitle: "Решения для торговых палат",
  chamberSubtitle: "Специальные цены и готовые решения для членов палат",
  chamberBadge: "Отраслевые ассоциации",
  chamberFeature1: "Готовые шаблоны",
  chamberFeature1Desc: "Отраслевые шаблоны, готовые к немедленному развёртыванию",
  chamberFeature2: "Оптовые скидки",
  chamberFeature2Desc: "Специальные цены для компаний-членов палат",
  chamberFeature3: "Выделенная поддержка",
  chamberFeature3Desc: "Приоритетный канал поддержки для членов ассоциаций",
  chamberFeature4: "Программы обучения",
  chamberFeature4Desc: "Бесплатные обучающие семинары для компаний-членов",
  chamberCTA: "Связаться для получения цен палат",
};

// Get translations with fallback
function getTranslations(lang: string) {
  if (lang === 'ru') {
    return { ...translations.en, ...ruTranslations };
  }
  return translations[lang as keyof typeof translations] || translations.en;
}

export default function ICHomePage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = getTranslations(language);
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white dark:from-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300 text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                {t.badge}
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                {t.heroTitle}{" "}
                <span className="relative">
                  <span className="text-red-800 dark:text-red-400">{t.heroTitleHighlight}</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8.5C50 3.5 150 1 298 8.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-800/30" />
                  </svg>
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-lg text-red-800 dark:text-red-400 font-semibold mb-4">
                {t.tagline}
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                {t.heroSubtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/inducore/contact">
                  <Button size="lg" className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg">
                    {t.requestDemo}
                    <Arrow className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600 px-8 py-6 text-lg">
                  {t.watchDemo}
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {t.noCreditCard}
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  {t.quickSetup}
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  {t.isoCompliant}
                </span>
              </div>
            </motion.div>
            
            {/* Hero Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t.dashboardLabel}
                  </span>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-800 rounded-xl p-4 text-white">
                    <Factory className="w-6 h-6 mb-2 opacity-80" />
                    <div className="text-2xl font-bold">847</div>
                    <div className="text-xs opacity-80">{t.productionLabel}</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                    <Package className="w-6 h-6 mb-2 opacity-80" />
                    <div className="text-2xl font-bold">2.4K</div>
                    <div className="text-xs opacity-80">{t.orders}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
                    <TrendingUp className="w-6 h-6 mb-2 opacity-80" />
                    <div className="text-2xl font-bold">+32%</div>
                    <div className="text-xs opacity-80">{t.productionGrowth}</div>
                  </div>
                </div>
                
                {/* Mini Chart */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-slate-700 dark:text-slate-200">{t.cashFlow}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{t.thisMonth}</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-red-500/20 dark:bg-red-400/20 rounded-t"
                        style={{ height: `${h}%` }}
                      >
                        <div 
                          className="w-full bg-red-500 dark:bg-red-400 rounded-t transition-all duration-500"
                          style={{ height: `${h * 0.7}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
                <div className="absolute -left-4 -top-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              </div>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {[t.production, t.materials, t.warehouse, t.quality, t.costing].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-300 shadow-md border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: t.factories, icon: Factory },
              { value: "2M+", label: t.units, icon: Package },
              { value: "45+", label: t.countries, icon: Globe },
              { value: "15+", label: t.inManufacturing, icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: t.productionTitle, desc: t.productionDesc, stat: t.productionStat, color: "blue" },
              { icon: Package, title: t.inventoryTitle, desc: t.inventoryDesc, stat: t.inventoryStat, color: "orange" },
              { icon: Warehouse, title: t.warehouseTitle, desc: t.warehouseDesc, stat: t.warehouseStat, color: "purple" },
              { icon: Calendar, title: t.ordersTitle, desc: t.ordersDesc, stat: t.ordersStat, color: "green" },
              { icon: CircleDollarSign, title: t.costingTitle, desc: t.costingDesc, stat: t.costingStat, color: "yellow" },
              { icon: BarChart3, title: t.analyticsTitle, desc: t.analyticsDesc, stat: t.analyticsStat, color: "pink" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {feature.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-red-800 dark:text-red-400">
                    <BadgeCheck className="w-4 h-4" />
                    {feature.stat}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/inducore/features">
              <Button size="lg" variant="outline" className="border-red-800 text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20">
                {t.exploreAll}
                <Arrow className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* NEXA AI Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.nexaBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.nexaTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.nexaSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.nexaFeature1Title, desc: t.nexaFeature1Desc, icon: Gauge },
              { title: t.nexaFeature2Title, desc: t.nexaFeature2Desc, icon: BadgeCheck },
              { title: t.nexaFeature3Title, desc: t.nexaFeature3Desc, icon: FileText },
              { title: t.nexaFeature4Title, desc: t.nexaFeature4Desc, icon: Cpu },
              { title: t.nexaFeature5Title, desc: t.nexaFeature5Desc, icon: TrendingUp },
              { title: t.nexaFeature6Title, desc: t.nexaFeature6Desc, icon: Wrench },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mobile Apps Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              {t.mobileAppsBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.mobileAppsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.mobileAppsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.adminAppTitle, desc: t.adminAppDesc, icon: Settings, color: "blue" },
              { title: t.supervisorAppTitle, desc: t.supervisorAppDesc, icon: UserCog, color: "purple" },
              { title: t.warehouseAppTitle, desc: t.warehouseAppDesc, icon: Warehouse, color: "orange" },
              { title: t.workerAppTitle, desc: t.workerAppDesc, icon: Wrench, color: "green" },
              { title: t.customerAppTitle, desc: t.customerAppDesc, icon: Users, color: "pink" },
            ].map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
              >
                <div className={`w-14 h-14 rounded-xl bg-${app.color}-100 dark:bg-${app.color}-900/30 flex items-center justify-center mb-4`}>
                  <app.icon className={`w-7 h-7 text-${app.color}-600 dark:text-${app.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ROI Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-red-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              {t.roiBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.roiTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.roiSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { value: "40%", label: t.productivityIncrease, desc: t.productivityDesc, icon: Gauge },
              { value: "35%", label: t.wasteReduction, desc: t.wasteDesc, icon: Package },
              { value: "60%", label: t.theftPrevention, desc: t.theftDesc, icon: Lock },
              { value: "100%", label: t.accountControl, desc: t.accountControlDesc, icon: DollarSign },
              { value: "45%", label: t.qualitySatisfaction, desc: t.qualitySatisfactionDesc, icon: BadgeCheck },
              { value: "50%", label: t.timesSaved, desc: t.timesSavedDesc, icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <stat.icon className="w-8 h-8 text-red-800 dark:text-red-400 mb-4" />
                <div className="text-4xl font-bold text-red-800 dark:text-red-400 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications & Compliance Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              {t.certificationsBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.certificationsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.certificationsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: t.gdprCompliant, desc: t.gdprDesc, icon: Shield, badge: "EU", color: "blue" },
              { title: t.soc2Certified, desc: t.soc2CertDesc, icon: Award, badge: "USA", color: "green" },
              { title: t.iso27001Cert, desc: t.iso27001CertDesc, icon: BadgeCheck, badge: "ISO", color: "purple" },
              { title: t.hipaaCompliant, desc: t.hipaaDesc, icon: ShieldCheck, badge: "USA", color: "red" },
              { title: t.encryptionStandard, desc: t.encryptionDesc, icon: Lock, badge: "AES", color: "yellow" },
              { title: t.cloudInfra, desc: t.cloudDesc, icon: Cloud, badge: "99.99%", color: "cyan" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 relative overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-3 right-3 px-2 py-1 bg-blue-100 dark:bg-blue-900/50 rounded text-xs font-bold text-blue-700 dark:text-blue-300">
                  {cert.badge}
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Regulatory Bodies */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">
              {language === "ar" ? "معتمد من الهيئات التنظيمية العالمية" : "Approved by Global Regulatory Bodies"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "EU Commission", region: "🇪🇺 Europe" },
                { name: "FTC", region: "🇺🇸 USA" },
                { name: "BSI", region: "🇬🇧 UK" },
                { name: "BaFin", region: "🇩🇪 Germany" },
                { name: "CNIL", region: "🇫🇷 France" },
                { name: "ICO", region: "🇬🇧 UK" },
              ].map((body, i) => (
                <div key={i} className="bg-white dark:bg-slate-700 rounded-lg p-3 text-center border border-slate-200 dark:border-slate-600">
                  <div className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{body.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{body.region}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cloud Provider Logos */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-6">
              {language === "ar" ? "مستضاف على منصات سحابية رائدة عالمياً" : "Hosted on World-Leading Cloud Platforms"}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "Google Cloud", icon: Cloud, desc: language === "ar" ? "مراكز بيانات أوروبية" : "European Data Centers" },
              { name: "Amazon AWS", icon: Database, desc: language === "ar" ? "تشفير متقدم" : "Advanced Encryption" },
              { name: "Microsoft Azure", icon: Server, desc: language === "ar" ? "استرداد الكوارث" : "Disaster Recovery" },
            ].map((provider, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <provider.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="font-bold text-slate-700 dark:text-slate-200">{provider.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{provider.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trusted Clients Section */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.trustedByTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {t.trustedBySubtitle}
            </p>
          </div>
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: "Bosch", country: "🇩🇪 Germany", industry: "Manufacturing" },
              { name: "Siemens", country: "🇩🇪 Germany", industry: "Industrial" },
              { name: "Fiat", country: "🇮🇹 Italy", industry: "Automotive" },
              { name: "Pirelli", country: "🇮🇹 Italy", industry: "Tires" },
              { name: "Philips", country: "🇳🇱 Netherlands", industry: "Electronics" },
              { name: "Volvo", country: "🇸🇪 Sweden", industry: "Automotive" },
              { name: "Michelin", country: "🇫🇷 France", industry: "Tires" },
              { name: "ThyssenKrupp", country: "🇩🇪 Germany", industry: "Steel" },
              { name: "Benetton", country: "🇮🇹 Italy", industry: "Textile" },
              { name: "BASF", country: "🇩🇪 Germany", industry: "Chemical" },
              { name: "Schneider Electric", country: "🇫🇷 France", industry: "Energy" },
              { name: "ABB", country: "🇨🇭 Switzerland", industry: "Robotics" },
              { name: "Luxottica", country: "🇮🇹 Italy", industry: "Eyewear" },
              { name: "Ferrero", country: "🇮🇹 Italy", industry: "Food" },
              { name: "BMW", country: "🇩🇪 Germany", industry: "Automotive" },
              { name: "Airbus", country: "🇫🇷 France", industry: "Aerospace" },
              { name: "Henkel", country: "🇩🇪 Germany", industry: "Chemical" },
              { name: "Danone", country: "🇫🇷 France", industry: "Food" },
            ].map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-600 text-center hover:shadow-lg hover:border-red-200 dark:hover:border-red-800 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-2 group-hover:bg-red-100 transition-colors">
                  <Building className="w-5 h-5 text-red-700 dark:text-red-400" />
                </div>
                <div className="font-bold text-slate-700 dark:text-slate-200 mb-0.5 text-sm">
                  {client.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {client.country}
                </div>
                <div className="text-[10px] text-red-600 dark:text-red-400 mt-1 font-medium">
                  {client.industry}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            {[
              { icon: Star, value: "4.9/5", label: language === "ar" ? "تقييم العملاء" : "Customer Rating" },
              { icon: Users, value: "50,000+", label: language === "ar" ? "مستخدم نشط" : "Active Users" },
              { icon: Globe, value: "45+", label: language === "ar" ? "دولة" : "Countries" },
              { icon: Award, value: "15+", label: language === "ar" ? "جائزة صناعية" : "Industry Awards" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-red-700 dark:text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{item.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chamber of Commerce Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
                <Landmark className="w-4 h-4" />
                {t.chamberBadge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t.chamberTitle}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {t.chamberSubtitle}
              </p>
              
              <div className="space-y-4">
                {[
                  { title: t.chamberFeature1, desc: t.chamberFeature1Desc, icon: LayoutGrid },
                  { title: t.chamberFeature2, desc: t.chamberFeature2Desc, icon: DollarSign },
                  { title: t.chamberFeature3, desc: t.chamberFeature3Desc, icon: Users },
                  { title: t.chamberFeature4, desc: t.chamberFeature4Desc, icon: Award },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chamber Pricing Tiers */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { tier: language === "ar" ? "الصغيرة" : "Small", discount: "15%", employees: "1-50" },
                  { tier: language === "ar" ? "المتوسطة" : "Medium", discount: "25%", employees: "51-200" },
                  { tier: language === "ar" ? "الكبيرة" : "Enterprise", discount: "40%", employees: "200+" },
                ].map((tier, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-800 text-center">
                    <div className="text-amber-700 dark:text-amber-400 font-bold text-lg">{tier.discount}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{tier.tier}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-500">{tier.employees} {language === "ar" ? "موظف" : "employees"}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/inducore/contact" className="inline-block mt-8">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  {t.chamberCTA}
                  <Arrow className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Chamber Logos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { name: "German Chamber of Industry", country: "🇩🇪 IHK Deutschland", members: "3.6M+" },
                { name: "Italian Industrial Federation", country: "🇮🇹 Confindustria", members: "150K+" },
                { name: "French Chamber of Commerce", country: "🇫🇷 CCI France", members: "5M+" },
                { name: "Dutch Industry Association", country: "🇳🇱 VNO-NCW", members: "120K+" },
                { name: "Austrian Economic Chamber", country: "🇦🇹 WKO", members: "500K+" },
                { name: "Swiss Industry Association", country: "🇨🇭 Swissmem", members: "1.4K+" },
                { name: "Spanish Chamber of Commerce", country: "🇪🇸 Cámaras España", members: "3M+" },
                { name: "Polish Business Council", country: "🇵🇱 KIG Poland", members: "2M+" },
              ].map((chamber, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-700 rounded-xl p-5 shadow-lg border border-slate-200 dark:border-slate-600 text-center hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-3">
                    <Landmark className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                    {chamber.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {chamber.country}
                  </div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400 mt-1 font-medium">
                    {chamber.members} {language === "ar" ? "عضو" : "members"}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-800 to-red-900 dark:from-red-900 dark:to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            
            <Link to="/inducore/contact">
              <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
                {t.ctaButton}
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-red-100">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                {t.benefit1}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                {t.benefit2}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                {t.benefit3}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
