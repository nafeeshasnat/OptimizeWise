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
  "name": "Technical Implementation Services",
  "description": "Expert technical implementation services for A/B testing tools, analytics platforms, and optimization solutions.",
  "provider": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "serviceType": ["Technical Implementation", "Tool Setup", "Tag Management"],
  "areaServed": "Worldwide"
};

const content = {
  hero: {
    title: "Technical Implementation Services",
    subtitle: "Expert Setup of Testing & Analytics Tools",
    description: "Ensure flawless implementation of your optimization tools with our professional technical implementation services."
  },
  overview: {
    title: "Why Professional Implementation?",
    description: `Proper technical implementation is crucial for successful optimization programs. Poor implementation can lead to unreliable data, failed tests, and missed opportunities for improvement.

Our technical implementation services ensure your testing and analytics tools are set up correctly, efficiently, and securely. We handle everything from initial setup to advanced configurations, ensuring you can focus on optimization strategy while we handle the technical details.`,
    benefits: [
      "Reliable test execution and data collection",
      "Performance-optimized implementations",
      "Cross-browser and device compatibility",
      "Security and privacy compliance"
    ]
  },
  features: [
    {
      title: "Testing Tool Setup",
      description: "Professional implementation of A/B testing platforms",
      benefits: [
        "Google Optimize setup",
        "VWO implementation",
        "Optimizely configuration",
        "Custom solution integration"
      ]
    },
    {
      title: "Tag Management",
      description: "Efficient management of marketing and analytics tags",
      benefits: [
        "GTM implementation",
        "Tag audit and cleanup",
        "Performance optimization",
        "Documentation and training"
      ]
    },
    {
      title: "Custom Solutions",
      description: "Development of custom testing and tracking solutions",
      benefits: [
        "Custom test development",
        "API integrations",
        "Performance monitoring",
        "Technical support"
      ]
    }
  ],
  process: [
    {
      title: "Technical Audit",
      description: "Review current setup and identify requirements"
    },
    {
      title: "Implementation Planning",
      description: "Develop detailed implementation strategy"
    },
    {
      title: "Setup & Configuration",
      description: "Install and configure required tools"
    },
    {
      title: "Testing & Validation",
      description: "Verify functionality across platforms"
    }
  ],
  faq: [
    {
      question: "Which testing tools do you support?",
      answer: "We have expertise in implementing all major testing platforms including Google Optimize, VWO, Optimizely, Adobe Target, and custom solutions. We'll help you choose and implement the best tool for your needs."
    },
    {
      question: "How do you ensure implementation quality?",
      answer: "We follow a rigorous QA process that includes cross-browser testing, performance monitoring, and functionality validation. All implementations are thoroughly tested before launch."
    },
    {
      question: "Can you help with existing implementations?",
      answer: "Yes, we can audit and optimize your existing implementations. We'll identify any issues, improve performance, and ensure best practices are followed."
    }
  ]
};

export function TechnicalImplementationPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Technical Implementation Services | OptimizeWise"
        description="Get expert technical implementation services for your optimization tools. Ensure reliable testing and accurate data collection with professional setup and configuration."
        canonicalUrl="https://optimizewise.com/services/technical-implementation"
        keywords="technical implementation, A/B testing setup, tag management, tool configuration, optimization tools"
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