import { Card } from '@/components/ui/card';
import { processSteps } from '@/data/services';

export function ServicesProcess() {
  return (
    <section className="py-24 bg-white" id="process">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic, data-driven approach to optimization that delivers consistent results.
          </p>
        </div>

        <div className="grid gap-8">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="relative">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Step Number */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center text-[hsl(var(--theme-accent))] font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="text-sm text-[hsl(var(--theme-accent))] bg-[hsl(var(--theme-accent))]/10 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    {/* Deliverables Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable) => (
                        <div 
                          key={deliverable}
                          className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-accent))]" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute left-[2.5rem] top-[5rem] bottom-[-2rem] w-px bg-[hsl(var(--theme-accent))]/20" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}