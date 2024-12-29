import { CaseStudiesHero } from './sections/case-studies/CaseStudiesHero';
import { CaseStudiesGrid } from './sections/case-studies/CaseStudiesGrid';
import { CaseStudiesCTA } from './sections/case-studies/CaseStudiesCTA';
import { SEO } from '@/utils/seo.jsx';

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="CRO Case Studies & Success Stories | OptimizeWise"
        description="Explore our collection of CRO success stories and learn how we've helped businesses achieve remarkable results through data-driven optimization."
        keywords="CRO case studies, A/B testing results, conversion optimization success stories"
      />
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </div>
  );
}