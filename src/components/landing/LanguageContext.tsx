import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar" | "ru" | "uk" | "ro" | "pl" | "it" | "tr";

export const languageNames: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  ru: "Русский",
  uk: "Українська",
  ro: "Română",
  pl: "Polski",
  it: "Italiano",
  tr: "Türkçe",
};

export const rtlLanguages: Language[] = ["ar"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.solutions": "Solutions",
    "nav.industries": "Industries",
    "nav.about": "About",
    "hero.title": "First ERP System For Fabric Industry",
    "hero.subtitle": "The world's first system designed specifically for fabric companies. Supports meters, rolls, colors, cutting, and everything you need.",
    "hero.cta.demo": "Start Free Trial",
    "hero.cta.trial": "Watch Demo",
    "hero.badge": "First Choice in Europe & Gulf",
    "features.title": "Everything You Need",
    "features.subtitle": "Complete ERP system covering all your business needs.",
    "trust.title": "Why ERPMAX?",
    "pricing.title": "Choose Your Plan",
    "footer.rights": "© 2024 ERPMAX. All rights reserved.",
    "cta.ready": "Ready to Get Started?",
    "cta.button": "Start Free Trial",
    "global.learnMore": "Learn More",
    "global.getStarted": "Get Started",
    "global.contactUs": "Contact Us",
    "global.startFree": "Start Free",
    "global.bookDemo": "Book Demo",
  },
  ar: {
    "nav.features": "الميزات",
    "nav.pricing": "الأسعار",
    "nav.contact": "تواصل معنا",
    "nav.solutions": "الحلول",
    "nav.industries": "القطاعات",
    "nav.about": "عن الشركة",
    "hero.title": "أول نظام ERP متخصص للأقمشة",
    "hero.subtitle": "النظام الأول عالمياً المصمم خصيصاً لشركات الأقمشة. يدعم المتر، الرولون، الألوان، القص، وكل ما تحتاجه.",
    "hero.cta.demo": "ابدأ مجاناً",
    "hero.cta.trial": "شاهد العرض",
    "hero.badge": "الاختيار الأول في أوروبا والخليج",
    "features.title": "كل ما تحتاجه",
    "features.subtitle": "نظام ERP متكامل يغطي جميع احتياجات عملك.",
    "trust.title": "لماذا ERPMAX؟",
    "pricing.title": "اختر باقتك",
    "footer.rights": "© 2024 ERPMAX. جميع الحقوق محفوظة.",
    "cta.ready": "جاهز للبدء؟",
    "cta.button": "ابدأ الآن",
    "global.learnMore": "اعرف المزيد",
    "global.getStarted": "ابدأ الآن",
    "global.contactUs": "تواصل معنا",
    "global.startFree": "ابدأ مجاناً",
    "global.bookDemo": "احجز عرض",
  },
  ru: {
    "nav.features": "Функции",
    "nav.pricing": "Цены",
    "nav.contact": "Контакты",
    "nav.solutions": "Решения",
    "nav.industries": "Отрасли",
    "nav.about": "О нас",
    "hero.title": "Первая ERP-система для текстильной отрасли",
    "hero.subtitle": "Первая в мире система, разработанная специально для текстильных компаний. Поддерживает метры, рулоны, цвета, раскрой.",
    "hero.cta.demo": "Начать бесплатно",
    "hero.cta.trial": "Смотреть демо",
    "hero.badge": "Первый выбор в Европе и Персидском заливе",
    "features.title": "Всё, что вам нужно",
    "features.subtitle": "Полная ERP-система для всех потребностей вашего бизнеса.",
    "trust.title": "Почему ERPMAX?",
    "pricing.title": "Выберите тариф",
    "footer.rights": "© 2024 ERPMAX. Все права защищены.",
    "cta.ready": "Готовы начать?",
    "cta.button": "Начать сейчас",
    "global.learnMore": "Узнать больше",
    "global.getStarted": "Начать",
    "global.contactUs": "Связаться с нами",
    "global.startFree": "Начать бесплатно",
    "global.bookDemo": "Заказать демо",
  },
  uk: {
    "nav.features": "Функції",
    "nav.pricing": "Ціни",
    "nav.contact": "Контакти",
    "nav.solutions": "Рішення",
    "nav.industries": "Галузі",
    "nav.about": "Про нас",
    "hero.title": "Перша ERP-система для текстильної галузі",
    "hero.subtitle": "Перша у світі система, розроблена спеціально для текстильних компаній. Підтримує метри, рулони, кольори, розкрій.",
    "hero.cta.demo": "Почати безкоштовно",
    "hero.cta.trial": "Дивитись демо",
    "hero.badge": "Перший вибір в Європі та Затоці",
    "features.title": "Все, що вам потрібно",
    "features.subtitle": "Повна ERP-система для всіх потреб вашого бізнесу.",
    "trust.title": "Чому ERPMAX?",
    "pricing.title": "Оберіть тариф",
    "footer.rights": "© 2024 ERPMAX. Всі права захищені.",
    "cta.ready": "Готові почати?",
    "cta.button": "Почати зараз",
    "global.learnMore": "Дізнатись більше",
    "global.getStarted": "Почати",
    "global.contactUs": "Зв'язатись з нами",
    "global.startFree": "Почати безкоштовно",
    "global.bookDemo": "Замовити демо",
  },
  ro: {
    "nav.features": "Funcții",
    "nav.pricing": "Prețuri",
    "nav.contact": "Contact",
    "nav.solutions": "Soluții",
    "nav.industries": "Industrii",
    "nav.about": "Despre noi",
    "hero.title": "Primul sistem ERP pentru industria textilă",
    "hero.subtitle": "Primul sistem din lume conceput special pentru companiile textile. Suportă metri, role, culori, croială.",
    "hero.cta.demo": "Începe gratuit",
    "hero.cta.trial": "Vezi demo",
    "hero.badge": "Prima alegere în Europa și Golf",
    "features.title": "Tot ce ai nevoie",
    "features.subtitle": "Sistem ERP complet pentru toate nevoile afacerii tale.",
    "trust.title": "De ce ERPMAX?",
    "pricing.title": "Alege planul",
    "footer.rights": "© 2024 ERPMAX. Toate drepturile rezervate.",
    "cta.ready": "Gata de start?",
    "cta.button": "Începe acum",
    "global.learnMore": "Află mai multe",
    "global.getStarted": "Începe",
    "global.contactUs": "Contactează-ne",
    "global.startFree": "Începe gratuit",
    "global.bookDemo": "Rezervă demo",
  },
  pl: {
    "nav.features": "Funkcje",
    "nav.pricing": "Cennik",
    "nav.contact": "Kontakt",
    "nav.solutions": "Rozwiązania",
    "nav.industries": "Branże",
    "nav.about": "O nas",
    "hero.title": "Pierwszy system ERP dla branży tekstylnej",
    "hero.subtitle": "Pierwszy na świecie system zaprojektowany specjalnie dla firm tekstylnych. Obsługuje metry, rolki, kolory, krojenie.",
    "hero.cta.demo": "Zacznij za darmo",
    "hero.cta.trial": "Zobacz demo",
    "hero.badge": "Pierwszy wybór w Europie i Zatoce",
    "features.title": "Wszystko, czego potrzebujesz",
    "features.subtitle": "Kompletny system ERP dla wszystkich potrzeb Twojej firmy.",
    "trust.title": "Dlaczego ERPMAX?",
    "pricing.title": "Wybierz plan",
    "footer.rights": "© 2024 ERPMAX. Wszelkie prawa zastrzeżone.",
    "cta.ready": "Gotowy do startu?",
    "cta.button": "Zacznij teraz",
    "global.learnMore": "Dowiedz się więcej",
    "global.getStarted": "Rozpocznij",
    "global.contactUs": "Skontaktuj się",
    "global.startFree": "Zacznij za darmo",
    "global.bookDemo": "Zarezerwuj demo",
  },
  it: {
    "nav.features": "Funzionalità",
    "nav.pricing": "Prezzi",
    "nav.contact": "Contatti",
    "nav.solutions": "Soluzioni",
    "nav.industries": "Settori",
    "nav.about": "Chi siamo",
    "hero.title": "Il primo sistema ERP per l'industria tessile",
    "hero.subtitle": "Il primo sistema al mondo progettato specificamente per le aziende tessili. Supporta metri, rotoli, colori, taglio.",
    "hero.cta.demo": "Inizia gratis",
    "hero.cta.trial": "Guarda demo",
    "hero.badge": "Prima scelta in Europa e nel Golfo",
    "features.title": "Tutto ciò di cui hai bisogno",
    "features.subtitle": "Sistema ERP completo per tutte le esigenze della tua azienda.",
    "trust.title": "Perché ERPMAX?",
    "pricing.title": "Scegli il piano",
    "footer.rights": "© 2024 ERPMAX. Tutti i diritti riservati.",
    "cta.ready": "Pronto per iniziare?",
    "cta.button": "Inizia ora",
    "global.learnMore": "Scopri di più",
    "global.getStarted": "Inizia",
    "global.contactUs": "Contattaci",
    "global.startFree": "Inizia gratis",
    "global.bookDemo": "Prenota demo",
  },
  tr: {
    "nav.features": "Özellikler",
    "nav.pricing": "Fiyatlar",
    "nav.contact": "İletişim",
    "nav.solutions": "Çözümler",
    "nav.industries": "Sektörler",
    "nav.about": "Hakkımızda",
    "hero.title": "Tekstil sektörü için ilk ERP sistemi",
    "hero.subtitle": "Tekstil şirketleri için özel olarak tasarlanmış dünyanın ilk sistemi. Metre, rulo, renk, kesim destekler.",
    "hero.cta.demo": "Ücretsiz başla",
    "hero.cta.trial": "Demo izle",
    "hero.badge": "Avrupa ve Körfez'de ilk tercih",
    "features.title": "İhtiyacınız olan her şey",
    "features.subtitle": "İşletmenizin tüm ihtiyaçları için eksiksiz ERP sistemi.",
    "trust.title": "Neden ERPMAX?",
    "pricing.title": "Planınızı seçin",
    "footer.rights": "© 2024 ERPMAX. Tüm hakları saklıdır.",
    "cta.ready": "Başlamaya hazır mısınız?",
    "cta.button": "Şimdi başla",
    "global.learnMore": "Daha fazla bilgi",
    "global.getStarted": "Başla",
    "global.contactUs": "Bize ulaşın",
    "global.startFree": "Ücretsiz başla",
    "global.bookDemo": "Demo rezervasyonu",
  },
};

const LANGUAGE_STORAGE_KEY = "erpmax-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && Object.keys(languageNames).includes(saved)) {
        return saved as Language;
      }
    }
    return "en";
  });

  const dir = rtlLanguages.includes(language) ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    const langs = Object.keys(languageNames) as Language[];
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const t = (key: string) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
