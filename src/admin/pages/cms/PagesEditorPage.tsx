import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Globe,
  Calendar,
  MoreVertical,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Website pages configuration
const websitePages = [
  {
    id: '1',
    name: 'Home',
    nameAr: 'الصفحة الرئيسية',
    slug: '/',
    status: 'published',
    lastModified: '2024-01-15',
    template: 'landing',
    sections: ['hero', 'features', 'solutions', 'stats', 'testimonials', 'pricing', 'cta', 'footer']
  },
  {
    id: '2',
    name: 'Solutions',
    nameAr: 'الحلول',
    slug: '/solutions',
    status: 'published',
    lastModified: '2024-01-14',
    template: 'solutions',
    sections: ['hero', 'solutions-grid', 'features', 'cta']
  },
  {
    id: '3',
    name: 'Features',
    nameAr: 'الميزات',
    slug: '/features',
    status: 'published',
    lastModified: '2024-01-13',
    template: 'features',
    sections: ['hero', 'features-list', 'comparison', 'cta']
  },
  {
    id: '4',
    name: 'Pricing',
    nameAr: 'الأسعار',
    slug: '/pricing',
    status: 'published',
    lastModified: '2024-01-12',
    template: 'pricing',
    sections: ['hero', 'pricing-plans', 'faq', 'cta']
  },
  {
    id: '5',
    name: 'Industries',
    nameAr: 'الصناعات',
    slug: '/industries',
    status: 'published',
    lastModified: '2024-01-11',
    template: 'industries',
    sections: ['hero', 'industries-grid', 'case-studies', 'cta']
  },
  {
    id: '6',
    name: 'Contact',
    nameAr: 'التواصل',
    slug: '/contact',
    status: 'published',
    lastModified: '2024-01-10',
    template: 'contact',
    sections: ['hero', 'contact-form', 'locations', 'faq']
  },
  {
    id: '7',
    name: 'FAQ',
    nameAr: 'الأسئلة الشائعة',
    slug: '/faq',
    status: 'published',
    lastModified: '2024-01-09',
    template: 'faq',
    sections: ['hero', 'faq-list', 'contact-cta']
  },
  {
    id: '8',
    name: 'About / Next Revolution',
    nameAr: 'عن الشركة',
    slug: '/about-next-revolution',
    status: 'published',
    lastModified: '2024-01-08',
    template: 'about',
    sections: ['hero', 'story', 'team', 'values', 'cta']
  },
  {
    id: '9',
    name: 'Terms of Service',
    nameAr: 'شروط الخدمة',
    slug: '/terms',
    status: 'published',
    lastModified: '2024-01-07',
    template: 'legal',
    sections: ['content']
  },
  {
    id: '10',
    name: 'Privacy Policy',
    nameAr: 'سياسة الخصوصية',
    slug: '/privacy',
    status: 'published',
    lastModified: '2024-01-06',
    template: 'legal',
    sections: ['content']
  },
  // Solution sub-pages
  {
    id: '11',
    name: 'Fabric Management',
    nameAr: 'إدارة الأقمشة',
    slug: '/fabric-management',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '12',
    name: 'Warehouse Management',
    nameAr: 'إدارة المستودعات',
    slug: '/warehouse-management',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '13',
    name: 'POS System',
    nameAr: 'نظام نقاط البيع',
    slug: '/pos-system',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '14',
    name: 'Container Tracking',
    nameAr: 'تتبع الحاويات',
    slug: '/container-tracking',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '15',
    name: 'Employee Management',
    nameAr: 'إدارة الموظفين',
    slug: '/employee-management',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '16',
    name: 'E-commerce',
    nameAr: 'التجارة الإلكترونية',
    slug: '/ecommerce',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '17',
    name: 'CRM',
    nameAr: 'إدارة العملاء',
    slug: '/crm',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '18',
    name: 'AI Analytics',
    nameAr: 'تحليلات الذكاء الاصطناعي',
    slug: '/ai-analytics',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '19',
    name: 'Reports & Analytics',
    nameAr: 'التقارير والتحليلات',
    slug: '/reports-analytics',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '20',
    name: 'Roll Management',
    nameAr: 'إدارة اللفات',
    slug: '/roll-management',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '21',
    name: 'Shipping Management',
    nameAr: 'إدارة الشحن',
    slug: '/shipping',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '22',
    name: 'Accounting',
    nameAr: 'المحاسبة',
    slug: '/accounting',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
  {
    id: '23',
    name: 'Agents & Dealers',
    nameAr: 'الوكلاء والموزعين',
    slug: '/agents-dealers',
    status: 'published',
    lastModified: '2024-01-05',
    template: 'solution-detail',
    sections: ['hero', 'features', 'benefits', 'screenshots', 'cta']
  },
];

export function PagesEditorPage() {
  const { t, isRTL, language } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('all');
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<typeof websitePages[0] | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filteredPages = websitePages.filter(page => {
    const matchesSearch = 
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.nameAr.includes(searchQuery) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTemplate = selectedTemplate === 'all' || page.template === selectedTemplate;
    
    return matchesSearch && matchesTemplate;
  });

  const templates = [...new Set(websitePages.map(p => p.template))];

  const copySlug = (slug: string) => {
    navigator.clipboard.writeText(slug);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const openEditDialog = (page: typeof websitePages[0]) => {
    setSelectedPage(page);
    setIsEditDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{t.common.published}</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">{t.common.draft}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t.cms.pages}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' ? 'إدارة جميع صفحات الموقع' : 'Manage all website pages'}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.common.add} {t.cms.pages}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{t.common.add} {t.cms.pages}</DialogTitle>
              <DialogDescription>
                {language === 'ar' ? 'إنشاء صفحة جديدة للموقع' : 'Create a new website page'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>{t.cms.pageTitle}</Label>
                <Input placeholder="Page title..." />
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.slug}</Label>
                <Input placeholder="/page-url" dir="ltr" />
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.template}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select template..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="solution-detail">Solution Detail</SelectItem>
                    <SelectItem value="legal">Legal Page</SelectItem>
                    <SelectItem value="contact">Contact Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.metaDescription}</Label>
                <Textarea placeholder="Page description for SEO..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">{t.common.cancel}</Button>
              <Button className="bg-teal-600 hover:bg-teal-700">{t.common.save}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400`} />
              <Input
                placeholder={t.common.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={isRTL ? 'pr-10' : 'pl-10'}
              />
            </div>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.cms.template} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === 'ar' ? 'جميع القوالب' : 'All Templates'}</SelectItem>
                {templates.map(template => (
                  <SelectItem key={template} value={template}>
                    {template.charAt(0).toUpperCase() + template.slice(1).replace('-', ' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Pages List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {language === 'ar' ? 'جميع الصفحات' : 'All Pages'} ({filteredPages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPages.map((page) => (
              <div
                key={page.id}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {language === 'ar' ? page.nameAr : page.name}
                      </h3>
                      {getStatusBadge(page.status)}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <button
                        onClick={() => copySlug(page.slug)}
                        className="flex items-center gap-1 hover:text-teal-600 transition-colors"
                      >
                        {copiedSlug === page.slug ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                        <code dir="ltr">{page.slug}</code>
                      </button>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {page.lastModified}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {page.template}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={page.slug} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
                      <DropdownMenuItem onClick={() => openEditDialog(page)}>
                        <Edit className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t.common.edit}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t.common.view}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Globe className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        SEO {t.settings.title}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t.common.delete}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Page Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>
              {t.common.edit}: {selectedPage && (language === 'ar' ? selectedPage.nameAr : selectedPage.name)}
            </DialogTitle>
            <DialogDescription>
              {language === 'ar' ? 'تعديل محتوى وإعدادات الصفحة' : 'Edit page content and settings'}
            </DialogDescription>
          </DialogHeader>
          {selectedPage && (
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'العنوان (إنجليزي)' : 'Title (English)'}</Label>
                  <Input defaultValue={selectedPage.name} />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'العنوان (عربي)' : 'Title (Arabic)'}</Label>
                  <Input defaultValue={selectedPage.nameAr} dir="rtl" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.slug}</Label>
                <Input defaultValue={selectedPage.slug} dir="ltr" />
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.template}</Label>
                <Select defaultValue={selectedPage.template}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="solution-detail">Solution Detail</SelectItem>
                    <SelectItem value="solutions">Solutions Page</SelectItem>
                    <SelectItem value="features">Features Page</SelectItem>
                    <SelectItem value="pricing">Pricing Page</SelectItem>
                    <SelectItem value="industries">Industries Page</SelectItem>
                    <SelectItem value="contact">Contact Page</SelectItem>
                    <SelectItem value="faq">FAQ Page</SelectItem>
                    <SelectItem value="about">About Page</SelectItem>
                    <SelectItem value="legal">Legal Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>{t.cms.visibility}</Label>
                <Select defaultValue={selectedPage.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">{t.common.published}</SelectItem>
                    <SelectItem value="draft">{t.common.draft}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>{language === 'ar' ? 'أقسام الصفحة' : 'Page Sections'}</Label>
                <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {selectedPage.sections.map((section, index) => (
                    <Badge key={index} variant="outline" className="capitalize">
                      {section.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              {t.common.cancel}
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              {t.common.save}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
