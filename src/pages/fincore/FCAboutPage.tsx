import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Globe, Users, Award, Target,
  Building2, MapPin, Calendar, Sparkles, Shield, Zap,
  Heart, Lightbulb, TrendingUp, CheckCircle2
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Transforming",
    heroHighlight: "Financial Services",
    heroSubtitle: "FinCore is a product of Next Revolution for Software Development, an Irish-European technology company building the future of financial infrastructure.",
    
    // Mission Section
    missionTitle: "Our Mission",
    missionText: "To democratize access to enterprise-grade banking technology, enabling financial institutions of all sizes to deliver exceptional digital experiences to their customers.",
    
    // Vision Section
    visionTitle: "Our Vision",
    visionText: "A world where every financial institution, from community banks to global enterprises, has access to modern, secure, and scalable technology infrastructure.",
    
    // Stats
    statsTitle: "FinCore by the Numbers",
    stat1Value: "45+",
    stat1Label: "Countries Served",
    stat2Value: "$50B+",
    stat2Label: "Transactions Processed",
    stat3Value: "150+",
    stat3Label: "Financial Institutions",
    stat4Value: "99.99%",
    stat4Label: "Platform Uptime",
    
    // Values
    valuesTitle: "Our Core Values",
    value1Title: "Security First",
    value1Desc: "Every decision we make prioritizes the security and privacy of our clients and their customers.",
    value2Title: "Innovation",
    value2Desc: "We continuously push the boundaries of what's possible in financial technology.",
    value3Title: "Reliability",
    value3Desc: "Our platform is built for 24/7 operations with industry-leading uptime guarantees.",
    value4Title: "Partnership",
    value4Desc: "We succeed when our clients succeed. We're partners, not just vendors.",
    
    // Timeline
    timelineTitle: "Our Journey",
    timeline1Year: "2018",
    timeline1Title: "Founded in Dublin",
    timeline1Desc: "Next Revolution established as an Irish technology company focused on enterprise software.",
    timeline2Year: "2019",
    timeline2Title: "FinCore Platform Launch",
    timeline2Desc: "First version of FinCore deployed for exchange houses in the Middle East.",
    timeline3Year: "2020",
    timeline3Title: "European Expansion",
    timeline3Desc: "Expanded operations across EU with new compliance modules for GDPR and PSD2.",
    timeline4Year: "2022",
    timeline4Title: "Global Remittance Network",
    timeline4Desc: "Launched global remittance capabilities with SWIFT and correspondent banking integration.",
    timeline5Year: "2024",
    timeline5Title: "AI-Powered Analytics",
    timeline5Desc: "Introduced machine learning-powered fraud detection and business intelligence.",
    
    // Team
    teamTitle: "Leadership Team",
    teamSubtitle: "Experienced professionals from global financial institutions and technology leaders.",
    team1Name: "Michael O'Brien",
    team1Role: "Chief Executive Officer",
    team1Bio: "Former VP at Deutsche Bank. 20+ years in fintech.",
    team2Name: "Sarah Chen",
    team2Role: "Chief Technology Officer",
    team2Bio: "Ex-Google engineer. Built systems for millions of users.",
    team3Name: "Ahmed Hassan",
    team3Role: "Chief Operations Officer",
    team3Bio: "Former COO at Emirates Exchange. Regional expert.",
    team4Name: "Elena Petrov",
    team4Role: "Chief Security Officer",
    team4Bio: "Cybersecurity veteran. Former KPMG consultant.",
    
    // Inside FinCore Gallery
    galleryTitle: "Inside FinCore",
    gallerySubtitle: "A glimpse into our world-class facilities and dedicated team",
    galleryOffice: "Modern Headquarters",
    galleryTeam: "Our Engineering Team",
    galleryWorkspace: "Collaborative Spaces",
    galleryDataCenter: "Secure Data Centers",
    
    // Offices
    officesTitle: "Global Presence",
    dublinOffice: "Dublin, Ireland",
    dublinDesc: "European Headquarters & Engineering",
    londonOffice: "London, UK",
    londonDesc: "UK & Financial Services",
    dubaiOffice: "Dubai, UAE",
    dubaiDesc: "Middle East & Africa",
    
    // Parent Company
    parentTitle: "A Product of Next Revolution",
    parentDesc: "FinCore is developed and maintained by Next Revolution for Software Development, an Irish-European technology company specializing in enterprise software, fintech solutions, and digital infrastructure.",
    learnMore: "Learn More About Next Revolution",
    
    // CTA
    ctaTitle: "Join Our Journey",
    ctaSubtitle: "Partner with FinCore to transform your financial operations.",
    ctaButton: "Get in Touch",
  },
  ar: {
    heroTitle: "تحويل",
    heroHighlight: "الخدمات المالية",
    heroSubtitle: "فين كور هو منتج من Next Revolution لتطوير البرمجيات، شركة تقنية أيرلندية-أوروبية تبني مستقبل البنية التحتية المالية.",
    
    missionTitle: "مهمتنا",
    missionText: "إتاحة الوصول إلى تقنية بنكية بمعايير المؤسسات، مما يمكّن المؤسسات المالية من جميع الأحجام من تقديم تجارب رقمية استثنائية لعملائها.",
    
    visionTitle: "رؤيتنا",
    visionText: "عالم تمتلك فيه كل مؤسسة مالية، من البنوك المجتمعية إلى المؤسسات العالمية، الوصول إلى بنية تحتية تقنية حديثة وآمنة وقابلة للتوسع.",
    
    statsTitle: "فين كور بالأرقام",
    stat1Value: "+45",
    stat1Label: "دولة نخدمها",
    stat2Value: "+$50B",
    stat2Label: "معاملات تمت معالجتها",
    stat3Value: "+150",
    stat3Label: "مؤسسة مالية",
    stat4Value: "99.99%",
    stat4Label: "وقت تشغيل المنصة",
    
    valuesTitle: "قيمنا الأساسية",
    value1Title: "الأمان أولاً",
    value1Desc: "كل قرار نتخذه يعطي الأولوية لأمان وخصوصية عملائنا وعملائهم.",
    value2Title: "الابتكار",
    value2Desc: "نواصل دفع حدود ما هو ممكن في التقنية المالية.",
    value3Title: "الموثوقية",
    value3Desc: "منصتنا مبنية للعمل على مدار الساعة مع ضمانات وقت تشغيل رائدة في الصناعة.",
    value4Title: "الشراكة",
    value4Desc: "ننجح عندما ينجح عملاؤنا. نحن شركاء، وليس مجرد موردين.",
    
    timelineTitle: "رحلتنا",
    timeline1Year: "2018",
    timeline1Title: "تأسست في دبلن",
    timeline1Desc: "تأسست Next Revolution كشركة تقنية أيرلندية تركز على برمجيات المؤسسات.",
    timeline2Year: "2019",
    timeline2Title: "إطلاق منصة فين كور",
    timeline2Desc: "تم نشر أول إصدار من فين كور لشركات الصرافة في الشرق الأوسط.",
    timeline3Year: "2020",
    timeline3Title: "التوسع الأوروبي",
    timeline3Desc: "توسيع العمليات عبر الاتحاد الأوروبي مع وحدات امتثال جديدة لـ GDPR و PSD2.",
    timeline4Year: "2022",
    timeline4Title: "شبكة الحوالات العالمية",
    timeline4Desc: "إطلاق إمكانيات الحوالات العالمية مع تكامل SWIFT والبنوك المراسلة.",
    timeline5Year: "2024",
    timeline5Title: "تحليلات بالذكاء الاصطناعي",
    timeline5Desc: "تقديم كشف الاحتيال وذكاء الأعمال المدعوم بالتعلم الآلي.",
    
    teamTitle: "فريق القيادة",
    teamSubtitle: "محترفون ذوو خبرة من المؤسسات المالية العالمية وشركات التقنية الرائدة.",
    team1Name: "مايكل أوبراين",
    team1Role: "الرئيس التنفيذي",
    team1Bio: "نائب رئيس سابق في دويتشه بنك. +20 سنة في التقنية المالية.",
    team2Name: "سارة تشن",
    team2Role: "رئيسة التقنية",
    team2Bio: "مهندسة سابقة في جوجل. بنت أنظمة لملايين المستخدمين.",
    team3Name: "أحمد حسن",
    team3Role: "رئيس العمليات",
    team3Bio: "مدير عمليات سابق في الإمارات للصرافة. خبير إقليمي.",
    team4Name: "إيلينا بيتروف",
    team4Role: "رئيسة الأمان",
    team4Bio: "خبيرة أمن سيبراني. مستشارة سابقة في KPMG.",
    
    // Inside FinCore Gallery
    galleryTitle: "من داخل فين كور",
    gallerySubtitle: "لمحة عن مرافقنا عالمية المستوى وفريقنا المتفاني",
    galleryOffice: "المقر الرئيسي الحديث",
    galleryTeam: "فريق الهندسة لدينا",
    galleryWorkspace: "مساحات تعاونية",
    galleryDataCenter: "مراكز بيانات آمنة",
    
    officesTitle: "حضور عالمي",
    dublinOffice: "دبلن، أيرلندا",
    dublinDesc: "المقر الأوروبي والهندسة",
    londonOffice: "لندن، المملكة المتحدة",
    londonDesc: "المملكة المتحدة والخدمات المالية",
    dubaiOffice: "دبي، الإمارات",
    dubaiDesc: "الشرق الأوسط وأفريقيا",
    
    parentTitle: "منتج من Next Revolution",
    parentDesc: "يتم تطوير وصيانة فين كور بواسطة Next Revolution لتطوير البرمجيات، شركة تقنية أيرلندية-أوروبية متخصصة في برمجيات المؤسسات وحلول التقنية المالية والبنية التحتية الرقمية.",
    learnMore: "اعرف المزيد عن Next Revolution",
    
    ctaTitle: "انضم إلى رحلتنا",
    ctaSubtitle: "كن شريكاً مع فين كور لتحويل عملياتك المالية.",
    ctaButton: "تواصل معنا",
  },
};

const seoMeta = {
  en: {
    title: "About Us | FinCore - Core Banking Platform",
    description: "Learn about FinCore's mission, values, and the team building the future of banking technology.",
  },
  ar: {
    title: "من نحن | فين كور - منصة بنكية أساسية",
    description: "تعرف على مهمة وقيم وفريق فين كور الذي يبني مستقبل التقنية البنكية.",
  },
};

export default function FCAboutPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  const stats = [
    { value: t.stat1Value, label: t.stat1Label, icon: Globe },
    { value: t.stat2Value, label: t.stat2Label, icon: TrendingUp },
    { value: t.stat3Value, label: t.stat3Label, icon: Building2 },
    { value: t.stat4Value, label: t.stat4Label, icon: Shield },
  ];

  const values = [
    { icon: Shield, title: t.value1Title, desc: t.value1Desc },
    { icon: Lightbulb, title: t.value2Title, desc: t.value2Desc },
    { icon: Zap, title: t.value3Title, desc: t.value3Desc },
    { icon: Heart, title: t.value4Title, desc: t.value4Desc },
  ];

  const timeline = [
    { year: t.timeline1Year, title: t.timeline1Title, desc: t.timeline1Desc },
    { year: t.timeline2Year, title: t.timeline2Title, desc: t.timeline2Desc },
    { year: t.timeline3Year, title: t.timeline3Title, desc: t.timeline3Desc },
    { year: t.timeline4Year, title: t.timeline4Title, desc: t.timeline4Desc },
    { year: t.timeline5Year, title: t.timeline5Title, desc: t.timeline5Desc },
  ];

  const offices = [
    { name: t.dublinOffice, desc: t.dublinDesc, flag: "🇮🇪", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
    { name: t.londonOffice, desc: t.londonDesc, flag: "🇬🇧", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80" },
    { name: t.dubaiOffice, desc: t.dubaiDesc, flag: "🇦🇪", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
      <FCHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[40vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-slate-950 dark:via-[#0d1f3c] dark:to-slate-950">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full blur-3xl bg-indigo-500/5 dark:bg-indigo-500/10" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl bg-teal-500/5 dark:bg-teal-500/10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-900 dark:text-white">{t.heroTitle}</span>
            <br />
            <span className="text-[#0D9488]">{t.heroHighlight}</span>
          </motion.h1>
          <motion.p 
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t.missionTitle}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.missionText}
              </p>
            </div>
            <div className="bg-[#0A1628] rounded-3xl p-8 lg:p-12">
              <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/20 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t.visionTitle}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.statsTitle}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-[#0D9488] mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-[#0D9488]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside FinCore Gallery */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.galleryTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.gallerySubtitle}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Office - Large */}
            <motion.div 
              className="lg:col-span-2 relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" 
                alt="FinCore Modern Office"
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <span className="px-3 py-1 bg-[#0D9488] text-white text-xs font-semibold rounded-full">
                  Dublin, Ireland
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{t.galleryOffice}</h3>
              </div>
            </motion.div>

            {/* Engineering Team */}
            <motion.div 
              className="relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="FinCore Team"
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <h3 className="text-lg font-bold text-white">{t.galleryTeam}</h3>
              </div>
            </motion.div>

            {/* Collaborative Workspace */}
            <motion.div 
              className="relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Collaborative Workspace"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <h3 className="text-lg font-bold text-white">{t.galleryWorkspace}</h3>
              </div>
            </motion.div>

            {/* Team Meeting */}
            <motion.div 
              className="relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80" 
                alt="Team Meeting"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <span className="px-2 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full">
                  150+ Engineers
                </span>
              </div>
            </motion.div>

            {/* Data Center */}
            <motion.div 
              className="relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                alt="Secure Data Center"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <h3 className="text-lg font-bold text-white">{t.galleryDataCenter}</h3>
                <span className="text-sm text-slate-300">Germany & Finland</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-16">
            {t.timelineTitle}
          </h2>
          <div className="relative">
            <div className="absolute start-[50%] md:start-0 md:ms-6 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-[#0D9488] flex items-center justify-center text-white font-bold text-sm z-10">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.teamTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.teamSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: t.team1Name, role: t.team1Role, bio: t.team1Bio, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: t.team2Name, role: t.team2Role, bio: t.team2Bio, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
              { name: t.team3Name, role: t.team3Role, bio: t.team3Bio, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
              { name: t.team4Name, role: t.team4Role, bio: t.team4Bio, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative mb-6 mx-auto w-40 h-40 rounded-2xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D9488]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[#0D9488] mb-2">{member.role}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.officesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 end-4 text-3xl">{office.flag}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {office.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{office.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0D9488]" />
            <span className="text-sm font-medium text-[#0D9488]">Next Revolution</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {t.parentTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {t.parentDesc}
          </p>
          <Link to="/next-revolution">
            <Button variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl">
              {t.learnMore}
              <ArrowIcon className="w-4 h-4 ms-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            {t.ctaSubtitle}
          </p>
          <Link to="/fincore/contact">
            <Button className="bg-[#0A1628] dark:bg-[#0D9488] text-white dark:text-[#0A1628] hover:bg-[#0A1628]/90 dark:hover:bg-[#0D9488]/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg">
              {t.ctaButton}
              <ArrowIcon className="w-5 h-5 ms-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <FCFooter />
      <ScrollToTop />
    </div>
  );
}
