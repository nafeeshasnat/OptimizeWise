import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const tools = [
  {
    name: 'Google Optimize',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&h=100&q=80',
    description: 'Run targeted experiments to improve website performance with Google Optimize. As a free, reliable testing platform, it\'s perfect for driving impactful changes.',
    specialty: 'A/B Testing & Personalization',
    testimonial: 'Increased conversions by 25% in 45 days using Google Optimize!'
  },
  {
    name: 'VWO',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    description: 'Enhance user experiences with VWO\'s advanced multivariate and A/B testing capabilities. Gain actionable insights with heatmaps, session recordings, and more.',
    specialty: 'Full-Stack Testing & Analytics',
    testimonial: 'VWO helped us achieve a 30% uplift in revenue within 60 days.'
  },
  {
    name: 'Optimizely',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    description: 'Optimizely empowers businesses to test, learn, and scale. Its robust testing capabilities ensure data-backed decisions for sustained growth.',
    specialty: 'Enterprise-Grade Experimentation',
    testimonial: 'Optimizely\'s insights drove a 40% improvement in user engagement.'
  },
  {
    name: 'Adobe Target',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=100&h=100&q=80',
    description: 'Deliver personalized customer journeys with Adobe Target\'s AI-driven testing and optimization. Unlock your website\'s full potential.',
    specialty: 'AI-Powered Personalization',
    testimonial: 'Achieved 35% higher conversion rates through personalization.'
  }
];

export function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className={cn(
            'group relative p-6 bg-white rounded-xl border border-gray-100',
            'hover:shadow-lg transition-all duration-300'
          )}
        >
          <div className="flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 mb-4 rounded-lg bg-gray-50 p-2 flex items-center justify-center">
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{tool.specialty}</p>
            <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
            <div className="mt-auto">
              <blockquote className="italic text-sm text-[hsl(var(--theme-accent))]">
                "{tool.testimonial}"
              </blockquote>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}