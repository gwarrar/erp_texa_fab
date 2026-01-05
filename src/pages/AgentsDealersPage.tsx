import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users,
  MapPin,
  DollarSign,
  Target,
  TrendingUp,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Percent,
  UserPlus,
  Building,
  Phone,
  Mail,
  Gift,
  Trophy,
  Medal,
  Crown
} from "lucide-react";

function AgentsDealersContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: UserPlus,
      titleAr: "تسجيل الوكلاء والموزعين",
      titleEn: "Register Agents & Dealers",
      descAr: "أضف وكلاء وموزعين مع كل المعلومات المطلوبة ومستنداتهم",
      descEn: "Add agents and dealers with all required information and documents",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      titleAr: "توزيع المناطق الجغرافية",
      titleEn: "Geographic Area Distribution",
      descAr: "خصص مناطق محددة لكل وكيل لتجنب التداخل",
      descEn: "Assign specific areas to each agent to avoid overlap",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Percent,
      titleAr: "نظام العمولات المرن",
      titleEn: "Flexible Commission System",
      descAr: "حدد نسب عمولات مختلفة حسب المنتج أو حجم المبيعات",
      descEn: "Set different commission rates by product or sales volume",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      titleAr: "أهداف المبيعات",
      titleEn: "Sales Targets",
      descAr: "ضع أهداف شهرية أو سنوية وتابع تحقيقها",
      descEn: "Set monthly or annual targets and track achievement",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      titleAr: "ربط العملاء بالوكيل",
      titleEn: "Link Customers to Agent",
      descAr: "اربط العملاء بالوكيل المسؤول عنهم تلقائياً",
      descEn: "Automatically link customers to their responsible agent",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: BarChart3,
      titleAr: "تقارير أداء شاملة",
      titleEn: "Comprehensive Performance Reports",
      descAr: "تقارير تفصيلية عن أداء كل وكيل ومقارنات",
      descEn: "Detailed reports on each agent's performance and comparisons",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const agentLevels = [
    {
      icon: Medal,
      level: "Bronze",
      levelAr: "برونزي",
      target: "$0 - $10,000",
      commission: "5%",
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: Star,
      level: "Silver",
      levelAr: "فضي",
      target: "$10,000 - $50,000",
      commission: "7%",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: Trophy,
      level: "Gold",
      levelAr: "ذهبي",
      target: "$50,000 - $100,000",
      commission: "10%",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Crown,
      level: "Platinum",
      levelAr: "بلاتيني",
      target: "$100,000+",
      commission: "12%",
      color: "from-indigo-400 to-indigo-500"
    }
  ];

  const topAgents = [
    { name: "أحمد الصالح", nameEn: "Ahmed Al-Saleh", sales: "$125,000", level: "Platinum", customers: 45 },
    { name: "محمد العمري", nameEn: "Mohammed Al-Omari", sales: "$89,000", level: "Gold", customers: 32 },
    { name: "خالد الحسن", nameEn: "Khaled Al-Hassan", sales: "$67,000", level: "Gold", customers: 28 },
    { name: "سعيد الناصر", nameEn: "Saeed Al-Nasser", sales: "$45,000", level: "Silver", customers: 21 }
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
                {language === "ar" ? "إدارة الوكلاء والموزعين" : "Agents & Dealers Management"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>أدر فريق مبيعاتك <span className="text-blue-500">باحترافية</span></>
              ) : (
                <>Manage Your Sales Team <span className="text-blue-500">Professionally</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام متكامل لإدارة الوكلاء والموزعين مع تتبع الأداء والعمولات والأهداف"
                : "Complete system for managing agents and dealers with performance, commissions, and targets tracking"}
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

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات إدارة الوكلاء" : "Agent Management Features"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-600">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "نظام مستويات العمولات" : "Commission Levels System"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "حفز وكلاءك بنظام مستويات يكافئ الأداء المتميز"
                : "Motivate your agents with a tiered system that rewards outstanding performance"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentLevels.map((level, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center mb-4`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-1">
                  {language === "ar" ? level.levelAr : level.level}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{level.target}</p>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">{language === "ar" ? "نسبة العمولة" : "Commission Rate"}</p>
                  <p className="text-2xl font-bold text-texafab-emerald">{level.commission}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Profile Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "ملف الوكيل الشامل" : "Comprehensive Agent Profile"}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {language === "ar" 
                  ? "كل المعلومات التي تحتاجها عن كل وكيل في مكان واحد"
                  : "All the information you need about each agent in one place"}
              </p>
              <ul className="space-y-3">
                {[
                  { ar: "معلومات التواصل الكاملة", en: "Complete contact information" },
                  { ar: "المنطقة الجغرافية المخصصة", en: "Assigned geographic area" },
                  { ar: "قائمة العملاء المرتبطين", en: "Linked customers list" },
                  { ar: "سجل المبيعات والعمولات", en: "Sales and commissions history" },
                  { ar: "تقدم الأهداف", en: "Target progress" },
                  { ar: "تقييم الأداء", en: "Performance rating" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-texafab-emerald" />
                    <span className="text-gray-700">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent Card Preview */}
            <Card className="p-6 bg-white border-0 shadow-2xl rounded-3xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    أح
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-texafab-slate">
                      {language === "ar" ? "أحمد الصالح" : "Ahmed Al-Saleh"}
                    </h3>
                    <p className="text-gray-500">{language === "ar" ? "وكيل معتمد" : "Certified Agent"}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 text-white text-sm font-medium">
                  Platinum
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">{language === "ar" ? "إجمالي المبيعات" : "Total Sales"}</p>
                  <p className="text-xl font-bold text-texafab-slate">$125,000</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">{language === "ar" ? "العمولات" : "Commissions"}</p>
                  <p className="text-xl font-bold text-emerald-500">$15,000</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">{language === "ar" ? "العملاء" : "Customers"}</p>
                  <p className="text-xl font-bold text-texafab-slate">45</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">{language === "ar" ? "تحقيق الهدف" : "Target Achievement"}</p>
                  <p className="text-xl font-bold text-blue-500">125%</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-emerald-600">{language === "ar" ? "المنطقة المخصصة" : "Assigned Area"}</p>
                  <p className="font-semibold text-emerald-700">{language === "ar" ? "الرياض - الشمال" : "Riyadh - North"}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1 rounded-xl">
                  <Phone className="w-4 h-4 me-2" />
                  {language === "ar" ? "اتصال" : "Call"}
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl">
                  <Mail className="w-4 h-4 me-2" />
                  {language === "ar" ? "إرسال" : "Email"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Agents Leaderboard */}
      <section className="py-20 bg-gradient-to-br from-texafab-slate to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "لوحة الصدارة" : "Leaderboard"}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تابع أفضل الوكلاء أداءً وحفز روح المنافسة"
                : "Track top-performing agents and foster competitive spirit"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {topAgents.map((agent, index) => (
              <Card key={index} className="p-4 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                    index === 0 ? "bg-yellow-400 text-yellow-900" :
                    index === 1 ? "bg-gray-300 text-gray-700" :
                    index === 2 ? "bg-amber-600 text-white" :
                    "bg-white/20 text-white"
                  }`}>
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">
                      {language === "ar" ? agent.name : agent.nameEn}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {agent.customers} {language === "ar" ? "عميل" : "customers"}
                    </p>
                  </div>
                  <div className="text-end">
                    <p className="font-bold text-texafab-gold">{agent.sales}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                      {agent.level}
                    </span>
                  </div>
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

export default function AgentsDealersPage() {
  return <AgentsDealersContent />;
}
