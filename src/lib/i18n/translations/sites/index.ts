/**
 * Site Translations Index
 * Central export for all site-specific translations
 * 
 * This modular structure allows:
 * - Easy addition of new sites
 * - Separation of translations per site
 * - Lazy loading potential for large translations
 * - Easy extraction of individual sites for standalone deployment
 */

// TexaFab ERP - Main textile platform
export { texafabTranslations, texafabEn, texafabAr } from './texafab';

// FinCore Banking - Financial platform
export { fincoreTranslations, fincoreEn, fincoreAr } from './fincore';

// Dubai Stroy - Construction company
export { dubaiStroyTranslations, dubaiStroyEn, dubaiStroyAr } from './dubai-stroy';

// Next Revolution - Parent company
export { nextrevTranslations, nextrevEn, nextrevAr } from './nextrev';

// Exchange Core - Currency exchange platform
export { exchangeEn, exchangeAr } from './exchange';

// MedCore Healthcare - Medical ERP platform
export { medcoreTranslations, medcoreEn, medcoreAr } from './medcore';

// InduCore Manufacturing - Industrial ERP platform
export { inducoreTranslations, inducoreEn, inducoreAr, inducoreRu } from './inducore';

// NexaCore ERP - General Business ERP platform
export { nexacoreTranslations, nexacoreEN, nexacoreAR } from './nexacore';

/**
 * Combined site translations for easy access
 */
export const siteTranslations = {
  texafab: () => import('./texafab').then(m => m.texafabTranslations),
  fincore: () => import('./fincore').then(m => m.fincoreTranslations),
  'dubai-stroy': () => import('./dubai-stroy').then(m => m.dubaiStroyTranslations),
  nextrev: () => import('./nextrev').then(m => m.nextrevTranslations),
  exchange: () => import('./exchange').then(m => ({ en: m.exchangeEn, ar: m.exchangeAr })),
  medcore: () => import('./medcore').then(m => m.medcoreTranslations),
  inducore: () => import('./inducore').then(m => m.inducoreTranslations),
  nexacore: () => import('./nexacore').then(m => m.nexacoreTranslations),
};

export type SiteId = keyof typeof siteTranslations;
