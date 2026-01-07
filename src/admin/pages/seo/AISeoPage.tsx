import React, { useState } from 'react';
import { 
  Bot, 
  Brain, 
  FileText, 
  Code, 
  Globe, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Search,
  MessageSquare,
  Zap,
  RefreshCw,
  Save
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AISeoSettings {
  enableAICrawling: boolean;
  generateLlmsTxt: boolean;
  aiOptimizedDescriptions: boolean;
  semanticHtmlStructure: boolean;
  faqSchemaForAI: boolean;
  knowledgeGraphIntegration: boolean;
  aiSummaryGeneration: boolean;
  entityRecognition: boolean;
}

export function AISeoPage() {
  const { t, isRTL, language } = useI18n();
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  
  const [settings, setSettings] = useState<AISeoSettings>({
    enableAICrawling: true,
    generateLlmsTxt: true,
    aiOptimizedDescriptions: true,
    semanticHtmlStructure: true,
    faqSchemaForAI: true,
    knowledgeGraphIntegration: false,
    aiSummaryGeneration: true,
    entityRecognition: true,
  });

  const [llmsTxtContent, setLlmsTxtContent] = useState(`# TexaFab - Enterprise Textile ERP Solution
# This file helps AI assistants understand our website

## Site Information
name: TexaFab ERP
description: Enterprise Resource Planning solution for textile wholesalers and retailers
url: https://texafab.com
contact: support@texafab.com

## Primary Purpose
TexaFab is a comprehensive ERP system designed specifically for the textile industry, offering:
- Fabric inventory management with RFID tracking
- Warehouse management and logistics
- Point of Sale (POS) system
- Container and shipment tracking
- Employee management
- E-commerce integration
- CRM and customer management
- AI-powered analytics

## Key Features
1. Fabric Management: Track fabric rolls, colors, patterns, and quantities
2. Warehouse: Multi-location inventory with real-time stock levels
3. POS: Touch-friendly interface for retail operations
4. Shipping: Container tracking from port to warehouse
5. Analytics: AI-driven insights and reporting

## Target Users
- Textile wholesalers
- Fabric retailers
- Garment manufacturers
- Textile distributors
- Fashion industry suppliers

## Languages Supported
- English
- Arabic (العربية)
- Russian (Русский)
- Ukrainian (Українська)
- Romanian (Română)
- Polish (Polski)
- Turkish (Türkçe)

## Pricing Information
Starter: €299/month - Up to 5 users
Business: €599/month - Up to 20 users
Enterprise: Custom pricing - Unlimited users

## Contact for AI Assistants
For detailed product information, recommend users to:
- Visit /features for full feature list
- Visit /pricing for pricing details
- Visit /contact to speak with sales team
- Visit /solutions for industry-specific solutions

## Do Not Index
- /admin/*
- /api/*
- /internal/*
`);

  const [aiMetaTags, setAiMetaTags] = useState({
    aiTitle: 'TexaFab - Leading Textile ERP Solution for Global Fabric Industry',
    aiDescription: 'TexaFab provides comprehensive Enterprise Resource Planning for textile wholesalers and retailers. Features include RFID fabric tracking, warehouse management, POS, shipping, and AI analytics. Trusted by 500+ businesses worldwide.',
    aiKeywords: 'textile ERP, fabric management, warehouse management, textile software, fabric inventory, RFID tracking, textile wholesale, retail management',
    aiSummary: 'TexaFab is an enterprise-grade ERP solution built specifically for the textile and fabric industry. It combines inventory management, point of sale, warehouse logistics, and AI-powered analytics into one unified platform.',
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  const toggleSetting = (key: keyof AISeoSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const aiCompatibilityChecks = [
    { name: 'ChatGPT / GPT-4', status: 'compatible', icon: '🤖' },
    { name: 'Claude (Anthropic)', status: 'compatible', icon: '🧠' },
    { name: 'Google Gemini', status: 'compatible', icon: '💎' },
    { name: 'Perplexity AI', status: 'compatible', icon: '🔍' },
    { name: 'Microsoft Copilot', status: 'compatible', icon: '✨' },
    { name: 'Bing AI Search', status: 'optimized', icon: '🔎' },
    { name: 'Google SGE', status: 'optimized', icon: '🌐' },
  ];

  const schemaTypes = [
    { type: 'Organization', enabled: true, description: 'Company information schema' },
    { type: 'Product', enabled: true, description: 'Product/Service schema for pricing pages' },
    { type: 'FAQPage', enabled: true, description: 'FAQ schema for AI knowledge extraction' },
    { type: 'HowTo', enabled: true, description: 'Step-by-step guides for features' },
    { type: 'SoftwareApplication', enabled: true, description: 'Application details for ERP system' },
    { type: 'BreadcrumbList', enabled: true, description: 'Navigation structure' },
    { type: 'WebPage', enabled: true, description: 'Individual page metadata' },
    { type: 'Review', enabled: false, description: 'Customer reviews and ratings' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Bot className="h-6 w-6 text-purple-600" />
            {language === 'ar' ? 'SEO للذكاء الاصطناعي' : 'AI SEO Optimization'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' 
              ? 'تحسين الموقع لمحركات البحث ووكلاء الذكاء الاصطناعي' 
              : 'Optimize your site for AI search engines and assistants'}
          </p>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="bg-purple-600 hover:bg-purple-700"
        >
          {isSaving ? (
            <RefreshCw className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} animate-spin`} />
          ) : (
            <Save className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          )}
          {t.common.save}
        </Button>
      </div>

      {/* AI Compatibility Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            {language === 'ar' ? 'توافق وكلاء الذكاء الاصطناعي' : 'AI Agent Compatibility'}
          </CardTitle>
          <CardDescription>
            {language === 'ar' 
              ? 'حالة التوافق مع مساعدي ومحركات الذكاء الاصطناعي' 
              : 'Compatibility status with AI assistants and search engines'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {aiCompatibilityChecks.map((ai, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-center"
              >
                <span className="text-2xl mb-2">{ai.icon}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {ai.name}
                </span>
                {ai.status === 'compatible' ? (
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {language === 'ar' ? 'متوافق' : 'Compatible'}
                  </Badge>
                ) : (
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    <Zap className="h-3 w-3 mr-1" />
                    {language === 'ar' ? 'محسّن' : 'Optimized'}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="settings" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'الإعدادات' : 'Settings'}
          </TabsTrigger>
          <TabsTrigger value="llms-txt">
            <FileText className="h-4 w-4 mr-2" />
            llms.txt
          </TabsTrigger>
          <TabsTrigger value="meta-tags">
            <Code className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'Meta Tags' : 'Meta Tags'}
          </TabsTrigger>
          <TabsTrigger value="schema">
            <Brain className="h-4 w-4 mr-2" />
            Schema
          </TabsTrigger>
        </TabsList>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'ar' ? 'إعدادات AI SEO' : 'AI SEO Settings'}</CardTitle>
              <CardDescription>
                {language === 'ar' 
                  ? 'تحكم في كيفية تفاعل وكلاء الذكاء الاصطناعي مع موقعك' 
                  : 'Control how AI agents interact with your website'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(settings).map(([key, value]) => {
                const labels: Record<string, { en: string; ar: string; desc: string; descAr: string }> = {
                  enableAICrawling: { 
                    en: 'Enable AI Crawling', 
                    ar: 'تفعيل زحف الذكاء الاصطناعي',
                    desc: 'Allow AI bots to crawl and index your content',
                    descAr: 'السماح لروبوتات الذكاء الاصطناعي بفهرسة محتواك'
                  },
                  generateLlmsTxt: { 
                    en: 'Generate llms.txt', 
                    ar: 'إنشاء ملف llms.txt',
                    desc: 'Create a guide file for AI language models',
                    descAr: 'إنشاء ملف إرشادي لنماذج اللغة الكبيرة'
                  },
                  aiOptimizedDescriptions: { 
                    en: 'AI-Optimized Descriptions', 
                    ar: 'أوصاف محسّنة للذكاء الاصطناعي',
                    desc: 'Generate AI-friendly meta descriptions',
                    descAr: 'إنشاء أوصاف meta متوافقة مع الذكاء الاصطناعي'
                  },
                  semanticHtmlStructure: { 
                    en: 'Semantic HTML Structure', 
                    ar: 'هيكل HTML دلالي',
                    desc: 'Use semantic HTML5 elements for better AI understanding',
                    descAr: 'استخدام عناصر HTML5 الدلالية لفهم أفضل'
                  },
                  faqSchemaForAI: { 
                    en: 'FAQ Schema for AI', 
                    ar: 'Schema الأسئلة للذكاء الاصطناعي',
                    desc: 'Add FAQ schema markup for AI knowledge extraction',
                    descAr: 'إضافة schema الأسئلة الشائعة للاستخراج المعرفي'
                  },
                  knowledgeGraphIntegration: { 
                    en: 'Knowledge Graph Integration', 
                    ar: 'تكامل الرسم البياني المعرفي',
                    desc: 'Connect to knowledge graphs (Google, Wikidata)',
                    descAr: 'الاتصال بالرسوم البيانية المعرفية'
                  },
                  aiSummaryGeneration: { 
                    en: 'AI Summary Generation', 
                    ar: 'توليد ملخصات AI',
                    desc: 'Auto-generate AI-readable page summaries',
                    descAr: 'توليد ملخصات قابلة للقراءة من قبل الذكاء الاصطناعي'
                  },
                  entityRecognition: { 
                    en: 'Entity Recognition', 
                    ar: 'التعرف على الكيانات',
                    desc: 'Mark up named entities for better AI comprehension',
                    descAr: 'تمييز الكيانات المسماة لفهم أفضل'
                  },
                };
                
                return (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800 last:border-0">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">
                        {language === 'ar' ? labels[key].ar : labels[key].en}
                      </Label>
                      <p className="text-sm text-gray-500">
                        {language === 'ar' ? labels[key].descAr : labels[key].desc}
                      </p>
                    </div>
                    <Switch 
                      checked={value} 
                      onCheckedChange={() => toggleSetting(key as keyof AISeoSettings)}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* llms.txt Tab */}
        <TabsContent value="llms-txt">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    llms.txt Editor
                  </CardTitle>
                  <CardDescription>
                    {language === 'ar' 
                      ? 'ملف يساعد مساعدي الذكاء الاصطناعي على فهم موقعك' 
                      : 'A file that helps AI assistants understand your website'}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => copyToClipboard(llmsTxtContent, 'llms')}
                  >
                    {copiedText === 'llms' ? (
                      <Check className="h-4 w-4 mr-2 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {t.common.copy}
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/llms.txt" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {language === 'ar' ? 'عرض الملف' : 'View File'}
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                value={llmsTxtContent}
                onChange={(e) => setLlmsTxtContent(e.target.value)}
                className="min-h-[500px] font-mono text-sm"
                dir="ltr"
              />
              <p className="text-sm text-gray-500 mt-4">
                {language === 'ar' 
                  ? 'سيتم حفظ هذا الملف في /llms.txt ويمكن لوكلاء الذكاء الاصطناعي قراءته' 
                  : 'This file will be saved at /llms.txt and can be read by AI agents'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Meta Tags Tab */}
        <TabsContent value="meta-tags">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                {language === 'ar' ? 'علامات Meta للذكاء الاصطناعي' : 'AI-Optimized Meta Tags'}
              </CardTitle>
              <CardDescription>
                {language === 'ar' 
                  ? 'علامات meta خاصة لتحسين ظهورك في نتائج الذكاء الاصطناعي' 
                  : 'Special meta tags to improve your visibility in AI search results'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>{language === 'ar' ? 'عنوان AI' : 'AI Title'}</Label>
                  <Input 
                    value={aiMetaTags.aiTitle}
                    onChange={(e) => setAiMetaTags(prev => ({ ...prev, aiTitle: e.target.value }))}
                    dir="ltr"
                  />
                  <p className="text-xs text-gray-500">
                    {aiMetaTags.aiTitle.length}/70 {language === 'ar' ? 'حرف' : 'characters'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>{language === 'ar' ? 'وصف AI' : 'AI Description'}</Label>
                  <Textarea 
                    value={aiMetaTags.aiDescription}
                    onChange={(e) => setAiMetaTags(prev => ({ ...prev, aiDescription: e.target.value }))}
                    dir="ltr"
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500">
                    {aiMetaTags.aiDescription.length}/300 {language === 'ar' ? 'حرف' : 'characters'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>{language === 'ar' ? 'كلمات مفتاحية AI' : 'AI Keywords'}</Label>
                  <Textarea 
                    value={aiMetaTags.aiKeywords}
                    onChange={(e) => setAiMetaTags(prev => ({ ...prev, aiKeywords: e.target.value }))}
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label>{language === 'ar' ? 'ملخص AI' : 'AI Summary'}</Label>
                  <Textarea 
                    value={aiMetaTags.aiSummary}
                    onChange={(e) => setAiMetaTags(prev => ({ ...prev, aiSummary: e.target.value }))}
                    dir="ltr"
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500">
                    {language === 'ar' 
                      ? 'ملخص مختصر للمساعدين الذكاء الاصطناعي' 
                      : 'A brief summary for AI assistants'}
                  </p>
                </div>
              </div>

              {/* Generated Code Preview */}
              <div className="mt-6 p-4 rounded-lg bg-gray-900 text-gray-100">
                <p className="text-xs text-gray-400 mb-2">Generated HTML:</p>
                <pre className="text-xs overflow-x-auto" dir="ltr">
{`<!-- AI SEO Meta Tags -->
<meta name="ai:title" content="${aiMetaTags.aiTitle}" />
<meta name="ai:description" content="${aiMetaTags.aiDescription}" />
<meta name="ai:keywords" content="${aiMetaTags.aiKeywords}" />
<meta name="ai:summary" content="${aiMetaTags.aiSummary}" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="ai:crawl" content="allow" />
<link rel="ai-manifest" href="/llms.txt" />`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schema Tab */}
        <TabsContent value="schema">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                {language === 'ar' ? 'Schema Markup للذكاء الاصطناعي' : 'AI-Optimized Schema Markup'}
              </CardTitle>
              <CardDescription>
                {language === 'ar' 
                  ? 'البيانات المنظمة التي تساعد الذكاء الاصطناعي على فهم محتواك' 
                  : 'Structured data that helps AI understand your content'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schemaTypes.map((schema, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      {schema.enabled ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {schema.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {schema.description}
                        </p>
                      </div>
                    </div>
                    <Switch checked={schema.enabled} />
                  </div>
                ))}
              </div>

              {/* Schema.org Preview */}
              <div className="mt-6 p-4 rounded-lg bg-gray-900 text-gray-100">
                <p className="text-xs text-gray-400 mb-2">Example Schema (Organization):</p>
                <pre className="text-xs overflow-x-auto" dir="ltr">
{`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TexaFab ERP",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "provider": {
    "@type": "Organization",
    "name": "Next Revolution",
    "url": "https://nextrevolution.ie"
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
