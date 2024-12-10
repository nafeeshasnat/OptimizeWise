export function OurStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded by a team of digital optimization experts, we set out to revolutionize 
                how businesses approach conversion rate optimization. Our journey began with a 
                simple yet powerful idea: combine data science with creative problem-solving 
                to unlock unprecedented growth opportunities.
              </p>
              <p>
                Over the years, we've refined our methodologies through countless experiments, 
                learning from every success and setback. Today, we're proud to be at the 
                forefront of CRO innovation, helping businesses of all sizes transform their 
                digital presence.
              </p>
              <p>
                Our team has grown to include specialists in analytics, UX design, development, 
                and strategic consulting – all united by our passion for optimization and 
                commitment to delivering measurable results.
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
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-sm">Successful Experiments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}