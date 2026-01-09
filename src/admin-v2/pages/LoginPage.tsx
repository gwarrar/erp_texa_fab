// ===========================================
// Admin V2 - Login Page
// ===========================================

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminStore';
import { LANGUAGES, LanguageCode } from '../types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Eye, EyeOff, Lock, Mail, Globe, Moon, Sun, Check } from 'lucide-react';

export function LoginPage() {
  const { login, isAuthenticated, isLoading, error, adminLanguage, setAdminLanguage, theme, setTheme, t, getDirection } = useAdmin();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const direction = getDirection();
  const isRTL = direction === 'rtl';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin-v2');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password) {
      setLocalError(isRTL ? 'الرجاء إدخال البريد الإلكتروني وكلمة المرور' : 'Please enter email and password');
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate('/admin-v2');
    }
  };

  const translations = {
    en: {
      title: 'Admin Login',
      subtitle: 'Enter your credentials to access the admin panel',
      email: 'Email',
      emailPlaceholder: 'admin@example.com',
      password: 'Password',
      passwordPlaceholder: '••••••••',
      login: 'Login',
      loggingIn: 'Logging in...',
      invalidCredentials: 'Invalid email or password',
    },
    ar: {
      title: 'تسجيل الدخول',
      subtitle: 'أدخل بيانات الاعتماد للوصول إلى لوحة التحكم',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'admin@example.com',
      password: 'كلمة المرور',
      passwordPlaceholder: '••••••••',
      login: 'تسجيل الدخول',
      loggingIn: 'جاري تسجيل الدخول...',
      invalidCredentials: 'بريد إلكتروني أو كلمة مرور غير صحيحة',
    }
  };

  const text = translations[isRTL ? 'ar' : 'en'];

  return (
    <div 
      className={cn(
        "min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4",
        isRTL && "font-arabic"
      )}
      dir={direction}
    >
      {/* Language & Theme Toggle */}
      <div className={cn("absolute top-4 flex gap-2", isRTL ? "left-4" : "right-4")}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
            {Object.values(LANGUAGES).map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setAdminLanguage(lang.code)}
                className="gap-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
                {adminLanguage === lang.code && <Check size={16} className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          {/* Logo */}
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Lock size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {text.title}
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {text.subtitle}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {(error || localError) && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                {error || localError}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                {text.email}
              </Label>
              <div className="relative">
                <Mail className={cn(
                  "absolute top-1/2 -translate-y-1/2 text-gray-400",
                  isRTL ? "right-3" : "left-3"
                )} size={18} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={text.emailPlaceholder}
                  className={cn("h-11", isRTL ? "pr-10" : "pl-10")}
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                {text.password}
              </Label>
              <div className="relative">
                <Lock className={cn(
                  "absolute top-1/2 -translate-y-1/2 text-gray-400",
                  isRTL ? "right-3" : "left-3"
                )} size={18} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={text.passwordPlaceholder}
                  className={cn("h-11", isRTL ? "pr-10 pl-10" : "pl-10 pr-10")}
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                    isRTL ? "left-3" : "right-3"
                  )}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? text.loggingIn : text.login}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Next Revolution for Software Development
      </div>
    </div>
  );
}
