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
  Calendar, ArrowRight, CheckCircle2, Clock,
  ShoppingCart, Users, Truck, Bell, FileText,
  RefreshCw, History, Package
} from "lucide-react";

const translations = {
  en: {
    title: "Orders & Reservations",
    subtitle: "Streamline order management with real-time tracking, automated scheduling, and customer communication",
    heroStats: [
      { value: "98%", label: "On-Time Fulfillment" },
      { value: "60%", label: "Faster Processing" },
      { value: "24/7", label: "Order Tracking" },
    ],
    overviewTitle: "Complete Order Lifecycle Management",
    overviewDesc: "From quote to delivery, manage every aspect of your orders with automated workflows, priority scheduling, and real-time status updates.",
    features: [
      {
        icon: ShoppingCart,
        title: "Order Entry & Quotes",
        desc: "Quick order entry with product configuration, pricing tiers, and instant quote generation",
      },
      {
        icon: Calendar,
        title: "Production Scheduling",
        desc: "Automatic scheduling based on capacity, priorities, and delivery commitments",
      },
      {
        icon: Clock,
        title: "Reservation System",
        desc: "Reserve inventory and production capacity for key customers and contracts",
      },
      {
        icon: Bell,
        title: "Status Notifications",
        desc: "Automated updates to customers at each stage of order fulfillment",
      },
      {
        icon: History,
        title: "Order History",
        desc: "Complete history with repeat order functionality and customer preferences",
      },
      {
        icon: Truck,
        title: "Delivery Planning",
        desc: "Coordinate shipping schedules with production completion and carrier availability",
      },
    ],
    benefits: [
      "Reduce order processing time by 60%",
      "Eliminate double-booking and scheduling conflicts",
      "Improve customer satisfaction with proactive communication",
      "Optimize production capacity utilization",
      "Enable self-service order tracking for customers",
    ],
    ctaTitle: "Transform Your Order Management",
    ctaDesc: "See how InduCore can streamline your order-to-delivery process",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
  },
  ar: {
    title: "الطلبات والحجوزات",
    subtitle: "تبسيط إدارة الطلبات مع التتبع الفوري والجدولة الآلية والتواصل مع العملاء",
    heroStats: [
      { value: "98%", label: "التنفيذ في الوقت المحدد" },
      { value: "60%", label: "معالجة أسرع" },
      { value: "24/7", label: "تتبع الطلبات" },
    ],
    overviewTitle: "إدارة دورة حياة الطلبات الكاملة",
    overviewDesc: "من عرض السعر إلى التسليم، أدر كل جانب من طلباتك مع سير العمل الآلي والجدولة ذات الأولوية وتحديثات الحالة الفورية.",
    features: [
      {
        icon: ShoppingCart,
        title: "إدخال الطلبات والعروض",
        desc: "إدخال سريع للطلبات مع تكوين المنتج ومستويات التسعير وإنشاء عروض الأسعار الفورية",
      },
      {
        icon: Calendar,
        title: "جدولة الإنتاج",
        desc: "جدولة تلقائية بناءً على السعة والأولويات والتزامات التسليم",
      },
      {
        icon: Clock,
        title: "نظام الحجز",
        desc: "حجز المخزون وقدرة الإنتاج للعملاء الرئيسيين والعقود",
      },
      {
        icon: Bell,
        title: "إشعارات الحالة",
        desc: "تحديثات آلية للعملاء في كل مرحلة من مراحل تنفيذ الطلب",
      },
      {
        icon: History,
        title: "سجل الطلبات",
        desc: "سجل كامل مع وظيفة تكرار الطلب وتفضيلات العملاء",
      },
      {
        icon: Truck,
        title: "تخطيط التسليم",
        desc: "تنسيق جداول الشحن مع اكتمال الإنتاج وتوافر الناقلين",
      },
    ],
    benefits: [
      "تقليل وقت معالجة الطلبات بنسبة 60%",
      "القضاء على الحجز المزدوج وتعارضات الجدولة",
      "تحسين رضا العملاء بالتواصل الاستباقي",
      "تحسين استخدام قدرة الإنتاج",
      "تمكين تتبع الطلبات ذاتي الخدمة للعملاء",
    ],
    ctaTitle: "حوّل إدارة طلباتك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تبسيط عملية الطلب حتى التسليم",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
  },
  tr: {
    title: "Siparişler ve Rezervasyonlar",
    subtitle: "Gerçek zamanlı takip, otomatik çizelgeleme ve müşteri iletişimi ile sipariş yönetimini kolaylaştırın",
    heroStats: [
      { value: "98%", label: "Zamanında Teslimat" },
      { value: "60%", label: "Daha Hızlı İşlem" },
      { value: "24/7", label: "Sipariş Takibi" },
    ],
    overviewTitle: "Tam Sipariş Yaşam Döngüsü Yönetimi",
    overviewDesc: "Tekliften teslimata, otomatik iş akışları, öncelik çizelgeleme ve gerçek zamanlı durum güncellemeleriyle siparişlerinizin her yönünü yönetin.",
    features: [
      {
        icon: ShoppingCart,
        title: "Sipariş Girişi ve Teklifler",
        desc: "Ürün yapılandırma, fiyat kademeleri ve anında teklif oluşturma ile hızlı sipariş girişi",
      },
      {
        icon: Calendar,
        title: "Üretim Çizelgeleme",
        desc: "Kapasite, öncelikler ve teslimat taahhütlerine dayalı otomatik çizelgeleme",
      },
      {
        icon: Clock,
        title: "Rezervasyon Sistemi",
        desc: "Kilit müşteriler ve sözleşmeler için envanter ve üretim kapasitesi ayırma",
      },
      {
        icon: Bell,
        title: "Durum Bildirimleri",
        desc: "Sipariş karşılama sürecinin her aşamasında müşterilere otomatik güncellemeler",
      },
      {
        icon: History,
        title: "Sipariş Geçmişi",
        desc: "Tekrar sipariş işlevi ve müşteri tercihleri ile tam geçmiş",
      },
      {
        icon: Truck,
        title: "Teslimat Planlaması",
        desc: "Sevkiyat programlarını üretim tamamlama ve taşıyıcı uygunluğu ile koordine edin",
      },
    ],
    benefits: [
      "Sipariş işlem süresini %60 azaltın",
      "Çift rezervasyonu ve çizelge çakışmalarını ortadan kaldırın",
      "Proaktif iletişimle müşteri memnuniyetini artırın",
      "Üretim kapasitesi kullanımını optimize edin",
      "Müşteriler için self-servis sipariş takibi sağlayın",
    ],
    ctaTitle: "Sipariş Yönetiminizi Dönüştürün",
    ctaDesc: "InduCore'un siparişten teslimata sürecinizi nasıl kolaylaştırabileceğini görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
  },
  de: {
    title: "Aufträge & Reservierungen",
    subtitle: "Optimieren Sie die Auftragsverwaltung mit Echtzeit-Tracking, automatischer Planung und Kundenkommunikation",
    heroStats: [
      { value: "98%", label: "Pünktliche Erfüllung" },
      { value: "60%", label: "Schnellere Bearbeitung" },
      { value: "24/7", label: "Auftragsverfolgung" },
    ],
    overviewTitle: "Vollständiges Auftrags-Lifecycle-Management",
    overviewDesc: "Vom Angebot bis zur Lieferung - verwalten Sie jeden Aspekt Ihrer Aufträge mit automatisierten Workflows, Prioritätsplanung und Echtzeit-Statusaktualisierungen.",
    features: [
      {
        icon: ShoppingCart,
        title: "Auftragserfassung & Angebote",
        desc: "Schnelle Auftragserfassung mit Produktkonfiguration, Preisstufen und sofortiger Angebotserstellung",
      },
      {
        icon: Calendar,
        title: "Produktionsplanung",
        desc: "Automatische Planung basierend auf Kapazität, Prioritäten und Lieferverpflichtungen",
      },
      {
        icon: Clock,
        title: "Reservierungssystem",
        desc: "Reservierung von Lagerbestand und Produktionskapazität für Schlüsselkunden und Verträge",
      },
      {
        icon: Bell,
        title: "Statusbenachrichtigungen",
        desc: "Automatische Updates an Kunden in jeder Phase der Auftragserfüllung",
      },
      {
        icon: History,
        title: "Auftragshistorie",
        desc: "Vollständige Historie mit Nachbestellfunktion und Kundenpräferenzen",
      },
      {
        icon: Truck,
        title: "Lieferplanung",
        desc: "Koordination von Versandplänen mit Produktionsabschluss und Spediteurverfügbarkeit",
      },
    ],
    benefits: [
      "Auftragsbearbeitungszeit um 60% reduzieren",
      "Doppelbuchungen und Terminüberschneidungen eliminieren",
      "Kundenzufriedenheit durch proaktive Kommunikation verbessern",
      "Produktionskapazitätsauslastung optimieren",
      "Self-Service-Auftragsverfolgung für Kunden ermöglichen",
    ],
    ctaTitle: "Transformieren Sie Ihre Auftragsverwaltung",
    ctaDesc: "Erfahren Sie, wie InduCore Ihren Auftrag-zu-Lieferung-Prozess optimieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
  },
  ru: {
    title: "Заказы и резервирование",
    subtitle: "Оптимизируйте управление заказами с отслеживанием в реальном времени, автоматическим планированием и коммуникацией с клиентами",
    heroStats: [
      { value: "98%", label: "Своевременное выполнение" },
      { value: "60%", label: "Быстрее обработка" },
      { value: "24/7", label: "Отслеживание заказов" },
    ],
    overviewTitle: "Полное управление жизненным циклом заказа",
    overviewDesc: "От предложения до доставки - управляйте каждым аспектом заказов с автоматизированными рабочими процессами, приоритетным планированием и обновлениями статуса в реальном времени.",
    features: [
      {
        icon: ShoppingCart,
        title: "Ввод заказов и предложения",
        desc: "Быстрый ввод заказов с конфигурацией продукта, уровнями цен и мгновенным созданием предложений",
      },
      {
        icon: Calendar,
        title: "Планирование производства",
        desc: "Автоматическое планирование на основе мощности, приоритетов и обязательств по доставке",
      },
      {
        icon: Clock,
        title: "Система резервирования",
        desc: "Резервирование запасов и производственных мощностей для ключевых клиентов и контрактов",
      },
      {
        icon: Bell,
        title: "Уведомления о статусе",
        desc: "Автоматические обновления для клиентов на каждом этапе выполнения заказа",
      },
      {
        icon: History,
        title: "История заказов",
        desc: "Полная история с функцией повторного заказа и предпочтениями клиентов",
      },
      {
        icon: Truck,
        title: "Планирование доставки",
        desc: "Координация графиков отгрузки с завершением производства и доступностью перевозчиков",
      },
    ],
    benefits: [
      "Сокращение времени обработки заказов на 60%",
      "Устранение двойных бронирований и конфликтов в расписании",
      "Повышение удовлетворенности клиентов проактивной коммуникацией",
      "Оптимизация использования производственных мощностей",
      "Самообслуживание клиентов при отслеживании заказов",
    ],
    ctaTitle: "Трансформируйте управление заказами",
    ctaDesc: "Узнайте, как InduCore может оптимизировать процесс от заказа до доставки",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
  },
  pl: {
    title: "Zamówienia i Rezerwacje",
    subtitle: "Usprawnij zarządzanie zamówieniami dzięki śledzeniu w czasie rzeczywistym, automatycznemu harmonogramowaniu i komunikacji z klientami",
    heroStats: [
      { value: "98%", label: "Terminowa Realizacja" },
      { value: "60%", label: "Szybsze Przetwarzanie" },
      { value: "24/7", label: "Śledzenie Zamówień" },
    ],
    overviewTitle: "Pełne Zarządzanie Cyklem Życia Zamówienia",
    overviewDesc: "Od oferty do dostawy - zarządzaj każdym aspektem zamówień dzięki automatycznym przepływom pracy, priorytetowemu harmonogramowaniu i aktualizacjom statusu w czasie rzeczywistym.",
    features: [
      {
        icon: ShoppingCart,
        title: "Wprowadzanie Zamówień i Oferty",
        desc: "Szybkie wprowadzanie zamówień z konfiguracją produktu, poziomami cen i natychmiastowym generowaniem ofert",
      },
      {
        icon: Calendar,
        title: "Harmonogramowanie Produkcji",
        desc: "Automatyczne harmonogramowanie oparte na wydajności, priorytetach i zobowiązaniach dostawy",
      },
      {
        icon: Clock,
        title: "System Rezerwacji",
        desc: "Rezerwacja zapasów i mocy produkcyjnych dla kluczowych klientów i kontraktów",
      },
      {
        icon: Bell,
        title: "Powiadomienia o Statusie",
        desc: "Automatyczne aktualizacje dla klientów na każdym etapie realizacji zamówienia",
      },
      {
        icon: History,
        title: "Historia Zamówień",
        desc: "Pełna historia z funkcją ponownego zamówienia i preferencjami klientów",
      },
      {
        icon: Truck,
        title: "Planowanie Dostawy",
        desc: "Koordynacja harmonogramów wysyłki z ukończeniem produkcji i dostępnością przewoźników",
      },
    ],
    benefits: [
      "Skrócenie czasu przetwarzania zamówień o 60%",
      "Eliminacja podwójnych rezerwacji i konfliktów w harmonogramie",
      "Poprawa satysfakcji klientów dzięki proaktywnej komunikacji",
      "Optymalizacja wykorzystania mocy produkcyjnych",
      "Samoobsługowe śledzenie zamówień dla klientów",
    ],
    ctaTitle: "Przekształć Zarządzanie Zamówieniami",
    ctaDesc: "Zobacz, jak InduCore może usprawnić proces od zamówienia do dostawy",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
  },
  ro: {
    title: "Comenzi și Rezervări",
    subtitle: "Eficientizați gestionarea comenzilor cu urmărire în timp real, programare automată și comunicare cu clienții",
    heroStats: [
      { value: "98%", label: "Realizare la Timp" },
      { value: "60%", label: "Procesare Mai Rapidă" },
      { value: "24/7", label: "Urmărire Comenzi" },
    ],
    overviewTitle: "Gestionarea Completă a Ciclului de Viață al Comenzii",
    overviewDesc: "De la ofertă la livrare, gestionați fiecare aspect al comenzilor cu fluxuri de lucru automate, programare prioritară și actualizări de stare în timp real.",
    features: [
      {
        icon: ShoppingCart,
        title: "Introducere Comenzi și Oferte",
        desc: "Introducere rapidă a comenzilor cu configurare produs, niveluri de preț și generare instantanee de oferte",
      },
      {
        icon: Calendar,
        title: "Programarea Producției",
        desc: "Programare automată bazată pe capacitate, priorități și angajamente de livrare",
      },
      {
        icon: Clock,
        title: "Sistem de Rezervări",
        desc: "Rezervarea inventarului și capacității de producție pentru clienții cheie și contracte",
      },
      {
        icon: Bell,
        title: "Notificări de Status",
        desc: "Actualizări automate pentru clienți în fiecare etapă a îndeplinirii comenzii",
      },
      {
        icon: History,
        title: "Istoric Comenzi",
        desc: "Istoric complet cu funcționalitate de comandă repetată și preferințe ale clienților",
      },
      {
        icon: Truck,
        title: "Planificarea Livrării",
        desc: "Coordonarea programelor de expediere cu finalizarea producției și disponibilitatea transportatorilor",
      },
    ],
    benefits: [
      "Reducerea timpului de procesare a comenzilor cu 60%",
      "Eliminarea rezervărilor duble și a conflictelor de programare",
      "Îmbunătățirea satisfacției clienților cu comunicare proactivă",
      "Optimizarea utilizării capacității de producție",
      "Urmărire self-service a comenzilor pentru clienți",
    ],
    ctaTitle: "Transformați Gestionarea Comenzilor",
    ctaDesc: "Vedeți cum InduCore poate eficientiza procesul de la comandă la livrare",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
  },
};

export default function ICOrdersPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 overflow-hidden">
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
              <Calendar className="w-4 h-4" />
              <span>Orders & Reservations</span>
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
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
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
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <Calendar className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Orders</h3>
                <p className="text-white/80">
                  Never miss a delivery deadline with intelligent order management and scheduling.
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
                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
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
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50">
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
