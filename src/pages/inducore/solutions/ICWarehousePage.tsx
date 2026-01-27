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
  Warehouse, ArrowRight, CheckCircle2, MapPin,
  ScanLine, Boxes, Truck, RefreshCw, BarChart3,
  Package, Grid, Navigation, Layers
} from "lucide-react";

const translations = {
  en: {
    title: "Warehouse Management",
    subtitle: "Optimize warehouse operations with intelligent storage, picking, and shipping automation",
    heroStats: [
      { value: "45%", label: "Faster Picking" },
      { value: "99.8%", label: "Accuracy" },
      { value: "30%", label: "Space Savings" },
    ],
    overviewTitle: "Smart Warehouse Operations",
    overviewDesc: "Transform your warehouse with intelligent bin management, optimized pick paths, and real-time inventory visibility across multiple locations.",
    features: [
      {
        icon: MapPin,
        title: "Bin Location Management",
        desc: "Organize your warehouse with zones, aisles, racks, and bin-level tracking",
      },
      {
        icon: Navigation,
        title: "Optimized Pick Paths",
        desc: "AI-calculated routes that minimize travel time and maximize picker efficiency",
      },
      {
        icon: ScanLine,
        title: "Mobile Scanning",
        desc: "Handheld and wearable devices for hands-free picking and putaway operations",
      },
      {
        icon: Grid,
        title: "Multi-Warehouse Support",
        desc: "Manage multiple warehouses with inter-warehouse transfers and consolidated views",
      },
      {
        icon: Truck,
        title: "Shipping Integration",
        desc: "Direct integration with carriers for label printing and shipment tracking",
      },
      {
        icon: BarChart3,
        title: "Space Analytics",
        desc: "Analyze space utilization and optimize storage allocation automatically",
      },
    ],
    benefits: [
      "Reduce picking errors by 95%",
      "Increase warehouse throughput by 40%",
      "Optimize space utilization across all locations",
      "Enable real-time inventory visibility",
      "Streamline receiving and shipping processes",
    ],
    ctaTitle: "Revolutionize Your Warehouse",
    ctaDesc: "See how InduCore can transform your warehouse operations",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
  },
  ar: {
    title: "إدارة المستودعات",
    subtitle: "تحسين عمليات المستودع من خلال أتمتة التخزين والانتقاء والشحن الذكي",
    heroStats: [
      { value: "45%", label: "انتقاء أسرع" },
      { value: "99.8%", label: "الدقة" },
      { value: "30%", label: "توفير المساحة" },
    ],
    overviewTitle: "عمليات مستودع ذكية",
    overviewDesc: "حوّل مستودعك بإدارة الحاويات الذكية ومسارات الانتقاء المحسّنة ورؤية المخزون الفوري عبر مواقع متعددة.",
    features: [
      {
        icon: MapPin,
        title: "إدارة مواقع التخزين",
        desc: "نظّم مستودعك بالمناطق والممرات والرفوف وتتبع على مستوى الحاوية",
      },
      {
        icon: Navigation,
        title: "مسارات الانتقاء المحسّنة",
        desc: "مسارات محسوبة بالذكاء الاصطناعي تقلل وقت التنقل وتزيد كفاءة العمال",
      },
      {
        icon: ScanLine,
        title: "المسح المحمول",
        desc: "أجهزة محمولة وقابلة للارتداء لعمليات الانتقاء والتخزين بدون استخدام اليدين",
      },
      {
        icon: Grid,
        title: "دعم المستودعات المتعددة",
        desc: "إدارة مستودعات متعددة مع النقل بين المستودعات والعروض الموحدة",
      },
      {
        icon: Truck,
        title: "تكامل الشحن",
        desc: "تكامل مباشر مع شركات النقل لطباعة الملصقات وتتبع الشحنات",
      },
      {
        icon: BarChart3,
        title: "تحليلات المساحة",
        desc: "تحليل استخدام المساحة وتحسين توزيع التخزين تلقائيًا",
      },
    ],
    benefits: [
      "تقليل أخطاء الانتقاء بنسبة 95%",
      "زيادة إنتاجية المستودع بنسبة 40%",
      "تحسين استخدام المساحة في جميع المواقع",
      "تمكين رؤية المخزون الفوري",
      "تبسيط عمليات الاستلام والشحن",
    ],
    ctaTitle: "ثوّر في مستودعك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحويل عمليات مستودعك",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
  },
  tr: {
    title: "Depo Yönetimi",
    subtitle: "Akıllı depolama, toplama ve sevkiyat otomasyonu ile depo operasyonlarını optimize edin",
    heroStats: [
      { value: "45%", label: "Daha Hızlı Toplama" },
      { value: "99.8%", label: "Doğruluk" },
      { value: "30%", label: "Alan Tasarrufu" },
    ],
    overviewTitle: "Akıllı Depo Operasyonları",
    overviewDesc: "Akıllı raf yönetimi, optimize edilmiş toplama yolları ve birden fazla konumda gerçek zamanlı envanter görünürlüğü ile deponuzu dönüştürün.",
    features: [
      {
        icon: MapPin,
        title: "Raf Konum Yönetimi",
        desc: "Deponuzu bölgeler, koridorlar, raflar ve raf seviyesinde takip ile organize edin",
      },
      {
        icon: Navigation,
        title: "Optimize Toplama Yolları",
        desc: "Seyahat süresini minimize eden ve toplayıcı verimliliğini maksimize eden AI hesaplı rotalar",
      },
      {
        icon: ScanLine,
        title: "Mobil Tarama",
        desc: "Eller serbest toplama ve yerleştirme işlemleri için el tipi ve giyilebilir cihazlar",
      },
      {
        icon: Grid,
        title: "Çoklu Depo Desteği",
        desc: "Depolar arası transferler ve konsolide görünümlerle birden fazla depoyu yönetin",
      },
      {
        icon: Truck,
        title: "Sevkiyat Entegrasyonu",
        desc: "Etiket yazdırma ve sevkiyat takibi için taşıyıcılarla doğrudan entegrasyon",
      },
      {
        icon: BarChart3,
        title: "Alan Analitiği",
        desc: "Alan kullanımını analiz edin ve depolama tahsisini otomatik olarak optimize edin",
      },
    ],
    benefits: [
      "Toplama hatalarını %95 azaltın",
      "Depo verimini %40 artırın",
      "Tüm konumlarda alan kullanımını optimize edin",
      "Gerçek zamanlı envanter görünürlüğü sağlayın",
      "Teslim alma ve sevkiyat süreçlerini kolaylaştırın",
    ],
    ctaTitle: "Deponuzda Devrim Yapın",
    ctaDesc: "InduCore'un depo operasyonlarınızı nasıl dönüştürebileceğini görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
  },
  de: {
    title: "Lagerverwaltung",
    subtitle: "Optimieren Sie Lageroperationen mit intelligenter Lagerung, Kommissionierung und Versandautomatisierung",
    heroStats: [
      { value: "45%", label: "Schnellere Kommissionierung" },
      { value: "99.8%", label: "Genauigkeit" },
      { value: "30%", label: "Platzeinsparung" },
    ],
    overviewTitle: "Intelligenter Lagerbetrieb",
    overviewDesc: "Transformieren Sie Ihr Lager mit intelligenter Behälterverwaltung, optimierten Kommissionierwegen und Echtzeit-Bestandstransparenz.",
    features: [
      {
        icon: MapPin,
        title: "Lagerplatzverwaltung",
        desc: "Organisieren Sie Ihr Lager mit Zonen, Gängen, Regalen und Behälter-Tracking",
      },
      {
        icon: Navigation,
        title: "Optimierte Kommissionierwege",
        desc: "KI-berechnete Routen minimieren Laufwege und maximieren die Effizienz",
      },
      {
        icon: ScanLine,
        title: "Mobile Erfassung",
        desc: "Hand- und tragbare Geräte für freihändige Kommissionierung und Einlagerung",
      },
      {
        icon: Grid,
        title: "Multi-Lager-Unterstützung",
        desc: "Verwalten Sie mehrere Lager mit Umlagerungen und konsolidierten Ansichten",
      },
      {
        icon: Truck,
        title: "Versandintegration",
        desc: "Direkte Integration mit Speditionen für Etikettendruck und Sendungsverfolgung",
      },
      {
        icon: BarChart3,
        title: "Platzanalyse",
        desc: "Analysieren Sie die Platznutzung und optimieren Sie die Lagerzuweisung automatisch",
      },
    ],
    benefits: [
      "Kommissionierfehler um 95% reduzieren",
      "Lagerdurchsatz um 40% steigern",
      "Platznutzung an allen Standorten optimieren",
      "Echtzeit-Bestandstransparenz ermöglichen",
      "Wareneingangs- und Versandprozesse rationalisieren",
    ],
    ctaTitle: "Revolutionieren Sie Ihr Lager",
    ctaDesc: "Erfahren Sie, wie InduCore Ihren Lagerbetrieb transformieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
  },
  ru: {
    title: "Управление складом",
    subtitle: "Оптимизация складских операций с помощью интеллектуального хранения, комплектации и автоматизации отгрузки",
    heroStats: [
      { value: "45%", label: "Быстрее комплектация" },
      { value: "99.8%", label: "Точность" },
      { value: "30%", label: "Экономия места" },
    ],
    overviewTitle: "Умные складские операции",
    overviewDesc: "Трансформируйте свой склад с помощью интеллектуального управления ячейками, оптимизированных маршрутов комплектации и видимости запасов в реальном времени.",
    features: [
      {
        icon: MapPin,
        title: "Управление местами хранения",
        desc: "Организуйте склад по зонам, проходам, стеллажам с отслеживанием на уровне ячеек",
      },
      {
        icon: Navigation,
        title: "Оптимизированные маршруты",
        desc: "Маршруты, рассчитанные ИИ, минимизируют время перемещения и максимизируют эффективность",
      },
      {
        icon: ScanLine,
        title: "Мобильное сканирование",
        desc: "Ручные и носимые устройства для комплектации и размещения без использования рук",
      },
      {
        icon: Grid,
        title: "Поддержка многих складов",
        desc: "Управляйте несколькими складами с межскладскими перемещениями и консолидированными представлениями",
      },
      {
        icon: Truck,
        title: "Интеграция доставки",
        desc: "Прямая интеграция с перевозчиками для печати этикеток и отслеживания отправок",
      },
      {
        icon: BarChart3,
        title: "Аналитика пространства",
        desc: "Анализируйте использование пространства и автоматически оптимизируйте распределение хранения",
      },
    ],
    benefits: [
      "Сокращение ошибок комплектации на 95%",
      "Увеличение пропускной способности склада на 40%",
      "Оптимизация использования пространства на всех локациях",
      "Обеспечение видимости запасов в реальном времени",
      "Оптимизация процессов приемки и отгрузки",
    ],
    ctaTitle: "Революционизируйте свой склад",
    ctaDesc: "Узнайте, как InduCore может трансформировать ваши складские операции",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
  },
  pl: {
    title: "Zarządzanie Magazynem",
    subtitle: "Optymalizuj operacje magazynowe dzięki inteligentnemu przechowywaniu, kompletacji i automatyzacji wysyłki",
    heroStats: [
      { value: "45%", label: "Szybsza Kompletacja" },
      { value: "99.8%", label: "Dokładność" },
      { value: "30%", label: "Oszczędność Miejsca" },
    ],
    overviewTitle: "Inteligentne Operacje Magazynowe",
    overviewDesc: "Przekształć swój magazyn dzięki inteligentnemu zarządzaniu lokalizacjami, zoptymalizowanym ścieżkom kompletacji i widoczności zapasów w czasie rzeczywistym.",
    features: [
      {
        icon: MapPin,
        title: "Zarządzanie Lokalizacjami",
        desc: "Organizuj magazyn według stref, alejek, regałów i śledzenia na poziomie pojemników",
      },
      {
        icon: Navigation,
        title: "Zoptymalizowane Ścieżki",
        desc: "Trasy obliczone przez AI minimalizują czas podróży i maksymalizują wydajność",
      },
      {
        icon: ScanLine,
        title: "Skanowanie Mobilne",
        desc: "Urządzenia przenośne i noszone do kompletacji i odkładania bez użycia rąk",
      },
      {
        icon: Grid,
        title: "Obsługa Wielu Magazynów",
        desc: "Zarządzaj wieloma magazynami z transferami międzymagazynowymi i widokami skonsolidowanymi",
      },
      {
        icon: Truck,
        title: "Integracja Wysyłki",
        desc: "Bezpośrednia integracja z przewoźnikami do drukowania etykiet i śledzenia przesyłek",
      },
      {
        icon: BarChart3,
        title: "Analityka Przestrzeni",
        desc: "Analizuj wykorzystanie przestrzeni i automatycznie optymalizuj alokację magazynową",
      },
    ],
    benefits: [
      "Redukcja błędów kompletacji o 95%",
      "Zwiększenie przepustowości magazynu o 40%",
      "Optymalizacja wykorzystania przestrzeni we wszystkich lokalizacjach",
      "Widoczność zapasów w czasie rzeczywistym",
      "Usprawnienie procesów przyjęcia i wysyłki",
    ],
    ctaTitle: "Zrewolucjonizuj Swój Magazyn",
    ctaDesc: "Zobacz, jak InduCore może przekształcić Twoje operacje magazynowe",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
  },
  ro: {
    title: "Gestionarea Depozitului",
    subtitle: "Optimizați operațiunile de depozit cu depozitare inteligentă, picking și automatizare a expedierii",
    heroStats: [
      { value: "45%", label: "Picking Mai Rapid" },
      { value: "99.8%", label: "Precizie" },
      { value: "30%", label: "Economie de Spațiu" },
    ],
    overviewTitle: "Operațiuni Inteligente de Depozit",
    overviewDesc: "Transformați depozitul cu gestionare inteligentă a locațiilor, rute optimizate de picking și vizibilitate în timp real a inventarului.",
    features: [
      {
        icon: MapPin,
        title: "Gestionarea Locațiilor",
        desc: "Organizați depozitul pe zone, culoare, rafturi și urmărire la nivel de container",
      },
      {
        icon: Navigation,
        title: "Rute Optimizate de Picking",
        desc: "Rute calculate de AI care minimizează timpul de deplasare și maximizează eficiența",
      },
      {
        icon: ScanLine,
        title: "Scanare Mobilă",
        desc: "Dispozitive portabile și purtabile pentru operațiuni de picking și depozitare fără mâini",
      },
      {
        icon: Grid,
        title: "Suport Multi-Depozit",
        desc: "Gestionați mai multe depozite cu transferuri între depozite și vizualizări consolidate",
      },
      {
        icon: Truck,
        title: "Integrare Expediere",
        desc: "Integrare directă cu transportatorii pentru imprimarea etichetelor și urmărirea expedierilor",
      },
      {
        icon: BarChart3,
        title: "Analitica Spațiului",
        desc: "Analizați utilizarea spațiului și optimizați automat alocarea depozitării",
      },
    ],
    benefits: [
      "Reducerea erorilor de picking cu 95%",
      "Creșterea randamentului depozitului cu 40%",
      "Optimizarea utilizării spațiului în toate locațiile",
      "Vizibilitate în timp real a inventarului",
      "Eficientizarea proceselor de recepție și expediere",
    ],
    ctaTitle: "Revoluționați Depozitul",
    ctaDesc: "Vedeți cum InduCore poate transforma operațiunile de depozit",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
  },
};

export default function ICWarehousePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 overflow-hidden">
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
              <Warehouse className="w-4 h-4" />
              <span>Warehouse Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t.subtitle}
            </p>

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
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
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
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <Warehouse className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Warehouse</h3>
                <p className="text-white/80">
                  Transform your warehouse into a high-performance fulfillment center.
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
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-800">
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
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
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
