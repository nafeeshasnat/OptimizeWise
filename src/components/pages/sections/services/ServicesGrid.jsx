import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive CRO and A/B testing services designed to maximize your 
            website's performance and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-accent))]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-accent))]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-accent))]/90 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}