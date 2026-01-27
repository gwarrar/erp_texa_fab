import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BarChart3,
  Boxes,
  Zap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Globe,
  Loader2,
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
    welcomeBack: "Welcome back to NexaCore",
    emailAddress: "Email Address",
    enterEmail: "john@company.com",
    password: "Password",
    enterPassword: "Enter your password",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    or: "or",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    sendMagicLink: "Send Magic Link",
    dontHaveAccount: "Don't have an account?",
    createAccount: "Create account",
    trySystemFirst: "Want to try first?",
    tryWithoutSignup: "Explore NexaCore",
    tagline: "Enterprise Business Management",
    
    // Features
    featureAccounting: "Full Accounting",
    featureAccountingDesc: "Multi-currency ledger with automated reconciliation",
    featureInventory: "Inventory Control",
    featureInventoryDesc: "Real-time stock tracking across locations",
    featureFast: "AI-Powered Insights",
    featureFastDesc: "Smart analytics for better decisions",
    
    // Errors
    invalidCredentials: "Invalid email or password",
    errorLogin: "Error during login",
  },
  ar: {
    signIn: "تسجيل الدخول",
    welcomeBack: "مرحباً بعودتك إلى NexaCore",
    emailAddress: "البريد الإلكتروني",
    enterEmail: "ahmed@company.com",
    password: "كلمة المرور",
    enterPassword: "أدخل كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    rememberMe: "تذكرني",
    or: "أو",
    continueWithGoogle: "المتابعة مع Google",
    continueWithApple: "المتابعة مع Apple",
    sendMagicLink: "إرسال رابط سحري",
    dontHaveAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
    trySystemFirst: "تريد التجربة أولاً؟",
    tryWithoutSignup: "استكشف NexaCore",
    tagline: "إدارة أعمال المؤسسات",
    
    // Features
    featureAccounting: "محاسبة كاملة",
    featureAccountingDesc: "دفتر أستاذ متعدد العملات مع تسوية آلية",
    featureInventory: "التحكم في المخزون",
    featureInventoryDesc: "تتبع المخزون في الوقت الفعلي عبر المواقع",
    featureFast: "رؤى مدعومة بالذكاء",
    featureFastDesc: "تحليلات ذكية لقرارات أفضل",
    
    // Errors
    invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    errorLogin: "حدث خطأ أثناء تسجيل الدخول",
  },
};

export default function NCLoginPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  // Check for existing session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/nexacore');
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/nexacore');
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
        alert(isRTL ? t.invalidCredentials : t.invalidCredentials);
        return;
      }

      navigate('/nexacore');
    } catch (err) {
      console.error('Login exception:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      alert(isRTL ? "يرجى إدخال البريد الإلكتروني أولاً" : "Please enter your email first");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/nexacore`,
        },
      });

      if (error) {
        alert(isRTL ? "حدث خطأ أثناء إرسال رابط الدخول" : "Error sending magic link");
        return;
      }

      setMagicLinkSent(true);
      alert(isRTL ? "تم إرسال رابط الدخول إلى بريدك الإلكتروني" : "Magic link sent to your email");
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
          redirectTo: `${window.location.origin}/nexacore/login`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        alert(isRTL ? "حدث خطأ أثناء تسجيل الدخول بـ Google" : "Error signing in with Google");
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
          redirectTo: `${window.location.origin}/nexacore/login`,
        },
      });
      
      if (error) {
        alert(isRTL ? "حدث خطأ أثناء تسجيل الدخول بـ Apple" : "Error signing in with Apple");
      }
    } catch (err) {
      console.error('Apple OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const features = [
    {
      icon: BarChart3,
      title: t.featureAccounting,
      desc: t.featureAccountingDesc,
    },
    {
      icon: Boxes,
      title: t.featureInventory,
      desc: t.featureInventoryDesc,
    },
    {
      icon: Zap,
      title: t.featureFast,
      desc: t.featureFastDesc,
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  return (
    <div className={`h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-6 lg:px-12 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/nexacore" className="inline-flex items-center gap-3 mb-8">
            <div className="relative group">
              {/* NexaCore Logo */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center drop-shadow-lg group-hover:drop-shadow-xl transition-all">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                NexaCore
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">{t.tagline}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              {t.signIn}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t.welcomeBack}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-gray-200">
                {t.emailAddress}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t.enterEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 dark:text-gray-200">
                  {t.password}
                </Label>
                <Link
                  to="/nexacore/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {t.forgotPassword}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.enterPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ps-10 pe-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 rounded-xl"
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
                {t.rememberMe}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {t.signIn}
                  <Arrow className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
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
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
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
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
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
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {isLoading && !password ? (
                <Loader2 className="w-4 h-4 me-2 animate-spin text-indigo-500" />
              ) : (
                <Sparkles className="w-4 h-4 me-2 text-indigo-500" />
              )}
              {magicLinkSent 
                ? (isRTL ? "تم الإرسال! تحقق من بريدك" : "Sent! Check your email")
                : t.sendMagicLink
              }
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            {t.dontHaveAccount}{" "}
            <Link to="/nexacore/register" className="text-blue-600 font-semibold hover:underline">
              {t.createAccount}
            </Link>
          </p>

          {/* Try Without Account */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {t.trySystemFirst}
            </p>
            <Link
              to="/nexacore"
              className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              {t.tryWithoutSignup}
              <Arrow className={`w-3 h-3 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={language}
              onChange={(e) => {
                const newLang = e.target.value;
                window.location.href = `/nexacore/login?lang=${newLang}`;
              }}
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

      {/* Branding Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-4">
              {isRTL ? (
                <>نظام <span dir="ltr" className="inline-block">NexaCore</span> الأول للأعمال</>
              ) : (
                "NexaCore - Enterprise ERP"
              )}
            </h2>
            <p className="text-white/80 text-lg">
              {isRTL
                ? "النظام الأول عالمياً المصمم خصيصاً لإدارة أعمال المؤسسات"
                : "The world's leading system designed specifically for enterprise business management"}
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
              <div className="text-3xl font-black">10K+</div>
              <div className="text-white/70 text-sm">
                {isRTL ? "شركة" : "Companies"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">50+</div>
              <div className="text-white/70 text-sm">
                {isRTL ? "دولة" : "Countries"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-white/70 text-sm">
                {isRTL ? "وقت التشغيل" : "Uptime"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
