import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { getText, loginPageTranslations as t } from "@/lib/translations/pages";
import {
  Calculator,
  Boxes,
  Zap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function LoginPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  const handleMagicLink = () => {
    // Handle magic link logic
  };

  const features = [
    {
      icon: Calculator,
      title: getText(t.featureAccounting, language),
      desc: getText(t.featureAccountingDesc, language),
    },
    {
      icon: Boxes,
      title: getText(t.featureInventory, language),
      desc: getText(t.featureInventoryDesc, language),
    },
    {
      icon: Zap,
      title: getText(t.featureFast, language),
      desc: getText(t.featureFastDesc, language),
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
    { code: "uk", name: "Українська" },
    { code: "tr", name: "Türkçe" },
    { code: "ro", name: "Română" },
    { code: "pl", name: "Polski" },
    { code: "it", name: "Italiano" },
  ];

  return (
    <div className={`min-h-screen flex ${dir === "rtl" ? "flex-row-reverse rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side - Left in LTR, Right in RTL */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <div className="relative group">
              {/* TexaCore Logo - Hexagon with Thread */}
              <svg width="44" height="44" viewBox="0 0 44 44" className="drop-shadow-lg group-hover:drop-shadow-xl transition-all">
                {/* Hexagon Background */}
                <defs>
                  <linearGradient id="loginHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                  <linearGradient id="loginThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Hexagon Shape */}
                <polygon 
                  points="22,2 40,12 40,32 22,42 4,32 4,12" 
                  fill="url(#loginHexGradient)"
                  className="group-hover:filter group-hover:brightness-110 transition-all"
                />
                {/* Thread/Fabric Wave */}
                <path 
                  d="M12,22 Q17,14 22,22 T32,22" 
                  stroke="url(#loginThreadGradient)" 
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
              <div className="flex items-baseline" dir="ltr">
                <span className="text-xl font-black text-texafab-emerald tracking-tight">Texa</span>
                <span className="text-xl font-black text-texafab-gold tracking-tight">Core</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">{language === "ar" ? "الخيار الأول في أوروبا والخليج" : "#1 Choice in Europe & Gulf"}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-texafab-slate dark:text-white mb-2">
              {getText(t.signIn, language)}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {getText(t.welcomeBack, language)}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-texafab-slate dark:text-gray-200">
                {getText(t.emailAddress, language)}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder={getText(t.enterEmail, language)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-texafab-slate dark:text-gray-200">
                  {getText(t.password, language)}
                </Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-texafab-emerald hover:underline"
                >
                  {getText(t.forgotPassword, language)}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={getText(t.enterPassword, language)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ps-10 pe-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
              >
                {getText(t.rememberMe, language)}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold rounded-xl"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {getText(t.signIn, language)}
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">
                {getText(t.or, language)}
              </span>
            </div>
          </div>

          {/* Magic Link */}
          <Button
            type="button"
            variant="outline"
            onClick={handleMagicLink}
            className="w-full h-12 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-emerald rounded-xl font-medium"
          >
            <Sparkles className="w-4 h-4 me-2 text-texafab-gold" />
            {getText(t.sendMagicLink, language)}
          </Button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            {getText(t.dontHaveAccount, language)}{" "}
            <Link to="/register" className="text-texafab-emerald font-semibold hover:underline">
              {getText(t.createAccount, language)}
            </Link>
          </p>

          {/* Try Without Account */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {getText(t.trySystemFirst, language)}
            </p>
            <Link
              to="/"
              className="text-texafab-emerald font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              {getText(t.tryWithoutSignup, language)}
              <ArrowRight className={`w-3 h-3 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="text-sm text-gray-500 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Branding Side - Right in LTR, Left in RTL */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-texafab-emerald via-teal-600 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <svg width="64" height="64" viewBox="0 0 44 44" className={`drop-shadow-xl mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <defs>
                <linearGradient id="loginSideHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="loginSideThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <polygon 
                points="22,2 40,12 40,32 22,42 4,32 4,12" 
                fill="url(#loginSideHexGradient)"
              />
              <path 
                d="M12,22 Q17,14 22,22 T32,22" 
                stroke="url(#loginSideThreadGradient)" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
              />
              <circle cx="22" cy="22" r="4" fill="white" opacity="0.95"/>
            </svg>
            <h2 className="text-4xl font-black mb-4">
              {language === "ar" ? (
                <>نظام <span dir="ltr" className="inline-block">TexaCore</span> الأول للأقمشة</>
              ) : (
                "TexaCore - First ERP for Textile"
              )}
            </h2>
            <p className="text-white/80 text-lg">
              {language === "ar"
                ? "النظام الأول عالمياً المصمم خصيصاً لشركات الأقمشة والمنسوجات"
                : "The world's first system designed specifically for textile companies"}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className={`flex items-start gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={dir === "rtl" ? "text-right" : "text-left"}>
                    <h3 className="font-bold mb-1 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className={`mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20 ${dir === "rtl" ? "text-center" : ""}`}>
            <div>
              <div className="text-3xl font-black">500+</div>
              <div className="text-white/70 text-sm">
                {language === "ar" ? "شركة" : "Companies"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">15+</div>
              <div className="text-white/70 text-sm">
                {language === "ar" ? "دولة" : "Countries"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-white/70 text-sm">
                {language === "ar" ? "وقت التشغيل" : "Uptime"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
