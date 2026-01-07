import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCLogo } from "@/components/fincore/FCLogo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Shield,
  CheckCircle2,
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Login to FinCore",
    welcomeBack: "Welcome Back! 👋",
    subtitle: "Sign in to access your banking dashboard",
    email: "Email Address",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    login: "Sign In",
    noAccount: "Don't have an account?",
    registerNow: "Start Free Trial",
    or: "or",
    secureLogin: "Secure 256-bit SSL Encryption",
    feature1: "Real-time exchange rates",
    feature2: "Multi-currency wallets",
    feature3: "Instant transfers",
    slogan: "The Core of Finance • The Soul of Tech",
  },
  ar: {
    pageTitle: "تسجيل الدخول إلى FinCore",
    welcomeBack: "مرحباً بعودتك! 👋",
    subtitle: "سجل دخولك للوصول إلى لوحة التحكم المصرفية",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    password: "كلمة المرور",
    passwordPlaceholder: "أدخل كلمة المرور",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    registerNow: "ابدأ مجاناً",
    or: "أو",
    secureLogin: "تشفير SSL 256-bit آمن",
    feature1: "أسعار صرف لحظية",
    feature2: "محافظ متعددة العملات",
    feature3: "تحويلات فورية",
    slogan: "جوهر المال • روح التقنية",
  },
  tr: {
    pageTitle: "FinCore'a Giriş",
    welcomeBack: "Tekrar Hoş Geldiniz! 👋",
    subtitle: "Bankacılık panonuza erişmek için giriş yapın",
    email: "E-posta Adresi",
    emailPlaceholder: "E-postanızı girin",
    password: "Şifre",
    passwordPlaceholder: "Şifrenizi girin",
    rememberMe: "Beni hatırla",
    forgotPassword: "Şifremi unuttum?",
    login: "Giriş Yap",
    noAccount: "Hesabınız yok mu?",
    registerNow: "Ücretsiz Deneyin",
    or: "veya",
    secureLogin: "Güvenli 256-bit SSL Şifreleme",
    feature1: "Gerçek zamanlı kurlar",
    feature2: "Çoklu para cüzdanları",
    feature3: "Anında transferler",
    slogan: "Finansın Özü • Teknolojinin Ruhu",
  },
};

const FCLoginPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const t = translations[language as keyof typeof translations] || translations.en;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Connect to your backend API
    // const response = await fetch('YOUR_BACKEND_URL/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password, rememberMe })
    // });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle response and redirect to dashboard
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-slate-950" : "bg-slate-50"
      }`}
      dir={dir}
    >
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/fincore" className="inline-block mb-8">
            <FCLogo size="lg" showSlogan />
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t.welcomeBack}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.email}
              </label>
              <div className="relative">
                <Mail className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full ps-12 pe-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.password}
              </label>
              <div className="relative">
                <Lock className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full ps-12 pe-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-[#0D9488] focus:ring-[#0D9488]"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {t.rememberMe}
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-[#0D9488] hover:text-[#0D9488]/80 font-medium"
              >
                {t.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-gradient-to-r from-[#0D9488] to-[#10B981] hover:from-[#0D9488]/90 hover:to-[#10B981]/90 text-white font-semibold rounded-xl shadow-lg shadow-[#0D9488]/20 transition-all"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {t.login}
                  <Arrow className="w-5 h-5 ms-2" />
                </>
              )}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              {t.secureLogin}
            </div>

            {/* Register Link */}
            <p className="text-center text-slate-600 dark:text-slate-400">
              {t.noAccount}{" "}
              <Link
                to="/fincore/register"
                className="text-[#0D9488] hover:text-[#0D9488]/80 font-semibold"
              >
                {t.registerNow}
              </Link>
            </p>
          </motion.form>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0D9488] via-[#10B981] to-[#0D9488] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-40 left-40 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Large Logo Icon */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-white">F</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">FinCore</h2>
            <p className="text-lg text-white/80 mb-12">{t.slogan}</p>

            {/* Features */}
            <div className="space-y-4 text-start max-w-xs mx-auto">
              {[t.feature1, t.feature2, t.feature3].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FCLoginPage;
