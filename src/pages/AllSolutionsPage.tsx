import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getText, allSolutionsPageTranslations as t } from "@/lib/translations/pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Ruler,
  Scissors,
  Palette,
  Package,
  BarChart3,
  ScanBarcode,
  Scale,
  Boxes,
  Warehouse,
  Calculator,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Users,
  Truck,
  Globe,
  Brain,
  FileText,
  DollarSign,
  Factory,
  Shirt,
  Store,
  HeadphonesIcon,
  Container,
  Layers,
  Settings,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";

function AllSolutionsContent() {
  const { language, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const solutionCategories = {
    management: {
      title: getText(t.tabManagement, language),
      solutions: [
        {
          id: "fabric-management",
          icon: Ruler,
          title: getText(t.fabricMgmtTitle, language),
          desc: getText(t.fabricMgmtDesc, language),
          features: [getText(t.fabricMgmtFeat1, language), getText(t.fabricMgmtFeat2, language), getText(t.fabricMgmtFeat3, language), getText(t.fabricMgmtFeat4, language)],
          link: "/fabric-management",
          color: "from-blue-500 to-blue-600"
        },
        {
          id: "roll-management",
          icon: Package,
          title: getText(t.rollMgmtTitle, language),
          desc: getText(t.rollMgmtDesc, language),
          features: [getText(t.rollMgmtFeat1, language), getText(t.rollMgmtFeat2, language), getText(t.rollMgmtFeat3, language), getText(t.rollMgmtFeat4, language)],
          link: "/roll-management",
          color: "from-purple-500 to-purple-600"
        },
        {
          id: "warehouse-management",
          icon: Warehouse,
          title: getText(t.warehouseMgmtTitle, language),
          desc: getText(t.warehouseMgmtDesc, language),
          features: [getText(t.warehouseMgmtFeat1, language), getText(t.warehouseMgmtFeat2, language), getText(t.warehouseMgmtFeat3, language), getText(t.warehouseMgmtFeat4, language)],
          link: "/warehouse-management",
          color: "from-amber-500 to-amber-600"
        },
        {
          id: "container-tracking",
          icon: Container,
          title: getText(t.containerTrackingTitle, language),
          desc: getText(t.containerTrackingDesc, language),
          features: [getText(t.containerTrackingFeat1, language), getText(t.containerTrackingFeat2, language), getText(t.containerTrackingFeat3, language), getText(t.containerTrackingFeat4, language)],
          link: "/container-tracking",
          color: "from-cyan-500 to-cyan-600"
        }
      ]
    },
    manufacturing: {
      title: getText(t.tabManufacturing, language),
      solutions: [
        {
          id: "fabric-manufacturing",
          icon: Factory,
          title: getText(t.fabricMfgTitle, language),
          desc: getText(t.fabricMfgDesc, language),
          features: [getText(t.fabricMfgFeat1, language), getText(t.fabricMfgFeat2, language), getText(t.fabricMfgFeat3, language), getText(t.fabricMfgFeat4, language)],
          link: "/fabric-manufacturing",
          color: "from-indigo-500 to-indigo-600"
        },
        {
          id: "garment-manufacturing",
          icon: Shirt,
          title: getText(t.garmentMfgTitle, language),
          desc: getText(t.garmentMfgDesc, language),
          features: [getText(t.garmentMfgFeat1, language), getText(t.garmentMfgFeat2, language), getText(t.garmentMfgFeat3, language), getText(t.garmentMfgFeat4, language)],
          link: "/garment-manufacturing",
          color: "from-pink-500 to-pink-600"
        }
      ]
    },
    sales: {
      title: getText(t.tabSales, language),
      solutions: [
        {
          id: "pos-system",
          icon: ShoppingCart,
          title: getText(t.posTitle, language),
          desc: getText(t.posDesc, language),
          features: [getText(t.posFeat1, language), getText(t.posFeat2, language), getText(t.posFeat3, language), getText(t.posFeat4, language)],
          link: "/pos-system",
          color: "from-green-500 to-green-600"
        },
        {
          id: "ecommerce",
          icon: Globe,
          title: getText(t.ecommerceTitle, language),
          desc: getText(t.ecommerceDesc, language),
          features: [getText(t.ecommerceFeat1, language), getText(t.ecommerceFeat2, language), getText(t.ecommerceFeat3, language), getText(t.ecommerceFeat4, language)],
          link: "/ecommerce",
          color: "from-teal-500 to-teal-600"
        },
        {
          id: "agents-dealers",
          icon: Users,
          title: getText(t.agentsTitle, language),
          desc: getText(t.agentsDesc, language),
          features: [getText(t.agentsFeat1, language), getText(t.agentsFeat2, language), getText(t.agentsFeat3, language), getText(t.agentsFeat4, language)],
          link: "/agents-dealers",
          color: "from-orange-500 to-orange-600"
        },
        {
          id: "crm",
          icon: HeadphonesIcon,
          title: getText(t.crmTitle, language),
          desc: getText(t.crmDesc, language),
          features: [getText(t.crmFeat1, language), getText(t.crmFeat2, language), getText(t.crmFeat3, language), getText(t.crmFeat4, language)],
          link: "/crm",
          color: "from-rose-500 to-rose-600"
        }
      ]
    },
    finance: {
      title: getText(t.tabFinance, language),
      solutions: [
        {
          id: "accounting",
          icon: Calculator,
          title: getText(t.financeTitle, language),
          desc: getText(t.financeDesc, language),
          features: [getText(t.financeFeat1, language), getText(t.financeFeat2, language), getText(t.financeFeat3, language), getText(t.financeFeat4, language)],
          link: "/accounting",
          color: "from-emerald-500 to-emerald-600"
        },
        {
          id: "shipping",
          icon: Truck,
          title: getText(t.shippingTitle, language),
          desc: getText(t.shippingDesc, language),
          features: [getText(t.shippingFeat1, language), getText(t.shippingFeat2, language), getText(t.shippingFeat3, language), getText(t.shippingFeat4, language)],
          link: "/shipping",
          color: "from-violet-500 to-violet-600"
        }
      ]
    },
    analytics: {
      title: getText(t.tabAnalytics, language),
      solutions: [
        {
          id: "reports",
          icon: BarChart3,
          title: getText(t.reportsTitle, language),
          desc: getText(t.reportsDesc, language),
          features: [getText(t.reportsFeat1, language), getText(t.reportsFeat2, language), getText(t.reportsFeat3, language), getText(t.reportsFeat4, language)],
          link: "/reports-analytics",
          color: "from-sky-500 to-sky-600"
        },
        {
          id: "ai-analytics",
          icon: Brain,
          title: getText(t.aiAnalyticsTitle, language),
          desc: getText(t.aiAnalyticsDesc, language),
          features: [getText(t.aiAnalyticsFeat1, language), getText(t.aiAnalyticsFeat2, language), getText(t.aiAnalyticsFeat3, language), getText(t.aiAnalyticsFeat4, language)],
          link: "/ai-analytics",
          color: "from-fuchsia-500 to-fuchsia-600"
        }
      ]
    },
    hr: {
      title: getText(t.tabHR, language),
      solutions: [
        {
          id: "employee-management",
          icon: Users,
          title: getText(t.hrTitle, language),
          desc: getText(t.hrDesc, language),
          features: [getText(t.hrFeat1, language), getText(t.hrFeat2, language), getText(t.hrFeat3, language), getText(t.hrFeat4, language)],
          link: "/employee-management",
          color: "from-slate-500 to-slate-600"
        }
      ]
    }
  };

  // Priority order for categories (higher priority = show first when "all")
  const categoryPriorityOrder: Array<keyof typeof solutionCategories> = [
    "management",    // إدارة المخزون
    "finance",       // المالية
    "sales",         // المبيعات
    "manufacturing", // التصنيع
    "analytics",     // التحليلات
    "hr"             // الموارد البشرية
  ];

  // Filter tabs order (same order for both LTR and RTL)
  const filterTabsOrder = categoryPriorityOrder;

  // Get all solutions flattened with their category (in priority order)
  const allSolutions = categoryPriorityOrder.flatMap((key) => 
    solutionCategories[key].solutions.map((solution) => ({
      ...solution,
      categoryKey: key,
      categoryTitle: solutionCategories[key].title
    }))
  );

  // Filter solutions based on active tab
  const filteredSolutions = activeTab === "all" 
    ? allSolutions 
    : allSolutions.filter((solution) => solution.categoryKey === activeTab);

  // Keep same order for both LTR and RTL
  const displaySolutions = filteredSolutions;

  return (
    <main className={`min-h-screen bg-gradient-to-br from-white via-texafab-cream/30 to-white ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              {getText(t.pageBadge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-texafab-emerald">{getText(t.pageTitle2, language)}</span>
            </h1>
            <p className="text-xl text-texafab-slate/70 max-w-3xl mx-auto">
              {getText(t.pageSubtitle, language)}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {/* All Solutions Tab */}
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                activeTab === "all"
                  ? "bg-texafab-emerald text-white border-texafab-emerald"
                  : "border-texafab-slate/10 text-texafab-slate hover:border-texafab-emerald/50"
              }`}
            >
              {getText(t.tabAll, language)}
            </button>
            {filterTabsOrder.map((key) => {
              const category = solutionCategories[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                    activeTab === key
                      ? "bg-texafab-emerald text-white border-texafab-emerald"
                      : "border-texafab-slate/10 text-texafab-slate hover:border-texafab-emerald/50"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* All Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" dir={dir}>
            {displaySolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.id}
                  className={`group bg-white hover:shadow-xl transition-all duration-500 border-texafab-slate/10 overflow-hidden ${
                    activeTab !== "all" && activeTab === solution.categoryKey
                      ? "ring-2 ring-texafab-emerald scale-[1.02]"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-texafab-slate/5 text-texafab-slate/60">
                        {solution.categoryTitle}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-texafab-slate/70 mb-4 text-sm">
                      {solution.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-texafab-slate/80">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <Link to={solution.link}>
                      <Button 
                        variant="outline" 
                        className="w-full group/btn border-texafab-emerald/30 text-texafab-emerald hover:bg-texafab-emerald hover:text-white transition-all duration-300"
                      >
                        {getText(t.learnMore, language)}
                        <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 mr-2" : "ml-2"} group-hover/btn:translate-x-1 transition-transform`} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-texafab-slate text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText(t.whyTexaCore, language)}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: getText(t.statIntegrated, language), icon: Layers },
              { value: "200+", label: getText(t.statAdvanced, language), icon: Zap },
              { value: "100%", label: getText(t.statArabic, language), icon: Globe },
              { value: "24/7", label: getText(t.statSupport, language), icon: HeadphonesIcon }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-texafab-gold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-texafab-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.readyToStart, language)}
            </h2>
            <p className="text-texafab-slate/70 mb-8">
              {getText(t.readyDesc, language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-texafab-emerald hover:bg-texafab-emerald/90 text-white px-8">
                  {getText(t.requestDemo, language)}
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 mr-2" : "ml-2"}`} />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-texafab-emerald text-texafab-emerald hover:bg-texafab-emerald hover:text-white px-8">
                  {getText(t.viewPricing, language)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function AllSolutionsPage() {
  return (
    <>
      <Header />
      <AllSolutionsContent />
      <Footer />
    </>
  );
}
