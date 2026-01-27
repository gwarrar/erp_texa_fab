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
  Cog, ArrowRight, CheckCircle2, BarChart3, 
  Thermometer, Shield, Gauge, Factory, Wrench,
  TrendingUp, FileCheck, Flame
} from "lucide-react";

const translations = {
  en: {
    title: "Metal & Steel Manufacturing",
    subtitle: "Complete ERP solution for metal fabrication, steel processing, and heavy manufacturing industries",
    heroStats: [
      { value: "40%", label: "Production Efficiency" },
      { value: "25%", label: "Cost Reduction" },
      { value: "99.2%", label: "Quality Rate" },
    ],
    overviewTitle: "Industrial-Grade Metal Manufacturing",
    overviewDesc: "From raw material tracking to finished product delivery, manage every aspect of your metal and steel manufacturing with precision and real-time visibility.",
    features: [
      {
        icon: Thermometer,
        title: "Heat Treatment Tracking",
        desc: "Monitor and log temperature cycles, quenching processes, and heat treatment certifications",
      },
      {
        icon: Gauge,
        title: "Material Specifications",
        desc: "Track alloy compositions, grades, and material certifications with full traceability",
      },
      {
        icon: Factory,
        title: "Production Scheduling",
        desc: "Optimize furnace utilization, rolling schedules, and machine shop operations",
      },
      {
        icon: Shield,
        title: "Quality Certifications",
        desc: "Manage ISO, ASTM, and industry-specific certifications and compliance documentation",
      },
      {
        icon: Wrench,
        title: "Tool & Die Management",
        desc: "Track tooling life cycles, maintenance schedules, and replacement planning",
      },
      {
        icon: FileCheck,
        title: "Test Reports & MTRs",
        desc: "Generate Mill Test Reports and manage physical/chemical test documentation",
      },
    ],
    benefits: [
      "Reduce material waste with precision cut optimization",
      "Track heat numbers and certifications across production",
      "Automate compliance documentation and reporting",
      "Optimize furnace and equipment scheduling",
      "Real-time visibility into production bottlenecks",
    ],
    ctaTitle: "Transform Your Metal Manufacturing",
    ctaDesc: "See how InduCore can optimize your steel and metal operations",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "تصنيع المعادن والصلب",
    subtitle: "حل ERP متكامل لتصنيع المعادن ومعالجة الصلب والصناعات الثقيلة",
    heroStats: [
      { value: "40%", label: "كفاءة الإنتاج" },
      { value: "25%", label: "تخفيض التكاليف" },
      { value: "99.2%", label: "معدل الجودة" },
    ],
    overviewTitle: "تصنيع معادن بمستوى صناعي",
    overviewDesc: "من تتبع المواد الأولية إلى تسليم المنتجات النهائية، قم بإدارة كل جانب من جوانب تصنيع المعادن والصلب بدقة ورؤية فورية.",
    features: [
      {
        icon: Thermometer,
        title: "تتبع المعالجة الحرارية",
        desc: "مراقبة وتسجيل دورات الحرارة وعمليات التبريد وشهادات المعالجة الحرارية",
      },
      {
        icon: Gauge,
        title: "مواصفات المواد",
        desc: "تتبع تركيبات السبائك والدرجات وشهادات المواد مع إمكانية التتبع الكامل",
      },
      {
        icon: Factory,
        title: "جدولة الإنتاج",
        desc: "تحسين استخدام الأفران وجداول الدرفلة وعمليات ورش الآلات",
      },
      {
        icon: Shield,
        title: "شهادات الجودة",
        desc: "إدارة شهادات ISO و ASTM والشهادات الخاصة بالصناعة ووثائق الامتثال",
      },
      {
        icon: Wrench,
        title: "إدارة الأدوات والقوالب",
        desc: "تتبع دورات حياة الأدوات وجداول الصيانة وتخطيط الاستبدال",
      },
      {
        icon: FileCheck,
        title: "تقارير الاختبار و MTRs",
        desc: "إنشاء تقارير اختبار المطاحن وإدارة وثائق الاختبارات الفيزيائية/الكيميائية",
      },
    ],
    benefits: [
      "تقليل هدر المواد مع تحسين القطع الدقيق",
      "تتبع أرقام الحرارة والشهادات عبر الإنتاج",
      "أتمتة وثائق الامتثال والتقارير",
      "تحسين جدولة الأفران والمعدات",
      "رؤية فورية لعوائق الإنتاج",
    ],
    ctaTitle: "حوّل تصنيع المعادن لديك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين عمليات الصلب والمعادن",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
  tr: {
    title: "Metal ve Çelik İmalatı",
    subtitle: "Metal işleme, çelik işleme ve ağır sanayi için eksiksiz ERP çözümü",
    heroStats: [
      { value: "40%", label: "Üretim Verimliliği" },
      { value: "25%", label: "Maliyet Düşüşü" },
      { value: "99.2%", label: "Kalite Oranı" },
    ],
    overviewTitle: "Endüstriyel Metal Üretimi",
    overviewDesc: "Hammadde takibinden bitmiş ürün teslimatına kadar metal ve çelik üretiminizin her yönünü hassasiyet ve gerçek zamanlı görünürlükle yönetin.",
    features: [
      {
        icon: Thermometer,
        title: "Isıl İşlem Takibi",
        desc: "Sıcaklık döngülerini, su verme işlemlerini ve ısıl işlem sertifikalarını izleyin ve kaydedin",
      },
      {
        icon: Gauge,
        title: "Malzeme Özellikleri",
        desc: "Alaşım bileşimlerini, dereceleri ve malzeme sertifikalarını tam izlenebilirlikle takip edin",
      },
      {
        icon: Factory,
        title: "Üretim Planlaması",
        desc: "Fırın kullanımını, haddeleme programlarını ve makine atölyesi operasyonlarını optimize edin",
      },
      {
        icon: Shield,
        title: "Kalite Sertifikaları",
        desc: "ISO, ASTM ve sektöre özgü sertifikaları ve uyumluluk belgelerini yönetin",
      },
      {
        icon: Wrench,
        title: "Takım ve Kalıp Yönetimi",
        desc: "Takım yaşam döngülerini, bakım programlarını ve değiştirme planlamasını takip edin",
      },
      {
        icon: FileCheck,
        title: "Test Raporları ve MTR'ler",
        desc: "Değirmen Test Raporları oluşturun ve fiziksel/kimyasal test belgelerini yönetin",
      },
    ],
    benefits: [
      "Hassas kesim optimizasyonu ile malzeme israfını azaltın",
      "Üretim boyunca ısı numaralarını ve sertifikaları takip edin",
      "Uyumluluk belgelerini ve raporlamayı otomatikleştirin",
      "Fırın ve ekipman planlamasını optimize edin",
      "Üretim darboğazlarına gerçek zamanlı görünürlük",
    ],
    ctaTitle: "Metal Üretiminizi Dönüştürün",
    ctaDesc: "InduCore'un çelik ve metal operasyonlarınızı nasıl optimize edebileceğini görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
    keyBenefits: "Temel Faydalar",
  },
  de: {
    title: "Metall- & Stahlherstellung",
    subtitle: "Komplette ERP-Lösung für Metallverarbeitung, Stahlbearbeitung und Schwerindustrie",
    heroStats: [
      { value: "40%", label: "Produktionseffizienz" },
      { value: "25%", label: "Kostensenkung" },
      { value: "99.2%", label: "Qualitätsrate" },
    ],
    overviewTitle: "Industrielle Metallherstellung",
    overviewDesc: "Von der Rohstoffverfolgung bis zur Fertigproduktlieferung - verwalten Sie jeden Aspekt Ihrer Metall- und Stahlherstellung mit Präzision und Echtzeit-Transparenz.",
    features: [
      {
        icon: Thermometer,
        title: "Wärmebehandlungsverfolgung",
        desc: "Überwachen und protokollieren Sie Temperaturzyklen, Abschreckprozesse und Wärmebehandlungszertifikate",
      },
      {
        icon: Gauge,
        title: "Materialspezifikationen",
        desc: "Verfolgen Sie Legierungszusammensetzungen, Güten und Materialzertifikate mit vollständiger Rückverfolgbarkeit",
      },
      {
        icon: Factory,
        title: "Produktionsplanung",
        desc: "Optimieren Sie Ofenauslastung, Walzpläne und Maschinenwerkstattbetrieb",
      },
      {
        icon: Shield,
        title: "Qualitätszertifikate",
        desc: "Verwalten Sie ISO-, ASTM- und branchenspezifische Zertifikate und Compliance-Dokumentation",
      },
      {
        icon: Wrench,
        title: "Werkzeug- & Formenverwaltung",
        desc: "Verfolgen Sie Werkzeuglebenszyklen, Wartungspläne und Ersatzplanung",
      },
      {
        icon: FileCheck,
        title: "Prüfberichte & MTRs",
        desc: "Erstellen Sie Werkszeugnisprüfberichte und verwalten Sie physikalische/chemische Testdokumentation",
      },
    ],
    benefits: [
      "Reduzieren Sie Materialabfall durch präzise Schnittoptimierung",
      "Verfolgen Sie Chargennummern und Zertifikate über die gesamte Produktion",
      "Automatisieren Sie Compliance-Dokumentation und Berichterstattung",
      "Optimieren Sie Ofen- und Geräteplnung",
      "Echtzeit-Transparenz bei Produktionsengpässen",
    ],
    ctaTitle: "Transformieren Sie Ihre Metallherstellung",
    ctaDesc: "Erfahren Sie, wie InduCore Ihre Stahl- und Metalloperationen optimieren kann",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
    keyBenefits: "Hauptvorteile",
  },
  ru: {
    title: "Производство металла и стали",
    subtitle: "Комплексное ERP-решение для металлообработки, обработки стали и тяжелой промышленности",
    heroStats: [
      { value: "40%", label: "Эффективность производства" },
      { value: "25%", label: "Снижение затрат" },
      { value: "99.2%", label: "Уровень качества" },
    ],
    overviewTitle: "Промышленное производство металла",
    overviewDesc: "От отслеживания сырья до доставки готовой продукции - управляйте каждым аспектом производства металла и стали с точностью и видимостью в реальном времени.",
    features: [
      {
        icon: Thermometer,
        title: "Отслеживание термообработки",
        desc: "Мониторинг и регистрация температурных циклов, процессов закалки и сертификатов термообработки",
      },
      {
        icon: Gauge,
        title: "Спецификации материалов",
        desc: "Отслеживание составов сплавов, марок и сертификатов материалов с полной прослеживаемостью",
      },
      {
        icon: Factory,
        title: "Планирование производства",
        desc: "Оптимизация использования печей, графиков прокатки и операций механического цеха",
      },
      {
        icon: Shield,
        title: "Сертификаты качества",
        desc: "Управление сертификатами ISO, ASTM и отраслевыми сертификатами и документацией по соответствию",
      },
      {
        icon: Wrench,
        title: "Управление инструментами",
        desc: "Отслеживание жизненных циклов инструментов, графиков обслуживания и планирования замены",
      },
      {
        icon: FileCheck,
        title: "Отчеты об испытаниях",
        desc: "Создание отчетов об испытаниях и управление документацией физических/химических испытаний",
      },
    ],
    benefits: [
      "Сокращение отходов материалов благодаря оптимизации раскроя",
      "Отслеживание номеров плавок и сертификатов по всему производству",
      "Автоматизация документации по соответствию и отчетности",
      "Оптимизация планирования печей и оборудования",
      "Видимость узких мест производства в реальном времени",
    ],
    ctaTitle: "Преобразуйте металлопроизводство",
    ctaDesc: "Узнайте, как InduCore может оптимизировать ваши операции со сталью и металлом",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
    keyBenefits: "Ключевые преимущества",
  },
  pl: {
    title: "Produkcja Metali i Stali",
    subtitle: "Kompleksowe rozwiązanie ERP dla obróbki metali, przetwarzania stali i przemysłu ciężkiego",
    heroStats: [
      { value: "40%", label: "Efektywność Produkcji" },
      { value: "25%", label: "Redukcja Kosztów" },
      { value: "99.2%", label: "Wskaźnik Jakości" },
    ],
    overviewTitle: "Przemysłowa Produkcja Metali",
    overviewDesc: "Od śledzenia surowców do dostawy gotowych produktów - zarządzaj każdym aspektem produkcji metali i stali z precyzją i widocznością w czasie rzeczywistym.",
    features: [
      {
        icon: Thermometer,
        title: "Śledzenie Obróbki Cieplnej",
        desc: "Monitoruj i rejestruj cykle temperaturowe, procesy hartowania i certyfikaty obróbki cieplnej",
      },
      {
        icon: Gauge,
        title: "Specyfikacje Materiałów",
        desc: "Śledź składy stopów, gatunki i certyfikaty materiałów z pełną identyfikowalnością",
      },
      {
        icon: Factory,
        title: "Planowanie Produkcji",
        desc: "Optymalizuj wykorzystanie pieców, harmonogramy walcowania i operacje warsztatu mechanicznego",
      },
      {
        icon: Shield,
        title: "Certyfikaty Jakości",
        desc: "Zarządzaj certyfikatami ISO, ASTM i branżowymi oraz dokumentacją zgodności",
      },
      {
        icon: Wrench,
        title: "Zarządzanie Narzędziami",
        desc: "Śledź cykle życia narzędzi, harmonogramy konserwacji i planowanie wymiany",
      },
      {
        icon: FileCheck,
        title: "Raporty z Badań",
        desc: "Generuj Raporty z Badań Hutniczych i zarządzaj dokumentacją badań fizycznych/chemicznych",
      },
    ],
    benefits: [
      "Zmniejsz odpady materiałowe dzięki precyzyjnej optymalizacji cięcia",
      "Śledź numery wytopu i certyfikaty w całej produkcji",
      "Automatyzuj dokumentację zgodności i raportowanie",
      "Optymalizuj planowanie pieców i sprzętu",
      "Widoczność wąskich gardeł produkcji w czasie rzeczywistym",
    ],
    ctaTitle: "Przekształć Swoją Produkcję Metali",
    ctaDesc: "Zobacz, jak InduCore może zoptymalizować operacje stalowe i metalowe",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
    keyBenefits: "Kluczowe Korzyści",
  },
  ro: {
    title: "Fabricarea Metalelor și Oțelului",
    subtitle: "Soluție ERP completă pentru fabricarea metalelor, prelucrarea oțelului și industria grea",
    heroStats: [
      { value: "40%", label: "Eficiența Producției" },
      { value: "25%", label: "Reducerea Costurilor" },
      { value: "99.2%", label: "Rata Calității" },
    ],
    overviewTitle: "Producție Industrială de Metale",
    overviewDesc: "De la urmărirea materiilor prime la livrarea produselor finite - gestionați fiecare aspect al fabricării metalelor și oțelului cu precizie și vizibilitate în timp real.",
    features: [
      {
        icon: Thermometer,
        title: "Urmărirea Tratamentului Termic",
        desc: "Monitorizați și înregistrați ciclurile de temperatură, procesele de călire și certificatele de tratament termic",
      },
      {
        icon: Gauge,
        title: "Specificații Materiale",
        desc: "Urmăriți compoziții de aliaje, grade și certificate de materiale cu trasabilitate completă",
      },
      {
        icon: Factory,
        title: "Programarea Producției",
        desc: "Optimizați utilizarea cuptoarelor, programele de laminare și operațiunile atelierului mecanic",
      },
      {
        icon: Shield,
        title: "Certificate de Calitate",
        desc: "Gestionați certificatele ISO, ASTM și specifice industriei și documentația de conformitate",
      },
      {
        icon: Wrench,
        title: "Gestionarea Sculelor",
        desc: "Urmăriți ciclurile de viață ale sculelor, programele de întreținere și planificarea înlocuirii",
      },
      {
        icon: FileCheck,
        title: "Rapoarte de Testare",
        desc: "Generați Rapoarte de Testare și gestionați documentația testelor fizice/chimice",
      },
    ],
    benefits: [
      "Reduceți deșeurile de material cu optimizarea precisă a tăierii",
      "Urmăriți numerele de șarjă și certificatele în întreaga producție",
      "Automatizați documentația de conformitate și raportarea",
      "Optimizați programarea cuptoarelor și echipamentelor",
      "Vizibilitate în timp real asupra blocajelor de producție",
    ],
    ctaTitle: "Transformați Producția de Metale",
    ctaDesc: "Vedeți cum InduCore poate optimiza operațiunile de oțel și metal",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
    keyBenefits: "Beneficii Cheie",
  },
};

export default function ICMetalSteelPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-slate-700 via-red-800 to-slate-900 overflow-hidden">
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
              <Cog className="w-4 h-4" />
              <span>Metal & Steel</span>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-4">
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
              <div className="bg-gradient-to-br from-red-700 to-slate-800 rounded-2xl p-8 text-white">
                <Flame className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Metal</h3>
                <p className="text-white/80">
                  Built for the demands of heavy industry with robust tracking and compliance features.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                {t.keyBenefits}
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
                    <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-red-800 to-slate-900">
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
