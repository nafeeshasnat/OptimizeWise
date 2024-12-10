export function ServicesOverview({ title, description, backgroundImage }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
}