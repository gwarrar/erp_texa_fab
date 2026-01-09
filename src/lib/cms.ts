import { supabase } from './supabase';
import { cmsCache } from './cmsCache';
import type { 
  Database, 
  Tables, 
  TablesInsert, 
  TablesUpdate 
} from '@/types/supabase';

export type SiteId = 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev' | 'exchange';
export type Language = 'en' | 'ar' | 'ru';

// Cache TTL constants (in milliseconds)
const CACHE_TTL = {
  SHORT: 2 * 60 * 1000,    // 2 minutes - for frequently changing data
  MEDIUM: 5 * 60 * 1000,   // 5 minutes - default
  LONG: 15 * 60 * 1000,    // 15 minutes - for static content
};

// CMS Service for managing content across all sites
export const cms = {
  // Cache management
  cache: cmsCache,
  
  // ============ SITES ============
  sites: {
    async getAll() {
      return cmsCache.getOrFetch('sites', 'all', 'all', async () => {
        const { data, error } = await supabase
          .from('sites')
          .select('*')
          .eq('active', true)
          .order('name');
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.LONG);
    },

    async getById(id: SiteId) {
      return cmsCache.getOrFetch('site', id, 'all', async () => {
        const { data, error } = await supabase
          .from('sites')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.LONG);
    },

    async update(id: SiteId, updates: TablesUpdate<'sites'>) {
      const { data, error } = await supabase
        .from('sites')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidate('site', id, 'all');
      cmsCache.invalidate('sites', 'all', 'all');
      return data;
    },
  },

  // ============ HERO CONTENT ============
  hero: {
    async get(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('hero', siteId, language, async () => {
        const { data, error } = await supabase
          .from('hero_content')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async getAll(siteId: SiteId) {
      return cmsCache.getOrFetch('hero-all', siteId, 'all', async () => {
        const { data, error } = await supabase
          .from('hero_content')
          .select('*')
          .eq('site_id', siteId);
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async upsert(siteId: SiteId, language: Language, content: Partial<TablesInsert<'hero_content'>>) {
      const { data, error } = await supabase
        .from('hero_content')
        .upsert({
          site_id: siteId,
          language,
          ...content,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id,language'
        })
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidate('hero', siteId, language);
      cmsCache.invalidate('hero-all', siteId, 'all');
      return data;
    },
  },

  // ============ FEATURES ============
  features: {
    async getAll(siteId: SiteId, language: Language = 'en', includeInactive: boolean = false) {
      return cmsCache.getOrFetch('features', siteId, `${language}-${includeInactive ? 'all' : 'active'}`, async () => {
        let query = supabase
          .from('features')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .order('order_index');
        
        if (!includeInactive) {
          query = query.eq('active', true);
        }
        
        const { data, error } = await query;
        if (error) throw error;
        return data || [];
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('features')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },

    async create(feature: TablesInsert<'features'>) {
      const { data, error } = await supabase
        .from('features')
        .insert(feature)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('features');
      return data;
    },

    async update(id: string, updates: TablesUpdate<'features'>) {
      const { data, error } = await supabase
        .from('features')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('features');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('features')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('features');
    },

    async reorder(siteId: SiteId, language: Language, orderedIds: string[]) {
      const updates = orderedIds.map((id, index) => ({
        id,
        order_index: index,
      }));
      
      for (const update of updates) {
        await supabase
          .from('features')
          .update({ order_index: update.order_index })
          .eq('id', update.id);
      }
      cmsCache.invalidate('features', siteId, language);
    },
  },

  // ============ PRICING PLANS ============
  pricing: {
    async getAll(siteId: SiteId, language: Language = 'en', includeInactive: boolean = false) {
      return cmsCache.getOrFetch('pricing', siteId, `${language}-${includeInactive ? 'all' : 'active'}`, async () => {
        let query = supabase
          .from('pricing_plans')
          .select(`
            *,
            pricing_features (*)
          `)
          .eq('site_id', siteId)
          .eq('language', language)
          .order('order_index');
        
        if (!includeInactive) {
          query = query.eq('active', true);
        }
        
        const { data, error } = await query;
        if (error) throw error;
        return data || [];
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('pricing_plans')
        .select(`
          *,
          pricing_features (*)
        `)
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },

    async create(plan: TablesInsert<'pricing_plans'>, features?: string[]) {
      const { data: planData, error: planError } = await supabase
        .from('pricing_plans')
        .insert(plan)
        .select()
        .single();
      if (planError) throw planError;

      if (features && features.length > 0) {
        const featuresData = features.map((text, index) => ({
          plan_id: planData.id,
          feature_text: text,
          order_index: index,
        }));
        await supabase.from('pricing_features').insert(featuresData);
      }

      cmsCache.invalidateType('pricing');
      return planData;
    },

    async update(id: string, updates: TablesUpdate<'pricing_plans'>, features?: string[]) {
      const { data, error } = await supabase
        .from('pricing_plans')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;

      if (features !== undefined) {
        await supabase.from('pricing_features').delete().eq('plan_id', id);
        if (features.length > 0) {
          const featuresData = features.map((text, index) => ({
            plan_id: id,
            feature_text: text,
            order_index: index,
          }));
          await supabase.from('pricing_features').insert(featuresData);
        }
      }

      cmsCache.invalidateType('pricing');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('pricing_plans')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('pricing');
    },
  },

  // ============ TESTIMONIALS ============
  testimonials: {
    async getAll(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('testimonials', siteId, language, async () => {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('active', true)
          .order('order_index');
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async getFeatured(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('testimonials-featured', siteId, language, async () => {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('active', true)
          .eq('featured', true)
          .order('order_index');
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async create(testimonial: TablesInsert<'testimonials'>) {
      const { data, error } = await supabase
        .from('testimonials')
        .insert(testimonial)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('testimonials');
      return data;
    },

    async update(id: string, updates: TablesUpdate<'testimonials'>) {
      const { data, error } = await supabase
        .from('testimonials')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('testimonials');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('testimonials');
    },
  },

  // ============ NEWS ============
  news: {
    async getAll(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('news', siteId, language, async () => {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('active', true)
          .order('published_at', { ascending: false });
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.SHORT);
    },

    async getBySlug(siteId: SiteId, slug: string, language: Language = 'en') {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('site_id', siteId)
        .eq('slug', slug)
        .eq('language', language)
        .single();
      if (error) throw error;
      return data;
    },

    async create(article: TablesInsert<'news'>) {
      const { data, error } = await supabase
        .from('news')
        .insert(article)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('news');
      return data;
    },

    async update(id: string, updates: TablesUpdate<'news'>) {
      const { data, error } = await supabase
        .from('news')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('news');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('news');
    },
  },

  // ============ SOLUTIONS ============
  solutions: {
    async getAll(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('solutions', siteId, language, async () => {
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('active', true)
          .order('order_index');
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async create(solution: TablesInsert<'solutions'>) {
      const { data, error } = await supabase
        .from('solutions')
        .insert(solution)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('solutions');
      return data;
    },

    async update(id: string, updates: TablesUpdate<'solutions'>) {
      const { data, error } = await supabase
        .from('solutions')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('solutions');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('solutions')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('solutions');
    },
  },

  // ============ FAQ ============
  faq: {
    async getAll(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('faq', siteId, language, async () => {
        const { data, error } = await supabase
          .from('faq')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('active', true)
          .order('order_index');
        if (error) throw error;
        return data;
      }, undefined, CACHE_TTL.MEDIUM);
    },

    async create(item: TablesInsert<'faq'>) {
      const { data, error } = await supabase
        .from('faq')
        .insert(item)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('faq');
      return data;
    },

    async update(id: string, updates: TablesUpdate<'faq'>) {
      const { data, error } = await supabase
        .from('faq')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidateType('faq');
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('faq')
        .delete()
        .eq('id', id);
      if (error) throw error;
      cmsCache.invalidateType('faq');
    },
  },

  // ============ CONTACT INFO ============
  contact: {
    async get(siteId: SiteId, language: Language = 'en') {
      return cmsCache.getOrFetch('contact', siteId, language, async () => {
        const { data, error } = await supabase
          .from('contact_info')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data;
      }, undefined, CACHE_TTL.LONG);
    },

    async upsert(siteId: SiteId, language: Language, info: Partial<TablesInsert<'contact_info'>>) {
      const { data, error } = await supabase
        .from('contact_info')
        .upsert({
          site_id: siteId,
          language,
          ...info,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id,language'
        })
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidate('contact', siteId, language);
      return data;
    },
  },

  // ============ CHAT SETTINGS ============
  chat: {
    async get(siteId: SiteId) {
      return cmsCache.getOrFetch('chat', siteId, 'all', async () => {
        const { data, error } = await supabase
          .from('chat_settings')
          .select('*')
          .eq('site_id', siteId)
          .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data;
      }, undefined, CACHE_TTL.LONG);
    },

    async upsert(siteId: SiteId, settings: Partial<TablesInsert<'chat_settings'>>) {
      const { data, error } = await supabase
        .from('chat_settings')
        .upsert({
          site_id: siteId,
          ...settings,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id'
        })
        .select()
        .single();
      if (error) throw error;
      cmsCache.invalidate('chat', siteId, 'all');
      return data;
    },
  },

  // ============ MEDIA ============
  media: {
    async getAll(siteId?: SiteId) {
      let query = supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (siteId) {
        query = query.eq('site_id', siteId);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },

    async create(media: TablesInsert<'media'>) {
      const { data, error } = await supabase
        .from('media')
        .insert(media)
        .select()
        .single();
      if (error) throw error;
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('media')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },

    async uploadToStorage(file: File, siteId: SiteId, folder: string = 'images'): Promise<string> {
      const fileExt = file.name.split('.').pop();
      const fileName = `${siteId}/${folder}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('media')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) throw error;
      
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(data.path);
      
      return publicUrl;
    },

    async deleteFromStorage(filePath: string): Promise<void> {
      const path = filePath.replace(/.*\/storage\/v1\/object\/public\/media\//, '');
      const { error } = await supabase.storage
        .from('media')
        .remove([path]);
      
      if (error) throw error;
    },

    async uploadAndSave(file: File, siteId: SiteId, folder: string = 'images', altText?: string): Promise<{ url: string; id: string }> {
      const url = await this.uploadToStorage(file, siteId, folder);
      
      const mediaRecord = await this.create({
        site_id: siteId,
        url,
        alt_text: altText || file.name,
        file_name: file.name,
        file_type: file.type,
        file_size: file.size,
      });
      
      return { url, id: mediaRecord.id };
    },
  },

  // ============ INTEGRATIONS ============
  integrations: {
    // Announcement Settings
    announcement: {
      async get(siteId: SiteId, language: Language = 'en') {
        return cmsCache.getOrFetch('announcement', siteId, language, async () => {
          const { data, error } = await supabase
            .from('announcement_settings')
            .select('*')
            .eq('site_id', siteId)
            .eq('language', language)
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        }, undefined, CACHE_TTL.SHORT);
      },

      async upsert(siteId: SiteId, language: Language, settings: any) {
        const { data, error } = await supabase
          .from('announcement_settings')
          .upsert({
            site_id: siteId,
            language,
            ...settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'site_id,language' })
          .select()
          .single();
        if (error) throw error;
        cmsCache.invalidate('announcement', siteId, language);
        return data;
      },
    },

    // Analytics Settings
    analytics: {
      async get(siteId: SiteId) {
        return cmsCache.getOrFetch('analytics', siteId, 'all', async () => {
          const { data, error } = await supabase
            .from('analytics_settings')
            .select('*')
            .eq('site_id', siteId)
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        }, undefined, CACHE_TTL.MEDIUM);
      },

      async upsert(siteId: SiteId, settings: any) {
        const { data, error } = await supabase
          .from('analytics_settings')
          .upsert({
            site_id: siteId,
            ...settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'site_id' })
          .select()
          .single();
        if (error) throw error;
        cmsCache.invalidate('analytics', siteId, 'all');
        return data;
      },
    },

    // SEO Settings
    seo: {
      async get(siteId: SiteId, language: Language, pagePath: string) {
        return cmsCache.getOrFetch('seo', siteId, `${language}:${pagePath}`, async () => {
          const { data, error } = await supabase
            .from('seo_settings')
            .select('*')
            .eq('site_id', siteId)
            .eq('language', language)
            .eq('page_path', pagePath)
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        }, undefined, CACHE_TTL.MEDIUM);
      },

      async getAll(siteId: SiteId) {
        const { data, error } = await supabase
          .from('seo_settings')
          .select('*')
          .eq('site_id', siteId);
        if (error) throw error;
        return data;
      },

      async upsert(siteId: SiteId, language: Language, pagePath: string, settings: any) {
        const { data, error } = await supabase
          .from('seo_settings')
          .upsert({
            site_id: siteId,
            language,
            page_path: pagePath,
            ...settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'site_id,language,page_path' })
          .select()
          .single();
        if (error) throw error;
        cmsCache.invalidate('seo', siteId, `${language}:${pagePath}`);
        return data;
      },
    },

    // Widget Settings
    widget: {
      async get(siteId: SiteId, widgetType: string = 'callback') {
        return cmsCache.getOrFetch('widget', siteId, widgetType, async () => {
          const { data, error } = await supabase
            .from('widget_settings')
            .select('*')
            .eq('site_id', siteId)
            .eq('widget_type', widgetType)
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        }, undefined, CACHE_TTL.SHORT);
      },

      async upsert(siteId: SiteId, widgetType: string, settings: any) {
        const { data, error } = await supabase
          .from('widget_settings')
          .upsert({
            site_id: siteId,
            widget_type: widgetType,
            ...settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'site_id,widget_type' })
          .select()
          .single();
        if (error) throw error;
        cmsCache.invalidate('widget', siteId, widgetType);
        return data;
      },
    },

    // Callback Requests
    callbacks: {
      async getAll(siteId: SiteId, limit: number = 50) {
        const { data, error } = await supabase
          .from('callback_requests')
          .select('*')
          .eq('site_id', siteId)
          .order('created_at', { ascending: false })
          .limit(limit);
        if (error) throw error;
        return data;
      },

      async create(siteId: SiteId, phoneNumber: string, name?: string, email?: string) {
        const { data, error } = await supabase
          .from('callback_requests')
          .insert({
            site_id: siteId,
            phone_number: phoneNumber,
            name: name || null,
            email: email || null,
            status: 'pending',
          })
          .select()
          .single();
        if (error) throw error;
        return data;
      },

      async updateStatus(id: string, status: string, notes?: string) {
        const { data, error } = await supabase
          .from('callback_requests')
          .update({
            status,
            notes: notes || undefined,
            called_at: ['called', 'completed'].includes(status) ? new Date().toISOString() : undefined,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id)
          .select()
          .single();
        if (error) throw error;
        return data;
      },

      async getPendingCount(siteId: SiteId) {
        const { count, error } = await supabase
          .from('callback_requests')
          .select('*', { count: 'exact', head: true })
          .eq('site_id', siteId)
          .eq('status', 'pending');
        if (error) throw error;
        return count || 0;
      },
    },

    // Chat Settings
    chat: {
      async get(siteId: SiteId) {
        return cmsCache.getOrFetch('chat', siteId, 'settings', async () => {
          const { data, error } = await supabase
            .from('chat_settings')
            .select('*')
            .eq('site_id', siteId)
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        }, undefined, CACHE_TTL.SHORT);
      },

      async upsert(siteId: SiteId, settings: any) {
        const { data, error } = await supabase
          .from('chat_settings')
          .upsert({
            site_id: siteId,
            ...settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'site_id' })
          .select()
          .single();
        if (error) throw error;
        cmsCache.invalidate('chat', siteId, 'settings');
        return data;
      },
    },
  },
};

export default cms;
