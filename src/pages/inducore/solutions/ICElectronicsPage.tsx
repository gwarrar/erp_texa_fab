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
  Cpu, ArrowRight, CheckCircle2, BarChart3, 
  CircuitBoard, Zap, Box, Shield, Boxes,
  TrendingUp, FileCheck, ScanLine
} from "lucide-react";

const translations = {
  en: {
    title: "Electronics Manufacturing",
    subtitle: "Precision ERP solution for PCB assembly, electronic component manufacturing, and high-tech production",
    heroStats: [
      { value: "99.8%", label: "First Pass Yield" },
      { value: "50%", label: "Faster Changeover" },
      { value: "100%", label: "Traceability" },
    ],
    overviewTitle: "High-Tech Manufacturing Excellence",
    overviewDesc: "From component sourcing to final testing, manage every aspect of electronics manufacturing with precision tracking and quality assurance.",
    features: [
      {
        icon: CircuitBoard,
        title: "PCB Assembly Tracking",
        desc: "Complete traceability for SMT placement, reflow, wave soldering, and inspection processes",
      },
      {
        icon: Box,
        title: "Component Management",
        desc: "Track component reels, moisture sensitivity levels, and shelf life with automated alerts",
      },
      {
        icon: Zap,
        title: "Test Data Management",
        desc: "Capture and analyze ICT, FCT, and burn-in test results with statistical process control",
      },
      {
        icon: Shield,
        title: "ESD & Compliance",
        desc: "Manage ESD-sensitive components and ensure compliance with RoHS, REACH, and WEEE",
      },
      {
        icon: Boxes,
        title: "BOM & Revision Control",
        desc: "Handle complex BOMs, engineering changes, and component alternates efficiently",
      },
      {
        icon: ScanLine,
        title: "Serial Number Tracking",
        desc: "Complete unit serialization with component-level traceability for warranty and recalls",
      },
    ],
    benefits: [
      "Achieve 99%+ first pass yield with real-time SPC",
      "Minimize component waste with precise inventory",
      "Ensure complete product traceability",
      "Reduce changeover time between products",
      "Meet regulatory compliance requirements",
    ],
    ctaTitle: "Elevate Your Electronics Production",
    ctaDesc: "See how InduCore can optimize your high-tech manufacturing",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "تصنيع الإلكترونيات",
    subtitle: "حل ERP دقيق لتجميع PCB وتصنيع المكونات الإلكترونية والإنتاج عالي التقنية",
    heroStats: [
      { value: "99.8%", label: "نجاح المرور الأول" },
      { value: "50%", label: "تحويل أسرع" },
      { value: "100%", label: "إمكانية التتبع" },
    ],
    overviewTitle: "تميز التصنيع عالي التقنية",
    overviewDesc: "من توريد المكونات إلى الاختبار النهائي، قم بإدارة كل جانب من تصنيع الإلكترونيات مع التتبع الدقيق وضمان الجودة.",
    features: [
      {
        icon: CircuitBoard,
        title: "تتبع تجميع PCB",
        desc: "تتبع كامل لعمليات وضع SMT وإعادة التدفق واللحام الموجي والفحص",
      },
      {
        icon: Box,
        title: "إدارة المكونات",
        desc: "تتبع بكرات المكونات ومستويات حساسية الرطوبة وفترة الصلاحية مع تنبيهات آلية",
      },
      {
        icon: Zap,
        title: "إدارة بيانات الاختبار",
        desc: "التقاط وتحليل نتائج ICT و FCT و burn-in مع التحكم الإحصائي في العمليات",
      },
      {
        icon: Shield,
        title: "ESD والامتثال",
        desc: "إدارة المكونات الحساسة لـ ESD وضمان الامتثال لـ RoHS و REACH و WEEE",
      },
      {
        icon: Boxes,
        title: "قائمة المواد والتحكم في المراجعات",
        desc: "التعامل مع قوائم المواد المعقدة والتغييرات الهندسية وبدائل المكونات بكفاءة",
      },
      {
        icon: ScanLine,
        title: "تتبع الأرقام التسلسلية",
        desc: "ترقيم تسلسلي كامل للوحدات مع تتبع على مستوى المكونات للضمان والاستدعاء",
      },
    ],
    benefits: [
      "تحقيق نجاح مرور أول 99%+ مع SPC الفوري",
      "تقليل هدر المكونات مع المخزون الدقيق",
      "ضمان التتبع الكامل للمنتج",
      "تقليل وقت التحويل بين المنتجات",
      "تلبية متطلبات الامتثال التنظيمي",
    ],
    ctaTitle: "ارتقِ بإنتاجك الإلكتروني",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين تصنيعك عالي التقنية",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
};

export default function ICElectronicsPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Cpu className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-10">
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
                  <div className="text-cyan-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8">
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
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
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
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 text-white">
                <CircuitBoard className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Industry 4.0 Ready</h3>
                <p className="text-cyan-100 mb-6">
                  Connect your SMT lines, test equipment, and automation systems for real-time production visibility and smart manufacturing.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    <span className="text-sm">IPC Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8">
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
