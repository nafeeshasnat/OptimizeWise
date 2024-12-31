import { 
  LineChart, Users, BarChart, Search, Code, 
  PieChart, Zap, Database, Phone, Settings
} from 'lucide-react';

export const services = [
  {
    icon: LineChart,
    title: "A/B Testing",
    description: "Data-driven experimentation to optimize conversion rates and user experience.",
    features: [
      "Strategic test planning and prioritization",
      "Multi-variant testing capabilities",
      "Statistical analysis and reporting",
      "Implementation support"
    ],
    benefits: [
      "Increase conversion rates by 30-50%",
      "Reduce bounce rates",
      "Improve user engagement",
      "Data-backed decisions"
    ]
  },
  {
    icon: Users,
    title: "User Research",
    description: "Deep insights into user behavior and preferences to drive optimization decisions.",
    features: [
      "User journey mapping",
      "Heatmap analysis",
      "Session recordings",
      "User surveys and interviews"
    ],
    benefits: [
      "Understand user pain points",
      "Identify optimization opportunities",
      "Improve user satisfaction",
      "Reduce customer churn"
    ]
  },
  {
    icon: Search,
    title: "Analytics Setup",
    description: "Professional configuration of analytics tools for accurate data collection and insights.",
    features: [
      "Google Analytics configuration",
      "Custom event tracking",
      "Goal setup and monitoring",
      "Data validation"
    ],
    benefits: [
      "Accurate data collection",
      "Better decision making",
      "ROI tracking",
      "Performance monitoring"
    ]
  },
  {
    icon: Code,
    title: "Technical Implementation",
    description: "Expert implementation of testing tools and tracking solutions.",
    features: [
      "Testing tool setup",
      "Tag management",
      "Custom tracking solutions",
      "Performance optimization"
    ],
    benefits: [
      "Reliable test execution",
      "Accurate data collection",
      "Fast implementation",
      "Technical support"
    ]
  }
];

export const processSteps = [
  {
    title: "Discovery & Analysis",
    description: "Comprehensive analysis of your current performance and opportunities.",
    timeline: "Week 1",
    deliverables: [
      "Analytics audit",
      "User behavior analysis",
      "Conversion funnel review",
      "Opportunity assessment"
    ]
  },
  {
    title: "Strategy Development",
    description: "Creation of a data-driven optimization roadmap.",
    timeline: "Week 2",
    deliverables: [
      "Testing roadmap",
      "Prioritized opportunities",
      "Implementation plan",
      "Success metrics"
    ]
  },
  {
    title: "Implementation",
    description: "Expert execution of tests and tracking setup.",
    timeline: "Week 3",
    deliverables: [
      "A/B test setup",
      "Tracking implementation",
      "Quality assurance",
      "Launch support"
    ]
  },
  {
    title: "Optimization & Iteration",
    description: "Continuous improvement through testing and refinement.",
    timeline: "Ongoing",
    deliverables: [
      "Results analysis",
      "Recommendations",
      "Test iterations",
      "Performance reports"
    ]
  }
];

export const results = [
  {
    metric: "Conversion Rate",
    improvement: "+45%",
    timeframe: "90 days",
    description: "Average improvement in conversion rates across all clients"
  },
  {
    metric: "Revenue Growth",
    improvement: "+120%",
    timeframe: "6 months",
    description: "Average increase in revenue through optimization"
  },
  {
    metric: "User Engagement",
    improvement: "+65%",
    timeframe: "60 days",
    description: "Improvement in key engagement metrics"
  }
];

export const benefits = [
  {
    title: "Data-Driven Decisions",
    description: "Make informed optimization decisions based on real user data and behavior.",
    stats: {
      value: "300%",
      label: "Average ROI"
    }
  },
  {
    title: "Faster Results",
    description: "See improvements quickly with our rapid testing and implementation process.",
    stats: {
      value: "2x",
      label: "Faster Implementation"
    }
  },
  {
    title: "Expert Support",
    description: "Work with experienced CRO professionals who understand your business goals.",
    stats: {
      value: "10+",
      label: "Years Experience"
    }
  }
];

export const testimonials = [
  {
    quote: "The team's data-driven approach transformed our website performance, leading to a significant increase in conversions.",
    author: "Sarah Chen",
    role: "Head of Digital, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their expertise in CRO and A/B testing helped us achieve remarkable growth in just a few months.",
    author: "Michael Ross",
    role: "CEO, GrowthCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

export const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "While initial improvements can be seen within weeks, meaningful results typically emerge within 2-3 months of consistent testing. The timeline depends on your website traffic, the complexity of tests, and the size of improvements being made."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Our clients typically see a 2-4x return on their CRO investment within the first year. This includes increased revenue from higher conversion rates, improved customer lifetime value, and reduced customer acquisition costs."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with businesses of all sizes. Our services are tailored to your specific needs and budget, ensuring you get the maximum value from your investment."
  }
];