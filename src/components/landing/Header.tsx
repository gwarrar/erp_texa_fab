import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, languageNames, Language } from "./LanguageContext";
import { useTheme, Theme } from "./ThemeContext";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronRight, ChevronDown, Package, ScanBarcode, ShoppingCart, Users, BarChart3, Truck, Warehouse, Scissors, Calculator, RefreshCw, ShoppingBag, Heart, Factory, Shirt, Brain, Sun, Moon, Monitor } from "lucide-react";

export function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themeOptions: { value: Theme; labelAr: string; labelEn: string; icon: typeof Sun }[] = [
    { value: "light", labelAr: "فاتح", labelEn: "Light", icon: Sun },
    { value: "dark", labelAr: "داكن", labelEn: "Dark", icon: Moon },
    { value: "system", labelAr: "تلقائي", labelEn: "Auto", icon: Monitor },
  ];

  const solutionLinks = [
    { href: "/container-tracking", labelAr: "تتبع الكونتينرات", labelEn: "Container Tracking", icon: Package },
    { href: "/roll-management", labelAr: "إدارة الرولونات", labelEn: "Roll Management", icon: ScanBarcode },
    { href: "/warehouse-management", labelAr: "إدارة المستودعات", labelEn: "Warehouse Management", icon: Warehouse },
    { href: "/fabric-management", labelAr: "إدارة الأقمشة", labelEn: "Fabric Management", icon: Scissors },
    { href: "/pos-system", labelAr: "نقاط البيع", labelEn: "POS System", icon: ShoppingCart },
    { href: "/workflow-complete", labelAr: "سير العمل المتكامل", labelEn: "Complete Workflow", icon: RefreshCw },
    { href: "/ecommerce", labelAr: "المتجر الإلكتروني", labelEn: "E-Commerce", icon: ShoppingBag },
    { href: "/crm", labelAr: "إدارة العملاء CRM", labelEn: "CRM", icon: Heart },
    { href: "/employee-management", labelAr: "إدارة الموظفين", labelEn: "Employee Management", icon: Users },
    { href: "/accounting", labelAr: "المحاسبة والأرباح", labelEn: "Accounting & Profits", icon: Calculator },
    { href: "/fabric-manufacturing", labelAr: "تصنيع الأقمشة", labelEn: "Fabric Manufacturing", icon: Factory },
    { href: "/garment-manufacturing", labelAr: "تصنيع الألبسة", labelEn: "Garment Manufacturing", icon: Shirt },
    { href: "/ai-analytics", labelAr: "الذكاء الاصطناعي", labelEn: "AI & Analytics", icon: Brain },
    { href: "/reports-analytics", labelAr: "التقارير", labelEn: "Reports & Analytics", icon: BarChart3 },
    { href: "/shipping", labelAr: "الشحن والتوصيل", labelEn: "Shipping & Delivery", icon: Truck },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.solutions-dropdown') && !target.closest('.solutions-trigger')) {
        setIsSolutionsMenuOpen(false);
      }
      if (!target.closest('.language-dropdown') && !target.closest('.language-trigger')) {
        setIsLanguageMenuOpen(false);
      }
      if (!target.closest('.theme-dropdown') && !target.closest('.theme-trigger')) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 start-0 end-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border-b border-gray-100 dark:border-gray-800" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
            <div className="relative group">
              <div className="w-10 h-10 bg-gradient-to-br from-texafab-emerald to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-texafab-emerald/20 group-hover:shadow-texafab-emerald/40 transition-shadow">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <div className="absolute -inset-1 bg-texafab-emerald/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl font-black text-texafab-emerald tracking-tight">ERP</span>
                <span className="text-xl font-black text-texafab-gold tracking-tight">MAX</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">{language === "ar" ? "جودة تستحق الثقة" : "Quality You Can Trust"}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/features" 
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group"
            >
              {language === "ar" ? "الميزات" : "Features"}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/comparison" 
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group"
            >
              {language === "ar" ? "لماذا TexaFab؟" : "Why TexaFab?"}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/workflow" 
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group"
            >
              {language === "ar" ? "سير العمل" : "Workflow"}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative solutions-dropdown">
              <button
                onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
                className="solutions-trigger relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group flex items-center gap-1"
              >
                {language === "ar" ? "الحلول" : "Solutions"}
                <ChevronDown className={`w-3 h-3 transition-transform ${isSolutionsMenuOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isSolutionsMenuOpen && (
                <div className="absolute top-full mt-2 start-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-3 min-w-[260px] z-50 animate-fade-in max-h-[70vh] overflow-y-auto">
                  {/* View All Solutions Link */}
                  <Link
                    to="/all-solutions"
                    onClick={() => setIsSolutionsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-texafab-emerald dark:text-texafab-teal bg-texafab-emerald/5 dark:bg-texafab-teal/10 border-b border-gray-100 dark:border-gray-700 mb-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-sm font-bold">{language === "ar" ? "عرض جميع الحلول" : "View All Solutions"}</span>
                  </Link>
                  {solutionLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={() => setIsSolutionsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{language === "ar" ? link.labelAr : link.labelEn}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group"
            >
              {language === "ar" ? "الأسعار" : "Pricing"}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group"
            >
              {language === "ar" ? "تواصل معنا" : "Contact"}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="language-trigger hidden sm:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 rounded-full px-4"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{languageNames[language]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageMenuOpen ? "rotate-180" : ""}`} />
              </Button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full mt-2 end-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 min-w-[160px] z-50 animate-fade-in">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-4 py-2 text-start text-sm hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 transition-colors ${
                        language === lang ? "text-texafab-emerald dark:text-texafab-teal font-semibold bg-texafab-emerald/5 dark:bg-texafab-teal/10" : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Dropdown */}
            <div className="relative theme-dropdown">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="theme-trigger hidden sm:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 rounded-full px-3"
              >
                {resolvedTheme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <ChevronDown className={`w-3 h-3 transition-transform ${isThemeMenuOpen ? "rotate-180" : ""}`} />
              </Button>
              
              {isThemeMenuOpen && (
                <div className="absolute top-full mt-2 end-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 min-w-[140px] z-50 animate-fade-in">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleThemeChange(option.value)}
                      className={`w-full px-4 py-2 text-start text-sm flex items-center gap-2 hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 transition-colors ${
                        theme === option.value ? "text-texafab-emerald dark:text-texafab-teal font-semibold bg-texafab-emerald/5 dark:bg-texafab-teal/10" : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      <option.icon className="w-4 h-4" />
                      {language === "ar" ? option.labelAr : option.labelEn}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:flex h-10 px-4 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal font-medium">
                {language === "ar" ? "تسجيل الدخول" : "Sign In"}
              </Button>
            </Link>
            
            <Link to="/register">
              <Button className="hidden sm:flex h-10 px-6 bg-gradient-to-r from-texafab-emerald to-texafab-emerald/90 hover:from-texafab-emerald/90 hover:to-texafab-emerald text-white font-semibold shadow-lg shadow-texafab-emerald/20 hover:shadow-texafab-emerald/30 transition-all rounded-full">
                {language === "ar" ? "ابدأ مجاناً" : "Start Free"}
                <ChevronRight className="w-4 h-4 ms-1" />
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="container mx-auto px-4 py-6 space-y-2">
          {[
            { href: "/features", label: language === "ar" ? "الميزات" : "Features" },
            { href: "/comparison", label: language === "ar" ? "لماذا TexaFab؟" : "Why TexaFab?" },
            { href: "/workflow", label: language === "ar" ? "سير العمل" : "Workflow" },
            { href: "/container-tracking", label: language === "ar" ? "تتبع الكونتينرات" : "Container Tracking" },
            { href: "/roll-management", label: language === "ar" ? "إدارة الرولونات" : "Roll Management" },
            { href: "/pos-system", label: language === "ar" ? "نقاط البيع" : "POS System" },
            { href: "/agents-dealers", label: language === "ar" ? "الوكلاء" : "Agents & Dealers" },
            { href: "/reports-analytics", label: language === "ar" ? "التقارير" : "Reports" },
            { href: "/shipping", label: language === "ar" ? "الشحن والتوصيل" : "Shipping" },
            { href: "/pricing", label: language === "ar" ? "الأسعار" : "Pricing" },
            { href: "/contact", label: language === "ar" ? "تواصل معنا" : "Contact" },
          ].map((item) => (
            <Link 
              key={item.href}
              to={item.href} 
              className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 rounded-xl font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
            <p className="text-sm text-gray-500 dark:text-gray-400 px-2">{t("nav.contact") === "تواصل معنا" ? "اختر اللغة" : "Select Language"}</p>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <Button
                  key={lang}
                  variant={language === lang ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`justify-center ${language === lang ? "bg-texafab-emerald hover:bg-texafab-emerald/90" : ""}`}
                >
                  {languageNames[lang]}
                </Button>
              ))}
            </div>
            
            {/* Theme Toggle for Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 px-2 mb-2">{language === "ar" ? "اختر المظهر" : "Select Theme"}</p>
              <div className="grid grid-cols-3 gap-2">
                {themeOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={theme === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      handleThemeChange(option.value);
                    }}
                    className={`justify-center ${theme === option.value ? "bg-texafab-emerald hover:bg-texafab-emerald/90" : ""}`}
                  >
                    <option.icon className="w-4 h-4 me-1" />
                    {language === "ar" ? option.labelAr : option.labelEn}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full border-texafab-emerald text-texafab-emerald">
                  {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex-1">
                <Button className="w-full bg-texafab-emerald hover:bg-texafab-emerald/90 text-white">
                  {language === "ar" ? "ابدأ مجاناً" : "Start Free"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
