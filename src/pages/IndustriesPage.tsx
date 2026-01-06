import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, industriesPageTranslations as t } from "@/lib/translations/pages";
import { 
  Globe,
  Building2,
  Store,
  Factory,
  Truck,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

function IndustriesContent() {
  const { language, dir } = useLanguage();

  const getCountries = (key: string) => {
    const countriesMap: Record<string, any> = {
      europe: t.europeCountries,
      gulf: t.gulfCountries,
      asia: t.asiaCountries,
      africa: t.africaCountries,
    };
    const countries = countriesMap[key]?.[language as keyof typeof countriesMap[typeof key]] || countriesMap[key]?.en;
    return Array.isArray(countries) ? countries : [];
  };

  const regions = [
    {
      title: getText(t.europe, language),
      countries: getCountries("europe"),
      desc: getText(t.europeDesc, language),
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
      stats: { companies: "200+", growth: "+45%" }
    },
    {
      title: getText(t.gulf, language),
      countries: getCountries("gulf"),
      desc: getText(t.gulfDesc, language),
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
      stats: { companies: "150+", growth: "+60%" }
    },
    {
      title: getText(t.asia, language),
      countries: getCountries("asia"),
      desc: getText(t.asiaDesc, language),
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
      stats: { companies: "100+", growth: "+80%" }
    },
    {
      title: getText(t.africa, language),
      countries: getCountries("africa"),
      desc: getText(t.africaDesc, language),
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
      stats: { companies: "50+", growth: "+120%" }
    }
  ];

  const getFeatures = (key: string) => {
    const featuresMap: Record<string, any> = {
      retail: t.retailFeatures,
      wholesale: t.wholesaleFeatures,
      manufacturing: t.manufacturingFeatures,
      importExport: t.importExportFeatures,
    };
    const features = featuresMap[key]?.[language as keyof typeof featuresMap[typeof key]] || featuresMap[key]?.en;
    return Array.isArray(features) ? features : [];
  };

  const industries = [
    {
      icon: Store,
      title: getText(t.retail, language),
      desc: getText(t.retailDesc, language),
      features: getFeatures("retail")
    },
    {
      icon: Building2,
      title: getText(t.wholesale, language),
      desc: getText(t.wholesaleDesc, language),
      features: getFeatures("wholesale")
    },
    {
      icon: Factory,
      title: getText(t.manufacturing, language),
      desc: getText(t.manufacturingDesc, language),
      features: getFeatures("manufacturing")
    },
    {
      icon: Truck,
      title: getText(t.importExport, language),
      desc: getText(t.importExportDesc, language),
      features: getFeatures("importExport")
    },
    {
      icon: ShoppingBag,
      title: getText(t.retail, language),
      desc: getText(t.retailDesc, language),
      features: getFeatures("retail")
    },
    {
      icon: Users,
      title: getText(t.wholesale, language),
      desc: getText(t.wholesaleDesc, language),
      features: getFeatures("wholesale")
    }
  ];

  const testimonials = [
    {
      quote: getText(t.testimonial1Quote, language),
      author: getText(t.testimonial1Author, language),
      role: getText(t.testimonial1Role, language),
      country: getText(t.germany, language)
    },
    {
      quote: getText(t.testimonial2Quote, language),
      author: getText(t.testimonial2Author, language),
      role: getText(t.testimonial2Role, language),
      country: getText(t.saudiArabia, language)
    },
    {
      quote: getText(t.testimonial3Quote, language),
      author: getText(t.testimonial3Author, language),
      role: getText(t.testimonial3Role, language),
      country: getText(t.ireland, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              {getText(t.badge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.heroTitle1, language)} <span className="text-texafab-emerald">{getText(t.heroTitle2, language)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {getText(t.heroDescription, language)}
            </p>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 bg-texafab-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-2">500+</div>
              <div className="text-gray-400">{getText(t.companiesWorldwide, language)}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-400">{getText(t.countriesCount, language)}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">10M+</div>
              <div className="text-gray-400">{getText(t.rollsTracked, language)}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <div className="text-gray-400">{getText(t.uptime, language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.globalCoverage, language)}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getText(t.globalCoverageDesc, language)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={region.image} alt={region.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{region.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {region.stats.companies} {getText(t.companies, language)}
                      </span>
                      <span className="flex items-center gap-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        {region.stats.growth}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{region.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.industriesWeServe, language)}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getText(t.industriesWeServeDesc, language)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-texafab-emerald/10 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">{industry.desc}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-texafab-emerald" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.whatClientsSay, language)}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1,2,3,4,5].map(n => (
                    <Award key={n} className="w-4 h-4 fill-texafab-gold text-texafab-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{item.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-texafab-slate">{item.author}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                  <div className="text-sm text-texafab-emerald mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.country}
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

export default function IndustriesPage() {
  return <IndustriesContent />;
}
