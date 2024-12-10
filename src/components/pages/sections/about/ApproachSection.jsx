import { LineChart, Users, Lightbulb, ArrowUpRight } from 'lucide-react';

const steps = [
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "We begin with comprehensive data analysis to understand user behavior and identify opportunities."
  },
  {
    icon: Users,
    title: "User Research",
    description: "Qualitative research helps us understand the 'why' behind user actions and pain points."
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "We develop data-driven hypotheses and create detailed testing roadmaps."
  },
  {
    icon: ArrowUpRight,
    title: "Continuous Optimization",
    description: "Regular analysis and iteration ensure sustained improvement and growth."
  }
];

export function ApproachSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic, data-driven methodology that combines analytical rigor 
            with creative problem-solving to deliver consistent results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-[#1E73BE]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-[2px] bg-[#1E73BE]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}