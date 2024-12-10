import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection({ imageUrl, headline, subheadline, primaryCTA, secondaryCTA }) {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60]">
            {primaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            {secondaryCTA}
          </Button>
        </div>
      </div>
    </div>
  );
}