import { TechStackHero } from './TechStackHero';
import { TechStackGrid } from './TechStackGrid';
import { TechStackBenefits } from './TechStackBenefits';

export function TechStack() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container">
        <TechStackHero />
        <TechStackGrid />
        <TechStackBenefits />
      </div>
    </section>
  );
}