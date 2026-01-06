import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { getText, termsPageTranslations as t } from "@/lib/translations/pages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CreditCard,
  Users,
  Shield,
  Clock,
  Ban
} from "lucide-react";

function TermsContent() {
  const { language, dir } = useLanguage();

  const lastUpdated = language === "ar" ? "١٥ يناير ٢٠٢٥" : "January 15, 2025";

  const sections = [
    {
      icon: FileText,
      title: getText(t.secAcceptTitle, language),
      content: getText(t.secAcceptContent, language)
    },
    {
      icon: Scale,
      title: getText(t.secServiceTitle, language),
      content: getText(t.secServiceContent, language)
    },
    {
      icon: Users,
      title: getText(t.secAccountTitle, language),
      content: getText(t.secAccountContent, language)
    },
    {
      icon: CreditCard,
      title: getText(t.secPaymentTitle, language),
      content: getText(t.secPaymentContent, language)
    },
    {
      icon: Ban,
      title: getText(t.secProhibitedTitle, language),
      content: getText(t.secProhibitedContent, language)
    },
    {
      icon: Shield,
      title: getText(t.secIPTitle, language),
      content: getText(t.secIPContent, language)
    },
    {
      icon: AlertTriangle,
      title: getText(t.secLiabilityTitle, language),
      content: getText(t.secLiabilityContent, language)
    },
    {
      icon: Clock,
      title: getText(t.secTerminationTitle, language),
      content: getText(t.secTerminationContent, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Scale className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {getText(t.pageBadge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-blue-500">{getText(t.pageTitle2, language)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              {getText(t.pageSubtitle, language)}
            </p>

            <p className="text-sm text-gray-500">
              {getText(t.lastUpdated, language)} {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-texafab-slate pt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </Card>
            ))}
          </div>

          {/* Governing Law */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-blue-900 to-cyan-900 text-white border-0 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {getText(t.lawTitle, language)}
                </h3>
                <p className="text-white/80">
                  {getText(t.lawDesc, language)}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function TermsPage() {
  return <TermsContent />;
}
