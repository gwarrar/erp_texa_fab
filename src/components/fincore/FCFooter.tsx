import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { 
  Sparkles, MapPin, Mail, Linkedin, Twitter, Github,
  ArrowRight, ArrowLeft, Shield, Award, Globe2
} from "lucide-react";

const translations = {
  en: {
    tagline: "Next-Generation Core Banking Platform",
    description: "Enterprise-grade banking infrastructure for financial institutions, exchange houses, and remittance companies worldwide.",
    solutions: "Solutions",
    coreBanking: "Core Banking",
    exchangeSystem: "Exchange System",
    remittance: "Remittance",
    treasury: "Treasury Management",
    compliance: "Compliance & KYC",
    mobileApp: "Mobile Banking",
    company: "Company",
    about: "About Us",
    careers: "Careers",
    contact: "Contact",
    partners: "Partners",
    news: "News",
    resources: "Resources",
    documentation: "Documentation",
    apiReference: "API Reference",
    security: "Security",
    support: "Support",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    gdpr: "GDPR Compliance",
    address: "Dublin, Ireland — European Financial Hub",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. All rights reserved.",
    developedBy: "A product of",
    certifications: "Certifications & Compliance",
    pciDss: "PCI DSS Level 1",
    iso27001: "ISO 27001",
    gdprCompliant: "GDPR Compliant",
  },
  ar: {
    tagline: "منصة بنكية أساسية من الجيل التالي",
    description: "بنية تحتية بنكية للمؤسسات المالية وشركات الصرافة والحوالات حول العالم.",
    solutions: "الحلول",
    coreBanking: "النظام البنكي الأساسي",
    exchangeSystem: "نظام الصرافة",
    remittance: "الحوالات المالية",
    treasury: "إدارة الخزينة",
    compliance: "الامتثال والتحقق",
    mobileApp: "الخدمات المصرفية عبر الجوال",
    company: "الشركة",
    about: "من نحن",
    careers: "الوظائف",
    contact: "تواصل معنا",
    partners: "الشركاء",
    news: "الأخبار",
    resources: "الموارد",
    documentation: "التوثيق",
    apiReference: "مرجع API",
    security: "الأمان",
    support: "الدعم",
    legal: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    gdpr: "امتثال GDPR",
    address: "دبلن، أيرلندا — المركز المالي الأوروبي",
    email: "info@fincore-banking.com",
    copyright: "© 2024 فين كور. جميع الحقوق محفوظة.",
    developedBy: "منتج من",
    certifications: "الشهادات والامتثال",
    pciDss: "PCI DSS المستوى 1",
    iso27001: "ISO 27001",
    gdprCompliant: "متوافق مع GDPR",
  },
  ru: {
    tagline: "Банковская платформа нового поколения",
    description: "Корпоративная банковская инфраструктура для финансовых учреждений и обменных пунктов по всему миру.",
    solutions: "Решения",
    coreBanking: "Основной банкинг",
    exchangeSystem: "Система обмена",
    remittance: "Переводы",
    treasury: "Управление казначейством",
    compliance: "Комплаенс и KYC",
    mobileApp: "Мобильный банкинг",
    company: "Компания",
    about: "О нас",
    careers: "Карьера",
    contact: "Контакты",
    partners: "Партнёры",
    news: "Новости",
    resources: "Ресурсы",
    documentation: "Документация",
    apiReference: "API справочник",
    security: "Безопасность",
    support: "Поддержка",
    legal: "Правовая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    gdpr: "Соответствие GDPR",
    address: "Дублин, Ирландия — Европейский финансовый центр",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Все права защищены.",
    developedBy: "Продукт от",
    certifications: "Сертификаты и соответствие",
    pciDss: "PCI DSS Уровень 1",
    iso27001: "ISO 27001",
    gdprCompliant: "Соответствует GDPR",
  },
  uk: {
    tagline: "Банківська платформа нового покоління",
    description: "Корпоративна банківська інфраструктура для фінансових установ та обмінних пунктів по всьому світу.",
    solutions: "Рішення",
    coreBanking: "Основний банкінг",
    exchangeSystem: "Система обміну",
    remittance: "Перекази",
    treasury: "Управління казначейством",
    compliance: "Комплаєнс та KYC",
    mobileApp: "Мобільний банкінг",
    company: "Компанія",
    about: "Про нас",
    careers: "Кар'єра",
    contact: "Контакти",
    partners: "Партнери",
    news: "Новини",
    resources: "Ресурси",
    documentation: "Документація",
    apiReference: "API довідник",
    security: "Безпека",
    support: "Підтримка",
    legal: "Правова інформація",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
    gdpr: "Відповідність GDPR",
    address: "Дублін, Ірландія — Європейський фінансовий центр",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Усі права захищені.",
    developedBy: "Продукт від",
    certifications: "Сертифікати та відповідність",
    pciDss: "PCI DSS Рівень 1",
    iso27001: "ISO 27001",
    gdprCompliant: "Відповідає GDPR",
  },
  tr: {
    tagline: "Yeni Nesil Çekirdek Bankacılık Platformu",
    description: "Dünya genelindeki finans kuruluşları ve döviz büroları için kurumsal bankacılık altyapısı.",
    solutions: "Çözümler",
    coreBanking: "Temel Bankacılık",
    exchangeSystem: "Döviz Sistemi",
    remittance: "Havale",
    treasury: "Hazine Yönetimi",
    compliance: "Uyum ve KYC",
    mobileApp: "Mobil Bankacılık",
    company: "Şirket",
    about: "Hakkımızda",
    careers: "Kariyer",
    contact: "İletişim",
    partners: "Ortaklar",
    news: "Haberler",
    resources: "Kaynaklar",
    documentation: "Dokümantasyon",
    apiReference: "API Referansı",
    security: "Güvenlik",
    support: "Destek",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    gdpr: "GDPR Uyumu",
    address: "Dublin, İrlanda — Avrupa Finans Merkezi",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Tüm hakları saklıdır.",
    developedBy: "Bir ürünü",
    certifications: "Sertifikalar ve Uyum",
    pciDss: "PCI DSS Seviye 1",
    iso27001: "ISO 27001",
    gdprCompliant: "GDPR Uyumlu",
  },
  pl: {
    tagline: "Platforma bankowa nowej generacji",
    description: "Korporacyjna infrastruktura bankowa dla instytucji finansowych i kantorów na całym świecie.",
    solutions: "Rozwiązania",
    coreBanking: "Core Banking",
    exchangeSystem: "System wymiany",
    remittance: "Przelewy",
    treasury: "Zarządzanie skarbcem",
    compliance: "Zgodność i KYC",
    mobileApp: "Bankowość mobilna",
    company: "Firma",
    about: "O nas",
    careers: "Kariera",
    contact: "Kontakt",
    partners: "Partnerzy",
    news: "Aktualności",
    resources: "Zasoby",
    documentation: "Dokumentacja",
    apiReference: "Referencja API",
    security: "Bezpieczeństwo",
    support: "Wsparcie",
    legal: "Prawne",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
    gdpr: "Zgodność z GDPR",
    address: "Dublin, Irlandia — Europejskie centrum finansowe",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Wszelkie prawa zastrzeżone.",
    developedBy: "Produkt od",
    certifications: "Certyfikaty i zgodność",
    pciDss: "PCI DSS Poziom 1",
    iso27001: "ISO 27001",
    gdprCompliant: "Zgodny z GDPR",
  },
  ro: {
    tagline: "Platformă bancară de nouă generație",
    description: "Infrastructură bancară enterprise pentru instituții financiare și case de schimb din întreaga lume.",
    solutions: "Soluții",
    coreBanking: "Core Banking",
    exchangeSystem: "Sistem de schimb",
    remittance: "Remitențe",
    treasury: "Gestiunea trezoreriei",
    compliance: "Conformitate și KYC",
    mobileApp: "Mobile Banking",
    company: "Companie",
    about: "Despre noi",
    careers: "Cariere",
    contact: "Contact",
    partners: "Parteneri",
    news: "Știri",
    resources: "Resurse",
    documentation: "Documentație",
    apiReference: "Referință API",
    security: "Securitate",
    support: "Suport",
    legal: "Legal",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    gdpr: "Conformitate GDPR",
    address: "Dublin, Irlanda — Centrul financiar european",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Toate drepturile rezervate.",
    developedBy: "Un produs de la",
    certifications: "Certificări și conformitate",
    pciDss: "PCI DSS Nivel 1",
    iso27001: "ISO 27001",
    gdprCompliant: "Conform GDPR",
  },
  it: {
    tagline: "Piattaforma bancaria di nuova generazione",
    description: "Infrastruttura bancaria enterprise per istituzioni finanziarie e uffici di cambio in tutto il mondo.",
    solutions: "Soluzioni",
    coreBanking: "Core Banking",
    exchangeSystem: "Sistema di cambio",
    remittance: "Rimesse",
    treasury: "Gestione tesoreria",
    compliance: "Compliance e KYC",
    mobileApp: "Mobile Banking",
    company: "Azienda",
    about: "Chi siamo",
    careers: "Carriere",
    contact: "Contatti",
    partners: "Partner",
    news: "Notizie",
    resources: "Risorse",
    documentation: "Documentazione",
    apiReference: "Riferimento API",
    security: "Sicurezza",
    support: "Supporto",
    legal: "Legale",
    privacy: "Privacy Policy",
    terms: "Termini di servizio",
    gdpr: "Conformità GDPR",
    address: "Dublino, Irlanda — Centro finanziario europeo",
    email: "info@fincore-banking.com",
    copyright: "© 2024 FinCore Banking. Tutti i diritti riservati.",
    developedBy: "Un prodotto di",
    certifications: "Certificazioni e conformità",
    pciDss: "PCI DSS Livello 1",
    iso27001: "ISO 27001",
    gdprCompliant: "Conforme GDPR",
  },
};

export function FCFooter() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-slate-100 dark:bg-[#0A1628] text-slate-900 dark:text-white" dir={dir}>
      {/* Certifications Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Shield className="w-5 h-5 text-[#0D9488]" />
              <span className="text-sm font-medium">{t.pciDss}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Award className="w-5 h-5 text-[#0D9488]" />
              <span className="text-sm font-medium">{t.iso27001}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Globe2 className="w-5 h-5 text-[#0D9488]" />
              <span className="text-sm font-medium">{t.gdprCompliant}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/fincore" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0A1628]">F</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  Fin<span className="text-[#0D9488]">Core</span>
                </span>
              </div>
            </Link>
            <p className="text-[#0D9488] font-medium mb-4">{t.tagline}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              {t.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#0D9488]" />
                <span className="text-slate-500 dark:text-slate-400">{t.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#0D9488]" />
                <span className="text-slate-500 dark:text-slate-400">{t.email}</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">{t.solutions}</h4>
            <ul className="space-y-3">
              {[t.coreBanking, t.exchangeSystem, t.remittance, t.treasury, t.compliance, t.mobileApp].map((item, i) => (
                <li key={i}>
                  <Link to="/fincore/solutions" className="text-slate-500 dark:text-slate-400 hover:text-[#0D9488] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">{t.company}</h4>
            <ul className="space-y-3">
              {[
                { label: t.about, href: "/fincore/about" },
                { label: t.contact, href: "/fincore/contact" },
                { label: t.partners, href: "/fincore/about" },
                { label: t.news, href: "/fincore/about" },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="text-slate-500 dark:text-slate-400 hover:text-[#0D9488] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">{t.resources}</h4>
            <ul className="space-y-3">
              {[t.documentation, t.apiReference, t.security, t.support].map((item, i) => (
                <li key={i}>
                  <Link to="/fincore" className="text-slate-500 dark:text-slate-400 hover:text-[#0D9488] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <p className="text-slate-600 dark:text-slate-500 text-sm">{t.copyright}</p>
              <div className="flex items-center gap-4 text-sm">
                <Link to="/fincore" className="text-slate-500 dark:text-slate-400 hover:text-[#0D9488] transition-colors">
                  {t.privacy}
                </Link>
                <Link to="/fincore" className="text-slate-500 dark:text-slate-400 hover:text-[#0D9488] transition-colors">
                  {t.terms}
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-500">
              <span>{t.developedBy}</span>
              <Link to="/next-revolution" className="flex items-center gap-1 text-[#0D9488] hover:text-[#14B8A6] transition-colors font-medium">
                <Sparkles className="w-4 h-4" />
                Next Revolution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
