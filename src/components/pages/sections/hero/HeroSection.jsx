import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with improved overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70" />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 py-8 md:py-20">
          {/* Main Heading - Refined spacing and sizing */}
          <h1 className="font-bold leading-tight">
            <span className="block text-3xl md:text-5xl lg:text-6xl mb-3">
              Maximize Your
              <br className="hidden sm:block" /> Digital Revenue
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl mt-4 text-[hsl(var(--theme-accent))]">
              with CRO & A/B Testing
            </span>
          </h1>

          {/* Subheading - Improved readability */}
          <h2 className="mt-6 mb-8 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <span className="hidden md:inline">
              Optimize user experiences, increase conversion rates, and unlock your business's true growth potential with data-driven strategies.
            </span>
            <span className="inline md:hidden">
              Transform your digital experience with data-driven optimization strategies.
            </span>
          </h2>

          {/* CTA Section - Enhanced visual hierarchy */}
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center mb-12">
            <Link to="/contact" className="block w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white px-8"
              >
                Schedule a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/why-cro" className="block w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-[#1E73BE] hover:bg-[hsl(var(--theme-accent))/50] hover:text-[#fff] text-base px-8"
              >
                Why CRO & A/B Test
              </Button>
            </Link>
          </div>

          {/* Trust Signals - Enhanced visual appeal */}
          <div className="mt-12 space-y-6">
            <div className="flex items-start justify-center gap-3 text-white/90">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))]" />
              <p className="text-base font-medium">Trusted by 10+ leading brands and increasing.</p>
            </div>

            {/* Success Metric - Improved card design */}
            <div className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-6 mx-auto max-w-xs sm:max-w-sm border border-white/10">
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                300% Revenue Growth
              </div>
              <p className="text-white/80">in 90 days for e-commerce clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}