import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { getText, faqPageTranslations as t } from "@/lib/translations/pages";
import { useSiteData, FAQContent as FAQData } from "@/hooks/useSiteData";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Search,
  Package,
  CreditCard,
  Settings,
  Users,
  Shield,
  Headphones
} from "lucide-react";
import { Input } from "@/components/ui/input";

function FAQContent() {
  const { language, dir } = useLanguage();
  
  // Load FAQ content from CMS
  const { data: cmsFaq } = useSiteData<FAQData>('faq', language);

  const categories = [
    {
      icon: Package,
      title: getText(t.catProduct, language),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: CreditCard,
      title: getText(t.catPricing, language),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: getText(t.catSetup, language),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: getText(t.catSecurity, language),
      color: "from-orange-500 to-orange-600"
    }
  ];

  const faqs = {
    product: [
      {
        question: getText(t.prodQ1, language),
        answer: getText(t.prodA1, language)
      },
      {
        question: getText(t.prodQ2, language),
        answer: getText(t.prodA2, language)
      },
      {
        question: getText(t.prodQ3, language),
        answer: getText(t.prodA3, language)
      },
      {
        question: getText(t.prodQ4, language),
        answer: getText(t.prodA4, language)
      }
    ],
    pricing: [
      {
        question: getText(t.priceQ1, language),
        answer: getText(t.priceA1, language)
      },
      {
        question: getText(t.priceQ2, language),
        answer: getText(t.priceA2, language)
      },
      {
        question: getText(t.priceQ3, language),
        answer: getText(t.priceA3, language)
      },
      {
        question: getText(t.priceQ4, language),
        answer: getText(t.priceA4, language)
      }
    ],
    setup: [
      {
        question: getText(t.setupQ1, language),
        answer: getText(t.setupA1, language)
      },
      {
        question: getText(t.setupQ2, language),
        answer: getText(t.setupA2, language)
      },
      {
        question: getText(t.setupQ3, language),
        answer: getText(t.setupA3, language)
      }
    ],
    security: [
      {
        question: getText(t.secQ1, language),
        answer: getText(t.secA1, language)
      },
      {
        question: getText(t.secQ2, language),
        answer: getText(t.secA2, language)
      },
      {
        question: getText(t.secQ3, language),
        answer: getText(t.secA3, language)
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <HelpCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {getText(t.pageBadge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-emerald-500">{getText(t.pageTitle2, language)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(t.pageSubtitle, language)}
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                className="ps-12 h-14 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={getText(t.searchPlaceholder, language)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-texafab-slate dark:text-white">
                  {category.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Product & Features */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {getText(t.catProduct, language)}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.product.map((faq, index) => (
                <AccordionItem key={index} value={`product-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Pricing & Billing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {getText(t.catPricing, language)}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.pricing.map((faq, index) => (
                <AccordionItem key={index} value={`pricing-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Setup & Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {getText(t.catSetup, language)}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.setup.map((faq, index) => (
                <AccordionItem key={index} value={`setup-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Security & Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {getText(t.catSecurity, language)}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.security.map((faq, index) => (
                <AccordionItem key={index} value={`security-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-texafab-slate to-gray-800 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getText(t.stillQTitle, language)}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {getText(t.stillQDesc, language)}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-white text-texafab-slate hover:bg-white/90 text-base font-bold rounded-xl">
                  <MessageCircle className="w-5 h-5 me-2" />
                  {getText(t.contactBtn, language)}
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 text-base font-semibold rounded-xl">
                {getText(t.liveChatBtn, language)}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FAQPage() {
  return <FAQContent />;
}
