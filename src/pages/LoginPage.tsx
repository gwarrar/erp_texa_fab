import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
      titleAr: "محاسبة متكاملة",
      titleEn: "Full Accounting",
      descAr: "إدارة مالية شاملة مع تقارير احترافية",
      descEn: "Complete financial management with professional reports",
    },
    {
      icon: Boxes,
      titleAr: "إدارة المخزون",
      titleEn: "Inventory Management",
      descAr: "تتبع الرولونات والألوان بدقة",
      descEn: "Precise roll and color tracking",
    },
    {
      icon: Zap,
      titleAr: "سرعة فائقة",
      titleEn: "Lightning Fast",
      descAr: "أداء عالي وسرعة استجابة فورية",
      descEn: "High performance with instant response",
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
    <div className="min-h-screen flex" dir={dir}>
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="text-2xl font-black text-texafab-slate dark:text-white">
              ERP<span className="text-texafab-emerald">MAX</span>
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-texafab-slate dark:text-white mb-2">
              {language === "ar" ? "تسجيل الدخول" : "Sign In"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === "ar"
                ? "مرحباً بعودتك! الرجاء إدخال بياناتك"
                : "Welcome back! Please enter your details"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
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
                  {language === "ar" ? "كلمة المرور" : "Password"}
                </Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-texafab-emerald hover:underline"
                >
                  {language === "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={language === "ar" ? "أدخل كلمة المرور" : "Enter your password"}
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
                {language === "ar" ? "تذكرني" : "Remember me"}
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
                  {language === "ar" ? "تسجيل الدخول" : "Sign In"}
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
                {language === "ar" ? "أو" : "or"}
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
            {language === "ar" ? "إرسال رابط سحري بالبريد" : "Send Magic Link"}
          </Button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            {language === "ar" ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
            <Link to="/register" className="text-texafab-emerald font-semibold hover:underline">
              {language === "ar" ? "إنشاء حساب جديد" : "Create Account"}
            </Link>
          </p>

          {/* Try Without Account */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {language === "ar"
                ? "تريد تجربة النظام أولاً؟"
                : "Want to try the system first?"}
            </p>
            <Link
              to="/"
              className="text-texafab-emerald font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              {language === "ar" ? "جرب بدون تسجيل" : "Try without signing up"}
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

      {/* Right Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-texafab-emerald via-teal-600 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-lg text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <span className="text-3xl font-black">E</span>
            </div>
            <h2 className="text-4xl font-black mb-4">
              {language === "ar" ? "نظام ERP الأول للأقمشة" : "First ERP for Textile"}
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
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
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
