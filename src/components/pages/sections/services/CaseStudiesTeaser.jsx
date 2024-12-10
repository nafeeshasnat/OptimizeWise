import { Button } from '@/components/ui/button';

export function CaseStudiesTeaser({ title, subtitle, cta, images }) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
          <div className="flex justify-center gap-8 mb-8">
            {images.map((image, index) => (
              <div key={index} className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                <img src={image} alt={`Case Study ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <Button size="lg" variant="outline">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
}