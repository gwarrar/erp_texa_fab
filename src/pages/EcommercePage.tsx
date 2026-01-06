import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShoppingBag,
  CreditCard,
  Truck,
  Search,
  Filter,
  Heart,
  Star,
  Package,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Globe,
  Shield,
  Tag,
  Percent,
  RefreshCw,
  MessageCircle,
  Image,
  Palette,
  BarChart3,
  Zap,
  Bell,
  Users
} from "lucide-react";

function EcommerceContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: Image,
      title: {
        ar: "كتالوج منتجات متكامل",
        en: "Complete Product Catalog",
        ru: "Полный каталог продукции",
        uk: "Повний каталог продукції",
        ro: "Catalog complet de produse",
        pl: "Kompletny katalog produktów",
        it: "Catalogo prodotti completo",
        tr: "Tam Ürün Kataloğu"
      },
      desc: {
        ar: "صور عالية الجودة من زوايا متعددة مع وصف تفصيلي لكل منتج",
        en: "High-quality images from multiple angles with detailed descriptions",
        ru: "Высококачественные изображения с разных ракурсов с подробным описанием",
        uk: "Високоякісні зображення з різних ракурсів з детальним описом",
        ro: "Imagini de înaltă calitate din unghiuri multiple cu descrieri detaliate",
        pl: "Wysokiej jakości zdjęcia z wielu kątów ze szczegółowymi opisami",
        it: "Immagini di alta qualità da più angolazioni con descrizioni dettagliate",
        tr: "Ayrıntılı açıklamalarla birden fazla açıdan yüksek kaliteli görseller"
      },
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Filter,
      title: {
        ar: "فلترة متقدمة",
        en: "Advanced Filtering",
        ru: "Расширенная фильтрация",
        uk: "Розширена фільтрація",
        ro: "Filtrare avansată",
        pl: "Zaawansowane filtrowanie",
        it: "Filtro avanzato",
        tr: "Gelişmiş Filtreleme"
      },
      desc: {
        ar: "فلترة حسب النوع، اللون، السعر، المقاس، والتوفر",
        en: "Filter by type, color, price, size, and availability",
        ru: "Фильтр по типу, цвету, цене, размеру и наличию",
        uk: "Фільтр за типом, кольором, ціною, розміром та наявністю",
        ro: "Filtrare după tip, culoare, preț, mărime și disponibilitate",
        pl: "Filtruj według typu, koloru, ceny, rozmiaru i dostępności",
        it: "Filtra per tipo, colore, prezzo, taglia e disponibilità",
        tr: "Tür, renk, fiyat, beden ve bulunabilirliğe göre filtrele"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingBag,
      title: {
        ar: "عربة تسوق ذكية",
        en: "Smart Shopping Cart",
        ru: "Умная корзина покупок",
        uk: "Розумний кошик покупок",
        ro: "Coș de cumpărături inteligent",
        pl: "Inteligentny koszyk",
        it: "Carrello intelligente",
        tr: "Akıllı Alışveriş Sepeti"
      },
      desc: {
        ar: "حساب تلقائي للأسعار مع الخصومات والشحن",
        en: "Automatic price calculation with discounts and shipping",
        ru: "Автоматический расчет цены со скидками и доставкой",
        uk: "Автоматичний розрахунок ціни зі знижками та доставкою",
        ro: "Calcul automat al prețului cu reduceri și transport",
        pl: "Automatyczne obliczanie ceny z rabatami i wysyłką",
        it: "Calcolo automatico del prezzo con sconti e spedizione",
        tr: "İndirimler ve kargo ile otomatik fiyat hesaplama"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      title: {
        ar: "بوابات دفع متعددة",
        en: "Multiple Payment Gateways",
        ru: "Несколько платежных шлюзов",
        uk: "Кілька платіжних шлюзів",
        ro: "Multiple gateway-uri de plată",
        pl: "Wiele bramek płatności",
        it: "Gateway di pagamento multipli",
        tr: "Çoklu Ödeme Ağ geçitleri"
      },
      desc: {
        ar: "دعم mada، Apple Pay، Visa، Mastercard، والتحويل البنكي",
        en: "Support for mada, Apple Pay, Visa, Mastercard, and bank transfer",
        ru: "Поддержка mada, Apple Pay, Visa, Mastercard и банковского перевода",
        uk: "Підтримка mada, Apple Pay, Visa, Mastercard та банківського переказу",
        ro: "Suport pentru mada, Apple Pay, Visa, Mastercard și transfer bancar",
        pl: "Obsługa mada, Apple Pay, Visa, Mastercard i przelewów bankowych",
        it: "Supporto per mada, Apple Pay, Visa, Mastercard e bonifico bancario",
        tr: "mada, Apple Pay, Visa, Mastercard ve banka havalesi desteği"
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Truck,
      title: {
        ar: "حساب تكاليف الشحن",
        en: "Shipping Cost Calculator",
        ru: "Калькулятор стоимости доставки",
        uk: "Калькулятор вартості доставки",
        ro: "Calculator cost transport",
        pl: "Kalkulator kosztów wysyłki",
        it: "Calcolatore costi di spedizione",
        tr: "Kargo Maliyeti Hesaplayıcı"
      },
      desc: {
        ar: "حساب تلقائي لتكاليف الشحن حسب الموقع والوزن",
        en: "Automatic shipping cost calculation by location and weight",
        ru: "Автоматический расчет стоимости доставки по местоположению и весу",
        uk: "Автоматичний розрахунок вартості доставки за місцем розташування та вагою",
        ro: "Calcul automat al costului de transport după locație și greutate",
        pl: "Automatyczne obliczanie kosztów wysyłki według lokalizacji i wagi",
        it: "Calcolo automatico dei costi di spedizione per posizione e peso",
        tr: "Konum ve ağırlığa göre otomatik kargo maliyeti hesaplama"
      },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Package,
      title: {
        ar: "تتبع الطلبات",
        en: "Order Tracking",
        ru: "Отслеживание заказа",
        uk: "Відстеження замовлення",
        ro: "Urmărire comandă",
        pl: "Śledzenie zamówienia",
        it: "Tracciamento ordine",
        tr: "Sipariş Takibi"
      },
      desc: {
        ar: "تمكين العملاء من تتبع طلباتهم في الوقت الفعلي",
        en: "Enable customers to track their orders in real-time",
        ru: "Позвольте клиентам отслеживать свои заказы в режиме реального времени",
        uk: "Дозвольте клієнтам відстежувати свої замовлення в режимі реального часу",
        ro: "Permiteți clienților să își urmărească comenzile în timp real",
        pl: "Umożliw klientom śledzenie zamówień w czasie rzeczywistym",
        it: "Permetti ai clienti di tracciare i loro ordini in tempo reale",
        tr: "Müşterilerin siparişlerini gerçek zamanlı takip etmelerini sağlayın"
      },
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Star,
      title: {
        ar: "المراجعات والتقييمات",
        en: "Reviews & Ratings",
        ru: "Отзывы и рейтинги",
        uk: "Відгуки та рейтинги",
        ro: "Recenzii și evaluări",
        pl: "Recenzje i oceny",
        it: "Recensioni e valutazioni",
        tr: "İncelemeler ve Puanlar"
      },
      desc: {
        ar: "نظام تقييم شامل للمنتجات من العملاء",
        en: "Complete product rating system from customers",
        ru: "Полная система оценки продуктов от клиентов",
        uk: "Повна система оцінки продуктів від клієнтів",
        ro: "Sistem complet de evaluare a produselor de la clienți",
        pl: "Kompletny system oceny produktów od klientów",
        it: "Sistema completo di valutazione dei prodotti da parte dei clienti",
        tr: "Müşterilerden tam ürün puanlama sistemi"
      }
    },
    {
      icon: Heart,
      title: {
        ar: "قوائم الأمنيات",
        en: "Wishlists",
        ru: "Списки желаний",
        uk: "Списки бажань",
        ro: "Liste de dorințe",
        pl: "Listy życzeń",
        it: "Liste dei desideri",
        tr: "İstek Listeleri"
      },
      desc: {
        ar: "حفظ المنتجات المفضلة للشراء لاحقاً",
        en: "Save favorite products for later purchase",
        ru: "Сохранить любимые товары для покупки позже",
        uk: "Зберегти улюблені товари для покупки пізніше",
        ro: "Salvați produsele favorite pentru achiziție ulterioară",
        pl: "Zapisz ulubione produkty do późniejszego zakupu",
        it: "Salva i prodotti preferiti per l'acquisto successivo",
        tr: "Favori ürünleri daha sonra satın almak için kaydet"
      }
    },
    {
      icon: Tag,
      title: {
        ar: "كوبونات وعروض",
        en: "Coupons & Offers",
        ru: "Купоны и предложения",
        uk: "Купони та пропозиції",
        ro: "Cupoane și oferte",
        pl: "Kupony i oferty",
        it: "Coupon e offerte",
        tr: "Kuponlar ve Teklifler"
      },
      desc: {
        ar: "إدارة كاملة للكوبونات والعروض الترويجية",
        en: "Complete coupon and promotion management",
        ru: "Полное управление купонами и акциями",
        uk: "Повне управління купонами та акціями",
        ro: "Gestionare completă a cupoanelor și promoțiilor",
        pl: "Pełne zarządzanie kuponami i promocjami",
        it: "Gestione completa di coupon e promozioni",
        tr: "Eksiksiz kupon ve promosyon yönetimi"
      }
    },
    {
      icon: RefreshCw,
      title: {
        ar: "تزامن المخزون",
        en: "Inventory Sync",
        ru: "Синхронизация запасов",
        uk: "Синхронізація запасів",
        ro: "Sincronizare stoc",
        pl: "Synchronizacja zapasów",
        it: "Sincronizzazione inventario",
        tr: "Envanter Senkronizasyonu"
      },
      desc: {
        ar: "تزامن فوري مع مخزون المستودع",
        en: "Instant sync with warehouse inventory",
        ru: "Мгновенная синхронизация со складскими запасами",
        uk: "Мииттєва синхронізація зі складськими запасами",
        ro: "Sincronizare instantanee cu inventarul depozitului",
        pl: "Natychmiastowa synchronizacja z zapasami magazynowymi",
        it: "Sincronizzazione istantanea con l'inventario del magazzino",
        tr: "Depo envanteri ile anında senkronizasyon"
      }
    },
    {
      icon: Smartphone,
      title: {
        ar: "تطبيق موبايل",
        en: "Mobile App",
        ru: "Мобильное приложение",
        uk: "Мобільний додаток",
        ro: "Aplicație mobilă",
        pl: "Aplikacja mobilna",
        it: "App mobile",
        tr: "Mobil Uygulama"
      },
      desc: {
        ar: "تطبيق iOS و Android للعملاء",
        en: "iOS and Android app for customers",
        ru: "Приложение iOS и Android для клиентов",
        uk: "Додаток iOS та Android для клієнтів",
        ro: "Aplicație iOS și Android pentru clienți",
        pl: "Aplikacja iOS i Android dla klientów",
        it: "App iOS e Android per i clienti",
        tr: "Müşteriler için iOS ve Android uygulaması"
      }
    },
    {
      icon: Globe,
      title: {
        ar: "متعدد اللغات",
        en: "Multi-Language",
        ru: "Многоязычность",
        uk: "Багатомовність",
        ro: "Multi-limbă",
        pl: "Wielojęzyczność",
        it: "Multilingua",
        tr: "Çoklu Dil"
      },
      desc: {
        ar: "دعم العربية والإنجليزية والمزيد",
        en: "Support for Arabic, English, and more",
        ru: "Поддержка арабского, английского и других языков",
        uk: "Підтримка арабської, англійської та інших мов",
        ro: "Suport pentru arabă, engleză și multe altele",
        pl: "Obsługa języka arabskiego, angielskiego i innych",
        it: "Supporto per arabo, inglese e altro",
        tr: "Arapça, İngilizce ve daha fazlası için destek"
      }
    },
    {
      icon: Shield,
      title: {
        ar: "أمان عالي",
        en: "High Security",
        ru: "Высокая безопасность",
        uk: "Висока безпека",
        ro: "Securitate ridicată",
        pl: "Wysokie bezpieczeństwo",
        it: "Alta sicurezza",
        tr: "Yüksek Güvenlik"
      },
      desc: {
        ar: "تشفير SSL وحماية بيانات العملاء",
        en: "SSL encryption and customer data protection",
        ru: "SSL-шифрование и защита данных клиентов",
        uk: "SSL-шифрування та захист даних клієнтів",
        ro: "Criptare SSL și protecția datelor clienților",
        pl: "Szyfrowanie SSL i ochrona danych klientów",
        it: "Crittografia SSL e protezione dei dati dei clienti",
        tr: "SSL şifreleme ve müşteri verilerini koruma"
      }
    },
    {
      icon: BarChart3,
      title: {
        ar: "تحليلات المتجر",
        en: "Store Analytics",
        ru: "Аналитика магазина",
        uk: "Аналітика магазину",
        ro: "Analize magazin",
        pl: "Analityka sklepu",
        it: "Analisi negozio",
        tr: "Mağaza Analitiği"
      },
      desc: {
        ar: "تقارير شاملة عن المبيعات وسلوك العملاء",
        en: "Comprehensive sales and customer behavior reports",
        ru: "Всесторонние отчеты о продажах и поведении клиентов",
        uk: "Всебічні звіти про продажі та поведінку клієнтів",
        ro: "Rapoarte complete despre vânzări și comportamentul clienților",
        pl: "Kompleksowe raporty sprzedaży i zachowań klientów",
        it: "Rapporti completi sulle vendite e sul comportamento dei clienti",
        tr: "Kapsamlı satış ve müşteri davranışı raporları"
      }
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <ShoppingBag className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-pink-600">
                {getText({
                  ar: "المتجر الإلكتروني",
                  en: "E-Commerce Store",
                  ru: "Интернет-магазин",
                  uk: "Інтернет-магазин",
                  ro: "Magazin online",
                  pl: "Sklep internetowy",
                  it: "Negozio E-Commerce",
                  tr: "E-Ticaret Mağazası"
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>متجر إلكتروني <span className="text-pink-500">متكامل</span></>
              ) : (
                <>
                  {getText({
                    en: "Complete ",
                    ru: "Полный ",
                    uk: "Повний ",
                    ro: "Complet ",
                    pl: "Kompletny ",
                    it: "Completo ",
                    tr: "Tam "
                  })}
                  <span className="text-pink-500">
                    {getText({
                      en: "E-Commerce",
                      ru: "E-Commerce",
                      uk: "E-Commerce",
                      ro: "E-Commerce",
                      pl: "E-Commerce",
                      it: "E-Commerce",
                      tr: "E-Ticaret"
                    })}
                  </span>
                  {getText({
                    en: " Store",
                    ru: " магазин",
                    uk: " магазин",
                    ro: " magazin",
                    pl: " sklep",
                    it: " negozio",
                    tr: " Mağazası"
                  })}
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({
                ar: "أطلق متجرك الإلكتروني المتكامل مع TexaCore وابدأ ببيع منتجاتك للعملاء في أي مكان",
                en: "Launch your complete e-commerce store with TexaCore and start selling your products to customers anywhere",
                ru: "Запустите свой полноценный интернет-магазин с TexaCore и начните продавать свои товары клиентам где угодно",
                uk: "Запустіть свій повноцінний інтернет-магазин з TexaCore та почніть продавати свої товари клієнтам де завгодно",
                ro: "Lansați magazinul dvs. online complet cu TexaCore și începeți să vindeți produsele dvs. clienților oriunde",
                pl: "Uruchom swój kompletny sklep internetowy z TexaCore i zacznij sprzedawać swoje produkty klientom w dowolnym miejscu",
                it: "Lancia il tuo negozio e-commerce completo con TexaCore e inizia a vendere i tuoi prodotti ai clienti ovunque",
                tr: "TexaCore ile eksiksiz e-ticaret mağazanızı başlatın ve ürünlerinizi her yerde müşterilere satmaya başlayın"
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-pink-500/25">
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

      {/* Store Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-texafab-slate mb-4">
                  {getText({
                    ar: "متجر احترافي جاهز للإطلاق",
                    en: "Professional Store Ready to Launch",
                    ru: "Профессиональный магазин, готовый к запуску",
                    uk: "Професійний магазин, готовий до запуску",
                    ro: "Magazin profesional gata de lansare",
                    pl: "Profesjonalny sklep gotowy do uruchomienia",
                    it: "Negozio professionale pronto al lancio",
                    tr: "Lansmana Hazır Profesyonel Mağaza"
                  })}
                </h2>
                <p className="text-gray-600 mb-6">
                  {getText({
                    ar: "متجر إلكتروني كامل المزايا مع تصميم عصري وتجربة مستخدم مميزة",
                    en: "Full-featured e-commerce store with modern design and excellent user experience",
                    ru: "Полнофункциональный интернет-магазин с современным дизайном и отличным пользовательским опытом",
                    uk: "Повнофункціональний інтернет-магазин із сучасним дизайном та відмінним користувацьким досвідом",
                    ro: "Magazin online complet cu design modern și experiență excelentă pentru utilizator",
                    pl: "W pełni funkcjonalny sklep internetowy o nowoczesnym designie i doskonałym doświadczeniu użytkownika",
                    it: "Negozio e-commerce completo con design moderno ed eccellente esperienza utente",
                    tr: "Modern tasarıma ve mükemmel kullanıcı deneyimine sahip tam özellikli e-ticaret mağazası"
                  })}
                </p>
                <ul className="space-y-3">
                  {[
                    { ar: "تصميم متجاوب مع جميع الأجهزة", en: "Responsive design for all devices", ru: "Адаптивный дизайн для всех устройств", uk: "Адаптивний дизайн для всіх пристроїв", ro: "Design receptiv pentru toate dispozitivele", pl: "Responsywny design na wszystkie urządzenia", it: "Design reattivo per tutti i dispositivi", tr: "Tüm cihazlar için duyarlı tasarım" },
                    { ar: "سرعة تحميل عالية", en: "Fast loading speed", ru: "Высокая скорость загрузки", uk: "Висока швидкість завантаження", ro: "Viteză mare de încărcare", pl: "Szybkie ładowanie", it: "Velocità di caricamento elevata", tr: "Hızlı yükleme hızı" },
                    { ar: "SEO محسّن لمحركات البحث", en: "SEO optimized for search engines", ru: "SEO оптимизирован для поисковых систем", uk: "SEO оптимізований для пошукових систем", ro: "SEO optimizat pentru motoarele de căutare", pl: "Zoptymalizowany pod kątem SEO", it: "SEO ottimizzato per i motori di ricerca", tr: "Arama motorları için SEO optimizasyonu" },
                    { ar: "تخصيص كامل للعلامة التجارية", en: "Full brand customization", ru: "Полная настройка бренда", uk: "Повне налаштування бренду", ro: "Personalizare completă a mărcii", pl: "Pełna personalizacja marki", it: "Personalizzazione completa del marchio", tr: "Tam marka özelleştirmesi" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span className="text-gray-700">{getText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-4">
                {/* Mock Store UI */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                      <span className="font-bold text-texafab-slate">Your Store</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-gray-400" />
                      <Heart className="w-5 h-5 text-gray-400" />
                      <ShoppingBag className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-100 rounded-xl p-3">
                        <div className="h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-2" />
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1" />
                        <div className="h-3 bg-pink-200 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({
                ar: "مميزات المتجر الإلكتروني",
                en: "E-Commerce Features",
                ru: "Функции электронной коммерции",
                uk: "Функції електронної комерції",
                ro: "Caracteristici E-Commerce",
                pl: "Funkcje E-Commerce",
                it: "Caratteristiche E-Commerce",
                tr: "E-Ticaret Özellikleri"
              })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({
                ar: "كل ما تحتاجه لإدارة متجر إلكتروني ناجح",
                en: "Everything you need to run a successful online store",
                ru: "Все, что вам нужно для управления успешным интернет-магазином",
                uk: "Все, що вам потрібно для управління успішним інтернет-магазином",
                ro: "Tot ce aveți nevoie pentru a rula un magazin online de succes",
                pl: "Wszystko, czego potrzebujesz, aby prowadzić udany sklep internetowy",
                it: "Tutto ciò di cui hai bisogno per gestire un negozio online di successo",
                tr: "Başarılı bir çevrimiçi mağaza işletmek için ihtiyacınız olan her şey"
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

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({
                ar: "مميزات إضافية",
                en: "Additional Features",
                ru: "Дополнительные функции",
                uk: "Додаткові функції",
                ro: "Caracteristici suplimentare",
                pl: "Dodatkowe funkcje",
                it: "Funzionalità aggiuntive",
                tr: "Ek Özellikler"
              })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-texafab-slate text-sm">
                      {getText(feature.title)}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {getText(feature.desc)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText({
                ar: "طرق الدفع المدعومة",
                en: "Supported Payment Methods",
                ru: "Поддерживаемые способы оплаты",
                uk: "Підтримувані способи оплати",
                ro: "Metode de plată acceptate",
                pl: "Obsługiwane metody płatności",
                it: "Metodi di pagamento supportati",
                tr: "Desteklenen Ödeme Yöntemleri"
              })}
            </h2>
            <p className="text-lg text-white/80">
              {getText({
                ar: "قبول المدفوعات من أي مكان",
                en: "Accept payments from anywhere",
                ru: "Принимайте платежи из любой точки мира",
                uk: "Приймайте платежі з будь-якого місця",
                ro: "Acceptați plăți de oriunde",
                pl: "Akceptuj płatności z dowolnego miejsca",
                it: "Accetta pagamenti da ovunque",
                tr: "Her yerden ödeme kabul edin"
              })}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["mada", "Apple Pay", "Visa", "Mastercard", "AMEX", "PayPal", "STC Pay", "Tabby"].map((method, index) => (
              <Card key={index} className="px-6 py-4 bg-white/10 backdrop-blur-xl border-white/20 rounded-xl">
                <span className="text-white font-semibold">{method}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Smartphone className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">
                  {getText({
                    ar: "تطبيق الموبايل",
                    en: "Mobile App",
                    ru: "Мобильное приложение",
                    uk: "Мобільний додаток",
                    ro: "Aplicație mobilă",
                    pl: "Aplikacja mobilna",
                    it: "App mobile",
                    tr: "Mobil Uygulama"
                  })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({
                  ar: "تطبيق موبايل للعملاء",
                  en: "Customer Mobile App",
                  ru: "Мобильное приложение для клиентов",
                  uk: "Мобільний додаток для клієнтів",
                  ro: "Aplicație mobilă pentru clienți",
                  pl: "Aplikacja mobilna dla klientów",
                  it: "App mobile per i clienti",
                  tr: "Müşteri Mobil Uygulaması"
                })}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {getText({
                  ar: "تطبيق iOS و Android يمكّن عملاءك من التسوق بسهولة من هواتفهم",
                  en: "iOS and Android app enabling your customers to easily shop from their phones",
                  ru: "Приложение для iOS и Android, позволяющее вашим клиентам легко совершать покупки со своих телефонов",
                  uk: "Додаток для iOS та Android, що дозволяє вашим клієнтам легко здійснювати покупки зі своїх телефонів",
                  ro: "Aplicație iOS și Android care permite clienților să cumpere cu ușurință de pe telefoanele lor",
                  pl: "Aplikacja iOS i Android umożliwiająca klientom łatwe zakupy z telefonów",
                  it: "App iOS e Android che consente ai tuoi clienti di acquistare facilmente dai loro telefoni",
                  tr: "Müşterilerinizin telefonlarından kolayca alışveriş yapmasını sağlayan iOS ve Android uygulaması"
                })}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تصفح سريع للمنتجات", en: "Fast product browsing", ru: "Быстрый просмотр товаров", uk: "Швидкий перегляд товарів", ro: "Navigare rapidă prin produse", pl: "Szybkie przeglądanie produktów", it: "Navigazione rapida prodotti", tr: "Hızlı ürün tarama" },
                  { ar: "إشعارات العروض والخصومات", en: "Offer and discount notifications", ru: "Уведомления о предложениях и скидках", uk: "Сповіщення про пропозиції та знижки", ro: "Notificări oferte și reduceri", pl: "Powiadomienia o ofertach i rabatach", it: "Notifiche offerte e sconti", tr: "Teklif ve indirim bildirimleri" },
                  { ar: "تتبع الطلبات مباشرة", en: "Direct order tracking", ru: "Прямое отслеживание заказов", uk: "Пряме відстеження замовлень", ro: "Urmărire directă comenzi", pl: "Bezpośrednie śledzenie zamówień", it: "Tracciamento diretto ordini", tr: "Doğrudan sipariş takibi" },
                  { ar: "حفظ طرق الدفع المفضلة", en: "Save favorite payment methods", ru: "Сохранить любимые способы оплаты", uk: "Зберегти улюблені способи оплати", ro: "Salvați metodele de plată preferate", pl: "Zapisz ulubione metody płatności", it: "Salva i metodi di pagamento preferiti", tr: "Favori ödeme yöntemlerini kaydet" },
                  { ar: "إعادة الطلب السابق بضغطة", en: "Reorder with one click", ru: "Повторный заказ в один клик", uk: "Повторне замовлення в один клік", ro: "Recomandați cu un singur clic", pl: "Ponowne zamówienie jednym kliknięciem", it: "Riordina con un clic", tr: "Tek tıkla yeniden sipariş" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{getText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl rounded-3xl">
              <div className="flex justify-center gap-4">
                <div className="w-48 h-96 bg-white rounded-3xl shadow-lg p-2 border-4 border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-purple-300" />
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

export default function EcommercePage() {
  return <EcommerceContent />;
}
