import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Heart, Calendar, Pill, FlaskConical, Receipt, BarChart3,
  Video, Shield, Globe, Smartphone, Users, FileText,
  Bell, Clock, ArrowRight, ArrowLeft, CheckCircle2,
  Activity, Stethoscope, Microscope, Syringe, HeartPulse,
  ClipboardList, UserCog, Lock, Zap, Database
} from "lucide-react";

const translations = {
  en: {
    title: "Powerful Features for Modern Healthcare",
    subtitle: "Everything you need to run your healthcare institution efficiently",
    
    // Feature Categories
    clinicalTitle: "Clinical Management",
    clinicalSubtitle: "Comprehensive tools for patient care",
    operationsTitle: "Operations & Administration",
    operationsSubtitle: "Streamline your daily operations",
    analyticsTitle: "Analytics & Reporting",
    analyticsSubtitle: "Data-driven insights for better decisions",
    
    // Clinical Features
    emrTitle: "Electronic Medical Records",
    emrDesc: "Complete digital patient records with history, diagnoses, treatments, medications, and lab results. HIPAA compliant and fully encrypted.",
    emrFeature1: "Complete patient history",
    emrFeature2: "Clinical decision support",
    emrFeature3: "E-prescriptions",
    emrFeature4: "Document management",
    
    appointmentsTitle: "Smart Scheduling",
    appointmentsDesc: "Intelligent appointment management with doctor availability, specialty matching, and automated patient reminders.",
    appointmentsFeature1: "Online booking",
    appointmentsFeature2: "SMS/Email reminders",
    appointmentsFeature3: "Waitlist management",
    appointmentsFeature4: "Multi-location support",
    
    telemedicineTitle: "Telemedicine",
    telemedicineDesc: "Secure video consultations with integrated scheduling, notes, and prescription capabilities.",
    telemedicineFeature1: "HD video calls",
    telemedicineFeature2: "Screen sharing",
    telemedicineFeature3: "Recording options",
    telemedicineFeature4: "Mobile app support",
    
    // Operations Features
    pharmacyTitle: "Pharmacy Management",
    pharmacyDesc: "Complete pharmacy operations including inventory, prescriptions, dispensing, and drug interaction alerts.",
    pharmacyFeature1: "Inventory tracking",
    pharmacyFeature2: "Drug interactions",
    pharmacyFeature3: "Auto-reorder alerts",
    pharmacyFeature4: "Barcode scanning",
    
    laboratoryTitle: "Laboratory Integration",
    laboratoryDesc: "Seamless lab management with test ordering, results tracking, and automatic reporting to patient records.",
    laboratoryFeature1: "Test ordering",
    laboratoryFeature2: "Result tracking",
    laboratoryFeature3: "Equipment integration",
    laboratoryFeature4: "Quality control",
    
    billingTitle: "Medical Billing & Insurance",
    billingDesc: "Comprehensive billing system with insurance claims processing, payment tracking, and financial reporting.",
    billingFeature1: "Insurance claims",
    billingFeature2: "Payment plans",
    billingFeature3: "Financial reports",
    billingFeature4: "Multi-currency",
    
    // Analytics Features
    analyticsMainTitle: "Healthcare Analytics",
    analyticsMainDesc: "Real-time dashboards, clinical insights, and AI-powered predictions for better decision making.",
    analyticsFeature1: "Real-time dashboards",
    analyticsFeature2: "AI predictions",
    analyticsFeature3: "Custom reports",
    analyticsFeature4: "KPI tracking",
    
    reportsTitle: "Custom Reports",
    reportsDesc: "Generate detailed reports on operations, finances, and clinical outcomes with exportable formats.",
    reportsFeature1: "Report builder",
    reportsFeature2: "Scheduled reports",
    reportsFeature3: "Export to PDF/Excel",
    reportsFeature4: "Data visualization",
    
    // Additional Features
    mobileTitle: "Mobile App",
    mobileDesc: "Access your healthcare system on the go with our native iOS and Android applications.",
    
    securityTitle: "Enterprise Security",
    securityDesc: "Bank-grade encryption, role-based access, audit logs, and compliance with international standards.",
    
    integrationTitle: "API & Integrations",
    integrationDesc: "Connect with insurance providers, labs, pharmacies, and other healthcare systems via our robust API.",
    
    // CTA
    ctaTitle: "Ready to Experience These Features?",
    ctaSubtitle: "Start your free 14-day trial today",
    ctaButton: "Start Free Trial",
    learnMore: "Learn More",
  },
  ar: {
    title: "مميزات قوية للرعاية الصحية الحديثة",
    subtitle: "كل ما تحتاجه لتشغيل مؤسستك الصحية بكفاءة",
    
    clinicalTitle: "الإدارة السريرية",
    clinicalSubtitle: "أدوات شاملة لرعاية المرضى",
    operationsTitle: "العمليات والإدارة",
    operationsSubtitle: "تبسيط عملياتك اليومية",
    analyticsTitle: "التحليلات والتقارير",
    analyticsSubtitle: "رؤى مبنية على البيانات لقرارات أفضل",
    
    emrTitle: "السجلات الطبية الإلكترونية",
    emrDesc: "سجلات مرضى رقمية كاملة مع التاريخ والتشخيصات والعلاجات والأدوية ونتائج المختبر. متوافق مع HIPAA ومشفر بالكامل.",
    emrFeature1: "تاريخ المريض الكامل",
    emrFeature2: "دعم القرار السريري",
    emrFeature3: "وصفات إلكترونية",
    emrFeature4: "إدارة المستندات",
    
    appointmentsTitle: "جدولة ذكية",
    appointmentsDesc: "إدارة مواعيد ذكية مع توفر الطبيب ومطابقة التخصص وتذكيرات المرضى التلقائية.",
    appointmentsFeature1: "حجز عبر الإنترنت",
    appointmentsFeature2: "تذكيرات SMS/بريد",
    appointmentsFeature3: "إدارة قائمة الانتظار",
    appointmentsFeature4: "دعم متعدد المواقع",
    
    telemedicineTitle: "الطب عن بعد",
    telemedicineDesc: "استشارات فيديو آمنة مع جدولة متكاملة وملاحظات وإمكانيات وصف الأدوية.",
    telemedicineFeature1: "مكالمات فيديو HD",
    telemedicineFeature2: "مشاركة الشاشة",
    telemedicineFeature3: "خيارات التسجيل",
    telemedicineFeature4: "دعم تطبيق الجوال",
    
    pharmacyTitle: "إدارة الصيدلية",
    pharmacyDesc: "عمليات صيدلية كاملة تشمل المخزون والوصفات والصرف وتنبيهات تفاعل الأدوية.",
    pharmacyFeature1: "تتبع المخزون",
    pharmacyFeature2: "تفاعلات الأدوية",
    pharmacyFeature3: "تنبيهات إعادة الطلب",
    pharmacyFeature4: "مسح الباركود",
    
    laboratoryTitle: "تكامل المختبر",
    laboratoryDesc: "إدارة مختبر سلسة مع طلب الفحوصات وتتبع النتائج والتقارير التلقائية لسجلات المرضى.",
    laboratoryFeature1: "طلب الفحوصات",
    laboratoryFeature2: "تتبع النتائج",
    laboratoryFeature3: "تكامل المعدات",
    laboratoryFeature4: "مراقبة الجودة",
    
    billingTitle: "الفوترة الطبية والتأمين",
    billingDesc: "نظام فوترة شامل مع معالجة مطالبات التأمين وتتبع المدفوعات والتقارير المالية.",
    billingFeature1: "مطالبات التأمين",
    billingFeature2: "خطط الدفع",
    billingFeature3: "التقارير المالية",
    billingFeature4: "متعدد العملات",
    
    analyticsMainTitle: "تحليلات الرعاية الصحية",
    analyticsMainDesc: "لوحات معلومات في الوقت الفعلي ورؤى سريرية وتنبؤات مدعومة بالذكاء الاصطناعي لاتخاذ قرارات أفضل.",
    analyticsFeature1: "لوحات معلومات حية",
    analyticsFeature2: "تنبؤات AI",
    analyticsFeature3: "تقارير مخصصة",
    analyticsFeature4: "تتبع KPI",
    
    reportsTitle: "تقارير مخصصة",
    reportsDesc: "إنشاء تقارير مفصلة عن العمليات والمالية والنتائج السريرية بصيغ قابلة للتصدير.",
    reportsFeature1: "منشئ التقارير",
    reportsFeature2: "تقارير مجدولة",
    reportsFeature3: "تصدير PDF/Excel",
    reportsFeature4: "تصور البيانات",
    
    mobileTitle: "تطبيق الجوال",
    mobileDesc: "الوصول إلى نظام الرعاية الصحية أثناء التنقل مع تطبيقاتنا الأصلية لـ iOS و Android.",
    
    securityTitle: "أمان المؤسسات",
    securityDesc: "تشفير بمستوى البنوك، تحكم بالوصول، سجلات المراجعة، والتوافق مع المعايير الدولية.",
    
    integrationTitle: "API والتكاملات",
    integrationDesc: "الاتصال بمقدمي التأمين والمختبرات والصيدليات وأنظمة الرعاية الصحية الأخرى عبر API القوي لدينا.",
    
    ctaTitle: "مستعد لتجربة هذه المميزات؟",
    ctaSubtitle: "ابدأ تجربتك المجانية لمدة 14 يوماً اليوم",
    ctaButton: "ابدأ تجربة مجانية",
    learnMore: "اعرف المزيد",
  },
  tr: {
    title: "Modern Sağlık için Güçlü Özellikler",
    subtitle: "Sağlık kurumunuzu verimli bir şekilde yönetmek için ihtiyacınız olan her şey",
    
    clinicalTitle: "Klinik Yönetim",
    clinicalSubtitle: "Hasta bakımı için kapsamlı araçlar",
    operationsTitle: "Operasyonlar ve Yönetim",
    operationsSubtitle: "Günlük operasyonlarınızı kolaylaştırın",
    analyticsTitle: "Analitik ve Raporlama",
    analyticsSubtitle: "Daha iyi kararlar için veri odaklı içgörüler",
    
    emrTitle: "Elektronik Tıbbi Kayıtlar",
    emrDesc: "Geçmiş, teşhisler, tedaviler, ilaçlar ve laboratuvar sonuçları ile eksiksiz dijital hasta kayıtları. HIPAA uyumlu ve tamamen şifreli.",
    emrFeature1: "Tam hasta geçmişi",
    emrFeature2: "Klinik karar desteği",
    emrFeature3: "E-reçeteler",
    emrFeature4: "Belge yönetimi",
    
    appointmentsTitle: "Akıllı Planlama",
    appointmentsDesc: "Doktor müsaitliği, uzmanlık eşleştirme ve otomatik hasta hatırlatmaları ile akıllı randevu yönetimi.",
    appointmentsFeature1: "Online rezervasyon",
    appointmentsFeature2: "SMS/Email hatırlatmalar",
    appointmentsFeature3: "Bekleme listesi yönetimi",
    appointmentsFeature4: "Çoklu lokasyon desteği",
    
    telemedicineTitle: "Teletıp",
    telemedicineDesc: "Entegre planlama, notlar ve reçete yetenekleri ile güvenli video konsültasyonları.",
    telemedicineFeature1: "HD video aramalar",
    telemedicineFeature2: "Ekran paylaşımı",
    telemedicineFeature3: "Kayıt seçenekleri",
    telemedicineFeature4: "Mobil uygulama desteği",
    
    pharmacyTitle: "Eczane Yönetimi",
    pharmacyDesc: "Envanter, reçeteler, dağıtım ve ilaç etkileşim uyarıları dahil eksiksiz eczane operasyonları.",
    pharmacyFeature1: "Envanter takibi",
    pharmacyFeature2: "İlaç etkileşimleri",
    pharmacyFeature3: "Otomatik sipariş uyarıları",
    pharmacyFeature4: "Barkod tarama",
    
    laboratoryTitle: "Laboratuvar Entegrasyonu",
    laboratoryDesc: "Test siparişi, sonuç takibi ve hasta kayıtlarına otomatik raporlama ile sorunsuz laboratuvar yönetimi.",
    laboratoryFeature1: "Test siparişi",
    laboratoryFeature2: "Sonuç takibi",
    laboratoryFeature3: "Ekipman entegrasyonu",
    laboratoryFeature4: "Kalite kontrolü",
    
    billingTitle: "Tıbbi Faturalama ve Sigorta",
    billingDesc: "Sigorta talepleri işleme, ödeme takibi ve finansal raporlama ile kapsamlı faturalama sistemi.",
    billingFeature1: "Sigorta talepleri",
    billingFeature2: "Ödeme planları",
    billingFeature3: "Finansal raporlar",
    billingFeature4: "Çoklu para birimi",
    
    analyticsMainTitle: "Sağlık Analitiği",
    analyticsMainDesc: "Daha iyi karar verme için gerçek zamanlı panolar, klinik içgörüler ve AI destekli tahminler.",
    analyticsFeature1: "Canlı panolar",
    analyticsFeature2: "AI tahminleri",
    analyticsFeature3: "Özel raporlar",
    analyticsFeature4: "KPI takibi",
    
    reportsTitle: "Özel Raporlar",
    reportsDesc: "Dışa aktarılabilir formatlarla operasyonlar, finans ve klinik sonuçlar hakkında detaylı raporlar oluşturun.",
    reportsFeature1: "Rapor oluşturucu",
    reportsFeature2: "Planlanmış raporlar",
    reportsFeature3: "PDF/Excel dışa aktarma",
    reportsFeature4: "Veri görselleştirme",
    
    mobileTitle: "Mobil Uygulama",
    mobileDesc: "Yerel iOS ve Android uygulamalarımızla hareket halindeyken sağlık sisteminize erişin.",
    
    securityTitle: "Kurumsal Güvenlik",
    securityDesc: "Banka düzeyinde şifreleme, rol tabanlı erişim, denetim günlükleri ve uluslararası standartlara uygunluk.",
    
    integrationTitle: "API ve Entegrasyonlar",
    integrationDesc: "Güçlü API'miz aracılığıyla sigorta sağlayıcıları, laboratuvarlar, eczaneler ve diğer sağlık sistemleriyle bağlantı kurun.",
    
    ctaTitle: "Bu Özellikleri Denemeye Hazır mısınız?",
    ctaSubtitle: "14 günlük ücretsiz denemenizi bugün başlatın",
    ctaButton: "Ücretsiz Deneme Başlat",
    learnMore: "Daha Fazla Bilgi",
  },
  ru: {
    title: "Мощные функции для современного здравоохранения",
    subtitle: "Всё необходимое для эффективной работы вашего медицинского учреждения",
    
    clinicalTitle: "Клиническое управление",
    clinicalSubtitle: "Комплексные инструменты для ухода за пациентами",
    operationsTitle: "Операции и администрирование",
    operationsSubtitle: "Оптимизация ежедневных операций",
    analyticsTitle: "Аналитика и отчётность",
    analyticsSubtitle: "Инсайты на основе данных для лучших решений",
    
    emrTitle: "Электронные медицинские карты",
    emrDesc: "Полные цифровые записи пациентов с историей, диагнозами, лечением, медикаментами и результатами лаборатории. Соответствие HIPAA и полное шифрование.",
    emrFeature1: "Полная история пациента",
    emrFeature2: "Клиническая поддержка решений",
    emrFeature3: "Электронные рецепты",
    emrFeature4: "Управление документами",
    
    appointmentsTitle: "Умное планирование",
    appointmentsDesc: "Интеллектуальное управление записями с доступностью врачей, подбором специальности и автоматическими напоминаниями.",
    appointmentsFeature1: "Онлайн-бронирование",
    appointmentsFeature2: "SMS/Email напоминания",
    appointmentsFeature3: "Управление очередью",
    appointmentsFeature4: "Поддержка нескольких локаций",
    
    telemedicineTitle: "Телемедицина",
    telemedicineDesc: "Безопасные видеоконсультации с интегрированным планированием, заметками и возможностью выписки рецептов.",
    telemedicineFeature1: "HD видеозвонки",
    telemedicineFeature2: "Демонстрация экрана",
    telemedicineFeature3: "Опции записи",
    telemedicineFeature4: "Поддержка мобильного приложения",
    
    pharmacyTitle: "Управление аптекой",
    pharmacyDesc: "Полные аптечные операции включая инвентарь, рецепты, отпуск и предупреждения о взаимодействии лекарств.",
    pharmacyFeature1: "Отслеживание инвентаря",
    pharmacyFeature2: "Взаимодействия лекарств",
    pharmacyFeature3: "Автоматические заказы",
    pharmacyFeature4: "Сканирование штрих-кодов",
    
    laboratoryTitle: "Интеграция лаборатории",
    laboratoryDesc: "Бесшовное управление лабораторией с заказом анализов, отслеживанием результатов и автоматической отчётностью.",
    laboratoryFeature1: "Заказ анализов",
    laboratoryFeature2: "Отслеживание результатов",
    laboratoryFeature3: "Интеграция оборудования",
    laboratoryFeature4: "Контроль качества",
    
    billingTitle: "Медицинский биллинг и страхование",
    billingDesc: "Комплексная система биллинга с обработкой страховых заявок, отслеживанием платежей и финансовой отчётностью.",
    billingFeature1: "Страховые заявки",
    billingFeature2: "Планы оплаты",
    billingFeature3: "Финансовые отчёты",
    billingFeature4: "Мультивалютность",
    
    analyticsMainTitle: "Аналитика здравоохранения",
    analyticsMainDesc: "Панели в реальном времени, клинические инсайты и прогнозы на основе ИИ для лучшего принятия решений.",
    analyticsFeature1: "Панели в реальном времени",
    analyticsFeature2: "ИИ-прогнозы",
    analyticsFeature3: "Пользовательские отчёты",
    analyticsFeature4: "Отслеживание KPI",
    
    reportsTitle: "Пользовательские отчёты",
    reportsDesc: "Создание детальных отчётов об операциях, финансах и клинических результатах в экспортируемых форматах.",
    reportsFeature1: "Конструктор отчётов",
    reportsFeature2: "Запланированные отчёты",
    reportsFeature3: "Экспорт в PDF/Excel",
    reportsFeature4: "Визуализация данных",
    
    mobileTitle: "Мобильное приложение",
    mobileDesc: "Доступ к системе здравоохранения на ходу с нашими нативными приложениями для iOS и Android.",
    
    securityTitle: "Корпоративная безопасность",
    securityDesc: "Шифрование банковского уровня, ролевой доступ, журналы аудита и соответствие международным стандартам.",
    
    integrationTitle: "API и интеграции",
    integrationDesc: "Подключение к страховщикам, лабораториям, аптекам и другим системам здравоохранения через наш мощный API.",
    
    ctaTitle: "Готовы попробовать эти функции?",
    ctaSubtitle: "Начните бесплатную 14-дневную пробную версию сегодня",
    ctaButton: "Начать бесплатно",
    learnMore: "Узнать больше",
  },
  fr: {
    title: "Fonctionnalités puissantes pour la santé moderne",
    subtitle: "Tout ce dont vous avez besoin pour gérer efficacement votre établissement de santé",
    clinicalTitle: "Gestion clinique",
    clinicalSubtitle: "Outils complets pour les soins aux patients",
    operationsTitle: "Opérations et administration",
    operationsSubtitle: "Rationalisez vos opérations quotidiennes",
    analyticsTitle: "Analyses et rapports",
    analyticsSubtitle: "Insights basés sur les données pour de meilleures décisions",
    emrTitle: "Dossiers médicaux électroniques",
    emrDesc: "Dossiers patients numériques complets avec historique, diagnostics, traitements, médicaments et résultats de laboratoire. Conforme HIPAA et entièrement chiffré.",
    emrFeature1: "Historique patient complet",
    emrFeature2: "Aide à la décision clinique",
    emrFeature3: "E-prescriptions",
    emrFeature4: "Gestion documentaire",
    appointmentsTitle: "Planification intelligente",
    appointmentsDesc: "Gestion intelligente des rendez-vous avec disponibilité médecin, correspondance spécialité et rappels automatiques.",
    appointmentsFeature1: "Réservation en ligne",
    appointmentsFeature2: "Rappels SMS/Email",
    appointmentsFeature3: "Gestion liste d'attente",
    appointmentsFeature4: "Support multi-sites",
    telemedicineTitle: "Télémédecine",
    telemedicineDesc: "Consultations vidéo sécurisées avec planification intégrée, notes et capacités de prescription.",
    telemedicineFeature1: "Appels vidéo HD",
    telemedicineFeature2: "Partage d'écran",
    telemedicineFeature3: "Options d'enregistrement",
    telemedicineFeature4: "Support application mobile",
    pharmacyTitle: "Gestion de pharmacie",
    pharmacyDesc: "Opérations pharmaceutiques complètes incluant inventaire, prescriptions, dispensation et alertes d'interactions médicamenteuses.",
    pharmacyFeature1: "Suivi d'inventaire",
    pharmacyFeature2: "Interactions médicamenteuses",
    pharmacyFeature3: "Alertes réapprovisionnement",
    pharmacyFeature4: "Scan code-barres",
    laboratoryTitle: "Intégration laboratoire",
    laboratoryDesc: "Gestion laboratoire fluide avec commande de tests, suivi des résultats et rapports automatiques aux dossiers patients.",
    laboratoryFeature1: "Commande de tests",
    laboratoryFeature2: "Suivi des résultats",
    laboratoryFeature3: "Intégration équipements",
    laboratoryFeature4: "Contrôle qualité",
    billingTitle: "Facturation médicale et assurance",
    billingDesc: "Système de facturation complet avec traitement des réclamations d'assurance, suivi des paiements et rapports financiers.",
    billingFeature1: "Réclamations assurance",
    billingFeature2: "Plans de paiement",
    billingFeature3: "Rapports financiers",
    billingFeature4: "Multi-devises",
    analyticsMainTitle: "Analyses de santé",
    analyticsMainDesc: "Tableaux de bord en temps réel, insights cliniques et prédictions IA pour de meilleures décisions.",
    analyticsFeature1: "Tableaux de bord temps réel",
    analyticsFeature2: "Prédictions IA",
    analyticsFeature3: "Rapports personnalisés",
    analyticsFeature4: "Suivi KPI",
    reportsTitle: "Rapports personnalisés",
    reportsDesc: "Générez des rapports détaillés sur les opérations, finances et résultats cliniques en formats exportables.",
    reportsFeature1: "Générateur de rapports",
    reportsFeature2: "Rapports planifiés",
    reportsFeature3: "Export PDF/Excel",
    reportsFeature4: "Visualisation données",
    mobileTitle: "Application mobile",
    mobileDesc: "Accédez à votre système de santé en déplacement avec nos applications natives iOS et Android.",
    securityTitle: "Sécurité entreprise",
    securityDesc: "Chiffrement niveau bancaire, accès basé sur les rôles, journaux d'audit et conformité aux standards internationaux.",
    integrationTitle: "API et intégrations",
    integrationDesc: "Connectez-vous aux assureurs, laboratoires, pharmacies et autres systèmes de santé via notre API robuste.",
    ctaTitle: "Prêt à découvrir ces fonctionnalités?",
    ctaSubtitle: "Commencez votre essai gratuit de 14 jours aujourd'hui",
    ctaButton: "Démarrer l'essai gratuit",
    learnMore: "En savoir plus",
  },
  de: {
    title: "Leistungsstarke Funktionen für modernes Gesundheitswesen",
    subtitle: "Alles was Sie brauchen um Ihre Gesundheitseinrichtung effizient zu betreiben",
    clinicalTitle: "Klinisches Management",
    clinicalSubtitle: "Umfassende Werkzeuge für die Patientenversorgung",
    operationsTitle: "Betrieb und Verwaltung",
    operationsSubtitle: "Optimieren Sie Ihren täglichen Betrieb",
    analyticsTitle: "Analytik und Berichte",
    analyticsSubtitle: "Datengestützte Erkenntnisse für bessere Entscheidungen",
    emrTitle: "Elektronische Patientenakten",
    emrDesc: "Vollständige digitale Patientenakten mit Geschichte, Diagnosen, Behandlungen, Medikamenten und Laborergebnissen. HIPAA-konform und vollständig verschlüsselt.",
    emrFeature1: "Vollständige Patientenhistorie",
    emrFeature2: "Klinische Entscheidungsunterstützung",
    emrFeature3: "E-Rezepte",
    emrFeature4: "Dokumentenmanagement",
    appointmentsTitle: "Intelligente Terminplanung",
    appointmentsDesc: "Intelligentes Terminmanagement mit Arztverfügbarkeit, Fachrichtungsabgleich und automatischen Erinnerungen.",
    appointmentsFeature1: "Online-Buchung",
    appointmentsFeature2: "SMS/Email Erinnerungen",
    appointmentsFeature3: "Wartelistenverwaltung",
    appointmentsFeature4: "Multi-Standort Support",
    telemedicineTitle: "Telemedizin",
    telemedicineDesc: "Sichere Videokonsultationen mit integrierter Planung, Notizen und Rezeptfunktionen.",
    telemedicineFeature1: "HD Videoanrufe",
    telemedicineFeature2: "Bildschirmfreigabe",
    telemedicineFeature3: "Aufnahmeoptionen",
    telemedicineFeature4: "Mobile App Support",
    pharmacyTitle: "Apothekenverwaltung",
    pharmacyDesc: "Komplette Apothekenoperationen inklusive Inventar, Rezepte, Ausgabe und Arzneimittelinteraktionswarnungen.",
    pharmacyFeature1: "Inventarverfolgung",
    pharmacyFeature2: "Arzneimittelinteraktionen",
    pharmacyFeature3: "Auto-Nachbestellwarnungen",
    pharmacyFeature4: "Barcode-Scanning",
    laboratoryTitle: "Laborintegration",
    laboratoryDesc: "Nahtloses Labormanagement mit Testbestellung, Ergebnisverfolgung und automatischer Berichterstattung.",
    laboratoryFeature1: "Testbestellung",
    laboratoryFeature2: "Ergebnisverfolgung",
    laboratoryFeature3: "Geräteintegration",
    laboratoryFeature4: "Qualitätskontrolle",
    billingTitle: "Medizinische Abrechnung und Versicherung",
    billingDesc: "Umfassendes Abrechnungssystem mit Versicherungsanspruchsbearbeitung, Zahlungsverfolgung und Finanzberichten.",
    billingFeature1: "Versicherungsansprüche",
    billingFeature2: "Zahlungspläne",
    billingFeature3: "Finanzberichte",
    billingFeature4: "Multi-Währung",
    analyticsMainTitle: "Gesundheitsanalytik",
    analyticsMainDesc: "Echtzeit-Dashboards, klinische Erkenntnisse und KI-gestützte Vorhersagen für bessere Entscheidungen.",
    analyticsFeature1: "Echtzeit-Dashboards",
    analyticsFeature2: "KI-Vorhersagen",
    analyticsFeature3: "Benutzerdefinierte Berichte",
    analyticsFeature4: "KPI-Tracking",
    reportsTitle: "Benutzerdefinierte Berichte",
    reportsDesc: "Erstellen Sie detaillierte Berichte über Betrieb, Finanzen und klinische Ergebnisse in exportierbaren Formaten.",
    reportsFeature1: "Berichtsgenerator",
    reportsFeature2: "Geplante Berichte",
    reportsFeature3: "PDF/Excel Export",
    reportsFeature4: "Datenvisualisierung",
    mobileTitle: "Mobile App",
    mobileDesc: "Greifen Sie unterwegs auf Ihr Gesundheitssystem zu mit unseren nativen iOS und Android Apps.",
    securityTitle: "Enterprise-Sicherheit",
    securityDesc: "Bankniveau-Verschlüsselung, rollenbasierter Zugriff, Audit-Protokolle und internationale Standards-Konformität.",
    integrationTitle: "API und Integrationen",
    integrationDesc: "Verbinden Sie sich mit Versicherern, Laboren, Apotheken und anderen Gesundheitssystemen über unsere robuste API.",
    ctaTitle: "Bereit diese Funktionen zu erleben?",
    ctaSubtitle: "Starten Sie heute Ihre kostenlose 14-Tage-Testversion",
    ctaButton: "Kostenlos starten",
    learnMore: "Mehr erfahren",
  },
  nl: {
    title: "Krachtige functies voor moderne gezondheidszorg",
    subtitle: "Alles wat u nodig heeft om uw zorginstelling efficiënt te runnen",
    clinicalTitle: "Klinisch beheer",
    clinicalSubtitle: "Uitgebreide tools voor patiëntenzorg",
    operationsTitle: "Operaties en administratie",
    operationsSubtitle: "Stroomlijn uw dagelijkse operaties",
    analyticsTitle: "Analyses en rapportage",
    analyticsSubtitle: "Data-gedreven inzichten voor betere beslissingen",
    emrTitle: "Elektronische medische dossiers",
    emrDesc: "Complete digitale patiëntendossiers met geschiedenis, diagnoses, behandelingen, medicatie en labresultaten. HIPAA-compliant en volledig versleuteld.",
    emrFeature1: "Volledige patiëntgeschiedenis",
    emrFeature2: "Klinische beslissingsondersteuning",
    emrFeature3: "E-recepten",
    emrFeature4: "Documentbeheer",
    appointmentsTitle: "Slimme planning",
    appointmentsDesc: "Intelligent afspraakbeheer met artsenbeschikbaarheid, specialismekoppeling en automatische herinneringen.",
    appointmentsFeature1: "Online boeken",
    appointmentsFeature2: "SMS/Email herinneringen",
    appointmentsFeature3: "Wachtlijstbeheer",
    appointmentsFeature4: "Multi-locatie support",
    telemedicineTitle: "Telemedicijn",
    telemedicineDesc: "Veilige videoconsultaties met geïntegreerde planning, notities en receptmogelijkheden.",
    telemedicineFeature1: "HD videogesprekken",
    telemedicineFeature2: "Scherm delen",
    telemedicineFeature3: "Opname opties",
    telemedicineFeature4: "Mobiele app support",
    pharmacyTitle: "Apotheekbeheer",
    pharmacyDesc: "Complete apotheekoperaties inclusief inventaris, recepten, uitgifte en geneesmiddelinteractiewaarschuwingen.",
    pharmacyFeature1: "Inventaris tracking",
    pharmacyFeature2: "Geneesmiddelinteracties",
    pharmacyFeature3: "Auto-herbestel alerts",
    pharmacyFeature4: "Barcode scannen",
    laboratoryTitle: "Laboratorium integratie",
    laboratoryDesc: "Naadloos labbeheer met testbestellingen, resultaattracking en automatische rapportage aan patiëntendossiers.",
    laboratoryFeature1: "Testbestellingen",
    laboratoryFeature2: "Resultaat tracking",
    laboratoryFeature3: "Apparatuur integratie",
    laboratoryFeature4: "Kwaliteitscontrole",
    billingTitle: "Medische facturering en verzekering",
    billingDesc: "Uitgebreid factureringssysteem met verzekeringsclaimverwerking, betalingstracking en financiële rapportage.",
    billingFeature1: "Verzekeringsclaims",
    billingFeature2: "Betalingsplannen",
    billingFeature3: "Financiële rapporten",
    billingFeature4: "Multi-valuta",
    analyticsMainTitle: "Zorganalyses",
    analyticsMainDesc: "Real-time dashboards, klinische inzichten en AI-gestuurde voorspellingen voor betere beslissingen.",
    analyticsFeature1: "Real-time dashboards",
    analyticsFeature2: "AI voorspellingen",
    analyticsFeature3: "Aangepaste rapporten",
    analyticsFeature4: "KPI tracking",
    reportsTitle: "Aangepaste rapporten",
    reportsDesc: "Genereer gedetailleerde rapporten over operaties, financiën en klinische resultaten in exporteerbare formaten.",
    reportsFeature1: "Rapport generator",
    reportsFeature2: "Geplande rapporten",
    reportsFeature3: "PDF/Excel export",
    reportsFeature4: "Data visualisatie",
    mobileTitle: "Mobiele app",
    mobileDesc: "Toegang tot uw zorgsysteem onderweg met onze native iOS en Android apps.",
    securityTitle: "Enterprise beveiliging",
    securityDesc: "Bankniveau encryptie, rolgebaseerde toegang, audit logs en compliance met internationale standaarden.",
    integrationTitle: "API en integraties",
    integrationDesc: "Verbind met verzekeraars, labs, apotheken en andere zorgsystemen via onze robuuste API.",
    ctaTitle: "Klaar om deze functies te ervaren?",
    ctaSubtitle: "Start vandaag uw gratis 14-dagen proefperiode",
    ctaButton: "Gratis proefperiode starten",
    learnMore: "Meer informatie",
  },
  it: {
    title: "Funzionalità potenti per la sanità moderna",
    subtitle: "Tutto ciò di cui hai bisogno per gestire efficacemente la tua struttura sanitaria",
    clinicalTitle: "Gestione clinica",
    clinicalSubtitle: "Strumenti completi per la cura dei pazienti",
    operationsTitle: "Operazioni e amministrazione",
    operationsSubtitle: "Ottimizza le tue operazioni quotidiane",
    analyticsTitle: "Analisi e reportistica",
    analyticsSubtitle: "Insight basati sui dati per decisioni migliori",
    emrTitle: "Cartelle mediche elettroniche",
    emrDesc: "Cartelle pazienti digitali complete con storia, diagnosi, trattamenti, farmaci e risultati di laboratorio. Conforme HIPAA e completamente crittografato.",
    emrFeature1: "Storia paziente completa",
    emrFeature2: "Supporto decisionale clinico",
    emrFeature3: "E-prescrizioni",
    emrFeature4: "Gestione documenti",
    appointmentsTitle: "Pianificazione intelligente",
    appointmentsDesc: "Gestione appuntamenti intelligente con disponibilità medici, corrispondenza specialità e promemoria automatici.",
    appointmentsFeature1: "Prenotazione online",
    appointmentsFeature2: "Promemoria SMS/Email",
    appointmentsFeature3: "Gestione lista d'attesa",
    appointmentsFeature4: "Supporto multi-sede",
    telemedicineTitle: "Telemedicina",
    telemedicineDesc: "Videoconsulti sicuri con pianificazione integrata, note e funzionalità di prescrizione.",
    telemedicineFeature1: "Videochiamate HD",
    telemedicineFeature2: "Condivisione schermo",
    telemedicineFeature3: "Opzioni di registrazione",
    telemedicineFeature4: "Supporto app mobile",
    pharmacyTitle: "Gestione farmacia",
    pharmacyDesc: "Operazioni farmaceutiche complete inclusi inventario, prescrizioni, dispensazione e avvisi interazioni farmaci.",
    pharmacyFeature1: "Tracciamento inventario",
    pharmacyFeature2: "Interazioni farmaci",
    pharmacyFeature3: "Alert riordino automatico",
    pharmacyFeature4: "Scansione codici a barre",
    laboratoryTitle: "Integrazione laboratorio",
    laboratoryDesc: "Gestione laboratorio fluida con ordinazione test, tracciamento risultati e reportistica automatica alle cartelle pazienti.",
    laboratoryFeature1: "Ordinazione test",
    laboratoryFeature2: "Tracciamento risultati",
    laboratoryFeature3: "Integrazione attrezzature",
    laboratoryFeature4: "Controllo qualità",
    billingTitle: "Fatturazione medica e assicurazione",
    billingDesc: "Sistema di fatturazione completo con elaborazione reclami assicurativi, tracciamento pagamenti e reportistica finanziaria.",
    billingFeature1: "Reclami assicurativi",
    billingFeature2: "Piani di pagamento",
    billingFeature3: "Report finanziari",
    billingFeature4: "Multi-valuta",
    analyticsMainTitle: "Analisi sanitarie",
    analyticsMainDesc: "Dashboard in tempo reale, insight clinici e previsioni basate su IA per decisioni migliori.",
    analyticsFeature1: "Dashboard in tempo reale",
    analyticsFeature2: "Previsioni IA",
    analyticsFeature3: "Report personalizzati",
    analyticsFeature4: "Tracciamento KPI",
    reportsTitle: "Report personalizzati",
    reportsDesc: "Genera report dettagliati su operazioni, finanze e risultati clinici in formati esportabili.",
    reportsFeature1: "Generatore report",
    reportsFeature2: "Report programmati",
    reportsFeature3: "Esporta in PDF/Excel",
    reportsFeature4: "Visualizzazione dati",
    mobileTitle: "App mobile",
    mobileDesc: "Accedi al tuo sistema sanitario in movimento con le nostre app native iOS e Android.",
    securityTitle: "Sicurezza enterprise",
    securityDesc: "Crittografia livello bancario, accesso basato su ruoli, log di audit e conformità agli standard internazionali.",
    integrationTitle: "API e integrazioni",
    integrationDesc: "Connettiti con assicuratori, laboratori, farmacie e altri sistemi sanitari tramite la nostra robusta API.",
    ctaTitle: "Pronto a provare queste funzionalità?",
    ctaSubtitle: "Inizia oggi la tua prova gratuita di 14 giorni",
    ctaButton: "Inizia prova gratuita",
    learnMore: "Scopri di più",
  },
  uk: {
    title: "Потужні функції для сучасної охорони здоров'я",
    subtitle: "Все необхідне для ефективної роботи вашого медичного закладу",
    clinicalTitle: "Клінічне управління",
    clinicalSubtitle: "Комплексні інструменти для догляду за пацієнтами",
    operationsTitle: "Операції та адміністрування",
    operationsSubtitle: "Оптимізація щоденних операцій",
    analyticsTitle: "Аналітика та звітність",
    analyticsSubtitle: "Інсайти на основі даних для кращих рішень",
    emrTitle: "Електронні медичні картки",
    emrDesc: "Повні цифрові записи пацієнтів з історією, діагнозами, лікуванням, медикаментами та результатами лабораторії. Відповідність HIPAA та повне шифрування.",
    emrFeature1: "Повна історія пацієнта",
    emrFeature2: "Клінічна підтримка рішень",
    emrFeature3: "Електронні рецепти",
    emrFeature4: "Управління документами",
    appointmentsTitle: "Розумне планування",
    appointmentsDesc: "Інтелектуальне управління записами з доступністю лікарів, підбором спеціальності та автоматичними нагадуваннями.",
    appointmentsFeature1: "Онлайн-бронювання",
    appointmentsFeature2: "SMS/Email нагадування",
    appointmentsFeature3: "Управління чергою",
    appointmentsFeature4: "Підтримка кількох локацій",
    telemedicineTitle: "Телемедицина",
    telemedicineDesc: "Безпечні відеоконсультації з інтегрованим плануванням, нотатками та можливістю виписки рецептів.",
    telemedicineFeature1: "HD відеодзвінки",
    telemedicineFeature2: "Демонстрація екрану",
    telemedicineFeature3: "Опції запису",
    telemedicineFeature4: "Підтримка мобільного додатку",
    pharmacyTitle: "Управління аптекою",
    pharmacyDesc: "Повні аптечні операції включаючи інвентар, рецепти, відпуск та попередження про взаємодію ліків.",
    pharmacyFeature1: "Відстеження інвентарю",
    pharmacyFeature2: "Взаємодія ліків",
    pharmacyFeature3: "Автоматичні замовлення",
    pharmacyFeature4: "Сканування штрих-кодів",
    laboratoryTitle: "Інтеграція лабораторії",
    laboratoryDesc: "Безперебійне управління лабораторією з замовленням аналізів, відстеженням результатів та автоматичною звітністю.",
    laboratoryFeature1: "Замовлення аналізів",
    laboratoryFeature2: "Відстеження результатів",
    laboratoryFeature3: "Інтеграція обладнання",
    laboratoryFeature4: "Контроль якості",
    billingTitle: "Медичний білінг та страхування",
    billingDesc: "Комплексна система білінгу з обробкою страхових заявок, відстеженням платежів та фінансовою звітністю.",
    billingFeature1: "Страхові заявки",
    billingFeature2: "Плани оплати",
    billingFeature3: "Фінансові звіти",
    billingFeature4: "Мультивалютність",
    analyticsMainTitle: "Аналітика охорони здоров'я",
    analyticsMainDesc: "Панелі в реальному часі, клінічні інсайти та прогнози на основі ШІ для кращого прийняття рішень.",
    analyticsFeature1: "Панелі в реальному часі",
    analyticsFeature2: "ШІ-прогнози",
    analyticsFeature3: "Власні звіти",
    analyticsFeature4: "Відстеження KPI",
    reportsTitle: "Власні звіти",
    reportsDesc: "Створення детальних звітів про операції, фінанси та клінічні результати в експортованих форматах.",
    reportsFeature1: "Конструктор звітів",
    reportsFeature2: "Заплановані звіти",
    reportsFeature3: "Експорт в PDF/Excel",
    reportsFeature4: "Візуалізація даних",
    mobileTitle: "Мобільний додаток",
    mobileDesc: "Доступ до системи охорони здоров'я на ходу з нашими нативними додатками для iOS та Android.",
    securityTitle: "Корпоративна безпека",
    securityDesc: "Шифрування банківського рівня, рольовий доступ, журнали аудиту та відповідність міжнародним стандартам.",
    integrationTitle: "API та інтеграції",
    integrationDesc: "Підключення до страховиків, лабораторій, аптек та інших систем охорони здоров'я через наш потужний API.",
    ctaTitle: "Готові спробувати ці функції?",
    ctaSubtitle: "Почніть безкоштовну 14-денну пробну версію сьогодні",
    ctaButton: "Почати безкоштовно",
    learnMore: "Дізнатися більше",
  },
};

const mainFeatures = [
  {
    key: "emr",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    features: ["emrFeature1", "emrFeature2", "emrFeature3", "emrFeature4"],
  },
  {
    key: "appointments",
    icon: Calendar,
    color: "from-blue-500 to-emerald-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    features: ["appointmentsFeature1", "appointmentsFeature2", "appointmentsFeature3", "appointmentsFeature4"],
  },
  {
    key: "telemedicine",
    icon: Video,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    features: ["telemedicineFeature1", "telemedicineFeature2", "telemedicineFeature3", "telemedicineFeature4"],
  },
  {
    key: "pharmacy",
    icon: Pill,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    features: ["pharmacyFeature1", "pharmacyFeature2", "pharmacyFeature3", "pharmacyFeature4"],
  },
  {
    key: "laboratory",
    icon: FlaskConical,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    features: ["laboratoryFeature1", "laboratoryFeature2", "laboratoryFeature3", "laboratoryFeature4"],
  },
  {
    key: "billing",
    icon: Receipt,
    color: "from-emerald-500 to-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    features: ["billingFeature1", "billingFeature2", "billingFeature3", "billingFeature4"],
  },
];

const additionalFeatures = [
  { key: "mobile", icon: Smartphone, color: "text-blue-600" },
  { key: "security", icon: Shield, color: "text-green-600" },
  { key: "integration", icon: Database, color: "text-purple-600" },
];

export default function MCFeaturesPage() {
  const { language, isRTL } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <MCHeader />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-emerald-50 to-white dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const titleKey = `${feature.key}Title` as keyof typeof t;
              const descKey = `${feature.key}Desc` as keyof typeof t;
              
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7`} style={{ color: feature.color.includes("red") ? "#ef4444" : feature.color.includes("blue") ? "#3b82f6" : feature.color.includes("violet") ? "#8b5cf6" : feature.color.includes("green") ? "#22c55e" : feature.color.includes("amber") ? "#f59e0b" : "#14b8a6" }} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {t[titleKey]}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {t[descKey]}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {t[f as keyof typeof t]}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t.analyticsMainTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {t.analyticsMainDesc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {["analyticsFeature1", "analyticsFeature2", "analyticsFeature3", "analyticsFeature4"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {t[f as keyof typeof t]}
                  </li>
                ))}
              </ul>
              
              <Link to="/medcore/contact">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white">
                  {t.learnMore}
                  <Arrow className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
                <span className="font-semibold text-slate-900 dark:text-white">Analytics Dashboard</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">98.5%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Patient Satisfaction</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">12min</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Avg Wait Time</p>
                </div>
              </div>
              
              <div className="h-32 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/30 rounded-xl flex items-end justify-around p-4">
                {[60, 80, 45, 90, 70, 85, 55].map((h, i) => (
                  <div
                    key={i}
                    className="w-8 bg-gradient-to-t from-emerald-500 to-emerald-500 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const titleKey = `${feature.key}Title` as keyof typeof t;
              const descKey = `${feature.key}Desc` as keyof typeof t;
              
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {t[titleKey]}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {t[descKey]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t.ctaSubtitle}
            </p>
            <Link to="/medcore/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold">
                {t.ctaButton}
                <Arrow className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <MCFooter />
      <ScrollToTop />
    </div>
  );
}
