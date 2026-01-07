import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { 
  Sparkles, MapPin, Mail, Linkedin, Twitter, Github,
  ArrowRight, ArrowLeft
} from "lucide-react";

const footerTranslations = {
  en: {
    tagline: "Building Tomorrow's Enterprise Solutions Today",
    company: "Company",
    about: "About Us",
    careers: "Careers",
    news: "News & Press",
    contact: "Contact",
    services: "Services",
    software: "Software Development",
    fintech: "FinTech & Banking",
    enterprise: "Enterprise Solutions",
    cybersecurity: "Cybersecurity",
    ai: "AI & Machine Learning",
    products: "Products",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "More Coming Soon",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    address: "Dublin, Ireland — European Tech Hub",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. All rights reserved.",
    irishEuropean: "Irish-European Technology Company",
    newsletter: "Stay Updated",
    newsletterDesc: "Get the latest news and insights",
    subscribe: "Subscribe",
    yourEmail: "Your email address"
  },
  ar: {
    tagline: "نبني حلول المؤسسات الغد اليوم",
    company: "الشركة",
    about: "من نحن",
    careers: "الوظائف",
    news: "الأخبار",
    contact: "تواصل معنا",
    services: "الخدمات",
    software: "تطوير البرمجيات",
    fintech: "التقنية المالية والبنوك",
    enterprise: "حلول المؤسسات",
    cybersecurity: "الأمن السيبراني",
    ai: "الذكاء الاصطناعي",
    products: "المنتجات",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "المزيد قريباً",
    legal: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookies: "سياسة ملفات تعريف الارتباط",
    address: "دبلن، أيرلندا — مركز التقنية الأوروبي",
    email: "info@nextrevolution.io",
    copyright: "© 2024 نيكست ريفوليوشن. جميع الحقوق محفوظة.",
    irishEuropean: "شركة تقنية أيرلندية أوروبية",
    newsletter: "ابقَ على اطلاع",
    newsletterDesc: "احصل على آخر الأخبار والرؤى",
    subscribe: "اشترك",
    yourEmail: "بريدك الإلكتروني"
  },
  ru: {
    tagline: "Создаём корпоративные решения будущего сегодня",
    company: "Компания",
    about: "О нас",
    careers: "Карьера",
    news: "Новости",
    contact: "Контакты",
    services: "Услуги",
    software: "Разработка ПО",
    fintech: "FinTech и Банкинг",
    enterprise: "Корпоративные решения",
    cybersecurity: "Кибербезопасность",
    ai: "ИИ и ML",
    products: "Продукты",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "Скоро",
    legal: "Правовая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    cookies: "Политика cookies",
    address: "Дублин, Ирландия — Европейский Tech Hub",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Все права защищены.",
    irishEuropean: "Ирландско-европейская технологическая компания",
    newsletter: "Будьте в курсе",
    newsletterDesc: "Получайте последние новости",
    subscribe: "Подписаться",
    yourEmail: "Ваш email"
  },
  uk: {
    tagline: "Створюємо корпоративні рішення майбутнього сьогодні",
    company: "Компанія",
    about: "Про нас",
    careers: "Кар'єра",
    news: "Новини",
    contact: "Контакти",
    services: "Послуги",
    software: "Розробка ПЗ",
    fintech: "FinTech та Банкінг",
    enterprise: "Корпоративні рішення",
    cybersecurity: "Кібербезпека",
    ai: "ШІ та ML",
    products: "Продукти",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "Незабаром",
    legal: "Правова інформація",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
    cookies: "Політика cookies",
    address: "Дублін, Ірландія — Європейський Tech Hub",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Всі права захищені.",
    irishEuropean: "Ірландсько-європейська технологічна компанія",
    newsletter: "Будьте в курсі",
    newsletterDesc: "Отримуйте останні новини",
    subscribe: "Підписатися",
    yourEmail: "Ваш email"
  },
  tr: {
    tagline: "Yarının Kurumsal Çözümlerini Bugün İnşa Ediyoruz",
    company: "Şirket",
    about: "Hakkımızda",
    careers: "Kariyer",
    news: "Haberler",
    contact: "İletişim",
    services: "Hizmetler",
    software: "Yazılım Geliştirme",
    fintech: "FinTech ve Bankacılık",
    enterprise: "Kurumsal Çözümler",
    cybersecurity: "Siber Güvenlik",
    ai: "AI ve ML",
    products: "Ürünler",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "Yakında",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    cookies: "Çerez Politikası",
    address: "Dublin, İrlanda — Avrupa Tech Hub'ı",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Tüm hakları saklıdır.",
    irishEuropean: "İrlanda-Avrupa Teknoloji Şirketi",
    newsletter: "Güncel Kalın",
    newsletterDesc: "En son haberleri alın",
    subscribe: "Abone Ol",
    yourEmail: "E-posta adresiniz"
  },
  pl: {
    tagline: "Budujemy rozwiązania korporacyjne jutra już dziś",
    company: "Firma",
    about: "O nas",
    careers: "Kariera",
    news: "Aktualności",
    contact: "Kontakt",
    services: "Usługi",
    software: "Rozwój oprogramowania",
    fintech: "FinTech i Bankowość",
    enterprise: "Rozwiązania dla firm",
    cybersecurity: "Cyberbezpieczeństwo",
    ai: "AI i ML",
    products: "Produkty",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "Wkrótce",
    legal: "Informacje prawne",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
    cookies: "Polityka cookies",
    address: "Dublin, Irlandia — Europejski Tech Hub",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Wszelkie prawa zastrzeżone.",
    irishEuropean: "Irlandzko-europejska firma technologiczna",
    newsletter: "Bądź na bieżąco",
    newsletterDesc: "Otrzymuj najnowsze wiadomości",
    subscribe: "Subskrybuj",
    yourEmail: "Twój email"
  },
  ro: {
    tagline: "Construim soluțiile enterprise de mâine astăzi",
    company: "Companie",
    about: "Despre noi",
    careers: "Cariere",
    news: "Știri",
    contact: "Contact",
    services: "Servicii",
    software: "Dezvoltare software",
    fintech: "FinTech și Banking",
    enterprise: "Soluții enterprise",
    cybersecurity: "Securitate cibernetică",
    ai: "AI și ML",
    products: "Produse",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "În curând",
    legal: "Legal",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    cookies: "Politica cookies",
    address: "Dublin, Irlanda — Hub-ul Tech European",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Toate drepturile rezervate.",
    irishEuropean: "Companie tehnologică irlandezo-europeană",
    newsletter: "Rămâi la curent",
    newsletterDesc: "Primește ultimele noutăți",
    subscribe: "Abonează-te",
    yourEmail: "Adresa ta de email"
  },
  it: {
    tagline: "Costruiamo le soluzioni enterprise di domani oggi",
    company: "Azienda",
    about: "Chi Siamo",
    careers: "Carriere",
    news: "Notizie",
    contact: "Contatti",
    services: "Servizi",
    software: "Sviluppo Software",
    fintech: "FinTech e Banking",
    enterprise: "Soluzioni Enterprise",
    cybersecurity: "Sicurezza Informatica",
    ai: "AI e ML",
    products: "Prodotti",
    texacore: "TexaCore ERP",
    texafab: "TexaFab",
    comingSoon: "Prossimamente",
    legal: "Legale",
    privacy: "Privacy Policy",
    terms: "Termini di Servizio",
    cookies: "Cookie Policy",
    address: "Dublino, Irlanda — Hub Tech Europeo",
    email: "info@nextrevolution.io",
    copyright: "© 2024 Next Revolution. Tutti i diritti riservati.",
    irishEuropean: "Azienda tecnologica irlandese-europea",
    newsletter: "Rimani aggiornato",
    newsletterDesc: "Ricevi le ultime novità",
    subscribe: "Iscriviti",
    yourEmail: "La tua email"
  }
};

export function NRFooter() {
  const { language, dir } = useLanguage();
  const t = footerTranslations[language as keyof typeof footerTranslations] || footerTranslations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/next-revolution" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Next Revolution
                </span>
                <span className="text-xs text-slate-500">
                  {t.irishEuropean}
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              {t.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{t.email}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-3">
              <li><Link to="/next-revolution/services/software" className="hover:text-blue-400 transition-colors">{t.software}</Link></li>
              <li><Link to="/next-revolution/services/fintech" className="hover:text-blue-400 transition-colors">{t.fintech}</Link></li>
              <li><Link to="/next-revolution/services/enterprise" className="hover:text-blue-400 transition-colors">{t.enterprise}</Link></li>
              <li><Link to="/next-revolution/services/cybersecurity" className="hover:text-blue-400 transition-colors">{t.cybersecurity}</Link></li>
              <li><Link to="/next-revolution/services/ai" className="hover:text-blue-400 transition-colors">{t.ai}</Link></li>
            </ul>
          </div>
          
          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.products}</h4>
            <ul className="space-y-3">
              <li><Link to="/next-revolution/products" className="hover:text-blue-400 transition-colors">{t.texacore}</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">{t.texafab}</Link></li>
              <li><span className="text-slate-500">{t.comingSoon}</span></li>
            </ul>
            
            <h4 className="text-white font-semibold mb-4 mt-8">{t.company}</h4>
            <ul className="space-y-3">
              <li><Link to="/next-revolution/about" className="hover:text-blue-400 transition-colors">{t.about}</Link></li>
              <li><Link to="/next-revolution/contact" className="hover:text-blue-400 transition-colors">{t.contact}</Link></li>
              <li><Link to="/next-revolution/blog" className="hover:text-blue-400 transition-colors">{t.news}</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.newsletter}</h4>
            <p className="text-sm text-slate-400 mb-4">{t.newsletterDesc}</p>
            
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t.yourEmail}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all"
              >
                {t.subscribe}
                <ArrowIcon className="w-4 h-4" />
              </button>
            </form>
            
            {/* Legal Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">{t.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">{t.privacy}</Link></li>
                <li><Link to="/terms" className="hover:text-blue-400 transition-colors">{t.terms}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              {t.copyright}
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                🇮🇪 {t.irishEuropean}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
