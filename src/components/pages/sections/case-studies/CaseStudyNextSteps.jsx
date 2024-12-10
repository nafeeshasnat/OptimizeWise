import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudyNextSteps() {
  return (
    <section className="py-24 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Results?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve similar or even better results through our data-driven optimization approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60]">
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}