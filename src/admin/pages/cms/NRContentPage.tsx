import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/lib/i18n';
import { useSite } from '../../context/SiteContext';
import { 
  Save, Globe, Building2, Users, Briefcase, Phone, Mail, 
  MapPin, ExternalLink, CheckCircle, AlertCircle, Sparkles,
  Code2, Shield, Cpu, Server, Banknote, FileText
} from 'lucide-react';

interface NRPageContent {
  id: string;
  name: string;
  nameAr: string;
  path: string;
  status: 'published' | 'draft';
  lastEdited: string;
  icon: React.ElementType;
}

const nrPages: NRPageContent[] = [
  { id: 'home', name: 'Home Page', nameAr: 'الصفحة الرئيسية', path: '/next-revolution', status: 'published', lastEdited: '2024-01-15', icon: Sparkles },
  { id: 'about', name: 'About Us', nameAr: 'من نحن', path: '/next-revolution/about', status: 'published', lastEdited: '2024-01-14', icon: Building2 },
  { id: 'services', name: 'Services', nameAr: 'الخدمات', path: '/next-revolution/services', status: 'published', lastEdited: '2024-01-13', icon: Code2 },
  { id: 'products', name: 'Products', nameAr: 'المنتجات', path: '/next-revolution/products', status: 'published', lastEdited: '2024-01-12', icon: Server },
  { id: 'contact', name: 'Contact', nameAr: 'تواصل معنا', path: '/next-revolution/contact', status: 'published', lastEdited: '2024-01-11', icon: Phone },
];

interface CompanyInfo {
  name: string;
  tagline: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  email: string;
  phone: string;
  address: {
    en: string;
    ar: string;
  };
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

export function NRContentPage() {
  const { t, isRTL, language } = useI18n();
  const { currentSite } = useSite();
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('pages');
  
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: 'Next Revolution',
    tagline: {
      en: 'Building Tomorrow\'s Enterprise Solutions Today',
      ar: 'نبني حلول المؤسسات المستقبلية اليوم'
    },
    description: {
      en: 'Irish-European technology company specializing in enterprise software, fintech solutions, AI-powered systems, and digital infrastructure for global markets.',
      ar: 'شركة تقنية أيرلندية أوروبية متخصصة في برمجيات المؤسسات، والحلول المالية، والأنظمة المدعومة بالذكاء الاصطناعي، والبنية التحتية الرقمية للأسواق العالمية.'
    },
    email: 'info@nextrevolution.io',
    phone: '+353 1 234 5678',
    address: {
      en: 'Grand Canal Dock, Dublin 2, Ireland',
      ar: 'جراند كانال دوك، دبلن 2، أيرلندا'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/company/nextrevolution',
      twitter: 'https://twitter.com/nextrevolution',
      github: 'https://github.com/nextrevolution'
    }
  });

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nr_company_info');
    if (saved) {
      try {
        setCompanyInfo(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load company info');
      }
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    localStorage.setItem('nr_company_info', JSON.stringify(companyInfo));
    
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Only show this page for Next Revolution site
  if (currentSite !== 'nextrevolution') {
    return (
      <div className="flex items-center justify-center h-96">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-lg font-semibold mb-2">
              {isRTL ? 'يرجى اختيار موقع Next Revolution' : 'Please Select Next Revolution Site'}
            </h3>
            <p className="text-gray-500 text-sm">
              {isRTL 
                ? 'هذه الصفحة خاصة بإدارة محتوى موقع Next Revolution. يرجى اختياره من القائمة العلوية.'
                : 'This page is for managing Next Revolution content. Please select it from the top menu.'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-blue-500" />
            {isRTL ? 'محتوى Next Revolution' : 'Next Revolution Content'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {isRTL ? 'إدارة محتوى موقع الشركة الأم' : 'Manage parent company website content'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {saveSuccess && (
            <Badge className="bg-green-100 text-green-700 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              {isRTL ? 'تم الحفظ' : 'Saved'}
            </Badge>
          )}
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Save className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {isSaving ? (isRTL ? 'جاري الحفظ...' : 'Saving...') : (isRTL ? 'حفظ التغييرات' : 'Save Changes')}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pages">
            <FileText className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {isRTL ? 'الصفحات' : 'Pages'}
          </TabsTrigger>
          <TabsTrigger value="company">
            <Building2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {isRTL ? 'معلومات الشركة' : 'Company Info'}
          </TabsTrigger>
          <TabsTrigger value="contact">
            <Phone className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {isRTL ? 'بيانات التواصل' : 'Contact Details'}
          </TabsTrigger>
        </TabsList>

        {/* Pages Tab */}
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{isRTL ? 'صفحات الموقع' : 'Website Pages'}</CardTitle>
              <CardDescription>
                {isRTL ? 'جميع صفحات موقع Next Revolution' : 'All Next Revolution website pages'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nrPages.map((page) => (
                  <div 
                    key={page.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <page.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {language === 'ar' ? page.nameAr : page.name}
                        </p>
                        <p className="text-sm text-gray-500">{page.path}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={
                        page.status === 'published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }>
                        {page.status === 'published' 
                          ? (isRTL ? 'منشور' : 'Published') 
                          : (isRTL ? 'مسودة' : 'Draft')
                        }
                      </Badge>
                      <a 
                        href={page.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-blue-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Company Info Tab */}
        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{isRTL ? 'معلومات الشركة' : 'Company Information'}</CardTitle>
              <CardDescription>
                {isRTL ? 'المعلومات الأساسية للشركة' : 'Basic company information'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isRTL ? 'اسم الشركة' : 'Company Name'}
                </label>
                <Input 
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tagline (English)
                  </label>
                  <Input 
                    value={companyInfo.tagline.en}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      tagline: {...companyInfo.tagline, en: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الشعار (العربية)
                  </label>
                  <Input 
                    value={companyInfo.tagline.ar}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      tagline: {...companyInfo.tagline, ar: e.target.value}
                    })}
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description (English)
                  </label>
                  <Textarea 
                    value={companyInfo.description.en}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      description: {...companyInfo.description, en: e.target.value}
                    })}
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الوصف (العربية)
                  </label>
                  <Textarea 
                    value={companyInfo.description.ar}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      description: {...companyInfo.description, ar: e.target.value}
                    })}
                    rows={4}
                    dir="rtl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{isRTL ? 'بيانات التواصل' : 'Contact Information'}</CardTitle>
              <CardDescription>
                {isRTL ? 'معلومات الاتصال والموقع' : 'Contact and location information'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <Input 
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {isRTL ? 'الهاتف' : 'Phone'}
                  </label>
                  <Input 
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Address (English)
                  </label>
                  <Input 
                    value={companyInfo.address.en}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      address: {...companyInfo.address, en: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    العنوان (العربية)
                  </label>
                  <Input 
                    value={companyInfo.address.ar}
                    onChange={(e) => setCompanyInfo({
                      ...companyInfo, 
                      address: {...companyInfo.address, ar: e.target.value}
                    })}
                    dir="rtl"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  {isRTL ? 'روابط التواصل الاجتماعي' : 'Social Media Links'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">LinkedIn</label>
                    <Input 
                      value={companyInfo.socialLinks.linkedin}
                      onChange={(e) => setCompanyInfo({
                        ...companyInfo, 
                        socialLinks: {...companyInfo.socialLinks, linkedin: e.target.value}
                      })}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Twitter</label>
                    <Input 
                      value={companyInfo.socialLinks.twitter}
                      onChange={(e) => setCompanyInfo({
                        ...companyInfo, 
                        socialLinks: {...companyInfo.socialLinks, twitter: e.target.value}
                      })}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">GitHub</label>
                    <Input 
                      value={companyInfo.socialLinks.github}
                      onChange={(e) => setCompanyInfo({
                        ...companyInfo, 
                        socialLinks: {...companyInfo.socialLinks, github: e.target.value}
                      })}
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
