import { Card } from '@/components/ui/card';
import { LineChart, ArrowUpRight, Users, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/data/caseStudies';
import { Link } from 'react-router-dom';

export function CroExamples() {
  const examples = caseStudies.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-lg text-gray-600">
            Explore how our data-driven CRO strategies have transformed businesses
            across different industries, delivering measurable results and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, i) => (
            <Link key={example.slug} to={`/case-studies/${example.slug}`} className="group block">
              <Card key={example.title} className="overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center">
                      <example.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                    </div>
                    <Badge variant="secondary">{example.category}</Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {example.title}
                    <ArrowUpRight className="h-4 w-4 text-[hsl(var(--theme-accent))]" />
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {example.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(example.results).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-[hsl(var(--theme-accent))]">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Improvements */}
                  <div className="space-y-2 mb-4">
                    {example.improvements.map((improvement) => (
                      <div key={improvement} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-accent))]" />
                        {improvement}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t mt-[auto]">
                    <span>Timeframe: {example.timeframe}</span>
                    <span className="font-semibold text-[hsl(var(--theme-accent))]">
                      {example.roi}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section >
  );
}