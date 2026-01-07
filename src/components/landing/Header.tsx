import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, languageNames, Language } from "./LanguageContext";
import { useTheme, Theme } from "./ThemeContext";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronRight, ChevronDown, Package, ScanBarcode, ShoppingCart, Users, BarChart3, Truck, Warehouse, Scissors, Calculator, RefreshCw, ShoppingBag, Heart, Factory, Shirt, Brain, Sun, Moon, Monitor, Handshake } from "lucide-react";

export function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  // Check if announcement bar is visible
  useEffect(() => {
    const checkAnnouncement = () => {
      const dismissed = sessionStorage.getItem('announcement_dismissed');
      const savedData = localStorage.getItem('texacore_admin_data');
      let isActive = true;
      
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData);
          isActive = parsed.announcementBar?.isActive ?? true;
        } catch (e) {}
      }
      
      setAnnouncementVisible(!dismissed && isActive);
    };
    
    checkAnnouncement();
    
    // Listen for storage changes
    window.addEventListener('storage', checkAnnouncement);
    
    // Custom event for same-tab updates
    const handleDismiss = () => setAnnouncementVisible(false);
    const handleShown = () => {
      const dismissed = sessionStorage.getItem('announcement_dismissed');
      if (!dismissed) {
        setAnnouncementVisible(true);
      }
    };
    window.addEventListener('announcement-dismissed', handleDismiss);
    window.addEventListener('announcement-shown', handleShown);
    
    return () => {
      window.removeEventListener('storage', checkAnnouncement);
      window.removeEventListener('announcement-dismissed', handleDismiss);
      window.removeEventListener('announcement-shown', handleShown);
    };
  }, []);

  const themeOptions: { value: Theme; labelKey: string; icon: typeof Sun }[] = [
    { value: "light", labelKey: "theme.light", icon: Sun },
    { value: "dark", labelKey: "theme.dark", icon: Moon },
    { value: "system", labelKey: "theme.auto", icon: Monitor },
  ];

  const solutionLinks = [
    { href: "/container-tracking", labelKey: "solutions.containerTracking", icon: Package },
    { href: "/roll-management", labelKey: "solutions.rollManagement", icon: ScanBarcode },
    { href: "/warehouse-management", labelKey: "solutions.warehouseManagement", icon: Warehouse },
    { href: "/fabric-management", labelKey: "solutions.fabricManagement", icon: Scissors },
    { href: "/pos-system", labelKey: "solutions.posSystem", icon: ShoppingCart },
    { href: "/workflow-complete", labelKey: "solutions.completeWorkflow", icon: RefreshCw },
    { href: "/ecommerce", labelKey: "solutions.ecommerce", icon: ShoppingBag },
    { href: "/crm", labelKey: "solutions.crm", icon: Heart },
    { href: "/employee-management", labelKey: "solutions.employeeManagement", icon: Users },
    { href: "/accounting", labelKey: "solutions.accounting", icon: Calculator },
    { href: "/fabric-manufacturing", labelKey: "solutions.fabricManufacturing", icon: Factory },
    { href: "/garment-manufacturing", labelKey: "solutions.garmentManufacturing", icon: Shirt },
    { href: "/ai-analytics", labelKey: "solutions.aiAnalytics", icon: Brain },
    { href: "/reports-analytics", labelKey: "solutions.reportsAnalytics", icon: BarChart3 },
    { href: "/shipping", labelKey: "solutions.shipping", icon: Truck },
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
    <header className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
      announcementVisible ? 'top-[40px]' : 'top-0'
    } ${
      isScrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border-b border-gray-100 dark:border-gray-800" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
            <div className="relative group">
              {/* TexaCore Logo - Hexagon with Thread */}
              <svg width="44" height="44" viewBox="0 0 44 44" className="drop-shadow-lg group-hover:drop-shadow-xl transition-all">
                {/* Hexagon Background */}
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                  <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Hexagon Shape */}
                <polygon 
                  points="22,2 40,12 40,32 22,42 4,32 4,12" 
                  fill="url(#hexGradient)"
                  className="group-hover:filter group-hover:brightness-110 transition-all"
                />
                {/* Thread/Fabric Wave */}
                <path 
                  d="M12,22 Q17,14 22,22 T32,22" 
                  stroke="url(#threadGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                />
                {/* Core Dot */}
                <circle cx="22" cy="22" r="4" fill="white" opacity="0.95"/>
              </svg>
              <div className="absolute -inset-1 bg-texafab-emerald/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              {dir === "rtl" ? (
                <div className="flex items-baseline">
                  <span className="text-xl font-black text-texafab-gold tracking-tight">Core</span>
                  <span className="text-xl font-black text-texafab-emerald tracking-tight">Texa</span>
                </div>
              ) : (
                <div className="flex items-baseline">
                  <span className="text-xl font-black text-texafab-emerald tracking-tight">Texa</span>
                  <span className="text-xl font-black text-texafab-gold tracking-tight">Core</span>
                </div>
              )}
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wide whitespace-nowrap max-w-[100px] sm:max-w-none overflow-hidden text-ellipsis">{t("hero.tagline")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" dir="ltr">
            <Link 
              to="/features" 
              className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group whitespace-nowrap"
            >
              {t("nav.features")}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/comparison" 
              className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group whitespace-nowrap"
            >
              {t("nav.whyTexaCore")}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/workflow" 
              className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group whitespace-nowrap"
            >
              {t("nav.workflow")}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative solutions-dropdown">
              <button
                onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
                className="solutions-trigger relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group flex items-center gap-1 whitespace-nowrap"
              >
                {t("nav.solutions")}
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
                    <span className="text-sm font-bold">{t("nav.viewAllSolutions")}</span>
                  </Link>
                  {solutionLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={() => setIsSolutionsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{t(link.labelKey)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group whitespace-nowrap"
            >
              {t("nav.pricing")}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal transition-colors group whitespace-nowrap"
            >
              {t("nav.contact")}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-texafab-emerald rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link 
              to="/agents-dealers" 
              className="relative flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold rounded-full transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <Handshake className="w-4 h-4" />
              {t("nav.becomeAgent")}
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
                      {t(option.labelKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:flex h-10 px-4 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/10 dark:hover:bg-texafab-teal/10 font-medium">
                {t("nav.signIn")}
              </Button>
            </Link>
            
            <Link to="/register">
              <Button className="hidden sm:flex h-10 px-6 bg-gradient-to-r from-texafab-emerald to-texafab-emerald/90 hover:from-texafab-emerald/90 hover:to-texafab-emerald text-white font-semibold shadow-lg shadow-texafab-emerald/20 hover:shadow-texafab-emerald/30 transition-all rounded-full">
                {t("nav.startFree")}
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
            { href: "/features", labelKey: "nav.features" },
            { href: "/comparison", labelKey: "nav.whyTexaCore" },
            { href: "/workflow", labelKey: "nav.workflow" },
            { href: "/container-tracking", labelKey: "solutions.containerTracking" },
            { href: "/roll-management", labelKey: "solutions.rollManagement" },
            { href: "/pos-system", labelKey: "solutions.posSystem" },
            { href: "/agents-dealers", labelKey: "solutions.agentsDealers" },
            { href: "/reports-analytics", labelKey: "solutions.reportsAnalytics" },
            { href: "/shipping", labelKey: "solutions.shipping" },
            { href: "/pricing", labelKey: "nav.pricing" },
            { href: "/contact", labelKey: "nav.contact" },
            { href: "/agents-dealers", labelKey: "nav.becomeAgent" },
          ].map((item) => (
            <Link 
              key={item.href}
              to={item.href} 
              className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-texafab-emerald dark:hover:text-texafab-teal hover:bg-texafab-emerald/5 dark:hover:bg-texafab-teal/10 rounded-xl font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
            <p className="text-sm text-gray-500 dark:text-gray-400 px-2">{t("nav.selectLanguage")}</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400 px-2 mb-2">{t("nav.selectTheme")}</p>
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
                    {t(option.labelKey)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full border-texafab-emerald text-texafab-emerald">
                  {t("nav.signIn")}
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex-1">
                <Button className="w-full bg-texafab-emerald hover:bg-texafab-emerald/90 text-white">
                  {t("nav.startFree")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
