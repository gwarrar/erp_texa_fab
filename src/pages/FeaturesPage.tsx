import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, featuresPageTranslations as t } from "@/lib/translations/pages";
import { 
  Calculator, 
  Warehouse, 
  ShoppingCart, 
  Users, 
  FileText, 
  BarChart3,
  Package,
  Ruler,
  Palette,
  Truck,
  Receipt,
  CreditCard,
  Building2,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Scissors,
  Layers,
  ScanBarcode,
  Scale,
  RefreshCcw,
  Boxes
} from "lucide-react";

function FeaturesContent() {
  const { language, dir } = useLanguage();

  const mainFeatures = [
    {
      icon: Ruler,
      title: getText(t.multiUnitTitle, language),
      desc: getText(t.multiUnitDesc, language),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      features: [
        getText(t.multiUnitFeature1, language),
        getText(t.multiUnitFeature2, language),
        getText(t.multiUnitFeature3, language),
        getText(t.multiUnitFeature4, language)
      ]
    },
    {
      icon: Palette,
      title: getText(t.colorsTitle, language),
      desc: getText(t.colorsDesc, language),
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=80",
      features: [
        getText(t.colorsFeature1, language),
        getText(t.colorsFeature2, language),
        getText(t.colorsFeature3, language),
        getText(t.colorsFeature4, language)
      ]
    },
    {
      icon: ScanBarcode,
      title: getText(t.barcodeTitle, language),
      desc: getText(t.barcodeDesc, language),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      features: [
        getText(t.barcodeFeature1, language),
        getText(t.barcodeFeature2, language),
        getText(t.barcodeFeature3, language),
        getText(t.barcodeFeature4, language)
      ]
    },
    {
      icon: Scale,
      title: getText(t.quantityTitle, language),
      desc: getText(t.quantityDesc, language),
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
      features: [
        getText(t.quantityFeature1, language),
        getText(t.quantityFeature2, language),
        getText(t.quantityFeature3, language),
        getText(t.quantityFeature4, language)
      ]
    },
    {
      icon: Warehouse,
      title: getText(t.warehouseTitle, language),
      desc: getText(t.warehouseDesc, language),
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      features: [
        getText(t.warehouseFeature1, language),
        getText(t.warehouseFeature2, language),
        getText(t.warehouseFeature3, language),
        getText(t.warehouseFeature4, language)
      ]
    },
    {
      icon: Calculator,
      title: getText(t.accountingTitle, language),
      desc: getText(t.accountingDesc, language),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      features: [
        getText(t.accountingFeature1, language),
        getText(t.accountingFeature2, language),
        getText(t.accountingFeature3, language),
        getText(t.accountingFeature4, language)
      ]
    }
  ];

  const additionalFeatures = [
    { icon: ShoppingCart, title: getText(t.posTitle, language), desc: getText(t.posDesc, language) },
    { icon: Receipt, title: getText(t.invoicingTitle, language), desc: getText(t.invoicingDesc, language) },
    { icon: Users, title: getText(t.customersTitle, language), desc: getText(t.customersDesc, language) },
    { icon: Truck, title: getText(t.shippingTitle, language), desc: getText(t.shippingDesc, language) },
    { icon: CreditCard, title: getText(t.paymentsTitle, language), desc: getText(t.paymentsDesc, language) },
    { icon: FileText, title: getText(t.reportsTitle, language), desc: getText(t.reportsDesc, language) },
    { icon: Building2, title: getText(t.branchesTitle, language), desc: getText(t.branchesDesc, language) },
    { icon: Globe, title: getText(t.integrationTitle, language), desc: getText(t.integrationDesc, language) },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              {getText(t.badge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.heroTitle1, language)} <span className="text-texafab-emerald">{getText(t.heroTitle2, language)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {getText(t.heroDescription, language)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold shadow-lg rounded-xl">
                {getText(t.startFreeTrial, language)}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                {getText(t.watchDemo, language)}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center text-white shadow-lg mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-texafab-emerald flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.moreFeaturesTitle, language)}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getText(t.moreFeaturesDesc, language)}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-texafab-emerald/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-texafab-emerald" />
                </div>
                <h3 className="font-bold text-texafab-slate mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.desc}
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

export default function FeaturesPage() {
  return <FeaturesContent />;
}
