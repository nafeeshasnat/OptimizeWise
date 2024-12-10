import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "Their data-driven approach and attention to detail helped us achieve remarkable improvements in our conversion rates.",
    author: "Jordan Lee",
    role: "Head of Marketing, GrowthCo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team's expertise in CRO and A/B testing has been invaluable. They're true partners in our growth journey.",
    author: "Sarah Chen",
    role: "Digital Director, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with them has transformed how we approach optimization. The results speak for themselves.",
    author: "Michael Ross",
    role: "CEO, InnovateHub",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What Our Partners Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6">
                    <blockquote className="space-y-4">
                      <p className="text-lg text-gray-600">"{testimonial.quote}"</p>
                      <footer className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <cite className="not-italic font-semibold">
                            {testimonial.author}
                          </cite>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}