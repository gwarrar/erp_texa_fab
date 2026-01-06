import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Scissors,
  Palette,
  Ruler,
  Layers,
  Image,
  Tag,
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Search,
  Star,
  Grid3X3,
  Droplets,
  Thermometer,
  Sparkles,
  Package,
  BarChart3,
  Monitor
} from "lucide-react";

function FabricManagementContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: Grid3X3,
      title: {
        ar: "تصنيف الأقمشة المتقدم",
        en: "Advanced Fabric Classification",
        ru: "Расширенная классификация тканей",
        uk: "Розширена класифікація тканин",
        ro: "Clasificare avansată a țesăturilor",
        pl: "Zaawansowana klasyfikacja tkanin",
        it: "Classificazione avanzata dei tessuti",
        tr: "Gelişmiş Kumaş Sınıflandırması"
      },
      desc: {
        ar: "تصنيف شامل حسب النوع، التركيب، الوزن، العرض، وطريقة النسج",
        en: "Comprehensive classification by type, composition, weight, width, and weave method",
        ru: "Комплексная классификация по типу, составу, весу, ширине и способу переплетения",
        uk: "Комплексна класифікація за типом, складом, вагою, шириною та способом переплетення",
        ro: "Clasificare cuprinzătoare după tip, compoziție, greutate, lățime și metodă de țesere",
        pl: "Kompleksowa klasyfikacja według typu, składu, gramatury, szerokości i metody splotu",
        it: "Classificazione completa per tipo, composizione, peso, larghezza e metodo di tessitura",
        tr: "Tür, bileşim, ağırlık, genişlik ve dokuma yöntemine göre kapsamlı sınıflandırma"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: {
        ar: "إدارة الألوان والتشكيلات",
        en: "Color & Collection Management",
        ru: "Управление цветом и коллекциями",
        uk: "Управління кольором та колекціями",
        ro: "Gestionarea culorilor și colecțiilor",
        pl: "Zarządzanie kolorami i kolekcjami",
        it: "Gestione colori e collezioni",
        tr: "Renk ve Koleksiyon Yönetimi"
      },
      desc: {
        ar: "مكتبة ألوان متكاملة مع أكواد Pantone وتشكيلات موسمية",
        en: "Complete color library with Pantone codes and seasonal collections",
        ru: "Полная библиотека цветов с кодами Pantone и сезонными коллекциями",
        uk: "Повна бібліотека кольорів з кодами Pantone та сезонними колекціями",
        ro: "Bibliotecă completă de culori cu coduri Pantone și colecții sezoniere",
        pl: "Kompletna biblioteka kolorów z kodami Pantone i kolekcjami sezonowymi",
        it: "Libreria colori completa con codici Pantone e collezioni stagionali",
        tr: "Pantone kodları ve sezonluk koleksiyonlarla eksiksiz renk kütüphanesi"
      },
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Ruler,
      title: {
        ar: "حساب الأمتار والياردات",
        en: "Meters & Yards Calculation",
        ru: "Расчет метров и ярдов",
        uk: "Розрахунок метрів і ярдів",
        ro: "Calcul metri și yarzi",
        pl: "Obliczanie metrów i jardów",
        it: "Calcolo metri e iarde",
        tr: "Metre ve Yarda Hesaplama"
      },
      desc: {
        ar: "تحويل تلقائي بين وحدات القياس مع حساب دقيق للمساحات",
        en: "Automatic conversion between units with precise area calculations",
        ru: "Автоматическое преобразование единиц с точным расчетом площади",
        uk: "Автоматичне перетворення одиниць з точним розрахунком площі",
        ro: "Conversie automată între unități cu calcule precise ale ariei",
        pl: "Automatyczna konwersja jednostek z precyzyjnymi obliczeniami powierzchni",
        it: "Conversione automatica tra unità con calcoli precisi dell'area",
        tr: "Hassas alan hesaplamalarıyla birimler arası otomatik dönüşüm"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      title: {
        ar: "إدارة العيوب والدرجات",
        en: "Defects & Grading",
        ru: "Дефекты и сортировка",
        uk: "Дефекти та сортування",
        ro: "Defecte și clasificare",
        pl: "Wady i klasyfikacja",
        it: "Difetti e classificazione",
        tr: "Kusurlar ve Derecelendirme"
      },
      desc: {
        ar: "تصنيف الجودة (Grade A, B, C) مع توثيق العيوب بالصور",
        en: "Quality grading (Grade A, B, C) with photo documentation of defects",
        ru: "Сортировка качества (Grade A, B, C) с фотодокументацией дефектов",
        uk: "Сортування якості (Grade A, B, C) з фотодокументацією дефектів",
        ro: "Clasificarea calității (Grade A, B, C) cu documentare foto a defectelor",
        pl: "Klasyfikacja jakości (Grade A, B, C) z dokumentacją zdjęciową wad",
        it: "Classificazione della qualità (Grade A, B, C) con documentazione fotografica dei difetti",
        tr: "Kusurların fotoğraflı belgelendirmesi ile kalite derecelendirmesi (A, B, C Sınıfı)"
      },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Image,
      title: {
        ar: "صور متعددة لكل منتج",
        en: "Multiple Product Images",
        ru: "Несколько изображений продукта",
        uk: "Кілька зображень продукту",
        ro: "Imagini multiple ale produsului",
        pl: "Wiele zdjęć produktu",
        it: "Immagini multiple del prodotto",
        tr: "Çoklu Ürün Görselleri"
      },
      desc: {
        ar: "صور عالية الجودة من زوايا متعددة مع إمكانية التكبير",
        en: "High-quality images from multiple angles with zoom capability",
        ru: "Высококачественные изображения с разных ракурсов с возможностью масштабирования",
        uk: "Високоякісні зображення з різних ракурсів з можливістю масштабування",
        ro: "Imagini de înaltă calitate din unghiuri multiple cu capacitate de zoom",
        pl: "Wysokiej jakości zdjęcia z wielu kątów z możliwością powiększania",
        it: "Immagini di alta qualità da più angolazioni con capacità di zoom",
        tr: "Yakınlaştırma özellikli, çok açılı yüksek kaliteli görseller"
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Tag,
      title: {
        ar: "ربط بالموردين الأصليين",
        en: "Original Supplier Linking",
        ru: "Связь с оригинальным поставщиком",
        uk: "Зв'язок з оригінальним постачальником",
        ro: "Legătură cu furnizorul original",
        pl: "Powiązanie z oryginalnym dostawcą",
        it: "Collegamento al fornitore originale",
        tr: "Orijinal Tedarikçi Bağlantısı"
      },
      desc: {
        ar: "تتبع مصدر كل قماش والمورد الأصلي مع تاريخ الشراء",
        en: "Track the source of each fabric and original supplier with purchase date",
        ru: "Отслеживание источника каждой ткани и оригинального поставщика с датой покупки",
        uk: "Відстеження джерела кожної тканини та оригінального постачальника з датою покупки",
        ro: "Urmăriți sursa fiecărei țesături și furnizorul original cu data achiziției",
        pl: "Śledź źródło każdej tkaniny i oryginalnego dostawcę wraz z datą zakupu",
        it: "Traccia la fonte di ogni tessuto e il fornitore originale con la data di acquisto",
        tr: "Her kumaşın kaynağını ve satın alma tarihiyle orijinal tedarikçisini takip edin"
      },
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const technicalSpecs = [
    {
      icon: Scale,
      label: {
        ar: "الوزن (GSM)",
        en: "Weight (GSM)",
        ru: "Вес (GSM)",
        uk: "Вага (GSM)",
        ro: "Greutate (GSM)",
        pl: "Gramatura (GSM)",
        it: "Peso (GSM)",
        tr: "Ağırlık (GSM)"
      },
      desc: {
        ar: "جرام لكل متر مربع",
        en: "Grams per square meter",
        ru: "Грамм на квадратный метр",
        uk: "Грам на квадратний метр",
        ro: "Grame pe metru pătrat",
        pl: "Gramów na metr kwadratowy",
        it: "Grammi per metro quadrato",
        tr: "Metrekare başına gram"
      }
    },
    {
      icon: Ruler,
      label: {
        ar: "العرض",
        en: "Width",
        ru: "Ширина",
        uk: "Ширина",
        ro: "Lățime",
        pl: "Szerokość",
        it: "Larghezza",
        tr: "Genişlik"
      },
      desc: {
        ar: "بالسنتيمتر أو البوصة",
        en: "In cm or inches",
        ru: "В см или дюймах",
        uk: "В см або дюймах",
        ro: "În cm sau inchi",
        pl: "W cm lub calach",
        it: "In cm o pollici",
        tr: "Cm veya inç cinsinden"
      }
    },
    {
      icon: Layers,
      label: {
        ar: "التركيب",
        en: "Composition",
        ru: "Состав",
        uk: "Склад",
        ro: "Compoziție",
        pl: "Skład",
        it: "Composizione",
        tr: "Bileşim"
      },
      desc: {
        ar: "نسبة الألياف (قطن، بوليستر...)",
        en: "Fiber percentage (cotton, polyester...)",
        ru: "Процент волокон (хлопок, полиэстер...)",
        uk: "Відсоток волокон (бавовна, поліестер...)",
        ro: "Procentaj fibre (bumbac, poliester...)",
        pl: "Procent włókien (bawełna, poliester...)",
        it: "Percentuale fibre (cotone, poliestere...)",
        tr: "Elyaf yüzdesi (pamuk, polyester...)"
      }
    },
    {
      icon: Droplets,
      label: {
        ar: "معالجة المياه",
        en: "Water Treatment",
        ru: "Водоотталкивающая обработка",
        uk: "Водовідштовхувальна обробка",
        ro: "Tratament apă",
        pl: "Obróbka wodna",
        it: "Trattamento acqua",
        tr: "Su İşleme"
      },
      desc: {
        ar: "مقاومة الماء والبقع",
        en: "Water and stain resistance",
        ru: "Устойчивость к воде и пятнам",
        uk: "Стійкість до води та плям",
        ro: "Rezistență la apă și pete",
        pl: "Odporność na wodę i plamy",
        it: "Resistenza all'acqua e alle macchie",
        tr: "Su ve leke direnci"
      }
    },
    {
      icon: Thermometer,
      label: {
        ar: "درجة الحرارة",
        en: "Temperature",
        ru: "Температура",
        uk: "Температура",
        ro: "Temperatură",
        pl: "Temperatura",
        it: "Temperatura",
        tr: "Sıcaklık"
      },
      desc: {
        ar: "درجة حرارة الكي والغسيل",
        en: "Ironing and washing temperature",
        ru: "Температура глажки и стирки",
        uk: "Температура прасування та прання",
        ro: "Temperatura de călcare și spălare",
        pl: "Temperatura prasowania i prania",
        it: "Temperatura di stiratura e lavaggio",
        tr: "Ütüleme ve yıkama sıcaklığı"
      }
    },
    {
      icon: Sparkles,
      label: {
        ar: "المعالجات الخاصة",
        en: "Special Treatments",
        ru: "Специальные обработки",
        uk: "Спеціальні обробки",
        ro: "Tratamente speciale",
        pl: "Specjalne zabiegi",
        it: "Trattamenti speciali",
        tr: "Özel İşlemler"
      },
      desc: {
        ar: "مضاد للبكتيريا، مقاوم للحريق...",
        en: "Anti-bacterial, fire resistant...",
        ru: "Антибактериальная, огнестойкая...",
        uk: "Антибактеріальна, вогнестійка...",
        ro: "Antibacterian, rezistent la foc...",
        pl: "Antybakteryjne, ognioodporne...",
        it: "Antibatterico, resistente al fuoco...",
        tr: "Antibakteriyel, yangına dayanıklı..."
      }
    }
  ];

  const fabricTypes = [
    { ar: "قطن 100%", en: "100% Cotton", ru: "100% Хлопок", uk: "100% Бавовна", ro: "100% Bumbac", pl: "100% Bawełna", it: "100% Cotone", tr: "%100 Pamuk" },
    { ar: "بوليستر", en: "Polyester", ru: "Полиэстер", uk: "Поліестер", ro: "Poliester", pl: "Poliester", it: "Poliestere", tr: "Polyester" },
    { ar: "حرير", en: "Silk", ru: "Шелк", uk: "Шовк", ro: "Mătase", pl: "Jedwab", it: "Seta", tr: "İpek" },
    { ar: "كتان", en: "Linen", ru: "Лен", uk: "Льон", ro: "In", pl: "Len", it: "Lino", tr: "Keten" },
    { ar: "صوف", en: "Wool", ru: "Шерсть", uk: "Вовна", ro: "Lână", pl: "Wełna", it: "Lana", tr: "Yün" },
    { ar: "جلد صناعي", en: "Synthetic Leather", ru: "Искусственная кожа", uk: "Штучна шкіра", ro: "Piele sintetică", pl: "Skóra syntetyczna", it: "Pelle sintetica", tr: "Suni Deri" },
    { ar: "دنيم", en: "Denim", ru: "Деним", uk: "Денім", ro: "Denim", pl: "Dżins", it: "Denim", tr: "Kot" },
    { ar: "شيفون", en: "Chiffon", ru: "Шифон", uk: "Шифон", ro: "Șifon", pl: "Szyfon", it: "Chiffon", tr: "Şifon" },
    { ar: "ساتان", en: "Satin", ru: "Сатин", uk: "Сатин", ro: "Satin", pl: "Satyna", it: "Raso", tr: "Saten" },
    { ar: "جيرسي", en: "Jersey", ru: "Джерси", uk: "Джерсі", ro: "Jerseu", pl: "Dżersej", it: "Jersey", tr: "Jarse" },
    { ar: "تول", en: "Tulle", ru: "Тюль", uk: "Тюль", ro: "Tul", pl: "Tiul", it: "Tulle", tr: "Tül" },
    { ar: "مخمل", en: "Velvet", ru: "Бархат", uk: "Оксамит", ro: "Catifea", pl: "Aksamit", it: "Velluto", tr: "Kadife" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Scissors className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">
                {getText({
                  ar: "إدارة الأقمشة المتخصصة",
                  en: "Specialized Fabric Management",
                  ru: "Специализированное управление тканями",
                  uk: "Спеціалізоване управління тканинами",
                  ro: "Management specializat al țesăturilor",
                  pl: "Specjalistyczne zarządzanie tkaninami",
                  it: "Gestione specializzata dei tessuti",
                  tr: "Uzmanlaşmış Kumaş Yönetimi"
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>إدارة <span className="text-purple-500">متقدمة للأقمشة</span></>
              ) : (
                <>
                  {getText({
                    en: "Advanced ",
                    ru: "Продвинутое ",
                    uk: "Просунуте ",
                    ro: "Management ",
                    pl: "Zaawansowane ",
                    it: "Gestione ",
                    tr: "Gelişmiş "
                  })}
                  <span className="text-purple-500">
                    {getText({
                      en: "Fabric Management",
                      ru: "управление тканями",
                      uk: "управління тканинами",
                      ro: "avansat al țesăturilor",
                      pl: "zarządzanie tkaninami",
                      it: "avanzata dei tessuti",
                      tr: "Kumaş Yönetimi"
                    })}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({
                ar: "نظام شامل لإدارة جميع أنواع الأقمشة مع تصنيف دقيق ومواصفات تقنية تفصيلية",
                en: "Comprehensive system for managing all fabric types with precise classification and detailed technical specifications",
                ru: "Комплексная система для управления всеми типами тканей с точной классификацией и подробными техническими характеристиками",
                uk: "Комплексна система для управління всіма типами тканин з точною класифікацією та детальними технічними характеристиками",
                ro: "Sistem cuprinzător pentru gestionarea tuturor tipurilor de țesături cu clasificare precisă și specificații tehnice detaliate",
                pl: "Kompleksowy system do zarządzania wszystkimi rodzajami tkanin z precyzyjną klasyfikacją i szczegółowymi specyfikacjami technicznymi",
                it: "Sistema completo per la gestione di tutti i tipi di tessuto con classificazione precisa e specifiche tecniche dettagliate",
                tr: "Hassas sınıflandırma ve ayrıntılı teknik özelliklerle tüm kumaş türlerini yönetmek için kapsamlı sistem"
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-purple-500 hover:bg-purple-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-purple-500/25">
                  {getText({
                    ar: "احجز عرض توضيحي",
                    en: "Book a Demo",
                    ru: "Заказать демо",
                    uk: "Замовити демо",
                    ro: "Rezervă un demo",
                    pl: "Zamów demo",
                    it: "Prenota una demo",
                    tr: "Demo Rezervasyonu"
                  })}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-texafab-slate">
              {getText({
                ar: "أنواع الأقمشة المدعومة",
                en: "Supported Fabric Types",
                ru: "Поддерживаемые типы тканей",
                uk: "Підтримувані типи тканин",
                ro: "Tipuri de țesături acceptate",
                pl: "Obsługiwane rodzaje tkanin",
                it: "Tipi di tessuto supportati",
                tr: "Desteklenen Kumaş Türleri"
              })}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {fabricTypes.map((type, index) => (
              <span key={index} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                {getText(type)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({
                ar: "مميزات إدارة الأقمشة",
                en: "Fabric Management Features",
                ru: "Функции управления тканями",
                uk: "Функції управління тканинами",
                ro: "Caracteristici de gestionare a țesăturilor",
                pl: "Funkcje zarządzania tkaninami",
                it: "Caratteristiche di gestione dei tessuti",
                tr: "Kumaş Yönetimi Özellikleri"
              })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({
                ar: "أدوات متخصصة لصناعة الأقمشة والنسيج",
                en: "Specialized tools for the textile and fabric industry",
                ru: "Специализированные инструменты для текстильной и тканевой промышленности",
                uk: "Спеціалізовані інструменти для текстильної та тканинної промисловості",
                ro: "Instrumente specializate pentru industria textilă și a țesăturilor",
                pl: "Specjalistyczne narzędzia dla przemysłu tekstylnego i tkanin",
                it: "Strumenti specializzati per l'industria tessile e dei tessuti",
                tr: "Tekstil ve kumaş endüstrisi için uzmanlaşmış araçlar"
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

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <FileText className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">
                  {getText({
                    ar: "المواصفات التقنية",
                    en: "Technical Specifications",
                    ru: "Технические характеристики",
                    uk: "Технічні характеристики",
                    ro: "Specificații tehnice",
                    pl: "Specyfikacje techniczne",
                    it: "Specifiche tecniche",
                    tr: "Teknik Özellikler"
                  })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({
                  ar: "بيانات تقنية شاملة لكل قماش",
                  en: "Comprehensive Technical Data for Each Fabric",
                  ru: "Исчерпывающие технические данные для каждой ткани",
                  uk: "Вичерпні технічні дані для кожної тканини",
                  ro: "Date tehnice cuprinzătoare pentru fiecare țesătură",
                  pl: "Kompleksowe dane techniczne для każdej tkaniny",
                  it: "Dati tecnici completi per ogni tessuto",
                  tr: "Her Kumaş İçin Kapsamlı Teknik Veriler"
                })}
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                {getText({
                  ar: "سجل جميع المواصفات التقنية للأقمشة بدقة عالية لتسهيل البحث والمقارنة",
                  en: "Record all fabric technical specifications with high precision for easy search and comparison",
                  ru: "Записывайте все технические характеристики тканей с высокой точностью для удобного поиска и сравнения",
                  uk: "Записуйте всі технічні характеристики тканин з високою точністю для зручного пошуку та порівняння",
                  ro: "Înregistrați toate specificațiile tehnice ale țesăturilor cu mare precizie pentru căutare și comparare ușoară",
                  pl: "Rejestruj wszystkie specyfikacje techniczne tkanin z dużą precyzją, aby ułatwić wyszukiwanie i porównywanie",
                  it: "Registra tutte le specifiche tecniche dei tessuti con alta precisione per una facile ricerca e confronto",
                  tr: "Kolay arama ve karşılaştırma için tüm kumaş teknik özelliklerini yüksek hassasiyetle kaydedin"
                })}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-texafab-slate text-sm">
                        {getText(spec.label)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {getText(spec.desc)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl rounded-3xl">
              <h3 className="text-xl font-bold text-texafab-slate mb-6">
                {getText({
                  ar: "مثال على بطاقة القماش",
                  en: "Fabric Card Example",
                  ru: "Пример карты ткани",
                  uk: "Приклад карти тканини",
                  ro: "Exemplu card țesătură",
                  pl: "Przykład karty tkaniny",
                  it: "Esempio scheda tessuto",
                  tr: "Kumaş Kartı Örneği"
                })}
              </h3>
              
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center">
                  <Image className="w-16 h-16 text-purple-400" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{getText({ ar: "الاسم", en: "Name", ru: "Имя", uk: "Ім'я", ro: "Nume", pl: "Nazwa", it: "Nome", tr: "İsim" })}</span>
                    <span className="font-semibold">Cotton Twill Premium</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{getText({ ar: "الوزن", en: "Weight", ru: "Вес", uk: "Вага", ro: "Greutate", pl: "Waga", it: "Peso", tr: "Ağırlık" })}</span>
                    <span className="font-semibold">280 GSM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{getText({ ar: "العرض", en: "Width", ru: "Ширина", uk: "Ширина", ro: "Lățime", pl: "Szerokość", it: "Larghezza", tr: "Genişlik" })}</span>
                    <span className="font-semibold">150 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{getText({ ar: "التركيب", en: "Composition", ru: "Состав", uk: "Склад", ro: "Compoziție", pl: "Skład", it: "Composizione", tr: "Bileşim" })}</span>
                    <span className="font-semibold">100% Cotton</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{getText({ ar: "الدرجة", en: "Grade", ru: "Сорт", uk: "Сорт", ro: "Grad", pl: "Klasa", it: "Grado", tr: "Derece" })}</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">A+</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* System Screenshot */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Monitor className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">
                {getText({
                  ar: "واجهة الأقمشة",
                  en: "Fabric Interface",
                  ru: "Интерфейс тканей",
                  uk: "Інтерфейс тканин",
                  ro: "Interfață țesături",
                  pl: "Interfejs tkanin",
                  it: "Interfaccia tessuti",
                  tr: "Kumaş Arayüzü"
                })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText({
                ar: "إدارة الأقمشة المتقدمة",
                en: "Advanced Fabric Management",
                ru: "Продвинутое управление тканями",
                uk: "Просунуте управління тканинами",
                ro: "Management avansat al țesăturilor",
                pl: "Zaawansowane zarządzanie tkaninami",
                it: "Gestione avanzata dei tessuti",
                tr: "Gelişmiş Kumaş Yönetimi"
              })}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText({
                ar: "واجهة شاملة لإدارة جميع أنواع الأقمشة والرولونات",
                en: "Comprehensive interface for managing all fabric types and rolls",
                ru: "Комплексный интерфейс для управления всеми типами тканей и рулонов",
                uk: "Комплексний інтерфейс для управління всіма типами тканин і рулонів",
                ro: "Interfață cuprinzătoare pentru gestionarea tuturor tipurilor de țesături și role",
                pl: "Kompleksowy interfejs do zarządzania wszystkimi rodzajami tkanin i rolek",
                it: "Interfaccia completa per la gestione di tutti i tipi di tessuto e rotoli",
                tr: "Tüm kumaş türlerini ve ruloları yönetmek için kapsamlı arayüz"
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <BrowserMockup 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=90" 
                alt={getText({
                  ar: "إدارة الأقمشة",
                  en: "Fabric Management",
                  ru: "Управление тканями",
                  uk: "Управління тканинами",
                  ro: "Managementul țesăturilor",
                  pl: "Zarządzanie tkaninami",
                  it: "Gestione tessuti",
                  tr: "Kumaş Yönetimi"
                })}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {getText({
                  ar: "لوحة إدارة الأقمشة والمخزون",
                  en: "Fabric & Inventory Management Dashboard",
                  ru: "Панель управления тканями и запасами",
                  uk: "Панель управління тканинами та запасами",
                  ro: "Tablou de bord pentru gestionarea țesăturilor și stocurilor",
                  pl: "Panel zarządzania tkaninami i zapasami",
                  it: "Dashboard gestione tessuti e inventario",
                  tr: "Kumaş ve Envanter Yönetim Paneli"
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText({
                ar: "بحث وفلترة متقدمة",
                en: "Advanced Search & Filter",
                ru: "Расширенный поиск и фильтрация",
                uk: "Розширений пошук і фільтрація",
                ro: "Căutare și filtrare avansată",
                pl: "Zaawansowane wyszukiwanie i filtrowanie",
                it: "Ricerca e filtro avanzati",
                tr: "Gelişmiş Arama ve Filtreleme"
              })}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {getText({
                ar: "ابحث عن أي قماش بسهولة باستخدام فلاتر متعددة",
                en: "Easily find any fabric using multiple filters",
                ru: "Легко находите любую ткань, используя несколько фильтров",
                uk: "Легко знаходьте будь-яку тканину за допомогою кількох фільтрів",
                ro: "Găsiți cu ușurință orice țesătură folosind filtre multiple",
                pl: "Łatwo znajdź dowolną tkaninę za pomocą wielu filtrów",
                it: "Trova facilmente qualsiasi tessuto utilizzando filtri multipli",
                tr: "Birden fazla filtre kullanarak herhangi bir kumaşı kolayca bulun"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ar: "البحث بالاسم أو الكود", en: "Search by name or code", ru: "Поиск по имени или коду", uk: "Пошук за назвою або кодом", ro: "Căutare după nume sau cod", pl: "Szukaj według nazwy lub kodu", it: "Cerca per nome o codice", tr: "İsim veya kod ile arama" },
              { ar: "فلترة حسب النوع", en: "Filter by type", ru: "Фильтр по типу", uk: "Фільтр за типом", ro: "Filtrare după tip", pl: "Filtruj według typu", it: "Filtra per tipo", tr: "Türe göre filtrele" },
              { ar: "فلترة حسب اللون", en: "Filter by color", ru: "Фильтр по цвету", uk: "Фільтр за кольором", ro: "Filtrare după culoare", pl: "Filtruj według koloru", it: "Filtra per colore", tr: "Renge göre filtrele" },
              { ar: "فلترة حسب السعر", en: "Filter by price", ru: "Фильтр по цене", uk: "Фільтр за ціною", ro: "Filtrare după preț", pl: "Filtruj według ceny", it: "Filtra per prezzo", tr: "Fiyata göre filtrele" },
              { ar: "فلترة حسب التركيب", en: "Filter by composition", ru: "Фильтр по составу", uk: "Фільтр за складом", ro: "Filtrare după compoziție", pl: "Filtruj według składu", it: "Filtra per composizione", tr: "Bileşime göre filtrele" },
              { ar: "فلترة حسب المورد", en: "Filter by supplier", ru: "Фильтр по поставщику", uk: "Фільтр за постачальником", ro: "Filtrare după furnizor", pl: "Filtruj według dostawcy", it: "Filtra per fornitore", tr: "Tedarikçiye göre filtrele" },
              { ar: "فلترة حسب الدرجة", en: "Filter by grade", ru: "Фильтр по сорту", uk: "Фільтр за сортом", ro: "Filtrare după grad", pl: "Filtruj według klasy", it: "Filtra per grado", tr: "Dereceye göre filtrele" },
              { ar: "فلترة حسب التوفر", en: "Filter by availability", ru: "Фильтр по наличию", uk: "Фільтр за наявністю", ro: "Filtrare după disponibilitate", pl: "Filtruj według dostępności", it: "Filtra per disponibilità", tr: "Mevcudiyete göre filtrele" }
            ].map((filter, index) => (
              <Card key={index} className="p-4 bg-white/10 backdrop-blur-xl border-white/20 rounded-xl flex items-center gap-3">
                <Search className="w-5 h-5 text-white/60" />
                <span className="text-white font-medium">
                  {getText(filter)}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FabricManagementPage() {
  return <FabricManagementContent />;
}
