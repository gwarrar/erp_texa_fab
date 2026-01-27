import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICLogo } from "@/components/inducore/ICLogo";
import { 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Mail, MapPin, Factory
} from "lucide-react";

const translations = {
  en: {
    description: "The leading manufacturing ERP platform for factories, workshops, and industrial facilities worldwide.",
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
    newsletter: "Stay updated with manufacturing tech trends",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email",
    secretBehind: "The secret behind European industrial excellence",
  },
  ar: {
    description: "منصة ERP الرائدة للتصنيع للمصانع والورش والمرافق الصناعية حول العالم.",
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
    newsletter: "ابق على اطلاع بأحدث تقنيات التصنيع",
    subscribe: "اشترك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    secretBehind: "السر وراء التميز الصناعي الأوروبي",
  },
  tr: {
    description: "Dünya çapında fabrikalar, atölyeler ve endüstriyel tesisler için öncü üretim ERP platformu.",
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
    newsletter: "Üretim teknolojisi trendlerinden haberdar olun",
    subscribe: "Abone Ol",
    emailPlaceholder: "E-posta adresinizi girin",
    secretBehind: "Avrupa endüstriyel mükemmelliğinin arkasındaki sır",
  },
  ru: {
    description: "Ведущая ERP-платформа для производства для заводов, мастерских и промышленных объектов по всему миру.",
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
    newsletter: "Будьте в курсе тенденций производственных технологий",
    subscribe: "Подписаться",
    emailPlaceholder: "Введите ваш email",
    secretBehind: "Секрет европейского промышленного совершенства",
  },
  fr: {
    description: "La plateforme ERP de fabrication de premier plan pour les usines, ateliers et installations industrielles du monde entier.",
    product: "Produit",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    solutions: "Solutions",
    integrations: "Intégrations",
    company: "Entreprise",
    about: "À propos",
    careers: "Carrières",
    contact: "Contact",
    news: "Actualités",
    resources: "Ressources",
    documentation: "Documentation",
    support: "Support",
    blog: "Blog",
    community: "Communauté",
    legal: "Juridique",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    iso: "Conformité ISO",
    gdpr: "RGPD",
    rights: "Tous droits réservés.",
    madeWith: "Fait avec",
    inIreland: "en Irlande",
    newsletter: "Restez informé des tendances technologiques de fabrication",
    subscribe: "S'abonner",
    emailPlaceholder: "Entrez votre email",
    secretBehind: "Le secret de l'excellence industrielle européenne",
  },
  de: {
    description: "Die führende Fertigungs-ERP-Plattform für Fabriken, Werkstätten und Industrieanlagen weltweit.",
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
    newsletter: "Bleiben Sie über Fertigungstechnologie-Trends auf dem Laufenden",
    subscribe: "Abonnieren",
    emailPlaceholder: "Geben Sie Ihre E-Mail ein",
    secretBehind: "Das Geheimnis europäischer industrieller Exzellenz",
  },
  nl: {
    description: "Het toonaangevende productie-ERP-platform voor fabrieken, werkplaatsen en industriële faciliteiten wereldwijd.",
    product: "Product",
    features: "Functies",
    pricing: "Prijzen",
    solutions: "Oplossingen",
    integrations: "Integraties",
    company: "Bedrijf",
    about: "Over ons",
    careers: "Carrières",
    contact: "Contact",
    news: "Nieuws",
    resources: "Bronnen",
    documentation: "Documentatie",
    support: "Ondersteuning",
    blog: "Blog",
    community: "Community",
    legal: "Juridisch",
    privacy: "Privacybeleid",
    terms: "Servicevoorwaarden",
    iso: "ISO-naleving",
    gdpr: "AVG",
    rights: "Alle rechten voorbehouden.",
    madeWith: "Gemaakt met",
    inIreland: "in Ierland",
    newsletter: "Blijf op de hoogte van productietechnologie-trends",
    subscribe: "Abonneren",
    emailPlaceholder: "Voer uw e-mail in",
    secretBehind: "Het geheim achter Europese industriële excellentie",
  },
  it: {
    description: "La piattaforma ERP di produzione leader per fabbriche, officine e impianti industriali in tutto il mondo.",
    product: "Prodotto",
    features: "Funzionalità",
    pricing: "Prezzi",
    solutions: "Soluzioni",
    integrations: "Integrazioni",
    company: "Azienda",
    about: "Chi siamo",
    careers: "Carriere",
    contact: "Contatti",
    news: "Notizie",
    resources: "Risorse",
    documentation: "Documentazione",
    support: "Supporto",
    blog: "Blog",
    community: "Comunità",
    legal: "Legale",
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
    iso: "Conformità ISO",
    gdpr: "GDPR",
    rights: "Tutti i diritti riservati.",
    madeWith: "Fatto con",
    inIreland: "in Irlanda",
    newsletter: "Resta aggiornato sulle tendenze della tecnologia di produzione",
    subscribe: "Iscriviti",
    emailPlaceholder: "Inserisci la tua email",
    secretBehind: "Il segreto dell'eccellenza industriale europea",
  },
  uk: {
    description: "Провідна ERP-платформа для виробництва для заводів, майстерень та промислових об'єктів у всьому світі.",
    product: "Продукт",
    features: "Функції",
    pricing: "Ціни",
    solutions: "Рішення",
    integrations: "Інтеграції",
    company: "Компанія",
    about: "Про нас",
    careers: "Кар'єра",
    contact: "Контакти",
    news: "Новини",
    resources: "Ресурси",
    documentation: "Документація",
    support: "Підтримка",
    blog: "Блог",
    community: "Спільнота",
    legal: "Правова інформація",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
    iso: "Відповідність ISO",
    gdpr: "GDPR",
    rights: "Усі права захищені.",
    madeWith: "Зроблено з",
    inIreland: "в Ірландії",
    newsletter: "Будьте в курсі тенденцій виробничих технологій",
    subscribe: "Підписатися",
    emailPlaceholder: "Введіть вашу email",
    secretBehind: "Секрет європейської промислової досконалості",
  },
};

export function ICFooter() {
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
        <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 mb-12 -mt-24 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
              <h3 className="text-xl font-bold text-white mb-2">{t.newsletter}</h3>
              <p className="text-red-100 text-sm">{t.secretBehind}</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-red-800 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <ICLogo showSlogan={false} animated={false} />
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.product}</h4>
            <ul className="space-y-3">
              <li><Link to="/inducore/features" className="text-slate-400 hover:text-white text-sm transition-colors">{t.features}</Link></li>
              <li><Link to="/inducore/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">{t.pricing}</Link></li>
              <li><Link to="/inducore/solutions" className="text-slate-400 hover:text-white text-sm transition-colors">{t.solutions}</Link></li>
              <li><Link to="/inducore/integrations" className="text-slate-400 hover:text-white text-sm transition-colors">{t.integrations}</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.company}</h4>
            <ul className="space-y-3">
              <li><Link to="/inducore/about" className="text-slate-400 hover:text-white text-sm transition-colors">{t.about}</Link></li>
              <li><Link to="/inducore/careers" className="text-slate-400 hover:text-white text-sm transition-colors">{t.careers}</Link></li>
              <li><Link to="/inducore/contact" className="text-slate-400 hover:text-white text-sm transition-colors">{t.contact}</Link></li>
              <li><Link to="/inducore/news" className="text-slate-400 hover:text-white text-sm transition-colors">{t.news}</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.resources}</h4>
            <ul className="space-y-3">
              <li><Link to="/inducore/docs" className="text-slate-400 hover:text-white text-sm transition-colors">{t.documentation}</Link></li>
              <li><Link to="/inducore/support" className="text-slate-400 hover:text-white text-sm transition-colors">{t.support}</Link></li>
              <li><Link to="/inducore/blog" className="text-slate-400 hover:text-white text-sm transition-colors">{t.blog}</Link></li>
              <li><Link to="/inducore/community" className="text-slate-400 hover:text-white text-sm transition-colors">{t.community}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.legal}</h4>
            <ul className="space-y-3">
              <li><Link to="/inducore/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">{t.privacy}</Link></li>
              <li><Link to="/inducore/terms" className="text-slate-400 hover:text-white text-sm transition-colors">{t.terms}</Link></li>
              <li><Link to="/inducore/iso" className="text-slate-400 hover:text-white text-sm transition-colors">{t.iso}</Link></li>
              <li><Link to="/inducore/gdpr" className="text-slate-400 hover:text-white text-sm transition-colors">{t.gdpr}</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="mailto:info@inducore.io" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@inducore.io
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
              © {new Date().getFullYear()} InduCore by Next Revolution. {t.rights}
            </p>
            <p className="flex items-center gap-1 text-slate-500 text-sm">
              {t.madeWith}
              <Factory className="w-4 h-4 text-red-500" />
              {t.inIreland}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
