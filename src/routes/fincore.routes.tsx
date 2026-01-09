/**
 * FinCore Routes
 * Banking and money transfer platform routes
 */
import { lazy } from "react";
import { Route, RouteObject } from "react-router-dom";

// Lazy load all FinCore pages
const FCHomePage = lazy(() => import("@/pages/fincore/FCHomePage"));
const FCContactPage = lazy(() => import("@/pages/fincore/FCContactPage"));
const FCSolutionsPage = lazy(() => import("@/pages/fincore/FCSolutionsPage"));
const FCFeaturesPage = lazy(() => import("@/pages/fincore/FCFeaturesPage"));
const FCPricingPage = lazy(() => import("@/pages/fincore/FCPricingPage"));
const FCAboutPage = lazy(() => import("@/pages/fincore/FCAboutPage"));
const FCSecurityPage = lazy(() => import("@/pages/fincore/FCSecurityPage"));
const FCPartnersPage = lazy(() => import("@/pages/fincore/FCPartnersPage"));
const FCComparisonPage = lazy(() => import("@/pages/fincore/FCComparisonPage"));
const FCAgentsPage = lazy(() => import("@/pages/fincore/FCAgentsPage"));
const FCLoginPage = lazy(() => import("@/pages/fincore/FCLoginPage"));
const FCRegisterPage = lazy(() => import("@/pages/fincore/FCRegisterPage"));

/**
 * FinCore route objects for standalone deployment
 */
export const fincoreRouteObjects: RouteObject[] = [
  { path: "/fincore", element: <FCHomePage /> },
  { path: "/fincore/contact", element: <FCContactPage /> },
  { path: "/fincore/solutions", element: <FCSolutionsPage /> },
  { path: "/fincore/features", element: <FCFeaturesPage /> },
  { path: "/fincore/pricing", element: <FCPricingPage /> },
  { path: "/fincore/about", element: <FCAboutPage /> },
  { path: "/fincore/security", element: <FCSecurityPage /> },
  { path: "/fincore/partners", element: <FCPartnersPage /> },
  { path: "/fincore/comparison", element: <FCComparisonPage /> },
  { path: "/fincore/agents", element: <FCAgentsPage /> },
  { path: "/fincore/login", element: <FCLoginPage /> },
  { path: "/fincore/register", element: <FCRegisterPage /> },
];

/**
 * FinCore Routes Component
 * Renders all routes for FinCore banking platform
 */
export const FinCoreRoutes = () => (
  <>
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
  </>
);

export default FinCoreRoutes;
