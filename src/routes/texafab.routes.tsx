/**
 * TexaFab ERP Routes
 * Main textile ERP platform routes
 */
import { lazy, Suspense } from "react";
import { Route, RouteObject } from "react-router-dom";
import { LanguageProvider } from "@/components/landing/LanguageContext";

// Lazy load all TexaFab pages for better performance
const Home = lazy(() => import("@/components/home"));
const FeaturesPage = lazy(() => import("@/pages/FeaturesPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const SolutionsPage = lazy(() => import("@/pages/SolutionsPage"));
const WorkflowPage = lazy(() => import("@/pages/WorkflowPage"));
const ContainerTrackingPage = lazy(() => import("@/pages/ContainerTrackingPage"));
const RollManagementPage = lazy(() => import("@/pages/RollManagementPage"));
const POSSystemPage = lazy(() => import("@/pages/POSSystemPage"));
const AgentsDealersPage = lazy(() => import("@/pages/AgentsDealersPage"));
const ReportsAnalyticsPage = lazy(() => import("@/pages/ReportsAnalyticsPage"));
const ShippingPage = lazy(() => import("@/pages/ShippingPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const WarehouseManagementPage = lazy(() => import("@/pages/WarehouseManagementPage"));
const FabricManagementPage = lazy(() => import("@/pages/FabricManagementPage"));
const AccountingPage = lazy(() => import("@/pages/AccountingPage"));
const EmployeeManagementPage = lazy(() => import("@/pages/EmployeeManagementPage"));
const WorkflowCompletePage = lazy(() => import("@/pages/WorkflowCompletePage"));
const EcommercePage = lazy(() => import("@/pages/EcommercePage"));
const CRMPage = lazy(() => import("@/pages/CRMPage"));
const FabricManufacturingPage = lazy(() => import("@/pages/FabricManufacturingPage"));
const GarmentManufacturingPage = lazy(() => import("@/pages/GarmentManufacturingPage"));
const AIAnalyticsPage = lazy(() => import("@/pages/AIAnalyticsPage"));
const EnterpriseLandingPage = lazy(() => import("@/pages/EnterpriseLandingPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const AllSolutionsPage = lazy(() => import("@/pages/AllSolutionsPage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));

/**
 * TexaFab route objects for use with createBrowserRouter or array mapping
 */
export const texafabRouteObjects: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/comparison", element: <EnterpriseLandingPage /> },
  { path: "/features", element: <FeaturesPage /> },
  { path: "/pricing", element: <PricingPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/industries", element: <IndustriesPage /> },
  { path: "/solutions", element: <SolutionsPage /> },
  { path: "/workflow", element: <WorkflowPage /> },
  { path: "/container-tracking", element: <ContainerTrackingPage /> },
  { path: "/roll-management", element: <RollManagementPage /> },
  { path: "/pos-system", element: <POSSystemPage /> },
  { path: "/agents-dealers", element: <AgentsDealersPage /> },
  { path: "/reports-analytics", element: <ReportsAnalyticsPage /> },
  { path: "/shipping", element: <ShippingPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/terms", element: <TermsPage /> },
  { path: "/warehouse-management", element: <WarehouseManagementPage /> },
  { path: "/fabric-management", element: <FabricManagementPage /> },
  { path: "/accounting", element: <AccountingPage /> },
  { path: "/employee-management", element: <EmployeeManagementPage /> },
  { path: "/workflow-complete", element: <WorkflowCompletePage /> },
  { path: "/ecommerce", element: <EcommercePage /> },
  { path: "/crm", element: <CRMPage /> },
  { path: "/fabric-manufacturing", element: <FabricManufacturingPage /> },
  { path: "/garment-manufacturing", element: <GarmentManufacturingPage /> },
  { path: "/ai-analytics", element: <AIAnalyticsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/all-solutions", element: <AllSolutionsPage /> },
  { path: "/news", element: <LanguageProvider><NewsPage /></LanguageProvider> },
  { path: "/news/:id", element: <LanguageProvider><NewsPage /></LanguageProvider> },
];

/**
 * TexaFab Routes Component
 * Returns Route elements for use inside a Routes component
 */
export const TexaFabRoutes = () => (
  <>
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
  </>
);

export default TexaFabRoutes;
