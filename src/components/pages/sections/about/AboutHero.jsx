import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Driven by Data, Fueled by Innovation
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          We're a team of optimization experts passionate about creating exceptional digital experiences that drive measurable results.
        </p>
      </div>
    </div>
  );
}