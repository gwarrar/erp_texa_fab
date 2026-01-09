// ===========================================
// Admin V2 - Routes Configuration
// ===========================================

import React from 'react';
import { RouteObject } from 'react-router-dom';

// Layout
import { AdminShell } from './components/Layout/AdminShell';

// Pages
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { SiteDashboardPage } from './pages/SiteDashboardPage';
import { HeroEditorPage } from './pages/content/HeroEditorPage';
import { FeaturesEditorPage } from './pages/content/FeaturesEditorPage';
import { PricingEditorPage } from './pages/content/PricingEditorPage';
import { GenericContentEditor } from './pages/content/GenericContentEditor';
import SupabaseContentEditor from './pages/content/SupabaseContentEditor';
import { MediaLibraryPage } from './pages/MediaLibraryPage';
import { UsersPage } from './pages/UsersPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AppearanceSettingsPage } from './pages/settings/AppearanceSettingsPage';
import { LanguageSettingsPage } from './pages/settings/LanguageSettingsPage';
import { SecuritySettingsPage } from './pages/settings/SecuritySettingsPage';
import { GeneralSettingsPage } from './pages/settings/GeneralSettingsPage';
import { SitesListPage } from './pages/SitesListPage';

// Integrations Pages
import { AnnouncementBarPage } from './pages/integrations/AnnouncementBarPage';
import { AnalyticsSettingsPage } from './pages/integrations/AnalyticsSettingsPage';
import { SEOSettingsPage } from './pages/integrations/SEOSettingsPage';
import { CallbackWidgetPage } from './pages/integrations/CallbackWidgetPage';
import { IntegrationsOverviewPage } from './pages/integrations/IntegrationsOverviewPage';
import { ChatSettingsPage } from './pages/integrations/ChatSettingsPage';

export const adminV2Routes: RouteObject = {
  path: 'admin-v2',
  element: <AdminShell />,
  children: [
    // Login
    {
      path: 'login',
      element: <LoginPage />,
    },
    
    // Dashboard
    {
      index: true,
      element: <DashboardPage />,
    },
    
    // Sites
    {
      path: 'sites',
      children: [
        {
          index: true,
          element: <SitesListPage />,
        },
        {
          path: ':siteId',
          children: [
            {
              index: true,
              element: <SiteDashboardPage />,
            },
            {
              path: 'content',
              children: [
                {
                  path: 'hero',
                  element: <HeroEditorPage />,
                },
                {
                  path: 'features',
                  element: <FeaturesEditorPage />,
                },
                {
                  path: 'pricing',
                  element: <PricingEditorPage />,
                },
                // Supabase-powered content types (NEW)
                {
                  path: 'testimonials',
                  element: <SupabaseContentEditor />,
                },
                {
                  path: 'news',
                  element: <SupabaseContentEditor />,
                },
                {
                  path: 'solutions',
                  element: <SupabaseContentEditor />,
                },
                {
                  path: 'faq',
                  element: <SupabaseContentEditor />,
                },
                {
                  path: 'contact',
                  element: <SupabaseContentEditor />,
                },
                {
                  path: 'chat',
                  element: <SupabaseContentEditor />,
                },
                // Legacy content types (still using JSON files)
                {
                  path: 'portfolio',
                  element: <GenericContentEditor />,
                },
                {
                  path: 'services',
                  element: <GenericContentEditor />,
                },
                {
                  path: 'products',
                  element: <GenericContentEditor />,
                },
                {
                  path: 'blog',
                  element: <GenericContentEditor />,
                },
              ],
            },
            // Integrations
            {
              path: 'integrations',
              children: [
                {
                  index: true,
                  element: <IntegrationsOverviewPage />,
                },
                {
                  path: 'announcement',
                  element: <AnnouncementBarPage />,
                },
                {
                  path: 'analytics',
                  element: <AnalyticsSettingsPage />,
                },
                {
                  path: 'seo',
                  element: <SEOSettingsPage />,
                },
                {
                  path: 'callback-widget',
                  element: <CallbackWidgetPage />,
                },
                {
                  path: 'chat',
                  element: <ChatSettingsPage />,
                },
              ],
            },
          ],
        },
      ],
    },
    
    // Media Library
    {
      path: 'media',
      element: <MediaLibraryPage />,
    },
    
    // Users
    {
      path: 'users',
      element: <UsersPage />,
    },
    
    // Analytics
    {
      path: 'analytics',
      element: <AnalyticsPage />,
    },
    
    // Notifications
    {
      path: 'notifications',
      element: <NotificationsPage />,
    },
    
    // Settings
    {
      path: 'settings',
      children: [
        {
          path: 'appearance',
          element: <AppearanceSettingsPage />,
        },
        {
          path: 'languages',
          element: <LanguageSettingsPage />,
        },
        {
          path: 'security',
          element: <SecuritySettingsPage />,
        },
        {
          path: 'general',
          element: <GeneralSettingsPage />,
        },
      ],
    },
  ],
};
