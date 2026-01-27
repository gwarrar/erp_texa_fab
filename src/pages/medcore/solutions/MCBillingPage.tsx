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
  Receipt,
  Zap,
  FileCheck,
  CreditCard,
  PiggyBank,
  BarChart3,
  Globe,
  CheckCircle2,
  Play,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const translations = {
  en: {
    badge: "Medical Billing & Insurance",
    heroTitle: "Simplify Medical Billing",
    heroDesc: "Streamline your revenue cycle with automated billing, claims processing, and payment tracking for faster reimbursements.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Complete Billing Solution",
    featuresSubtitle: "End-to-end revenue cycle management for healthcare institutions",
    
    feature1: {
      title: "Automated Billing",
      desc: "Automatic charge capture from clinical encounters with CPT/ICD coding assistance and validation.",
    },
    feature2: {
      title: "Insurance Claims",
      desc: "Electronic claims submission with real-time eligibility verification and pre-authorization tracking.",
    },
    feature3: {
      title: "Payment Processing",
      desc: "Multiple payment methods including cash, cards, bank transfers, and online payment portals.",
    },
    feature4: {
      title: "Accounts Receivable",
      desc: "Track outstanding balances with automated follow-up, payment plans, and collection workflows.",
    },
    feature5: {
      title: "Financial Reporting",
      desc: "Comprehensive reports on revenue, collections, aging analysis, and financial performance.",
    },
    feature6: {
      title: "Multi-Currency Support",
      desc: "Handle international patients with multi-currency billing, exchange rates, and tax compliance.",
    },
    
    benefitsTitle: "Why Choose Our Billing System?",
    benefit1: "Faster reimbursements",
    benefit2: "Reduce claim denials",
    benefit3: "Improve cash flow",
    benefit4: "Complete transparency",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Charge Capture",
      desc: "Services automatically captured from clinical encounters and coded appropriately.",
    },
    step2: {
      title: "Claim Generation",
      desc: "Claims generated with eligibility verification and pre-submission validation.",
    },
    step3: {
      title: "Submission & Tracking",
      desc: "Electronic submission with real-time status tracking and denial management.",
    },
    step4: {
      title: "Payment & Reconciliation",
      desc: "Automatic payment posting and reconciliation with patient statements.",
    },
    
    ctaTitle: "Ready to Improve Your Revenue Cycle?",
    ctaDesc: "Start collecting faster and reduce claim denials with MedCore billing.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "الفوترة الطبية والتأمين",
    heroTitle: "بسّط الفوترة الطبية",
    heroDesc: "حسّن دورة إيراداتك مع الفوترة الآلية ومعالجة المطالبات وتتبع المدفوعات للحصول على تعويضات أسرع.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "حل فوترة متكامل",
    featuresSubtitle: "إدارة دورة الإيرادات من البداية للنهاية للمؤسسات الصحية",
    
    feature1: {
      title: "الفوترة الآلية",
      desc: "التقاط الرسوم تلقائياً من اللقاءات السريرية مع مساعدة ترميز CPT/ICD والتحقق.",
    },
    feature2: {
      title: "مطالبات التأمين",
      desc: "تقديم المطالبات إلكترونياً مع التحقق من الأهلية في الوقت الفعلي وتتبع الموافقة المسبقة.",
    },
    feature3: {
      title: "معالجة المدفوعات",
      desc: "طرق دفع متعددة تشمل النقد والبطاقات والتحويلات البنكية وبوابات الدفع عبر الإنترنت.",
    },
    feature4: {
      title: "الذمم المدينة",
      desc: "تتبع الأرصدة المستحقة مع متابعة آلية وخطط الدفع وسير عمل التحصيل.",
    },
    feature5: {
      title: "التقارير المالية",
      desc: "تقارير شاملة عن الإيرادات والتحصيلات وتحليل التقادم والأداء المالي.",
    },
    feature6: {
      title: "دعم العملات المتعددة",
      desc: "التعامل مع المرضى الدوليين بفوترة متعددة العملات وأسعار الصرف والامتثال الضريبي.",
    },
    
    benefitsTitle: "لماذا تختار نظام الفوترة لدينا؟",
    benefit1: "تعويضات أسرع",
    benefit2: "تقليل رفض المطالبات",
    benefit3: "تحسين التدفق النقدي",
    benefit4: "شفافية كاملة",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "التقاط الرسوم",
      desc: "الخدمات تُلتقط تلقائياً من اللقاءات السريرية وتُرمّز بشكل مناسب.",
    },
    step2: {
      title: "إنشاء المطالبة",
      desc: "المطالبات تُنشأ مع التحقق من الأهلية والتحقق قبل التقديم.",
    },
    step3: {
      title: "التقديم والتتبع",
      desc: "تقديم إلكتروني مع تتبع الحالة في الوقت الفعلي وإدارة الرفض.",
    },
    step4: {
      title: "الدفع والتسوية",
      desc: "ترحيل المدفوعات تلقائياً والتسوية مع كشوف حسابات المرضى.",
    },
    
    ctaTitle: "مستعد لتحسين دورة إيراداتك؟",
    ctaDesc: "ابدأ التحصيل أسرع وقلل رفض المطالبات مع فوترة MedCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Zap },
  { key: "feature2", icon: FileCheck },
  { key: "feature3", icon: CreditCard },
  { key: "feature4", icon: PiggyBank },
  { key: "feature5", icon: BarChart3 },
  { key: "feature6", icon: Globe },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCBillingPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-rose-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-sm font-medium mb-6">
                <Receipt className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500" />
                
                {/* Mock Billing Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">Revenue Overview</span>
                    </div>
                    <span className="text-sm text-slate-500">This Month</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Total Revenue", value: "$125,430", icon: DollarSign, color: "green", change: "+12%" },
                      { label: "Pending Claims", value: "$23,150", icon: FileCheck, color: "amber", change: "15 claims" },
                      { label: "Collections", value: "$98,280", icon: CreditCard, color: "blue", change: "+8%" },
                      { label: "Outstanding", value: "$27,150", icon: PiggyBank, color: "rose", change: "42 accounts" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className={`w-4 h-4 ${
                            stat.color === "green" ? "text-green-600 dark:text-green-400" :
                            stat.color === "amber" ? "text-amber-600 dark:text-amber-400" :
                            stat.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                            "text-rose-600 dark:text-rose-400"
                          }`} />
                          <span className="text-xs text-slate-500">{stat.label}</span>
                        </div>
                        <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Recent Transactions</div>
                    <div className="space-y-2">
                      {[
                        { patient: "John D.", amount: "$450", status: "Paid", method: "Insurance" },
                        { patient: "Sarah M.", amount: "$125", status: "Pending", method: "Self-Pay" },
                        { patient: "Ahmed K.", amount: "$890", status: "Processing", method: "Insurance" },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                          <div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{tx.patient}</div>
                            <div className="text-xs text-slate-500">{tx.method}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{tx.amount}</div>
                            <div className={`text-xs ${
                              tx.status === "Paid" ? "text-green-600" :
                              tx.status === "Pending" ? "text-amber-600" :
                              "text-blue-600"
                            }`}>{tx.status}</div>
                          </div>
                        </div>
                      ))}
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
                <CheckCircle2 className="w-5 h-5 text-rose-500" />
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mb-4">
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
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-rose-200 dark:bg-rose-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-600 text-white text-2xl font-bold mb-4 relative z-10">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 to-pink-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-rose-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-rose-700 hover:bg-rose-50 px-8"
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
