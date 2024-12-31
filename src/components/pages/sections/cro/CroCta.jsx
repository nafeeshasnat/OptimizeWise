import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free comprehensive CRO audit',
  'Personalized optimization strategy',
  'Expert consultation with our team',
  'No commitment required'
];

export function CroCta() {
  return (
    <section className="py-24 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses that have achieved exceptional growth through 
              our data-driven CRO strategies. Get started with a free consultation today.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
              {benefits.map((benefit) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-3 text-left bg-white/10 rounded-lg p-4"
                >
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))]" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[hsl(var(--theme-accent))] hover:bg-white text-white hover:text-[#1E73BE] px-8"
              >
                Get Your Free CRO Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                View Success Stories
              </Button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center">
            <p className="text-sm text-white/80">
              Trusted by leading brands worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}