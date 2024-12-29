import { AboutHero } from './sections/about/AboutHero';
import { MissionValues } from './sections/about/MissionValues';
import { OurStory } from './sections/about/OurStory';
import { TeamSection } from './sections/about/TeamSection';
import { ApproachSection } from './sections/about/ApproachSection';
import { TestimonialsSection } from './sections/about/TestimonialsSection';
import { VisionSection } from './sections/about/VisionSection';
import { AboutCTA } from './sections/about/AboutCTA';
import { SEO } from '@/utils/seo.jsx';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About OptimizeWise | CRO & A/B Testing Experts"
        description="Meet our team of CRO experts. Learn about our data-driven approach to conversion optimization and our mission to help businesses grow."
        keywords="CRO experts, conversion optimization team, A/B testing specialists"
      />
      <AboutHero />
      <MissionValues />
      <OurStory />
      <TeamSection />
      <ApproachSection />
      <TestimonialsSection />
      <VisionSection />
      <AboutCTA />
    </div>
  );
}