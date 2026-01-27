import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MCLogo } from "@/components/medcore/MCLogo";
import {
  Heart,
  Stethoscope,
  Activity,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Globe,
  Loader2,
  Shield,
  Users,
  Calendar,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

// Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Apple Icon Component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const translations = {
  en: {
    signIn: "Sign In",
    welcomeBack: "Welcome back! Sign in to your MedCore account",
    emailAddress: "Email Address",
    enterEmail: "Enter your email",
    password: "Password",
    enterPassword: "Enter your password",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    or: "or continue with",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    sendMagicLink: "Sign in with Magic Link",
    dontHaveAccount: "Don't have an account?",
    createAccount: "Create account",
    trySystemFirst: "Want to explore first?",
    tryWithoutSignup: "Try without signing up",
    heroTitle: "MedCore - First Healthcare ERP",
    heroSubtitle: "The world's first system designed specifically for healthcare institutions",
    featureEmr: "Electronic Medical Records",
    featureEmrDesc: "Complete patient records with clinical history",
    featureScheduling: "Smart Scheduling",
    featureSchedulingDesc: "Intelligent appointment management",
    featureSecurity: "HIPAA Compliant",
    featureSecurityDesc: "Enterprise-grade security standards",
    institutions: "Institutions",
    countries: "Countries",
    uptime: "Uptime",
    slogan: "#1 Choice in Europe & UK",
    magicLinkSent: "Sent! Check your email",
    invalidCredentials: "Invalid email or password",
    loginError: "Error during login",
    pleaseEnterEmail: "Please enter your email first",
    magicLinkError: "Error sending magic link",
    magicLinkSuccess: "Magic link sent to your email",
    googleError: "Error signing in with Google",
    appleError: "Error signing in with Apple",
  },
  ar: {
    signIn: "تسجيل الدخول",
    welcomeBack: "مرحباً بعودتك! سجل دخولك إلى حسابك في ميد كور",
    emailAddress: "البريد الإلكتروني",
    enterEmail: "أدخل بريدك الإلكتروني",
    password: "كلمة المرور",
    enterPassword: "أدخل كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    rememberMe: "تذكرني",
    or: "أو تابع باستخدام",
    continueWithGoogle: "المتابعة بواسطة Google",
    continueWithApple: "المتابعة بواسطة Apple",
    sendMagicLink: "الدخول برابط سحري",
    dontHaveAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
    trySystemFirst: "هل تريد الاستكشاف أولاً؟",
    tryWithoutSignup: "جرب بدون تسجيل",
    heroTitle: "ميد كور - أول نظام ERP للرعاية الصحية",
    heroSubtitle: "أول نظام عالمي مصمم خصيصاً للمؤسسات الصحية",
    featureEmr: "السجلات الطبية الإلكترونية",
    featureEmrDesc: "سجلات المرضى الكاملة مع التاريخ السريري",
    featureScheduling: "جدولة ذكية",
    featureSchedulingDesc: "إدارة المواعيد بالذكاء الاصطناعي",
    featureSecurity: "متوافق مع HIPAA",
    featureSecurityDesc: "معايير أمان على مستوى المؤسسات",
    institutions: "مؤسسة صحية",
    countries: "دولة",
    uptime: "وقت التشغيل",
    slogan: "الخيار الأول في أوروبا والمملكة المتحدة",
    magicLinkSent: "تم الإرسال! تحقق من بريدك",
    invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    loginError: "حدث خطأ أثناء تسجيل الدخول",
    pleaseEnterEmail: "يرجى إدخال البريد الإلكتروني أولاً",
    magicLinkError: "حدث خطأ أثناء إرسال رابط الدخول",
    magicLinkSuccess: "تم إرسال رابط الدخول إلى بريدك الإلكتروني",
    googleError: "حدث خطأ أثناء تسجيل الدخول بـ Google",
    appleError: "حدث خطأ أثناء تسجيل الدخول بـ Apple",
  },
  tr: {
    signIn: "Giriş Yap",
    welcomeBack: "Tekrar hoşgeldiniz! MedCore hesabınıza giriş yapın",
    emailAddress: "E-posta Adresi",
    enterEmail: "E-postanızı girin",
    password: "Şifre",
    enterPassword: "Şifrenizi girin",
    forgotPassword: "Şifremi unuttum?",
    rememberMe: "Beni hatırla",
    or: "veya şununla devam et",
    continueWithGoogle: "Google ile devam et",
    continueWithApple: "Apple ile devam et",
    sendMagicLink: "Sihirli link ile giriş yap",
    dontHaveAccount: "Hesabınız yok mu?",
    createAccount: "Hesap oluştur",
    trySystemFirst: "Önce keşfetmek ister misiniz?",
    tryWithoutSignup: "Kayıt olmadan deneyin",
    heroTitle: "MedCore - İlk Sağlık ERP'si",
    heroSubtitle: "Sağlık kuruluşları için özel olarak tasarlanmış ilk sistem",
    featureEmr: "Elektronik Sağlık Kayıtları",
    featureEmrDesc: "Klinik geçmişli tam hasta kayıtları",
    featureScheduling: "Akıllı Planlama",
    featureSchedulingDesc: "Yapay zeka destekli randevu yönetimi",
    featureSecurity: "HIPAA Uyumlu",
    featureSecurityDesc: "Kurumsal düzeyde güvenlik standartları",
    institutions: "Kurum",
    countries: "Ülke",
    uptime: "Çalışma Süresi",
    slogan: "Avrupa ve İngiltere'de #1 Tercih",
    magicLinkSent: "Gönderildi! E-postanızı kontrol edin",
    invalidCredentials: "Geçersiz e-posta veya şifre",
    loginError: "Giriş sırasında hata",
    pleaseEnterEmail: "Önce e-postanızı girin",
    magicLinkError: "Link gönderilirken hata",
    magicLinkSuccess: "Link e-postanıza gönderildi",
    googleError: "Google ile giriş hatası",
    appleError: "Apple ile giriş hatası",
  },
};

type TranslationKey = keyof typeof translations.en;

export default function MCLoginPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const t = translations[language as keyof typeof translations] || translations.en;

  // Check for existing session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/medcore');
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/medcore');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        alert(error.message.includes('Invalid') ? t.invalidCredentials : t.loginError);
        return;
      }

      navigate('/medcore');
    } catch (err) {
      console.error('Login exception:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      alert(t.pleaseEnterEmail);
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/medcore`,
        },
      });

      if (error) {
        alert(t.magicLinkError);
        return;
      }

      setMagicLinkSent(true);
      alert(t.magicLinkSuccess);
    } catch (err) {
      console.error('Magic link error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setOauthLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/medcore/login`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Google OAuth error:', error);
        alert(t.googleError);
      }
    } catch (err) {
      console.error('Google OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setOauthLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/medcore/login`,
        },
      });
      
      if (error) {
        console.error('Apple OAuth error:', error);
        alert(t.appleError);
      }
    } catch (err) {
      console.error('Apple OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const features = [
    {
      icon: Heart,
      title: t.featureEmr,
      desc: t.featureEmrDesc,
    },
    {
      icon: Calendar,
      title: t.featureScheduling,
      desc: t.featureSchedulingDesc,
    },
    {
      icon: Shield,
      title: t.featureSecurity,
      desc: t.featureSecurityDesc,
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "tr", name: "Türkçe" },
  ];

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-6 lg:px-12 bg-white dark:bg-slate-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/medcore" className="inline-flex items-center gap-3 mb-8">
            <MCLogo className="h-11 w-auto" showText={false} animated={false} />
            <div className="flex flex-col">
              <div className="flex items-baseline" dir="ltr">
                <span className="text-xl font-black text-emerald-600 tracking-tight">Med</span>
                <span className="text-xl font-black text-red-500 tracking-tight">Core</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">{t.slogan}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              {t.signIn}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {t.welcomeBack}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-200">
                {t.emailAddress}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t.enterEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ps-10 h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 dark:text-slate-200">
                  {t.password}
                </Label>
                <Link
                  to="/medcore/forgot-password"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  {t.forgotPassword}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.enterPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ps-10 pe-10 h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
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
                className="border-slate-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
              >
                {t.rememberMe}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {t.signIn}
                  <Arrow className={`w-4 h-4 ${dir === "rtl" ? "me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                {t.or}
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              disabled={oauthLoading || isLoading}
              className="w-full h-11 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <GoogleIcon className="w-5 h-5 me-3" />
              )}
              {t.continueWithGoogle}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleAppleLogin}
              disabled={oauthLoading || isLoading}
              className="w-full h-11 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <AppleIcon className="w-5 h-5 me-3" />
              )}
              {t.continueWithApple}
            </Button>

            {/* Magic Link */}
            <Button
              type="button"
              variant="outline"
              onClick={handleMagicLink}
              disabled={isLoading || oauthLoading}
              className="w-full h-11 border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
            >
              {isLoading && !password ? (
                <Loader2 className="w-4 h-4 me-2 animate-spin text-red-500" />
              ) : (
                <Sparkles className="w-4 h-4 me-2 text-red-500" />
              )}
              {magicLinkSent ? t.magicLinkSent : t.sendMagicLink}
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-slate-600 dark:text-slate-400">
            {t.dontHaveAccount}{" "}
            <Link to="/medcore/register" className="text-emerald-600 font-semibold hover:underline">
              {t.createAccount}
            </Link>
          </p>

          {/* Try Without Account */}
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              {t.trySystemFirst}
            </p>
            <Link
              to="/medcore"
              className="text-emerald-600 font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              {t.tryWithoutSignup}
              <Arrow className={`w-3 h-3 ${dir === "rtl" ? "" : ""}`} />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="text-sm text-slate-500 bg-transparent border-none cursor-pointer focus:outline-none"
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

      {/* Branding Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        {/* Heartbeat Line Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-1/2 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,50 L200,50 L220,20 L240,80 L260,30 L280,70 L300,50 L500,50 L520,10 L540,90 L560,20 L580,80 L600,50 L800,50 L820,15 L840,85 L860,25 L880,75 L900,50 L1200,50"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-4">
              {t.heroTitle}
            </h2>
            <p className="text-white/80 text-lg">
              {t.heroSubtitle}
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
                {t.institutions}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">25+</div>
              <div className="text-white/70 text-sm">
                {t.countries}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-white/70 text-sm">
                {t.uptime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
