/**
 * Main App Component
 * Direct imports for faster initial load (no lazy loading)
 * 
 * Sites: TexaCore ERP, Next Revolution, Dubai Stroy, FinCore, Exchange Core
 * Each site has its own routes file in src/routes/
 */
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollRestoration } from "@/components/ui/scroll-restoration";
import { ThemeProvider } from "@/components/landing/ThemeContext";
import { LanguageProvider } from "@/components/landing/LanguageContext";
import { FloatingBoostButton } from "@/components/landing/FloatingBoostButton";

// Admin V2
import { AdminStoreProvider } from "@/admin-v2/context/AdminStore";
import { AdminShell } from "@/admin-v2/components/Layout/AdminShell";
import { LoginPage as AdminV2LoginPage } from "@/admin-v2/pages/LoginPage";
import { DashboardPage as AdminV2DashboardPage } from "@/admin-v2/pages/DashboardPage";
import { SiteDashboardPage as AdminV2SiteDashboardPage } from "@/admin-v2/pages/SiteDashboardPage";
import { HeroEditorPage as AdminV2HeroEditorPage } from "@/admin-v2/pages/content/HeroEditorPage";
import { FeaturesEditorPage as AdminV2FeaturesEditorPage } from "@/admin-v2/pages/content/FeaturesEditorPage";
import { PricingEditorPage as AdminV2PricingEditorPage } from "@/admin-v2/pages/content/PricingEditorPage";
import { GenericContentEditor as AdminV2GenericContentEditor } from "@/admin-v2/pages/content/GenericContentEditor";
import SupabaseContentEditor from "@/admin-v2/pages/content/SupabaseContentEditor";
import { MediaLibraryPage as AdminV2MediaLibraryPage } from "@/admin-v2/pages/MediaLibraryPage";
import { UsersPage as AdminV2UsersPage } from "@/admin-v2/pages/UsersPage";
import { AnalyticsPage as AdminV2AnalyticsPage } from "@/admin-v2/pages/AnalyticsPage";
import { NotificationsPage as AdminV2NotificationsPage } from "@/admin-v2/pages/NotificationsPage";
import { AppearanceSettingsPage as AdminV2AppearanceSettingsPage } from "@/admin-v2/pages/settings/AppearanceSettingsPage";
import { LanguageSettingsPage as AdminV2LanguageSettingsPage } from "@/admin-v2/pages/settings/LanguageSettingsPage";
import { SecuritySettingsPage as AdminV2SecuritySettingsPage } from "@/admin-v2/pages/settings/SecuritySettingsPage";
import { GeneralSettingsPage as AdminV2GeneralSettingsPage } from "@/admin-v2/pages/settings/GeneralSettingsPage";
import { SitesListPage as AdminV2SitesListPage } from "@/admin-v2/pages/SitesListPage";
import { SyncDataPage as AdminV2SyncDataPage } from "@/admin-v2/pages/SyncDataPage";

// Integrations Pages
import { AnnouncementBarPage as AdminV2AnnouncementBarPage } from "@/admin-v2/pages/integrations/AnnouncementBarPage";
import { AnalyticsSettingsPage as AdminV2AnalyticsSettingsPage } from "@/admin-v2/pages/integrations/AnalyticsSettingsPage";
import { SEOSettingsPage as AdminV2SEOSettingsPage } from "@/admin-v2/pages/integrations/SEOSettingsPage";
import { CallbackWidgetPage as AdminV2CallbackWidgetPage } from "@/admin-v2/pages/integrations/CallbackWidgetPage";
import { IntegrationsOverviewPage as AdminV2IntegrationsOverviewPage } from "@/admin-v2/pages/integrations/IntegrationsOverviewPage";
import { ChatSettingsPage as AdminV2ChatSettingsPage } from "@/admin-v2/pages/integrations/ChatSettingsPage";

// ============================================
// TEXACORE ERP PAGES (Main Platform)
// ============================================
import Home from "./components/home";
import FeaturesPage from "@/pages/FeaturesPage";
import PricingPage from "@/pages/PricingPage";
import ContactPage from "@/pages/ContactPage";
import IndustriesPage from "@/pages/IndustriesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import WorkflowPage from "@/pages/WorkflowPage";
import ContainerTrackingPage from "@/pages/ContainerTrackingPage";
import RollManagementPage from "@/pages/RollManagementPage";
import POSSystemPage from "@/pages/POSSystemPage";
import AgentsDealersPage from "@/pages/AgentsDealersPage";
import ReportsAnalyticsPage from "@/pages/ReportsAnalyticsPage";
import ShippingPage from "@/pages/ShippingPage";
import FAQPage from "@/pages/FAQPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import WarehouseManagementPage from "@/pages/WarehouseManagementPage";
import FabricManagementPage from "@/pages/FabricManagementPage";
import AccountingPage from "@/pages/AccountingPage";
import EmployeeManagementPage from "@/pages/EmployeeManagementPage";
import WorkflowCompletePage from "@/pages/WorkflowCompletePage";
import EcommercePage from "@/pages/EcommercePage";
import CRMPage from "@/pages/CRMPage";
import FabricManufacturingPage from "@/pages/FabricManufacturingPage";
import GarmentManufacturingPage from "@/pages/GarmentManufacturingPage";
import AIAnalyticsPage from "@/pages/AIAnalyticsPage";
import EnterpriseLandingPage from "@/pages/EnterpriseLandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import AllSolutionsPage from "@/pages/AllSolutionsPage";
import NewsPage from "@/pages/NewsPage";

// ============================================
// NEXT REVOLUTION PAGES (Parent Company)
// ============================================
import NRHomePage from "@/pages/nextrev/NRHomePage";
import NRAboutPage from "@/pages/nextrev/NRAboutPage";
import NRServicesPage from "@/pages/nextrev/NRServicesPage";
import NRProductsPage from "@/pages/nextrev/NRProductsPage";
import NRInvestmentsPage from "@/pages/nextrev/NRInvestmentsPage";
import NRContactPage from "@/pages/nextrev/NRContactPage";
import NRBlogPage from "@/pages/nextrev/NRBlogPage";
import NRBlogPostPage from "@/pages/nextrev/NRBlogPostPage";
import NextRevolutionPage from "@/pages/NextRevolutionPage";

// ============================================
// DUBAI STROY PAGES (Construction)
// ============================================
import DSHomePage from "@/pages/dubai-stroy/DSHomePage";
import DSPortfolioPage from "@/pages/dubai-stroy/DSPortfolioPage";
import DSPricingPage from "@/pages/dubai-stroy/DSPricingPage";
import DSContactPage from "@/pages/dubai-stroy/DSContactPage";
import DSNewsPage from "@/pages/dubai-stroy/DSNewsPage";
import DSServicesPage from "@/pages/dubai-stroy/DSServicesPage";
import DSProjectDetailPage from "@/pages/dubai-stroy/DSProjectDetailPage";
import DSNewsDetailPage from "@/pages/dubai-stroy/DSNewsDetailPage";

// ============================================
// FINCORE PAGES (Banking)
// ============================================
import FCHomePage from "@/pages/fincore/FCHomePage";
import FCContactPage from "@/pages/fincore/FCContactPage";
import FCSolutionsPage from "@/pages/fincore/FCSolutionsPage";
import FCFeaturesPage from "@/pages/fincore/FCFeaturesPage";
import FCPricingPage from "@/pages/fincore/FCPricingPage";
import FCAboutPage from "@/pages/fincore/FCAboutPage";
import FCSecurityPage from "@/pages/fincore/FCSecurityPage";
import FCPartnersPage from "@/pages/fincore/FCPartnersPage";
import FCComparisonPage from "@/pages/fincore/FCComparisonPage";
import FCAgentsPage from "@/pages/fincore/FCAgentsPage";
import FCLoginPage from "@/pages/fincore/FCLoginPage";
import FCRegisterPage from "@/pages/fincore/FCRegisterPage";

// ============================================
// EXCHANGE CORE PAGES (Currency Exchange)
// ============================================
import ExchangeHomePage from "@/pages/exchange/ExchangeHomePage";

// ============================================
// MEDCORE PAGES (Healthcare)
// ============================================
import MCHomePage from "@/pages/medcore/MCHomePage";
import MCContactPage from "@/pages/medcore/MCContactPage";
import MCPricingPage from "@/pages/medcore/MCPricingPage";
import MCFeaturesPage from "@/pages/medcore/MCFeaturesPage";
import MCLoginPage from "@/pages/medcore/MCLoginPage";
import MCRegisterPage from "@/pages/medcore/MCRegisterPage";
import MCSolutionsPage from "@/pages/medcore/MCSolutionsPage";
import MCEMRPage from "@/pages/medcore/solutions/MCEMRPage";
import MCAppointmentsPage from "@/pages/medcore/solutions/MCAppointmentsPage";
import MCPharmacyPage from "@/pages/medcore/solutions/MCPharmacyPage";
import MCLaboratoryPage from "@/pages/medcore/solutions/MCLaboratoryPage";
import MCBillingPage from "@/pages/medcore/solutions/MCBillingPage";
import MCAnalyticsPage from "@/pages/medcore/solutions/MCAnalyticsPage";
import MCTelemedicinePage from "@/pages/medcore/solutions/MCTelemedicinePage";
import MCWorkflowPage from "@/pages/medcore/MCWorkflowPage";
import MCWhyChoosePage from "@/pages/medcore/MCWhyChoosePage";

// ============================================
// INDUCORE PAGES (Manufacturing)
// ============================================
import ICHomePage from "@/pages/inducore/ICHomePage";
import ICContactPage from "@/pages/inducore/ICContactPage";
import ICPricingPage from "@/pages/inducore/ICPricingPage";
import ICFeaturesPage from "@/pages/inducore/ICFeaturesPage";
import ICWorkflowPage from "@/pages/inducore/ICWorkflowPage";
import ICWhyChoosePage from "@/pages/inducore/ICWhyChoosePage";
import ICSolutionsPage from "@/pages/inducore/ICSolutionsPage";
import ICLoginPage from "@/pages/inducore/ICLoginPage";
import ICRegisterPage from "@/pages/inducore/ICRegisterPage";
import ICProductionPage from "@/pages/inducore/solutions/ICProductionPage";
import ICInventoryPage from "@/pages/inducore/solutions/ICInventoryPage";
import ICWarehousePage from "@/pages/inducore/solutions/ICWarehousePage";
import ICOrdersPage from "@/pages/inducore/solutions/ICOrdersPage";
import ICMetalSteelPage from "@/pages/inducore/solutions/ICMetalSteelPage";
import ICFoodBeveragePage from "@/pages/inducore/solutions/ICFoodBeveragePage";
import ICPharmaceuticalPage from "@/pages/inducore/solutions/ICPharmaceuticalPage";
import ICTextilePage from "@/pages/inducore/solutions/ICTextilePage";
import ICChemicalPage from "@/pages/inducore/solutions/ICChemicalPage";
import ICElectronicsPage from "@/pages/inducore/solutions/ICElectronicsPage";
import ICAutomotivePage from "@/pages/inducore/solutions/ICAutomotivePage";
import ICPlasticsPage from "@/pages/inducore/solutions/ICPlasticsPage";

// ============================================
// NEXACORE PAGES (Business ERP)
// ============================================
import NCHomePage from "@/pages/nexacore/NCHomePage";
import NCFeaturesPage from "@/pages/nexacore/NCFeaturesPage";
import NCWorkflowPage from "@/pages/nexacore/NCWorkflowPage";
import NCContactPage from "@/pages/nexacore/NCContactPage";
import NCPricingPage from "@/pages/nexacore/NCPricingPage";
import NCRegisterPage from "@/pages/nexacore/NCRegisterPage";
import NCLoginPage from "@/pages/nexacore/NCLoginPage";
import NCSolutionsPage from "@/pages/nexacore/NCSolutionsPage";
import NCSalesPage from "@/pages/nexacore/solutions/NCSalesPage";
import NCPurchasesPage from "@/pages/nexacore/solutions/NCPurchasesPage";
import NCInventoryPage from "@/pages/nexacore/solutions/NCInventoryPage";
import NCAccountingPage from "@/pages/nexacore/solutions/NCAccountingPage";
import NCCRMPage from "@/pages/nexacore/solutions/NCCRMPage";
import NCHRPage from "@/pages/nexacore/solutions/NCHRPage";
import NCAIPage from "@/pages/nexacore/solutions/NCAIPage";
import NCBranchesPage from "@/pages/nexacore/solutions/NCBranchesPage";

// Get secret admin path from environment
const getAdminSecretPath = () => {
  const path = import.meta.env.VITE_ADMIN_SECRET_PATH || '/admin-portal';
  return path.startsWith('/') ? path : `/${path}`;
};
const ADMIN_SECRET_PATH = getAdminSecretPath();

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/admin-v2');
  const isNextRevolutionRoute = location.pathname.startsWith('/next-revolution');
  const isFinCoreRoute = location.pathname.startsWith('/fincore');
  const isDubaiStroyRoute = location.pathname.startsWith('/dubai-stroy');
  const isExchangeRoute = location.pathname.startsWith('/exchange');
  const isMedCoreRoute = location.pathname.startsWith('/medcore');
  const isInduCoreRoute = location.pathname.startsWith('/inducore');
  const isNexaCoreRoute = location.pathname.startsWith('/nexacore');
  const showButton = !isAdminRoute && !isNextRevolutionRoute && !isFinCoreRoute && !isDubaiStroyRoute && !isExchangeRoute && !isMedCoreRoute && !isInduCoreRoute && !isNexaCoreRoute;
  
  return (
    <>
      <ScrollRestoration />
      {showButton && <FloatingBoostButton />}
      <Routes>
          {/* ============================================ */}
          {/* TEXACORE ERP ROUTES (Main Platform) */}
          {/* ============================================ */}
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<EnterpriseLandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
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
          <Route path="/news" element={<LanguageProvider><NewsPage /></LanguageProvider>} />
          <Route path="/news/:id" element={<LanguageProvider><NewsPage /></LanguageProvider>} />
          
          {/* ============================================ */}
          {/* NEXT REVOLUTION ROUTES (Parent Company) */}
          {/* ============================================ */}
          <Route path="/nextrev" element={<NRHomePage />} />
          <Route path="/nextrev/about" element={<NRAboutPage />} />
          <Route path="/nextrev/services" element={<NRServicesPage />} />
          <Route path="/nextrev/services/*" element={<NRServicesPage />} />
          <Route path="/nextrev/products" element={<NRProductsPage />} />
          <Route path="/nextrev/investments" element={<NRInvestmentsPage />} />
          <Route path="/nextrev/contact" element={<NRContactPage />} />
          <Route path="/nextrev/blog" element={<NRBlogPage />} />
          <Route path="/nextrev/blog/:id" element={<NRBlogPostPage />} />
          
          {/* Legacy routes - redirect from old URLs */}
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
          
          {/* ============================================ */}
          {/* DUBAI STROY ROUTES (Construction) */}
          {/* ============================================ */}
          <Route path="/dubai-stroy" element={<DSHomePage />} />
          <Route path="/dubai-stroy/portfolio" element={<DSPortfolioPage />} />
          <Route path="/dubai-stroy/portfolio/:id" element={<DSProjectDetailPage />} />
          <Route path="/dubai-stroy/pricing" element={<DSPricingPage />} />
          <Route path="/dubai-stroy/contact" element={<DSContactPage />} />
          <Route path="/dubai-stroy/services" element={<DSServicesPage />} />
          <Route path="/dubai-stroy/news" element={<DSNewsPage />} />
          <Route path="/dubai-stroy/news/:id" element={<DSNewsDetailPage />} />
          
          {/* ============================================ */}
          {/* FINCORE ROUTES (Banking) */}
          {/* ============================================ */}
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
          
          {/* ============================================ */}
          {/* EXCHANGE CORE ROUTES (Currency Exchange) */}
          {/* ============================================ */}
          <Route path="/exchange" element={<ExchangeHomePage />} />
          <Route path="/exchange/*" element={<ExchangeHomePage />} />
          
          {/* ============================================ */}
          {/* MEDCORE ROUTES (Healthcare) */}
          {/* ============================================ */}
          <Route path="/medcore" element={<MCHomePage />} />
          <Route path="/medcore/features" element={<MCFeaturesPage />} />
          <Route path="/medcore/pricing" element={<MCPricingPage />} />
          <Route path="/medcore/contact" element={<MCContactPage />} />
          <Route path="/medcore/login" element={<MCLoginPage />} />
          <Route path="/medcore/register" element={<MCRegisterPage />} />
          <Route path="/medcore/solutions" element={<MCSolutionsPage />} />
          <Route path="/medcore/solutions/emr" element={<MCEMRPage />} />
          <Route path="/medcore/solutions/appointments" element={<MCAppointmentsPage />} />
          <Route path="/medcore/solutions/pharmacy" element={<MCPharmacyPage />} />
          <Route path="/medcore/solutions/laboratory" element={<MCLaboratoryPage />} />
          <Route path="/medcore/solutions/billing" element={<MCBillingPage />} />
          <Route path="/medcore/solutions/analytics" element={<MCAnalyticsPage />} />
          <Route path="/medcore/solutions/telemedicine" element={<MCTelemedicinePage />} />
          <Route path="/medcore/workflow" element={<MCWorkflowPage />} />
          <Route path="/medcore/why-medcore" element={<MCWhyChoosePage />} />
          <Route path="/medcore/*" element={<MCHomePage />} />
          
          {/* ============================================ */}
          {/* INDUCORE ROUTES (Manufacturing) */}
          {/* ============================================ */}
          <Route path="/inducore" element={<ICHomePage />} />
          <Route path="/inducore/features" element={<ICFeaturesPage />} />
          <Route path="/inducore/pricing" element={<ICPricingPage />} />
          <Route path="/inducore/contact" element={<ICContactPage />} />
          <Route path="/inducore/workflow" element={<ICWorkflowPage />} />
          <Route path="/inducore/why-inducore" element={<ICWhyChoosePage />} />
          <Route path="/inducore/solutions" element={<ICSolutionsPage />} />
          <Route path="/inducore/solutions/production" element={<ICProductionPage />} />
          <Route path="/inducore/solutions/inventory" element={<ICInventoryPage />} />
          <Route path="/inducore/solutions/warehouse" element={<ICWarehousePage />} />
          <Route path="/inducore/solutions/orders" element={<ICOrdersPage />} />
          <Route path="/inducore/solutions/metal-steel" element={<ICMetalSteelPage />} />
          <Route path="/inducore/solutions/food-beverage" element={<ICFoodBeveragePage />} />
          <Route path="/inducore/solutions/pharmaceutical" element={<ICPharmaceuticalPage />} />
          <Route path="/inducore/solutions/textile" element={<ICTextilePage />} />
          <Route path="/inducore/solutions/chemical" element={<ICChemicalPage />} />
          <Route path="/inducore/solutions/electronics" element={<ICElectronicsPage />} />
          <Route path="/inducore/solutions/automotive" element={<ICAutomotivePage />} />
          <Route path="/inducore/solutions/plastics" element={<ICPlasticsPage />} />
          <Route path="/inducore/login" element={<ICLoginPage />} />
          <Route path="/inducore/register" element={<ICRegisterPage />} />
          <Route path="/inducore/*" element={<ICHomePage />} />
          
          {/* ============================================ */}
          {/* NEXACORE ROUTES (Business ERP) */}
          {/* ============================================ */}
          <Route path="/nexacore" element={<NCHomePage />} />
          <Route path="/nexacore/features" element={<NCFeaturesPage />} />
          <Route path="/nexacore/workflow" element={<NCWorkflowPage />} />
          <Route path="/nexacore/contact" element={<NCContactPage />} />
          <Route path="/nexacore/pricing" element={<NCPricingPage />} />
          <Route path="/nexacore/register" element={<NCRegisterPage />} />
          <Route path="/nexacore/login" element={<NCLoginPage />} />
          <Route path="/nexacore/solutions" element={<NCSolutionsPage />} />
          <Route path="/nexacore/solutions/sales" element={<NCSalesPage />} />
          <Route path="/nexacore/solutions/purchases" element={<NCPurchasesPage />} />
          <Route path="/nexacore/solutions/inventory" element={<NCInventoryPage />} />
          <Route path="/nexacore/solutions/accounting" element={<NCAccountingPage />} />
          <Route path="/nexacore/solutions/crm" element={<NCCRMPage />} />
          <Route path="/nexacore/solutions/hr" element={<NCHRPage />} />
          <Route path="/nexacore/solutions/ai" element={<NCAIPage />} />
          <Route path="/nexacore/solutions/branches" element={<NCBranchesPage />} />
          <Route path="/nexacore/*" element={<NCHomePage />} />
          
          {/* ============================================ */}
          {/* ADMIN V2 ROUTES (New Admin Panel) */}
          {/* ============================================ */}
          <Route path="/admin-v2/login" element={
            <AdminStoreProvider>
              <AdminV2LoginPage />
            </AdminStoreProvider>
          } />
          <Route path="/admin-v2" element={
            <AdminStoreProvider>
              <AdminShell />
            </AdminStoreProvider>
          }>
            <Route index element={<AdminV2DashboardPage />} />
            <Route path="sites" element={<AdminV2SitesListPage />} />
            <Route path="sites/:siteId" element={<AdminV2SiteDashboardPage />} />
            <Route path="sites/:siteId/content/hero" element={<AdminV2HeroEditorPage />} />
            <Route path="sites/:siteId/content/features" element={<AdminV2FeaturesEditorPage />} />
            <Route path="sites/:siteId/content/pricing" element={<AdminV2PricingEditorPage />} />
            {/* Supabase Content Editors */}
            <Route path="sites/:siteId/content/testimonials" element={<SupabaseContentEditor />} />
            <Route path="sites/:siteId/content/news" element={<SupabaseContentEditor />} />
            <Route path="sites/:siteId/content/solutions" element={<SupabaseContentEditor />} />
            <Route path="sites/:siteId/content/faq" element={<SupabaseContentEditor />} />
            <Route path="sites/:siteId/content/contact" element={<SupabaseContentEditor />} />
            <Route path="sites/:siteId/content/chat" element={<SupabaseContentEditor />} />
            {/* Legacy Generic Content Editors */}
            <Route path="sites/:siteId/content/portfolio" element={<AdminV2GenericContentEditor />} />
            <Route path="sites/:siteId/content/services" element={<AdminV2GenericContentEditor />} />
            <Route path="sites/:siteId/content/products" element={<AdminV2GenericContentEditor />} />
            <Route path="sites/:siteId/content/blog" element={<AdminV2GenericContentEditor />} />
            <Route path="media" element={<AdminV2MediaLibraryPage />} />
            <Route path="sync" element={<AdminV2SyncDataPage />} />
            <Route path="users" element={<AdminV2UsersPage />} />
            <Route path="analytics" element={<AdminV2AnalyticsPage />} />
            <Route path="notifications" element={<AdminV2NotificationsPage />} />
            <Route path="settings/appearance" element={<AdminV2AppearanceSettingsPage />} />
            <Route path="settings/languages" element={<AdminV2LanguageSettingsPage />} />
            <Route path="settings/security" element={<AdminV2SecuritySettingsPage />} />
            <Route path="settings/general" element={<AdminV2GeneralSettingsPage />} />
            {/* Integrations */}
            <Route path="sites/:siteId/integrations" element={<AdminV2IntegrationsOverviewPage />} />
            <Route path="sites/:siteId/integrations/announcement" element={<AdminV2AnnouncementBarPage />} />
            <Route path="sites/:siteId/integrations/analytics" element={<AdminV2AnalyticsSettingsPage />} />
            <Route path="sites/:siteId/integrations/seo" element={<AdminV2SEOSettingsPage />} />
            <Route path="sites/:siteId/integrations/callback-widget" element={<AdminV2CallbackWidgetPage />} />
            <Route path="sites/:siteId/integrations/chat" element={<AdminV2ChatSettingsPage />} />
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
