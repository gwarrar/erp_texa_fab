import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Check, X, ArrowRight, Sparkles, Crown, Rocket
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the perfect plan for your manufacturing facility",
    perMonth: "/month",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    startTrial: "Start Free Trial",
    
    starterPlan: "Starter",
    starterDesc: "Perfect for small workshops and emerging factories",
    starterPrice: "€299",
    
    professionalPlan: "Professional",
    professionalDesc: "Ideal for growing manufacturing facilities",
    professionalPrice: "€699",
    
    enterprisePlan: "Enterprise",
    enterpriseDesc: "Complete solution for large industrial operations",
    enterprisePrice: "Custom",
    
    // Features
    users: "Users",
    products: "Products",
    production: "Production Management",
    inventory: "Raw Materials Tracking",
    warehouse: "Warehouse Management",
    orders: "Orders & Reservations",
    costing: "Costing & Pricing",
    reports: "Reports & Analytics",
    support: "Support",
    rfid: "RFID Integration",
    api: "API Access",
    multiLocation: "Multi-location",
    customIntegrations: "Custom Integrations",
    dedicatedManager: "Dedicated Manager",
    nexa: "NEXA AI Agent",
    mobileApps: "Mobile Apps",
    
    upTo5: "Up to 5",
    upTo100: "Up to 100",
    upTo20: "Up to 20",
    upTo500: "Up to 500",
    unlimited: "Unlimited",
    basic: "Basic",
    advanced: "Advanced",
    full: "Full Suite",
    email: "Email",
    priority: "Priority 24/7",
    dedicated: "Dedicated",
    
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Can I change plans later?",
    faq1A: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    faq2Q: "Is there a free trial?",
    faq2A: "Yes, all plans come with a 14-day free trial. No credit card required to start.",
    faq3Q: "What payment methods do you accept?",
    faq3A: "We accept all major credit cards, bank transfers, and can arrange invoicing for enterprise customers.",
    faq4Q: "Can I get a discount for annual billing?",
    faq4A: "Yes, we offer 20% off when you pay annually instead of monthly.",
    
    guarantee: "30-Day Money-Back Guarantee",
    guaranteeDesc: "Try InduCore risk-free. If you're not satisfied within the first 30 days, we'll refund your payment in full.",
  },
  ar: {
    title: "تسعير بسيط وشفاف",
    subtitle: "اختر الخطة المثالية لمنشأتك التصنيعية",
    perMonth: "/شهر",
    mostPopular: "الأكثر شعبية",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل مع المبيعات",
    startTrial: "ابدأ تجربة مجانية",
    
    starterPlan: "البداية",
    starterDesc: "مثالي للورشات الصغيرة والمصانع الناشئة",
    starterPrice: "€299",
    
    professionalPlan: "المحترف",
    professionalDesc: "مثالي للمنشآت التصنيعية النامية",
    professionalPrice: "€699",
    
    enterprisePlan: "المؤسسات",
    enterpriseDesc: "حل كامل للعمليات الصناعية الكبيرة",
    enterprisePrice: "مخصص",
    
    users: "المستخدمين",
    products: "المنتجات",
    production: "إدارة الإنتاج",
    inventory: "تتبع المواد الأولية",
    warehouse: "إدارة المستودعات",
    orders: "الطلبات والحجوزات",
    costing: "التكلفة والتسعير",
    reports: "التقارير والتحليلات",
    support: "الدعم",
    rfid: "تكامل RFID",
    api: "وصول API",
    multiLocation: "مواقع متعددة",
    customIntegrations: "تكاملات مخصصة",
    dedicatedManager: "مدير مخصص",
    nexa: "وكيل NEXA AI",
    mobileApps: "تطبيقات الهاتف",
    
    upTo5: "حتى 5",
    upTo100: "حتى 100",
    upTo20: "حتى 20",
    upTo500: "حتى 500",
    unlimited: "غير محدود",
    basic: "أساسي",
    advanced: "متقدم",
    full: "جناح كامل",
    email: "بريد إلكتروني",
    priority: "أولوية 24/7",
    dedicated: "مخصص",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "هل يمكنني تغيير الخطة لاحقاً؟",
    faq1A: "نعم، يمكنك الترقية أو التخفيض في أي وقت. التغييرات تسري في بداية دورة الفوترة التالية.",
    faq2Q: "هل هناك تجربة مجانية؟",
    faq2A: "نعم، جميع الخطط تأتي مع تجربة مجانية لمدة 14 يوماً. لا تحتاج بطاقة ائتمان للبدء.",
    faq3Q: "ما طرق الدفع المقبولة؟",
    faq3A: "نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية ويمكننا ترتيب الفواتير لعملاء المؤسسات.",
    faq4Q: "هل يمكنني الحصول على خصم للفوترة السنوية؟",
    faq4A: "نعم، نقدم خصم 20% عند الدفع سنوياً بدلاً من شهرياً.",
    
    guarantee: "ضمان استرداد الأموال خلال 30 يوماً",
    guaranteeDesc: "جرب InduCore بدون مخاطر. إذا لم تكن راضياً خلال أول 30 يوماً، سنعيد لك كامل المبلغ.",
  },
  tr: {
    title: "Basit, Şeffaf Fiyatlandırma",
    subtitle: "Üretim tesisiniz için mükemmel planı seçin",
    perMonth: "/ay",
    mostPopular: "En Popüler",
    getStarted: "Başla",
    contactSales: "Satışla İletişim",
    startTrial: "Ücretsiz Deneme Başlat",
    
    starterPlan: "Başlangıç",
    starterDesc: "Küçük atölyeler ve yeni fabrikalar için mükemmel",
    starterPrice: "€299",
    
    professionalPlan: "Profesyonel",
    professionalDesc: "Büyüyen üretim tesisleri için ideal",
    professionalPrice: "€699",
    
    enterprisePlan: "Kurumsal",
    enterpriseDesc: "Büyük endüstriyel operasyonlar için komple çözüm",
    enterprisePrice: "Özel",
    
    users: "Kullanıcılar",
    products: "Ürünler",
    production: "Üretim Yönetimi",
    inventory: "Hammadde Takibi",
    warehouse: "Depo Yönetimi",
    orders: "Siparişler ve Rezervasyonlar",
    costing: "Maliyetlendirme ve Fiyatlandırma",
    reports: "Raporlar ve Analitik",
    support: "Destek",
    rfid: "RFID Entegrasyonu",
    api: "API Erişimi",
    multiLocation: "Çok Lokasyon",
    customIntegrations: "Özel Entegrasyonlar",
    dedicatedManager: "Özel Yönetici",
    nexa: "NEXA AI Ajanı",
    mobileApps: "Mobil Uygulamalar",
    
    upTo5: "5'e kadar",
    upTo100: "100'e kadar",
    upTo20: "20'ye kadar",
    upTo500: "500'e kadar",
    unlimited: "Sınırsız",
    basic: "Temel",
    advanced: "Gelişmiş",
    full: "Tam Paket",
    email: "E-posta",
    priority: "7/24 Öncelikli",
    dedicated: "Özel",
    
    faqTitle: "Sık Sorulan Sorular",
    faq1Q: "Daha sonra plan değiştirebilir miyim?",
    faq1A: "Evet, planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Değişiklikler bir sonraki faturalama döneminin başında geçerli olur.",
    faq2Q: "Ücretsiz deneme var mı?",
    faq2A: "Evet, tüm planlar 14 günlük ücretsiz deneme ile gelir. Başlamak için kredi kartı gerekmez.",
    faq3Q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    faq3A: "Tüm büyük kredi kartlarını, banka havalelerini kabul ediyoruz ve kurumsal müşteriler için faturalama düzenleyebiliyoruz.",
    faq4Q: "Yıllık faturalandırma için indirim alabilir miyim?",
    faq4A: "Evet, aylık yerine yıllık ödeme yaptığınızda %20 indirim sunuyoruz.",
    
    guarantee: "30 Gün Para İade Garantisi",
    guaranteeDesc: "InduCore'u risksiz deneyin. İlk 30 gün içinde memnun kalmazsanız, ödemenizi tamamen iade ederiz.",
  },
};

export default function ICPricingPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  const plans = [
    {
      name: t.starterPlan,
      desc: t.starterDesc,
      price: t.starterPrice,
      popular: false,
      features: {
        users: t.upTo5,
        products: t.upTo100,
        production: t.basic,
        inventory: true,
        warehouse: true,
        orders: true,
        costing: t.basic,
        reports: t.basic,
        support: t.email,
        rfid: false,
        api: false,
        multiLocation: false,
        customIntegrations: false,
        dedicatedManager: false,
        nexa: false,
        mobileApps: true,
      },
    },
    {
      name: t.professionalPlan,
      desc: t.professionalDesc,
      price: t.professionalPrice,
      popular: true,
      features: {
        users: t.upTo20,
        products: t.upTo500,
        production: t.advanced,
        inventory: true,
        warehouse: true,
        orders: true,
        costing: t.advanced,
        reports: t.advanced,
        support: t.priority,
        rfid: true,
        api: true,
        multiLocation: true,
        customIntegrations: false,
        dedicatedManager: false,
        nexa: true,
        mobileApps: true,
      },
    },
    {
      name: t.enterprisePlan,
      desc: t.enterpriseDesc,
      price: t.enterprisePrice,
      popular: false,
      features: {
        users: t.unlimited,
        products: t.unlimited,
        production: t.full,
        inventory: true,
        warehouse: true,
        orders: true,
        costing: t.full,
        reports: t.full,
        support: t.dedicated,
        rfid: true,
        api: true,
        multiLocation: true,
        customIntegrations: true,
        dedicatedManager: true,
        nexa: true,
        mobileApps: true,
      },
    },
  ];

  const featureLabels = [
    { key: "users", label: t.users },
    { key: "products", label: t.products },
    { key: "production", label: t.production },
    { key: "inventory", label: t.inventory },
    { key: "warehouse", label: t.warehouse },
    { key: "orders", label: t.orders },
    { key: "costing", label: t.costing },
    { key: "reports", label: t.reports },
    { key: "support", label: t.support },
    { key: "rfid", label: t.rfid },
    { key: "api", label: t.api },
    { key: "multiLocation", label: t.multiLocation },
    { key: "customIntegrations", label: t.customIntegrations },
    { key: "dedicatedManager", label: t.dedicatedManager },
    { key: "nexa", label: t.nexa },
    { key: "mobileApps", label: t.mobileApps },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-red-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`relative h-full p-8 ${plan.popular ? 'border-2 border-red-800 shadow-xl' : 'border-slate-200 dark:border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-800 text-white text-sm font-medium rounded-full flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      {t.mostPopular}
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {plan.desc}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">
                        {plan.price}
                      </span>
                      {plan.price !== t.enterprisePrice && (
                        <span className="text-slate-500 dark:text-slate-400">{t.perMonth}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {featureLabels.map((feature) => {
                      const value = plan.features[feature.key as keyof typeof plan.features];
                      return (
                        <div key={feature.key} className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-300 text-sm">
                            {feature.label}
                          </span>
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                            )
                          ) : (
                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                              {value}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <Link to="/inducore/contact" className="block">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-red-800 hover:bg-red-900 text-white' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.price === t.enterprisePrice ? t.contactSales : t.getStarted}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Money-back Guarantee */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.guarantee}</h2>
          <p className="text-green-100 max-w-xl mx-auto">{t.guaranteeDesc}</p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.faqTitle}
          </h2>
          
          <div className="space-y-6">
            {[
              { q: t.faq1Q, a: t.faq1A },
              { q: t.faq2Q, a: t.faq2A },
              { q: t.faq3Q, a: t.faq3A },
              { q: t.faq4Q, a: t.faq4A },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.startTrial}
          </h2>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
              {t.getStarted}
              <Rocket className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
