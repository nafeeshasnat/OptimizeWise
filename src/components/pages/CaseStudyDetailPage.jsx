import { useParams } from 'react-router-dom';
import { CaseStudyHero } from './sections/case-studies/CaseStudyHero';
import { CaseStudyContent } from './sections/case-studies/CaseStudyContent';
import { CaseStudyResults } from './sections/case-studies/CaseStudyResults';
import { CaseStudyNextSteps } from './sections/case-studies/CaseStudyNextSteps';

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  
  // In a real application, you would fetch the case study data based on the slug
  // For now, we'll use hardcoded data
  const caseStudy = {
    title: "E-Shop X: Checkout Flow Optimization",
    subtitle: "+22% Increase in Checkout Conversions",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
    challenge: "E-Shop X faced significant cart abandonment issues and suboptimal checkout flows that were impacting their bottom line.",
    approach: [
      "Comprehensive analysis of user behavior and dropout points",
      "A/B testing of different checkout layouts and processes",
      "Implementation of social proof and trust indicators",
      "Mobile-first optimization strategy"
    ],
    results: {
      conversionRate: "+22%",
      cartAbandonment: "-15%",
      revenuePerUser: "+18%"
    },
    testimonial: {
      quote: "The team's data-driven approach and attention to detail helped us achieve remarkable improvements in our conversion rates.",
      author: "Jordan Lee",
      role: "Head of Marketing, E-Shop X"
    }
  };

  return (
    <div className="min-h-screen">
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.heroImage}
      />
      <CaseStudyContent
        challenge={caseStudy.challenge}
        approach={caseStudy.approach}
        testimonial={caseStudy.testimonial}
      />
      <CaseStudyResults results={caseStudy.results} />
      <CaseStudyNextSteps />
    </div>
  );
}