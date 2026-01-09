-- =============================================
-- Integrations Tables Migration
-- Run this in Supabase SQL Editor
-- =============================================

-- Announcement Bar Settings
CREATE TABLE IF NOT EXISTS announcement_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  text TEXT NOT NULL DEFAULT '',
  background_color TEXT DEFAULT '#10b981',
  text_color TEXT DEFAULT '#ffffff',
  font_family TEXT DEFAULT 'inherit',
  font_size TEXT DEFAULT '14px',
  animation_speed INTEGER DEFAULT 30,
  animation_type TEXT DEFAULT 'scroll',
  is_enabled BOOLEAN DEFAULT true,
  link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(site_id, language)
);

-- Analytics Settings (Meta Pixel, GA4, GTM)
CREATE TABLE IF NOT EXISTS analytics_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL UNIQUE,
  meta_pixel_id TEXT,
  google_analytics_id TEXT,
  google_tag_manager_id TEXT,
  is_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO Settings per page
CREATE TABLE IF NOT EXISTS seo_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  page_path TEXT NOT NULL DEFAULT '/',
  meta_title TEXT,
  meta_description TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  twitter_card TEXT DEFAULT 'summary_large_image',
  canonical_url TEXT,
  robots TEXT DEFAULT 'index, follow',
  structured_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(site_id, language, page_path)
);

-- Callback Requests (from callback widget)
CREATE TABLE IF NOT EXISTS callback_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL,
  name TEXT,
  phone_number TEXT NOT NULL,
  email TEXT,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  called_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Widget Settings (callback widget, etc)
CREATE TABLE IF NOT EXISTS widget_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL,
  widget_type TEXT NOT NULL DEFAULT 'callback',
  is_enabled BOOLEAN DEFAULT true,
  delay_seconds INTEGER DEFAULT 30,
  n8n_webhook_url TEXT,
  message_en TEXT DEFAULT 'Need help? We will call you back in 30 seconds!',
  message_ar TEXT DEFAULT 'تحتاج مساعدة؟ سنتصل بك خلال 30 ثانية!',
  button_color TEXT DEFAULT '#10b981',
  button_text_color TEXT DEFAULT '#ffffff',
  position TEXT DEFAULT 'bottom-left',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(site_id, widget_type)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_announcement_settings_site ON announcement_settings(site_id);
CREATE INDEX IF NOT EXISTS idx_analytics_settings_site ON analytics_settings(site_id);
CREATE INDEX IF NOT EXISTS idx_seo_settings_site ON seo_settings(site_id);
CREATE INDEX IF NOT EXISTS idx_seo_settings_path ON seo_settings(page_path);
CREATE INDEX IF NOT EXISTS idx_callback_requests_site ON callback_requests(site_id);
CREATE INDEX IF NOT EXISTS idx_callback_requests_status ON callback_requests(status);
CREATE INDEX IF NOT EXISTS idx_widget_settings_site ON widget_settings(site_id);

-- Insert default data for sites
INSERT INTO announcement_settings (site_id, language, text, background_color, text_color, is_enabled)
VALUES 
  ('texafab', 'en', '🎉 Get 20% off on all annual plans! Limited time offer.', '#047857', '#ffffff', true),
  ('texafab', 'ar', '🎉 احصل على خصم 20% على جميع الباقات السنوية! عرض محدود.', '#047857', '#ffffff', true),
  ('fincore', 'en', '🏦 New: Multi-currency support now available!', '#1e40af', '#ffffff', true),
  ('fincore', 'ar', '🏦 جديد: دعم العملات المتعددة متاح الآن!', '#1e40af', '#ffffff', true),
  ('dubai-stroy', 'en', '🏗️ Special offers on construction materials!', '#b45309', '#ffffff', true),
  ('dubai-stroy', 'ar', '🏗️ عروض خاصة على مواد البناء!', '#b45309', '#ffffff', true),
  ('nextrev', 'en', '🚀 New software products launching soon!', '#7c3aed', '#ffffff', true),
  ('nextrev', 'ar', '🚀 منتجات برمجية جديدة قريباً!', '#7c3aed', '#ffffff', true)
ON CONFLICT (site_id, language) DO NOTHING;

INSERT INTO widget_settings (site_id, widget_type, is_enabled, delay_seconds, message_en, message_ar)
VALUES 
  ('texafab', 'callback', true, 30, 'Need help with TexaFab ERP? We''ll call you back!', 'تحتاج مساعدة مع TexaFab؟ سنتصل بك!'),
  ('fincore', 'callback', true, 45, 'Questions about FinCore? Request a callback!', 'أسئلة حول FinCore؟ اطلب معاودة الاتصال!'),
  ('dubai-stroy', 'callback', true, 30, 'Need construction consultation? We''ll call you!', 'تحتاج استشارة بناء؟ سنتصل بك!'),
  ('nextrev', 'callback', true, 60, 'Interested in our services? Let''s talk!', 'مهتم بخدماتنا؟ دعنا نتحدث!')
ON CONFLICT (site_id, widget_type) DO NOTHING;
