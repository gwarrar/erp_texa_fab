import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, rollManagementPageTranslations as t } from "@/lib/translations/pages";
import { 
  ScanBarcode,
  Ruler,
  Palette,
  Scale,
  Scissors,
  MapPin,
  RefreshCcw,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Eye,
  Package,
  Warehouse,
  Search,
  Tag,
  Layers,
  Move,
  AlertTriangle,
  Zap,
  Shield,
  Clock
} from "lucide-react";

function RollManagementContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: ScanBarcode,
      title: getText(t.uniqueBarcode, language),
      desc: getText(t.uniqueBarcodeDesc, language),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Ruler,
      title: getText(t.preciseMeter, language),
      desc: getText(t.preciseMeterDesc, language),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: getText(t.colorManagement, language),
      desc: getText(t.colorManagementDesc, language),
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Scale,
      title: getText(t.weightTracking, language),
      desc: getText(t.weightTrackingDesc, language),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: getText(t.storageLocation, language),
      desc: getText(t.storageLocationDesc, language),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Scissors,
      title: getText(t.smartCutting, language),
      desc: getText(t.smartCuttingDesc, language),
      color: "from-red-500 to-red-600"
    }
  ];

  const rollData = [
    { label: getText(t.barcodeNumber, language), value: "RF-2024-00156" },
    { label: getText(t.fabricType, language), value: "Polyester Blend" },
    { label: getText(t.color, language), value: "Navy Blue #2B4B6F" },
    { label: getText(t.grade, language), value: "A+" },
    { label: getText(t.originalLength, language), value: "100 m" },
    { label: getText(t.remainingLength, language), value: "73.5 m" },
    { label: getText(t.weight, language), value: "45 kg" },
    { label: getText(t.location, language), value: "A-3-12" },
    { label: getText(t.containerNumber, language), value: "CNT-2024-089" },
    { label: getText(t.receiptDate, language), value: "2024-01-15" }
  ];

  const saleText = getText(t.sale, language);
  const sampleText = getText(t.sample, language);
  
  const cuttingHistory = [
    { date: "2024-01-20", meters: 15, customer: "Ahmed Fabrics", type: saleText },
    { date: "2024-01-18", meters: 8, customer: "Luxury Store", type: saleText },
    { date: "2024-01-17", meters: 0.5, customer: "-", type: sampleText },
    { date: "2024-01-16", meters: 3, customer: "Cash Customer", type: saleText }
  ];

  const benefits = [
    {
      icon: Eye,
      title: getText(t.completeVisibility, language),
      desc: getText(t.completeVisibilityDesc, language)
    },
    {
      icon: Zap,
      title: getText(t.superFast, language),
      desc: getText(t.superFastDesc, language)
    },
    {
      icon: Shield,
      title: getText(t.accuracy, language),
      desc: getText(t.accuracyDesc, language)
    },
    {
      icon: Clock,
      title: getText(t.timeSaving, language),
      desc: getText(t.timeSavingDesc, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <ScanBarcode className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">
                {getText(t.badge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.heroTitle1, language)} <span className="text-purple-500">{getText(t.heroTitle2, language)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(t.heroDescription, language)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-purple-500 hover:bg-purple-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-purple-500/25">
                  {getText(t.bookDemo, language)}
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
              {getText(t.featuresTitle, language)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText(t.featuresDesc, language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roll Detail Card Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.rollDetailTitle, language)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText(t.rollDetailDesc, language)}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Roll Info Card */}
            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-texafab-slate">
                      {getText(t.rollDetails, language)}
                    </h3>
                    <p className="text-sm text-gray-500">RF-2024-00156</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                  {getText(t.available, language)}
                </span>
              </div>

              {/* Color Preview */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">{getText(t.colorPreview, language)}</p>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl" style={{ backgroundColor: "#2B4B6F" }} />
                  <div>
                    <p className="font-bold text-texafab-slate">Navy Blue</p>
                    <p className="text-sm text-gray-500">#2B4B6F</p>
                  </div>
                </div>
              </div>

              {/* Roll Data */}
              <div className="grid grid-cols-2 gap-4">
                {rollData.map((item, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-texafab-slate">{item.value}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cutting History */}
            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-texafab-slate">
                    {getText(t.cuttingHistory, language)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {getText(t.recentOperations, language)}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">{getText(t.remainingLength, language)}</span>
                  <span className="text-sm font-bold text-texafab-slate">73.5 / 100 m</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full" style={{ width: "73.5%" }} />
                </div>
              </div>

              {/* History Table */}
              <div className="space-y-3">
                {cuttingHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.type === "عينة" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                      }`}>
                        {item.type === "عينة" ? <Tag className="w-4 h-4" /> : <Scissors className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="font-medium text-texafab-slate">{item.meters} م</p>
                        <p className="text-xs text-gray-500">{item.customer}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.type === "عينة" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button variant="outline" className="rounded-xl">
                  <Scissors className="w-4 h-4 me-2" />
                  {getText(t.newCut, language)}
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Move className="w-4 h-4 me-2" />
                  {getText(t.transfer, language)}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Cutting Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Tag className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600">
                  {getText(t.uniqueFeature, language)}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {getText(t.sampleCuttingTitle, language)}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {getText(t.sampleCuttingDesc, language)}
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  getText(t.separateSampleTracking, language),
                  getText(t.sampleReports, language),
                  getText(t.sampleCostCalculation, language),
                  getText(t.linkSamplesToCustomers, language)
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-texafab-slate mb-4">
                  {getText(t.cutNewSample, language)}
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">{getText(t.roll, language)}</p>
                    <p className="font-semibold text-texafab-slate">RF-2024-00156 - Navy Blue</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{getText(t.length, language)}</p>
                      <p className="font-semibold text-texafab-slate">0.5 m</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{getText(t.type, language)}</p>
                      <p className="font-semibold text-amber-600">{getText(t.sample, language)}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                      <p className="text-sm text-amber-700">
                        {getText(t.sampleNoAffectWarning, language)}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl">
                    {getText(t.confirmSampleCut, language)}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText(t.benefitsTitle, language)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function RollManagementPage() {
  return <RollManagementContent />;
}
