import { Card } from '@/components/ui/card';
import { LineChart, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Make informed decisions based on comprehensive research and analysis",
    stat: "+45%",
    statLabel: "Average Improvement"
  },
  {
    icon: Users,
    title: "Better User Experience",
    description: "Create experiences that truly resonate with your target audience",
    stat: "+85%",
    statLabel: "User Satisfaction"
  },
  {
    icon: Zap,
    title: "Faster Optimization",
    description: "Accelerate your optimization process with validated insights",
    stat: "2x",
    statLabel: "Faster Results"
  }
];

export function ServiceBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your digital experience with data-driven insights and expert optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[hsl(var(--theme-accent))] mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-500">
                    {benefit.statLabel}
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