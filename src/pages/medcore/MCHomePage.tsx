import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, Heart, Stethoscope, Pill, 
  FlaskConical, Receipt, Activity, Shield, Globe, 
  Zap, Lock, Building2, Users, CheckCircle2, 
  Calendar, ClipboardList, FileText, Smartphone,
  Clock, TrendingUp, BadgeCheck, Server, BarChart3,
  HeartPulse, Syringe, Microscope, UserCog, Video,
  Sparkles, Crown, Rocket, X, Check, Building
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    heroTitle: "First ERP System For",
    heroTitleHighlight: "Healthcare Industry",
    heroSubtitle: "The world's first system designed specifically for healthcare institutions. Supports patients, appointments, pharmacy, laboratory, and everything you need.",
    requestDemo: "Start Free Trial",
    watchDemo: "Watch Demo",
    badge: "#1 Medical Software in Europe & UK",
    tagline: "Quality Worth Trusting",
    noCreditCard: "No credit card",
    quickSetup: "Quick setup",
    hipaaCompliant: "HIPAA Compliant",
    
    // Stats
    hospitals: "Healthcare Institutions",
    patients: "Patients Managed",
    countries: "Countries",
    inHealthcare: "yrs in Healthcare",
    
    // Features
    featuresTitle: "Everything You Need in One System",
    featuresSubtitle: "Complete ERP system covering all your healthcare needs from patient management to billing and analytics",
    exploreAll: "Explore All Features",
    
    emrTitle: "Electronic Medical Records",
    emrDesc: "Complete patient records with clinical history, diagnoses, treatments, and lab results in one secure platform.",
    emrStat: "Full History",
    
    appointmentsTitle: "Smart Scheduling",
    appointmentsDesc: "Intelligent appointment booking with doctor availability, specialty matching, and automated reminders.",
    appointmentsStat: "Auto-Scheduling",
    
    pharmacyTitle: "Pharmacy Management",
    pharmacyDesc: "Full pharmacy operations including inventory, prescriptions, dispensing, and drug interaction alerts.",
    pharmacyStat: "Drug Safety",
    
    laboratoryTitle: "Laboratory Integration",
    laboratoryDesc: "Seamless lab management with test ordering, results tracking, and automatic reporting.",
    laboratoryStat: "Fast Results",
    
    billingTitle: "Medical Billing & Insurance",
    billingDesc: "Comprehensive billing system with insurance claims, payment tracking, and financial reporting.",
    billingStat: "Claims Processing",
    
    analyticsTitle: "Healthcare Analytics",
    analyticsDesc: "Real-time dashboards, clinical insights, and AI-powered predictions for better decision making.",
    analyticsStat: "AI Insights",
    
    // Trust Section
    trustTitle: "Trusted by Healthcare Leaders",
    trustSubtitle: "Join thousands of healthcare institutions worldwide",
    
    // CTA
    ctaTitle: "Ready to Transform Your Healthcare?",
    ctaSubtitle: "Join 500+ institutions using MedCore for efficient healthcare management",
    ctaButton: "Start Digital Transformation",
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Full support",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Hear from healthcare professionals using MedCore",
    
    // Dashboard Preview
    dashboardLabel: "medcore",
    safeLevel: "Safe Level",
    revenue: "Revenue",
    expenses: "Expenses",
    profits: "Profits",
    patientsLabel: "Patients",
    appointments: "Appointments",
    thisMonth: "this month",
    cashFlow: "Cash Flow",
    recentAppointments: "Recent Appointments",
    pending: "Pending",
    confirmed: "Confirmed",
    completed: "Completed",
    appointmentsGrowth: "Appointments Growth",
    
    // Feature Tags
    records: "Records",
    appointmentsTag: "Appointments",
    pharmacy: "Pharmacy",
    laboratory: "Laboratory",
    billing: "Billing",
    
    // Pricing Section
    pricingTitle: "Choose the Perfect Plan",
    pricingSubtitle: "Flexible pricing designed for healthcare institutions of all sizes",
    transparentPricing: "Transparent Pricing",
    perMonth: "/month",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    
    // Plans
    starterPlan: "Starter",
    starterDesc: "Perfect for small clinics and practices",
    professionalPlan: "Professional",
    professionalDesc: "Ideal for growing healthcare facilities",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Complete solution for large hospitals",
    
    // Features per plan
    upToUsers: "Up to {n} users",
    patientsLimit: "Up to {n} patients",
    unlimitedUsers: "Unlimited users",
    unlimitedPatients: "Unlimited patients",
    basicEMR: "Basic EMR",
    advancedEMR: "Advanced EMR",
    fullEMR: "Full EMR Suite",
    appointmentManagement: "Appointment Management",
    basicReports: "Basic Reports",
    advancedReports: "Advanced Reports",
    customReports: "Custom Reports & Analytics",
    emailSupport: "Email Support",
    prioritySupport: "Priority Support 24/7",
    dedicatedSupport: "Dedicated Account Manager",
    pharmacyModule: "Pharmacy Module",
    labIntegration: "Lab Integration",
    insuranceBilling: "Insurance & Billing",
    apiAccess: "API Access",
    customIntegrations: "Custom Integrations",
    multiLocation: "Multi-location Support",
    
    // Comparison Section
    comparisonTitle: "Why Choose MedCore?",
    comparisonSubtitle: "See the difference MedCore makes in your healthcare operations",
    withoutMedcore: "Without MedCore",
    withMedcore: "With MedCore",
    
    // Comparison items
    comp1Without: "Paper records scattered across departments",
    comp1With: "Centralized digital records accessible instantly",
    comp2Without: "Manual appointment scheduling with conflicts",
    comp2With: "AI-powered scheduling with zero conflicts",
    comp3Without: "Delayed lab results via phone/fax",
    comp3With: "Real-time lab results in patient portal",
    comp4Without: "Insurance claims processed in weeks",
    comp4With: "Automated claims processed in hours",
    comp5Without: "No visibility into operational metrics",
    comp5With: "Real-time dashboards and AI insights",
    comp6Without: "Patient data security concerns",
    comp6With: "HIPAA compliant with enterprise security",
    
    // NEXA AI Agent Section
    nexaTitle: "NEXA AI Agent",
    nexaBadge: "AI-Powered Medical Assistant",
    nexaSubtitle: "Your intelligent medical partner that revolutionizes healthcare delivery with advanced AI capabilities",
    nexaFeature1Title: "X-Ray & Medical Image Analysis",
    nexaFeature1Desc: "Advanced AI analysis of radiological images including X-rays, CT scans, and MRIs with detailed diagnostic reports",
    nexaFeature2Title: "Lab Results Review",
    nexaFeature2Desc: "Comprehensive analysis of blood tests, urine analysis, and all laboratory results with clinical interpretations",
    nexaFeature3Title: "Complete Medical Reports",
    nexaFeature3Desc: "AI-generated comprehensive reports about diagnosis, treatment plans, and drug interactions for physicians",
    nexaFeature4Title: "Voice-Enabled Consultations",
    nexaFeature4Desc: "Doctors can enable voice mode to share patient symptoms and receive real-time AI-assisted analysis",
    nexaFeature5Title: "Drug Interaction Alerts",
    nexaFeature5Desc: "Automatic detection of potential drug interactions and contraindications for patient safety",
    nexaFeature6Title: "Treatment Plan Suggestions",
    nexaFeature6Desc: "Evidence-based treatment recommendations customized to patient history and condition",
    nexaPartner: "Your Effective Medical Partner",
    nexaPartnerDesc: "NEXA AI works alongside physicians to enhance diagnostic accuracy, reduce errors, and improve patient outcomes",
    
    // Mobile Apps Section
    mobileAppsTitle: "Complete Mobile Ecosystem",
    mobileAppsBadge: "Mobile Apps",
    mobileAppsSubtitle: "Full patient lifecycle management with dedicated apps for every stakeholder",
    adminAppTitle: "Admin & Management App",
    adminAppDesc: "Complete control over operations, staff, finances, and multi-branch management from anywhere",
    doctorAppTitle: "Doctor's App",
    doctorAppDesc: "Patient records, appointments, prescriptions, and NEXA AI assistant at your fingertips",
    labAppTitle: "Laboratory App",
    labAppDesc: "Sample management, test processing, and instant result delivery to patients and doctors",
    pharmacyAppTitle: "Pharmacy App",
    pharmacyAppDesc: "Prescription fulfillment, inventory management, and drug interaction warnings",
    patientAppTitle: "Patient App",
    patientAppDesc: "Book appointments, view results, manage medications, and communicate with healthcare providers",
    completeLifecycle: "Complete Patient Lifecycle",
    lifecycleDesc: "Seamless integration from admission to discharge and follow-up care",
    
    // Compliance & Security Section
    complianceTitle: "Enterprise-Grade Security & Compliance",
    complianceBadge: "Security & Compliance",
    complianceSubtitle: "Meeting the highest international standards for healthcare data protection",
    hipaaTitle: "HIPAA Compliant",
    hipaaDesc: "Full compliance with US Health Insurance Portability and Accountability Act",
    gdprTitle: "GDPR Compliant",
    gdprDesc: "Adherence to European Union General Data Protection Regulation",
    encryptionTitle: "Advanced Encryption",
    encryptionDesc: "AES-256 encryption for data at rest and TLS 1.3 for data in transit",
    uptimeTitle: "100% Uptime Ready",
    uptimeDesc: "Enterprise infrastructure with redundancy and disaster recovery",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Certified security, availability, and confidentiality controls",
    isoTitle: "ISO 27001",
    isoDesc: "International standard for information security management",
    
    // ROI & Statistics Section
    roiTitle: "Transform Your Healthcare Operations",
    roiBadge: "Proven Results",
    roiSubtitle: "Data-driven improvements that impact your bottom line and patient care",
    productivityIncrease: "Productivity Increase",
    productivityDesc: "Average improvement in hospital and clinic operational efficiency",
    wasteReduction: "Waste Reduction",
    wasteDesc: "Decrease in resource waste and operational inefficiencies",
    theftPrevention: "Loss Prevention",
    theftDesc: "Reduction in inventory shrinkage and unauthorized access",
    accountControl: "Complete Financial Control",
    accountControlDesc: "Full visibility over accounts, salaries, employees, and expenses",
    patientSatisfaction: "Patient Satisfaction",
    patientSatisfactionDesc: "Improvement in patient experience and service quality",
    timesSaved: "Time Saved",
    timesSavedDesc: "Reduction in administrative tasks and paperwork",
  },
  ar: {
    heroTitle: "أول نظام ERP",
    heroTitleHighlight: "لصناعة الرعاية الصحية",
    heroSubtitle: "أول نظام في العالم مصمم خصيصاً للمؤسسات الصحية. يدعم المرضى، المواعيد، الصيدلية، المختبر، وكل ما تحتاجه.",
    requestDemo: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    badge: "البرنامج الطبي الأول في أوروبا والمملكة المتحدة",
    tagline: "جودة تستحق الثقة",
    noCreditCard: "بدون بطاقة ائتمان",
    quickSetup: "إعداد سريع",
    hipaaCompliant: "متوافق مع HIPAA",
    
    // Stats
    hospitals: "مؤسسة صحية",
    patients: "مريض مُدار",
    countries: "دولة",
    inHealthcare: "سنة في الرعاية الصحية",
    
    // Features
    featuresTitle: "كل ما تحتاجه في نظام واحد",
    featuresSubtitle: "نظام ERP متكامل يغطي جميع احتياجات الرعاية الصحية من إدارة المرضى إلى الفوترة والتحليلات",
    exploreAll: "استكشف جميع المميزات",
    
    emrTitle: "السجلات الطبية الإلكترونية",
    emrDesc: "سجلات مرضى كاملة مع التاريخ السريري والتشخيصات والعلاجات ونتائج المختبر في منصة آمنة واحدة.",
    emrStat: "سجل كامل",
    
    appointmentsTitle: "جدولة ذكية",
    appointmentsDesc: "حجز مواعيد ذكي مع توفر الأطباء ومطابقة التخصص والتذكيرات التلقائية.",
    appointmentsStat: "جدولة تلقائية",
    
    pharmacyTitle: "إدارة الصيدلية",
    pharmacyDesc: "عمليات صيدلية كاملة تشمل المخزون والوصفات والصرف وتنبيهات تفاعل الأدوية.",
    pharmacyStat: "سلامة الأدوية",
    
    laboratoryTitle: "تكامل المختبر",
    laboratoryDesc: "إدارة مختبر سلسة مع طلب الفحوصات وتتبع النتائج والتقارير التلقائية.",
    laboratoryStat: "نتائج سريعة",
    
    billingTitle: "الفوترة الطبية والتأمين",
    billingDesc: "نظام فوترة شامل مع مطالبات التأمين وتتبع المدفوعات والتقارير المالية.",
    billingStat: "معالجة المطالبات",
    
    analyticsTitle: "تحليلات الرعاية الصحية",
    analyticsDesc: "لوحات معلومات في الوقت الفعلي ورؤى سريرية وتنبؤات مدعومة بالذكاء الاصطناعي لاتخاذ قرارات أفضل.",
    analyticsStat: "رؤى ذكية",
    
    // Trust Section
    trustTitle: "موثوق من قادة الرعاية الصحية",
    trustSubtitle: "انضم لآلاف المؤسسات الصحية حول العالم",
    
    // CTA
    ctaTitle: "مستعد لتحويل رعايتك الصحية؟",
    ctaSubtitle: "انضم لأكثر من 500 مؤسسة تستخدم MedCore لإدارة الرعاية الصحية بكفاءة",
    ctaButton: "ابدأ التحول الرقمي",
    benefit1: "14 يوم تجربة مجانية",
    benefit2: "بدون بطاقة ائتمان",
    benefit3: "دعم كامل",
    
    // Testimonials
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "استمع لمتخصصي الرعاية الصحية الذين يستخدمون MedCore",
    
    // Dashboard Preview
    dashboardLabel: "ميدكور",
    safeLevel: "مستوى آمن",
    revenue: "الإيرادات",
    expenses: "المصروفات",
    profits: "الأرباح",
    patientsLabel: "المرضى",
    appointments: "المواعيد",
    thisMonth: "هذا الشهر",
    cashFlow: "التدفق النقدي",
    recentAppointments: "أحدث المواعيد",
    pending: "قيد الانتظار",
    confirmed: "مؤكد",
    completed: "مكتمل",
    appointmentsGrowth: "نمو المواعيد",
    
    // Feature Tags
    records: "السجلات",
    appointmentsTag: "المواعيد",
    pharmacy: "الصيدلية",
    laboratory: "المختبر",
    billing: "الفوترة",
    
    // Pricing Section
    pricingTitle: "اختر الباقة المناسبة",
    pricingSubtitle: "أسعار مرنة مصممة للمؤسسات الصحية بجميع أحجامها",
    transparentPricing: "أسعار شفافة",
    perMonth: "/شهرياً",
    mostPopular: "الأكثر طلباً",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل معنا",
    
    // Plans
    starterPlan: "المبتدئ",
    starterDesc: "مثالي للعيادات الصغيرة والممارسات الخاصة",
    professionalPlan: "الاحترافي",
    professionalDesc: "مثالي للمرافق الصحية النامية",
    enterprisePlan: "المؤسسات",
    enterpriseDesc: "حل متكامل للمستشفيات الكبيرة",
    
    // Features per plan
    upToUsers: "حتى {n} مستخدمين",
    patientsLimit: "حتى {n} مريض",
    unlimitedUsers: "مستخدمين غير محدود",
    unlimitedPatients: "مرضى غير محدود",
    basicEMR: "سجلات طبية أساسية",
    advancedEMR: "سجلات طبية متقدمة",
    fullEMR: "باقة السجلات الطبية الكاملة",
    appointmentManagement: "إدارة المواعيد",
    basicReports: "تقارير أساسية",
    advancedReports: "تقارير متقدمة",
    customReports: "تقارير وتحليلات مخصصة",
    emailSupport: "دعم عبر البريد الإلكتروني",
    prioritySupport: "دعم أولوية 24/7",
    dedicatedSupport: "مدير حساب مخصص",
    pharmacyModule: "نظام الصيدلية",
    labIntegration: "تكامل المختبر",
    insuranceBilling: "التأمين والفوترة",
    apiAccess: "واجهة برمجة التطبيقات",
    customIntegrations: "تكاملات مخصصة",
    multiLocation: "دعم متعدد الفروع",
    
    // Comparison Section
    comparisonTitle: "لماذا تختار MedCore؟",
    comparisonSubtitle: "شاهد الفرق الذي يحدثه MedCore في عملياتك الصحية",
    withoutMedcore: "بدون MedCore",
    withMedcore: "مع MedCore",
    
    // Comparison items
    comp1Without: "سجلات ورقية متناثرة عبر الأقسام",
    comp1With: "سجلات رقمية مركزية متاحة فوراً",
    comp2Without: "جدولة يدوية مع تعارضات في المواعيد",
    comp2With: "جدولة ذكية بدون أي تعارضات",
    comp3Without: "نتائج مختبر متأخرة عبر الهاتف/الفاكس",
    comp3With: "نتائج فورية في بوابة المريض",
    comp4Without: "معالجة مطالبات التأمين في أسابيع",
    comp4With: "معالجة آلية للمطالبات في ساعات",
    comp5Without: "لا رؤية للمقاييس التشغيلية",
    comp5With: "لوحات معلومات ورؤى ذكية فورية",
    comp6Without: "مخاوف أمنية حول بيانات المرضى",
    comp6With: "متوافق مع HIPAA وأمان مؤسسي",
    
    // NEXA AI Agent Section
    nexaTitle: "وكيل نيكسا للذكاء الاصطناعي",
    nexaBadge: "مساعد طبي مدعوم بالذكاء الاصطناعي",
    nexaSubtitle: "شريكك الطبي الذكي الذي يحدث ثورة في تقديم الرعاية الصحية بقدرات الذكاء الاصطناعي المتقدمة",
    nexaFeature1Title: "تحليل الأشعة والصور الطبية",
    nexaFeature1Desc: "تحليل متقدم بالذكاء الاصطناعي للصور الإشعاعية بما في ذلك الأشعة السينية والتصوير المقطعي والرنين المغناطيسي مع تقارير تشخيصية مفصلة",
    nexaFeature2Title: "مراجعة نتائج التحاليل",
    nexaFeature2Desc: "تحليل شامل لفحوصات الدم وتحليل البول وجميع نتائج المختبر مع تفسيرات سريرية",
    nexaFeature3Title: "تقارير طبية شاملة",
    nexaFeature3Desc: "تقارير شاملة مولدة بالذكاء الاصطناعي عن التشخيص وخطط العلاج والتعارضات الدوائية للأطباء",
    nexaFeature4Title: "استشارات صوتية",
    nexaFeature4Desc: "يمكن للأطباء تفعيل وضع الصوت لمشاركة أعراض المريض والحصول على تحليل فوري بمساعدة الذكاء الاصطناعي",
    nexaFeature5Title: "تنبيهات التعارضات الدوائية",
    nexaFeature5Desc: "كشف تلقائي للتعارضات الدوائية المحتملة وموانع الاستخدام لسلامة المريض",
    nexaFeature6Title: "اقتراحات خطط العلاج",
    nexaFeature6Desc: "توصيات علاجية قائمة على الأدلة ومخصصة لتاريخ المريض وحالته",
    nexaPartner: "شريكك الطبي الفعّال",
    nexaPartnerDesc: "يعمل وكيل نيكسا جنباً إلى جنب مع الأطباء لتعزيز دقة التشخيص وتقليل الأخطاء وتحسين نتائج المرضى",
    
    // Mobile Apps Section
    mobileAppsTitle: "منظومة تطبيقات الجوال المتكاملة",
    mobileAppsBadge: "تطبيقات الجوال",
    mobileAppsSubtitle: "إدارة كاملة لدورة حياة المريض مع تطبيقات مخصصة لكل طرف",
    adminAppTitle: "تطبيق الإدارة",
    adminAppDesc: "تحكم كامل في العمليات والموظفين والمالية وإدارة الفروع المتعددة من أي مكان",
    doctorAppTitle: "تطبيق الأطباء",
    doctorAppDesc: "سجلات المرضى والمواعيد والوصفات ومساعد نيكسا للذكاء الاصطناعي في متناول يدك",
    labAppTitle: "تطبيق المختبر",
    labAppDesc: "إدارة العينات ومعالجة الفحوصات وتسليم النتائج فوراً للمرضى والأطباء",
    pharmacyAppTitle: "تطبيق الصيدلية",
    pharmacyAppDesc: "صرف الوصفات وإدارة المخزون وتحذيرات التعارضات الدوائية",
    patientAppTitle: "تطبيق المرضى",
    patientAppDesc: "حجز المواعيد وعرض النتائج وإدارة الأدوية والتواصل مع مقدمي الرعاية الصحية",
    completeLifecycle: "دورة حياة المريض الكاملة",
    lifecycleDesc: "تكامل سلس من القبول إلى الخروج والمتابعة",
    
    // Compliance & Security Section
    complianceTitle: "أمان وامتثال على مستوى المؤسسات",
    complianceBadge: "الأمان والامتثال",
    complianceSubtitle: "نلبي أعلى المعايير الدولية لحماية بيانات الرعاية الصحية",
    hipaaTitle: "متوافق مع HIPAA",
    hipaaDesc: "امتثال كامل لقانون نقل التأمين الصحي والمساءلة الأمريكي",
    gdprTitle: "متوافق مع GDPR",
    gdprDesc: "الالتزام بلائحة حماية البيانات العامة للاتحاد الأوروبي",
    encryptionTitle: "تشفير متقدم",
    encryptionDesc: "تشفير AES-256 للبيانات المخزنة و TLS 1.3 للبيانات المنقولة",
    uptimeTitle: "جاهزية 100%",
    uptimeDesc: "بنية تحتية مؤسسية مع التكرار والتعافي من الكوارث",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "ضوابط معتمدة للأمان والتوفر والسرية",
    isoTitle: "ISO 27001",
    isoDesc: "المعيار الدولي لإدارة أمن المعلومات",
    
    // ROI & Statistics Section
    roiTitle: "حوّل عمليات الرعاية الصحية الخاصة بك",
    roiBadge: "نتائج مثبتة",
    roiSubtitle: "تحسينات مبنية على البيانات تؤثر على أرباحك ورعاية المرضى",
    productivityIncrease: "زيادة الإنتاجية",
    productivityDesc: "متوسط التحسن في كفاءة عمليات المستشفيات والعيادات",
    wasteReduction: "تقليل الهدر",
    wasteDesc: "انخفاض في هدر الموارد وعدم كفاءة العمليات",
    theftPrevention: "منع الخسائر",
    theftDesc: "انخفاض في تقلص المخزون والوصول غير المصرح به",
    accountControl: "تحكم مالي كامل",
    accountControlDesc: "رؤية كاملة للحسابات والرواتب والموظفين والمصاريف",
    patientSatisfaction: "رضا المرضى",
    patientSatisfactionDesc: "تحسن في تجربة المريض وجودة الخدمة",
    timesSaved: "توفير الوقت",
    timesSavedDesc: "انخفاض في المهام الإدارية والأعمال الورقية",
  },
  tr: {
    heroTitle: "Sağlık Sektörü İçin",
    heroTitleHighlight: "İlk ERP Sistemi",
    heroSubtitle: "Sağlık kurumları için özel olarak tasarlanmış dünyanın ilk sistemi. Hastalar, randevular, eczane, laboratuvar ve ihtiyacınız olan her şeyi destekler.",
    requestDemo: "Ücretsiz Deneme",
    watchDemo: "Demo İzle",
    badge: "Avrupa ve Körfez'de İlk Tercih",
    tagline: "Güvenilir Kalite",
    noCreditCard: "Kredi kartı yok",
    quickSetup: "Hızlı kurulum",
    hipaaCompliant: "HIPAA Uyumlu",
    hospitals: "Sağlık Kurumu",
    patients: "Yönetilen Hasta",
    countries: "Ülke",
    inHealthcare: "yıl Sağlık Sektöründe",
    featuresTitle: "Tek Sistemde Her Şey",
    featuresSubtitle: "Hasta yönetiminden faturalamaya kadar tüm sağlık ihtiyaçlarınızı karşılayan eksiksiz ERP sistemi",
    exploreAll: "Tüm Özellikleri Keşfet",
    emrTitle: "Elektronik Tıbbi Kayıtlar",
    emrDesc: "Tek güvenli platformda klinik geçmiş, teşhisler, tedaviler ve laboratuvar sonuçları ile eksiksiz hasta kayıtları.",
    emrStat: "Tam Geçmiş",
    appointmentsTitle: "Akıllı Planlama",
    appointmentsDesc: "Doktor müsaitliği, uzmanlık eşleştirme ve otomatik hatırlatmalarla akıllı randevu rezervasyonu.",
    appointmentsStat: "Otomatik Planlama",
    pharmacyTitle: "Eczane Yönetimi",
    pharmacyDesc: "Envanter, reçeteler, dağıtım ve ilaç etkileşim uyarıları dahil tam eczane operasyonları.",
    pharmacyStat: "İlaç Güvenliği",
    laboratoryTitle: "Laboratuvar Entegrasyonu",
    laboratoryDesc: "Test siparişi, sonuç takibi ve otomatik raporlama ile sorunsuz laboratuvar yönetimi.",
    laboratoryStat: "Hızlı Sonuçlar",
    billingTitle: "Tıbbi Faturalama ve Sigorta",
    billingDesc: "Sigorta talepleri, ödeme takibi ve finansal raporlama ile kapsamlı faturalama sistemi.",
    billingStat: "Talep İşleme",
    analyticsTitle: "Sağlık Analitiği",
    analyticsDesc: "Daha iyi karar verme için gerçek zamanlı panolar, klinik içgörüler ve yapay zeka destekli tahminler.",
    analyticsStat: "AI İçgörüleri",
    trustTitle: "Sağlık Liderlerinin Güvendiği",
    trustSubtitle: "Dünya çapında binlerce sağlık kurumuna katılın",
    ctaTitle: "Sağlık Hizmetinizi Dönüştürmeye Hazır mısınız?",
    ctaSubtitle: "Verimli sağlık yönetimi için MedCore kullanan 500+ kuruma katılın",
    ctaButton: "Dijital Dönüşümü Başlat",
    benefit1: "14 gün ücretsiz deneme",
    benefit2: "Kredi kartı gerekmez",
    benefit3: "Tam destek",
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonialsSubtitle: "MedCore kullanan sağlık profesyonellerinden dinleyin",
    
    // Dashboard Preview
    dashboardLabel: "medcore",
    safeLevel: "Güvenli Seviye",
    revenue: "Gelir",
    expenses: "Giderler",
    profits: "Kar",
    patientsLabel: "Hastalar",
    appointments: "Randevular",
    thisMonth: "bu ay",
    cashFlow: "Nakit Akışı",
    recentAppointments: "Son Randevular",
    pending: "Beklemede",
    confirmed: "Onaylandı",
    completed: "Tamamlandı",
    appointmentsGrowth: "Randevu Artışı",
    
    // Feature Tags
    records: "Kayıtlar",
    appointmentsTag: "Randevular",
    pharmacy: "Eczane",
    laboratory: "Laboratuvar",
    billing: "Faturalama",
    
    // Pricing Section
    pricingTitle: "Mükemmel Planı Seçin",
    pricingSubtitle: "Her büyüklükteki sağlık kurumu için esnek fiyatlandırma",
    transparentPricing: "Şeffaf Fiyatlandırma",
    perMonth: "/ay",
    mostPopular: "En Popüler",
    getStarted: "Başlayın",
    contactSales: "Satışla İletişim",
    starterPlan: "Başlangıç",
    starterDesc: "Küçük klinikler için ideal",
    professionalPlan: "Profesyonel",
    professionalDesc: "Büyüyen sağlık tesisleri için",
    enterprisePlan: "Kurumsal",
    enterpriseDesc: "Büyük hastaneler için tam çözüm",
    upToUsers: "{n} kullanıcıya kadar",
    patientsLimit: "{n} hastaya kadar",
    unlimitedUsers: "Sınırsız kullanıcı",
    unlimitedPatients: "Sınırsız hasta",
    basicEMR: "Temel EMR",
    advancedEMR: "Gelişmiş EMR",
    fullEMR: "Tam EMR Paketi",
    appointmentManagement: "Randevu Yönetimi",
    basicReports: "Temel Raporlar",
    advancedReports: "Gelişmiş Raporlar",
    customReports: "Özel Raporlar ve Analitik",
    emailSupport: "E-posta Desteği",
    prioritySupport: "7/24 Öncelikli Destek",
    dedicatedSupport: "Özel Hesap Yöneticisi",
    pharmacyModule: "Eczane Modülü",
    labIntegration: "Laboratuvar Entegrasyonu",
    insuranceBilling: "Sigorta ve Faturalama",
    apiAccess: "API Erişimi",
    customIntegrations: "Özel Entegrasyonlar",
    multiLocation: "Çoklu Konum Desteği",
    comparisonTitle: "Neden MedCore?",
    comparisonSubtitle: "MedCore'un operasyonlarınızda yarattığı farkı görün",
    withoutMedcore: "MedCore Olmadan",
    withMedcore: "MedCore İle",
    comp1Without: "Departmanlar arasında dağınık kağıt kayıtlar",
    comp1With: "Anında erişilebilir merkezi dijital kayıtlar",
    comp2Without: "Çakışmalı manuel randevu planlama",
    comp2With: "Sıfır çakışmalı AI destekli planlama",
    comp3Without: "Telefon/faks ile geciken laboratuvar sonuçları",
    comp3With: "Hasta portalında gerçek zamanlı sonuçlar",
    comp4Without: "Haftalarca süren sigorta talep işlemleri",
    comp4With: "Saatler içinde otomatik talep işleme",
    comp5Without: "Operasyonel metriklerde görünürlük yok",
    comp5With: "Gerçek zamanlı panolar ve AI içgörüleri",
    comp6Without: "Hasta verisi güvenliği endişeleri",
    comp6With: "HIPAA uyumlu kurumsal güvenlik",
    
    // NEXA AI Agent Section
    nexaTitle: "NEXA AI Ajanı",
    nexaBadge: "AI Destekli Tıbbi Asistan",
    nexaSubtitle: "Gelişmiş AI yetenekleriyle sağlık hizmetlerinde devrim yaratan akıllı tıbbi ortağınız",
    nexaFeature1Title: "X-Ray ve Tıbbi Görüntü Analizi",
    nexaFeature1Desc: "X-ray, BT taramaları ve MRI dahil radyolojik görüntülerin detaylı tanı raporlarıyla gelişmiş AI analizi",
    nexaFeature2Title: "Laboratuvar Sonuçları İnceleme",
    nexaFeature2Desc: "Kan testleri, idrar analizi ve tüm laboratuvar sonuçlarının klinik yorumlarla kapsamlı analizi",
    nexaFeature3Title: "Kapsamlı Tıbbi Raporlar",
    nexaFeature3Desc: "Hekimler için tanı, tedavi planları ve ilaç etkileşimleri hakkında AI tarafından oluşturulan kapsamlı raporlar",
    nexaFeature4Title: "Sesli Danışmanlık",
    nexaFeature4Desc: "Doktorlar hasta belirtilerini paylaşmak ve gerçek zamanlı AI destekli analiz almak için ses modunu etkinleştirebilir",
    nexaFeature5Title: "İlaç Etkileşim Uyarıları",
    nexaFeature5Desc: "Hasta güvenliği için potansiyel ilaç etkileşimlerinin ve kontrendikasyonların otomatik tespiti",
    nexaFeature6Title: "Tedavi Planı Önerileri",
    nexaFeature6Desc: "Hasta geçmişine ve durumuna özelleştirilmiş kanıta dayalı tedavi önerileri",
    nexaPartner: "Etkili Tıbbi Ortağınız",
    nexaPartnerDesc: "NEXA AI, tanı doğruluğunu artırmak, hataları azaltmak ve hasta sonuçlarını iyileştirmek için hekimlerle birlikte çalışır",
    
    // Mobile Apps Section
    mobileAppsTitle: "Eksiksiz Mobil Ekosistem",
    mobileAppsBadge: "Mobil Uygulamalar",
    mobileAppsSubtitle: "Her paydaş için özel uygulamalarla tam hasta yaşam döngüsü yönetimi",
    adminAppTitle: "Yönetim Uygulaması",
    adminAppDesc: "Operasyonlar, personel, finanslar ve çoklu şube yönetimi üzerinde her yerden tam kontrol",
    doctorAppTitle: "Doktor Uygulaması",
    doctorAppDesc: "Hasta kayıtları, randevular, reçeteler ve NEXA AI asistanı parmaklarınızın ucunda",
    labAppTitle: "Laboratuvar Uygulaması",
    labAppDesc: "Numune yönetimi, test işleme ve hastalara ve doktorlara anında sonuç teslimi",
    pharmacyAppTitle: "Eczane Uygulaması",
    pharmacyAppDesc: "Reçete yerine getirme, envanter yönetimi ve ilaç etkileşim uyarıları",
    patientAppTitle: "Hasta Uygulaması",
    patientAppDesc: "Randevu alma, sonuçları görüntüleme, ilaçları yönetme ve sağlık hizmeti sağlayıcılarıyla iletişim",
    completeLifecycle: "Tam Hasta Yaşam Döngüsü",
    lifecycleDesc: "Kabul den taburculuğa ve takip bakımına kesintisiz entegrasyon",
    
    // Compliance & Security Section
    complianceTitle: "Kurumsal Düzeyde Güvenlik ve Uyumluluk",
    complianceBadge: "Güvenlik ve Uyumluluk",
    complianceSubtitle: "Sağlık verisi koruması için en yüksek uluslararası standartları karşılıyoruz",
    hipaaTitle: "HIPAA Uyumlu",
    hipaaDesc: "ABD Sağlık Sigortası Taşınabilirliği ve Hesap Verebilirlik Yasasına tam uyum",
    gdprTitle: "GDPR Uyumlu",
    gdprDesc: "Avrupa Birliği Genel Veri Koruma Yönetmeliğine uyum",
    encryptionTitle: "Gelişmiş Şifreleme",
    encryptionDesc: "Durağan veriler için AES-256 ve aktarımdaki veriler için TLS 1.3 şifrelemesi",
    uptimeTitle: "100% Çalışma Süresi",
    uptimeDesc: "Yedekleme ve felaket kurtarma ile kurumsal altyapı",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Güvenlik, kullanılabilirlik ve gizlilik kontrolleri sertifikalı",
    isoTitle: "ISO 27001",
    isoDesc: "Bilgi güvenliği yönetimi için uluslararası standart",
    
    // ROI & Statistics Section
    roiTitle: "Sağlık Operasyonlarınızı Dönüştürün",
    roiBadge: "Kanıtlanmış Sonuçlar",
    roiSubtitle: "Kârlılığınızı ve hasta bakımını etkileyen veriye dayalı iyileştirmeler",
    productivityIncrease: "Verimlilik Artışı",
    productivityDesc: "Hastane ve klinik operasyonel verimliliğinde ortalama iyileşme",
    wasteReduction: "İsraf Azaltma",
    wasteDesc: "Kaynak israfı ve operasyonel verimsizliklerde azalma",
    theftPrevention: "Kayıp Önleme",
    theftDesc: "Envanter kaybı ve yetkisiz erişimde azalma",
    accountControl: "Tam Finansal Kontrol",
    accountControlDesc: "Hesaplar, maaşlar, çalışanlar ve masraflar üzerinde tam görünürlük",
    patientSatisfaction: "Hasta Memnuniyeti",
    patientSatisfactionDesc: "Hasta deneyimi ve hizmet kalitesinde iyileşme",
    timesSaved: "Zaman Tasarrufu",
    timesSavedDesc: "İdari görevler ve evrak işlerinde azalma",
  },
  ru: {
    heroTitle: "Первая ERP-система для",
    heroTitleHighlight: "Здравоохранения",
    heroSubtitle: "Первая в мире система, разработанная специально для медицинских учреждений. Поддерживает пациентов, записи, аптеку, лабораторию и всё необходимое.",
    requestDemo: "Бесплатная пробная версия",
    watchDemo: "Смотреть демо",
    badge: "Первый выбор в Европе и Заливе",
    tagline: "Качество, достойное доверия",
    noCreditCard: "Без кредитной карты",
    quickSetup: "Быстрая настройка",
    hipaaCompliant: "Соответствие HIPAA",
    hospitals: "Медицинских учреждений",
    patients: "Управляемых пациентов",
    countries: "Стран",
    inHealthcare: "лет в здравоохранении",
    featuresTitle: "Всё необходимое в одной системе",
    featuresSubtitle: "Комплексная ERP-система, покрывающая все потребности здравоохранения от управления пациентами до биллинга и аналитики",
    exploreAll: "Все функции",
    emrTitle: "Электронные медицинские карты",
    emrDesc: "Полные записи пациентов с клинической историей, диагнозами, лечением и результатами лабораторных исследований на одной защищённой платформе.",
    emrStat: "Полная история",
    appointmentsTitle: "Умное планирование",
    appointmentsDesc: "Интеллектуальная запись с учётом доступности врачей, подбором специальности и автоматическими напоминаниями.",
    appointmentsStat: "Авто-планирование",
    pharmacyTitle: "Управление аптекой",
    pharmacyDesc: "Полные аптечные операции включая инвентарь, рецепты, отпуск и предупреждения о взаимодействии лекарств.",
    pharmacyStat: "Безопасность лекарств",
    laboratoryTitle: "Интеграция лаборатории",
    laboratoryDesc: "Бесшовное управление лабораторией с заказом анализов, отслеживанием результатов и автоматической отчётностью.",
    laboratoryStat: "Быстрые результаты",
    billingTitle: "Медицинский биллинг и страхование",
    billingDesc: "Комплексная система биллинга со страховыми заявками, отслеживанием платежей и финансовой отчётностью.",
    billingStat: "Обработка заявок",
    analyticsTitle: "Аналитика здравоохранения",
    analyticsDesc: "Панели в реальном времени, клинические инсайты и прогнозы на основе ИИ для лучшего принятия решений.",
    analyticsStat: "ИИ-инсайты",
    trustTitle: "Доверяют лидеры здравоохранения",
    trustSubtitle: "Присоединяйтесь к тысячам медицинских учреждений по всему миру",
    ctaTitle: "Готовы трансформировать здравоохранение?",
    ctaSubtitle: "Присоединяйтесь к 500+ учреждениям, использующим MedCore для эффективного управления здравоохранением",
    ctaButton: "Начать цифровую трансформацию",
    benefit1: "14 дней бесплатно",
    benefit2: "Без кредитной карты",
    benefit3: "Полная поддержка",
    testimonialsTitle: "Отзывы клиентов",
    testimonialsSubtitle: "Слушайте медицинских специалистов, использующих MedCore",
    
    // Dashboard Preview
    dashboardLabel: "medcore",
    safeLevel: "Безопасный уровень",
    revenue: "Доход",
    expenses: "Расходы",
    profits: "Прибыль",
    patientsLabel: "Пациенты",
    appointments: "Записи",
    thisMonth: "в этом месяце",
    cashFlow: "Денежный поток",
    recentAppointments: "Последние записи",
    pending: "В ожидании",
    confirmed: "Подтверждено",
    completed: "Завершено",
    appointmentsGrowth: "Рост записей",
    
    // Feature Tags
    records: "Записи",
    appointmentsTag: "Приёмы",
    pharmacy: "Аптека",
    laboratory: "Лаборатория",
    billing: "Биллинг",
    
    // Pricing Section
    pricingTitle: "Выберите идеальный план",
    pricingSubtitle: "Гибкие цены для медицинских учреждений любого размера",
    transparentPricing: "Прозрачные цены",
    perMonth: "/месяц",
    mostPopular: "Самый популярный",
    getStarted: "Начать",
    contactSales: "Связаться с продажами",
    starterPlan: "Стартовый",
    starterDesc: "Идеально для небольших клиник",
    professionalPlan: "Профессиональный",
    professionalDesc: "Для растущих медицинских учреждений",
    enterprisePlan: "Корпоративный",
    enterpriseDesc: "Полное решение для крупных больниц",
    upToUsers: "До {n} пользователей",
    patientsLimit: "До {n} пациентов",
    unlimitedUsers: "Неограничено пользователей",
    unlimitedPatients: "Неограничено пациентов",
    basicEMR: "Базовые ЭМК",
    advancedEMR: "Расширенные ЭМК",
    fullEMR: "Полный пакет ЭМК",
    appointmentManagement: "Управление записями",
    basicReports: "Базовые отчёты",
    advancedReports: "Расширенные отчёты",
    customReports: "Пользовательские отчёты",
    emailSupport: "Поддержка по email",
    prioritySupport: "Приоритетная поддержка 24/7",
    dedicatedSupport: "Персональный менеджер",
    pharmacyModule: "Модуль аптеки",
    labIntegration: "Интеграция лаборатории",
    insuranceBilling: "Страхование и биллинг",
    apiAccess: "API доступ",
    customIntegrations: "Пользовательские интеграции",
    multiLocation: "Мультилокация",
    comparisonTitle: "Почему MedCore?",
    comparisonSubtitle: "Увидьте разницу с MedCore",
    withoutMedcore: "Без MedCore",
    withMedcore: "С MedCore",
    comp1Without: "Бумажные записи разбросаны по отделам",
    comp1With: "Централизованные цифровые записи мгновенно доступны",
    comp2Without: "Ручное планирование с конфликтами",
    comp2With: "ИИ-планирование без конфликтов",
    comp3Without: "Задержка результатов лаборатории",
    comp3With: "Результаты в реальном времени в портале",
    comp4Without: "Обработка страховых заявок неделями",
    comp4With: "Автоматическая обработка за часы",
    comp5Without: "Нет видимости операционных метрик",
    comp5With: "Панели реального времени и ИИ-инсайты",
    comp6Without: "Проблемы безопасности данных",
    comp6With: "HIPAA-совместимая корпоративная безопасность",
    
    // NEXA AI Agent Section
    nexaTitle: "AI-агент NEXA",
    nexaBadge: "Медицинский помощник на базе ИИ",
    nexaSubtitle: "Ваш интеллектуальный медицинский партнёр, революционизирующий здравоохранение с помощью передовых возможностей ИИ",
    nexaFeature1Title: "Анализ рентгена и медицинских изображений",
    nexaFeature1Desc: "Продвинутый ИИ-анализ радиологических изображений, включая рентген, КТ и МРТ с детальными диагностическими отчётами",
    nexaFeature2Title: "Обзор результатов лаборатории",
    nexaFeature2Desc: "Комплексный анализ анализов крови, мочи и всех лабораторных результатов с клиническими интерпретациями",
    nexaFeature3Title: "Полные медицинские отчёты",
    nexaFeature3Desc: "Сгенерированные ИИ комплексные отчёты о диагнозе, планах лечения и взаимодействии лекарств для врачей",
    nexaFeature4Title: "Голосовые консультации",
    nexaFeature4Desc: "Врачи могут включить голосовой режим для описания симптомов и получения анализа от ИИ в реальном времени",
    nexaFeature5Title: "Предупреждения о взаимодействии лекарств",
    nexaFeature5Desc: "Автоматическое обнаружение потенциальных взаимодействий лекарств и противопоказаний для безопасности пациента",
    nexaFeature6Title: "Предложения по плану лечения",
    nexaFeature6Desc: "Рекомендации по лечению на основе доказательств, адаптированные к истории болезни и состоянию пациента",
    nexaPartner: "Ваш эффективный медицинский партнёр",
    nexaPartnerDesc: "NEXA AI работает вместе с врачами для повышения точности диагностики, снижения ошибок и улучшения результатов лечения",
    
    // Mobile Apps Section
    mobileAppsTitle: "Полная мобильная экосистема",
    mobileAppsBadge: "Мобильные приложения",
    mobileAppsSubtitle: "Полное управление жизненным циклом пациента с приложениями для каждого участника",
    adminAppTitle: "Приложение администратора",
    adminAppDesc: "Полный контроль над операциями, персоналом, финансами и управлением филиалами из любого места",
    doctorAppTitle: "Приложение врача",
    doctorAppDesc: "Записи пациентов, записи на приём, рецепты и ИИ-ассистент NEXA под рукой",
    labAppTitle: "Приложение лаборатории",
    labAppDesc: "Управление образцами, обработка тестов и мгновенная доставка результатов пациентам и врачам",
    pharmacyAppTitle: "Приложение аптеки",
    pharmacyAppDesc: "Выполнение рецептов, управление запасами и предупреждения о взаимодействии лекарств",
    patientAppTitle: "Приложение пациента",
    patientAppDesc: "Запись на приём, просмотр результатов, управление лекарствами и связь с медицинскими работниками",
    completeLifecycle: "Полный жизненный цикл пациента",
    lifecycleDesc: "Бесшовная интеграция от госпитализации до выписки и последующего наблюдения",
    
    // Compliance & Security Section
    complianceTitle: "Безопасность и соответствие корпоративного уровня",
    complianceBadge: "Безопасность и соответствие",
    complianceSubtitle: "Соответствие высшим международным стандартам защиты медицинских данных",
    hipaaTitle: "Соответствие HIPAA",
    hipaaDesc: "Полное соответствие Закону США о переносимости и подотчётности медицинского страхования",
    gdprTitle: "Соответствие GDPR",
    gdprDesc: "Соответствие Общему регламенту защиты данных Европейского союза",
    encryptionTitle: "Продвинутое шифрование",
    encryptionDesc: "Шифрование AES-256 для данных в покое и TLS 1.3 для данных в пути",
    uptimeTitle: "100% доступность",
    uptimeDesc: "Корпоративная инфраструктура с резервированием и восстановлением после сбоев",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Сертифицированные меры безопасности, доступности и конфиденциальности",
    isoTitle: "ISO 27001",
    isoDesc: "Международный стандарт управления информационной безопасностью",
    
    // ROI & Statistics Section
    roiTitle: "Трансформируйте ваши медицинские операции",
    roiBadge: "Доказанные результаты",
    roiSubtitle: "Улучшения на основе данных, влияющие на прибыль и качество ухода за пациентами",
    productivityIncrease: "Рост производительности",
    productivityDesc: "Среднее улучшение операционной эффективности больниц и клиник",
    wasteReduction: "Снижение отходов",
    wasteDesc: "Снижение потерь ресурсов и операционной неэффективности",
    theftPrevention: "Предотвращение потерь",
    theftDesc: "Снижение недостачи запасов и несанкционированного доступа",
    accountControl: "Полный финансовый контроль",
    accountControlDesc: "Полная видимость счетов, зарплат, сотрудников и расходов",
    patientSatisfaction: "Удовлетворённость пациентов",
    patientSatisfactionDesc: "Улучшение опыта пациентов и качества обслуживания",
    timesSaved: "Экономия времени",
    timesSavedDesc: "Сокращение административных задач и бумажной работы",
  },
  // French translations
  fr: {
    heroTitle: "Premier système ERP pour",
    heroTitleHighlight: "le secteur de la santé",
    heroSubtitle: "Le premier système au monde conçu spécifiquement pour les établissements de santé. Prend en charge les patients, les rendez-vous, la pharmacie, le laboratoire et tout ce dont vous avez besoin.",
    requestDemo: "Essai gratuit",
    watchDemo: "Voir la démo",
    badge: "N°1 des logiciels médicaux en Europe",
    tagline: "Qualité digne de confiance",
    noCreditCard: "Sans carte bancaire",
    quickSetup: "Installation rapide",
    hipaaCompliant: "Conforme HIPAA",
    hospitals: "Établissements de santé",
    patients: "Patients gérés",
    countries: "Pays",
    inHealthcare: "ans dans la santé",
    featuresTitle: "Tout ce dont vous avez besoin",
    featuresSubtitle: "Système ERP complet couvrant tous vos besoins de santé de la gestion des patients à la facturation et aux analyses",
    exploreAll: "Explorer toutes les fonctionnalités",
    emrTitle: "Dossiers médicaux électroniques",
    emrDesc: "Dossiers patients complets avec historique clinique, diagnostics, traitements et résultats de laboratoire sur une plateforme sécurisée.",
    emrStat: "Historique complet",
    appointmentsTitle: "Planification intelligente",
    appointmentsDesc: "Prise de rendez-vous intelligente avec disponibilité des médecins, correspondance de spécialité et rappels automatisés.",
    appointmentsStat: "Auto-planification",
    pharmacyTitle: "Gestion de pharmacie",
    pharmacyDesc: "Opérations pharmaceutiques complètes incluant inventaire, ordonnances, distribution et alertes d'interactions médicamenteuses.",
    pharmacyStat: "Sécurité médicamenteuse",
    laboratoryTitle: "Intégration laboratoire",
    laboratoryDesc: "Gestion de laboratoire fluide avec commande de tests, suivi des résultats et rapports automatiques.",
    laboratoryStat: "Résultats rapides",
    billingTitle: "Facturation médicale et assurance",
    billingDesc: "Système de facturation complet avec réclamations d'assurance, suivi des paiements et rapports financiers.",
    billingStat: "Traitement des réclamations",
    analyticsTitle: "Analyses de santé",
    analyticsDesc: "Tableaux de bord en temps réel, insights cliniques et prédictions basées sur l'IA pour de meilleures décisions.",
    analyticsStat: "Insights IA",
    trustTitle: "Approuvé par les leaders de la santé",
    trustSubtitle: "Rejoignez des milliers d'établissements de santé dans le monde",
    ctaTitle: "Prêt à transformer votre santé ?",
    ctaSubtitle: "Rejoignez plus de 500 établissements utilisant MedCore pour une gestion efficace de la santé",
    ctaButton: "Commencer la transformation digitale",
    benefit1: "14 jours d'essai gratuit",
    benefit2: "Sans carte bancaire",
    benefit3: "Support complet",
    testimonialsTitle: "Ce que disent nos clients",
    testimonialsSubtitle: "Écoutez les professionnels de santé utilisant MedCore",
    dashboardLabel: "medcore",
    safeLevel: "Niveau sûr",
    revenue: "Revenus",
    expenses: "Dépenses",
    profits: "Bénéfices",
    patientsLabel: "Patients",
    appointments: "Rendez-vous",
    thisMonth: "ce mois",
    cashFlow: "Flux de trésorerie",
    recentAppointments: "Rendez-vous récents",
    pending: "En attente",
    confirmed: "Confirmé",
    completed: "Terminé",
    appointmentsGrowth: "Croissance des RDV",
    records: "Dossiers",
    appointmentsTag: "Rendez-vous",
    pharmacy: "Pharmacie",
    laboratory: "Laboratoire",
    billing: "Facturation",
    pricingTitle: "Choisissez votre plan",
    pricingSubtitle: "Tarification flexible pour les établissements de santé de toutes tailles",
    transparentPricing: "Tarification transparente",
    perMonth: "/mois",
    mostPopular: "Le plus populaire",
    getStarted: "Commencer",
    contactSales: "Contacter les ventes",
    starterPlan: "Starter",
    starterDesc: "Parfait pour les petites cliniques",
    professionalPlan: "Professionnel",
    professionalDesc: "Idéal pour les établissements en croissance",
    enterprisePlan: "Entreprise",
    enterpriseDesc: "Solution complète pour les grands hôpitaux",
    upToUsers: "Jusqu'à {n} utilisateurs",
    patientsLimit: "Jusqu'à {n} patients",
    unlimitedUsers: "Utilisateurs illimités",
    unlimitedPatients: "Patients illimités",
    basicEMR: "DME de base",
    advancedEMR: "DME avancé",
    fullEMR: "Suite DME complète",
    appointmentManagement: "Gestion des rendez-vous",
    basicReports: "Rapports de base",
    advancedReports: "Rapports avancés",
    customReports: "Rapports personnalisés",
    emailSupport: "Support par email",
    prioritySupport: "Support prioritaire 24/7",
    dedicatedSupport: "Gestionnaire de compte dédié",
    pharmacyModule: "Module pharmacie",
    labIntegration: "Intégration laboratoire",
    insuranceBilling: "Assurance et facturation",
    apiAccess: "Accès API",
    customIntegrations: "Intégrations personnalisées",
    multiLocation: "Support multi-sites",
    comparisonTitle: "Pourquoi MedCore ?",
    comparisonSubtitle: "Voyez la différence que MedCore fait dans vos opérations",
    withoutMedcore: "Sans MedCore",
    withMedcore: "Avec MedCore",
    comp1Without: "Dossiers papier dispersés entre les départements",
    comp1With: "Dossiers numériques centralisés accessibles instantanément",
    comp2Without: "Planification manuelle avec conflits",
    comp2With: "Planification IA sans conflits",
    comp3Without: "Résultats de laboratoire retardés par téléphone/fax",
    comp3With: "Résultats en temps réel dans le portail patient",
    comp4Without: "Réclamations d'assurance traitées en semaines",
    comp4With: "Traitement automatisé en heures",
    comp5Without: "Pas de visibilité sur les métriques opérationnelles",
    comp5With: "Tableaux de bord en temps réel et insights IA",
    comp6Without: "Préoccupations de sécurité des données",
    comp6With: "Conformité HIPAA avec sécurité entreprise",
    nexaTitle: "Agent IA NEXA",
    nexaBadge: "Assistant médical propulsé par l'IA",
    nexaSubtitle: "Votre partenaire médical intelligent qui révolutionne les soins de santé avec des capacités IA avancées",
    nexaFeature1Title: "Analyse d'images médicales",
    nexaFeature1Desc: "Analyse IA avancée des images radiologiques incluant rayons X, scanners CT et IRM avec rapports diagnostiques détaillés",
    nexaFeature2Title: "Revue des résultats de laboratoire",
    nexaFeature2Desc: "Analyse complète des tests sanguins, urinaires et tous résultats de laboratoire avec interprétations cliniques",
    nexaFeature3Title: "Rapports médicaux complets",
    nexaFeature3Desc: "Rapports générés par IA sur le diagnostic, les plans de traitement et les interactions médicamenteuses pour les médecins",
    nexaFeature4Title: "Consultations vocales",
    nexaFeature4Desc: "Les médecins peuvent activer le mode vocal pour partager les symptômes et recevoir une analyse IA en temps réel",
    nexaFeature5Title: "Alertes d'interactions médicamenteuses",
    nexaFeature5Desc: "Détection automatique des interactions médicamenteuses potentielles et contre-indications pour la sécurité du patient",
    nexaFeature6Title: "Suggestions de plan de traitement",
    nexaFeature6Desc: "Recommandations de traitement basées sur les preuves, personnalisées selon l'historique et l'état du patient",
    nexaPartner: "Votre partenaire médical efficace",
    nexaPartnerDesc: "NEXA IA travaille aux côtés des médecins pour améliorer la précision diagnostique, réduire les erreurs et améliorer les résultats",
    mobileAppsTitle: "Écosystème mobile complet",
    mobileAppsBadge: "Applications mobiles",
    mobileAppsSubtitle: "Gestion complète du cycle de vie du patient avec des applications dédiées pour chaque partie prenante",
    adminAppTitle: "Application administration",
    adminAppDesc: "Contrôle complet des opérations, du personnel, des finances et de la gestion multi-sites depuis n'importe où",
    doctorAppTitle: "Application médecin",
    doctorAppDesc: "Dossiers patients, rendez-vous, ordonnances et assistant IA NEXA à portée de main",
    labAppTitle: "Application laboratoire",
    labAppDesc: "Gestion des échantillons, traitement des tests et livraison instantanée des résultats",
    pharmacyAppTitle: "Application pharmacie",
    pharmacyAppDesc: "Exécution des ordonnances, gestion des stocks et alertes d'interactions médicamenteuses",
    patientAppTitle: "Application patient",
    patientAppDesc: "Prendre rendez-vous, voir les résultats, gérer les médicaments et communiquer avec les soignants",
    completeLifecycle: "Cycle de vie patient complet",
    lifecycleDesc: "Intégration fluide de l'admission à la sortie et au suivi",
    complianceTitle: "Sécurité et conformité de niveau entreprise",
    complianceBadge: "Sécurité et conformité",
    complianceSubtitle: "Répondant aux normes internationales les plus élevées pour la protection des données de santé",
    hipaaTitle: "Conforme HIPAA",
    hipaaDesc: "Conformité totale avec la loi américaine HIPAA",
    gdprTitle: "Conforme RGPD",
    gdprDesc: "Respect du Règlement général sur la protection des données de l'UE",
    encryptionTitle: "Chiffrement avancé",
    encryptionDesc: "Chiffrement AES-256 pour les données au repos et TLS 1.3 pour les données en transit",
    uptimeTitle: "Disponibilité 100%",
    uptimeDesc: "Infrastructure d'entreprise avec redondance et reprise après sinistre",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Contrôles certifiés de sécurité, disponibilité et confidentialité",
    isoTitle: "ISO 27001",
    isoDesc: "Norme internationale pour la gestion de la sécurité de l'information",
    roiTitle: "Transformez vos opérations de santé",
    roiBadge: "Résultats prouvés",
    roiSubtitle: "Améliorations basées sur les données impactant vos résultats et les soins aux patients",
    productivityIncrease: "Augmentation de la productivité",
    productivityDesc: "Amélioration moyenne de l'efficacité opérationnelle des hôpitaux et cliniques",
    wasteReduction: "Réduction du gaspillage",
    wasteDesc: "Diminution du gaspillage des ressources et des inefficacités opérationnelles",
    theftPrevention: "Prévention des pertes",
    theftDesc: "Réduction des pertes de stock et des accès non autorisés",
    accountControl: "Contrôle financier complet",
    accountControlDesc: "Visibilité totale sur les comptes, salaires, employés et dépenses",
    patientSatisfaction: "Satisfaction des patients",
    patientSatisfactionDesc: "Amélioration de l'expérience patient et de la qualité de service",
    timesSaved: "Temps économisé",
    timesSavedDesc: "Réduction des tâches administratives et de la paperasse",
  },
  // German translations
  de: {
    heroTitle: "Erstes ERP-System für",
    heroTitleHighlight: "das Gesundheitswesen",
    heroSubtitle: "Das weltweit erste System, das speziell für Gesundheitseinrichtungen entwickelt wurde. Unterstützt Patienten, Termine, Apotheke, Labor und alles, was Sie brauchen.",
    requestDemo: "Kostenlos testen",
    watchDemo: "Demo ansehen",
    badge: "Nr. 1 Medizinsoftware in Europa",
    tagline: "Vertrauenswürdige Qualität",
    noCreditCard: "Keine Kreditkarte",
    quickSetup: "Schnelle Einrichtung",
    hipaaCompliant: "HIPAA-konform",
    hospitals: "Gesundheitseinrichtungen",
    patients: "Verwaltete Patienten",
    countries: "Länder",
    inHealthcare: "Jahre im Gesundheitswesen",
    featuresTitle: "Alles was Sie brauchen",
    featuresSubtitle: "Komplettes ERP-System für alle Ihre Gesundheitsbedürfnisse von Patientenverwaltung bis Abrechnung und Analytik",
    exploreAll: "Alle Funktionen erkunden",
    emrTitle: "Elektronische Patientenakten",
    emrDesc: "Vollständige Patientenakten mit klinischer Vorgeschichte, Diagnosen, Behandlungen und Laborergebnissen auf einer sicheren Plattform.",
    emrStat: "Komplette Historie",
    appointmentsTitle: "Intelligente Terminplanung",
    appointmentsDesc: "Intelligente Terminbuchung mit Arztverfügbarkeit, Fachgebietszuordnung und automatischen Erinnerungen.",
    appointmentsStat: "Auto-Planung",
    pharmacyTitle: "Apothekenverwaltung",
    pharmacyDesc: "Vollständige Apothekenoperationen inkl. Inventar, Rezepte, Ausgabe und Warnungen vor Arzneimittelwechselwirkungen.",
    pharmacyStat: "Arzneimittelsicherheit",
    laboratoryTitle: "Laborintegration",
    laboratoryDesc: "Nahtlose Laborverwaltung mit Testbestellung, Ergebnisverfolgung und automatischer Berichterstattung.",
    laboratoryStat: "Schnelle Ergebnisse",
    billingTitle: "Medizinische Abrechnung & Versicherung",
    billingDesc: "Umfassendes Abrechnungssystem mit Versicherungsansprüchen, Zahlungsverfolgung und Finanzberichten.",
    billingStat: "Anspruchsverarbeitung",
    analyticsTitle: "Gesundheitsanalytik",
    analyticsDesc: "Echtzeit-Dashboards, klinische Einblicke und KI-gestützte Vorhersagen für bessere Entscheidungen.",
    analyticsStat: "KI-Einblicke",
    trustTitle: "Von Gesundheitsführern vertraut",
    trustSubtitle: "Schließen Sie sich Tausenden von Gesundheitseinrichtungen weltweit an",
    ctaTitle: "Bereit Ihr Gesundheitswesen zu transformieren?",
    ctaSubtitle: "Schließen Sie sich 500+ Einrichtungen an, die MedCore für effizientes Gesundheitsmanagement nutzen",
    ctaButton: "Digitale Transformation starten",
    benefit1: "14 Tage kostenlos testen",
    benefit2: "Keine Kreditkarte erforderlich",
    benefit3: "Vollständiger Support",
    testimonialsTitle: "Was unsere Kunden sagen",
    testimonialsSubtitle: "Hören Sie von Gesundheitsfachleuten, die MedCore nutzen",
    dashboardLabel: "medcore",
    safeLevel: "Sicherer Level",
    revenue: "Umsatz",
    expenses: "Ausgaben",
    profits: "Gewinn",
    patientsLabel: "Patienten",
    appointments: "Termine",
    thisMonth: "diesen Monat",
    cashFlow: "Cashflow",
    recentAppointments: "Aktuelle Termine",
    pending: "Ausstehend",
    confirmed: "Bestätigt",
    completed: "Abgeschlossen",
    appointmentsGrowth: "Terminwachstum",
    records: "Akten",
    appointmentsTag: "Termine",
    pharmacy: "Apotheke",
    laboratory: "Labor",
    billing: "Abrechnung",
    pricingTitle: "Wählen Sie Ihren Plan",
    pricingSubtitle: "Flexible Preise für Gesundheitseinrichtungen jeder Größe",
    transparentPricing: "Transparente Preise",
    perMonth: "/Monat",
    mostPopular: "Am beliebtesten",
    getStarted: "Loslegen",
    contactSales: "Vertrieb kontaktieren",
    starterPlan: "Starter",
    starterDesc: "Perfekt für kleine Kliniken",
    professionalPlan: "Professional",
    professionalDesc: "Ideal für wachsende Einrichtungen",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Komplettlösung für große Krankenhäuser",
    upToUsers: "Bis zu {n} Benutzer",
    patientsLimit: "Bis zu {n} Patienten",
    unlimitedUsers: "Unbegrenzte Benutzer",
    unlimitedPatients: "Unbegrenzte Patienten",
    basicEMR: "Basis-EPA",
    advancedEMR: "Erweiterte EPA",
    fullEMR: "Vollständiges EPA-Paket",
    appointmentManagement: "Terminverwaltung",
    basicReports: "Basisberichte",
    advancedReports: "Erweiterte Berichte",
    customReports: "Benutzerdefinierte Berichte",
    emailSupport: "E-Mail-Support",
    prioritySupport: "Priority Support 24/7",
    dedicatedSupport: "Dedizierter Account Manager",
    pharmacyModule: "Apothekenmodul",
    labIntegration: "Laborintegration",
    insuranceBilling: "Versicherung & Abrechnung",
    apiAccess: "API-Zugang",
    customIntegrations: "Benutzerdefinierte Integrationen",
    multiLocation: "Multi-Standort-Support",
    comparisonTitle: "Warum MedCore?",
    comparisonSubtitle: "Sehen Sie den Unterschied, den MedCore in Ihren Abläufen macht",
    withoutMedcore: "Ohne MedCore",
    withMedcore: "Mit MedCore",
    comp1Without: "Papierakten über Abteilungen verstreut",
    comp1With: "Zentralisierte digitale Akten sofort zugänglich",
    comp2Without: "Manuelle Terminplanung mit Konflikten",
    comp2With: "KI-gestützte Planung ohne Konflikte",
    comp3Without: "Verzögerte Laborergebnisse per Telefon/Fax",
    comp3With: "Echtzeit-Ergebnisse im Patientenportal",
    comp4Without: "Versicherungsansprüche in Wochen bearbeitet",
    comp4With: "Automatisierte Bearbeitung in Stunden",
    comp5Without: "Keine Sichtbarkeit operativer Metriken",
    comp5With: "Echtzeit-Dashboards und KI-Einblicke",
    comp6Without: "Bedenken zur Datensicherheit",
    comp6With: "HIPAA-konform mit Enterprise-Sicherheit",
    nexaTitle: "NEXA KI-Agent",
    nexaBadge: "KI-gestützter medizinischer Assistent",
    nexaSubtitle: "Ihr intelligenter medizinischer Partner, der das Gesundheitswesen mit fortschrittlichen KI-Fähigkeiten revolutioniert",
    nexaFeature1Title: "Röntgen- & Bildanalyse",
    nexaFeature1Desc: "Fortschrittliche KI-Analyse radiologischer Bilder inkl. Röntgen, CT und MRT mit detaillierten Diagnoseberichten",
    nexaFeature2Title: "Laborbefund-Überprüfung",
    nexaFeature2Desc: "Umfassende Analyse von Bluttests, Urinanalysen und allen Laborergebnissen mit klinischen Interpretationen",
    nexaFeature3Title: "Vollständige medizinische Berichte",
    nexaFeature3Desc: "KI-generierte umfassende Berichte über Diagnose, Behandlungspläne und Medikamentenwechselwirkungen für Ärzte",
    nexaFeature4Title: "Sprachgesteuerte Konsultationen",
    nexaFeature4Desc: "Ärzte können den Sprachmodus aktivieren, um Symptome zu teilen und Echtzeit-KI-Analysen zu erhalten",
    nexaFeature5Title: "Warnungen vor Arzneimittelwechselwirkungen",
    nexaFeature5Desc: "Automatische Erkennung potenzieller Arzneimittelwechselwirkungen und Kontraindikationen für die Patientensicherheit",
    nexaFeature6Title: "Behandlungsplan-Vorschläge",
    nexaFeature6Desc: "Evidenzbasierte Behandlungsempfehlungen, angepasst an Patientenhistorie und Zustand",
    nexaPartner: "Ihr effektiver medizinischer Partner",
    nexaPartnerDesc: "NEXA KI arbeitet mit Ärzten zusammen, um die Diagnosegenauigkeit zu verbessern, Fehler zu reduzieren und Patientenergebnisse zu verbessern",
    mobileAppsTitle: "Komplettes mobiles Ökosystem",
    mobileAppsBadge: "Mobile Apps",
    mobileAppsSubtitle: "Vollständiges Patientenlebenszyklus-Management mit dedizierten Apps für jeden Beteiligten",
    adminAppTitle: "Admin-App",
    adminAppDesc: "Vollständige Kontrolle über Abläufe, Personal, Finanzen und Multi-Standort-Management von überall",
    doctorAppTitle: "Arzt-App",
    doctorAppDesc: "Patientenakten, Termine, Rezepte und NEXA KI-Assistent griffbereit",
    labAppTitle: "Labor-App",
    labAppDesc: "Probenverwaltung, Testverarbeitung und sofortige Ergebnislieferung an Patienten und Ärzte",
    pharmacyAppTitle: "Apotheken-App",
    pharmacyAppDesc: "Rezeptausführung, Bestandsverwaltung und Warnungen vor Arzneimittelwechselwirkungen",
    patientAppTitle: "Patienten-App",
    patientAppDesc: "Termine buchen, Ergebnisse einsehen, Medikamente verwalten und mit Gesundheitsdienstleistern kommunizieren",
    completeLifecycle: "Vollständiger Patientenlebenszyklus",
    lifecycleDesc: "Nahtlose Integration von der Aufnahme bis zur Entlassung und Nachsorge",
    complianceTitle: "Enterprise-Grade Sicherheit & Compliance",
    complianceBadge: "Sicherheit & Compliance",
    complianceSubtitle: "Erfüllung der höchsten internationalen Standards für den Schutz von Gesundheitsdaten",
    hipaaTitle: "HIPAA-konform",
    hipaaDesc: "Vollständige Konformität mit dem US-amerikanischen HIPAA-Gesetz",
    gdprTitle: "DSGVO-konform",
    gdprDesc: "Einhaltung der EU-Datenschutz-Grundverordnung",
    encryptionTitle: "Erweiterte Verschlüsselung",
    encryptionDesc: "AES-256-Verschlüsselung für ruhende Daten und TLS 1.3 für Daten im Transit",
    uptimeTitle: "100% Verfügbarkeit",
    uptimeDesc: "Enterprise-Infrastruktur mit Redundanz und Disaster Recovery",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Zertifizierte Sicherheits-, Verfügbarkeits- und Vertraulichkeitskontrollen",
    isoTitle: "ISO 27001",
    isoDesc: "Internationaler Standard für Informationssicherheitsmanagement",
    roiTitle: "Transformieren Sie Ihre Gesundheitsabläufe",
    roiBadge: "Bewährte Ergebnisse",
    roiSubtitle: "Datengesteuerte Verbesserungen, die Ihre Bilanz und Patientenversorgung beeinflussen",
    productivityIncrease: "Produktivitätssteigerung",
    productivityDesc: "Durchschnittliche Verbesserung der operativen Effizienz von Krankenhäusern und Kliniken",
    wasteReduction: "Abfallreduzierung",
    wasteDesc: "Verringerung von Ressourcenverschwendung und betrieblichen Ineffizienzen",
    theftPrevention: "Verlustprävention",
    theftDesc: "Reduzierung von Bestandsverlusten und unbefugtem Zugriff",
    accountControl: "Vollständige Finanzkontrolle",
    accountControlDesc: "Vollständige Transparenz über Konten, Gehälter, Mitarbeiter und Ausgaben",
    patientSatisfaction: "Patientenzufriedenheit",
    patientSatisfactionDesc: "Verbesserung der Patientenerfahrung und Servicequalität",
    timesSaved: "Zeitersparnis",
    timesSavedDesc: "Reduzierung administrativer Aufgaben und Papierkram",
  },
  // Dutch translations
  nl: {
    heroTitle: "Eerste ERP-systeem voor",
    heroTitleHighlight: "de gezondheidszorg",
    heroSubtitle: "Het eerste systeem ter wereld speciaal ontworpen voor zorginstellingen. Ondersteunt patiënten, afspraken, apotheek, laboratorium en alles wat u nodig heeft.",
    requestDemo: "Gratis proberen",
    watchDemo: "Demo bekijken",
    badge: "Nr. 1 medische software in Europa",
    tagline: "Betrouwbare kwaliteit",
    noCreditCard: "Geen creditcard nodig",
    quickSetup: "Snelle installatie",
    hipaaCompliant: "HIPAA-conform",
    hospitals: "Zorginstellingen",
    patients: "Beheerde patiënten",
    countries: "Landen",
    inHealthcare: "jaar in de gezondheidszorg",
    featuresTitle: "Alles wat u nodig heeft",
    featuresSubtitle: "Compleet ERP-systeem voor al uw zorgbehoeften van patiëntenbeheer tot facturering en analyses",
    exploreAll: "Alle functies verkennen",
    emrTitle: "Elektronische patiëntendossiers",
    emrDesc: "Volledige patiëntendossiers met klinische geschiedenis, diagnoses, behandelingen en laboratoriumresultaten op één veilig platform.",
    emrStat: "Volledige historie",
    appointmentsTitle: "Slimme planning",
    appointmentsDesc: "Intelligente afspraakboekingen met beschikbaarheid van artsen, specialisatie-matching en automatische herinneringen.",
    appointmentsStat: "Auto-planning",
    pharmacyTitle: "Apotheekbeheer",
    pharmacyDesc: "Volledige apotheekoperaties inclusief voorraad, recepten, uitgifte en waarschuwingen voor geneesmiddeleninteracties.",
    pharmacyStat: "Medicatieveiligheid",
    laboratoryTitle: "Laboratoriumintegratie",
    laboratoryDesc: "Naadloos laboratoriumbeheer met testbestellingen, resultaattracking en automatische rapportage.",
    laboratoryStat: "Snelle resultaten",
    billingTitle: "Medische facturering & verzekering",
    billingDesc: "Uitgebreid factureringssysteem met verzekeringsclaims, betalingstracking en financiële rapporten.",
    billingStat: "Claimverwerking",
    analyticsTitle: "Zorganalytics",
    analyticsDesc: "Realtime dashboards, klinische inzichten en AI-gestuurde voorspellingen voor betere besluitvorming.",
    analyticsStat: "AI-inzichten",
    trustTitle: "Vertrouwd door zorgLeiders",
    trustSubtitle: "Sluit u aan bij duizenden zorginstellingen wereldwijd",
    ctaTitle: "Klaar om uw gezondheidszorg te transformeren?",
    ctaSubtitle: "Sluit u aan bij 500+ instellingen die MedCore gebruiken voor efficiënt zorgbeheer",
    ctaButton: "Start digitale transformatie",
    benefit1: "14 dagen gratis proberen",
    benefit2: "Geen creditcard vereist",
    benefit3: "Volledige ondersteuning",
    testimonialsTitle: "Wat onze klanten zeggen",
    testimonialsSubtitle: "Luister naar zorgprofessionals die MedCore gebruiken",
    dashboardLabel: "medcore",
    safeLevel: "Veilig niveau",
    revenue: "Omzet",
    expenses: "Uitgaven",
    profits: "Winst",
    patientsLabel: "Patiënten",
    appointments: "Afspraken",
    thisMonth: "deze maand",
    cashFlow: "Cashflow",
    recentAppointments: "Recente afspraken",
    pending: "In behandeling",
    confirmed: "Bevestigd",
    completed: "Voltooid",
    appointmentsGrowth: "Afspraakgroei",
    records: "Dossiers",
    appointmentsTag: "Afspraken",
    pharmacy: "Apotheek",
    laboratory: "Laboratorium",
    billing: "Facturering",
    pricingTitle: "Kies uw plan",
    pricingSubtitle: "Flexibele prijzen voor zorginstellingen van elke omvang",
    transparentPricing: "Transparante prijzen",
    perMonth: "/maand",
    mostPopular: "Meest populair",
    getStarted: "Aan de slag",
    contactSales: "Contact verkoop",
    starterPlan: "Starter",
    starterDesc: "Perfect voor kleine klinieken",
    professionalPlan: "Professional",
    professionalDesc: "Ideaal voor groeiende instellingen",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Complete oplossing voor grote ziekenhuizen",
    upToUsers: "Tot {n} gebruikers",
    patientsLimit: "Tot {n} patiënten",
    unlimitedUsers: "Onbeperkte gebruikers",
    unlimitedPatients: "Onbeperkte patiënten",
    basicEMR: "Basis EPD",
    advancedEMR: "Geavanceerd EPD",
    fullEMR: "Volledig EPD-pakket",
    appointmentManagement: "Afsprakenbeheer",
    basicReports: "Basisrapporten",
    advancedReports: "Geavanceerde rapporten",
    customReports: "Aangepaste rapporten",
    emailSupport: "E-mailondersteuning",
    prioritySupport: "Prioriteitsondersteuning 24/7",
    dedicatedSupport: "Toegewijde accountmanager",
    pharmacyModule: "Apotheekmodule",
    labIntegration: "Laboratoriumintegratie",
    insuranceBilling: "Verzekering & facturering",
    apiAccess: "API-toegang",
    customIntegrations: "Aangepaste integraties",
    multiLocation: "Multi-locatie ondersteuning",
    comparisonTitle: "Waarom MedCore?",
    comparisonSubtitle: "Zie het verschil dat MedCore maakt in uw operaties",
    withoutMedcore: "Zonder MedCore",
    withMedcore: "Met MedCore",
    comp1Without: "Papieren dossiers verspreid over afdelingen",
    comp1With: "Gecentraliseerde digitale dossiers direct toegankelijk",
    comp2Without: "Handmatige planning met conflicten",
    comp2With: "AI-gestuurde planning zonder conflicten",
    comp3Without: "Vertraagde laboratoriumresultaten via telefoon/fax",
    comp3With: "Realtime resultaten in het patiëntenportaal",
    comp4Without: "Verzekeringsclaims verwerkt in weken",
    comp4With: "Geautomatiseerde verwerking in uren",
    comp5Without: "Geen zicht op operationele metrics",
    comp5With: "Realtime dashboards en AI-inzichten",
    comp6Without: "Zorgen over gegevensbeveiliging",
    comp6With: "HIPAA-conform met enterprise beveiliging",
    nexaTitle: "NEXA AI-Agent",
    nexaBadge: "AI-gestuurde medische assistent",
    nexaSubtitle: "Uw intelligente medische partner die de gezondheidszorg revolutioneert met geavanceerde AI-mogelijkheden",
    nexaFeature1Title: "Röntgen- & medische beeldanalyse",
    nexaFeature1Desc: "Geavanceerde AI-analyse van radiologische beelden inclusief röntgen, CT-scans en MRI's met gedetailleerde diagnosegegevens",
    nexaFeature2Title: "Laboratoriumresultaten beoordeling",
    nexaFeature2Desc: "Uitgebreide analyse van bloedtests, urineanalyses en alle laboratoriumresultaten met klinische interpretaties",
    nexaFeature3Title: "Volledige medische rapporten",
    nexaFeature3Desc: "AI-gegenereerde uitgebreide rapporten over diagnose, behandelplannen en geneesmiddeleninteracties voor artsen",
    nexaFeature4Title: "Spraakgestuurde consulten",
    nexaFeature4Desc: "Artsen kunnen de spraakmodule activeren om symptomen te delen en realtime AI-analyses te ontvangen",
    nexaFeature5Title: "Waarschuwingen geneesmiddeleninteracties",
    nexaFeature5Desc: "Automatische detectie van potentiële geneesmiddeleninteracties en contra-indicaties voor patiëntveiligheid",
    nexaFeature6Title: "Behandelplan suggesties",
    nexaFeature6Desc: "Op bewijs gebaseerde behandelaanbevelingen, aangepast aan de patiëntgeschiedenis en conditie",
    nexaPartner: "Uw effectieve medische partner",
    nexaPartnerDesc: "NEXA AI werkt samen met artsen om de diagnosenauwkeurigheid te verbeteren, fouten te verminderen en patiëntresultaten te verbeteren",
    mobileAppsTitle: "Compleet mobiel ecosysteem",
    mobileAppsBadge: "Mobiele apps",
    mobileAppsSubtitle: "Volledig patiëntlevenscyclusbeheer met toegewijde apps voor elke stakeholder",
    adminAppTitle: "Beheer-app",
    adminAppDesc: "Volledige controle over operaties, personeel, financiën en multi-locatiebeheer vanaf elke locatie",
    doctorAppTitle: "Arts-app",
    doctorAppDesc: "Patiëntendossiers, afspraken, recepten en NEXA AI-assistent binnen handbereik",
    labAppTitle: "Laboratorium-app",
    labAppDesc: "Monsterbeheer, testverwerking en directe resultaatlevering aan patiënten en artsen",
    pharmacyAppTitle: "Apotheek-app",
    pharmacyAppDesc: "Receptuitvoering, voorraadbeheer en waarschuwingen voor geneesmiddeleninteracties",
    patientAppTitle: "Patiënt-app",
    patientAppDesc: "Afspraken boeken, resultaten bekijken, medicatie beheren en communiceren met zorgverleners",
    completeLifecycle: "Volledige patiëntlevenscyclus",
    lifecycleDesc: "Naadloze integratie van opname tot ontslag en nazorg",
    complianceTitle: "Enterprise-grade beveiliging & compliance",
    complianceBadge: "Beveiliging & compliance",
    complianceSubtitle: "Voldoet aan de hoogste internationale normen voor bescherming van gezondheidsgegevens",
    hipaaTitle: "HIPAA-conform",
    hipaaDesc: "Volledige naleving van de Amerikaanse HIPAA-wet",
    gdprTitle: "AVG-conform",
    gdprDesc: "Naleving van de Algemene Verordening Gegevensbescherming van de EU",
    encryptionTitle: "Geavanceerde encryptie",
    encryptionDesc: "AES-256-encryptie voor data in rust en TLS 1.3 voor data in transit",
    uptimeTitle: "100% uptime",
    uptimeDesc: "Enterprise-infrastructuur met redundantie en disaster recovery",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Gecertificeerde beveiligings-, beschikbaarheids- en vertrouwelijkheidscontroles",
    isoTitle: "ISO 27001",
    isoDesc: "Internationale norm voor informatiebeveiligingsmanagement",
    roiTitle: "Transformeer uw zorgoperaties",
    roiBadge: "Bewezen resultaten",
    roiSubtitle: "Datagestuurde verbeteringen die uw resultaat en patiëntenzorg beïnvloeden",
    productivityIncrease: "Productiviteitsverhoging",
    productivityDesc: "Gemiddelde verbetering in operationele efficiëntie van ziekenhuizen en klinieken",
    wasteReduction: "Afvalreductie",
    wasteDesc: "Vermindering van verspilling van middelen en operationele inefficiënties",
    theftPrevention: "Verliespreventie",
    theftDesc: "Vermindering van voorraadverliezen en ongeautoriseerde toegang",
    accountControl: "Volledige financiële controle",
    accountControlDesc: "Volledig zicht op rekeningen, salarissen, medewerkers en uitgaven",
    patientSatisfaction: "Patiënttevredenheid",
    patientSatisfactionDesc: "Verbetering van de patiëntervaring en servicekwaliteit",
    timesSaved: "Tijdsbesparing",
    timesSavedDesc: "Vermindering van administratieve taken en papierwerk",
  },
  // Italian translations
  it: {
    heroTitle: "Primo sistema ERP per",
    heroTitleHighlight: "il settore sanitario",
    heroSubtitle: "Il primo sistema al mondo progettato specificamente per le strutture sanitarie. Supporta pazienti, appuntamenti, farmacia, laboratorio e tutto ciò di cui hai bisogno.",
    requestDemo: "Prova gratuita",
    watchDemo: "Guarda la demo",
    badge: "N°1 software medico in Europa",
    tagline: "Qualità affidabile",
    noCreditCard: "Nessuna carta di credito",
    quickSetup: "Configurazione rapida",
    hipaaCompliant: "Conforme HIPAA",
    hospitals: "Strutture sanitarie",
    patients: "Pazienti gestiti",
    countries: "Paesi",
    inHealthcare: "anni nella sanità",
    featuresTitle: "Tutto ciò di cui hai bisogno",
    featuresSubtitle: "Sistema ERP completo che copre tutte le tue esigenze sanitarie dalla gestione dei pazienti alla fatturazione e analisi",
    exploreAll: "Esplora tutte le funzionalità",
    emrTitle: "Cartelle cliniche elettroniche",
    emrDesc: "Cartelle complete dei pazienti con storia clinica, diagnosi, trattamenti e risultati di laboratorio in una piattaforma sicura.",
    emrStat: "Storia completa",
    appointmentsTitle: "Pianificazione intelligente",
    appointmentsDesc: "Prenotazione appuntamenti intelligente con disponibilità medici, abbinamento specialità e promemoria automatici.",
    appointmentsStat: "Auto-pianificazione",
    pharmacyTitle: "Gestione farmacia",
    pharmacyDesc: "Operazioni farmaceutiche complete inclusi inventario, prescrizioni, dispensazione e avvisi interazioni farmaci.",
    pharmacyStat: "Sicurezza farmaci",
    laboratoryTitle: "Integrazione laboratorio",
    laboratoryDesc: "Gestione laboratorio fluida con ordinazione test, tracciamento risultati e reportistica automatica.",
    laboratoryStat: "Risultati rapidi",
    billingTitle: "Fatturazione medica e assicurazione",
    billingDesc: "Sistema di fatturazione completo con richieste assicurative, tracciamento pagamenti e report finanziari.",
    billingStat: "Elaborazione richieste",
    analyticsTitle: "Analytics sanitari",
    analyticsDesc: "Dashboard in tempo reale, insights clinici e previsioni AI per decisioni migliori.",
    analyticsStat: "Insights AI",
    trustTitle: "Scelto dai leader sanitari",
    trustSubtitle: "Unisciti a migliaia di strutture sanitarie nel mondo",
    ctaTitle: "Pronto a trasformare la tua sanità?",
    ctaSubtitle: "Unisciti a 500+ strutture che usano MedCore per una gestione sanitaria efficiente",
    ctaButton: "Inizia la trasformazione digitale",
    benefit1: "14 giorni di prova gratuita",
    benefit2: "Nessuna carta di credito richiesta",
    benefit3: "Supporto completo",
    testimonialsTitle: "Cosa dicono i nostri clienti",
    testimonialsSubtitle: "Ascolta i professionisti sanitari che usano MedCore",
    dashboardLabel: "medcore",
    safeLevel: "Livello sicuro",
    revenue: "Ricavi",
    expenses: "Spese",
    profits: "Profitti",
    patientsLabel: "Pazienti",
    appointments: "Appuntamenti",
    thisMonth: "questo mese",
    cashFlow: "Flusso di cassa",
    recentAppointments: "Appuntamenti recenti",
    pending: "In sospeso",
    confirmed: "Confermato",
    completed: "Completato",
    appointmentsGrowth: "Crescita appuntamenti",
    records: "Cartelle",
    appointmentsTag: "Appuntamenti",
    pharmacy: "Farmacia",
    laboratory: "Laboratorio",
    billing: "Fatturazione",
    pricingTitle: "Scegli il tuo piano",
    pricingSubtitle: "Prezzi flessibili per strutture sanitarie di ogni dimensione",
    transparentPricing: "Prezzi trasparenti",
    perMonth: "/mese",
    mostPopular: "Più popolare",
    getStarted: "Inizia",
    contactSales: "Contatta vendite",
    starterPlan: "Starter",
    starterDesc: "Perfetto per piccole cliniche",
    professionalPlan: "Professional",
    professionalDesc: "Ideale per strutture in crescita",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Soluzione completa per grandi ospedali",
    upToUsers: "Fino a {n} utenti",
    patientsLimit: "Fino a {n} pazienti",
    unlimitedUsers: "Utenti illimitati",
    unlimitedPatients: "Pazienti illimitati",
    basicEMR: "CCE base",
    advancedEMR: "CCE avanzata",
    fullEMR: "Suite CCE completa",
    appointmentManagement: "Gestione appuntamenti",
    basicReports: "Report base",
    advancedReports: "Report avanzati",
    customReports: "Report personalizzati",
    emailSupport: "Supporto email",
    prioritySupport: "Supporto prioritario 24/7",
    dedicatedSupport: "Account manager dedicato",
    pharmacyModule: "Modulo farmacia",
    labIntegration: "Integrazione laboratorio",
    insuranceBilling: "Assicurazione e fatturazione",
    apiAccess: "Accesso API",
    customIntegrations: "Integrazioni personalizzate",
    multiLocation: "Supporto multi-sede",
    comparisonTitle: "Perché MedCore?",
    comparisonSubtitle: "Vedi la differenza che MedCore fa nelle tue operazioni",
    withoutMedcore: "Senza MedCore",
    withMedcore: "Con MedCore",
    comp1Without: "Cartelle cartacee sparse tra i reparti",
    comp1With: "Cartelle digitali centralizzate accessibili istantaneamente",
    comp2Without: "Pianificazione manuale con conflitti",
    comp2With: "Pianificazione AI senza conflitti",
    comp3Without: "Risultati laboratorio ritardati via telefono/fax",
    comp3With: "Risultati in tempo reale nel portale paziente",
    comp4Without: "Richieste assicurative elaborate in settimane",
    comp4With: "Elaborazione automatizzata in ore",
    comp5Without: "Nessuna visibilità sulle metriche operative",
    comp5With: "Dashboard in tempo reale e insights AI",
    comp6Without: "Preoccupazioni sulla sicurezza dei dati",
    comp6With: "Conforme HIPAA con sicurezza enterprise",
    nexaTitle: "Agente AI NEXA",
    nexaBadge: "Assistente medico potenziato da AI",
    nexaSubtitle: "Il tuo partner medico intelligente che rivoluziona la sanità con capacità AI avanzate",
    nexaFeature1Title: "Analisi raggi X e immagini mediche",
    nexaFeature1Desc: "Analisi AI avanzata di immagini radiologiche inclusi raggi X, TAC e risonanze con report diagnostici dettagliati",
    nexaFeature2Title: "Revisione risultati laboratorio",
    nexaFeature2Desc: "Analisi completa di esami del sangue, analisi urine e tutti i risultati di laboratorio con interpretazioni cliniche",
    nexaFeature3Title: "Report medici completi",
    nexaFeature3Desc: "Report completi generati da AI su diagnosi, piani di trattamento e interazioni farmacologiche per i medici",
    nexaFeature4Title: "Consulti vocali",
    nexaFeature4Desc: "I medici possono attivare la modalità vocale per condividere i sintomi e ricevere analisi AI in tempo reale",
    nexaFeature5Title: "Avvisi interazioni farmaci",
    nexaFeature5Desc: "Rilevamento automatico di potenziali interazioni farmacologiche e controindicazioni per la sicurezza del paziente",
    nexaFeature6Title: "Suggerimenti piano trattamento",
    nexaFeature6Desc: "Raccomandazioni di trattamento basate su evidenze, personalizzate sulla storia e condizione del paziente",
    nexaPartner: "Il tuo partner medico efficace",
    nexaPartnerDesc: "NEXA AI lavora insieme ai medici per migliorare l'accuratezza diagnostica, ridurre gli errori e migliorare i risultati dei pazienti",
    mobileAppsTitle: "Ecosistema mobile completo",
    mobileAppsBadge: "App mobile",
    mobileAppsSubtitle: "Gestione completa del ciclo di vita del paziente con app dedicate per ogni stakeholder",
    adminAppTitle: "App amministrazione",
    adminAppDesc: "Controllo completo su operazioni, personale, finanze e gestione multi-sede da qualsiasi luogo",
    doctorAppTitle: "App medico",
    doctorAppDesc: "Cartelle pazienti, appuntamenti, prescrizioni e assistente AI NEXA a portata di mano",
    labAppTitle: "App laboratorio",
    labAppDesc: "Gestione campioni, elaborazione test e consegna immediata risultati a pazienti e medici",
    pharmacyAppTitle: "App farmacia",
    pharmacyAppDesc: "Evasione prescrizioni, gestione inventario e avvisi interazioni farmaci",
    patientAppTitle: "App paziente",
    patientAppDesc: "Prenota appuntamenti, visualizza risultati, gestisci farmaci e comunica con i fornitori di servizi sanitari",
    completeLifecycle: "Ciclo di vita paziente completo",
    lifecycleDesc: "Integrazione fluida dal ricovero alla dimissione e follow-up",
    complianceTitle: "Sicurezza e conformità di livello enterprise",
    complianceBadge: "Sicurezza e conformità",
    complianceSubtitle: "Soddisfa i più alti standard internazionali per la protezione dei dati sanitari",
    hipaaTitle: "Conforme HIPAA",
    hipaaDesc: "Piena conformità con la legge HIPAA statunitense",
    gdprTitle: "Conforme GDPR",
    gdprDesc: "Aderenza al Regolamento generale sulla protezione dei dati dell'UE",
    encryptionTitle: "Crittografia avanzata",
    encryptionDesc: "Crittografia AES-256 per i dati a riposo e TLS 1.3 per i dati in transito",
    uptimeTitle: "100% uptime",
    uptimeDesc: "Infrastruttura enterprise con ridondanza e disaster recovery",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Controlli certificati di sicurezza, disponibilità e riservatezza",
    isoTitle: "ISO 27001",
    isoDesc: "Standard internazionale per la gestione della sicurezza delle informazioni",
    roiTitle: "Trasforma le tue operazioni sanitarie",
    roiBadge: "Risultati provati",
    roiSubtitle: "Miglioramenti basati sui dati che impattano i tuoi risultati e la cura dei pazienti",
    productivityIncrease: "Aumento produttività",
    productivityDesc: "Miglioramento medio nell'efficienza operativa di ospedali e cliniche",
    wasteReduction: "Riduzione sprechi",
    wasteDesc: "Diminuzione degli sprechi di risorse e inefficienze operative",
    theftPrevention: "Prevenzione perdite",
    theftDesc: "Riduzione delle perdite di inventario e accessi non autorizzati",
    accountControl: "Controllo finanziario completo",
    accountControlDesc: "Visibilità completa su conti, stipendi, dipendenti e spese",
    patientSatisfaction: "Soddisfazione pazienti",
    patientSatisfactionDesc: "Miglioramento dell'esperienza paziente e qualità del servizio",
    timesSaved: "Tempo risparmiato",
    timesSavedDesc: "Riduzione delle attività amministrative e della burocrazia",
  },
  // Ukrainian translations
  uk: {
    heroTitle: "Перша ERP система для",
    heroTitleHighlight: "галузі охорони здоров'я",
    heroSubtitle: "Перша у світі система, розроблена спеціально для медичних закладів. Підтримує пацієнтів, записи, аптеку, лабораторію та все, що вам потрібно.",
    requestDemo: "Почати безкоштовну пробну версію",
    watchDemo: "Дивитись демо",
    badge: "#1 Медичне ПЗ в Європі та Великобританії",
    tagline: "Якість, якій варто довіряти",
    noCreditCard: "Без кредитної картки",
    quickSetup: "Швидке налаштування",
    hipaaCompliant: "Відповідає HIPAA",
    
    hospitals: "Медичних закладів",
    patients: "Керованих пацієнтів",
    countries: "Країн",
    inHealthcare: "років у медицині",
    
    featuresTitle: "Все, що вам потрібно в одній системі",
    featuresSubtitle: "Комплексна ERP система, яка охоплює всі ваші потреби в охороні здоров'я від управління пацієнтами до виставлення рахунків та аналітики",
    exploreAll: "Переглянути всі функції",
    
    emrTitle: "Електронні медичні картки",
    emrDesc: "Повні записи пацієнтів з клінічною історією, діагнозами, лікуванням та результатами лабораторних досліджень на одній захищеній платформі.",
    emrStat: "Повна історія",
    
    appointmentsTitle: "Розумне планування",
    appointmentsDesc: "Інтелектуальне бронювання записів з доступністю лікарів, підбором спеціальності та автоматичними нагадуваннями.",
    appointmentsStat: "Автопланування",
    
    pharmacyTitle: "Управління аптекою",
    pharmacyDesc: "Повні аптечні операції, включаючи інвентар, рецепти, відпуск та попередження про взаємодію ліків.",
    pharmacyStat: "Безпека ліків",
    
    laboratoryTitle: "Інтеграція лабораторії",
    laboratoryDesc: "Безперебійне управління лабораторією з замовленням тестів, відстеженням результатів та автоматичною звітністю.",
    laboratoryStat: "Швидкі результати",
    
    billingTitle: "Медичний білінг та страхування",
    billingDesc: "Комплексна система виставлення рахунків зі страховими претензіями, відстеженням платежів та фінансовою звітністю.",
    billingStat: "Обробка претензій",
    
    analyticsTitle: "Аналітика охорони здоров'я",
    analyticsDesc: "Панелі в реальному часі, клінічні інсайти та прогнози на основі ШІ для кращого прийняття рішень.",
    analyticsStat: "ШІ інсайти",
    
    trustTitle: "Довіра лідерів охорони здоров'я",
    trustSubtitle: "Приєднуйтесь до тисяч медичних закладів по всьому світу",
    
    ctaTitle: "Готові трансформувати вашу охорону здоров'я?",
    ctaSubtitle: "Приєднуйтесь до 500+ закладів, які використовують MedCore для ефективного управління охороною здоров'я",
    ctaButton: "Почати цифрову трансформацію",
    benefit1: "14-денна безкоштовна пробна версія",
    benefit2: "Без кредитної картки",
    benefit3: "Повна підтримка",
    
    testimonialsTitle: "Що кажуть наші клієнти",
    testimonialsSubtitle: "Послухайте професіоналів охорони здоров'я, які використовують MedCore",
    
    dashboardLabel: "medcore",
    safeLevel: "Безпечний рівень",
    revenue: "Дохід",
    expenses: "Витрати",
    profits: "Прибуток",
    patientsLabel: "Пацієнти",
    appointments: "Записи",
    thisMonth: "цього місяця",
    cashFlow: "Грошовий потік",
    recentAppointments: "Останні записи",
    pending: "Очікування",
    confirmed: "Підтверджено",
    completed: "Завершено",
    appointmentsGrowth: "Зростання записів",
    
    records: "Записи",
    appointmentsTag: "Записи",
    pharmacy: "Аптека",
    laboratory: "Лабораторія",
    billing: "Білінг",
    
    pricingTitle: "Оберіть ідеальний план",
    pricingSubtitle: "Гнучке ціноутворення для медичних закладів будь-якого розміру",
    transparentPricing: "Прозорі ціни",
    perMonth: "/місяць",
    mostPopular: "Найпопулярніший",
    getStarted: "Почати",
    contactSales: "Зв'язатися з продажами",
    
    starterPlan: "Стартовий",
    starterDesc: "Ідеально для невеликих клінік та практик",
    professionalPlan: "Професійний",
    professionalDesc: "Ідеально для зростаючих медичних закладів",
    enterprisePlan: "Корпоративний",
    enterpriseDesc: "Повне рішення для великих лікарень",
    
    upToUsers: "До {n} користувачів",
    patientsLimit: "До {n} пацієнтів",
    unlimitedUsers: "Необмежено користувачів",
    unlimitedPatients: "Необмежено пацієнтів",
    basicEMR: "Базові медкартки",
    advancedEMR: "Розширені медкартки",
    fullEMR: "Повний пакет медкарток",
    appointmentManagement: "Управління записами",
    basicReports: "Базові звіти",
    advancedReports: "Розширені звіти",
    customReports: "Власні звіти та аналітика",
    emailSupport: "Підтримка електронною поштою",
    prioritySupport: "Пріоритетна підтримка 24/7",
    dedicatedSupport: "Персональний менеджер",
    pharmacyModule: "Модуль аптеки",
    labIntegration: "Інтеграція лабораторії",
    insuranceBilling: "Страхування та білінг",
    apiAccess: "Доступ до API",
    customIntegrations: "Власні інтеграції",
    multiLocation: "Підтримка кількох локацій",
    
    comparisonTitle: "Чому обрати MedCore?",
    comparisonSubtitle: "Подивіться, яку різницю робить MedCore у ваших медичних операціях",
    withoutMedcore: "Без MedCore",
    withMedcore: "З MedCore",
    
    comp1Without: "Паперові записи розкидані по відділах",
    comp1With: "Централізовані цифрові записи миттєво доступні",
    comp2Without: "Ручне планування записів з конфліктами",
    comp2With: "Планування на основі ШІ без конфліктів",
    comp3Without: "Затримані результати лабораторії через телефон/факс",
    comp3With: "Результати лабораторії в реальному часі на порталі пацієнта",
    comp4Without: "Страхові претензії обробляються тижнями",
    comp4With: "Автоматизовані претензії обробляються за години",
    comp5Without: "Немає видимості операційних метрик",
    comp5With: "Панелі в реальному часі та ШІ інсайти",
    comp6Without: "Проблеми з безпекою даних пацієнтів",
    comp6With: "Відповідність HIPAA з корпоративною безпекою",
    
    nexaTitle: "NEXA AI Агент",
    nexaBadge: "Медичний асистент на базі ШІ",
    nexaSubtitle: "Ваш інтелектуальний медичний партнер, який революціонізує надання медичної допомоги з передовими можливостями ШІ",
    nexaFeature1Title: "Аналіз рентгену та медичних зображень",
    nexaFeature1Desc: "Передовий ШІ аналіз радіологічних зображень, включаючи рентген, КТ та МРТ з детальними діагностичними звітами",
    nexaFeature2Title: "Огляд результатів лабораторії",
    nexaFeature2Desc: "Комплексний аналіз аналізів крові, аналізу сечі та всіх лабораторних результатів з клінічними інтерпретаціями",
    nexaFeature3Title: "Повні медичні звіти",
    nexaFeature3Desc: "Звіти, згенеровані ШІ про діагнози, плани лікування та взаємодію ліків для лікарів",
    nexaFeature4Title: "Голосові консультації",
    nexaFeature4Desc: "Лікарі можуть увімкнути голосовий режим для обміну симптомами пацієнта та отримання аналізу в реальному часі",
    nexaFeature5Title: "Попередження про взаємодію ліків",
    nexaFeature5Desc: "Автоматичне виявлення потенційних взаємодій ліків та протипоказань для безпеки пацієнта",
    nexaFeature6Title: "Пропозиції плану лікування",
    nexaFeature6Desc: "Рекомендації лікування на основі доказів, адаптовані до історії пацієнта та стану",
    nexaPartner: "Ваш ефективний медичний партнер",
    nexaPartnerDesc: "NEXA AI працює разом з лікарями для підвищення точності діагностики, зменшення помилок та покращення результатів пацієнтів",
    
    mobileAppsTitle: "Повна мобільна екосистема",
    mobileAppsBadge: "Мобільні додатки",
    mobileAppsSubtitle: "Повне управління життєвим циклом пацієнта з виділеними додатками для кожного учасника",
    adminAppTitle: "Додаток адміністрації",
    adminAppDesc: "Повний контроль над операціями, персоналом, фінансами та управлінням кількома філіями з будь-якого місця",
    doctorAppTitle: "Додаток лікаря",
    doctorAppDesc: "Картки пацієнтів, записи, рецепти та ШІ асистент NEXA під рукою",
    labAppTitle: "Додаток лабораторії",
    labAppDesc: "Управління зразками, обробка тестів та миттєва доставка результатів пацієнтам і лікарям",
    pharmacyAppTitle: "Додаток аптеки",
    pharmacyAppDesc: "Виконання рецептів, управління інвентарем та попередження про взаємодію ліків",
    patientAppTitle: "Додаток пацієнта",
    patientAppDesc: "Бронюйте записи, переглядайте результати, керуйте ліками та спілкуйтеся з медичними працівниками",
    completeLifecycle: "Повний життєвий цикл пацієнта",
    lifecycleDesc: "Безперебійна інтеграція від госпіталізації до виписки та подальшого спостереження",
    complianceTitle: "Корпоративна безпека та відповідність",
    complianceBadge: "Безпека та відповідність",
    complianceSubtitle: "Відповідність найвищим міжнародним стандартам захисту медичних даних",
    hipaaTitle: "Відповідність HIPAA",
    hipaaDesc: "Повна відповідність Закону США про переносимість та підзвітність медичного страхування",
    gdprTitle: "Відповідність GDPR",
    gdprDesc: "Дотримання Загального регламенту захисту даних Європейського Союзу",
    encryptionTitle: "Розширене шифрування",
    encryptionDesc: "Шифрування AES-256 для даних у спокої та TLS 1.3 для даних у передачі",
    uptimeTitle: "100% готовність до роботи",
    uptimeDesc: "Корпоративна інфраструктура з резервуванням та аварійним відновленням",
    soc2Title: "SOC 2 Type II",
    soc2Desc: "Сертифікований контроль безпеки, доступності та конфіденційності",
    isoTitle: "ISO 27001",
    isoDesc: "Міжнародний стандарт управління інформаційною безпекою",
    roiTitle: "Трансформуйте ваші медичні операції",
    roiBadge: "Доведені результати",
    roiSubtitle: "Покращення на основі даних, які впливають на ваш результат та догляд за пацієнтами",
    productivityIncrease: "Зростання продуктивності",
    productivityDesc: "Середнє покращення операційної ефективності лікарень та клінік",
    wasteReduction: "Скорочення відходів",
    wasteDesc: "Зменшення марнування ресурсів та операційних неефективностей",
    theftPrevention: "Запобігання втратам",
    theftDesc: "Скорочення втрат інвентарю та несанкціонованого доступу",
    accountControl: "Повний фінансовий контроль",
    accountControlDesc: "Повна видимість рахунків, зарплат, працівників та витрат",
    patientSatisfaction: "Задоволеність пацієнтів",
    patientSatisfactionDesc: "Покращення досвіду пацієнтів та якості обслуговування",
    timesSaved: "Заощаджений час",
    timesSavedDesc: "Скорочення адміністративних завдань та паперової роботи",
  },
};

const features = [
  { 
    key: "emr", 
    icon: Heart, 
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-900/20"
  },
  { 
    key: "appointments", 
    icon: Calendar, 
    color: "from-blue-500 to-emerald-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  { 
    key: "pharmacy", 
    icon: Pill, 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  },
  { 
    key: "laboratory", 
    icon: FlaskConical, 
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  },
  { 
    key: "billing", 
    icon: Receipt, 
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  { 
    key: "analytics", 
    icon: BarChart3, 
    color: "from-emerald-500 to-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
  },
];

const stats = [
  { value: "500+", key: "hospitals" },
  { value: "2M+", key: "patients" },
  { value: "45+", key: "countries" },
  { value: "15+", key: "inHealthcare" },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Medical Director",
    company: "Dublin Central Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    quote: "MedCore has transformed how we manage patient care. The integration between departments is seamless.",
  },
  {
    name: "Dr. Ahmed Al-Rashid",
    role: "Chief of Surgery",
    company: "Gulf Medical Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    quote: "The laboratory integration and real-time results have significantly improved our diagnosis speed.",
  },
  {
    name: "Maria Santos",
    role: "Hospital Administrator",
    company: "European Health Network",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    quote: "Managing billing and insurance claims is now effortless. We've reduced processing time by 60%.",
  },
];

const trustLogos = [
  { name: "Dublin Hospital", icon: Building2 },
  { name: "Gulf Medical", icon: HeartPulse },
  { name: "EU Health", icon: Shield },
  { name: "MedTech Alliance", icon: Globe },
  { name: "CareNet", icon: Users },
];

export default function MCHomePage() {
  const { language, isRTL } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <MCHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(22 163 74 / 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center`}>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-start"
            >
              {/* Badge - Like TexaCore with sparkle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6 shadow-sm"
              >
                <span className="text-emerald-500">✨</span>
                {t.badge}
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </motion.div>
              
              {/* Title - Larger with underline like TexaCore */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-6">
                {t.heroTitle}{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    {t.heroTitleHighlight}
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full" />
                </span>
              </h1>
              
              {/* Subtitle - Larger */}
              <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
              
              {/* CTA Buttons - Larger */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link to="/medcore/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-10 py-7 text-lg font-semibold shadow-lg shadow-emerald-500/25">
                    {t.requestDemo}
                    <ArrowRight className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-emerald-400 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-10 py-7 text-lg font-medium">
                  <Video className="w-5 h-5 me-2" />
                  {t.watchDemo}
                </Button>
              </div>
              
              {/* Feature Tags - Like TexaCore */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                {[
                  { icon: Heart, label: t.records },
                  { icon: Calendar, label: t.appointmentsTag },
                  { icon: Pill, label: t.pharmacy },
                  { icon: FlaskConical, label: t.laboratory },
                  { icon: Receipt, label: t.billing },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-400"
                  >
                    <item.icon className="w-4 h-4 text-emerald-500" />
                    {item.label}
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {t.noCreditCard}
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  {t.quickSetup}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  {t.hipaaCompliant}
                </div>
              </div>
            </motion.div>
            
            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-5 lg:p-6 xl:p-8 border border-slate-200 dark:border-slate-700">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-slate-500 font-medium">{t.dashboardLabel}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg">
                      <Stethoscope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">1,450</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      <span className="text-emerald-600">●</span> {t.safeLevel}
                    </div>
                  </div>
                </div>
                
                {/* Stats Grid - Like TexaCore */}
                <div className="grid grid-cols-4 gap-3 lg:gap-4 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl text-start">
                    <p className="text-xs text-slate-500 mb-1">{t.revenue}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">$124,500</p>
                    <p className="text-xs text-green-600">+12.5%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl text-start">
                    <p className="text-xs text-slate-500 mb-1">{t.expenses}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">$45,200</p>
                    <p className="text-xs text-red-500">-2.4%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl text-start">
                    <p className="text-xs text-slate-500 mb-1">{t.profits}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">$79,300</p>
                    <p className="text-xs text-green-600">+8.2%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl text-start">
                    <p className="text-xs text-slate-500 mb-1">{t.patientsLabel}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">$32,000</p>
                    <p className="text-xs text-green-600">+5.1%</p>
                  </div>
                </div>

                {/* Orders & Chart Section */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-start">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs text-slate-500">{t.appointments}</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">2,847</p>
                    <p className="text-xs text-emerald-600">+23% {t.thisMonth}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-slate-500">{t.cashFlow}</span>
                      <BarChart3 className="w-4 h-4 text-slate-400" />
                    </div>
                    {/* Mini Chart */}
                    <div className="flex items-end gap-1 h-16">
                      {[40, 65, 45, 70, 55, 80, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-emerald-400 dark:bg-emerald-500 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Recent Appointments */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-3 text-start">{t.recentAppointments}</p>
                  <div className="space-y-2">
                    {[
                      { id: 'AP-2024-0125', status: t.pending, amount: 'SAR 15,800', color: 'bg-amber-100 text-amber-700' },
                      { id: 'AP-2024-0124', status: t.confirmed, amount: 'SAR 28,500', color: 'bg-emerald-100 text-emerald-700' },
                      { id: 'AP-2024-0123', status: t.completed, amount: '', color: 'bg-green-100 text-green-700' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-600 last:border-0">
                        <span className="text-xs text-slate-600 dark:text-slate-400">{item.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Card - Sales Growth like TexaCore */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -end-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-start">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.appointmentsGrowth}</p>
                    <p className="text-lg font-bold text-emerald-600">+18.5%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Stats Section - Like TexaCore Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 lg:mt-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                    {stat.key === "inHealthcare" && <span className="text-xl md:text-2xl lg:text-3xl ms-1">{t[stat.key as keyof typeof t]}</span>}
                  </p>
                  {stat.key !== "inHealthcare" && (
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      {t[stat.key as keyof typeof t]}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const titleKey = `${feature.key}Title` as keyof typeof t;
              const descKey = `${feature.key}Desc` as keyof typeof t;
              const statKey = `${feature.key}Stat` as keyof typeof t;
              
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-5 lg:p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300"
                >
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-r ${feature.color} bg-clip-text`} style={{ color: feature.color.includes("red") ? "#ef4444" : feature.color.includes("blue") ? "#3b82f6" : feature.color.includes("green") ? "#22c55e" : feature.color.includes("purple") ? "#a855f7" : feature.color.includes("amber") ? "#f59e0b" : "#14b8a6" }} />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {t[titleKey]}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {t[descKey]}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {t[statKey]}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Explore All */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/medcore/features">
              <Button variant="outline" size="lg" className="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                {t.exploreAll}
                <ArrowRight className="w-4 h-4 ms-2 rtl:-scale-x-100" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section - Before/After */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.comparisonTitle}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.comparisonTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.comparisonSubtitle}
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Without MedCore */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 border-2 border-red-200 dark:border-red-800/50 relative overflow-hidden"
            >
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-red-500 to-red-400" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.withoutMedcore}</h3>
              </div>
              <div className="space-y-4">
                {[
                  t.comp1Without,
                  t.comp2Without,
                  t.comp3Without,
                  t.comp4Without,
                  t.comp5Without,
                  t.comp6Without,
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* With MedCore */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 border-2 border-emerald-300 dark:border-emerald-700 relative overflow-hidden shadow-lg shadow-emerald-500/10"
            >
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.withMedcore}</h3>
              </div>
              <div className="space-y-4">
                {[
                  t.comp1With,
                  t.comp2With,
                  t.comp3With,
                  t.comp4With,
                  t.comp5With,
                  t.comp6With,
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEXA AI Agent Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-emerald-50/50 dark:from-purple-950/20 dark:to-emerald-950/20" />
        <div className="absolute top-0 end-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-emerald-100 dark:from-purple-900/30 dark:to-emerald-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.nexaBadge}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.nexaTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.nexaSubtitle}
            </p>
          </motion.div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {[
              { title: t.nexaFeature1Title, desc: t.nexaFeature1Desc, icon: Activity, color: "from-blue-500 to-emerald-500" },
              { title: t.nexaFeature2Title, desc: t.nexaFeature2Desc, icon: FlaskConical, color: "from-purple-500 to-pink-500" },
              { title: t.nexaFeature3Title, desc: t.nexaFeature3Desc, icon: FileText, color: "from-emerald-500 to-emerald-500" },
              { title: t.nexaFeature4Title, desc: t.nexaFeature4Desc, icon: Video, color: "from-orange-500 to-red-500" },
              { title: t.nexaFeature5Title, desc: t.nexaFeature5Desc, icon: Shield, color: "from-red-500 to-pink-500" },
              { title: t.nexaFeature6Title, desc: t.nexaFeature6Desc, icon: HeartPulse, color: "from-green-500 to-emerald-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300 p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partner Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 rounded-2xl p-8 lg:p-10 text-center shadow-2xl shadow-purple-500/20">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{t.nexaPartner}</h3>
              <p className="text-purple-100 max-w-2xl mx-auto">{t.nexaPartnerDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" />
              {t.mobileAppsBadge}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.mobileAppsTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.mobileAppsSubtitle}
            </p>
          </motion.div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {[
              { title: t.adminAppTitle, desc: t.adminAppDesc, icon: UserCog, color: "from-slate-600 to-slate-700" },
              { title: t.doctorAppTitle, desc: t.doctorAppDesc, icon: Stethoscope, color: "from-emerald-500 to-emerald-600" },
              { title: t.labAppTitle, desc: t.labAppDesc, icon: Microscope, color: "from-purple-500 to-purple-600" },
              { title: t.pharmacyAppTitle, desc: t.pharmacyAppDesc, icon: Pill, color: "from-green-500 to-green-600" },
              { title: t.patientAppTitle, desc: t.patientAppDesc, icon: Heart, color: "from-red-500 to-pink-500" },
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg`}>
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{app.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">{app.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-medium">iOS & Android</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Lifecycle Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-start flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{t.completeLifecycle}</h3>
                <p className="text-blue-100">{t.lifecycleDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <Lock className="w-4 h-4" />
              {t.complianceBadge}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.complianceTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.complianceSubtitle}
            </p>
          </motion.div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: t.hipaaTitle, desc: t.hipaaDesc, icon: Shield, badge: "USA" },
              { title: t.gdprTitle, desc: t.gdprDesc, icon: Globe, badge: "EU" },
              { title: t.encryptionTitle, desc: t.encryptionDesc, icon: Lock, badge: "AES-256" },
              { title: t.uptimeTitle, desc: t.uptimeDesc, icon: Server, badge: "99.99%" },
              { title: t.soc2Title, desc: t.soc2Desc, icon: BadgeCheck, badge: "Certified" },
              { title: t.isoTitle, desc: t.isoDesc, icon: FileText, badge: "Certified" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Statistics Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              {t.roiBadge}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.roiTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.roiSubtitle}
            </p>
          </motion.div>

          {/* ROI Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { value: "65%", label: t.productivityIncrease, desc: t.productivityDesc, color: "from-emerald-500 to-emerald-600" },
              { value: "40%", label: t.wasteReduction, desc: t.wasteDesc, color: "from-blue-500 to-blue-600" },
              { value: "85%", label: t.theftPrevention, desc: t.theftDesc, color: "from-red-500 to-pink-500" },
              { value: "100%", label: t.accountControl, desc: t.accountControlDesc, color: "from-purple-500 to-purple-600" },
              { value: "92%", label: t.patientSatisfaction, desc: t.patientSatisfactionDesc, color: "from-amber-500 to-orange-500" },
              { value: "50%", label: t.timesSaved, desc: t.timesSavedDesc, color: "from-emerald-500 to-emerald-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all text-center">
                  <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{stat.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 start-0 w-72 h-72 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-0 w-96 h-96 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.transparentPricing}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.pricingTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.pricingSubtitle}
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 p-6 lg:p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.starterPlan}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t.starterDesc}</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-slate-400 line-through">$99</span>
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">-60%</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">$39</span>
                    <span className="text-slate-500">{t.perMonth}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6 flex-grow">
                  {[
                    t.upToUsers?.replace("{n}", "5") || "Up to 5 users",
                    t.patientsLimit?.replace("{n}", "1,000") || "Up to 1,000 patients",
                    t.basicEMR,
                    t.appointmentManagement,
                    t.basicReports,
                    t.emailSupport,
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/medcore/contact" className="mt-auto">
                  <Button variant="outline" className="w-full border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                    {t.getStarted}
                    <ArrowRight className="w-4 h-4 ms-2 rtl:-scale-x-100" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Professional Plan - Popular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:scale-105 z-10"
            >
              <Card className="h-full bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 border-0 shadow-2xl shadow-emerald-500/30 p-6 lg:p-8 flex flex-col relative overflow-hidden">
                {/* Popular Badge */}
                <div className="absolute top-0 start-0 end-0 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-center">
                  {t.mostPopular}
                </div>
                <div className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 shadow-lg">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.professionalPlan}</h3>
                  <p className="text-sm text-emerald-100 mb-4">{t.professionalDesc}</p>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg text-white/60 line-through">$499</span>
                      <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">-60%</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">$199</span>
                      <span className="text-emerald-200">{t.perMonth}</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 flex-grow">
                    {[
                      t.upToUsers?.replace("{n}", "25") || "Up to 25 users",
                      t.patientsLimit?.replace("{n}", "10,000") || "Up to 10,000 patients",
                      t.advancedEMR,
                      t.appointmentManagement,
                      t.pharmacyModule,
                      t.labIntegration,
                      t.advancedReports,
                      t.prioritySupport,
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/medcore/contact" className="mt-auto">
                    <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50">
                      {t.getStarted}
                      <ArrowRight className="w-4 h-4 ms-2 rtl:-scale-x-100" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 p-6 lg:p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-4 shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.enterprisePlan}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t.enterpriseDesc}</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-slate-400 line-through">$999</span>
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">-60%</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">$399</span>
                    <span className="text-slate-500">{t.perMonth}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6 flex-grow">
                  {[
                    t.unlimitedUsers,
                    t.unlimitedPatients,
                    t.fullEMR,
                    t.pharmacyModule,
                    t.labIntegration,
                    t.insuranceBilling,
                    t.customReports,
                    t.apiAccess,
                    t.multiLocation,
                    t.dedicatedSupport,
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/medcore/contact" className="mt-auto">
                  <Button variant="outline" className="w-full border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                    {t.contactSales}
                    <ArrowRight className="w-4 h-4 ms-2 rtl:-scale-x-100" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>

          {/* View All Plans Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/medcore/pricing">
              <Button variant="link" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                View all pricing details
                <ArrowRight className="w-4 h-4 ms-1 rtl:-scale-x-100" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              {t.trustTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t.trustSubtitle}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 opacity-60">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500"
              >
                <logo.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                <span className="text-sm lg:text-base font-semibold">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.testimonialsTitle}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400">
              {t.testimonialsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 lg:p-6"
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm lg:text-base font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs lg:text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-xs lg:text-sm text-emerald-600 dark:text-emerald-400 mt-4">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-600">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-base lg:text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            
            <Link to="/medcore/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-5 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold">
                {t.ctaButton}
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ms-2 rtl:-scale-x-100" />
              </Button>
            </Link>
            
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8 text-sm lg:text-base text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                {t.benefit1}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                {t.benefit2}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                {t.benefit3}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MCFooter />
      <ScrollToTop />
    </div>
  );
}
