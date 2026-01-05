import { Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "./components/ui/scroll-restoration";
import { ThemeProvider } from "./components/landing/ThemeContext";
import { LanguageProvider } from "./components/landing/LanguageContext";
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

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollRestoration />
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
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
