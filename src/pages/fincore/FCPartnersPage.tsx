import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Handshake, Globe, Building2, Award, Users, TrendingUp,
  CheckCircle2, Star, ArrowRight, ArrowLeft, Shield, Server,
  CreditCard, Cloud, Zap, BadgeCheck, Network, HeartHandshake
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Partners & Collaborations",
    pageSubtitle: "Building the future of finance together with world-class partners",
    
    heroTitle: "Global Partnership",
    heroTitleHighlight: "Network",
    heroSubtitle: "We collaborate with leading technology companies, financial institutions, and service providers to deliver the best banking infrastructure globally.",
    
    // Infrastructure Partners
    infraTitle: "Infrastructure Partners",
    infraSubtitle: "World-class data center and cloud infrastructure partners",
    
    // Technology Partners
    techTitle: "Technology Partners",
    techSubtitle: "Cutting-edge technology partnerships powering our platform",
    
    // Regional Partners
    regionalTitle: "Regional Partners",
    regionalSubtitle: "Local expertise with global standards",
    
    // Success Stories
    successTitle: "Partners in Success",
    successSubtitle: "Real results from our partner collaborations",
    
    // Partner Program
    programTitle: "Partner Program",
    programSubtitle: "Join our growing network of certified partners",
    
    programBenefit1: "Certified Reseller Program",
    programBenefit1Desc: "Become an authorized FinCore reseller in your region with full training and support",
    programBenefit2: "Integration Partners",
    programBenefit2Desc: "Integrate FinCore with your solutions and expand your service offerings",
    programBenefit3: "Technology Alliance",
    programBenefit3Desc: "Co-develop solutions and access our API ecosystem for joint innovation",
    programBenefit4: "Consulting Partners",
    programBenefit4Desc: "Deliver implementation and consulting services for FinCore deployments",
    
    becomePartner: "Become a Partner",
    partnerLogin: "Partner Portal",
    viewAllPartners: "View All Partners",
    
    // CTA
    ctaTitle: "Ready to Partner with FinCore?",
    ctaSubtitle: "Join our global network and grow your business with the leading banking platform",
    ctaButton: "Apply for Partnership",
    
    // Partner Categories
    catInfrastructure: "Infrastructure",
    catPayments: "Payments",
    catSecurity: "Security",
    catCloud: "Cloud",
    catCompliance: "Compliance",
    catIntegration: "Integration",
  },
  ar: {
    pageTitle: "الشركاء والتعاونات",
    pageSubtitle: "نبني مستقبل التمويل معاً مع شركاء عالميين",
    
    heroTitle: "شبكة الشراكة",
    heroTitleHighlight: "العالمية",
    heroSubtitle: "نتعاون مع شركات التكنولوجيا الرائدة والمؤسسات المالية ومزودي الخدمات لتقديم أفضل البنية التحتية المصرفية عالمياً.",
    
    infraTitle: "شركاء البنية التحتية",
    infraSubtitle: "شركاء مراكز البيانات والبنية التحتية السحابية من الدرجة الأولى",
    
    techTitle: "الشركاء التقنيون",
    techSubtitle: "شراكات تقنية متطورة تدعم منصتنا",
    
    regionalTitle: "الشركاء الإقليميون",
    regionalSubtitle: "خبرة محلية بمعايير عالمية",
    
    successTitle: "شركاؤنا بالنجاح",
    successSubtitle: "نتائج حقيقية من تعاوناتنا مع الشركاء",
    
    programTitle: "برنامج الشراكة",
    programSubtitle: "انضم إلى شبكتنا المتنامية من الشركاء المعتمدين",
    
    programBenefit1: "برنامج الموزعين المعتمدين",
    programBenefit1Desc: "كن موزعاً معتمداً لـ FinCore في منطقتك مع تدريب ودعم كامل",
    programBenefit2: "شركاء التكامل",
    programBenefit2Desc: "ادمج FinCore مع حلولك ووسّع عروض خدماتك",
    programBenefit3: "تحالف التقنية",
    programBenefit3Desc: "طوّر حلولاً مشتركة واحصل على وصول لنظام API للابتكار المشترك",
    programBenefit4: "شركاء الاستشارات",
    programBenefit4Desc: "قدم خدمات التنفيذ والاستشارات لنشر FinCore",
    
    becomePartner: "كن شريكاً",
    partnerLogin: "بوابة الشركاء",
    viewAllPartners: "عرض جميع الشركاء",
    
    ctaTitle: "مستعد للشراكة مع FinCore؟",
    ctaSubtitle: "انضم إلى شبكتنا العالمية ونمّ أعمالك مع منصة البنوك الرائدة",
    ctaButton: "تقدم للشراكة",
    
    catInfrastructure: "البنية التحتية",
    catPayments: "المدفوعات",
    catSecurity: "الأمان",
    catCloud: "السحابة",
    catCompliance: "الامتثال",
    catIntegration: "التكامل",
  },
  tr: {
    pageTitle: "Ortaklar ve İşbirlikleri",
    pageSubtitle: "Dünya çapındaki ortaklarla birlikte finansın geleceğini inşa ediyoruz",
    
    heroTitle: "Küresel Ortaklık",
    heroTitleHighlight: "Ağı",
    heroSubtitle: "Küresel olarak en iyi bankacılık altyapısını sunmak için önde gelen teknoloji şirketleri, finans kuruluşları ve hizmet sağlayıcılarla işbirliği yapıyoruz.",
    
    infraTitle: "Altyapı Ortakları",
    infraSubtitle: "Dünya sınıfı veri merkezi ve bulut altyapı ortakları",
    
    techTitle: "Teknoloji Ortakları",
    techSubtitle: "Platformumuzu güçlendiren ileri teknoloji ortaklıkları",
    
    regionalTitle: "Bölgesel Ortaklar",
    regionalSubtitle: "Küresel standartlarla yerel uzmanlık",
    
    successTitle: "Başarı Ortaklarımız",
    successSubtitle: "Ortak işbirliklerimizden gerçek sonuçlar",
    
    programTitle: "Ortaklık Programı",
    programSubtitle: "Büyüyen sertifikalı ortak ağımıza katılın",
    
    programBenefit1: "Sertifikalı Bayi Programı",
    programBenefit1Desc: "Tam eğitim ve destekle bölgenizde yetkili FinCore bayisi olun",
    programBenefit2: "Entegrasyon Ortakları",
    programBenefit2Desc: "FinCore'u çözümlerinizle entegre edin ve hizmet tekliflerinizi genişletin",
    programBenefit3: "Teknoloji İttifakı",
    programBenefit3Desc: "Ortak yenilik için çözümler geliştirin ve API ekosistemimize erişin",
    programBenefit4: "Danışmanlık Ortakları",
    programBenefit4Desc: "FinCore dağıtımları için uygulama ve danışmanlık hizmetleri sunun",
    
    becomePartner: "Ortak Olun",
    partnerLogin: "Ortak Portalı",
    viewAllPartners: "Tüm Ortakları Görüntüle",
    
    ctaTitle: "FinCore ile Ortak Olmaya Hazır mısınız?",
    ctaSubtitle: "Küresel ağımıza katılın ve önde gelen bankacılık platformuyla işinizi büyütün",
    ctaButton: "Ortaklık Başvurusu Yapın",
    
    catInfrastructure: "Altyapı",
    catPayments: "Ödemeler",
    catSecurity: "Güvenlik",
    catCloud: "Bulut",
    catCompliance: "Uyumluluk",
    catIntegration: "Entegrasyon",
  },
  uk: {
    pageTitle: "Партнери та Співпраця",
    pageSubtitle: "Будуємо майбутнє фінансів разом з партнерами світового класу",
    
    heroTitle: "Глобальна Партнерська",
    heroTitleHighlight: "Мережа",
    heroSubtitle: "Ми співпрацюємо з провідними технологічними компаніями, фінансовими установами та постачальниками послуг для надання найкращої банківської інфраструктури у світі.",
    
    infraTitle: "Партнери з Інфраструктури",
    infraSubtitle: "Партнери з дата-центрів та хмарної інфраструктури світового класу",
    
    techTitle: "Технологічні Партнери",
    techSubtitle: "Передові технологічні партнерства, що живлять нашу платформу",
    
    regionalTitle: "Регіональні Партнери",
    regionalSubtitle: "Місцева експертиза з глобальними стандартами",
    
    successTitle: "Партнери в Успіху",
    successSubtitle: "Реальні результати від нашої співпраці з партнерами",
    
    programTitle: "Партнерська Програма",
    programSubtitle: "Приєднуйтесь до нашої зростаючої мережі сертифікованих партнерів",
    
    programBenefit1: "Програма Сертифікованих Реселерів",
    programBenefit1Desc: "Станьте авторизованим реселером FinCore у вашому регіоні з повним навчанням та підтримкою",
    programBenefit2: "Партнери з Інтеграції",
    programBenefit2Desc: "Інтегруйте FinCore з вашими рішеннями та розширте свої сервісні пропозиції",
    programBenefit3: "Технологічний Альянс",
    programBenefit3Desc: "Спільно розробляйте рішення та отримайте доступ до нашої API-екосистеми",
    programBenefit4: "Консалтингові Партнери",
    programBenefit4Desc: "Надавайте послуги впровадження та консультацій для розгортання FinCore",
    
    becomePartner: "Стати Партнером",
    partnerLogin: "Портал Партнерів",
    viewAllPartners: "Переглянути Всіх Партнерів",
    
    ctaTitle: "Готові до Партнерства з FinCore?",
    ctaSubtitle: "Приєднуйтесь до нашої глобальної мережі та розвивайте свій бізнес з провідною банківською платформою",
    ctaButton: "Подати Заявку на Партнерство",
    
    catInfrastructure: "Інфраструктура",
    catPayments: "Платежі",
    catSecurity: "Безпека",
    catCloud: "Хмара",
    catCompliance: "Відповідність",
    catIntegration: "Інтеграція",
  },
  pl: {
    pageTitle: "Partnerzy i Współpraca",
    pageSubtitle: "Budujemy przyszłość finansów razem z partnerami światowej klasy",
    
    heroTitle: "Globalna Sieć",
    heroTitleHighlight: "Partnerska",
    heroSubtitle: "Współpracujemy z wiodącymi firmami technologicznymi, instytucjami finansowymi i dostawcami usług, aby dostarczać najlepszą infrastrukturę bankową na świecie.",
    
    infraTitle: "Partnerzy Infrastrukturalni",
    infraSubtitle: "Partnerzy centrów danych i infrastruktury chmurowej światowej klasy",
    
    techTitle: "Partnerzy Technologiczni",
    techSubtitle: "Zaawansowane partnerstwa technologiczne napędzające naszą platformę",
    
    regionalTitle: "Partnerzy Regionalni",
    regionalSubtitle: "Lokalna ekspertyza z globalnymi standardami",
    
    successTitle: "Partnerzy w Sukcesie",
    successSubtitle: "Prawdziwe wyniki ze współpracy z partnerami",
    
    programTitle: "Program Partnerski",
    programSubtitle: "Dołącz do naszej rosnącej sieci certyfikowanych partnerów",
    
    programBenefit1: "Certyfikowany Program Resellerów",
    programBenefit1Desc: "Zostań autoryzowanym resellerem FinCore w swoim regionie z pełnym szkoleniem i wsparciem",
    programBenefit2: "Partnerzy Integracyjni",
    programBenefit2Desc: "Zintegruj FinCore ze swoimi rozwiązaniami i rozszerz swoją ofertę usług",
    programBenefit3: "Sojusz Technologiczny",
    programBenefit3Desc: "Wspólnie rozwijaj rozwiązania i uzyskaj dostęp do naszego ekosystemu API",
    programBenefit4: "Partnerzy Konsultingowi",
    programBenefit4Desc: "Dostarczaj usługi wdrożeniowe i konsultingowe dla wdrożeń FinCore",
    
    becomePartner: "Zostań Partnerem",
    partnerLogin: "Portal Partnera",
    viewAllPartners: "Zobacz Wszystkich Partnerów",
    
    ctaTitle: "Gotowy na Partnerstwo z FinCore?",
    ctaSubtitle: "Dołącz do naszej globalnej sieci i rozwijaj swój biznes z wiodącą platformą bankową",
    ctaButton: "Złóż Wniosek o Partnerstwo",
    
    catInfrastructure: "Infrastruktura",
    catPayments: "Płatności",
    catSecurity: "Bezpieczeństwo",
    catCloud: "Chmura",
    catCompliance: "Zgodność",
    catIntegration: "Integracja",
  },
  ro: {
    pageTitle: "Parteneri și Colaborări",
    pageSubtitle: "Construim viitorul finanțelor împreună cu parteneri de clasă mondială",
    
    heroTitle: "Rețea Globală de",
    heroTitleHighlight: "Parteneriat",
    heroSubtitle: "Colaborăm cu companii tehnologice de top, instituții financiare și furnizori de servicii pentru a oferi cea mai bună infrastructură bancară la nivel global.",
    
    infraTitle: "Parteneri de Infrastructură",
    infraSubtitle: "Parteneri de centre de date și infrastructură cloud de clasă mondială",
    
    techTitle: "Parteneri Tehnologici",
    techSubtitle: "Parteneriate tehnologice de vârf care alimentează platforma noastră",
    
    regionalTitle: "Parteneri Regionali",
    regionalSubtitle: "Expertiză locală cu standarde globale",
    
    successTitle: "Parteneri în Succes",
    successSubtitle: "Rezultate reale din colaborările noastre cu partenerii",
    
    programTitle: "Program de Parteneriat",
    programSubtitle: "Alăturați-vă rețelei noastre în creștere de parteneri certificați",
    
    programBenefit1: "Program de Reselleri Certificați",
    programBenefit1Desc: "Deveniți reseller autorizat FinCore în regiunea dumneavoastră cu instruire și suport complet",
    programBenefit2: "Parteneri de Integrare",
    programBenefit2Desc: "Integrați FinCore cu soluțiile dvs. și extindeți ofertele de servicii",
    programBenefit3: "Alianță Tehnologică",
    programBenefit3Desc: "Co-dezvoltați soluții și accesați ecosistemul nostru API pentru inovație comună",
    programBenefit4: "Parteneri de Consultanță",
    programBenefit4Desc: "Furnizați servicii de implementare și consultanță pentru implementările FinCore",
    
    becomePartner: "Deveniți Partener",
    partnerLogin: "Portal Parteneri",
    viewAllPartners: "Vezi Toți Partenerii",
    
    ctaTitle: "Pregătit să Deveniți Partener FinCore?",
    ctaSubtitle: "Alăturați-vă rețelei noastre globale și dezvoltați-vă afacerea cu platforma bancară de top",
    ctaButton: "Aplicați pentru Parteneriat",
    
    catInfrastructure: "Infrastructură",
    catPayments: "Plăți",
    catSecurity: "Securitate",
    catCloud: "Cloud",
    catCompliance: "Conformitate",
    catIntegration: "Integrare",
  },
  ru: {
    pageTitle: "Партнеры и Сотрудничество",
    pageSubtitle: "Строим будущее финансов вместе с партнерами мирового класса",
    
    heroTitle: "Глобальная Партнерская",
    heroTitleHighlight: "Сеть",
    heroSubtitle: "Мы сотрудничаем с ведущими технологическими компаниями, финансовыми учреждениями и поставщиками услуг для предоставления лучшей банковской инфраструктуры в мире.",
    
    infraTitle: "Партнеры по Инфраструктуре",
    infraSubtitle: "Партнеры по дата-центрам и облачной инфраструктуре мирового класса",
    
    techTitle: "Технологические Партнеры",
    techSubtitle: "Передовые технологические партнерства, питающие нашу платформу",
    
    regionalTitle: "Региональные Партнеры",
    regionalSubtitle: "Местная экспертиза с глобальными стандартами",
    
    successTitle: "Партнеры в Успехе",
    successSubtitle: "Реальные результаты от нашего сотрудничества с партнерами",
    
    programTitle: "Партнерская Программа",
    programSubtitle: "Присоединяйтесь к нашей растущей сети сертифицированных партнеров",
    
    programBenefit1: "Программа Сертифицированных Реселлеров",
    programBenefit1Desc: "Станьте авторизованным реселлером FinCore в вашем регионе с полным обучением и поддержкой",
    programBenefit2: "Партнеры по Интеграции",
    programBenefit2Desc: "Интегрируйте FinCore с вашими решениями и расширьте свои сервисные предложения",
    programBenefit3: "Технологический Альянс",
    programBenefit3Desc: "Совместно разрабатывайте решения и получите доступ к нашей API-экосистеме",
    programBenefit4: "Консалтинговые Партнеры",
    programBenefit4Desc: "Предоставляйте услуги внедрения и консультирования для развертывания FinCore",
    
    becomePartner: "Стать Партнером",
    partnerLogin: "Портал Партнеров",
    viewAllPartners: "Просмотреть Всех Партнеров",
    
    ctaTitle: "Готовы Стать Партнером FinCore?",
    ctaSubtitle: "Присоединяйтесь к нашей глобальной сети и развивайте свой бизнес с ведущей банковской платформой",
    ctaButton: "Подать Заявку на Партнерство",
    
    catInfrastructure: "Инфраструктура",
    catPayments: "Платежи",
    catSecurity: "Безопасность",
    catCloud: "Облако",
    catCompliance: "Соответствие",
    catIntegration: "Интеграция",
  },
};

// Partner data
const infrastructurePartners = [
  { 
    name: "Hetzner", 
    logo: "H", 
    color: "from-red-500 to-red-600",
    description: { 
      en: "Primary data center partner - Strategic investor relationship",
      ar: "شريك مركز البيانات الرئيسي - علاقة مستثمر استراتيجي",
      tr: "Ana veri merkezi ortağı - Stratejik yatırımcı ilişkisi",
      uk: "Основний партнер дата-центру - Стратегічні інвесторські відносини",
      pl: "Główny partner centrum danych - Strategiczne relacje inwestorskie",
      ro: "Partener principal de centru de date - Relație strategică de investitor",
      ru: "Основной партнер дата-центра - Стратегические инвесторские отношения"
    },
    tier: "Strategic",
    location: "🇩🇪 Germany"
  },
  { 
    name: "Cloudflare", 
    logo: "CF", 
    color: "from-orange-500 to-orange-600",
    description: { 
      en: "Global CDN and DDoS protection",
      ar: "CDN عالمي وحماية DDoS",
      tr: "Küresel CDN ve DDoS koruması",
      uk: "Глобальний CDN та захист від DDoS",
      pl: "Globalny CDN i ochrona DDoS",
      ro: "CDN global și protecție DDoS",
      ru: "Глобальный CDN и защита от DDoS"
    },
    tier: "Technology",
    location: "🇺🇸 USA"
  },
  { 
    name: "OVHcloud", 
    logo: "OVH", 
    color: "from-blue-500 to-blue-600",
    description: { 
      en: "European cloud infrastructure backup",
      ar: "نسخ احتياطي للبنية التحتية السحابية الأوروبية",
      tr: "Avrupa bulut altyapısı yedeği",
      uk: "Резервна копія європейської хмарної інфраструктури",
      pl: "Kopia zapasowa europejskiej infrastruktury chmurowej",
      ro: "Backup infrastructură cloud europeană",
      ru: "Резервная копия европейской облачной инфраструктуры"
    },
    tier: "Technology",
    location: "🇫🇷 France"
  }
];

const technologyPartners = [
  { 
    name: "MongoDB", 
    logo: "M", 
    color: "from-green-500 to-green-600",
    description: { 
      en: "Database infrastructure partner",
      ar: "شريك البنية التحتية لقواعد البيانات",
      tr: "Veritabanı altyapı ortağı",
      uk: "Партнер з інфраструктури баз даних",
      pl: "Partner infrastruktury baz danych",
      ro: "Partener infrastructură baze de date",
      ru: "Партнер по инфраструктуре баз данных"
    },
    category: "Database"
  },
  { 
    name: "Redis", 
    logo: "R", 
    color: "from-red-500 to-red-600",
    description: { 
      en: "In-memory caching solutions",
      ar: "حلول التخزين المؤقت في الذاكرة",
      tr: "Bellek içi önbellek çözümleri",
      uk: "Рішення для кешування в пам'яті",
      pl: "Rozwiązania buforowania w pamięci",
      ro: "Soluții de cache în memorie",
      ru: "Решения для кэширования в памяти"
    },
    category: "Performance"
  },
  { 
    name: "Stripe", 
    logo: "S", 
    color: "from-purple-500 to-purple-600",
    description: { 
      en: "Global payment processing",
      ar: "معالجة المدفوعات العالمية",
      tr: "Küresel ödeme işleme",
      uk: "Глобальна обробка платежів",
      pl: "Globalne przetwarzanie płatności",
      ro: "Procesare plăți globale",
      ru: "Глобальная обработка платежей"
    },
    category: "Payments"
  },
  { 
    name: "Twilio", 
    logo: "T", 
    color: "from-pink-500 to-pink-600",
    description: { 
      en: "Communication APIs and SMS",
      ar: "واجهات برمجة الاتصالات والرسائل",
      tr: "İletişim API'leri ve SMS",
      uk: "API комунікацій та SMS",
      pl: "API komunikacyjne i SMS",
      ro: "API-uri de comunicare și SMS",
      ru: "API связи и SMS"
    },
    category: "Communication"
  },
  { 
    name: "Auth0", 
    logo: "A0", 
    color: "from-slate-500 to-slate-600",
    description: { 
      en: "Identity and access management",
      ar: "إدارة الهوية والوصول",
      tr: "Kimlik ve erişim yönetimi",
      uk: "Управління ідентифікацією та доступом",
      pl: "Zarządzanie tożsamością i dostępem",
      ro: "Gestionarea identității și accesului",
      ru: "Управление идентификацией и доступом"
    },
    category: "Security"
  },
  { 
    name: "Datadog", 
    logo: "DD", 
    color: "from-violet-500 to-violet-600",
    description: { 
      en: "Infrastructure monitoring",
      ar: "مراقبة البنية التحتية",
      tr: "Altyapı izleme",
      uk: "Моніторинг інфраструктури",
      pl: "Monitorowanie infrastruktury",
      ro: "Monitorizare infrastructură",
      ru: "Мониторинг инфраструктуры"
    },
    category: "Monitoring"
  }
];

const regionalPartners = [
  { region: "🇸🇦 Saudi Arabia", partners: 3, description: { en: "Licensed banking partners", ar: "شركاء بنكيون مرخصون", tr: "Lisanslı bankacılık ortakları", uk: "Ліцензовані банківські партнери", pl: "Licencjonowani partnerzy bankowi", ro: "Parteneri bancari licențiați", ru: "Лицензированные банковские партнеры" } },
  { region: "🇦🇪 UAE", partners: 5, description: { en: "Fintech ecosystem partners", ar: "شركاء منظومة التكنولوجيا المالية", tr: "Fintech ekosistem ortakları", uk: "Партнери фінтех-екосистеми", pl: "Partnerzy ekosystemu fintech", ro: "Parteneri ecosistem fintech", ru: "Партнеры финтех-экосистемы" } },
  { region: "🇹🇷 Turkey", partners: 4, description: { en: "Exchange house network", ar: "شبكة مكاتب الصرافة", tr: "Döviz bürosu ağı", uk: "Мережа обмінних пунктів", pl: "Sieć kantorów", ro: "Rețea case de schimb", ru: "Сеть обменных пунктов" } },
  { region: "🇩🇪 Germany", partners: 2, description: { en: "Banking compliance partners", ar: "شركاء الامتثال المصرفي", tr: "Bankacılık uyumluluk ortakları", uk: "Партнери з банківської відповідності", pl: "Partnerzy zgodności bankowej", ro: "Parteneri conformitate bancară", ru: "Партнеры по банковскому соответствию" } },
  { region: "🇵🇱 Poland", partners: 3, description: { en: "Regional distribution partners", ar: "شركاء التوزيع الإقليميون", tr: "Bölgesel dağıtım ortakları", uk: "Регіональні партнери з дистрибуції", pl: "Regionalni partnerzy dystrybucyjni", ro: "Parteneri distribuție regională", ru: "Региональные партнеры по дистрибуции" } },
  { region: "🇪🇬 Egypt", partners: 4, description: { en: "Banking & remittance partners", ar: "شركاء البنوك والحوالات", tr: "Bankacılık ve havale ortakları", uk: "Партнери з банкінгу та переказів", pl: "Partnerzy bankowi i przekazów", ro: "Parteneri bancari și remitere", ru: "Партнеры по банкингу и переводам" } },
];

const successStories = [
  {
    company: "Al-Rajhi Exchange",
    logo: "AR",
    color: "from-emerald-500 to-emerald-600",
    region: "🇸🇦",
    stats: {
      transactions: "10M+",
      growth: "+340%",
      time: "6 months"
    },
    quote: {
      en: "FinCore transformed our operations completely. We processed more transactions in 6 months than the previous 2 years combined.",
      ar: "غيّر FinCore عملياتنا بالكامل. عالجنا معاملات في 6 أشهر أكثر من العامين السابقين مجتمعين.",
      tr: "FinCore operasyonlarımızı tamamen dönüştürdü. 6 ayda önceki 2 yıldan fazla işlem gerçekleştirdik.",
      uk: "FinCore повністю трансформував наші операції. За 6 місяців ми обробили більше транзакцій, ніж за попередні 2 роки.",
      pl: "FinCore całkowicie przekształcił nasze operacje. W 6 miesięcy przetworzyliśmy więcej transakcji niż w poprzednich 2 latach.",
      ro: "FinCore ne-a transformat complet operațiunile. Am procesat mai multe tranzacții în 6 luni decât în ultimii 2 ani combinați.",
      ru: "FinCore полностью трансформировал наши операции. За 6 месяцев мы обработали больше транзакций, чем за предыдущие 2 года."
    }
  },
  {
    company: "EuroTransfer GmbH",
    logo: "ET",
    color: "from-blue-500 to-blue-600",
    region: "🇩🇪",
    stats: {
      transactions: "5M+",
      growth: "+180%",
      time: "8 months"
    },
    quote: {
      en: "The security and compliance features gave us confidence to expand into 12 new markets within our first year.",
      ar: "منحتنا ميزات الأمان والامتثال الثقة للتوسع في 12 سوقاً جديداً خلال عامنا الأول.",
      tr: "Güvenlik ve uyumluluk özellikleri, ilk yılımızda 12 yeni pazara genişleme güveni verdi.",
      uk: "Функції безпеки та відповідності дали нам впевненість для розширення на 12 нових ринків протягом першого року.",
      pl: "Funkcje bezpieczeństwa i zgodności dały nam pewność do ekspansji na 12 nowych rynków w pierwszym roku.",
      ro: "Caracteristicile de securitate și conformitate ne-au dat încrederea să ne extindem pe 12 piețe noi în primul an.",
      ru: "Функции безопасности и соответствия дали нам уверенность для расширения на 12 новых рынков в первый год."
    }
  },
  {
    company: "İstanbul Döviz",
    logo: "ID",
    color: "from-red-500 to-red-600",
    region: "🇹🇷",
    stats: {
      transactions: "8M+",
      growth: "+250%",
      time: "12 months"
    },
    quote: {
      en: "FinCore's multi-currency support and real-time rates helped us become the leading exchange in our region.",
      ar: "ساعدنا دعم FinCore للعملات المتعددة والأسعار الفورية لنصبح الصرافة الرائدة في منطقتنا.",
      tr: "FinCore'un çoklu para birimi desteği ve gerçek zamanlı kurları, bölgemizde lider döviz bürosu olmamıza yardımcı oldu.",
      uk: "Підтримка кількох валют та курси в реальному часі FinCore допомогли нам стати провідним обмінником у нашому регіоні.",
      pl: "Obsługa wielu walut i kursy w czasie rzeczywistym FinCore pomogły nam stać się wiodącym kantorem w naszym regionie.",
      ro: "Suportul multi-valutar și ratele în timp real ale FinCore ne-au ajutat să devenim casa de schimb lider în regiunea noastră.",
      ru: "Поддержка нескольких валют и курсы в реальном времени FinCore помогли нам стать ведущим обменником в нашем регионе."
    }
  }
];

const FCPartnersPage: React.FC = () => {
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

  const getDescription = (desc: Record<string, string>) => {
    return desc[language as keyof typeof desc] || desc.en;
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0A1628] text-white" : "bg-[#FAF8F5] text-slate-900"}`} dir={dir}>
      <FCHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`relative min-h-[50vh] flex items-center overflow-hidden ${
        theme === "dark" 
          ? "bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0A1628]" 
          : "bg-gradient-to-br from-[#FAF8F5] via-white to-[#f5f0ff]"
      }`}>
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-500/5" : "bg-purple-500/10"
          }`} />
          <div className={`absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl ${
            theme === "dark" ? "bg-teal-500/5" : "bg-teal-500/10"
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
                <Handshake className="w-4 h-4" />
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

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
              >
                {t.becomePartner}
                <Arrow className="w-4 h-4 ms-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className={theme === "dark" ? "border-slate-600 hover:bg-slate-800" : ""}
              >
                {t.partnerLogin}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Partners */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.infraTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.infraSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {infrastructurePartners.map((partner, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-8 rounded-3xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-slate-50 border border-slate-200 hover:border-teal-500/50 shadow-lg"
                  } transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{partner.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{partner.location}</span>
                        {partner.tier === "Strategic" && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            theme === "dark" 
                              ? "bg-yellow-500/20 text-yellow-300" 
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            ★ {partner.tier}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {getDescription(partner.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Partners */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.techTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.techSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyPartners.map((partner, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl flex items-center gap-4 ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{partner.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        theme === "dark" 
                          ? "bg-slate-700 text-slate-300" 
                          : "bg-slate-100 text-slate-600"
                      }`}>
                        {partner.category}
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      {getDescription(partner.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regional Partners */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.regionalTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.regionalSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalPartners.map((partner, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">{partner.region}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      theme === "dark" 
                        ? "bg-teal-500/20 text-teal-300" 
                        : "bg-teal-100 text-teal-700"
                    }`}>
                      {partner.partners} partners
                    </span>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {getDescription(partner.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.successTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.successSubtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-8 rounded-3xl ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700" 
                      : "bg-white border border-slate-200 shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {story.logo}
                    </div>
                    <div>
                      <h3 className="font-bold">{story.company}</h3>
                      <span className="text-lg">{story.region}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-teal-500">{story.stats.transactions}</div>
                      <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>Transactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-500">{story.stats.growth}</div>
                      <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-cyan-500">{story.stats.time}</div>
                      <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>Time</div>
                    </div>
                  </div>
                  
                  <blockquote className={`text-sm italic ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    "{getDescription(story.quote)}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Program */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.programTitle}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t.programSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Award, title: t.programBenefit1, desc: t.programBenefit1Desc, color: "from-yellow-500 to-orange-500" },
                { icon: Network, title: t.programBenefit2, desc: t.programBenefit2Desc, color: "from-blue-500 to-cyan-500" },
                { icon: Zap, title: t.programBenefit3, desc: t.programBenefit3Desc, color: "from-purple-500 to-pink-500" },
                { icon: HeartHandshake, title: t.programBenefit4, desc: t.programBenefit4Desc, color: "from-teal-500 to-green-500" }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl flex gap-4 ${
                    theme === "dark" 
                      ? "bg-slate-800/50 border border-slate-700 hover:border-teal-500/50" 
                      : "bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm"
                  } transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      {benefit.desc}
                    </p>
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
            <Handshake className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              {t.ctaSubtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
            >
              {t.ctaButton}
              <Arrow className="w-4 h-4 ms-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <FCFooter />
    </div>
  );
};

export default FCPartnersPage;
