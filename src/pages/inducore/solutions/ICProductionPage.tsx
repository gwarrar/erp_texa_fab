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
  Factory, Cog, Settings, ArrowRight, CheckCircle2,
  BarChart3, Clock, Layers, Gauge, Target, Cpu,
  Bot, LineChart, Zap, Users, Calendar, FileText
} from "lucide-react";

const translations = {
  en: {
    title: "Production Management",
    subtitle: "Complete production planning, scheduling, and execution for manufacturing operations",
    heroStats: [
      { value: "40%", label: "Efficiency Increase" },
      { value: "25%", label: "Waste Reduction" },
      { value: "99%", label: "On-Time Delivery" },
    ],
    overviewTitle: "End-to-End Production Control",
    overviewDesc: "InduCore Production Management gives you complete visibility and control over your entire manufacturing process, from work order creation to final quality inspection.",
    features: [
      {
        icon: Calendar,
        title: "Production Scheduling",
        desc: "AI-powered scheduling with automatic resource allocation and conflict resolution",
      },
      {
        icon: Gauge,
        title: "Real-Time Monitoring",
        desc: "Live dashboards showing machine status, production rates, and OEE metrics",
      },
      {
        icon: Target,
        title: "Work Order Management",
        desc: "Create, track, and manage work orders with full material and labor tracking",
      },
      {
        icon: Layers,
        title: "Bill of Materials",
        desc: "Multi-level BOM management with version control and substitution support",
      },
      {
        icon: Bot,
        title: "AI Assistant",
        desc: "NEXA AI provides predictive maintenance alerts and optimization suggestions",
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        desc: "Comprehensive KPIs including throughput, cycle time, and quality metrics",
      },
    ],
    benefits: [
      "Reduce production downtime by 30%",
      "Improve resource utilization by 45%",
      "Achieve real-time visibility into all production stages",
      "Automate scheduling and reduce manual planning effort",
      "Integrate seamlessly with inventory and quality modules",
    ],
    ctaTitle: "Transform Your Production Operations",
    ctaDesc: "See how InduCore can optimize your manufacturing efficiency",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
  },
  ar: {
    title: "إدارة الإنتاج",
    subtitle: "تخطيط وجدولة وتنفيذ الإنتاج الكامل لعمليات التصنيع",
    heroStats: [
      { value: "40%", label: "زيادة الكفاءة" },
      { value: "25%", label: "تقليل الهدر" },
      { value: "99%", label: "التسليم في الوقت المحدد" },
    ],
    overviewTitle: "التحكم الشامل في الإنتاج",
    overviewDesc: "يمنحك نظام إدارة الإنتاج InduCore رؤية كاملة وتحكمًا في عملية التصنيع بأكملها، من إنشاء أوامر العمل إلى الفحص النهائي للجودة.",
    features: [
      {
        icon: Calendar,
        title: "جدولة الإنتاج",
        desc: "جدولة مدعومة بالذكاء الاصطناعي مع تخصيص الموارد تلقائيًا وحل التعارضات",
      },
      {
        icon: Gauge,
        title: "المراقبة الفورية",
        desc: "لوحات معلومات حية تعرض حالة الآلات ومعدلات الإنتاج ومقاييس OEE",
      },
      {
        icon: Target,
        title: "إدارة أوامر العمل",
        desc: "إنشاء وتتبع وإدارة أوامر العمل مع تتبع كامل للمواد والعمالة",
      },
      {
        icon: Layers,
        title: "قائمة المواد",
        desc: "إدارة قائمة المواد متعددة المستويات مع التحكم في الإصدارات ودعم البدائل",
      },
      {
        icon: Bot,
        title: "المساعد الذكي",
        desc: "يقدم NEXA AI تنبيهات الصيانة التنبؤية واقتراحات التحسين",
      },
      {
        icon: BarChart3,
        title: "تحليلات الأداء",
        desc: "مؤشرات أداء شاملة تشمل الإنتاجية ووقت الدورة ومقاييس الجودة",
      },
    ],
    benefits: [
      "تقليل وقت توقف الإنتاج بنسبة 30%",
      "تحسين استخدام الموارد بنسبة 45%",
      "تحقيق رؤية فورية لجميع مراحل الإنتاج",
      "أتمتة الجدولة وتقليل جهد التخطيط اليدوي",
      "التكامل السلس مع وحدات المخزون والجودة",
    ],
    ctaTitle: "حوّل عمليات الإنتاج لديك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين كفاءة التصنيع لديك",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
  },
  tr: {
    title: "Üretim Yönetimi",
    subtitle: "Üretim operasyonları için kapsamlı planlama, çizelgeleme ve yürütme",
    heroStats: [
      { value: "40%", label: "Verimlilik Artışı" },
      { value: "25%", label: "Atık Azaltma" },
      { value: "99%", label: "Zamanında Teslimat" },
    ],
    overviewTitle: "Uçtan Uca Üretim Kontrolü",
    overviewDesc: "InduCore Üretim Yönetimi, iş emri oluşturmadan son kalite kontrolüne kadar tüm üretim süreciniz üzerinde tam görünürlük ve kontrol sağlar.",
    features: [
      {
        icon: Calendar,
        title: "Üretim Çizelgeleme",
        desc: "Otomatik kaynak tahsisi ve çakışma çözümü ile AI destekli çizelgeleme",
      },
      {
        icon: Gauge,
        title: "Gerçek Zamanlı İzleme",
        desc: "Makine durumu, üretim oranları ve OEE metrikleri gösteren canlı panolar",
      },
      {
        icon: Target,
        title: "İş Emri Yönetimi",
        desc: "Tam malzeme ve işçilik takibi ile iş emirleri oluşturma, takip etme ve yönetme",
      },
      {
        icon: Layers,
        title: "Ürün Ağacı",
        desc: "Sürüm kontrolü ve ikame desteği ile çok seviyeli BOM yönetimi",
      },
      {
        icon: Bot,
        title: "AI Asistan",
        desc: "NEXA AI, kestirimci bakım uyarıları ve optimizasyon önerileri sunar",
      },
      {
        icon: BarChart3,
        title: "Performans Analitiği",
        desc: "Verimlilik, çevrim süresi ve kalite metrikleri dahil kapsamlı KPI'lar",
      },
    ],
    benefits: [
      "Üretim duruş süresini %30 azaltın",
      "Kaynak kullanımını %45 iyileştirin",
      "Tüm üretim aşamalarına gerçek zamanlı görünürlük sağlayın",
      "Çizelgelemeyi otomatikleştirin ve manuel planlama çabasını azaltın",
      "Envanter ve kalite modülleriyle sorunsuz entegrasyon",
    ],
    ctaTitle: "Üretim Operasyonlarınızı Dönüştürün",
    ctaDesc: "InduCore'un üretim verimliliğinizi nasıl optimize edebileceğini görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
  },
  de: {
    title: "Produktionsmanagement",
    subtitle: "Vollständige Produktionsplanung, -steuerung und -ausführung für Fertigungsbetriebe",
    heroStats: [
      { value: "40%", label: "Effizienzsteigerung" },
      { value: "25%", label: "Abfallreduzierung" },
      { value: "99%", label: "Pünktliche Lieferung" },
    ],
    overviewTitle: "End-to-End Produktionskontrolle",
    overviewDesc: "InduCore Produktionsmanagement bietet vollständige Transparenz und Kontrolle über Ihren gesamten Fertigungsprozess, von der Auftragserstellung bis zur Qualitätsprüfung.",
    features: [
      {
        icon: Calendar,
        title: "Produktionsplanung",
        desc: "KI-gestützte Planung mit automatischer Ressourcenzuweisung und Konfliktlösung",
      },
      {
        icon: Gauge,
        title: "Echtzeitüberwachung",
        desc: "Live-Dashboards mit Maschinenstatus, Produktionsraten und OEE-Metriken",
      },
      {
        icon: Target,
        title: "Auftragsverwaltung",
        desc: "Aufträge erstellen, verfolgen und verwalten mit vollständiger Material- und Arbeitsverfolgung",
      },
      {
        icon: Layers,
        title: "Stücklisten",
        desc: "Mehrstufige Stücklistenverwaltung mit Versionskontrolle und Ersatzteilen",
      },
      {
        icon: Bot,
        title: "KI-Assistent",
        desc: "NEXA AI bietet vorausschauende Wartungswarnungen und Optimierungsvorschläge",
      },
      {
        icon: BarChart3,
        title: "Leistungsanalyse",
        desc: "Umfassende KPIs einschließlich Durchsatz, Zykluszeit und Qualitätsmetriken",
      },
    ],
    benefits: [
      "Produktionsausfallzeiten um 30% reduzieren",
      "Ressourcennutzung um 45% verbessern",
      "Echtzeit-Transparenz für alle Produktionsstufen",
      "Planung automatisieren und manuellen Aufwand reduzieren",
      "Nahtlose Integration mit Lager- und Qualitätsmodulen",
    ],
    ctaTitle: "Transformieren Sie Ihre Produktionsabläufe",
    ctaDesc: "Erfahren Sie, wie InduCore Ihre Fertigungseffizienz optimieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
  },
  ru: {
    title: "Управление производством",
    subtitle: "Полное планирование, составление графиков и выполнение производственных операций",
    heroStats: [
      { value: "40%", label: "Рост эффективности" },
      { value: "25%", label: "Сокращение отходов" },
      { value: "99%", label: "Своевременная доставка" },
    ],
    overviewTitle: "Сквозной контроль производства",
    overviewDesc: "Управление производством InduCore обеспечивает полную видимость и контроль над всем производственным процессом, от создания наряд-заказа до окончательной проверки качества.",
    features: [
      {
        icon: Calendar,
        title: "Планирование производства",
        desc: "Планирование на основе ИИ с автоматическим распределением ресурсов и разрешением конфликтов",
      },
      {
        icon: Gauge,
        title: "Мониторинг в реальном времени",
        desc: "Живые панели с состоянием оборудования, производительностью и показателями OEE",
      },
      {
        icon: Target,
        title: "Управление наряд-заказами",
        desc: "Создание, отслеживание и управление наряд-заказами с полным учетом материалов и труда",
      },
      {
        icon: Layers,
        title: "Спецификации материалов",
        desc: "Многоуровневое управление BOM с контролем версий и поддержкой замен",
      },
      {
        icon: Bot,
        title: "ИИ-ассистент",
        desc: "NEXA AI предоставляет предупреждения о профилактическом обслуживании и рекомендации по оптимизации",
      },
      {
        icon: BarChart3,
        title: "Аналитика производительности",
        desc: "Комплексные KPI включая пропускную способность, время цикла и показатели качества",
      },
    ],
    benefits: [
      "Сокращение простоев производства на 30%",
      "Улучшение использования ресурсов на 45%",
      "Видимость всех этапов производства в реальном времени",
      "Автоматизация планирования и сокращение ручного труда",
      "Бесшовная интеграция с модулями склада и качества",
    ],
    ctaTitle: "Трансформируйте свое производство",
    ctaDesc: "Узнайте, как InduCore может оптимизировать эффективность вашего производства",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
  },
  pl: {
    title: "Zarządzanie Produkcją",
    subtitle: "Kompleksowe planowanie, harmonogramowanie i realizacja produkcji",
    heroStats: [
      { value: "40%", label: "Wzrost Wydajności" },
      { value: "25%", label: "Redukcja Odpadów" },
      { value: "99%", label: "Terminowa Dostawa" },
    ],
    overviewTitle: "Kompleksowa Kontrola Produkcji",
    overviewDesc: "InduCore Zarządzanie Produkcją zapewnia pełną widoczność i kontrolę nad całym procesem produkcyjnym, od utworzenia zlecenia pracy do końcowej kontroli jakości.",
    features: [
      {
        icon: Calendar,
        title: "Planowanie Produkcji",
        desc: "Harmonogramowanie wspomagane AI z automatyczną alokacją zasobów i rozwiązywaniem konfliktów",
      },
      {
        icon: Gauge,
        title: "Monitoring w Czasie Rzeczywistym",
        desc: "Dashboardy na żywo pokazujące status maszyn, wskaźniki produkcji i metryki OEE",
      },
      {
        icon: Target,
        title: "Zarządzanie Zleceniami",
        desc: "Tworzenie, śledzenie i zarządzanie zleceniami z pełnym śledzeniem materiałów i pracy",
      },
      {
        icon: Layers,
        title: "Lista Materiałowa",
        desc: "Wielopoziomowe zarządzanie BOM z kontrolą wersji i obsługą zamienników",
      },
      {
        icon: Bot,
        title: "Asystent AI",
        desc: "NEXA AI dostarcza alerty o konserwacji predykcyjnej i sugestie optymalizacji",
      },
      {
        icon: BarChart3,
        title: "Analityka Wydajności",
        desc: "Kompleksowe KPI obejmujące przepustowość, czas cyklu i metryki jakości",
      },
    ],
    benefits: [
      "Redukcja przestojów produkcyjnych o 30%",
      "Poprawa wykorzystania zasobów o 45%",
      "Widoczność w czasie rzeczywistym wszystkich etapów produkcji",
      "Automatyzacja harmonogramowania i redukcja ręcznego planowania",
      "Bezproblemowa integracja z modułami magazynu i jakości",
    ],
    ctaTitle: "Przekształć Swoje Operacje Produkcyjne",
    ctaDesc: "Zobacz, jak InduCore może zoptymalizować efektywność Twojej produkcji",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
  },
  ro: {
    title: "Managementul Producției",
    subtitle: "Planificare completă, programare și execuție pentru operațiunile de producție",
    heroStats: [
      { value: "40%", label: "Creșterea Eficienței" },
      { value: "25%", label: "Reducerea Deșeurilor" },
      { value: "99%", label: "Livrare la Timp" },
    ],
    overviewTitle: "Control Complet al Producției",
    overviewDesc: "InduCore Management Producție oferă vizibilitate și control complet asupra întregului proces de fabricație, de la crearea comenzilor de lucru până la inspecția finală a calității.",
    features: [
      {
        icon: Calendar,
        title: "Planificarea Producției",
        desc: "Programare AI cu alocare automată a resurselor și rezolvarea conflictelor",
      },
      {
        icon: Gauge,
        title: "Monitorizare în Timp Real",
        desc: "Tablouri de bord live cu starea mașinilor, ratele de producție și metricile OEE",
      },
      {
        icon: Target,
        title: "Gestionarea Comenzilor",
        desc: "Crearea, urmărirea și gestionarea comenzilor de lucru cu urmărire completă a materialelor și muncii",
      },
      {
        icon: Layers,
        title: "Lista de Materiale",
        desc: "Gestionare BOM pe mai multe niveluri cu control al versiunilor și suport pentru substituții",
      },
      {
        icon: Bot,
        title: "Asistent AI",
        desc: "NEXA AI oferă alerte de mentenanță predictivă și sugestii de optimizare",
      },
      {
        icon: BarChart3,
        title: "Analitica Performanței",
        desc: "KPI-uri complete incluzând randament, timp de ciclu și metrici de calitate",
      },
    ],
    benefits: [
      "Reducerea timpului de oprire a producției cu 30%",
      "Îmbunătățirea utilizării resurselor cu 45%",
      "Vizibilitate în timp real pentru toate etapele de producție",
      "Automatizarea programării și reducerea efortului manual de planificare",
      "Integrare perfectă cu modulele de inventar și calitate",
    ],
    ctaTitle: "Transformați Operațiunile de Producție",
    ctaDesc: "Vedeți cum InduCore poate optimiza eficiența producției dumneavoastră",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
  },
};

export default function ICProductionPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-600 via-red-600 to-red-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link 
              to="/inducore/solutions"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className={`w-4 h-4 ${isRTL ? "" : "rotate-180"}`} />
              {t.backToSolutions}
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
              <Factory className="w-4 h-4" />
              <span>Production Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t.subtitle}
            </p>

            {/* Hero Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {t.heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-800 hover:bg-red-50">
                {t.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.overviewTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.overviewDesc}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
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
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <Factory className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Production</h3>
                <p className="text-white/80">
                  Streamline your manufacturing operations with intelligent automation and real-time insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t.ctaDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-800 hover:bg-red-50">
                {t.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Link to="/inducore/solutions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t.backToSolutions}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ICFooter />
    </div>
  );
}
