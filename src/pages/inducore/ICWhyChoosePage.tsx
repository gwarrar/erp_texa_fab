import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Factory, Shield, Globe, Zap, Users, Award,
  ArrowRight, CheckCircle2, X, Check, Crown,
  Building2, TrendingUp, Clock, Lock, Cpu,
  BadgeCheck, Rocket, Target, Star
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    title: "Why Choose InduCore?",
    subtitle: "The manufacturing ERP that European industry leaders trust",
    
    // Stats
    stat1: "500+",
    stat1Label: "Manufacturing Facilities",
    stat2: "2M+",
    stat2Label: "Units Produced Monthly",
    stat3: "45+",
    stat3Label: "Countries",
    stat4: "99.99%",
    stat4Label: "Uptime",
    
    // Reasons
    reasonsTitle: "6 Reasons to Choose InduCore",
    
    reason1Title: "Manufacturing-First Design",
    reason1Desc: "Built specifically for factories and workshops, not adapted from generic ERP. Every feature is designed with manufacturing in mind.",
    
    reason2Title: "Complete Integration",
    reason2Desc: "All modules work together seamlessly - production, inventory, warehouse, costing, HR, and analytics in one unified platform.",
    
    reason3Title: "European Quality Standards",
    reason3Desc: "Developed in Ireland with European precision. ISO 9001 compliant with GDPR data protection built-in.",
    
    reason4Title: "Scalable Architecture",
    reason4Desc: "From small workshops to large industrial complexes. Grows with your business without system changes.",
    
    reason5Title: "24/7 Expert Support",
    reason5Desc: "Manufacturing specialists available around the clock. We understand your industry and speak your language.",
    
    reason6Title: "Proven ROI",
    reason6Desc: "Average 40% productivity increase and 35% waste reduction. See returns within the first quarter.",
    
    // Comparison
    comparisonTitle: "InduCore vs Generic ERP",
    comparisonSubtitle: "See why purpose-built beats one-size-fits-all",
    
    feature: "Feature",
    inducore: "InduCore",
    genericErp: "Generic ERP",
    
    comp1: "Production Stage Tracking",
    comp2: "RFID Integration",
    comp3: "Unit Cost Calculation",
    comp4: "Quality Checkpoints",
    comp5: "Multi-Warehouse Support",
    comp6: "Manufacturing KPIs",
    comp7: "NEXA AI Assistant",
    comp8: "Mobile Factory Apps",
    comp9: "Implementation Time",
    comp10: "Industry Support",
    
    builtin: "Built-in",
    addon: "Add-on/Custom",
    limited: "Limited",
    weeks: "2-4 weeks",
    months: "3-6 months",
    specialized: "Specialized",
    generic: "Generic",
    
    // Testimonials
    testimonialsTitle: "Trusted by Industry Leaders",
    
    testimonial1: "InduCore transformed our factory operations. We reduced production waste by 40% in just 3 months.",
    testimonial1Author: "Hans Mueller",
    testimonial1Role: "Production Director, Mueller Manufacturing GmbH",
    
    testimonial2: "The RFID integration and real-time tracking gave us complete visibility we never had before.",
    testimonial2Author: "Maria Rossi",
    testimonial2Role: "Operations Manager, Rossi Industrial S.p.A",
    
    testimonial3: "Finally, an ERP that understands manufacturing. The NEXA AI agent is like having an expert advisor 24/7.",
    testimonial3Author: "Ahmed Al-Rahman",
    testimonial3Role: "CEO, Gulf Industrial Solutions",
    
    // Certifications
    certificationsTitle: "Certifications & Compliance",
    iso9001: "ISO 9001",
    iso9001Desc: "Quality Management",
    iso27001: "ISO 27001",
    iso27001Desc: "Information Security",
    gdpr: "GDPR",
    gdprDesc: "Data Protection",
    soc2: "SOC 2",
    soc2Desc: "Security Controls",
    
    // Implementation
    implementationTitle: "Fast Implementation",
    implementationSubtitle: "Go live in 2-4 weeks, not months",
    
    week1: "Week 1",
    week1Title: "Setup & Configuration",
    week1Desc: "System setup, data migration, and initial configuration",
    
    week2: "Week 2",
    week2Title: "Training",
    week2Desc: "Comprehensive training for all user roles",
    
    week3: "Week 3",
    week3Title: "Testing",
    week3Desc: "Parallel testing with your existing processes",
    
    week4: "Week 4",
    week4Title: "Go Live",
    week4Desc: "Full production launch with dedicated support",
    
    cta: "Start Your Free Trial",
    ctaSubtitle: "See why 500+ factories trust InduCore",
  },
  ar: {
    title: "لماذا تختار InduCore؟",
    subtitle: "نظام ERP التصنيعي الذي يثق به قادة الصناعة الأوروبية",
    
    stat1: "+500",
    stat1Label: "منشأة تصنيع",
    stat2: "+2 مليون",
    stat2Label: "وحدة منتجة شهرياً",
    stat3: "+45",
    stat3Label: "دولة",
    stat4: "99.99%",
    stat4Label: "وقت التشغيل",
    
    reasonsTitle: "6 أسباب لاختيار InduCore",
    
    reason1Title: "تصميم للتصنيع أولاً",
    reason1Desc: "مبني خصيصاً للمصانع والورشات، وليس مُكيفاً من ERP عام. كل ميزة مصممة مع التصنيع في الاعتبار.",
    
    reason2Title: "تكامل كامل",
    reason2Desc: "جميع الوحدات تعمل معاً بسلاسة - الإنتاج، المخزون، المستودع، التكلفة، الموارد البشرية، والتحليلات في منصة موحدة واحدة.",
    
    reason3Title: "معايير الجودة الأوروبية",
    reason3Desc: "مطور في أيرلندا بدقة أوروبية. متوافق مع ISO 9001 مع حماية بيانات GDPR مدمجة.",
    
    reason4Title: "بنية قابلة للتوسع",
    reason4Desc: "من الورشات الصغيرة إلى المجمعات الصناعية الكبيرة. ينمو مع عملك بدون تغييرات في النظام.",
    
    reason5Title: "دعم خبراء 24/7",
    reason5Desc: "متخصصو التصنيع متاحون على مدار الساعة. نحن نفهم صناعتك ونتحدث لغتك.",
    
    reason6Title: "عائد استثمار مثبت",
    reason6Desc: "متوسط زيادة الإنتاجية 40% وتقليل الهدر 35%. شاهد العوائد خلال الربع الأول.",
    
    comparisonTitle: "InduCore مقابل ERP العام",
    comparisonSubtitle: "شاهد لماذا المصمم خصيصاً يتفوق على الحل العام",
    
    feature: "الميزة",
    inducore: "InduCore",
    genericErp: "ERP العام",
    
    comp1: "تتبع مراحل الإنتاج",
    comp2: "تكامل RFID",
    comp3: "حساب تكلفة الوحدة",
    comp4: "نقاط فحص الجودة",
    comp5: "دعم المستودعات المتعددة",
    comp6: "مؤشرات أداء التصنيع",
    comp7: "مساعد NEXA AI",
    comp8: "تطبيقات المصنع المحمولة",
    comp9: "وقت التطبيق",
    comp10: "دعم الصناعة",
    
    builtin: "مدمج",
    addon: "إضافة/مخصص",
    limited: "محدود",
    weeks: "2-4 أسابيع",
    months: "3-6 أشهر",
    specialized: "متخصص",
    generic: "عام",
    
    testimonialsTitle: "موثوق من قادة الصناعة",
    
    testimonial1: "حوّل InduCore عمليات مصنعنا. قللنا هدر الإنتاج بنسبة 40% في 3 أشهر فقط.",
    testimonial1Author: "هانس مولر",
    testimonial1Role: "مدير الإنتاج، مولر للتصنيع",
    
    testimonial2: "أعطانا تكامل RFID والتتبع في الوقت الفعلي رؤية كاملة لم نكن نملكها من قبل.",
    testimonial2Author: "ماريا روسي",
    testimonial2Role: "مدير العمليات، روسي الصناعية",
    
    testimonial3: "أخيراً، ERP يفهم التصنيع. وكيل NEXA AI مثل وجود مستشار خبير 24/7.",
    testimonial3Author: "أحمد الرحمن",
    testimonial3Role: "الرئيس التنفيذي، حلول الخليج الصناعية",
    
    certificationsTitle: "الشهادات والامتثال",
    iso9001: "ISO 9001",
    iso9001Desc: "إدارة الجودة",
    iso27001: "ISO 27001",
    iso27001Desc: "أمن المعلومات",
    gdpr: "GDPR",
    gdprDesc: "حماية البيانات",
    soc2: "SOC 2",
    soc2Desc: "ضوابط الأمان",
    
    implementationTitle: "تطبيق سريع",
    implementationSubtitle: "ابدأ العمل في 2-4 أسابيع، وليس أشهر",
    
    week1: "الأسبوع 1",
    week1Title: "الإعداد والتكوين",
    week1Desc: "إعداد النظام، نقل البيانات، والتكوين الأولي",
    
    week2: "الأسبوع 2",
    week2Title: "التدريب",
    week2Desc: "تدريب شامل لجميع أدوار المستخدمين",
    
    week3: "الأسبوع 3",
    week3Title: "الاختبار",
    week3Desc: "اختبار موازي مع عملياتك الحالية",
    
    week4: "الأسبوع 4",
    week4Title: "الإطلاق",
    week4Desc: "إطلاق الإنتاج الكامل مع دعم مخصص",
    
    cta: "ابدأ تجربتك المجانية",
    ctaSubtitle: "شاهد لماذا تثق +500 مصنع في InduCore",
  },
  tr: {
    title: "Neden InduCore?",
    subtitle: "Avrupa endüstri liderlerinin güvendiği üretim ERP'si",
    
    stat1: "500+",
    stat1Label: "Üretim Tesisi",
    stat2: "2M+",
    stat2Label: "Aylık Üretilen Birim",
    stat3: "45+",
    stat3Label: "Ülke",
    stat4: "99.99%",
    stat4Label: "Çalışma Süresi",
    
    reasonsTitle: "InduCore'u Seçmek İçin 6 Neden",
    
    reason1Title: "Üretim Odaklı Tasarım",
    reason1Desc: "Genel ERP'den uyarlanmış değil, özellikle fabrikalar ve atölyeler için inşa edildi. Her özellik üretim düşünülerek tasarlandı.",
    
    reason2Title: "Tam Entegrasyon",
    reason2Desc: "Tüm modüller sorunsuz çalışır - üretim, envanter, depo, maliyetlendirme, İK ve analitik tek birleşik platformda.",
    
    reason3Title: "Avrupa Kalite Standartları",
    reason3Desc: "Avrupa hassasiyetiyle İrlanda'da geliştirildi. Yerleşik GDPR veri koruması ile ISO 9001 uyumlu.",
    
    reason4Title: "Ölçeklenebilir Mimari",
    reason4Desc: "Küçük atölyelerden büyük endüstriyel komplekslere. Sistem değişikliği olmadan işinizle birlikte büyür.",
    
    reason5Title: "7/24 Uzman Desteği",
    reason5Desc: "Üretim uzmanları günün her saati hazır. Sektörünüzü anlıyoruz ve dilinizi konuşuyoruz.",
    
    reason6Title: "Kanıtlanmış ROI",
    reason6Desc: "Ortalama %40 verimlilik artışı ve %35 israf azaltma. İlk çeyrekte getiri görün.",
    
    comparisonTitle: "InduCore vs Genel ERP",
    comparisonSubtitle: "Amaca yönelik tasarımın neden herkese uyan tek çözümü geçtiğini görün",
    
    feature: "Özellik",
    inducore: "InduCore",
    genericErp: "Genel ERP",
    
    comp1: "Üretim Aşaması Takibi",
    comp2: "RFID Entegrasyonu",
    comp3: "Birim Maliyet Hesaplama",
    comp4: "Kalite Kontrol Noktaları",
    comp5: "Çoklu Depo Desteği",
    comp6: "Üretim KPI'ları",
    comp7: "NEXA AI Asistanı",
    comp8: "Mobil Fabrika Uygulamaları",
    comp9: "Uygulama Süresi",
    comp10: "Sektör Desteği",
    
    builtin: "Yerleşik",
    addon: "Eklenti/Özel",
    limited: "Sınırlı",
    weeks: "2-4 hafta",
    months: "3-6 ay",
    specialized: "Uzmanlaşmış",
    generic: "Genel",
    
    testimonialsTitle: "Sektör Liderleri Tarafından Güvenilir",
    
    testimonial1: "InduCore fabrika operasyonlarımızı dönüştürdü. Sadece 3 ayda üretim israfını %40 azalttık.",
    testimonial1Author: "Hans Mueller",
    testimonial1Role: "Üretim Direktörü, Mueller Manufacturing GmbH",
    
    testimonial2: "RFID entegrasyonu ve gerçek zamanlı takip, daha önce hiç sahip olmadığımız tam görünürlük sağladı.",
    testimonial2Author: "Maria Rossi",
    testimonial2Role: "Operasyon Müdürü, Rossi Industrial S.p.A",
    
    testimonial3: "Sonunda üretime anlayan bir ERP. NEXA AI ajanı 7/24 bir uzman danışmana sahip olmak gibi.",
    testimonial3Author: "Ahmed Al-Rahman",
    testimonial3Role: "CEO, Gulf Industrial Solutions",
    
    certificationsTitle: "Sertifikalar ve Uyumluluk",
    iso9001: "ISO 9001",
    iso9001Desc: "Kalite Yönetimi",
    iso27001: "ISO 27001",
    iso27001Desc: "Bilgi Güvenliği",
    gdpr: "GDPR",
    gdprDesc: "Veri Koruma",
    soc2: "SOC 2",
    soc2Desc: "Güvenlik Kontrolleri",
    
    implementationTitle: "Hızlı Uygulama",
    implementationSubtitle: "Aylar değil, 2-4 haftada canlıya geçin",
    
    week1: "Hafta 1",
    week1Title: "Kurulum ve Yapılandırma",
    week1Desc: "Sistem kurulumu, veri geçişi ve ilk yapılandırma",
    
    week2: "Hafta 2",
    week2Title: "Eğitim",
    week2Desc: "Tüm kullanıcı rolleri için kapsamlı eğitim",
    
    week3: "Hafta 3",
    week3Title: "Test",
    week3Desc: "Mevcut süreçlerinizle paralel test",
    
    week4: "Hafta 4",
    week4Title: "Canlıya Geçiş",
    week4Desc: "Özel destekle tam üretim lansmanı",
    
    cta: "Ücretsiz Denemenizi Başlatın",
    ctaSubtitle: "500+ fabrikanın neden InduCore'a güvendiğini görün",
  },
};

export default function ICWhyChoosePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  const comparisonData = [
    { feature: t.comp1, inducore: true, generic: "addon" },
    { feature: t.comp2, inducore: true, generic: false },
    { feature: t.comp3, inducore: true, generic: "limited" },
    { feature: t.comp4, inducore: true, generic: false },
    { feature: t.comp5, inducore: true, generic: "addon" },
    { feature: t.comp6, inducore: true, generic: "limited" },
    { feature: t.comp7, inducore: true, generic: false },
    { feature: t.comp8, inducore: true, generic: "limited" },
    { feature: t.comp9, inducore: t.weeks, generic: t.months },
    { feature: t.comp10, inducore: t.specialized, generic: t.generic },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-red-900 via-red-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>Trusted by Industry Leaders</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: t.stat1, label: t.stat1Label },
              { value: t.stat2, label: t.stat2Label },
              { value: t.stat3, label: t.stat3Label },
              { value: t.stat4, label: t.stat4Label },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-red-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reasons Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.reasonsTitle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.reason1Title, desc: t.reason1Desc, icon: Factory },
              { title: t.reason2Title, desc: t.reason2Desc, icon: Zap },
              { title: t.reason3Title, desc: t.reason3Desc, icon: Award },
              { title: t.reason4Title, desc: t.reason4Desc, icon: TrendingUp },
              { title: t.reason5Title, desc: t.reason5Desc, icon: Users },
              { title: t.reason6Title, desc: t.reason6Desc, icon: Target },
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full p-6 border-slate-200 dark:border-slate-700">
                  <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                    <reason.icon className="w-7 h-7 text-red-800 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {reason.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.comparisonTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t.comparisonSubtitle}
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-600">
                  <th className="text-start p-4 font-semibold text-slate-900 dark:text-white">{t.feature}</th>
                  <th className="text-center p-4 font-semibold text-red-800 dark:text-red-400">{t.inducore}</th>
                  <th className="text-center p-4 font-semibold text-slate-500 dark:text-slate-400">{t.genericErp}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 dark:border-slate-600">
                    <td className="p-4 text-slate-700 dark:text-slate-200">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.inducore === 'boolean' ? (
                        row.inducore ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-green-600 dark:text-green-400 font-medium">{row.inducore}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.generic === 'boolean' ? (
                        row.generic ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : row.generic === 'addon' ? (
                        <span className="text-orange-500 text-sm">{t.addon}</span>
                      ) : row.generic === 'limited' ? (
                        <span className="text-orange-500 text-sm">{t.limited}</span>
                      ) : (
                        <span className="text-slate-500 dark:text-slate-400">{row.generic}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.testimonialsTitle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: t.testimonial1, author: t.testimonial1Author, role: t.testimonial1Role },
              { quote: t.testimonial2, author: t.testimonial2Author, role: t.testimonial2Role },
              { quote: t.testimonial3, author: t.testimonial3Author, role: t.testimonial3Role },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            {t.certificationsTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: t.iso9001, desc: t.iso9001Desc },
              { name: t.iso27001, desc: t.iso27001Desc },
              { name: t.gdpr, desc: t.gdprDesc },
              { name: t.soc2, desc: t.soc2Desc },
            ].map((cert, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-10 h-10 text-red-800 dark:text-red-400" />
                </div>
                <p className="font-bold text-slate-900 dark:text-white">{cert.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.implementationTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t.implementationSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { week: t.week1, title: t.week1Title, desc: t.week1Desc },
              { week: t.week2, title: t.week2Title, desc: t.week2Desc },
              { week: t.week3, title: t.week3Title, desc: t.week3Desc },
              { week: t.week4, title: t.week4Title, desc: t.week4Desc },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-800 text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.week}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.cta}
          </h2>
          <p className="text-red-100 mb-8">{t.ctaSubtitle}</p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
              {t.cta}
              <Rocket className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
