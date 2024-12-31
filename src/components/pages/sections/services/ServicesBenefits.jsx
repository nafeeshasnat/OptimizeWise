import { Card } from '@/components/ui/card';
import { benefits } from '@/data/services';

export function ServicesBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with us to unlock your website's full potential through 
            expert optimization and testing services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[hsl(var(--theme-accent))] mb-1">
                    {benefit.stats.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {benefit.stats.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}