import { LineChart, Users, Target, CheckCircle, Tag, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CaseStudyContent({ challenge, approach, testimonial, description, category, month, year }) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Overview Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-1">
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                <Calendar className="w-4 h-4 mr-2" />
                {`${month} ${year}`}
              </Badge>
            </div>
            <p className="text-xl leading-relaxed text-gray-600">
              {description}
            </p>
          </div>

          {/* Rest of the component remains the same */}
          {/* Challenge Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-[hsl(var(--theme-accent))]" />
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-lg leading-relaxed text-gray-600">
                {challenge}
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <LineChart className="h-8 w-8 text-[hsl(var(--theme-accent))]" />
              <h2 className="text-3xl font-bold">Our Approach</h2>
            </div>
            <div className="grid gap-4">
              {approach.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--theme-accent))] text-white font-semibold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-lg text-gray-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-[hsl(var(--theme-accent))]/5 p-8 rounded-xl border border-[hsl(var(--theme-accent))]/10">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-[hsl(var(--theme-accent))]" />
              <h2 className="text-3xl font-bold">Client Testimonial</h2>
            </div>
            <blockquote className="text-xl italic text-gray-600 mb-8 relative">
              <span className="text-5xl text-[hsl(var(--theme-accent))] absolute -top-4 -left-4">"</span>
              <p className="pl-8">{testimonial.quote}</p>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600">
                  {testimonial.author[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}