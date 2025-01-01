import { LineChart, ArrowUpRight, Users, ShoppingCart } from 'lucide-react';

export const caseStudies = [
  {
    slug: 'eshopx-checkout-optimization',
    icon: ShoppingCart,
    month: 'December',
    year: '2024',
    title: 'E-Shop X: Checkout Flow Optimization',
    subtitle: '+22% Increase in Checkout Conversions',
    description: 'How we helped a leading e-commerce platform increase their checkout conversion rate by 22% through strategic A/B testing and UX improvements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80',
    category: 'E-commerce',
    challenge: 'E-Shop X faced significant cart abandonment issues and suboptimal checkout flows that were impacting their bottom line.',
    approach: [
      'Comprehensive analysis of user behavior and dropout points',
      'A/B testing of different checkout layouts and processes',
      'Implementation of social proof and trust indicators',
      'Mobile-first optimization strategy'
    ],
    results: {
      conversionRate: '+22%',
      cartAbandonment: '-15%',
      revenuePerUser: '+18%'
    },
    testimonial: {
      quote: "The team's data-driven approach and attention to detail helped us achieve remarkable improvements in our conversion rates.",
      author: 'Jordan Lee',
      role: 'Head of Marketing, E-Shop X'
    },
    // those are for why CRO pages.
    improvements: [
      'Streamlined checkout process from 5 to 3 steps',
      'Added trust signals and security badges',
      'Implemented smart default options',
      'Enhanced mobile experience'
    ],
    timeframe: '60 days',
    roi: '350% ROI'
  },
  {
    slug: 'saasy-engagement-boost',
    icon: Users,
    month: 'December',
    year: '2024',
    title: 'SaaS Y: User Engagement Enhancement',
    subtitle: '+30% Boost in User Engagement',
    description: 'Discover how our optimization strategy helped a SaaS platform increase user engagement by 30% and reduce churn through targeted improvements.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80',
    category: 'SaaS',
    challenge: 'SaaS Y struggled with low user engagement and high churn rates, impacting their customer lifetime value.',
    approach: [
      'Deep dive analytics review of user behavior',
      'Implementation of targeted feature onboarding',
      'UX improvements based on user feedback',
      'Personalized engagement campaigns'
    ],
    results: {
      conversionRate: '+30%',
      cartAbandonment: '-25%',
      revenuePerUser: '+40%'
    },
    testimonial: {
      quote: "The optimization strategy transformed our user engagement metrics and significantly reduced our churn rate.",
      author: 'Sarah Chen',
      role: 'Product Director, SaaS Y'
    },
    improvements: [
      'Personalized onboarding flows',
      'Interactive product tours',
      'Progress tracking implementation',
      'Simplified feature discovery'
    ],
    timeframe: '90 days',
    roi: '280% ROI'
  },
  {
    slug: 'retailco-lead-generation',
    icon: LineChart,
    month: 'December',
    year: '2024',
    title: 'RetailCo: Lead Generation Success',
    subtitle: '2x Increase in Qualified Leads',
    description: 'Learn how we helped RetailCo double their email signup rate while maintaining lead quality through strategic landing page optimization.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2400&q=80',
    category: 'Retail',
    challenge: 'RetailCo needed to improve their lead generation process while ensuring lead quality remained high.',
    approach: [
      'Landing page conversion analysis',
      'Form optimization and testing',
      'Social proof implementation',
      'Mobile experience enhancement'
    ],
    results: {
      conversionRate: '+100%',
      cartAbandonment: '-20%',
      revenuePerUser: '+60%'
    },
    testimonial: {
      quote: "The results exceeded our expectations, delivering both quantity and quality in our lead generation efforts.",
      author: 'Michael Ross',
      role: 'Marketing Manager, RetailCo'
    },
    improvements: [
      'Smart form field reduction',
      'Multi-step form implementation',
      'Social proof integration',
      'Mobile-first redesign'
    ],
    timeframe: '45 days',
    roi: '420% ROI'
  }
];