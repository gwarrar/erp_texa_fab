import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Factory, Cog, Package, Warehouse, Truck, BarChart3,
  ArrowRight, CheckCircle2, Zap, Shield, Users, Clock,
  Layers, ScanLine, Settings, FileText, Globe, Building2,
  Wrench, Gauge, FlaskConical, Boxes, CircleDollarSign,
  Target, TrendingUp, Award, Cpu, Bot, LineChart
} from "lucide-react";

const translations = {
  en: {
    title: "Industrial Solutions",
    subtitle: "Comprehensive ERP solutions tailored for every manufacturing sector",
    
    // Core Solutions Section
    coreSolutionsTitle: "Core Modules",
    coreSolutionsSubtitle: "Essential modules that power your manufacturing operations",
    
    productionTitle: "Production Management",
    productionDesc: "Complete production planning, scheduling, and execution for manufacturing operations",
    
    inventoryTitle: "Raw Materials & Inventory",
    inventoryDesc: "Real-time tracking and management of raw materials and inventory across all locations",
    
    warehouseTitle: "Warehouse Management",
    warehouseDesc: "Optimize warehouse operations with smart storage, picking, and shipping management",
    
    ordersTitle: "Orders & Reservations",
    ordersDesc: "End-to-end order processing from quote to delivery with customer portal access",
    
    viewDetails: "View Details",
    
    // Hero Stats
    stat1: "25+",
    stat1Label: "Industry Solutions",
    stat2: "500+",
    stat2Label: "Factories Served",
    stat3: "45+",
    stat3Label: "Countries",
    stat4: "99.99%",
    stat4Label: "Uptime",
    
    // Categories
    categoriesTitle: "Solutions by Industry",
    categoriesSubtitle: "Specialized configurations for your specific manufacturing needs",
    
    // Metal & Steel
    metalTitle: "Metal & Steel Manufacturing",
    metalDesc: "Complete solution for steel mills, metal fabrication, and foundries. Track raw materials, production stages, and quality inspections.",
    metalFeatures: ["Melt tracking & batch control", "Quality certifications management", "Heat treatment monitoring", "Coil/sheet tracking"],
    
    // Food & Beverage
    foodTitle: "Food & Beverage Production",
    foodDesc: "HACCP-compliant system for food processing, beverage manufacturing, and packaging operations.",
    foodFeatures: ["Batch traceability", "Expiry date management", "Recipe management", "Quality control checkpoints"],
    
    // Pharmaceutical
    pharmaTitle: "Pharmaceutical Manufacturing",
    pharmaDesc: "GMP-compliant solution for pharmaceutical production with full regulatory documentation.",
    pharmaFeatures: ["Lot genealogy tracking", "FDA 21 CFR Part 11 compliance", "Environmental monitoring", "Deviation management"],
    
    // Automotive
    autoTitle: "Automotive Parts Manufacturing",
    autoDesc: "Precision manufacturing solution for automotive OEMs and tier suppliers.",
    autoFeatures: ["VIN-level tracking", "IATF 16949 compliance", "PPM quality metrics", "Just-in-time delivery"],
    
    // Textile
    textileTitle: "Textile & Garment Manufacturing",
    textileDesc: "End-to-end solution for fabric mills, garment factories, and fashion production.",
    textileFeatures: ["Roll/meter tracking", "Color batch matching", "Cut & sew tracking", "Defect classification"],
    
    // Electronics
    electronicsTitle: "Electronics Manufacturing",
    electronicsDesc: "High-precision solution for PCB assembly, electronics production, and component tracking.",
    electronicsFeatures: ["Component-level tracking", "ESD compliance logging", "Rework management", "Test data integration"],
    
    // Chemicals
    chemicalTitle: "Chemical Processing",
    chemicalDesc: "Process manufacturing solution for chemical plants with safety compliance.",
    chemicalFeatures: ["Formula management", "Safety data sheets", "Environmental compliance", "Hazmat handling"],
    
    // Plastics
    plasticsTitle: "Plastics & Injection Molding",
    plasticsDesc: "Optimized for injection molding, extrusion, and plastic manufacturing operations.",
    plasticsFeatures: ["Mold management", "Cycle time optimization", "Material recycling tracking", "Quality parameters"],
    
    // Key Features Section
    keyFeaturesTitle: "Core Capabilities Across All Solutions",
    keyFeaturesSubtitle: "Every InduCore solution includes these powerful features",
    
    feature1Title: "Production Planning",
    feature1Desc: "AI-powered scheduling and capacity planning for optimal production flow",
    
    feature2Title: "Quality Management",
    feature2Desc: "Built-in QC checkpoints with photo documentation and defect tracking",
    
    feature3Title: "Inventory Control",
    feature3Desc: "Real-time tracking across multiple warehouses with RFID support",
    
    feature4Title: "Cost Tracking",
    feature4Desc: "Accurate unit costing with material, labor, and overhead allocation",
    
    feature5Title: "Analytics & AI",
    feature5Desc: "NEXA AI assistant with predictive insights and custom dashboards",
    
    feature6Title: "Compliance & Audit",
    feature6Desc: "Complete audit trails and regulatory compliance documentation",
    
    // Integration Section
    integrationTitle: "Seamless Integration",
    integrationSubtitle: "Connect with your existing systems and equipment",
    
    integration1: "RFID & Barcode Systems",
    integration2: "PLC & SCADA",
    integration3: "Accounting Software",
    integration4: "E-commerce Platforms",
    integration5: "Shipping Carriers",
    integration6: "CRM Systems",
    
    // CTA Section
    ctaTitle: "Find Your Industry Solution",
    ctaSubtitle: "Schedule a demo to see how InduCore can transform your manufacturing operations",
    ctaButton: "Request Industry Demo",
    ctaSecondary: "Download Brochure",
    
    // Benefits
    benefitsTitle: "Why Industry-Specific Solutions?",
    benefit1: "Pre-configured workflows for your industry",
    benefit2: "Compliance with industry regulations",
    benefit3: "Industry-specific KPIs and metrics",
    benefit4: "Faster implementation time",
    benefit5: "Best practices built-in",
    benefit6: "Specialized support team",
    
    learnMore: "Learn More",
  },
  ar: {
    title: "الحلول الصناعية",
    subtitle: "حلول ERP شاملة مصممة خصيصاً لكل قطاع تصنيعي",
    
    // Core Solutions Section
    coreSolutionsTitle: "الوحدات الأساسية",
    coreSolutionsSubtitle: "الوحدات الأساسية التي تدير عملياتك التصنيعية",
    
    productionTitle: "إدارة الإنتاج",
    productionDesc: "تخطيط وجدولة وتنفيذ الإنتاج الكامل لعمليات التصنيع",
    
    inventoryTitle: "المواد الأولية والمخزون",
    inventoryDesc: "تتبع وإدارة المواد الأولية والمخزون في الوقت الفعلي عبر جميع المواقع",
    
    warehouseTitle: "إدارة المستودعات",
    warehouseDesc: "تحسين عمليات المستودعات مع التخزين الذكي والانتقاء وإدارة الشحن",
    
    ordersTitle: "الطلبات والحجوزات",
    ordersDesc: "معالجة الطلبات من البداية للنهاية من العرض إلى التسليم مع الوصول لبوابة العملاء",
    
    viewDetails: "عرض التفاصيل",
    
    stat1: "+25",
    stat1Label: "حل صناعي",
    stat2: "+500",
    stat2Label: "مصنع مخدوم",
    stat3: "+45",
    stat3Label: "دولة",
    stat4: "99.99%",
    stat4Label: "وقت التشغيل",
    
    categoriesTitle: "الحلول حسب الصناعة",
    categoriesSubtitle: "تكوينات متخصصة لاحتياجات التصنيع الخاصة بك",
    
    metalTitle: "تصنيع المعادن والصلب",
    metalDesc: "حل شامل لمصانع الصلب، تصنيع المعادن، والمسابك. تتبع المواد الخام، مراحل الإنتاج، وفحوصات الجودة.",
    metalFeatures: ["تتبع الصهر والتحكم بالدفعات", "إدارة شهادات الجودة", "مراقبة المعالجة الحرارية", "تتبع اللفائف/الألواح"],
    
    foodTitle: "إنتاج الأغذية والمشروبات",
    foodDesc: "نظام متوافق مع HACCP لمعالجة الأغذية، تصنيع المشروبات، وعمليات التعبئة.",
    foodFeatures: ["تتبع الدفعات", "إدارة تواريخ الانتهاء", "إدارة الوصفات", "نقاط مراقبة الجودة"],
    
    pharmaTitle: "التصنيع الدوائي",
    pharmaDesc: "حل متوافق مع GMP للإنتاج الدوائي مع توثيق تنظيمي كامل.",
    pharmaFeatures: ["تتبع أنساب الدفعات", "امتثال FDA 21 CFR Part 11", "المراقبة البيئية", "إدارة الانحرافات"],
    
    autoTitle: "تصنيع قطع غيار السيارات",
    autoDesc: "حل تصنيع دقيق لمصنعي السيارات الأصليين وموردي المستويات.",
    autoFeatures: ["تتبع على مستوى VIN", "امتثال IATF 16949", "مقاييس جودة PPM", "التسليم في الوقت المحدد"],
    
    textileTitle: "تصنيع النسيج والملابس",
    textileDesc: "حل شامل لمصانع الأقمشة، مصانع الملابس، وإنتاج الأزياء.",
    textileFeatures: ["تتبع اللفائف/الأمتار", "مطابقة دفعات الألوان", "تتبع القص والخياطة", "تصنيف العيوب"],
    
    electronicsTitle: "تصنيع الإلكترونيات",
    electronicsDesc: "حل عالي الدقة لتجميع PCB، إنتاج الإلكترونيات، وتتبع المكونات.",
    electronicsFeatures: ["تتبع على مستوى المكونات", "تسجيل امتثال ESD", "إدارة إعادة العمل", "تكامل بيانات الاختبار"],
    
    chemicalTitle: "المعالجة الكيميائية",
    chemicalDesc: "حل تصنيع العمليات للمصانع الكيميائية مع امتثال السلامة.",
    chemicalFeatures: ["إدارة التركيبات", "صحائف بيانات السلامة", "الامتثال البيئي", "التعامل مع المواد الخطرة"],
    
    plasticsTitle: "البلاستيك والقولبة بالحقن",
    plasticsDesc: "مُحسّن للقولبة بالحقن، البثق، وعمليات تصنيع البلاستيك.",
    plasticsFeatures: ["إدارة القوالب", "تحسين وقت الدورة", "تتبع إعادة تدوير المواد", "معايير الجودة"],
    
    keyFeaturesTitle: "القدرات الأساسية في جميع الحلول",
    keyFeaturesSubtitle: "كل حل من InduCore يتضمن هذه الميزات القوية",
    
    feature1Title: "تخطيط الإنتاج",
    feature1Desc: "جدولة وتخطيط السعة المدعومة بالذكاء الاصطناعي لتدفق إنتاج مثالي",
    
    feature2Title: "إدارة الجودة",
    feature2Desc: "نقاط فحص الجودة المدمجة مع توثيق بالصور وتتبع العيوب",
    
    feature3Title: "مراقبة المخزون",
    feature3Desc: "تتبع في الوقت الفعلي عبر مستودعات متعددة مع دعم RFID",
    
    feature4Title: "تتبع التكاليف",
    feature4Desc: "حساب دقيق لتكلفة الوحدة مع توزيع المواد والعمالة والنفقات العامة",
    
    feature5Title: "التحليلات والذكاء الاصطناعي",
    feature5Desc: "مساعد NEXA AI مع رؤى تنبؤية ولوحات معلومات مخصصة",
    
    feature6Title: "الامتثال والتدقيق",
    feature6Desc: "مسارات تدقيق كاملة وتوثيق الامتثال التنظيمي",
    
    integrationTitle: "تكامل سلس",
    integrationSubtitle: "اتصل بأنظمتك ومعداتك الحالية",
    
    integration1: "أنظمة RFID والباركود",
    integration2: "PLC و SCADA",
    integration3: "برامج المحاسبة",
    integration4: "منصات التجارة الإلكترونية",
    integration5: "شركات الشحن",
    integration6: "أنظمة CRM",
    
    ctaTitle: "اعثر على حل صناعتك",
    ctaSubtitle: "حدد موعد عرض تجريبي لترى كيف يمكن لـ InduCore تحويل عمليات التصنيع لديك",
    ctaButton: "طلب عرض تجريبي للصناعة",
    ctaSecondary: "تحميل الكتيب",
    
    benefitsTitle: "لماذا الحلول الخاصة بالصناعة؟",
    benefit1: "سير عمل مُعد مسبقاً لصناعتك",
    benefit2: "الامتثال للوائح الصناعة",
    benefit3: "مؤشرات أداء ومقاييس خاصة بالصناعة",
    benefit4: "وقت تنفيذ أسرع",
    benefit5: "أفضل الممارسات مدمجة",
    benefit6: "فريق دعم متخصص",
    
    learnMore: "اعرف المزيد",
  },
  tr: {
    title: "Endüstriyel Çözümler",
    subtitle: "Her üretim sektörü için özel olarak tasarlanmış kapsamlı ERP çözümleri",
    
    // Core Solutions Section
    coreSolutionsTitle: "Temel Modüller",
    coreSolutionsSubtitle: "Üretim operasyonlarınızı güçlendiren temel modüller",
    
    productionTitle: "Üretim Yönetimi",
    productionDesc: "Üretim operasyonları için eksiksiz üretim planlama, çizelgeleme ve uygulama",
    
    inventoryTitle: "Hammaddeler ve Envanter",
    inventoryDesc: "Tüm lokasyonlarda hammaddelerin ve envanterin gerçek zamanlı takibi ve yönetimi",
    
    warehouseTitle: "Depo Yönetimi",
    warehouseDesc: "Akıllı depolama, toplama ve sevkiyat yönetimi ile depo operasyonlarını optimize edin",
    
    ordersTitle: "Siparişler ve Rezervasyonlar",
    ordersDesc: "Müşteri portalı erişimi ile tekliften teslimata uçtan uca sipariş işleme",
    
    viewDetails: "Detayları Gör",
    
    stat1: "25+",
    stat1Label: "Sektör Çözümü",
    stat2: "500+",
    stat2Label: "Fabrika",
    stat3: "45+",
    stat3Label: "Ülke",
    stat4: "%99.99",
    stat4Label: "Çalışma Süresi",
    
    categoriesTitle: "Sektöre Göre Çözümler",
    categoriesSubtitle: "Özel üretim ihtiyaçlarınız için uzmanlaşmış yapılandırmalar",
    
    metalTitle: "Metal ve Çelik Üretimi",
    metalDesc: "Çelik fabrikaları, metal işleme ve dökümhaneler için tam çözüm. Hammaddeleri, üretim aşamalarını ve kalite denetimlerini takip edin.",
    metalFeatures: ["Eritme takibi ve parti kontrolü", "Kalite sertifikaları yönetimi", "Isıl işlem izleme", "Rulo/levha takibi"],
    
    foodTitle: "Gıda ve İçecek Üretimi",
    foodDesc: "Gıda işleme, içecek üretimi ve paketleme operasyonları için HACCP uyumlu sistem.",
    foodFeatures: ["Parti izlenebilirliği", "Son kullanma tarihi yönetimi", "Reçete yönetimi", "Kalite kontrol noktaları"],
    
    pharmaTitle: "İlaç Üretimi",
    pharmaDesc: "Tam düzenleyici dokümantasyon ile ilaç üretimi için GMP uyumlu çözüm.",
    pharmaFeatures: ["Lot soy ağacı takibi", "FDA 21 CFR Part 11 uyumu", "Çevresel izleme", "Sapma yönetimi"],
    
    autoTitle: "Otomotiv Parça Üretimi",
    autoDesc: "Otomotiv OEM'leri ve kademe tedarikçileri için hassas üretim çözümü.",
    autoFeatures: ["VIN düzeyinde takip", "IATF 16949 uyumu", "PPM kalite metrikleri", "Tam zamanında teslimat"],
    
    textileTitle: "Tekstil ve Giyim Üretimi",
    textileDesc: "Kumaş fabrikaları, konfeksiyon fabrikaları ve moda üretimi için uçtan uca çözüm.",
    textileFeatures: ["Rulo/metre takibi", "Renk parti eşleştirme", "Kesim ve dikim takibi", "Hata sınıflandırma"],
    
    electronicsTitle: "Elektronik Üretimi",
    electronicsDesc: "PCB montajı, elektronik üretimi ve bileşen takibi için yüksek hassasiyetli çözüm.",
    electronicsFeatures: ["Bileşen düzeyinde takip", "ESD uyum kaydı", "Yeniden işleme yönetimi", "Test verisi entegrasyonu"],
    
    chemicalTitle: "Kimyasal İşleme",
    chemicalDesc: "Güvenlik uyumu ile kimya tesisleri için proses üretim çözümü.",
    chemicalFeatures: ["Formül yönetimi", "Güvenlik veri sayfaları", "Çevresel uyum", "Tehlikeli madde elleçleme"],
    
    plasticsTitle: "Plastik ve Enjeksiyon Kalıplama",
    plasticsDesc: "Enjeksiyon kalıplama, ekstrüzyon ve plastik üretim operasyonları için optimize edilmiş.",
    plasticsFeatures: ["Kalıp yönetimi", "Döngü süresi optimizasyonu", "Malzeme geri dönüşüm takibi", "Kalite parametreleri"],
    
    keyFeaturesTitle: "Tüm Çözümlerdeki Temel Yetenekler",
    keyFeaturesSubtitle: "Her InduCore çözümü bu güçlü özellikleri içerir",
    
    feature1Title: "Üretim Planlaması",
    feature1Desc: "Optimal üretim akışı için AI destekli programlama ve kapasite planlaması",
    
    feature2Title: "Kalite Yönetimi",
    feature2Desc: "Fotoğraf dokümantasyonu ve hata takibi ile yerleşik QC kontrol noktaları",
    
    feature3Title: "Envanter Kontrolü",
    feature3Desc: "RFID desteği ile birden fazla depoda gerçek zamanlı takip",
    
    feature4Title: "Maliyet Takibi",
    feature4Desc: "Malzeme, işçilik ve genel gider tahsisi ile doğru birim maliyetlendirme",
    
    feature5Title: "Analitik ve AI",
    feature5Desc: "Tahmine dayalı içgörüler ve özel panolar ile NEXA AI asistanı",
    
    feature6Title: "Uyum ve Denetim",
    feature6Desc: "Tam denetim izleri ve düzenleyici uyum dokümantasyonu",
    
    integrationTitle: "Kesintisiz Entegrasyon",
    integrationSubtitle: "Mevcut sistemleriniz ve ekipmanlarınızla bağlantı kurun",
    
    integration1: "RFID ve Barkod Sistemleri",
    integration2: "PLC ve SCADA",
    integration3: "Muhasebe Yazılımı",
    integration4: "E-ticaret Platformları",
    integration5: "Kargo Taşıyıcıları",
    integration6: "CRM Sistemleri",
    
    ctaTitle: "Sektör Çözümünüzü Bulun",
    ctaSubtitle: "InduCore'un üretim operasyonlarınızı nasıl dönüştürebileceğini görmek için demo planlayın",
    ctaButton: "Sektör Demosu Talep Et",
    ctaSecondary: "Broşür İndir",
    
    benefitsTitle: "Neden Sektöre Özel Çözümler?",
    benefit1: "Sektörünüz için önceden yapılandırılmış iş akışları",
    benefit2: "Sektör düzenlemelerine uyum",
    benefit3: "Sektöre özel KPI'lar ve metrikler",
    benefit4: "Daha hızlı uygulama süresi",
    benefit5: "Yerleşik en iyi uygulamalar",
    benefit6: "Uzman destek ekibi",
    
    learnMore: "Daha Fazla Bilgi",
  },
  de: {
    title: "Industrielle Lösungen",
    subtitle: "Umfassende ERP-Lösungen für jeden Fertigungssektor maßgeschneidert",
    
    coreSolutionsTitle: "Kernmodule",
    coreSolutionsSubtitle: "Wesentliche Module für Ihre Fertigungsoperationen",
    productionTitle: "Produktionsmanagement",
    productionDesc: "Vollständige Produktionsplanung, -terminierung und -ausführung für Fertigungsoperationen",
    inventoryTitle: "Rohstoffe & Bestand",
    inventoryDesc: "Echtzeit-Verfolgung und -Verwaltung von Rohstoffen und Beständen über alle Standorte",
    warehouseTitle: "Lagerverwaltung",
    warehouseDesc: "Optimieren Sie Lageroperationen mit intelligenter Lagerung, Kommissionierung und Versandverwaltung",
    ordersTitle: "Aufträge & Reservierungen",
    ordersDesc: "End-to-End-Auftragsabwicklung vom Angebot bis zur Lieferung mit Kundenportalzugang",
    viewDetails: "Details anzeigen",
    
    stat1: "25+",
    stat1Label: "Branchenlösungen",
    stat2: "500+",
    stat2Label: "Fabriken",
    stat3: "45+",
    stat3Label: "Länder",
    stat4: "99,99%",
    stat4Label: "Betriebszeit",
    
    categoriesTitle: "Lösungen nach Branche",
    categoriesSubtitle: "Spezialisierte Konfigurationen für Ihre spezifischen Fertigungsanforderungen",
    
    metalTitle: "Metall- und Stahlherstellung",
    metalDesc: "Komplettlösung für Stahlwerke, Metallverarbeitung und Gießereien. Verfolgen Sie Rohstoffe, Produktionsstufen und Qualitätsprüfungen.",
    metalFeatures: ["Schmelzverfolgung & Chargenkontrolle", "Qualitätszertifikat-Management", "Wärmebehandlungsüberwachung", "Coil/Blech-Verfolgung"],
    
    foodTitle: "Lebensmittel- und Getränkeproduktion",
    foodDesc: "HACCP-konformes System für Lebensmittelverarbeitung, Getränkeherstellung und Verpackungsbetriebe.",
    foodFeatures: ["Chargenrückverfolgbarkeit", "Verfallsdatum-Management", "Rezeptverwaltung", "Qualitätskontrollpunkte"],
    
    pharmaTitle: "Pharmazeutische Herstellung",
    pharmaDesc: "GMP-konforme Lösung für die Pharmaproduktion mit vollständiger regulatorischer Dokumentation.",
    pharmaFeatures: ["Lot-Stammbaum-Verfolgung", "FDA 21 CFR Part 11 Konformität", "Umweltüberwachung", "Abweichungsmanagement"],
    
    autoTitle: "Automobilteilefertigung",
    autoDesc: "Präzisionsfertigungslösung für Automobil-OEMs und Tier-Zulieferer.",
    autoFeatures: ["VIN-Level-Tracking", "IATF 16949 Konformität", "PPM-Qualitätsmetriken", "Just-in-Time-Lieferung"],
    
    textileTitle: "Textil- und Bekleidungsherstellung",
    textileDesc: "End-to-End-Lösung für Stoffmühlen, Bekleidungsfabriken und Modeproduktion.",
    textileFeatures: ["Rollen/Meter-Verfolgung", "Farbchargen-Abgleich", "Zuschnitt & Nähen-Verfolgung", "Fehlerklassifizierung"],
    
    electronicsTitle: "Elektronikfertigung",
    electronicsDesc: "Hochpräzisionslösung für PCB-Montage, Elektronikproduktion und Komponentenverfolgung.",
    electronicsFeatures: ["Komponentenebene-Verfolgung", "ESD-Konformitätsprotokollierung", "Nacharbeitsmanagement", "Testdatenintegration"],
    
    chemicalTitle: "Chemische Verarbeitung",
    chemicalDesc: "Prozessfertigungslösung für Chemieanlagen mit Sicherheitskonformität.",
    chemicalFeatures: ["Formelmanagement", "Sicherheitsdatenblätter", "Umweltkonformität", "Gefahrguthandling"],
    
    plasticsTitle: "Kunststoff & Spritzguss",
    plasticsDesc: "Optimiert für Spritzguss, Extrusion und Kunststofffertigungsabläufe.",
    plasticsFeatures: ["Formwerkzeugmanagement", "Zykluszeitoptimierung", "Materialrecycling-Verfolgung", "Qualitätsparameter"],
    
    keyFeaturesTitle: "Kernfähigkeiten in allen Lösungen",
    keyFeaturesSubtitle: "Jede InduCore-Lösung enthält diese leistungsstarken Funktionen",
    
    feature1Title: "Produktionsplanung",
    feature1Desc: "KI-gestützte Terminierung und Kapazitätsplanung für optimalen Produktionsfluss",
    
    feature2Title: "Qualitätsmanagement",
    feature2Desc: "Integrierte QC-Kontrollpunkte mit Fotodokumentation und Fehlerverfolgung",
    
    feature3Title: "Bestandskontrolle",
    feature3Desc: "Echtzeit-Tracking über mehrere Lager mit RFID-Unterstützung",
    
    feature4Title: "Kostenverfolgung",
    feature4Desc: "Genaue Stückkostenkalkulation mit Material-, Arbeits- und Gemeinkostenzuweisung",
    
    feature5Title: "Analytik & KI",
    feature5Desc: "NEXA KI-Assistent mit prädiktiven Erkenntnissen und benutzerdefinierten Dashboards",
    
    feature6Title: "Compliance & Audit",
    feature6Desc: "Vollständige Audit-Trails und regulatorische Compliance-Dokumentation",
    
    integrationTitle: "Nahtlose Integration",
    integrationSubtitle: "Verbinden Sie sich mit Ihren bestehenden Systemen und Anlagen",
    
    integration1: "RFID- & Barcode-Systeme",
    integration2: "PLC & SCADA",
    integration3: "Buchhaltungssoftware",
    integration4: "E-Commerce-Plattformen",
    integration5: "Versanddienstleister",
    integration6: "CRM-Systeme",
    
    ctaTitle: "Finden Sie Ihre Branchenlösung",
    ctaSubtitle: "Vereinbaren Sie eine Demo, um zu sehen, wie InduCore Ihre Fertigungsabläufe transformieren kann",
    ctaButton: "Branchen-Demo anfordern",
    ctaSecondary: "Broschüre herunterladen",
    
    benefitsTitle: "Warum branchenspezifische Lösungen?",
    benefit1: "Vorkonfigurierte Workflows für Ihre Branche",
    benefit2: "Konformität mit Branchenvorschriften",
    benefit3: "Branchenspezifische KPIs und Metriken",
    benefit4: "Schnellere Implementierungszeit",
    benefit5: "Best Practices integriert",
    benefit6: "Spezialisiertes Support-Team",
    
    learnMore: "Mehr erfahren",
  },
  pl: {
    title: "Rozwiązania Przemysłowe",
    subtitle: "Kompleksowe rozwiązania ERP dostosowane do każdego sektora produkcyjnego",
    
    coreSolutionsTitle: "Moduły Podstawowe",
    coreSolutionsSubtitle: "Podstawowe moduły zarządzające operacjami produkcyjnymi",
    productionTitle: "Zarządzanie Produkcją",
    productionDesc: "Kompletne planowanie, harmonogramowanie i realizacja produkcji",
    inventoryTitle: "Surowce i Zapasy",
    inventoryDesc: "Śledzenie i zarządzanie surowcami i zapasami w czasie rzeczywistym we wszystkich lokalizacjach",
    warehouseTitle: "Zarządzanie Magazynem",
    warehouseDesc: "Optymalizacja operacji magazynowych z inteligentnym składowaniem, kompletacją i zarządzaniem wysyłką",
    ordersTitle: "Zamówienia i Rezerwacje",
    ordersDesc: "Kompleksowe przetwarzanie zamówień od oferty do dostawy z dostępem do portalu klienta",
    viewDetails: "Zobacz szczegóły",
    
    stat1: "25+",
    stat1Label: "Rozwiązań Branżowych",
    stat2: "500+",
    stat2Label: "Fabryk",
    stat3: "45+",
    stat3Label: "Krajów",
    stat4: "99,99%",
    stat4Label: "Dostępność",
    
    categoriesTitle: "Rozwiązania według Branży",
    categoriesSubtitle: "Specjalistyczne konfiguracje dla Twoich potrzeb produkcyjnych",
    
    metalTitle: "Produkcja Metali i Stali",
    metalDesc: "Kompletne rozwiązanie dla hut stali, obróbki metali i odlewni. Śledź surowce, etapy produkcji i kontrole jakości.",
    metalFeatures: ["Śledzenie topienia i kontrola partii", "Zarządzanie certyfikatami jakości", "Monitoring obróbki cieplnej", "Śledzenie zwojów/arkuszy"],
    
    foodTitle: "Produkcja Żywności i Napojów",
    foodDesc: "System zgodny z HACCP dla przetwórstwa żywności, produkcji napojów i operacji pakowania.",
    foodFeatures: ["Identyfikowalność partii", "Zarządzanie datami ważności", "Zarządzanie recepturami", "Punkty kontroli jakości"],
    
    pharmaTitle: "Produkcja Farmaceutyczna",
    pharmaDesc: "Rozwiązanie zgodne z GMP dla produkcji farmaceutycznej z pełną dokumentacją regulacyjną.",
    pharmaFeatures: ["Śledzenie genealogii partii", "Zgodność z FDA 21 CFR Part 11", "Monitoring środowiskowy", "Zarządzanie odchyleniami"],
    
    autoTitle: "Produkcja Części Samochodowych",
    autoDesc: "Precyzyjne rozwiązanie produkcyjne dla OEM motoryzacyjnych i dostawców tier.",
    autoFeatures: ["Śledzenie na poziomie VIN", "Zgodność z IATF 16949", "Metryki jakości PPM", "Dostawa just-in-time"],
    
    textileTitle: "Produkcja Tekstyliów i Odzieży",
    textileDesc: "Kompleksowe rozwiązanie dla zakładów tkanin, fabryk odzieży i produkcji modowej.",
    textileFeatures: ["Śledzenie rolek/metrów", "Dopasowanie partii kolorów", "Śledzenie krojenia i szycia", "Klasyfikacja defektów"],
    
    electronicsTitle: "Produkcja Elektroniki",
    electronicsDesc: "Wysokoprecyzyjne rozwiązanie dla montażu PCB, produkcji elektroniki i śledzenia komponentów.",
    electronicsFeatures: ["Śledzenie na poziomie komponentów", "Rejestrowanie zgodności ESD", "Zarządzanie naprawami", "Integracja danych testowych"],
    
    chemicalTitle: "Przetwórstwo Chemiczne",
    chemicalDesc: "Rozwiązanie produkcji procesowej dla zakładów chemicznych z zgodnością bezpieczeństwa.",
    chemicalFeatures: ["Zarządzanie formułami", "Karty charakterystyki", "Zgodność środowiskowa", "Obsługa materiałów niebezpiecznych"],
    
    plasticsTitle: "Plastyki i Formowanie Wtryskowe",
    plasticsDesc: "Zoptymalizowane dla formowania wtryskowego, ekstruzji i operacji produkcji tworzyw sztucznych.",
    plasticsFeatures: ["Zarządzanie formami", "Optymalizacja czasu cyklu", "Śledzenie recyklingu materiałów", "Parametry jakości"],
    
    keyFeaturesTitle: "Kluczowe Możliwości we Wszystkich Rozwiązaniach",
    keyFeaturesSubtitle: "Każde rozwiązanie InduCore zawiera te potężne funkcje",
    
    feature1Title: "Planowanie Produkcji",
    feature1Desc: "Harmonogramowanie i planowanie mocy wspomagane AI dla optymalnego przepływu produkcji",
    
    feature2Title: "Zarządzanie Jakością",
    feature2Desc: "Wbudowane punkty kontroli QC z dokumentacją fotograficzną i śledzeniem defektów",
    
    feature3Title: "Kontrola Zapasów",
    feature3Desc: "Śledzenie w czasie rzeczywistym w wielu magazynach z obsługą RFID",
    
    feature4Title: "Śledzenie Kosztów",
    feature4Desc: "Dokładne kalkulowanie kosztu jednostkowego z alokacją materiałów, pracy i kosztów ogólnych",
    
    feature5Title: "Analityka i AI",
    feature5Desc: "Asystent NEXA AI z predykcyjnymi spostrzeżeniami i niestandardowymi pulpitami",
    
    feature6Title: "Zgodność i Audyt",
    feature6Desc: "Pełne ścieżki audytu i dokumentacja zgodności regulacyjnej",
    
    integrationTitle: "Bezproblemowa Integracja",
    integrationSubtitle: "Połącz się z istniejącymi systemami i sprzętem",
    
    integration1: "Systemy RFID i Kodów Kreskowych",
    integration2: "PLC i SCADA",
    integration3: "Oprogramowanie Księgowe",
    integration4: "Platformy E-commerce",
    integration5: "Przewoźnicy",
    integration6: "Systemy CRM",
    
    ctaTitle: "Znajdź Rozwiązanie dla Swojej Branży",
    ctaSubtitle: "Umów demo, aby zobaczyć jak InduCore może przekształcić Twoje operacje produkcyjne",
    ctaButton: "Zamów Demo Branżowe",
    ctaSecondary: "Pobierz Broszurę",
    
    benefitsTitle: "Dlaczego Rozwiązania Specyficzne dla Branży?",
    benefit1: "Wstępnie skonfigurowane przepływy pracy dla Twojej branży",
    benefit2: "Zgodność z regulacjami branżowymi",
    benefit3: "Specyficzne dla branży KPI i metryki",
    benefit4: "Szybszy czas wdrożenia",
    benefit5: "Wbudowane najlepsze praktyki",
    benefit6: "Wyspecjalizowany zespół wsparcia",
    
    learnMore: "Dowiedz się więcej",
  },
  ro: {
    title: "Soluții Industriale",
    subtitle: "Soluții ERP complete adaptate pentru fiecare sector de producție",
    
    coreSolutionsTitle: "Module de Bază",
    coreSolutionsSubtitle: "Module esențiale care gestionează operațiunile dvs. de producție",
    productionTitle: "Managementul Producției",
    productionDesc: "Planificarea, programarea și execuția completă a producției pentru operațiuni de producție",
    inventoryTitle: "Materii Prime și Stocuri",
    inventoryDesc: "Urmărirea și gestionarea în timp real a materiilor prime și stocurilor în toate locațiile",
    warehouseTitle: "Managementul Depozitului",
    warehouseDesc: "Optimizați operațiunile de depozit cu depozitare inteligentă, picking și gestionarea expedierii",
    ordersTitle: "Comenzi și Rezervări",
    ordersDesc: "Procesarea comenzilor de la cotație la livrare cu acces la portalul clienților",
    viewDetails: "Vezi detalii",
    
    stat1: "25+",
    stat1Label: "Soluții de Industrie",
    stat2: "500+",
    stat2Label: "Fabrici",
    stat3: "45+",
    stat3Label: "Țări",
    stat4: "99,99%",
    stat4Label: "Disponibilitate",
    
    categoriesTitle: "Soluții pe Industrie",
    categoriesSubtitle: "Configurații specializate pentru nevoile dvs. specifice de producție",
    
    metalTitle: "Producția de Metal și Oțel",
    metalDesc: "Soluție completă pentru oțelării, fabricație metalică și turnătorii. Urmăriți materiile prime, etapele de producție și inspecțiile de calitate.",
    metalFeatures: ["Urmărirea topirii și controlul loturilor", "Gestionarea certificărilor de calitate", "Monitorizarea tratamentului termic", "Urmărirea bobinelor/tablelor"],
    
    foodTitle: "Producția de Alimente și Băuturi",
    foodDesc: "Sistem conform HACCP pentru prelucrarea alimentelor, producția de băuturi și operațiunile de ambalare.",
    foodFeatures: ["Trasabilitatea loturilor", "Gestionarea datelor de expirare", "Gestionarea rețetelor", "Puncte de control al calității"],
    
    pharmaTitle: "Producția Farmaceutică",
    pharmaDesc: "Soluție conformă GMP pentru producția farmaceutică cu documentație regulamentară completă.",
    pharmaFeatures: ["Urmărirea genealogiei loturilor", "Conformitate FDA 21 CFR Part 11", "Monitorizare de mediu", "Gestionarea abaterilor"],
    
    autoTitle: "Producția de Piese Auto",
    autoDesc: "Soluție de producție de precizie pentru OEM-uri auto și furnizori tier.",
    autoFeatures: ["Urmărire la nivel VIN", "Conformitate IATF 16949", "Metrici de calitate PPM", "Livrare just-in-time"],
    
    textileTitle: "Producția de Textile și Îmbrăcăminte",
    textileDesc: "Soluție end-to-end pentru fabrici de țesături, fabrici de confecții și producția de modă.",
    textileFeatures: ["Urmărirea rolelor/metrilor", "Potrivirea loturilor de culoare", "Urmărirea croirii și coaserii", "Clasificarea defectelor"],
    
    electronicsTitle: "Producția de Electronice",
    electronicsDesc: "Soluție de înaltă precizie pentru asamblarea PCB, producția de electronice și urmărirea componentelor.",
    electronicsFeatures: ["Urmărire la nivel de componentă", "Înregistrarea conformității ESD", "Gestionarea recondiționării", "Integrarea datelor de test"],
    
    chemicalTitle: "Prelucrare Chimică",
    chemicalDesc: "Soluție de producție de proces pentru uzine chimice cu conformitate de siguranță.",
    chemicalFeatures: ["Gestionarea formulelor", "Fișe tehnice de siguranță", "Conformitate de mediu", "Manipularea materialelor periculoase"],
    
    plasticsTitle: "Plastic și Turnare prin Injecție",
    plasticsDesc: "Optimizat pentru turnare prin injecție, extrudare și operațiuni de producție de plastic.",
    plasticsFeatures: ["Gestionarea matrițelor", "Optimizarea timpului de ciclu", "Urmărirea reciclării materialelor", "Parametri de calitate"],
    
    keyFeaturesTitle: "Capabilități de Bază în Toate Soluțiile",
    keyFeaturesSubtitle: "Fiecare soluție InduCore include aceste funcții puternice",
    
    feature1Title: "Planificarea Producției",
    feature1Desc: "Programare și planificare a capacității bazată pe AI pentru flux optim de producție",
    
    feature2Title: "Managementul Calității",
    feature2Desc: "Puncte de control QC integrate cu documentație foto și urmărirea defectelor",
    
    feature3Title: "Controlul Stocurilor",
    feature3Desc: "Urmărire în timp real în mai multe depozite cu suport RFID",
    
    feature4Title: "Urmărirea Costurilor",
    feature4Desc: "Calcularea precisă a costului unitar cu alocarea materialelor, forței de muncă și cheltuielilor generale",
    
    feature5Title: "Analitică și AI",
    feature5Desc: "Asistent NEXA AI cu perspective predictive și tablouri de bord personalizate",
    
    feature6Title: "Conformitate și Audit",
    feature6Desc: "Trasee complete de audit și documentație de conformitate regulamentară",
    
    integrationTitle: "Integrare Perfectă",
    integrationSubtitle: "Conectați-vă cu sistemele și echipamentele existente",
    
    integration1: "Sisteme RFID și Coduri de Bare",
    integration2: "PLC și SCADA",
    integration3: "Software de Contabilitate",
    integration4: "Platforme E-commerce",
    integration5: "Transportatori",
    integration6: "Sisteme CRM",
    
    ctaTitle: "Găsiți Soluția pentru Industria Dvs.",
    ctaSubtitle: "Programați o demonstrație pentru a vedea cum InduCore poate transforma operațiunile de producție",
    ctaButton: "Solicitați Demo Industrial",
    ctaSecondary: "Descărcați Broșura",
    
    benefitsTitle: "De Ce Soluții Specifice Industriei?",
    benefit1: "Fluxuri de lucru preconfigurate pentru industria dvs.",
    benefit2: "Conformitate cu reglementările industriei",
    benefit3: "KPI-uri și metrici specifice industriei",
    benefit4: "Timp de implementare mai rapid",
    benefit5: "Cele mai bune practici integrate",
    benefit6: "Echipă de suport specializată",
    
    learnMore: "Aflați mai multe",
  },
  ru: {
    title: "Промышленные Решения",
    subtitle: "Комплексные ERP-решения, адаптированные для каждого производственного сектора",
    
    // Core Solutions Section
    coreSolutionsTitle: "Основные Модули",
    coreSolutionsSubtitle: "Основные модули для управления вашими производственными операциями",
    
    productionTitle: "Управление Производством",
    productionDesc: "Полное планирование, составление графиков и выполнение производственных операций",
    
    inventoryTitle: "Сырьё и Запасы",
    inventoryDesc: "Отслеживание и управление сырьём и запасами в реальном времени во всех локациях",
    
    warehouseTitle: "Управление Складом",
    warehouseDesc: "Оптимизация складских операций с умным хранением, комплектацией и управлением отгрузкой",
    
    ordersTitle: "Заказы и Бронирования",
    ordersDesc: "Сквозная обработка заказов от предложения до доставки с доступом к клиентскому порталу",
    
    viewDetails: "Подробнее",
    
    stat1: "25+",
    stat1Label: "Отраслевых Решений",
    stat2: "500+",
    stat2Label: "Заводов",
    stat3: "45+",
    stat3Label: "Стран",
    stat4: "99,99%",
    stat4Label: "Время Работы",
    
    categoriesTitle: "Решения по Отраслям",
    categoriesSubtitle: "Специализированные конфигурации для ваших производственных потребностей",
    
    metalTitle: "Производство Металла и Стали",
    metalDesc: "Комплексное решение для сталелитейных заводов, металлообработки и литейных. Отслеживайте сырье, этапы производства и проверки качества.",
    metalFeatures: ["Отслеживание плавки и контроль партий", "Управление сертификатами качества", "Мониторинг термообработки", "Отслеживание рулонов/листов"],
    
    foodTitle: "Производство Продуктов Питания и Напитков",
    foodDesc: "HACCP-совместимая система для пищевой переработки, производства напитков и упаковочных операций.",
    foodFeatures: ["Прослеживаемость партий", "Управление сроками годности", "Управление рецептурами", "Контрольные точки качества"],
    
    pharmaTitle: "Фармацевтическое Производство",
    pharmaDesc: "GMP-совместимое решение для фармацевтического производства с полной регуляторной документацией.",
    pharmaFeatures: ["Отслеживание родословной партий", "Соответствие FDA 21 CFR Part 11", "Экологический мониторинг", "Управление отклонениями"],
    
    autoTitle: "Производство Автозапчастей",
    autoDesc: "Прецизионное производственное решение для автомобильных OEM и поставщиков уровней.",
    autoFeatures: ["Отслеживание на уровне VIN", "Соответствие IATF 16949", "Метрики качества PPM", "Доставка точно в срок"],
    
    textileTitle: "Производство Текстиля и Одежды",
    textileDesc: "Комплексное решение для текстильных фабрик, швейных фабрик и модного производства.",
    textileFeatures: ["Отслеживание рулонов/метров", "Сопоставление цветовых партий", "Отслеживание раскроя и пошива", "Классификация дефектов"],
    
    electronicsTitle: "Производство Электроники",
    electronicsDesc: "Высокоточное решение для сборки печатных плат, производства электроники и отслеживания компонентов.",
    electronicsFeatures: ["Отслеживание на уровне компонентов", "Регистрация соответствия ESD", "Управление доработками", "Интеграция тестовых данных"],
    
    chemicalTitle: "Химическая Переработка",
    chemicalDesc: "Решение для процессного производства на химических предприятиях с соблюдением требований безопасности.",
    chemicalFeatures: ["Управление формулами", "Паспорта безопасности", "Экологическое соответствие", "Обращение с опасными материалами"],
    
    plasticsTitle: "Пластик и Литье под Давлением",
    plasticsDesc: "Оптимизировано для литья под давлением, экструзии и операций по производству пластика.",
    plasticsFeatures: ["Управление пресс-формами", "Оптимизация времени цикла", "Отслеживание переработки материалов", "Параметры качества"],
    
    keyFeaturesTitle: "Основные Возможности во Всех Решениях",
    keyFeaturesSubtitle: "Каждое решение InduCore включает эти мощные функции",
    
    feature1Title: "Планирование Производства",
    feature1Desc: "AI-планирование и планирование мощностей для оптимального производственного потока",
    
    feature2Title: "Управление Качеством",
    feature2Desc: "Встроенные контрольные точки QC с фотодокументацией и отслеживанием дефектов",
    
    feature3Title: "Контроль Запасов",
    feature3Desc: "Отслеживание в реальном времени на нескольких складах с поддержкой RFID",
    
    feature4Title: "Отслеживание Затрат",
    feature4Desc: "Точный расчет себестоимости единицы с распределением материалов, труда и накладных расходов",
    
    feature5Title: "Аналитика и AI",
    feature5Desc: "AI-ассистент NEXA с прогнозными insights и настраиваемыми панелями",
    
    feature6Title: "Соответствие и Аудит",
    feature6Desc: "Полные аудиторские следы и документация регуляторного соответствия",
    
    integrationTitle: "Бесшовная Интеграция",
    integrationSubtitle: "Подключитесь к существующим системам и оборудованию",
    
    integration1: "Системы RFID и Штрих-кодов",
    integration2: "PLC и SCADA",
    integration3: "Бухгалтерское ПО",
    integration4: "Платформы E-commerce",
    integration5: "Транспортные Компании",
    integration6: "CRM Системы",
    
    ctaTitle: "Найдите Решение для Вашей Отрасли",
    ctaSubtitle: "Запланируйте демонстрацию, чтобы увидеть, как InduCore может трансформировать ваше производство",
    ctaButton: "Запросить Отраслевую Демо",
    ctaSecondary: "Скачать Брошюру",
    
    benefitsTitle: "Почему Отраслевые Решения?",
    benefit1: "Предварительно настроенные рабочие процессы для вашей отрасли",
    benefit2: "Соответствие отраслевым нормам",
    benefit3: "Отраслевые KPI и метрики",
    benefit4: "Быстрое время внедрения",
    benefit5: "Встроенные лучшие практики",
    benefit6: "Специализированная команда поддержки",
    
    learnMore: "Узнать больше",
  },
};

const industrySolutions = [
  { key: "metal", href: "/inducore/solutions/metal-steel", icon: Cog, color: "slate", gradient: "from-slate-500 to-slate-700" },
  { key: "food", href: "/inducore/solutions/food-beverage", icon: FlaskConical, color: "green", gradient: "from-green-500 to-emerald-600" },
  { key: "pharma", href: "/inducore/solutions/pharmaceutical", icon: FlaskConical, color: "blue", gradient: "from-blue-500 to-indigo-600" },
  { key: "auto", href: "/inducore/solutions/automotive", icon: Truck, color: "orange", gradient: "from-orange-500 to-red-600" },
  { key: "textile", href: "/inducore/solutions/textile", icon: Layers, color: "purple", gradient: "from-purple-500 to-pink-600" },
  { key: "electronics", href: "/inducore/solutions/electronics", icon: Cpu, color: "cyan", gradient: "from-cyan-500 to-blue-600" },
  { key: "chemical", href: "/inducore/solutions/chemical", icon: FlaskConical, color: "yellow", gradient: "from-amber-500 to-yellow-600" },
  { key: "plastics", href: "/inducore/solutions/plastics", icon: Boxes, color: "pink", gradient: "from-rose-500 to-pink-600" },
];

export default function ICSolutionsPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  const keyFeatures = [
    { title: t.feature1Title, desc: t.feature1Desc, icon: Settings },
    { title: t.feature2Title, desc: t.feature2Desc, icon: Shield },
    { title: t.feature3Title, desc: t.feature3Desc, icon: Warehouse },
    { title: t.feature4Title, desc: t.feature4Desc, icon: CircleDollarSign },
    { title: t.feature5Title, desc: t.feature5Desc, icon: Bot },
    { title: t.feature6Title, desc: t.feature6Desc, icon: FileText },
  ];

  const integrations = [
    { name: t.integration1, icon: ScanLine },
    { name: t.integration2, icon: Cpu },
    { name: t.integration3, icon: FileText },
    { name: t.integration4, icon: Globe },
    { name: t.integration5, icon: Truck },
    { name: t.integration6, icon: Users },
  ];

  const getSolutionData = (key: string) => {
    switch (key) {
      case "metal":
        return { title: t.metalTitle, desc: t.metalDesc, features: t.metalFeatures };
      case "food":
        return { title: t.foodTitle, desc: t.foodDesc, features: t.foodFeatures };
      case "pharma":
        return { title: t.pharmaTitle, desc: t.pharmaDesc, features: t.pharmaFeatures };
      case "auto":
        return { title: t.autoTitle, desc: t.autoDesc, features: t.autoFeatures };
      case "textile":
        return { title: t.textileTitle, desc: t.textileDesc, features: t.textileFeatures };
      case "electronics":
        return { title: t.electronicsTitle, desc: t.electronicsDesc, features: t.electronicsFeatures };
      case "chemical":
        return { title: t.chemicalTitle, desc: t.chemicalDesc, features: t.chemicalFeatures };
      case "plastics":
        return { title: t.plasticsTitle, desc: t.plasticsDesc, features: t.plasticsFeatures };
      default:
        return { title: "", desc: "", features: [] };
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-red-900 via-red-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
              <Factory className="w-4 h-4" />
              <span>Manufacturing ERP Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              {t.subtitle}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: t.stat1, label: t.stat1Label },
                { value: t.stat2, label: t.stat2Label },
                { value: t.stat3, label: t.stat3Label },
                { value: t.stat4, label: t.stat4Label },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur rounded-xl p-4"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.coreSolutionsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.coreSolutionsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                href: "/inducore/solutions/production", 
                title: t.productionTitle, 
                desc: t.productionDesc, 
                icon: Factory,
                gradient: "from-red-500 to-orange-500"
              },
              { 
                href: "/inducore/solutions/inventory", 
                title: t.inventoryTitle, 
                desc: t.inventoryDesc, 
                icon: Package,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                href: "/inducore/solutions/warehouse", 
                title: t.warehouseTitle, 
                desc: t.warehouseDesc, 
                icon: Warehouse,
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                href: "/inducore/solutions/orders", 
                title: t.ordersTitle, 
                desc: t.ordersDesc, 
                icon: Layers,
                gradient: "from-purple-500 to-pink-500"
              },
            ].map((solution, i) => (
              <motion.div
                key={solution.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={solution.href}>
                  <Card className="h-full p-6 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:border-red-200 dark:hover:border-red-800/50 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {solution.desc}
                    </p>
                    <div className="flex items-center gap-2 text-red-800 dark:text-red-400 text-sm font-medium">
                      {t.viewDetails}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.categoriesTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.categoriesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, i) => {
              const data = getSolutionData(solution.key);
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={solution.key}
                  id={solution.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full p-6 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {data.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {data.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {solution.href ? (
                      <Link to={solution.href}>
                        <Button variant="outline" className="w-full mt-auto group hover:bg-red-50 hover:text-red-800 hover:border-red-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 dark:hover:border-red-800">
                          {t.learnMore}
                          <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full mt-auto group hover:bg-red-50 hover:text-red-800 hover:border-red-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 dark:hover:border-red-800">
                        {t.learnMore}
                        <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.keyFeaturesTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.keyFeaturesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-800 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.integrationTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.integrationSubtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-md border border-slate-200 dark:border-slate-700"
              >
                <item.icon className="w-5 h-5 text-red-800 dark:text-red-400" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.benefitsTitle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
                  {t.ctaButton}
                  <ArrowRight className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                {t.ctaSecondary}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
