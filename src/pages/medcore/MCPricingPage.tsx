import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Check, ArrowRight, ArrowLeft, Shield, Zap, Users,
  Building2, HelpCircle, Star
} from "lucide-react";

const translations = {
  en: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that fits your healthcare institution",
    monthly: "Monthly",
    yearly: "Yearly",
    save: "Save 20%",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    perMonth: "/month",
    perYear: "/year",
    perUser: "/user",
    
    // Plans
    starterName: "Starter",
    starterDesc: "Perfect for small clinics and practices",
    professionalName: "Professional",
    professionalDesc: "For growing healthcare facilities",
    enterpriseName: "Enterprise",
    enterpriseDesc: "For large hospitals and networks",
    
    // Features
    upTo: "Up to",
    users: "users",
    unlimitedUsers: "Unlimited users",
    patients: "Patient records",
    unlimited: "Unlimited",
    emr: "Electronic Medical Records",
    appointments: "Appointment Scheduling",
    pharmacy: "Pharmacy Management",
    laboratory: "Laboratory Integration",
    billing: "Medical Billing",
    analytics: "Basic Analytics",
    advancedAnalytics: "Advanced Analytics & AI",
    customReports: "Custom Reports",
    apiAccess: "API Access",
    support24: "24/7 Priority Support",
    sla: "99.9% SLA",
    training: "On-site Training",
    customization: "Full Customization",
    multiLocation: "Multi-location Support",
    dedicatedManager: "Dedicated Account Manager",
    mobileApps: "Mobile Apps (iOS & Android)",
    nexaAI: "NEXA AI Medical Assistant",
    telemedicine: "Telemedicine & Video Calls",
    patientPortal: "Patient Portal",
    adminApp: "Admin & Management App",
    doctorApp: "Doctor's Mobile App",
    labApp: "Laboratory App",
    pharmacyApp: "Pharmacy App",
    patientApp: "Patient Mobile App",
    aiAnalysis: "AI X-Ray & Image Analysis",
    voiceConsultation: "AI Voice Consultations",
    drugInteraction: "Drug Interaction Alerts",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Q: "What's included in the free trial?",
    faq1A: "All Professional features for 14 days with full support and data migration assistance.",
    faq2Q: "Can I upgrade my plan later?",
    faq2A: "Yes, you can upgrade anytime and we'll prorate your billing.",
    faq3Q: "Is there a setup fee?",
    faq3A: "No setup fees for Starter and Professional plans. Enterprise has optional implementation services.",
    faq4Q: "What payment methods do you accept?",
    faq4A: "We accept all major credit cards, bank transfers, and can invoice for annual payments.",
    
    // CTA
    ctaTitle: "Not sure which plan is right for you?",
    ctaSubtitle: "Our team can help you choose the perfect plan for your needs.",
    ctaButton: "Talk to Sales",
  },
  ar: {
    title: "أسعار بسيطة وشفافة",
    subtitle: "اختر الخطة المناسبة لمؤسستك الصحية",
    monthly: "شهري",
    yearly: "سنوي",
    save: "وفر 20%",
    mostPopular: "الأكثر شعبية",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل مع المبيعات",
    perMonth: "/شهر",
    perYear: "/سنة",
    perUser: "/مستخدم",
    
    starterName: "المبتدئ",
    starterDesc: "مثالي للعيادات الصغيرة",
    professionalName: "المحترف",
    professionalDesc: "للمرافق الصحية النامية",
    enterpriseName: "المؤسسات",
    enterpriseDesc: "للمستشفيات الكبيرة والشبكات",
    
    upTo: "حتى",
    users: "مستخدم",
    unlimitedUsers: "مستخدمين غير محدود",
    patients: "سجلات المرضى",
    unlimited: "غير محدود",
    emr: "السجلات الطبية الإلكترونية",
    appointments: "جدولة المواعيد",
    pharmacy: "إدارة الصيدلية",
    laboratory: "تكامل المختبر",
    billing: "الفوترة الطبية",
    analytics: "تحليلات أساسية",
    advancedAnalytics: "تحليلات متقدمة وذكاء اصطناعي",
    customReports: "تقارير مخصصة",
    apiAccess: "الوصول للـ API",
    support24: "دعم 24/7 مميز",
    sla: "SLA 99.9%",
    training: "تدريب في الموقع",
    customization: "تخصيص كامل",
    multiLocation: "دعم متعدد المواقع",
    dedicatedManager: "مدير حساب مخصص",
    mobileApps: "تطبيقات الجوال (iOS و Android)",
    nexaAI: "مساعد NEXA AI الطبي",
    telemedicine: "الطب عن بعد ومكالمات الفيديو",
    patientPortal: "بوابة المرضى",
    adminApp: "تطبيق الإدارة",
    doctorApp: "تطبيق الطبيب",
    labApp: "تطبيق المختبر",
    pharmacyApp: "تطبيق الصيدلية",
    patientApp: "تطبيق المريض",
    aiAnalysis: "تحليل الأشعة والصور بالذكاء الاصطناعي",
    voiceConsultation: "استشارات صوتية بالذكاء الاصطناعي",
    drugInteraction: "تنبيهات تفاعل الأدوية",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "ماذا يشمل التجربة المجانية؟",
    faq1A: "جميع مميزات الخطة المحترفة لمدة 14 يوماً مع دعم كامل ومساعدة في ترحيل البيانات.",
    faq2Q: "هل يمكنني ترقية خطتي لاحقاً؟",
    faq2A: "نعم، يمكنك الترقية في أي وقت وسنحسب فاتورتك بالتناسب.",
    faq3Q: "هل هناك رسوم إعداد؟",
    faq3A: "لا رسوم إعداد لخطط المبتدئ والمحترف. المؤسسات لديها خدمات تنفيذ اختيارية.",
    faq4Q: "ما طرق الدفع المقبولة؟",
    faq4A: "نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية ويمكننا إرسال فواتير للدفعات السنوية.",
    
    ctaTitle: "غير متأكد من الخطة المناسبة؟",
    ctaSubtitle: "يمكن لفريقنا مساعدتك في اختيار الخطة المثالية لاحتياجاتك.",
    ctaButton: "تحدث مع المبيعات",
  },
  tr: {
    title: "Basit, Şeffaf Fiyatlandırma",
    subtitle: "Sağlık kurumunuza uygun planı seçin",
    monthly: "Aylık",
    yearly: "Yıllık",
    save: "%20 Tasarruf",
    mostPopular: "En Popüler",
    getStarted: "Başla",
    contactSales: "Satış ile İletişim",
    perMonth: "/ay",
    perYear: "/yıl",
    perUser: "/kullanıcı",
    
    starterName: "Başlangıç",
    starterDesc: "Küçük klinikler için ideal",
    professionalName: "Profesyonel",
    professionalDesc: "Büyüyen sağlık tesisleri için",
    enterpriseName: "Kurumsal",
    enterpriseDesc: "Büyük hastaneler ve ağlar için",
    
    upTo: "Kadar",
    users: "kullanıcı",
    unlimitedUsers: "Sınırsız kullanıcı",
    patients: "Hasta kaydı",
    unlimited: "Sınırsız",
    emr: "Elektronik Tıbbi Kayıtlar",
    appointments: "Randevu Planlama",
    pharmacy: "Eczane Yönetimi",
    laboratory: "Laboratuvar Entegrasyonu",
    billing: "Tıbbi Faturalama",
    analytics: "Temel Analitik",
    advancedAnalytics: "Gelişmiş Analitik ve AI",
    customReports: "Özel Raporlar",
    apiAccess: "API Erişimi",
    support24: "7/24 Öncelikli Destek",
    sla: "%99.9 SLA",
    training: "Yerinde Eğitim",
    customization: "Tam Özelleştirme",
    multiLocation: "Çoklu Lokasyon Desteği",
    dedicatedManager: "Özel Hesap Yöneticisi",
    mobileApps: "Mobil Uygulamalar (iOS ve Android)",
    nexaAI: "NEXA AI Tıbbi Asistan",
    telemedicine: "Teletıp ve Video Görüşmeleri",
    patientPortal: "Hasta Portalı",
    adminApp: "Yönetim Uygulaması",
    doctorApp: "Doktor Uygulaması",
    labApp: "Laboratuvar Uygulaması",
    pharmacyApp: "Eczane Uygulaması",
    patientApp: "Hasta Uygulaması",
    aiAnalysis: "AI Röntgen ve Görüntü Analizi",
    voiceConsultation: "AI Sesli Danışmanlık",
    drugInteraction: "İlaç Etkileşim Uyarıları",
    
    faqTitle: "Sık Sorulan Sorular",
    faq1Q: "Ücretsiz deneme neleri içerir?",
    faq1A: "Tam destek ve veri taşıma yardımı ile 14 gün boyunca tüm Profesyonel özellikler.",
    faq2Q: "Planımı daha sonra yükseltebilir miyim?",
    faq2A: "Evet, istediğiniz zaman yükseltebilirsiniz ve faturanızı orantılı olarak hesaplarız.",
    faq3Q: "Kurulum ücreti var mı?",
    faq3A: "Başlangıç ve Profesyonel planlar için kurulum ücreti yok. Kurumsal için isteğe bağlı uygulama hizmetleri var.",
    faq4Q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    faq4A: "Tüm büyük kredi kartlarını, banka havalelerini kabul ediyoruz ve yıllık ödemeler için fatura kesebiliyoruz.",
    
    ctaTitle: "Hangi planın sizin için doğru olduğundan emin değil misiniz?",
    ctaSubtitle: "Ekibimiz ihtiyaçlarınız için mükemmel planı seçmenize yardımcı olabilir.",
    ctaButton: "Satış ile Konuşun",
  },
  ru: {
    title: "Простое, прозрачное ценообразование",
    subtitle: "Выберите план, подходящий вашему медицинскому учреждению",
    monthly: "Ежемесячно",
    yearly: "Ежегодно",
    save: "Скидка 20%",
    mostPopular: "Самый популярный",
    getStarted: "Начать",
    contactSales: "Связаться с продажами",
    perMonth: "/месяц",
    perYear: "/год",
    perUser: "/пользователь",
    
    starterName: "Стартовый",
    starterDesc: "Идеально для небольших клиник",
    professionalName: "Профессиональный",
    professionalDesc: "Для растущих медицинских учреждений",
    enterpriseName: "Корпоративный",
    enterpriseDesc: "Для крупных больниц и сетей",
    
    upTo: "До",
    users: "пользователей",
    unlimitedUsers: "Неограниченно пользователей",
    patients: "Записей пациентов",
    unlimited: "Неограниченно",
    emr: "Электронные медицинские карты",
    appointments: "Планирование записей",
    pharmacy: "Управление аптекой",
    laboratory: "Интеграция лаборатории",
    billing: "Медицинский биллинг",
    analytics: "Базовая аналитика",
    advancedAnalytics: "Продвинутая аналитика и ИИ",
    customReports: "Пользовательские отчёты",
    apiAccess: "Доступ к API",
    support24: "Приоритетная поддержка 24/7",
    sla: "SLA 99.9%",
    training: "Обучение на месте",
    customization: "Полная кастомизация",
    multiLocation: "Поддержка нескольких локаций",
    dedicatedManager: "Персональный менеджер",
    mobileApps: "Мобильные приложения (iOS и Android)",
    nexaAI: "NEXA AI Медицинский ассистент",
    telemedicine: "Телемедицина и видеозвонки",
    patientPortal: "Портал пациента",
    adminApp: "Приложение администратора",
    doctorApp: "Приложение врача",
    labApp: "Приложение лаборатории",
    pharmacyApp: "Приложение аптеки",
    patientApp: "Приложение пациента",
    aiAnalysis: "ИИ анализ рентгена и изображений",
    voiceConsultation: "ИИ голосовые консультации",
    drugInteraction: "Предупреждения о взаимодействии лекарств",
    
    faqTitle: "Часто задаваемые вопросы",
    faq1Q: "Что включено в бесплатную пробную версию?",
    faq1A: "Все функции Профессионального плана на 14 дней с полной поддержкой и помощью в миграции данных.",
    faq2Q: "Могу ли я обновить план позже?",
    faq2A: "Да, вы можете обновить в любое время, и мы пересчитаем вашу оплату.",
    faq3Q: "Есть ли плата за настройку?",
    faq3A: "Нет платы за настройку для Стартового и Профессионального планов. Корпоративный имеет опциональные услуги внедрения.",
    faq4Q: "Какие способы оплаты вы принимаете?",
    faq4A: "Мы принимаем все основные кредитные карты, банковские переводы и можем выставлять счета на годовые платежи.",
    
    ctaTitle: "Не уверены, какой план вам подходит?",
    ctaSubtitle: "Наша команда поможет выбрать идеальный план для ваших потребностей.",
    ctaButton: "Поговорить с продажами",
  },
  fr: {
    title: "Tarification Simple et Transparente",
    subtitle: "Choisissez le plan adapté à votre établissement de santé",
    monthly: "Mensuel",
    yearly: "Annuel",
    save: "Économisez 20%",
    mostPopular: "Le Plus Populaire",
    getStarted: "Commencer",
    contactSales: "Contacter les Ventes",
    perMonth: "/mois",
    perYear: "/an",
    perUser: "/utilisateur",
    
    starterName: "Débutant",
    starterDesc: "Parfait pour les petites cliniques",
    professionalName: "Professionnel",
    professionalDesc: "Pour les établissements en croissance",
    enterpriseName: "Entreprise",
    enterpriseDesc: "Pour les grands hôpitaux et réseaux",
    
    upTo: "Jusqu'à",
    users: "utilisateurs",
    unlimitedUsers: "Utilisateurs illimités",
    patients: "Dossiers patients",
    unlimited: "Illimité",
    emr: "Dossiers Médicaux Électroniques",
    appointments: "Planification des Rendez-vous",
    pharmacy: "Gestion de Pharmacie",
    laboratory: "Intégration Laboratoire",
    billing: "Facturation Médicale",
    analytics: "Analyses de Base",
    advancedAnalytics: "Analyses Avancées et IA",
    customReports: "Rapports Personnalisés",
    apiAccess: "Accès API",
    support24: "Support Prioritaire 24/7",
    sla: "SLA 99.9%",
    training: "Formation sur Site",
    customization: "Personnalisation Complète",
    multiLocation: "Support Multi-sites",
    dedicatedManager: "Gestionnaire de Compte Dédié",
    mobileApps: "Applications Mobiles (iOS et Android)",
    nexaAI: "Assistant Médical NEXA AI",
    telemedicine: "Télémédecine et Appels Vidéo",
    patientPortal: "Portail Patient",
    adminApp: "Application d'Administration",
    doctorApp: "Application Médecin",
    labApp: "Application Laboratoire",
    pharmacyApp: "Application Pharmacie",
    patientApp: "Application Patient",
    aiAnalysis: "Analyse IA Rayons X et Images",
    voiceConsultation: "Consultations Vocales IA",
    drugInteraction: "Alertes Interactions Médicamenteuses",
    
    faqTitle: "Questions Fréquentes",
    faq1Q: "Qu'est-ce qui est inclus dans l'essai gratuit?",
    faq1A: "Toutes les fonctionnalités Professionnelles pendant 14 jours avec support complet et assistance à la migration des données.",
    faq2Q: "Puis-je mettre à niveau mon plan plus tard?",
    faq2A: "Oui, vous pouvez mettre à niveau à tout moment et nous calculerons le prorata de votre facturation.",
    faq3Q: "Y a-t-il des frais d'installation?",
    faq3A: "Pas de frais d'installation pour les plans Débutant et Professionnel. L'Entreprise a des services d'implémentation optionnels.",
    faq4Q: "Quels modes de paiement acceptez-vous?",
    faq4A: "Nous acceptons toutes les principales cartes de crédit, virements bancaires et pouvons facturer les paiements annuels.",
    
    ctaTitle: "Pas sûr du plan qui vous convient?",
    ctaSubtitle: "Notre équipe peut vous aider à choisir le plan parfait pour vos besoins.",
    ctaButton: "Parler aux Ventes",
  },
  de: {
    title: "Einfache, Transparente Preisgestaltung",
    subtitle: "Wählen Sie den Plan, der zu Ihrer Gesundheitseinrichtung passt",
    monthly: "Monatlich",
    yearly: "Jährlich",
    save: "20% Sparen",
    mostPopular: "Beliebteste",
    getStarted: "Jetzt Starten",
    contactSales: "Vertrieb Kontaktieren",
    perMonth: "/Monat",
    perYear: "/Jahr",
    perUser: "/Benutzer",
    
    starterName: "Starter",
    starterDesc: "Perfekt für kleine Praxen",
    professionalName: "Professional",
    professionalDesc: "Für wachsende Gesundheitseinrichtungen",
    enterpriseName: "Enterprise",
    enterpriseDesc: "Für große Krankenhäuser und Netzwerke",
    
    upTo: "Bis zu",
    users: "Benutzer",
    unlimitedUsers: "Unbegrenzte Benutzer",
    patients: "Patientenakten",
    unlimited: "Unbegrenzt",
    emr: "Elektronische Patientenakten",
    appointments: "Terminplanung",
    pharmacy: "Apothekenverwaltung",
    laboratory: "Laborintegration",
    billing: "Medizinische Abrechnung",
    analytics: "Basis-Analytik",
    advancedAnalytics: "Erweiterte Analytik und KI",
    customReports: "Individuelle Berichte",
    apiAccess: "API-Zugang",
    support24: "24/7 Prioritäts-Support",
    sla: "99.9% SLA",
    training: "Vor-Ort-Schulung",
    customization: "Vollständige Anpassung",
    multiLocation: "Multi-Standort-Unterstützung",
    dedicatedManager: "Dedizierter Account Manager",
    mobileApps: "Mobile Apps (iOS und Android)",
    nexaAI: "NEXA AI Medizinischer Assistent",
    telemedicine: "Telemedizin und Videoanrufe",
    patientPortal: "Patientenportal",
    adminApp: "Admin-App",
    doctorApp: "Arzt-App",
    labApp: "Labor-App",
    pharmacyApp: "Apotheken-App",
    patientApp: "Patienten-App",
    aiAnalysis: "KI Röntgen- und Bildanalyse",
    voiceConsultation: "KI Sprachberatung",
    drugInteraction: "Arzneimittelinteraktionswarnungen",
    
    faqTitle: "Häufig Gestellte Fragen",
    faq1Q: "Was ist in der kostenlosen Testversion enthalten?",
    faq1A: "Alle Professional-Funktionen für 14 Tage mit vollem Support und Unterstützung bei der Datenmigration.",
    faq2Q: "Kann ich meinen Plan später upgraden?",
    faq2A: "Ja, Sie können jederzeit upgraden und wir berechnen Ihre Rechnung anteilig.",
    faq3Q: "Gibt es Einrichtungsgebühren?",
    faq3A: "Keine Einrichtungsgebühren für Starter- und Professional-Pläne. Enterprise hat optionale Implementierungsdienste.",
    faq4Q: "Welche Zahlungsmethoden akzeptieren Sie?",
    faq4A: "Wir akzeptieren alle gängigen Kreditkarten, Banküberweisungen und können Rechnungen für Jahreszahlungen ausstellen.",
    
    ctaTitle: "Nicht sicher, welcher Plan der richtige ist?",
    ctaSubtitle: "Unser Team kann Ihnen helfen, den perfekten Plan für Ihre Bedürfnisse zu wählen.",
    ctaButton: "Mit dem Vertrieb Sprechen",
  },
  nl: {
    title: "Eenvoudige, Transparante Prijzen",
    subtitle: "Kies het plan dat past bij uw zorginstelling",
    monthly: "Maandelijks",
    yearly: "Jaarlijks",
    save: "Bespaar 20%",
    mostPopular: "Meest Populair",
    getStarted: "Aan de Slag",
    contactSales: "Contact Verkoop",
    perMonth: "/maand",
    perYear: "/jaar",
    perUser: "/gebruiker",
    
    starterName: "Starter",
    starterDesc: "Perfect voor kleine praktijken",
    professionalName: "Professioneel",
    professionalDesc: "Voor groeiende zorginstellingen",
    enterpriseName: "Enterprise",
    enterpriseDesc: "Voor grote ziekenhuizen en netwerken",
    
    upTo: "Tot",
    users: "gebruikers",
    unlimitedUsers: "Onbeperkte gebruikers",
    patients: "Patiëntendossiers",
    unlimited: "Onbeperkt",
    emr: "Elektronische Medische Dossiers",
    appointments: "Afspraken Plannen",
    pharmacy: "Apotheekbeheer",
    laboratory: "Laboratorium Integratie",
    billing: "Medische Facturering",
    analytics: "Basis Analyses",
    advancedAnalytics: "Geavanceerde Analyses en AI",
    customReports: "Aangepaste Rapporten",
    apiAccess: "API Toegang",
    support24: "24/7 Prioriteitsondersteuning",
    sla: "99.9% SLA",
    training: "Training op Locatie",
    customization: "Volledige Aanpassing",
    multiLocation: "Multi-locatie Ondersteuning",
    dedicatedManager: "Toegewezen Accountmanager",
    mobileApps: "Mobiele Apps (iOS en Android)",
    nexaAI: "NEXA AI Medische Assistent",
    telemedicine: "Telemedicijn en Videogesprekken",
    patientPortal: "Patiëntenportaal",
    adminApp: "Admin App",
    doctorApp: "Dokter App",
    labApp: "Laboratorium App",
    pharmacyApp: "Apotheek App",
    patientApp: "Patiënt App",
    aiAnalysis: "AI Röntgen- en Beeldanalyse",
    voiceConsultation: "AI Spraakconsultaties",
    drugInteraction: "Geneesmiddelinteractie Waarschuwingen",
    
    faqTitle: "Veelgestelde Vragen",
    faq1Q: "Wat is inbegrepen in de gratis proefperiode?",
    faq1A: "Alle Professionele functies gedurende 14 dagen met volledige ondersteuning en hulp bij datamigratie.",
    faq2Q: "Kan ik mijn plan later upgraden?",
    faq2A: "Ja, u kunt op elk moment upgraden en we berekenen uw factuur naar rato.",
    faq3Q: "Zijn er installatiekosten?",
    faq3A: "Geen installatiekosten voor Starter en Professionele plannen. Enterprise heeft optionele implementatiediensten.",
    faq4Q: "Welke betaalmethoden accepteert u?",
    faq4A: "We accepteren alle grote creditcards, bankoverschrijvingen en kunnen factureren voor jaarlijkse betalingen.",
    
    ctaTitle: "Niet zeker welk plan geschikt is?",
    ctaSubtitle: "Ons team kan u helpen het perfecte plan voor uw behoeften te kiezen.",
    ctaButton: "Praat met Verkoop",
  },
  it: {
    title: "Prezzi Semplici e Trasparenti",
    subtitle: "Scegli il piano adatto alla tua struttura sanitaria",
    monthly: "Mensile",
    yearly: "Annuale",
    save: "Risparmia 20%",
    mostPopular: "Più Popolare",
    getStarted: "Inizia",
    contactSales: "Contatta le Vendite",
    perMonth: "/mese",
    perYear: "/anno",
    perUser: "/utente",
    
    starterName: "Starter",
    starterDesc: "Perfetto per piccole cliniche",
    professionalName: "Professionale",
    professionalDesc: "Per strutture sanitarie in crescita",
    enterpriseName: "Enterprise",
    enterpriseDesc: "Per grandi ospedali e reti",
    
    upTo: "Fino a",
    users: "utenti",
    unlimitedUsers: "Utenti illimitati",
    patients: "Cartelle pazienti",
    unlimited: "Illimitato",
    emr: "Cartelle Mediche Elettroniche",
    appointments: "Pianificazione Appuntamenti",
    pharmacy: "Gestione Farmacia",
    laboratory: "Integrazione Laboratorio",
    billing: "Fatturazione Medica",
    analytics: "Analisi di Base",
    advancedAnalytics: "Analisi Avanzate e IA",
    customReports: "Report Personalizzati",
    apiAccess: "Accesso API",
    support24: "Supporto Prioritario 24/7",
    sla: "SLA 99.9%",
    training: "Formazione in Sede",
    customization: "Personalizzazione Completa",
    multiLocation: "Supporto Multi-sede",
    dedicatedManager: "Account Manager Dedicato",
    mobileApps: "App Mobile (iOS e Android)",
    nexaAI: "Assistente Medico NEXA AI",
    telemedicine: "Telemedicina e Videochiamate",
    patientPortal: "Portale Paziente",
    adminApp: "App Amministrazione",
    doctorApp: "App Medico",
    labApp: "App Laboratorio",
    pharmacyApp: "App Farmacia",
    patientApp: "App Paziente",
    aiAnalysis: "Analisi AI Raggi X e Immagini",
    voiceConsultation: "Consulenze Vocali AI",
    drugInteraction: "Avvisi Interazioni Farmaci",
    
    faqTitle: "Domande Frequenti",
    faq1Q: "Cosa è incluso nella prova gratuita?",
    faq1A: "Tutte le funzionalità Professionali per 14 giorni con supporto completo e assistenza alla migrazione dati.",
    faq2Q: "Posso aggiornare il mio piano in seguito?",
    faq2A: "Sì, puoi aggiornare in qualsiasi momento e calcoleremo proporzionalmente la tua fatturazione.",
    faq3Q: "Ci sono costi di configurazione?",
    faq3A: "Nessun costo di configurazione per i piani Starter e Professionale. Enterprise ha servizi di implementazione opzionali.",
    faq4Q: "Quali metodi di pagamento accettate?",
    faq4A: "Accettiamo tutte le principali carte di credito, bonifici bancari e possiamo fatturare per pagamenti annuali.",
    
    ctaTitle: "Non sei sicuro di quale piano sia giusto?",
    ctaSubtitle: "Il nostro team può aiutarti a scegliere il piano perfetto per le tue esigenze.",
    ctaButton: "Parla con le Vendite",
  },
  uk: {
    title: "Прості, Прозорі Ціни",
    subtitle: "Оберіть план, який підходить вашому медичному закладу",
    monthly: "Щомісяця",
    yearly: "Щорічно",
    save: "Знижка 20%",
    mostPopular: "Найпопулярніший",
    getStarted: "Почати",
    contactSales: "Зв'язатися з продажами",
    perMonth: "/місяць",
    perYear: "/рік",
    perUser: "/користувач",
    
    starterName: "Стартовий",
    starterDesc: "Ідеально для невеликих клінік",
    professionalName: "Професійний",
    professionalDesc: "Для зростаючих медичних закладів",
    enterpriseName: "Корпоративний",
    enterpriseDesc: "Для великих лікарень та мереж",
    
    upTo: "До",
    users: "користувачів",
    unlimitedUsers: "Необмежено користувачів",
    patients: "Записів пацієнтів",
    unlimited: "Необмежено",
    emr: "Електронні медичні картки",
    appointments: "Планування записів",
    pharmacy: "Управління аптекою",
    laboratory: "Інтеграція лабораторії",
    billing: "Медичний білінг",
    analytics: "Базова аналітика",
    advancedAnalytics: "Розширена аналітика та ШІ",
    customReports: "Власні звіти",
    apiAccess: "Доступ до API",
    support24: "Пріоритетна підтримка 24/7",
    sla: "SLA 99.9%",
    training: "Навчання на місці",
    customization: "Повна кастомізація",
    multiLocation: "Підтримка кількох локацій",
    dedicatedManager: "Персональний менеджер",
    mobileApps: "Мобільні додатки (iOS та Android)",
    nexaAI: "NEXA AI Медичний асистент",
    telemedicine: "Телемедицина та відеодзвінки",
    patientPortal: "Портал пацієнта",
    adminApp: "Додаток адміністратора",
    doctorApp: "Додаток лікаря",
    labApp: "Додаток лабораторії",
    pharmacyApp: "Додаток аптеки",
    patientApp: "Додаток пацієнта",
    aiAnalysis: "ШІ аналіз рентгену та зображень",
    voiceConsultation: "ШІ голосові консультації",
    drugInteraction: "Попередження про взаємодію ліків",
    
    faqTitle: "Часті Запитання",
    faq1Q: "Що включено в безкоштовну пробну версію?",
    faq1A: "Усі функції Професійного плану на 14 днів з повною підтримкою та допомогою в міграції даних.",
    faq2Q: "Чи можу я оновити план пізніше?",
    faq2A: "Так, ви можете оновити в будь-який час, і ми перерахуємо вашу оплату.",
    faq3Q: "Чи є плата за налаштування?",
    faq3A: "Немає плати за налаштування для Стартового та Професійного планів. Корпоративний має опціональні послуги впровадження.",
    faq4Q: "Які способи оплати ви приймаєте?",
    faq4A: "Ми приймаємо всі основні кредитні картки, банківські перекази та можемо виставляти рахунки на річні платежі.",
    
    ctaTitle: "Не впевнені, який план вам підходить?",
    ctaSubtitle: "Наша команда допоможе обрати ідеальний план для ваших потреб.",
    ctaButton: "Поговорити з продажами",
  },
};

const plans = [
  {
    key: "starter",
    originalPrice: 99,
    price: { monthly: 39, yearly: 31 },
    discount: 60,
    users: 5,
    patients: "1,000",
    features: ["emr", "appointments", "billing", "analytics", "patientPortal", "drugInteraction"],
    highlighted: false,
  },
  {
    key: "professional",
    originalPrice: 499,
    price: { monthly: 199, yearly: 159 },
    discount: 60,
    users: 25,
    patients: "10,000",
    features: ["emr", "appointments", "pharmacy", "laboratory", "billing", "advancedAnalytics", "customReports", "apiAccess", "mobileApps", "telemedicine", "patientPortal", "adminApp", "doctorApp", "drugInteraction"],
    highlighted: true,
  },
  {
    key: "enterprise",
    originalPrice: 999,
    price: { monthly: 399, yearly: 319 },
    discount: 60,
    users: null,
    patients: null,
    features: ["emr", "appointments", "pharmacy", "laboratory", "billing", "advancedAnalytics", "customReports", "apiAccess", "support24", "sla", "training", "customization", "multiLocation", "dedicatedManager", "mobileApps", "nexaAI", "telemedicine", "patientPortal", "adminApp", "doctorApp", "labApp", "pharmacyApp", "patientApp", "aiAnalysis", "voiceConsultation", "drugInteraction"],
    highlighted: false,
  },
];

export default function MCPricingPage() {
  const { language, isRTL } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const [isYearly, setIsYearly] = useState(true);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

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
            className="text-lg text-slate-600 dark:text-slate-400 mb-8"
          >
            {t.subtitle}
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                !isYearly 
                  ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow" 
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {t.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                isYearly 
                  ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow" 
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {t.yearly}
              <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                {t.save}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const nameKey = `${plan.key}Name` as keyof typeof t;
              const descKey = `${plan.key}Desc` as keyof typeof t;
              const price = plan.price[isYearly ? "yearly" : "monthly"];
              
              return (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 ${
                    plan.highlighted 
                      ? "border-emerald-500 shadow-xl" 
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-emerald-600 text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {t.mostPopular}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {t[nameKey]}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {t[descKey]}
                    </p>
                  </div>
                  
                  <div className="text-center mb-6">
                    {price ? (
                      <>
                        {plan.originalPrice && (
                          <div className="mb-1">
                            <span className="text-lg text-slate-400 line-through">${plan.originalPrice}</span>
                            <span className="ml-2 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">
                              -{plan.discount}%
                            </span>
                          </div>
                        )}
                        <span className="text-4xl font-bold text-slate-900 dark:text-white">${price}</span>
                        <span className="text-slate-500 dark:text-slate-400">{t.perUser}{isYearly ? t.perYear : t.perMonth}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">Custom</span>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    {plan.users ? (
                      <p className="text-slate-600 dark:text-slate-400">
                        {t.upTo} <span className="font-semibold text-slate-900 dark:text-white">{plan.users}</span> {t.users}
                      </p>
                    ) : (
                      <p className="font-semibold text-slate-900 dark:text-white">{t.unlimitedUsers}</p>
                    )}
                    <p className="text-slate-600 dark:text-slate-400">
                      {plan.patients ? plan.patients : t.unlimited} {t.patients}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {t[feature as keyof typeof t]}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/medcore/contact">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? "bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white" 
                          : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                      }`}
                    >
                      {price ? t.getStarted : t.contactSales}
                      <Arrow className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.faqTitle}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-600 rounded-3xl p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-emerald-100 mb-8">
              {t.ctaSubtitle}
            </p>
            <Link to="/medcore/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                {t.ctaButton}
                <Arrow className="w-4 h-4 ml-2" />
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
