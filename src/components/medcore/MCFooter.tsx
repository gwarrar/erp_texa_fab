import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCLogo } from "@/components/medcore/MCLogo";
import { 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Mail, Phone, MapPin, Heart
} from "lucide-react";

const translations = {
  en: {
    description: "The leading healthcare ERP platform for hospitals, clinics, and medical centers worldwide.",
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
    hipaa: "HIPAA Compliance",
    gdpr: "GDPR",
    rights: "All rights reserved.",
    madeWith: "Made with",
    inIreland: "in Ireland",
    newsletter: "Stay updated with healthcare tech trends",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email",
  },
  ar: {
    description: "منصة ERP الرائدة للرعاية الصحية للمستشفيات والعيادات والمراكز الطبية حول العالم.",
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
    hipaa: "التوافق مع HIPAA",
    gdpr: "GDPR",
    rights: "جميع الحقوق محفوظة.",
    madeWith: "صنع بـ",
    inIreland: "في أيرلندا",
    newsletter: "ابق على اطلاع بأحدث تقنيات الرعاية الصحية",
    subscribe: "اشترك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
  },
  tr: {
    description: "Dünya çapında hastaneler, klinikler ve tıp merkezleri için öncü sağlık ERP platformu.",
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
    hipaa: "HIPAA Uyumluluğu",
    gdpr: "GDPR",
    rights: "Tüm hakları saklıdır.",
    madeWith: "ile yapıldı",
    inIreland: "İrlanda'da",
    newsletter: "Sağlık teknolojisi trendlerinden haberdar olun",
    subscribe: "Abone Ol",
    emailPlaceholder: "E-posta adresinizi girin",
  },
  ru: {
    description: "Ведущая ERP-платформа для здравоохранения для больниц, клиник и медицинских центров по всему миру.",
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
    hipaa: "Соответствие HIPAA",
    gdpr: "GDPR",
    rights: "Все права защищены.",
    madeWith: "Сделано с",
    inIreland: "в Ирландии",
    newsletter: "Будьте в курсе трендов медицинских технологий",
    subscribe: "Подписаться",
    emailPlaceholder: "Введите email",
  },
};

export function MCFooter() {
  const { language, isRTL } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const productLinks = [
    { name: t.features, href: "/medcore/features" },
    { name: t.pricing, href: "/medcore/pricing" },
    { name: t.solutions, href: "/medcore/solutions" },
    { name: t.integrations, href: "/medcore/integrations" },
  ];

  const companyLinks = [
    { name: t.about, href: "/medcore/about" },
    { name: t.careers, href: "/medcore/careers" },
    { name: t.contact, href: "/medcore/contact" },
    { name: t.news, href: "/medcore/news" },
  ];

  const resourceLinks = [
    { name: t.documentation, href: "/medcore/docs" },
    { name: t.support, href: "/medcore/support" },
    { name: t.blog, href: "/medcore/blog" },
    { name: t.community, href: "/medcore/community" },
  ];

  const legalLinks = [
    { name: t.privacy, href: "/medcore/privacy" },
    { name: t.terms, href: "/medcore/terms" },
    { name: t.hipaa, href: "/medcore/hipaa" },
    { name: t.gdpr, href: "/medcore/gdpr" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer 
      className="bg-slate-900 text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
              <h3 className="text-xl font-semibold mb-2">{t.newsletter}</h3>
              <p className="text-slate-400 text-sm">Join 50,000+ healthcare professionals</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 md:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/medcore" className="flex items-center gap-2 mb-4">
              <MCLogo className="h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
                MedCore
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              {t.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <a href="mailto:info@medcore.health" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@medcore.health
              </a>
              <a href="tel:+353-1-234-5678" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4" />
                +353 1 234 5678
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Dublin, Ireland
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.product}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.company}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.resources}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.legal}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm text-slate-400">
              <span>© {new Date().getFullYear()} MedCore. {t.rights}</span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="hidden md:flex items-center gap-1">
                {t.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.inIreland}
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
