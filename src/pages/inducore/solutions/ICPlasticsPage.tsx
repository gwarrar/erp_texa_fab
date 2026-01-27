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
  Boxes, ArrowRight, CheckCircle2, BarChart3, 
  Timer, Recycle, Thermometer, Settings2,
  TrendingUp, Layers, Gauge
} from "lucide-react";

const translations = {
  en: {
    title: "Plastics & Injection Molding",
    subtitle: "Advanced ERP solution for injection molding, extrusion, and plastic manufacturing operations with real-time process optimization",
    heroStats: [
      { value: "25%", label: "Cycle Time Reduction" },
      { value: "40%", label: "Scrap Reduction" },
      { value: "99.2%", label: "Quality Rate" },
    ],
    overviewTitle: "Precision Plastic Manufacturing",
    overviewDesc: "From raw material preparation to finished product packaging, optimize every aspect of your plastic manufacturing with intelligent automation and real-time monitoring.",
    features: [
      {
        icon: Settings2,
        title: "Mold Management",
        desc: "Complete mold lifecycle tracking including maintenance schedules, shot counts, and cavity performance",
      },
      {
        icon: Timer,
        title: "Cycle Time Optimization",
        desc: "Real-time monitoring and AI-driven optimization of injection molding cycle times",
      },
      {
        icon: Recycle,
        title: "Material Recycling Tracking",
        desc: "Track regrind usage, material blending ratios, and recycled content compliance",
      },
      {
        icon: Thermometer,
        title: "Process Parameters",
        desc: "Monitor temperature, pressure, speed, and other critical molding parameters",
      },
      {
        icon: Gauge,
        title: "Quality Parameters",
        desc: "Automated quality checks with statistical process control and defect tracking",
      },
      {
        icon: Layers,
        title: "Material Drying Control",
        desc: "Manage material drying times, temperatures, and moisture content verification",
      },
    ],
    benefits: [
      "Reduce cycle times while maintaining quality",
      "Minimize scrap and maximize material efficiency",
      "Extend mold life with predictive maintenance",
      "Track regulatory compliance for recycled content",
      "Optimize energy consumption per part",
    ],
    ctaTitle: "Transform Your Plastic Operations",
    ctaDesc: "See how InduCore can optimize your injection molding processes",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
    processExcellence: "Process Excellence",
    processDesc: "Comprehensive process control for injection molding with real-time monitoring of all critical parameters.",
    moldTracking: "Mold Tracking",
    cycleMonitoring: "Cycle Monitoring",
  },
  ar: {
    title: "البلاستيك والقولبة بالحقن",
    subtitle: "حل ERP متقدم للقولبة بالحقن والبثق وعمليات تصنيع البلاستيك مع تحسين العمليات في الوقت الفعلي",
    heroStats: [
      { value: "25%", label: "تقليل وقت الدورة" },
      { value: "40%", label: "تقليل النفايات" },
      { value: "99.2%", label: "معدل الجودة" },
    ],
    overviewTitle: "تصنيع البلاستيك بدقة",
    overviewDesc: "من تحضير المواد الخام إلى تعبئة المنتج النهائي، قم بتحسين كل جانب من تصنيع البلاستيك مع الأتمتة الذكية والمراقبة في الوقت الفعلي.",
    features: [
      {
        icon: Settings2,
        title: "إدارة القوالب",
        desc: "تتبع كامل لدورة حياة القالب بما في ذلك جداول الصيانة وعدد اللقطات وأداء التجويف",
      },
      {
        icon: Timer,
        title: "تحسين وقت الدورة",
        desc: "مراقبة في الوقت الفعلي وتحسين مدعوم بالذكاء الاصطناعي لأوقات دورة القولبة بالحقن",
      },
      {
        icon: Recycle,
        title: "تتبع إعادة تدوير المواد",
        desc: "تتبع استخدام المواد المعاد طحنها ونسب مزج المواد والامتثال للمحتوى المعاد تدويره",
      },
      {
        icon: Thermometer,
        title: "معلمات العملية",
        desc: "مراقبة درجة الحرارة والضغط والسرعة ومعلمات القولبة الحرجة الأخرى",
      },
      {
        icon: Gauge,
        title: "معايير الجودة",
        desc: "فحوصات جودة آلية مع التحكم الإحصائي بالعمليات وتتبع العيوب",
      },
      {
        icon: Layers,
        title: "التحكم في تجفيف المواد",
        desc: "إدارة أوقات تجفيف المواد ودرجات الحرارة والتحقق من محتوى الرطوبة",
      },
    ],
    benefits: [
      "تقليل أوقات الدورة مع الحفاظ على الجودة",
      "تقليل النفايات وزيادة كفاءة المواد",
      "إطالة عمر القالب مع الصيانة التنبؤية",
      "تتبع الامتثال التنظيمي للمحتوى المعاد تدويره",
      "تحسين استهلاك الطاقة لكل قطعة",
    ],
    ctaTitle: "حوّل عمليات البلاستيك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين عمليات القولبة بالحقن",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
    processExcellence: "التميز في العمليات",
    processDesc: "تحكم شامل بالعمليات للقولبة بالحقن مع مراقبة جميع المعلمات الحرجة في الوقت الفعلي.",
    moldTracking: "تتبع القوالب",
    cycleMonitoring: "مراقبة الدورة",
  },
  tr: {
    title: "Plastik ve Enjeksiyon Kalıplama",
    subtitle: "Enjeksiyon kalıplama, ekstrüzyon ve plastik üretim operasyonları için gerçek zamanlı süreç optimizasyonu ile gelişmiş ERP çözümü",
    heroStats: [
      { value: "25%", label: "Döngü Süresi Azaltımı" },
      { value: "40%", label: "Hurda Azaltımı" },
      { value: "99.2%", label: "Kalite Oranı" },
    ],
    overviewTitle: "Hassas Plastik Üretimi",
    overviewDesc: "Ham madde hazırlığından bitmiş ürün paketlemesine kadar akıllı otomasyon ve gerçek zamanlı izleme ile plastik üretiminin her yönünü optimize edin.",
    features: [
      {
        icon: Settings2,
        title: "Kalıp Yönetimi",
        desc: "Bakım programları, atım sayıları ve boşluk performansı dahil tam kalıp yaşam döngüsü takibi",
      },
      {
        icon: Timer,
        title: "Döngü Süresi Optimizasyonu",
        desc: "Enjeksiyon kalıplama döngü süreleri için gerçek zamanlı izleme ve AI destekli optimizasyon",
      },
      {
        icon: Recycle,
        title: "Malzeme Geri Dönüşüm Takibi",
        desc: "Öğütme kullanımı, malzeme karıştırma oranları ve geri dönüşüm içeriği uyumluluğunu takip edin",
      },
      {
        icon: Thermometer,
        title: "Süreç Parametreleri",
        desc: "Sıcaklık, basınç, hız ve diğer kritik kalıplama parametrelerini izleyin",
      },
      {
        icon: Gauge,
        title: "Kalite Parametreleri",
        desc: "İstatistiksel süreç kontrolü ve kusur takibi ile otomatik kalite kontrolleri",
      },
      {
        icon: Layers,
        title: "Malzeme Kurutma Kontrolü",
        desc: "Malzeme kurutma sürelerini, sıcaklıkları ve nem içeriği doğrulamasını yönetin",
      },
    ],
    benefits: [
      "Kaliteyi koruyarak döngü sürelerini azaltın",
      "Hurdayı en aza indirin ve malzeme verimliliğini en üst düzeye çıkarın",
      "Öngörücü bakım ile kalıp ömrünü uzatın",
      "Geri dönüşüm içeriği için mevzuat uyumluluğunu takip edin",
      "Parça başına enerji tüketimini optimize edin",
    ],
    ctaTitle: "Plastik Operasyonlarınızı Dönüştürün",
    ctaDesc: "InduCore'un enjeksiyon kalıplama süreçlerinizi nasıl optimize edebileceğini görün",
    ctaButton: "Demo Planlayın",
    backToSolutions: "Çözümlere Dön",
    keyBenefits: "Temel Faydalar",
    processExcellence: "Süreç Mükemmelliği",
    processDesc: "Tüm kritik parametrelerin gerçek zamanlı izlenmesi ile enjeksiyon kalıplama için kapsamlı süreç kontrolü.",
    moldTracking: "Kalıp Takibi",
    cycleMonitoring: "Döngü İzleme",
  },
  de: {
    title: "Kunststoff & Spritzguss",
    subtitle: "Fortschrittliche ERP-Lösung für Spritzguss, Extrusion und Kunststofffertigungsabläufe mit Echtzeit-Prozessoptimierung",
    heroStats: [
      { value: "25%", label: "Zykluszeit-Reduzierung" },
      { value: "40%", label: "Ausschuss-Reduzierung" },
      { value: "99.2%", label: "Qualitätsrate" },
    ],
    overviewTitle: "Präzise Kunststofffertigung",
    overviewDesc: "Von der Rohmaterialvorbereitung bis zur Fertigproduktverpackung - optimieren Sie jeden Aspekt Ihrer Kunststofffertigung mit intelligenter Automatisierung und Echtzeitüberwachung.",
    features: [
      {
        icon: Settings2,
        title: "Formwerkzeugmanagement",
        desc: "Vollständige Formwerkzeug-Lebenszyklus-Verfolgung einschließlich Wartungsplänen, Schusszählern und Kavitätsleistung",
      },
      {
        icon: Timer,
        title: "Zykluszeitoptimierung",
        desc: "Echtzeitüberwachung und KI-gesteuerte Optimierung der Spritzguss-Zykluszeiten",
      },
      {
        icon: Recycle,
        title: "Materialrecycling-Verfolgung",
        desc: "Verfolgung von Mahlgut-Verwendung, Materialmischungsverhältnissen und Recyclinganteil-Konformität",
      },
      {
        icon: Thermometer,
        title: "Prozessparameter",
        desc: "Überwachung von Temperatur, Druck, Geschwindigkeit und anderen kritischen Formparametern",
      },
      {
        icon: Gauge,
        title: "Qualitätsparameter",
        desc: "Automatisierte Qualitätsprüfungen mit statistischer Prozesskontrolle und Fehlerverfolgung",
      },
      {
        icon: Layers,
        title: "Materialtrocknungskontrolle",
        desc: "Verwaltung von Materialtrocknungszeiten, Temperaturen und Feuchtigkeitsgehaltsüberprüfung",
      },
    ],
    benefits: [
      "Zykluszeiten bei gleichbleibender Qualität reduzieren",
      "Ausschuss minimieren und Materialeffizienz maximieren",
      "Werkzeuglebensdauer durch vorausschauende Wartung verlängern",
      "Regulatorische Konformität für Recyclinganteil verfolgen",
      "Energieverbrauch pro Teil optimieren",
    ],
    ctaTitle: "Transformieren Sie Ihre Kunststoffoperationen",
    ctaDesc: "Erfahren Sie, wie InduCore Ihre Spritzgussprozesse optimieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
    keyBenefits: "Hauptvorteile",
    processExcellence: "Prozessexzellenz",
    processDesc: "Umfassende Prozesskontrolle für Spritzguss mit Echtzeitüberwachung aller kritischen Parameter.",
    moldTracking: "Werkzeugverfolgung",
    cycleMonitoring: "Zyklusüberwachung",
  },
  ru: {
    title: "Пластик и Литье под Давлением",
    subtitle: "Передовое ERP решение для литья под давлением, экструзии и операций по производству пластика с оптимизацией процессов в реальном времени",
    heroStats: [
      { value: "25%", label: "Сокращение цикла" },
      { value: "40%", label: "Сокращение отходов" },
      { value: "99.2%", label: "Показатель качества" },
    ],
    overviewTitle: "Прецизионное производство пластика",
    overviewDesc: "От подготовки сырья до упаковки готовой продукции - оптимизируйте каждый аспект производства пластика с помощью интеллектуальной автоматизации и мониторинга в реальном времени.",
    features: [
      {
        icon: Settings2,
        title: "Управление пресс-формами",
        desc: "Полное отслеживание жизненного цикла пресс-форм включая графики обслуживания, счетчики впрысков и производительность полостей",
      },
      {
        icon: Timer,
        title: "Оптимизация времени цикла",
        desc: "Мониторинг в реальном времени и AI-оптимизация времени циклов литья под давлением",
      },
      {
        icon: Recycle,
        title: "Отслеживание переработки материалов",
        desc: "Отслеживание использования вторичного сырья, соотношений смешивания материалов и соответствия содержания переработанных материалов",
      },
      {
        icon: Thermometer,
        title: "Параметры процесса",
        desc: "Мониторинг температуры, давления, скорости и других критических параметров литья",
      },
      {
        icon: Gauge,
        title: "Параметры качества",
        desc: "Автоматические проверки качества со статистическим контролем процесса и отслеживанием дефектов",
      },
      {
        icon: Layers,
        title: "Контроль сушки материалов",
        desc: "Управление временем сушки материалов, температурами и проверкой содержания влаги",
      },
    ],
    benefits: [
      "Сокращение времени цикла при сохранении качества",
      "Минимизация отходов и максимизация эффективности материалов",
      "Продление срока службы пресс-форм с помощью предиктивного обслуживания",
      "Отслеживание регуляторного соответствия для переработанного содержимого",
      "Оптимизация энергопотребления на деталь",
    ],
    ctaTitle: "Преобразуйте ваши пластиковые операции",
    ctaDesc: "Узнайте, как InduCore может оптимизировать ваши процессы литья под давлением",
    ctaButton: "Запланировать демо",
    backToSolutions: "Назад к решениям",
    keyBenefits: "Ключевые преимущества",
    processExcellence: "Превосходство процессов",
    processDesc: "Комплексный контроль процесса литья под давлением с мониторингом всех критических параметров в реальном времени.",
    moldTracking: "Отслеживание форм",
    cycleMonitoring: "Мониторинг циклов",
  },
  pl: {
    title: "Plastyki i Formowanie Wtryskowe",
    subtitle: "Zaawansowane rozwiązanie ERP dla formowania wtryskowego, ekstruzji i operacji produkcji tworzyw sztucznych z optymalizacją procesów w czasie rzeczywistym",
    heroStats: [
      { value: "25%", label: "Redukcja czasu cyklu" },
      { value: "40%", label: "Redukcja odpadów" },
      { value: "99.2%", label: "Wskaźnik jakości" },
    ],
    overviewTitle: "Precyzyjna produkcja tworzyw sztucznych",
    overviewDesc: "Od przygotowania surowców po pakowanie gotowego produktu - optymalizuj każdy aspekt produkcji tworzyw sztucznych dzięki inteligentnej automatyzacji i monitorowaniu w czasie rzeczywistym.",
    features: [
      {
        icon: Settings2,
        title: "Zarządzanie formami",
        desc: "Pełne śledzenie cyklu życia form w tym harmonogramów konserwacji, liczników wtryskiwań i wydajności gniazd",
      },
      {
        icon: Timer,
        title: "Optymalizacja czasu cyklu",
        desc: "Monitorowanie w czasie rzeczywistym i optymalizacja AI czasów cyklu formowania wtryskowego",
      },
      {
        icon: Recycle,
        title: "Śledzenie recyklingu materiałów",
        desc: "Śledzenie użycia przemiału, proporcji mieszania materiałów i zgodności zawartości recyklingu",
      },
      {
        icon: Thermometer,
        title: "Parametry procesu",
        desc: "Monitorowanie temperatury, ciśnienia, prędkości i innych krytycznych parametrów formowania",
      },
      {
        icon: Gauge,
        title: "Parametry jakości",
        desc: "Automatyczne kontrole jakości ze statystyczną kontrolą procesu i śledzeniem wad",
      },
      {
        icon: Layers,
        title: "Kontrola suszenia materiałów",
        desc: "Zarządzanie czasami suszenia materiałów, temperaturami i weryfikacją zawartości wilgoci",
      },
    ],
    benefits: [
      "Skracaj czasy cyklu zachowując jakość",
      "Minimalizuj odpady i maksymalizuj wydajność materiałów",
      "Wydłużaj żywotność form dzięki predykcyjnej konserwacji",
      "Śledź zgodność regulacyjną dla zawartości recyklingu",
      "Optymalizuj zużycie energii na część",
    ],
    ctaTitle: "Przekształć swoje operacje plastyczne",
    ctaDesc: "Zobacz jak InduCore może zoptymalizować Twoje procesy formowania wtryskowego",
    ctaButton: "Zaplanuj demo",
    backToSolutions: "Powrót do rozwiązań",
    keyBenefits: "Kluczowe korzyści",
    processExcellence: "Doskonałość procesów",
    processDesc: "Kompleksowa kontrola procesu formowania wtryskowego z monitorowaniem wszystkich krytycznych parametrów w czasie rzeczywistym.",
    moldTracking: "Śledzenie form",
    cycleMonitoring: "Monitorowanie cyklu",
  },
  ro: {
    title: "Plastic și Turnare prin Injecție",
    subtitle: "Soluție ERP avansată pentru turnare prin injecție, extrudare și operațiuni de producție de plastic cu optimizare de proces în timp real",
    heroStats: [
      { value: "25%", label: "Reducere timp ciclu" },
      { value: "40%", label: "Reducere deșeuri" },
      { value: "99.2%", label: "Rata de calitate" },
    ],
    overviewTitle: "Producție de plastic de precizie",
    overviewDesc: "De la pregătirea materiei prime la ambalarea produsului finit - optimizați fiecare aspect al producției de plastic cu automatizare inteligentă și monitorizare în timp real.",
    features: [
      {
        icon: Settings2,
        title: "Gestionarea matrițelor",
        desc: "Urmărire completă a ciclului de viață al matriței inclusiv programe de întreținere, contoare de lovituri și performanța cavităților",
      },
      {
        icon: Timer,
        title: "Optimizarea timpului de ciclu",
        desc: "Monitorizare în timp real și optimizare AI a timpilor de ciclu pentru turnare prin injecție",
      },
      {
        icon: Recycle,
        title: "Urmărirea reciclării materialelor",
        desc: "Urmăriți utilizarea materialului măcinat, raporturile de amestecare și conformitatea conținutului reciclat",
      },
      {
        icon: Thermometer,
        title: "Parametri de proces",
        desc: "Monitorizați temperatura, presiunea, viteza și alți parametri critici de turnare",
      },
      {
        icon: Gauge,
        title: "Parametri de calitate",
        desc: "Verificări automate de calitate cu control statistic al procesului și urmărirea defectelor",
      },
      {
        icon: Layers,
        title: "Controlul uscării materialelor",
        desc: "Gestionați timpii de uscare a materialelor, temperaturile și verificarea conținutului de umiditate",
      },
    ],
    benefits: [
      "Reduceți timpii de ciclu menținând calitatea",
      "Minimizați deșeurile și maximizați eficiența materialelor",
      "Prelungiți durata de viață a matriței cu întreținere predictivă",
      "Urmăriți conformitatea de reglementare pentru conținutul reciclat",
      "Optimizați consumul de energie per piesă",
    ],
    ctaTitle: "Transformați operațiunile dvs. de plastic",
    ctaDesc: "Vedeți cum InduCore vă poate optimiza procesele de turnare prin injecție",
    ctaButton: "Programează un demo",
    backToSolutions: "Înapoi la soluții",
    keyBenefits: "Beneficii cheie",
    processExcellence: "Excelență în proces",
    processDesc: "Control complet al procesului pentru turnare prin injecție cu monitorizarea în timp real a tuturor parametrilor critici.",
    moldTracking: "Urmărirea matrițelor",
    cycleMonitoring: "Monitorizarea ciclului",
  },
};

export default function ICPlasticsPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Boxes className="w-5 h-5 text-rose-300" />
              <span className="text-rose-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto mb-10">
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
                  <div className="text-rose-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 px-8">
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
                  <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-rose-700 dark:text-rose-400" />
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
                    <CheckCircle2 className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl p-8 text-white">
                <Boxes className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">{t.processExcellence}</h3>
                <p className="text-rose-100 mb-6">
                  {t.processDesc}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Settings2 className="w-5 h-5" />
                    <span className="text-sm">{t.moldTracking}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5" />
                    <span className="text-sm">{t.cycleMonitoring}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 px-8">
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
