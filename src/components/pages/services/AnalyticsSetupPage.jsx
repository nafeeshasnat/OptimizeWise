import { SEO } from '@/utils/seo';
import { ServiceHero } from './sections/ServiceHero';
import { ServiceOverview } from './sections/ServiceOverview';
import { ServiceFeatures } from './sections/ServiceFeatures';
import { ServiceProcess } from './sections/ServiceProcess';
import { ServiceBenefits } from './sections/ServiceBenefits';
import { ServiceCaseStudies } from './sections/ServiceCaseStudies';
import { ServiceFaq } from './sections/ServiceFaq';
import { ServiceCta } from './sections/ServiceCta';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Analytics Setup Services",
  "description": "Professional analytics implementation and configuration services to ensure accurate data collection and actionable insights.",
  "provider": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "serviceType": ["Analytics Setup", "Data Implementation", "Tracking Configuration"],
  "areaServed": "Worldwide"
};

const content = {
  hero: {
    title: "Analytics Setup & Implementation",
    subtitle: "Professional Analytics Configuration for Actionable Insights",
    description: "Ensure accurate data collection and gain valuable insights with our expert analytics setup and implementation services."
  },
  overview: {
    title: "Why Professional Analytics Setup?",
    description: `Proper analytics setup is the foundation of any successful optimization strategy. Without accurate data collection and proper tracking implementation, making informed decisions about your digital presence becomes impossible.

Our analytics setup services ensure you have the right data at the right time to make informed decisions. We handle everything from initial configuration to advanced tracking implementation, custom event setup, and data validation.`,
    benefits: [
      "Accurate data collection and tracking",
      "Custom event and goal configuration",
      "Cross-domain and e-commerce tracking",
      "Data validation and quality assurance"
    ]
  },
  features: [
    {
      title: "Analytics Configuration",
      description: "Professional setup and configuration of analytics platforms",
      benefits: [
        "Google Analytics 4 setup",
        "Cross-domain tracking",
        "Enhanced e-commerce",
        "Custom dimensions & metrics"
      ]
    },
    {
      title: "Event Tracking",
      description: "Comprehensive event tracking implementation",
      benefits: [
        "Custom event setup",
        "User interaction tracking",
        "Form analytics",
        "Video engagement tracking"
      ]
    },
    {
      title: "Data Quality",
      description: "Ensure accurate and reliable data collection",
      benefits: [
        "Data validation",
        "Filter configuration",
        "Spam prevention",
        "Regular audits"
      ]
    }
  ],
  process: [
    {
      title: "Audit & Planning",
      description: "Review current setup and define tracking requirements"
    },
    {
      title: "Implementation",
      description: "Configure analytics and implement tracking"
    },
    {
      title: "Testing & Validation",
      description: "Verify data accuracy and tracking functionality"
    },
    {
      title: "Documentation & Training",
      description: "Provide comprehensive documentation and team training"
    }
  ],
  faq: [
    {
      question: "Which analytics platforms do you work with?",
      answer: "We primarily work with Google Analytics 4, but also have expertise in Adobe Analytics, Mixpanel, and other major analytics platforms. We'll help you choose and implement the best solution for your needs."
    },
    {
      question: "How long does analytics setup take?",
      answer: "Basic analytics setup can be completed in 1-2 weeks. More complex implementations with custom tracking and multiple domains may take 3-4 weeks. We'll provide a detailed timeline based on your specific requirements."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training for your team on using the analytics platform, understanding reports, and maintaining the implementation. We also provide detailed documentation for future reference."
    }
  ]
};

export function AnalyticsSetupPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Analytics Setup & Implementation Services | OptimizeWise"
        description="Get professional analytics setup and implementation services. Ensure accurate data collection and gain actionable insights for your optimization strategy."
        canonicalUrl="https://optimizewise.com/services/analytics-setup"
        keywords="analytics setup, Google Analytics 4, analytics implementation, tracking setup, data collection"
        structuredData={structuredData}
      />
      
      <ServiceHero content={content.hero} />
      <ServiceOverview content={content.overview} />
      <ServiceFeatures features={content.features} />
      <ServiceProcess steps={content.process} />
      <ServiceBenefits />
      <ServiceCaseStudies />
      <ServiceFaq questions={content.faq} />
      <ServiceCta />
    </div>
  );
}