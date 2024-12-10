import { AboutHero } from './sections/about/AboutHero';
import { MissionValues } from './sections/about/MissionValues';
import { OurStory } from './sections/about/OurStory';
import { TeamSection } from './sections/about/TeamSection';
import { ApproachSection } from './sections/about/ApproachSection';
import { TestimonialsSection } from './sections/about/TestimonialsSection';
import { VisionSection } from './sections/about/VisionSection';
import { AboutCTA } from './sections/about/AboutCTA';

export function AboutPage() {
  return (
    <div className="min-h-screen">
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