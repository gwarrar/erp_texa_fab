import React from "react";
import { useLanguage } from "./LanguageContext";
import { getText, landingPageTranslations as t } from "@/lib/translations/pages";
import { Shield, Award, Clock, Headphones, CheckCircle2, Building2, Cloud, Globe } from "lucide-react";

export function Trust() {
  const { language } = useLanguage();

  const benefits = [
    { 
      name: getText(t.cloudBased, language), 
      icon: Cloud, 
      desc: getText(t.cloudDesc, language) 
    },
    { 
      name: getText(t.support247, language), 
      icon: Headphones, 
      desc: getText(t.supportDesc, language) 
    },
    { 
      name: getText(t.regularUpdates, language), 
      icon: Clock, 
      desc: getText(t.updatesDesc, language) 
    },
    { 
      name: getText(t.secureProtected, language), 
      icon: Shield, 
      desc: getText(t.secureDesc, language) 
    },
  ];

  const stats = [
    { value: "15+", label: getText(t.yearsExperience, language) },
    { value: "200+", label: getText(t.advancedFeatures, language) },
    { value: "5 دقائق", label: getText(t.avgResponseTime, language) },
    { value: "100%", label: getText(t.customerSatisfaction, language) },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-texafab-cream to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948805_1px,transparent_1px),linear-gradient(to_bottom,#0D948805_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            {getText(t.whyTexaCore, language)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
            {getText(t.featuresBestChoice, language)}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {getText(t.trustDesc, language)}
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-texafab-emerald/10 to-texafab-emerald/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-texafab-emerald transition-all duration-300">
                  <Icon className="w-7 h-7 text-texafab-emerald group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-texafab-slate dark:text-white mb-1 text-sm">{benefit.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{benefit.desc}</p>
                
                {/* Check Badge */}
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-texafab-emerald via-teal-600 to-texafab-emerald rounded-2xl p-6 md:p-10 shadow-xl shadow-texafab-emerald/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center relative">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
