import { Card } from '@/components/ui/card';
import { LineChart, TrendingUp, Users } from 'lucide-react';
import { results } from '@/data/services';

export function ServicesResults() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our data-driven approach consistently delivers exceptional results 
            across industries and business types.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <Card key={result.metric} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mx-auto mb-6">
                  <LineChart className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                </div>
                
                <div className="text-4xl font-bold text-[hsl(var(--theme-accent))] mb-2">
                  {result.improvement}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{result.metric}</h3>
                
                <p className="text-sm text-gray-500 mb-4">
                  in {result.timeframe}
                </p>
                
                <p className="text-gray-600">
                  {result.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}