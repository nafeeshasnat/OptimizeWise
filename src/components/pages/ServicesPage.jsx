import { SEO } from '@/utils/seo';
import { ServicesHero } from './sections/services/ServicesHero';
import { ServicesIntro } from './sections/services/ServicesIntro';
import { ServicesGrid } from './sections/services/ServicesGrid';
import { ServicesProcess } from './sections/services/ServicesProcess';
import { ServicesResults } from './sections/services/ServicesResults';
import { ServicesBenefits } from './sections/services/ServicesBenefits';
import { ServicesTestimonials } from './sections/services/ServicesTestimonials';
import { ServicesFaq } from './sections/services/ServicesFaq';
import { ServicesCta } from './sections/services/ServicesCta';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CRO & A/B Testing Services",
  "description": "Professional conversion rate optimization and A/B testing services to improve website performance and drive business growth.",
  "provider": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "serviceType": ["CRO", "A/B Testing", "Website Optimization"],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CRO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "A/B Testing",
          "description": "Data-driven A/B testing services to optimize conversion rates"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "User Research",
          "description": "Comprehensive user research and analysis services"
        }
      }
    ]
  }
};

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Professional CRO & A/B Testing Services | OptimizeWise"
        description="Transform your website performance with our expert CRO and A/B testing services. Get data-driven strategies that deliver measurable results and sustainable growth."
        canonicalUrl="https://optimizewise.com/services"
        keywords="CRO services, A/B testing services, conversion optimization, website optimization services, increase conversion rates"
        structuredData={structuredData}
      />

      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesResults />
      <ServicesBenefits />
      {/* <ServicesTestimonials /> */}
      <ServicesFaq />
      <ServicesCta />
    </div>
  );
}