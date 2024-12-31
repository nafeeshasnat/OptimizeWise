import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ServiceOverview({ content }) {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {content.title}
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            {content.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>

          <Card className="p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.benefits.map((benefit) => (
                <div 
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))] mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}