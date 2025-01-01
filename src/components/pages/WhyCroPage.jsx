import { SEO } from '@/utils/seo';
import { CroHero } from './sections/cro/CroHero';
import { CroOverview } from './sections/cro/CroOverview';
import { CroProcess } from './sections/cro/CroProcess';
import { CroBenefits } from './sections/cro/CroBenefits';
import { CroExamples } from './sections/cro/CroExamples';
import { CroFaq } from './sections/cro/CroFaq';
import { CroCta } from './sections/cro/CroCta';
import { ChallengesWOCRO } from './sections/cro/ChallengesWOCRO';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Conversion Rate Optimization (CRO) and A/B Testing Are Essential for Business Growth",
  "description": "Learn how Conversion Rate Optimization (CRO) and A/B testing can transform your digital presence and drive sustainable business growth.",
  "image": "https://optimizewise.com/images/cro-process-infographic.jpg",
  "author": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OptimizeWise",
    "logo": {
      "@type": "ImageObject",
      "url": "https://optimizewise.com/logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-15"
};

export function WhyCroPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Why Conversion Rate Optimization (CRO) & A/B Testing Matter | Complete Guide to Growth"
        description="Discover how Conversion Rate Optimization and A/B testing can transform your business. Learn proven strategies, real examples, and measurable results."
        canonicalUrl="https://optimizewise.com/why-cro"
        ogImage="https://optimizewise.com/images/cro-guide-og.jpg"
        keywords="CRO guide, A/B testing importance, conversion optimization, website optimization, increase conversion rates"
        structuredData={structuredData}
        article={true}
      />

      <CroHero />
      <CroOverview />
      <CroProcess />
      <ChallengesWOCRO />
      <CroBenefits />
      <CroExamples />
      <CroFaq />
      <CroCta />
    </div>
  );
}