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
  Building2,
  Globe,
  CheckCircle2,
  Zap,
  Shield,
  Play,
  Users,
  BarChart3,
  Lock,
  Settings,
  Network,
  MapPin,
} from "lucide-react";

const translations = {
  en: {
    badge: "Multi-Branch Management",
    heroTitle: "Manage Unlimited Branches Seamlessly",
    heroDesc: "Centralized control over all locations, companies, and subsidiaries with consolidated reporting, role-based access, and AI-optimized operations.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Multi-Branch Features",
    featuresSubtitle: "Scale your business across locations without losing control",
    
    feature1: {
      title: "Multi-Company Support",
      desc: "Manage multiple companies, brands, or legal entities from a single platform with separate charts of accounts and consolidated reporting.",
    },
    feature2: {
      title: "Branch Management",
      desc: "Create and manage unlimited branches with their own inventory, staff, and operations while maintaining central oversight.",
    },
    feature3: {
      title: "Consolidated Reports",
      desc: "Real-time consolidated financial and operational reports across all entities with drill-down to individual branches.",
    },
    feature4: {
      title: "Role-Based Access",
      desc: "Granular permissions control who sees what. Branch managers see their data, executives see everything.",
    },
    feature5: {
      title: "Inter-Company Transactions",
      desc: "Seamless handling of inter-company sales, transfers, and settlements with automatic elimination entries.",
    },
    feature6: {
      title: "Location Tracking",
      desc: "Track performance by geography with map-based dashboards showing real-time metrics for each location.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our Multi-Branch Module?",
    benefit1: "Unlimited branches",
    benefit2: "Centralized control",
    benefit3: "Consolidated reporting",
    benefit4: "Granular permissions",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Setup Companies",
      desc: "Create your company structure with parent and subsidiary relationships.",
    },
    step2: {
      title: "Add Branches",
      desc: "Add branches to each company with their own settings and inventory.",
    },
    step3: {
      title: "Assign Roles",
      desc: "Configure user roles and permissions for each branch and company.",
    },
    step4: {
      title: "Monitor & Consolidate",
      desc: "View real-time consolidated data with drill-down capabilities.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "∞", label: "Unlimited branches" },
    stat2: { value: "100%", label: "Data visibility" },
    stat3: { value: "1-click", label: "Consolidation" },
    stat4: { value: "Real-time", label: "Synchronization" },
    
    // CTA
    ctaTitle: "Ready to Scale Your Business?",
    ctaDesc: "Join thousands of multi-location businesses managing operations seamlessly with NexaCore.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "إدارة الفروع المتعددة",
    heroTitle: "أدر فروعاً غير محدودة بسلاسة",
    heroDesc: "تحكم مركزي في جميع المواقع والشركات والشركات التابعة مع تقارير موحدة، صلاحيات مبنية على الأدوار، وعمليات محسّنة بالذكاء الاصطناعي.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات الفروع المتعددة",
    featuresSubtitle: "وسّع أعمالك عبر المواقع دون فقدان السيطرة",
    
    feature1: {
      title: "دعم متعدد الشركات",
      desc: "أدر شركات أو علامات تجارية أو كيانات قانونية متعددة من منصة واحدة مع مخططات حسابات منفصلة وتقارير موحدة.",
    },
    feature2: {
      title: "إدارة الفروع",
      desc: "أنشئ وأدر فروعاً غير محدودة بمخزونها وموظفيها وعملياتها الخاصة مع الحفاظ على الإشراف المركزي.",
    },
    feature3: {
      title: "تقارير موحدة",
      desc: "تقارير مالية وتشغيلية موحدة في الوقت الفعلي عبر جميع الكيانات مع إمكانية التفصيل للفروع الفردية.",
    },
    feature4: {
      title: "صلاحيات مبنية على الأدوار",
      desc: "تحكم صلاحيات دقيق يحدد من يرى ماذا. مديرو الفروع يرون بياناتهم، التنفيذيون يرون كل شيء.",
    },
    feature5: {
      title: "المعاملات بين الشركات",
      desc: "تعامل سلس مع المبيعات والتحويلات والتسويات بين الشركات مع قيود الإلغاء التلقائية.",
    },
    feature6: {
      title: "تتبع الموقع",
      desc: "تتبع الأداء حسب الجغرافيا مع لوحات معلومات خريطة تُظهر مقاييس في الوقت الفعلي لكل موقع.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة الفروع المتعددة لدينا؟",
    benefit1: "فروع غير محدودة",
    benefit2: "تحكم مركزي",
    benefit3: "تقارير موحدة",
    benefit4: "صلاحيات دقيقة",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "أعدّ الشركات",
      desc: "أنشئ هيكل شركتك مع علاقات الشركة الأم والشركات التابعة.",
    },
    step2: {
      title: "أضف الفروع",
      desc: "أضف فروعاً لكل شركة بإعداداتها ومخزونها الخاص.",
    },
    step3: {
      title: "عيّن الأدوار",
      desc: "هيّئ أدوار المستخدمين والصلاحيات لكل فرع وشركة.",
    },
    step4: {
      title: "راقب ووحّد",
      desc: "اعرض بيانات موحدة في الوقت الفعلي مع إمكانية التفصيل.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "∞", label: "فروع غير محدودة" },
    stat2: { value: "100%", label: "رؤية البيانات" },
    stat3: { value: "نقرة", label: "توحيد" },
    stat4: { value: "فوري", label: "مزامنة" },
    
    // CTA
    ctaTitle: "مستعد لتوسيع أعمالك؟",
    ctaDesc: "انضم لآلاف الشركات متعددة المواقع التي تدير عملياتها بسلاسة مع NexaCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Building2 },
  { key: "feature2", icon: Network },
  { key: "feature3", icon: BarChart3 },
  { key: "feature4", icon: Lock },
  { key: "feature5", icon: Settings },
  { key: "feature6", icon: MapPin },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCBranchesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-orange-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                
                {/* Mock Multi-Branch Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Branch Network</div>
                        <div className="text-xs text-slate-500">All Locations</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">12</div>
                      <div className="text-xs text-slate-500">Active Branches</div>
                    </div>
                  </div>
                  
                  {/* Mini Map Visualization */}
                  <div className="relative h-32 bg-slate-100 dark:bg-slate-700/50 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-20 h-20 text-slate-300 dark:text-slate-600" />
                    </div>
                    {/* Location dots */}
                    {[
                      { top: "20%", left: "30%" },
                      { top: "40%", left: "50%" },
                      { top: "60%", left: "70%" },
                      { top: "30%", left: "60%" },
                      { top: "50%", left: "25%" },
                    ].map((pos, i) => (
                      <div 
                        key={i}
                        className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                        style={{ top: pos.top, left: pos.left }}
                      />
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Dublin HQ", revenue: "€125K", status: "Active" },
                      { name: "London Branch", revenue: "€98K", status: "Active" },
                      { name: "Paris Office", revenue: "€87K", status: "Active" },
                    ].map((branch, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{branch.name}</div>
                        </div>
                        <div className="text-sm font-bold text-green-600">{branch.revenue}</div>
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
                <benefit.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
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
                <div className="text-orange-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8"
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
