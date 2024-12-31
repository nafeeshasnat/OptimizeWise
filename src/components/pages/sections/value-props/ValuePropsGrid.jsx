import { LineChart, Users, Zap, BarChart } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Data-Driven Decisions',
    description: 'Transform your website performance with proven A/B testing strategies backed by deep analytics and user behavior insights.',
    highlight: '45% Average Conversion Lift',
  },
  {
    icon: Users,
    title: 'User-Centric Optimization',
    description: 'Create exceptional user experiences that convert visitors into loyal customers through strategic UX improvements.',
    highlight: '87% Customer Satisfaction',
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'See results quickly with our agile optimization process. From testing to implementation in as little as 7 days.',
    highlight: '2x Faster Time to Value',
  },
  {
    icon: BarChart,
    title: 'Measurable Results',
    description: 'Track your success with comprehensive analytics and real-time performance monitoring for continuous growth.',
    highlight: '200% ROI Average',
  }
];

export function ValuePropsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--theme-accent))] transition-colors">
            <feature.icon className="h-6 w-6 text-[hsl(var(--theme-accent))] group-hover:text-white transition-colors" />
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          
          <div className="text-[hsl(var(--theme-accent))] font-semibold">
            {feature.highlight}
          </div>
        </div>
      ))}
    </div>
  );
}