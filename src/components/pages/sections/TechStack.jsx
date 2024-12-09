import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const tools = [
  {
    name: 'Google Optimize',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&h=100&q=80',
    specialty: 'A/B Testing & Personalization',
  },
  {
    name: 'VWO',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    specialty: 'Full-Stack Testing & Analytics',
  },
  {
    name: 'Optimizely',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    specialty: 'Enterprise-Grade Experimentation',
  },
  {
    name: 'Adobe Target',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    specialty: 'AI-Powered Personalization',
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best-in-Class Testing Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage industry-leading tools to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={cn(
                'group relative p-6 bg-white rounded-xl border border-gray-100',
                'hover:shadow-lg transition-all duration-300'
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 overflow-hidden">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tool.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white hover:bg-gray-50"
          >
            Our Tech Stack
          </Button>
        </div>
      </div>
    </section>
  );
}