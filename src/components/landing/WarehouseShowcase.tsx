import { useLanguage } from "./LanguageContext";
import { Warehouse, Package, Barcode, TrendingUp, Sparkles } from "lucide-react";

export function WarehouseShowcase() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const title = {
    ar: "مستودعات حديثة",
    en: "Modern Warehouses",
    ru: "Современные склады",
    uk: "Сучасні склади",
    ro: "Depozite moderne",
    pl: "Nowoczesne magazyny",
    it: "Magazzini moderni",
    tr: "Modern Depolar",
  };

  const subtitle = {
    ar: "نظام متكامل لإدارة مخازن الأقمشة بتقنيات حديثة",
    en: "Complete system for fabric warehouse management with modern technology",
    ru: "Полная система управления складами тканей с современными технологиями",
    uk: "Повна система управління складами тканин з сучасними технологіями",
    ro: "Sistem complet pentru gestionarea depozitelor de țesături cu tehnologie modernă",
    pl: "Kompletny system do zarządzania magazynami tkanin z nowoczesną technologią",
    it: "Sistema completo per la gestione dei magazzini tessili con tecnologia moderna",
    tr: "Modern teknolojiyle kumaş depo yönetimi için eksiksiz sistem",
  };

  const features = [
    {
      icon: Barcode,
      title: {
        ar: "تتبع بالباركود",
        en: "Barcode Tracking",
        ru: "Отслеживание штрих-кодов",
        uk: "Відстеження штрих-кодів",
        ro: "Urmărire coduri de bare",
        pl: "Śledzenie kodów kreskowych",
        it: "Tracciamento codici a barre",
        tr: "Barkod Takibi",
      },
    },
    {
      icon: Package,
      title: {
        ar: "إدارة الرولونات",
        en: "Roll Management",
        ru: "Управление рулонами",
        uk: "Управління рулонами",
        ro: "Gestionare suluri",
        pl: "Zarządzanie rolkami",
        it: "Gestione rotoli",
        tr: "Rulo Yönetimi",
      },
    },
    {
      icon: TrendingUp,
      title: {
        ar: "تحليلات ذكية",
        en: "Smart Analytics",
        ru: "Умная аналитика",
        uk: "Розумна аналітика",
        ro: "Analize inteligente",
        pl: "Inteligentne analizy",
        it: "Analisi intelligenti",
        tr: "Akıllı Analitik",
      },
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-texafab-cream/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 dark:bg-texafab-teal/20 text-texafab-emerald dark:text-texafab-teal text-sm font-semibold mb-4">
            <Warehouse className="w-4 h-4" />
            {getText(title)}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {getText(subtitle)}
          </p>
        </div>

        {/* Main Image Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Container with Animation */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-texafab-emerald/20 via-texafab-teal/20 to-texafab-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20 dark:shadow-black/40 border border-gray-200 dark:border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=90"
                alt="Modern Fabric Warehouse"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 justify-center md:justify-start">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-texafab-emerald to-texafab-teal flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {getText(feature.title)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sparkle Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-texafab-gold/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>TexaCore</span>
              </div>
            </div>
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80",
                alt: "Fabric Rolls",
              },
              {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
                alt: "Textile Factory",
              },
              {
                src: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=400&q=80",
                alt: "Colorful Fabrics",
              },
              {
                src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
                alt: "Fabric Storage",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group/item overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
