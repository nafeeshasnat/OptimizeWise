import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CRO Strategist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "With over a decade of experience in digital optimization, Alex leads our strategic initiatives and ensures every client receives exceptional value.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Chen",
    role: "Head of Analytics",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    bio: "Sarah combines statistical expertise with business acumen to uncover insights that drive meaningful improvements.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Rodriguez",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Marcus oversees our technical implementations, ensuring flawless execution of complex testing scenarios.",
    linkedin: "#",
    twitter: "#"
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated group of strategists, analysts, and optimization specialists working 
            together to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#1E73BE] mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-[#1E73BE]">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-[#1E73BE]">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}