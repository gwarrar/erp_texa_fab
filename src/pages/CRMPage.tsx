import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Users,
  UserPlus,
  Target,
  Bell,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Calendar,
  Star,
  Heart,
  Gift,
  Clock,
  Filter,
  Search,
  Zap,
  FileText,
  Award,
  ArrowUpRight,
  UserCheck,
  AlertCircle,
  Monitor
} from "lucide-react";

function CRMContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: FileText,
      title: {
        ar: "ملف كامل لكل عميل",
        en: "Complete Customer Profile",
        ru: "Полный профиль клиента",
        uk: "Повний профіль клієнта",
        ro: "Profil complet al clientului",
        pl: "Pełny profil klienta",
        it: "Profilo cliente completo",
        tr: "Tam Müşteri Profili"
      },
      desc: {
        ar: "كل المعلومات عن العميل في مكان واحد: التاريخ الشرائي، التفضيلات، الملاحظات",
        en: "All customer info in one place: purchase history, preferences, notes",
        ru: "Вся информация о клиенте в одном месте: история покупок, предпочтения, заметки",
        uk: "Вся інформація про клієнта в одному місці: історія покупок, уподобання, нотатки",
        ro: "Toate informațiile despre client într-un singur loc: istoric achiziții, preferințe, note",
        pl: "Wszystkie informacje o kliencie w jednym miejscu: historia zakupów, preferencje, notatki",
        it: "Tutte le informazioni sul cliente in un unico posto: cronologia acquisti, preferenze, note",
        tr: "Tüm müşteri bilgileri tek bir yerde: satın alma geçmişi, tercihler, notlar"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Filter,
      title: {
        ar: "تصنيف العملاء الذكي",
        en: "Smart Customer Classification",
        ru: "Умная классификация клиентов",
        uk: "Розумна класифікація клієнтів",
        ro: "Clasificare inteligentă a clienților",
        pl: "Inteligentna klasyfikacja klientów",
        it: "Classificazione intelligente dei clienti",
        tr: "Akıllı Müşteri Sınıflandırması"
      },
      desc: {
        ar: "تصنيف تلقائي للعملاء (VIP, Regular, New) مع تحديث مستمر",
        en: "Auto classification (VIP, Regular, New) with continuous updates",
        ru: "Автоматическая классификация (VIP, Обычный, Новый) с постоянным обновлением",
        uk: "Автоматична класифікація (VIP, Звичайний, Новий) з постійним оновленням",
        ro: "Clasificare automată (VIP, Regular, Nou) cu actualizări continue",
        pl: "Automatyczna klasyfikacja (VIP, Regularny, Nowy) z ciągłymi aktualizacjami",
        it: "Classificazione automatica (VIP, Regolare, Nuovo) con aggiornamenti continui",
        tr: "Sürekli güncellemelerle otomatik sınıflandırma (VIP, Normal, Yeni)"
      },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      title: {
        ar: "إدارة الفرص البيعية",
        en: "Sales Pipeline",
        ru: "Воронка продаж",
        uk: "Воронка продажів",
        ro: "Pipeline de vânzări",
        pl: "Lejek sprzedażowy",
        it: "Pipeline di vendita",
        tr: "Satış Hattı"
      },
      desc: {
        ar: "تتبع كل فرصة بيعية من التواصل الأول حتى إتمام الصفقة",
        en: "Track every opportunity from first contact to deal closure",
        ru: "Отслеживание каждой возможности от первого контакта до закрытия сделки",
        uk: "Відстеження кожної можливості від першого контакту до закриття угоди",
        ro: "Urmăriți fiecare oportunitate de la primul contact până la încheierea afacerii",
        pl: "Śledź każdą okazję od pierwszego kontaktu do zamknięcia transakcji",
        it: "Traccia ogni opportunità dal primo contatto alla chiusura dell'affare",
        tr: "Her fırsatı ilk temastan anlaşma kapanışına kadar takip edin"
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: UserPlus,
      title: {
        ar: "متابعة العملاء المحتملين",
        en: "Lead Management",
        ru: "Управление лидами",
        uk: "Управління лідами",
        ro: "Gestionarea lead-urilor",
        pl: "Zarządzanie leadami",
        it: "Gestione lead",
        tr: "Potansiyel Müşteri Yönetimi"
      },
      desc: {
        ar: "إدارة وتأهيل العملاء المحتملين وتحويلهم لعملاء فعليين",
        en: "Manage and qualify leads and convert them to actual customers",
        ru: "Управление и квалификация лидов и их конвертация в реальных клиентов",
        uk: "Управління та кваліфікація лідів та їх конвертація в реальних клієнтів",
        ro: "Gestionați și calificați lead-urile și convertiți-le în clienți reali",
        pl: "Zarządzaj i kwalifikuj leady oraz konwertuj je w rzeczywistych klientów",
        it: "Gestisci e qualifica i lead e convertili in clienti reali",
        tr: "Potansiyel müşterileri yönetin, nitelendirin ve gerçek müşterilere dönüştürün"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bell,
      title: {
        ar: "تذكيرات المتابعة التلقائية",
        en: "Auto Follow-up Reminders",
        ru: "Автоматические напоминания о follow-up",
        uk: "Автоматичні нагадування про follow-up",
        ro: "Mementouri automate de follow-up",
        pl: "Automatyczne przypomnienia o follow-up",
        it: "Promemoria automatici di follow-up",
        tr: "Otomatik Takip Hatırlatıcıları"
      },
      desc: {
        ar: "تنبيهات ذكية للمتابعة مع العملاء في الوقت المناسب",
        en: "Smart reminders to follow up with customers at the right time",
        ru: "Умные напоминания для связи с клиентами в нужное время",
        uk: "Розумні нагадування для зв'язку з клієнтами в потрібний час",
        ro: "Mementouri inteligente pentru a urmări clienții la momentul potrivit",
        pl: "Inteligentne przypomnienia o kontakcie z klientami we właściwym czasie",
        it: "Promemoria intelligenti per seguire i clienti al momento giusto",
        tr: "Doğru zamanda müşterilerle takip için akıllı hatırlatıcılar"
      },
      color: "from-red-500 to-red-600"
    },
    {
      icon: Gift,
      title: {
        ar: "برامج الولاء والنقاط",
        en: "Loyalty & Points Programs",
        ru: "Программы лояльности и баллов",
        uk: "Програми лояльності та балів",
        ro: "Programe de loialitate și puncte",
        pl: "Programy lojalnościowe i punktowe",
        it: "Programmi fedeltà e punti",
        tr: "Sadakat ve Puan Programları"
      },
      desc: {
        ar: "نظام نقاط ومكافآت لتحفيز العملاء على الشراء المتكرر",
        en: "Points and rewards system to encourage repeat purchases",
        ru: "Система баллов и вознаграждений для поощрения повторных покупок",
        uk: "Система балів та винагород для заохочення повторних покупок",
        ro: "Sistem de puncte și recompense pentru a încuraja achizițiile repetate",
        pl: "System punktów i nagród zachęcający do powtarzających się zakupów",
        it: "Sistema di punti e premi per incoraggiare gli acquisti ripetuti",
        tr: "Tekrar satın alımları teşvik etmek için puan ve ödül sistemi"
      },
      color: "from-pink-500 to-pink-600"
    }
  ];

  const pipelineStages = [
    { title: { ar: "عميل محتمل", en: "Lead", ru: "Лид", uk: "Лід", ro: "Lead", pl: "Lead", it: "Lead", tr: "Potansiyel" }, count: 45, color: "bg-gray-100 text-gray-600" },
    { title: { ar: "اتصال أول", en: "First Contact", ru: "Первый контакт", uk: "Перший контакт", ro: "Primul contact", pl: "Pierwszy kontakt", it: "Primo contatto", tr: "İlk Temas" }, count: 32, color: "bg-blue-100 text-blue-600" },
    { title: { ar: "عرض سعر", en: "Quote Sent", ru: "Предложение отправлено", uk: "Пропозиція надіслана", ro: "Ofertă trimisă", pl: "Oferta wysłana", it: "Preventivo inviato", tr: "Teklif Gönderildi" }, count: 18, color: "bg-amber-100 text-amber-600" },
    { title: { ar: "تفاوض", en: "Negotiation", ru: "Переговоры", uk: "Переговори", ro: "Negociere", pl: "Negocjacje", it: "Trattativa", tr: "Pazarlık" }, count: 12, color: "bg-purple-100 text-purple-600" },
    { title: { ar: "صفقة مغلقة", en: "Closed Won", ru: "Сделка закрыта", uk: "Угода закрита", ro: "Închis câștigat", pl: "Zamknięte wygrane", it: "Chiuso vinto", tr: "Kazanıldı" }, count: 28, color: "bg-emerald-100 text-emerald-600" }
  ];

  const customerSegments = [
    {
      title: {
        ar: "عملاء VIP",
        en: "VIP Customers",
        ru: "VIP-клиенты",
        uk: "VIP-клієнти",
        ro: "Clienți VIP",
        pl: "Klienci VIP",
        it: "Clienti VIP",
        tr: "VIP Müşteriler"
      },
      desc: {
        ar: "أعلى 10% من العملاء من حيث القيمة",
        en: "Top 10% customers by value",
        ru: "Топ 10% клиентов по ценности",
        uk: "Топ 10% клієнтів за цінністю",
        ro: "Top 10% clienți după valoare",
        pl: "Top 10% klientów według wartości",
        it: "Top 10% clienti per valore",
        tr: "Değer bazında ilk %10 müşteriler"
      },
      value: "45",
      color: "from-amber-500 to-amber-600",
      icon: Star
    },
    {
      title: {
        ar: "عملاء منتظمين",
        en: "Regular Customers",
        ru: "Постоянные клиенты",
        uk: "Постійні клієнти",
        ro: "Clienți regulați",
        pl: "Stali klienci",
        it: "Clienti abituali",
        tr: "Düzenli Müşteriler"
      },
      desc: {
        ar: "عملاء يشترون بانتظام",
        en: "Customers who buy regularly",
        ru: "Клиенты, которые покупают регулярно",
        uk: "Клієнти, які купують регулярно",
        ro: "Clienți care cumpără regulat",
        pl: "Klienci kupujący regularnie",
        it: "Clienti che acquistano regolarmente",
        tr: "Düzenli satın alan müşteriler"
      },
      value: "234",
      color: "from-blue-500 to-blue-600",
      icon: UserCheck
    },
    {
      title: {
        ar: "عملاء جدد",
        en: "New Customers",
        ru: "Новые клиенты",
        uk: "Нові клієнти",
        ro: "Clienți noi",
        pl: "Nowi klienci",
        it: "Nuovi clienti",
        tr: "Yeni Müşteriler"
      },
      desc: {
        ar: "عملاء انضموا هذا الشهر",
        en: "Customers joined this month",
        ru: "Клиенты, присоединившиеся в этом месяце",
        uk: "Клієнти, які приєдналися цього місяця",
        ro: "Clienți înscriși luna aceasta",
        pl: "Klienci dołączyli w tym miesiącu",
        it: "Clienti iscritti questo mese",
        tr: "Bu ay katılan müşteriler"
      },
      value: "67",
      color: "from-emerald-500 to-emerald-600",
      icon: UserPlus
    },
    {
      title: {
        ar: "بحاجة للمتابعة",
        en: "Need Follow-up",
        ru: "Нужен follow-up",
        uk: "Потребує follow-up",
        ro: "Necesită follow-up",
        pl: "Wymaga follow-up",
        it: "Richiede follow-up",
        tr: "Takip Gerekli"
      },
      desc: {
        ar: "عملاء لم يشتروا منذ فترة",
        en: "Customers inactive for a while",
        ru: "Клиенты, неактивные некоторое время",
        uk: "Клієнти, неактивні деякий час",
        ro: "Clienți inactivi de ceva timp",
        pl: "Klienci nieaktywni od jakiegoś czasu",
        it: "Clienti inattivi da un po'",
        tr: "Bir süredir aktif olmayan müşteriler"
      },
      value: "23",
      color: "from-red-500 to-red-600",
      icon: AlertCircle
    }
  ];

  const communications = [
    { icon: Phone, title: { ar: "المكالمات", en: "Calls", ru: "Звонки", uk: "Дзвінки", ro: "Apeluri", pl: "Połączenia", it: "Chiamate", tr: "Aramalar" }, count: "1,234" },
    { icon: Mail, title: { ar: "الإيميلات", en: "Emails", ru: "Письма", uk: "Листи", ro: "Emailuri", pl: "Emaile", it: "Email", tr: "E-postalar" }, count: "3,456" },
    { icon: MessageCircle, title: { ar: "الرسائل", en: "Messages", ru: "Сообщения", uk: "Повідомлення", ro: "Mesaje", pl: "Wiadomości", it: "Messaggi", tr: "Mesajlar" }, count: "2,345" },
    { icon: Calendar, title: { ar: "الاجتماعات", en: "Meetings", ru: "Встречи", uk: "Зустрічі", ro: "Întâlniri", pl: "Spotkania", it: "Riunioni", tr: "Toplantılar" }, count: "156" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {getText({
                  ar: "نظام CRM متقدم",
                  en: "Advanced CRM System",
                  ru: "Продвинутая CRM система",
                  uk: "Просунута CRM система",
                  ro: "Sistem CRM avansat",
                  pl: "Zaawansowany system CRM",
                  it: "Sistema CRM avanzato",
                  tr: "Gelişmiş CRM Sistemi"
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>لا تضيّع <span className="text-blue-500">أي عميل</span></>
              ) : (
                <>
                  {getText({
                    en: "Never Lose ",
                    ru: "Никогда не теряйте ",
                    uk: "Ніколи не втрачайте ",
                    ro: "Nu pierdeți niciodată ",
                    pl: "Nigdy nie trać ",
                    it: "Non perdere mai ",
                    tr: "Asla Kaybetmeyin "
                  })}
                  <span className="text-blue-500">
                    {getText({
                      en: "a Customer",
                      ru: "клиента",
                      uk: "клієнта",
                      ro: "un client",
                      pl: "klienta",
                      it: "un cliente",
                      tr: "Bir Müşteri"
                    })}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({
                ar: "نظام CRM متكامل يساعدك على بناء علاقات أقوى مع عملائك وزيادة المبيعات",
                en: "Integrated CRM system to help you build stronger relationships and increase sales",
                ru: "Интегрированная CRM система для построения прочных отношений и увеличения продаж",
                uk: "Інтегрована CRM система для побудови міцних відносин та збільшення продажів",
                ro: "Sistem CRM integrat pentru a construi relații mai puternice și a crește vânzările",
                pl: "Zintegrowany system CRM do budowania silniejszych relacji i zwiększania sprzedaży",
                it: "Sistema CRM integrato per costruire relazioni più forti e aumentare le vendite",
                tr: "Daha güçlü ilişkiler kurmak ve satışları artırmak için entegre CRM sistemi"
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communications.map((item, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-texafab-slate mb-1">
                  {item.count}
                </p>
                <p className="text-gray-600 text-sm">
                  {getText(item.title)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({
                ar: "تصنيف العملاء",
                en: "Customer Segmentation",
                ru: "Сегментация клиентов",
                uk: "Сегментація клієнтів",
                ro: "Segmentarea clienților",
                pl: "Segmentacja klientów",
                it: "Segmentazione clienti",
                tr: "Müşteri Segmentasyonu"
              })}
            </h2>
            <p className="text-lg text-gray-600">
              {getText({
                ar: "تصنيف ذكي لعملائك لخدمتهم بشكل أفضل",
                en: "Smart classification of your customers for better service",
                ru: "Умная классификация ваших клиентов для лучшего обслуживания",
                uk: "Розумна класифікація ваших клієнтів для кращого обслуговування",
                ro: "Clasificare inteligentă a clienților pentru un serviciu mai bun",
                pl: "Inteligentna klasyfikacja klientów dla lepszej obsługi",
                it: "Classificazione intelligente dei clienti per un servizio migliore",
                tr: "Daha iyi hizmet için müşterilerinizin akıllı sınıflandırması"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSegments.map((segment, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${segment.color} flex items-center justify-center mb-4`}>
                  <segment.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl font-black text-texafab-slate mb-2">{segment.value}</p>
                <h3 className="font-bold text-texafab-slate mb-1">
                  {getText(segment.title)}
                </h3>
                <p className="text-sm text-gray-500">
                  {getText(segment.desc)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Target className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {getText({
                    ar: "مسار المبيعات",
                    en: "Sales Pipeline",
                    ru: "Воронка продаж",
                    uk: "Воронка продажів",
                    ro: "Pipeline de vânzări",
                    pl: "Lejek sprzedażowy",
                    it: "Pipeline di vendita",
                    tr: "Satış Hattı"
                  })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({
                  ar: "تتبع كل فرصة بيعية",
                  en: "Track Every Sales Opportunity",
                  ru: "Отслеживайте каждую возможность продажи",
                  uk: "Відстежуйте кожну можливість продажу",
                  ro: "Urmăriți fiecare oportunitate de vânzare",
                  pl: "Śledź każdą okazję sprzedażową",
                  it: "Traccia ogni opportunità di vendita",
                  tr: "Her Satış Fırsatını Takip Edin"
                })}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {getText({
                  ar: "مسار بيعي واضح من أول تواصل حتى إتمام الصفقة مع تحديث مستمر لحالة كل عميل",
                  en: "Clear sales funnel from first contact to deal closure with continuous status updates",
                  ru: "Четкая воронка продаж от первого контакта до закрытия сделки с постоянным обновлением статуса",
                  uk: "Чітка воронка продажів від першого контакту до закриття угоди з постійним оновленням статусу",
                  ro: "Pâlnie de vânzări clară de la primul contact până la încheierea afacerii cu actualizări continue",
                  pl: "Przejrzysty lejek sprzedażowy od pierwszego kontaktu do zamknięcia transakcji z ciągłymi aktualizacjami",
                  it: "Funnel di vendita chiaro dal primo contatto alla chiusura con aggiornamenti continui dello stato",
                  tr: "İlk temastan anlaşma kapanışına kadar net satış hunisi ve sürekli durum güncellemeleri"
                })}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تحويل تلقائي بين المراحل", en: "Auto stage transitions", ru: "Автоматические переходы этапов", uk: "Автоматичні переходи етапів", ro: "Tranziții automate între etape", pl: "Automatyczne przejścia etapów", it: "Transizioni automatiche fasi", tr: "Otomatik aşama geçişleri" },
                  { ar: "تنبيهات عند توقف الفرص", en: "Alerts on stalled opportunities", ru: "Оповещения о застоявшихся возможностях", uk: "Сповіщення про застійні можливості", ro: "Alerte pentru oportunități stagnante", pl: "Alerty o wstrzymanych okazjach", it: "Avvisi su opportunità bloccate", tr: "Durağan fırsatlar için uyarılar" },
                  { ar: "توقعات الإيرادات", en: "Revenue forecasting", ru: "Прогнозирование доходов", uk: "Прогнозування доходів", ro: "Prognoza veniturilor", pl: "Prognozowanie przychodów", it: "Previsioni di fatturato", tr: "Gelir tahmini" },
                  { ar: "تقارير معدل التحويل", en: "Conversion rate reports", ru: "Отчеты о коэффициенте конверсии", uk: "Звіти про коефіцієнт конверсії", ro: "Rapoarte rata de conversie", pl: "Raporty współczynnika konwersji", it: "Report tasso di conversione", tr: "Dönüşüm oranı raporları" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{getText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl rounded-3xl">
              <h3 className="text-lg font-bold text-texafab-slate mb-6">
                {getText({
                  ar: "مسار المبيعات",
                  en: "Sales Pipeline",
                  ru: "Воронка продаж",
                  uk: "Воронка продажів",
                  ro: "Pipeline de vânzări",
                  pl: "Lejek sprzedażowy",
                  it: "Pipeline di vendita",
                  tr: "Satış Hattı"
                })}
              </h3>
              <div className="space-y-3">
                {pipelineStages.map((stage, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`px-3 py-1.5 rounded-full text-sm font-semibold ${stage.color} min-w-[120px]`}>
                      {getText(stage.title)}
                    </div>
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${index === 4 ? 'bg-emerald-500' : 'bg-blue-500'}`}
                        style={{ width: `${(stage.count / 45) * 100}%` }}
                      />
                    </div>
                    <span className="font-bold text-texafab-slate w-8">{stage.count}</span>
                  </div>
                ))}
              </div>
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
                ar: "مميزات نظام CRM",
                en: "CRM System Features",
                ru: "Функции CRM системы",
                uk: "Функції CRM системи",
                ro: "Funcții sistem CRM",
                pl: "Funkcje systemu CRM",
                it: "Funzionalità sistema CRM",
                tr: "CRM Sistem Özellikleri"
              })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({
                ar: "أدوات متقدمة لإدارة علاقات العملاء",
                en: "Advanced tools for customer relationship management",
                ru: "Продвинутые инструменты для управления отношениями с клиентами",
                uk: "Просунуті інструменти для управління відносинами з клієнтами",
                ro: "Instrumente avansate pentru gestionarea relațiilor cu clienții",
                pl: "Zaawansowane narzędzia do zarządzania relacjami z klientami",
                it: "Strumenti avanzati per la gestione delle relazioni con i clienti",
                tr: "Müşteri ilişkileri yönetimi için gelişmiş araçlar"
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

      {/* System Screenshot - CRM Pipeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {getText({
                  ar: "واجهة النظام",
                  en: "System Interface",
                  ru: "Интерфейс системы",
                  uk: "Інтерфейс системи",
                  ro: "Interfața sistemului",
                  pl: "Interfejs systemu",
                  it: "Interfaccia sistema",
                  tr: "Sistem Arayüzü"
                })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText({
                ar: "واجهة CRM احترافية",
                en: "Professional CRM Interface",
                ru: "Профессиональный интерфейс CRM",
                uk: "Професійний інтерфейс CRM",
                ro: "Interfață CRM profesională",
                pl: "Profesjonalny interfejs CRM",
                it: "Interfaccia CRM professionale",
                tr: "Profesyonel CRM Arayüzü"
              })}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText({
                ar: "تصميم عصري وسهل الاستخدام لإدارة علاقات العملاء بكفاءة",
                en: "Modern and user-friendly design for efficient customer relationship management",
                ru: "Современный и удобный дизайн для эффективного управления отношениями с клиентами",
                uk: "Сучасний і зручний дизайн для ефективного управління відносинами з клієнтами",
                ro: "Design modern și ușor de utilizat pentru gestionarea eficientă a relațiilor cu clienții",
                pl: "Nowoczesny i przyjazny dla użytkownika design do efektywnego zarządzania relacjami z klientami",
                it: "Design moderno e intuitivo per una gestione efficiente delle relazioni con i clienti",
                tr: "Verimli müşteri ilişkileri yönetimi için modern ve kullanıcı dostu tasarım"
              })}
            </p>
          </div>

          {/* Main CRM Dashboard */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
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
                      <span className="text-xs text-gray-400 dark:text-gray-500">texacore.app/crm</span>
                    </div>
                  </div>
                </div>
                
                {/* CRM Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {language === "ar" ? "لوحة المبيعات" : "Sales Dashboard"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {language === "ar" ? "نظرة عامة على أداء المبيعات" : "Sales performance overview"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-lg">
                        {language === "ar" ? "الهدف: 106.7%" : "Target: 106.7%"}
                      </div>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: language === "ar" ? "إجمالي المبيعات" : "Total Sales", value: "3.36M", change: "+12%", icon: "💰" },
                      { label: language === "ar" ? "عدد الطلبات" : "Orders", value: "924", change: "+8%", icon: "📦" },
                      { label: language === "ar" ? "العملاء الجدد" : "New Customers", value: "67", change: "+23%", icon: "👥" },
                      { label: language === "ar" ? "معدل التحويل" : "Conversion", value: "24.5%", change: "+5%", icon: "📈" },
                    ].map((kpi, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">{kpi.icon}</span>
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{kpi.change}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
                        <p className="text-xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Sales vs Target */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "المبيعات مقابل المستهدف" : "Sales vs Target"}
                        </span>
                        <Target className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-end gap-3 h-24">
                        {[
                          { label: language === "ar" ? "ق1" : "Q1", actual: 85, target: 80 },
                          { label: language === "ar" ? "ق2" : "Q2", actual: 92, target: 85 },
                          { label: language === "ar" ? "ق3" : "Q3", actual: 78, target: 90 },
                          { label: language === "ar" ? "ق4" : "Q4", actual: 95, target: 88 },
                        ].map((q, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="w-full flex gap-1 items-end h-20">
                              <div 
                                className="flex-1 rounded-t bg-blue-500 dark:bg-blue-600" 
                                style={{ height: `${q.actual}%` }} 
                              />
                              <div 
                                className="flex-1 rounded-t bg-gray-300 dark:bg-gray-600" 
                                style={{ height: `${q.target}%` }} 
                              />
                            </div>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{q.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-blue-500" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "الفعلي" : "Actual"}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-gray-300" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "المستهدف" : "Target"}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top Customers */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "أفضل العملاء" : "Top Customers"}
                        </span>
                        <Star className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: language === "ar" ? "شركة الفيصل" : "Al-Faisal Co.", value: "SAR 245,000", badge: "VIP" },
                          { name: language === "ar" ? "مؤسسة النجم" : "Star Est.", value: "SAR 198,500", badge: "Gold" },
                          { name: language === "ar" ? "تجارة الأمل" : "Al-Amal Trade", value: "SAR 156,200", badge: "Silver" },
                        ].map((customer, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-gray-400' : 'bg-orange-400'}`}>
                                {i + 1}
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                                customer.badge === 'VIP' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                customer.badge === 'Gold' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                              }`}>
                                {customer.badge}
                              </span>
                              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{customer.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center font-medium text-gray-700 dark:text-gray-300">
            {language === "ar" ? "لوحة المبيعات وإدارة العملاء" : "Sales Dashboard & Customer Management"}
          </p>
        </div>
      </section>

      {/* Customer Profile */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {getText({
                  ar: "ملف العميل الشامل",
                  en: "Comprehensive Customer Profile",
                  ru: "Полный профиль клиента",
                  uk: "Повний профіль клієнта",
                  ro: "Profil complet al clientului",
                  pl: "Pełny profil klienta",
                  it: "Profilo cliente completo",
                  tr: "Kapsamlı Müşteri Profili"
                })}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {getText({
                  ar: "كل ما تحتاج معرفته عن عميلك في شاشة واحدة",
                  en: "Everything you need to know about your customer on one screen",
                  ru: "Все, что нужно знать о клиенте, на одном экране",
                  uk: "Все, що потрібно знати про клієнта, на одному екрані",
                  ro: "Tot ce trebuie să știți despre clientul dvs. pe un singur ecran",
                  pl: "Wszystko, co musisz wiedzieć o kliencie, na jednym ekranie",
                  it: "Tutto ciò che devi sapere sul cliente in un'unica schermata",
                  tr: "Müşteriniz hakkında bilmeniz gereken her şey tek ekranda"
                })}
              </p>

              <ul className="space-y-4">
                {[
                  { ar: "التاريخ الشرائي الكامل", en: "Complete purchase history", ru: "Полная история покупок", uk: "Повна історія покупок", ro: "Istoric complet al achizițiilor", pl: "Pełna historia zakupów", it: "Cronologia acquisti completa", tr: "Tam satın alma geçmişi" },
                  { ar: "تفضيلات المنتجات والألوان", en: "Product and color preferences", ru: "Предпочтения продуктов и цветов", uk: "Уподобання продуктів та кольорів", ro: "Preferințe de produse și culori", pl: "Preferencje produktów i kolorów", it: "Preferenze prodotti e colori", tr: "Ürün ve renk tercihleri" },
                  { ar: "سجل التواصل (مكالمات، إيميلات)", en: "Communication log (calls, emails)", ru: "Журнал коммуникаций (звонки, письма)", uk: "Журнал комунікацій (дзвінки, листи)", ro: "Jurnal comunicări (apeluri, emailuri)", pl: "Dziennik komunikacji (połączenia, emaile)", it: "Log comunicazioni (chiamate, email)", tr: "İletişim günlüğü (aramalar, e-postalar)" },
                  { ar: "الذمم المدينة والمدفوعات", en: "Receivables and payments", ru: "Дебиторская задолженность и платежи", uk: "Дебіторська заборгованість та платежі", ro: "Creanțe și plăți", pl: "Należności i płatności", it: "Crediti e pagamenti", tr: "Alacaklar ve ödemeler" },
                  { ar: "الملاحظات والتعليقات", en: "Notes and comments", ru: "Заметки и комментарии", uk: "Нотатки та коментарі", ro: "Note și comentarii", pl: "Notatki i komentarze", it: "Note e commenti", tr: "Notlar ve yorumlar" },
                  { ar: "نقاط الولاء والمكافآت", en: "Loyalty points and rewards", ru: "Баллы лояльности и награды", uk: "Бали лояльності та винагороди", ro: "Puncte de loialitate și recompense", pl: "Punkty lojalnościowe i nagrody", it: "Punti fedeltà e premi", tr: "Sadakat puanları ve ödüller" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{getText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/10 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  AM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "أحمد محمد" : "Ahmed Mohammed"}
                  </h3>
                  <span className="px-2 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">VIP</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "إجمالي المشتريات" : "Total Purchases"}</p>
                  <p className="text-xl font-bold text-white">$45,670</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "عدد الطلبات" : "Orders"}</p>
                  <p className="text-xl font-bold text-white">67</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "نقاط الولاء" : "Loyalty Points"}</p>
                  <p className="text-xl font-bold text-emerald-400">4,567</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "آخر طلب" : "Last Order"}</p>
                  <p className="text-xl font-bold text-white">3 days</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white">
                  <Phone className="w-4 h-4 me-2" />
                  {language === "ar" ? "اتصال" : "Call"}
                </Button>
                <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white">
                  <Mail className="w-4 h-4 me-2" />
                  {language === "ar" ? "إيميل" : "Email"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function CRMPage() {
  return <CRMContent />;
}
