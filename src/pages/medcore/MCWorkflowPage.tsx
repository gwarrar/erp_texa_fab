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
  Workflow,
  Users,
  RefreshCcw,
  CheckCircle2,
  Clock,
  Building2,
  Stethoscope,
  Pill,
  FlaskConical,
  Receipt,
  FileText,
  Activity,
  Bell,
  Shield,
  Zap,
  Globe,
  Database,
  Link2,
  MessageSquare,
  ClipboardList,
  Calendar,
  HeartPulse,
  Sparkles,
  Play,
  ChevronRight,
  Network,
  GitBranch,
  Layers,
  CircleDot,
} from "lucide-react";

const translations = {
  en: {
    badge: "Workflow & Synchronization",
    heroTitle: "Seamless Department Synchronization",
    heroDesc: "Experience the power of fully integrated healthcare operations. Every department connected, every process automated, every decision data-driven.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // About System Section
    aboutSystemTitle: "About MedCore System",
    aboutSystemSubtitle: "A comprehensive healthcare ERP built for modern medical institutions",
    aboutSystem1: {
      title: "Unified Healthcare Platform",
      desc: "MedCore is a complete enterprise resource planning system designed specifically for healthcare institutions. From small clinics to large hospital networks, our platform scales to meet your needs while maintaining seamless integration across all departments.",
    },
    aboutSystem2: {
      title: "Real-Time Data Synchronization",
      desc: "Every action in one department instantly reflects across the entire system. When a doctor prescribes medication, the pharmacy is notified, inventory is updated, and billing is prepared - all in real-time.",
    },
    aboutSystem3: {
      title: "Intelligent Automation",
      desc: "Reduce manual work by up to 80% with smart automation. From appointment reminders to lab result notifications, our system handles routine tasks so your staff can focus on patient care.",
    },
    
    // Department Workflow
    workflowTitle: "Department Workflow Integration",
    workflowSubtitle: "See how departments work together in perfect harmony",
    
    // Departments
    reception: {
      title: "Reception & Registration",
      desc: "Patient check-in triggers automatic notifications to relevant departments, prepares medical records, and updates appointment status.",
    },
    clinical: {
      title: "Clinical Department",
      desc: "Doctors access complete patient history, order tests, prescribe medications, and document visits - all synchronized instantly.",
    },
    pharmacy: {
      title: "Pharmacy",
      desc: "Receives prescriptions automatically, checks drug interactions, manages inventory, and updates billing upon dispensing.",
    },
    laboratory: {
      title: "Laboratory",
      desc: "Test orders flow directly from clinical systems. Results are automatically attached to patient records and doctors are notified.",
    },
    billing: {
      title: "Billing & Finance",
      desc: "Automatic charge capture from all departments. Insurance claims, payment processing, and financial reporting in one place.",
    },
    administration: {
      title: "Administration",
      desc: "Real-time dashboards for operations, staff management, resource allocation, and strategic decision-making.",
    },
    
    // Data Flow Section
    dataFlowTitle: "Intelligent Data Flow",
    dataFlowSubtitle: "Information moves seamlessly between departments",
    dataFlow1: "Patient arrives for appointment",
    dataFlow2: "Medical history auto-loaded",
    dataFlow3: "Doctor orders lab tests",
    dataFlow4: "Lab receives order instantly",
    dataFlow5: "Results sent to doctor",
    dataFlow6: "Prescription sent to pharmacy",
    dataFlow7: "Billing updated automatically",
    dataFlow8: "Patient notified via app",
    
    // Features
    featuresTitle: "Synchronization Features",
    featuresSubtitle: "Advanced capabilities that keep your healthcare facility running smoothly",
    
    feature1: {
      title: "Real-Time Notifications",
      desc: "Instant alerts and updates across all connected devices and departments.",
    },
    feature2: {
      title: "Cross-Department Messaging",
      desc: "Secure internal communication with patient context and file sharing.",
    },
    feature3: {
      title: "Automated Task Assignment",
      desc: "Smart routing of tasks based on department, specialty, and workload.",
    },
    feature4: {
      title: "Conflict Resolution",
      desc: "Intelligent handling of scheduling conflicts, inventory issues, and resource allocation.",
    },
    feature5: {
      title: "Audit Trail",
      desc: "Complete tracking of all actions for compliance and accountability.",
    },
    feature6: {
      title: "Emergency Protocols",
      desc: "Automatic escalation and priority handling for urgent cases.",
    },
    
    // Benefits
    benefitsTitle: "Integration Benefits",
    benefit1: "Eliminate duplicate data entry",
    benefit2: "Reduce errors by 95%",
    benefit3: "Save 4+ hours daily per staff",
    benefit4: "Instant information access",
    benefit5: "Better patient outcomes",
    benefit6: "Complete regulatory compliance",
    
    // How it works
    howItWorksTitle: "How Integration Works",
    step1: {
      title: "Central Data Hub",
      desc: "All patient and operational data stored in one secure, unified database.",
    },
    step2: {
      title: "Event-Driven Updates",
      desc: "Any action triggers automatic updates to all relevant systems and users.",
    },
    step3: {
      title: "Role-Based Access",
      desc: "Staff see only what they need, with appropriate permissions for their role.",
    },
    step4: {
      title: "Analytics & Insights",
      desc: "Aggregated data provides actionable insights for continuous improvement.",
    },
    
    // Stats
    stat1: "99.9%",
    stat1Label: "System Uptime",
    stat2: "<1s",
    stat2Label: "Sync Speed",
    stat3: "100%",
    stat3Label: "Data Integrity",
    stat4: "24/7",
    stat4Label: "Monitoring",
    
    // CTA
    ctaTitle: "Ready to Transform Your Operations?",
    ctaDesc: "Join hundreds of healthcare institutions that have streamlined their operations with MedCore's integrated workflow system.",
    ctaButton: "Schedule a Demo",
    
    // Navigation
    backToHome: "Back to Home",
    learnMore: "Learn More",
    viewDemo: "View Demo",
  },
  ar: {
    badge: "سير العمل والتزامن",
    heroTitle: "تزامن سلس بين الأقسام",
    heroDesc: "اختبر قوة العمليات الصحية المتكاملة بالكامل. كل قسم متصل، كل عملية مؤتمتة، كل قرار مبني على البيانات.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // About System Section
    aboutSystemTitle: "عن نظام MedCore",
    aboutSystemSubtitle: "نظام ERP صحي شامل مصمم للمؤسسات الطبية الحديثة",
    aboutSystem1: {
      title: "منصة صحية موحدة",
      desc: "MedCore هو نظام تخطيط موارد مؤسسي متكامل مصمم خصيصاً للمؤسسات الصحية. من العيادات الصغيرة إلى شبكات المستشفيات الكبيرة، منصتنا تتوسع لتلبية احتياجاتك مع الحفاظ على التكامل السلس بين جميع الأقسام.",
    },
    aboutSystem2: {
      title: "مزامنة البيانات الفورية",
      desc: "كل إجراء في قسم ما ينعكس فوراً على النظام بأكمله. عندما يصف الطبيب دواءً، يتم إخطار الصيدلية، وتحديث المخزون، وإعداد الفاتورة - كل ذلك في الوقت الفعلي.",
    },
    aboutSystem3: {
      title: "الأتمتة الذكية",
      desc: "قلل العمل اليدوي بنسبة تصل إلى 80% مع الأتمتة الذكية. من تذكيرات المواعيد إلى إشعارات نتائج المختبر، يتعامل نظامنا مع المهام الروتينية حتى يتمكن موظفوك من التركيز على رعاية المرضى.",
    },
    
    // Department Workflow
    workflowTitle: "تكامل سير عمل الأقسام",
    workflowSubtitle: "شاهد كيف تعمل الأقسام معاً في تناغم تام",
    
    // Departments
    reception: {
      title: "الاستقبال والتسجيل",
      desc: "تسجيل وصول المريض يُفعّل إشعارات تلقائية للأقسام المعنية، ويُحضّر السجلات الطبية، ويُحدّث حالة الموعد.",
    },
    clinical: {
      title: "القسم السريري",
      desc: "الأطباء يصلون للتاريخ الطبي الكامل، يطلبون الفحوصات، يصفون الأدوية، ويوثقون الزيارات - كل شيء متزامن فوراً.",
    },
    pharmacy: {
      title: "الصيدلية",
      desc: "تستقبل الوصفات تلقائياً، تفحص تفاعلات الأدوية، تدير المخزون، وتُحدّث الفاتورة عند الصرف.",
    },
    laboratory: {
      title: "المختبر",
      desc: "طلبات الفحوصات تتدفق مباشرة من الأنظمة السريرية. النتائج تُرفق تلقائياً بسجلات المرضى ويُخطر الأطباء.",
    },
    billing: {
      title: "الفوترة والمالية",
      desc: "التقاط الرسوم التلقائي من جميع الأقسام. مطالبات التأمين، معالجة المدفوعات، والتقارير المالية في مكان واحد.",
    },
    administration: {
      title: "الإدارة",
      desc: "لوحات معلومات فورية للعمليات، إدارة الموظفين، تخصيص الموارد، واتخاذ القرارات الاستراتيجية.",
    },
    
    // Data Flow Section
    dataFlowTitle: "تدفق البيانات الذكي",
    dataFlowSubtitle: "المعلومات تنتقل بسلاسة بين الأقسام",
    dataFlow1: "وصول المريض للموعد",
    dataFlow2: "تحميل التاريخ الطبي تلقائياً",
    dataFlow3: "الطبيب يطلب فحوصات",
    dataFlow4: "المختبر يستقبل الطلب فوراً",
    dataFlow5: "إرسال النتائج للطبيب",
    dataFlow6: "إرسال الوصفة للصيدلية",
    dataFlow7: "تحديث الفاتورة تلقائياً",
    dataFlow8: "إخطار المريض عبر التطبيق",
    
    // Features
    featuresTitle: "ميزات التزامن",
    featuresSubtitle: "قدرات متقدمة تُبقي منشأتك الصحية تعمل بسلاسة",
    
    feature1: {
      title: "الإشعارات الفورية",
      desc: "تنبيهات وتحديثات فورية عبر جميع الأجهزة والأقسام المتصلة.",
    },
    feature2: {
      title: "التراسل بين الأقسام",
      desc: "تواصل داخلي آمن مع سياق المريض ومشاركة الملفات.",
    },
    feature3: {
      title: "تعيين المهام التلقائي",
      desc: "توجيه ذكي للمهام بناءً على القسم والتخصص وحجم العمل.",
    },
    feature4: {
      title: "حل النزاعات",
      desc: "معالجة ذكية لتعارضات المواعيد، مشاكل المخزون، وتخصيص الموارد.",
    },
    feature5: {
      title: "سجل المراجعة",
      desc: "تتبع كامل لجميع الإجراءات للامتثال والمساءلة.",
    },
    feature6: {
      title: "بروتوكولات الطوارئ",
      desc: "تصعيد تلقائي ومعالجة الأولويات للحالات العاجلة.",
    },
    
    // Benefits
    benefitsTitle: "فوائد التكامل",
    benefit1: "إلغاء إدخال البيانات المكرر",
    benefit2: "تقليل الأخطاء بنسبة 95%",
    benefit3: "توفير +4 ساعات يومياً للموظف",
    benefit4: "وصول فوري للمعلومات",
    benefit5: "نتائج أفضل للمرضى",
    benefit6: "امتثال تنظيمي كامل",
    
    // How it works
    howItWorksTitle: "كيف يعمل التكامل",
    step1: {
      title: "مركز البيانات المركزي",
      desc: "جميع بيانات المرضى والعمليات مخزنة في قاعدة بيانات آمنة وموحدة.",
    },
    step2: {
      title: "التحديثات القائمة على الأحداث",
      desc: "أي إجراء يُفعّل تحديثات تلقائية لجميع الأنظمة والمستخدمين المعنيين.",
    },
    step3: {
      title: "الوصول القائم على الأدوار",
      desc: "الموظفون يرون فقط ما يحتاجونه، مع صلاحيات مناسبة لدورهم.",
    },
    step4: {
      title: "التحليلات والرؤى",
      desc: "البيانات المجمعة توفر رؤى قابلة للتنفيذ للتحسين المستمر.",
    },
    
    // Stats
    stat1: "99.9%",
    stat1Label: "وقت تشغيل النظام",
    stat2: "<1 ث",
    stat2Label: "سرعة التزامن",
    stat3: "100%",
    stat3Label: "سلامة البيانات",
    stat4: "24/7",
    stat4Label: "المراقبة",
    
    // CTA
    ctaTitle: "مستعد لتحويل عملياتك؟",
    ctaDesc: "انضم لمئات المؤسسات الصحية التي بسّطت عملياتها مع نظام سير العمل المتكامل من MedCore.",
    ctaButton: "احجز عرضاً توضيحياً",
    
    // Navigation
    backToHome: "العودة للرئيسية",
    learnMore: "اعرف المزيد",
    viewDemo: "شاهد العرض",
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

const MCWorkflowPage: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const departments = [
    { icon: Users, color: "emerald", ...t.reception },
    { icon: Stethoscope, color: "blue", ...t.clinical },
    { icon: Pill, color: "purple", ...t.pharmacy },
    { icon: FlaskConical, color: "amber", ...t.laboratory },
    { icon: Receipt, color: "rose", ...t.billing },
    { icon: Building2, color: "slate", ...t.administration },
  ];

  const features = [
    { icon: Bell, ...t.feature1 },
    { icon: MessageSquare, ...t.feature2 },
    { icon: ClipboardList, ...t.feature3 },
    { icon: GitBranch, ...t.feature4 },
    { icon: Shield, ...t.feature5 },
    { icon: Zap, ...t.feature6 },
  ];

  const dataFlowSteps = [
    t.dataFlow1,
    t.dataFlow2,
    t.dataFlow3,
    t.dataFlow4,
    t.dataFlow5,
    t.dataFlow6,
    t.dataFlow7,
    t.dataFlow8,
  ];

  const steps = [
    { icon: Database, ...t.step1 },
    { icon: RefreshCcw, ...t.step2 },
    { icon: Shield, ...t.step3 },
    { icon: Activity, ...t.step4 },
  ];

  const benefits = [
    t.benefit1,
    t.benefit2,
    t.benefit3,
    t.benefit4,
    t.benefit5,
    t.benefit6,
  ];

  const aboutSystemItems = [
    { icon: Layers, ...t.aboutSystem1 },
    { icon: RefreshCcw, ...t.aboutSystem2 },
    { icon: Sparkles, ...t.aboutSystem3 },
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Workflow className="w-4 h-4" />
                {t.badge}
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Hero Visual - Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Users, label: isRTL ? "الاستقبال" : "Reception", color: "emerald" },
                    { icon: Stethoscope, label: isRTL ? "الأطباء" : "Doctors", color: "blue" },
                    { icon: Pill, label: isRTL ? "الصيدلية" : "Pharmacy", color: "purple" },
                    { icon: FlaskConical, label: isRTL ? "المختبر" : "Lab", color: "amber" },
                    { icon: Receipt, label: isRTL ? "الفوترة" : "Billing", color: "rose" },
                    { icon: Activity, label: isRTL ? "التحليلات" : "Analytics", color: "cyan" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex flex-col items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/50 flex items-center justify-center mb-2`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-300 text-center">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Connection Lines */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
                  <RefreshCcw className="w-6 h-6 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 via-amber-500 to-rose-500" />
                </div>
                
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                  {isRTL ? "جميع الأقسام متصلة ومتزامنة" : "All departments connected & synchronized"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: t.stat1, label: t.stat1Label },
              { value: t.stat2, label: t.stat2Label },
              { value: t.stat3, label: t.stat3Label },
              { value: t.stat4, label: t.stat4Label },
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

      {/* About System Section */}
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
              {t.aboutSystemTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.aboutSystemSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {aboutSystemItems.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Department Workflow Section */}
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
              {t.workflowTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.workflowSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {departments.map((dept, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className={`w-14 h-14 rounded-xl bg-${dept.color}-100 dark:bg-${dept.color}-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <dept.icon className={`w-7 h-7 text-${dept.color}-600 dark:text-${dept.color}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {dept.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Flow Section */}
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
              {t.dataFlowTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.dataFlowSubtitle}
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 via-amber-500 to-rose-500 transform -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {dataFlowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 text-center relative z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Benefits Section */}
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
              {t.benefitsTitle}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              {t.howItWorksTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="absolute top-8 start-1/2 font-bold text-2xl text-emerald-200 dark:text-emerald-800 -z-10">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {step.desc}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-emerald-200 dark:bg-emerald-800" />
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
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-6 text-lg gap-2">
              {t.ctaButton}
              <ArrowIcon className="w-5 h-5" />
            </Button>
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

export default MCWorkflowPage;
