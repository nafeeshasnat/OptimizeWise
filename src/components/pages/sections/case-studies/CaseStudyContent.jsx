import { LineChart, Users, Target, CheckCircle } from 'lucide-react';

export function CaseStudyContent({ challenge, approach, testimonial }) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Challenge Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-[#1E73BE]" />
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <p className="text-lg text-gray-600">
              {challenge}
            </p>
          </div>

          {/* Approach Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <LineChart className="h-8 w-8 text-[#1E73BE]" />
              <h2 className="text-3xl font-bold">Our Approach</h2>
            </div>
            <div className="grid gap-4">
              {approach.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-[#2ECC71] mt-1 shrink-0" />
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-[#1E73BE]/5 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-[#1E73BE]" />
              <h2 className="text-3xl font-bold">Client Testimonial</h2>
            </div>
            <blockquote className="text-lg text-gray-600 mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}