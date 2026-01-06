import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Calculator,
  DollarSign,
  TrendingUp,
  PieChart,
  FileText,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Receipt,
  Wallet,
  BarChart3,
  Scale,
  Globe,
  Percent,
  Clock,
  AlertCircle,
  Building2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Banknote,
  Coins
} from "lucide-react";

function AccountingContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: Calculator,
      title: {
        ar: "حساب تكلفة البضاعة المباعة COGS",
        en: "Cost of Goods Sold (COGS)",
        ru: "Себестоимость проданных товаров (COGS)",
        uk: "Собівартість проданих товарів (COGS)",
        ro: "Costul bunurilor vândute (COGS)",
        pl: "Koszt sprzedanych towarów (COGS)",
        it: "Costo del venduto (COGS)",
        tr: "Satılan Malların Maliyeti (COGS)"
      },
      desc: {
        ar: "حساب تلقائي ودقيق لتكلفة البضاعة المباعة بطرق متعددة (FIFO, LIFO, المتوسط)",
        en: "Automatic and precise calculation of COGS using multiple methods (FIFO, LIFO, Average)",
        ru: "Автоматический и точный расчет себестоимости несколькими методами (FIFO, LIFO, средний)",
        uk: "Автоматичний і точний розрахунок собівартості кількома методами (FIFO, LIFO, середній)",
        ro: "Calcul automat și precis al COGS folosind mai multe metode (FIFO, LIFO, Medie)",
        pl: "Automatyczne i precyzyjne obliczanie COGS przy użyciu wielu metod (FIFO, LIFO, Średnia)",
        it: "Calcolo automatico e preciso del COGS utilizzando più metodi (FIFO, LIFO, Media)",
        tr: "Birden fazla yöntem kullanarak otomatik ve hassas COGS hesaplaması (FIFO, LIFO, Ortalama)"
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: {
        ar: "تقارير الربحية التفصيلية",
        en: "Detailed Profitability Reports",
        ru: "Детальные отчеты о прибыльности",
        uk: "Детальні звіти про прибутковість",
        ro: "Rapoarte detaliate de profitabilitate",
        pl: "Szczegółowe raporty rentowności",
        it: "Report dettagliati di redditività",
        tr: "Ayrıntılı Karlılık Raporları"
      },
      desc: {
        ar: "تحليل الربحية حسب المنتج، العميل، الفترة، والفرع",
        en: "Profitability analysis by product, customer, period, and branch",
        ru: "Анализ прибыльности по продукту, клиенту, периоду и филиалу",
        uk: "Аналіз прибутковості за продуктом, клієнтом, періодом і філією",
        ro: "Analiza profitabilității pe produs, client, perioadă și sucursală",
        pl: "Analiza rentowności według produktu, klienta, okresu i oddziału",
        it: "Analisi della redditività per prodotto, cliente, periodo e filiale",
        tr: "Ürün, müşteri, dönem ve şubeye göre karlılık analizi"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: {
        ar: "إدارة العملات المتعددة",
        en: "Multi-Currency Management",
        ru: "Управление несколькими валютами",
        uk: "Управління кількома валютами",
        ro: "Gestionarea mai multor valute",
        pl: "Zarządzanie wieloma walutami",
        it: "Gestione multi-valuta",
        tr: "Çoklu Para Birimi Yönetimi"
      },
      desc: {
        ar: "دعم جميع العملات مع تحديث أسعار الصرف تلقائياً",
        en: "Support for all currencies with automatic exchange rate updates",
        ru: "Поддержка всех валют с автоматическим обновлением курсов",
        uk: "Підтримка всіх валют з автоматичним оновленням курсів",
        ro: "Suport pentru toate valutele cu actualizare automată a cursurilor de schimb",
        pl: "Obsługa wszystkich walut z automatyczną aktualizacją kursów wymiany",
        it: "Supporto per tutte le valute con aggiornamento automatico dei tassi di cambio",
        tr: "Otomatik döviz kuru güncellemeleri ile tüm para birimleri desteği"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Percent,
      title: {
        ar: "حساب هامش الربح التلقائي",
        en: "Automatic Profit Margin",
        ru: "Автоматическая маржа прибыли",
        uk: "Автоматична маржа прибутку",
        ro: "Marjă de profit automată",
        pl: "Automatyczna marża zysku",
        it: "Margine di profitto automatico",
        tr: "Otomatik Kar Marjı"
      },
      desc: {
        ar: "حساب فوري لهامش الربح عند إدخال السعر أو التكلفة",
        en: "Instant profit margin calculation when entering price or cost",
        ru: "Мгновенный расчет маржи при вводе цены или себестоимости",
        uk: "Миттєвий розрахунок маржі при введенні ціни або собівартості",
        ro: "Calculul instantaneu al marjei de profit la introducerea prețului sau costului",
        pl: "Natychmiastowe obliczanie marży zysku przy wprowadzaniu ceny lub kosztu",
        it: "Calcolo istantaneo del margine di profitto quando si inserisce prezzo o costo",
        tr: "Fiyat veya maliyet girildiğinde anında kar marjı hesaplama"
      },
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: {
        ar: "إدارة الذمم المدينة والدائنة",
        en: "Receivables & Payables",
        ru: "Дебиторская и кредиторская задолженность",
        uk: "Дебіторська та кредиторська заборгованість",
        ro: "Creanțe și datorii",
        pl: "Należności i zobowiązania",
        it: "Crediti e debiti",
        tr: "Alacaklar ve Borçlar"
      },
      desc: {
        ar: "تتبع شامل لمديونيات العملاء ومستحقات الموردين",
        en: "Complete tracking of customer debts and supplier dues",
        ru: "Полное отслеживание долгов клиентов и задолженностей поставщикам",
        uk: "Повне відстеження боргів клієнтів та заборгованостей постачальникам",
        ro: "Urmărire completă a datoriilor clienților și obligațiilor furnizorilor",
        pl: "Pełne śledzenie długów klientów i zobowiązań wobec dostawców",
        it: "Tracciamento completo dei debiti dei clienti e degli obblighi verso i fornitori",
        tr: "Müşteri borçları ve tedarikçi alacaklarının tam takibi"
      },
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Receipt,
      title: {
        ar: "تقارير الضرائب وVAT",
        en: "Tax & VAT Reports",
        ru: "Налоговые отчеты и НДС",
        uk: "Податкові звіти та ПДВ",
        ro: "Rapoarte fiscale și TVA",
        pl: "Raporty podatkowe i VAT",
        it: "Report fiscali e IVA",
        tr: "Vergi ve KDV Raporları"
      },
      desc: {
        ar: "تقارير ضريبية جاهزة للتقديم مع حساب VAT التلقائي",
        en: "Tax-ready reports with automatic VAT calculation",
        ru: "Готовые налоговые отчеты с автоматическим расчетом НДС",
        uk: "Готові податкові звіти з автоматичним розрахунком ПДВ",
        ro: "Rapoarte gata pentru taxe cu calculul automat al TVA",
        pl: "Raporty gotowe do podatków z automatycznym obliczaniem VAT",
        it: "Report pronti per le tasse con calcolo automatico dell'IVA",
        tr: "Otomatik KDV hesaplama ile vergiye hazır raporlar"
      },
      color: "from-red-500 to-red-600"
    }
  ];

  const reports = [
    { icon: PieChart, title: { ar: "قائمة الدخل", en: "Income Statement", ru: "Отчет о доходах", uk: "Звіт про доходи", ro: "Declarație de venit", pl: "Rachunek zysków i strat", it: "Conto economico", tr: "Gelir Tablosu" } },
    { icon: Scale, title: { ar: "الميزانية العمومية", en: "Balance Sheet", ru: "Баланс", uk: "Баланс", ro: "Bilanț", pl: "Bilans", it: "Bilancio", tr: "Bilanço" } },
    { icon: BarChart3, title: { ar: "التدفق النقدي", en: "Cash Flow", ru: "Денежный поток", uk: "Грошовий потік", ro: "Flux de numerar", pl: "Przepływy pieniężne", it: "Flusso di cassa", tr: "Nakit Akışı" } },
    { icon: FileText, title: { ar: "تقادم الذمم", en: "Aging Report", ru: "Отчет о старении", uk: "Звіт про старіння", ro: "Raport de îmbătrânire", pl: "Raport wiekowania", it: "Report aging", tr: "Yaşlandırma Raporu" } },
    { icon: TrendingUp, title: { ar: "تقرير الأرباح والخسائر", en: "P&L Report", ru: "Отчет о прибылях и убытках", uk: "Звіт про прибутки та збитки", ro: "Raport P&L", pl: "Rachunek zysków i strat", it: "Report P&L", tr: "K&Z Raporu" } },
    { icon: Receipt, title: { ar: "سجل الضرائب", en: "Tax Ledger", ru: "Налоговый регистр", uk: "Податковий реєстр", ro: "Registru fiscal", pl: "Rejestr podatkowy", it: "Registro fiscale", tr: "Vergi Defteri" } }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB" },
    { name: "Xero", logo: "X" },
    { name: "Zoho Books", logo: "ZB" },
    { name: "SAP", logo: "SAP" },
    { name: "Oracle", logo: "OR" },
    { name: "Sage", logo: "SG" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Calculator className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {getText({
                  ar: "الدقة المحاسبية",
                  en: "Accounting Precision",
                  ru: "Точность учета",
                  uk: "Точність обліку",
                  ro: "Precizie contabilă",
                  pl: "Precyzja księgowa",
                  it: "Precisione contabile",
                  tr: "Muhasebe Hassasiyeti"
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>دقة محاسبية <span className="text-emerald-500">لا تضاهى</span></>
              ) : (
                <>
                  {getText({
                    en: "Unmatched ",
                    ru: "Непревзойденная ",
                    uk: "Неперевершена ",
                    ro: "Precizie contabilă ",
                    pl: "Niezrównana ",
                    it: "Precisione contabile ",
                    tr: "Rakipsiz "
                  })}
                  <span className="text-emerald-500">
                    {getText({
                      en: "Accounting Precision",
                      ru: "точность учета",
                      uk: "точність обліку",
                      ro: "de neegalat",
                      pl: "precyzja księgowa",
                      it: "senza pari",
                      tr: "Muhasebe Hassasiyeti"
                    })}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({
                ar: "نظام محاسبي متكامل يوفر تقارير مالية دقيقة وتحليلات ربحية شاملة لاتخاذ قرارات أفضل",
                en: "Integrated accounting system providing precise financial reports and comprehensive profitability analysis for better decisions",
                ru: "Интегрированная бухгалтерская система, обеспечивающая точные финансовые отчеты и комплексный анализ прибыльности для лучших решений",
                uk: "Інтегрована бухгалтерська система, що забезпечує точні фінансові звіти та комплексний аналіз прибутковості для кращих рішень",
                ro: "Sistem contabil integrat care oferă rapoarte financiare precise și analize complete ale profitabilității pentru decizii mai bune",
                pl: "Zintegrowany system księgowy zapewniający precyzyjne raporty finansowe i kompleksową analizę rentowności dla lepszych decyzji",
                it: "Sistema contabile integrato che fornisce report finanziari precisi e analisi complete della redditività per decisioni migliori",
                tr: "Daha iyi kararlar için hassas finansal raporlar ve kapsamlı karlılık analizi sağlayan entegre muhasebe sistemi"
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-emerald-500/25">
                  {getText({
                    ar: "احجز عرض توضيحي",
                    en: "Book a Demo",
                    ru: "Заказать демо",
                    uk: "Замовити демо",
                    ro: "Rezervă un demo",
                    pl: "Zamów demo",
                    it: "Prenota una demo",
                    tr: "Demo Rezervasyonu"
                  })}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Overview Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-sm text-emerald-600 font-medium">{getText({ ar: "إجمالي المبيعات", en: "Total Sales", ru: "Общие продажи", uk: "Загальні продажі", ro: "Vânzări totale", pl: "Łączna sprzedaż", it: "Vendite totali", tr: "Toplam Satışlar" })}</p>
              <p className="text-2xl font-bold text-texafab-slate">$1,234,567</p>
              <p className="text-xs text-emerald-600 mt-1">+12.5% {getText({ ar: "عن الشهر السابق", en: "vs last month", ru: "к прошлому месяцу", uk: "до минулого місяця", ro: "față de luna trecută", pl: "vs poprzedni miesiąc", it: "vs mese scorso", tr: "geçen aya göre" })}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-sm text-blue-600 font-medium">{getText({ ar: "صافي الربح", en: "Net Profit", ru: "Чистая прибыль", uk: "Чистий прибуток", ro: "Profit net", pl: "Zysk netto", it: "Profitto netto", tr: "Net Kar" })}</p>
              <p className="text-2xl font-bold text-texafab-slate">$234,567</p>
              <p className="text-xs text-blue-600 mt-1">+8.3% {getText({ ar: "عن الشهر السابق", en: "vs last month", ru: "к прошлому месяцу", uk: "до минулого місяця", ro: "față de luna trecută", pl: "vs poprzedni miesiąc", it: "vs mese scorso", tr: "geçen aya göre" })}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <ArrowDownRight className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-sm text-orange-600 font-medium">{getText({ ar: "المصروفات", en: "Expenses", ru: "Расходы", uk: "Витрати", ro: "Cheltuieli", pl: "Wydatki", it: "Spese", tr: "Giderler" })}</p>
              <p className="text-2xl font-bold text-texafab-slate">$456,789</p>
              <p className="text-xs text-orange-600 mt-1">-3.2% {getText({ ar: "عن الشهر السابق", en: "vs last month", ru: "к прошлому месяцу", uk: "до минулого місяця", ro: "față de luna trecută", pl: "vs poprzedni miesiąc", it: "vs mese scorso", tr: "geçen aya göre" })}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                  <Percent className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-purple-600 font-medium">{getText({ ar: "هامش الربح", en: "Profit Margin", ru: "Маржа прибыли", uk: "Маржа прибутку", ro: "Marja de profit", pl: "Marża zysku", it: "Margine di profitto", tr: "Kar Marjı" })}</p>
              <p className="text-2xl font-bold text-texafab-slate">19.0%</p>
              <p className="text-xs text-purple-600 mt-1">+1.2% {getText({ ar: "عن الشهر السابق", en: "vs last month", ru: "к прошлому месяцу", uk: "до минулого місяця", ro: "față de luna trecută", pl: "vs poprzedni miesiąc", it: "vs mese scorso", tr: "geçen aya göre" })}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({
                ar: "مميزات النظام المحاسبي",
                en: "Accounting System Features",
                ru: "Функции бухгалтерской системы",
                uk: "Функції бухгалтерської системи",
                ro: "Funcții sistem contabil",
                pl: "Funkcje systemu księgowego",
                it: "Funzionalità sistema contabile",
                tr: "Muhasebe Sistemi Özellikleri"
              })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({
                ar: "أدوات محاسبية متقدمة لإدارة مالية فعالة",
                en: "Advanced accounting tools for effective financial management",
                ru: "Продвинутые бухгалтерские инструменты для эффективного финансового управления",
                uk: "Просунуті бухгалтерські інструменти для ефективного фінансового управління",
                ro: "Instrumente contabile avansate pentru gestionarea financiară eficientă",
                pl: "Zaawansowane narzędzia księgowe do efektywnego zarządzania finansami",
                it: "Strumenti contabili avanzati per una gestione finanziaria efficace",
                tr: "Etkili finansal yönetim için gelişmiş muhasebe araçları"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(feature.title)}
                </h3>
                <p className="text-gray-600">
                  {getText(feature.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {getText({ ar: "التقارير المالية", en: "Financial Reports", ru: "Финансовые отчеты", uk: "Фінансові звіти", ro: "Rapoarte financiare", pl: "Raporty finansowe", it: "Report finanziari", tr: "Finansal Raporlar" })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({ ar: "تقارير مالية شاملة ودقيقة", en: "Comprehensive & Accurate Financial Reports", ru: "Полные и точные финансовые отчеты", uk: "Повні та точні фінансові звіти", ro: "Rapoarte financiare cuprinzătoare și precise", pl: "Kompleksowe i dokładne raporty finansowe", it: "Report finanziari completi e accurati", tr: "Kapsamlı ve Doğru Finansal Raporlar" })}
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                {getText({
                  ar: "احصل على جميع التقارير المالية التي تحتاجها بضغطة واحدة مع إمكانية التخصيص والتصدير",
                  en: "Get all the financial reports you need with one click with customization and export options",
                  ru: "Получите все необходимые финансовые отчеты одним кликом с возможностью настройки и экспорта",
                  uk: "Отримайте всі потрібні фінансові звіти одним кліком з можливістю налаштування та експорту",
                  ro: "Obțineți toate rapoartele financiare de care aveți nevoie cu un singur clic cu opțiuni de personalizare și export",
                  pl: "Uzyskaj wszystkie potrzebne raporty finansowe jednym kliknięciem z opcjami personalizacji i eksportu",
                  it: "Ottieni tutti i report finanziari di cui hai bisogno con un clic con opzioni di personalizzazione ed esportazione",
                  tr: "İhtiyacınız olan tüm finansal raporları tek tıkla özelleştirme ve dışa aktarma seçenekleriyle alın"
                })}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <report.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="font-medium text-texafab-slate text-sm">
                      {getText(report.title)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl rounded-3xl">
              <h3 className="text-xl font-bold text-texafab-slate mb-6">
                {getText({ ar: "تقرير الأرباح والخسائر", en: "Profit & Loss Report", ru: "Отчет о прибылях и убытках", uk: "Звіт про прибутки та збитки", ro: "Raport profit și pierdere", pl: "Rachunek zysków i strat", it: "Conto economico", tr: "Kar ve Zarar Raporu" })}
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{getText({ ar: "إجمالي الإيرادات", en: "Total Revenue", ru: "Общий доход", uk: "Загальний дохід", ro: "Venituri totale", pl: "Całkowite przychody", it: "Ricavi totali", tr: "Toplam Gelir" })}</span>
                    <span className="font-bold text-emerald-600">$1,234,567</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{getText({ ar: "تكلفة المبيعات", en: "Cost of Sales", ru: "Себестоимость продаж", uk: "Собівартість продажів", ro: "Costul vânzărilor", pl: "Koszt sprzedaży", it: "Costo del venduto", tr: "Satış Maliyeti" })}</span>
                    <span className="font-bold text-orange-600">$756,789</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '61%'}}></div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{getText({ ar: "المصروفات التشغيلية", en: "Operating Expenses", ru: "Операционные расходы", uk: "Операційні витрати", ro: "Cheltuieli operaționale", pl: "Koszty operacyjne", it: "Spese operative", tr: "İşletme Giderleri" })}</span>
                    <span className="font-bold text-blue-600">$243,211</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-500 rounded-xl text-white">
                  <div className="flex justify-between items-center">
                    <span>{getText({ ar: "صافي الربح", en: "Net Profit", ru: "Чистая прибыль", uk: "Чистий прибуток", ro: "Profit net", pl: "Zysk netto", it: "Utile netto", tr: "Net Kar" })}</span>
                    <span className="font-bold text-2xl">$234,567</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* System Screenshots */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
              <BarChart3 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {language === "ar" ? "واجهة النظام" : "System Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "شاهد النظام بنفسك" : "See the System in Action"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "واجهة عصرية وسهلة الاستخدام مصممة لتسريع عملك"
                : "Modern and user-friendly interface designed to accelerate your work"}
            </p>
          </div>

          {/* Main Dashboard Screenshot - Hero Style */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-blue-500/10" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-7 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 flex items-center px-3">
                      <span className="text-xs text-gray-400 dark:text-gray-500">texacore.app/accounting</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content - Accounting Dashboard Mockup */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {language === "ar" ? "لوحة المحاسبة" : "Accounting Dashboard"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {language === "ar" ? "نظرة شاملة على الأداء المالي" : "Overview of financial performance"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-lg">
                        {language === "ar" ? "مباشر" : "Live"}
                      </div>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: language === "ar" ? "إجمالي المبيعات" : "Total Sales", value: "3.36M", change: "+12.5%", color: "emerald", icon: "💰" },
                      { label: language === "ar" ? "صافي الربح" : "Net Profit", value: "890K", change: "+8.3%", color: "blue", icon: "📈" },
                      { label: language === "ar" ? "المصروفات" : "Expenses", value: "456K", change: "-3.2%", color: "orange", icon: "📊" },
                      { label: language === "ar" ? "نسبة الإنجاز" : "Achievement", value: "106.7%", change: "+6.7%", color: "purple", icon: "🎯" },
                    ].map((kpi, i) => (
                      <div key={i} className={`p-4 rounded-xl bg-${kpi.color}-50 dark:bg-${kpi.color}-900/20 border border-${kpi.color}-100 dark:border-${kpi.color}-800/50`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">{kpi.icon}</span>
                          <span className={`text-xs font-medium text-${kpi.color}-600 dark:text-${kpi.color}-400`}>{kpi.change}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
                        <p className="text-xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Charts Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Sales Trend */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "اتجاه المبيعات" : "Sales Trend"}
                        </span>
                        <BarChart3 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-end gap-1 h-24">
                        {[45, 62, 78, 55, 90, 72, 85, 68, 92, 75, 88, 95].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-teal-400 dark:from-emerald-600 dark:to-teal-500" 
                            style={{ height: `${h}%` }} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Payment Methods */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "طرق الدفع" : "Payment Methods"}
                        </span>
                        <PieChart className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: language === "ar" ? "نقدي" : "Cash", percent: 45, color: "bg-emerald-500" },
                          { label: language === "ar" ? "تحويل بنكي" : "Bank Transfer", percent: 30, color: "bg-blue-500" },
                          { label: language === "ar" ? "شيكات" : "Checks", percent: 15, color: "bg-purple-500" },
                          { label: language === "ar" ? "آجل" : "Credit", percent: 10, color: "bg-orange-500" },
                        ].map((method, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${method.color}`} />
                            <span className="text-xs text-gray-600 dark:text-gray-400 flex-1">{method.label}</span>
                            <span className="text-xs font-medium text-gray-800 dark:text-white">{method.percent}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Banks & Cash Management */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <div className="flex items-center gap-3">
                    <Banknote className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">{language === "ar" ? "الصناديق والبنوك" : "Cash & Banks"}</h4>
                      <p className="text-xs text-white/80">{language === "ar" ? "إدارة الأرصدة متعددة العملات" : "Multi-currency balance management"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { name: language === "ar" ? "الصندوق الرئيسي" : "Main Cash Box", balance: "SAR 125,400", currency: "🇸🇦" },
                    { name: language === "ar" ? "بنك الراجحي" : "Al Rajhi Bank", balance: "SAR 2,340,000", currency: "🇸🇦" },
                    { name: language === "ar" ? "حساب الدولار" : "USD Account", balance: "USD 85,200", currency: "🇺🇸" },
                    { name: language === "ar" ? "حساب اليورو" : "EUR Account", balance: "EUR 42,800", currency: "🇪🇺" },
                  ].map((account, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{account.currency}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{account.name}</span>
                      </div>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{account.balance}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "إدارة الصناديق والبنوك" : "Cash & Banks Management"}
              </p>
            </div>

            {/* General Ledger */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">{language === "ar" ? "دفتر الأستاذ" : "General Ledger"}</h4>
                      <p className="text-xs text-white/80">{language === "ar" ? "سجل القيود المحاسبية" : "Accounting entries record"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-start text-gray-600 dark:text-gray-300">{language === "ar" ? "التاريخ" : "Date"}</th>
                          <th className="px-3 py-2 text-start text-gray-600 dark:text-gray-300">{language === "ar" ? "البيان" : "Description"}</th>
                          <th className="px-3 py-2 text-end text-gray-600 dark:text-gray-300">{language === "ar" ? "مدين" : "Debit"}</th>
                          <th className="px-3 py-2 text-end text-gray-600 dark:text-gray-300">{language === "ar" ? "دائن" : "Credit"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {[
                          { date: "2024-01-15", desc: language === "ar" ? "مبيعات نقدية" : "Cash Sale", debit: "15,800", credit: "-" },
                          { date: "2024-01-15", desc: language === "ar" ? "مشتريات" : "Purchase", debit: "-", credit: "8,500" },
                          { date: "2024-01-14", desc: language === "ar" ? "تحصيل عميل" : "Collection", debit: "25,000", credit: "-" },
                          { date: "2024-01-14", desc: language === "ar" ? "مصروفات إدارية" : "Admin Expense", debit: "-", credit: "2,300" },
                        ].map((entry, i) => (
                          <tr key={i} className="bg-white dark:bg-gray-800">
                            <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{entry.date}</td>
                            <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{entry.desc}</td>
                            <td className="px-3 py-2 text-end text-emerald-600 dark:text-emerald-400 font-medium">{entry.debit}</td>
                            <td className="px-3 py-2 text-end text-red-500 font-medium">{entry.credit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "دفتر الأستاذ العام" : "General Ledger"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "التكامل مع الأنظمة المحاسبية" : "Accounting System Integrations"}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تكامل سلس مع أشهر برامج المحاسبة العالمية"
                : "Seamless integration with the world's leading accounting software"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-emerald-600">
                  {integration.logo}
                </div>
                <span className="text-white font-semibold">{integration.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AccountingPage() {
  return <AccountingContent />;
}
