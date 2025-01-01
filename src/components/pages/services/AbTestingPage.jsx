import { SEO } from '@/utils/seo';
import { ServiceHero } from './sections/ServiceHero';
import { ServiceOverview } from './sections/ServiceOverview';
import { ServiceFeatures } from './sections/ServiceFeatures';
import { ServiceProcess } from './sections/ServiceProcess';
import { ServiceBenefits } from './sections/ServiceBenefits';
import { ServiceCaseStudies } from './sections/ServiceCaseStudies';
import { ServiceFaq } from './sections/ServiceFaq';
import { ServicesCta } from '../sections/services/ServicesCta';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "A/B Testing Services",
  "description": "Professional A/B testing services to optimize conversion rates and improve user experience through data-driven experimentation.",
  "provider": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "serviceType": ["A/B Testing", "Multivariate Testing", "Split Testing"],
  "areaServed": "Worldwide"
};

const content = {
  hero: {
    title: "A/B Testing Services",
    subtitle: "Data-Driven Experimentation for Maximum Conversions",
    description: "Transform your website performance with expert A/B testing services that deliver measurable results through strategic experimentation and optimization."
  },
  overview: {
    title: "What is A/B Testing?",
    description: `A/B testing, also known as split testing, is a methodology for comparing two or more versions of a webpage or app interface to determine which one performs better. It's a cornerstone of data-driven optimization that helps businesses make informed decisions about their digital presence.

Our A/B testing services combine statistical rigor with creative problem-solving to identify and implement the most effective optimizations for your website. We handle everything from hypothesis formation to test execution and analysis, ensuring you get actionable insights that drive real business growth.`,
    benefits: [
      "Eliminate guesswork with data-driven decisions",
      "Improve conversion rates by 30-50% on average",
      "Reduce risk with validated changes",
      "Continuous optimization and improvement"
    ]
  },
  features: [
    {
      title: "Strategic Test Planning",
      description: "Develop comprehensive testing strategies aligned with your business goals",
      benefits: [
        "Data-driven hypothesis formation",
        "Prioritized testing roadmap",
        "Clear success metrics",
        "Risk assessment"
      ]
    },
    {
      title: "Advanced Testing Capabilities",
      description: "Utilize sophisticated testing methodologies for optimal results",
      benefits: [
        "A/B and multivariate testing",
        "Split URL testing",
        "Personalization experiments",
        "Mobile optimization"
      ]
    },
    {
      title: "Statistical Analysis",
      description: "Ensure reliable results with robust statistical analysis",
      benefits: [
        "Statistical significance validation",
        "Segment analysis",
        "Revenue impact assessment",
        "Confidence interval calculation"
      ]
    }
  ],
  process: [
    {
      title: "Research & Analysis",
      description: "Comprehensive analysis of your current performance and opportunities"
    },
    {
      title: "Hypothesis Formation",
      description: "Development of data-backed testing hypotheses"
    },
    {
      title: "Test Implementation",
      description: "Professional setup and execution of tests"
    },
    {
      title: "Results Analysis",
      description: "Thorough analysis and actionable recommendations"
    }
  ],
  faq: [
    {
      question: "How long should an A/B test run?",
      answer: "The duration of an A/B test depends on your traffic volume and conversion rates. Generally, tests should run for at least two business cycles (often 2-4 weeks) to account for different user behaviors and ensure statistical significance."
    },
    {
      question: "What traffic volume do I need for A/B testing?",
      answer: "For meaningful results, we recommend having at least 1,000 monthly conversions per variant. However, we can adapt our testing approach based on your specific situation and traffic levels."
    },
    {
      question: "How many variations should we test?",
      answer: "The number of variations depends on your traffic volume and the complexity of the change. We typically recommend starting with one or two variations to maintain statistical power and get faster results."
    }
  ]
};

export function AbTestingPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="A/B Testing Services | Optimize Your Conversion Rate"
        description="Transform your website performance with expert A/B testing services. Get data-driven optimization strategies that deliver measurable results and sustainable growth."
        canonicalUrl="https://optimizewise.com/services/ab-testing"
        keywords="A/B testing services, split testing, website optimization, conversion rate optimization, multivariate testing"
        structuredData={structuredData}
      />

      <ServiceHero content={content.hero} />
      <ServiceOverview content={content.overview} />
      <ServiceFeatures features={content.features} />
      <ServiceProcess steps={content.process} />
      <ServiceBenefits />
      <ServiceCaseStudies />
      <ServiceFaq questions={content.faq} />
      <ServicesCta />
    </div>
  );
}