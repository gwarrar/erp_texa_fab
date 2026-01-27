import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCLogo } from "@/components/nexacore/NCLogo";
import { 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Mail, MapPin, Sparkles
} from "lucide-react";

const translations = {
  en: {
    description: "The complete business ERP platform for enterprises seeking all-in-one sales, inventory, accounting, and HR solutions.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    solutions: "Solutions",
    integrations: "Integrations",
    company: "Company",
    about: "About Us",
    careers: "Careers",
    contact: "Contact",
    news: "News",
    resources: "Resources",
    documentation: "Documentation",
    support: "Support",
    blog: "Blog",
    community: "Community",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    iso: "ISO Compliance",
    gdpr: "GDPR",
    rights: "All rights reserved.",
    madeWith: "Made with",
    inIreland: "in Ireland",
    newsletter: "Stay updated with the latest business tech",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email",
    secretBehind: "Powering intelligent business decisions worldwide",
  },
  ar: {
    description: "منصة ERP الأعمال الشاملة للمؤسسات التي تبحث عن حلول متكاملة للمبيعات والمخزون والمحاسبة والموارد البشرية.",
    product: "المنتج",
    features: "المميزات",
    pricing: "الأسعار",
    solutions: "الحلول",
    integrations: "التكاملات",
    company: "الشركة",
    about: "من نحن",
    careers: "الوظائف",
    contact: "اتصل بنا",
    news: "الأخبار",
    resources: "الموارد",
    documentation: "التوثيق",
    support: "الدعم",
    blog: "المدونة",
    community: "المجتمع",
    legal: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    iso: "التوافق مع ISO",
    gdpr: "GDPR",
    rights: "جميع الحقوق محفوظة.",
    madeWith: "صنع بـ",
    inIreland: "في أيرلندا",
    newsletter: "ابق على اطلاع بأحدث تقنيات الأعمال",
    subscribe: "اشترك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    secretBehind: "نقود قرارات الأعمال الذكية حول العالم",
  },
  tr: {
    description: "Satış, envanter, muhasebe ve İK için hepsi bir arada çözümler arayan işletmeler için eksiksiz iş ERP platformu.",
    product: "Ürün",
    features: "Özellikler",
    pricing: "Fiyatlar",
    solutions: "Çözümler",
    integrations: "Entegrasyonlar",
    company: "Şirket",
    about: "Hakkımızda",
    careers: "Kariyer",
    contact: "İletişim",
    news: "Haberler",
    resources: "Kaynaklar",
    documentation: "Dokümantasyon",
    support: "Destek",
    blog: "Blog",
    community: "Topluluk",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
    iso: "ISO Uyumluluğu",
    gdpr: "GDPR",
    rights: "Tüm hakları saklıdır.",
    madeWith: "ile yapıldı",
    inIreland: "İrlanda'da",
    newsletter: "En son iş teknolojilerinden haberdar olun",
    subscribe: "Abone Ol",
    emailPlaceholder: "E-posta adresinizi girin",
    secretBehind: "Dünya genelinde akıllı iş kararlarını destekliyoruz",
  },
  ru: {
    description: "Полная бизнес ERP-платформа для предприятий, ищущих комплексные решения для продаж, складского учёта, бухгалтерии и HR.",
    product: "Продукт",
    features: "Функции",
    pricing: "Цены",
    solutions: "Решения",
    integrations: "Интеграции",
    company: "Компания",
    about: "О нас",
    careers: "Карьера",
    contact: "Контакты",
    news: "Новости",
    resources: "Ресурсы",
    documentation: "Документация",
    support: "Поддержка",
    blog: "Блог",
    community: "Сообщество",
    legal: "Правовая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    iso: "Соответствие ISO",
    gdpr: "GDPR",
    rights: "Все права защищены.",
    madeWith: "Сделано с",
    inIreland: "в Ирландии",
    newsletter: "Будьте в курсе последних бизнес-технологий",
    subscribe: "Подписаться",
    emailPlaceholder: "Введите ваш email",
    secretBehind: "Обеспечиваем умные бизнес-решения по всему миру",
  },
  de: {
    description: "Die vollständige Business-ERP-Plattform für Unternehmen, die All-in-One-Lösungen für Vertrieb, Lager, Buchhaltung und HR suchen.",
    product: "Produkt",
    features: "Funktionen",
    pricing: "Preise",
    solutions: "Lösungen",
    integrations: "Integrationen",
    company: "Unternehmen",
    about: "Über uns",
    careers: "Karriere",
    contact: "Kontakt",
    news: "Neuigkeiten",
    resources: "Ressourcen",
    documentation: "Dokumentation",
    support: "Support",
    blog: "Blog",
    community: "Community",
    legal: "Rechtliches",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    iso: "ISO-Konformität",
    gdpr: "DSGVO",
    rights: "Alle Rechte vorbehalten.",
    madeWith: "Hergestellt mit",
    inIreland: "in Irland",
    newsletter: "Bleiben Sie über die neuesten Geschäftstechnologien auf dem Laufenden",
    subscribe: "Abonnieren",
    emailPlaceholder: "Geben Sie Ihre E-Mail ein",
    secretBehind: "Wir treiben intelligente Geschäftsentscheidungen weltweit voran",
  },
  pl: {
    description: "Kompletna platforma ERP dla przedsiębiorstw poszukujących rozwiązań all-in-one dla sprzedaży, magazynu, księgowości i HR.",
    product: "Produkt",
    features: "Funkcje",
    pricing: "Cennik",
    solutions: "Rozwiązania",
    integrations: "Integracje",
    company: "Firma",
    about: "O nas",
    careers: "Kariera",
    contact: "Kontakt",
    news: "Aktualności",
    resources: "Zasoby",
    documentation: "Dokumentacja",
    support: "Wsparcie",
    blog: "Blog",
    community: "Społeczność",
    legal: "Prawne",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
    iso: "Zgodność z ISO",
    gdpr: "RODO",
    rights: "Wszelkie prawa zastrzeżone.",
    madeWith: "Stworzone z",
    inIreland: "w Irlandii",
    newsletter: "Bądź na bieżąco z najnowszymi technologiami biznesowymi",
    subscribe: "Subskrybuj",
    emailPlaceholder: "Wpisz swój email",
    secretBehind: "Wspieramy inteligentne decyzje biznesowe na całym świecie",
  },
  ro: {
    description: "Platforma ERP completă pentru afaceri pentru întreprinderile care caută soluții all-in-one pentru vânzări, stocuri, contabilitate și HR.",
    product: "Produs",
    features: "Caracteristici",
    pricing: "Prețuri",
    solutions: "Soluții",
    integrations: "Integrări",
    company: "Companie",
    about: "Despre noi",
    careers: "Cariere",
    contact: "Contact",
    news: "Știri",
    resources: "Resurse",
    documentation: "Documentație",
    support: "Suport",
    blog: "Blog",
    community: "Comunitate",
    legal: "Legal",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    iso: "Conformitate ISO",
    gdpr: "GDPR",
    rights: "Toate drepturile rezervate.",
    madeWith: "Creat cu",
    inIreland: "în Irlanda",
    newsletter: "Fii la curent cu cele mai recente tehnologii de afaceri",
    subscribe: "Abonează-te",
    emailPlaceholder: "Introdu emailul tău",
    secretBehind: "Susținem decizii de afaceri inteligente la nivel mondial",
  },
};

export function NCFooter() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <footer 
      className="bg-slate-900 text-white pt-16 pb-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 mb-12 -mt-24 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
              <h3 className="text-xl font-bold text-white mb-2">{t.newsletter}</h3>
              <p className="text-blue-100 text-sm">{t.secretBehind}</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <NCLogo showSlogan={false} animated={false} />
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.product}</h4>
            <ul className="space-y-3">
              <li><Link to="/nexacore/features" className="text-slate-400 hover:text-white text-sm transition-colors">{t.features}</Link></li>
              <li><Link to="/nexacore/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">{t.pricing}</Link></li>
              <li><Link to="/nexacore/solutions" className="text-slate-400 hover:text-white text-sm transition-colors">{t.solutions}</Link></li>
              <li><Link to="/nexacore/integrations" className="text-slate-400 hover:text-white text-sm transition-colors">{t.integrations}</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.company}</h4>
            <ul className="space-y-3">
              <li><Link to="/nexacore/about" className="text-slate-400 hover:text-white text-sm transition-colors">{t.about}</Link></li>
              <li><Link to="/nexacore/careers" className="text-slate-400 hover:text-white text-sm transition-colors">{t.careers}</Link></li>
              <li><Link to="/nexacore/contact" className="text-slate-400 hover:text-white text-sm transition-colors">{t.contact}</Link></li>
              <li><Link to="/nexacore/news" className="text-slate-400 hover:text-white text-sm transition-colors">{t.news}</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.resources}</h4>
            <ul className="space-y-3">
              <li><Link to="/nexacore/docs" className="text-slate-400 hover:text-white text-sm transition-colors">{t.documentation}</Link></li>
              <li><Link to="/nexacore/support" className="text-slate-400 hover:text-white text-sm transition-colors">{t.support}</Link></li>
              <li><Link to="/nexacore/blog" className="text-slate-400 hover:text-white text-sm transition-colors">{t.blog}</Link></li>
              <li><Link to="/nexacore/community" className="text-slate-400 hover:text-white text-sm transition-colors">{t.community}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.legal}</h4>
            <ul className="space-y-3">
              <li><Link to="/nexacore/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">{t.privacy}</Link></li>
              <li><Link to="/nexacore/terms" className="text-slate-400 hover:text-white text-sm transition-colors">{t.terms}</Link></li>
              <li><Link to="/nexacore/iso" className="text-slate-400 hover:text-white text-sm transition-colors">{t.iso}</Link></li>
              <li><Link to="/nexacore/gdpr" className="text-slate-400 hover:text-white text-sm transition-colors">{t.gdpr}</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="mailto:info@nexacore.io" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@nexacore.io
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Dublin, Ireland
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} NexaCore by Next Revolution. {t.rights}
            </p>
            <p className="flex items-center gap-1 text-slate-500 text-sm">
              {t.madeWith}
              <Sparkles className="w-4 h-4 text-blue-500" />
              {t.inIreland}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
