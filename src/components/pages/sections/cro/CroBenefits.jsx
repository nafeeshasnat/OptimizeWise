import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { benefits } from '@/data/croBenefits';

export function CroBenefits() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            The Power of CRO for Your Business
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Discover how Conversion Rate Optimization can transform your digital presence 
            and drive sustainable growth through data-driven improvements.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-4 md:p-6 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Icon - Centered on mobile */}
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mx-auto md:mx-0">
                  <benefit.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
                    {benefit.title}
                    <ArrowUpRight className="h-4 w-4 text-[hsl(var(--theme-accent))]" />
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-center md:text-left">
                    {benefit.description}
                  </p>

                  {/* Stats Card */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center md:text-left">
                    <div className="text-2xl font-bold text-[hsl(var(--theme-accent))]">
                      {benefit.stats.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.stats.label}
                      <span className="text-gray-500"> {benefit.stats.timeframe}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 justify-center md:justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-accent))]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}