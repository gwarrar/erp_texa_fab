// Supported languages
export type Language = 'ar' | 'en' | 'ru' | 'uk' | 'ro' | 'pl' | 'tr';

// Language configuration
export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

// All supported languages configuration
export const LANGUAGES: Record<Language, LanguageConfig> = {
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇬🇧',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    flag: '🇷🇺',
  },
  uk: {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    direction: 'ltr',
    flag: '🇺🇦',
  },
  ro: {
    code: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    direction: 'ltr',
    flag: '🇷🇴',
  },
  pl: {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    direction: 'ltr',
    flag: '🇵🇱',
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    direction: 'ltr',
    flag: '🇹🇷',
  },
};

// Translation keys for admin panel
export interface AdminTranslations {
  // Common
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    filter: string;
    export: string;
    import: string;
    refresh: string;
    loading: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    confirm: string;
    yes: string;
    no: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    open: string;
    view: string;
    download: string;
    upload: string;
    submit: string;
    reset: string;
    clear: string;
    selectAll: string;
    deselectAll: string;
    noResults: string;
    actions: string;
    status: string;
    date: string;
    time: string;
    name: string;
    description: string;
    type: string;
    value: string;
    enabled: string;
    disabled: string;
    active: string;
    inactive: string;
    published: string;
    draft: string;
    pending: string;
    approved: string;
    rejected: string;
  };

  // Authentication
  auth: {
    login: string;
    logout: string;
    email: string;
    password: string;
    rememberMe: string;
    forgotPassword: string;
    resetPassword: string;
    changePassword: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    loginSuccess: string;
    loginFailed: string;
    logoutSuccess: string;
    sessionExpired: string;
    invalidCredentials: string;
    accountLocked: string;
    tooManyAttempts: string;
  };

  // Navigation & Sidebar
  navigation: {
    dashboard: string;
    cms: string;
    seo: string;
    analytics: string;
    users: string;
    settings: string;
    languages: string;
    security: string;
    system: string;
    help: string;
    documentation: string;
  };

  // Dashboard
  dashboard: {
    title: string;
    welcome: string;
    overview: string;
    quickActions: string;
    recentActivity: string;
    statistics: string;
    totalVisitors: string;
    pageViews: string;
    bounceRate: string;
    avgSessionDuration: string;
    activeUsers: string;
    newUsers: string;
    conversionRate: string;
    revenue: string;
  };

  // CMS
  cms: {
    title: string;
    pages: string;
    sections: string;
    media: string;
    menus: string;
    hero: string;
    features: string;
    pricing: string;
    testimonials: string;
    footer: string;
    stats: string;
    solutions: string;
    editHero: string;
    editFeatures: string;
    editPricing: string;
    editTestimonials: string;
    editFooter: string;
    editStats: string;
    editSolutions: string;
    pageTitle: string;
    pageContent: string;
    metaTitle: string;
    metaDescription: string;
    slug: string;
    template: string;
    visibility: string;
    publishDate: string;
  };

  // SEO
  seo: {
    title: string;
    metaTags: string;
    openGraph: string;
    twitterCards: string;
    schemaMarkup: string;
    sitemap: string;
    robotsTxt: string;
    canonicalUrls: string;
    hreflang: string;
    redirects: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogType: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterCard: string;
    generateSitemap: string;
    updateRobots: string;
    addRedirect: string;
    sourceUrl: string;
    targetUrl: string;
    redirectType: string;
    indexing: string;
    allowIndexing: string;
    noIndex: string;
    noFollow: string;
  };

  // Analytics
  analytics: {
    title: string;
    overview: string;
    realtime: string;
    audience: string;
    acquisition: string;
    behavior: string;
    conversions: string;
    googleAnalytics: string;
    googleTagManager: string;
    searchConsole: string;
    trackingId: string;
    measurementId: string;
    containerId: string;
    connectAccount: string;
    disconnectAccount: string;
    viewReport: string;
    dateRange: string;
    today: string;
    yesterday: string;
    last7Days: string;
    last30Days: string;
    last90Days: string;
    customRange: string;
    visitors: string;
    sessions: string;
    pageviews: string;
    avgDuration: string;
    bounceRate: string;
    topPages: string;
    topSources: string;
    topCountries: string;
    devices: string;
    browsers: string;
  };

  // Users
  users: {
    title: string;
    userList: string;
    addUser: string;
    editUser: string;
    deleteUser: string;
    userName: string;
    userEmail: string;
    userRole: string;
    userStatus: string;
    lastLogin: string;
    createdAt: string;
    roles: {
      admin: string;
      editor: string;
      viewer: string;
      moderator: string;
    };
    permissions: string;
    assignRole: string;
    resetPassword: string;
    activateUser: string;
    deactivateUser: string;
  };

  // Settings
  settings: {
    title: string;
    general: string;
    appearance: string;
    notifications: string;
    integrations: string;
    backup: string;
    siteName: string;
    siteUrl: string;
    siteEmail: string;
    timezone: string;
    dateFormat: string;
    language: string;
    theme: string;
    darkMode: string;
    lightMode: string;
    autoMode: string;
    emailNotifications: string;
    pushNotifications: string;
    smsNotifications: string;
    backupNow: string;
    restoreBackup: string;
    scheduleBackup: string;
    autoBackup: string;
  };

  // Security
  security: {
    title: string;
    logs: string;
    twoFactor: string;
    sessions: string;
    ipWhitelist: string;
    ipBlacklist: string;
    loginAttempts: string;
    securityEvents: string;
    eventType: string;
    ipAddress: string;
    userAgent: string;
    timestamp: string;
    enableTwoFactor: string;
    disableTwoFactor: string;
    activeSessions: string;
    terminateSession: string;
    terminateAllSessions: string;
  };

  // System
  system: {
    title: string;
    status: string;
    health: string;
    performance: string;
    cache: string;
    logs: string;
    updates: string;
    serverStatus: string;
    databaseStatus: string;
    cacheStatus: string;
    clearCache: string;
    rebuildCache: string;
    systemInfo: string;
    phpVersion: string;
    databaseVersion: string;
    memoryUsage: string;
    diskUsage: string;
    uptime: string;
  };

  // Messages & Notifications
  messages: {
    saveSuccess: string;
    saveFailed: string;
    deleteSuccess: string;
    deleteFailed: string;
    updateSuccess: string;
    updateFailed: string;
    uploadSuccess: string;
    uploadFailed: string;
    confirmDelete: string;
    confirmAction: string;
    unsavedChanges: string;
    requiredField: string;
    invalidEmail: string;
    invalidUrl: string;
    passwordMismatch: string;
    passwordTooShort: string;
    networkError: string;
    serverError: string;
    accessDenied: string;
    notFound: string;
  };

  // Pricing Plans
  pricing: {
    title: string;
    plans: string;
    addPlan: string;
    editPlan: string;
    deletePlan: string;
    planName: string;
    planPrice: string;
    planPeriod: string;
    planFeatures: string;
    monthly: string;
    yearly: string;
    lifetime: string;
    popular: string;
    recommended: string;
    enterprise: string;
    custom: string;
    contactSales: string;
    startTrial: string;
    subscribe: string;
    currentPlan: string;
    upgradePlan: string;
    downgradePlan: string;
    cancelPlan: string;
  };
}

// Full translations type
export type Translations = AdminTranslations;
