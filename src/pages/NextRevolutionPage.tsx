import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowLeft,
  Globe, 
  Shield, 
  Users, 
  Building2, 
  Zap, 
  Award, 
  CheckCircle2,
  MapPin,
  Code2,
  Layers,
  Database,
  Cloud,
  Cpu,
  LineChart,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  HeadphonesIcon,
  Mail,
  ExternalLink
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Next Revolution",
    heroSubtitle: "The Next Digital Revolution",
    heroTagline: "Crafting the Digital Future from the Heart of Europe",
    aboutTitle: "About Next Revolution",
    aboutDescription: "Next Revolution is a global technology leader headquartered in Ireland, at the heart of Europe's tech innovation hub. We specialize in developing enterprise-grade software solutions that transform how businesses operate worldwide.",
    founded: "Founded",
    foundedValue: "2015 in Dublin, Ireland",
    headquarters: "Headquarters",
    headquartersValue: "Dublin, Ireland — Europe's Tech Capital",
    globalReach: "Global Reach",
    globalReachValue: "Serving clients in 40+ countries across 6 continents",
    teamSize: "Our Team",
    teamSizeValue: "200+ skilled engineers, developers & specialists",
    
    whyTitle: "Why Choose Next Revolution?",
    why1Title: "European Excellence",
    why1Desc: "Built on rigorous European standards for quality, security, and data protection (GDPR compliant).",
    why2Title: "Industry Expertise",
    why2Desc: "Deep specialization in textile, retail, logistics, and manufacturing sectors.",
    why3Title: "Cutting-Edge Technology",
    why3Desc: "AI-powered solutions with cloud-native architecture and real-time analytics.",
    why4Title: "24/7 Global Support",
    why4Desc: "Round-the-clock support teams across multiple time zones.",
    
    statsTitle: "Our Impact in Numbers",
    stat1: "500+",
    stat1Label: "Enterprise Clients",
    stat2: "40+",
    stat2Label: "Countries Served",
    stat3: "99.9%",
    stat3Label: "Uptime Guarantee",
    stat4: "10M+",
    stat4Label: "Transactions Daily",
    
    solutionsTitle: "Our Specialized Solutions",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Complete textile & fashion industry ERP solution",
    sol2Title: "Enterprise Integration",
    sol2Desc: "Seamless integration with existing business systems",
    sol3Title: "AI Analytics Platform",
    sol3Desc: "Predictive analytics and business intelligence",
    sol4Title: "Cloud Infrastructure",
    sol4Desc: "Scalable, secure cloud solutions",
    
    clientsTitle: "Trusted by Industry Leaders",
    clientsDesc: "Partnering with major European and global enterprises across textile, retail, and manufacturing sectors.",
    
    certTitle: "Certifications & Compliance",
    cert1: "ISO 27001 Certified",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Partner With Us",
    contactDesc: "Ready to transform your business with world-class technology?",
    contactBtn: "Contact Our Team",
    visitWebsite: "Visit Website",
    
    backToTexaCore: "Back to TexaCore"
  },
  ar: {
    heroTitle: "نيكست ريفوليوشن",
    heroSubtitle: "ثورة التقنية القادمة",
    heroTagline: "نصنع المستقبل الرقمي من قلب أوروبا",
    aboutTitle: "عن نيكست ريفوليوشن",
    aboutDescription: "نيكست ريفوليوشن هي شركة رائدة عالمياً في مجال التكنولوجيا، مقرها الرئيسي في أيرلندا، في قلب مركز الابتكار التقني الأوروبي. نتخصص في تطوير حلول برمجية على مستوى المؤسسات تُحوّل طريقة عمل الشركات حول العالم.",
    founded: "التأسيس",
    foundedValue: "2015 في دبلن، أيرلندا",
    headquarters: "المقر الرئيسي",
    headquartersValue: "دبلن، أيرلندا — عاصمة التقنية الأوروبية",
    globalReach: "الانتشار العالمي",
    globalReachValue: "نخدم عملاء في أكثر من 40 دولة عبر 6 قارات",
    teamSize: "فريقنا",
    teamSizeValue: "أكثر من 200 مهندس ومطور ومتخصص",
    
    whyTitle: "لماذا تختار نيكست ريفوليوشن؟",
    why1Title: "التميز الأوروبي",
    why1Desc: "مبنية على معايير أوروبية صارمة للجودة والأمان وحماية البيانات (متوافقة مع GDPR).",
    why2Title: "خبرة صناعية",
    why2Desc: "تخصص عميق في قطاعات النسيج والتجزئة واللوجستيات والتصنيع.",
    why3Title: "تقنية متطورة",
    why3Desc: "حلول مدعومة بالذكاء الاصطناعي مع بنية سحابية أصلية وتحليلات فورية.",
    why4Title: "دعم عالمي 24/7",
    why4Desc: "فرق دعم على مدار الساعة عبر مناطق زمنية متعددة.",
    
    statsTitle: "تأثيرنا بالأرقام",
    stat1: "+500",
    stat1Label: "عميل مؤسسي",
    stat2: "+40",
    stat2Label: "دولة نخدمها",
    stat3: "99.9%",
    stat3Label: "ضمان التشغيل",
    stat4: "+10M",
    stat4Label: "معاملة يومياً",
    
    solutionsTitle: "حلولنا المتخصصة",
    sol1Title: "تيكساكور ERP",
    sol1Desc: "حل ERP متكامل لصناعة النسيج والأزياء",
    sol2Title: "التكامل المؤسسي",
    sol2Desc: "تكامل سلس مع الأنظمة التجارية الحالية",
    sol3Title: "منصة تحليلات AI",
    sol3Desc: "تحليلات تنبؤية وذكاء الأعمال",
    sol4Title: "البنية السحابية",
    sol4Desc: "حلول سحابية قابلة للتوسع وآمنة",
    
    clientsTitle: "موثوق من قادة الصناعة",
    clientsDesc: "شراكة مع كبرى الشركات الأوروبية والعالمية في قطاعات النسيج والتجزئة والتصنيع.",
    
    certTitle: "الشهادات والامتثال",
    cert1: "ISO 27001 معتمد",
    cert2: "متوافق مع GDPR",
    cert3: "SOC 2 Type II",
    cert4: "شريك AWS",
    
    contactTitle: "كن شريكنا",
    contactDesc: "هل أنت مستعد لتحويل عملك بتقنية عالمية المستوى؟",
    contactBtn: "تواصل مع فريقنا",
    visitWebsite: "زيارة الموقع",
    
    backToTexaCore: "العودة لـ TexaCore"
  },
  ru: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Следующая цифровая революция",
    heroTagline: "Создаём цифровое будущее из сердца Европы",
    aboutTitle: "О Next Revolution",
    aboutDescription: "Next Revolution — мировой лидер в области технологий с головным офисом в Ирландии, в самом сердце европейского технологического хаба. Мы специализируемся на разработке корпоративных программных решений, которые трансформируют бизнес по всему миру.",
    founded: "Основана",
    foundedValue: "2015, Дублин, Ирландия",
    headquarters: "Штаб-квартира",
    headquartersValue: "Дублин, Ирландия — технологическая столица Европы",
    globalReach: "Глобальный охват",
    globalReachValue: "Обслуживаем клиентов в 40+ странах на 6 континентах",
    teamSize: "Наша команда",
    teamSizeValue: "200+ квалифицированных инженеров и специалистов",
    
    whyTitle: "Почему выбирают Next Revolution?",
    why1Title: "Европейское качество",
    why1Desc: "Соответствие строгим европейским стандартам качества, безопасности и защиты данных (GDPR).",
    why2Title: "Отраслевая экспертиза",
    why2Desc: "Глубокая специализация в текстильной, розничной, логистической и производственной отраслях.",
    why3Title: "Передовые технологии",
    why3Desc: "AI-решения с облачной архитектурой и аналитикой в реальном времени.",
    why4Title: "Поддержка 24/7",
    why4Desc: "Круглосуточная поддержка в различных часовых поясах.",
    
    statsTitle: "Наше влияние в цифрах",
    stat1: "500+",
    stat1Label: "Корпоративных клиентов",
    stat2: "40+",
    stat2Label: "Стран обслуживания",
    stat3: "99.9%",
    stat3Label: "Гарантия работы",
    stat4: "10M+",
    stat4Label: "Транзакций ежедневно",
    
    solutionsTitle: "Наши специализированные решения",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Полное ERP-решение для текстильной индустрии",
    sol2Title: "Интеграция предприятий",
    sol2Desc: "Бесшовная интеграция с существующими системами",
    sol3Title: "AI-аналитика",
    sol3Desc: "Предиктивная аналитика и бизнес-аналитика",
    sol4Title: "Облачная инфраструктура",
    sol4Desc: "Масштабируемые и безопасные облачные решения",
    
    clientsTitle: "Нам доверяют лидеры отрасли",
    clientsDesc: "Партнёрство с крупнейшими европейскими и мировыми предприятиями в секторах текстиля, ритейла и производства.",
    
    certTitle: "Сертификаты и соответствие",
    cert1: "ISO 27001",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Станьте партнёром",
    contactDesc: "Готовы трансформировать свой бизнес с помощью мировых технологий?",
    contactBtn: "Связаться с командой",
    visitWebsite: "Посетить сайт",
    
    backToTexaCore: "Вернуться к TexaCore"
  },
  uk: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Наступна цифрова революція",
    heroTagline: "Створюємо цифрове майбутнє з серця Європи",
    aboutTitle: "Про Next Revolution",
    aboutDescription: "Next Revolution — світовий лідер у сфері технологій з головним офісом в Ірландії, у самому серці європейського технологічного хабу. Ми спеціалізуємось на розробці корпоративних програмних рішень, що трансформують бізнес по всьому світу.",
    founded: "Заснована",
    foundedValue: "2015, Дублін, Ірландія",
    headquarters: "Штаб-квартира",
    headquartersValue: "Дублін, Ірландія — технологічна столиця Європи",
    globalReach: "Глобальне охоплення",
    globalReachValue: "Обслуговуємо клієнтів у 40+ країнах на 6 континентах",
    teamSize: "Наша команда",
    teamSizeValue: "200+ кваліфікованих інженерів та спеціалістів",
    
    whyTitle: "Чому обирають Next Revolution?",
    why1Title: "Європейська якість",
    why1Desc: "Відповідність суворим європейським стандартам якості, безпеки та захисту даних (GDPR).",
    why2Title: "Галузева експертиза",
    why2Desc: "Глибока спеціалізація в текстильній, роздрібній, логістичній та виробничій галузях.",
    why3Title: "Передові технології",
    why3Desc: "AI-рішення з хмарною архітектурою та аналітикою в реальному часі.",
    why4Title: "Підтримка 24/7",
    why4Desc: "Цілодобова підтримка в різних часових поясах.",
    
    statsTitle: "Наш вплив у цифрах",
    stat1: "500+",
    stat1Label: "Корпоративних клієнтів",
    stat2: "40+",
    stat2Label: "Країн обслуговування",
    stat3: "99.9%",
    stat3Label: "Гарантія роботи",
    stat4: "10M+",
    stat4Label: "Транзакцій щодня",
    
    solutionsTitle: "Наші спеціалізовані рішення",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Повне ERP-рішення для текстильної індустрії",
    sol2Title: "Інтеграція підприємств",
    sol2Desc: "Безшовна інтеграція з існуючими системами",
    sol3Title: "AI-аналітика",
    sol3Desc: "Предиктивна аналітика та бізнес-аналітика",
    sol4Title: "Хмарна інфраструктура",
    sol4Desc: "Масштабовані та безпечні хмарні рішення",
    
    clientsTitle: "Нам довіряють лідери галузі",
    clientsDesc: "Партнерство з найбільшими європейськими та світовими підприємствами в секторах текстилю, рітейлу та виробництва.",
    
    certTitle: "Сертифікати та відповідність",
    cert1: "ISO 27001",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Станьте партнером",
    contactDesc: "Готові трансформувати свій бізнес за допомогою світових технологій?",
    contactBtn: "Зв'язатися з командою",
    visitWebsite: "Відвідати сайт",
    
    backToTexaCore: "Повернутися до TexaCore"
  },
  ro: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Următoarea revoluție digitală",
    heroTagline: "Creăm viitorul digital din inima Europei",
    aboutTitle: "Despre Next Revolution",
    aboutDescription: "Next Revolution este un lider global în tehnologie cu sediul în Irlanda, în centrul hub-ului de inovație tehnologică al Europei. Suntem specializați în dezvoltarea de soluții software de nivel enterprise care transformă modul în care operează afacerile la nivel mondial.",
    founded: "Fondată",
    foundedValue: "2015, Dublin, Irlanda",
    headquarters: "Sediul central",
    headquartersValue: "Dublin, Irlanda — Capitala tech a Europei",
    globalReach: "Acoperire globală",
    globalReachValue: "Servim clienți în 40+ țări pe 6 continente",
    teamSize: "Echipa noastră",
    teamSizeValue: "200+ ingineri și specialiști calificați",
    
    whyTitle: "De ce să alegi Next Revolution?",
    why1Title: "Excelență europeană",
    why1Desc: "Construit pe standarde europene riguroase pentru calitate, securitate și protecția datelor (conform GDPR).",
    why2Title: "Expertiză industrială",
    why2Desc: "Specializare profundă în sectoarele textile, retail, logistică și producție.",
    why3Title: "Tehnologie de vârf",
    why3Desc: "Soluții AI cu arhitectură cloud-native și analiză în timp real.",
    why4Title: "Suport global 24/7",
    why4Desc: "Echipe de suport non-stop în multiple fusuri orare.",
    
    statsTitle: "Impactul nostru în cifre",
    stat1: "500+",
    stat1Label: "Clienți enterprise",
    stat2: "40+",
    stat2Label: "Țări deservite",
    stat3: "99.9%",
    stat3Label: "Garanție uptime",
    stat4: "10M+",
    stat4Label: "Tranzacții zilnice",
    
    solutionsTitle: "Soluțiile noastre specializate",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Soluție ERP completă pentru industria textilă",
    sol2Title: "Integrare enterprise",
    sol2Desc: "Integrare perfectă cu sistemele existente",
    sol3Title: "Platformă AI Analytics",
    sol3Desc: "Analiză predictivă și business intelligence",
    sol4Title: "Infrastructură cloud",
    sol4Desc: "Soluții cloud scalabile și sigure",
    
    clientsTitle: "De încredere pentru liderii industriei",
    clientsDesc: "Parteneriat cu întreprinderi europene și globale majore din sectoarele textile, retail și producție.",
    
    certTitle: "Certificări și conformitate",
    cert1: "ISO 27001",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Devino partener",
    contactDesc: "Gata să îți transformi afacerea cu tehnologie de clasă mondială?",
    contactBtn: "Contactează echipa",
    visitWebsite: "Vizitează site-ul",
    
    backToTexaCore: "Înapoi la TexaCore"
  },
  pl: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Następna cyfrowa rewolucja",
    heroTagline: "Tworzymy cyfrową przyszłość z serca Europy",
    aboutTitle: "O Next Revolution",
    aboutDescription: "Next Revolution to globalny lider technologiczny z siedzibą w Irlandii, w sercu europejskiego centrum innowacji technologicznych. Specjalizujemy się w tworzeniu rozwiązań software klasy enterprise, które transformują sposób działania firm na całym świecie.",
    founded: "Założona",
    foundedValue: "2015, Dublin, Irlandia",
    headquarters: "Siedziba główna",
    headquartersValue: "Dublin, Irlandia — Technologiczna stolica Europy",
    globalReach: "Globalny zasięg",
    globalReachValue: "Obsługujemy klientów w 40+ krajach na 6 kontynentach",
    teamSize: "Nasz zespół",
    teamSizeValue: "200+ wykwalifikowanych inżynierów i specjalistów",
    
    whyTitle: "Dlaczego wybrać Next Revolution?",
    why1Title: "Europejska doskonałość",
    why1Desc: "Zbudowane na rygorystycznych europejskich standardach jakości, bezpieczeństwa i ochrony danych (zgodność z GDPR).",
    why2Title: "Ekspertyza branżowa",
    why2Desc: "Głęboka specjalizacja w sektorach tekstylnym, detalicznym, logistycznym i produkcyjnym.",
    why3Title: "Najnowsza technologia",
    why3Desc: "Rozwiązania AI z natywną architekturą chmurową i analizą w czasie rzeczywistym.",
    why4Title: "Wsparcie 24/7",
    why4Desc: "Całodobowe zespoły wsparcia w wielu strefach czasowych.",
    
    statsTitle: "Nasz wpływ w liczbach",
    stat1: "500+",
    stat1Label: "Klientów enterprise",
    stat2: "40+",
    stat2Label: "Obsługiwanych krajów",
    stat3: "99.9%",
    stat3Label: "Gwarancja dostępności",
    stat4: "10M+",
    stat4Label: "Transakcji dziennie",
    
    solutionsTitle: "Nasze specjalistyczne rozwiązania",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Kompletne rozwiązanie ERP dla branży tekstylnej",
    sol2Title: "Integracja enterprise",
    sol2Desc: "Bezproblemowa integracja z istniejącymi systemami",
    sol3Title: "Platforma AI Analytics",
    sol3Desc: "Analityka predykcyjna i business intelligence",
    sol4Title: "Infrastruktura chmurowa",
    sol4Desc: "Skalowalne i bezpieczne rozwiązania chmurowe",
    
    clientsTitle: "Zaufanie liderów branży",
    clientsDesc: "Partnerstwo z głównymi europejskimi i globalnymi przedsiębiorstwami w sektorach tekstylnym, detalicznym i produkcyjnym.",
    
    certTitle: "Certyfikaty i zgodność",
    cert1: "ISO 27001",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Zostań partnerem",
    contactDesc: "Gotowy przekształcić swój biznes dzięki światowej klasy technologii?",
    contactBtn: "Skontaktuj się z zespołem",
    visitWebsite: "Odwiedź stronę",
    
    backToTexaCore: "Powrót do TexaCore"
  },
  it: {
    heroTitle: "Next Revolution",
    heroSubtitle: "La prossima rivoluzione digitale",
    heroTagline: "Creiamo il futuro digitale dal cuore dell'Europa",
    aboutTitle: "Chi è Next Revolution",
    aboutDescription: "Next Revolution è un leader tecnologico globale con sede in Irlanda, nel cuore dell'hub di innovazione tecnologica europea. Siamo specializzati nello sviluppo di soluzioni software enterprise che trasformano il modo in cui le aziende operano in tutto il mondo.",
    founded: "Fondata",
    foundedValue: "2015, Dublino, Irlanda",
    headquarters: "Sede centrale",
    headquartersValue: "Dublino, Irlanda — Capitale tech d'Europa",
    globalReach: "Presenza globale",
    globalReachValue: "Serviamo clienti in 40+ paesi su 6 continenti",
    teamSize: "Il nostro team",
    teamSizeValue: "200+ ingegneri e specialisti qualificati",
    
    whyTitle: "Perché scegliere Next Revolution?",
    why1Title: "Eccellenza europea",
    why1Desc: "Costruito su rigorosi standard europei per qualità, sicurezza e protezione dei dati (conforme al GDPR).",
    why2Title: "Esperienza industriale",
    why2Desc: "Specializzazione profonda nei settori tessile, retail, logistica e manifatturiero.",
    why3Title: "Tecnologia all'avanguardia",
    why3Desc: "Soluzioni AI con architettura cloud-native e analisi in tempo reale.",
    why4Title: "Supporto globale 24/7",
    why4Desc: "Team di supporto h24 in più fusi orari.",
    
    statsTitle: "Il nostro impatto in numeri",
    stat1: "500+",
    stat1Label: "Clienti enterprise",
    stat2: "40+",
    stat2Label: "Paesi serviti",
    stat3: "99.9%",
    stat3Label: "Garanzia uptime",
    stat4: "10M+",
    stat4Label: "Transazioni giornaliere",
    
    solutionsTitle: "Le nostre soluzioni specializzate",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Soluzione ERP completa per l'industria tessile",
    sol2Title: "Integrazione enterprise",
    sol2Desc: "Integrazione perfetta con i sistemi esistenti",
    sol3Title: "Piattaforma AI Analytics",
    sol3Desc: "Analisi predittiva e business intelligence",
    sol4Title: "Infrastruttura cloud",
    sol4Desc: "Soluzioni cloud scalabili e sicure",
    
    clientsTitle: "Scelti dai leader del settore",
    clientsDesc: "Partnership con le principali aziende europee e globali nei settori tessile, retail e manifatturiero.",
    
    certTitle: "Certificazioni e conformità",
    cert1: "ISO 27001",
    cert2: "GDPR Compliant",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Diventa partner",
    contactDesc: "Pronto a trasformare la tua attività con tecnologia di livello mondiale?",
    contactBtn: "Contatta il team",
    visitWebsite: "Visita il sito",
    
    backToTexaCore: "Torna a TexaCore"
  },
  tr: {
    heroTitle: "Next Revolution",
    heroSubtitle: "Bir Sonraki Dijital Devrim",
    heroTagline: "Avrupa'nın Kalbinden Dijital Geleceği Yaratıyoruz",
    aboutTitle: "Next Revolution Hakkında",
    aboutDescription: "Next Revolution, Avrupa'nın teknoloji inovasyon merkezinin kalbinde, İrlanda'da bulunan global bir teknoloji lideridir. Dünya genelinde işletmelerin çalışma şeklini dönüştüren kurumsal düzeyde yazılım çözümleri geliştirme konusunda uzmanız.",
    founded: "Kuruluş",
    foundedValue: "2015, Dublin, İrlanda",
    headquarters: "Genel Merkez",
    headquartersValue: "Dublin, İrlanda — Avrupa'nın Teknoloji Başkenti",
    globalReach: "Global Erişim",
    globalReachValue: "6 kıtada 40+ ülkede müşterilere hizmet veriyoruz",
    teamSize: "Ekibimiz",
    teamSizeValue: "200+ yetenekli mühendis ve uzman",
    
    whyTitle: "Neden Next Revolution?",
    why1Title: "Avrupa Mükemmelliği",
    why1Desc: "Kalite, güvenlik ve veri koruma için titiz Avrupa standartlarına uygun (GDPR uyumlu).",
    why2Title: "Sektör Uzmanlığı",
    why2Desc: "Tekstil, perakende, lojistik ve üretim sektörlerinde derin uzmanlık.",
    why3Title: "Son Teknoloji",
    why3Desc: "Bulut-native mimarisi ve gerçek zamanlı analizlerle AI destekli çözümler.",
    why4Title: "7/24 Global Destek",
    why4Desc: "Birden fazla saat diliminde 24 saat destek ekipleri.",
    
    statsTitle: "Etkimiz Rakamlarla",
    stat1: "500+",
    stat1Label: "Kurumsal Müşteri",
    stat2: "40+",
    stat2Label: "Hizmet Verilen Ülke",
    stat3: "%99.9",
    stat3Label: "Çalışma Süresi Garantisi",
    stat4: "10M+",
    stat4Label: "Günlük İşlem",
    
    solutionsTitle: "Özel Çözümlerimiz",
    sol1Title: "TexaCore ERP",
    sol1Desc: "Tekstil endüstrisi için eksiksiz ERP çözümü",
    sol2Title: "Kurumsal Entegrasyon",
    sol2Desc: "Mevcut sistemlerle sorunsuz entegrasyon",
    sol3Title: "AI Analytics Platformu",
    sol3Desc: "Prediktif analitik ve iş zekası",
    sol4Title: "Bulut Altyapısı",
    sol4Desc: "Ölçeklenebilir ve güvenli bulut çözümleri",
    
    clientsTitle: "Sektör Liderlerinin Güveni",
    clientsDesc: "Tekstil, perakende ve üretim sektörlerindeki büyük Avrupa ve global kuruluşlarla ortaklık.",
    
    certTitle: "Sertifikalar ve Uyumluluk",
    cert1: "ISO 27001",
    cert2: "GDPR Uyumlu",
    cert3: "SOC 2 Type II",
    cert4: "AWS Partner",
    
    contactTitle: "Ortağımız Olun",
    contactDesc: "İşinizi dünya standartlarında teknolojiyle dönüştürmeye hazır mısınız?",
    contactBtn: "Ekibimizle İletişime Geçin",
    visitWebsite: "Web Sitesini Ziyaret Et",
    
    backToTexaCore: "TexaCore'a Dön"
  }
};

export default function NextRevolutionPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0f2744] to-[#0a1929]">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
          
          {/* Floating Code Elements */}
          <div className="absolute top-32 right-20 text-emerald-400/20 text-6xl font-mono">&lt;/&gt;</div>
          <div className="absolute bottom-40 left-20 text-amber-400/20 text-4xl font-mono">{"{}"}</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <span className="text-white font-black text-5xl">N</span>
                  <span className="absolute -top-1 -right-1 text-amber-400 font-black text-2xl">R</span>
                </div>
                <div className="absolute -inset-2 bg-emerald-500/20 rounded-3xl blur-xl animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4">
              {t.heroSubtitle}
            </p>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {t.heroTagline}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-lg shadow-lg shadow-emerald-500/30 rounded-xl"
              >
                <Globe className="w-5 h-5 me-2" />
                {t.visitWebsite}
                <ExternalLink className="w-4 h-4 ms-2" />
              </Button>
              <Link to="/">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-xl bg-transparent"
                >
                  <ArrowIcon className="w-5 h-5 me-2" />
                  {t.backToTexaCore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                {t.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t.aboutDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, label: t.founded, value: t.foundedValue, color: "emerald" },
                { icon: MapPin, label: t.headquarters, value: t.headquartersValue, color: "blue" },
                { icon: Globe, label: t.globalReach, value: t.globalReachValue, color: "amber" },
                { icon: Users, label: t.teamSize, value: t.teamSizeValue, color: "purple" },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-16">
              {t.whyTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: t.why1Title, desc: t.why1Desc, gradient: "from-emerald-500 to-teal-600" },
                { icon: Target, title: t.why2Title, desc: t.why2Desc, gradient: "from-blue-500 to-indigo-600" },
                { icon: Cpu, title: t.why3Title, desc: t.why3Desc, gradient: "from-amber-500 to-orange-600" },
                { icon: HeadphonesIcon, title: t.why4Title, desc: t.why4Desc, gradient: "from-purple-500 to-pink-600" },
              ].map((item, i) => (
                <div key={i} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            {t.statsTitle}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: t.stat1, label: t.stat1Label, icon: Building2 },
              { value: t.stat2, label: t.stat2Label, icon: Globe },
              { value: t.stat3, label: t.stat3Label, icon: Zap },
              { value: t.stat4, label: t.stat4Label, icon: LineChart },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-16">
              {t.solutionsTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layers, title: t.sol1Title, desc: t.sol1Desc, color: "emerald" },
                { icon: Database, title: t.sol2Title, desc: t.sol2Desc, color: "blue" },
                { icon: Sparkles, title: t.sol3Title, desc: t.sol3Desc, color: "amber" },
                { icon: Cloud, title: t.sol4Title, desc: t.sol4Desc, color: "purple" },
              ].map((sol, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${sol.color}-500 to-${sol.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <sol.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{sol.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-16">
              {t.certTitle}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: t.cert1 },
                { icon: Lock, label: t.cert2 },
                { icon: CheckCircle2, label: t.cert3 },
                { icon: Cloud, label: t.cert4 },
              ].map((cert, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <cert.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{cert.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {t.contactTitle}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t.contactDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="h-14 px-8 bg-white text-emerald-700 hover:bg-gray-100 font-bold text-lg shadow-xl rounded-xl"
                >
                  <Mail className="w-5 h-5 me-2" />
                  {t.contactBtn}
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="h-14 px-8 border-2 border-white text-white hover:bg-white/20 font-bold text-lg rounded-xl bg-transparent"
              >
                <Globe className="w-5 h-5 me-2" />
                {t.visitWebsite}
                <ExternalLink className="w-4 h-4 ms-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
