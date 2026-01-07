import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type SiteType = 'texafab' | 'nextrevolution' | 'fincore' | 'dubaistroy';

interface SiteInfo {
  id: SiteType;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  logo: string;
  primaryColor: string;
  accentColor: string;
}

interface SiteContextType {
  currentSite: SiteType;
  setCurrentSite: (site: SiteType) => void;
  siteInfo: SiteInfo;
  sites: SiteInfo[];
}

const sites: SiteInfo[] = [
  {
    id: 'texafab',
    name: 'TexaFab ERP',
    nameAr: 'تيكسا فاب',
    description: 'Textile Industry ERP Solution',
    descriptionAr: 'نظام ERP لصناعة النسيج',
    url: '/',
    logo: '🏭',
    primaryColor: '#059669', // Emerald
    accentColor: '#10b981',
  },
  {
    id: 'nextrevolution',
    name: 'Next Revolution',
    nameAr: 'نيكست ريفوليوشن',
    description: 'Parent Company Website',
    descriptionAr: 'موقع الشركة الأم',
    url: '/next-revolution',
    logo: '✨',
    primaryColor: '#3b82f6', // Blue
    accentColor: '#6366f1',
  },
  {
    id: 'fincore',
    name: 'FinCore Banking',
    nameAr: 'فين كور',
    description: 'Core Banking & Exchange Platform',
    descriptionAr: 'منصة بنكية للصرافة والحوالات',
    url: '/fincore',
    logo: '🏦',
    primaryColor: '#0A1628', // Navy Blue
    accentColor: '#0D9488', // Teal
  },
  {
    id: 'dubaistroy',
    name: 'Dubai Stroy',
    nameAr: 'دبي ستروي',
    description: 'Construction & Interior Finishing',
    descriptionAr: 'شركة بناء وإكساء داخلي',
    url: '/dubai-stroy',
    logo: '🏗️',
    primaryColor: '#d97706', // Amber
    accentColor: '#f59e0b',
  },
];

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [currentSite, setCurrentSite] = useState<SiteType>(() => {
    const saved = localStorage.getItem('admin_current_site');
    return (saved as SiteType) || 'texafab';
  });

  useEffect(() => {
    localStorage.setItem('admin_current_site', currentSite);
  }, [currentSite]);

  const siteInfo = sites.find(s => s.id === currentSite) || sites[0];

  return (
    <SiteContext.Provider value={{ currentSite, setCurrentSite, siteInfo, sites }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}
