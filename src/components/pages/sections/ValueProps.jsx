import { LineChart, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const features = [
  {
    icon: LineChart,
    title: 'Data-Driven Decisions',
    description: 'Make informed choices based on real user behavior and analytics.',
    path: '/case-studies',
    linkText: 'View Success Stories',
    details: 'See how our data-driven approach has delivered measurable results across industries.'
  },
  {
    icon: Users,
    title: 'User-Centric Approach',
    description: 'Create experiences that delight users and drive conversions.',
    path: '/services',
    hash: '#user-research',
    linkText: 'Explore Our Methods',
    details: 'Learn about our comprehensive user research and testing methodologies.'
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Quick deployment of optimizations for faster results.',
    path: '/services',
    hash: '#implementation',
    linkText: 'See How We Work',
    details: 'Discover our streamlined process for fast, effective optimization.'
  },
];

export function ValueProps() {
  const navigate = useNavigate();

  const handleClick = (feature) => {
    navigate(feature.path + (feature.hash || ''));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose OptimizeWise?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We transform data into actionable insights that drive real business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--theme-accent))] transition-colors">
                <feature.icon className="h-6 w-6 text-[hsl(var(--theme-accent))] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <p className="text-sm text-gray-500 mb-4">{feature.details}</p>
              <Button 
                variant="link" 
                className="p-0 text-[hsl(var(--theme-accent))] hover:text-[hsl(var(--theme-accent))]/80"
                onClick={() => handleClick(feature)}
              >
                {feature.linkText} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}