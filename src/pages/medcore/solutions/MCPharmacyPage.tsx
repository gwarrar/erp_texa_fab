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
  Pill,
  Package,
  FileText,
  AlertTriangle,
  Clock,
  CreditCard,
  Truck,
  CheckCircle2,
  Play,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const translations = {
  en: {
    badge: "Pharmacy Management",
    heroTitle: "Modern Pharmacy Management System",
    heroDesc: "Streamline your pharmacy operations with intelligent inventory management, prescription processing, and drug safety checks.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Complete Pharmacy Solution",
    featuresSubtitle: "Everything you need to run an efficient and safe pharmacy operation",
    
    feature1: {
      title: "Inventory Management",
      desc: "Real-time stock tracking with automatic reorder alerts, expiry management, and FIFO dispensing.",
    },
    feature2: {
      title: "Prescription Processing",
      desc: "Quick prescription entry with barcode scanning, dosage verification, and patient history check.",
    },
    feature3: {
      title: "Drug Interaction Alerts",
      desc: "Automatic checks for drug interactions, allergies, contraindications, and duplicate therapy.",
    },
    feature4: {
      title: "Batch & Expiry Tracking",
      desc: "Track medication batches with automated expiry alerts and disposal workflows.",
    },
    feature5: {
      title: "Insurance Integration",
      desc: "Direct insurance verification, prior authorization, and real-time claims processing.",
    },
    feature6: {
      title: "Supplier Management",
      desc: "Manage multiple suppliers with price comparison, auto-ordering, and delivery tracking.",
    },
    
    benefitsTitle: "Why Choose Our Pharmacy System?",
    benefit1: "Reduce medication errors",
    benefit2: "Optimize inventory levels",
    benefit3: "Faster dispensing",
    benefit4: "Complete traceability",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Receive Prescription",
      desc: "Electronic or scanned prescription entry with automatic patient matching.",
    },
    step2: {
      title: "Safety Verification",
      desc: "Automated checks for interactions, allergies, and dosage appropriateness.",
    },
    step3: {
      title: "Dispensing",
      desc: "Guided dispensing with barcode verification and patient counseling prompts.",
    },
    step4: {
      title: "Inventory Update",
      desc: "Automatic stock adjustment and reorder triggers when thresholds are reached.",
    },
    
    ctaTitle: "Ready to Modernize Your Pharmacy?",
    ctaDesc: "Join pharmacies that have improved patient safety and efficiency with MedCore.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "إدارة الصيدلية",
    heroTitle: "نظام إدارة صيدلية حديث",
    heroDesc: "بسّط عمليات الصيدلية مع إدارة مخزون ذكية ومعالجة الوصفات وفحوصات سلامة الأدوية.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "حل صيدلية متكامل",
    featuresSubtitle: "كل ما تحتاجه لتشغيل صيدلية فعالة وآمنة",
    
    feature1: {
      title: "إدارة المخزون",
      desc: "تتبع المخزون في الوقت الفعلي مع تنبيهات إعادة الطلب وإدارة الصلاحية وصرف FIFO.",
    },
    feature2: {
      title: "معالجة الوصفات",
      desc: "إدخال سريع للوصفات مع مسح الباركود والتحقق من الجرعات وفحص تاريخ المريض.",
    },
    feature3: {
      title: "تنبيهات تفاعل الأدوية",
      desc: "فحوصات تلقائية لتفاعلات الأدوية والحساسية وموانع الاستعمال والعلاج المكرر.",
    },
    feature4: {
      title: "تتبع الدفعات والصلاحية",
      desc: "تتبع دفعات الأدوية مع تنبيهات صلاحية آلية وسير عمل التخلص.",
    },
    feature5: {
      title: "تكامل التأمين",
      desc: "التحقق المباشر من التأمين والموافقة المسبقة ومعالجة المطالبات في الوقت الفعلي.",
    },
    feature6: {
      title: "إدارة الموردين",
      desc: "إدارة موردين متعددين مع مقارنة الأسعار والطلب التلقائي وتتبع التسليم.",
    },
    
    benefitsTitle: "لماذا تختار نظام الصيدلية لدينا؟",
    benefit1: "تقليل أخطاء الأدوية",
    benefit2: "تحسين مستويات المخزون",
    benefit3: "صرف أسرع",
    benefit4: "تتبع كامل",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "استلام الوصفة",
      desc: "إدخال الوصفة إلكترونياً أو بالمسح مع مطابقة المريض تلقائياً.",
    },
    step2: {
      title: "التحقق من السلامة",
      desc: "فحوصات آلية للتفاعلات والحساسية ومناسبة الجرعة.",
    },
    step3: {
      title: "الصرف",
      desc: "صرف موجّه مع التحقق بالباركود ومطالبات إرشاد المريض.",
    },
    step4: {
      title: "تحديث المخزون",
      desc: "تعديل المخزون تلقائياً وتشغيل إعادة الطلب عند الوصول للحدود.",
    },
    
    ctaTitle: "مستعد لتحديث صيدليتك؟",
    ctaDesc: "انضم للصيدليات التي حسّنت سلامة المرضى والكفاءة مع MedCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Package },
  { key: "feature2", icon: FileText },
  { key: "feature3", icon: AlertTriangle },
  { key: "feature4", icon: Clock },
  { key: "feature5", icon: CreditCard },
  { key: "feature6", icon: Truck },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCPharmacyPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Pill className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
                
                {/* Mock Pharmacy Interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Pill className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">Prescription #12345</span>
                    </div>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">Ready</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Patient", value: "John Doe" },
                      { label: "Doctor", value: "Dr. Smith" },
                      { label: "Date", value: "Mar 15, 2024" },
                      { label: "Items", value: "3 medications" },
                    ].map((item) => (
                      <div key={item.label} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {[
                      { name: "Amoxicillin 500mg", qty: "21 caps", status: "ok" },
                      { name: "Ibuprofen 400mg", qty: "14 tabs", status: "warning" },
                      { name: "Omeprazole 20mg", qty: "30 caps", status: "ok" },
                    ].map((med, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${med.status === "ok" ? "bg-green-500" : "bg-amber-500"}`} />
                          <div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{med.name}</div>
                            <div className="text-xs text-slate-500">{med.qty}</div>
                          </div>
                        </div>
                        {med.status === "warning" && (
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      Verify & Dispense
                    </Button>
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
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
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
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-purple-200 dark:bg-purple-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-2xl font-bold mb-4 relative z-10">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-purple-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-purple-50 px-8"
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
