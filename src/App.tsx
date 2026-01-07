import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollRestoration } from "./components/ui/scroll-restoration";
import { ThemeProvider } from "./components/landing/ThemeContext";
import { LanguageProvider } from "./components/landing/LanguageContext";
import { FloatingBoostButton } from "./components/landing/FloatingBoostButton";
import { I18nProvider } from "./lib/i18n";
import Home from "./components/home";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import SolutionsPage from "./pages/SolutionsPage";
import WorkflowPage from "./pages/WorkflowPage";
import ContainerTrackingPage from "./pages/ContainerTrackingPage";
import RollManagementPage from "./pages/RollManagementPage";
import POSSystemPage from "./pages/POSSystemPage";
import AgentsDealersPage from "./pages/AgentsDealersPage";
import ReportsAnalyticsPage from "./pages/ReportsAnalyticsPage";
import ShippingPage from "./pages/ShippingPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import WarehouseManagementPage from "./pages/WarehouseManagementPage";
import FabricManagementPage from "./pages/FabricManagementPage";
import AccountingPage from "./pages/AccountingPage";
import EmployeeManagementPage from "./pages/EmployeeManagementPage";
import WorkflowCompletePage from "./pages/WorkflowCompletePage";
import EcommercePage from "./pages/EcommercePage";
import CRMPage from "./pages/CRMPage";
import FabricManufacturingPage from "./pages/FabricManufacturingPage";
import GarmentManufacturingPage from "./pages/GarmentManufacturingPage";
import AIAnalyticsPage from "./pages/AIAnalyticsPage";
import EnterpriseLandingPage from "./pages/EnterpriseLandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllSolutionsPage from "./pages/AllSolutionsPage";
import NextRevolutionPage from "./pages/NextRevolutionPage";
import NewsPage from "./pages/NewsPage";

// Admin imports
import { AdminLayout } from "./admin/AdminLayout";
import { AdminLoginPage } from "./admin/pages/AdminLoginPage";
import { AuthProvider } from "./admin/context/AuthContext";
import { DashboardPage } from "./admin/pages/DashboardPage";
import { HeroEditorPage } from "./admin/pages/cms/HeroEditorPage";
import { SolutionsEditorPage } from "./admin/pages/cms/SolutionsEditorPage";
import { StatsEditorPage } from "./admin/pages/cms/StatsEditorPage";
import { FooterEditorPage } from "./admin/pages/cms/FooterEditorPage";
import { PagesEditorPage } from "./admin/pages/cms/PagesEditorPage";
import { FeaturesEditorPage } from "./admin/pages/cms/FeaturesEditorPage";
import { TestimonialsEditorPage } from "./admin/pages/cms/TestimonialsEditorPage";
import { FAQEditorPage } from "./admin/pages/cms/FAQEditorPage";
import { PricingPlansPage } from "./admin/pages/pricing/PricingPlansPage";
import { ContentManagersPage } from "./admin/pages/users/ContentManagersPage";
import { LanguageSettingsPage } from "./admin/pages/settings/LanguageSettingsPage";
import { SystemStatusPage } from "./admin/pages/settings/SystemStatusPage";
import { SecurityLogsPage } from "./admin/pages/settings/SecurityLogsPage";
import { SEOMetaPage } from "./admin/pages/seo/SEOMetaPage";
import { AnalyticsPage } from "./admin/pages/seo/AnalyticsPage";
import { AISeoPage } from "./admin/pages/seo/AISeoPage";
import { ServerAnalyticsPage } from "./admin/pages/analytics/ServerAnalyticsPage";
import { LiveNotificationsPage } from "./admin/pages/notifications/LiveNotificationsPage";
import { NewsEditorPage } from "./admin/pages/cms/NewsEditorPage";

// Get secret admin path from environment
const getAdminSecretPath = () => {
  const path = import.meta.env.VITE_ADMIN_SECRET_PATH || '/admin-portal';
  return path.startsWith('/') ? path : `/${path}`;
};
const ADMIN_SECRET_PATH = getAdminSecretPath();

function AppContent() {
  const location = useLocation();
  const hideOnPages: string[] = []; // نعرض الزر في كل الصفحات
  const isAdminRoute = location.pathname.startsWith('/admin');
  const showButton = !hideOnPages.includes(location.pathname) && !isAdminRoute;
  
  return (
    <>
      <ScrollRestoration />
      {showButton && <FloatingBoostButton />}
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/comparison" element={<EnterpriseLandingPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/workflow" element={<WorkflowPage />} />
      <Route path="/container-tracking" element={<ContainerTrackingPage />} />
      <Route path="/roll-management" element={<RollManagementPage />} />
      <Route path="/pos-system" element={<POSSystemPage />} />
      <Route path="/agents-dealers" element={<AgentsDealersPage />} />
      <Route path="/reports-analytics" element={<ReportsAnalyticsPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/warehouse-management" element={<WarehouseManagementPage />} />
      <Route path="/fabric-management" element={<FabricManagementPage />} />
      <Route path="/accounting" element={<AccountingPage />} />
      <Route path="/employee-management" element={<EmployeeManagementPage />} />
      <Route path="/workflow-complete" element={<WorkflowCompletePage />} />
      <Route path="/ecommerce" element={<EcommercePage />} />
      <Route path="/crm" element={<CRMPage />} />
      <Route path="/fabric-manufacturing" element={<FabricManufacturingPage />} />
      <Route path="/garment-manufacturing" element={<GarmentManufacturingPage />} />
      <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/all-solutions" element={<AllSolutionsPage />} />
      <Route path="/next-revolution" element={<NextRevolutionPage />} />
      <Route path="/news" element={<LanguageProvider><NewsPage /></LanguageProvider>} />
      <Route path="/news/:id" element={<LanguageProvider><NewsPage /></LanguageProvider>} />
      
      {/* Admin Login Route - Secret Path */}
      <Route 
        path={ADMIN_SECRET_PATH} 
        element={
          <I18nProvider>
            <AuthProvider>
              <AdminLoginPage />
            </AuthProvider>
          </I18nProvider>
        } 
      />
      {/* Fallback admin portal route */}
      <Route 
        path="/texacore-admin-portal" 
        element={
          <I18nProvider>
            <AuthProvider>
              <AdminLoginPage />
            </AuthProvider>
          </I18nProvider>
        } 
      />
      
      {/* Admin Dashboard Routes - Protected */}
      <Route path="/admin" element={<I18nProvider><AdminLayout /></I18nProvider>}>
        <Route index element={<DashboardPage />} />
        {/* CMS Routes */}
        <Route path="cms/pages" element={<PagesEditorPage />} />
        <Route path="cms/hero" element={<HeroEditorPage />} />
        <Route path="cms/features" element={<FeaturesEditorPage />} />
        <Route path="cms/solutions" element={<SolutionsEditorPage />} />
        <Route path="cms/stats" element={<StatsEditorPage />} />
        <Route path="cms/testimonials" element={<TestimonialsEditorPage />} />
        <Route path="cms/faq" element={<FAQEditorPage />} />
        <Route path="cms/footer" element={<FooterEditorPage />} />
        <Route path="cms/news" element={<NewsEditorPage />} />
        {/* Pricing Routes */}
        <Route path="pricing/plans" element={<PricingPlansPage />} />
        <Route path="pricing/roi" element={<PricingPlansPage />} />
        <Route path="pricing/features" element={<PricingPlansPage />} />
        {/* Content Managers Routes */}
        <Route path="users/directory" element={<ContentManagersPage />} />
        {/* SEO Routes */}
        <Route path="seo/meta" element={<SEOMetaPage />} />
        <Route path="seo/ai-seo" element={<AISeoPage />} />
        <Route path="seo/analytics" element={<AnalyticsPage />} />
        <Route path="seo/media" element={<SEOMetaPage />} />
        <Route path="seo/sitemap" element={<SEOMetaPage />} />
        {/* Analytics Routes */}
        <Route path="analytics/overview" element={<AnalyticsPage />} />
        <Route path="analytics/server" element={<ServerAnalyticsPage />} />
        <Route path="analytics/visitors" element={<LiveNotificationsPage />} />
        {/* Notifications Routes */}
        <Route path="notifications" element={<LiveNotificationsPage />} />
        {/* Settings Routes */}
        <Route path="settings/languages" element={<LanguageSettingsPage />} />
        <Route path="settings/status" element={<SystemStatusPage />} />
        <Route path="settings/erp" element={<SystemStatusPage />} />
        <Route path="settings/security" element={<SecurityLogsPage />} />
      </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
