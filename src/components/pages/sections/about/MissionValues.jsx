import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Data-Driven Leadership",
    description: "With every strategy rooted in analytics and research, we deliver solutions backed by proven data and decades of combined expertise."
  },
  {
    icon: Users,
    title: "Customer-Centric Excellence",
    description: "Your success is our priority. By understanding your unique challenges and goals, we craft impactful user experiences that drive results."
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We believe in clear communication, setting realistic expectations, and delivering measurable results with honesty and trust."
  },
  {
    icon: Lightbulb,
    title: "Innovative Experimentation",
    description: "With a passion for innovation, we constantly refine our methods to push boundaries and achieve exceptional outcomes."
  }
];

export function MissionValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission, Values, and Expertise</h2>
          <p className="text-lg text-gray-600">
            We exist to empower businesses with data-driven A/B testing and CRO expertise,
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