export function CaseStudyHero({ title, subtitle, image }) {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-2xl text-white/90">
          {subtitle}
        </p>
      </div>
    </div>
  );
}