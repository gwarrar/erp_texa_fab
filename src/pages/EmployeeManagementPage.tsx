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
  Award,
  Target,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Calendar,
  DollarSign,
  Star,
  Eye,
  Lock,
  Settings,
  Activity,
  UserCheck,
  UserPlus,
  Briefcase,
  Percent,
  Monitor
} from "lucide-react";

function EmployeeManagementContent() {
  const { language, dir } = useLanguage();

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const features = [
    {
      icon: BarChart3,
      title: {
        ar: "لوحة أداء الموظفين KPIs",
        en: "Employee KPIs Dashboard",
        ru: "Панель KPI сотрудников",
        uk: "Панель KPI співробітників",
        ro: "Tablou de bord KPI angajați",
        pl: "Panel KPI pracowników",
        it: "Dashboard KPI dipendenti",
        tr: "Çalışan KPI Paneli"
      },
      desc: {
        ar: "مؤشرات أداء شاملة: المبيعات، العملاء الجدد، معدل التحويل، رضا العملاء",
        en: "Comprehensive KPIs: Sales, new customers, conversion rate, customer satisfaction",
        ru: "Комплексные KPI: Продажи, новые клиенты, коэффициент конверсии, удовлетворенность клиентов",
        uk: "Комплексні KPI: Продажі, нові клієнти, коефіцієнт конверсії, задоволеність клієнтів",
        ro: "KPI-uri cuprinzătoare: Vânzări, clienți noi, rata de conversie, satisfacția clienților",
        pl: "Kompleksowe KPI: Sprzedaż, nowi klienci, współczynnik konwersji, satysfakcja klientów",
        it: "KPI completi: Vendite, nuovi clienti, tasso di conversione, soddisfazione del cliente",
        tr: "Kapsamlı KPI'lar: Satışlar, yeni müşteriler, dönüşüm oranı, müşteri memnuniyeti"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: {
        ar: "تتبع ساعات العمل والحضور",
        en: "Work Hours & Attendance",
        ru: "Рабочие часы и посещаемость",
        uk: "Робочі години та відвідуваність",
        ro: "Ore de lucru și prezență",
        pl: "Godziny pracy i obecność",
        it: "Ore lavorative e presenze",
        tr: "Çalışma Saatleri ve Devam"
      },
      desc: {
        ar: "تسجيل الحضور والانصراف، الإجازات، العمل الإضافي مع تقارير تفصيلية",
        en: "Check-in/out, leaves, overtime with detailed reports",
        ru: "Регистрация прихода/ухода, отпуска, сверхурочные с детальными отчетами",
        uk: "Реєстрація приходу/відходу, відпустки, понаднормові з детальними звітами",
        ro: "Check-in/out, concedii, ore suplimentare cu rapoarte detaliate",
        pl: "Rejestracja wejść/wyjść, urlopy, nadgodziny ze szczegółowymi raportami",
        it: "Check-in/out, ferie, straordinari con report dettagliati",
        tr: "Giriş/çıkış, izinler, fazla mesai ve ayrıntılı raporlar"
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: DollarSign,
      title: {
        ar: "نظام العمولات الذكي",
        en: "Smart Commission System",
        ru: "Умная система комиссий",
        uk: "Розумна система комісій",
        ro: "Sistem inteligent de comisioane",
        pl: "Inteligentny system prowizji",
        it: "Sistema commissioni intelligente",
        tr: "Akıllı Komisyon Sistemi"
      },
      desc: {
        ar: "حساب تلقائي للعمولات حسب المبيعات مع قواعد مرنة قابلة للتخصيص",
        en: "Automatic commission calculation based on sales with flexible customizable rules",
        ru: "Автоматический расчет комиссий на основе продаж с гибкими настраиваемыми правилами",
        uk: "Автоматичний розрахунок комісій на основі продажів з гнучкими налаштовуваними правилами",
        ro: "Calcul automat al comisioanelor bazat pe vânzări cu reguli flexibile personalizabile",
        pl: "Automatyczne obliczanie prowizji na podstawie sprzedaży z elastycznymi, konfigurowalnymi regułami",
        it: "Calcolo automatico delle commissioni basato sulle vendite con regole flessibili personalizzabili",
        tr: "Esnek özelleştirilebilir kurallarla satışlara dayalı otomatik komisyon hesaplama"
      },
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Shield,
      title: {
        ar: "صلاحيات متعددة المستويات",
        en: "Multi-Level Permissions",
        ru: "Многоуровневые разрешения",
        uk: "Багаторівневі дозволи",
        ro: "Permisiuni pe mai multe niveluri",
        pl: "Wielopoziomowe uprawnienia",
        it: "Permessi multilivello",
        tr: "Çok Seviyeli İzinler"
      },
      desc: {
        ar: "تحكم دقيق في صلاحيات كل مستخدم حسب الدور والقسم",
        en: "Precise control over each user's permissions by role and department",
        ru: "Точный контроль над правами каждого пользователя по роли и отделу",
        uk: "Точний контроль прав кожного користувача за роллю та відділом",
        ro: "Control precis asupra permisiunilor fiecărui utilizator după rol și departament",
        pl: "Precyzyjna kontrola uprawnień każdego użytkownika według roli i działu",
        it: "Controllo preciso sui permessi di ogni utente per ruolo e dipartimento",
        tr: "Rol ve departmana göre her kullanıcının izinleri üzerinde hassas kontrol"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Eye,
      title: {
        ar: "سجل النشاط (Audit Log)",
        en: "Activity Audit Log",
        ru: "Журнал аудита активности",
        uk: "Журнал аудиту активності",
        ro: "Jurnal de audit al activității",
        pl: "Dziennik audytu aktywności",
        it: "Registro audit attività",
        tr: "Aktivite Denetim Günlüğü"
      },
      desc: {
        ar: "تتبع كل إجراء: من فعل ماذا ومتى مع سجل كامل للتعديلات",
        en: "Track every action: who did what and when with complete modification history",
        ru: "Отслеживание каждого действия: кто что сделал и когда с полной историей изменений",
        uk: "Відстеження кожної дії: хто що зробив і коли з повною історією змін",
        ro: "Urmăriți fiecare acțiune: cine a făcut ce și când cu istoricul complet al modificărilor",
        pl: "Śledź każdą akcję: kto co zrobił i kiedy z pełną historią modyfikacji",
        it: "Traccia ogni azione: chi ha fatto cosa e quando con cronologia completa delle modifiche",
        tr: "Her eylemi takip edin: kim ne yaptı ve ne zaman, tam değişiklik geçmişiyle"
      },
      color: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: {
        ar: "تقارير الأداء المقارنة",
        en: "Comparative Performance Reports",
        ru: "Сравнительные отчеты о производительности",
        uk: "Порівняльні звіти про продуктивність",
        ro: "Rapoarte comparative de performanță",
        pl: "Porównawcze raporty wydajności",
        it: "Report prestazioni comparative",
        tr: "Karşılaştırmalı Performans Raporları"
      },
      desc: {
        ar: "ترتيب الموظفين حسب الأداء مع مكافآت تلقائية للمتميزين",
        en: "Employee ranking by performance with automatic rewards for top performers",
        ru: "Рейтинг сотрудников по производительности с автоматическими наградами для лучших",
        uk: "Рейтинг співробітників за продуктивністю з автоматичними винагородами для найкращих",
        ro: "Clasamentul angajaților după performanță cu recompense automate pentru cei mai buni",
        pl: "Ranking pracowników według wydajności z automatycznymi nagrodami dla najlepszych",
        it: "Classifica dei dipendenti per prestazioni con premi automatici per i migliori",
        tr: "En iyi performans gösterenler için otomatik ödüllerle performansa göre çalışan sıralaması"
      },
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const roles = [
    { 
      title: { ar: "مدير النظام", en: "System Admin", ru: "Системный администратор", uk: "Системний адміністратор", ro: "Admin sistem", pl: "Administrator systemu", it: "Admin sistema", tr: "Sistem Yöneticisi" },
      desc: { ar: "صلاحيات كاملة للنظام", en: "Full system access", ru: "Полный доступ к системе", uk: "Повний доступ до системи", ro: "Acces complet la sistem", pl: "Pełny dostęp do systemu", it: "Accesso completo al sistema", tr: "Tam sistem erişimi" },
      color: "bg-red-100 text-red-600"
    },
    { 
      title: { ar: "مدير المبيعات", en: "Sales Manager", ru: "Менеджер по продажам", uk: "Менеджер з продажів", ro: "Manager vânzări", pl: "Kierownik sprzedaży", it: "Responsabile vendite", tr: "Satış Müdürü" },
      desc: { ar: "إدارة فريق المبيعات والتقارير", en: "Sales team & reports management", ru: "Управление командой продаж и отчетами", uk: "Управління командою продажів та звітами", ro: "Gestionarea echipei de vânzări și rapoarte", pl: "Zarządzanie zespołem sprzedaży i raportami", it: "Gestione team vendite e report", tr: "Satış ekibi ve rapor yönetimi" },
      color: "bg-blue-100 text-blue-600"
    },
    { 
      title: { ar: "موظف مبيعات", en: "Sales Rep", ru: "Торговый представитель", uk: "Торговий представник", ro: "Reprezentant vânzări", pl: "Przedstawiciel handlowy", it: "Rappresentante vendite", tr: "Satış Temsilcisi" },
      desc: { ar: "الوصول للمبيعات والعملاء", en: "Access to sales & customers", ru: "Доступ к продажам и клиентам", uk: "Доступ до продажів та клієнтів", ro: "Acces la vânzări și clienți", pl: "Dostęp do sprzedaży i klientów", it: "Accesso a vendite e clienti", tr: "Satış ve müşterilere erişim" },
      color: "bg-emerald-100 text-emerald-600"
    },
    { 
      title: { ar: "أمين المستودع", en: "Warehouse Keeper", ru: "Кладовщик", uk: "Комірник", ro: "Responsabil depozit", pl: "Magazynier", it: "Magazziniere", tr: "Depo Sorumlusu" },
      desc: { ar: "إدارة المخزون والاستلام", en: "Inventory & receiving", ru: "Инвентарь и приёмка", uk: "Інвентар та приймання", ro: "Inventar și recepție", pl: "Inwentarz i przyjęcie", it: "Inventario e ricezione", tr: "Envanter ve teslim alma" },
      color: "bg-amber-100 text-amber-600"
    },
    { 
      title: { ar: "محاسب", en: "Accountant", ru: "Бухгалтер", uk: "Бухгалтер", ro: "Contabil", pl: "Księgowy", it: "Contabile", tr: "Muhasebeci" },
      desc: { ar: "الحسابات والتقارير المالية", en: "Accounts & financial reports", ru: "Счета и финансовые отчеты", uk: "Рахунки та фінансові звіти", ro: "Conturi și rapoarte financiare", pl: "Rachunki i raporty finansowe", it: "Conti e report finanziari", tr: "Hesaplar ve mali raporlar" },
      color: "bg-purple-100 text-purple-600"
    },
    { 
      title: { ar: "خدمة العملاء", en: "Customer Service", ru: "Служба поддержки", uk: "Служба підтримки", ro: "Serviciu clienți", pl: "Obsługa klienta", it: "Servizio clienti", tr: "Müşteri Hizmetleri" },
      desc: { ar: "دعم العملاء والشكاوى", en: "Customer support & complaints", ru: "Поддержка клиентов и жалобы", uk: "Підтримка клієнтів та скарги", ro: "Suport clienți și reclamații", pl: "Wsparcie klienta i reklamacje", it: "Supporto clienti e reclami", tr: "Müşteri desteği ve şikayetler" },
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  const topPerformers = [
    { name: "أحمد محمد", nameEn: "Ahmed Mohammed", sales: 125000, target: 100, rating: 98 },
    { name: "سارة علي", nameEn: "Sara Ali", sales: 112000, target: 95, rating: 95 },
    { name: "خالد عبدالله", nameEn: "Khaled Abdullah", sales: 98500, target: 88, rating: 92 }
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
                {getText({ ar: "إدارة الموظفين والأداء", en: "Employee & Performance Management", ru: "Управление сотрудниками и производительностью", uk: "Управління співробітниками та продуктивністю", ro: "Management angajați și performanță", pl: "Zarządzanie pracownikami i wydajnością", it: "Gestione dipendenti e prestazioni", tr: "Çalışan ve Performans Yönetimi" })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText({ ar: "فريق عمل", en: "A More", ru: "Более", uk: "Більш", ro: "O Echipă Mai", pl: "Bardziej", it: "Un Team Più", tr: "Daha" })} <span className="text-blue-500">{getText({ ar: "أكثر إنتاجية", en: "Productive Team", ru: "Продуктивная команда", uk: "Продуктивна команда", ro: "Productivă", pl: "Produktywny Zespół", it: "Produttivo", tr: "Üretken Ekip" })}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText({ ar: "أدوات متقدمة لإدارة فريق العمل وتتبع الأداء ومكافأة المتميزين", en: "Advanced tools to manage your team, track performance, and reward top performers", ru: "Продвинутые инструменты для управления командой, отслеживания производительности и поощрения лучших", uk: "Передові інструменти для управління командою, відстеження продуктивності та заохочення найкращих", ro: "Instrumente avansate pentru gestionarea echipei, urmărirea performanței și recompensarea celor mai buni", pl: "Zaawansowane narzędzia do zarządzania zespołem, śledzenia wydajności i nagradzania najlepszych", it: "Strumenti avanzati per gestire il team, monitorare le prestazioni e premiare i migliori", tr: "Ekibinizi yönetmek, performansı takip etmek ve en iyileri ödüllendirmek için gelişmiş araçlar" })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                  {getText({ ar: "احجز عرض توضيحي", en: "Book a Demo", ru: "Заказать демо", uk: "Замовити демо", ro: "Rezervă o demonstrație", pl: "Zarezerwuj demo", it: "Prenota una demo", tr: "Demo Rezervasyonu Yap" })}
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
            {[
              { icon: Users, value: "250+", label: { ar: "موظف مدار", en: "Employees Managed", ru: "Управляемых сотрудников", uk: "Керованих співробітників", ro: "Angajați gestionați", pl: "Zarządzanych pracowników", tr: "Yönetilen Çalışan" } },
              { icon: TrendingUp, value: "35%", label: { ar: "زيادة الإنتاجية", en: "Productivity Increase", ru: "Рост производительности", uk: "Зростання продуктивності", ro: "Creștere productivitate", pl: "Wzrost produktywności", tr: "Verimlilik Artışı" } },
              { icon: Clock, value: "50%", label: { ar: "توفير وقت الإدارة", en: "Admin Time Saved", ru: "Экономия времени управления", uk: "Економія часу управління", ro: "Timp admin economisit", pl: "Zaoszczędzony czas admina", tr: "Yönetim Zamanı Tasarrufu" } },
              { icon: Star, value: "95%", label: { ar: "رضا الموظفين", en: "Employee Satisfaction", ru: "Удовлетворенность сотрудников", uk: "Задоволеність співробітників", ro: "Satisfacția angajaților", pl: "Satysfakcja pracowników", tr: "Çalışan Memnuniyeti" } }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-texafab-slate mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {getText(stat.label)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText({ ar: "مميزات إدارة الموظفين", en: "Employee Management Features", ru: "Функции управления сотрудниками", uk: "Функції управління співробітниками", ro: "Funcții de management angajați", pl: "Funkcje zarządzania pracownikami", it: "Funzionalità gestione dipendenti", tr: "Çalışan Yönetimi Özellikleri" })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText({ ar: "كل ما تحتاجه لإدارة فريق عمل ناجح", en: "Everything you need to manage a successful team", ru: "Всё необходимое для управления успешной командой", uk: "Все необхідне для управління успішною командою", ro: "Tot ce ai nevoie pentru a gestiona o echipă de succes", pl: "Wszystko czego potrzebujesz do zarządzania udanym zespołem", it: "Tutto ciò che serve per gestire un team di successo", tr: "Başarılı bir ekip yönetmek için ihtiyacınız olan her şey" })}
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

      {/* Roles & Permissions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">
                  {getText({ ar: "الأدوار والصلاحيات", en: "Roles & Permissions", ru: "Роли и разрешения", uk: "Ролі та дозволи", ro: "Roluri și permisiuni", pl: "Role i uprawnienia", it: "Ruoli e permessi", tr: "Roller ve İzinler" })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText({ ar: "تحكم دقيق في الصلاحيات", en: "Precise Permission Control", ru: "Точный контроль разрешений", uk: "Точний контроль дозволів", ro: "Control precis al permisiunilor", pl: "Precyzyjna kontrola uprawnień", it: "Controllo preciso dei permessi", tr: "Hassas İzin Kontrolü" })}
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                {getText({ ar: "حدد صلاحيات كل موظف بدقة حسب دوره ومسؤولياته", en: "Define each employee's permissions precisely according to their role and responsibilities", ru: "Определите права каждого сотрудника точно в соответствии с его ролью и обязанностями", uk: "Визначте права кожного співробітника точно відповідно до його ролі та обов'язків", ro: "Definiți permisiunile fiecărui angajat cu precizie în funcție de rol și responsabilități", pl: "Określ uprawnienia każdego pracownika precyzyjnie według roli i obowiązków", it: "Definisci i permessi di ogni dipendente precisamente in base al ruolo e alle responsabilità", tr: "Her çalışanın izinlerini rolüne ve sorumluluklarına göre hassas bir şekilde tanımlayın" })}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${role.color}`}>
                      {getText(role.title)}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                      {getText(role.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl rounded-3xl">
              <h3 className="text-xl font-bold text-texafab-slate mb-6">
                {getText({ ar: "مثال على صلاحيات المستخدم", en: "User Permission Example", ru: "Пример прав пользователя", uk: "Приклад прав користувача", ro: "Exemplu de permisiuni utilizator", pl: "Przykład uprawnień użytkownika", it: "Esempio permessi utente", tr: "Kullanıcı İzin Örneği" })}
              </h3>
              
              <div className="space-y-3">
                {[
                  { label: { ar: "عرض المبيعات", en: "View Sales", ru: "Просмотр продаж", uk: "Перегляд продажів", ro: "Vizualizare vânzări", pl: "Wyświetl sprzedaż", it: "Visualizza vendite", tr: "Satışları Görüntüle" }, enabled: true },
                  { label: { ar: "إنشاء فاتورة", en: "Create Invoice", ru: "Создать счет", uk: "Створити рахунок", ro: "Creează factură", pl: "Utwórz fakturę", it: "Crea fattura", tr: "Fatura Oluştur" }, enabled: true },
                  { label: { ar: "حذف فاتورة", en: "Delete Invoice", ru: "Удалить счет", uk: "Видалити рахунок", ro: "Șterge factură", pl: "Usuń fakturę", it: "Elimina fattura", tr: "Fatura Sil" }, enabled: false },
                  { label: { ar: "عرض التقارير المالية", en: "View Financial Reports", ru: "Просмотр финансовых отчетов", uk: "Перегляд фінансових звітів", ro: "Vizualizare rapoarte financiare", pl: "Wyświetl raporty finansowe", it: "Visualizza report finanziari", tr: "Mali Raporları Görüntüle" }, enabled: false },
                  { label: { ar: "إدارة المخزون", en: "Manage Inventory", ru: "Управление запасами", uk: "Управління запасами", ro: "Gestionare inventar", pl: "Zarządzaj zapasami", it: "Gestisci inventario", tr: "Envanteri Yönet" }, enabled: true },
                  { label: { ar: "إضافة موظف", en: "Add Employee", ru: "Добавить сотрудника", uk: "Додати співробітника", ro: "Adaugă angajat", pl: "Dodaj pracownika", it: "Aggiungi dipendente", tr: "Çalışan Ekle" }, enabled: false },
                  { label: { ar: "تعديل الأسعار", en: "Edit Prices", ru: "Редактировать цены", uk: "Редагувати ціни", ro: "Editează prețuri", pl: "Edytuj ceny", it: "Modifica prezzi", tr: "Fiyatları Düzenle" }, enabled: false },
                  { label: { ar: "عرض العملاء", en: "View Customers", ru: "Просмотр клиентов", uk: "Перегляд клієнтів", ro: "Vizualizare clienți", pl: "Wyświetl klientów", it: "Visualizza clienti", tr: "Müşterileri Görüntüle" }, enabled: true }
                ].map((perm, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">{getText(perm.label)}</span>
                    <div className={`w-10 h-6 rounded-full flex items-center p-1 ${perm.enabled ? 'bg-emerald-500 justify-end' : 'bg-gray-300 justify-start'}`}>
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText({ ar: "لوحة المتميزين", en: "Top Performers Board", ru: "Доска лучших", uk: "Дошка найкращих", ro: "Tabloul performerilor de top", pl: "Tablica najlepszych", it: "Bacheca migliori performer", tr: "En İyi Performans Tablosu" })}
            </h2>
            <p className="text-lg text-white/80">
              {getText({ ar: "تتبع أداء فريقك ومكافأة الأفضل", en: "Track your team's performance and reward the best", ru: "Отслеживайте производительность команды и награждайте лучших", uk: "Відстежуйте продуктивність команди та нагороджуйте найкращих", ro: "Urmăriți performanța echipei și recompensați-i pe cei mai buni", pl: "Śledź wydajność zespołu i nagradzaj najlepszych", it: "Monitora le prestazioni del team e premia i migliori", tr: "Ekibinizin performansını takip edin ve en iyileri ödüllendirin" })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topPerformers.map((performer, index) => (
              <Card key={index} className={`p-6 border-0 rounded-2xl ${index === 0 ? 'bg-gradient-to-br from-amber-100 to-amber-50' : 'bg-white/10 backdrop-blur-xl border-white/20'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold ${index === 0 ? 'bg-amber-500 text-white' : 'bg-white/20 text-white'}`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className={`font-bold text-lg ${index === 0 ? 'text-texafab-slate' : 'text-white'}`}>
                      {performer.nameEn}
                    </p>
                    <p className={`text-sm ${index === 0 ? 'text-gray-600' : 'text-white/60'}`}>
                      {getText({ ar: "موظف مبيعات", en: "Sales Rep", ru: "Торговый представитель", uk: "Торговий представник", ro: "Reprezentant vânzări", pl: "Przedstawiciel handlowy", it: "Rappresentante vendite", tr: "Satış Temsilcisi" })}
                    </p>
                  </div>
                  {index === 0 && <Star className="w-6 h-6 text-amber-500 fill-amber-500 ms-auto" />}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{getText({ ar: "المبيعات", en: "Sales", ru: "Продажи", uk: "Продажі", ro: "Vânzări", pl: "Sprzedaż", it: "Vendite", tr: "Satışlar" })}</span>
                    <span className={`font-bold ${index === 0 ? 'text-texafab-slate' : 'text-white'}`}>${performer.sales.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{getText({ ar: "تحقيق الهدف", en: "Target", ru: "Цель", uk: "Ціль", ro: "Țintă", pl: "Cel", it: "Obiettivo", tr: "Hedef" })}</span>
                    <span className={`font-bold ${index === 0 ? 'text-emerald-600' : 'text-emerald-400'}`}>{performer.target}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{getText({ ar: "التقييم", en: "Rating", ru: "Рейтинг", uk: "Рейтинг", ro: "Evaluare", pl: "Ocena", it: "Valutazione", tr: "Değerlendirme" })}</span>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= Math.round(performer.rating/20) ? (index === 0 ? 'text-amber-500 fill-amber-500' : 'text-amber-400 fill-amber-400') : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Screenshot */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {getText({ ar: "واجهة الموارد البشرية", en: "HR Interface", ru: "Интерфейс HR", uk: "Інтерфейс HR", ro: "Interfață HR", pl: "Interfejs HR", it: "Interfaccia HR", tr: "İK Arayüzü" })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText({ ar: "لوحة إدارة الموظفين", en: "Employee Management Dashboard", ru: "Панель управления сотрудниками", uk: "Панель управління співробітниками", ro: "Tablou de bord pentru gestionarea angajaților", pl: "Panel zarządzania pracownikami", it: "Dashboard gestione dipendenti", tr: "Çalışan Yönetimi Paneli" })}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText({ ar: "إدارة شاملة لبيانات الموظفين والأداء", en: "Comprehensive management of employee data and performance", ru: "Комплексное управление данными и производительностью сотрудников", uk: "Комплексне управління даними та продуктивністю співробітників", ro: "Management cuprinzător al datelor și performanței angajaților", pl: "Kompleksowe zarządzanie danymi i wydajnością pracowników", it: "Gestione completa dei dati e delle prestazioni dei dipendenti", tr: "Çalışan verileri ve performansının kapsamlı yönetimi" })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <BrowserMockup 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=90" 
                alt={getText({ ar: "إدارة الموظفين", en: "Employee Management", ru: "Управление сотрудниками", uk: "Управління співробітниками", ro: "Managementul angajaților", pl: "Zarządzanie pracownikami", it: "Gestione dipendenti", tr: "Çalışan Yönetimi" })}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {getText({ ar: "لوحة أداء الموظفين والتقارير", en: "Employee Performance & Reports Dashboard", ru: "Панель производительности и отчетов сотрудников", uk: "Панель продуктивності та звітів співробітників", ro: "Tablou de bord pentru performanța și rapoartele angajaților", pl: "Panel wydajności i raportów pracowników", it: "Dashboard prestazioni e report dipendenti", tr: "Çalışan Performansı ve Raporlar Paneli" })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission System */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText({ ar: "نظام العمولات الذكي", en: "Smart Commission System", ru: "Умная система комиссий", uk: "Розумна система комісій", ro: "Sistem inteligent de comisioane", pl: "Inteligentny system prowizji", it: "Sistema commissioni intelligente", tr: "Akıllı Komisyon Sistemi" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: { ar: "عمولة ثابتة", en: "Fixed Commission", ru: "Фиксированная комиссия", uk: "Фіксована комісія", ro: "Comision fix", pl: "Stała prowizja", tr: "Sabit Komisyon" },
                desc: { ar: "نسبة ثابتة على كل عملية بيع", en: "Fixed percentage on each sale", ru: "Фиксированный процент с каждой продажи", uk: "Фіксований відсоток з кожного продажу", ro: "Procent fix pentru fiecare vânzare", pl: "Stały procent od każdej sprzedaży", tr: "Her satışta sabit yüzde" },
                example: { ar: "5% على كل فاتورة", en: "5% on each invoice", ru: "5% с каждого счета", uk: "5% з кожного рахунку", ro: "5% pe fiecare factură", pl: "5% od każdej faktury", tr: "Her faturada %5" }
              },
              {
                title: { ar: "عمولة متدرجة", en: "Tiered Commission", ru: "Многоуровневая комиссия", uk: "Багаторівнева комісія", ro: "Comision pe niveluri", pl: "Prowizja wielopoziomowa", tr: "Kademeli Komisyon" },
                desc: { ar: "نسبة تزيد مع زيادة المبيعات", en: "Percentage increases with sales", ru: "Процент растет с ростом продаж", uk: "Відсоток зростає з ростом продажів", ro: "Procentul crește cu vânzările", pl: "Procent rośnie ze sprzedażą", tr: "Satışlarla birlikte yüzde artar" },
                example: { ar: "5% → 7% → 10%", en: "5% → 7% → 10%", ru: "5% → 7% → 10%", uk: "5% → 7% → 10%", ro: "5% → 7% → 10%", pl: "5% → 7% → 10%", tr: "5% → 7% → 10%" }
              },
              {
                title: { ar: "عمولة الأهداف", en: "Target Commission", ru: "Целевая комиссия", uk: "Цільова комісія", ro: "Comision țintă", pl: "Prowizja docelowa", tr: "Hedef Komisyonu" },
                desc: { ar: "مكافأة عند تحقيق الهدف", en: "Bonus when target is achieved", ru: "Бонус при достижении цели", uk: "Бонус при досягненні цілі", ro: "Bonus când ținta este atinsă", pl: "Bonus po osiągnięciu celu", tr: "Hedefe ulaşıldığında bonus" },
                example: { ar: "1000$ عند 100%", en: "$1000 at 100%", ru: "1000$ при 100%", uk: "1000$ при 100%", ro: "1000$ la 100%", pl: "1000$ przy 100%", tr: "%100'de 1000$" }
              }
            ].map((type, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Percent className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(type.title)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getText(type.desc)}
                </p>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-700 font-medium">{getText(type.example)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function EmployeeManagementPage() {
  return <EmployeeManagementContent />;
}
