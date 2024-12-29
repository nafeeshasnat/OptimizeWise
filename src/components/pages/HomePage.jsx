import { SEOHead } from '@/components/SEOHead';
import { ValueProps } from './sections/ValueProps';
import { RoiCalculator } from './sections/RoiCalculator';
import { IndustryExpertise } from './sections/IndustryExpertise';
import { TechStack } from './sections/TechStack';
import { LatestInsights } from './sections/LatestInsights';

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
      <SEOHead
        title="CRO & A/B Testing Services | Optimize Your Conversion Rate"
        description="Transform your traffic into revenue with data-driven CRO and A/B testing services. Get expert optimization strategies that deliver measurable results and sustainable growth."
        canonicalUrl="https://optimizewise.com"
        ogImage="https://optimizewise.com/og-image.jpg"
        keywords="CRO, conversion rate optimization, A/B testing, digital optimization, conversion optimization, website optimization"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Transform Your Digital Experience with Data-Driven Optimization
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Expert CRO & A/B testing services to improve conversion rates and drive sustainable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-accent))/90] text-white px-8 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <ValueProps />
      <RoiCalculator />
      <IndustryExpertise />
      <TechStack />
      <LatestInsights />
    </div>
  );
}