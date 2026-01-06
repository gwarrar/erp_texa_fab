import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, Play, Phone } from "lucide-react";
import { TrialSignupModal } from "./TrialSignupModal";

export function CTA() {
  const { t, dir, language } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const benefits = [
    t("cta.benefit1"),
    t("cta.benefit2"),
    t("cta.benefit3")
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-texafab-emerald via-teal-600 to-texafab-emerald relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-texafab-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-texafab-gold" />
              {t("cta.digitalTransformation")}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {t("cta.ready")}
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("cta.joinCompanies")}
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-texafab-gold" />
                  <span className="font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => setIsTrialModalOpen(true)}
              className="group h-14 px-8 bg-white text-texafab-emerald hover:bg-white/95 text-base font-bold shadow-xl shadow-black/20 hover:shadow-black/30 transition-all duration-300 rounded-xl"
            >
              {t("cta.button")}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="group h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                <Phone className="w-4 h-4 me-2" />
                {t("cta.contactSales")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trial Signup Modal */}
      <TrialSignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </section>
  );
}
