import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
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
      titleAr: "البداية",
      titleEn: "The Beginning",
      descAr: "انطلاق ERPMAX من أيرلندا كحل متخصص لشركات الأقمشة",
      descEn: "ERPMAX launched from Ireland as a specialized solution for fabric companies"
    },
    {
      year: "2019",
      titleAr: "التوسع الأوروبي",
      titleEn: "European Expansion",
      descAr: "دخول الأسواق الألمانية والبولندية بنجاح كبير",
      descEn: "Successful entry into German and Polish markets"
    },
    {
      year: "2020",
      titleAr: "دعم العربية",
      titleEn: "Arabic Support",
      descAr: "إطلاق النسخة العربية الكاملة مع RTL",
      descEn: "Launch of full Arabic version with RTL support"
    },
    {
      year: "2021",
      titleAr: "دول الخليج",
      titleEn: "Gulf Region",
      descAr: "التوسع في السعودية والإمارات",
      descEn: "Expansion into Saudi Arabia and UAE"
    },
    {
      year: "2022",
      titleAr: "500 عميل",
      titleEn: "500 Clients",
      descAr: "الوصول إلى 500 شركة حول العالم",
      descEn: "Reaching 500 companies worldwide"
    },
    {
      year: "2024",
      titleAr: "الريادة العالمية",
      titleEn: "Global Leadership",
      descAr: "الاختيار الأول عالمياً لشركات الأقمشة",
      descEn: "World's first choice for fabric companies"
    }
  ];

  const values = [
    {
      icon: Target,
      titleAr: "التخصص",
      titleEn: "Specialization",
      descAr: "نركز 100% على صناعة الأقمشة لنقدم أفضل الحلول",
      descEn: "We focus 100% on the fabric industry to provide the best solutions"
    },
    {
      icon: Heart,
      titleAr: "العميل أولاً",
      titleEn: "Customer First",
      descAr: "نجاح عملائنا هو نجاحنا - نستمع ونتطور",
      descEn: "Our clients' success is our success - we listen and evolve"
    },
    {
      icon: Lightbulb,
      titleAr: "الابتكار",
      titleEn: "Innovation",
      descAr: "نطور ميزات جديدة باستمرار بناءً على احتياجات السوق",
      descEn: "We continuously develop new features based on market needs"
    },
    {
      icon: Shield,
      titleAr: "الموثوقية",
      titleEn: "Reliability",
      descAr: "99.9% وقت تشغيل مع حماية بيانات متقدمة",
      descEn: "99.9% uptime with advanced data protection"
    }
  ];

  const stats = [
    { value: "500+", labelAr: "شركة حول العالم", labelEn: "Companies Worldwide" },
    { value: "50+", labelAr: "دولة", labelEn: "Countries" },
    { value: "10M+", labelAr: "رولون متتبع", labelEn: "Rolls Tracked" },
    { value: "50+", labelAr: "موظف", labelEn: "Team Members" }
  ];

  const team = [
    {
      nameAr: "شون أوبراين",
      nameEn: "Sean O'Brien",
      roleAr: "المؤسس والرئيس التنفيذي",
      roleEn: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    {
      nameAr: "أحمد الفهد",
      nameEn: "Ahmed Al-Fahd",
      roleAr: "مدير العمليات - الشرق الأوسط",
      roleEn: "COO - Middle East",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      nameAr: "هانا شميدت",
      nameEn: "Hannah Schmidt",
      roleAr: "مديرة التقنية",
      roleEn: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      nameAr: "توماس كوفالسكي",
      nameEn: "Tomasz Kowalski",
      roleAr: "مدير المبيعات - أوروبا",
      roleEn: "Sales Director - Europe",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    }
  ];

  const offices = [
    { city: language === "ar" ? "دبلن" : "Dublin", country: language === "ar" ? "أيرلندا" : "Ireland", type: language === "ar" ? "المقر الرئيسي" : "Headquarters" },
    { city: language === "ar" ? "برلين" : "Berlin", country: language === "ar" ? "ألمانيا" : "Germany", type: language === "ar" ? "مكتب أوروبا" : "Europe Office" },
    { city: language === "ar" ? "الرياض" : "Riyadh", country: language === "ar" ? "السعودية" : "Saudi Arabia", type: language === "ar" ? "مكتب الخليج" : "Gulf Office" },
    { city: language === "ar" ? "دبي" : "Dubai", country: language === "ar" ? "الإمارات" : "UAE", type: language === "ar" ? "مركز الدعم" : "Support Center" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              {language === "ar" ? "قصتنا" : "Our Story"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>نبني مستقبل <span className="text-texafab-emerald">صناعة الأقمشة</span></>
              ) : (
                <>Building the Future of <span className="text-texafab-emerald">Fabric Industry</span></>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === "ar"
                ? "من أيرلندا إلى العالم - نقدم أول نظام ERP متخصص لشركات الأقمشة والنسيج"
                : "From Ireland to the world - we provide the first specialized ERP system for fabric and textile companies"
              }
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
                <div className="text-gray-400">{language === "ar" ? stat.labelAr : stat.labelEn}</div>
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
                {language === "ar" ? "مهمتنا" : "Our Mission"}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {language === "ar"
                  ? "تمكين شركات الأقمشة حول العالم من إدارة أعمالها بكفاءة عالية من خلال نظام ERP متخصص يفهم طبيعة هذه الصناعة الفريدة."
                  : "Empower fabric companies worldwide to manage their businesses efficiently through a specialized ERP system that understands the unique nature of this industry."
                }
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === "ar"
                  ? "نؤمن بأن كل شركة أقمشة، مهما كان حجمها، تستحق نظاماً يتحدث لغتها ويفهم تحدياتها اليومية في التعامل مع الأمتار والرولونات والألوان."
                  : "We believe every fabric company, regardless of size, deserves a system that speaks its language and understands its daily challenges in dealing with meters, rolls, and colors."
                }
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
              {language === "ar" ? "قيمنا" : "Our Values"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-texafab-emerald/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-gray-600">{language === "ar" ? value.descAr : value.descEn}</p>
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
              {language === "ar" ? "رحلتنا" : "Our Journey"}
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
                          {language === "ar" ? item.titleAr : item.titleEn}
                        </h3>
                        <p className="text-sm text-gray-600">{language === "ar" ? item.descAr : item.descEn}</p>
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
              {language === "ar" ? "فريق القيادة" : "Leadership Team"}
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
                <p className="text-sm text-gray-500">{language === "ar" ? member.roleAr : member.roleEn}</p>
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
              {language === "ar" ? "مكاتبنا العالمية" : "Our Global Offices"}
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
