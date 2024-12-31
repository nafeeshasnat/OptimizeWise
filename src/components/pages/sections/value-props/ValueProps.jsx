import { ValuePropsHero } from './ValuePropsHero';
import { ValuePropsGrid } from './ValuePropsGrid';
import { ValuePropsCTA } from './ValuePropsCTA';

export function ValueProps() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container">
        <ValuePropsHero />
        <ValuePropsGrid />
        <ValuePropsCTA />
      </div>
    </section>
  );
}