import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  Play,
  CheckCircle2,
  XCircle,
  ScanBarcode,
  Calculator,
  Ship,
  Scissors,
  DollarSign,
  TrendingUp,
  Users,
  Package,
  BarChart3,
  Globe,
  Shield,
  Zap,
  Clock,
  AlertTriangle,
  FileSpreadsheet,
  RefreshCw,
  ShoppingCart,
  Warehouse,
  Target,
  Award,
  Building2,
  MapPin,
  Linkedin,
  Phone,
  Mail
} from "lucide-react";

function EnterpriseLandingContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };
  const [activeComparison, setActiveComparison] = useState(0);

  const manualBurdens = [
    {
      icon: FileSpreadsheet,
      title: {
        ar: "إدخال يدوي في 5+ تطبيقات",
        en: "Manual Entry in 5+ Apps",
        ru: "Ручной ввод в 5+ приложениях",
        uk: "Ручне введення в 5+ додатках",
        ro: "Intrare manuală în 5+ aplicații",
        pl: "Ręczne wprowadzanie w 5+ aplikacjach",
        it: "Inserimento manuale in 5+ app",
        tr: "5+ Uygulamada Manuel Giriş"
      },
      desc: {
        ar: "قضاء ساعات في نقل البيانات بين برامج متعددة",
        en: "Spending hours transferring data between multiple programs",
        ru: "Трата часов на передачу данных между несколькими программами",
        uk: "Витрачання годин на передачу даних між кількома програмами",
        ro: "Petrecerea orelor transferând date între mai multe programe",
        pl: "Spędzanie godzin na przesyłaniu danych między wieloma programami",
        it: "Passare ore a trasferire dati tra più programmi",
        tr: "Birden fazla program arasında veri aktarımı için saatler harcamak"
      }
    },
    {
      icon: AlertTriangle,
      title: {
        ar: "إرهاق Excel والأخطاء",
        en: "Excel Fatigue & Errors",
        ru: "Усталость от Excel и ошибки",
        uk: "Втома від Excel та помилки",
        ro: "Oboseală Excel și erori",
        pl: "Zmęczenie Excel i błędy",
        it: "Affaticamento Excel ed errori",
        tr: "Excel Yorgunluğu ve Hatalar"
      },
      desc: {
        ar: "جداول بيانات معقدة مليئة بالأخطاء البشرية",
        en: "Complex spreadsheets full of human errors",
        ru: "Сложные электронные таблицы, полные человеческих ошибок",
        uk: "Складні електронні таблиці, повні людських помилок",
        ro: "Foi de calcul complexe pline de erori umane",
        pl: "Skomplikowane arkusze kalkulacyjne pełne błędów ludzkich",
        it: "Fogli di calcolo complessi pieni di errori umani",
        tr: "İnsan hatalarıyla dolu karmaşık e-tablolar"
      }
    },
    {
      icon: Clock,
      title: {
        ar: "10x مجهود بشري",
        en: "10x Human Effort",
        ru: "10x человеческих усилий",
        uk: "10x людських зусиль",
        ro: "10x efort uman",
        pl: "10x wysiłek ludzki",
        it: "10x sforzo umano",
        tr: "10x İnsan Çabası"
      },
      desc: {
        ar: "عمليات بطيئة تستنزف وقت الفريق",
        en: "Slow processes draining team time",
        ru: "Медленные процессы, истощающие время команды",
        uk: "Повільні процеси, що виснажують час команди",
        ro: "Procese lente care epuizează timpul echipei",
        pl: "Powolne procesy pochłaniające czas zespołu",
        it: "Processi lenti che prosciugano il tempo del team",
        tr: "Ekip zamanını tüketen yavaş süreçler"
      }
    },
    {
      icon: Package,
      title: {
        ar: "عد رولونات غير دقيق",
        en: "Inaccurate Roll Counts",
        ru: "Неточный подсчет рулонов",
        uk: "Неточний підрахунок рулонів",
        ro: "Numărătoare inexactă a rolelor",
        pl: "Niedokładne liczenie rolek",
        it: "Conteggi rotoli imprecisi",
        tr: "Hatalı Rulo Sayımları"
      },
      desc: {
        ar: "فقدان المخزون وعدم معرفة الكميات الحقيقية",
        en: "Inventory loss and unknown real quantities",
        ru: "Потеря запасов и неизвестные реальные количества",
        uk: "Втрата запасів та невідомі реальні кількості",
        ro: "Pierderea stocurilor și cantități reale necunoscute",
        pl: "Utrata zapasów i nieznane rzeczywiste ilości",
        it: "Perdita di inventario e quantità reali sconosciute",
        tr: "Envanter kaybı ve bilinmeyen gerçek miktarlar"
      }
    },
    {
      icon: ShoppingCart,
      title: {
        ar: "لا تزامن مع المتجر",
        en: "No E-commerce Sync",
        ru: "Нет синхронизации с электронной коммерцией",
        uk: "Немає синхронізації з електронною комерцією",
        ro: "Fără sincronizare E-commerce",
        pl: "Brak synchronizacji E-commerce",
        it: "Nessuna sincronizzazione E-commerce",
        tr: "E-ticaret Senkronizasyonu Yok"
      },
      desc: {
        ar: "بيع منتجات غير متوفرة وإحباط العملاء",
        en: "Selling unavailable products and frustrating customers",
        ru: "Продажа отсутствующих товаров и разочарование клиентов",
        uk: "Продаж відсутніх товарів та розчарування клієнтів",
        ro: "Vânzarea produselor indisponibile și frustrarea clienților",
        pl: "Sprzedaż niedostępnych produktów i frustracja klientów",
        it: "Vendita di prodotti non disponibili e frustrazione dei clienti",
        tr: "Mevcut olmayan ürünlerin satılması ve müşterilerin hayal kırıklığına uğraması"
      }
    },
    {
      icon: Users,
      title: {
        ar: "تكاليف عمالة عالية",
        en: "High Labor Costs",
        ru: "Высокие затраты на рабочую силу",
        uk: "Високі витрати на робочу силу",
        ro: "Costuri ridicate cu forța de muncă",
        pl: "Wysokie koszty pracy",
        it: "Alti costi del lavoro",
        tr: "Yüksek İşçilik Maliyetleri"
      },
      desc: {
        ar: "توظيف موظفين إضافيين لإدخال البيانات",
        en: "Hiring extra staff for data entry",
        ru: "Найм дополнительного персонала для ввода данных",
        uk: "Наймання додаткового персоналу для введення даних",
        ro: "Angajarea de personal suplimentar pentru introducerea datelor",
        pl: "Zatrudnianie dodatkowego personelu do wprowadzania danych",
        it: "Assunzione di personale extra per l'inserimento dati",
        tr: "Veri girişi için ekstra personel işe alma"
      }
    }
  ];

  const texaCoreAdvantages = [
    {
      icon: Globe,
      title: {
        ar: "منصة موحدة واحدة",
        en: "One Unified Platform",
        ru: "Одна единая платформа",
        uk: "Одна єдина платформа",
        ro: "O platformă unificată",
        pl: "Jedna ujednolicona platforma",
        it: "Unica piattaforma unificata",
        tr: "Tek Birleşik Platform"
      },
      desc: {
        ar: "كل شيء في مكان واحد - بدون تبديل بين التطبيقات",
        en: "Everything in one place - no app switching",
        ru: "Все в одном месте - без переключения между приложениями",
        uk: "Все в одному місці - без перемикання між додатками",
        ro: "Totul într-un singur loc - fără comutare între aplicații",
        pl: "Wszystko w jednym miejscu - bez przełączania aplikacji",
        it: "Tutto in un unico posto - nessun cambio di app",
        tr: "Her şey tek bir yerde - uygulama değiştirme yok"
      }
    },
    {
      icon: ScanBarcode,
      title: {
        ar: "جرد فوري بـ RFID",
        en: "RFID Instant Inventory",
        ru: "Мгновенная инвентаризация RFID",
        uk: "Миттєва інвентаризація RFID",
        ro: "Inventar instant RFID",
        pl: "Natychmiastowa inwentaryzacja RFID",
        it: "Inventario istantaneo RFID",
        tr: "RFID Anlık Envanter"
      },
      desc: {
        ar: "تتبع دقيق وفوري لكل رولون في ثوانٍ",
        en: "Precise real-time tracking of every roll in seconds",
        ru: "Точное отслеживание каждого рулона в реальном времени за секунды",
        uk: "Точне відстеження кожного рулону в реальному часі за секунди",
        ro: "Urmărire precisă în timp real a fiecărei role în câteva secunde",
        pl: "Precyzyjne śledzenie każdej rolki w czasie rzeczywistym w kilka sekund",
        it: "Tracciamento preciso in tempo reale di ogni rotolo in pochi secondi",
        tr: "Her rulonun saniyeler içinde hassas gerçek zamanlı takibi"
      }
    },
    {
      icon: Zap,
      title: {
        ar: "عمليات أسرع 90%",
        en: "90% Faster Operations",
        ru: "Операции на 90% быстрее",
        uk: "Операції на 90% швидші",
        ro: "Operațiuni cu 90% mai rapide",
        pl: "O 90% szybsze operacje",
        it: "Operazioni più veloci del 90%",
        tr: "%90 Daha Hızlı İşlemler"
      },
      desc: {
        ar: "أتمتة تقلل الوقت والجهد بشكل كبير",
        en: "Automation dramatically reducing time and effort",
        ru: "Автоматизация значительно сокращает время и усилия",
        uk: "Автоматизація значно скорочує час і зусилля",
        ro: "Automatizarea reduce dramatic timpul și efortul",
        pl: "Automatyzacja drastycznie redukująca czas i wysiłek",
        it: "L'automazione riduce drasticamente tempo e fatica",
        tr: "Otomasyon zaman ve çabayı önemli ölçüde azaltır"
      }
    },
    {
      icon: Target,
      title: {
        ar: "وحدات دقيقة",
        en: "Precise Units",
        ru: "Точные единицы",
        uk: "Точні одиниці",
        ro: "Unități precise",
        pl: "Precyzyjne jednostki",
        it: "Unità precise",
        tr: "Hassas Birimler"
      },
      desc: {
        ar: "أمتار، ياردات، كيلوغرام - بدقة متناهية",
        en: "Meters, Yards, Kg - with extreme precision",
        ru: "Метры, ярды, кг - с предельной точностью",
        uk: "Метри, ярди, кг - з граничною точністю",
        ro: "Metri, Yarzi, Kg - cu o precizie extremă",
        pl: "Metry, jardy, kg - z niezwykłą precyzją",
        it: "Metri, iarde, kg - con estrema precisione",
        tr: "Metre, Yarda, Kg - aşırı hassasiyetle"
      }
    },
    {
      icon: RefreshCw,
      title: {
        ar: "تزامن كامل مع المتجر",
        en: "Full E-commerce Sync",
        ru: "Полная синхронизация с электронной коммерцией",
        uk: "Повна синхронізація з електронною комерцією",
        ro: "Sincronizare completă E-commerce",
        pl: "Pełna synchronizacja E-commerce",
        it: "Sincronizzazione completa E-commerce",
        tr: "Tam E-ticaret Senkronizasyonu"
      },
      desc: {
        ar: "مخزون حي ومتزامن مع متجرك الإلكتروني",
        en: "Live inventory synced with your online store",
        ru: "Живой инвентарь, синхронизированный с вашим интернет-магазином",
        uk: "Живий інвентар, синхронізований з вашим інтернет-магазином",
        ro: "Inventar live sincronizat cu magazinul dvs. online",
        pl: "Bieżący asortyment zsynchronizowany ze sklepem internetowym",
        it: "Inventario in tempo reale sincronizzato con il tuo negozio online",
        tr: "Çevrimiçi mağazanızla senkronize edilmiş canlı envanter"
      }
    },
    {
      icon: DollarSign,
      title: {
        ar: "تقليل كبير في التكاليف",
        en: "Massive Cost Reduction",
        ru: "Массовое снижение затрат",
        uk: "Масове зниження витрат",
        ro: "Reducere masivă a costurilor",
        pl: "Ogromna redukcja kosztów",
        it: "Massiccia riduzione dei costi",
        tr: "Büyük Maliyet Azaltma"
      },
      desc: {
        ar: "وفر 3-4 رواتب موظفين مع ROI سريع",
        en: "Save 3-4 employee salaries with fast ROI",
        ru: "Сэкономьте 3-4 зарплаты сотрудников с быстрым ROI",
        uk: "Зекономте 3-4 зарплати співробітників зі швидким ROI",
        ro: "Economisiți 3-4 salarii ale angajaților cu un ROI rapid",
        pl: "Zaoszczędź 3-4 pensje pracowników z szybkim zwrotem z inwestycji",
        it: "Risparmia 3-4 stipendi dei dipendenti con un ROI veloce",
        tr: "Hızlı ROI ile 3-4 çalışan maaşından tasarruf edin"
      }
    }
  ];

  const coreModules = [
    {
      icon: ScanBarcode,
      title: {
        ar: "إدارة الرولونات والدفعات",
        en: "Roll & Batch Management",
        ru: "Управление рулонами и партиями",
        uk: "Управління рулонами та партіями",
        ro: "Gestionarea rolelor și loturilor",
        pl: "Zarządzanie rolkami i partiami",
        it: "Gestione rotoli e lotti",
        tr: "Rulo ve Parti Yönetimi"
      },
      desc: {
        ar: "تتبع دقيق باستخدام الباركود وتقنية RFID مع تصنيف متقدم للأقمشة",
        en: "Precise tracking with barcode/RFID and advanced fabric classification",
        ru: "Точное отслеживание с помощью штрих-кода/RFID и расширенная классификация тканей",
        uk: "Точне відстеження за допомогою штрих-коду/RFID та розширена класифікація тканин",
        ro: "Urmărire precisă cu cod de bare/RFID și clasificare avansată a țesăturilor",
        pl: "Precyzyjne śledzenie za pomocą kodu kreskowego/RFID i zaawansowana klasyfikacja tkanin",
        it: "Tracciamento preciso con codice a barre/RFID e classificazione avanzata dei tessuti",
        tr: "Barkod/RFID ve gelişmiş kumaş sınıflandırması ile hassas takip"
      },
      color: "from-emerald-500 to-emerald-600",
      features: [
        { ar: "تتبع RFID فوري", en: "Instant RFID tracking", ru: "Мгновенное отслеживание RFID", uk: "Миттєве відстеження RFID", ro: "Urmărire RFID instantanee", pl: "Natychmiastowe śledzenie RFID", it: "Tracciamento RFID istantaneo", tr: "Anlık RFID takibi" },
        { ar: "تصنيف الجودة", en: "Quality grading", ru: "Сортировка качества", uk: "Сортування якості", ro: "Clasificarea calității", pl: "Klasyfikacja jakości", it: "Classificazione della qualità", tr: "Kalite derecelendirmesi" },
        { ar: "سجل كامل للحركة", en: "Complete movement history", ru: "Полная история перемещений", uk: "Повна історія переміщень", ro: "Istoric complet al mișcărilor", pl: "Pełna historia ruchów", it: "Cronologia completa dei movimenti", tr: "Tam hareket geçmişi" },
        { ar: "تنبيهات المخزون", en: "Stock alerts", ru: "Оповещения о запасах", uk: "Сповіщення про запаси", ro: "Alerte de stoc", pl: "Alerty magazynowe", it: "Avvisi di giacenza", tr: "Stok uyarıları" }
      ]
    },
    {
      icon: Calculator,
      title: {
        ar: "محاسبة متكاملة",
        en: "Integrated Accounting",
        ru: "Интегрированная бухгалтерия",
        uk: "Інтегрована бухгалтерія",
        ro: "Contabilitate integrată",
        pl: "Zintegrowana księgowość",
        it: "Contabilità integrata",
        tr: "Entegre Muhasebe"
      },
      desc: {
        ar: "دقة مالية بمعايير أيرلندية-أوروبية مع دعم العملات المتعددة",
        en: "Irish-European financial precision with multi-currency support",
        ru: "Ирландско-европейская финансовая точность с поддержкой мультивалютности",
        uk: "Ірландсько-європейська фінансова точність з підтримкою мультивалютності",
        ro: "Precizie financiară irlandeză-europeană cu suport multi-monedă",
        pl: "Irlandzko-europejska precyzja finansowa z obsługą wielu walut",
        it: "Precisione finanziaria irlandese-europea con supporto multi-valuta",
        tr: "Çoklu para birimi desteği ile İrlanda-Avrupa finansal hassasiyeti"
      },
      color: "from-blue-500 to-blue-600",
      features: [
        { ar: "تقارير مالية شاملة", en: "Comprehensive financial reports", ru: "Всесторонние финансовые отчеты", uk: "Всебічні фінансові звіти", ro: "Rapoarte financiare complete", pl: "Kompleksowe raporty finansowe", it: "Rapporti finanziari completi", tr: "Kapsamlı finansal raporlar" },
        { ar: "دعم عملات متعددة", en: "Multi-currency support", ru: "Поддержка мультивалютности", uk: "Підтримка мультивалютності", ro: "Suport multi-monedă", pl: "Obsługa wielu walut", it: "Supporto multi-valuta", tr: "Çoklu para birimi desteği" },
        { ar: "حساب الربحية", en: "Profitability calculation", ru: "Расчет прибыльности", uk: "Розрахунок прибутковості", ro: "Calculul profitabilității", pl: "Obliczanie rentowności", it: "Calcolo della redditività", tr: "Karlılık hesaplama" },
        { ar: "تقارير VAT جاهزة", en: "VAT-ready reports", ru: "Готовые отчеты по НДС", uk: "Готові звіти з ПДВ", ro: "Rapoarte gata pentru TVA", pl: "Gotowe raporty VAT", it: "Rapporti pronti per l'IVA", tr: "KDV'ye hazır raporlar" }
      ]
    },
    {
      icon: Ship,
      title: {
        ar: "لوجستيات ذكية",
        en: "Smart Logistics",
        ru: "Умная логистика",
        uk: "Розумна логістика",
        ro: "Logistică inteligentă",
        pl: "Inteligentna logistyka",
        it: "Logistica intelligente",
        tr: "Akıllı Lojistik"
      },
      desc: {
        ar: "تتبع الشحنات والكونتينرات من المصدر إلى الرف",
        en: "Track shipments and containers from source to shelf",
        ru: "Отслеживание грузов и контейнеров от источника до полки",
        uk: "Відстеження вантажів та контейнерів від джерела до полиці",
        ro: "Urmăriți expedierile și containerele de la sursă la raft",
        pl: "Śledź przesyłki i kontenery od źródła do półki",
        it: "Traccia spedizioni e container dalla fonte allo scaffale",
        tr: "Kaynaktan rafa kadar sevkiyatları ve konteynerleri takip edin"
      },
      color: "from-cyan-500 to-cyan-600",
      features: [
        { ar: "تتبع GPS للكونتينرات", en: "GPS container tracking", ru: "GPS отслеживание контейнеров", uk: "GPS відстеження контейнерів", ro: "Urmărire GPS containere", pl: "Śledzenie GPS kontenerów", it: "Tracciamento GPS container", tr: "GPS konteyner takibi" },
        { ar: "التخليص الجمركي", en: "Customs clearance", ru: "Таможенное оформление", uk: "Митне оформлення", ro: "Vămuire", pl: "Odprawa celna", it: "Sdoganamento", tr: "Gümrükleme" },
        { ar: "تنبيهات الوصول", en: "Arrival alerts", ru: "Оповещения о прибытии", uk: "Сповіщення про прибуття", ro: "Alerte de sosire", pl: "Alerty o przybyciu", it: "Avvisi di arrivo", tr: "Varış uyarıları" },
        { ar: "إدارة الموردين", en: "Supplier management", ru: "Управление поставщиками", uk: "Управління постачальниками", ro: "Gestionarea furnizorilor", pl: "Zarządzanie dostawcami", it: "Gestione fornitori", tr: "Tedarikçi yönetimi" }
      ]
    },
    {
      icon: Scissors,
      title: {
        ar: "إدارة التصنيع",
        en: "Manufacturing",
        ru: "Производство",
        uk: "Виробництво",
        ro: "Fabricare",
        pl: "Produkcja",
        it: "Produzione",
        tr: "Üretim"
      },
      desc: {
        ar: "إدارة القص وتحسين استغلال الأقمشة وتقليل الهدر",
        en: "Cutting management, fabric optimization, and waste reduction",
        ru: "Управление раскроем, оптимизация тканей и сокращение отходов",
        uk: "Управління розкроєм, оптимізація тканин та зменшення відходів",
        ro: "Gestionarea tăierii, optimizarea țesăturilor și reducerea deșeurilor",
        pl: "Zarządzanie krojeniem, optymalizacja tkanin i redukcja odpadów",
        it: "Gestione del taglio, ottimizzazione dei tessuti e riduzione degli sprechi",
        tr: "Kesim yönetimi, kumaş optimizasyonu ve atık azaltma"
      },
      color: "from-purple-500 to-purple-600",
      features: [
        { ar: "تخطيط القص الذكي", en: "Smart cutting planning", ru: "Умное планирование раскроя", uk: "Розумне планування розкрою", ro: "Planificare inteligentă a tăierii", pl: "Inteligentne planowanie krojenia", it: "Pianificazione intelligente del taglio", tr: "Akıllı kesim planlaması" },
        { ar: "تقليل الهدر", en: "Waste reduction", ru: "Сокращение отходов", uk: "Зменшення відходів", ro: "Reducerea deșeurilor", pl: "Redukcja odpadów", it: "Riduzione degli sprechi", tr: "Atık azaltma" },
        { ar: "حساب التكاليف", en: "Cost calculation", ru: "Расчет затрат", uk: "Розрахунок витрат", ro: "Calculul costurilor", pl: "Kalkulacja kosztów", it: "Calcolo dei costi", tr: "Maliyet hesaplama" },
        { ar: "مراقبة الجودة", en: "Quality control", ru: "Контроль качества", uk: "Контроль якості", ro: "Controlul calității", pl: "Kontrola jakości", it: "Controllo qualità", tr: "Kalite kontrol" }
      ]
    }
  ];

  const roiStats = [
    {
      value: {
        ar: "3-4",
        en: "3-4",
        ru: "3-4",
        uk: "3-4",
        ro: "3-4",
        pl: "3-4",
        it: "3-4",
        tr: "3-4"
      },
      label: {
        ar: "رواتب موظفين يمكن توفيرها",
        en: "Employee Salaries Saved",
        ru: "Сэкономленные зарплаты сотрудников",
        uk: "Зекономлені зарплати співробітників",
        ro: "Salarii angajați economisite",
        pl: "Zaoszczędzone pensje pracowników",
        it: "Stipendi dipendenti risparmiati",
        tr: "Tasarruf Edilen Çalışan Maaşları"
      },
      icon: Users
    },
    {
      value: {
        ar: "90%",
        en: "90%",
        ru: "90%",
        uk: "90%",
        ro: "90%",
        pl: "90%",
        it: "90%",
        tr: "%90"
      },
      label: {
        ar: "تقليل وقت العمليات",
        en: "Process Time Reduction",
        ru: "Сокращение времени процессов",
        uk: "Скорочення часу процесів",
        ro: "Reducerea timpului de procesare",
        pl: "Redukcja czasu procesów",
        it: "Riduzione tempo processi",
        tr: "İşlem Süresi Azaltma"
      },
      icon: Clock
    },
    {
      value: {
        ar: "99.9%",
        en: "99.9%",
        ru: "99.9%",
        uk: "99.9%",
        ro: "99.9%",
        pl: "99.9%",
        it: "99.9%",
        tr: "%99.9"
      },
      label: {
        ar: "دقة المخزون",
        en: "Inventory Accuracy",
        ru: "Точность инвентаризации",
        uk: "Точність інвентаризації",
        ro: "Acuratețe inventar",
        pl: "Dokładność inwentaryzacji",
        it: "Accuratezza inventario",
        tr: "Envanter Doğruluğu"
      },
      icon: Target
    },
    {
      value: {
        ar: "6",
        en: "6",
        ru: "6",
        uk: "6",
        ro: "6",
        pl: "6",
        it: "6",
        tr: "6"
      },
      label: {
        ar: "أشهر لاسترداد الاستثمار",
        en: "Months to ROI",
        ru: "Месяцев до окупаемости",
        uk: "Місяців до окупності",
        ro: "Luni până la ROI",
        pl: "Miesięcy do zwrotu z inwestycji",
        it: "Mesi per il ROI",
        tr: "ROI Süresi (Ay)"
      },
      icon: TrendingUp
    }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 start-0 w-full h-full bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
          <div className="absolute top-20 end-20 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 start-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
          
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">
                    {getText({
                      ar: "تقنية أيرلندية-أوروبية",
                      en: "Irish-European Technology",
                      ru: "Ирландско-европейская технология",
                      uk: "Ірландсько-європейська технологія",
                      ro: "Tehnologie irlandeză-europeană",
                      pl: "Irlandzko-europejska technologia",
                      it: "Tecnologia irlandese-europea",
                      tr: "İrlanda-Avrupa Teknolojisi"
                    })}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
                {language === "ar" ? (
                  <>
                    دقة في <span className="text-emerald-600">كل خيط</span>.
                    <br />
                    قوة في <span className="text-emerald-600">كل رولون</span>.
                  </>
                ) : (
                  <>
                    {getText({
                      en: "Precision in ",
                      ru: "Точность в ",
                      uk: "Точність у ",
                      ro: "Precizie în ",
                      pl: "Precyzja w ",
                      it: "Precisione in ",
                      tr: "Hassasiyet "
                    })}
                    <span className="text-emerald-600">
                      {getText({
                        en: "Every Thread",
                        ru: "каждой нити",
                        uk: "кожній нитці",
                        ro: "fiecare fir",
                        pl: "każdej nici",
                        it: "ogni filo",
                        tr: "Her İplikte"
                      })}
                    </span>.
                    <br />
                    {getText({
                      en: "Power in ",
                      ru: "Сила в ",
                      uk: "Сила в ",
                      ro: "Putere în ",
                      pl: "Moc w ",
                      it: "Potenza in ",
                      tr: "Güç "
                    })}
                    <span className="text-emerald-600">
                      {getText({
                        en: "Every Roll",
                        ru: "каждом рулоне",
                        uk: "кожному рулоні",
                        ro: "fiecare rolă",
                        pl: "każdej rolce",
                        it: "ogni rotolo",
                        tr: "Her Ruloda"
                      })}
                    </span>.
                  </>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {getText({
                  ar: "نظام ERP أيرلندي الهندسة لقادة صناعة الأقمشة. إدارة سلسة للرولونات، المحاسبة، والشحنات من مركز واحد.",
                  en: "The Global Irish-Engineered ERP for Textile Leaders. Seamlessly manage rolls, accounting, and shipments from one hub.",
                  ru: "Глобальная ERP-система ирландской разработки для лидеров текстильной отрасли. Беспрепятственное управление рулонами, бухгалтерией и поставками из одного центра.",
                  uk: "Глобальна ERP-система ірландської розробки для лідерів текстильної галузі. Безперешкодне управління рулонами, бухгалтерією та поставками з одного центру.",
                  ro: "ERP global proiectat în Irlanda pentru liderii din industria textilă. Gestionați fără probleme rolele, contabilitatea și expedierile dintr-un singur hub.",
                  pl: "Globalny system ERP zaprojektowany w Irlandii dla liderów branży tekstylnej. Bezproblemowo zarządzaj rolkami, księgowością i wysyłkami z jednego centrum.",
                  it: "L'ERP globale progettato in Irlanda per i leader del settore tessile. Gestisci senza problemi rotoli, contabilità e spedizioni da un unico hub.",
                  tr: "Tekstil Liderleri için Küresel İrlanda Mühendisliği ERP. Ruloları, muhasebeyi ve sevkiyatları tek bir merkezden sorunsuz bir şekilde yönetin."
                })}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/pricing">
                  <Button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-300 rounded-xl">
                    {getText({
                      ar: "ابدأ الآن",
                      en: "Get Started",
                      ru: "Начать",
                      uk: "Розпочати",
                      ro: "Începeți",
                      pl: "Rozpocznij",
                      it: "Inizia",
                      tr: "Başlayın"
                    })}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" className="h-14 px-8 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-base font-semibold rounded-xl transition-all duration-300">
                    <Play className="w-5 h-5 me-2 fill-emerald-600 text-emerald-600" />
                    {getText({
                      ar: "شاهد العرض",
                      en: "Watch Demo",
                      ru: "Смотреть демо",
                      uk: "Дивитись демо",
                      ro: "Vizionează demo",
                      pl: "Obejrzyj demo",
                      it: "Guarda la demo",
                      tr: "Demoyu İzle"
                    })}
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>{getText({ ar: "أمان بمعايير أوروبية", en: "EU-Grade Security", ru: "Безопасность уровня ЕС", uk: "Безпека рівня ЄС", ro: "Securitate la nivel UE", pl: "Bezpieczeństwo klasy UE", it: "Sicurezza di grado UE", tr: "AB Düzeyinde Güvenlik" })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>{getText({ ar: "ISO 27001 معتمد", en: "ISO 27001 Certified", ru: "Сертифицировано ISO 27001", uk: "Сертифіковано ISO 27001", ro: "Certificat ISO 27001", pl: "Certyfikat ISO 27001", it: "Certificato ISO 27001", tr: "ISO 27001 Sertifikalı" })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{getText({ ar: "دعم عالمي 24/7", en: "24/7 Global Support", ru: "Глобальная поддержка 24/7", uk: "Глобальна підтримка 24/7", ro: "Suport global 24/7", pl: "Globalne wsparcie 24/7", it: "Supporto globale 24/7", tr: "7/24 Küresel Destek" })}</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="p-8 bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden">
                {/* Dashboard Preview */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <Warehouse className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">TexaCore</p>
                        <p className="text-xs text-slate-500">{getText({ ar: "لوحة التحكم", en: "Dashboard", ru: "Панель", uk: "Панель", ro: "Tablou de bord", pl: "Panel", it: "Dashboard", tr: "Panel" })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs text-emerald-600 font-medium">{getText({ ar: "مباشر", en: "Live", ru: "Live", uk: "Live", ro: "Live", pl: "Na żywo", it: "Live", tr: "Canlı" })}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <p className="text-xs text-emerald-600 font-medium mb-1">{getText({ ar: "إجمالي الرولونات", en: "Total Rolls", ru: "Всего рулонов", uk: "Всього рулонів", ro: "Total role", pl: "Łącznie rolek", it: "Totale rotoli", tr: "Toplam Rulo" })}</p>
                      <p className="text-2xl font-bold text-slate-800">12,458</p>
                      <p className="text-xs text-emerald-600">+234 {getText({ ar: "اليوم", en: "today", ru: "сегодня", uk: "сьогодні", ro: "azi", pl: "dzisiaj", it: "oggi", tr: "bugün" })}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <p className="text-xs text-blue-600 font-medium mb-1">{getText({ ar: "قيمة المخزون", en: "Stock Value", ru: "Стоимость запасов", uk: "Вартість запасів", ro: "Valoare stoc", pl: "Wartość zapasów", it: "Valore magazzino", tr: "Stok Değeri" })}</p>
                      <p className="text-2xl font-bold text-slate-800">€2.4M</p>
                      <p className="text-xs text-blue-600">+12% {getText({ ar: "هذا الشهر", en: "this month", ru: "в этом месяце", uk: "цього місяця", ro: "luna aceasta", pl: "w tym miesiącu", it: "questo mese", tr: "bu ay" })}</p>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-20 bg-gradient-to-b from-emerald-50 to-white rounded-xl flex items-end justify-around px-4 pb-2">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 85].map((height, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-full transition-all duration-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {getText({ ar: "آخر النشاطات", en: "Recent Activity", ru: "Недавняя активность", uk: "Остання активність", ro: "Activitate recentă", pl: "Ostatnia aktywność", it: "Attività recente", tr: "Son Etkinlik" })}
                    </p>
                    {[
                      { action: getText({ ar: "شحنة وصلت", en: "Shipment arrived", ru: "Груз прибыл", uk: "Вантаж прибув", ro: "Transport sosit", pl: "Przesyłka dotarła", it: "Spedizione arrivata", tr: "Sevkiyat geldi" }), time: "2m", icon: Ship },
                      { action: getText({ ar: "فاتورة صدرت", en: "Invoice issued", ru: "Счет выставлен", uk: "Рахунок виставлено", ro: "Factură emisă", pl: "Faktura wystawiona", it: "Fattura emessa", tr: "Fatura kesildi" }), time: "5m", icon: Calculator },
                      { action: getText({ ar: "رولون مسجل", en: "Roll scanned", ru: "Рулон отсканирован", uk: "Рулон відскановано", ro: "Rolă scanată", pl: "Rolka zeskanowana", it: "Rotolo scansionato", tr: "Rulo tarandı" }), time: "8m", icon: ScanBarcode }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center">
                            <item.icon className="w-3 h-3 text-slate-600" />
                          </div>
                          <span className="text-sm text-slate-700">{item.action}</span>
                        </div>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -end-4 p-3 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">RFID Scan</p>
                    <p className="text-[10px] text-slate-500">Roll #RF-2847</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -start-4 p-3 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">+23%</p>
                    <p className="text-[10px] text-slate-500">{getText({ ar: "كفاءة", en: "Efficiency", ru: "Эффективность", uk: "Ефективність", ro: "Eficiență", pl: "Wydajność", it: "Efficienza", tr: "Verimlilik" })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Comparison Section */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-600">
                {getText({
                  ar: "الحقيقة الصادمة",
                  en: "The Reality Check",
                  ru: "Проверка реальности",
                  uk: "Перевірка реальності",
                  ro: "Verificarea realității",
                  pl: "Sprawdzenie rzeczywistości",
                  it: "Il controllo della realtà",
                  tr: "Gerçeklik Kontrolü"
                })}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
              {language === "ar" ? (
                <>لماذا يختار القادة <span className="text-emerald-600">TexaCore</span></>
              ) : (
                <>
                  {getText({
                    en: "Why Leaders Choose ",
                    ru: "Почему лидеры выбирают ",
                    uk: "Чому лідери обирають ",
                    ro: "De ce liderii aleg ",
                    pl: "Dlaczego liderzy wybierają ",
                    it: "Perché i leader scelgono ",
                    tr: "Liderler Neden Seçiyor "
                  })}
                  <span className="text-emerald-600">TexaCore</span>
                </>
              )}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {getText({
                ar: "بدلاً من الفوضى التقليدية",
                en: "Over Traditional Chaos",
                ru: "Вместо традиционного хаоса",
                uk: "Замість традиційного хаосу",
                ro: "În locul haosului tradițional",
                pl: "Zamiast tradycyjnego chaosu",
                it: "Invece del caos tradizionale",
                tr: "Geleneksel Kaosun Yerine"
              })}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Burden Side */}
            <Card className="p-8 border-2 border-red-100 bg-gradient-to-br from-red-50/50 to-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-red-100/50 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700">
                      {getText({
                        ar: "العبء اليدوي",
                        en: "The Manual Burden",
                        ru: "Ручное бремя",
                        uk: "Ручний тягар",
                        ro: "Povara manuală",
                        pl: "Ręczne obciążenie",
                        it: "L'onere manuale",
                        tr: "Manuel Yük"
                      })}
                    </h3>
                    <p className="text-sm text-red-500">
                      {getText({
                        ar: "الطريقة التقليدية",
                        en: "The Traditional Way",
                        ru: "Традиционный способ",
                        uk: "Традиційний спосіб",
                        ro: "Modul tradițional",
                        pl: "Tradycyjny sposób",
                        it: "Il modo tradizionale",
                        tr: "Geleneksel Yol"
                      })}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {manualBurdens.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-red-100">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {getText(item.title)}
                        </p>
                        <p className="text-sm text-slate-500">
                          {getText(item.desc)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual: Messy Desk */}
                <div className="mt-8 p-6 bg-red-100/30 rounded-2xl">
                  <div className="flex items-center justify-center gap-4 flex-wrap opacity-60">
                    <FileSpreadsheet className="w-8 h-8 text-red-400 rotate-12" />
                    <AlertTriangle className="w-6 h-6 text-red-400 -rotate-6" />
                    <Clock className="w-7 h-7 text-red-400 rotate-3" />
                    <Users className="w-8 h-8 text-red-400 -rotate-12" />
                    <Package className="w-6 h-6 text-red-400 rotate-6" />
                  </div>
                  <p className="text-center text-sm text-red-500 mt-4">
                    {getText({ ar: "فوضى وإرهاق يومي", en: "Daily chaos and exhaustion", ru: "Ежедневный хаос и истощение", uk: "Щоденний хаос і виснаження", ro: "Haos și epuizare zilnică", pl: "Codzienny chaos i wyczerpanie", it: "Caos ed esaurimento quotidiano", tr: "Günlük kaos ve tükenmişlik" })}
                  </p>
                </div>
              </div>
            </Card>

            {/* TexaCore Advantage Side */}
            <Card className="p-8 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-700">
                      {getText({
                        ar: "ميزة TexaCore",
                        en: "The TexaCore Advantage",
                        ru: "Преимущество TexaCore",
                        uk: "Перевага TexaCore",
                        ro: "Avantajul TexaCore",
                        pl: "Przewaga TexaCore",
                        it: "Il vantaggio TexaCore",
                        tr: "TexaCore Avantajı"
                      })}
                    </h3>
                    <p className="text-sm text-emerald-500">
                      {getText({
                        ar: "الطريقة الذكية",
                        en: "The Smart Way",
                        ru: "Умный способ",
                        uk: "Розумний спосіб",
                        ro: "Modul inteligent",
                        pl: "Inteligentny sposób",
                        it: "Il modo intelligente",
                        tr: "Akıllı Yol"
                      })}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {texaCoreAdvantages.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-emerald-100">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {getText(item.title)}
                        </p>
                        <p className="text-sm text-slate-500">
                          {getText(item.desc)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual: Clean Dashboard */}
                <div className="mt-8 p-6 bg-emerald-100/30 rounded-2xl">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                  <p className="text-center text-sm text-emerald-600 mt-4">
                    {getText({ ar: "لوحة تحكم نظيفة وفعالة", en: "Clean & efficient dashboard", ru: "Чистая и эффективная панель", uk: "Чиста та ефективна панель", ro: "Tablou de bord curat și eficient", pl: "Czysty i wydajny panel", it: "Dashboard pulita ed efficiente", tr: "Temiz ve verimli panel" })}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Enterprise Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <Package className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                {getText({
                  ar: "الوحدات الرئيسية",
                  en: "Core Modules",
                  ru: "Основные модули",
                  uk: "Основні модулі",
                  ro: "Module de bază",
                  pl: "Moduły podstawowe",
                  it: "Moduli principali",
                  tr: "Temel Modüller"
                })}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
              {getText({
                ar: "وحدات المؤسسات",
                en: "Enterprise Modules",
                ru: "Корпоративные модули",
                uk: "Корпоративні модулі",
                ro: "Module Enterprise",
                pl: "Moduły Enterprise",
                it: "Moduli Enterprise",
                tr: "Kurumsal Modüller"
              })}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {getText({
                ar: "أربع ركائز قوية لإدارة أعمال الأقمشة",
                en: "Four powerful pillars for textile business management",
                ru: "Четыре мощных столпа для управления текстильным бизнесом",
                uk: "Чотири потужні стовпи для управління текстильним бізнесом",
                ro: "Patru piloni puternici pentru gestionarea afacerilor textile",
                pl: "Cztery potężne filary zarządzania biznesem tekstylnym",
                it: "Quattro potenti pilastri per la gestione del business tessile",
                tr: "Tekstil iş yönetimi için dört güçlü sütun"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreModules.map((module, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-xl shadow-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {getText(module.title)}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {getText(module.desc)}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {module.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">
                            {getText(feature)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Value / ROI Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 border-2 border-white/30 mb-8 shadow-lg">
              <DollarSign className="w-6 h-6 text-emerald-300" />
              <span className="text-lg font-bold text-emerald-100">
                {getText({
                  ar: "💰 العائد المتوقع",
                  en: "💰 Expected Returns",
                  ru: "💰 Ожидаемая отдача",
                  uk: "💰 Очікуваний прибуток",
                  ro: "💰 Randament așteptat",
                  pl: "💰 Oczekiwany zwrot",
                  it: "💰 Rendimento atteso",
                  tr: "💰 Beklenen Getiri"
                })}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              {language === "ar" ? (
                <>النظام الذي <span className="text-emerald-400">يدفع ثمنه بنفسه</span></>
              ) : (
                <>
                  {getText({
                    en: "The System That ",
                    ru: "Система, которая ",
                    uk: "Система, що ",
                    ro: "Sistemul care ",
                    pl: "System, który ",
                    it: "Il sistema che ",
                    tr: "Sistem "
                  })}
                  <span className="text-emerald-400">
                    {getText({
                      en: "Pays for Itself",
                      ru: "окупает себя",
                      uk: "окупає себе",
                      ro: "se plătește singur",
                      pl: "zwraca się sam",
                      it: "si ripaga da solo",
                      tr: "Kendi Kendini Öder"
                    })}
                  </span>
                </>
              )}
            </h2>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              {getText({
                ar: "من خلال الأتمتة، وفر تكاليف 3-4 موظفين وتجنب خسائر المخزون - استرد استثمارك في أشهر",
                en: "Through automation, save 3-4 employee costs and prevent stock losses - recover your investment in months",
                ru: "Благодаря автоматизации сэкономьте на 3-4 сотрудниках и предотвратите потери запасов - окупите инвестиции за месяцы",
                uk: "Завдяки автоматизації зекономте на 3-4 співробітниках і запобігайте втратам запасів - окупність інвестицій за місяці",
                ro: "Prin automatizare, economisiți costurile a 3-4 angajați și preveniți pierderile de stoc - recuperați investiția în câteva luni",
                pl: "Dzięki automatyzacji zaoszczędź koszty 3-4 pracowników i zapobiegnij stratom magazynowym - odzyskaj inwestycję w kilka miesięcy",
                it: "Attraverso l'automazione, risparmia i costi di 3-4 dipendenti e previeni le perdite di magazzino - recupera il tuo investimento in pochi mesi",
                tr: "Otomasyon sayesinde 3-4 çalışan maliyetinden tasarruf edin ve stok kayıplarını önleyin - yatırımınızı aylar içinde geri kazanın"
              })}
            </p>
          </div>

          {/* ROI Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {roiStats.map((stat, index) => (
              <Card key={index} className="p-8 bg-white/15 backdrop-blur-xl border-white/30 rounded-3xl text-center group hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-emerald-200" />
                </div>
                <p className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                  {getText(stat.value)}
                </p>
                <p className="text-lg font-semibold text-emerald-100">
                  {getText(stat.label)}
                </p>
              </Card>
            ))}
          </div>

          {/* ROI Calculator Preview */}
          <Card className="p-10 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {getText({
                    ar: "كيف يعمل ROI؟",
                    en: "How Does ROI Work?",
                    ru: "Как работает ROI?",
                    uk: "Як працює ROI?",
                    ro: "Cum funcționează ROI?",
                    pl: "Jak działa ROI?",
                    it: "Come funziona il ROI?",
                    tr: "ROI Nasıl Çalışır?"
                  })}
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      ar: "تقليل موظفي إدخال البيانات من 4 إلى 1",
                      en: "Reduce data entry staff from 4 to 1",
                      ru: "Сокращение персонала по вводу данных с 4 до 1",
                      uk: "Скорочення персоналу з введення даних з 4 до 1",
                      ro: "Reducerea personalului de introducere a datelor de la 4 la 1",
                      pl: "Redukcja personelu wprowadzającego dane z 4 do 1",
                      it: "Riduci il personale di inserimento dati da 4 a 1",
                      tr: "Veri giriş personelini 4'ten 1'e düşürün"
                    },
                    {
                      ar: "تجنب خسائر المخزون بسبب العد الخاطئ",
                      en: "Avoid stock losses from miscounting",
                      ru: "Избегайте потерь запасов из-за неправильного подсчета",
                      uk: "Уникайте втрат запасів через неправильний підрахунок",
                      ro: "Evitați pierderile de stoc din cauza numărării greșite",
                      pl: "Unikaj strat magazynowych spowodowanych błędnym liczeniem",
                      it: "Evita perdite di magazzino dovute a conteggi errati",
                      tr: "Yanlış sayım nedeniyle stok kayıplarını önleyin"
                    },
                    {
                      ar: "منع بيع منتجات غير متوفرة",
                      en: "Prevent selling unavailable products",
                      ru: "Предотвращение продажи отсутствующих товаров",
                      uk: "Запобігання продажу відсутніх товарів",
                      ro: "Preveniți vânzarea produselor indisponibile",
                      pl: "Zapobiegaj sprzedaży niedostępnych produktów",
                      it: "Preveni la vendita di prodotti non disponibili",
                      tr: "Mevcut olmayan ürünlerin satışını önleyin"
                    },
                    {
                      ar: "زيادة رضا العملاء = مبيعات أكثر",
                      en: "Increase customer satisfaction = more sales",
                      ru: "Повышение удовлетворенности клиентов = больше продаж",
                      uk: "Підвищення задоволеності клієнтів = більше продажів",
                      ro: "Creșterea satisfacției clienților = mai multe vânzări",
                      pl: "Zwiększ zadowolenie klientów = więcej sprzedaży",
                      it: "Aumenta la soddisfazione del cliente = più vendite",
                      tr: "Müşteri memnuniyetini artırın = daha fazla satış"
                    }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                      </div>
                      <span className="text-lg text-emerald-50">
                        {getText(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center lg:text-end">
                <p className="text-xl font-semibold text-emerald-200 mb-3">
                  {getText({
                    ar: "متوسط التوفير السنوي",
                    en: "Average Annual Savings",
                    ru: "Средняя годовая экономия",
                    uk: "Середня річна економія",
                    ro: "Economii anuale medii",
                    pl: "Średnie roczne oszczędności",
                    it: "Risparmio annuale medio",
                    tr: "Ortalama Yıllık Tasarruf"
                  })}
                </p>
                <p className="text-7xl md:text-8xl font-black text-white mb-6 drop-shadow-xl">€120,000+</p>
                <p className="text-lg text-emerald-100/90 mb-8">
                  {getText({
                    ar: "بناءً على دراسات عملاء حقيقيين",
                    en: "Based on real customer studies",
                    ru: "На основе реальных исследований клиентов",
                    uk: "На основі реальних досліджень клієнтів",
                    ro: "Bazat pe studii reale ale clienților",
                    pl: "Na podstawie rzeczywistych badań klientów",
                    it: "Basato su studi reali sui clienti",
                    tr: "Gerçek müşteri çalışmalarına dayanmaktadır"
                  })}
                </p>
                <Link to="/contact">
                  <Button className="h-14 px-8 bg-white text-emerald-700 hover:bg-emerald-50 text-base font-bold rounded-xl">
                    {getText({
                      ar: "احسب توفيرك",
                      en: "Calculate Your Savings",
                      ru: "Рассчитать вашу экономию",
                      uk: "Розрахувати вашу економію",
                      ro: "Calculați economiile dvs.",
                      pl: "Oblicz swoje oszczędności",
                      it: "Calcola i tuoi risparmi",
                      tr: "Tasarrufunuzu Hesaplayın"
                    })}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function EnterpriseLandingPage() {
  return (
    <>
      <EnterpriseLandingContent />
      <ScrollToTop />
    </>
  );
}
