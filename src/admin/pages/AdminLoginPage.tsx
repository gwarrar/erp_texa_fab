import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  AlertTriangle,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '../context/AuthContext';
import { sanitizeInput } from '../utils/security';
import { useI18n } from '@/lib/i18n';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  const { t, isRTL } = useI18n();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = password; // Don't sanitize password as it may contain special chars

    if (!sanitizedEmail || !sanitizedPassword) {
      setError(t.messages.requiredField);
      setIsLoading(false);
      return;
    }

    const result = await login(sanitizedEmail, sanitizedPassword);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin');
      }, 1000);
    } else {
      setError(result.error || t.auth.loginFailed);
    }

    setIsLoading(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-4">
      {/* Language Switcher - Top Right */}
      <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-20`}>
        <LanguageSwitcher />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 ${isRTL ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-teal-500/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 ${isRTL ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl`} />
      </div>

      <Card className="w-full max-w-md relative z-10 bg-gray-900/80 border-gray-800 backdrop-blur-xl">
        <CardHeader className="text-center pb-2">
          {/* Logo */}
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-white">
            TexaCore {t.navigation.dashboard}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {t.security.title}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          {/* Security Notice */}
          <div className="mb-6 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20">
            <div className="flex items-center gap-2 text-teal-400 text-sm">
              <Lock className="h-4 w-4" />
              <span>{t.security.twoFactor}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                {t.auth.email}
              </Label>
              <div className="relative">
                <Mail className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500`} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className={`${isRTL ? 'pr-10' : 'pl-10'} bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500/20`}
                  dir="ltr"
                  disabled={isLoading || success}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                {t.auth.password}
              </Label>
              <div className="relative">
                <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500`} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'} bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500/20`}
                  dir="ltr"
                  disabled={isLoading || success}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors`}
                  disabled={isLoading || success}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive" className="bg-red-900/30 border-red-800 text-red-300">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Success Message */}
            {success && (
              <Alert className="bg-green-900/30 border-green-800 text-green-300">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>{t.auth.loginSuccess}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium py-5"
              disabled={isLoading || success}
            >
              {isLoading ? (
                <>
                  <Loader2 className={`h-5 w-5 animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.common.loading}
                </>
              ) : success ? (
                <>
                  <CheckCircle className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.auth.loginSuccess}
                </>
              ) : (
                <>
                  <Shield className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.auth.login}
                </>
              )}
            </Button>
          </form>

          {/* Security Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3" />
                <span>256-bit</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>{t.security.title}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-xs text-gray-600">
        <p>© 2024 TexaCore by Next Revolution</p>
        <p className="mt-1">{t.security.title}</p>
      </div>
    </div>
  );
}
