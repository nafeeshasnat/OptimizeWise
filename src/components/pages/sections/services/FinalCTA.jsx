import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA({ title, description, primaryCTA, secondaryCTA }) {
  return (
    <section className="py-20 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60]">
              {primaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              {secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}