import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  UserCog,
  Users,
  Calendar,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  DollarSign,
  Clock,
  Award,
  FileText,
  UserPlus,
  BarChart3,
} from "lucide-react";

const translations = {
  en: {
    badge: "Human Resources Management",
    heroTitle: "Complete HR Management Solution",
    heroDesc: "From recruitment to payroll - manage your entire workforce with AI-assisted hiring, attendance tracking, and performance analytics.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "HR Module Features",
    featuresSubtitle: "Everything you need to manage and grow your team",
    
    feature1: {
      title: "Employee Records",
      desc: "Centralized employee database with documents, contracts, certifications, and complete employment history.",
    },
    feature2: {
      title: "Recruitment & Hiring",
      desc: "AI-powered candidate screening, interview scheduling, and onboarding workflows to find the best talent faster.",
    },
    feature3: {
      title: "Attendance & Time",
      desc: "Flexible time tracking with biometric integration, remote clock-in, and automatic overtime calculations.",
    },
    feature4: {
      title: "Payroll Management",
      desc: "Automated payroll processing with tax calculations, multiple pay structures, and direct deposit integration.",
    },
    feature5: {
      title: "Performance Reviews",
      desc: "360° feedback, goal tracking, competency assessments, and continuous performance monitoring.",
    },
    feature6: {
      title: "Leave Management",
      desc: "Self-service leave requests, approval workflows, holiday calendar, and balance tracking.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our HR Module?",
    benefit1: "50% faster hiring",
    benefit2: "Zero payroll errors",
    benefit3: "Self-service portal",
    benefit4: "Complete compliance",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Onboard Employees",
      desc: "Digital onboarding with document collection, training assignments, and system access setup.",
    },
    step2: {
      title: "Track Time",
      desc: "Employees clock in via mobile, web, or biometric devices. AI detects anomalies.",
    },
    step3: {
      title: "Process Payroll",
      desc: "One-click payroll run with automatic calculations, deductions, and payslip generation.",
    },
    step4: {
      title: "Develop Talent",
      desc: "Track performance, identify high performers, and plan career development.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "50%", label: "Faster hiring" },
    stat2: { value: "100%", label: "Payroll accuracy" },
    stat3: { value: "80%", label: "Admin time saved" },
    stat4: { value: "95%", label: "Employee satisfaction" },
    
    // CTA
    ctaTitle: "Ready to Transform Your HR?",
    ctaDesc: "Join thousands of businesses managing their workforce efficiently with NexaCore HR.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "إدارة الموارد البشرية",
    heroTitle: "حل إدارة موارد بشرية متكامل",
    heroDesc: "من التوظيف إلى الرواتب - أدر قوتك العاملة بالكامل مع توظيف بمساعدة الذكاء الاصطناعي، تتبع الحضور، وتحليلات الأداء.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة الموارد البشرية",
    featuresSubtitle: "كل ما تحتاجه لإدارة وتنمية فريقك",
    
    feature1: {
      title: "سجلات الموظفين",
      desc: "قاعدة بيانات موظفين مركزية مع المستندات والعقود والشهادات وتاريخ التوظيف الكامل.",
    },
    feature2: {
      title: "التوظيف والاستقطاب",
      desc: "فرز مرشحين مدعوم بالذكاء الاصطناعي، جدولة المقابلات، وسير عمل التوظيف لإيجاد أفضل المواهب أسرع.",
    },
    feature3: {
      title: "الحضور والوقت",
      desc: "تتبع وقت مرن مع تكامل البصمة، تسجيل الدخول عن بُعد، وحسابات العمل الإضافي التلقائية.",
    },
    feature4: {
      title: "إدارة الرواتب",
      desc: "معالجة رواتب آلية مع حسابات الضرائب، هياكل رواتب متعددة، وتكامل الإيداع المباشر.",
    },
    feature5: {
      title: "تقييم الأداء",
      desc: "تغذية راجعة 360°، تتبع الأهداف، تقييم الكفاءات، ومراقبة الأداء المستمرة.",
    },
    feature6: {
      title: "إدارة الإجازات",
      desc: "طلبات إجازة بخدمة ذاتية، سير عمل الموافقات، تقويم العطلات، وتتبع الرصيد.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة الموارد البشرية لدينا؟",
    benefit1: "توظيف أسرع بنسبة 50%",
    benefit2: "صفر أخطاء في الرواتب",
    benefit3: "بوابة خدمة ذاتية",
    benefit4: "امتثال كامل",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "وظّف الموظفين",
      desc: "توظيف رقمي مع جمع المستندات، تعيينات التدريب، وإعداد الوصول للنظام.",
    },
    step2: {
      title: "تتبع الوقت",
      desc: "الموظفون يسجلون الدخول عبر الهاتف أو الويب أو أجهزة البصمة. الذكاء الاصطناعي يكتشف الشذوذ.",
    },
    step3: {
      title: "معالجة الرواتب",
      desc: "تشغيل الرواتب بنقرة واحدة مع الحسابات التلقائية والخصومات وإنشاء قسائم الرواتب.",
    },
    step4: {
      title: "طوّر المواهب",
      desc: "تتبع الأداء، حدد الأداء العالي، وخطط للتطور الوظيفي.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "50%", label: "توظيف أسرع" },
    stat2: { value: "100%", label: "دقة الرواتب" },
    stat3: { value: "80%", label: "توفير وقت الإدارة" },
    stat4: { value: "95%", label: "رضا الموظفين" },
    
    // CTA
    ctaTitle: "مستعد لتحويل الموارد البشرية؟",
    ctaDesc: "انضم لآلاف الشركات التي تدير قوتها العاملة بكفاءة مع NexaCore HR.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: FileText },
  { key: "feature2", icon: UserPlus },
  { key: "feature3", icon: Clock },
  { key: "feature4", icon: DollarSign },
  { key: "feature5", icon: BarChart3 },
  { key: "feature6", icon: Calendar },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCHRPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8 transition-colors"
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {t.backToSolutions}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                <UserCog className="w-4 h-4" />
                {t.badge}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/nexacore/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                >
                  <Play className="w-5 h-5 me-2" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
                
                {/* Mock HR Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Workforce Overview</div>
                        <div className="text-xs text-slate-500">January 2025</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">256</div>
                      <div className="text-xs text-slate-500">Total Employees</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Present", value: "248", color: "text-green-600" },
                      { label: "On Leave", value: "6", color: "text-orange-500" },
                      { label: "Remote", value: "32", color: "text-blue-600" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
                        <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Sarah Johnson", role: "Marketing", status: "Present", avatar: "SJ" },
                      { name: "Mike Chen", role: "Engineering", status: "Remote", avatar: "MC" },
                      { name: "Emma Davis", role: "Sales", status: "Present", avatar: "ED" },
                    ].map((emp, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                          {emp.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{emp.name}</div>
                          <div className="text-xs text-slate-500">{emp.role}</div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          emp.status === "Present" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}>
                          {emp.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, text: t.benefit1 },
              { icon: Zap, text: t.benefit2 },
              { icon: Globe, text: t.benefit3 },
              { icon: Shield, text: t.benefit4 },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <benefit.icon className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">{t.statsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[t.stat1, t.stat2, t.stat3, t.stat4].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-indigo-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featureData = t[feature.key as keyof typeof t] as { title: string; desc: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {featureData.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {featureData.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.howItWorksTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const stepData = t[step as keyof typeof t] as { title: string; desc: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {stepData.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {stepData.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8"
            >
              {t.ctaButton}
              <Arrow className="w-5 h-5 ms-2" />
            </Button>
          </Link>
        </div>
      </section>

      <NCFooter />
    </div>
  );
}
