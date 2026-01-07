import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { 
  ArrowRight, ArrowLeft, Code2, Banknote, Building2, Shield, Cpu, Server, 
  Wifi, CheckCircle2, Zap, Clock, Users, Award, Globe, Lock, Database,
  BarChart3, Cloud, Smartphone, FileCode, Settings, Headphones
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Our Services",
    pageSubtitle: "Comprehensive technology solutions for modern enterprises",
    
    // Software Development
    softwareTitle: "Custom Software Development",
    softwareDesc: "Enterprise-grade applications tailored to your unique business requirements",
    softwareFeatures: [
      "Custom Web & Mobile Applications",
      "API Development & Integration",
      "Legacy System Modernization",
      "Cloud-Native Development",
      "DevOps & CI/CD Implementation",
      "Quality Assurance & Testing"
    ],
    
    // FinTech
    fintechTitle: "FinTech & Banking Solutions",
    fintechDesc: "Complete financial technology infrastructure for banks and financial institutions",
    fintechFeatures: [
      "Core Banking Systems",
      "Currency Exchange Platforms",
      "Remittance & Money Transfer",
      "Payment Gateway Integration",
      "Digital Wallet Solutions",
      "Regulatory Compliance (PCI-DSS)"
    ],
    
    // Enterprise
    enterpriseTitle: "Enterprise Solutions",
    enterpriseDesc: "Scalable business solutions for corporations and government entities",
    enterpriseFeatures: [
      "Corporate Accounting Systems",
      "Government ERP Solutions",
      "Financial Reporting & Analytics",
      "Procurement Management",
      "Asset Management Systems",
      "Audit & Compliance Tools"
    ],
    
    // Cybersecurity
    cyberTitle: "Cybersecurity Services",
    cyberDesc: "Protect your digital assets with enterprise-grade security solutions",
    cyberFeatures: [
      "Security Audits & Assessment",
      "Penetration Testing",
      "SOC Implementation",
      "Incident Response",
      "Compliance Consulting",
      "Employee Security Training"
    ],
    
    // AI
    aiTitle: "AI & Data Science",
    aiDesc: "Harness the power of artificial intelligence for business transformation",
    aiFeatures: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI Integration Services",
      "Data Pipeline Development"
    ],
    
    // Infrastructure
    infraTitle: "Infrastructure Services",
    infraDesc: "Robust and scalable infrastructure for mission-critical operations",
    infraFeatures: [
      "Data Center Management",
      "Cloud Migration (AWS, Azure, GCP)",
      "Server Administration",
      "Network Architecture",
      "Disaster Recovery Planning",
      "24/7 Infrastructure Monitoring"
    ],
    
    // Why Choose Us
    whyTitle: "Why Choose Next Revolution?",
    why1Title: "European Quality",
    why1Desc: "Irish-European standards applied to every project",
    why2Title: "24/7 Support",
    why2Desc: "Round-the-clock enterprise support",
    why3Title: "Proven Track Record",
    why3Desc: "500+ successful enterprise implementations",
    why4Title: "Security First",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2 certified",
    
    // CTA
    ctaTitle: "Ready to Get Started?",
    ctaDesc: "Let's discuss your project requirements",
    ctaButton: "Contact Us",
    learnMore: "Learn More"
  },
  ar: {
    pageTitle: "خدماتنا",
    pageSubtitle: "حلول تقنية شاملة للمؤسسات الحديثة",
    
    softwareTitle: "تطوير البرمجيات المخصصة",
    softwareDesc: "تطبيقات مؤسسية مصممة خصيصاً لمتطلبات عملك الفريدة",
    softwareFeatures: [
      "تطبيقات ويب وموبايل مخصصة",
      "تطوير وتكامل API",
      "تحديث الأنظمة القديمة",
      "تطوير سحابي أصلي",
      "تنفيذ DevOps و CI/CD",
      "ضمان الجودة والاختبار"
    ],
    
    fintechTitle: "حلول التقنية المالية والبنوك",
    fintechDesc: "بنية تحتية مالية تقنية متكاملة للبنوك والمؤسسات المالية",
    fintechFeatures: [
      "أنظمة البنوك الأساسية",
      "منصات صرف العملات",
      "الحوالات وتحويل الأموال",
      "تكامل بوابات الدفع",
      "حلول المحفظة الرقمية",
      "الامتثال التنظيمي (PCI-DSS)"
    ],
    
    enterpriseTitle: "حلول المؤسسات",
    enterpriseDesc: "حلول أعمال قابلة للتوسع للشركات والجهات الحكومية",
    enterpriseFeatures: [
      "أنظمة المحاسبة المؤسسية",
      "حلول ERP الحكومية",
      "التقارير المالية والتحليلات",
      "إدارة المشتريات",
      "أنظمة إدارة الأصول",
      "أدوات التدقيق والامتثال"
    ],
    
    cyberTitle: "خدمات الأمن السيبراني",
    cyberDesc: "حماية أصولك الرقمية بحلول أمنية على مستوى المؤسسات",
    cyberFeatures: [
      "تدقيق وتقييم أمني",
      "اختبار الاختراق",
      "تنفيذ SOC",
      "الاستجابة للحوادث",
      "استشارات الامتثال",
      "تدريب الموظفين على الأمان"
    ],
    
    aiTitle: "الذكاء الاصطناعي وعلوم البيانات",
    aiDesc: "استثمر قوة الذكاء الاصطناعي لتحويل الأعمال",
    aiFeatures: [
      "نماذج التعلم الآلي",
      "التحليلات التنبؤية",
      "معالجة اللغة الطبيعية",
      "حلول الرؤية الحاسوبية",
      "خدمات تكامل AI",
      "تطوير خطوط البيانات"
    ],
    
    infraTitle: "خدمات البنية التحتية",
    infraDesc: "بنية تحتية قوية وقابلة للتوسع للعمليات الحيوية",
    infraFeatures: [
      "إدارة مراكز البيانات",
      "الانتقال السحابي (AWS, Azure, GCP)",
      "إدارة السيرفرات",
      "هندسة الشبكات",
      "تخطيط استعادة الكوارث",
      "مراقبة البنية التحتية 24/7"
    ],
    
    whyTitle: "لماذا تختار نيكست ريفوليوشن؟",
    why1Title: "جودة أوروبية",
    why1Desc: "معايير أيرلندية أوروبية مطبقة على كل مشروع",
    why2Title: "دعم 24/7",
    why2Desc: "دعم مؤسسي على مدار الساعة",
    why3Title: "سجل حافل",
    why3Desc: "+500 تنفيذ مؤسسي ناجح",
    why4Title: "الأمان أولاً",
    why4Desc: "معتمد PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "مستعد للبدء؟",
    ctaDesc: "لنناقش متطلبات مشروعك",
    ctaButton: "تواصل معنا",
    learnMore: "اعرف المزيد"
  },
  ru: {
    pageTitle: "Наши услуги",
    pageSubtitle: "Комплексные технологические решения для современных предприятий",
    
    softwareTitle: "Разработка ПО на заказ",
    softwareDesc: "Корпоративные приложения под ваши уникальные требования",
    softwareFeatures: [
      "Веб и мобильные приложения",
      "Разработка и интеграция API",
      "Модернизация legacy-систем",
      "Cloud-native разработка",
      "DevOps и CI/CD",
      "QA и тестирование"
    ],
    
    fintechTitle: "FinTech и банкинг",
    fintechDesc: "Финансовая технологическая инфраструктура для банков",
    fintechFeatures: [
      "Банковские системы",
      "Платформы обмена валют",
      "Переводы и ремиттансы",
      "Платёжные шлюзы",
      "Цифровые кошельки",
      "Соответствие PCI-DSS"
    ],
    
    enterpriseTitle: "Корпоративные решения",
    enterpriseDesc: "Масштабируемые решения для корпораций и госсектора",
    enterpriseFeatures: [
      "Корпоративная бухгалтерия",
      "ERP для госсектора",
      "Финансовая отчётность",
      "Управление закупками",
      "Управление активами",
      "Аудит и compliance"
    ],
    
    cyberTitle: "Кибербезопасность",
    cyberDesc: "Защита цифровых активов корпоративного уровня",
    cyberFeatures: [
      "Аудит безопасности",
      "Пентесты",
      "Внедрение SOC",
      "Реагирование на инциденты",
      "Консалтинг compliance",
      "Обучение сотрудников"
    ],
    
    aiTitle: "ИИ и Data Science",
    aiDesc: "Сила искусственного интеллекта для бизнеса",
    aiFeatures: [
      "ML-модели",
      "Предиктивная аналитика",
      "NLP-решения",
      "Компьютерное зрение",
      "Интеграция ИИ",
      "Data-пайплайны"
    ],
    
    infraTitle: "Инфраструктурные услуги",
    infraDesc: "Надёжная инфраструктура для критических операций",
    infraFeatures: [
      "Управление дата-центрами",
      "Миграция в облако",
      "Администрирование серверов",
      "Сетевая архитектура",
      "Disaster recovery",
      "Мониторинг 24/7"
    ],
    
    whyTitle: "Почему Next Revolution?",
    why1Title: "Европейское качество",
    why1Desc: "Ирландско-европейские стандарты",
    why2Title: "Поддержка 24/7",
    why2Desc: "Круглосуточная корпоративная поддержка",
    why3Title: "Проверенный опыт",
    why3Desc: "500+ успешных внедрений",
    why4Title: "Безопасность прежде всего",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Готовы начать?",
    ctaDesc: "Обсудим требования вашего проекта",
    ctaButton: "Связаться",
    learnMore: "Подробнее"
  },
  uk: {
    pageTitle: "Наші послуги",
    pageSubtitle: "Комплексні технологічні рішення для сучасних підприємств",
    
    softwareTitle: "Розробка ПЗ на замовлення",
    softwareDesc: "Корпоративні додатки під ваші унікальні вимоги",
    softwareFeatures: [
      "Веб та мобільні додатки",
      "Розробка та інтеграція API",
      "Модернізація legacy-систем",
      "Cloud-native розробка",
      "DevOps та CI/CD",
      "QA та тестування"
    ],
    
    fintechTitle: "FinTech та банкінг",
    fintechDesc: "Фінансова технологічна інфраструктура для банків",
    fintechFeatures: [
      "Банківські системи",
      "Платформи обміну валют",
      "Перекази та ремітанси",
      "Платіжні шлюзи",
      "Цифрові гаманці",
      "Відповідність PCI-DSS"
    ],
    
    enterpriseTitle: "Корпоративні рішення",
    enterpriseDesc: "Масштабовані рішення для корпорацій та держсектору",
    enterpriseFeatures: [
      "Корпоративна бухгалтерія",
      "ERP для держсектору",
      "Фінансова звітність",
      "Управління закупівлями",
      "Управління активами",
      "Аудит та compliance"
    ],
    
    cyberTitle: "Кібербезпека",
    cyberDesc: "Захист цифрових активів корпоративного рівня",
    cyberFeatures: [
      "Аудит безпеки",
      "Пентести",
      "Впровадження SOC",
      "Реагування на інциденти",
      "Консалтинг compliance",
      "Навчання співробітників"
    ],
    
    aiTitle: "ШІ та Data Science",
    aiDesc: "Сила штучного інтелекту для бізнесу",
    aiFeatures: [
      "ML-моделі",
      "Предиктивна аналітика",
      "NLP-рішення",
      "Комп'ютерний зір",
      "Інтеграція ШІ",
      "Data-пайплайни"
    ],
    
    infraTitle: "Інфраструктурні послуги",
    infraDesc: "Надійна інфраструктура для критичних операцій",
    infraFeatures: [
      "Управління дата-центрами",
      "Міграція в хмару",
      "Адміністрування серверів",
      "Мережева архітектура",
      "Disaster recovery",
      "Моніторинг 24/7"
    ],
    
    whyTitle: "Чому Next Revolution?",
    why1Title: "Європейська якість",
    why1Desc: "Ірландсько-європейські стандарти",
    why2Title: "Підтримка 24/7",
    why2Desc: "Цілодобова корпоративна підтримка",
    why3Title: "Перевірений досвід",
    why3Desc: "500+ успішних впроваджень",
    why4Title: "Безпека перш за все",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Готові почати?",
    ctaDesc: "Обговоримо вимоги вашого проекту",
    ctaButton: "Зв'язатися",
    learnMore: "Детальніше"
  },
  tr: {
    pageTitle: "Hizmetlerimiz",
    pageSubtitle: "Modern işletmeler için kapsamlı teknoloji çözümleri",
    
    softwareTitle: "Özel Yazılım Geliştirme",
    softwareDesc: "İş gereksinimlerinize özel kurumsal uygulamalar",
    softwareFeatures: [
      "Web ve Mobil Uygulamalar",
      "API Geliştirme ve Entegrasyon",
      "Legacy Sistem Modernizasyonu",
      "Cloud-Native Geliştirme",
      "DevOps ve CI/CD",
      "QA ve Test"
    ],
    
    fintechTitle: "FinTech ve Bankacılık",
    fintechDesc: "Bankalar için eksiksiz finansal teknoloji altyapısı",
    fintechFeatures: [
      "Bankacılık Sistemleri",
      "Döviz Platformları",
      "Havale ve Transfer",
      "Ödeme Gateway",
      "Dijital Cüzdan",
      "PCI-DSS Uyumluluk"
    ],
    
    enterpriseTitle: "Kurumsal Çözümler",
    enterpriseDesc: "Şirketler ve kamu için ölçeklenebilir çözümler",
    enterpriseFeatures: [
      "Kurumsal Muhasebe",
      "Kamu ERP",
      "Finansal Raporlama",
      "Tedarik Yönetimi",
      "Varlık Yönetimi",
      "Denetim Araçları"
    ],
    
    cyberTitle: "Siber Güvenlik",
    cyberDesc: "Kurumsal düzeyde güvenlik çözümleri",
    cyberFeatures: [
      "Güvenlik Denetimi",
      "Penetrasyon Testi",
      "SOC Kurulumu",
      "Olay Müdahale",
      "Uyumluluk Danışmanlığı",
      "Güvenlik Eğitimi"
    ],
    
    aiTitle: "AI ve Veri Bilimi",
    aiDesc: "İş dönüşümü için yapay zeka gücü",
    aiFeatures: [
      "ML Modelleri",
      "Tahminsel Analitik",
      "NLP Çözümleri",
      "Bilgisayarlı Görü",
      "AI Entegrasyonu",
      "Veri Pipeline"
    ],
    
    infraTitle: "Altyapı Hizmetleri",
    infraDesc: "Kritik operasyonlar için güçlü altyapı",
    infraFeatures: [
      "Veri Merkezi Yönetimi",
      "Bulut Migrasyonu",
      "Sunucu Yönetimi",
      "Ağ Mimarisi",
      "Felaket Kurtarma",
      "7/24 İzleme"
    ],
    
    whyTitle: "Neden Next Revolution?",
    why1Title: "Avrupa Kalitesi",
    why1Desc: "İrlanda-Avrupa standartları",
    why2Title: "7/24 Destek",
    why2Desc: "Kesintisiz kurumsal destek",
    why3Title: "Kanıtlanmış Deneyim",
    why3Desc: "500+ başarılı uygulama",
    why4Title: "Güvenlik Önceliği",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Başlamaya Hazır mısınız?",
    ctaDesc: "Proje gereksinimlerinizi görüşelim",
    ctaButton: "İletişime Geçin",
    learnMore: "Daha Fazla"
  },
  pl: {
    pageTitle: "Nasze usługi",
    pageSubtitle: "Kompleksowe rozwiązania technologiczne dla nowoczesnych przedsiębiorstw",
    
    softwareTitle: "Rozwój oprogramowania na zamówienie",
    softwareDesc: "Aplikacje korporacyjne dostosowane do Twoich wymagań",
    softwareFeatures: [
      "Aplikacje webowe i mobilne",
      "Rozwój i integracja API",
      "Modernizacja legacy",
      "Cloud-native development",
      "DevOps i CI/CD",
      "QA i testy"
    ],
    
    fintechTitle: "FinTech i bankowość",
    fintechDesc: "Kompletna infrastruktura finansowa dla banków",
    fintechFeatures: [
      "Systemy bankowe",
      "Platformy wymiany walut",
      "Przekazy i transfery",
      "Bramki płatności",
      "Portfele cyfrowe",
      "Zgodność PCI-DSS"
    ],
    
    enterpriseTitle: "Rozwiązania korporacyjne",
    enterpriseDesc: "Skalowalne rozwiązania dla firm i sektora publicznego",
    enterpriseFeatures: [
      "Księgowość korporacyjna",
      "ERP dla sektora publicznego",
      "Raportowanie finansowe",
      "Zarządzanie zakupami",
      "Zarządzanie aktywami",
      "Audyt i compliance"
    ],
    
    cyberTitle: "Cyberbezpieczeństwo",
    cyberDesc: "Ochrona aktywów cyfrowych klasy enterprise",
    cyberFeatures: [
      "Audyty bezpieczeństwa",
      "Testy penetracyjne",
      "Wdrożenie SOC",
      "Reagowanie na incydenty",
      "Doradztwo compliance",
      "Szkolenia bezpieczeństwa"
    ],
    
    aiTitle: "AI i Data Science",
    aiDesc: "Siła sztucznej inteligencji dla biznesu",
    aiFeatures: [
      "Modele ML",
      "Analityka predykcyjna",
      "Rozwiązania NLP",
      "Wizja komputerowa",
      "Integracja AI",
      "Pipelines danych"
    ],
    
    infraTitle: "Usługi infrastrukturalne",
    infraDesc: "Niezawodna infrastruktura dla krytycznych operacji",
    infraFeatures: [
      "Zarządzanie data center",
      "Migracja do chmury",
      "Administracja serwerów",
      "Architektura sieci",
      "Disaster recovery",
      "Monitoring 24/7"
    ],
    
    whyTitle: "Dlaczego Next Revolution?",
    why1Title: "Europejska jakość",
    why1Desc: "Irlandzko-europejskie standardy",
    why2Title: "Wsparcie 24/7",
    why2Desc: "Całodobowe wsparcie korporacyjne",
    why3Title: "Sprawdzone doświadczenie",
    why3Desc: "500+ udanych wdrożeń",
    why4Title: "Bezpieczeństwo na pierwszym miejscu",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Gotowy, by zacząć?",
    ctaDesc: "Omówmy wymagania Twojego projektu",
    ctaButton: "Skontaktuj się",
    learnMore: "Więcej informacji"
  },
  ro: {
    pageTitle: "Serviciile noastre",
    pageSubtitle: "Soluții tehnologice complete pentru întreprinderile moderne",
    
    softwareTitle: "Dezvoltare software personalizat",
    softwareDesc: "Aplicații enterprise adaptate cerințelor dvs.",
    softwareFeatures: [
      "Aplicații web și mobile",
      "Dezvoltare și integrare API",
      "Modernizare legacy",
      "Dezvoltare cloud-native",
      "DevOps și CI/CD",
      "QA și testare"
    ],
    
    fintechTitle: "FinTech și banking",
    fintechDesc: "Infrastructură financiară completă pentru bănci",
    fintechFeatures: [
      "Sisteme bancare",
      "Platforme de schimb valutar",
      "Remitențe și transferuri",
      "Gateway-uri de plată",
      "Portofele digitale",
      "Conformitate PCI-DSS"
    ],
    
    enterpriseTitle: "Soluții enterprise",
    enterpriseDesc: "Soluții scalabile pentru corporații și sector public",
    enterpriseFeatures: [
      "Contabilitate corporativă",
      "ERP pentru sector public",
      "Raportare financiară",
      "Management achiziții",
      "Management active",
      "Audit și compliance"
    ],
    
    cyberTitle: "Securitate cibernetică",
    cyberDesc: "Protecție enterprise pentru activele digitale",
    cyberFeatures: [
      "Audituri de securitate",
      "Teste de penetrare",
      "Implementare SOC",
      "Răspuns la incidente",
      "Consultanță compliance",
      "Training securitate"
    ],
    
    aiTitle: "AI și Data Science",
    aiDesc: "Puterea inteligenței artificiale pentru afaceri",
    aiFeatures: [
      "Modele ML",
      "Analiză predictivă",
      "Soluții NLP",
      "Computer vision",
      "Integrare AI",
      "Data pipelines"
    ],
    
    infraTitle: "Servicii de infrastructură",
    infraDesc: "Infrastructură robustă pentru operațiuni critice",
    infraFeatures: [
      "Management data center",
      "Migrare cloud",
      "Administrare servere",
      "Arhitectură rețea",
      "Disaster recovery",
      "Monitorizare 24/7"
    ],
    
    whyTitle: "De ce Next Revolution?",
    why1Title: "Calitate europeană",
    why1Desc: "Standarde irlandezo-europene",
    why2Title: "Suport 24/7",
    why2Desc: "Suport enterprise non-stop",
    why3Title: "Experiență dovedită",
    why3Desc: "500+ implementări de succes",
    why4Title: "Securitate pe primul loc",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Gata să începeți?",
    ctaDesc: "Să discutăm cerințele proiectului",
    ctaButton: "Contactați-ne",
    learnMore: "Află mai multe"
  },
  it: {
    pageTitle: "I nostri servizi",
    pageSubtitle: "Soluzioni tecnologiche complete per le aziende moderne",
    
    softwareTitle: "Sviluppo software personalizzato",
    softwareDesc: "Applicazioni enterprise su misura per le tue esigenze",
    softwareFeatures: [
      "Applicazioni web e mobile",
      "Sviluppo e integrazione API",
      "Modernizzazione legacy",
      "Sviluppo cloud-native",
      "DevOps e CI/CD",
      "QA e testing"
    ],
    
    fintechTitle: "FinTech e banking",
    fintechDesc: "Infrastruttura finanziaria completa per banche",
    fintechFeatures: [
      "Sistemi bancari",
      "Piattaforme di cambio",
      "Rimesse e trasferimenti",
      "Gateway di pagamento",
      "Portafogli digitali",
      "Conformità PCI-DSS"
    ],
    
    enterpriseTitle: "Soluzioni enterprise",
    enterpriseDesc: "Soluzioni scalabili per aziende e settore pubblico",
    enterpriseFeatures: [
      "Contabilità aziendale",
      "ERP per settore pubblico",
      "Reportistica finanziaria",
      "Gestione acquisti",
      "Gestione asset",
      "Audit e compliance"
    ],
    
    cyberTitle: "Sicurezza informatica",
    cyberDesc: "Protezione enterprise per asset digitali",
    cyberFeatures: [
      "Audit di sicurezza",
      "Penetration testing",
      "Implementazione SOC",
      "Risposta agli incidenti",
      "Consulenza compliance",
      "Formazione sicurezza"
    ],
    
    aiTitle: "AI e Data Science",
    aiDesc: "La potenza dell'intelligenza artificiale per il business",
    aiFeatures: [
      "Modelli ML",
      "Analisi predittiva",
      "Soluzioni NLP",
      "Computer vision",
      "Integrazione AI",
      "Data pipeline"
    ],
    
    infraTitle: "Servizi di infrastruttura",
    infraDesc: "Infrastruttura robusta per operazioni critiche",
    infraFeatures: [
      "Gestione data center",
      "Migrazione cloud",
      "Amministrazione server",
      "Architettura di rete",
      "Disaster recovery",
      "Monitoraggio 24/7"
    ],
    
    whyTitle: "Perché Next Revolution?",
    why1Title: "Qualità europea",
    why1Desc: "Standard irlandesi-europei",
    why2Title: "Supporto 24/7",
    why2Desc: "Supporto enterprise non-stop",
    why3Title: "Esperienza comprovata",
    why3Desc: "500+ implementazioni di successo",
    why4Title: "Sicurezza prima di tutto",
    why4Desc: "PCI-DSS, ISO 27001, SOC 2",
    
    ctaTitle: "Pronto per iniziare?",
    ctaDesc: "Discutiamo le esigenze del progetto",
    ctaButton: "Contattaci",
    learnMore: "Scopri di più"
  }
};

export default function NRServicesPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code2,
      title: t.softwareTitle,
      desc: t.softwareDesc,
      features: t.softwareFeatures,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Banknote,
      title: t.fintechTitle,
      desc: t.fintechDesc,
      features: t.fintechFeatures,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500/30"
    },
    {
      icon: Building2,
      title: t.enterpriseTitle,
      desc: t.enterpriseDesc,
      features: t.enterpriseFeatures,
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-500/30"
    },
    {
      icon: Shield,
      title: t.cyberTitle,
      desc: t.cyberDesc,
      features: t.cyberFeatures,
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-600/20 to-rose-600/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: Cpu,
      title: t.aiTitle,
      desc: t.aiDesc,
      features: t.aiFeatures,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-600/20 to-orange-600/20",
      borderColor: "border-amber-500/30"
    },
    {
      icon: Server,
      title: t.infraTitle,
      desc: t.infraDesc,
      features: t.infraFeatures,
      color: "from-slate-500 to-slate-700",
      bgColor: "from-slate-600/20 to-slate-700/20",
      borderColor: "border-slate-500/30"
    }
  ];

  const whyUs = [
    { icon: Globe, title: t.why1Title, desc: t.why1Desc },
    { icon: Headphones, title: t.why2Title, desc: t.why2Desc },
    { icon: Award, title: t.why3Title, desc: t.why3Desc },
    { icon: Lock, title: t.why4Title, desc: t.why4Desc },
  ];

  // SEO Meta
  const seoMeta = {
    en: {
      title: "Services | Enterprise Software Development | Next Revolution",
      description: "Custom software development, fintech & banking solutions, cybersecurity, AI & data science, infrastructure, and telecommunications services from Next Revolution."
    },
    ar: {
      title: "الخدمات | تطوير برمجيات المؤسسات | نيكست ريفوليوشن",
      description: "تطوير البرمجيات المخصصة، حلول التقنية المالية والبنوك، الأمن السيبراني، الذكاء الاصطناعي، البنية التحتية والاتصالات."
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.pageTitle}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.pageSubtitle}</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 bg-gradient-to-br ${service.bgColor} border ${service.borderColor} rounded-2xl hover:border-opacity-70 transition-all`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-10">{t.ctaDesc}</p>
          <Link
            to="/next-revolution/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all"
          >
            {t.ctaButton}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      <NRFooter />
    </div>
  );
}
