import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesCTA() {
  return (
    <section className="py-24 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our data-driven approach can help transform your digital experience and drive measurable growth.
          </p>
          <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60]">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}