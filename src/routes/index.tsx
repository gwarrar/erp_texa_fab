/**
 * Routes Index
 * Central export for all route components
 * 
 * This modular structure allows:
 * - Easy addition of new sites
 * - Separation of concerns
 * - Lazy loading for better performance
 * - Easy extraction of individual sites for standalone deployment
 * 
 * To extract a site for standalone deployment:
 * 1. Copy the site's routes file
 * 2. Copy the site's pages folder (src/pages/[site]/)
 * 3. Copy the site's components folder (src/components/[site]/)
 * 4. Copy the shared components (src/components/ui/)
 * 5. Copy the site's translations (src/lib/i18n/translations/sites/[site]/)
 * 6. Update App.tsx to only include that site's routes
 * 
 * See scripts/extract-site.md for detailed instructions
 */

export { TexaFabRoutes, texafabRouteObjects } from './texafab.routes';
export { NextRevRoutes, nextrevRouteObjects } from './nextrev.routes';
export { DubaiStroyRoutes, dubaiStroyRouteObjects } from './dubai-stroy.routes';
export { FinCoreRoutes, fincoreRouteObjects } from './fincore.routes';

/**
 * Site Configuration
 * Used for site selector and routing configuration
 */
export const SITE_CONFIG = {
  texafab: {
    id: 'texafab',
    name: 'TexaFab ERP',
    nameAr: 'تيكسافاب',
    basePath: '/',
    description: 'Textile ERP Platform',
    logo: '🏭',
    routesFile: 'texafab.routes.tsx',
    pagesFolder: 'src/pages/',
    componentsFolder: 'src/components/landing/',
    translationsFolder: 'src/lib/i18n/translations/sites/texafab/',
    dataFolder: 'public/data/',
  },
  nextrev: {
    id: 'nextrev',
    name: 'Next Revolution',
    nameAr: 'الثورة التالية',
    basePath: '/next-revolution',
    description: 'Parent Company Website',
    logo: '✨',
    routesFile: 'nextrev.routes.tsx',
    pagesFolder: 'src/pages/nextrev/',
    componentsFolder: 'src/components/nextrev/',
    translationsFolder: 'src/lib/i18n/translations/sites/nextrev/',
    dataFolder: 'public/data/',
  },
  dubaiStroy: {
    id: 'dubai-stroy',
    name: 'Dubai Stroy',
    nameAr: 'دبي ستروي',
    basePath: '/dubai-stroy',
    description: 'Construction & Finishing',
    logo: '🏗️',
    routesFile: 'dubai-stroy.routes.tsx',
    pagesFolder: 'src/pages/dubai-stroy/',
    componentsFolder: 'src/components/dubai-stroy/',
    translationsFolder: 'src/lib/i18n/translations/sites/dubai-stroy/',
    dataFolder: 'public/data/dubai-stroy/',
  },
  fincore: {
    id: 'fincore',
    name: 'FinCore',
    nameAr: 'فينكور',
    basePath: '/fincore',
    description: 'Banking & Money Transfer',
    logo: '🏦',
    routesFile: 'fincore.routes.tsx',
    pagesFolder: 'src/pages/fincore/',
    componentsFolder: 'src/components/fincore/',
    translationsFolder: 'src/lib/i18n/translations/sites/fincore/',
    dataFolder: 'public/data/',
  },
} as const;

export type SiteId = keyof typeof SITE_CONFIG;
