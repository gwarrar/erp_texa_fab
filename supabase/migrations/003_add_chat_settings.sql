-- =============================================
-- Chat Settings Migration
-- Run this in Supabase SQL Editor
-- =============================================

DROP TABLE IF EXISTS chat_settings;

CREATE TABLE chat_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id TEXT NOT NULL UNIQUE,
  chat_type TEXT DEFAULT 'none',
  is_enabled BOOLEAN DEFAULT false,
  position TEXT DEFAULT 'bottom-right',
  show_on_mobile BOOLEAN DEFAULT true,
  delay_seconds INTEGER DEFAULT 3,
  tawkto_property_id TEXT,
  tawkto_widget_id TEXT,
  whatsapp_number TEXT,
  whatsapp_default_message TEXT DEFAULT 'Hello! I have a question about your services.',
  whatsapp_default_message_ar TEXT DEFAULT 'مرحباً! لدي سؤال حول خدماتكم.',
  crisp_website_id TEXT,
  intercom_app_id TEXT,
  custom_script TEXT,
  button_color TEXT DEFAULT '#25D366',
  button_text_color TEXT DEFAULT '#ffffff',
  greeting_message TEXT,
  greeting_message_ar TEXT,
  office_hours_enabled BOOLEAN DEFAULT false,
  office_hours_start TEXT DEFAULT '09:00',
  office_hours_end TEXT DEFAULT '18:00',
  office_hours_timezone TEXT DEFAULT 'UTC',
  offline_message TEXT DEFAULT 'We are currently offline. Please leave a message.',
  offline_message_ar TEXT DEFAULT 'نحن غير متصلين حالياً. يرجى ترك رسالة.',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_chat_settings_site ON chat_settings(site_id);

-- Insert default data for sites
INSERT INTO chat_settings (site_id, chat_type, is_enabled, whatsapp_number, greeting_message, greeting_message_ar)
VALUES 
  ('texafab', 'whatsapp', true, '+971501234567', 'Hi! How can we help you with TexaFab ERP?', 'مرحباً! كيف يمكننا مساعدتك مع TexaFab ERP؟'),
  ('fincore', 'tawkto', true, NULL, 'Welcome to FinCore! How can we assist you?', 'مرحباً بك في FinCore! كيف يمكننا مساعدتك؟'),
  ('dubai-stroy', 'whatsapp', true, '+971501234567', 'Hello! Looking for construction materials?', 'مرحباً! تبحث عن مواد بناء؟'),
  ('nextrev', 'whatsapp', true, '+971501234567', 'Hi! Interested in our software services?', 'مرحباً! مهتم بخدماتنا البرمجية؟')
ON CONFLICT (site_id) DO NOTHING;
