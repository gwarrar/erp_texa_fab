import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shirt,
  Scissors,
  Layers,
  Package,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Ruler,
  Palette,
  Users,
  Scale,
  Target,
  FileText,
  Settings,
  Box,
  TrendingUp,
  Zap
} from "lucide-react";

function GarmentManufacturingContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: FileText,
      title: { ar: "BOM - قائمة المواد", en: "Bill of Materials (BOM)", ru: "Спецификация материалов", uk: "Специфікація матеріалів", ro: "Lista de materiale", pl: "Lista materiałów", tr: "Malzeme Listesi" },
      desc: { ar: "قائمة مواد تفصيلية لكل منتج مع الكميات والتكاليف", en: "Detailed material list for each product with quantities and costs", ru: "Детальный список материалов для каждого продукта с количествами и затратами", uk: "Детальний список матеріалів для кожного продукту з кількостями та витратами", ro: "Lista detaliată de materiale pentru fiecare produs cu cantități și costuri", pl: "Szczegółowa lista materiałów dla każdego produktu z ilościami i kosztami", tr: "Her ürün için miktar ve maliyetlerle detaylı malzeme listesi" },
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Ruler,
      title: { ar: "إدارة المقاسات والألوان", en: "Size & Color Management", ru: "Управление размерами и цветами", uk: "Управління розмірами та кольорами", ro: "Gestionarea mărimilor și culorilor", pl: "Zarządzanie rozmiarami i kolorami", tr: "Beden ve Renk Yönetimi" },
      desc: { ar: "إدارة شاملة للمقاسات والألوان مع مصفوفة SKU ذكية", en: "Comprehensive size and color management with smart SKU matrix", ru: "Комплексное управление размерами и цветами с умной матрицей SKU", uk: "Комплексне управління розмірами та кольорами з розумною матрицею SKU", ro: "Gestionare cuprinzătoare a mărimilor și culorilor cu matrice SKU inteligentă", pl: "Kompleksowe zarządzanie rozmiarami i kolorami z inteligentną matrycą SKU", tr: "Akıllı SKU matrisi ile kapsamlı beden ve renk yönetimi" },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Scissors,
      title: { ar: "تتبع مراحل التصنيع", en: "Manufacturing Stage Tracking", ru: "Отслеживание этапов производства", uk: "Відстеження етапів виробництва", ro: "Urmărirea etapelor de fabricație", pl: "Śledzenie etapów produkcji", tr: "Üretim Aşaması Takibi" },
      desc: { ar: "تتبع كل قطعة من القص للخياطة للتشطيب والتعبئة", en: "Track each piece from cutting to sewing to finishing and packing", ru: "Отслеживайте каждую деталь от раскроя до шитья, отделки и упаковки", uk: "Відстежуйте кожну деталь від розкрою до шиття, оздоблення та пакування", ro: "Urmăriți fiecare piesă de la tăiere la cusut, finisare și ambalare", pl: "Śledź każdą sztukę od krojenia przez szycie do wykończenia i pakowania", tr: "Her parçayı kesimden dikişe, bitişe ve paketlemeye kadar takip edin" },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: { ar: "إدارة العمال والورشات", en: "Workers & Workshops", ru: "Работники и мастерские", uk: "Працівники та майстерні", ro: "Muncitori și ateliere", pl: "Pracownicy i warsztaty", tr: "İşçiler ve Atölyeler" },
      desc: { ar: "توزيع العمل على الورشات وتتبع إنتاجية كل عامل", en: "Distribute work to workshops and track each worker's productivity", ru: "Распределяйте работу по мастерским и отслеживайте производительность каждого работника", uk: "Розподіляйте роботу по майстерням та відстежуйте продуктивність кожного працівника", ro: "Distribuiți munca către ateliere și urmăriți productivitatea fiecărui muncitor", pl: "Rozdzielaj pracę do warsztatów i śledź produktywność każdego pracownika", tr: "İşi atölyelere dağıtın ve her işçinin verimliliğini takip edin" },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Scale,
      title: { ar: "حساب تكلفة القطعة", en: "Per-Piece Costing", ru: "Расчет стоимости за штуку", uk: "Розрахунок вартості за штуку", ro: "Costul pe bucată", pl: "Koszt za sztukę", tr: "Parça Başına Maliyet" },
      desc: { ar: "حساب دقيق لتكلفة كل قطعة شاملة المواد والعمالة", en: "Accurate per-piece cost calculation including materials and labor", ru: "Точный расчет стоимости за штуку включая материалы и работу", uk: "Точний розрахунок вартості за штуку включаючи матеріали та роботу", ro: "Calculul precis al costului pe bucată incluzând materiale și manoperă", pl: "Dokładne obliczenie kosztu za sztukę włącznie z materiałami i robocizną", tr: "Malzeme ve işçilik dahil parça başına doğru maliyet hesaplaması" },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Palette,
      title: { ar: "نظام العينات والموديلات", en: "Samples & Models", ru: "Образцы и модели", uk: "Зразки та моделі", ro: "Mostre și modele", pl: "Próbki i modele", tr: "Numuneler ve Modeller" },
      desc: { ar: "إدارة العينات من التصميم للموافقة للإنتاج", en: "Manage samples from design to approval to production", ru: "Управляйте образцами от дизайна до утверждения и производства", uk: "Керуйте зразками від дизайну до затвердження та виробництва", ro: "Gestionați mostrele de la design la aprobare și producție", pl: "Zarządzaj próbkami od projektu przez zatwierdzenie do produkcji", tr: "Numuneleri tasarımdan onaya ve üretime kadar yönetin" },
      color: "from-pink-500 to-pink-600"
    }
  ];

  const productionStages = [
    { title: { ar: "التصميم والموديل", en: "Design & Model", ru: "Дизайн и модель", uk: "Дизайн та модель", ro: "Design și model", pl: "Projekt i model", tr: "Tasarım ve Model" }, percentage: 100, color: "bg-purple-500" },
    { title: { ar: "القص", en: "Cutting", ru: "Раскрой", uk: "Розкрій", ro: "Tăiere", pl: "Krojenie", tr: "Kesim" }, percentage: 85, color: "bg-blue-500" },
    { title: { ar: "الخياطة", en: "Sewing", ru: "Шитье", uk: "Шиття", ro: "Cusut", pl: "Szycie", tr: "Dikiş" }, percentage: 70, color: "bg-emerald-500" },
    { title: { ar: "التشطيب", en: "Finishing", ru: "Отделка", uk: "Оздоблення", ro: "Finisare", pl: "Wykończenie", tr: "Finisaj" }, percentage: 55, color: "bg-amber-500" },
    { title: { ar: "مراقبة الجودة", en: "Quality Control", ru: "Контроль качества", uk: "Контроль якості", ro: "Controlul calității", pl: "Kontrola jakości", tr: "Kalite Kontrol" }, percentage: 45, color: "bg-red-500" },
    { title: { ar: "الكي والتعبئة", en: "Ironing & Packing", ru: "Глажка и упаковка", uk: "Прасування та пакування", ro: "Călcat și ambalare", pl: "Prasowanie i pakowanie", tr: "Ütüleme ve Paketleme" }, percentage: 30, color: "bg-pink-500" }
  ];

  const stats = [
    { value: "50,000+", label: { ar: "قطعة/شهر", en: "Pieces/Month", ru: "Шт./месяц", uk: "Шт./місяць", ro: "Piese/lună", pl: "Szt./miesiąc", tr: "Adet/Ay" } },
    { value: "98%", label: { ar: "معدل الجودة", en: "Quality Rate", ru: "Показатель качества", uk: "Показник якості", ro: "Rata de calitate", pl: "Wskaźnik jakości", tr: "Kalite Oranı" } },
    { value: "40%", label: { ar: "تقليل الهدر", en: "Waste Reduction", ru: "Сокращение отходов", uk: "Скорочення відходів", ro: "Reducerea deșeurilor", pl: "Redukcja odpadów", tr: "Atık Azaltma" } },
    { value: "2x", label: { ar: "سرعة الإنتاج", en: "Production Speed", ru: "Скорость производства", uk: "Швидкість виробництва", ro: "Viteza producției", pl: "Szybkość produkcji", tr: "Üretim Hızı" } }
  ];

  const pageText = {
    badge: { ar: "إدارة تصنيع الملابس", en: "Garment Manufacturing", ru: "Производство одежды", uk: "Виробництво одягу", ro: "Fabricarea îmbrăcămintei", pl: "Produkcja odzieży", tr: "Giyim Üretimi" },
    heroTitle1: { ar: "تصنيع ملابس", en: "Professional", ru: "Профессиональное", uk: "Професійне", ro: "Fabricare profesională", pl: "Profesjonalna", tr: "Profesyonel" },
    heroTitle2: { ar: "باحترافية", en: "Garment Manufacturing", ru: "производство одежды", uk: "виробництво одягу", ro: "a îmbrăcămintei", pl: "produkcja odzieży", tr: "Giyim Üretimi" },
    heroDesc: { ar: "نظام متكامل لإدارة مصانع الملابس من القص إلى التعبئة مع تتبع كل قطعة", en: "Complete system for managing garment factories from cutting to packing with tracking every piece", ru: "Комплексная система управления швейными фабриками от раскроя до упаковки с отслеживанием каждой детали", uk: "Комплексна система управління швейними фабриками від розкрою до пакування з відстеженням кожної деталі", ro: "Sistem complet pentru gestionarea fabricilor de îmbrăcăminte de la tăiere la ambalare cu urmărirea fiecărei piese", pl: "Kompletny system do zarządzania fabrykami odzieży od krojenia do pakowania ze śledzeniem każdej sztuki", tr: "Her parçanın takibi ile kesimden paketlemeye kadar giyim fabrikalarını yönetmek için eksiksiz sistem" },
    featuresTitle: { ar: "مميزات إدارة تصنيع الملابس", en: "Garment Manufacturing Features", ru: "Функции производства одежды", uk: "Функції виробництва одягу", ro: "Caracteristici de fabricare a îmbrăcămintei", pl: "Funkcje produkcji odzieży", tr: "Giyim Üretimi Özellikleri" },
    featuresDesc: { ar: "أدوات متقدمة لإدارة جميع جوانب تصنيع الملابس", en: "Advanced tools for managing all aspects of garment manufacturing", ru: "Передовые инструменты для управления всеми аспектами производства одежды", uk: "Передові інструменти для управління всіма аспектами виробництва одягу", ro: "Instrumente avansate pentru gestionarea tuturor aspectelor fabricării îmbrăcămintei", pl: "Zaawansowane narzędzia do zarządzania wszystkimi aspektami produkcji odzieży", tr: "Giyim üretiminin tüm yönlerini yönetmek için gelişmiş araçlar" },
    productionStages: { ar: "مراحل الإنتاج الحالية", en: "Current Production Stages", ru: "Текущие этапы производства", uk: "Поточні етапи виробництва", ro: "Etapele actuale de producție", pl: "Aktualne etapy produkcji", tr: "Mevcut Üretim Aşamaları" },
    bookDemo: { ar: "احجز عرض توضيحي", en: "Book a Demo", ru: "Заказать демо", uk: "Замовити демо", ro: "Rezervă o demonstrație", pl: "Zarezerwuj demo", tr: "Demo Rezervasyonu" }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <Shirt className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-600">
                {getText(pageText.badge)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {getText(pageText.heroTitle1)} <span className="text-rose-500">{getText(pageText.heroTitle2)}</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(pageText.heroDesc)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-rose-500 hover:bg-rose-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-rose-500/25">
                  {getText(pageText.bookDemo)}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                <p className="text-3xl font-black text-rose-500 dark:text-rose-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {getText(stat.label)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText(pageText.featuresTitle)}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText(pageText.featuresDesc)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-2">
                  {getText(feature.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {getText(feature.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Tracking */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-600">
                  {language === "ar" ? "تتبع الإنتاج" : "Production Tracking"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
                {language === "ar" ? "تتبع كل مرحلة من الإنتاج" : "Track Every Production Stage"}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {language === "ar" 
                  ? "رؤية كاملة لحالة كل طلب وكل قطعة في خط الإنتاج"
                  : "Complete visibility of every order and piece status in the production line"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تتبع الوقت الفعلي لكل مرحلة", en: "Real-time tracking for each stage" },
                  { ar: "تنبيهات التأخير التلقائية", en: "Automatic delay alerts" },
                  { ar: "تقارير الإنتاجية اليومية", en: "Daily productivity reports" },
                  { ar: "تحليل الكفاءة والهدر", en: "Efficiency and waste analysis" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-gradient-to-br from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 border-0 shadow-xl rounded-3xl">
              <h3 className="text-lg font-bold text-texafab-slate dark:text-white mb-6">
                {language === "ar" ? "حالة الإنتاج - طلب #1234" : "Production Status - Order #1234"}
              </h3>
              
              <div className="space-y-4">
                {productionStages.map((stage, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        {getText(stage.title)}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{stage.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`${stage.color} h-2 rounded-full transition-all`} style={{width: `${stage.percentage}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">{language === "ar" ? "الإجمالي" : "Total"}</span>
                  <span className="font-bold text-texafab-slate dark:text-white">5,000 {language === "ar" ? "قطعة" : "pieces"}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-600 dark:text-gray-300">{language === "ar" ? "التسليم المتوقع" : "Expected Delivery"}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">15 Jan 2025</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Size Matrix */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "مصفوفة المقاسات والألوان" : "Size & Color Matrix"}
            </h2>
            <p className="text-lg text-white/80">
              {language === "ar" ? "إدارة ذكية للتنوعات" : "Smart variation management"}
            </p>
          </div>

          <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-3 text-start">{language === "ar" ? "اللون/المقاس" : "Color/Size"}</th>
                  <th className="p-3 text-center">S</th>
                  <th className="p-3 text-center">M</th>
                  <th className="p-3 text-center">L</th>
                  <th className="p-3 text-center">XL</th>
                  <th className="p-3 text-center">XXL</th>
                  <th className="p-3 text-center">{language === "ar" ? "الإجمالي" : "Total"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { color: language === "ar" ? "أسود" : "Black", sizes: [100, 150, 200, 150, 100], total: 700 },
                  { color: language === "ar" ? "أبيض" : "White", sizes: [80, 120, 180, 120, 80], total: 580 },
                  { color: language === "ar" ? "أزرق" : "Blue", sizes: [60, 100, 150, 100, 60], total: 470 },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="p-3 font-medium">{row.color}</td>
                    {row.sizes.map((size, j) => (
                      <td key={j} className="p-3 text-center text-white/80">{size}</td>
                    ))}
                    <td className="p-3 text-center font-bold text-emerald-400">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function GarmentManufacturingPage() {
  return <GarmentManufacturingContent />;
}
