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
  Activity,
  LayoutDashboard,
  Stethoscope,
  DollarSign,
  Brain,
  FileSpreadsheet,
  Target,
  CheckCircle2,
  Play,
  TrendingUp,
  PieChart,
  LineChart,
} from "lucide-react";

const translations = {
  en: {
    badge: "Healthcare Analytics",
    heroTitle: "Unlock the Power of Healthcare Data",
    heroDesc: "Transform your healthcare data into actionable insights with advanced analytics, AI-powered predictions, and real-time dashboards.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Advanced Analytics Features",
    featuresSubtitle: "Make data-driven decisions with powerful analytics tools",
    
    feature1: {
      title: "Real-Time Dashboards",
      desc: "Live monitoring of key performance indicators, patient volumes, and operational metrics with customizable views.",
    },
    feature2: {
      title: "Clinical Analytics",
      desc: "Patient outcomes tracking, treatment effectiveness analysis, and quality measures reporting.",
    },
    feature3: {
      title: "Financial Analytics",
      desc: "Revenue analysis, cost tracking, profitability insights by department, service line, or provider.",
    },
    feature4: {
      title: "Predictive Analytics",
      desc: "AI-powered predictions for patient volumes, readmission risk, resource needs, and demand forecasting.",
    },
    feature5: {
      title: "Custom Reports",
      desc: "Build custom reports and dashboards with drag-and-drop report builder and scheduled distribution.",
    },
    feature6: {
      title: "Benchmarking",
      desc: "Compare your performance against industry standards, regional averages, and similar institutions.",
    },
    
    benefitsTitle: "Why Choose Our Analytics?",
    benefit1: "Data-driven decisions",
    benefit2: "Improve patient outcomes",
    benefit3: "Optimize resources",
    benefit4: "Regulatory compliance",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Data Integration",
      desc: "Connect all your data sources - EMR, billing, labs, and operational systems.",
    },
    step2: {
      title: "AI Processing",
      desc: "Our AI engine analyzes data patterns and generates actionable insights.",
    },
    step3: {
      title: "Visualization",
      desc: "Interactive dashboards present insights in easy-to-understand formats.",
    },
    step4: {
      title: "Action & Improve",
      desc: "Make informed decisions and track improvements over time.",
    },
    
    ctaTitle: "Ready for Data-Driven Healthcare?",
    ctaDesc: "Start making better decisions with MedCore Analytics today.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "تحليلات الرعاية الصحية",
    heroTitle: "أطلق قوة بيانات الرعاية الصحية",
    heroDesc: "حوّل بيانات الرعاية الصحية إلى رؤى قابلة للتنفيذ مع التحليلات المتقدمة والتنبؤات المدعومة بالذكاء الاصطناعي ولوحات المعلومات الفورية.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "مميزات التحليلات المتقدمة",
    featuresSubtitle: "اتخذ قرارات مدعومة بالبيانات مع أدوات تحليلات قوية",
    
    feature1: {
      title: "لوحات معلومات فورية",
      desc: "مراقبة مباشرة لمؤشرات الأداء الرئيسية وأحجام المرضى والمقاييس التشغيلية مع عروض قابلة للتخصيص.",
    },
    feature2: {
      title: "التحليلات السريرية",
      desc: "تتبع نتائج المرضى وتحليل فعالية العلاج وتقارير مقاييس الجودة.",
    },
    feature3: {
      title: "التحليلات المالية",
      desc: "تحليل الإيرادات وتتبع التكاليف ورؤى الربحية حسب القسم أو خط الخدمة أو مقدم الخدمة.",
    },
    feature4: {
      title: "التحليلات التنبؤية",
      desc: "تنبؤات مدعومة بالذكاء الاصطناعي لأحجام المرضى ومخاطر إعادة القبول واحتياجات الموارد والتنبؤ بالطلب.",
    },
    feature5: {
      title: "تقارير مخصصة",
      desc: "بناء تقارير ولوحات معلومات مخصصة بالسحب والإفلات مع توزيع مجدول.",
    },
    feature6: {
      title: "المقارنة المعيارية",
      desc: "قارن أداءك بمعايير الصناعة والمتوسطات الإقليمية والمؤسسات المماثلة.",
    },
    
    benefitsTitle: "لماذا تختار تحليلاتنا؟",
    benefit1: "قرارات مدعومة بالبيانات",
    benefit2: "تحسين نتائج المرضى",
    benefit3: "تحسين الموارد",
    benefit4: "الامتثال التنظيمي",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "تكامل البيانات",
      desc: "اربط جميع مصادر بياناتك - EMR والفوترة والمختبرات والأنظمة التشغيلية.",
    },
    step2: {
      title: "معالجة الذكاء الاصطناعي",
      desc: "محرك الذكاء الاصطناعي يحلل أنماط البيانات وينشئ رؤى قابلة للتنفيذ.",
    },
    step3: {
      title: "التصور",
      desc: "لوحات معلومات تفاعلية تعرض الرؤى بتنسيقات سهلة الفهم.",
    },
    step4: {
      title: "التنفيذ والتحسين",
      desc: "اتخذ قرارات مستنيرة وتتبع التحسينات عبر الزمن.",
    },
    
    ctaTitle: "مستعد للرعاية الصحية المدعومة بالبيانات؟",
    ctaDesc: "ابدأ اتخاذ قرارات أفضل مع تحليلات MedCore اليوم.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: LayoutDashboard },
  { key: "feature2", icon: Stethoscope },
  { key: "feature3", icon: DollarSign },
  { key: "feature4", icon: Brain },
  { key: "feature5", icon: FileSpreadsheet },
  { key: "feature6", icon: Target },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCAnalyticsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                {t.badge}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/medcore/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-300 dark:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                >
                  <Play className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-sky-500" />
                
                {/* Mock Analytics Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">Analytics Dashboard</span>
                    </div>
                    <span className="text-sm text-slate-500">Real-time</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Patients Today", value: "247", change: "+12%", color: "cyan" },
                      { label: "Avg Wait Time", value: "14m", change: "-23%", color: "green" },
                      { label: "Revenue", value: "$45K", change: "+8%", color: "emerald" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-center">
                        <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                        <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{stat.value}</div>
                        <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-cyan-600'}`}>
                          {stat.change}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Patient Flow</span>
                      <LineChart className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="flex items-end gap-1 h-24">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>6AM</span>
                      <span>12PM</span>
                      <span>6PM</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <PieChart className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-xs text-slate-500">By Department</span>
                      </div>
                      <div className="flex gap-1">
                        {[
                          { width: "35%", color: "bg-cyan-500" },
                          { width: "25%", color: "bg-sky-500" },
                          { width: "20%", color: "bg-blue-500" },
                          { width: "20%", color: "bg-indigo-500" },
                        ].map((seg, i) => (
                          <div key={i} className={`h-2 rounded ${seg.color}`} style={{ width: seg.width }} />
                        ))}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs text-slate-500">Growth</span>
                      </div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">+18.5%</div>
                    </div>
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t.featuresSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const featureData = t[feature.key as keyof typeof t] as { title: string; desc: string };
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {featureData.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {featureData.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.howItWorksTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const stepData = t[step as keyof typeof t] as { title: string; desc: string };

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-cyan-200 dark:bg-cyan-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600 text-white text-2xl font-bold mb-4 relative z-10">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {stepData.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-cyan-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-cyan-700 hover:bg-cyan-50 px-8"
                >
                  {t.ctaButton}
                  <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MCFooter />
      <ScrollToTop />
    </div>
  );
}
