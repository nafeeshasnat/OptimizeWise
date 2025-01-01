export function OurStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Journey: Experts in A/B Testing Solutions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded by a team of technical experts in A/B testing, our mission is to simplify experimentation
                and help businesses make data-driven decisions with confidence. From designing precise experiments
                to implementing advanced testing tools, we specialize in transforming ideas into actionable results.
              </p>
              <p>
                We started with a clear goal: to provide businesses with technically sound and reliable A/B test implementations.
                Over the years, we’ve successfully conducted hundreds of experiments using tools like Google Optimize, Optimizely,
                VWO and any other platform of choice enabling our clients to unlock their full growth potential.
              </p>
              <p>
                Our expertise lies in creating custom test variations, integrating testing platforms seamlessly, and delivering
                comprehensive analytics that guide strategic decisions. Every project we undertake is driven by technical precision,
                innovative thinking, and a commitment to measurable success.
              </p>
              <p>
                Backed by a team of developers, data analysts, and strategic consultants, we bring together the skills required to
                implement sophisticated A/B tests that optimize user experiences and maximize ROI. Whether it's improving website
                performance or testing new ideas, we deliver results that matter.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
              alt="Our Journey"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#1E73BE] text-white p-6 rounded-lg">
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm">Successful Experiments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}