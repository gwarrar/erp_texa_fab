import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Briefcase, Globe, TrendingUp, Users, 
  CheckCircle2, ArrowRight, ArrowLeft, Shield, 
  LayoutDashboard, Coins, Smartphone, Award, Star, Zap
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Agents Program",
    
    heroTitle: "Become a FinCore",
    heroTitleHighlight: "Authorized Agent",
    heroSubtitle: "Join our global network of agents. Get a complete business management system, earn recurring revenue, and empower businesses in your region.",
    
    // Benefits Section
    benefitsTitle: "Why Become an Agent?",
    benefitsSubtitle: "Comprehensive tools and incentives to help you succeed",
    
    benefit1Title: "Recurring Revenue",
    benefit1Desc: "Earn up to 30% monthly commission on every client you onboard and retain.",
    
    benefit2Title: "Free Business System",
    benefit2Desc: "Get a free version of FinCore to manage your own agency business efficiently.",
    
    benefit3Title: "Partner Dashboard",
    benefit3Desc: "Dedicated portal to manage your clients, track earnings, and access marketing materials.",
    
    benefit4Title: "Exclusive Incentives",
    benefit4Desc: "Performance bonuses, regional exclusivity options, and marketing support.",
    
    // Feature Showcase
    showcaseTitle: "Tools for Success",
    showcaseSubtitle: "Everything you need to manage and grow your agency",
    
    sc1Title: "Agent Dashboard",
    sc1Desc: "Real-time tracking of client performance, subscriptions, and your commissions.",
    
    sc2Title: "Marketing Kit",
    sc2Desc: "Ready-to-use brochures, presentations, and social media assets in your language.",
    
    sc3Title: "Training & Support",
    sc3Desc: "Comprehensive certification program and priority technical support channel.",
    
    // Steps
    stepsTitle: "How It Works",
    step1: "Register",
    step1Desc: "Submit your application and complete the verification process.",
    step2: "Train",
    step2Desc: "Complete our agent certification program online.",
    step3: "Sell",
    step3Desc: "Onboard clients using your unique partner code.",
    step4: "Earn",
    step4Desc: "Receive monthly payouts directly to your bank account.",
    
    ctaTitle: "Start Your Journey Today",
    ctaSubtitle: "There has never been a better time to partner with the fastest growing fintech platform.",
    ctaButton: "Register as Agent",
    ctaLogin: "Agent Login",
  },
  ar: {
    pageTitle: "برنامج الوكلاء",
    
    heroTitle: "كن وكيلاً معتمداً لـ",
    heroTitleHighlight: "FinCore",
    heroSubtitle: "انضم إلى شبكتنا العالمية من الوكلاء. احصل على نظام إدارة أعمال كامل، واكسب إيرادات متكررة، ومكّن الشركات في منطقتك.",
    
    benefitsTitle: "لماذا تصبح وكيلاً؟",
    benefitsSubtitle: "أدوات وحوافز شاملة لمساعدتك على النجاح",
    
    benefit1Title: "إيرادات شهرية متكررة",
    benefit1Desc: "احصل على عمولة شهرية تصل إلى 30% عن كل عميل تقوم باستقطابه والاحتفاظ به.",
    
    benefit2Title: "نظام إدارة مجاني",
    benefit2Desc: "احصل على نسخة مجانية من FinCore لإدارة أعمال وكالتك بكفاءة.",
    
    benefit3Title: "لوحة تحكم الشريك",
    benefit3Desc: "بوابة مخصصة لإدارة عملائك، وتتبع أرباحك، والوصول إلى المواد التسويقية.",
    
    benefit4Title: "حوافز حصرية",
    benefit4Desc: "مكافآت الأداء، خيارات الحصرية الإقليمية، ودعم تسويقي.",
    
    showcaseTitle: "أدوات النجاح",
    showcaseSubtitle: "كل ما تحتاجه لإدارة وتنمية وكالتك",
    
    sc1Title: "لوحة تحكم الوكيل",
    sc1Desc: "تتبع فوري لأداء العملاء، الاشتراكات، وعمولاتك.",
    
    sc2Title: "الحقيبة التسويقية",
    sc2Desc: "كتيبات وعروض تقديمية ومحتوى تواصل اجتماعي جاهز للاستخدام بلغتك.",
    
    sc3Title: "التدريب والدعم",
    sc3Desc: "برنامج شهادات شامل وقناة دعم فني ذات أولوية.",
    
    stepsTitle: "كيف يعمل البرنامج",
    step1: "سجّل",
    step1Desc: "قدم طلبك وأكمل عملية التحقق.",
    step2: "تدرب",
    step2Desc: "أكمل برنامج شهادة الوكيل عبر الإنترنت.",
    step3: "بِع",
    step3Desc: "سجل العملاء باستخدام كود الشريك الفريد الخاص بك.",
    step4: "اربح",
    step4Desc: "احصل على دفعات شهرية مباشرة إلى حسابك البنكي.",
    
    ctaTitle: "ابدأ رحلتك اليوم",
    ctaSubtitle: "لم يكن هناك وقت أفضل للشراكة مع أسرع منصة تكنولوجيا مالية نمواً.",
    ctaButton: "سجل كوكيل",
    ctaLogin: "دخول الوكلاء",
  },
  tr: {
    pageTitle: "Acente Programı",
    
    heroTitle: "FinCore Yetkili",
    heroTitleHighlight: "Acentesi Olun",
    heroSubtitle: "Küresel acente ağımıza katılın. Tam bir işletme yönetim sistemi edinin, sürekli gelir elde edin ve bölgenizdeki işletmeleri güçlendirin.",
    
    benefitsTitle: "Neden Acente Olmalısınız?",
    benefitsSubtitle: "Başarılı olmanıza yardımcı olacak kapsamlı araçlar ve teşvikler",
    
    benefit1Title: "Sürekli Gelir",
    benefit1Desc: "Kazandırdığınız ve tuttuğunuz her müşteri için aylık %30'a varan komisyon kazanın.",
    
    benefit2Title: "Ücretsiz İşletme Sistemi",
    benefit2Desc: "Kendi acente işinizi verimli bir şekilde yönetmek için FinCore'un ücretsiz bir sürümünü edinin.",
    
    benefit3Title: "Ortak Paneli",
    benefit3Desc: "Müşterilerinizi yönetmek, kazançlarınızı takip etmek ve pazarlama materyallerine erişmek için özel portal.",
    
    benefit4Title: "Özel Teşvikler",
    benefit4Desc: "Performans bonusları, bölgesel ayrıcalık seçenekleri ve pazarlama desteği.",
    
    showcaseTitle: "Başarı Araçları",
    showcaseSubtitle: "Acentenizi yönetmek ve büyütmek için ihtiyacınız olan her şey",
    
    sc1Title: "Acente Paneli",
    sc1Desc: "Müşteri performansı, abonelikler ve komisyonlarınızın gerçek zamanlı takibi.",
    
    sc2Title: "Pazarlama Kiti",
    sc2Desc: "Dilinizde kullanıma hazır broşürler, sunumlar ve sosyal medya içerikleri.",
    
    sc3Title: "Eğitim ve Destek",
    sc3Desc: "Kapsamlı sertifika programı ve öncelikli teknik destek kanalı.",
    
    stepsTitle: "Nasıl Çalışır",
    step1: "Kayıt Ol",
    step1Desc: "Başvurunuzu gönderin ve doğrulama sürecini tamamlayın.",
    step2: "Eğitim Al",
    step2Desc: "Çevrimiçi acente sertifika programımızı tamamlayın.",
    step3: "Satış Yap",
    step3Desc: "Benzersiz ortak kodunuzu kullanarak müşterileri kaydedin.",
    step4: "Kazan",
    step4Desc: "Aylık ödemeleri doğrudan banka hesabınıza alın.",
    
    ctaTitle: "Yolculuğunuza Bugün Başlayın",
    ctaSubtitle: "En hızlı büyüyen fintech platformuyla ortaklık kurmak için daha iyi bir zaman olmamıştı.",
    ctaButton: "Acente Olarak Kaydol",
    ctaLogin: "Acente Girişi",
  }
};

const FCAgentsPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const isRTL = dir === "rtl";
  const t = translations[language as keyof typeof translations] || translations.en;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0A1628] text-white" : "bg-[#FAF8F5] text-slate-900"}`} dir={dir}>
      <FCHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center overflow-hidden ${
        theme === "dark" 
          ? "bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0A1628]" 
          : "bg-gradient-to-br from-[#FAF8F5] via-white to-[#e0f2fe]"
      }`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/10"
          }`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-emerald-500/10" : "bg-emerald-500/10"
          }`} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                theme === "dark" 
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" 
                  : "bg-blue-100 text-blue-700 border border-blue-200"
              }`}>
                <Briefcase className="w-4 h-4" />
                {t.pageTitle}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              {t.heroTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                {t.heroTitleHighlight}
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}>
              {t.heroSubtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg"
              >
                {t.ctaButton}
                <Arrow className="w-4 h-4 ms-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className={theme === "dark" ? "border-slate-600 hover:bg-slate-800" : ""}
              >
                {t.ctaLogin}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-slate-900/50" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.benefitsTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.benefitsSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Coins, 
                  title: t.benefit1Title, 
                  desc: t.benefit1Desc, 
                  color: "from-amber-400 to-orange-500" 
                },
                { 
                  icon: LayoutDashboard, 
                  title: t.benefit2Title, 
                  desc: t.benefit2Desc, 
                  color: "from-blue-400 to-indigo-500" 
                },
                { 
                  icon: Users, 
                  title: t.benefit3Title, 
                  desc: t.benefit3Desc, 
                  color: "from-emerald-400 to-teal-500" 
                },
                { 
                  icon: Award, 
                  title: t.benefit4Title, 
                  desc: t.benefit4Desc, 
                  color: "from-purple-400 to-pink-500" 
                }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-3xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-blue-500/50" 
                      : "bg-slate-50 border border-slate-200 hover:border-blue-500/50 shadow-lg"
                  } transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.showcaseTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.showcaseSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t.sc1Title, desc: t.sc1Desc, icon: LayoutDashboard },
                { title: t.sc2Title, desc: t.sc2Desc, icon: Star },
                { title: t.sc3Title, desc: t.sc3Desc, icon: Shield },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`flex flex-col items-center text-center p-8 rounded-3xl border-2 border-dashed ${
                    theme === "dark" ? "border-slate-700 hover:border-blue-500" : "border-slate-300 hover:border-blue-500"
                  } transition-colors duration-300`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    theme === "dark" ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-slate-900/50" : "bg-slate-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.stepsTitle}</h2>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-blue-500/20" />
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: t.step1, desc: t.step1Desc, step: "01" },
                  { title: t.step2, desc: t.step2Desc, step: "02" },
                  { title: t.step3, desc: t.step3Desc, step: "03" },
                  { title: t.step4, desc: t.step4Desc, step: "04" },
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-700 shadow-xl flex items-center justify-center mb-6 z-10 border-4 border-white dark:border-slate-800">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-emerald-500">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`max-w-4xl mx-auto text-center p-12 rounded-3xl overflow-hidden relative ${
              theme === "dark" 
                ? "bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-slate-700" 
                : "bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-100"
            }`}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
              <p className={`text-lg mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                {t.ctaSubtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg text-lg px-8 py-6 h-auto"
              >
                {t.ctaButton}
                <Arrow className="w-5 h-5 ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FCFooter />
    </div>
  );
};

export default FCAgentsPage;