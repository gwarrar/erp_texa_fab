import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Factory, ArrowRight, CheckCircle2, BarChart3, 
  Pill, Shield, FileCheck, Thermometer, FlaskConical,
  TrendingUp, ClipboardList, AlertTriangle
} from "lucide-react";

const translations = {
  en: {
    title: "Pharmaceutical Manufacturing",
    subtitle: "GMP-compliant ERP solution for pharmaceutical production, quality control, and regulatory compliance",
    heroStats: [
      { value: "100%", label: "FDA Compliance" },
      { value: "50%", label: "Faster Batch Release" },
      { value: "99.9%", label: "Batch Accuracy" },
    ],
    overviewTitle: "GMP-Compliant Manufacturing Excellence",
    overviewDesc: "From raw material qualification to finished product release, ensure every batch meets the highest pharmaceutical quality standards with complete traceability and documentation.",
    features: [
      {
        icon: FlaskConical,
        title: "Batch Processing & Tracking",
        desc: "Complete batch genealogy with electronic batch records and deviation management",
      },
      {
        icon: Thermometer,
        title: "Environmental Monitoring",
        desc: "Real-time temperature, humidity, and clean room monitoring with automated alerts",
      },
      {
        icon: Shield,
        title: "Quality Management System",
        desc: "Integrated QMS for CAPA, deviations, change control, and audit management",
      },
      {
        icon: FileCheck,
        title: "Regulatory Compliance",
        desc: "Built-in FDA 21 CFR Part 11, EU GMP Annex 11, and WHO GMP compliance features",
      },
      {
        icon: Pill,
        title: "Formulation Management",
        desc: "Manage complex formulations, bill of materials, and process instructions",
      },
      {
        icon: ClipboardList,
        title: "Document Control",
        desc: "Electronic signatures, version control, and complete audit trails for all documents",
      },
    ],
    benefits: [
      "Ensure complete batch traceability and genealogy",
      "Automate compliance documentation and reporting",
      "Reduce batch release time by 50%",
      "Minimize deviations with real-time monitoring",
      "Streamline regulatory inspections and audits",
    ],
    ctaTitle: "Transform Your Pharmaceutical Operations",
    ctaDesc: "See how InduCore can ensure compliance and efficiency in your pharma production",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "التصنيع الدوائي",
    subtitle: "حل ERP متوافق مع GMP للإنتاج الدوائي ومراقبة الجودة والامتثال التنظيمي",
    heroStats: [
      { value: "100%", label: "امتثال FDA" },
      { value: "50%", label: "إصدار دفعات أسرع" },
      { value: "99.9%", label: "دقة الدفعات" },
    ],
    overviewTitle: "تميز التصنيع المتوافق مع GMP",
    overviewDesc: "من تأهيل المواد الأولية إلى إصدار المنتجات النهائية، تأكد من أن كل دفعة تلبي أعلى معايير الجودة الدوائية مع التتبع الكامل والتوثيق.",
    features: [
      {
        icon: FlaskConical,
        title: "معالجة وتتبع الدفعات",
        desc: "نسب الدفعات الكاملة مع سجلات الدفعات الإلكترونية وإدارة الانحرافات",
      },
      {
        icon: Thermometer,
        title: "المراقبة البيئية",
        desc: "مراقبة درجة الحرارة والرطوبة والغرف النظيفة في الوقت الفعلي مع تنبيهات آلية",
      },
      {
        icon: Shield,
        title: "نظام إدارة الجودة",
        desc: "نظام QMS متكامل للإجراءات التصحيحية والانحرافات والتحكم في التغيير وإدارة المراجعات",
      },
      {
        icon: FileCheck,
        title: "الامتثال التنظيمي",
        desc: "ميزات امتثال مدمجة لـ FDA 21 CFR Part 11 و EU GMP Annex 11 و WHO GMP",
      },
      {
        icon: Pill,
        title: "إدارة التركيبات",
        desc: "إدارة التركيبات المعقدة وقائمة المواد وتعليمات العمليات",
      },
      {
        icon: ClipboardList,
        title: "التحكم في المستندات",
        desc: "التوقيعات الإلكترونية والتحكم في الإصدارات ومسارات التدقيق الكاملة لجميع المستندات",
      },
    ],
    benefits: [
      "ضمان التتبع الكامل للدفعات ونسبها",
      "أتمتة توثيق الامتثال والتقارير",
      "تقليل وقت إصدار الدفعات بنسبة 50%",
      "تقليل الانحرافات مع المراقبة في الوقت الفعلي",
      "تبسيط عمليات التفتيش والمراجعات التنظيمية",
    ],
    ctaTitle: "حوّل عملياتك الدوائية",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore ضمان الامتثال والكفاءة في إنتاجك الدوائي",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
};

export default function ICPharmaceuticalPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Factory className="w-5 h-5 text-green-300" />
              <span className="text-green-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10">
              {t.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {t.heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-green-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 px-8">
                  {t.ctaButton}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </Link>
              <Link to="/inducore/solutions">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.backToSolutions}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.overviewTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.overviewDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                {t.keyBenefits}
              </h2>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <FlaskConical className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">GMP Compliance</h3>
                <p className="text-green-100 mb-6">
                  Built-in compliance features ensure your manufacturing processes meet FDA, EMA, and WHO standards.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">21 CFR Part 11</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    <span className="text-sm">EU GMP Annex 11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 px-8">
              {t.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
      </section>

      <ICFooter />
    </div>
  );
}
