import { SEO } from '@/utils/seo.jsx';
import { HeroSection } from './sections/hero/HeroSection';
import { ValueProps } from './sections/value-props/ValueProps';
import { RoiCalculator } from './sections/calculator/RoiCalculator';
import { IndustryExpertise } from './sections/IndustryExpertise';
import { TechStack } from './sections/tech-stack/TechStack';
import { LatestInsights } from './sections/LatestInsights';
import { WhyUs } from './sections/WhyUs.jsx'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OptimizeWise",
  "description": "Data-driven CRO and A/B testing services to improve conversion rates and drive business growth",
  "url": "https://optimizewise.com",
  "logo": "https://optimizewise.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/optimizewise",
    "https://twitter.com/optimizewise"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555",
    "contactType": "customer service",
    "email": "contact@optimizewise.com"
  }
};

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Expert CRO & A/B Testing Services | Maximize Your Digital Revenue"
        description="Transform your digital experience with data-driven CRO and A/B testing services. Get expert optimization strategies that deliver measurable results and sustainable growth."
        canonicalUrl="https://optimizewise.com"
        ogImage="https://optimizewise.com/og-image.jpg"
        keywords="CRO services, A/B testing services, conversion rate optimization, increase website revenue, data-driven optimization"
        structuredData={structuredData}
      />

      <HeroSection />
      <ValueProps />
      <WhyUs />
      <RoiCalculator />
      <IndustryExpertise />
      <TechStack />
      <LatestInsights />
    </div>
  );
}