import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, workflowPageTranslations as t } from "@/lib/translations/pages";
import { 
  Factory,
  Package,
  Ship,
  MapPin,
  Warehouse,
  ScanBarcode,
  Scissors,
  BarChart3,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Clock,
  Globe,
  Truck,
  Users,
  Calculator,
  RefreshCcw,
  Zap,
  Shield,
  Eye
} from "lucide-react";

function WorkflowContent() {
  const { language, dir } = useLanguage();

  const workflowSteps = [
    {
      step: 1,
      icon: Factory,
      title: getText(t.step1Title, language),
      desc: getText(t.step1Desc, language),
      features: [getText(t.step1Feat1, language), getText(t.step1Feat2, language), getText(t.step1Feat3, language), getText(t.step1Feat4, language)],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Package,
      title: getText(t.step2Title, language),
      desc: getText(t.step2Desc, language),
      features: [getText(t.step2Feat1, language), getText(t.step2Feat2, language), getText(t.step2Feat3, language), getText(t.step2Feat4, language)],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      icon: Ship,
      title: getText(t.step3Title, language),
      desc: getText(t.step3Desc, language),
      features: [getText(t.step3Feat1, language), getText(t.step3Feat2, language), getText(t.step3Feat3, language), getText(t.step3Feat4, language)],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      step: 4,
      icon: MapPin,
      title: getText(t.step4Title, language),
      desc: getText(t.step4Desc, language),
      features: [getText(t.step4Feat1, language), getText(t.step4Feat2, language), getText(t.step4Feat3, language), getText(t.step4Feat4, language)],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 5,
      icon: Warehouse,
      title: getText(t.step5Title, language),
      desc: getText(t.step5Desc, language),
      features: [getText(t.step5Feat1, language), getText(t.step5Feat2, language), getText(t.step5Feat3, language), getText(t.step5Feat4, language)],
      color: "from-orange-500 to-orange-600"
    },
    {
      step: 6,
      icon: ScanBarcode,
      title: getText(t.step6Title, language),
      desc: getText(t.step6Desc, language),
      features: [getText(t.step6Feat1, language), getText(t.step6Feat2, language), getText(t.step6Feat3, language), getText(t.step6Feat4, language)],
      color: "from-pink-500 to-pink-600"
    },
    {
      step: 7,
      icon: Scissors,
      title: getText(t.step7Title, language),
      desc: getText(t.step7Desc, language),
      features: [getText(t.step7Feat1, language), getText(t.step7Feat2, language), getText(t.step7Feat3, language), getText(t.step7Feat4, language)],
      color: "from-red-500 to-red-600"
    },
    {
      step: 8,
      icon: BarChart3,
      title: getText(t.step8Title, language),
      desc: getText(t.step8Desc, language),
      features: [getText(t.step8Feat1, language), getText(t.step8Feat2, language), getText(t.step8Feat3, language), getText(t.step8Feat4, language)],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: getText(t.benefitTimeTitle, language),
      desc: getText(t.benefitTimeDesc, language)
    },
    {
      icon: Shield,
      title: getText(t.benefitAccuracyTitle, language),
      desc: getText(t.benefitAccuracyDesc, language)
    },
    {
      icon: Eye,
      title: getText(t.benefitVisibilityTitle, language),
      desc: getText(t.benefitVisibilityDesc, language)
    },
    {
      icon: Zap,
      title: getText(t.benefitSpeedTitle, language),
      desc: getText(t.benefitSpeedDesc, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-texafab-emerald/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 border border-texafab-emerald/20 mb-8">
              <RefreshCcw className="w-4 h-4 text-texafab-emerald" />
              <span className="text-sm font-semibold text-texafab-emerald">
                {getText(t.pageBadge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-texafab-emerald">{getText(t.pageTitle2, language)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(t.pageSubtitle, language)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold rounded-xl shadow-lg shadow-texafab-emerald/25">
                  {getText(t.ctaBook, language)}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                  {getText(t.ctaExplore, language)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.sectionStagesTitle, language)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText(t.sectionStagesDesc, language)}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 start-0 end-0 h-1 bg-gradient-to-r from-texafab-emerald/20 via-texafab-emerald to-texafab-emerald/20 hidden lg:block -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.slice(0, 4).map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="p-6 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -start-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white font-bold flex items-center justify-center shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg shadow-${step.color}/20 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {step.desc}
                    </p>

                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -end-4 -translate-y-1/2 z-10">
                      <ArrowRight className={`w-8 h-8 text-texafab-emerald ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-10 h-10 text-texafab-emerald animate-bounce" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.slice(4).map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="p-6 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -start-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white font-bold flex items-center justify-center shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {step.desc}
                    </p>

                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -end-4 -translate-y-1/2 z-10">
                      <ArrowRight className={`w-8 h-8 text-texafab-emerald ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-texafab-slate to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText(t.sectionBenefitsTitle, language)}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {getText(t.sectionBenefitsDesc, language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-texafab-emerald/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.sectionVisualTitle, language)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getText(t.sectionVisualDesc, language)}
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #0a5c4a 1px, transparent 0)",
                backgroundSize: "40px 40px"
              }} />
            </div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Source */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl mb-4">
                  <Factory className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(t.visualSource, language)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText(t.visualFactories, language)}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{getText(t.visualCountries, language)}</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center shadow-xl mb-4">
                  <RefreshCcw className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(t.visualOperations, language)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText(t.visualSystem, language)}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Calculator className="w-4 h-4" />
                    <span>{getText(t.visualManagement, language)}</span>
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {getText(t.visualDestination, language)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText(t.visualCustomers, language)}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>{getText(t.visualDelivery, language)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrows */}
            <div className="hidden md:flex absolute top-1/2 left-1/4 right-1/4 justify-between -translate-y-1/2 px-8">
              <ArrowRight className={`w-12 h-12 text-texafab-emerald/30 ${dir === "rtl" ? "rotate-180" : ""}`} />
              <ArrowRight className={`w-12 h-12 text-texafab-emerald/30 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function WorkflowPage() {
  return <WorkflowContent />;
}
