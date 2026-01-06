import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { getText, aboutPageTranslations as t } from "@/lib/translations/pages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Award,
  Users,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Building2,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";

function AboutContent() {
  const { language, dir } = useLanguage();

  const timeline = [
    {
      year: "2018",
      title: getText(t.journey2018Title, language),
      desc: getText(t.journey2018Desc, language)
    },
    {
      year: "2019",
      title: getText(t.journey2019Title, language),
      desc: getText(t.journey2019Desc, language)
    },
    {
      year: "2020",
      title: getText(t.journey2020Title, language),
      desc: getText(t.journey2020Desc, language)
    },
    {
      year: "2021",
      title: getText(t.journey2021Title, language),
      desc: getText(t.journey2021Desc, language)
    },
    {
      year: "2022",
      title: getText(t.journey2022Title, language),
      desc: getText(t.journey2022Desc, language)
    },
    {
      year: "2024",
      title: getText(t.journey2024Title, language),
      desc: getText(t.journey2024Desc, language)
    }
  ];

  const values = [
    {
      icon: Target,
      title: getText(t.valSpecialization, language),
      desc: getText(t.valSpecializationDesc, language)
    },
    {
      icon: Heart,
      title: getText(t.valCustomer, language),
      desc: getText(t.valCustomerDesc, language)
    },
    {
      icon: Lightbulb,
      title: getText(t.valInnovation, language),
      desc: getText(t.valInnovationDesc, language)
    },
    {
      icon: Shield,
      title: getText(t.valReliability, language),
      desc: getText(t.valReliabilityDesc, language)
    }
  ];

  const stats = [
    { value: "500+", label: getText(t.statCompanies, language) },
    { value: "50+", label: getText(t.statCountries, language) },
    { value: "10M+", label: getText(t.statRolls, language) },
    { value: "50+", label: getText(t.statTeam, language) }
  ];

  const team = [
    {
      nameAr: "شون أوبراين",
      nameEn: "Sean O'Brien",
      role: getText(t.teamRole1, language),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    {
      nameAr: "أحمد الفهد",
      nameEn: "Ahmed Al-Fahd",
      role: getText(t.teamRole2, language),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      nameAr: "هانا شميدت",
      nameEn: "Hannah Schmidt",
      role: getText(t.teamRole3, language),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      nameAr: "توماس كوفالسكي",
      nameEn: "Tomasz Kowalski",
      role: getText(t.teamRole4, language),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    }
  ];

  const offices = [
    { city: getText(t.officeDublin, language), country: getText(t.countryIreland, language), type: getText(t.typeHQ, language) },
    { city: getText(t.officeBerlin, language), country: getText(t.countryGermany, language), type: getText(t.typeEurope, language) },
    { city: getText(t.officeRiyadh, language), country: getText(t.countrySaudi, language), type: getText(t.typeGulf, language) },
    { city: getText(t.officeDubai, language), country: getText(t.countryUAE, language), type: getText(t.typeSupport, language) }
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
              <Building2 className="w-4 h-4" />
              {getText(t.pageBadge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.pageTitle1, language)} <span className="text-texafab-emerald">{getText(t.pageTitle2, language)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {getText(t.pageSubtitle, language)}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-texafab-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-6">
                {getText(t.missionTitle, language)}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {getText(t.missionDesc1, language)}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {getText(t.missionDesc2, language)}
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.valuesTitle, language)}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-texafab-emerald/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.journeyTitle, language)}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-texafab-emerald/20" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className={`relative flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="p-6 inline-block">
                        <div className="text-2xl font-black text-texafab-emerald mb-2">{item.year}</div>
                        <h3 className="font-bold text-texafab-slate mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-texafab-emerald rounded-full border-4 border-white" />
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.teamTitle, language)}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={language === "ar" ? member.nameAr : member.nameEn}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-texafab-slate">{language === "ar" ? member.nameAr : member.nameEn}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.officesTitle, language)}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {offices.map((office, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-texafab-emerald mb-4" />
                <h3 className="font-bold text-texafab-slate text-lg">{office.city}</h3>
                <p className="text-gray-600">{office.country}</p>
                <p className="text-sm text-texafab-emerald mt-2">{office.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
