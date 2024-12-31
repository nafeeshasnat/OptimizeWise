import { Card } from '@/components/ui/card';
import { LineChart, Users, Search } from 'lucide-react';

const highlights = [
  {
    icon: LineChart,
    title: "Data-Driven Strategy",
    description: "Make informed decisions based on comprehensive analytics and user behavior insights."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with experienced CRO specialists dedicated to maximizing your success."
  },
  {
    icon: Search,
    title: "Proven Results",
    description: "Join clients who've achieved up to 300% growth through our optimization services."
  }
];

export function ServicesIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-600">
            Stop losing revenue to poor conversion rates. Our comprehensive CRO and A/B 
            testing services help businesses like yours achieve exceptional growth through 
            data-driven optimization strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}