import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Globe, Shield, Users, Building2, Zap, Award, 
  CheckCircle2, Code2, Layers, Database, Cloud, Cpu, LineChart, Lock, 
  Sparkles, Target, TrendingUp, Server, Banknote, Landmark, CreditCard,
  Wallet, Building, Receipt, FileCheck, Phone, Wifi, Radio, Scissors, Factory, Send
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Next Revolution",
    heroSubtitle: "For Software Development",
    heroTagline: "Building Tomorrow's Enterprise Solutions Today",
    heroDescription: "Irish-European technology company specializing in enterprise software, fintech solutions, AI-powered systems, and digital infrastructure for global markets.",
    exploreServices: "Explore Services",
    contactUs: "Contact Us",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive Technology Solutions",
    
    softwareTitle: "Custom Software Development",
    softwareDesc: "Enterprise-grade applications built with cutting-edge technologies",
    
    fintechTitle: "FinTech & Banking",
    fintechDesc: "Core banking, exchange platforms, and remittance solutions",
    
    enterpriseTitle: "Enterprise Solutions",
    enterpriseDesc: "Corporate accounting, government ERP, and compliance systems",
    
    cyberTitle: "Cybersecurity",
    cyberDesc: "Security audits, penetration testing, and compliance (PCI-DSS, GDPR)",
    
    aiTitle: "AI & Data Science",
    aiDesc: "Machine learning models, predictive analytics, and AI integration",
    
    infraTitle: "Infrastructure",
    infraDesc: "Data centers, cloud solutions, and server management",
    
    telecomTitle: "Telecommunications",
    telecomDesc: "Network solutions, VoIP systems, and unified communications",
    
    textileTitle: "Textile & Fabric Solutions",
    textileDesc: "End-to-end solutions from manufacturing to retail trade",
    
    // Stats
    statsTitle: "Our Global Impact",
    stat1: "500+",
    stat1Label: "Enterprise Clients",
    stat2: "40+",
    stat2Label: "Countries Served",
    stat3: "99.9%",
    stat3Label: "Uptime Guarantee",
    stat4: "$2B+",
    stat4Label: "Transactions Processed",
    
    // Products Section
    productsTitle: "Our Products",
    productsSubtitle: "Industry-Leading Software Solutions",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "Specialized ERP for textile factories and fabric trading companies",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Next-generation core banking platform for modern financial institutions",
    
    goverpTitle: "GovERP",
    goverpDesc: "Government financial management and anti-corruption system",
    
    remitproTitle: "RemitPro",
    remitproDesc: "International money transfer platform for banks",
    
    viewProduct: "View Product",
    
    // Sectors Section
    sectorsTitle: "Industries We Serve",
    sectorsSubtitle: "Specialized Solutions for Every Sector",
    
    bankingTitle: "Banking & Finance",
    bankingDesc: "Core banking systems, digital payments, and financial reporting",
    
    exchangeTitle: "Currency Exchange",
    exchangeDesc: "Multi-currency platforms, forex solutions, and real-time rates",
    
    remittanceTitle: "Remittance & Transfers",
    remittanceDesc: "Secure, fast, and compliant money transfer systems",
    
    govTitle: "Government & Public Sector",
    govDesc: "Financial management, procurement, and compliance systems",
    
    corporateTitle: "Large Corporations",
    corporateDesc: "Enterprise accounting, consolidation, and audit tools",
    
    textileSectorTitle: "Global Textile Industry",
    textileSectorDesc: "Solutions for major factories in UK, Ireland & Europe",
    
    // Certifications
    certTitle: "Certifications & Compliance",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "GDPR Compliant",
    cert5: "SWIFT Certified",
    
    // CTA Section
    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc: "Partner with a trusted European technology leader",
    ctaButton: "Get Started Today",
    
    // Trust Badges
    irishEuropean: "Irish-European Technology Company",
    trusted: "Trusted by Fortune 500 Companies"
  },
  ar: {
    heroTitle: "نيكست ريفوليوشن",
    heroSubtitle: "لتطوير البرمجيات",
    heroTagline: "نبني حلول المؤسسات المستقبلية اليوم",
    heroDescription: "شركة تقنية أيرلندية أوروبية متخصصة في برمجيات المؤسسات، والحلول المالية، والأنظمة المدعومة بالذكاء الاصطناعي، والبنية التحتية الرقمية للأسواق العالمية.",
    exploreServices: "استكشف خدماتنا",
    contactUs: "تواصل معنا",
    
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول تقنية شاملة",
    
    softwareTitle: "تطوير البرمجيات المخصصة",
    softwareDesc: "تطبيقات مؤسسية مبنية بأحدث التقنيات",
    
    fintechTitle: "التقنية المالية والبنوك",
    fintechDesc: "أنظمة البنوك الأساسية، منصات الصرافة، وحلول الحوالات",
    
    enterpriseTitle: "حلول المؤسسات",
    enterpriseDesc: "المحاسبة المؤسسية، ERP حكومي، وأنظمة الامتثال",
    
    cyberTitle: "الأمن السيبراني",
    cyberDesc: "تدقيق أمني، اختبار الاختراق، والامتثال (PCI-DSS, GDPR)",
    
    aiTitle: "الذكاء الاصطناعي وعلوم البيانات",
    aiDesc: "نماذج التعلم الآلي، التحليلات التنبؤية، وتكامل الذكاء الاصطناعي",
    
    infraTitle: "البنية التحتية",
    infraDesc: "مراكز البيانات، الحلول السحابية، وإدارة السيرفرات",
    
    telecomTitle: "الاتصالات",
    telecomDesc: "حلول الشبكات، أنظمة VoIP، والاتصالات الموحدة",
    
    textileTitle: "حلول النسيج والأقمشة",
    textileDesc: "حلول شاملة من التصنيع إلى التجارة",
    
    statsTitle: "تأثيرنا العالمي",
    stat1: "+500",
    stat1Label: "عميل مؤسسي",
    stat2: "+40",
    stat2Label: "دولة نخدمها",
    stat3: "99.9%",
    stat3Label: "ضمان التشغيل",
    stat4: "+$2B",
    stat4Label: "معاملات معالجة",
    
    productsTitle: "منتجاتنا",
    productsSubtitle: "حلول برمجية رائدة في الصناعة",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "نظام ERP متخصص لمعامل النسيج وشركات تجارة الأقمشة",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "منصة بنكية أساسية من الجيل التالي للمؤسسات المالية",
    
    goverpTitle: "GovERP",
    goverpDesc: "نظام الإدارة المالية الحكومية ومكافحة الفساد",
    
    remitproTitle: "RemitPro",
    remitproDesc: "منصة تحويل الأموال الدولية للبنوك",
    
    viewProduct: "عرض المنتج",
    
    sectorsTitle: "القطاعات التي نخدمها",
    sectorsSubtitle: "حلول متخصصة لكل قطاع",
    
    bankingTitle: "البنوك والتمويل",
    bankingDesc: "أنظمة البنوك الأساسية، المدفوعات الرقمية، والتقارير المالية",
    
    exchangeTitle: "الصرافة",
    exchangeDesc: "منصات متعددة العملات، حلول الفوركس، وأسعار فورية",
    
    remittanceTitle: "الحوالات والتحويلات",
    remittanceDesc: "أنظمة تحويل أموال آمنة وسريعة ومتوافقة",
    
    govTitle: "الحكومة والقطاع العام",
    govDesc: "الإدارة المالية، المشتريات، وأنظمة الامتثال",
    
    corporateTitle: "الشركات الكبرى",
    corporateDesc: "المحاسبة المؤسسية، التوحيد، وأدوات التدقيق",
    
    textileSectorTitle: "النسيج العالمي",
    textileSectorDesc: "حلول للمصانع الكبرى في بريطانيا وأيرلندا وأوروبا",
    
    certTitle: "الشهادات والامتثال",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "متوافق مع GDPR",
    cert5: "معتمد SWIFT",
    
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaDesc: "شراكة مع شركة تقنية أوروبية موثوقة",
    ctaButton: "ابدأ اليوم",
    
    irishEuropean: "شركة تقنية أيرلندية أوروبية",
    trusted: "موثوق من شركات Fortune 500"
  },
  ru: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Разработка программного обеспечения",
    heroTagline: "Создаём корпоративные решения будущего сегодня",
    heroDescription: "Ирландско-европейская технологическая компания, специализирующаяся на корпоративном ПО, финтех-решениях, AI-системах и цифровой инфраструктуре для глобальных рынков.",
    exploreServices: "Наши услуги",
    contactUs: "Связаться",
    
    servicesTitle: "Наши услуги",
    servicesSubtitle: "Комплексные технологические решения",
    
    softwareTitle: "Разработка ПО на заказ",
    softwareDesc: "Корпоративные приложения на передовых технологиях",
    
    fintechTitle: "FinTech и Банкинг",
    fintechDesc: "Банковские системы, обменные платформы и переводы",
    
    enterpriseTitle: "Корпоративные решения",
    enterpriseDesc: "Бухгалтерия, госсектор ERP и системы соответствия",
    
    cyberTitle: "Кибербезопасность",
    cyberDesc: "Аудит безопасности, пентесты, соответствие (PCI-DSS, GDPR)",
    
    aiTitle: "ИИ и Data Science",
    aiDesc: "ML-модели, предиктивная аналитика и интеграция ИИ",
    
    infraTitle: "Инфраструктура",
    infraDesc: "Дата-центры, облачные решения и управление серверами",
    
    telecomTitle: "Телекоммуникации",
    telecomDesc: "Сетевые решения, VoIP и унифицированные коммуникации",
    
    textileTitle: "Решения для текстиля",
    textileDesc: "Комплексные решения от производства до розничной торговли",
    
    statsTitle: "Наше глобальное влияние",
    stat1: "500+",
    stat1Label: "Корпоративных клиентов",
    stat2: "40+",
    stat2Label: "Стран обслуживания",
    stat3: "99.9%",
    stat3Label: "Гарантия работы",
    stat4: "$2B+",
    stat4Label: "Обработанных транзакций",
    
    productsTitle: "Наши продукты",
    productsSubtitle: "Ведущие отраслевые решения",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "Специализированное ERP для текстильных фабрик и торговли тканями",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Банковская платформа нового поколения",
    
    goverpTitle: "GovERP",
    goverpDesc: "Система управления госфинансами и антикоррупция",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Платформа международных переводов для банков",
    
    viewProduct: "Подробнее",
    
    sectorsTitle: "Отрасли",
    sectorsSubtitle: "Специализированные решения для каждого сектора",
    
    bankingTitle: "Банки и финансы",
    bankingDesc: "Банковские системы, цифровые платежи и отчётность",
    
    exchangeTitle: "Обмен валют",
    exchangeDesc: "Мультивалютные платформы и форекс-решения",
    
    remittanceTitle: "Переводы",
    remittanceDesc: "Безопасные и быстрые системы денежных переводов",
    
    govTitle: "Госсектор",
    govDesc: "Финансовое управление и системы соответствия",
    
    corporateTitle: "Крупные корпорации",
    corporateDesc: "Корпоративная бухгалтерия и аудит",
    
    textileSectorTitle: "Мировой текстиль",
    textileSectorDesc: "Решения для крупных фабрик в Британии, Ирландии и Европе",
    
    certTitle: "Сертификаты",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "GDPR Compliant",
    cert5: "SWIFT Certified",
    
    ctaTitle: "Готовы трансформировать бизнес?",
    ctaDesc: "Партнёрство с ведущей европейской tech-компанией",
    ctaButton: "Начать сегодня",
    
    irishEuropean: "Ирландско-европейская tech-компания",
    trusted: "Доверяют компании Fortune 500"
  },
  uk: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Розробка програмного забезпечення",
    heroTagline: "Створюємо корпоративні рішення майбутнього сьогодні",
    heroDescription: "Ірландсько-європейська технологічна компанія, що спеціалізується на корпоративному ПЗ, фінтех-рішеннях, AI-системах та цифровій інфраструктурі для глобальних ринків.",
    exploreServices: "Наші послуги",
    contactUs: "Зв'язатися",
    
    servicesTitle: "Наші послуги",
    servicesSubtitle: "Комплексні технологічні рішення",
    
    softwareTitle: "Розробка ПЗ на замовлення",
    softwareDesc: "Корпоративні додатки на передових технологіях",
    
    fintechTitle: "FinTech та Банкінг",
    fintechDesc: "Банківські системи, обмінні платформи та перекази",
    
    enterpriseTitle: "Корпоративні рішення",
    enterpriseDesc: "Бухгалтерія, держсектор ERP та системи відповідності",
    
    cyberTitle: "Кібербезпека",
    cyberDesc: "Аудит безпеки, пентести, відповідність (PCI-DSS, GDPR)",
    
    aiTitle: "ШІ та Data Science",
    aiDesc: "ML-моделі, предиктивна аналітика та інтеграція ШІ",
    
    infraTitle: "Інфраструктура",
    infraDesc: "Дата-центри, хмарні рішення та управління серверами",
    
    telecomTitle: "Телекомунікації",
    telecomDesc: "Мережеві рішення, VoIP та уніфіковані комунікації",
    
    textileTitle: "Рішення для текстилю",
    textileDesc: "Комплексні рішення від виробництва до роздрібної торгівлі",
    
    statsTitle: "Наш глобальний вплив",
    stat1: "500+",
    stat1Label: "Корпоративних клієнтів",
    stat2: "40+",
    stat2Label: "Країн обслуговування",
    stat3: "99.9%",
    stat3Label: "Гарантія роботи",
    stat4: "$2B+",
    stat4Label: "Оброблених транзакцій",
    
    productsTitle: "Наші продукти",
    productsSubtitle: "Провідні галузеві рішення",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "Спеціалізоване ERP для текстильних фабрик та торгівлі тканинами",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Банківська платформа нового покоління",
    
    goverpTitle: "GovERP",
    goverpDesc: "Система управління держфінансами та антикорупція",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Платформа міжнародних переказів для банків",
    
    viewProduct: "Детальніше",
    
    sectorsTitle: "Галузі",
    sectorsSubtitle: "Спеціалізовані рішення для кожного сектору",
    
    bankingTitle: "Банки та фінанси",
    bankingDesc: "Банківські системи, цифрові платежі та звітність",
    
    exchangeTitle: "Обмін валют",
    exchangeDesc: "Мультивалютні платформи та форекс-рішення",
    
    remittanceTitle: "Перекази",
    remittanceDesc: "Безпечні та швидкі системи грошових переказів",
    
    govTitle: "Держсектор",
    govDesc: "Фінансове управління та системи відповідності",
    
    corporateTitle: "Великі корпорації",
    corporateDesc: "Корпоративна бухгалтерія та аудит",
    
    textileSectorTitle: "Світовий текстиль",
    textileSectorDesc: "Рішення для великих фабрик у Британії, Ірландії та Європі",
    
    certTitle: "Сертифікати",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "GDPR Compliant",
    cert5: "SWIFT Certified",
    
    ctaTitle: "Готові трансформувати бізнес?",
    ctaDesc: "Партнерство з провідною європейською tech-компанією",
    ctaButton: "Почати сьогодні",
    
    irishEuropean: "Ірландсько-європейська tech-компанія",
    trusted: "Довіряють компанії Fortune 500"
  },
  tr: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Yazılım Geliştirme",
    heroTagline: "Yarının Kurumsal Çözümlerini Bugün İnşa Ediyoruz",
    heroDescription: "Kurumsal yazılım, fintech çözümleri, AI destekli sistemler ve küresel pazarlar için dijital altyapı konusunda uzmanlaşmış İrlanda-Avrupa teknoloji şirketi.",
    exploreServices: "Hizmetleri Keşfet",
    contactUs: "İletişime Geç",
    
    servicesTitle: "Hizmetlerimiz",
    servicesSubtitle: "Kapsamlı Teknoloji Çözümleri",
    
    softwareTitle: "Özel Yazılım Geliştirme",
    softwareDesc: "En son teknolojilerle kurumsal uygulamalar",
    
    fintechTitle: "FinTech ve Bankacılık",
    fintechDesc: "Bankacılık sistemleri, döviz platformları ve havale çözümleri",
    
    enterpriseTitle: "Kurumsal Çözümler",
    enterpriseDesc: "Kurumsal muhasebe, kamu ERP ve uyumluluk sistemleri",
    
    cyberTitle: "Siber Güvenlik",
    cyberDesc: "Güvenlik denetimi, pentest, uyumluluk (PCI-DSS, GDPR)",
    
    aiTitle: "AI ve Veri Bilimi",
    aiDesc: "ML modelleri, öngörücü analitik ve AI entegrasyonu",
    
    infraTitle: "Altyapı",
    infraDesc: "Veri merkezleri, bulut çözümleri ve sunucu yönetimi",
    
    telecomTitle: "Telekomünikasyon",
    telecomDesc: "Ağ çözümleri, VoIP ve birleşik iletişim",
    
    textileTitle: "Tekstil ve Kumaş Çözümleri",
    textileDesc: "Üretimden perakende ticarete uçtan uca çözümler",
    
    statsTitle: "Küresel Etkimiz",
    stat1: "500+",
    stat1Label: "Kurumsal Müşteri",
    stat2: "40+",
    stat2Label: "Hizmet Verilen Ülke",
    stat3: "99.9%",
    stat3Label: "Çalışma Süresi Garantisi",
    stat4: "$2B+",
    stat4Label: "İşlenen İşlem",
    
    productsTitle: "Ürünlerimiz",
    productsSubtitle: "Sektör Lideri Yazılım Çözümleri",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "Tekstil fabrikaları ve kumaş ticareti için özel ERP",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Yeni nesil bankacılık platformu",
    
    goverpTitle: "GovERP",
    goverpDesc: "Devlet mali yönetimi ve yolsuzlukla mücadele sistemi",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Bankalar için uluslararası havale platformu",
    
    viewProduct: "Ürünü Görüntüle",
    
    sectorsTitle: "Hizmet Verdiğimiz Sektörler",
    sectorsSubtitle: "Her Sektör İçin Uzman Çözümler",
    
    bankingTitle: "Bankacılık ve Finans",
    bankingDesc: "Bankacılık sistemleri, dijital ödemeler ve raporlama",
    
    exchangeTitle: "Döviz",
    exchangeDesc: "Çok para birimli platformlar ve forex çözümleri",
    
    remittanceTitle: "Havale ve Transferler",
    remittanceDesc: "Güvenli ve hızlı para transfer sistemleri",
    
    govTitle: "Kamu Sektörü",
    govDesc: "Mali yönetim ve uyumluluk sistemleri",
    
    corporateTitle: "Büyük Şirketler",
    corporateDesc: "Kurumsal muhasebe ve denetim araçları",
    
    textileSectorTitle: "Küresel Tekstil Sektörü",
    textileSectorDesc: "İngiltere, İrlanda ve Avrupa'daki büyük fabrikalar için çözümler",
    
    certTitle: "Sertifikalar",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "GDPR Uyumlu",
    cert5: "SWIFT Sertifikalı",
    
    ctaTitle: "İşinizi Dönüştürmeye Hazır mısınız?",
    ctaDesc: "Güvenilir Avrupa teknoloji lideriyle ortaklık",
    ctaButton: "Bugün Başlayın",
    
    irishEuropean: "İrlanda-Avrupa Teknoloji Şirketi",
    trusted: "Fortune 500 Şirketlerinin Güveni"
  },
  pl: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Rozwój Oprogramowania",
    heroTagline: "Budujemy Rozwiązania Korporacyjne Jutra Już Dziś",
    heroDescription: "Irlandzko-europejska firma technologiczna specjalizująca się w oprogramowaniu korporacyjnym, rozwiązaniach fintech, systemach AI i infrastrukturze cyfrowej dla globalnych rynków.",
    exploreServices: "Poznaj Usługi",
    contactUs: "Skontaktuj się",
    
    servicesTitle: "Nasze Usługi",
    servicesSubtitle: "Kompleksowe Rozwiązania Technologiczne",
    
    softwareTitle: "Rozwój Oprogramowania na Zamówienie",
    softwareDesc: "Aplikacje korporacyjne z najnowszymi technologiami",
    
    fintechTitle: "FinTech i Bankowość",
    fintechDesc: "Systemy bankowe, platformy wymiany i przelewy",
    
    enterpriseTitle: "Rozwiązania dla Firm",
    enterpriseDesc: "Księgowość korporacyjna, ERP dla administracji i systemy zgodności",
    
    cyberTitle: "Cyberbezpieczeństwo",
    cyberDesc: "Audyty bezpieczeństwa, pentesty, zgodność (PCI-DSS, GDPR)",
    
    aiTitle: "AI i Data Science",
    aiDesc: "Modele ML, analityka predykcyjna i integracja AI",
    
    infraTitle: "Infrastruktura",
    infraDesc: "Centra danych, rozwiązania chmurowe i zarządzanie serwerami",
    
    telecomTitle: "Telekomunikacja",
    telecomDesc: "Rozwiązania sieciowe, VoIP i ujednolicona komunikacja",
    
    textileTitle: "Rozwiązania tekstylne",
    textileDesc: "Kompleksowe rozwiązania od produkcji do handlu detalicznego",
    
    statsTitle: "Nasz Globalny Wpływ",
    stat1: "500+",
    stat1Label: "Klientów Korporacyjnych",
    stat2: "40+",
    stat2Label: "Obsługiwanych Krajów",
    stat3: "99.9%",
    stat3Label: "Gwarancja Dostępności",
    stat4: "$2B+",
    stat4Label: "Przetworzonych Transakcji",
    
    productsTitle: "Nasze Produkty",
    productsSubtitle: "Wiodące Rozwiązania Branżowe",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "Specjalistyczne ERP dla fabryk tekstylnych i handlu tkaninami",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Platforma bankowa nowej generacji",
    
    goverpTitle: "GovERP",
    goverpDesc: "System zarządzania finansami publicznymi i antykorupcja",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Platforma przelewów międzynarodowych dla banków",
    
    viewProduct: "Zobacz Produkt",
    
    sectorsTitle: "Obsługiwane Branże",
    sectorsSubtitle: "Specjalistyczne Rozwiązania dla Każdego Sektora",
    
    bankingTitle: "Bankowość i Finanse",
    bankingDesc: "Systemy bankowe, płatności cyfrowe i raportowanie",
    
    exchangeTitle: "Wymiana Walut",
    exchangeDesc: "Platformy wielowalutowe i rozwiązania forex",
    
    remittanceTitle: "Przekazy i Przelewy",
    remittanceDesc: "Bezpieczne i szybkie systemy przekazów pieniężnych",
    
    govTitle: "Sektor Publiczny",
    govDesc: "Zarządzanie finansami i systemy zgodności",
    
    corporateTitle: "Duże Korporacje",
    corporateDesc: "Księgowość korporacyjna i narzędzia audytowe",
    
    textileSectorTitle: "Światowy przemysł tekstylny",
    textileSectorDesc: "Rozwiązania dla dużych fabryk w Wielkiej Brytanii, Irlandii i Europie",
    
    certTitle: "Certyfikaty",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "Zgodność z GDPR",
    cert5: "Certyfikat SWIFT",
    
    ctaTitle: "Gotowy na Transformację Firmy?",
    ctaDesc: "Partnerstwo z wiodącą europejską firmą technologiczną",
    ctaButton: "Zacznij Dziś",
    
    irishEuropean: "Irlandzko-europejska Firma Technologiczna",
    trusted: "Zaufanie Firm Fortune 500"
  },
  ro: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Dezvoltare Software",
    heroTagline: "Construim Soluțiile Enterprise de Mâine Astăzi",
    heroDescription: "Companie tehnologică irlandezo-europeană specializată în software enterprise, soluții fintech, sisteme AI și infrastructură digitală pentru piețele globale.",
    exploreServices: "Descoperă Serviciile",
    contactUs: "Contactează-ne",
    
    servicesTitle: "Serviciile Noastre",
    servicesSubtitle: "Soluții Tehnologice Complete",
    
    softwareTitle: "Dezvoltare Software Personalizat",
    softwareDesc: "Aplicații enterprise cu tehnologii de ultimă generație",
    
    fintechTitle: "FinTech și Banking",
    fintechDesc: "Sisteme bancare, platforme de schimb și transferuri",
    
    enterpriseTitle: "Soluții Enterprise",
    enterpriseDesc: "Contabilitate corporativă, ERP guvernamental și sisteme de conformitate",
    
    cyberTitle: "Securitate Cibernetică",
    cyberDesc: "Audituri de securitate, pentesting, conformitate (PCI-DSS, GDPR)",
    
    aiTitle: "AI și Data Science",
    aiDesc: "Modele ML, analiză predictivă și integrare AI",
    
    infraTitle: "Infrastructură",
    infraDesc: "Centre de date, soluții cloud și management servere",
    
    telecomTitle: "Telecomunicații",
    telecomDesc: "Soluții de rețea, VoIP și comunicații unificate",
    
    textileTitle: "Soluții textile",
    textileDesc: "Soluții complete de la producție la comerțul cu amănuntul",
    
    statsTitle: "Impactul Nostru Global",
    stat1: "500+",
    stat1Label: "Clienți Corporativi",
    stat2: "40+",
    stat2Label: "Țări Deservite",
    stat3: "99.9%",
    stat3Label: "Garanție Uptime",
    stat4: "$2B+",
    stat4Label: "Tranzacții Procesate",
    
    productsTitle: "Produsele Noastre",
    productsSubtitle: "Soluții Software Lider în Industrie",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "ERP specializat pentru fabrici textile și comerț cu țesături",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Platformă bancară de nouă generație",
    
    goverpTitle: "GovERP",
    goverpDesc: "Sistem de management financiar guvernamental și anticorupție",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Platformă de transferuri internaționale pentru bănci",
    
    viewProduct: "Vezi Produsul",
    
    sectorsTitle: "Industrii Deservite",
    sectorsSubtitle: "Soluții Specializate pentru Fiecare Sector",
    
    bankingTitle: "Banking și Finanțe",
    bankingDesc: "Sisteme bancare, plăți digitale și raportare",
    
    exchangeTitle: "Schimb Valutar",
    exchangeDesc: "Platforme multi-valută și soluții forex",
    
    remittanceTitle: "Remitențe și Transferuri",
    remittanceDesc: "Sisteme de transfer bani sigure și rapide",
    
    govTitle: "Sector Public",
    govDesc: "Management financiar și sisteme de conformitate",
    
    corporateTitle: "Corporații Mari",
    corporateDesc: "Contabilitate corporativă și instrumente de audit",
    
    textileSectorTitle: "Industria textilă globală",
    textileSectorDesc: "Soluții pentru fabricile mari din Marea Britanie, Irlanda și Europa",
    
    certTitle: "Certificări",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "Conform GDPR",
    cert5: "Certificat SWIFT",
    
    ctaTitle: "Gata să Transformi Afacerea?",
    ctaDesc: "Parteneriat cu un lider tehnologic european de încredere",
    ctaButton: "Începe Astăzi",
    
    irishEuropean: "Companie Tehnologică Irlandezo-Europeană",
    trusted: "Încrederea Companiilor Fortune 500"
  },
  it: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Sviluppo Software",
    heroTagline: "Costruiamo le Soluzioni Enterprise di Domani Oggi",
    heroDescription: "Azienda tecnologica irlandese-europea specializzata in software enterprise, soluzioni fintech, sistemi AI e infrastruttura digitale per i mercati globali.",
    exploreServices: "Scopri i Servizi",
    contactUs: "Contattaci",
    
    servicesTitle: "I Nostri Servizi",
    servicesSubtitle: "Soluzioni Tecnologiche Complete",
    
    softwareTitle: "Sviluppo Software Personalizzato",
    softwareDesc: "Applicazioni enterprise con tecnologie all'avanguardia",
    
    fintechTitle: "FinTech e Banking",
    fintechDesc: "Sistemi bancari, piattaforme di cambio e trasferimenti",
    
    enterpriseTitle: "Soluzioni Enterprise",
    enterpriseDesc: "Contabilità aziendale, ERP governativo e sistemi di conformità",
    
    cyberTitle: "Sicurezza Informatica",
    cyberDesc: "Audit di sicurezza, pentesting, conformità (PCI-DSS, GDPR)",
    
    aiTitle: "AI e Data Science",
    aiDesc: "Modelli ML, analisi predittiva e integrazione AI",
    
    infraTitle: "Infrastruttura",
    infraDesc: "Data center, soluzioni cloud e gestione server",
    
    telecomTitle: "Telecomunicazioni",
    telecomDesc: "Soluzioni di rete, VoIP e comunicazioni unificate",
    
    textileTitle: "Soluzioni tessili",
    textileDesc: "Soluzioni complete dalla produzione al commercio al dettaglio",
    
    statsTitle: "Il Nostro Impatto Globale",
    stat1: "500+",
    stat1Label: "Clienti Corporate",
    stat2: "40+",
    stat2Label: "Paesi Serviti",
    stat3: "99.9%",
    stat3Label: "Garanzia Uptime",
    stat4: "$2B+",
    stat4Label: "Transazioni Elaborate",
    
    productsTitle: "I Nostri Prodotti",
    productsSubtitle: "Soluzioni Software Leader nel Settore",
    
    texacoreTitle: "TexaCore ERP",
    texacoreDesc: "ERP specializzato per fabbriche tessili e commercio tessuti",
    
    fincoreTitle: "FinCore Banking",
    fincoreDesc: "Piattaforma bancaria di nuova generazione",
    
    goverpTitle: "GovERP",
    goverpDesc: "Sistema di gestione finanziaria governativa e anticorruzione",
    
    remitproTitle: "RemitPro",
    remitproDesc: "Piattaforma di trasferimenti internazionali per banche",
    
    viewProduct: "Vedi Prodotto",
    
    sectorsTitle: "Settori Serviti",
    sectorsSubtitle: "Soluzioni Specializzate per Ogni Settore",
    
    bankingTitle: "Banking e Finanza",
    bankingDesc: "Sistemi bancari, pagamenti digitali e reportistica",
    
    exchangeTitle: "Cambio Valuta",
    exchangeDesc: "Piattaforme multi-valuta e soluzioni forex",
    
    remittanceTitle: "Rimesse e Trasferimenti",
    remittanceDesc: "Sistemi di trasferimento denaro sicuri e veloci",
    
    govTitle: "Settore Pubblico",
    govDesc: "Gestione finanziaria e sistemi di conformità",
    
    corporateTitle: "Grandi Aziende",
    corporateDesc: "Contabilità aziendale e strumenti di audit",
    
    textileSectorTitle: "Industria tessile globale",
    textileSectorDesc: "Soluzioni per grandi fabbriche in UK, Irlanda ed Europa",
    
    certTitle: "Certificazioni",
    cert1: "PCI-DSS Level 1",
    cert2: "ISO 27001",
    cert3: "SOC 2 Type II",
    cert4: "Conforme GDPR",
    cert5: "Certificato SWIFT",
    
    ctaTitle: "Pronto a Trasformare la Tua Azienda?",
    ctaDesc: "Partnership con un leader tecnologico europeo affidabile",
    ctaButton: "Inizia Oggi",
    
    irishEuropean: "Azienda Tecnologica Irlandese-Europea",
    trusted: "Fiducia delle Aziende Fortune 500"
  }
};

export default function NRHomePage() {
  const { language, dir } = useLanguage();
  const { resolvedTheme } = useTheme();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: Code2, title: t.softwareTitle, desc: t.softwareDesc, color: "from-blue-500 to-indigo-600" },
    { icon: Banknote, title: t.fintechTitle, desc: t.fintechDesc, color: "from-emerald-500 to-teal-600" },
    { icon: Building2, title: t.enterpriseTitle, desc: t.enterpriseDesc, color: "from-violet-500 to-purple-600" },
    { icon: Shield, title: t.cyberTitle, desc: t.cyberDesc, color: "from-red-500 to-rose-600" },
    { icon: Cpu, title: t.aiTitle, desc: t.aiDesc, color: "from-amber-500 to-orange-600" },
    { icon: Server, title: t.infraTitle, desc: t.infraDesc, color: "from-slate-500 to-slate-700" },
    { icon: Wifi, title: t.telecomTitle, desc: t.telecomDesc, color: "from-cyan-500 to-sky-600" },
    { icon: Scissors, title: t.textileTitle, desc: t.textileDesc, color: "from-pink-500 to-fuchsia-600" },
  ];

  const sectors = [
    { icon: Landmark, title: t.bankingTitle, desc: t.bankingDesc },
    { icon: CreditCard, title: t.exchangeTitle, desc: t.exchangeDesc },
    { icon: Wallet, title: t.remittanceTitle, desc: t.remittanceDesc },
    { icon: Building, title: t.govTitle, desc: t.govDesc },
    { icon: Receipt, title: t.corporateTitle, desc: t.corporateDesc },
    { icon: Factory, title: t.textileSectorTitle, desc: t.textileSectorDesc },
  ];

  const stats = [
    { value: t.stat1, label: t.stat1Label },
    { value: t.stat2, label: t.stat2Label },
    { value: t.stat3, label: t.stat3Label },
    { value: t.stat4, label: t.stat4Label },
  ];

  // SEO Meta Tags by language
  const seoMeta = {
    en: {
      title: "Next Revolution | Irish-European Enterprise Software Company",
      description: "Leading Irish-European technology company specializing in enterprise software, fintech solutions, AI-powered systems, and digital infrastructure for global markets. TexaCore ERP, FinCore Banking, GovERP, RemitPro.",
      keywords: "enterprise software, fintech, banking solutions, ERP systems, AI, Ireland, Europe, TexaCore, FinCore, GovERP, RemitPro"
    },
    ar: {
      title: "نيكست ريفوليوشن | شركة برمجيات المؤسسات الأيرلندية الأوروبية",
      description: "شركة تقنية أيرلندية أوروبية رائدة متخصصة في برمجيات المؤسسات، الحلول المالية، أنظمة الذكاء الاصطناعي، والبنية التحتية الرقمية للأسواق العالمية.",
      keywords: "برمجيات المؤسسات, التقنية المالية, حلول البنوك, أنظمة ERP, الذكاء الاصطناعي, أيرلندا, أوروبا"
    },
    ru: {
      title: "Next Revolution | Ирландско-Европейская IT-компания",
      description: "Ведущая ирландско-европейская технологическая компания, специализирующаяся на корпоративном ПО, финтех-решениях и AI-системах.",
      keywords: "корпоративное ПО, финтех, банковские решения, ERP системы, искусственный интеллект"
    },
    uk: {
      title: "Next Revolution | Ірландсько-Європейська IT-компанія",
      description: "Провідна ірландсько-європейська технологічна компанія, що спеціалізується на корпоративному ПЗ та фінтех-рішеннях.",
      keywords: "корпоративне ПЗ, фінтех, банківські рішення, ERP системи"
    },
    tr: {
      title: "Next Revolution | İrlanda-Avrupa Kurumsal Yazılım Şirketi",
      description: "Kurumsal yazılım, fintech çözümleri ve AI destekli sistemler konusunda uzmanlaşmış önde gelen İrlanda-Avrupa teknoloji şirketi.",
      keywords: "kurumsal yazılım, fintech, bankacılık çözümleri, ERP sistemleri"
    },
    pl: {
      title: "Next Revolution | Irlandzko-Europejska Firma IT",
      description: "Wiodąca irlandzko-europejska firma technologiczna specjalizująca się w oprogramowaniu korporacyjnym i rozwiązaniach fintech.",
      keywords: "oprogramowanie korporacyjne, fintech, rozwiązania bankowe, systemy ERP"
    },
    ro: {
      title: "Next Revolution | Companie IT Irlandezo-Europeană",
      description: "Companie tehnologică irlandezo-europeană de top, specializată în software enterprise și soluții fintech.",
      keywords: "software enterprise, fintech, soluții bancare, sisteme ERP"
    },
    it: {
      title: "Next Revolution | Azienda IT Irlandese-Europea",
      description: "Azienda tecnologica irlandese-europea leader specializzata in software enterprise e soluzioni fintech.",
      keywords: "software enterprise, fintech, soluzioni bancarie, sistemi ERP"
    }
  };

  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={dir}>
      <NRHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDI1MzgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHYyaC0ydjRoMnYyaDR2LTJ6bTAtOGgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              <span className="flex items-center gap-1.5">
                🇮🇪 {t.irishEuropean}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              {t.heroSubtitle}
            </p>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
              {t.heroTagline}
            </p>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.heroDescription}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/next-revolution/services"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                {t.exploreServices}
                <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/next-revolution/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-lg font-semibold rounded-xl transition-all"
              >
                {t.contactUs}
              </Link>
            </div>
            
            {/* Trust Badge */}
            <p className="mt-12 text-sm text-slate-500">
              {t.trusted}
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Services Section - Bento Grid */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-slate-400">
              {t.servicesSubtitle}
            </p>
          </div>
          
          {/* Services Grid - 8 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-900/50"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.statsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sectors Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.sectorsTitle}
            </h2>
            <p className="text-xl text-slate-400">
              {t.sectorsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all ${
                  index === 5 ? "md:col-start-2 lg:col-start-auto" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <sector.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {sector.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.productsTitle}
            </h2>
            <p className="text-xl text-slate-400">
              {t.productsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto stagger-children">
            {/* TexaCore */}
            <div className="group relative p-6 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-up opacity-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-5">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.texacoreTitle}
              </h3>
              <p className="text-slate-300 text-sm mb-5">
                {t.texacoreDesc}
              </p>
              <Link
                to="/next-revolution/products"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                {t.viewProduct}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
            
            {/* FinCore */}
            <div className="group relative p-6 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-2xl hover:border-amber-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 animate-fade-up opacity-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.fincoreTitle}
              </h3>
              <p className="text-slate-300 text-sm mb-5">
                {t.fincoreDesc}
              </p>
              <Link
                to="/next-revolution/products"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm"
              >
                {t.viewProduct}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
            
            {/* GovERP */}
            <div className="group relative p-6 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 animate-fade-up opacity-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.goverpTitle}
              </h3>
              <p className="text-slate-300 text-sm mb-5">
                {t.goverpDesc}
              </p>
              <Link
                to="/next-revolution/products"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm"
              >
                {t.viewProduct}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
            
            {/* RemitPro */}
            <div className="group relative p-6 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-2xl hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 animate-fade-up opacity-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center mb-5">
                <Send className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.remitproTitle}
              </h3>
              <p className="text-slate-300 text-sm mb-5">
                {t.remitproDesc}
              </p>
              <Link
                to="/next-revolution/products"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm"
              >
                {t.viewProduct}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {t.certTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[t.cert1, t.cert2, t.cert3, t.cert4, t.cert5].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <Link
            to="/next-revolution/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            {t.ctaButton}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      <NRFooter />
      <ScrollToTop />
    </div>
  );
}
