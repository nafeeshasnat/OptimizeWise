import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/pages/HomePage';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { CaseStudiesPage } from '@/components/pages/CaseStudiesPage';
import { CaseStudyDetailPage } from '@/components/pages/sections/case-studies/CaseStudyDetailPage';
import { BlogPage } from '@/components/pages/BlogPage';
import { BlogPostPage } from '@/components/pages/BlogPostPage';
import { WhyCroPage } from '@/components/pages/WhyCroPage';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollToAnchor } from '@/components/ScrollToAnchor';

// Service Pages
import { AbTestingPage } from '@/components/pages/services/AbTestingPage';
import { UserResearchPage } from '@/components/pages/services/UserResearchPage';
import { AnalyticsSetupPage } from '@/components/pages/services/AnalyticsSetupPage';
import { TechnicalImplementationPage } from '@/components/pages/services/TechnicalImplementationPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="optimizewise-theme">
        <Router>
          <ScrollToTop />
          <ScrollToAnchor />
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/ab-testing" element={<AbTestingPage />} />
                <Route path="/services/user-research" element={<UserResearchPage />} />
                <Route path="/services/analytics-setup" element={<AnalyticsSetupPage />} />
                <Route path="/services/technical-implementation" element={<TechnicalImplementationPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/why-cro" element={<WhyCroPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;