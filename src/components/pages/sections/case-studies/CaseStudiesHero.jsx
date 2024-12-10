export function CaseStudiesHero() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Explore how we've helped businesses achieve remarkable results through data-driven optimization and strategic testing.
        </p>
      </div>
    </div>
  );
}