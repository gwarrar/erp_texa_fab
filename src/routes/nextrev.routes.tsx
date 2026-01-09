/**
 * Next Revolution Routes
 * Parent company website routes
 */
import { lazy } from "react";
import { Route, RouteObject } from "react-router-dom";

// Lazy load all Next Revolution pages
const NRHomePage = lazy(() => import("@/pages/nextrev/NRHomePage"));
const NRAboutPage = lazy(() => import("@/pages/nextrev/NRAboutPage"));
const NRServicesPage = lazy(() => import("@/pages/nextrev/NRServicesPage"));
const NRProductsPage = lazy(() => import("@/pages/nextrev/NRProductsPage"));
const NRInvestmentsPage = lazy(() => import("@/pages/nextrev/NRInvestmentsPage"));
const NRContactPage = lazy(() => import("@/pages/nextrev/NRContactPage"));
const NRBlogPage = lazy(() => import("@/pages/nextrev/NRBlogPage"));
const NRBlogPostPage = lazy(() => import("@/pages/nextrev/NRBlogPostPage"));
const NextRevolutionPage = lazy(() => import("@/pages/NextRevolutionPage"));

/**
 * Next Revolution route objects for standalone deployment
 */
export const nextrevRouteObjects: RouteObject[] = [
  { path: "/next-revolution", element: <NRHomePage /> },
  { path: "/next-revolution/about", element: <NRAboutPage /> },
  { path: "/next-revolution/services", element: <NRServicesPage /> },
  { path: "/next-revolution/services/*", element: <NRServicesPage /> },
  { path: "/next-revolution/products", element: <NRProductsPage /> },
  { path: "/next-revolution/investments", element: <NRInvestmentsPage /> },
  { path: "/next-revolution/contact", element: <NRContactPage /> },
  { path: "/next-revolution/blog", element: <NRBlogPage /> },
  { path: "/next-revolution/blog/:id", element: <NRBlogPostPage /> },
  { path: "/next-revolution/old", element: <NextRevolutionPage /> },
];

/**
 * Next Revolution Routes Component
 * Renders all routes for Next Revolution company website
 */
export const NextRevRoutes = () => (
  <>
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
  </>
);

export default NextRevRoutes;
