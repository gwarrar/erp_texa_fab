import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, Rocket, X } from "lucide-react";

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialSignupModal({ isOpen, onClose }: TrialSignupModalProps) {
  const { language, dir } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[500px] bg-white dark:bg-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-texafab-slate dark:text-white mb-2">
              {language === "ar" ? "تم بنجاح!" : "Success!"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === "ar" 
                ? "تم تسجيل حسابك. ستصلك رسالة بالبريد الإلكتروني قريباً."
                : "Your account has been registered. You'll receive an email shortly."}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-texafab-emerald to-teal-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-texafab-slate dark:text-white">
                    {language === "ar" ? "ابدأ التجربة المجانية" : "Start Free Trial"}
                  </DialogTitle>
                  <DialogDescription className="text-gray-500 dark:text-gray-400">
                    {language === "ar" ? "14 يوم مجاناً - بدون بطاقة ائتمان" : "14 days free - No credit card required"}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {language === "ar" ? "الاسم الأول" : "First Name"}
                  </label>
                  <Input placeholder={language === "ar" ? "أحمد" : "John"} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {language === "ar" ? "الاسم الأخير" : "Last Name"}
                  </label>
                  <Input placeholder={language === "ar" ? "محمد" : "Doe"} required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <Input type="email" placeholder="email@company.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "ar" ? "رقم الهاتف" : "Phone"}
                </label>
                <Input type="tel" placeholder="+353 83 081 3305" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "ar" ? "اسم الشركة" : "Company Name"}
                </label>
                <Input placeholder={language === "ar" ? "شركة الأقمشة" : "Textile Co."} required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "ar" ? "حجم الشركة" : "Company Size"}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "ar" ? "اختر حجم الشركة" : "Select company size"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">{language === "ar" ? "1-10 موظفين" : "1-10 employees"}</SelectItem>
                    <SelectItem value="11-50">{language === "ar" ? "11-50 موظف" : "11-50 employees"}</SelectItem>
                    <SelectItem value="51-200">{language === "ar" ? "51-200 موظف" : "51-200 employees"}</SelectItem>
                    <SelectItem value="200+">{language === "ar" ? "أكثر من 200" : "200+ employees"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white rounded-xl font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 me-2 animate-spin" />
                      {language === "ar" ? "جاري التسجيل..." : "Registering..."}
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4 me-2" />
                      {language === "ar" ? "ابدأ التجربة المجانية" : "Start Free Trial"}
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {language === "ar" 
                  ? "بالتسجيل، أنت توافق على شروط الاستخدام وسياسة الخصوصية"
                  : "By signing up, you agree to our Terms of Service and Privacy Policy"}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
