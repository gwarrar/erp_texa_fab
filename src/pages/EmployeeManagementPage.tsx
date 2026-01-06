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
                {language === "ar" ? "إدارة الموظفين والأداء" : "Employee & Performance Management"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>فريق عمل <span className="text-blue-500">أكثر إنتاجية</span></>
              ) : (
                <>A More <span className="text-blue-500">Productive Team</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "أدوات متقدمة لإدارة فريق العمل وتتبع الأداء ومكافأة المتميزين"
                : "Advanced tools to manage your team, track performance, and reward top performers"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
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
              { icon: Users, valueAr: "250+", valueEn: "250+", labelAr: "موظف مدار", labelEn: "Employees Managed" },
              { icon: TrendingUp, valueAr: "35%", valueEn: "35%", labelAr: "زيادة الإنتاجية", labelEn: "Productivity Increase" },
              { icon: Clock, valueAr: "50%", valueEn: "50%", labelAr: "توفير وقت الإدارة", labelEn: "Admin Time Saved" },
              { icon: Star, valueAr: "95%", valueEn: "95%", labelAr: "رضا الموظفين", labelEn: "Employee Satisfaction" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-texafab-slate mb-1">
                  {language === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-gray-600 text-sm">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
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
              {language === "ar" ? "مميزات إدارة الموظفين" : "Employee Management Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "كل ما تحتاجه لإدارة فريق عمل ناجح"
                : "Everything you need to manage a successful team"}
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
                  {language === "ar" ? "الأدوار والصلاحيات" : "Roles & Permissions"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "تحكم دقيق في الصلاحيات" : "Precise Permission Control"}
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                {language === "ar" 
                  ? "حدد صلاحيات كل موظف بدقة حسب دوره ومسؤولياته"
                  : "Define each employee's permissions precisely according to their role and responsibilities"}
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
                {language === "ar" ? "مثال على صلاحيات المستخدم" : "User Permission Example"}
              </h3>
              
              <div className="space-y-3">
                {[
                  { ar: "عرض المبيعات", en: "View Sales", enabled: true },
                  { ar: "إنشاء فاتورة", en: "Create Invoice", enabled: true },
                  { ar: "حذف فاتورة", en: "Delete Invoice", enabled: false },
                  { ar: "عرض التقارير المالية", en: "View Financial Reports", enabled: false },
                  { ar: "إدارة المخزون", en: "Manage Inventory", enabled: true },
                  { ar: "إضافة موظف", en: "Add Employee", enabled: false },
                  { ar: "تعديل الأسعار", en: "Edit Prices", enabled: false },
                  { ar: "عرض العملاء", en: "View Customers", enabled: true }
                ].map((perm, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">{language === "ar" ? perm.ar : perm.en}</span>
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
              {language === "ar" ? "لوحة المتميزين" : "Top Performers Board"}
            </h2>
            <p className="text-lg text-white/80">
              {language === "ar" ? "تتبع أداء فريقك ومكافأة الأفضل" : "Track your team's performance and reward the best"}
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
                      {language === "ar" ? performer.name : performer.nameEn}
                    </p>
                    <p className={`text-sm ${index === 0 ? 'text-gray-600' : 'text-white/60'}`}>
                      {language === "ar" ? "موظف مبيعات" : "Sales Rep"}
                    </p>
                  </div>
                  {index === 0 && <Star className="w-6 h-6 text-amber-500 fill-amber-500 ms-auto" />}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{language === "ar" ? "المبيعات" : "Sales"}</span>
                    <span className={`font-bold ${index === 0 ? 'text-texafab-slate' : 'text-white'}`}>${performer.sales.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{language === "ar" ? "تحقيق الهدف" : "Target"}</span>
                    <span className={`font-bold ${index === 0 ? 'text-emerald-600' : 'text-emerald-400'}`}>{performer.target}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={index === 0 ? 'text-gray-600' : 'text-white/60'}>{language === "ar" ? "التقييم" : "Rating"}</span>
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
                {language === "ar" ? "واجهة الموارد البشرية" : "HR Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "لوحة إدارة الموظفين" : "Employee Management Dashboard"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "إدارة شاملة لبيانات الموظفين والأداء"
                : "Comprehensive management of employee data and performance"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <BrowserMockup 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=90" 
                alt={language === "ar" ? "إدارة الموظفين" : "Employee Management"}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "لوحة أداء الموظفين والتقارير" : "Employee Performance & Reports Dashboard"}
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
              {language === "ar" ? "نظام العمولات الذكي" : "Smart Commission System"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titleAr: "عمولة ثابتة",
                titleEn: "Fixed Commission",
                descAr: "نسبة ثابتة على كل عملية بيع",
                descEn: "Fixed percentage on each sale",
                example: "5% على كل فاتورة"
              },
              {
                titleAr: "عمولة متدرجة",
                titleEn: "Tiered Commission",
                descAr: "نسبة تزيد مع زيادة المبيعات",
                descEn: "Percentage increases with sales",
                example: "5% → 7% → 10%"
              },
              {
                titleAr: "عمولة الأهداف",
                titleEn: "Target Commission",
                descAr: "مكافأة عند تحقيق الهدف",
                descEn: "Bonus when target is achieved",
                example: "1000$ عند 100%"
              }
            ].map((type, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Percent className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? type.titleAr : type.titleEn}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "ar" ? type.descAr : type.descEn}
                </p>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-700 font-medium">{type.example}</p>
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
