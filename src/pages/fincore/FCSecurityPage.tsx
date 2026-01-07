import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Server, Cloud, Key, Eye, FileCheck, 
  CheckCircle2, Database, Globe, Award, Building2, 
  Fingerprint, ShieldCheck, AlertTriangle, RefreshCcw,
  HardDrive, Network, Cpu, MonitorCheck, Zap, CreditCard, Users
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Security & Data Protection",
    pageSubtitle: "Enterprise-grade security infrastructure protecting your financial data 24/7",
    
    // Hero Section
    heroTitle: "Bank-Grade Security",
    heroTitleHighlight: "For Your Data",
    heroSubtitle: "Your data is protected by the same security standards used by the world's leading financial institutions. We partner with Hetzner, one of Europe's most trusted data center providers.",
    
    // Hetzner Partnership
    hetznerTitle: "Strategic Partnership with Hetzner",
    hetznerSubtitle: "As strategic investors and partners with Hetzner Data Centers",
    hetznerDesc: "We've chosen Hetzner as our primary infrastructure partner for their unmatched commitment to data security, environmental sustainability, and European data sovereignty. Our investment in Hetzner reflects our long-term commitment to data protection.",
    
    hetznerFeature1: "German Data Centers",
    hetznerFeature1Desc: "Primary data centers in Nuremberg and Falkenstein, Germany - under strict EU data protection laws",
    hetznerFeature2: "Finnish Expansion",
    hetznerFeature2Desc: "Additional capacity in Helsinki, Finland for Nordic and Baltic region coverage",
    hetznerFeature3: "100% Green Energy",
    hetznerFeature3Desc: "All data centers powered by renewable energy sources",
    hetznerFeature4: "ISO 27001 Certified",
    hetznerFeature4Desc: "Internationally recognized information security management certification",
    
    // Security Standards
    securityTitle: "Security Standards & Certifications",
    securitySubtitle: "Meeting and exceeding international security requirements",
    
    cert1: "ISO 27001",
    cert1Desc: "Information Security Management System certification",
    cert2: "SOC 2 Type II",
    cert2Desc: "Service Organization Control audit compliance",
    cert3: "PCI DSS",
    cert3Desc: "Payment Card Industry Data Security Standard",
    cert4: "GDPR Compliant",
    cert4Desc: "Full European data protection regulation compliance",
    
    // Encryption
    encryptionTitle: "Military-Grade Encryption",
    encryptionSubtitle: "Your data is encrypted at rest and in transit",
    
    enc1: "AES-256 Encryption",
    enc1Desc: "All data encrypted with Advanced Encryption Standard 256-bit",
    enc2: "TLS 1.3",
    enc2Desc: "Latest transport layer security for all communications",
    enc3: "End-to-End Encryption",
    enc3Desc: "Data encrypted from your device to our servers",
    enc4: "Zero-Knowledge Architecture",
    enc4Desc: "We cannot access your encrypted data",
    
    // Infrastructure
    infraTitle: "Redundant Infrastructure",
    infraSubtitle: "Built for 99.99% uptime and disaster recovery",
    
    infra1: "Multi-Zone Deployment",
    infra1Desc: "Services distributed across multiple availability zones",
    infra2: "Real-time Replication",
    infra2Desc: "Data replicated in real-time to backup locations",
    infra3: "Automated Failover",
    infra3Desc: "Automatic switch to backup systems in case of failure",
    infra4: "Daily Backups",
    infra4Desc: "Encrypted backups with 30-day retention",
    
    // Access Control
    accessTitle: "Access Control & Monitoring",
    accessSubtitle: "Multi-layered security with continuous monitoring",
    
    access1: "Multi-Factor Authentication",
    access1Desc: "2FA required for all administrative access",
    access2: "Role-Based Access",
    access2Desc: "Granular permissions based on user roles",
    access3: "24/7 Monitoring",
    access3Desc: "Continuous security monitoring and threat detection",
    access4: "Audit Logging",
    access4Desc: "Complete audit trail of all system activities",
    
    // Stats
    stat1: "99.99%",
    stat1Label: "Uptime SLA",
    stat2: "0",
    stat2Label: "Data Breaches",
    stat3: "24/7",
    stat3Label: "Security Monitoring",
    stat4: "<10ms",
    stat4Label: "Response Time",
    
    // CTA
    ctaTitle: "Ready to Secure Your Financial Operations?",
    ctaSubtitle: "Join hundreds of financial institutions that trust FinCore with their data",
    ctaButton: "Request Security Audit",
    learnMore: "Download Security Whitepaper",
  },
  ar: {
    pageTitle: "الأمان وحماية البيانات",
    pageSubtitle: "بنية تحتية أمنية بمستوى المؤسسات تحمي بياناتك المالية على مدار الساعة",
    
    heroTitle: "أمان بمستوى",
    heroTitleHighlight: "البنوك العالمية",
    heroSubtitle: "بياناتك محمية بنفس معايير الأمان المستخدمة في المؤسسات المالية الرائدة عالمياً. نحن شركاء استراتيجيون مع Hetzner، أحد أكثر مزودي مراكز البيانات موثوقية في أوروبا.",
    
    hetznerTitle: "شراكة استراتيجية مع Hetzner",
    hetznerSubtitle: "كمستثمرين وشركاء استراتيجيين مع مراكز بيانات هيتزنر",
    hetznerDesc: "اخترنا Hetzner كشريكنا الرئيسي للبنية التحتية لالتزامهم الفائق بأمن البيانات والاستدامة البيئية وسيادة البيانات الأوروبية. استثمارنا في Hetzner يعكس التزامنا طويل الأمد بحماية البيانات.",
    
    hetznerFeature1: "مراكز بيانات ألمانية",
    hetznerFeature1Desc: "مراكز البيانات الرئيسية في نورمبرغ وفالكنشتاين، ألمانيا - تحت قوانين حماية البيانات الأوروبية الصارمة",
    hetznerFeature2: "توسع فنلندي",
    hetznerFeature2Desc: "سعة إضافية في هلسنكي، فنلندا لتغطية منطقة الشمال والبلطيق",
    hetznerFeature3: "طاقة خضراء 100%",
    hetznerFeature3Desc: "جميع مراكز البيانات تعمل بمصادر الطاقة المتجددة",
    hetznerFeature4: "شهادة ISO 27001",
    hetznerFeature4Desc: "شهادة نظام إدارة أمن المعلومات المعترف بها دولياً",
    
    securityTitle: "معايير الأمان والشهادات",
    securitySubtitle: "نستوفي ونتجاوز متطلبات الأمان الدولية",
    
    cert1: "ISO 27001",
    cert1Desc: "شهادة نظام إدارة أمن المعلومات",
    cert2: "SOC 2 Type II",
    cert2Desc: "امتثال تدقيق التحكم في منظمة الخدمة",
    cert3: "PCI DSS",
    cert3Desc: "معيار أمان بيانات صناعة بطاقات الدفع",
    cert4: "متوافق مع GDPR",
    cert4Desc: "امتثال كامل للائحة حماية البيانات الأوروبية",
    
    encryptionTitle: "تشفير بدرجة عسكرية",
    encryptionSubtitle: "بياناتك مشفرة في حالة السكون والنقل",
    
    enc1: "تشفير AES-256",
    enc1Desc: "جميع البيانات مشفرة بمعيار التشفير المتقدم 256 بت",
    enc2: "TLS 1.3",
    enc2Desc: "أحدث أمان طبقة النقل لجميع الاتصالات",
    enc3: "تشفير من طرف لطرف",
    enc3Desc: "البيانات مشفرة من جهازك إلى خوادمنا",
    enc4: "بنية صفر المعرفة",
    enc4Desc: "لا يمكننا الوصول إلى بياناتك المشفرة",
    
    infraTitle: "بنية تحتية متكررة",
    infraSubtitle: "مصممة لوقت تشغيل 99.99% والتعافي من الكوارث",
    
    infra1: "نشر متعدد المناطق",
    infra1Desc: "الخدمات موزعة عبر مناطق توافر متعددة",
    infra2: "نسخ في الوقت الفعلي",
    infra2Desc: "البيانات منسوخة في الوقت الفعلي إلى مواقع احتياطية",
    infra3: "تجاوز الفشل التلقائي",
    infra3Desc: "التبديل التلقائي إلى الأنظمة الاحتياطية في حالة الفشل",
    infra4: "نسخ احتياطي يومي",
    infra4Desc: "نسخ احتياطية مشفرة مع احتفاظ 30 يوماً",
    
    accessTitle: "التحكم في الوصول والمراقبة",
    accessSubtitle: "أمان متعدد الطبقات مع مراقبة مستمرة",
    
    access1: "المصادقة متعددة العوامل",
    access1Desc: "المصادقة الثنائية مطلوبة لجميع الوصول الإداري",
    access2: "الوصول القائم على الأدوار",
    access2Desc: "صلاحيات دقيقة بناءً على أدوار المستخدمين",
    access3: "مراقبة على مدار الساعة",
    access3Desc: "مراقبة أمنية مستمرة واكتشاف التهديدات",
    access4: "تسجيل التدقيق",
    access4Desc: "سجل تدقيق كامل لجميع أنشطة النظام",
    
    stat1: "99.99%",
    stat1Label: "اتفاقية وقت التشغيل",
    stat2: "0",
    stat2Label: "اختراقات للبيانات",
    stat3: "24/7",
    stat3Label: "المراقبة الأمنية",
    stat4: "<10مللي ثانية",
    stat4Label: "زمن الاستجابة",
    
    ctaTitle: "جاهز لتأمين عملياتك المالية؟",
    ctaSubtitle: "انضم إلى مئات المؤسسات المالية التي تثق في FinCore ببياناتها",
    ctaButton: "اطلب تدقيق أمني",
    learnMore: "تحميل الورقة البيضاء للأمان",
  },
  tr: {
    pageTitle: "Güvenlik ve Veri Koruma",
    pageSubtitle: "Finansal verilerinizi 7/24 koruyan kurumsal düzeyde güvenlik altyapısı",
    
    heroTitle: "Banka Düzeyinde",
    heroTitleHighlight: "Güvenlik",
    heroSubtitle: "Verileriniz dünyanın önde gelen finans kuruluşları tarafından kullanılan aynı güvenlik standartlarıyla korunmaktadır. Avrupa'nın en güvenilir veri merkezi sağlayıcılarından Hetzner ile stratejik ortağız.",
    
    hetznerTitle: "Hetzner ile Stratejik Ortaklık",
    hetznerSubtitle: "Hetzner Veri Merkezleri ile stratejik yatırımcı ve ortaklar olarak",
    hetznerDesc: "Veri güvenliğine, çevresel sürdürülebilirliğe ve Avrupa veri egemenliğine olan eşsiz bağlılıkları nedeniyle Hetzner'i ana altyapı ortağımız olarak seçtik. Hetzner'deki yatırımımız, veri korumaya olan uzun vadeli bağlılığımızı yansıtıyor.",
    
    hetznerFeature1: "Alman Veri Merkezleri",
    hetznerFeature1Desc: "Almanya'nın Nürnberg ve Falkenstein'daki ana veri merkezleri - katı AB veri koruma yasaları altında",
    hetznerFeature2: "Finlandiya Genişlemesi",
    hetznerFeature2Desc: "Kuzey ve Baltık bölgesi kapsamı için Helsinki, Finlandiya'da ek kapasite",
    hetznerFeature3: "%100 Yeşil Enerji",
    hetznerFeature3Desc: "Tüm veri merkezleri yenilenebilir enerji kaynakları ile çalışmaktadır",
    hetznerFeature4: "ISO 27001 Sertifikalı",
    hetznerFeature4Desc: "Uluslararası kabul görmüş bilgi güvenliği yönetim sistemi sertifikası",
    
    securityTitle: "Güvenlik Standartları ve Sertifikalar",
    securitySubtitle: "Uluslararası güvenlik gereksinimlerini karşılıyor ve aşıyoruz",
    
    cert1: "ISO 27001",
    cert1Desc: "Bilgi Güvenliği Yönetim Sistemi sertifikası",
    cert2: "SOC 2 Tip II",
    cert2Desc: "Hizmet Organizasyonu Kontrol denetim uyumluluğu",
    cert3: "PCI DSS",
    cert3Desc: "Ödeme Kartı Endüstrisi Veri Güvenliği Standardı",
    cert4: "GDPR Uyumlu",
    cert4Desc: "Tam Avrupa veri koruma yönetmeliği uyumluluğu",
    
    encryptionTitle: "Askeri Düzeyde Şifreleme",
    encryptionSubtitle: "Verileriniz durağan ve transit halinde şifrelenir",
    
    enc1: "AES-256 Şifreleme",
    enc1Desc: "Tüm veriler 256 bit Gelişmiş Şifreleme Standardı ile şifrelenir",
    enc2: "TLS 1.3",
    enc2Desc: "Tüm iletişimler için en son taşıma katmanı güvenliği",
    enc3: "Uçtan Uca Şifreleme",
    enc3Desc: "Veriler cihazınızdan sunucularımıza kadar şifrelenir",
    enc4: "Sıfır Bilgi Mimarisi",
    enc4Desc: "Şifreli verilerinize erişemiyoruz",
    
    infraTitle: "Yedekli Altyapı",
    infraSubtitle: "%99.99 çalışma süresi ve felaket kurtarma için tasarlandı",
    
    infra1: "Çok Bölgeli Dağıtım",
    infra1Desc: "Hizmetler birden fazla kullanılabilirlik bölgesine dağıtılmıştır",
    infra2: "Gerçek Zamanlı Replikasyon",
    infra2Desc: "Veriler yedek konumlara gerçek zamanlı olarak çoğaltılır",
    infra3: "Otomatik Yük Devretme",
    infra3Desc: "Arıza durumunda yedek sistemlere otomatik geçiş",
    infra4: "Günlük Yedekleme",
    infra4Desc: "30 günlük saklama ile şifreli yedeklemeler",
    
    accessTitle: "Erişim Kontrolü ve İzleme",
    accessSubtitle: "Sürekli izleme ile çok katmanlı güvenlik",
    
    access1: "Çok Faktörlü Kimlik Doğrulama",
    access1Desc: "Tüm yönetici erişimi için 2FA gereklidir",
    access2: "Rol Tabanlı Erişim",
    access2Desc: "Kullanıcı rollerine dayalı ayrıntılı izinler",
    access3: "7/24 İzleme",
    access3Desc: "Sürekli güvenlik izleme ve tehdit algılama",
    access4: "Denetim Günlüğü",
    access4Desc: "Tüm sistem etkinliklerinin tam denetim izi",
    
    stat1: "%99.99",
    stat1Label: "Çalışma Süresi SLA",
    stat2: "0",
    stat2Label: "Veri İhlali",
    stat3: "7/24",
    stat3Label: "Güvenlik İzleme",
    stat4: "<10ms",
    stat4Label: "Yanıt Süresi",
    
    ctaTitle: "Finansal Operasyonlarınızı Güvence Altına Almaya Hazır mısınız?",
    ctaSubtitle: "Verilerini FinCore'a emanet eden yüzlerce finans kuruluşuna katılın",
    ctaButton: "Güvenlik Denetimi Talep Et",
    learnMore: "Güvenlik Teknik Dokümanını İndir",
  },
  uk: {
    pageTitle: "Безпека та Захист Даних",
    pageSubtitle: "Інфраструктура безпеки корпоративного рівня, що захищає ваші фінансові дані 24/7",
    
    heroTitle: "Безпека Банківського",
    heroTitleHighlight: "Рівня",
    heroSubtitle: "Ваші дані захищені тими ж стандартами безпеки, що використовуються провідними фінансовими установами світу. Ми є стратегічними партнерами Hetzner, одного з найнадійніших постачальників дата-центрів Європи.",
    
    hetznerTitle: "Стратегічне Партнерство з Hetzner",
    hetznerSubtitle: "Як стратегічні інвестори та партнери Hetzner Data Centers",
    hetznerDesc: "Ми обрали Hetzner як нашого основного інфраструктурного партнера завдяки їхній неперевершеній відданості безпеці даних, екологічній стійкості та європейському суверенітету даних.",
    
    hetznerFeature1: "Німецькі Дата-центри",
    hetznerFeature1Desc: "Основні дата-центри в Нюрнберзі та Фалькенштайні, Німеччина - під суворими законами ЄС про захист даних",
    hetznerFeature2: "Розширення у Фінляндії",
    hetznerFeature2Desc: "Додаткова потужність у Гельсінкі, Фінляндія для покриття Північного та Балтійського регіону",
    hetznerFeature3: "100% Зелена Енергія",
    hetznerFeature3Desc: "Усі дата-центри працюють на відновлюваних джерелах енергії",
    hetznerFeature4: "Сертифікат ISO 27001",
    hetznerFeature4Desc: "Міжнародно визнана сертифікація системи управління інформаційною безпекою",
    
    securityTitle: "Стандарти Безпеки та Сертифікації",
    securitySubtitle: "Відповідаємо та перевищуємо міжнародні вимоги безпеки",
    
    cert1: "ISO 27001",
    cert1Desc: "Сертифікація системи управління інформаційною безпекою",
    cert2: "SOC 2 Type II",
    cert2Desc: "Відповідність аудиту Service Organization Control",
    cert3: "PCI DSS",
    cert3Desc: "Стандарт безпеки даних індустрії платіжних карток",
    cert4: "Відповідність GDPR",
    cert4Desc: "Повна відповідність європейському регламенту захисту даних",
    
    encryptionTitle: "Шифрування Військового Рівня",
    encryptionSubtitle: "Ваші дані зашифровані в стані спокою та під час передачі",
    
    enc1: "Шифрування AES-256",
    enc1Desc: "Усі дані зашифровані 256-бітним Advanced Encryption Standard",
    enc2: "TLS 1.3",
    enc2Desc: "Найновіша безпека транспортного рівня для всіх комунікацій",
    enc3: "Наскрізне Шифрування",
    enc3Desc: "Дані зашифровані від вашого пристрою до наших серверів",
    enc4: "Архітектура Нульового Знання",
    enc4Desc: "Ми не маємо доступу до ваших зашифрованих даних",
    
    infraTitle: "Резервна Інфраструктура",
    infraSubtitle: "Створена для 99.99% часу роботи та аварійного відновлення",
    
    infra1: "Багатозонне Розгортання",
    infra1Desc: "Сервіси розподілені по кількох зонах доступності",
    infra2: "Реплікація в Реальному Часі",
    infra2Desc: "Дані реплікуються в реальному часі до резервних локацій",
    infra3: "Автоматичне Перемикання",
    infra3Desc: "Автоматичне перемикання на резервні системи у разі збою",
    infra4: "Щоденне Резервне Копіювання",
    infra4Desc: "Зашифровані резервні копії зі збереженням 30 днів",
    
    accessTitle: "Контроль Доступу та Моніторинг",
    accessSubtitle: "Багаторівнева безпека з постійним моніторингом",
    
    access1: "Багатофакторна Автентифікація",
    access1Desc: "2FA обов'язкова для всього адміністративного доступу",
    access2: "Доступ на Основі Ролей",
    access2Desc: "Детальні дозволи на основі ролей користувачів",
    access3: "Моніторинг 24/7",
    access3Desc: "Постійний моніторинг безпеки та виявлення загроз",
    access4: "Журнал Аудиту",
    access4Desc: "Повний аудиторський слід усіх системних дій",
    
    stat1: "99.99%",
    stat1Label: "SLA Часу Роботи",
    stat2: "0",
    stat2Label: "Витоків Даних",
    stat3: "24/7",
    stat3Label: "Моніторинг Безпеки",
    stat4: "<10мс",
    stat4Label: "Час Відповіді",
    
    ctaTitle: "Готові Захистити Ваші Фінансові Операції?",
    ctaSubtitle: "Приєднуйтесь до сотень фінансових установ, які довіряють FinCore свої дані",
    ctaButton: "Запросити Аудит Безпеки",
    learnMore: "Завантажити Білу Книгу Безпеки",
  },
  pl: {
    pageTitle: "Bezpieczeństwo i Ochrona Danych",
    pageSubtitle: "Infrastruktura bezpieczeństwa klasy korporacyjnej chroniąca Twoje dane finansowe 24/7",
    
    heroTitle: "Bezpieczeństwo Na Poziomie",
    heroTitleHighlight: "Bankowym",
    heroSubtitle: "Twoje dane są chronione tymi samymi standardami bezpieczeństwa, które stosują wiodące światowe instytucje finansowe. Jesteśmy strategicznymi partnerami Hetzner, jednego z najbardziej zaufanych dostawców centrów danych w Europie.",
    
    hetznerTitle: "Strategiczne Partnerstwo z Hetzner",
    hetznerSubtitle: "Jako strategiczni inwestorzy i partnerzy Hetzner Data Centers",
    hetznerDesc: "Wybraliśmy Hetzner jako naszego głównego partnera infrastrukturalnego ze względu na ich niezrównane zaangażowanie w bezpieczeństwo danych, zrównoważony rozwój środowiskowy i europejską suwerenność danych.",
    
    hetznerFeature1: "Niemieckie Centra Danych",
    hetznerFeature1Desc: "Główne centra danych w Norymberdze i Falkenstein w Niemczech - pod surowymi przepisami UE o ochronie danych",
    hetznerFeature2: "Ekspansja Fińska",
    hetznerFeature2Desc: "Dodatkowa pojemność w Helsinkach, Finlandia dla pokrycia regionu nordyckiego i bałtyckiego",
    hetznerFeature3: "100% Zielona Energia",
    hetznerFeature3Desc: "Wszystkie centra danych zasilane odnawialnymi źródłami energii",
    hetznerFeature4: "Certyfikat ISO 27001",
    hetznerFeature4Desc: "Międzynarodowo uznana certyfikacja systemu zarządzania bezpieczeństwem informacji",
    
    securityTitle: "Standardy Bezpieczeństwa i Certyfikaty",
    securitySubtitle: "Spełniamy i przekraczamy międzynarodowe wymagania bezpieczeństwa",
    
    cert1: "ISO 27001",
    cert1Desc: "Certyfikacja systemu zarządzania bezpieczeństwem informacji",
    cert2: "SOC 2 Type II",
    cert2Desc: "Zgodność z audytem Service Organization Control",
    cert3: "PCI DSS",
    cert3Desc: "Standard bezpieczeństwa danych branży kart płatniczych",
    cert4: "Zgodność z GDPR",
    cert4Desc: "Pełna zgodność z europejskim rozporządzeniem o ochronie danych",
    
    encryptionTitle: "Szyfrowanie Klasy Wojskowej",
    encryptionSubtitle: "Twoje dane są szyfrowane w stanie spoczynku i podczas przesyłania",
    
    enc1: "Szyfrowanie AES-256",
    enc1Desc: "Wszystkie dane szyfrowane 256-bitowym Advanced Encryption Standard",
    enc2: "TLS 1.3",
    enc2Desc: "Najnowsze zabezpieczenia warstwy transportowej dla całej komunikacji",
    enc3: "Szyfrowanie End-to-End",
    enc3Desc: "Dane szyfrowane od urządzenia do naszych serwerów",
    enc4: "Architektura Zero-Knowledge",
    enc4Desc: "Nie mamy dostępu do Twoich zaszyfrowanych danych",
    
    infraTitle: "Redundantna Infrastruktura",
    infraSubtitle: "Zbudowana dla 99.99% czasu pracy i odzyskiwania po awarii",
    
    infra1: "Wielostrefowe Wdrożenie",
    infra1Desc: "Usługi rozproszone w wielu strefach dostępności",
    infra2: "Replikacja w Czasie Rzeczywistym",
    infra2Desc: "Dane replikowane w czasie rzeczywistym do lokalizacji zapasowych",
    infra3: "Automatyczne Przełączanie",
    infra3Desc: "Automatyczne przełączanie na systemy zapasowe w przypadku awarii",
    infra4: "Codzienne Kopie Zapasowe",
    infra4Desc: "Zaszyfrowane kopie zapasowe z 30-dniowym przechowywaniem",
    
    accessTitle: "Kontrola Dostępu i Monitorowanie",
    accessSubtitle: "Wielowarstwowe bezpieczeństwo z ciągłym monitorowaniem",
    
    access1: "Wieloczynnikowe Uwierzytelnianie",
    access1Desc: "2FA wymagane dla całego dostępu administracyjnego",
    access2: "Dostęp Oparty na Rolach",
    access2Desc: "Szczegółowe uprawnienia oparte na rolach użytkowników",
    access3: "Monitoring 24/7",
    access3Desc: "Ciągłe monitorowanie bezpieczeństwa i wykrywanie zagrożeń",
    access4: "Dziennik Audytu",
    access4Desc: "Pełny ślad audytu wszystkich działań systemowych",
    
    stat1: "99.99%",
    stat1Label: "SLA Czasu Pracy",
    stat2: "0",
    stat2Label: "Naruszeń Danych",
    stat3: "24/7",
    stat3Label: "Monitoring Bezpieczeństwa",
    stat4: "<10ms",
    stat4Label: "Czas Odpowiedzi",
    
    ctaTitle: "Gotowy Zabezpieczyć Swoje Operacje Finansowe?",
    ctaSubtitle: "Dołącz do setek instytucji finansowych, które powierzają swoje dane FinCore",
    ctaButton: "Zamów Audyt Bezpieczeństwa",
    learnMore: "Pobierz Białą Księgę Bezpieczeństwa",
  },
  ro: {
    pageTitle: "Securitate și Protecția Datelor",
    pageSubtitle: "Infrastructură de securitate de nivel enterprise care vă protejează datele financiare 24/7",
    
    heroTitle: "Securitate de Nivel",
    heroTitleHighlight: "Bancar",
    heroSubtitle: "Datele dumneavoastră sunt protejate de aceleași standarde de securitate utilizate de instituțiile financiare de top din lume. Suntem parteneri strategici cu Hetzner, unul dintre cei mai de încredere furnizori de centre de date din Europa.",
    
    hetznerTitle: "Parteneriat Strategic cu Hetzner",
    hetznerSubtitle: "Ca investitori și parteneri strategici ai Hetzner Data Centers",
    hetznerDesc: "Am ales Hetzner ca partener principal de infrastructură pentru angajamentul lor fără egal față de securitatea datelor, sustenabilitatea mediului și suveranitatea datelor europene.",
    
    hetznerFeature1: "Centre de Date Germane",
    hetznerFeature1Desc: "Centre de date principale în Nürnberg și Falkenstein, Germania - sub legile stricte UE de protecție a datelor",
    hetznerFeature2: "Expansiune Finlandeză",
    hetznerFeature2Desc: "Capacitate suplimentară în Helsinki, Finlanda pentru acoperirea regiunii nordice și baltice",
    hetznerFeature3: "100% Energie Verde",
    hetznerFeature3Desc: "Toate centrele de date alimentate din surse de energie regenerabilă",
    hetznerFeature4: "Certificat ISO 27001",
    hetznerFeature4Desc: "Certificare a sistemului de management al securității informației recunoscută internațional",
    
    securityTitle: "Standarde de Securitate și Certificări",
    securitySubtitle: "Îndeplinim și depășim cerințele internaționale de securitate",
    
    cert1: "ISO 27001",
    cert1Desc: "Certificare a sistemului de management al securității informației",
    cert2: "SOC 2 Type II",
    cert2Desc: "Conformitate cu auditul Service Organization Control",
    cert3: "PCI DSS",
    cert3Desc: "Standard de securitate a datelor în industria cardurilor de plată",
    cert4: "Conformitate GDPR",
    cert4Desc: "Conformitate completă cu regulamentul european de protecție a datelor",
    
    encryptionTitle: "Criptare de Nivel Militar",
    encryptionSubtitle: "Datele dumneavoastră sunt criptate în repaus și în tranzit",
    
    enc1: "Criptare AES-256",
    enc1Desc: "Toate datele criptate cu Advanced Encryption Standard pe 256 biți",
    enc2: "TLS 1.3",
    enc2Desc: "Cea mai recentă securitate a stratului de transport pentru toate comunicațiile",
    enc3: "Criptare End-to-End",
    enc3Desc: "Datele criptate de la dispozitivul dvs. la serverele noastre",
    enc4: "Arhitectură Zero-Knowledge",
    enc4Desc: "Nu putem accesa datele dumneavoastră criptate",
    
    infraTitle: "Infrastructură Redundantă",
    infraSubtitle: "Construită pentru 99.99% uptime și recuperare în caz de dezastru",
    
    infra1: "Implementare Multi-Zonă",
    infra1Desc: "Servicii distribuite în mai multe zone de disponibilitate",
    infra2: "Replicare în Timp Real",
    infra2Desc: "Date replicate în timp real în locații de backup",
    infra3: "Failover Automat",
    infra3Desc: "Comutare automată la sistemele de backup în caz de defecțiune",
    infra4: "Backup Zilnic",
    infra4Desc: "Backup-uri criptate cu retenție de 30 de zile",
    
    accessTitle: "Control Acces și Monitorizare",
    accessSubtitle: "Securitate multi-strat cu monitorizare continuă",
    
    access1: "Autentificare Multi-Factor",
    access1Desc: "2FA obligatorie pentru tot accesul administrativ",
    access2: "Acces Bazat pe Roluri",
    access2Desc: "Permisiuni granulare bazate pe rolurile utilizatorilor",
    access3: "Monitorizare 24/7",
    access3Desc: "Monitorizare continuă a securității și detectarea amenințărilor",
    access4: "Jurnal de Audit",
    access4Desc: "Urmărire completă de audit a tuturor activităților sistemului",
    
    stat1: "99.99%",
    stat1Label: "SLA Uptime",
    stat2: "0",
    stat2Label: "Încălcări de Date",
    stat3: "24/7",
    stat3Label: "Monitorizare Securitate",
    stat4: "<10ms",
    stat4Label: "Timp de Răspuns",
    
    ctaTitle: "Pregătit să Vă Securizați Operațiunile Financiare?",
    ctaSubtitle: "Alăturați-vă sutelor de instituții financiare care își încredințează datele la FinCore",
    ctaButton: "Solicită Audit de Securitate",
    learnMore: "Descarcă Cartea Albă de Securitate",
  },
  ru: {
    pageTitle: "Безопасность и Защита Данных",
    pageSubtitle: "Инфраструктура безопасности корпоративного уровня, защищающая ваши финансовые данные 24/7",
    
    heroTitle: "Безопасность Банковского",
    heroTitleHighlight: "Уровня",
    heroSubtitle: "Ваши данные защищены теми же стандартами безопасности, которые используются ведущими финансовыми учреждениями мира. Мы являемся стратегическими партнерами Hetzner, одного из самых надежных поставщиков дата-центров Европы.",
    
    hetznerTitle: "Стратегическое Партнерство с Hetzner",
    hetznerSubtitle: "Как стратегические инвесторы и партнеры Hetzner Data Centers",
    hetznerDesc: "Мы выбрали Hetzner в качестве нашего основного инфраструктурного партнера благодаря их непревзойденной приверженности безопасности данных, экологической устойчивости и европейскому суверенитету данных.",
    
    hetznerFeature1: "Немецкие Дата-центры",
    hetznerFeature1Desc: "Основные дата-центры в Нюрнберге и Фалькенштайне, Германия - под строгими законами ЕС о защите данных",
    hetznerFeature2: "Расширение в Финляндии",
    hetznerFeature2Desc: "Дополнительная мощность в Хельсинки, Финляндия для покрытия Северного и Балтийского региона",
    hetznerFeature3: "100% Зеленая Энергия",
    hetznerFeature3Desc: "Все дата-центры работают на возобновляемых источниках энергии",
    hetznerFeature4: "Сертификат ISO 27001",
    hetznerFeature4Desc: "Международно признанная сертификация системы управления информационной безопасностью",
    
    securityTitle: "Стандарты Безопасности и Сертификаты",
    securitySubtitle: "Соответствуем и превосходим международные требования безопасности",
    
    cert1: "ISO 27001",
    cert1Desc: "Сертификация системы управления информационной безопасностью",
    cert2: "SOC 2 Type II",
    cert2Desc: "Соответствие аудиту Service Organization Control",
    cert3: "PCI DSS",
    cert3Desc: "Стандарт безопасности данных индустрии платежных карт",
    cert4: "Соответствие GDPR",
    cert4Desc: "Полное соответствие европейскому регламенту защиты данных",
    
    encryptionTitle: "Шифрование Военного Уровня",
    encryptionSubtitle: "Ваши данные зашифрованы в состоянии покоя и при передаче",
    
    enc1: "Шифрование AES-256",
    enc1Desc: "Все данные зашифрованы 256-битным Advanced Encryption Standard",
    enc2: "TLS 1.3",
    enc2Desc: "Новейшая безопасность транспортного уровня для всех коммуникаций",
    enc3: "Сквозное Шифрование",
    enc3Desc: "Данные зашифрованы от вашего устройства до наших серверов",
    enc4: "Архитектура Нулевого Знания",
    enc4Desc: "Мы не имеем доступа к вашим зашифрованным данным",
    
    infraTitle: "Резервная Инфраструктура",
    infraSubtitle: "Создана для 99.99% времени работы и аварийного восстановления",
    
    infra1: "Многозонное Развертывание",
    infra1Desc: "Сервисы распределены по нескольким зонам доступности",
    infra2: "Репликация в Реальном Времени",
    infra2Desc: "Данные реплицируются в реальном времени в резервные локации",
    infra3: "Автоматическое Переключение",
    infra3Desc: "Автоматическое переключение на резервные системы в случае сбоя",
    infra4: "Ежедневное Резервное Копирование",
    infra4Desc: "Зашифрованные резервные копии с хранением 30 дней",
    
    accessTitle: "Контроль Доступа и Мониторинг",
    accessSubtitle: "Многоуровневая безопасность с постоянным мониторингом",
    
    access1: "Многофакторная Аутентификация",
    access1Desc: "2FA обязательна для всего административного доступа",
    access2: "Доступ на Основе Ролей",
    access2Desc: "Детальные разрешения на основе ролей пользователей",
    access3: "Мониторинг 24/7",
    access3Desc: "Постоянный мониторинг безопасности и обнаружение угроз",
    access4: "Журнал Аудита",
    access4Desc: "Полный аудиторский след всех системных действий",
    
    stat1: "99.99%",
    stat1Label: "SLA Времени Работы",
    stat2: "0",
    stat2Label: "Утечек Данных",
    stat3: "24/7",
    stat3Label: "Мониторинг Безопасности",
    stat4: "<10мс",
    stat4Label: "Время Отклика",
    
    ctaTitle: "Готовы Защитить Ваши Финансовые Операции?",
    ctaSubtitle: "Присоединяйтесь к сотням финансовых учреждений, которые доверяют FinCore свои данные",
    ctaButton: "Запросить Аудит Безопасности",
    learnMore: "Скачать Белую Книгу Безопасности",
  },
};

const FCSecurityPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const isRTL = dir === "rtl";
  const t = translations[language as keyof typeof translations] || translations.en;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0A1628] text-white" : "bg-[#FAF8F5] text-slate-900"}`} dir={dir}>
      <FCHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center overflow-hidden ${
        theme === "dark" 
          ? "bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0A1628]" 
          : "bg-gradient-to-br from-[#FAF8F5] via-white to-[#f0f9ff]"
      }`}>
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl ${
            theme === "dark" ? "bg-teal-500/5" : "bg-teal-500/10"
          }`} />
          <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-cyan-500/5" : "bg-cyan-500/10"
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
                <Shield className="w-4 h-4" />
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
            
            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { value: t.stat1, label: t.stat1Label, icon: Server },
                { value: t.stat2, label: t.stat2Label, icon: Shield },
                { value: t.stat3, label: t.stat3Label, icon: Eye },
                { value: t.stat4, label: t.stat4Label, icon: Zap }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700/50" 
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <stat.icon className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-teal-500">{stat.value}</div>
                  <div className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hetzner Partnership Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-slate-900/50" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.hetznerTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.hetznerSubtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className={`p-8 rounded-3xl ${
                  theme === "dark" 
                    ? "bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700" 
                    : "bg-gradient-to-br from-slate-50 to-white border border-slate-200"
                }`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl">
                      H
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Hetzner</h3>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        Data Centers
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    {t.hetznerDesc}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe, title: t.hetznerFeature1, desc: t.hetznerFeature1Desc, flag: "🇩🇪" },
                  { icon: Server, title: t.hetznerFeature2, desc: t.hetznerFeature2Desc, flag: "🇫🇮" },
                  { icon: Cpu, title: t.hetznerFeature3, desc: t.hetznerFeature3Desc, emoji: "🌱" },
                  { icon: Award, title: t.hetznerFeature4, desc: t.hetznerFeature4Desc, emoji: "🏆" }
                ].map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl ${
                      theme === "dark" 
                        ? "bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50" 
                        : "bg-slate-50 border border-slate-200 hover:border-teal-500/50"
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{feature.flag || feature.emoji}</span>
                      <feature.icon className="w-5 h-5 text-teal-500" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Certifications */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.securityTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.securitySubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: t.cert1, desc: t.cert1Desc, color: "from-blue-500 to-blue-600" },
                { icon: ShieldCheck, title: t.cert2, desc: t.cert2Desc, color: "from-green-500 to-green-600" },
                { icon: CreditCard, title: t.cert3, desc: t.cert3Desc, color: "from-purple-500 to-purple-600" },
                { icon: FileCheck, title: t.cert4, desc: t.cert4Desc, color: "from-teal-500 to-cyan-500" }
              ].map((cert, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl text-center ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700" 
                      : "bg-white border border-slate-200 shadow-lg"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Encryption Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.encryptionTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.encryptionSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Key, title: t.enc1, desc: t.enc1Desc },
                { icon: Lock, title: t.enc2, desc: t.enc2Desc },
                { icon: Network, title: t.enc3, desc: t.enc3Desc },
                { icon: Eye, title: t.enc4, desc: t.enc4Desc }
              ].map((enc, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <enc.icon className="w-10 h-10 text-teal-500 mb-4" />
                  <h3 className="font-bold mb-2">{enc.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {enc.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.infraTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.infraSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Globe, title: t.infra1, desc: t.infra1Desc },
                { icon: RefreshCcw, title: t.infra2, desc: t.infra2Desc },
                { icon: MonitorCheck, title: t.infra3, desc: t.infra3Desc },
                { icon: Database, title: t.infra4, desc: t.infra4Desc }
              ].map((infra, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50" 
                      : "bg-white border border-slate-200 hover:border-cyan-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <infra.icon className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="font-bold mb-2">{infra.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {infra.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access Control Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.accessTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.accessSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Fingerprint, title: t.access1, desc: t.access1Desc },
                { icon: Users, title: t.access2, desc: t.access2Desc },
                { icon: Eye, title: t.access3, desc: t.access3Desc },
                { icon: FileCheck, title: t.access4, desc: t.access4Desc }
              ].map((access, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-purple-500/50" 
                      : "bg-white border border-slate-200 hover:border-purple-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <access.icon className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-bold mb-2">{access.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {access.desc}
                  </p>
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
            <Shield className="w-16 h-16 text-teal-500 mx-auto mb-6" />
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
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className={theme === "dark" ? "border-slate-600 hover:bg-slate-800" : ""}
              >
                {t.learnMore}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FCFooter />
    </div>
  );
};

export default FCSecurityPage;
