import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Layers, Database, Sparkles, CheckCircle2,
  Building2, Factory, ShoppingCart, Warehouse, Users, BarChart3,
  Shield, Clock, Globe, Zap, Cloud, Lock, Landmark, Send, ShieldCheck
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Our Products",
    pageSubtitle: "Industry-leading enterprise software solutions",
    
    // TexaCore
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Specialized ERP for Textile Industry",
    texacoreDesc: "The leading ERP solution designed specifically for textile factories and fabric trading companies. TexaCore covers every aspect of the textile business - from roll management and RFID tracking to container management and e-commerce integration.",
    texacoreFeatures: [
      "Roll & Fabric Management",
      "RFID Inventory Tracking",
      "Container & Shipment Management",
      "Agent & Dealer Network",
      "E-commerce Integration",
      "POS for Retail",
      "Cutting & Production Planning",
      "Quality Control Systems"
    ],
    texacoreBenefits: [
      "Industry-specific workflows for textile",
      "RFID-powered inventory accuracy",
      "Complete supply chain visibility",
      "Textile-specific analytics & reporting"
    ],
    
    // FinCore Banking
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Next-Generation Core Banking Platform",
    fincoreDesc: "A comprehensive core banking system built for modern financial institutions. FinCore delivers real-time transaction processing, multi-currency support, and seamless integration with global payment networks.",
    fincoreFeatures: [
      "Real-time Transaction Processing",
      "Multi-Currency Management",
      "Digital Banking Channels",
      "Core Accounting Engine",
      "Loan & Credit Management",
      "Treasury Operations",
      "Regulatory Compliance",
      "Open Banking APIs"
    ],
    fincoreBenefits: [
      "99.99% uptime guarantee",
      "PCI-DSS Level 1 compliant",
      "Scalable to millions of accounts",
      "24/7 global support"
    ],
    
    // GovERP
    goverpTitle: "GovERP",
    goverpTagline: "Government Financial Management & Anti-Corruption System",
    goverpDesc: "Enterprise-grade ERP solution designed specifically for government agencies and public sector organizations. GovERP ensures transparency, accountability, and compliance with international standards.",
    goverpFeatures: [
      "Budget Planning & Control",
      "Procurement Management",
      "Anti-Corruption Monitoring",
      "Asset Tracking & Management",
      "HR & Payroll for Government",
      "Financial Reporting (IPSAS)",
      "Audit Trail & Compliance",
      "Citizen Services Portal"
    ],
    goverpBenefits: [
      "Complete financial transparency",
      "Fraud detection & prevention",
      "IPSAS compliant reporting",
      "Multi-level authorization"
    ],
    
    // RemitPro
    remitproTitle: "RemitPro",
    remitproTagline: "International Money Transfer Platform for Banks",
    remitproDesc: "Enterprise-grade remittance platform enabling banks and financial institutions to offer secure, fast, and compliant international money transfers across 180+ countries.",
    remitproFeatures: [
      "Global Payment Network (180+ countries)",
      "Real-time FX Rates",
      "Compliance & AML Screening",
      "Multi-channel Disbursement",
      "Agent Network Management",
      "White-label Solutions",
      "SWIFT & SEPA Integration",
      "Mobile Wallet Payouts"
    ],
    remitproBenefits: [
      "Same-day transfers to 50+ countries",
      "Best-in-class FX rates",
      "Full regulatory compliance",
      "99.9% transaction success rate"
    ],
    
    // Product Comparison
    comparisonTitle: "Product Comparison",
    feature: "Feature",
    deployment: "Deployment Options",
    cloud: "Cloud & On-Premise",
    support: "Support Level",
    enterprise: "24/7 Enterprise",
    updates: "Updates",
    continuous: "Continuous",
    customization: "Customization",
    full: "Full",
    integration: "API Integration",
    extensive: "Extensive",
    
    // CTA
    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc: "Schedule a demo and see how our products can help",
    requestDemo: "Request Demo",
    viewTexaCore: "View TexaCore",
    learnMore: "Learn More",
    contactSales: "Contact Sales"
  },
  ar: {
    pageTitle: "منتجاتنا",
    pageSubtitle: "حلول برمجية مؤسسية رائدة في الصناعة",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "نظام ERP متخصص لصناعة النسيج",
    texacoreDesc: "الحل الرائد في أنظمة ERP المصمم خصيصاً لمعامل النسيج وشركات تجارة الأقمشة. يغطي TexaCore كل جانب من أعمال النسيج - من إدارة البكرات وتتبع RFID إلى إدارة الحاويات وتكامل التجارة الإلكترونية.",
    texacoreFeatures: [
      "إدارة البكرات والأقمشة",
      "تتبع المخزون بـ RFID",
      "إدارة الحاويات والشحنات",
      "شبكة الوكلاء والموزعين",
      "تكامل التجارة الإلكترونية",
      "نقاط البيع للتجزئة",
      "تخطيط القص والإنتاج",
      "أنظمة مراقبة الجودة"
    ],
    texacoreBenefits: [
      "سير عمل خاص بصناعة النسيج",
      "دقة المخزون مدعومة بـ RFID",
      "رؤية كاملة لسلسلة التوريد",
      "تحليلات وتقارير خاصة بالنسيج"
    ],
    // FinCore Banking
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "منصة بنكية أساسية من الجيل التالي",
    fincoreDesc: "نظام بنكي شامل مصمم للمؤسسات المالية الحديثة. يوفر FinCore معالجة فورية للمعاملات، ودعم متعدد العملات، وتكامل سلس مع شبكات الدفع العالمية.",
    fincoreFeatures: [
      "معالجة فورية للمعاملات",
      "إدارة العملات المتعددة",
      "قنوات الخدمات المصرفية الرقمية",
      "محرك المحاسبة الأساسي",
      "إدارة القروض والائتمان",
      "عمليات الخزينة",
      "الامتثال التنظيمي",
      "واجهات برمجة الخدمات المصرفية المفتوحة"
    ],
    fincoreBenefits: [
      "ضمان تشغيل 99.99%",
      "متوافق مع PCI-DSS المستوى 1",
      "قابل للتوسع لملايين الحسابات",
      "دعم عالمي على مدار الساعة"
    ],
    
    // GovERP
    goverpTitle: "GovERP",
    goverpTagline: "نظام الإدارة المالية الحكومية ومكافحة الفساد",
    goverpDesc: "حل ERP متقدم مصمم خصيصاً للجهات الحكومية ومؤسسات القطاع العام. يضمن GovERP الشفافية والمساءلة والامتثال للمعايير الدولية.",
    goverpFeatures: [
      "تخطيط الميزانية والرقابة",
      "إدارة المشتريات",
      "رصد مكافحة الفساد",
      "تتبع وإدارة الأصول",
      "الموارد البشرية والرواتب الحكومية",
      "التقارير المالية (IPSAS)",
      "مسار التدقيق والامتثال",
      "بوابة خدمات المواطنين"
    ],
    goverpBenefits: [
      "شفافية مالية كاملة",
      "كشف الاحتيال والوقاية منه",
      "تقارير متوافقة مع IPSAS",
      "تفويض متعدد المستويات"
    ],
    
    // RemitPro
    remitproTitle: "RemitPro",
    remitproTagline: "منصة تحويل الأموال الدولية للبنوك",
    remitproDesc: "منصة حوالات متقدمة تمكّن البنوك والمؤسسات المالية من تقديم تحويلات أموال دولية آمنة وسريعة ومتوافقة عبر أكثر من 180 دولة.",
    remitproFeatures: [
      "شبكة مدفوعات عالمية (+180 دولة)",
      "أسعار صرف فورية",
      "الامتثال وفحص مكافحة غسل الأموال",
      "قنوات صرف متعددة",
      "إدارة شبكة الوكلاء",
      "حلول العلامة البيضاء",
      "تكامل SWIFT و SEPA",
      "دفع المحافظ الإلكترونية"
    ],
    remitproBenefits: [
      "تحويلات نفس اليوم لـ +50 دولة",
      "أفضل أسعار الصرف",
      "امتثال تنظيمي كامل",
      "معدل نجاح المعاملات 99.9%"
    ],
    
    comparisonTitle: "مقارنة المنتجات",
    feature: "الميزة",
    deployment: "خيارات النشر",
    cloud: "سحابي ومحلي",
    support: "مستوى الدعم",
    enterprise: "مؤسسي 24/7",
    updates: "التحديثات",
    continuous: "مستمرة",
    customization: "التخصيص",
    full: "كامل",
    integration: "تكامل API",
    extensive: "واسع",
    
    ctaTitle: "مستعد لتحويل عملك؟",
    ctaDesc: "حدد موعداً للعرض التوضيحي وشاهد كيف يمكن لمنتجاتنا المساعدة",
    requestDemo: "طلب عرض",
    viewTexaCore: "عرض TexaCore",
    learnMore: "اعرف المزيد",
    contactSales: "تواصل مع المبيعات"
  },
  ru: {
    pageTitle: "Наши продукты",
    pageSubtitle: "Ведущие корпоративные программные решения",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Полное планирование ресурсов предприятия",
    texacoreDesc: "Комплексная модульная ERP-платформа для современных предприятий. TexaCore обеспечивает полное управление бизнесом с корпоративной безопасностью и масштабируемостью.",
    texacoreFeatures: [
      "Финансы и бухгалтерия",
      "HR и зарплата",
      "Управление цепочками поставок",
      "Склад и инвентарь",
      "Производственные операции",
      "BI и аналитика",
      "CRM и продажи",
      "Мультивалютность и многоязычность"
    ],
    texacoreBenefits: [
      "Снижение операционных расходов на 40%",
      "Видимость бизнеса в реальном времени",
      "Бесшовная интеграция отделов",
      "Облачное или локальное развёртывание"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Банковская платформа нового поколения",
    fincoreDesc: "Комплексная банковская система для современных финансовых учреждений с обработкой транзакций в реальном времени.",
    fincoreFeatures: ["Обработка транзакций", "Мультивалютность", "Цифровой банкинг", "Кредитование", "Казначейство", "Compliance", "Open Banking"],
    fincoreBenefits: ["Uptime 99.99%", "PCI-DSS Level 1", "Масштабируемость", "Поддержка 24/7"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Управление госфинансами и антикоррупция",
    goverpDesc: "ERP-решение для госорганов с прозрачностью, подотчётностью и соответствием международным стандартам.",
    goverpFeatures: ["Бюджетирование", "Закупки", "Антикоррупция", "Активы", "HR госсектора", "IPSAS отчётность", "Аудит"],
    goverpBenefits: ["Финансовая прозрачность", "Выявление мошенничества", "IPSAS", "Многоуровневая авторизация"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Международные переводы для банков",
    remitproDesc: "Платформа для банков для безопасных и быстрых международных переводов в 180+ стран.",
    remitproFeatures: ["180+ стран", "Курсы валют", "AML-проверка", "Сеть агентов", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Переводы в тот же день", "Лучшие курсы", "Полный compliance", "Успешность 99.9%"],
    
    comparisonTitle: "Сравнение продуктов",
    feature: "Функция",
    deployment: "Развёртывание",
    cloud: "Облако и локально",
    support: "Поддержка",
    enterprise: "24/7 Enterprise",
    updates: "Обновления",
    continuous: "Непрерывные",
    customization: "Кастомизация",
    full: "Полная",
    integration: "API интеграция",
    extensive: "Обширная",
    
    ctaTitle: "Готовы трансформировать бизнес?",
    ctaDesc: "Запланируйте демо и узнайте, как наши продукты помогут",
    requestDemo: "Запросить демо",
    viewTexaFab: "TexaFab",
    learnMore: "Подробнее",
    contactSales: "Связаться с отделом продаж"
  },
  uk: {
    pageTitle: "Наші продукти",
    pageSubtitle: "Провідні корпоративні програмні рішення",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Повне планування ресурсів підприємства",
    texacoreDesc: "Комплексна модульна ERP-платформа для сучасних підприємств.",
    texacoreFeatures: [
      "Фінанси та бухгалтерія",
      "HR та зарплата",
      "Управління ланцюгами постачання",
      "Склад та інвентар",
      "Виробничі операції",
      "BI та аналітика",
      "CRM та продажі",
      "Мультивалютність та багатомовність"
    ],
    texacoreBenefits: [
      "Зниження операційних витрат на 40%",
      "Видимість бізнесу в реальному часі",
      "Безшовна інтеграція відділів",
      "Хмарне або локальне розгортання"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Банківська платформа нового покоління",
    fincoreDesc: "Комплексна банківська система для сучасних фінансових установ.",
    fincoreFeatures: ["Обробка транзакцій", "Мультивалютність", "Цифровий банкінг", "Кредитування", "Казначейство", "Compliance", "Open Banking"],
    fincoreBenefits: ["Uptime 99.99%", "PCI-DSS Level 1", "Масштабованість", "Підтримка 24/7"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Управління держфінансами та антикорупція",
    goverpDesc: "ERP-рішення для держорганів з прозорістю та відповідністю міжнародним стандартам.",
    goverpFeatures: ["Бюджетування", "Закупівлі", "Антикорупція", "Активи", "HR держсектору", "IPSAS звітність", "Аудит"],
    goverpBenefits: ["Фінансова прозорість", "Виявлення шахрайства", "IPSAS", "Багаторівнева авторизація"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Міжнародні перекази для банків",
    remitproDesc: "Платформа для банків для безпечних міжнародних переказів у 180+ країн.",
    remitproFeatures: ["180+ країн", "Курси валют", "AML-перевірка", "Мережа агентів", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Перекази того ж дня", "Найкращі курси", "Повний compliance", "Успішність 99.9%"],
    
    comparisonTitle: "Порівняння продуктів",
    feature: "Функція",
    deployment: "Розгортання",
    cloud: "Хмара та локально",
    support: "Підтримка",
    enterprise: "24/7 Enterprise",
    updates: "Оновлення",
    continuous: "Безперервні",
    customization: "Кастомізація",
    full: "Повна",
    integration: "API інтеграція",
    extensive: "Обширна",
    
    ctaTitle: "Готові трансформувати бізнес?",
    ctaDesc: "Заплануйте демо та дізнайтесь, як наші продукти допоможуть",
    requestDemo: "Запросити демо",
    viewTexaFab: "TexaFab",
    learnMore: "Детальніше",
    contactSales: "Зв'язатися з відділом продажів"
  },
  tr: {
    pageTitle: "Ürünlerimiz",
    pageSubtitle: "Sektör lideri kurumsal yazılım çözümleri",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Eksiksiz Kurumsal Kaynak Planlaması",
    texacoreDesc: "Modern işletmeler için tasarlanmış kapsamlı, modüler ERP platformu.",
    texacoreFeatures: [
      "Finans ve Muhasebe",
      "İK ve Bordro",
      "Tedarik Zinciri Yönetimi",
      "Envanter ve Depo",
      "Üretim Operasyonları",
      "İş Zekası ve Analitik",
      "CRM ve Satış Yönetimi",
      "Çoklu Para Birimi ve Dil"
    ],
    texacoreBenefits: [
      "Operasyonel maliyetlerde %40 azalma",
      "Gerçek zamanlı iş görünürlüğü",
      "Sorunsuz departman entegrasyonu",
      "Bulut veya yerinde dağıtım"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Yeni Nesil Bankacılık Platformu",
    fincoreDesc: "Modern finans kuruluşları için kapsamlı bankacılık sistemi.",
    fincoreFeatures: ["İşlem İşleme", "Çoklu Para Birimi", "Dijital Bankacılık", "Kredi Yönetimi", "Hazine", "Uyumluluk", "Open Banking"],
    fincoreBenefits: ["Uptime %99.99", "PCI-DSS Level 1", "Ölçeklenebilirlik", "7/24 Destek"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Devlet Mali Yönetimi ve Yolsuzlukla Mücadele",
    goverpDesc: "Kamu kurumları için şeffaflık ve uluslararası standartlara uyum sağlayan ERP çözümü.",
    goverpFeatures: ["Bütçeleme", "Satın Alma", "Yolsuzlukla Mücadele", "Varlık Yönetimi", "Kamu HR", "IPSAS Raporlama", "Denetim"],
    goverpBenefits: ["Mali şeffaflık", "Dolandırıcılık tespiti", "IPSAS uyumu", "Çok seviyeli yetkilendirme"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Bankalar için Uluslararası Havale Platformu",
    remitproDesc: "180+ ülkeye güvenli ve hızlı uluslararası transferler sunan banka platformu.",
    remitproFeatures: ["180+ Ülke", "Döviz Kurları", "AML Tarama", "Acente Ağı", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Aynı gün transferler", "En iyi kurlar", "Tam uyumluluk", "%99.9 Başarı oranı"],
    
    comparisonTitle: "Ürün Karşılaştırması",
    feature: "Özellik",
    deployment: "Dağıtım",
    cloud: "Bulut ve Yerinde",
    support: "Destek",
    enterprise: "7/24 Kurumsal",
    updates: "Güncellemeler",
    continuous: "Sürekli",
    customization: "Özelleştirme",
    full: "Tam",
    integration: "API Entegrasyonu",
    extensive: "Kapsamlı",
    
    ctaTitle: "İşinizi Dönüştürmeye Hazır mısınız?",
    ctaDesc: "Demo planlayın ve ürünlerimizin nasıl yardımcı olabileceğini görün",
    requestDemo: "Demo Talep Et",
    viewTexaFab: "TexaFab'ı Görüntüle",
    learnMore: "Daha Fazla",
    contactSales: "Satışa Ulaşın"
  },
  pl: {
    pageTitle: "Nasze produkty",
    pageSubtitle: "Wiodące rozwiązania oprogramowania dla przedsiębiorstw",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Kompletne planowanie zasobów przedsiębiorstwa",
    texacoreDesc: "Kompleksowa, modularna platforma ERP dla nowoczesnych przedsiębiorstw.",
    texacoreFeatures: [
      "Finanse i księgowość",
      "HR i płace",
      "Zarządzanie łańcuchem dostaw",
      "Magazyn i inwentaryzacja",
      "Operacje produkcyjne",
      "BI i analityka",
      "CRM i sprzedaż",
      "Wielowalutowość i wielojęzyczność"
    ],
    texacoreBenefits: [
      "Redukcja kosztów operacyjnych o 40%",
      "Widoczność biznesu w czasie rzeczywistym",
      "Bezszwowa integracja działów",
      "Wdrożenie w chmurze lub lokalnie"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Platforma Bankowa Nowej Generacji",
    fincoreDesc: "Kompleksowy system bankowy dla nowoczesnych instytucji finansowych.",
    fincoreFeatures: ["Przetwarzanie transakcji", "Wielowalutowość", "Bankowość cyfrowa", "Zarządzanie kredytami", "Skarbiec", "Compliance", "Open Banking"],
    fincoreBenefits: ["Uptime 99.99%", "PCI-DSS Level 1", "Skalowalność", "Wsparcie 24/7"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Zarządzanie Finansami Publicznymi i Antykorupcja",
    goverpDesc: "Rozwiązanie ERP dla instytucji rządowych z przejrzystością i zgodnością z międzynarodowymi standardami.",
    goverpFeatures: ["Budżetowanie", "Zakupy", "Antykorupcja", "Zarządzanie aktywami", "HR publiczny", "Raportowanie IPSAS", "Audyt"],
    goverpBenefits: ["Przejrzystość finansowa", "Wykrywanie oszustw", "IPSAS", "Wielopoziomowa autoryzacja"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Międzynarodowe Przelewy dla Banków",
    remitproDesc: "Platforma dla banków do bezpiecznych i szybkich międzynarodowych transferów do 180+ krajów.",
    remitproFeatures: ["180+ krajów", "Kursy walut", "Screening AML", "Sieć agentów", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Przelewy tego samego dnia", "Najlepsze kursy", "Pełna zgodność", "Skuteczność 99.9%"],
    
    comparisonTitle: "Porównanie produktów",
    feature: "Funkcja",
    deployment: "Wdrożenie",
    cloud: "Chmura i lokalnie",
    support: "Wsparcie",
    enterprise: "24/7 Enterprise",
    updates: "Aktualizacje",
    continuous: "Ciągłe",
    customization: "Personalizacja",
    full: "Pełna",
    integration: "Integracja API",
    extensive: "Rozległa",
    
    ctaTitle: "Gotowy na transformację?",
    ctaDesc: "Zaplanuj demo i zobacz, jak nasze produkty mogą pomóc",
    requestDemo: "Zamów demo",
    viewTexaFab: "Zobacz TexaFab",
    learnMore: "Więcej informacji",
    contactSales: "Kontakt z działem sprzedaży"
  },
  ro: {
    pageTitle: "Produsele noastre",
    pageSubtitle: "Soluții software enterprise lider în industrie",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Planificarea completă a resurselor întreprinderii",
    texacoreDesc: "Platformă ERP modulară completă pentru întreprinderi moderne.",
    texacoreFeatures: [
      "Finanțe și contabilitate",
      "HR și salarizare",
      "Managementul lanțului de aprovizionare",
      "Inventar și depozit",
      "Operațiuni de producție",
      "BI și analiză",
      "CRM și vânzări",
      "Multi-valută și multi-limbă"
    ],
    texacoreBenefits: [
      "Reducerea costurilor operaționale cu 40%",
      "Vizibilitate în timp real",
      "Integrare fără probleme",
      "Implementare cloud sau locală"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Platformă Bancară de Nouă Generație",
    fincoreDesc: "Sistem bancar complet pentru instituții financiare moderne.",
    fincoreFeatures: ["Procesare tranzacții", "Multi-valută", "Banking digital", "Management credite", "Trezorerie", "Compliance", "Open Banking"],
    fincoreBenefits: ["Uptime 99.99%", "PCI-DSS Level 1", "Scalabilitate", "Suport 24/7"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Management Financiar Guvernamental și Anticorupție",
    goverpDesc: "Soluție ERP pentru instituții guvernamentale cu transparență și conformitate cu standardele internaționale.",
    goverpFeatures: ["Bugetare", "Achiziții", "Anticorupție", "Management active", "HR public", "Raportare IPSAS", "Audit"],
    goverpBenefits: ["Transparență financiară", "Detectare fraude", "IPSAS", "Autorizare multi-nivel"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Transferuri Internaționale pentru Bănci",
    remitproDesc: "Platformă pentru bănci pentru transferuri internaționale sigure și rapide în 180+ țări.",
    remitproFeatures: ["180+ țări", "Rate de schimb", "Screening AML", "Rețea agenți", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Transferuri în aceeași zi", "Cele mai bune rate", "Conformitate completă", "Rata de succes 99.9%"],
    
    comparisonTitle: "Comparație produse",
    feature: "Funcție",
    deployment: "Implementare",
    cloud: "Cloud și local",
    support: "Suport",
    enterprise: "24/7 Enterprise",
    updates: "Actualizări",
    continuous: "Continue",
    customization: "Personalizare",
    full: "Completă",
    integration: "Integrare API",
    extensive: "Extinsă",
    
    ctaTitle: "Gata să transformi afacerea?",
    ctaDesc: "Programează un demo și vezi cum produsele noastre pot ajuta",
    requestDemo: "Solicită demo",
    viewTexaFab: "Vezi TexaFab",
    learnMore: "Află mai multe",
    contactSales: "Contactează vânzările"
  },
  it: {
    pageTitle: "I nostri prodotti",
    pageSubtitle: "Soluzioni software enterprise leader nel settore",
    
    texacoreTitle: "TexaCore ERP",
    texacoreTagline: "Pianificazione completa delle risorse aziendali",
    texacoreDesc: "Piattaforma ERP modulare completa per aziende moderne.",
    texacoreFeatures: [
      "Finanza e contabilità",
      "HR e buste paga",
      "Gestione supply chain",
      "Inventario e magazzino",
      "Operazioni produttive",
      "BI e analytics",
      "CRM e vendite",
      "Multi-valuta e multi-lingua"
    ],
    texacoreBenefits: [
      "Riduzione costi operativi del 40%",
      "Visibilità business in tempo reale",
      "Integrazione dipartimenti seamless",
      "Deploy cloud o on-premise"
    ],
    
    fincoreTitle: "FinCore Banking",
    fincoreTagline: "Piattaforma Bancaria di Nuova Generazione",
    fincoreDesc: "Sistema bancario completo per istituzioni finanziarie moderne.",
    fincoreFeatures: ["Elaborazione transazioni", "Multi-valuta", "Digital banking", "Gestione crediti", "Tesoreria", "Compliance", "Open Banking"],
    fincoreBenefits: ["Uptime 99.99%", "PCI-DSS Level 1", "Scalabilità", "Supporto 24/7"],
    
    goverpTitle: "GovERP",
    goverpTagline: "Gestione Finanziaria Governativa e Anticorruzione",
    goverpDesc: "Soluzione ERP per enti governativi con trasparenza e conformità agli standard internazionali.",
    goverpFeatures: ["Budgeting", "Procurement", "Anticorruzione", "Gestione asset", "HR pubblico", "Reporting IPSAS", "Audit"],
    goverpBenefits: ["Trasparenza finanziaria", "Rilevamento frodi", "IPSAS", "Autorizzazione multilivello"],
    
    remitproTitle: "RemitPro",
    remitproTagline: "Trasferimenti Internazionali per Banche",
    remitproDesc: "Piattaforma per banche per trasferimenti internazionali sicuri e veloci in 180+ paesi.",
    remitproFeatures: ["180+ paesi", "Tassi di cambio", "Screening AML", "Rete agenti", "White-label", "SWIFT/SEPA"],
    remitproBenefits: ["Trasferimenti stesso giorno", "Migliori tassi", "Conformità completa", "Tasso successo 99.9%"],
    
    comparisonTitle: "Confronto prodotti",
    feature: "Funzionalità",
    deployment: "Deployment",
    cloud: "Cloud e on-premise",
    support: "Supporto",
    enterprise: "24/7 Enterprise",
    updates: "Aggiornamenti",
    continuous: "Continui",
    customization: "Personalizzazione",
    full: "Completa",
    integration: "Integrazione API",
    extensive: "Estesa",
    
    ctaTitle: "Pronto a trasformare la tua azienda?",
    ctaDesc: "Pianifica una demo e scopri come i nostri prodotti possono aiutarti",
    requestDemo: "Richiedi demo",
    viewTexaFab: "Vedi TexaFab",
    learnMore: "Scopri di più",
    contactSales: "Contatta le vendite"
  }
};

export default function NRProductsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta
  const seoMeta = {
    en: {
      title: "Products | TexaCore, FinCore, GovERP, RemitPro | Next Revolution",
      description: "Explore our enterprise software products: TexaCore ERP for textile industry, FinCore Banking platform, GovERP for government, and RemitPro for international transfers."
    },
    ar: {
      title: "المنتجات | TexaCore, FinCore, GovERP, RemitPro | نيكست ريفوليوشن",
      description: "استكشف منتجاتنا: TexaCore ERP لصناعة النسيج، FinCore للبنوك، GovERP للحكومات، وRemitPro للتحويلات الدولية."
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
      
      {/* TexaCore Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{t.texacoreTitle}</h2>
                <p className="text-xl text-blue-400 mb-4">{t.texacoreTagline}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.texacoreDesc}</p>
                
                <div className="space-y-3 mb-8">
                  {t.texacoreBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/next-revolution/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all"
                >
                  {t.requestDemo}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.texacoreFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* FinCore Banking Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.fincoreFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6">
                  <Landmark className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{t.fincoreTitle}</h2>
                <p className="text-xl text-amber-400 mb-4">{t.fincoreTagline}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.fincoreDesc}</p>
                
                <div className="space-y-3 mb-8">
                  {t.fincoreBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/next-revolution/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all"
                >
                  {t.requestDemo}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* GovERP Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{t.goverpTitle}</h2>
                <p className="text-xl text-emerald-400 mb-4">{t.goverpTagline}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.goverpDesc}</p>
                
                <div className="space-y-3 mb-8">
                  {t.goverpBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/next-revolution/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all"
                >
                  {t.requestDemo}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.goverpFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RemitPro Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.remitproFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{t.remitproTitle}</h2>
                <p className="text-xl text-purple-400 mb-4">{t.remitproTagline}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.remitproDesc}</p>
                
                <div className="space-y-3 mb-8">
                  {t.remitproBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/next-revolution/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all"
                >
                  {t.requestDemo}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.comparisonTitle}</h2>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">{t.feature}</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">TexaCore</th>
                  <th className="text-center py-4 px-4 text-amber-400 font-semibold">FinCore</th>
                  <th className="text-center py-4 px-4 text-emerald-400 font-semibold">GovERP</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">RemitPro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4 text-slate-300">{t.deployment}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.cloud}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.cloud}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.cloud}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.cloud}</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4 text-slate-300">{t.support}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.enterprise}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.enterprise}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.enterprise}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.enterprise}</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4 text-slate-300">{t.updates}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.continuous}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.continuous}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.continuous}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.continuous}</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4 text-slate-300">{t.customization}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.full}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.full}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.full}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.full}</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-300">{t.integration}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.extensive}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.extensive}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.extensive}</td>
                  <td className="py-4 px-4 text-center text-slate-300">{t.extensive}</td>
                </tr>
              </tbody>
            </table>
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
            {t.contactSales}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      <NRFooter />
      <ScrollToTop />
    </div>
  );
}
