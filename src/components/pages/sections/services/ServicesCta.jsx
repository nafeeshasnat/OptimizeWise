import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free CRO audit and consultation',
  'Customized optimization strategy',
  'Expert implementation support',
  'Ongoing optimization and testing'
];

export function ServicesCta() {
  return (
    <section className="py-24 bg-[#1E73BE] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Conversions?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of businesses that have transformed their digital presence 
            through our expert CRO services.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit}
                className="flex items-center gap-3 text-left bg-white/10 rounded-lg p-4"
              >
                <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[hsl(var(--theme-accent))] hover:bg-white text-white hover:text-[#1E73BE]"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}