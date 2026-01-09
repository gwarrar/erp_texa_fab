import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain,
  TrendingUp,
  BarChart3,
  LineChart,
  PieChart,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Lightbulb,
  AlertCircle,
  MessageCircle,
  Phone,
  Mic,
  Eye,
  Sparkles,
  RefreshCw,
  Users,
  ShoppingCart,
  Package,
  DollarSign
} from "lucide-react";

function AIAnalyticsContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const aiFeatures = [
    {
      icon: TrendingUp,
      title: { ar: "توقعات المبيعات", en: "Sales Forecasting", ru: "Прогнозирование продаж", uk: "Прогнозування продажів", ro: "Prognoza vânzărilor", pl: "Prognozowanie sprzedaży", tr: "Satış Tahmini" },
      desc: { ar: "توقعات دقيقة للمبيعات المستقبلية باستخدام خوارزميات التعلم الآلي", en: "Accurate future sales predictions using machine learning algorithms", ru: "Точные прогнозы будущих продаж с использованием алгоритмов машинного обучения", uk: "Точні прогнози майбутніх продажів з використанням алгоритмів машинного навчання", ro: "Predicții precise ale vânzărilor viitoare folosind algoritmi de învățare automată", pl: "Dokładne prognozy przyszłej sprzedaży przy użyciu algorytmów uczenia maszynowego", tr: "Makine öğrenimi algoritmaları kullanarak gelecekteki satışların doğru tahminleri" },
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Package,
      title: { ar: "توصيات إعادة الطلب", en: "Reorder Recommendations", ru: "Рекомендации по дозаказу", uk: "Рекомендації по дозамовленню", ro: "Recomandări de reordonare", pl: "Rekomendacje ponownego zamówienia", tr: "Yeniden Sipariş Önerileri" },
      desc: { ar: "اقتراحات ذكية لإعادة طلب المنتجات بناءً على أنماط البيع", en: "Smart suggestions for reordering products based on sales patterns", ru: "Умные предложения по дозаказу продуктов на основе паттернов продаж", uk: "Розумні пропозиції щодо дозамовлення продуктів на основі патернів продажів", ro: "Sugestii inteligente pentru reordonarea produselor pe baza modelelor de vânzare", pl: "Inteligentne sugestie ponownego zamówienia produktów na podstawie wzorców sprzedaży", tr: "Satış kalıplarına göre ürünlerin yeniden siparişi için akıllı öneriler" },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: { ar: "تحليل سلوك العملاء", en: "Customer Behavior Analysis", ru: "Анализ поведения клиентов", uk: "Аналіз поведінки клієнтів", ro: "Analiza comportamentului clienților", pl: "Analiza zachowań klientów", tr: "Müşteri Davranış Analizi" },
      desc: { ar: "فهم أعمق لسلوك العملاء وتفضيلاتهم الشرائية", en: "Deeper understanding of customer behavior and purchase preferences", ru: "Глубокое понимание поведения клиентов и их покупательских предпочтений", uk: "Глибоке розуміння поведінки клієнтів та їх купівельних уподобань", ro: "Înțelegere mai profundă a comportamentului clienților și preferințelor de cumpărare", pl: "Głębsze zrozumienie zachowań klientów i preferencji zakupowych", tr: "Müşteri davranışı ve satın alma tercihlerinin daha derin anlaşılması" },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Target,
      title: { ar: "تحديد الفرص البيعية", en: "Sales Opportunity Detection", ru: "Определение возможностей продаж", uk: "Визначення можливостей продажів", ro: "Detectarea oportunităților de vânzare", pl: "Wykrywanie możliwości sprzedaży", tr: "Satış Fırsatı Tespiti" },
      desc: { ar: "تحديد العملاء الأكثر احتمالاً للشراء والمنتجات المناسبة لهم", en: "Identify customers most likely to buy and suitable products for them", ru: "Определите клиентов, наиболее вероятно совершающих покупку, и подходящие для них продукты", uk: "Визначте клієнтів, які найімовірніше зроблять покупку, та відповідні для них продукти", ro: "Identificați clienții cel mai probabil să cumpere și produsele potrivite pentru ei", pl: "Zidentyfikuj klientów najbardziej prawdopodobnych do zakupu i odpowiednie dla nich produkty", tr: "Satın alma olasılığı en yüksek müşterileri ve onlar için uygun ürünleri belirleyin" },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Mic,
      title: { ar: "تحليل المكالمات", en: "Call Analysis", ru: "Анализ звонков", uk: "Аналіз дзвінків", ro: "Analiza apelurilor", pl: "Analiza połączeń", tr: "Çağrı Analizi" },
      desc: { ar: "تحليل المكالمات بالذكاء الاصطناعي واستخراج الرؤى المهمة", en: "AI call analysis and extracting important insights", ru: "ИИ-анализ звонков и извлечение важных выводов", uk: "ШІ-аналіз дзвінків та вилучення важливих висновків", ro: "Analiza apelurilor cu IA și extragerea informațiilor importante", pl: "Analiza połączeń AI i wyodrębnianie ważnych spostrzeżeń", tr: "AI çağrı analizi ve önemli içgörülerin çıkarılması" },
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: { ar: "Chatbot ذكي", en: "Smart Chatbot", ru: "Умный чат-бот", uk: "Розумний чат-бот", ro: "Chatbot inteligent", pl: "Inteligentny chatbot", tr: "Akıllı Chatbot" },
      desc: { ar: "روبوت محادثة ذكي لخدمة العملاء على مدار الساعة", en: "Smart chatbot for 24/7 customer service", ru: "Умный чат-бот для обслуживания клиентов 24/7", uk: "Розумний чат-бот для обслуговування клієнтів 24/7", ro: "Chatbot inteligent pentru serviciul clienți 24/7", pl: "Inteligentny chatbot do obsługi klienta 24/7", tr: "7/24 müşteri hizmetleri için akıllı chatbot" },
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const pbxFeatures = [
    { ar: "تكامل مع أنظمة PBX", en: "PBX system integration", ru: "Интеграция с системами PBX", uk: "Інтеграція з системами PBX", ro: "Integrare cu sisteme PBX", pl: "Integracja z systemami PBX", tr: "PBX sistem entegrasyonu" },
    { ar: "Click-to-Call من النظام", en: "Click-to-Call from system", ru: "Click-to-Call из системы", uk: "Click-to-Call з системи", ro: "Click-to-Call din sistem", pl: "Click-to-Call z systemu", tr: "Sistemden Click-to-Call" },
    { ar: "تسجيل المكالمات تلقائياً", en: "Automatic call recording", ru: "Автоматическая запись звонков", uk: "Автоматичний запис дзвінків", ro: "Înregistrarea automată a apelurilor", pl: "Automatyczne nagrywanie rozmów", tr: "Otomatik çağrı kaydı" },
    { ar: "ظهور بيانات العميل عند الاتصال", en: "Customer data popup on call", ru: "Всплывающее окно с данными клиента при звонке", uk: "Спливаюче вікно з даними клієнта при дзвінку", ro: "Popup cu datele clientului la apel", pl: "Wyskakujące okno z danymi klienta podczas połączenia", tr: "Aramada müşteri verileri açılır penceresi" },
    { ar: "تحليل مدة وجودة المكالمات", en: "Call duration and quality analysis", ru: "Анализ продолжительности и качества звонков", uk: "Аналіз тривалості та якості дзвінків", ro: "Analiza duratei și calității apelurilor", pl: "Analiza czasu trwania i jakości połączeń", tr: "Çağrı süresi ve kalite analizi" },
    { ar: "تقارير أداء موظفي المبيعات", en: "Sales staff performance reports", ru: "Отчеты о производительности сотрудников продаж", uk: "Звіти про продуктивність співробітників продажів", ro: "Rapoarte de performanță ale personalului de vânzări", pl: "Raporty wydajności pracowników sprzedaży", tr: "Satış personeli performans raporları" }
  ];

  const pageText = {
    badge: { ar: "الذكاء الاصطناعي والتحليلات", en: "AI & Analytics", ru: "ИИ и аналитика", uk: "ШІ та аналітика", ro: "IA și analiză", pl: "AI i analityka", tr: "Yapay Zeka ve Analitik" },
    heroTitle1: { ar: "قرارات ذكية", en: "Smart Decisions", ru: "Умные решения", uk: "Розумні рішення", ro: "Decizii inteligente", pl: "Inteligentne decyzje", tr: "Akıllı Kararlar" },
    heroTitle2: { ar: "بالذكاء الاصطناعي", en: "with AI", ru: "с ИИ", uk: "з ШІ", ro: "cu IA", pl: "z AI", tr: "Yapay Zeka ile" },
    heroDesc: { ar: "نظام تحليلات متقدم مدعوم بالذكاء الاصطناعي لاتخاذ قرارات أذكى وزيادة المبيعات", en: "Advanced analytics system powered by AI for smarter decisions and increased sales", ru: "Продвинутая система аналитики на базе ИИ для более умных решений и увеличения продаж", uk: "Просунута система аналітики на базі ШІ для розумніших рішень та збільшення продажів", ro: "Sistem avansat de analiză alimentat de IA pentru decizii mai inteligente și vânzări crescute", pl: "Zaawansowany system analityczny oparty na AI dla mądrzejszych decyzji i zwiększonej sprzedaży", tr: "Daha akıllı kararlar ve artan satışlar için yapay zeka destekli gelişmiş analitik sistemi" },
    featuresTitle: { ar: "مميزات الذكاء الاصطناعي", en: "AI Features", ru: "Функции ИИ", uk: "Функції ШІ", ro: "Caracteristici IA", pl: "Funkcje AI", tr: "Yapay Zeka Özellikleri" },
    featuresDesc: { ar: "أدوات ذكية لتحسين الأداء والتنبؤ بالاتجاهات", en: "Smart tools to improve performance and predict trends", ru: "Умные инструменты для улучшения производительности и прогнозирования трендов", uk: "Розумні інструменти для покращення продуктивності та прогнозування трендів", ro: "Instrumente inteligente pentru îmbunătățirea performanței și prezicerea tendințelor", pl: "Inteligentne narzędzia do poprawy wydajności i przewidywania trendów", tr: "Performansı artırmak ve trendleri tahmin etmek için akıllı araçlar" },
    bookDemo: { ar: "احجز عرض توضيحي", en: "Book a Demo", ru: "Заказать демо", uk: "Замовити демо", ro: "Rezervă o demonstrație", pl: "Zarezerwuj demo", tr: "Demo Rezervasyonu" }
  };

  const insights = [
    { 
      titleAr: "المنتجات الأكثر مبيعاً", 
      titleEn: "Best Selling Products",
      valueAr: "قطن مصري 100%",
      valueEn: "100% Egyptian Cotton",
      change: "+23%"
    },
    { 
      titleAr: "وقت الذروة", 
      titleEn: "Peak Time",
      valueAr: "10 صباحاً - 12 ظهراً",
      valueEn: "10 AM - 12 PM",
      change: ""
    },
    { 
      titleAr: "العملاء المحتملين", 
      titleEn: "Hot Leads",
      valueAr: "45 عميل",
      valueEn: "45 Customers",
      change: "+12"
    },
    { 
      titleAr: "نقطة إعادة الطلب", 
      titleEn: "Reorder Point",
      valueAr: "15 منتج",
      valueEn: "15 Products",
      change: "Alert"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Brain className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-semibold text-violet-600">
                {getText(pageText.badge)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {getText(pageText.heroTitle1)} <span className="text-violet-500">{getText(pageText.heroTitle2)}</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(pageText.heroDesc)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-violet-500 hover:bg-violet-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-violet-500/25">
                  {getText(pageText.bookDemo)}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Preview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/20 dark:to-blue-900/20">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{language === "ar" ? insight.titleAr : insight.titleEn}</p>
                  {insight.change && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${insight.change === 'Alert' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
                      {insight.change}
                    </span>
                  )}
                </div>
                <p className="text-lg font-bold text-texafab-slate dark:text-white">
                  {language === "ar" ? insight.valueAr : insight.valueEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText(pageText.featuresTitle)}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText(pageText.featuresDesc)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-2">
                  {getText(feature.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {getText(feature.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PBX Integration */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600">
                  {language === "ar" ? "تكامل مقاسم الاتصالات" : "PBX Integration"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
                {language === "ar" ? "تكامل متقدم مع أنظمة الاتصالات" : "Advanced Telecom System Integration"}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {language === "ar" 
                  ? "اربط نظام TexaCore مع مقسم الاتصالات لتتبع وتحليل جميع المكالمات"
                  : "Connect TexaCore with your PBX to track and analyze all calls"}
              </p>

              <div className="grid grid-cols-1 gap-3">
                {pbxFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{getText(feature)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 border-0 shadow-xl rounded-3xl">
              <h3 className="text-lg font-bold text-texafab-slate dark:text-white mb-4">
                {language === "ar" ? "تحليل المكالمات اليوم" : "Today's Call Analysis"}
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
                    <p className="text-3xl font-bold text-blue-500 dark:text-blue-400">156</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{language === "ar" ? "مكالمة واردة" : "Incoming"}</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
                    <p className="text-3xl font-bold text-emerald-500 dark:text-emerald-400">89</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{language === "ar" ? "مكالمة صادرة" : "Outgoing"}</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
                    <p className="text-3xl font-bold text-amber-500 dark:text-amber-400">12</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{language === "ar" ? "فائتة" : "Missed"}</p>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{language === "ar" ? "أفضل موظف مبيعات اليوم" : "Top Sales Rep Today"}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-texafab-slate dark:text-white">{language === "ar" ? "أحمد محمد" : "Ahmed Mohammed"}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">45 {language === "ar" ? "مكالمة" : "calls"}</span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{language === "ar" ? "متوسط مدة المكالمة" : "Avg Call Duration"}</p>
                  <p className="text-2xl font-bold text-texafab-slate dark:text-white">4:32 min</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Dashboard */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "لوحة تحكم الذكاء الاصطناعي" : "AI Dashboard"}
            </h2>
            <p className="text-lg text-white/80">
              {language === "ar" ? "كل الرؤى في مكان واحد" : "All insights in one place"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                <h3 className="font-bold text-white">{language === "ar" ? "توقعات الشهر القادم" : "Next Month Forecast"}</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-2">$245,000</p>
              <p className="text-emerald-400 text-sm">+15% {language === "ar" ? "عن الشهر الحالي" : "vs current month"}</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-400" />
                <h3 className="font-bold text-white">{language === "ar" ? "توصيات اليوم" : "Today's Recommendations"}</h3>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• {language === "ar" ? "تواصل مع 12 عميل محتمل" : "Contact 12 hot leads"}</li>
                <li>• {language === "ar" ? "أعد طلب 5 منتجات" : "Reorder 5 products"}</li>
                <li>• {language === "ar" ? "تابع 8 عروض أسعار" : "Follow up 8 quotes"}</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="font-bold text-white">{language === "ar" ? "تنبيهات مهمة" : "Important Alerts"}</h3>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="text-amber-400">• {language === "ar" ? "3 منتجات قاربت النفاد" : "3 products near stockout"}</li>
                <li className="text-red-400">• {language === "ar" ? "فاتورة متأخرة 15 يوم" : "Invoice overdue 15 days"}</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AIAnalyticsPage() {
  return <AIAnalyticsContent />;
}
