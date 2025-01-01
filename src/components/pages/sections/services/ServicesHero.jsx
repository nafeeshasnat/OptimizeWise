import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Expert CRO & A/B Testing Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your website performance with data-driven optimization strategies
            that deliver measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/contact'>
              <Button
                size="lg"
                className="bg-[hsl(var(--theme-accent))] hover:bg-white text-white hover:text-[#1E73BE]"
              >
                Let's Transform <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to='/case-studies'>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#1E73BE] hover:bg-white/10 hover:text-[#ffffff]"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}