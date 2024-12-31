import { Card } from '@/components/ui/card';

export function ServiceProcess({ steps }) {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic, proven approach that delivers consistent results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative">
                <div className="p-6">
                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div className="hidden md:flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center text-[hsl(var(--theme-accent))] font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.25rem] top-[4.5rem] bottom-[-2rem] w-px bg-[hsl(var(--theme-accent))]/20" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}