import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutCTA() {
  return (
    <section className="py-24 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our data-driven approach can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/contact'>
              <Button
                size="lg"
                className="bg-[hsl(var(--theme-accent))] hover:bg-white text-white hover:text-[#1E73BE] px-8"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to='/case-studies'>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#1E73BE] hover:bg-white/10 hover:text-white"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}