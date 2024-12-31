import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Seamless integration with your existing platforms',
  'Advanced analytics and real-time reporting for accurate insights',
  'Custom-tailored testing strategies to meet your business goals',
  'Expert support every step of the way—from setup to analysis'
];

export function TechStackBenefits() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
      <h3 className="text-2xl font-bold text-center mb-8">
        Why Choose Our Testing Stack?
      </h3>

      <div className="grid gap-4 max-w-2xl mx-auto mb-8">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))] mt-1 shrink-0" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white"
        >
          Request a Free Demo
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-[#1E73BE]"
        >
          See Our Success Stories
        </Button>
      </div>
    </div>
  );
}