import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description: "Every recommendation and strategy is backed by comprehensive research, analytics, and testing."
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "We prioritize understanding user needs to create meaningful, impactful experiences."
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Clear communication, realistic expectations, and honest reporting build lasting partnerships."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We constantly evolve our methods, embrace feedback, and push boundaries to deliver better results."
  }
];

export function MissionValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
          <p className="text-lg text-gray-600">
            We exist to empower businesses with data-driven insights and innovative experimentation, 
            delivering sustainable growth through exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-[#1E73BE]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}