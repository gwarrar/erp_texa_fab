/**
 * Data Seeding Script
 * Syncs data from public/data JSON files to Supabase
 */
import { supabase } from './supabase';

// Data will be fetched at runtime since JSON imports may not work

type SiteId = 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev' | 'exchange';

interface SeedResult {
  success: boolean;
  site: string;
  type: string;
  message: string;
  count?: number;
}

// Seed Hero Data
async function seedHero(siteId: SiteId, heroData: any): Promise<SeedResult[]> {
  const results: SeedResult[] = [];
  const languages = Object.keys(heroData);

  for (const lang of languages) {
    try {
      const data = heroData[lang];
      const { error } = await supabase
        .from('hero_content')
        .upsert({
          site_id: siteId,
          language: lang,
          badge: data.badge || '',
          title: data.title || '',
          subtitle: data.subtitle || '',
          description: data.tagline || '',
          cta_demo_text: data.ctaDemo || data.cta1 || '',
          cta_trial_text: data.ctaTrial || data.cta2 || '',
          image: data.image || '',
          updated_at: new Date().toISOString(),
        }, { onConflict: 'site_id,language' });

      if (error) throw error;
      results.push({ success: true, site: siteId, type: 'hero', message: `Hero ${lang} synced` });
    } catch (err: any) {
      results.push({ success: false, site: siteId, type: 'hero', message: err.message });
    }
  }
  return results;
}

// Seed Features Data
async function seedFeatures(siteId: SiteId, featuresData: any): Promise<SeedResult[]> {
  const results: SeedResult[] = [];
  const languages = Object.keys(featuresData);

  for (const lang of languages) {
    try {
      const data = featuresData[lang];
      // Handle different structures: {items: [...]} or {sectionTitle, items: [...]}
      const items = data.items || data || [];
      
      if (!Array.isArray(items)) continue;

      // Delete existing features for this site/language
      await supabase
        .from('features')
        .delete()
        .eq('site_id', siteId)
        .eq('language', lang);

      // Insert new features
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { error } = await supabase
          .from('features')
          .insert({
            site_id: siteId,
            language: lang,
            title: item.title || '',
            description: item.description || '',
            icon: item.icon || 'Star',
            order_index: i,
            active: true,
          });
        if (error) throw error;
      }

      results.push({ 
        success: true, 
        site: siteId, 
        type: 'features', 
        message: `Features ${lang} synced`, 
        count: items.length 
      });
    } catch (err: any) {
      results.push({ success: false, site: siteId, type: 'features', message: err.message });
    }
  }
  return results;
}

// Seed Pricing Data
async function seedPricing(siteId: SiteId, pricingData: any): Promise<SeedResult[]> {
  const results: SeedResult[] = [];
  const languages = Object.keys(pricingData);

  for (const lang of languages) {
    try {
      const data = pricingData[lang];
      // Handle different structures
      let plans = data.plans || [];
      
      // For dubai-stroy which has categories.construction.plans etc
      if (data.categories) {
        const firstCategory = Object.values(data.categories)[0] as any;
        plans = firstCategory?.plans || [];
      }
      
      if (!Array.isArray(plans)) continue;

      // Delete existing pricing plans for this site/language
      const { data: existingPlans } = await supabase
        .from('pricing_plans')
        .select('id')
        .eq('site_id', siteId)
        .eq('language', lang);

      if (existingPlans && existingPlans.length > 0) {
        // Delete features first
        for (const plan of existingPlans) {
          await supabase
            .from('pricing_features')
            .delete()
            .eq('plan_id', plan.id);
        }
        // Then delete plans
        await supabase
          .from('pricing_plans')
          .delete()
          .eq('site_id', siteId)
          .eq('language', lang);
      }

      // Insert new plans
      for (let i = 0; i < plans.length; i++) {
        const plan = plans[i];
        
        // Parse price - handle "від 450" format
        let priceNum = 0;
        const priceStr = String(plan.price || '0');
        const numMatch = priceStr.match(/\d+/);
        if (numMatch) {
          priceNum = parseInt(numMatch[0]);
        }
        
        const { data: insertedPlan, error } = await supabase
          .from('pricing_plans')
          .insert({
            site_id: siteId,
            language: lang,
            name: plan.name || '',
            description: plan.description || '',
            price: priceNum,
            currency: plan.currency || data.currency || '$',
            billing_period: plan.period || 'month',
            popular: plan.isPopular || plan.highlighted || false,
            cta_text: plan.ctaText || data.getQuote || 'Get Started',
            order_index: i,
            active: true,
          })
          .select()
          .single();

        if (error) throw error;

        // Insert features for this plan
        if (insertedPlan && plan.features) {
          for (let j = 0; j < plan.features.length; j++) {
            await supabase
              .from('pricing_features')
              .insert({
                plan_id: insertedPlan.id,
                feature_text: plan.features[j],
                order_index: j,
              });
          }
        }
      }

      results.push({ 
        success: true, 
        site: siteId, 
        type: 'pricing', 
        message: `Pricing ${lang} synced`, 
        count: plans.length 
      });
    } catch (err: any) {
      results.push({ success: false, site: siteId, type: 'pricing', message: err.message });
    }
  }
  return results;
}

// Seed Testimonials Data
async function seedTestimonials(siteId: SiteId, testimonialsData: any): Promise<SeedResult[]> {
  const results: SeedResult[] = [];
  const languages = ['en', 'ar'];
  
  try {
    const items = testimonialsData.items || [];
    
    // Delete existing testimonials
    await supabase
      .from('testimonials')
      .delete()
      .eq('site_id', siteId);

    // Insert new testimonials for each language
    for (const lang of languages) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { error } = await supabase
          .from('testimonials')
          .insert({
            site_id: siteId,
            language: lang,
            author_name: item.name || '',
            author_company: item.company || '',
            author_role: lang === 'ar' ? (item.role?.ar || item.role || '') : (item.role?.en || item.role || ''),
            content: lang === 'ar' ? (item.content?.ar || item.content || '') : (item.content?.en || item.content || ''),
            author_avatar: item.avatar || '',
            rating: item.rating || 5,
            order_index: i,
            active: true,
          });
        if (error) throw error;
      }
    }

    results.push({ 
      success: true, 
      site: siteId, 
      type: 'testimonials', 
      message: 'Testimonials synced', 
      count: items.length 
    });
  } catch (err: any) {
    results.push({ success: false, site: siteId, type: 'testimonials', message: err.message });
  }
  
  return results;
}

// Seed Solutions Data
async function seedSolutions(siteId: SiteId, solutionsData: any): Promise<SeedResult[]> {
  const results: SeedResult[] = [];
  const languages = ['en', 'ar'];
  
  try {
    const items = solutionsData.items || [];
    
    // Delete existing solutions
    await supabase
      .from('solutions')
      .delete()
      .eq('site_id', siteId);

    // Insert new solutions for each language
    for (const lang of languages) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { error } = await supabase
          .from('solutions')
          .insert({
            site_id: siteId,
            language: lang,
            title: lang === 'ar' ? (item.title?.ar || item.title || '') : (item.title?.en || item.title || ''),
            description: lang === 'ar' ? (item.description?.ar || item.description || '') : (item.description?.en || item.description || ''),
            icon: item.icon || '📦',
            image: item.image || '',
            order_index: i,
            active: true,
          });
        if (error) throw error;
      }
    }

    results.push({ 
      success: true, 
      site: siteId, 
      type: 'solutions', 
      message: 'Solutions synced', 
      count: items.length 
    });
  } catch (err: any) {
    results.push({ success: false, site: siteId, type: 'solutions', message: err.message });
  }
  
  return results;
}

// Helper to fetch JSON
async function fetchJSON(path: string): Promise<any> {
  try {
    const response = await fetch(`/data/${path}`);
    if (!response.ok) throw new Error(`Failed to fetch ${path}`);
    return await response.json();
  } catch (err) {
    console.warn(`Could not fetch ${path}:`, err);
    return null;
  }
}

// Main seed function
export async function seedAllData(): Promise<SeedResult[]> {
  const allResults: SeedResult[] = [];

  console.log('🌱 Starting data sync to Supabase...');

  // TexaFab
  console.log('📦 Syncing TexaFab...');
  const texafabHero = await fetchJSON('texafab/hero.json');
  const texafabFeatures = await fetchJSON('texafab/features.json');
  const texafabPricing = await fetchJSON('texafab/pricing.json');
  const texafabTestimonials = await fetchJSON('texafab/testimonials.json');
  const texafabSolutions = await fetchJSON('texafab/solutions.json');

  if (texafabHero) allResults.push(...await seedHero('texafab', texafabHero));
  if (texafabFeatures) allResults.push(...await seedFeatures('texafab', texafabFeatures));
  if (texafabPricing) allResults.push(...await seedPricing('texafab', texafabPricing));
  if (texafabTestimonials) allResults.push(...await seedTestimonials('texafab', texafabTestimonials));
  if (texafabSolutions) allResults.push(...await seedSolutions('texafab', texafabSolutions));

  // FinCore
  console.log('🏦 Syncing FinCore...');
  const fincoreHero = await fetchJSON('fincore/hero.json');
  const fincoreFeatures = await fetchJSON('fincore/features.json');
  const fincorePricing = await fetchJSON('fincore/pricing.json');
  const fincoreTestimonials = await fetchJSON('fincore/testimonials.json');
  const fincoreSolutions = await fetchJSON('fincore/solutions.json');

  if (fincoreHero) allResults.push(...await seedHero('fincore', fincoreHero));
  if (fincoreFeatures) allResults.push(...await seedFeatures('fincore', fincoreFeatures));
  if (fincorePricing) allResults.push(...await seedPricing('fincore', fincorePricing));
  if (fincoreTestimonials) allResults.push(...await seedTestimonials('fincore', fincoreTestimonials));
  if (fincoreSolutions) allResults.push(...await seedSolutions('fincore', fincoreSolutions));

  // Dubai Stroy
  console.log('🏗️ Syncing Dubai Stroy...');
  const dubaiStroyHero = await fetchJSON('dubai-stroy/hero.json');
  const dubaiStroyFeatures = await fetchJSON('dubai-stroy/features.json');
  const dubaiStroyPricing = await fetchJSON('dubai-stroy/pricing.json');
  const dubaiStroyTestimonials = await fetchJSON('dubai-stroy/testimonials.json');

  if (dubaiStroyHero) allResults.push(...await seedHero('dubai-stroy', dubaiStroyHero));
  if (dubaiStroyFeatures) allResults.push(...await seedFeatures('dubai-stroy', dubaiStroyFeatures));
  if (dubaiStroyPricing) allResults.push(...await seedPricing('dubai-stroy', dubaiStroyPricing));
  if (dubaiStroyTestimonials) allResults.push(...await seedTestimonials('dubai-stroy', dubaiStroyTestimonials));

  // NextRev
  console.log('🚀 Syncing NextRev...');
  const nextrevHero = await fetchJSON('nextrev/hero.json');
  const nextrevFeatures = await fetchJSON('nextrev/features.json');
  const nextrevPricing = await fetchJSON('nextrev/pricing.json');

  if (nextrevHero) allResults.push(...await seedHero('nextrev', nextrevHero));
  if (nextrevFeatures) allResults.push(...await seedFeatures('nextrev', nextrevFeatures));
  if (nextrevPricing) allResults.push(...await seedPricing('nextrev', nextrevPricing));

  // Summary
  const successCount = allResults.filter(r => r.success).length;
  const failCount = allResults.filter(r => !r.success).length;
  
  console.log(`\n✅ Sync complete! Success: ${successCount}, Failed: ${failCount}`);
  
  if (failCount > 0) {
    console.log('\n❌ Failed operations:');
    allResults.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.site}/${r.type}: ${r.message}`);
    });
  }

  return allResults;
}

// Seed specific site
export async function seedSiteData(siteId: SiteId): Promise<SeedResult[]> {
  const allResults: SeedResult[] = [];

  switch (siteId) {
    case 'texafab': {
      const hero = await fetchJSON('texafab/hero.json');
      const features = await fetchJSON('texafab/features.json');
      const pricing = await fetchJSON('texafab/pricing.json');
      const testimonials = await fetchJSON('texafab/testimonials.json');
      const solutions = await fetchJSON('texafab/solutions.json');
      
      if (hero) allResults.push(...await seedHero('texafab', hero));
      if (features) allResults.push(...await seedFeatures('texafab', features));
      if (pricing) allResults.push(...await seedPricing('texafab', pricing));
      if (testimonials) allResults.push(...await seedTestimonials('texafab', testimonials));
      if (solutions) allResults.push(...await seedSolutions('texafab', solutions));
      break;
    }
    case 'fincore': {
      const hero = await fetchJSON('fincore/hero.json');
      const features = await fetchJSON('fincore/features.json');
      const pricing = await fetchJSON('fincore/pricing.json');
      const testimonials = await fetchJSON('fincore/testimonials.json');
      const solutions = await fetchJSON('fincore/solutions.json');
      
      if (hero) allResults.push(...await seedHero('fincore', hero));
      if (features) allResults.push(...await seedFeatures('fincore', features));
      if (pricing) allResults.push(...await seedPricing('fincore', pricing));
      if (testimonials) allResults.push(...await seedTestimonials('fincore', testimonials));
      if (solutions) allResults.push(...await seedSolutions('fincore', solutions));
      break;
    }
    case 'dubai-stroy': {
      const hero = await fetchJSON('dubai-stroy/hero.json');
      const features = await fetchJSON('dubai-stroy/features.json');
      const pricing = await fetchJSON('dubai-stroy/pricing.json');
      const testimonials = await fetchJSON('dubai-stroy/testimonials.json');
      
      if (hero) allResults.push(...await seedHero('dubai-stroy', hero));
      if (features) allResults.push(...await seedFeatures('dubai-stroy', features));
      if (pricing) allResults.push(...await seedPricing('dubai-stroy', pricing));
      if (testimonials) allResults.push(...await seedTestimonials('dubai-stroy', testimonials));
      break;
    }
    case 'nextrev': {
      const hero = await fetchJSON('nextrev/hero.json');
      const features = await fetchJSON('nextrev/features.json');
      const pricing = await fetchJSON('nextrev/pricing.json');
      
      if (hero) allResults.push(...await seedHero('nextrev', hero));
      if (features) allResults.push(...await seedFeatures('nextrev', features));
      if (pricing) allResults.push(...await seedPricing('nextrev', pricing));
      break;
    }
  }

  return allResults;
}

export default seedAllData;
