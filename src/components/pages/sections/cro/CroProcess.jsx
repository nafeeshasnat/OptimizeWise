import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { steps } from '@/data/croSteps';

export function CroProcess() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Our Data-Driven CRO Process
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            We follow a systematic, proven methodology that combines analytical rigor 
            with creative problem-solving to deliver consistent results.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    {/* Icon - Centered on mobile */}
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mx-auto md:mx-0">
                      <step.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row items-center md:items-center gap-2 mb-3">
                        <span className="bg-[hsl(var(--theme-accent))]/10 text-[hsl(var(--theme-accent))] text-sm font-medium px-2 py-1 rounded">
                          Step {index + 1}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-center md:text-left">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-center md:text-left">
                        {step.description}
                      </p>
                      
                      {/* Metrics - Grid for better mobile layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.metrics.map((metric) => (
                          <div key={metric} className="flex items-center gap-2 justify-center md:justify-start">
                            <CheckCircle className="h-4 w-4 text-[hsl(var(--theme-accent))]" />
                            <span className="text-sm text-gray-600">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Connector Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-full h-6 w-px bg-[hsl(var(--theme-accent))]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}