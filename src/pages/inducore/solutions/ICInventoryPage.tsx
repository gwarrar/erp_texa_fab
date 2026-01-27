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
  Package, ArrowRight, CheckCircle2, BarChart3, 
  ScanLine, Boxes, Truck, AlertTriangle, RefreshCw,
  TrendingUp, ClipboardList, Calculator
} from "lucide-react";

const translations = {
  en: {
    title: "Raw Materials Management",
    subtitle: "Complete visibility and control over your raw material inventory from procurement to production",
    heroStats: [
      { value: "35%", label: "Cost Reduction" },
      { value: "50%", label: "Less Stockouts" },
      { value: "99.5%", label: "Accuracy Rate" },
    ],
    overviewTitle: "Smart Raw Material Tracking",
    overviewDesc: "Track every material from arrival to consumption with real-time visibility, automated reorder points, and complete traceability for quality and compliance.",
    features: [
      {
        icon: ScanLine,
        title: "Barcode & RFID Scanning",
        desc: "Instant material identification and tracking with barcode and RFID support",
      },
      {
        icon: Boxes,
        title: "Lot & Batch Tracking",
        desc: "Full traceability with lot numbers, expiry dates, and supplier information",
      },
      {
        icon: AlertTriangle,
        title: "Reorder Alerts",
        desc: "Automated alerts when stock levels fall below configured thresholds",
      },
      {
        icon: Calculator,
        title: "Cost Tracking",
        desc: "Real-time material cost tracking with FIFO, LIFO, and average costing",
      },
      {
        icon: RefreshCw,
        title: "Supplier Integration",
        desc: "Connect with suppliers for automated PO generation and delivery tracking",
      },
      {
        icon: ClipboardList,
        title: "Quality Inspection",
        desc: "Incoming quality checks with hold/release workflows and defect tracking",
      },
    ],
    benefits: [
      "Reduce material waste by up to 30%",
      "Eliminate stockouts with predictive ordering",
      "Maintain full compliance with audit trails",
      "Optimize inventory levels and reduce carrying costs",
      "Improve supplier relationships with accurate forecasting",
    ],
    ctaTitle: "Take Control of Your Raw Materials",
    ctaDesc: "See how InduCore can optimize your material management",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
  },
  ar: {
    title: "إدارة المواد الأولية",
    subtitle: "رؤية كاملة وتحكم في مخزون المواد الأولية من الشراء إلى الإنتاج",
    heroStats: [
      { value: "35%", label: "تخفيض التكاليف" },
      { value: "50%", label: "تقليل نفاد المخزون" },
      { value: "99.5%", label: "معدل الدقة" },
    ],
    overviewTitle: "تتبع ذكي للمواد الأولية",
    overviewDesc: "تتبع كل مادة من الوصول إلى الاستهلاك مع رؤية فورية ونقاط إعادة طلب آلية وتتبع كامل للجودة والامتثال.",
    features: [
      {
        icon: ScanLine,
        title: "مسح الباركود و RFID",
        desc: "تحديد وتتبع المواد فوريًا مع دعم الباركود و RFID",
      },
      {
        icon: Boxes,
        title: "تتبع الدفعات",
        desc: "تتبع كامل بأرقام الدفعات وتواريخ الانتهاء ومعلومات الموردين",
      },
      {
        icon: AlertTriangle,
        title: "تنبيهات إعادة الطلب",
        desc: "تنبيهات آلية عندما تنخفض مستويات المخزون عن الحدود المحددة",
      },
      {
        icon: Calculator,
        title: "تتبع التكاليف",
        desc: "تتبع تكاليف المواد في الوقت الفعلي مع FIFO و LIFO والتكلفة المتوسطة",
      },
      {
        icon: RefreshCw,
        title: "تكامل الموردين",
        desc: "الاتصال بالموردين لإنشاء أوامر الشراء الآلية وتتبع التسليم",
      },
      {
        icon: ClipboardList,
        title: "فحص الجودة",
        desc: "فحوصات جودة الواردات مع سير عمل الحجز/الإفراج وتتبع العيوب",
      },
    ],
    benefits: [
      "تقليل هدر المواد بنسبة تصل إلى 30%",
      "القضاء على نفاد المخزون بالطلب التنبؤي",
      "الحفاظ على الامتثال الكامل مع سجلات التدقيق",
      "تحسين مستويات المخزون وتقليل تكاليف التخزين",
      "تحسين العلاقات مع الموردين بالتنبؤ الدقيق",
    ],
    ctaTitle: "تحكم في موادك الأولية",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين إدارة المواد",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
  },
  tr: {
    title: "Hammadde Yönetimi",
    subtitle: "Tedarikten üretime kadar hammadde envanteriniz üzerinde tam görünürlük ve kontrol",
    heroStats: [
      { value: "35%", label: "Maliyet Düşüşü" },
      { value: "50%", label: "Daha Az Stok Tükenmesi" },
      { value: "99.5%", label: "Doğruluk Oranı" },
    ],
    overviewTitle: "Akıllı Hammadde Takibi",
    overviewDesc: "Her malzemeyi varıştan tüketime kadar gerçek zamanlı görünürlük, otomatik yeniden sipariş noktaları ve kalite ve uyumluluk için tam izlenebilirlik ile takip edin.",
    features: [
      {
        icon: ScanLine,
        title: "Barkod & RFID Tarama",
        desc: "Barkod ve RFID desteği ile anlık malzeme tanımlama ve takibi",
      },
      {
        icon: Boxes,
        title: "Lot & Parti Takibi",
        desc: "Lot numaraları, son kullanma tarihleri ve tedarikçi bilgileri ile tam izlenebilirlik",
      },
      {
        icon: AlertTriangle,
        title: "Yeniden Sipariş Uyarıları",
        desc: "Stok seviyeleri belirlenen eşiklerin altına düştüğünde otomatik uyarılar",
      },
      {
        icon: Calculator,
        title: "Maliyet Takibi",
        desc: "FIFO, LIFO ve ortalama maliyetlendirme ile gerçek zamanlı malzeme maliyeti takibi",
      },
      {
        icon: RefreshCw,
        title: "Tedarikçi Entegrasyonu",
        desc: "Otomatik satın alma siparişi oluşturma ve teslimat takibi için tedarikçilerle bağlantı",
      },
      {
        icon: ClipboardList,
        title: "Kalite Kontrolü",
        desc: "Bekletme/serbest bırakma iş akışları ve kusur takibi ile gelen kalite kontrolleri",
      },
    ],
    benefits: [
      "Malzeme israfını %30'a kadar azaltın",
      "Öngörücü sipariş ile stok tükenmelerini ortadan kaldırın",
      "Denetim izleri ile tam uyumluluk sağlayın",
      "Envanter seviyelerini optimize edin ve taşıma maliyetlerini azaltın",
      "Doğru tahminlerle tedarikçi ilişkilerini geliştirin",
    ],
    ctaTitle: "Hammaddelerinizi Kontrol Altına Alın",
    ctaDesc: "InduCore'un malzeme yönetiminizi nasıl optimize edebileceğini görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
  },
  de: {
    title: "Rohstoffverwaltung",
    subtitle: "Vollständige Transparenz und Kontrolle über Ihr Rohstoffinventar von der Beschaffung bis zur Produktion",
    heroStats: [
      { value: "35%", label: "Kostensenkung" },
      { value: "50%", label: "Weniger Fehlbestände" },
      { value: "99.5%", label: "Genauigkeitsrate" },
    ],
    overviewTitle: "Intelligente Rohstoffverfolgung",
    overviewDesc: "Verfolgen Sie jedes Material vom Eingang bis zum Verbrauch mit Echtzeit-Transparenz, automatischen Nachbestellpunkten und vollständiger Rückverfolgbarkeit.",
    features: [
      {
        icon: ScanLine,
        title: "Barcode & RFID-Scannen",
        desc: "Sofortige Materialidentifikation und -verfolgung mit Barcode- und RFID-Unterstützung",
      },
      {
        icon: Boxes,
        title: "Chargen-Verfolgung",
        desc: "Vollständige Rückverfolgbarkeit mit Chargennummern, Verfallsdaten und Lieferanteninformationen",
      },
      {
        icon: AlertTriangle,
        title: "Nachbestellungsalarme",
        desc: "Automatische Warnungen bei Unterschreitung konfigurierter Bestandsschwellen",
      },
      {
        icon: Calculator,
        title: "Kostenverfolgung",
        desc: "Echtzeit-Materialkostenverfolgung mit FIFO, LIFO und Durchschnittskosten",
      },
      {
        icon: RefreshCw,
        title: "Lieferantenintegration",
        desc: "Verbindung mit Lieferanten für automatische Bestellgenerierung und Lieferverfolgung",
      },
      {
        icon: ClipboardList,
        title: "Qualitätsprüfung",
        desc: "Eingangsprüfungen mit Sperr-/Freigabe-Workflows und Fehlerverfolgung",
      },
    ],
    benefits: [
      "Materialverschwendung um bis zu 30% reduzieren",
      "Fehlbestände durch vorausschauende Bestellung eliminieren",
      "Vollständige Compliance mit Audit-Trails aufrechterhalten",
      "Lagerbestände optimieren und Lagerkosten senken",
      "Lieferantenbeziehungen durch genaue Prognosen verbessern",
    ],
    ctaTitle: "Übernehmen Sie die Kontrolle über Ihre Rohstoffe",
    ctaDesc: "Erfahren Sie, wie InduCore Ihr Materialmanagement optimieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
  },
  ru: {
    title: "Управление сырьем",
    subtitle: "Полная видимость и контроль запасов сырья от закупки до производства",
    heroStats: [
      { value: "35%", label: "Снижение затрат" },
      { value: "50%", label: "Меньше дефицита" },
      { value: "99.5%", label: "Точность" },
    ],
    overviewTitle: "Умное отслеживание сырья",
    overviewDesc: "Отслеживайте каждый материал от поступления до потребления с видимостью в реальном времени, автоматическими точками перезаказа и полной прослеживаемостью.",
    features: [
      {
        icon: ScanLine,
        title: "Сканирование штрих-кодов и RFID",
        desc: "Мгновенная идентификация и отслеживание материалов с поддержкой штрих-кодов и RFID",
      },
      {
        icon: Boxes,
        title: "Отслеживание партий",
        desc: "Полная прослеживаемость с номерами партий, сроками годности и информацией о поставщиках",
      },
      {
        icon: AlertTriangle,
        title: "Оповещения о перезаказе",
        desc: "Автоматические оповещения при падении уровня запасов ниже настроенных порогов",
      },
      {
        icon: Calculator,
        title: "Отслеживание затрат",
        desc: "Отслеживание стоимости материалов в реальном времени с FIFO, LIFO и средней стоимостью",
      },
      {
        icon: RefreshCw,
        title: "Интеграция с поставщиками",
        desc: "Связь с поставщиками для автоматического создания заказов и отслеживания доставки",
      },
      {
        icon: ClipboardList,
        title: "Контроль качества",
        desc: "Входной контроль качества с рабочими процессами удержания/выпуска и отслеживанием дефектов",
      },
    ],
    benefits: [
      "Сокращение отходов материалов до 30%",
      "Устранение дефицита с помощью прогнозного заказа",
      "Поддержание полного соответствия с журналами аудита",
      "Оптимизация уровней запасов и снижение затрат на хранение",
      "Улучшение отношений с поставщиками благодаря точному прогнозированию",
    ],
    ctaTitle: "Возьмите под контроль свое сырье",
    ctaDesc: "Узнайте, как InduCore может оптимизировать управление материалами",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
  },
  pl: {
    title: "Zarządzanie Surowcami",
    subtitle: "Pełna widoczność i kontrola nad zapasami surowców od zakupu do produkcji",
    heroStats: [
      { value: "35%", label: "Redukcja Kosztów" },
      { value: "50%", label: "Mniej Braków" },
      { value: "99.5%", label: "Dokładność" },
    ],
    overviewTitle: "Inteligentne Śledzenie Surowców",
    overviewDesc: "Śledź każdy materiał od przyjęcia do zużycia z widocznością w czasie rzeczywistym, automatycznymi punktami zamawiania i pełną identyfikowalnością.",
    features: [
      {
        icon: ScanLine,
        title: "Skanowanie Kodów Kreskowych i RFID",
        desc: "Natychmiastowa identyfikacja i śledzenie materiałów z obsługą kodów kreskowych i RFID",
      },
      {
        icon: Boxes,
        title: "Śledzenie Partii",
        desc: "Pełna identyfikowalność z numerami partii, datami ważności i informacjami o dostawcach",
      },
      {
        icon: AlertTriangle,
        title: "Alerty Ponownego Zamówienia",
        desc: "Automatyczne alerty gdy poziomy zapasów spadają poniżej skonfigurowanych progów",
      },
      {
        icon: Calculator,
        title: "Śledzenie Kosztów",
        desc: "Śledzenie kosztów materiałów w czasie rzeczywistym z FIFO, LIFO i średnim kosztem",
      },
      {
        icon: RefreshCw,
        title: "Integracja z Dostawcami",
        desc: "Połączenie z dostawcami dla automatycznego generowania zamówień i śledzenia dostaw",
      },
      {
        icon: ClipboardList,
        title: "Kontrola Jakości",
        desc: "Kontrole jakości przyjęć z przepływami wstrzymania/zwolnienia i śledzeniem wad",
      },
    ],
    benefits: [
      "Redukcja odpadów materiałowych do 30%",
      "Eliminacja braków dzięki predykcyjnemu zamawianiu",
      "Utrzymanie pełnej zgodności ze ścieżkami audytu",
      "Optymalizacja poziomów zapasów i redukcja kosztów magazynowania",
      "Poprawa relacji z dostawcami dzięki dokładnym prognozom",
    ],
    ctaTitle: "Przejmij Kontrolę nad Surowcami",
    ctaDesc: "Zobacz, jak InduCore może zoptymalizować zarządzanie materiałami",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
  },
  ro: {
    title: "Gestionarea Materiilor Prime",
    subtitle: "Vizibilitate și control complet asupra stocului de materii prime de la achiziție la producție",
    heroStats: [
      { value: "35%", label: "Reducerea Costurilor" },
      { value: "50%", label: "Mai Puține Rupturi de Stoc" },
      { value: "99.5%", label: "Rata de Precizie" },
    ],
    overviewTitle: "Urmărire Inteligentă a Materiilor Prime",
    overviewDesc: "Urmăriți fiecare material de la sosire la consum cu vizibilitate în timp real, puncte automate de recomandă și trasabilitate completă pentru calitate și conformitate.",
    features: [
      {
        icon: ScanLine,
        title: "Scanare Coduri de Bare și RFID",
        desc: "Identificare și urmărire instantanee a materialelor cu suport pentru coduri de bare și RFID",
      },
      {
        icon: Boxes,
        title: "Urmărirea Loturilor",
        desc: "Trasabilitate completă cu numere de lot, date de expirare și informații despre furnizori",
      },
      {
        icon: AlertTriangle,
        title: "Alerte de Recomandă",
        desc: "Alerte automate când nivelurile de stoc scad sub pragurile configurate",
      },
      {
        icon: Calculator,
        title: "Urmărirea Costurilor",
        desc: "Urmărirea costurilor materialelor în timp real cu FIFO, LIFO și costul mediu",
      },
      {
        icon: RefreshCw,
        title: "Integrare Furnizori",
        desc: "Conectare cu furnizorii pentru generarea automată a comenzilor și urmărirea livrărilor",
      },
      {
        icon: ClipboardList,
        title: "Inspecția Calității",
        desc: "Verificări de calitate la intrare cu fluxuri de blocare/eliberare și urmărirea defectelor",
      },
    ],
    benefits: [
      "Reducerea deșeurilor de materiale cu până la 30%",
      "Eliminarea rupturilor de stoc cu comenzi predictive",
      "Menținerea conformității complete cu jurnale de audit",
      "Optimizarea nivelurilor de inventar și reducerea costurilor de depozitare",
      "Îmbunătățirea relațiilor cu furnizorii prin prognoze precise",
    ],
    ctaTitle: "Preluați Controlul Materiilor Prime",
    ctaDesc: "Vedeți cum InduCore poate optimiza gestionarea materialelor",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
  },
};

export default function ICInventoryPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 overflow-hidden">
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
              <Package className="w-4 h-4" />
              <span>Raw Materials</span>
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
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
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
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <Package className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Inventory</h3>
                <p className="text-white/80">
                  Never run out of critical materials again with intelligent inventory management.
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
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800">
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
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
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
