// ===========================================
// Admin V2 - Security Settings Page
// ===========================================

import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminStore';
import { cn } from '@/lib/utils';
import {
  Shield,
  Key,
  Eye,
  EyeOff,
  Lock,
  AlertTriangle,
  Check,
  Loader2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function SecuritySettingsPage() {
  const { t, getDirection, user } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error(isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      toast.error(isRTL ? 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' : 'Password must be at least 8 characters');
      return;
    }

    setIsChanging(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(isRTL ? 'تم تغيير كلمة المرور بنجاح' : 'Password changed successfully');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsChanging(false);
  };

  // Password strength checker
  const getPasswordStrength = (password: string) => {
    if (!password) return { label: '', color: '', width: '0%' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 1) return { label: isRTL ? 'ضعيفة' : 'Weak', color: 'bg-red-500', width: '20%' };
    if (strength <= 2) return { label: isRTL ? 'متوسطة' : 'Fair', color: 'bg-orange-500', width: '40%' };
    if (strength <= 3) return { label: isRTL ? 'جيدة' : 'Good', color: 'bg-yellow-500', width: '60%' };
    if (strength <= 4) return { label: isRTL ? 'قوية' : 'Strong', color: 'bg-emerald-500', width: '80%' };
    return { label: isRTL ? 'قوية جداً' : 'Very Strong', color: 'bg-emerald-600', width: '100%' };
  };

  const passwordStrength = getPasswordStrength(newPassword);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {isRTL ? 'إعدادات الأمان' : 'Security Settings'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {isRTL ? 'إدارة كلمة المرور وإعدادات الأمان' : 'Manage your password and security settings'}
        </p>
      </div>

      {/* Current User Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield size={20} />
            {isRTL ? 'معلومات الحساب' : 'Account Information'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{user?.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                {user?.role === 'super_admin' ? (isRTL ? 'مدير عام' : 'Super Admin') : (isRTL ? 'مدير' : 'Admin')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key size={20} />
            {isRTL ? 'تغيير كلمة المرور' : 'Change Password'}
          </CardTitle>
          <CardDescription>
            {isRTL ? 'تأكد من استخدام كلمة مرور قوية وفريدة' : 'Make sure to use a strong and unique password'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
            {/* Current Password */}
            <div className="space-y-2">
              <Label>{isRTL ? 'كلمة المرور الحالية' : 'Current Password'}</Label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className={cn("h-11", isRTL ? "pl-10" : "pr-10")}
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                    isRTL ? "left-3" : "right-3"
                  )}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <Label>{isRTL ? 'كلمة المرور الجديدة' : 'New Password'}</Label>
              <div className="relative">
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={cn("h-11", isRTL ? "pl-10" : "pr-10")}
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                    isRTL ? "left-3" : "right-3"
                  )}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* Password Strength */}
              {newPassword && (
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full transition-all duration-300", passwordStrength.color)}
                      style={{ width: passwordStrength.width }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{passwordStrength.label}</p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label>{isRTL ? 'تأكيد كلمة المرور' : 'Confirm Password'}</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11"
                dir="ltr"
              />
              {confirmPassword && newPassword !== confirmPassword && (
                <p className="text-xs text-red-500">
                  {isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match'}
                </p>
              )}
              {confirmPassword && newPassword === confirmPassword && newPassword && (
                <p className="text-xs text-emerald-500 flex items-center gap-1">
                  <Check size={12} />
                  {isRTL ? 'متطابقة' : 'Passwords match'}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={isChanging || !currentPassword || !newPassword || newPassword !== confirmPassword}
            >
              {isChanging ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  {isRTL ? 'جاري التغيير...' : 'Changing...'}
                </>
              ) : (
                <>
                  <Lock size={16} className="mr-2" />
                  {isRTL ? 'تغيير كلمة المرور' : 'Change Password'}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Security Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            {isRTL ? 'نصائح أمنية' : 'Security Tips'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              isRTL ? 'استخدم كلمة مرور مكونة من 12 حرفاً على الأقل' : 'Use a password with at least 12 characters',
              isRTL ? 'اجمع بين الأحرف الكبيرة والصغيرة والأرقام والرموز' : 'Mix uppercase, lowercase, numbers, and symbols',
              isRTL ? 'لا تستخدم نفس كلمة المرور في مواقع أخرى' : 'Don\'t reuse passwords from other sites',
              isRTL ? 'قم بتغيير كلمة المرور بشكل دوري' : 'Change your password regularly',
              isRTL ? 'لا تشارك كلمة المرور مع أي شخص' : 'Never share your password with anyone',
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
