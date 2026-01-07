import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollRestoration } from "./components/ui/scroll-restoration";
import { ThemeProvider } from "./components/landing/ThemeContext";
import { LanguageProvider } from "./components/landing/LanguageContext";
import { FloatingBoostButton } from "./components/landing/FloatingBoostButton";
import { WhatsAppChat } from "./components/ui/WhatsAppChat";
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

// Next Revolution Pages
import NRHomePage from "./pages/nextrev/NRHomePage";
import NRAboutPage from "./pages/nextrev/NRAboutPage";
import NRServicesPage from "./pages/nextrev/NRServicesPage";
import NRProductsPage from "./pages/nextrev/NRProductsPage";
import NRInvestmentsPage from "./pages/nextrev/NRInvestmentsPage";
import NRContactPage from "./pages/nextrev/NRContactPage";
import NRBlogPage from "./pages/nextrev/NRBlogPage";
import NRBlogPostPage from "./pages/nextrev/NRBlogPostPage";

// Dubai Stroy Construction Pages
import DSHomePage from "./pages/dubai-stroy/DSHomePage";
import DSPortfolioPage from "./pages/dubai-stroy/DSPortfolioPage";
import DSPricingPage from "./pages/dubai-stroy/DSPricingPage";
import DSContactPage from "./pages/dubai-stroy/DSContactPage";
import DSNewsPage from "./pages/dubai-stroy/DSNewsPage";
import DSServicesPage from "./pages/dubai-stroy/DSServicesPage";
import DSProjectDetailPage from "./pages/dubai-stroy/DSProjectDetailPage";
import DSNewsDetailPage from "./pages/dubai-stroy/DSNewsDetailPage";

// Dubai Stroy Admin Pages
import DSAnnouncementEditorPage from "./admin/pages/DSAnnouncementEditorPage";

// FinCore Banking Pages
import FCHomePage from "./pages/fincore/FCHomePage";
import FCContactPage from "./pages/fincore/FCContactPage";
import FCSolutionsPage from "./pages/fincore/FCSolutionsPage";
import FCFeaturesPage from "./pages/fincore/FCFeaturesPage";
import FCPricingPage from "./pages/fincore/FCPricingPage";
import FCAboutPage from "./pages/fincore/FCAboutPage";
import FCSecurityPage from "./pages/fincore/FCSecurityPage";
import FCPartnersPage from "./pages/fincore/FCPartnersPage";
import FCComparisonPage from "./pages/fincore/FCComparisonPage";
import FCAgentsPage from "./pages/fincore/FCAgentsPage";
import FCLoginPage from "./pages/fincore/FCLoginPage";
import FCRegisterPage from "./pages/fincore/FCRegisterPage";

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
import ChatSettingsPage from "./admin/pages/settings/ChatSettingsPage";
import { SEOMetaPage } from "./admin/pages/seo/SEOMetaPage";
import { AnalyticsPage } from "./admin/pages/seo/AnalyticsPage";
import { AISeoPage } from "./admin/pages/seo/AISeoPage";
import { ServerAnalyticsPage } from "./admin/pages/analytics/ServerAnalyticsPage";
import GoogleAnalyticsPage from "./admin/pages/analytics/GoogleAnalyticsPage";
import { LiveNotificationsPage } from "./admin/pages/notifications/LiveNotificationsPage";
import { NewsEditorPage } from "./admin/pages/cms/NewsEditorPage";
import { NRContentPage } from "./admin/pages/cms/NRContentPage";
import { NRBlogEditorPage } from "./admin/pages/cms/NRBlogEditorPage";

// Get secret admin path from environment
const getAdminSecretPath = () => {
  const path = import.meta.env.VITE_ADMIN_SECRET_PATH || '/admin-portal';
  return path.startsWith('/') ? path : `/${path}`;
};
const ADMIN_SECRET_PATH = getAdminSecretPath();

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isNextRevolutionRoute = location.pathname.startsWith('/next-revolution');
  const isFinCoreRoute = location.pathname.startsWith('/fincore');
  const isDubaiStroyRoute = location.pathname.startsWith('/dubai-stroy');
  const showButton = !isAdminRoute && !isNextRevolutionRoute && !isFinCoreRoute && !isDubaiStroyRoute;
  
  return (
    <>
      <ScrollRestoration />
      {showButton && <FloatingBoostButton />}
      <WhatsAppChat 
        phoneNumber="380674848029"
        welcomeMessage="Hi! How can I help you with TexaCore ERP?"
        agentName="TexaCore Support"
        position="right"
      />
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
      {/* Next Revolution - Parent Company Site */}
      <Route path="/next-revolution" element={<NRHomePage />} />
      <Route path="/next-revolution/about" element={<NRAboutPage />} />
      <Route path="/next-revolution/services" element={<NRServicesPage />} />
      <Route path="/next-revolution/services/*" element={<NRServicesPage />} />
      <Route path="/next-revolution/products" element={<NRProductsPage />} />
      <Route path="/next-revolution/investments" element={<NRInvestmentsPage />} />
      <Route path="/next-revolution/contact" element={<NRContactPage />} />
      <Route path="/next-revolution/blog" element={<NRBlogPage />} />
      <Route path="/next-revolution/blog/:id" element={<NRBlogPostPage />} />
      <Route path="/next-revolution/old" element={<NextRevolutionPage />} />
      
      {/* Dubai Stroy Construction Routes */}
      <Route path="/dubai-stroy" element={<DSHomePage />} />
      <Route path="/dubai-stroy/portfolio" element={<DSPortfolioPage />} />
      <Route path="/dubai-stroy/portfolio/:id" element={<DSProjectDetailPage />} />
      <Route path="/dubai-stroy/pricing" element={<DSPricingPage />} />
      <Route path="/dubai-stroy/contact" element={<DSContactPage />} />
      <Route path="/dubai-stroy/services" element={<DSServicesPage />} />
      <Route path="/dubai-stroy/news" element={<DSNewsPage />} />
      <Route path="/dubai-stroy/news/:id" element={<DSNewsDetailPage />} />
      
      {/* Dubai Stroy Admin Routes */}
      <Route path="/admin/ds-announcement" element={<DSAnnouncementEditorPage />} />
      
      {/* FinCore Banking Routes */}
      <Route path="/fincore" element={<FCHomePage />} />
      <Route path="/fincore/contact" element={<FCContactPage />} />
      <Route path="/fincore/solutions" element={<FCSolutionsPage />} />
      <Route path="/fincore/features" element={<FCFeaturesPage />} />
      <Route path="/fincore/pricing" element={<FCPricingPage />} />
      <Route path="/fincore/about" element={<FCAboutPage />} />
      <Route path="/fincore/security" element={<FCSecurityPage />} />
      <Route path="/fincore/partners" element={<FCPartnersPage />} />
      <Route path="/fincore/comparison" element={<FCComparisonPage />} />
      <Route path="/fincore/agents" element={<FCAgentsPage />} />
      <Route path="/fincore/login" element={<FCLoginPage />} />
      <Route path="/fincore/register" element={<FCRegisterPage />} />
      
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
        {/* Next Revolution Content */}
        <Route path="nr-content" element={<NRContentPage />} />
        <Route path="nr-blog" element={<NRBlogEditorPage />} />
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
        <Route path="analytics/google" element={<GoogleAnalyticsPage />} />
        {/* Notifications Routes */}
        <Route path="notifications" element={<LiveNotificationsPage />} />
        {/* Settings Routes */}
        <Route path="settings/languages" element={<LanguageSettingsPage />} />
        <Route path="settings/status" element={<SystemStatusPage />} />
        <Route path="settings/erp" element={<SystemStatusPage />} />
        <Route path="settings/security" element={<SecurityLogsPage />} />
        <Route path="settings/chat" element={<ChatSettingsPage />} />
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
