export function MethodologySection({ title, description, illustration }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div className="flex-1">
            <img
              src={illustration}
              alt="Data-Driven Methodology"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}