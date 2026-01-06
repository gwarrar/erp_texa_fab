import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Truck,
  Ship,
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Route,
  User,
  Phone,
  FileText,
  AlertTriangle,
  Navigation,
  Calendar,
  Boxes,
  Building2,
  Star,
  Zap
} from "lucide-react";

function ShippingContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: Truck,
      title: { ar: "إدارة أسطول السائقين", en: "Driver Fleet Management", ru: "Управление автопарком", uk: "Управління автопарком", ro: "Gestionarea flotei", pl: "Zarządzanie flotą", it: "Gestione flotta", tr: "Sürücü Filosu Yönetimi" },
      desc: { ar: "تتبع جميع السائقين ومركباتهم وجدول الرحلات", en: "Track all drivers, their vehicles, and trip schedules", ru: "Отслеживание всех водителей, их транспорта и расписания", uk: "Відстеження всіх водіїв, їх транспорту та розкладу", ro: "Urmăriți toți șoferii, vehiculele și programele", pl: "Śledź wszystkich kierowców, pojazdy i harmonogramy", it: "Traccia tutti i conducenti, veicoli e programmi", tr: "Tüm sürücüleri, araçları ve programları takip edin" },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Route,
      title: { ar: "تخطيط المسارات", en: "Route Planning", ru: "Планирование маршрутов", uk: "Планування маршрутів", ro: "Planificarea rutelor", pl: "Planowanie tras", it: "Pianificazione percorsi", tr: "Rota Planlama" },
      desc: { ar: "تخطيط أمثل للمسارات لتوفير الوقت والتكلفة", en: "Optimal route planning to save time and costs", ru: "Оптимальное планирование маршрутов для экономии времени и затрат", uk: "Оптимальне планування маршрутів для економії часу та витрат", ro: "Planificare optimă a rutelor pentru economie de timp și costuri", pl: "Optymalne planowanie tras dla oszczędności czasu i kosztów", it: "Pianificazione ottimale dei percorsi per risparmiare tempo e costi", tr: "Zaman ve maliyet tasarrufu için optimal rota planlama" },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: { ar: "التتبع المباشر", en: "Live Tracking", ru: "Отслеживание в реальном времени", uk: "Відстеження в реальному часі", ro: "Urmărire în timp real", pl: "Śledzenie na żywo", it: "Tracciamento in tempo reale", tr: "Canlı Takip" },
      desc: { ar: "تتبع الشحنات في الوقت الفعلي على الخريطة", en: "Track shipments in real-time on the map", ru: "Отслеживание отправлений в реальном времени на карте", uk: "Відстеження відправлень в реальному часі на карті", ro: "Urmăriți expedierile în timp real pe hartă", pl: "Śledź przesyłki w czasie rzeczywistym na mapie", it: "Traccia le spedizioni in tempo reale sulla mappa", tr: "Sevkiyatları harita üzerinde gerçek zamanlı takip edin" },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: { ar: "إثبات التسليم", en: "Proof of Delivery", ru: "Подтверждение доставки", uk: "Підтвердження доставки", ro: "Dovada livrării", pl: "Dowód dostawy", it: "Prova di consegna", tr: "Teslimat Kanıtı" },
      desc: { ar: "توقيع إلكتروني وصور لتأكيد التسليم", en: "Electronic signature and photos to confirm delivery", ru: "Электронная подпись и фото для подтверждения доставки", uk: "Електронний підпис та фото для підтвердження доставки", ro: "Semnătură electronică și fotografii pentru confirmarea livrării", pl: "Podpis elektroniczny i zdjęcia potwierdzające dostawę", it: "Firma elettronica e foto per confermare la consegna", tr: "Teslimatı onaylamak için elektronik imza ve fotoğraflar" },
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: AlertTriangle,
      title: { ar: "إدارة المرتجعات", en: "Returns Management", ru: "Управление возвратами", uk: "Управління поверненнями", ro: "Gestionarea retururilor", pl: "Zarządzanie zwrotami", it: "Gestione resi", tr: "İade Yönetimi" },
      desc: { ar: "تتبع المرتجعات والتوصيلات الفاشلة", en: "Track returns and failed deliveries", ru: "Отслеживание возвратов и неудачных доставок", uk: "Відстеження повернень та невдалих доставок", ro: "Urmăriți retururile și livrările eșuate", pl: "Śledź zwroty i nieudane dostawy", it: "Traccia resi e consegne fallite", tr: "İadeleri ve başarısız teslimatları takip edin" },
      color: "from-red-500 to-red-600"
    },
    {
      icon: Calendar,
      title: { ar: "جدولة التوصيلات", en: "Delivery Scheduling", ru: "Планирование доставок", uk: "Планування доставок", ro: "Programarea livrărilor", pl: "Planowanie dostaw", it: "Pianificazione consegne", tr: "Teslimat Planlaması" },
      desc: { ar: "جدولة التوصيلات حسب المنطقة والأولوية", en: "Schedule deliveries by zone and priority", ru: "Планирование доставок по зонам и приоритетам", uk: "Планування доставок за зонами та пріоритетами", ro: "Programați livrările după zonă și prioritate", pl: "Planuj dostawy według strefy i priorytetu", it: "Pianifica le consegne per zona e priorità", tr: "Bölge ve önceliğe göre teslimatları planlayın" },
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const shipmentStatuses = [
    { 
      status: { ar: "قيد التحضير", en: "Preparing", ru: "Подготовка", uk: "Підготовка", ro: "În pregătire", pl: "W przygotowaniu", it: "In preparazione", tr: "Hazırlanıyor" },
      count: 24, 
      color: "bg-amber-100 text-amber-600",
      icon: Package 
    },
    { 
      status: { ar: "في الطريق", en: "In Transit", ru: "В пути", uk: "В дорозі", ro: "În tranzit", pl: "W transporcie", it: "In transito", tr: "Yolda" },
      count: 18, 
      color: "bg-blue-100 text-blue-600",
      icon: Truck 
    },
    { 
      status: { ar: "تم التوصيل", en: "Delivered", ru: "Доставлено", uk: "Доставлено", ro: "Livrat", pl: "Dostarczono", it: "Consegnato", tr: "Teslim Edildi" },
      count: 156, 
      color: "bg-emerald-100 text-emerald-600",
      icon: CheckCircle2 
    },
    { 
      status: "مرتجع", 
      statusEn: "Returned",
      count: 3, 
      color: "bg-red-100 text-red-600",
      icon: AlertTriangle 
    }
  ];

  const drivers = [
    {
      name: "محمد أحمد",
      nameEn: "Mohammed Ahmed",
      status: "في مهمة",
      statusEn: "On Duty",
      trips: 12,
      rating: 4.9,
      vehicle: "شاحنة صغيرة"
    },
    {
      name: "عبدالله سعيد",
      nameEn: "Abdullah Saeed",
      status: "متاح",
      statusEn: "Available",
      trips: 8,
      rating: 4.8,
      vehicle: "فان كبير"
    },
    {
      name: "خالد محمود",
      nameEn: "Khaled Mahmoud",
      status: "في مهمة",
      statusEn: "On Duty",
      trips: 15,
      rating: 4.7,
      vehicle: "شاحنة"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Truck className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {getText({ ar: "إدارة الشحن والتوصيل", en: "Shipping & Delivery Management", ru: "Управление доставкой", uk: "Управління доставкою", ro: "Gestionarea livrărilor", pl: "Zarządzanie dostawami", it: "Gestione spedizioni", tr: "Sevkiyat ve Teslimat Yönetimi" })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>توصيل أسرع <span className="text-blue-500">تتبع أدق</span></>
              ) : (
                <>
                  {getText({ en: "Faster Delivery ", ru: "Быстрая доставка ", uk: "Швидша доставка ", ro: "Livrare mai rapidă ", pl: "Szybsza dostawa ", it: "Consegna più veloce ", tr: "Daha Hızlı Teslimat " })}
                  <span className="text-blue-500">
                    {getText({ en: "Precise Tracking", ru: "Точное отслеживание", uk: "Точне відстеження", ro: "Urmărire precisă", pl: "Dokładne śledzenie", it: "Tracciamento preciso", tr: "Hassas Takip" })}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({
                ar: "نظام متكامل لإدارة الشحن والتوصيل مع تتبع مباشر للسائقين والشحنات",
                en: "Complete shipping and delivery management system with live tracking of drivers and shipments",
                ru: "Полная система управления доставкой с отслеживанием водителей и грузов в реальном времени",
                uk: "Повна система управління доставкою з відстеженням водіїв та вантажів в реальному часі",
                ro: "Sistem complet de gestionare a livrărilor cu urmărire în timp real a șoferilor și expedierilor",
                pl: "Kompletny system zarządzania dostawami ze śledzeniem kierowców i przesyłek na żywo",
                it: "Sistema completo di gestione spedizioni con tracciamento in tempo reale di conducenti e spedizioni",
                tr: "Sürücülerin ve sevkiyatların canlı takibiyle eksiksiz sevkiyat ve teslimat yönetim sistemi"
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                  {getText({ ar: "احجز عرض توضيحي", en: "Book a Demo", ru: "Заказать демо", uk: "Замовити демо", ro: "Rezervă un demo", pl: "Zamów demo", it: "Prenota una demo", tr: "Demo Rezervasyonu" })}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipment Status Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({ ar: "لوحة متابعة الشحنات", en: "Shipment Dashboard", ru: "Панель отслеживания отправлений", uk: "Панель відстеження відправлень", ro: "Tablou de bord expedieri", pl: "Panel śledzenia przesyłek", it: "Dashboard spedizioni", tr: "Sevkiyat Panosu" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {shipmentStatuses.map((item, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {getText(item.status)}
                </p>
                <p className="text-3xl font-bold text-texafab-slate">{item.count}</p>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-xl rounded-3xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-texafab-slate">
                {getText({ ar: "خريطة التتبع المباشر", en: "Live Tracking Map", ru: "Карта отслеживания в реальном времени", uk: "Карта відстеження в реальному часі", ro: "Hartă de urmărire în timp real", pl: "Mapa śledzenia na żywo", it: "Mappa tracciamento in tempo reale", tr: "Canlı Takip Haritası" })}
              </h3>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Navigation className="w-4 h-4 me-2" />
                {getText({ ar: "تحديث الموقع", en: "Refresh Location", ru: "Обновить местоположение", uk: "Оновити місцезнаходження", ro: "Actualizați locația", pl: "Odśwież lokalizację", it: "Aggiorna posizione", tr: "Konumu Yenile" })}
              </Button>
            </div>

            <div className="h-80 bg-white rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-400">
                  {getText({ ar: "خريطة تفاعلية للتتبع المباشر", en: "Interactive Live Tracking Map", ru: "Интерактивная карта отслеживания", uk: "Інтерактивна карта відстеження", ro: "Hartă interactivă de urmărire", pl: "Interaktywna mapa śledzenia", it: "Mappa interattiva di tracciamento", tr: "İnteraktif Canlı Takip Haritası" })}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({ ar: "مميزات نظام الشحن", en: "Shipping System Features", ru: "Функции системы доставки", uk: "Функції системи доставки", ro: "Funcții sistem de livrare", pl: "Funkcje systemu dostaw", it: "Funzionalità sistema spedizioni", tr: "Sevkiyat Sistemi Özellikleri" })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({
                ar: "كل ما تحتاجه لإدارة عمليات الشحن والتوصيل",
                en: "Everything you need to manage shipping and delivery operations",
                ru: "Все необходимое для управления операциями доставки",
                uk: "Все необхідне для управління операціями доставки",
                ro: "Tot ce aveți nevoie pentru a gestiona operațiunile de livrare",
                pl: "Wszystko czego potrzebujesz do zarządzania operacjami dostawy",
                it: "Tutto ciò di cui hai bisogno per gestire le operazioni di spedizione",
                tr: "Sevkiyat ve teslimat operasyonlarını yönetmek için ihtiyacınız olan her şey"
              })}
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

      {/* Driver Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <User className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {getText({ ar: "إدارة السائقين", en: "Driver Management", ru: "Управление водителями", uk: "Управління водіями", ro: "Gestionarea șoferilor", pl: "Zarządzanie kierowcami", it: "Gestione conducenti", tr: "Sürücü Yönetimi" })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({ ar: "تتبع فريق التوصيل الخاص بك", en: "Track Your Delivery Team", ru: "Отслеживайте команду доставки", uk: "Відстежуйте команду доставки", ro: "Urmăriți echipa de livrare", pl: "Śledź swój zespół dostawy", it: "Traccia il tuo team di consegna", tr: "Teslimat Ekibinizi Takip Edin" })}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {getText({
                  ar: "إدارة شاملة لأسطول السائقين مع تتبع الأداء وجدولة المهام",
                  en: "Complete driver fleet management with performance tracking and task scheduling",
                  ru: "Полное управление автопарком водителей с отслеживанием производительности и планированием задач",
                  uk: "Повне управління автопарком водіїв з відстеженням продуктивності та плануванням завдань",
                  ro: "Gestionare completă a flotei de șoferi cu urmărirea performanței și programarea sarcinilor",
                  pl: "Pełne zarządzanie flotą kierowców ze śledzeniem wydajności i planowaniem zadań",
                  it: "Gestione completa della flotta conducenti con monitoraggio prestazioni e pianificazione attività",
                  tr: "Performans takibi ve görev planlaması ile eksiksiz sürücü filosu yönetimi"
                })}
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  { ar: "تتبع موقع السائق المباشر", en: "Live driver location tracking", ru: "Отслеживание местоположения водителя", uk: "Відстеження місцезнаходження водія", ro: "Urmărirea locației șoferului", pl: "Śledzenie lokalizacji kierowcy", it: "Tracciamento posizione conducente", tr: "Canlı sürücü konum takibi" },
                  { ar: "تقييم أداء السائقين", en: "Driver performance rating", ru: "Оценка производительности водителей", uk: "Оцінка продуктивності водіїв", ro: "Evaluarea performanței șoferilor", pl: "Ocena wydajności kierowców", it: "Valutazione prestazioni conducenti", tr: "Sürücü performans değerlendirmesi" },
                  { ar: "جدولة الرحلات الذكية", en: "Smart trip scheduling", ru: "Умное планирование рейсов", uk: "Розумне планування рейсів", ro: "Programare inteligentă a curselor", pl: "Inteligentne planowanie tras", it: "Pianificazione intelligente viaggi", tr: "Akıllı seyahat planlaması" },
                  { ar: "إدارة المركبات والصيانة", en: "Vehicle and maintenance management", ru: "Управление транспортом и обслуживанием", uk: "Управління транспортом та обслуговуванням", ro: "Gestionarea vehiculelor și întreținerii", pl: "Zarządzanie pojazdami i konserwacją", it: "Gestione veicoli e manutenzione", tr: "Araç ve bakım yönetimi" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{getText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <h3 className="text-lg font-bold text-texafab-slate mb-4">
                {getText({ ar: "السائقون المتاحون", en: "Available Drivers", ru: "Доступные водители", uk: "Доступні водії", ro: "Șoferi disponibili", pl: "Dostępni kierowcy", it: "Conducenti disponibili", tr: "Mevcut Sürücüler" })}
              </h3>

              <div className="space-y-4">
                {drivers.map((driver, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-texafab-slate">
                          {language === "ar" ? driver.name : driver.nameEn}
                        </p>
                        <p className="text-sm text-gray-500">{driver.vehicle}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        driver.status === "متاح" ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"
                      }`}>
                        {language === "ar" ? driver.status : driver.statusEn}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-sm text-gray-600">{driver.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 rounded-xl" variant="outline">
                {getText({ ar: "عرض جميع السائقين", en: "View All Drivers", ru: "Все водители", uk: "Всі водії", ro: "Vezi toți șoferii", pl: "Zobacz wszystkich kierowców", it: "Vedi tutti i conducenti", tr: "Tüm Sürücüleri Gör" })}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText({ ar: "فوائد نظام الشحن", en: "Shipping System Benefits", ru: "Преимущества системы доставки", uk: "Переваги системи доставки", ro: "Beneficiile sistemului de livrare", pl: "Korzyści systemu dostaw", it: "Vantaggi sistema spedizioni", tr: "Sevkiyat Sistemi Avantajları" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: { ar: "توصيل أسرع", en: "Faster Delivery", ru: "Быстрая доставка", uk: "Швидша доставка", ro: "Livrare mai rapidă", pl: "Szybsza dostawa", it: "Consegna più veloce", tr: "Daha Hızlı Teslimat" },
                desc: { ar: "تقليل وقت التوصيل بنسبة 40%", en: "Reduce delivery time by 40%", ru: "Сокращение времени доставки на 40%", uk: "Скорочення часу доставки на 40%", ro: "Reduceți timpul de livrare cu 40%", pl: "Skróć czas dostawy o 40%", it: "Riduci i tempi di consegna del 40%", tr: "Teslimat süresini %40 azaltın" }
              },
              {
                icon: MapPin,
                title: { ar: "تتبع دقيق", en: "Precise Tracking", ru: "Точное отслеживание", uk: "Точне відстеження", ro: "Urmărire precisă", pl: "Dokładne śledzenie", it: "Tracciamento preciso", tr: "Hassas Takip" },
                desc: { ar: "معرفة موقع كل شحنة في أي وقت", en: "Know the location of every shipment anytime", ru: "Знайте местоположение каждой отправки в любое время", uk: "Знайте місцезнаходження кожної відправки в будь-який час", ro: "Cunoașteți locația fiecărei expedieri oricând", pl: "Znaj lokalizację każdej przesyłki w dowolnym momencie", it: "Conosci la posizione di ogni spedizione in qualsiasi momento", tr: "Her sevkiyatın konumunu her an bilin" }
              },
              {
                icon: Building2,
                title: { ar: "تغطية أوسع", en: "Wider Coverage", ru: "Более широкий охват", uk: "Ширше охоплення", ro: "Acoperire mai largă", pl: "Szerszy zasięg", it: "Copertura più ampia", tr: "Daha Geniş Kapsam" },
                desc: { ar: "إدارة التوصيل لمناطق متعددة", en: "Manage delivery to multiple areas", ru: "Управление доставкой в несколько регионов", uk: "Управління доставкою в кілька регіонів", ro: "Gestionați livrarea în mai multe zone", pl: "Zarządzaj dostawą do wielu obszarów", it: "Gestisci le consegne in più aree", tr: "Birden fazla bölgeye teslimatı yönetin" }
              },
              {
                icon: CheckCircle2,
                title: { ar: "رضا العملاء", en: "Customer Satisfaction", ru: "Удовлетворенность клиентов", uk: "Задоволеність клієнтів", ro: "Satisfacția clienților", pl: "Satysfakcja klientów", it: "Soddisfazione del cliente", tr: "Müşteri Memnuniyeti" },
                desc: { ar: "تحسين تجربة العميل بشكل ملحوظ", en: "Significantly improve customer experience", ru: "Значительно улучшите клиентский опыт", uk: "Значно покращте клієнтський досвід", ro: "Îmbunătățiți semnificativ experiența clientului", pl: "Znacząco popraw doświadczenie klienta", it: "Migliora significativamente l'esperienza del cliente", tr: "Müşteri deneyimini önemli ölçüde iyileştirin" }
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {getText(item.title)}
                </h3>
                <p className="text-white/70">
                  {getText(item.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ShippingPage() {
  return <ShippingContent />;
}
