import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CroHero() {
  return (
    <section className="relative py-12 md:py-24 bg-[#1E73BE] text-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Transform Your Digital Success with CRO & A/B tests
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed px-2">
            Discover how Conversion Rate Optimization and A/B testing can unlock your
            website's full potential and drive sustainable business growth.
          </p>
          <Link to='/contact'>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[hsl(var(--theme-accent))] hover:bg-[#ffffff] text-white hover:text-[#1E73BE] px-6 md:px-8 py-3"
            >
              Let's Talk Strategy <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          {/* Stats Grid - Optimized for mobile */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">300%</div>
              <div className="text-sm md:text-base text-white/80">Average Revenue Growth</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm md:text-base text-white/80">Tests Conducted</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">45%</div>
              <div className="text-sm md:text-base text-white/80">Conversion Lift</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}