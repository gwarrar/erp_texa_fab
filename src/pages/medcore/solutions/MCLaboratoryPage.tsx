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
  FlaskConical,
  ClipboardList,
  ScanBarcode,
  FileCheck,
  Cpu,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Play,
  Microscope,
  TestTube,
} from "lucide-react";

const translations = {
  en: {
    badge: "Laboratory Integration",
    heroTitle: "Advanced Laboratory Management",
    heroDesc: "Connect your laboratory with clinical workflows for faster, more accurate results with complete traceability.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Complete Laboratory Solution",
    featuresSubtitle: "Streamline your lab operations from sample collection to result delivery",
    
    feature1: {
      title: "Test Ordering",
      desc: "Easy electronic test ordering with customizable test panels, profiles, and standing orders.",
    },
    feature2: {
      title: "Sample Tracking",
      desc: "Barcode-based sample tracking from collection through processing to result delivery.",
    },
    feature3: {
      title: "Results Management",
      desc: "Automatic result entry with reference ranges, critical value alerts, and delta checks.",
    },
    feature4: {
      title: "Equipment Integration",
      desc: "Direct interface with lab analyzers for automatic result capture and bi-directional communication.",
    },
    feature5: {
      title: "Quality Control",
      desc: "Built-in QC tracking with Westgard rules, Levey-Jennings charts, and trend analysis.",
    },
    feature6: {
      title: "Report Generation",
      desc: "Customizable report templates with digital signatures, cumulative reports, and delivery options.",
    },
    
    benefitsTitle: "Why Choose Our Laboratory System?",
    benefit1: "Faster turnaround time",
    benefit2: "Reduce manual errors",
    benefit3: "Complete audit trail",
    benefit4: "Equipment connectivity",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Order Tests",
      desc: "Electronic test ordering from EMR with automatic patient and insurance verification.",
    },
    step2: {
      title: "Collect & Track",
      desc: "Barcode-based sample collection with chain of custody tracking.",
    },
    step3: {
      title: "Process & Analyze",
      desc: "Automated analysis with instrument integration and QC validation.",
    },
    step4: {
      title: "Report & Deliver",
      desc: "Results automatically flow to EMR with critical value notifications.",
    },
    
    ctaTitle: "Ready to Modernize Your Lab?",
    ctaDesc: "Join laboratories achieving faster results and better accuracy with MedCore LIS.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "تكامل المختبر",
    heroTitle: "إدارة مختبر متقدمة",
    heroDesc: "اربط مختبرك بسير العمل السريري للحصول على نتائج أسرع وأدق مع تتبع كامل.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "حل مختبر متكامل",
    featuresSubtitle: "بسّط عمليات مختبرك من جمع العينات إلى تسليم النتائج",
    
    feature1: {
      title: "طلب الفحوصات",
      desc: "طلب إلكتروني سهل للفحوصات مع لوحات فحص قابلة للتخصيص والطلبات الدائمة.",
    },
    feature2: {
      title: "تتبع العينات",
      desc: "تتبع العينات بالباركود من الجمع خلال المعالجة إلى تسليم النتيجة.",
    },
    feature3: {
      title: "إدارة النتائج",
      desc: "إدخال تلقائي للنتائج مع نطاقات مرجعية وتنبيهات القيم الحرجة وفحوصات الدلتا.",
    },
    feature4: {
      title: "تكامل الأجهزة",
      desc: "واجهة مباشرة مع محللات المختبر للحصول على النتائج تلقائياً والاتصال ثنائي الاتجاه.",
    },
    feature5: {
      title: "مراقبة الجودة",
      desc: "تتبع QC مدمج مع قواعد Westgard ومخططات Levey-Jennings وتحليل الاتجاهات.",
    },
    feature6: {
      title: "إنشاء التقارير",
      desc: "قوالب تقارير قابلة للتخصيص مع التوقيعات الرقمية والتقارير التراكمية وخيارات التسليم.",
    },
    
    benefitsTitle: "لماذا تختار نظام المختبر لدينا؟",
    benefit1: "وقت تحول أسرع",
    benefit2: "تقليل الأخطاء اليدوية",
    benefit3: "سجل تدقيق كامل",
    benefit4: "اتصال بالأجهزة",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "طلب الفحوصات",
      desc: "طلب فحوصات إلكتروني من EMR مع التحقق التلقائي من المريض والتأمين.",
    },
    step2: {
      title: "الجمع والتتبع",
      desc: "جمع عينات بالباركود مع تتبع سلسلة الحفظ.",
    },
    step3: {
      title: "المعالجة والتحليل",
      desc: "تحليل آلي مع تكامل الأجهزة والتحقق من الجودة.",
    },
    step4: {
      title: "التقرير والتسليم",
      desc: "النتائج تتدفق تلقائياً إلى EMR مع إشعارات القيم الحرجة.",
    },
    
    ctaTitle: "مستعد لتحديث مختبرك؟",
    ctaDesc: "انضم للمختبرات التي تحقق نتائج أسرع ودقة أفضل مع MedCore LIS.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: ClipboardList },
  { key: "feature2", icon: ScanBarcode },
  { key: "feature3", icon: FileCheck },
  { key: "feature4", icon: Cpu },
  { key: "feature5", icon: ShieldCheck },
  { key: "feature6", icon: FileText },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCLaboratoryPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-amber-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
                <FlaskConical className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                
                {/* Mock Lab Interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">Sample Worklist</span>
                    </div>
                    <span className="text-sm text-slate-500">15 pending</span>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { id: "LAB-001", patient: "Ahmed M.", tests: "CBC, CMP", status: "In Progress", color: "blue" },
                      { id: "LAB-002", patient: "Sarah K.", tests: "Lipid Panel", status: "Completed", color: "green" },
                      { id: "LAB-003", patient: "John D.", tests: "HbA1c, TSH", status: "Pending", color: "amber" },
                      { id: "LAB-004", patient: "Maria L.", tests: "Urinalysis", status: "Critical", color: "red" },
                    ].map((sample) => (
                      <div
                        key={sample.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <TestTube className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{sample.patient}</div>
                            <div className="text-xs text-slate-500">{sample.id} • {sample.tests}</div>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          sample.color === "green" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                          sample.color === "blue" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                          sample.color === "red" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                          "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}>
                          {sample.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {[
                      { label: "Pending", value: "8", color: "amber" },
                      { label: "In Progress", value: "5", color: "blue" },
                      { label: "Completed", value: "42", color: "green" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className={`text-2xl font-bold ${
                          stat.color === "green" ? "text-green-600 dark:text-green-400" :
                          stat.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                          "text-amber-600 dark:text-amber-400"
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
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
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4">
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
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-amber-200 dark:bg-amber-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white text-2xl font-bold mb-4 relative z-10">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 to-orange-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-amber-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-amber-50 px-8"
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
