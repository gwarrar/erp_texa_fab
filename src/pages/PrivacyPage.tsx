import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { getText, privacyPageTranslations as t } from "@/lib/translations/pages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  FileText,
  Users,
  Globe,
  Mail
} from "lucide-react";

function PrivacyContent() {
  const { language, dir } = useLanguage();

  const lastUpdated = language === "ar" ? "١٥ يناير ٢٠٢٥" : "January 15, 2025";

  const sections = [
    {
      icon: FileText,
      title: getText(t.secIntroTitle, language),
      content: getText(t.secIntroContent, language)
    },
    {
      icon: Eye,
      title: getText(t.secCollectTitle, language),
      content: getText(t.secCollectContent, language)
    },
    {
      icon: Users,
      title: getText(t.secUsageTitle, language),
      content: getText(t.secUsageContent, language)
    },
    {
      icon: Lock,
      title: getText(t.secProtectTitle, language),
      content: getText(t.secProtectContent, language)
    },
    {
      icon: Globe,
      title: getText(t.secSharingTitle, language),
      content: getText(t.secSharingContent, language)
    },
    {
      icon: Server,
      title: getText(t.secStorageTitle, language),
      content: getText(t.secStorageContent, language)
    },
    {
      icon: Shield,
      title: getText(t.secRightsTitle, language),
      content: getText(t.secRightsContent, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {getText(t.pageBadge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-emerald-500">{getText(t.pageTitle2, language)}</span>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
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

          {/* Contact for Privacy */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-texafab-slate to-gray-800 text-white border-0 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {getText(t.contactTitle, language)}
                </h3>
                <p className="text-white/80 mb-4">
                  {getText(t.contactDesc, language)}
                </p>
                <div className="space-y-2 text-white/80">
                  <p><strong>{getText(t.emailLabel, language)}</strong> privacy@texacore.app</p>
                  <p><strong>{getText(t.addressLabel, language)}</strong> Next Revolution for Software Development, Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
