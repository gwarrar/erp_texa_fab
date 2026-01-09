import React, { useState, useEffect } from "react";
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

export default function LoginPage() {
  const { language, dir, setLanguage } = useLanguage();
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
        navigate('/');
      }
    };
    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/');
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
        alert(getText({
          ar: error.message.includes('Invalid') ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : "حدث خطأ أثناء تسجيل الدخول",
          en: error.message.includes('Invalid') ? "Invalid email or password" : "Error during login",
          ru: error.message.includes('Invalid') ? "Неверный email или пароль" : "Ошибка при входе",
          uk: error.message.includes('Invalid') ? "Невірний email або пароль" : "Помилка при вході",
          ro: error.message.includes('Invalid') ? "Email sau parolă invalidă" : "Eroare la autentificare",
          pl: error.message.includes('Invalid') ? "Nieprawidłowy email lub hasło" : "Błąd podczas logowania",
          it: error.message.includes('Invalid') ? "Email o password non validi" : "Errore durante l'accesso",
          tr: error.message.includes('Invalid') ? "Geçersiz e-posta veya şifre" : "Giriş sırasında hata"
        }, language));
        return;
      }

      // Redirect to home on successful login
      navigate('/');
    } catch (err) {
      console.error('Login exception:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      alert(getText({
        ar: "يرجى إدخال البريد الإلكتروني أولاً",
        en: "Please enter your email first",
        ru: "Сначала введите email",
        uk: "Спочатку введіть email",
        ro: "Introduceți mai întâi emailul",
        pl: "Najpierw wprowadź email",
        it: "Prima inserisci l'email",
        tr: "Önce e-postanızı girin"
      }, language));
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        alert(getText({
          ar: "حدث خطأ أثناء إرسال رابط الدخول",
          en: "Error sending magic link",
          ru: "Ошибка при отправке ссылки",
          uk: "Помилка при надсиланні посилання",
          ro: "Eroare la trimiterea linkului",
          pl: "Błąd podczas wysyłania linku",
          it: "Errore nell'invio del link",
          tr: "Link gönderilirken hata"
        }, language));
        return;
      }

      setMagicLinkSent(true);
      alert(getText({
        ar: "تم إرسال رابط الدخول إلى بريدك الإلكتروني",
        en: "Magic link sent to your email",
        ru: "Ссылка для входа отправлена на email",
        uk: "Посилання для входу надіслано на email",
        ro: "Linkul a fost trimis pe email",
        pl: "Link został wysłany na email",
        it: "Link inviato alla tua email",
        tr: "Link e-postanıza gönderildi"
      }, language));
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
          redirectTo: `${window.location.origin}/login`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Google OAuth error:', error);
        alert(getText({
          ar: "حدث خطأ أثناء تسجيل الدخول بـ Google",
          en: "Error signing in with Google",
          ru: "Ошибка входа через Google",
          uk: "Помилка входу через Google",
          ro: "Eroare la autentificarea cu Google",
          pl: "Błąd logowania przez Google",
          it: "Errore nell'accesso con Google",
          tr: "Google ile giriş hatası"
        }, language));
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
          redirectTo: `${window.location.origin}/login`,
        },
      });
      
      if (error) {
        console.error('Apple OAuth error:', error);
        alert(getText({
          ar: "حدث خطأ أثناء تسجيل الدخول بـ Apple",
          en: "Error signing in with Apple",
          ru: "Ошибка входа через Apple",
          uk: "Помилка входу через Apple",
          ro: "Eroare la autentificarea cu Apple",
          pl: "Błąd logowania przez Apple",
          it: "Errore nell'accesso con Apple",
          tr: "Apple ile giriş hatası"
        }, language));
      }
    } catch (err) {
      console.error('Apple OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
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
    <div className={`h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side - Left in LTR, Right in RTL */}
      <div className="flex-1 flex flex-col justify-center px-8 py-6 lg:px-12 bg-white dark:bg-gray-900 overflow-y-auto">
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

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              disabled={oauthLoading || isLoading}
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-emerald hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <GoogleIcon className="w-5 h-5 me-3" />
              )}
              {getText(t.continueWithGoogle, language)}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleAppleLogin}
              disabled={oauthLoading || isLoading}
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-slate hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <AppleIcon className="w-5 h-5 me-3" />
              )}
              {getText(t.continueWithApple, language)}
            </Button>

            {/* Magic Link */}
            <Button
              type="button"
              variant="outline"
              onClick={handleMagicLink}
              disabled={isLoading || oauthLoading}
              className="w-full h-11 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-gold hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {isLoading && !password ? (
                <Loader2 className="w-4 h-4 me-2 animate-spin text-texafab-gold" />
              ) : (
                <Sparkles className="w-4 h-4 me-2 text-texafab-gold" />
              )}
              {magicLinkSent 
                ? getText({ ar: "تم الإرسال! تحقق من بريدك", en: "Sent! Check your email", ru: "Отправлено! Проверьте email", uk: "Надіслано! Перевірте email", ro: "Trimis! Verificați emailul", pl: "Wysłano! Sprawdź email", it: "Inviato! Controlla email", tr: "Gönderildi! E-postanızı kontrol edin" }, language)
                : getText(t.sendMagicLink, language)
              }
            </Button>
          </div>

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
