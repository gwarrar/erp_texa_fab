import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Users, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    title: "Become an Agent",
    subtitle: "Earn 30% Commission",
    cta: "Join Now"
  },
  ar: {
    title: "كن وكيلاً معتمداً",
    subtitle: "اربح عمولة 30%",
    cta: "انضم الآن"
  },
  tr: {
    title: "Acente Olun",
    subtitle: "%30 Komisyon Kazanın",
    cta: "Katılın"
  }
};

export const FloatingAgentButton: React.FC = () => {
  const { language, dir } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(true);
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
        onClick={() => setIsOpen(true)}
      >
        <Users className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50`}
      >
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 border border-slate-200 dark:border-slate-700 w-72">
          <button 
            onClick={() => setIsOpen(false)}
            className={`absolute -top-3 ${isRTL ? "-left-3" : "-right-3"} w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors shadow-sm`}
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">
                {t.title}
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                {t.subtitle}
              </p>
              <Link to="/fincore/agents">
                <Button size="sm" className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 h-8 text-xs font-bold">
                  {t.cta}
                  <Arrow className="w-3 h-3 ms-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
