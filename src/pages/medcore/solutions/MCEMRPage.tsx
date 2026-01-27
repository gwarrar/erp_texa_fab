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
  FileText,
  User,
  ClipboardList,
  History,
  FlaskConical,
  ImageIcon,
  Pill,
  CheckCircle2,
  Shield,
  Clock,
  Globe,
  Sparkles,
  Play,
} from "lucide-react";

const translations = {
  en: {
    badge: "Electronic Medical Records",
    heroTitle: "Transform Patient Care with Digital Records",
    heroDesc: "Centralize all patient information in one secure, accessible platform. From medical history to lab results, everything at your fingertips.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Complete EMR Solution",
    featuresSubtitle: "Everything you need to manage patient records efficiently and securely",
    
    feature1: {
      title: "Complete Patient Profiles",
      desc: "Comprehensive patient information including demographics, medical history, allergies, and medications in one place.",
    },
    feature2: {
      title: "Clinical Documentation",
      desc: "Easy-to-use templates for clinical notes, diagnoses, and treatment plans with voice-to-text support.",
    },
    feature3: {
      title: "Medical History Tracking",
      desc: "Full timeline of patient encounters, procedures, and health changes over time.",
    },
    feature4: {
      title: "Lab Results Integration",
      desc: "Automatic import and display of laboratory results with abnormal value highlighting.",
    },
    feature5: {
      title: "Imaging & Radiology",
      desc: "Direct access to medical images and radiology reports within patient records.",
    },
    feature6: {
      title: "Prescription Management",
      desc: "E-prescribing with drug interaction checks and pharmacy integration.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our EMR?",
    benefit1: "Reduce paperwork by 80%",
    benefit2: "Access records anywhere, anytime",
    benefit3: "Improve patient safety",
    benefit4: "HIPAA & GDPR compliant",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Patient Registration",
      desc: "Quick patient onboarding with minimal data entry and automatic duplicate detection.",
    },
    step2: {
      title: "Clinical Documentation",
      desc: "Record encounters using customizable templates with voice input support.",
    },
    step3: {
      title: "Integrated Results",
      desc: "Lab and imaging results flow directly into patient records automatically.",
    },
    step4: {
      title: "Share & Collaborate",
      desc: "Securely share records with other providers and specialists.",
    },
    
    // CTA
    ctaTitle: "Ready to Go Paperless?",
    ctaDesc: "Join hundreds of healthcare institutions that have transformed their patient care with MedCore EMR.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "السجلات الطبية الإلكترونية",
    heroTitle: "حوّل رعاية المرضى بالسجلات الرقمية",
    heroDesc: "اجمع كل معلومات المريض في منصة واحدة آمنة وسهلة الوصول. من التاريخ الطبي إلى نتائج المختبر، كل شيء في متناول يدك.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "حل EMR متكامل",
    featuresSubtitle: "كل ما تحتاجه لإدارة سجلات المرضى بكفاءة وأمان",
    
    feature1: {
      title: "ملفات مرضى كاملة",
      desc: "معلومات شاملة للمريض تشمل البيانات الديموغرافية والتاريخ الطبي والحساسية والأدوية في مكان واحد.",
    },
    feature2: {
      title: "التوثيق السريري",
      desc: "قوالب سهلة الاستخدام للملاحظات السريرية والتشخيصات وخطط العلاج مع دعم تحويل الصوت لنص.",
    },
    feature3: {
      title: "تتبع التاريخ الطبي",
      desc: "جدول زمني كامل لزيارات المريض والإجراءات والتغيرات الصحية عبر الزمن.",
    },
    feature4: {
      title: "تكامل نتائج المختبر",
      desc: "استيراد وعرض تلقائي لنتائج المختبر مع تمييز القيم غير الطبيعية.",
    },
    feature5: {
      title: "التصوير والأشعة",
      desc: "الوصول المباشر للصور الطبية وتقارير الأشعة ضمن سجلات المريض.",
    },
    feature6: {
      title: "إدارة الوصفات",
      desc: "الوصفات الإلكترونية مع فحص تفاعلات الأدوية والتكامل مع الصيدلية.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار EMR لدينا؟",
    benefit1: "تقليل الأوراق بنسبة 80%",
    benefit2: "الوصول للسجلات من أي مكان وزمان",
    benefit3: "تحسين سلامة المرضى",
    benefit4: "متوافق مع HIPAA و GDPR",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "تسجيل المريض",
      desc: "تسجيل سريع للمرضى مع إدخال بيانات بسيط واكتشاف تلقائي للتكرار.",
    },
    step2: {
      title: "التوثيق السريري",
      desc: "سجّل الزيارات باستخدام قوالب قابلة للتخصيص مع دعم الإدخال الصوتي.",
    },
    step3: {
      title: "نتائج متكاملة",
      desc: "نتائج المختبر والتصوير تتدفق مباشرة إلى سجلات المرضى تلقائياً.",
    },
    step4: {
      title: "المشاركة والتعاون",
      desc: "مشاركة آمنة للسجلات مع مقدمي الخدمات والمتخصصين الآخرين.",
    },
    
    // CTA
    ctaTitle: "مستعد للتخلص من الورق؟",
    ctaDesc: "انضم لمئات المؤسسات الصحية التي حوّلت رعاية مرضاها مع MedCore EMR.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: User },
  { key: "feature2", icon: ClipboardList },
  { key: "feature3", icon: History },
  { key: "feature4", icon: FlaskConical },
  { key: "feature5", icon: ImageIcon },
  { key: "feature6", icon: Pill },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCEMRPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                >
                  <Play className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                
                {/* Mock EMR Interface */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
                      <div className="h-3 w-24 bg-slate-100 dark:bg-slate-600 rounded mt-2" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="h-3 w-full bg-slate-200 dark:bg-slate-600 rounded mb-2" />
                        <div className="h-6 w-16 bg-emerald-100 dark:bg-emerald-900/30 rounded" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-600" />
                        <div className="flex-1">
                          <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-600 rounded" />
                        </div>
                        <div className="h-3 w-16 bg-emerald-100 dark:bg-emerald-900/30 rounded" />
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
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
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

      {/* How It Works Section */}
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
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-emerald-200 dark:bg-emerald-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl font-bold mb-4 relative z-10">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-emerald-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 px-8"
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
