import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Factory,
  Settings,
  Layers,
  Package,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Zap,
  AlertTriangle,
  Wrench,
  Gauge,
  Target,
  TrendingUp,
  FileText,
  Cog,
  Box,
  Scale,
  Thermometer
} from "lucide-react";

function FabricManufacturingContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: ClipboardList,
      title: { ar: "أوامر الإنتاج", en: "Production Orders", ru: "Производственные заказы", uk: "Виробничі замовлення", ro: "Comenzi de producție", pl: "Zlecenia produkcyjne", tr: "Üretim Siparişleri" },
      desc: { ar: "إنشاء وإدارة أوامر الإنتاج مع تتبع كامل للحالة والتقدم", en: "Create and manage production orders with full status and progress tracking", ru: "Создание и управление производственными заказами с полным отслеживанием статуса и прогресса", uk: "Створення та управління виробничими замовленнями з повним відстеженням статусу та прогресу", ro: "Creați și gestionați comenzile de producție cu urmărire completă a statutului și progresului", pl: "Twórz i zarządzaj zleceniami produkcyjnymi z pełnym śledzeniem statusu i postępu", tr: "Tam durum ve ilerleme takibi ile üretim siparişleri oluşturun ve yönetin" },
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Cog,
      title: { ar: "إدارة خطوط الإنتاج", en: "Production Line Management", ru: "Управление производственными линиями", uk: "Управління виробничими лініями", ro: "Gestionarea liniilor de producție", pl: "Zarządzanie liniami produkcyjnymi", tr: "Üretim Hattı Yönetimi" },
      desc: { ar: "تخصيص وجدولة خطوط الإنتاج لتحقيق أقصى كفاءة", en: "Allocate and schedule production lines for maximum efficiency", ru: "Распределение и планирование производственных линий для максимальной эффективности", uk: "Розподіл та планування виробничих ліній для максимальної ефективності", ro: "Alocați și programați liniile de producție pentru eficiență maximă", pl: "Przydzielaj i planuj linie produkcyjne dla maksymalnej wydajności", tr: "Maksimum verimlilik için üretim hatlarını tahsis edin ve planlayın" },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Box,
      title: { ar: "تتبع المواد الخام", en: "Raw Material Tracking", ru: "Отслеживание сырья", uk: "Відстеження сировини", ro: "Urmărirea materiilor prime", pl: "Śledzenie surowców", tr: "Hammadde Takibi" },
      desc: { ar: "مراقبة المواد الخام من الاستلام حتى استخدامها في الإنتاج", en: "Monitor raw materials from receipt to use in production", ru: "Мониторинг сырья от получения до использования в производстве", uk: "Моніторинг сировини від отримання до використання у виробництві", ro: "Monitorizați materiile prime de la primire până la utilizare în producție", pl: "Monitoruj surowce od odbioru do wykorzystania w produkcji", tr: "Hammaddeleri teslim almadan üretime kullanmaya kadar izleyin" },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: { ar: "جدولة الإنتاج", en: "Production Scheduling", ru: "Планирование производства", uk: "Планування виробництва", ro: "Programarea producției", pl: "Planowanie produkcji", tr: "Üretim Planlaması" },
      desc: { ar: "تخطيط وجدولة ذكية للإنتاج مع تحسين استغلال الموارد", en: "Smart planning and scheduling with resource optimization", ru: "Умное планирование с оптимизацией ресурсов", uk: "Розумне планування з оптимізацією ресурсів", ro: "Planificare inteligentă cu optimizarea resurselor", pl: "Inteligentne planowanie z optymalizacją zasobów", tr: "Kaynak optimizasyonu ile akıllı planlama" },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      title: { ar: "مراقبة الجودة", en: "Quality Control", ru: "Контроль качества", uk: "Контроль якості", ro: "Controlul calității", pl: "Kontrola jakości", tr: "Kalite Kontrol" },
      desc: { ar: "فحوصات جودة في كل مرحلة مع توثيق النتائج", en: "Quality checks at every stage with documented results", ru: "Проверка качества на каждом этапе с документированием результатов", uk: "Перевірка якості на кожному етапі з документуванням результатів", ro: "Verificări de calitate la fiecare etapă cu rezultate documentate", pl: "Kontrole jakości na każdym etapie z udokumentowanymi wynikami", tr: "Her aşamada kalite kontrolleri ve belgelenmiş sonuçlar" },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Scale,
      title: { ar: "حساب تكاليف التصنيع", en: "Manufacturing Cost", ru: "Производственные затраты", uk: "Виробничі витрати", ro: "Costuri de fabricație", pl: "Koszty produkcji", tr: "Üretim Maliyeti" },
      desc: { ar: "حساب دقيق لتكلفة الإنتاج شاملة المواد والعمالة والنفقات", en: "Accurate production cost calculation including materials, labor, and overhead", ru: "Точный расчет производственных затрат включая материалы, труд и накладные расходы", uk: "Точний розрахунок виробничих витрат включаючи матеріали, працю та накладні витрати", ro: "Calculul precis al costurilor de producție incluzând materiale, forță de muncă și cheltuieli generale", pl: "Dokładne obliczanie kosztów produkcji włącznie z materiałami, pracą i kosztami ogólnymi", tr: "Malzeme, işçilik ve genel giderler dahil doğru üretim maliyeti hesaplaması" },
      color: "from-red-500 to-red-600"
    }
  ];

  const productionStages = [
    { title: { ar: "استلام المواد الخام", en: "Raw Material Receipt", ru: "Приемка сырья", uk: "Приймання сировини", ro: "Recepție materii prime", pl: "Przyjęcie surowców", tr: "Hammadde Teslim Alma" }, icon: Package },
    { title: { ar: "فحص الجودة الأولي", en: "Initial Quality Check", ru: "Первичный контроль качества", uk: "Первинний контроль якості", ro: "Control inițial al calității", pl: "Wstępna kontrola jakości", tr: "İlk Kalite Kontrolü" }, icon: Target },
    { title: { ar: "التحضير والتجهيز", en: "Preparation", ru: "Подготовка", uk: "Підготовка", ro: "Pregătire", pl: "Przygotowanie", tr: "Hazırlık" }, icon: Settings },
    { title: { ar: "النسج / الحياكة", en: "Weaving / Knitting", ru: "Ткачество / Вязание", uk: "Ткацтво / В'язання", ro: "Țesere / Tricotat", pl: "Tkanie / Dzianie", tr: "Dokuma / Örme" }, icon: Layers },
    { title: { ar: "الصباغة والتشطيب", en: "Dyeing & Finishing", ru: "Крашение и отделка", uk: "Фарбування та оздоблення", ro: "Vopsire și finisare", pl: "Barwienie i wykańczanie", tr: "Boyama ve Finisaj" }, icon: Thermometer },
    { title: { ar: "الفحص النهائي", en: "Final Inspection", ru: "Финальная проверка", uk: "Фінальна перевірка", ro: "Inspecție finală", pl: "Końcowa kontrola", tr: "Son Muayene" }, icon: CheckCircle2 },
    { title: { ar: "التعبئة والتغليف", en: "Packaging", ru: "Упаковка", uk: "Пакування", ro: "Ambalare", pl: "Pakowanie", tr: "Paketleme" }, icon: Box },
    { title: { ar: "التخزين والشحن", en: "Storage & Shipping", ru: "Хранение и отгрузка", uk: "Зберігання та відвантаження", ro: "Depozitare și expediere", pl: "Magazynowanie i wysyłka", tr: "Depolama ve Sevkiyat" }, icon: Factory }
  ];

  const kpis = [
    { title: { ar: "كفاءة الإنتاج", en: "Production Efficiency", ru: "Эффективность производства", uk: "Ефективність виробництва", ro: "Eficiența producției", pl: "Wydajność produkcji", tr: "Üretim Verimliliği" }, value: "94%", trend: "+5%" },
    { title: { ar: "معدل الجودة", en: "Quality Rate", ru: "Показатель качества", uk: "Показник якості", ro: "Rata de calitate", pl: "Wskaźnik jakości", tr: "Kalite Oranı" }, value: "98.5%", trend: "+2%" },
    { title: { ar: "وقت التسليم", en: "Delivery Time", ru: "Время доставки", uk: "Час доставки", ro: "Timp de livrare", pl: "Czas dostawy", tr: "Teslimat Süresi" }, value: "3", trend: "-1" },
    { title: { ar: "الهدر", en: "Waste", ru: "Отходы", uk: "Відходи", ro: "Deșeuri", pl: "Odpady", tr: "Atık" }, value: "2.1%", trend: "-0.5%" }
  ];

  const pageText = {
    badge: { ar: "إدارة تصنيع الأقمشة", en: "Fabric Manufacturing", ru: "Производство тканей", uk: "Виробництво тканин", ro: "Fabricarea țesăturilor", pl: "Produkcja tkanin", tr: "Kumaş Üretimi" },
    heroTitle1: { ar: "تصنيع أقمشة", en: "Professional", ru: "Профессиональное", uk: "Професійне", ro: "Fabricare profesională", pl: "Profesjonalna", tr: "Profesyonel" },
    heroTitle2: { ar: "باحترافية", en: "Fabric Manufacturing", ru: "производство тканей", uk: "виробництво тканин", ro: "a țesăturilor", pl: "produkcja tkanin", tr: "Kumaş Üretimi" },
    heroDesc: { ar: "نظام متكامل لإدارة مصانع الأقمشة من المواد الخام إلى المنتج النهائي", en: "Complete system for managing fabric factories from raw materials to finished products", ru: "Комплексная система управления тканевыми фабриками от сырья до готовой продукции", uk: "Комплексна система управління тканинними фабриками від сировини до готової продукції", ro: "Sistem complet pentru gestionarea fabricilor de țesături de la materii prime la produse finite", pl: "Kompletny system do zarządzania fabrykami tkanin od surowców do gotowych produktów", tr: "Hammaddelerden bitmiş ürünlere kadar kumaş fabrikalarını yönetmek için eksiksiz sistem" },
    featuresTitle: { ar: "مميزات إدارة التصنيع", en: "Manufacturing Management Features", ru: "Функции управления производством", uk: "Функції управління виробництвом", ro: "Caracteristici de gestionare a producției", pl: "Funkcje zarządzania produkcją", tr: "Üretim Yönetimi Özellikleri" },
    featuresDesc: { ar: "أدوات متقدمة لإدارة عمليات تصنيع الأقمشة", en: "Advanced tools for managing fabric manufacturing operations", ru: "Передовые инструменты для управления операциями по производству тканей", uk: "Передові інструменти для управління операціями з виробництва тканин", ro: "Instrumente avansate pentru gestionarea operațiunilor de fabricare a țesăturilor", pl: "Zaawansowane narzędzia do zarządzania operacjami produkcji tkanin", tr: "Kumaş üretim operasyonlarını yönetmek için gelişmiş araçlar" },
    productionStages: { ar: "مراحل الإنتاج", en: "Production Stages", ru: "Этапы производства", uk: "Етапи виробництва", ro: "Etape de producție", pl: "Etapy produkcji", tr: "Üretim Aşamaları" },
    bookDemo: { ar: "احجز عرض توضيحي", en: "Book a Demo", ru: "Заказать демо", uk: "Замовити демо", ro: "Rezervă o demonstrație", pl: "Zarezerwuj demo", tr: "Demo Rezervasyonu" }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Factory className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-semibold text-indigo-600">
                {getText(pageText.badge)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(pageText.heroTitle1)} <span className="text-indigo-500">{getText(pageText.heroTitle2)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(pageText.heroDesc)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-indigo-500 hover:bg-indigo-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-indigo-500/25">
                  {getText(pageText.bookDemo)}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <p className="text-3xl font-black text-indigo-500 mb-1">{kpi.value}</p>
                <p className="font-semibold text-texafab-slate text-sm mb-1">
                  {getText(kpi.title)}
                </p>
                <p className="text-xs text-emerald-600 font-medium">{kpi.trend}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(pageText.featuresTitle)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText(pageText.featuresDesc)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(feature.title)}
                </h3>
                <p className="text-gray-600">
                  {getText(feature.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(pageText.productionStages)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productionStages.map((stage, index) => (
              <Card key={index} className="p-4 bg-white border-2 border-indigo-100 rounded-xl hover:border-indigo-300 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <stage.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-texafab-slate">
                  {getText(stage.title)}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {language === "ar" ? "صيانة المعدات" : "Equipment Maintenance"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "ar" ? "إدارة صيانة المعدات" : "Equipment Maintenance Management"}
              </h2>

              <p className="text-lg text-white/80 mb-6">
                {language === "ar" 
                  ? "صيانة وقائية ذكية لتجنب الأعطال وضمان استمرارية الإنتاج"
                  : "Smart preventive maintenance to avoid breakdowns and ensure production continuity"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "جدولة الصيانة الدورية", en: "Scheduled preventive maintenance" },
                  { ar: "تنبيهات الصيانة التلقائية", en: "Auto maintenance alerts" },
                  { ar: "سجل كامل للأعطال والإصلاحات", en: "Complete breakdown and repair log" },
                  { ar: "تتبع قطع الغيار", en: "Spare parts tracking" },
                  { ar: "تقارير كفاءة المعدات OEE", en: "OEE equipment efficiency reports" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <Gauge className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white/60 text-sm">{language === "ar" ? "المعدات العاملة" : "Active Equipment"}</p>
                    <p className="text-2xl font-bold text-white">24/25</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <AlertTriangle className="w-8 h-8 text-amber-400 mb-2" />
                    <p className="text-white/60 text-sm">{language === "ar" ? "تحتاج صيانة" : "Need Maintenance"}</p>
                    <p className="text-2xl font-bold text-white">3</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-white/60 text-sm mb-2">{language === "ar" ? "الصيانة القادمة" : "Next Maintenance"}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Loom Machine #5</span>
                    <span className="text-amber-400 text-sm">3 days</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FabricManufacturingPage() {
  return <FabricManufacturingContent />;
}
