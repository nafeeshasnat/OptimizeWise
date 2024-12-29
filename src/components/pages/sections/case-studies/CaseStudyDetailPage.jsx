import { useParams } from 'react-router-dom';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyContent } from './CaseStudyContent';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyNextSteps } from './CaseStudyNextSteps';
import { caseStudies } from '@/data/caseStudies';

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  
  // Find the case study based on the slug
  const caseStudy = caseStudies.find(study => study.slug === slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen">
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.image}
      />
      <CaseStudyContent
        challenge={caseStudy.challenge}
        approach={caseStudy.approach}
        testimonial={caseStudy.testimonial}
        description={caseStudy.description}
        category={caseStudy.category}
        month={caseStudy.month}
        year={caseStudy.year}
      />
      <CaseStudyResults results={caseStudy.results} />
      <CaseStudyNextSteps />
    </div>
  );
}