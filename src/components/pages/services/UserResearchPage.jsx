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
  "name": "User Research Services",
  "description": "Professional user research services to understand user behavior, identify pain points, and optimize digital experiences.",
  "provider": {
    "@type": "Organization",
    "name": "OptimizeWise"
  },
  "serviceType": ["User Research", "UX Research", "Usability Testing"],
  "areaServed": "Worldwide"
};

const content = {
  hero: {
    title: "User Research Services",
    subtitle: "Understand Your Users, Optimize Your Experience",
    description: "Gain deep insights into user behavior and preferences through comprehensive research methodologies that drive informed optimization decisions."
  },
  overview: {
    title: "What is User Research?",
    description: `User research is a systematic investigation of your users and their requirements, to add context and insight into your optimization process. It combines qualitative and quantitative methods to understand user behavior, motivations, and needs.

Our user research services provide actionable insights that inform your optimization strategy and ensure your digital experience truly resonates with your target audience. We employ a variety of research methodologies to build a comprehensive understanding of your users.`,
    benefits: [
      "Understand user behavior and motivations",
      "Identify critical pain points and opportunities",
      "Validate optimization hypotheses",
      "Improve user satisfaction and retention"
    ]
  },
  features: [
    {
      title: "Qualitative Research",
      description: "In-depth understanding of user behavior and motivations",
      benefits: [
        "User interviews and surveys",
        "Usability testing sessions",
        "Customer journey mapping",
        "Behavioral analysis"
      ]
    },
    {
      title: "Quantitative Analysis",
      description: "Data-driven insights into user patterns and trends",
      benefits: [
        "Analytics deep dives",
        "Heatmap analysis",
        "Session recordings",
        "Funnel analysis"
      ]
    },
    {
      title: "Research Synthesis",
      description: "Transform research data into actionable insights",
      benefits: [
        "Pattern identification",
        "Opportunity analysis",
        "Prioritized recommendations",
        "Implementation roadmap"
      ]
    }
  ],
  process: [
    {
      title: "Research Planning",
      description: "Define research objectives and methodology"
    },
    {
      title: "Data Collection",
      description: "Gather qualitative and quantitative data"
    },
    {
      title: "Analysis & Synthesis",
      description: "Transform data into actionable insights"
    },
    {
      title: "Recommendations",
      description: "Develop strategic optimization plan"
    }
  ],
  faq: [
    {
      question: "How long does a user research project take?",
      answer: "A typical user research project takes 4-6 weeks, including planning, data collection, analysis, and recommendations. The timeline can vary based on the scope and complexity of your needs."
    },
    {
      question: "How many users should we include in the research?",
      answer: "For qualitative research like user interviews, we typically recommend 5-8 users per segment. For quantitative studies, we aim for statistically significant sample sizes based on your user base."
    },
    {
      question: "What types of research methods do you use?",
      answer: "We employ a mix of methods including user interviews, surveys, usability testing, analytics analysis, heatmaps, session recordings, and more. The specific methods are chosen based on your research objectives."
    }
  ]
};

export function UserResearchPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="User Research Services | Optimize Your Digital Experience"
        description="Transform your digital experience with expert user research services. Get deep insights into user behavior and data-driven recommendations for optimization."
        canonicalUrl="https://optimizewise.com/services/user-research"
        keywords="user research services, UX research, usability testing, user behavior analysis, customer journey mapping"
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