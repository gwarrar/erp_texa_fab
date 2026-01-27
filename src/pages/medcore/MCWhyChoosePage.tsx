import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Clock,
  Globe,
  HeartPulse,
  Zap,
  Users,
  Award,
  Building2,
  Headphones,
  TrendingUp,
  Lock,
  Cpu,
  CloudCog,
  BarChart3,
  Star,
  Quote,
  Play,
  Target,
  Lightbulb,
  Sparkles,
  Heart,
  BadgeCheck,
  Trophy,
  Rocket,
  Layers,
  RefreshCcw,
  PhoneCall,
  FileCheck,
  DollarSign,
  PieChart,
} from "lucide-react";

const translations = {
  en: {
    badge: "Why MedCore?",
    heroTitle: "The Healthcare ERP Platform Designed for Excellence",
    heroDesc: "Discover why leading healthcare institutions across Europe and the Middle East trust MedCore to transform their operations and patient care.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Trust Section
    trustTitle: "Trusted by Healthcare Leaders",
    trustSubtitle: "Join hundreds of hospitals, clinics, and healthcare networks that rely on MedCore",
    trustStat1: "500+",
    trustStat1Label: "Healthcare Institutions",
    trustStat2: "2M+",
    trustStat2Label: "Patients Managed",
    trustStat3: "45+",
    trustStat3Label: "Countries",
    trustStat4: "99.9%",
    trustStat4Label: "Uptime",
    
    // Why Choose Section
    whyChooseTitle: "Why Healthcare Leaders Choose MedCore",
    whyChooseSubtitle: "Built by healthcare professionals, for healthcare professionals",
    
    reason1: {
      title: "Healthcare-First Design",
      desc: "Every feature is designed specifically for healthcare workflows. No generic ERP adapted for medical use - MedCore is built from the ground up for healthcare.",
      points: ["Clinical workflow optimization", "Medical terminology built-in", "Compliance-ready architecture"],
    },
    reason2: {
      title: "Complete Integration",
      desc: "All modules work seamlessly together. Patient data flows automatically between reception, clinical, pharmacy, lab, and billing departments.",
      points: ["Real-time data synchronization", "Zero duplicate data entry", "Automatic billing capture"],
    },
    reason3: {
      title: "Global Compliance",
      desc: "Built-in compliance with HIPAA, GDPR, and regional healthcare regulations. Stay compliant without extra effort.",
      points: ["HIPAA & GDPR compliant", "Local regulation support", "Automatic audit trails"],
    },
    reason4: {
      title: "Scalable Architecture",
      desc: "From single clinics to multi-hospital networks, MedCore scales with your growth without performance compromise.",
      points: ["Cloud-native platform", "Unlimited scalability", "Multi-tenant support"],
    },
    reason5: {
      title: "24/7 Expert Support",
      desc: "Dedicated healthcare IT specialists available around the clock. Not just technical support - clinical workflow expertise.",
      points: ["Healthcare-trained team", "Average 2-minute response", "Implementation assistance"],
    },
    reason6: {
      title: "Proven ROI",
      desc: "Healthcare institutions report significant improvements in efficiency, revenue, and patient satisfaction within months.",
      points: ["30% efficiency increase", "25% revenue growth", "50% faster processes"],
    },
    
    // Comparison Section
    comparisonTitle: "MedCore vs. Generic ERPs",
    comparisonSubtitle: "See why purpose-built healthcare software outperforms generic solutions",
    comparisonFeature: "Feature",
    comparisonMedCore: "MedCore",
    comparisonOthers: "Generic ERPs",
    
    comp1: "Healthcare-specific workflows",
    comp2: "Medical terminology & coding",
    comp3: "Insurance claim processing",
    comp4: "Lab equipment integration",
    comp5: "HIPAA compliance built-in",
    comp6: "Telemedicine capabilities",
    comp7: "Healthcare analytics",
    comp8: "Implementation time",
    comp8MedCore: "2-4 weeks",
    comp8Others: "3-6 months",
    
    // Features Section
    featuresTitle: "What Sets MedCore Apart",
    featuresSubtitle: "Advanced capabilities designed for modern healthcare",
    
    feature1: {
      title: "AI-Powered Insights",
      desc: "Machine learning algorithms analyze patient data to predict trends, optimize scheduling, and improve outcomes.",
    },
    feature2: {
      title: "Intuitive Interface",
      desc: "Designed for busy healthcare professionals. Minimal clicks, maximum efficiency. Training time under 2 hours.",
    },
    feature3: {
      title: "Mobile Ready",
      desc: "Full functionality on tablets and smartphones. Doctors can access patient data and prescribe on-the-go.",
    },
    feature4: {
      title: "Interoperability",
      desc: "HL7, FHIR, and DICOM standards support. Connect with any healthcare system, lab equipment, or device.",
    },
    feature5: {
      title: "Multi-Language",
      desc: "Full RTL support with Arabic, English, and 12+ languages. Perfect for international healthcare institutions.",
    },
    feature6: {
      title: "Advanced Security",
      desc: "Bank-level encryption, role-based access, and real-time threat monitoring protect sensitive patient data.",
    },
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Real feedback from healthcare professionals using MedCore",
    
    testimonial1: {
      quote: "MedCore transformed our hospital operations. We reduced paperwork by 80% and improved patient satisfaction scores significantly.",
      author: "Dr. Ahmed Al-Rashid",
      role: "Medical Director",
      institution: "Gulf Medical Center",
    },
    testimonial2: {
      quote: "The integration between departments is seamless. Our billing accuracy improved by 95% within the first month.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      institution: "European Health Network",
    },
    testimonial3: {
      quote: "Finally, a system that understands healthcare workflows. Implementation was smooth and the support team is exceptional.",
      author: "Dr. Maria Santos",
      role: "Chief Medical Officer",
      institution: "Mediterranean Clinic Group",
    },
    
    // Awards & Certifications
    awardsTitle: "Recognition & Certifications",
    awardsSubtitle: "Industry recognition for excellence in healthcare technology",
    
    award1: "ISO 27001 Certified",
    award1Desc: "Information Security",
    award2: "HIPAA Compliant",
    award2Desc: "Healthcare Privacy",
    award3: "GDPR Compliant",
    award3Desc: "Data Protection",
    award4: "SOC 2 Type II",
    award4Desc: "Security Controls",
    
    // Implementation Section
    implementationTitle: "Seamless Implementation",
    implementationSubtitle: "Get up and running in weeks, not months",
    
    impl1: {
      title: "Discovery & Planning",
      desc: "We analyze your workflows and create a customized implementation plan.",
      duration: "Week 1",
    },
    impl2: {
      title: "Configuration & Setup",
      desc: "System configured to match your specific requirements and workflows.",
      duration: "Week 2",
    },
    impl3: {
      title: "Data Migration",
      desc: "Secure transfer of existing data with validation and quality checks.",
      duration: "Week 3",
    },
    impl4: {
      title: "Training & Go-Live",
      desc: "Staff training and supervised go-live with on-site support.",
      duration: "Week 4",
    },
    
    // CTA Section
    ctaTitle: "Ready to Experience the MedCore Difference?",
    ctaDesc: "Join hundreds of healthcare institutions that have transformed their operations with MedCore. Start your free trial today.",
    ctaButton: "Start Free Trial",
    ctaSecondary: "Schedule Demo",
    
    // Navigation
    backToHome: "Back to Home",
    learnMore: "Learn More",
  },
  ar: {
    badge: "لماذا MedCore؟",
    heroTitle: "منصة ERP الصحية المصممة للتميز",
    heroDesc: "اكتشف لماذا تثق المؤسسات الصحية الرائدة في أوروبا والشرق الأوسط بـ MedCore لتحويل عملياتها ورعاية مرضاها.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Trust Section
    trustTitle: "موثوق من قادة الرعاية الصحية",
    trustSubtitle: "انضم لمئات المستشفيات والعيادات وشبكات الرعاية الصحية التي تعتمد على MedCore",
    trustStat1: "+500",
    trustStat1Label: "مؤسسة صحية",
    trustStat2: "+2 مليون",
    trustStat2Label: "مريض مُدار",
    trustStat3: "+45",
    trustStat3Label: "دولة",
    trustStat4: "99.9%",
    trustStat4Label: "وقت التشغيل",
    
    // Why Choose Section
    whyChooseTitle: "لماذا يختار قادة الرعاية الصحية MedCore",
    whyChooseSubtitle: "مبني بواسطة متخصصي الرعاية الصحية، لمتخصصي الرعاية الصحية",
    
    reason1: {
      title: "تصميم صحي أولاً",
      desc: "كل ميزة مصممة خصيصاً لسير عمل الرعاية الصحية. ليس ERP عام معدّل للاستخدام الطبي - MedCore مبني من الأساس للرعاية الصحية.",
      points: ["تحسين سير العمل السريري", "المصطلحات الطبية مدمجة", "بنية جاهزة للامتثال"],
    },
    reason2: {
      title: "تكامل كامل",
      desc: "جميع الوحدات تعمل معاً بسلاسة. بيانات المريض تتدفق تلقائياً بين الاستقبال والسريري والصيدلية والمختبر والفوترة.",
      points: ["مزامنة بيانات فورية", "صفر إدخال بيانات مكرر", "التقاط الفوترة التلقائي"],
    },
    reason3: {
      title: "امتثال عالمي",
      desc: "امتثال مدمج مع HIPAA و GDPR ولوائح الرعاية الصحية الإقليمية. ابق ملتزماً بدون جهد إضافي.",
      points: ["متوافق مع HIPAA و GDPR", "دعم اللوائح المحلية", "سجلات مراجعة تلقائية"],
    },
    reason4: {
      title: "بنية قابلة للتوسع",
      desc: "من العيادات الفردية إلى شبكات المستشفيات المتعددة، MedCore يتوسع مع نموك دون تأثير على الأداء.",
      points: ["منصة سحابية", "قابلية توسع غير محدودة", "دعم متعدد المستأجرين"],
    },
    reason5: {
      title: "دعم خبراء 24/7",
      desc: "متخصصو تقنية المعلومات الصحية متاحون على مدار الساعة. ليس مجرد دعم فني - خبرة في سير العمل السريري.",
      points: ["فريق مدرب صحياً", "استجابة متوسطة 2 دقيقة", "مساعدة في التطبيق"],
    },
    reason6: {
      title: "عائد استثمار مثبت",
      desc: "تُبلغ المؤسسات الصحية عن تحسينات كبيرة في الكفاءة والإيرادات ورضا المرضى خلال أشهر.",
      points: ["زيادة الكفاءة 30%", "نمو الإيرادات 25%", "عمليات أسرع 50%"],
    },
    
    // Comparison Section
    comparisonTitle: "MedCore مقابل أنظمة ERP العامة",
    comparisonSubtitle: "شاهد لماذا البرامج الصحية المتخصصة تتفوق على الحلول العامة",
    comparisonFeature: "الميزة",
    comparisonMedCore: "MedCore",
    comparisonOthers: "أنظمة ERP عامة",
    
    comp1: "سير عمل خاص بالرعاية الصحية",
    comp2: "المصطلحات والترميز الطبي",
    comp3: "معالجة مطالبات التأمين",
    comp4: "تكامل معدات المختبر",
    comp5: "امتثال HIPAA مدمج",
    comp6: "إمكانيات الطب عن بعد",
    comp7: "تحليلات الرعاية الصحية",
    comp8: "وقت التطبيق",
    comp8MedCore: "2-4 أسابيع",
    comp8Others: "3-6 أشهر",
    
    // Features Section
    featuresTitle: "ما يميز MedCore",
    featuresSubtitle: "قدرات متقدمة مصممة للرعاية الصحية الحديثة",
    
    feature1: {
      title: "رؤى مدعومة بالذكاء الاصطناعي",
      desc: "خوارزميات التعلم الآلي تحلل بيانات المرضى للتنبؤ بالاتجاهات وتحسين الجدولة وتحسين النتائج.",
    },
    feature2: {
      title: "واجهة سهلة الاستخدام",
      desc: "مصممة لمتخصصي الرعاية الصحية المشغولين. أقل نقرات، أقصى كفاءة. وقت التدريب أقل من ساعتين.",
    },
    feature3: {
      title: "جاهز للجوال",
      desc: "وظائف كاملة على الأجهزة اللوحية والهواتف الذكية. يمكن للأطباء الوصول لبيانات المرضى والوصف أثناء التنقل.",
    },
    feature4: {
      title: "التشغيل البيني",
      desc: "دعم معايير HL7 و FHIR و DICOM. اتصل بأي نظام صحي أو معدات مختبر أو جهاز.",
    },
    feature5: {
      title: "متعدد اللغات",
      desc: "دعم RTL كامل مع العربية والإنجليزية و+12 لغة. مثالي للمؤسسات الصحية الدولية.",
    },
    feature6: {
      title: "أمان متقدم",
      desc: "تشفير على مستوى البنوك، وصول قائم على الأدوار، ومراقبة التهديدات الفورية تحمي بيانات المرضى الحساسة.",
    },
    
    // Testimonials
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "ملاحظات حقيقية من متخصصي الرعاية الصحية الذين يستخدمون MedCore",
    
    testimonial1: {
      quote: "حوّل MedCore عمليات مستشفانا. قللنا الأوراق بنسبة 80% وحسّنا درجات رضا المرضى بشكل كبير.",
      author: "د. أحمد الراشد",
      role: "المدير الطبي",
      institution: "المركز الطبي الخليجي",
    },
    testimonial2: {
      quote: "التكامل بين الأقسام سلس. تحسنت دقة الفوترة لدينا بنسبة 95% خلال الشهر الأول.",
      author: "سارة جونسون",
      role: "مديرة العمليات",
      institution: "شبكة الصحة الأوروبية",
    },
    testimonial3: {
      quote: "أخيراً، نظام يفهم سير عمل الرعاية الصحية. كان التطبيق سلساً وفريق الدعم استثنائي.",
      author: "د. ماريا سانتوس",
      role: "المدير الطبي التنفيذي",
      institution: "مجموعة عيادات البحر المتوسط",
    },
    
    // Awards & Certifications
    awardsTitle: "التقدير والشهادات",
    awardsSubtitle: "اعتراف الصناعة بالتميز في تكنولوجيا الرعاية الصحية",
    
    award1: "شهادة ISO 27001",
    award1Desc: "أمن المعلومات",
    award2: "متوافق مع HIPAA",
    award2Desc: "خصوصية الرعاية الصحية",
    award3: "متوافق مع GDPR",
    award3Desc: "حماية البيانات",
    award4: "SOC 2 Type II",
    award4Desc: "ضوابط الأمان",
    
    // Implementation Section
    implementationTitle: "تطبيق سلس",
    implementationSubtitle: "ابدأ العمل في أسابيع، ليس أشهر",
    
    impl1: {
      title: "الاكتشاف والتخطيط",
      desc: "نحلل سير عملك ونُنشئ خطة تطبيق مخصصة.",
      duration: "الأسبوع 1",
    },
    impl2: {
      title: "الإعداد والتكوين",
      desc: "النظام مُكوّن ليتوافق مع متطلباتك وسير عملك المحدد.",
      duration: "الأسبوع 2",
    },
    impl3: {
      title: "ترحيل البيانات",
      desc: "نقل آمن للبيانات الموجودة مع التحقق وفحوصات الجودة.",
      duration: "الأسبوع 3",
    },
    impl4: {
      title: "التدريب والإطلاق",
      desc: "تدريب الموظفين وإطلاق مشرف مع دعم في الموقع.",
      duration: "الأسبوع 4",
    },
    
    // CTA Section
    ctaTitle: "مستعد لتجربة فرق MedCore؟",
    ctaDesc: "انضم لمئات المؤسسات الصحية التي حوّلت عملياتها مع MedCore. ابدأ تجربتك المجانية اليوم.",
    ctaButton: "ابدأ تجربة مجانية",
    ctaSecondary: "احجز عرضاً",
    
    // Navigation
    backToHome: "العودة للرئيسية",
    learnMore: "اعرف المزيد",
  },
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MCWhyChoosePage: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const reasons = [
    { icon: HeartPulse, color: "emerald", ...t.reason1 },
    { icon: RefreshCcw, color: "blue", ...t.reason2 },
    { icon: Shield, color: "purple", ...t.reason3 },
    { icon: CloudCog, color: "amber", ...t.reason4 },
    { icon: Headphones, color: "rose", ...t.reason5 },
    { icon: TrendingUp, color: "cyan", ...t.reason6 },
  ];

  const features = [
    { icon: Sparkles, ...t.feature1 },
    { icon: Target, ...t.feature2 },
    { icon: Globe, ...t.feature3 },
    { icon: Layers, ...t.feature4 },
    { icon: Globe, ...t.feature5 },
    { icon: Lock, ...t.feature6 },
  ];

  const testimonials = [
    t.testimonial1,
    t.testimonial2,
    t.testimonial3,
  ];

  const awards = [
    { icon: Shield, title: t.award1, desc: t.award1Desc },
    { icon: FileCheck, title: t.award2, desc: t.award2Desc },
    { icon: Lock, title: t.award3, desc: t.award3Desc },
    { icon: BadgeCheck, title: t.award4, desc: t.award4Desc },
  ];

  const implementations = [
    { icon: Lightbulb, ...t.impl1 },
    { icon: Cpu, ...t.impl2 },
    { icon: RefreshCcw, ...t.impl3 },
    { icon: Rocket, ...t.impl4 },
  ];

  const comparisonItems = [
    { feature: t.comp1, medcore: true, others: false },
    { feature: t.comp2, medcore: true, others: false },
    { feature: t.comp3, medcore: true, others: false },
    { feature: t.comp4, medcore: true, others: false },
    { feature: t.comp5, medcore: true, others: false },
    { feature: t.comp6, medcore: true, others: false },
    { feature: t.comp7, medcore: true, others: "Limited" },
    { feature: t.comp8, medcore: t.comp8MedCore, others: t.comp8Others },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950" dir={isRTL ? "rtl" : "ltr"}>
      <MCHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                {t.badge}
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg gap-2">
                  {t.startTrial}
                  <ArrowIcon className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 px-8 py-6 text-lg gap-2">
                  <Play className="w-5 h-5" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{t.trustTitle}</h2>
            <p className="text-emerald-100">{t.trustSubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: t.trustStat1, label: t.trustStat1Label },
              { value: t.trustStat2, label: t.trustStat2Label },
              { value: t.trustStat3, label: t.trustStat3Label },
              { value: t.trustStat4, label: t.trustStat4Label },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.whyChooseTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.whyChooseSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-2xl bg-${reason.color}-100 dark:bg-${reason.color}-900/50 flex items-center justify-center mb-6`}>
                    <reason.icon className={`w-8 h-8 text-${reason.color}-600 dark:text-${reason.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {reason.desc}
                  </p>
                  <ul className="space-y-2">
                    {reason.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.comparisonTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.comparisonSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-50 dark:bg-emerald-900/30">
                      <th className="px-6 py-4 text-start text-slate-900 dark:text-white font-bold">
                        {t.comparisonFeature}
                      </th>
                      <th className="px-6 py-4 text-center text-emerald-700 dark:text-emerald-400 font-bold">
                        {t.comparisonMedCore}
                      </th>
                      <th className="px-6 py-4 text-center text-slate-500 dark:text-slate-400 font-bold">
                        {t.comparisonOthers}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonItems.map((item, index) => (
                      <tr key={index} className="border-t border-slate-200 dark:border-slate-700">
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                          {item.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof item.medcore === 'boolean' ? (
                            item.medcore ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                            ) : (
                              <span className="text-slate-400">—</span>
                            )
                          ) : (
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.medcore}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof item.others === 'boolean' ? (
                            item.others ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                            ) : (
                              <span className="text-slate-400">✕</span>
                            )
                          ) : (
                            <span className="text-slate-500 dark:text-slate-400">{item.others}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.testimonialsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <Quote className="w-10 h-10 text-emerald-200 dark:text-emerald-800 mb-4" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400">{testimonial.institution}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.awardsTitle}
            </h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              {t.awardsSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                <p className="text-emerald-200 text-sm">{award.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.implementationTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.implementationSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementations.map((impl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-bold px-4 py-1 rounded-full mb-4">
                  {impl.duration}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mx-auto mb-4">
                  <impl.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {impl.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {impl.desc}
                </p>
                {index < implementations.length - 1 && (
                  <div className="hidden lg:block absolute top-20 start-1/2 w-full h-0.5 bg-emerald-200 dark:bg-emerald-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-6 text-lg gap-2">
                {t.ctaButton}
                <ArrowIcon className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg gap-2">
                <Play className="w-5 h-5" />
                {t.ctaSecondary}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            to="/medcore" 
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {t.backToHome}
          </Link>
        </div>
      </section>

      <MCFooter />
    </div>
  );
};

export default MCWhyChoosePage;
