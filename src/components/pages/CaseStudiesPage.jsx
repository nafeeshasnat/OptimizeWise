import { CaseStudiesHero } from './sections/case-studies/CaseStudiesHero';
import { CaseStudiesGrid } from './sections/case-studies/CaseStudiesGrid';
import { CaseStudiesCTA } from './sections/case-studies/CaseStudiesCTA';

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </div>
  );
}