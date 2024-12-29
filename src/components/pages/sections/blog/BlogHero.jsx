import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlogHero() {
  return (
    <div className="bg-[#1E73BE] text-white py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest Insights & Resources
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stay ahead with our latest findings, guides, and success stories in CRO and A/B testing.
          </p>
          <Button 
            size="lg" 
            className="bg-[hsl(var(--theme-accent))] hover:bg-[#ffffff] text-white hover:text-[#1E73BE]"
          >
            Subscribe to Newsletter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}