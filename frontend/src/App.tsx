import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import PageTransition from './components/common/PageTransition';
import StructuredData from './components/common/StructuredData';
import ScrollToTop from './components/common/ScrollToTop';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Lazy load pages for better performance (Code Splitting)
const HomePage = lazy(() => import('./pages/HomePage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailsPage = lazy(() => import('./pages/PropertyDetailsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const VerifyEmailPage = lazy(() => import('./pages/VerifyEmailPage'));
const AddPropertyPage = lazy(() => import('./pages/AddPropertyPage'));
const MyListingsPage = lazy(() => import('./pages/MyListingsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));

function NotFoundPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F4]">
      <h1 className="font-fraunces text-6xl font-bold text-primary mb-4">404</h1>
      <p className="font-manrope text-xl text-[#374151] mb-8">Page not found</p>
      <a href="/" className="bg-primary text-[#F9FAFB] font-manrope font-bold px-8 py-3 rounded-xl hover:bg-[#1D6EE4] transition-all">
        Go Home
      </a>
    </PageTransition>
  );
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">
      <div className="w-12 h-12 border-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Structured data outside AnimatePresence - static elements don't need animation */}
      <StructuredData type="website" />
      <StructuredData type="organization" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/properties" element={<PageTransition><PropertiesPage /></PageTransition>} />
          <Route path="/property/:id" element={<PageTransition><PropertyDetailsPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/signin" element={<PageTransition><SignInPage /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><SignUpPage /></PageTransition>} />
          <Route path="/forgot-password" element={<PageTransition><ForgotPasswordPage /></PageTransition>} />
          <Route path="/reset/:token" element={<PageTransition><ResetPasswordPage /></PageTransition>} />
          <Route path="/verify-email/:token" element={<PageTransition><VerifyEmailPage /></PageTransition>} />
          <Route path="/add-property" element={<PageTransition><AddPropertyPage /></PageTransition>} />
          <Route path="/my-listings" element={<PageTransition><MyListingsPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </BrowserRouter>
  );
}