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
  UtensilsCrossed, ArrowRight, CheckCircle2, BarChart3, 
  Thermometer, Shield, Timer, Package, Leaf,
  TrendingUp, FileCheck, Droplets
} from "lucide-react";

const translations = {
  en: {
    title: "Food & Beverage Production",
    subtitle: "Complete traceability and compliance solution for food processing, beverage manufacturing, and FMCG industries",
    heroStats: [
      { value: "100%", label: "Traceability" },
      { value: "35%", label: "Waste Reduction" },
      { value: "FDA", label: "Compliant" },
    ],
    overviewTitle: "Food-Safe Manufacturing Excellence",
    overviewDesc: "From farm to fork, manage every step of your food and beverage production with complete traceability, quality control, and regulatory compliance.",
    features: [
      {
        icon: Thermometer,
        title: "Cold Chain Monitoring",
        desc: "Real-time temperature tracking with automated alerts and HACCP compliance documentation",
      },
      {
        icon: Timer,
        title: "Shelf Life Management",
        desc: "Track expiry dates, best-before dates, and implement FEFO picking strategies",
      },
      {
        icon: Shield,
        title: "Quality & HACCP",
        desc: "Built-in HACCP protocols, allergen management, and quality inspection workflows",
      },
      {
        icon: Leaf,
        title: "Ingredient Traceability",
        desc: "Full ingredient tracking from supplier to finished product with recall capabilities",
      },
      {
        icon: Package,
        title: "Recipe Management",
        desc: "Manage formulations, nutritional calculations, and batch scaling with precision",
      },
      {
        icon: FileCheck,
        title: "Regulatory Compliance",
        desc: "FDA, FSMA, EU regulations, and country-specific food safety documentation",
      },
    ],
    benefits: [
      "Achieve 100% lot traceability in under 30 seconds",
      "Reduce food waste with intelligent inventory rotation",
      "Automate allergen tracking and labeling compliance",
      "Streamline recall management and mock recalls",
      "Meet FDA, FSMA, and international food safety standards",
    ],
    ctaTitle: "Elevate Your Food Safety Standards",
    ctaDesc: "See how InduCore ensures compliance and traceability",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "إنتاج الأغذية والمشروبات",
    subtitle: "حل متكامل للتتبع والامتثال لمعالجة الأغذية وتصنيع المشروبات وصناعات السلع الاستهلاكية",
    heroStats: [
      { value: "100%", label: "إمكانية التتبع" },
      { value: "35%", label: "تقليل الهدر" },
      { value: "FDA", label: "متوافق" },
    ],
    overviewTitle: "التميز في التصنيع الغذائي الآمن",
    overviewDesc: "من المزرعة إلى المائدة، قم بإدارة كل خطوة من إنتاج الأغذية والمشروبات مع تتبع كامل ومراقبة الجودة والامتثال التنظيمي.",
    features: [
      {
        icon: Thermometer,
        title: "مراقبة سلسلة التبريد",
        desc: "تتبع درجة الحرارة في الوقت الفعلي مع تنبيهات آلية ووثائق الامتثال لـ HACCP",
      },
      {
        icon: Timer,
        title: "إدارة مدة الصلاحية",
        desc: "تتبع تواريخ انتهاء الصلاحية والتواريخ المفضلة وتنفيذ استراتيجيات FEFO",
      },
      {
        icon: Shield,
        title: "الجودة و HACCP",
        desc: "بروتوكولات HACCP مدمجة وإدارة مسببات الحساسية وسير عمل فحص الجودة",
      },
      {
        icon: Leaf,
        title: "تتبع المكونات",
        desc: "تتبع كامل للمكونات من المورد إلى المنتج النهائي مع إمكانيات الاستدعاء",
      },
      {
        icon: Package,
        title: "إدارة الوصفات",
        desc: "إدارة التركيبات والحسابات الغذائية وتوسيع الدفعات بدقة",
      },
      {
        icon: FileCheck,
        title: "الامتثال التنظيمي",
        desc: "FDA و FSMA ولوائح الاتحاد الأوروبي ووثائق سلامة الغذاء الخاصة بالدولة",
      },
    ],
    benefits: [
      "تحقيق تتبع 100% للدفعات في أقل من 30 ثانية",
      "تقليل هدر الطعام مع التدوير الذكي للمخزون",
      "أتمتة تتبع مسببات الحساسية والامتثال للملصقات",
      "تبسيط إدارة الاستدعاء واختبارات الاستدعاء",
      "تلبية معايير FDA و FSMA ومعايير سلامة الغذاء الدولية",
    ],
    ctaTitle: "ارفع معايير سلامة الغذاء لديك",
    ctaDesc: "اكتشف كيف يضمن InduCore الامتثال والتتبع",
    ctaButton: "احجز عرضًا توضيحيًا",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
  tr: {
    title: "Gıda ve İçecek Üretimi",
    subtitle: "Gıda işleme, içecek üretimi ve FMCG endüstrileri için eksiksiz izlenebilirlik ve uyumluluk çözümü",
    heroStats: [
      { value: "100%", label: "İzlenebilirlik" },
      { value: "35%", label: "Atık Azaltma" },
      { value: "FDA", label: "Uyumlu" },
    ],
    overviewTitle: "Gıda Güvenliği Üretim Mükemmelliği",
    overviewDesc: "Tarladan çatala, gıda ve içecek üretiminizin her adımını tam izlenebilirlik, kalite kontrolü ve mevzuat uyumluluğu ile yönetin.",
    features: [
      {
        icon: Thermometer,
        title: "Soğuk Zincir İzleme",
        desc: "Otomatik uyarılar ve HACCP uyumluluk belgeleri ile gerçek zamanlı sıcaklık takibi",
      },
      {
        icon: Timer,
        title: "Raf Ömrü Yönetimi",
        desc: "Son kullanma tarihlerini, tüketim tarihlerini takip edin ve FEFO toplama stratejileri uygulayın",
      },
      {
        icon: Shield,
        title: "Kalite & HACCP",
        desc: "Yerleşik HACCP protokolleri, alerjen yönetimi ve kalite kontrol iş akışları",
      },
      {
        icon: Leaf,
        title: "İçerik İzlenebilirliği",
        desc: "Tedarikçiden bitmiş ürüne kadar tam içerik takibi ve geri çağırma yetenekleri",
      },
      {
        icon: Package,
        title: "Reçete Yönetimi",
        desc: "Formülasyonları, besin hesaplamalarını ve parti ölçeklendirmesini hassasiyetle yönetin",
      },
      {
        icon: FileCheck,
        title: "Mevzuat Uyumluluğu",
        desc: "FDA, FSMA, AB düzenlemeleri ve ülkeye özgü gıda güvenliği belgeleri",
      },
    ],
    benefits: [
      "30 saniyenin altında %100 lot izlenebilirliği elde edin",
      "Akıllı envanter rotasyonu ile gıda israfını azaltın",
      "Alerjen takibi ve etiketleme uyumluluğunu otomatikleştirin",
      "Geri çağırma yönetimini ve tatbikatları kolaylaştırın",
      "FDA, FSMA ve uluslararası gıda güvenliği standartlarını karşılayın",
    ],
    ctaTitle: "Gıda Güvenliği Standartlarınızı Yükseltin",
    ctaDesc: "InduCore'un uyumluluk ve izlenebilirliği nasıl sağladığını görün",
    ctaButton: "Demo Planla",
    backToSolutions: "Çözümlere Dön",
    keyBenefits: "Temel Faydalar",
  },
  de: {
    title: "Lebensmittel- & Getränkeproduktion",
    subtitle: "Vollständige Rückverfolgbarkeits- und Compliance-Lösung für Lebensmittelverarbeitung, Getränkeherstellung und FMCG-Industrien",
    heroStats: [
      { value: "100%", label: "Rückverfolgbarkeit" },
      { value: "35%", label: "Abfallreduzierung" },
      { value: "FDA", label: "Konform" },
    ],
    overviewTitle: "Exzellenz in lebensmittelsicherer Produktion",
    overviewDesc: "Vom Feld bis zum Teller - verwalten Sie jeden Schritt Ihrer Lebensmittel- und Getränkeproduktion mit vollständiger Rückverfolgbarkeit, Qualitätskontrolle und regulatorischer Compliance.",
    features: [
      {
        icon: Thermometer,
        title: "Kühlkettenüberwachung",
        desc: "Echtzeit-Temperaturverfolgung mit automatischen Warnungen und HACCP-Konformitätsdokumentation",
      },
      {
        icon: Timer,
        title: "Haltbarkeitsmanagement",
        desc: "Verfolgen Sie Verfallsdaten, Mindesthaltbarkeitsdaten und implementieren Sie FEFO-Kommissionierstrategien",
      },
      {
        icon: Shield,
        title: "Qualität & HACCP",
        desc: "Integrierte HACCP-Protokolle, Allergenmanagement und Qualitätsprüfungs-Workflows",
      },
      {
        icon: Leaf,
        title: "Zutatenverfolgung",
        desc: "Vollständige Zutatenverfolgung vom Lieferanten zum Endprodukt mit Rückruffähigkeiten",
      },
      {
        icon: Package,
        title: "Rezeptverwaltung",
        desc: "Verwalten Sie Rezepturen, Nährwertberechnungen und Chargengrößen mit Präzision",
      },
      {
        icon: FileCheck,
        title: "Regulatorische Compliance",
        desc: "FDA, FSMA, EU-Vorschriften und länderspezifische Lebensmittelsicherheitsdokumentation",
      },
    ],
    benefits: [
      "100% Chargenverfolgbarkeit in unter 30 Sekunden",
      "Lebensmittelverschwendung durch intelligente Bestandsrotation reduzieren",
      "Allergenverfolgung und Kennzeichnungs-Compliance automatisieren",
      "Rückrufmanagement und Probeallarme optimieren",
      "FDA, FSMA und internationale Lebensmittelsicherheitsstandards erfüllen",
    ],
    ctaTitle: "Heben Sie Ihre Lebensmittelsicherheitsstandards an",
    ctaDesc: "Erfahren Sie, wie InduCore Compliance und Rückverfolgbarkeit sicherstellt",
    ctaButton: "Demo vereinbaren",
    backToSolutions: "Zurück zu Lösungen",
    keyBenefits: "Hauptvorteile",
  },
  ru: {
    title: "Производство продуктов питания и напитков",
    subtitle: "Комплексное решение для отслеживания и соответствия требованиям пищевой промышленности и производства напитков",
    heroStats: [
      { value: "100%", label: "Прослеживаемость" },
      { value: "35%", label: "Сокращение отходов" },
      { value: "FDA", label: "Соответствие" },
    ],
    overviewTitle: "Безопасное пищевое производство",
    overviewDesc: "От фермы до стола - управляйте каждым этапом производства продуктов питания и напитков с полной прослеживаемостью, контролем качества и соответствием требованиям.",
    features: [
      {
        icon: Thermometer,
        title: "Мониторинг холодовой цепи",
        desc: "Отслеживание температуры в реальном времени с автоматическими оповещениями и документацией HACCP",
      },
      {
        icon: Timer,
        title: "Управление сроками годности",
        desc: "Отслеживание сроков годности и реализация стратегий FEFO",
      },
      {
        icon: Shield,
        title: "Качество и HACCP",
        desc: "Встроенные протоколы HACCP, управление аллергенами и рабочие процессы проверки качества",
      },
      {
        icon: Leaf,
        title: "Отслеживание ингредиентов",
        desc: "Полное отслеживание ингредиентов от поставщика до готового продукта с возможностью отзыва",
      },
      {
        icon: Package,
        title: "Управление рецептурами",
        desc: "Управление рецептурами, расчет питательной ценности и масштабирование партий",
      },
      {
        icon: FileCheck,
        title: "Соответствие требованиям",
        desc: "FDA, FSMA, регламенты ЕС и документация по безопасности пищевых продуктов",
      },
    ],
    benefits: [
      "100% прослеживаемость партий менее чем за 30 секунд",
      "Сокращение пищевых отходов благодаря интеллектуальной ротации",
      "Автоматизация отслеживания аллергенов и соответствия маркировке",
      "Оптимизация управления отзывами и учебных отзывов",
      "Соответствие стандартам FDA, FSMA и международным стандартам безопасности",
    ],
    ctaTitle: "Повысьте стандарты пищевой безопасности",
    ctaDesc: "Узнайте, как InduCore обеспечивает соответствие и прослеживаемость",
    ctaButton: "Запланировать демо",
    backToSolutions: "К решениям",
    keyBenefits: "Ключевые преимущества",
  },
  pl: {
    title: "Produkcja Żywności i Napojów",
    subtitle: "Kompleksowe rozwiązanie do śledzenia i zgodności dla przetwórstwa spożywczego i produkcji napojów",
    heroStats: [
      { value: "100%", label: "Identyfikowalność" },
      { value: "35%", label: "Redukcja Odpadów" },
      { value: "FDA", label: "Zgodność" },
    ],
    overviewTitle: "Doskonałość w bezpiecznej produkcji żywności",
    overviewDesc: "Od pola do stołu - zarządzaj każdym etapem produkcji żywności i napojów z pełną identyfikowalnością, kontrolą jakości i zgodnością regulacyjną.",
    features: [
      {
        icon: Thermometer,
        title: "Monitoring Łańcucha Chłodniczego",
        desc: "Śledzenie temperatury w czasie rzeczywistym z automatycznymi alertami i dokumentacją zgodności HACCP",
      },
      {
        icon: Timer,
        title: "Zarządzanie Trwałością",
        desc: "Śledź daty ważności i wdrażaj strategie kompletacji FEFO",
      },
      {
        icon: Shield,
        title: "Jakość & HACCP",
        desc: "Wbudowane protokoły HACCP, zarządzanie alergenami i przepływy kontroli jakości",
      },
      {
        icon: Leaf,
        title: "Śledzenie Składników",
        desc: "Pełne śledzenie składników od dostawcy do produktu końcowego z możliwością wycofania",
      },
      {
        icon: Package,
        title: "Zarządzanie Recepturami",
        desc: "Zarządzaj formulacjami, obliczeniami żywieniowymi i skalowaniem partii z precyzją",
      },
      {
        icon: FileCheck,
        title: "Zgodność Regulacyjna",
        desc: "FDA, FSMA, przepisy UE i dokumentacja bezpieczeństwa żywności",
      },
    ],
    benefits: [
      "100% identyfikowalność partii w mniej niż 30 sekund",
      "Redukcja marnotrawstwa żywności dzięki inteligentnej rotacji zapasów",
      "Automatyzacja śledzenia alergenów i zgodności etykietowania",
      "Usprawnienie zarządzania wycofaniami i symulacjami wycofań",
      "Spełnienie standardów FDA, FSMA i międzynarodowych standardów bezpieczeństwa",
    ],
    ctaTitle: "Podnieś Standardy Bezpieczeństwa Żywności",
    ctaDesc: "Zobacz, jak InduCore zapewnia zgodność i identyfikowalność",
    ctaButton: "Zaplanuj Demo",
    backToSolutions: "Powrót do Rozwiązań",
    keyBenefits: "Kluczowe Korzyści",
  },
  ro: {
    title: "Producția de Alimente și Băuturi",
    subtitle: "Soluție completă de trasabilitate și conformitate pentru industria alimentară și producția de băuturi",
    heroStats: [
      { value: "100%", label: "Trasabilitate" },
      { value: "35%", label: "Reducerea Deșeurilor" },
      { value: "FDA", label: "Conform" },
    ],
    overviewTitle: "Excelență în Producția Alimentară Sigură",
    overviewDesc: "De la fermă la masă, gestionați fiecare pas al producției de alimente și băuturi cu trasabilitate completă, control al calității și conformitate regulatorie.",
    features: [
      {
        icon: Thermometer,
        title: "Monitorizarea Lanțului de Frig",
        desc: "Urmărirea temperaturii în timp real cu alerte automate și documentație HACCP",
      },
      {
        icon: Timer,
        title: "Gestionarea Valabilității",
        desc: "Urmăriți datele de expirare și implementați strategii de picking FEFO",
      },
      {
        icon: Shield,
        title: "Calitate & HACCP",
        desc: "Protocoale HACCP integrate, gestionarea alergenilor și fluxuri de inspecție a calității",
      },
      {
        icon: Leaf,
        title: "Trasabilitatea Ingredientelor",
        desc: "Urmărire completă a ingredientelor de la furnizor la produsul finit cu capacități de retragere",
      },
      {
        icon: Package,
        title: "Gestionarea Rețetelor",
        desc: "Gestionați formulările, calculele nutriționale și scalarea loturilor cu precizie",
      },
      {
        icon: FileCheck,
        title: "Conformitate Regulatorie",
        desc: "FDA, FSMA, reglementări UE și documentație de siguranță alimentară",
      },
    ],
    benefits: [
      "Trasabilitate 100% a loturilor în mai puțin de 30 de secunde",
      "Reduceți risipa alimentară cu rotația inteligentă a inventarului",
      "Automatizați urmărirea alergenilor și conformitatea etichetării",
      "Eficientizați gestionarea retragerilor și simulările de retragere",
      "Îndepliniți standardele FDA, FSMA și standardele internaționale",
    ],
    ctaTitle: "Ridicați Standardele de Siguranță Alimentară",
    ctaDesc: "Vedeți cum InduCore asigură conformitatea și trasabilitatea",
    ctaButton: "Programați un Demo",
    backToSolutions: "Înapoi la Soluții",
    keyBenefits: "Beneficii Cheie",
  },
};

export default function ICFoodBeveragePage() {
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
              <UtensilsCrossed className="w-4 h-4" />
              <span>Food & Beverage</span>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
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
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <Leaf className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">InduCore Food Safety</h3>
                <p className="text-white/80">
                  Comprehensive traceability and compliance for the food and beverage industry.
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
