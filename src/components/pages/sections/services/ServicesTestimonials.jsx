import { Card } from '@/components/ui/card';
import { testimonials } from '@/data/services';
import { Quote } from 'lucide-react';

export function ServicesTestimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <Quote className="h-8 w-8 text-[hsl(var(--theme-accent))] mb-4" />
                
                <blockquote className="flex-1 text-lg text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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