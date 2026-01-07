import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { 
  ArrowRight, ArrowLeft, Server, Cpu, Building2, Shield, Globe, 
  TrendingUp, Zap, CheckCircle2, BarChart3, Lock, Cloud, Database,
  Landmark, Factory, Brain, Network, HardDrive, Sparkles
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Our Investments",
    pageSubtitle: "Strategic investments powering the future of enterprise technology",
    
    // Main Investment Areas
    investmentTitle: "Investment Focus Areas",
    investmentSubtitle: "We strategically invest in cutting-edge technology infrastructure and research",
    
    // AI Data Centers
    aiDataCenterTitle: "AI Data Centers",
    aiDataCenterSubtitle: "High-Performance Computing Infrastructure",
    aiDataCenterDesc: "We invest heavily in state-of-the-art AI data centers equipped with the latest GPU clusters, designed to serve large enterprises and governments with advanced artificial intelligence capabilities.",
    aiFeatures: [
      "NVIDIA H100 & A100 GPU Clusters",
      "Petaflop-scale Computing Power",
      "Enterprise-Grade AI Training Infrastructure",
      "Real-time AI Inference Capabilities",
      "24/7 High-Availability Systems",
      "Green Energy Powered Facilities"
    ],
    
    // R&D Investment
    rdTitle: "Research & Development",
    rdSubtitle: "Innovation Through Continuous R&D",
    rdDesc: "Significant investment in R&D enables us to stay at the forefront of enterprise technology, developing next-generation solutions for complex business challenges.",
    rdFeatures: [
      "AI/ML Algorithm Development",
      "Enterprise Software Innovation",
      "Cybersecurity Research",
      "Quantum Computing Readiness",
      "Blockchain Enterprise Solutions",
      "Natural Language Processing"
    ],
    
    // Government & Enterprise
    govTitle: "Government & Enterprise Solutions",
    govSubtitle: "Tailored Infrastructure for Critical Operations",
    govDesc: "Our investments support specialized infrastructure designed to meet the stringent requirements of government agencies and Fortune 500 companies.",
    govFeatures: [
      "Classified Data Processing Centers",
      "Sovereign Cloud Infrastructure",
      "Compliance-Ready Platforms",
      "Disaster Recovery Systems",
      "Zero-Trust Security Architecture",
      "Mission-Critical Workloads"
    ],
    
    // Investment Stats
    statsTitle: "Investment Impact",
    stat1: "$50M+",
    stat1Label: "Annual R&D Investment",
    stat2: "15+",
    stat2Label: "Data Centers Globally",
    stat3: "50PF",
    stat3Label: "Combined Computing Power",
    stat4: "99.99%",
    stat4Label: "Infrastructure Uptime",
    
    // Locations
    locationsTitle: "Strategic Locations",
    locationsSubtitle: "Data centers positioned across Europe for optimal performance and compliance",
    dublinDC: "Dublin, Ireland",
    dublinDCDesc: "European HQ & Primary Data Center",
    londonDC: "London, UK",
    londonDCDesc: "Financial Services Hub",
    frankfurtDC: "Frankfurt, Germany",
    frankfurtDCDesc: "Central European Operations",
    amsterdamDC: "Amsterdam, Netherlands",
    amsterdamDCDesc: "Network Exchange Hub",
    
    // Partners
    partnersTitle: "Technology Partners",
    partnersSubtitle: "Collaborating with industry leaders",
    
    // CTA
    ctaTitle: "Partner With Us",
    ctaDesc: "Explore investment opportunities and enterprise solutions",
    ctaButton: "Contact Our Investment Team",
    
    // Why Invest Section
    whyTitle: "Why We Invest in AI Infrastructure",
    why1Title: "Future-Ready",
    why1Desc: "Preparing enterprises for the AI-driven future",
    why2Title: "Scalability",
    why2Desc: "Infrastructure that grows with your needs",
    why3Title: "Security",
    why3Desc: "Enterprise-grade protection for sensitive workloads",
    why4Title: "Performance",
    why4Desc: "Unmatched computing power for complex tasks"
  },
  ar: {
    pageTitle: "استثماراتنا",
    pageSubtitle: "استثمارات استراتيجية تدعم مستقبل تقنية المؤسسات",
    
    investmentTitle: "مجالات الاستثمار",
    investmentSubtitle: "نستثمر استراتيجياً في البنية التحتية التقنية المتطورة والبحث",
    
    aiDataCenterTitle: "مراكز بيانات الذكاء الاصطناعي",
    aiDataCenterSubtitle: "بنية تحتية للحوسبة عالية الأداء",
    aiDataCenterDesc: "نستثمر بكثافة في مراكز بيانات ذكاء اصطناعي متطورة مجهزة بأحدث مجموعات GPU، مصممة لخدمة المؤسسات الكبرى والحكومات بقدرات ذكاء اصطناعي متقدمة.",
    aiFeatures: [
      "مجموعات NVIDIA H100 و A100 GPU",
      "قوة حوسبة بيتافلوب",
      "بنية تحتية لتدريب AI على مستوى المؤسسات",
      "قدرات استدلال AI في الوقت الفعلي",
      "أنظمة توافر عالية 24/7",
      "منشآت تعمل بالطاقة الخضراء"
    ],
    
    rdTitle: "البحث والتطوير",
    rdSubtitle: "الابتكار من خلال البحث والتطوير المستمر",
    rdDesc: "الاستثمار الكبير في البحث والتطوير يمكننا من البقاء في طليعة تقنية المؤسسات، وتطوير حلول الجيل القادم للتحديات التجارية المعقدة.",
    rdFeatures: [
      "تطوير خوارزميات AI/ML",
      "ابتكار برمجيات المؤسسات",
      "بحوث الأمن السيبراني",
      "الاستعداد للحوسبة الكمية",
      "حلول البلوكتشين للمؤسسات",
      "معالجة اللغة الطبيعية"
    ],
    
    govTitle: "حلول الحكومات والمؤسسات",
    govSubtitle: "بنية تحتية مخصصة للعمليات الحيوية",
    govDesc: "تدعم استثماراتنا بنية تحتية متخصصة مصممة لتلبية المتطلبات الصارمة للجهات الحكومية وشركات Fortune 500.",
    govFeatures: [
      "مراكز معالجة البيانات السرية",
      "بنية تحتية سحابية سيادية",
      "منصات جاهزة للامتثال",
      "أنظمة استعادة الكوارث",
      "هندسة أمان Zero-Trust",
      "أحمال العمل الحيوية"
    ],
    
    statsTitle: "تأثير الاستثمار",
    stat1: "+50 مليون$",
    stat1Label: "استثمار سنوي في البحث والتطوير",
    stat2: "+15",
    stat2Label: "مركز بيانات عالمياً",
    stat3: "50PF",
    stat3Label: "قوة حوسبة مجمعة",
    stat4: "99.99%",
    stat4Label: "وقت تشغيل البنية التحتية",
    
    locationsTitle: "المواقع الاستراتيجية",
    locationsSubtitle: "مراكز بيانات موزعة عبر أوروبا للأداء الأمثل والامتثال",
    dublinDC: "دبلن، أيرلندا",
    dublinDCDesc: "المقر الأوروبي ومركز البيانات الرئيسي",
    londonDC: "لندن، المملكة المتحدة",
    londonDCDesc: "مركز الخدمات المالية",
    frankfurtDC: "فرانكفورت، ألمانيا",
    frankfurtDCDesc: "عمليات أوروبا الوسطى",
    amsterdamDC: "أمستردام، هولندا",
    amsterdamDCDesc: "مركز تبادل الشبكات",
    
    partnersTitle: "شركاء التقنية",
    partnersSubtitle: "التعاون مع قادة الصناعة",
    
    ctaTitle: "شارك معنا",
    ctaDesc: "استكشف فرص الاستثمار وحلول المؤسسات",
    ctaButton: "تواصل مع فريق الاستثمار",
    
    whyTitle: "لماذا نستثمر في بنية AI التحتية",
    why1Title: "جاهز للمستقبل",
    why1Desc: "إعداد المؤسسات للمستقبل المدعوم بالذكاء الاصطناعي",
    why2Title: "قابلية التوسع",
    why2Desc: "بنية تحتية تنمو مع احتياجاتك",
    why3Title: "الأمان",
    why3Desc: "حماية على مستوى المؤسسات للأحمال الحساسة",
    why4Title: "الأداء",
    why4Desc: "قوة حوسبة لا مثيل لها للمهام المعقدة"
  },
  ru: {
    pageTitle: "Наши инвестиции",
    pageSubtitle: "Стратегические инвестиции в будущее корпоративных технологий",
    
    investmentTitle: "Направления инвестиций",
    investmentSubtitle: "Мы стратегически инвестируем в передовую технологическую инфраструктуру",
    
    aiDataCenterTitle: "ИИ Дата-центры",
    aiDataCenterSubtitle: "Инфраструктура высокопроизводительных вычислений",
    aiDataCenterDesc: "Мы активно инвестируем в современные ИИ дата-центры, оснащённые новейшими кластерами GPU для обслуживания крупных предприятий и правительств.",
    aiFeatures: [
      "Кластеры NVIDIA H100 и A100 GPU",
      "Петафлопные вычисления",
      "Корпоративная инфраструктура для обучения ИИ",
      "Возможности ИИ-инференса в реальном времени",
      "Системы высокой доступности 24/7",
      "Объекты на зелёной энергии"
    ],
    
    rdTitle: "Исследования и разработки",
    rdSubtitle: "Инновации через непрерывные R&D",
    rdDesc: "Значительные инвестиции в R&D позволяют нам оставаться на передовой корпоративных технологий.",
    rdFeatures: [
      "Разработка AI/ML алгоритмов",
      "Инновации в корпоративном ПО",
      "Исследования кибербезопасности",
      "Готовность к квантовым вычислениям",
      "Блокчейн для предприятий",
      "Обработка естественного языка"
    ],
    
    govTitle: "Решения для правительства и предприятий",
    govSubtitle: "Специализированная инфраструктура для критических операций",
    govDesc: "Наши инвестиции поддерживают специализированную инфраструктуру для государственных органов и компаний Fortune 500.",
    govFeatures: [
      "Центры обработки секретных данных",
      "Суверенная облачная инфраструктура",
      "Платформы, готовые к комплаенсу",
      "Системы аварийного восстановления",
      "Архитектура Zero-Trust",
      "Критически важные рабочие нагрузки"
    ],
    
    statsTitle: "Влияние инвестиций",
    stat1: "$50M+",
    stat1Label: "Годовые инвестиции в R&D",
    stat2: "15+",
    stat2Label: "Дата-центров по миру",
    stat3: "50PF",
    stat3Label: "Совокупная вычислительная мощность",
    stat4: "99.99%",
    stat4Label: "Время работы инфраструктуры",
    
    locationsTitle: "Стратегические локации",
    locationsSubtitle: "Дата-центры по всей Европе для оптимальной производительности",
    dublinDC: "Дублин, Ирландия",
    dublinDCDesc: "Европейская штаб-квартира",
    londonDC: "Лондон, Великобритания",
    londonDCDesc: "Финансовый центр",
    frankfurtDC: "Франкфурт, Германия",
    frankfurtDCDesc: "Центральноевропейские операции",
    amsterdamDC: "Амстердам, Нидерланды",
    amsterdamDCDesc: "Сетевой хаб",
    
    partnersTitle: "Технологические партнёры",
    partnersSubtitle: "Сотрудничество с лидерами отрасли",
    
    ctaTitle: "Станьте нашим партнёром",
    ctaDesc: "Изучите инвестиционные возможности",
    ctaButton: "Связаться с инвестиционной командой",
    
    whyTitle: "Почему мы инвестируем в ИИ-инфраструктуру",
    why1Title: "Готовность к будущему",
    why1Desc: "Подготовка предприятий к будущему ИИ",
    why2Title: "Масштабируемость",
    why2Desc: "Инфраструктура, растущая с вами",
    why3Title: "Безопасность",
    why3Desc: "Корпоративная защита",
    why4Title: "Производительность",
    why4Desc: "Непревзойдённая вычислительная мощность"
  },
  uk: {
    pageTitle: "Наші інвестиції",
    pageSubtitle: "Стратегічні інвестиції в майбутнє корпоративних технологій",
    
    investmentTitle: "Напрямки інвестицій",
    investmentSubtitle: "Ми стратегічно інвестуємо в передову технологічну інфраструктуру",
    
    aiDataCenterTitle: "ШІ Дата-центри",
    aiDataCenterSubtitle: "Інфраструктура високопродуктивних обчислень",
    aiDataCenterDesc: "Ми активно інвестуємо в сучасні ШІ дата-центри для обслуговування великих підприємств та урядів.",
    aiFeatures: [
      "Кластери NVIDIA H100 та A100 GPU",
      "Петафлопні обчислення",
      "Корпоративна інфраструктура для навчання ШІ",
      "Можливості ШІ-інференсу в реальному часі",
      "Системи високої доступності 24/7",
      "Об'єкти на зеленій енергії"
    ],
    
    rdTitle: "Дослідження та розробки",
    rdSubtitle: "Інновації через безперервні R&D",
    rdDesc: "Значні інвестиції в R&D дозволяють нам залишатися на передовій корпоративних технологій.",
    rdFeatures: [
      "Розробка AI/ML алгоритмів",
      "Інновації в корпоративному ПЗ",
      "Дослідження кібербезпеки",
      "Готовність до квантових обчислень",
      "Блокчейн для підприємств",
      "Обробка природної мови"
    ],
    
    govTitle: "Рішення для уряду та підприємств",
    govSubtitle: "Спеціалізована інфраструктура для критичних операцій",
    govDesc: "Наші інвестиції підтримують спеціалізовану інфраструктуру для державних органів та компаній Fortune 500.",
    govFeatures: [
      "Центри обробки секретних даних",
      "Суверенна хмарна інфраструктура",
      "Платформи, готові до комплаєнсу",
      "Системи аварійного відновлення",
      "Архітектура Zero-Trust",
      "Критично важливі робочі навантаження"
    ],
    
    statsTitle: "Вплив інвестицій",
    stat1: "$50M+",
    stat1Label: "Річні інвестиції в R&D",
    stat2: "15+",
    stat2Label: "Дата-центрів по світу",
    stat3: "50PF",
    stat3Label: "Сукупна обчислювальна потужність",
    stat4: "99.99%",
    stat4Label: "Час роботи інфраструктури",
    
    locationsTitle: "Стратегічні локації",
    locationsSubtitle: "Дата-центри по всій Європі",
    dublinDC: "Дублін, Ірландія",
    dublinDCDesc: "Європейська штаб-квартира",
    londonDC: "Лондон, Великобританія",
    londonDCDesc: "Фінансовий центр",
    frankfurtDC: "Франкфурт, Німеччина",
    frankfurtDCDesc: "Центральноєвропейські операції",
    amsterdamDC: "Амстердам, Нідерланди",
    amsterdamDCDesc: "Мережевий хаб",
    
    partnersTitle: "Технологічні партнери",
    partnersSubtitle: "Співпраця з лідерами галузі",
    
    ctaTitle: "Станьте нашим партнером",
    ctaDesc: "Вивчіть інвестиційні можливості",
    ctaButton: "Зв'язатися з інвестиційною командою",
    
    whyTitle: "Чому ми інвестуємо в ШІ-інфраструктуру",
    why1Title: "Готовність до майбутнього",
    why1Desc: "Підготовка підприємств до майбутнього ШІ",
    why2Title: "Масштабованість",
    why2Desc: "Інфраструктура, що росте з вами",
    why3Title: "Безпека",
    why3Desc: "Корпоративний захист",
    why4Title: "Продуктивність",
    why4Desc: "Неперевершена обчислювальна потужність"
  },
  tr: {
    pageTitle: "Yatırımlarımız",
    pageSubtitle: "Kurumsal teknolojinin geleceğine stratejik yatırımlar",
    
    investmentTitle: "Yatırım Odak Alanları",
    investmentSubtitle: "İleri teknoloji altyapısına stratejik olarak yatırım yapıyoruz",
    
    aiDataCenterTitle: "AI Veri Merkezleri",
    aiDataCenterSubtitle: "Yüksek Performanslı Bilgi İşlem Altyapısı",
    aiDataCenterDesc: "Büyük işletmelere ve hükümetlere hizmet vermek için en son GPU kümeleriyle donatılmış son teknoloji AI veri merkezlerine yoğun yatırım yapıyoruz.",
    aiFeatures: [
      "NVIDIA H100 ve A100 GPU Kümeleri",
      "Petaflop Ölçekli Hesaplama Gücü",
      "Kurumsal Düzeyde AI Eğitim Altyapısı",
      "Gerçek Zamanlı AI Çıkarım Yetenekleri",
      "7/24 Yüksek Erişilebilirlik Sistemleri",
      "Yeşil Enerji ile Çalışan Tesisler"
    ],
    
    rdTitle: "Araştırma ve Geliştirme",
    rdSubtitle: "Sürekli AR-GE ile İnovasyon",
    rdDesc: "AR-GE'ye yapılan önemli yatırım, kurumsal teknolojinin ön saflarında kalmamızı sağlıyor.",
    rdFeatures: [
      "AI/ML Algoritma Geliştirme",
      "Kurumsal Yazılım İnovasyonu",
      "Siber Güvenlik Araştırması",
      "Kuantum Bilgisayar Hazırlığı",
      "Blockchain Kurumsal Çözümleri",
      "Doğal Dil İşleme"
    ],
    
    govTitle: "Devlet ve Kurumsal Çözümler",
    govSubtitle: "Kritik Operasyonlar için Özelleştirilmiş Altyapı",
    govDesc: "Yatırımlarımız, devlet kurumları ve Fortune 500 şirketlerinin katı gereksinimlerini karşılamak için tasarlanmış altyapıyı destekler.",
    govFeatures: [
      "Gizli Veri İşleme Merkezleri",
      "Egemen Bulut Altyapısı",
      "Uyumluluk Hazır Platformlar",
      "Felaket Kurtarma Sistemleri",
      "Zero-Trust Güvenlik Mimarisi",
      "Kritik İş Yükleri"
    ],
    
    statsTitle: "Yatırım Etkisi",
    stat1: "$50M+",
    stat1Label: "Yıllık AR-GE Yatırımı",
    stat2: "15+",
    stat2Label: "Küresel Veri Merkezi",
    stat3: "50PF",
    stat3Label: "Toplam Hesaplama Gücü",
    stat4: "99.99%",
    stat4Label: "Altyapı Çalışma Süresi",
    
    locationsTitle: "Stratejik Lokasyonlar",
    locationsSubtitle: "Optimal performans için Avrupa genelinde konumlanmış veri merkezleri",
    dublinDC: "Dublin, İrlanda",
    dublinDCDesc: "Avrupa Merkezi",
    londonDC: "Londra, İngiltere",
    londonDCDesc: "Finansal Hizmetler Hub'ı",
    frankfurtDC: "Frankfurt, Almanya",
    frankfurtDCDesc: "Orta Avrupa Operasyonları",
    amsterdamDC: "Amsterdam, Hollanda",
    amsterdamDCDesc: "Ağ Değişim Hub'ı",
    
    partnersTitle: "Teknoloji Ortakları",
    partnersSubtitle: "Sektör liderleriyle işbirliği",
    
    ctaTitle: "Bizimle Ortak Olun",
    ctaDesc: "Yatırım fırsatlarını keşfedin",
    ctaButton: "Yatırım Ekibiyle İletişime Geçin",
    
    whyTitle: "Neden AI Altyapısına Yatırım Yapıyoruz",
    why1Title: "Geleceğe Hazır",
    why1Desc: "İşletmeleri AI odaklı geleceğe hazırlama",
    why2Title: "Ölçeklenebilirlik",
    why2Desc: "İhtiyaçlarınızla büyüyen altyapı",
    why3Title: "Güvenlik",
    why3Desc: "Kurumsal düzeyde koruma",
    why4Title: "Performans",
    why4Desc: "Eşsiz hesaplama gücü"
  },
  pl: {
    pageTitle: "Nasze inwestycje",
    pageSubtitle: "Strategiczne inwestycje w przyszłość technologii korporacyjnych",
    
    investmentTitle: "Obszary inwestycji",
    investmentSubtitle: "Strategicznie inwestujemy w zaawansowaną infrastrukturę technologiczną",
    
    aiDataCenterTitle: "Centra danych AI",
    aiDataCenterSubtitle: "Infrastruktura obliczeń wysokiej wydajności",
    aiDataCenterDesc: "Intensywnie inwestujemy w nowoczesne centra danych AI wyposażone w najnowsze klastry GPU, przeznaczone do obsługi dużych przedsiębiorstw i rządów.",
    aiFeatures: [
      "Klastry NVIDIA H100 i A100 GPU",
      "Moc obliczeniowa skali petaflop",
      "Infrastruktura szkolenia AI klasy enterprise",
      "Możliwości wnioskowania AI w czasie rzeczywistym",
      "Systemy wysokiej dostępności 24/7",
      "Obiekty zasilane zieloną energią"
    ],
    
    rdTitle: "Badania i rozwój",
    rdSubtitle: "Innowacje poprzez ciągłe R&D",
    rdDesc: "Znaczące inwestycje w R&D pozwalają nam pozostać na czele technologii korporacyjnych.",
    rdFeatures: [
      "Rozwój algorytmów AI/ML",
      "Innowacje w oprogramowaniu korporacyjnym",
      "Badania cyberbezpieczeństwa",
      "Gotowość na obliczenia kwantowe",
      "Rozwiązania blockchain dla przedsiębiorstw",
      "Przetwarzanie języka naturalnego"
    ],
    
    govTitle: "Rozwiązania rządowe i korporacyjne",
    govSubtitle: "Dedykowana infrastruktura dla operacji krytycznych",
    govDesc: "Nasze inwestycje wspierają specjalistyczną infrastrukturę dla agencji rządowych i firm Fortune 500.",
    govFeatures: [
      "Centra przetwarzania danych tajnych",
      "Suwerenna infrastruktura chmurowa",
      "Platformy gotowe na zgodność",
      "Systemy odzyskiwania po awarii",
      "Architektura Zero-Trust",
      "Krytyczne obciążenia"
    ],
    
    statsTitle: "Wpływ inwestycji",
    stat1: "$50M+",
    stat1Label: "Roczne inwestycje w R&D",
    stat2: "15+",
    stat2Label: "Globalnych centrów danych",
    stat3: "50PF",
    stat3Label: "Łączna moc obliczeniowa",
    stat4: "99.99%",
    stat4Label: "Czas pracy infrastruktury",
    
    locationsTitle: "Strategiczne lokalizacje",
    locationsSubtitle: "Centra danych w całej Europie",
    dublinDC: "Dublin, Irlandia",
    dublinDCDesc: "Europejska siedziba główna",
    londonDC: "Londyn, Wielka Brytania",
    londonDCDesc: "Centrum usług finansowych",
    frankfurtDC: "Frankfurt, Niemcy",
    frankfurtDCDesc: "Operacje środkowoeuropejskie",
    amsterdamDC: "Amsterdam, Holandia",
    amsterdamDCDesc: "Hub wymiany sieci",
    
    partnersTitle: "Partnerzy technologiczni",
    partnersSubtitle: "Współpraca z liderami branży",
    
    ctaTitle: "Zostań naszym partnerem",
    ctaDesc: "Poznaj możliwości inwestycyjne",
    ctaButton: "Skontaktuj się z zespołem inwestycyjnym",
    
    whyTitle: "Dlaczego inwestujemy w infrastrukturę AI",
    why1Title: "Gotowość na przyszłość",
    why1Desc: "Przygotowanie przedsiębiorstw na przyszłość AI",
    why2Title: "Skalowalność",
    why2Desc: "Infrastruktura rosnąca z Twoimi potrzebami",
    why3Title: "Bezpieczeństwo",
    why3Desc: "Ochrona klasy enterprise",
    why4Title: "Wydajność",
    why4Desc: "Niezrównana moc obliczeniowa"
  },
  ro: {
    pageTitle: "Investițiile noastre",
    pageSubtitle: "Investiții strategice în viitorul tehnologiei enterprise",
    
    investmentTitle: "Domenii de investiții",
    investmentSubtitle: "Investim strategic în infrastructura tehnologică avansată",
    
    aiDataCenterTitle: "Centre de date AI",
    aiDataCenterSubtitle: "Infrastructură de calcul de înaltă performanță",
    aiDataCenterDesc: "Investim masiv în centre de date AI de ultimă generație echipate cu cele mai recente clustere GPU pentru a deservi întreprinderi mari și guverne.",
    aiFeatures: [
      "Clustere NVIDIA H100 și A100 GPU",
      "Putere de calcul la scară petaflop",
      "Infrastructură de antrenament AI de nivel enterprise",
      "Capabilități de inferență AI în timp real",
      "Sisteme de înaltă disponibilitate 24/7",
      "Facilități alimentate cu energie verde"
    ],
    
    rdTitle: "Cercetare și dezvoltare",
    rdSubtitle: "Inovație prin R&D continuu",
    rdDesc: "Investițiile semnificative în R&D ne permit să rămânem în fruntea tehnologiei enterprise.",
    rdFeatures: [
      "Dezvoltare algoritmi AI/ML",
      "Inovație software enterprise",
      "Cercetare în securitate cibernetică",
      "Pregătire pentru calculul cuantic",
      "Soluții blockchain enterprise",
      "Procesare limbaj natural"
    ],
    
    govTitle: "Soluții guvernamentale și enterprise",
    govSubtitle: "Infrastructură dedicată pentru operațiuni critice",
    govDesc: "Investițiile noastre susțin infrastructura specializată pentru agenții guvernamentale și companii Fortune 500.",
    govFeatures: [
      "Centre de procesare date clasificate",
      "Infrastructură cloud suverană",
      "Platforme pregătite pentru conformitate",
      "Sisteme de recuperare în caz de dezastru",
      "Arhitectură Zero-Trust",
      "Încărcături de lucru critice"
    ],
    
    statsTitle: "Impactul investițiilor",
    stat1: "$50M+",
    stat1Label: "Investiții anuale în R&D",
    stat2: "15+",
    stat2Label: "Centre de date globale",
    stat3: "50PF",
    stat3Label: "Putere de calcul combinată",
    stat4: "99.99%",
    stat4Label: "Timp de funcționare infrastructură",
    
    locationsTitle: "Locații strategice",
    locationsSubtitle: "Centre de date în toată Europa",
    dublinDC: "Dublin, Irlanda",
    dublinDCDesc: "Sediul european central",
    londonDC: "Londra, Marea Britanie",
    londonDCDesc: "Hub servicii financiare",
    frankfurtDC: "Frankfurt, Germania",
    frankfurtDCDesc: "Operațiuni Europa Centrală",
    amsterdamDC: "Amsterdam, Olanda",
    amsterdamDCDesc: "Hub de schimb rețea",
    
    partnersTitle: "Parteneri tehnologici",
    partnersSubtitle: "Colaborare cu liderii industriei",
    
    ctaTitle: "Deveniți partener",
    ctaDesc: "Explorați oportunitățile de investiții",
    ctaButton: "Contactați echipa de investiții",
    
    whyTitle: "De ce investim în infrastructura AI",
    why1Title: "Pregătit pentru viitor",
    why1Desc: "Pregătirea întreprinderilor pentru viitorul AI",
    why2Title: "Scalabilitate",
    why2Desc: "Infrastructură care crește cu nevoile dvs.",
    why3Title: "Securitate",
    why3Desc: "Protecție de nivel enterprise",
    why4Title: "Performanță",
    why4Desc: "Putere de calcul de neegalat"
  },
  it: {
    pageTitle: "I nostri investimenti",
    pageSubtitle: "Investimenti strategici nel futuro della tecnologia enterprise",
    
    investmentTitle: "Aree di investimento",
    investmentSubtitle: "Investiamo strategicamente in infrastrutture tecnologiche all'avanguardia",
    
    aiDataCenterTitle: "Data Center AI",
    aiDataCenterSubtitle: "Infrastruttura di calcolo ad alte prestazioni",
    aiDataCenterDesc: "Investiamo pesantemente in data center AI all'avanguardia dotati dei più recenti cluster GPU per servire grandi imprese e governi.",
    aiFeatures: [
      "Cluster NVIDIA H100 e A100 GPU",
      "Potenza di calcolo su scala petaflop",
      "Infrastruttura di training AI enterprise-grade",
      "Capacità di inferenza AI in tempo reale",
      "Sistemi ad alta disponibilità 24/7",
      "Strutture alimentate da energia verde"
    ],
    
    rdTitle: "Ricerca e sviluppo",
    rdSubtitle: "Innovazione attraverso R&D continuo",
    rdDesc: "Investimenti significativi in R&D ci permettono di rimanere all'avanguardia della tecnologia enterprise.",
    rdFeatures: [
      "Sviluppo algoritmi AI/ML",
      "Innovazione software enterprise",
      "Ricerca sulla sicurezza informatica",
      "Prontezza per il quantum computing",
      "Soluzioni blockchain enterprise",
      "Elaborazione del linguaggio naturale"
    ],
    
    govTitle: "Soluzioni governative ed enterprise",
    govSubtitle: "Infrastruttura dedicata per operazioni critiche",
    govDesc: "I nostri investimenti supportano infrastrutture specializzate per agenzie governative e aziende Fortune 500.",
    govFeatures: [
      "Centri di elaborazione dati classificati",
      "Infrastruttura cloud sovrana",
      "Piattaforme pronte per la compliance",
      "Sistemi di disaster recovery",
      "Architettura Zero-Trust",
      "Carichi di lavoro mission-critical"
    ],
    
    statsTitle: "Impatto degli investimenti",
    stat1: "$50M+",
    stat1Label: "Investimenti annuali in R&D",
    stat2: "15+",
    stat2Label: "Data center globali",
    stat3: "50PF",
    stat3Label: "Potenza di calcolo combinata",
    stat4: "99.99%",
    stat4Label: "Uptime infrastruttura",
    
    locationsTitle: "Posizioni strategiche",
    locationsSubtitle: "Data center in tutta Europa",
    dublinDC: "Dublino, Irlanda",
    dublinDCDesc: "Sede europea centrale",
    londonDC: "Londra, Regno Unito",
    londonDCDesc: "Hub servizi finanziari",
    frankfurtDC: "Francoforte, Germania",
    frankfurtDCDesc: "Operazioni Europa centrale",
    amsterdamDC: "Amsterdam, Paesi Bassi",
    amsterdamDCDesc: "Hub di scambio rete",
    
    partnersTitle: "Partner tecnologici",
    partnersSubtitle: "Collaborazione con leader del settore",
    
    ctaTitle: "Diventa nostro partner",
    ctaDesc: "Esplora le opportunità di investimento",
    ctaButton: "Contatta il team investimenti",
    
    whyTitle: "Perché investiamo in infrastruttura AI",
    why1Title: "Pronto per il futuro",
    why1Desc: "Preparare le aziende per il futuro guidato dall'AI",
    why2Title: "Scalabilità",
    why2Desc: "Infrastruttura che cresce con le tue esigenze",
    why3Title: "Sicurezza",
    why3Desc: "Protezione di livello enterprise",
    why4Title: "Prestazioni",
    why4Desc: "Potenza di calcolo senza pari"
  }
};

export default function NRInvestmentsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: t.stat1, label: t.stat1Label },
    { value: t.stat2, label: t.stat2Label },
    { value: t.stat3, label: t.stat3Label },
    { value: t.stat4, label: t.stat4Label },
  ];

  const dataCenters = [
    { name: t.dublinDC, desc: t.dublinDCDesc, flag: "🇮🇪" },
    { name: t.londonDC, desc: t.londonDCDesc, flag: "🇬🇧" },
    { name: t.frankfurtDC, desc: t.frankfurtDCDesc, flag: "🇩🇪" },
    { name: t.amsterdamDC, desc: t.amsterdamDCDesc, flag: "🇳🇱" },
  ];

  const whyInvest = [
    { icon: Sparkles, title: t.why1Title, desc: t.why1Desc },
    { icon: TrendingUp, title: t.why2Title, desc: t.why2Desc },
    { icon: Shield, title: t.why3Title, desc: t.why3Desc },
    { icon: Zap, title: t.why4Title, desc: t.why4Desc },
  ];

  const techPartners = [
    { name: "NVIDIA", logo: "🟢" },
    { name: "Intel", logo: "🔵" },
    { name: "AMD", logo: "🔴" },
    { name: "Microsoft Azure", logo: "☁️" },
    { name: "AWS", logo: "🟠" },
    { name: "Google Cloud", logo: "🌈" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={dir}>
      <NRHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Strategic Investments</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.pageSubtitle}
          </p>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Areas Title */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.investmentTitle}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.investmentSubtitle}</p>
        </div>
      </section>

      {/* AI Data Centers Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.aiDataCenterTitle}</h3>
                <p className="text-lg text-purple-400 mb-4">{t.aiDataCenterSubtitle}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.aiDataCenterDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.aiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                      <Cpu className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">H100</div>
                      <div className="text-xs text-slate-400">GPU Clusters</div>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                      <HardDrive className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">50PF</div>
                      <div className="text-xs text-slate-400">Computing Power</div>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                      <Network className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">400Gb</div>
                      <div className="text-xs text-slate-400">Network Speed</div>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                      <Lock className="w-10 h-10 text-green-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">Tier 4</div>
                      <div className="text-xs text-slate-400">Security Level</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-500/30 rounded-3xl p-8">
                  <div className="space-y-4">
                    {[
                      { icon: Brain, label: "AI/ML Research", progress: 85 },
                      { icon: Shield, label: "Cybersecurity", progress: 78 },
                      { icon: Cloud, label: "Cloud Innovation", progress: 92 },
                      { icon: Database, label: "Data Systems", progress: 88 },
                    ].map((item, index) => (
                      <div key={index} className="bg-slate-800/80 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-blue-400" />
                            <span className="text-white text-sm">{item.label}</span>
                          </div>
                          <span className="text-blue-400 text-sm font-semibold">{item.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.rdTitle}</h3>
                <p className="text-lg text-blue-400 mb-4">{t.rdSubtitle}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.rdDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.rdFeatures.map((feature, index) => (
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

      {/* Government & Enterprise Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6">
                  <Landmark className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.govTitle}</h3>
                <p className="text-lg text-emerald-400 mb-4">{t.govSubtitle}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">{t.govDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.govFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Trusted By</h4>
                  <p className="text-slate-400 text-sm">Government agencies and Fortune 500 companies</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Landmark, label: "Government" },
                    { icon: Building2, label: "Enterprise" },
                    { icon: Factory, label: "Industry" },
                    { icon: Shield, label: "Defense" },
                    { icon: Globe, label: "Global" },
                    { icon: Lock, label: "Secure" },
                  ].map((item, index) => (
                    <div key={index} className="bg-slate-800/80 rounded-xl p-4 text-center">
                      <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Invest Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyInvest.map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all">
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

      {/* Data Center Locations */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.locationsTitle}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t.locationsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dataCenters.map((dc, index) => (
              <div key={index} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all">
                <span className="text-4xl mb-4 block">{dc.flag}</span>
                <h3 className="text-lg font-semibold text-white mb-1">{dc.name}</h3>
                <p className="text-slate-400 text-sm">{dc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t.partnersTitle}</h2>
            <p className="text-slate-400">{t.partnersSubtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {techPartners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl">
                <span className="text-2xl">{partner.logo}</span>
                <span className="text-white font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-slate-400 mb-10">{t.ctaDesc}</p>
          <Link
            to="/next-revolution/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
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
