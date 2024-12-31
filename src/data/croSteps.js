import { LineChart, Users, Target, BarChart, Zap, CheckCircle } from 'lucide-react';

export const steps = [
  {
    icon: LineChart,
    title: "Research & Analysis",
    description: "We start by diving deep into your analytics, user behavior, and business goals to identify key opportunities for improvement.",
    metrics: [
      "User Flow Analysis",
      "Heatmap Tracking",
      "Conversion Funnel Review"
    ]
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding your users is crucial. We conduct thorough research to identify pain points and opportunities.",
    metrics: [
      "User Interviews",
      "Behavior Analysis",
      "Feedback Collection"
    ]
  },
  {
    icon: Target,
    title: "Hypothesis & Planning",
    description: "Based on data and research, we develop clear hypotheses and create a strategic testing roadmap.",
    metrics: [
      "Test Prioritization",
      "Impact Assessment",
      "Implementation Plan"
    ]
  },
  {
    icon: Zap,
    title: "Testing & Implementation",
    description: "We execute A/B tests and implement changes based on statistical significance and user impact.",
    metrics: [
      "A/B Testing",
      "Performance Monitoring",
      "Results Analysis"
    ]
  }
];