/**
 * Dubai Stroy Routes
 * Construction and finishing company website routes
 */
import { lazy } from "react";
import { Route, RouteObject } from "react-router-dom";

// Lazy load all Dubai Stroy pages
const DSHomePage = lazy(() => import("@/pages/dubai-stroy/DSHomePage"));
const DSPortfolioPage = lazy(() => import("@/pages/dubai-stroy/DSPortfolioPage"));
const DSPricingPage = lazy(() => import("@/pages/dubai-stroy/DSPricingPage"));
const DSContactPage = lazy(() => import("@/pages/dubai-stroy/DSContactPage"));
const DSNewsPage = lazy(() => import("@/pages/dubai-stroy/DSNewsPage"));
const DSServicesPage = lazy(() => import("@/pages/dubai-stroy/DSServicesPage"));
const DSProjectDetailPage = lazy(() => import("@/pages/dubai-stroy/DSProjectDetailPage"));
const DSNewsDetailPage = lazy(() => import("@/pages/dubai-stroy/DSNewsDetailPage"));

/**
 * Dubai Stroy route objects for standalone deployment
 */
export const dubaiStroyRouteObjects: RouteObject[] = [
  { path: "/dubai-stroy", element: <DSHomePage /> },
  { path: "/dubai-stroy/portfolio", element: <DSPortfolioPage /> },
  { path: "/dubai-stroy/portfolio/:id", element: <DSProjectDetailPage /> },
  { path: "/dubai-stroy/pricing", element: <DSPricingPage /> },
  { path: "/dubai-stroy/contact", element: <DSContactPage /> },
  { path: "/dubai-stroy/services", element: <DSServicesPage /> },
  { path: "/dubai-stroy/news", element: <DSNewsPage /> },
  { path: "/dubai-stroy/news/:id", element: <DSNewsDetailPage /> },
];

/**
 * Dubai Stroy Routes Component
 * Renders all routes for Dubai Stroy construction website
 */
export const DubaiStroyRoutes = () => (
  <>
    <Route path="/dubai-stroy" element={<DSHomePage />} />
    <Route path="/dubai-stroy/portfolio" element={<DSPortfolioPage />} />
    <Route path="/dubai-stroy/portfolio/:id" element={<DSProjectDetailPage />} />
    <Route path="/dubai-stroy/pricing" element={<DSPricingPage />} />
    <Route path="/dubai-stroy/contact" element={<DSContactPage />} />
    <Route path="/dubai-stroy/services" element={<DSServicesPage />} />
    <Route path="/dubai-stroy/news" element={<DSNewsPage />} />
    <Route path="/dubai-stroy/news/:id" element={<DSNewsDetailPage />} />
  </>
);

export default DubaiStroyRoutes;
