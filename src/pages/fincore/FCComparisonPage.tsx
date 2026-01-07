import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  CheckCircle2, XCircle, Minus, Zap, Clock, Shield, 
  TrendingUp, Users, FileText, BarChart3, ArrowRight, 
  ArrowLeft, Building2, Calculator, Globe, RefreshCcw,
  AlertTriangle, Coins, Database, Lock
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Why FinCore?",
    pageSubtitle: "See how FinCore compares to traditional systems and paper-based operations",
    
    heroTitle: "FinCore vs",
    heroTitleHighlight: "Traditional Systems",
    heroSubtitle: "Make an informed decision. Compare our modern banking platform against legacy systems and manual processes.",
    
    // Comparison Categories
    comparisonTitle: "Feature Comparison",
    comparisonSubtitle: "Comprehensive comparison across key business metrics",
    
    // Systems
    systemFinCore: "FinCore",
    systemTraditional: "Traditional ERP",
    systemPaper: "Paper/Excel",
    
    // Feature Categories
    catOperations: "Operations",
    catSecurity: "Security",
    catScalability: "Scalability",
    catCompliance: "Compliance",
    catCost: "Cost Efficiency",
    catSupport: "Support",
    
    // Features
    featureDataEntry: "Data Entry Speed",
    featureRealTime: "Real-time Processing",
    featureMultiCurrency: "Multi-currency Support",
    featureCustomerTracking: "Customer Tracking",
    featureDebtManagement: "Debt Management (Dhimmam)",
    featureReporting: "Automated Reporting",
    featureIntegration: "API Integration",
    featureMobile: "Mobile Access",
    featureEncryption: "Data Encryption",
    featureBackup: "Auto Backup",
    featureAuditLog: "Audit Logging",
    feature2FA: "Two-Factor Auth",
    featureUnlimitedTx: "Unlimited Transactions",
    featureMultiLocation: "Multi-Location",
    featureCloudBased: "Cloud-Based",
    featureAutoScale: "Auto-Scaling",
    featureKYC: "KYC/AML Built-in",
    featureRegulatory: "Regulatory Reports",
    featureGDPR: "GDPR Compliant",
    featureSWIFT: "SWIFT/SEPA Ready",
    featureSetupCost: "Setup Cost",
    featureMonthly: "Monthly Cost",
    featureHidden: "Hidden Fees",
    featureROI: "ROI Timeline",
    feature24x7: "24/7 Support",
    featureTraining: "Free Training",
    featureDedicated: "Dedicated Manager",
    featureUpdates: "Free Updates",
    
    // Values
    valueInstant: "Instant",
    valueSlow: "Slow",
    valueManual: "Manual",
    valueYes: "Yes",
    valueNo: "No",
    valueLimited: "Limited",
    valueUnlimited: "Unlimited",
    valueBuiltIn: "Built-in",
    valueAddon: "Add-on",
    valueNone: "None",
    valueLow: "Low",
    valueMedium: "Medium",
    valueHigh: "High",
    valueVeryHigh: "Very High",
    valueMonths: "months",
    valueYears: "years",
    valueNever: "Never",
    valueIncluded: "Included",
    valueExtra: "Extra Cost",
    
    // Advantages Section
    advantagesTitle: "Key Advantages",
    advantagesSubtitle: "Why leading financial institutions choose FinCore",
    
    adv1Title: "10x Faster Processing",
    adv1Desc: "Process transactions in milliseconds instead of minutes. Handle 10,000+ transactions per second with real-time settlement.",
    
    adv2Title: "99.99% Uptime",
    adv2Desc: "Enterprise-grade reliability with redundant infrastructure. Your operations never stop, even during maintenance.",
    
    adv3Title: "Complete Customer Management",
    adv3Desc: "Track customer balances, manage credit limits, and automate debt collection (Dhimmam) with intelligent reminders.",
    
    adv4Title: "Multi-currency Excellence",
    adv4Desc: "Support 150+ currencies with real-time exchange rates. Automatic profit calculation and position management.",
    
    adv5Title: "Compliance Ready",
    adv5Desc: "Built-in KYC/AML screening, FATF compliance, and automated regulatory reporting. Stay ahead of requirements.",
    
    adv6Title: "Zero Maintenance",
    adv6Desc: "Cloud-based platform with automatic updates, backups, and security patches. No IT team required.",
    
    // Stats
    statsTitle: "By the Numbers",
    statsSubtitle: "Real results from FinCore deployments",
    
    stat1: "85%",
    stat1Label: "Reduction in operational costs",
    stat2: "10x",
    stat2Label: "Increase in transaction volume",
    stat3: "99.9%",
    stat3Label: "Error reduction rate",
    stat4: "<3",
    stat4Label: "Months to full ROI",
    
    // Case Studies
    caseTitle: "Real-World Impact",
    caseSubtitle: "See how businesses transformed their operations",
    
    case1Title: "From Excel to Enterprise",
    case1Before: "Managing 50 customers with spreadsheets, frequent errors, lost data",
    case1After: "Now handles 5,000+ customers with zero errors and complete audit trail",
    case1Time: "Transformation in 2 weeks",
    
    case2Title: "Scaling Without Limits",
    case2Before: "Legacy system crashed at 1,000 daily transactions",
    case2After: "Processing 50,000+ daily transactions seamlessly",
    case2Time: "10x growth in 6 months",
    
    case3Title: "Compliance Made Easy",
    case3Before: "Manual reporting taking 2 weeks monthly",
    case3After: "Automated reports generated in seconds, always compliant",
    case3Time: "100% compliance achieved",
    
    // CTA
    ctaTitle: "Ready to Upgrade?",
    ctaSubtitle: "Join hundreds of financial institutions that have already made the switch",
    ctaButton: "Start Free Trial",
    ctaSecondary: "Schedule Demo",
  },
  ar: {
    pageTitle: "لماذا FinCore؟",
    pageSubtitle: "شاهد كيف يقارن FinCore بالأنظمة التقليدية والعمليات الورقية",
    
    heroTitle: "FinCore مقابل",
    heroTitleHighlight: "الأنظمة التقليدية",
    heroSubtitle: "اتخذ قراراً مدروساً. قارن منصتنا المصرفية الحديثة مع الأنظمة القديمة والعمليات اليدوية.",
    
    comparisonTitle: "مقارنة الميزات",
    comparisonSubtitle: "مقارنة شاملة عبر مقاييس الأعمال الرئيسية",
    
    systemFinCore: "FinCore",
    systemTraditional: "ERP تقليدي",
    systemPaper: "ورق/إكسل",
    
    catOperations: "العمليات",
    catSecurity: "الأمان",
    catScalability: "قابلية التوسع",
    catCompliance: "الامتثال",
    catCost: "كفاءة التكلفة",
    catSupport: "الدعم",
    
    featureDataEntry: "سرعة إدخال البيانات",
    featureRealTime: "المعالجة الفورية",
    featureMultiCurrency: "دعم العملات المتعددة",
    featureCustomerTracking: "تتبع العملاء",
    featureDebtManagement: "إدارة الذمم المدينة",
    featureReporting: "التقارير الآلية",
    featureIntegration: "تكامل API",
    featureMobile: "الوصول عبر الجوال",
    featureEncryption: "تشفير البيانات",
    featureBackup: "النسخ الاحتياطي التلقائي",
    featureAuditLog: "سجل التدقيق",
    feature2FA: "المصادقة الثنائية",
    featureUnlimitedTx: "معاملات غير محدودة",
    featureMultiLocation: "مواقع متعددة",
    featureCloudBased: "قائم على السحابة",
    featureAutoScale: "التوسع التلقائي",
    featureKYC: "KYC/AML مدمج",
    featureRegulatory: "التقارير التنظيمية",
    featureGDPR: "متوافق مع GDPR",
    featureSWIFT: "جاهز لـ SWIFT/SEPA",
    featureSetupCost: "تكلفة الإعداد",
    featureMonthly: "التكلفة الشهرية",
    featureHidden: "رسوم مخفية",
    featureROI: "مدة العائد على الاستثمار",
    feature24x7: "دعم 24/7",
    featureTraining: "تدريب مجاني",
    featureDedicated: "مدير مخصص",
    featureUpdates: "تحديثات مجانية",
    
    valueInstant: "فوري",
    valueSlow: "بطيء",
    valueManual: "يدوي",
    valueYes: "نعم",
    valueNo: "لا",
    valueLimited: "محدود",
    valueUnlimited: "غير محدود",
    valueBuiltIn: "مدمج",
    valueAddon: "إضافة",
    valueNone: "لا يوجد",
    valueLow: "منخفض",
    valueMedium: "متوسط",
    valueHigh: "مرتفع",
    valueVeryHigh: "مرتفع جداً",
    valueMonths: "أشهر",
    valueYears: "سنوات",
    valueNever: "أبداً",
    valueIncluded: "مشمول",
    valueExtra: "تكلفة إضافية",
    
    advantagesTitle: "المزايا الرئيسية",
    advantagesSubtitle: "لماذا تختار المؤسسات المالية الرائدة FinCore",
    
    adv1Title: "معالجة أسرع 10 مرات",
    adv1Desc: "معالجة المعاملات بالمللي ثانية بدلاً من الدقائق. التعامل مع أكثر من 10,000 معاملة في الثانية مع التسوية الفورية.",
    
    adv2Title: "99.99% وقت التشغيل",
    adv2Desc: "موثوقية بمستوى المؤسسات مع بنية تحتية متكررة. عملياتك لا تتوقف أبداً، حتى أثناء الصيانة.",
    
    adv3Title: "إدارة عملاء شاملة",
    adv3Desc: "تتبع أرصدة العملاء، إدارة حدود الائتمان، وأتمتة تحصيل الذمم مع تذكيرات ذكية.",
    
    adv4Title: "تميز العملات المتعددة",
    adv4Desc: "دعم أكثر من 150 عملة مع أسعار صرف فورية. حساب الأرباح التلقائي وإدارة المراكز.",
    
    adv5Title: "جاهز للامتثال",
    adv5Desc: "فحص KYC/AML مدمج، امتثال FATF، وتقارير تنظيمية آلية. ابق متقدماً على المتطلبات.",
    
    adv6Title: "صيانة صفرية",
    adv6Desc: "منصة سحابية مع تحديثات تلقائية ونسخ احتياطي وتصحيحات أمنية. لا حاجة لفريق تقنية معلومات.",
    
    statsTitle: "بالأرقام",
    statsSubtitle: "نتائج حقيقية من نشر FinCore",
    
    stat1: "85%",
    stat1Label: "تخفيض في تكاليف التشغيل",
    stat2: "10 أضعاف",
    stat2Label: "زيادة في حجم المعاملات",
    stat3: "99.9%",
    stat3Label: "معدل تقليل الأخطاء",
    stat4: "<3",
    stat4Label: "أشهر للعائد الكامل",
    
    caseTitle: "التأثير الحقيقي",
    caseSubtitle: "شاهد كيف حولت الشركات عملياتها",
    
    case1Title: "من إكسل إلى المؤسسات",
    case1Before: "إدارة 50 عميلاً بجداول البيانات، أخطاء متكررة، بيانات مفقودة",
    case1After: "الآن يتعامل مع أكثر من 5,000 عميل بدون أخطاء وسجل تدقيق كامل",
    case1Time: "التحول في أسبوعين",
    
    case2Title: "التوسع بلا حدود",
    case2Before: "النظام القديم ينهار عند 1,000 معاملة يومية",
    case2After: "معالجة أكثر من 50,000 معاملة يومية بسلاسة",
    case2Time: "نمو 10 أضعاف في 6 أشهر",
    
    case3Title: "الامتثال أصبح سهلاً",
    case3Before: "التقارير اليدوية تستغرق أسبوعين شهرياً",
    case3After: "تقارير آلية تُنشأ في ثوانٍ، دائماً متوافقة",
    case3Time: "تحقيق امتثال 100%",
    
    ctaTitle: "مستعد للترقية؟",
    ctaSubtitle: "انضم إلى مئات المؤسسات المالية التي انتقلت بالفعل",
    ctaButton: "ابدأ التجربة المجانية",
    ctaSecondary: "جدولة عرض توضيحي",
  },
  tr: {
    pageTitle: "Neden FinCore?",
    pageSubtitle: "FinCore'un geleneksel sistemler ve kağıt tabanlı operasyonlarla nasıl karşılaştırıldığını görün",
    
    heroTitle: "FinCore vs",
    heroTitleHighlight: "Geleneksel Sistemler",
    heroSubtitle: "Bilinçli bir karar verin. Modern bankacılık platformumuzu eski sistemler ve manuel süreçlerle karşılaştırın.",
    
    comparisonTitle: "Özellik Karşılaştırması",
    comparisonSubtitle: "Temel iş metrikleri arasında kapsamlı karşılaştırma",
    
    systemFinCore: "FinCore",
    systemTraditional: "Geleneksel ERP",
    systemPaper: "Kağıt/Excel",
    
    catOperations: "Operasyonlar",
    catSecurity: "Güvenlik",
    catScalability: "Ölçeklenebilirlik",
    catCompliance: "Uyumluluk",
    catCost: "Maliyet Verimliliği",
    catSupport: "Destek",
    
    featureDataEntry: "Veri Girişi Hızı",
    featureRealTime: "Gerçek Zamanlı İşleme",
    featureMultiCurrency: "Çoklu Para Birimi Desteği",
    featureCustomerTracking: "Müşteri Takibi",
    featureDebtManagement: "Borç Yönetimi",
    featureReporting: "Otomatik Raporlama",
    featureIntegration: "API Entegrasyonu",
    featureMobile: "Mobil Erişim",
    featureEncryption: "Veri Şifreleme",
    featureBackup: "Otomatik Yedekleme",
    featureAuditLog: "Denetim Günlüğü",
    feature2FA: "İki Faktörlü Kimlik Doğrulama",
    featureUnlimitedTx: "Sınırsız İşlem",
    featureMultiLocation: "Çoklu Konum",
    featureCloudBased: "Bulut Tabanlı",
    featureAutoScale: "Otomatik Ölçeklendirme",
    featureKYC: "Yerleşik KYC/AML",
    featureRegulatory: "Düzenleyici Raporlar",
    featureGDPR: "GDPR Uyumlu",
    featureSWIFT: "SWIFT/SEPA Hazır",
    featureSetupCost: "Kurulum Maliyeti",
    featureMonthly: "Aylık Maliyet",
    featureHidden: "Gizli Ücretler",
    featureROI: "ROI Zaman Çizelgesi",
    feature24x7: "7/24 Destek",
    featureTraining: "Ücretsiz Eğitim",
    featureDedicated: "Özel Yönetici",
    featureUpdates: "Ücretsiz Güncellemeler",
    
    valueInstant: "Anlık",
    valueSlow: "Yavaş",
    valueManual: "Manuel",
    valueYes: "Evet",
    valueNo: "Hayır",
    valueLimited: "Sınırlı",
    valueUnlimited: "Sınırsız",
    valueBuiltIn: "Yerleşik",
    valueAddon: "Ek Özellik",
    valueNone: "Yok",
    valueLow: "Düşük",
    valueMedium: "Orta",
    valueHigh: "Yüksek",
    valueVeryHigh: "Çok Yüksek",
    valueMonths: "ay",
    valueYears: "yıl",
    valueNever: "Asla",
    valueIncluded: "Dahil",
    valueExtra: "Ekstra Maliyet",
    
    advantagesTitle: "Temel Avantajlar",
    advantagesSubtitle: "Önde gelen finans kuruluşlarının neden FinCore'u seçtiği",
    
    adv1Title: "10 Kat Daha Hızlı İşleme",
    adv1Desc: "İşlemleri dakikalar yerine milisaniyeler içinde işleyin. Gerçek zamanlı mutabakat ile saniyede 10.000+ işlem gerçekleştirin.",
    
    adv2Title: "%99.99 Çalışma Süresi",
    adv2Desc: "Yedekli altyapı ile kurumsal düzeyde güvenilirlik. Bakım sırasında bile operasyonlarınız asla durmaz.",
    
    adv3Title: "Kapsamlı Müşteri Yönetimi",
    adv3Desc: "Müşteri bakiyelerini takip edin, kredi limitlerini yönetin ve akıllı hatırlatıcılarla borç tahsilatını otomatikleştirin.",
    
    adv4Title: "Çoklu Para Birimi Mükemmelliği",
    adv4Desc: "Gerçek zamanlı döviz kurlarıyla 150+ para birimini destekleyin. Otomatik kâr hesaplama ve pozisyon yönetimi.",
    
    adv5Title: "Uyumluluk Hazır",
    adv5Desc: "Yerleşik KYC/AML taraması, FATF uyumluluğu ve otomatik düzenleyici raporlama. Gereksinimlerin önünde olun.",
    
    adv6Title: "Sıfır Bakım",
    adv6Desc: "Otomatik güncellemeler, yedeklemeler ve güvenlik yamalarıyla bulut tabanlı platform. BT ekibine gerek yok.",
    
    statsTitle: "Rakamlarla",
    statsSubtitle: "FinCore dağıtımlarından gerçek sonuçlar",
    
    stat1: "%85",
    stat1Label: "Operasyonel maliyetlerde azalma",
    stat2: "10x",
    stat2Label: "İşlem hacminde artış",
    stat3: "%99.9",
    stat3Label: "Hata azaltma oranı",
    stat4: "<3",
    stat4Label: "Tam ROI'ye ay",
    
    caseTitle: "Gerçek Dünya Etkisi",
    caseSubtitle: "İşletmelerin operasyonlarını nasıl dönüştürdüğünü görün",
    
    case1Title: "Excel'den Kurumsal'a",
    case1Before: "50 müşteriyi elektronik tablolarla yönetme, sık hatalar, kayıp veriler",
    case1After: "Artık sıfır hata ve tam denetim izi ile 5.000+ müşteriyi yönetiyor",
    case1Time: "2 haftada dönüşüm",
    
    case2Title: "Sınırsız Ölçeklendirme",
    case2Before: "Eski sistem 1.000 günlük işlemde çöktü",
    case2After: "50.000+ günlük işlemi sorunsuz işliyor",
    case2Time: "6 ayda 10x büyüme",
    
    case3Title: "Uyumluluk Kolaylaştı",
    case3Before: "Aylık manuel raporlama 2 hafta sürüyordu",
    case3After: "Saniyeler içinde oluşturulan otomatik raporlar, her zaman uyumlu",
    case3Time: "%100 uyumluluk sağlandı",
    
    ctaTitle: "Yükseltmeye Hazır mısınız?",
    ctaSubtitle: "Zaten geçiş yapmış yüzlerce finans kuruluşuna katılın",
    ctaButton: "Ücretsiz Denemeyi Başlat",
    ctaSecondary: "Demo Planla",
  },
  uk: {
    pageTitle: "Чому FinCore?",
    pageSubtitle: "Подивіться, як FinCore порівнюється з традиційними системами та паперовими операціями",
    
    heroTitle: "FinCore проти",
    heroTitleHighlight: "Традиційних Систем",
    heroSubtitle: "Приймайте обґрунтоване рішення. Порівняйте нашу сучасну банківську платформу зі застарілими системами та ручними процесами.",
    
    comparisonTitle: "Порівняння Функцій",
    comparisonSubtitle: "Комплексне порівняння за ключовими бізнес-метриками",
    
    systemFinCore: "FinCore",
    systemTraditional: "Традиційний ERP",
    systemPaper: "Папір/Excel",
    
    catOperations: "Операції",
    catSecurity: "Безпека",
    catScalability: "Масштабованість",
    catCompliance: "Відповідність",
    catCost: "Ефективність Витрат",
    catSupport: "Підтримка",
    
    featureDataEntry: "Швидкість Введення Даних",
    featureRealTime: "Обробка в Реальному Часі",
    featureMultiCurrency: "Мультивалютна Підтримка",
    featureCustomerTracking: "Відстеження Клієнтів",
    featureDebtManagement: "Управління Заборгованістю",
    featureReporting: "Автоматична Звітність",
    featureIntegration: "API Інтеграція",
    featureMobile: "Мобільний Доступ",
    featureEncryption: "Шифрування Даних",
    featureBackup: "Автоматичне Резервне Копіювання",
    featureAuditLog: "Журнал Аудиту",
    feature2FA: "Двофакторна Автентифікація",
    featureUnlimitedTx: "Необмежені Транзакції",
    featureMultiLocation: "Багато Локацій",
    featureCloudBased: "Хмарний",
    featureAutoScale: "Автомасштабування",
    featureKYC: "Вбудований KYC/AML",
    featureRegulatory: "Регуляторні Звіти",
    featureGDPR: "GDPR Відповідність",
    featureSWIFT: "Готовий до SWIFT/SEPA",
    featureSetupCost: "Вартість Налаштування",
    featureMonthly: "Щомісячна Вартість",
    featureHidden: "Приховані Збори",
    featureROI: "Термін ROI",
    feature24x7: "Підтримка 24/7",
    featureTraining: "Безкоштовне Навчання",
    featureDedicated: "Виділений Менеджер",
    featureUpdates: "Безкоштовні Оновлення",
    
    valueInstant: "Миттєво",
    valueSlow: "Повільно",
    valueManual: "Вручну",
    valueYes: "Так",
    valueNo: "Ні",
    valueLimited: "Обмежено",
    valueUnlimited: "Необмежено",
    valueBuiltIn: "Вбудовано",
    valueAddon: "Додатково",
    valueNone: "Немає",
    valueLow: "Низька",
    valueMedium: "Середня",
    valueHigh: "Висока",
    valueVeryHigh: "Дуже Висока",
    valueMonths: "місяців",
    valueYears: "років",
    valueNever: "Ніколи",
    valueIncluded: "Включено",
    valueExtra: "Додаткова Вартість",
    
    advantagesTitle: "Ключові Переваги",
    advantagesSubtitle: "Чому провідні фінансові установи обирають FinCore",
    
    adv1Title: "В 10 Разів Швидша Обробка",
    adv1Desc: "Обробляйте транзакції за мілісекунди замість хвилин. Виконуйте 10,000+ транзакцій на секунду з розрахунком в реальному часі.",
    
    adv2Title: "99.99% Часу Роботи",
    adv2Desc: "Надійність корпоративного рівня з резервною інфраструктурою. Ваші операції ніколи не зупиняються, навіть під час обслуговування.",
    
    adv3Title: "Повне Управління Клієнтами",
    adv3Desc: "Відстежуйте баланси клієнтів, керуйте кредитними лімітами та автоматизуйте збір боргів з інтелектуальними нагадуваннями.",
    
    adv4Title: "Досконалість Мультивалютності",
    adv4Desc: "Підтримка 150+ валют з курсами в реальному часі. Автоматичний розрахунок прибутку та управління позиціями.",
    
    adv5Title: "Готовність до Відповідності",
    adv5Desc: "Вбудована перевірка KYC/AML, відповідність FATF та автоматизована регуляторна звітність. Будьте попереду вимог.",
    
    adv6Title: "Нульове Обслуговування",
    adv6Desc: "Хмарна платформа з автоматичними оновленнями, резервними копіями та патчами безпеки. IT-команда не потрібна.",
    
    statsTitle: "У Цифрах",
    statsSubtitle: "Реальні результати від впровадження FinCore",
    
    stat1: "85%",
    stat1Label: "Зниження операційних витрат",
    stat2: "10x",
    stat2Label: "Збільшення обсягу транзакцій",
    stat3: "99.9%",
    stat3Label: "Рівень зменшення помилок",
    stat4: "<3",
    stat4Label: "Місяці до повного ROI",
    
    caseTitle: "Реальний Вплив",
    caseSubtitle: "Подивіться, як бізнеси трансформували свої операції",
    
    case1Title: "Від Excel до Підприємства",
    case1Before: "Управління 50 клієнтами в таблицях, часті помилки, втрачені дані",
    case1After: "Тепер обробляє 5,000+ клієнтів без помилок з повним аудиторським слідом",
    case1Time: "Трансформація за 2 тижні",
    
    case2Title: "Масштабування Без Меж",
    case2Before: "Стара система падала при 1,000 транзакцій на день",
    case2After: "Обробка 50,000+ щоденних транзакцій безперебійно",
    case2Time: "10x зростання за 6 місяців",
    
    case3Title: "Відповідність Стала Легкою",
    case3Before: "Ручна звітність займала 2 тижні щомісяця",
    case3After: "Автоматичні звіти генеруються за секунди, завжди відповідні",
    case3Time: "Досягнуто 100% відповідності",
    
    ctaTitle: "Готові до Оновлення?",
    ctaSubtitle: "Приєднуйтесь до сотень фінансових установ, які вже перейшли",
    ctaButton: "Почати Безкоштовну Пробну Версію",
    ctaSecondary: "Запланувати Демо",
  },
  pl: {
    pageTitle: "Dlaczego FinCore?",
    pageSubtitle: "Zobacz, jak FinCore wypada na tle tradycyjnych systemów i operacji papierowych",
    
    heroTitle: "FinCore vs",
    heroTitleHighlight: "Systemy Tradycyjne",
    heroSubtitle: "Podejmij świadomą decyzję. Porównaj naszą nowoczesną platformę bankową ze starszymi systemami i procesami manualnymi.",
    
    comparisonTitle: "Porównanie Funkcji",
    comparisonSubtitle: "Kompleksowe porównanie kluczowych metryk biznesowych",
    
    systemFinCore: "FinCore",
    systemTraditional: "Tradycyjny ERP",
    systemPaper: "Papier/Excel",
    
    catOperations: "Operacje",
    catSecurity: "Bezpieczeństwo",
    catScalability: "Skalowalność",
    catCompliance: "Zgodność",
    catCost: "Efektywność Kosztowa",
    catSupport: "Wsparcie",
    
    featureDataEntry: "Szybkość Wprowadzania Danych",
    featureRealTime: "Przetwarzanie w Czasie Rzeczywistym",
    featureMultiCurrency: "Obsługa Wielu Walut",
    featureCustomerTracking: "Śledzenie Klientów",
    featureDebtManagement: "Zarządzanie Zadłużeniem",
    featureReporting: "Automatyczne Raportowanie",
    featureIntegration: "Integracja API",
    featureMobile: "Dostęp Mobilny",
    featureEncryption: "Szyfrowanie Danych",
    featureBackup: "Automatyczne Kopie Zapasowe",
    featureAuditLog: "Dziennik Audytu",
    feature2FA: "Uwierzytelnianie Dwuskładnikowe",
    featureUnlimitedTx: "Nieograniczone Transakcje",
    featureMultiLocation: "Wiele Lokalizacji",
    featureCloudBased: "Oparty na Chmurze",
    featureAutoScale: "Automatyczne Skalowanie",
    featureKYC: "Wbudowane KYC/AML",
    featureRegulatory: "Raporty Regulacyjne",
    featureGDPR: "Zgodność z GDPR",
    featureSWIFT: "Gotowy na SWIFT/SEPA",
    featureSetupCost: "Koszt Konfiguracji",
    featureMonthly: "Koszt Miesięczny",
    featureHidden: "Ukryte Opłaty",
    featureROI: "Oś Czasu ROI",
    feature24x7: "Wsparcie 24/7",
    featureTraining: "Bezpłatne Szkolenie",
    featureDedicated: "Dedykowany Menedżer",
    featureUpdates: "Bezpłatne Aktualizacje",
    
    valueInstant: "Natychmiast",
    valueSlow: "Wolno",
    valueManual: "Ręcznie",
    valueYes: "Tak",
    valueNo: "Nie",
    valueLimited: "Ograniczone",
    valueUnlimited: "Nieograniczone",
    valueBuiltIn: "Wbudowane",
    valueAddon: "Dodatek",
    valueNone: "Brak",
    valueLow: "Niski",
    valueMedium: "Średni",
    valueHigh: "Wysoki",
    valueVeryHigh: "Bardzo Wysoki",
    valueMonths: "miesięcy",
    valueYears: "lat",
    valueNever: "Nigdy",
    valueIncluded: "W cenie",
    valueExtra: "Dodatkowy Koszt",
    
    advantagesTitle: "Kluczowe Zalety",
    advantagesSubtitle: "Dlaczego wiodące instytucje finansowe wybierają FinCore",
    
    adv1Title: "10x Szybsze Przetwarzanie",
    adv1Desc: "Przetwarzaj transakcje w milisekundach zamiast minut. Obsługuj ponad 10 000 transakcji na sekundę z rozliczeniem w czasie rzeczywistym.",
    
    adv2Title: "99.99% Czasu Pracy",
    adv2Desc: "Niezawodność klasy korporacyjnej z redundantną infrastrukturą. Twoje operacje nigdy się nie zatrzymują, nawet podczas konserwacji.",
    
    adv3Title: "Kompleksowe Zarządzanie Klientami",
    adv3Desc: "Śledź salda klientów, zarządzaj limitami kredytowymi i automatyzuj windykację z inteligentnymi przypomnieniami.",
    
    adv4Title: "Doskonałość Wielowalutowa",
    adv4Desc: "Obsługa ponad 150 walut z kursami w czasie rzeczywistym. Automatyczne obliczanie zysków i zarządzanie pozycjami.",
    
    adv5Title: "Gotowość na Zgodność",
    adv5Desc: "Wbudowana weryfikacja KYC/AML, zgodność z FATF i automatyczne raportowanie regulacyjne. Bądź przed wymaganiami.",
    
    adv6Title: "Zero Konserwacji",
    adv6Desc: "Platforma chmurowa z automatycznymi aktualizacjami, kopiami zapasowymi i poprawkami bezpieczeństwa. Zespół IT nie jest wymagany.",
    
    statsTitle: "W Liczbach",
    statsSubtitle: "Prawdziwe wyniki z wdrożeń FinCore",
    
    stat1: "85%",
    stat1Label: "Redukcja kosztów operacyjnych",
    stat2: "10x",
    stat2Label: "Wzrost wolumenu transakcji",
    stat3: "99.9%",
    stat3Label: "Wskaźnik redukcji błędów",
    stat4: "<3",
    stat4Label: "Miesiące do pełnego ROI",
    
    caseTitle: "Wpływ w Rzeczywistości",
    caseSubtitle: "Zobacz, jak firmy przekształciły swoje operacje",
    
    case1Title: "Od Excel do Enterprise",
    case1Before: "Zarządzanie 50 klientami w arkuszach, częste błędy, utracone dane",
    case1After: "Teraz obsługuje ponad 5000 klientów z zerowymi błędami i pełnym śladem audytu",
    case1Time: "Transformacja w 2 tygodnie",
    
    case2Title: "Skalowanie Bez Granic",
    case2Before: "Stary system zawieszał się przy 1000 transakcji dziennie",
    case2After: "Bezproblemowe przetwarzanie ponad 50 000 transakcji dziennie",
    case2Time: "10x wzrost w 6 miesięcy",
    
    case3Title: "Zgodność Stała Łatwa",
    case3Before: "Ręczne raportowanie zajmowało 2 tygodnie miesięcznie",
    case3After: "Automatyczne raporty generowane w sekundy, zawsze zgodne",
    case3Time: "Osiągnięto 100% zgodności",
    
    ctaTitle: "Gotowy na Uaktualnienie?",
    ctaSubtitle: "Dołącz do setek instytucji finansowych, które już przeszły",
    ctaButton: "Rozpocznij Bezpłatny Okres Próbny",
    ctaSecondary: "Zaplanuj Demo",
  },
  ro: {
    pageTitle: "De ce FinCore?",
    pageSubtitle: "Vedeți cum se compară FinCore cu sistemele tradiționale și operațiunile pe hârtie",
    
    heroTitle: "FinCore vs",
    heroTitleHighlight: "Sisteme Tradiționale",
    heroSubtitle: "Luați o decizie informată. Comparați platforma noastră bancară modernă cu sistemele vechi și procesele manuale.",
    
    comparisonTitle: "Comparație Funcții",
    comparisonSubtitle: "Comparație completă a metricilor cheie de afaceri",
    
    systemFinCore: "FinCore",
    systemTraditional: "ERP Tradițional",
    systemPaper: "Hârtie/Excel",
    
    catOperations: "Operațiuni",
    catSecurity: "Securitate",
    catScalability: "Scalabilitate",
    catCompliance: "Conformitate",
    catCost: "Eficiență Costuri",
    catSupport: "Suport",
    
    featureDataEntry: "Viteză Introducere Date",
    featureRealTime: "Procesare în Timp Real",
    featureMultiCurrency: "Suport Multi-valutar",
    featureCustomerTracking: "Urmărire Clienți",
    featureDebtManagement: "Gestionare Datorii",
    featureReporting: "Raportare Automatizată",
    featureIntegration: "Integrare API",
    featureMobile: "Acces Mobil",
    featureEncryption: "Criptare Date",
    featureBackup: "Backup Automat",
    featureAuditLog: "Jurnal Audit",
    feature2FA: "Autentificare Doi Factori",
    featureUnlimitedTx: "Tranzacții Nelimitate",
    featureMultiLocation: "Multi-locație",
    featureCloudBased: "Bazat pe Cloud",
    featureAutoScale: "Scalare Automată",
    featureKYC: "KYC/AML Integrat",
    featureRegulatory: "Rapoarte Reglementare",
    featureGDPR: "Conformitate GDPR",
    featureSWIFT: "Pregătit SWIFT/SEPA",
    featureSetupCost: "Cost Configurare",
    featureMonthly: "Cost Lunar",
    featureHidden: "Taxe Ascunse",
    featureROI: "Cronologie ROI",
    feature24x7: "Suport 24/7",
    featureTraining: "Training Gratuit",
    featureDedicated: "Manager Dedicat",
    featureUpdates: "Actualizări Gratuite",
    
    valueInstant: "Instant",
    valueSlow: "Lent",
    valueManual: "Manual",
    valueYes: "Da",
    valueNo: "Nu",
    valueLimited: "Limitat",
    valueUnlimited: "Nelimitat",
    valueBuiltIn: "Integrat",
    valueAddon: "Suplimentar",
    valueNone: "Niciunul",
    valueLow: "Scăzut",
    valueMedium: "Mediu",
    valueHigh: "Ridicat",
    valueVeryHigh: "Foarte Ridicat",
    valueMonths: "luni",
    valueYears: "ani",
    valueNever: "Niciodată",
    valueIncluded: "Inclus",
    valueExtra: "Cost Suplimentar",
    
    advantagesTitle: "Avantaje Cheie",
    advantagesSubtitle: "De ce instituțiile financiare de top aleg FinCore",
    
    adv1Title: "Procesare de 10x Mai Rapidă",
    adv1Desc: "Procesați tranzacții în milisecunde în loc de minute. Gestionați peste 10.000 de tranzacții pe secundă cu decontare în timp real.",
    
    adv2Title: "99.99% Uptime",
    adv2Desc: "Fiabilitate de nivel enterprise cu infrastructură redundantă. Operațiunile dvs. nu se opresc niciodată, nici măcar în timpul mentenanței.",
    
    adv3Title: "Management Complet al Clienților",
    adv3Desc: "Urmăriți soldurile clienților, gestionați limitele de credit și automatizați colectarea datoriilor cu memento-uri inteligente.",
    
    adv4Title: "Excelență Multi-valutară",
    adv4Desc: "Suport pentru peste 150 de valute cu cursuri în timp real. Calculare automată a profitului și management al pozițiilor.",
    
    adv5Title: "Pregătit pentru Conformitate",
    adv5Desc: "Screening KYC/AML integrat, conformitate FATF și raportare reglementară automatizată. Rămâneți înaintea cerințelor.",
    
    adv6Title: "Zero Mentenanță",
    adv6Desc: "Platformă cloud cu actualizări automate, backup-uri și patch-uri de securitate. Nu este necesară echipă IT.",
    
    statsTitle: "În Cifre",
    statsSubtitle: "Rezultate reale din implementările FinCore",
    
    stat1: "85%",
    stat1Label: "Reducere costuri operaționale",
    stat2: "10x",
    stat2Label: "Creștere volum tranzacții",
    stat3: "99.9%",
    stat3Label: "Rată reducere erori",
    stat4: "<3",
    stat4Label: "Luni până la ROI complet",
    
    caseTitle: "Impact Real",
    caseSubtitle: "Vedeți cum afacerile și-au transformat operațiunile",
    
    case1Title: "De la Excel la Enterprise",
    case1Before: "Gestionarea a 50 de clienți cu foi de calcul, erori frecvente, date pierdute",
    case1After: "Acum gestionează peste 5.000 de clienți cu zero erori și urmărire completă de audit",
    case1Time: "Transformare în 2 săptămâni",
    
    case2Title: "Scalare Fără Limite",
    case2Before: "Sistemul vechi s-a prăbușit la 1.000 de tranzacții zilnice",
    case2After: "Procesare fără probleme a peste 50.000 de tranzacții zilnice",
    case2Time: "Creștere de 10x în 6 luni",
    
    case3Title: "Conformitatea Devine Ușoară",
    case3Before: "Raportare manuală care dura 2 săptămâni lunar",
    case3After: "Rapoarte automate generate în secunde, întotdeauna conforme",
    case3Time: "100% conformitate atinsă",
    
    ctaTitle: "Pregătit pentru Upgrade?",
    ctaSubtitle: "Alăturați-vă sutelor de instituții financiare care au făcut deja trecerea",
    ctaButton: "Începeți Perioada de Probă Gratuită",
    ctaSecondary: "Programați Demo",
  },
  ru: {
    pageTitle: "Почему FinCore?",
    pageSubtitle: "Посмотрите, как FinCore сравнивается с традиционными системами и бумажными операциями",
    
    heroTitle: "FinCore против",
    heroTitleHighlight: "Традиционных Систем",
    heroSubtitle: "Примите обоснованное решение. Сравните нашу современную банковскую платформу с устаревшими системами и ручными процессами.",
    
    comparisonTitle: "Сравнение Функций",
    comparisonSubtitle: "Комплексное сравнение по ключевым бизнес-метрикам",
    
    systemFinCore: "FinCore",
    systemTraditional: "Традиционный ERP",
    systemPaper: "Бумага/Excel",
    
    catOperations: "Операции",
    catSecurity: "Безопасность",
    catScalability: "Масштабируемость",
    catCompliance: "Соответствие",
    catCost: "Эффективность Затрат",
    catSupport: "Поддержка",
    
    featureDataEntry: "Скорость Ввода Данных",
    featureRealTime: "Обработка в Реальном Времени",
    featureMultiCurrency: "Мультивалютная Поддержка",
    featureCustomerTracking: "Отслеживание Клиентов",
    featureDebtManagement: "Управление Задолженностью",
    featureReporting: "Автоматическая Отчетность",
    featureIntegration: "API Интеграция",
    featureMobile: "Мобильный Доступ",
    featureEncryption: "Шифрование Данных",
    featureBackup: "Автоматическое Резервное Копирование",
    featureAuditLog: "Журнал Аудита",
    feature2FA: "Двухфакторная Аутентификация",
    featureUnlimitedTx: "Неограниченные Транзакции",
    featureMultiLocation: "Много Локаций",
    featureCloudBased: "Облачный",
    featureAutoScale: "Автомасштабирование",
    featureKYC: "Встроенный KYC/AML",
    featureRegulatory: "Регуляторные Отчеты",
    featureGDPR: "GDPR Соответствие",
    featureSWIFT: "Готов к SWIFT/SEPA",
    featureSetupCost: "Стоимость Настройки",
    featureMonthly: "Ежемесячная Стоимость",
    featureHidden: "Скрытые Сборы",
    featureROI: "Срок ROI",
    feature24x7: "Поддержка 24/7",
    featureTraining: "Бесплатное Обучение",
    featureDedicated: "Выделенный Менеджер",
    featureUpdates: "Бесплатные Обновления",
    
    valueInstant: "Мгновенно",
    valueSlow: "Медленно",
    valueManual: "Вручную",
    valueYes: "Да",
    valueNo: "Нет",
    valueLimited: "Ограничено",
    valueUnlimited: "Неограничено",
    valueBuiltIn: "Встроено",
    valueAddon: "Дополнительно",
    valueNone: "Нет",
    valueLow: "Низкая",
    valueMedium: "Средняя",
    valueHigh: "Высокая",
    valueVeryHigh: "Очень Высокая",
    valueMonths: "месяцев",
    valueYears: "лет",
    valueNever: "Никогда",
    valueIncluded: "Включено",
    valueExtra: "Дополнительная Стоимость",
    
    advantagesTitle: "Ключевые Преимущества",
    advantagesSubtitle: "Почему ведущие финансовые учреждения выбирают FinCore",
    
    adv1Title: "В 10 Раз Быстрее Обработка",
    adv1Desc: "Обрабатывайте транзакции за миллисекунды вместо минут. Выполняйте 10,000+ транзакций в секунду с расчетом в реальном времени.",
    
    adv2Title: "99.99% Времени Работы",
    adv2Desc: "Надежность корпоративного уровня с резервной инфраструктурой. Ваши операции никогда не останавливаются, даже во время обслуживания.",
    
    adv3Title: "Полное Управление Клиентами",
    adv3Desc: "Отслеживайте балансы клиентов, управляйте кредитными лимитами и автоматизируйте сбор долгов с интеллектуальными напоминаниями.",
    
    adv4Title: "Мультивалютное Совершенство",
    adv4Desc: "Поддержка 150+ валют с курсами в реальном времени. Автоматический расчет прибыли и управление позициями.",
    
    adv5Title: "Готовность к Соответствию",
    adv5Desc: "Встроенная проверка KYC/AML, соответствие FATF и автоматизированная регуляторная отчетность. Будьте впереди требований.",
    
    adv6Title: "Нулевое Обслуживание",
    adv6Desc: "Облачная платформа с автоматическими обновлениями, резервными копиями и патчами безопасности. IT-команда не требуется.",
    
    statsTitle: "В Цифрах",
    statsSubtitle: "Реальные результаты от внедрения FinCore",
    
    stat1: "85%",
    stat1Label: "Снижение операционных затрат",
    stat2: "10x",
    stat2Label: "Увеличение объема транзакций",
    stat3: "99.9%",
    stat3Label: "Уровень снижения ошибок",
    stat4: "<3",
    stat4Label: "Месяцев до полного ROI",
    
    caseTitle: "Реальное Влияние",
    caseSubtitle: "Посмотрите, как бизнесы трансформировали свои операции",
    
    case1Title: "От Excel к Предприятию",
    case1Before: "Управление 50 клиентами в таблицах, частые ошибки, потерянные данные",
    case1After: "Теперь обрабатывает 5,000+ клиентов без ошибок с полным аудиторским следом",
    case1Time: "Трансформация за 2 недели",
    
    case2Title: "Масштабирование Без Границ",
    case2Before: "Старая система падала при 1,000 транзакций в день",
    case2After: "Бесперебойная обработка 50,000+ ежедневных транзакций",
    case2Time: "10x рост за 6 месяцев",
    
    case3Title: "Соответствие Стало Легким",
    case3Before: "Ручная отчетность занимала 2 недели ежемесячно",
    case3After: "Автоматические отчеты генерируются за секунды, всегда соответствующие",
    case3Time: "Достигнуто 100% соответствие",
    
    ctaTitle: "Готовы к Обновлению?",
    ctaSubtitle: "Присоединяйтесь к сотням финансовых учреждений, которые уже перешли",
    ctaButton: "Начать Бесплатную Пробную Версию",
    ctaSecondary: "Запланировать Демо",
  },
};

const comparisonData = [
  // Operations
  { category: "Operations", feature: "featureDataEntry", fincore: "instant", traditional: "slow", paper: "manual" },
  { category: "Operations", feature: "featureRealTime", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Operations", feature: "featureMultiCurrency", fincore: "unlimited", traditional: "limited", paper: "manual" },
  { category: "Operations", feature: "featureCustomerTracking", fincore: "yes", traditional: "limited", paper: "manual" },
  { category: "Operations", feature: "featureDebtManagement", fincore: "builtin", traditional: "addon", paper: "manual" },
  { category: "Operations", feature: "featureReporting", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Operations", feature: "featureIntegration", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Operations", feature: "featureMobile", fincore: "yes", traditional: "addon", paper: "no" },
  
  // Security
  { category: "Security", feature: "featureEncryption", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Security", feature: "featureBackup", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Security", feature: "featureAuditLog", fincore: "yes", traditional: "limited", paper: "no" },
  { category: "Security", feature: "feature2FA", fincore: "yes", traditional: "addon", paper: "no" },
  
  // Scalability
  { category: "Scalability", feature: "featureUnlimitedTx", fincore: "yes", traditional: "no", paper: "no" },
  { category: "Scalability", feature: "featureMultiLocation", fincore: "yes", traditional: "addon", paper: "no" },
  { category: "Scalability", feature: "featureCloudBased", fincore: "yes", traditional: "no", paper: "no" },
  { category: "Scalability", feature: "featureAutoScale", fincore: "yes", traditional: "no", paper: "no" },
  
  // Compliance
  { category: "Compliance", feature: "featureKYC", fincore: "builtin", traditional: "addon", paper: "no" },
  { category: "Compliance", feature: "featureRegulatory", fincore: "yes", traditional: "limited", paper: "manual" },
  { category: "Compliance", feature: "featureGDPR", fincore: "yes", traditional: "addon", paper: "no" },
  { category: "Compliance", feature: "featureSWIFT", fincore: "yes", traditional: "addon", paper: "no" },
  
  // Cost
  { category: "Cost", feature: "featureSetupCost", fincore: "low", traditional: "high", paper: "low" },
  { category: "Cost", feature: "featureMonthly", fincore: "medium", traditional: "veryhigh", paper: "low" },
  { category: "Cost", feature: "featureHidden", fincore: "none", traditional: "high", paper: "medium" },
  { category: "Cost", feature: "featureROI", fincore: "3months", traditional: "2years", paper: "never" },
  
  // Support
  { category: "Support", feature: "feature24x7", fincore: "yes", traditional: "addon", paper: "no" },
  { category: "Support", feature: "featureTraining", fincore: "included", traditional: "extra", paper: "no" },
  { category: "Support", feature: "featureDedicated", fincore: "yes", traditional: "addon", paper: "no" },
  { category: "Support", feature: "featureUpdates", fincore: "included", traditional: "extra", paper: "no" },
];

const FCComparisonPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const isRTL = dir === "rtl";
  const t = translations[language as keyof typeof translations] || translations.en;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const getValue = (value: string) => {
    const valueMap: Record<string, { icon: React.ReactNode; text: string; color: string }> = {
      yes: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueYes, color: "text-green-500" },
      no: { icon: <XCircle className="w-5 h-5" />, text: t.valueNo, color: "text-red-500" },
      limited: { icon: <Minus className="w-5 h-5" />, text: t.valueLimited, color: "text-yellow-500" },
      instant: { icon: <Zap className="w-5 h-5" />, text: t.valueInstant, color: "text-green-500" },
      slow: { icon: <Clock className="w-5 h-5" />, text: t.valueSlow, color: "text-yellow-500" },
      manual: { icon: <FileText className="w-5 h-5" />, text: t.valueManual, color: "text-red-500" },
      unlimited: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueUnlimited, color: "text-green-500" },
      builtin: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueBuiltIn, color: "text-green-500" },
      addon: { icon: <Minus className="w-5 h-5" />, text: t.valueAddon, color: "text-yellow-500" },
      none: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueNone, color: "text-green-500" },
      low: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueLow, color: "text-green-500" },
      medium: { icon: <Minus className="w-5 h-5" />, text: t.valueMedium, color: "text-yellow-500" },
      high: { icon: <AlertTriangle className="w-5 h-5" />, text: t.valueHigh, color: "text-red-500" },
      veryhigh: { icon: <AlertTriangle className="w-5 h-5" />, text: t.valueVeryHigh, color: "text-red-500" },
      "3months": { icon: <CheckCircle2 className="w-5 h-5" />, text: `<3 ${t.valueMonths}`, color: "text-green-500" },
      "2years": { icon: <Clock className="w-5 h-5" />, text: `1-2 ${t.valueYears}`, color: "text-yellow-500" },
      never: { icon: <XCircle className="w-5 h-5" />, text: t.valueNever, color: "text-red-500" },
      included: { icon: <CheckCircle2 className="w-5 h-5" />, text: t.valueIncluded, color: "text-green-500" },
      extra: { icon: <Coins className="w-5 h-5" />, text: t.valueExtra, color: "text-yellow-500" },
    };
    return valueMap[value] || { icon: <Minus className="w-5 h-5" />, text: value, color: "text-slate-500" };
  };

  const getFeatureName = (feature: string) => {
    return t[feature as keyof typeof t] || feature;
  };

  const getCategoryName = (category: string) => {
    const catMap: Record<string, string> = {
      Operations: t.catOperations,
      Security: t.catSecurity,
      Scalability: t.catScalability,
      Compliance: t.catCompliance,
      Cost: t.catCost,
      Support: t.catSupport,
    };
    return catMap[category] || category;
  };

  const groupedData = comparisonData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof comparisonData>);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0A1628] text-white" : "bg-[#FAF8F5] text-slate-900"}`} dir={dir}>
      <FCHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`relative min-h-[50vh] flex items-center overflow-hidden ${
        theme === "dark" 
          ? "bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0A1628]" 
          : "bg-gradient-to-br from-[#FAF8F5] via-white to-[#ecfdf5]"
      }`}>
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl ${
            theme === "dark" ? "bg-emerald-500/5" : "bg-emerald-500/10"
          }`} />
          <div className={`absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-500/5" : "bg-blue-500/10"
          }`} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                theme === "dark" 
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30" 
                  : "bg-teal-100 text-teal-700 border border-teal-200"
              }`}>
                <BarChart3 className="w-4 h-4" />
                {t.pageTitle}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              {t.heroTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">
                {t.heroTitleHighlight}
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}>
              {t.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-slate-900/50" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.statsTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.statsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: t.stat1, label: t.stat1Label, icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                { value: t.stat2, label: t.stat2Label, icon: Zap, color: "from-blue-500 to-cyan-500" },
                { value: t.stat3, label: t.stat3Label, icon: Shield, color: "from-purple-500 to-pink-500" },
                { value: t.stat4, label: t.stat4Label, icon: Clock, color: "from-orange-500 to-yellow-500" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl text-center ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700" 
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.comparisonTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.comparisonSubtitle}
              </p>
            </motion.div>

            {/* Table Header */}
            <motion.div 
              variants={fadeInUp}
              className={`rounded-t-2xl p-4 grid grid-cols-4 gap-4 font-semibold text-center ${
                theme === "dark" 
                  ? "bg-slate-800 border border-slate-700" 
                  : "bg-slate-100 border border-slate-200"
              }`}
            >
              <div className="text-start">{t.comparisonTitle}</div>
              <div className="text-teal-500">{t.systemFinCore}</div>
              <div>{t.systemTraditional}</div>
              <div>{t.systemPaper}</div>
            </motion.div>

            {/* Table Body */}
            {Object.entries(groupedData).map(([category, items], catIdx) => (
              <motion.div key={category} variants={fadeInUp}>
                {/* Category Header */}
                <div className={`p-4 font-semibold ${
                  theme === "dark" 
                    ? "bg-slate-800/50 border-x border-slate-700" 
                    : "bg-slate-50 border-x border-slate-200"
                }`}>
                  {getCategoryName(category)}
                </div>
                
                {/* Category Items */}
                {items.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 grid grid-cols-4 gap-4 items-center ${
                      theme === "dark" 
                        ? "bg-slate-900/30 border-x border-b border-slate-700 hover:bg-slate-800/50" 
                        : "bg-white border-x border-b border-slate-200 hover:bg-slate-50"
                    } transition-colors ${catIdx === Object.keys(groupedData).length - 1 && idx === items.length - 1 ? "rounded-b-2xl" : ""}`}
                  >
                    <div className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                      {getFeatureName(item.feature)}
                    </div>
                    <div className={`flex items-center justify-center gap-2 ${getValue(item.fincore).color}`}>
                      {getValue(item.fincore).icon}
                      <span className="text-sm">{getValue(item.fincore).text}</span>
                    </div>
                    <div className={`flex items-center justify-center gap-2 ${getValue(item.traditional).color}`}>
                      {getValue(item.traditional).icon}
                      <span className="text-sm">{getValue(item.traditional).text}</span>
                    </div>
                    <div className={`flex items-center justify-center gap-2 ${getValue(item.paper).color}`}>
                      {getValue(item.paper).icon}
                      <span className="text-sm">{getValue(item.paper).text}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className={`py-20 ${theme === "dark" ? "bg-slate-900/50" : "bg-slate-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.advantagesTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.advantagesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: t.adv1Title, desc: t.adv1Desc, color: "from-yellow-500 to-orange-500" },
                { icon: Shield, title: t.adv2Title, desc: t.adv2Desc, color: "from-green-500 to-emerald-500" },
                { icon: Users, title: t.adv3Title, desc: t.adv3Desc, color: "from-blue-500 to-cyan-500" },
                { icon: Globe, title: t.adv4Title, desc: t.adv4Desc, color: "from-purple-500 to-pink-500" },
                { icon: Lock, title: t.adv5Title, desc: t.adv5Desc, color: "from-red-500 to-rose-500" },
                { icon: RefreshCcw, title: t.adv6Title, desc: t.adv6Desc, color: "from-teal-500 to-cyan-500" }
              ].map((adv, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-4`}>
                    <adv.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {adv.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.caseTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.caseSubtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: t.case1Title, before: t.case1Before, after: t.case1After, time: t.case1Time, color: "from-blue-500 to-cyan-500" },
                { title: t.case2Title, before: t.case2Before, after: t.case2After, time: t.case2Time, color: "from-green-500 to-emerald-500" },
                { title: t.case3Title, before: t.case3Before, after: t.case3After, time: t.case3Time, color: "from-purple-500 to-pink-500" }
              ].map((caseStudy, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-8 rounded-3xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700" 
                      : "bg-white border border-slate-200 shadow-lg"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center mb-4`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                  
                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-red-500/10 border border-red-500/20" : "bg-red-50 border border-red-100"}`}>
                      <div className="flex items-center gap-2 text-red-500 font-medium mb-1">
                        <XCircle className="w-4 h-4" />
                        Before
                      </div>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {caseStudy.before}
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-100"}`}>
                      <div className="flex items-center gap-2 text-green-500 font-medium mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        After
                      </div>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {caseStudy.after}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`mt-4 pt-4 border-t ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}>
                    <div className="flex items-center gap-2 text-teal-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{caseStudy.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`max-w-4xl mx-auto text-center p-12 rounded-3xl ${
              theme === "dark" 
                ? "bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700" 
                : "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100"
            }`}
          >
            <TrendingUp className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
              >
                {t.ctaButton}
                <Arrow className="w-4 h-4 ms-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className={theme === "dark" ? "border-slate-600 hover:bg-slate-800" : ""}
              >
                {t.ctaSecondary}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FCFooter />
    </div>
  );
};

export default FCComparisonPage;
