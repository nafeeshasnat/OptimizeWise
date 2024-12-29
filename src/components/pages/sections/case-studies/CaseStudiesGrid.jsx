import { Link } from 'react-router-dom';
import { ArrowUpRight, LineChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/data/caseStudies';

export function CaseStudiesGrid() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className="group block"
            >
              <div className="bg-white h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge
                    className="absolute top-4 left-4 bg-white/90 text-gray-900"
                  >
                    {study.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1E73BE] transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg"
                      >
                        <LineChart className="h-4 w-4 text-[hsl(var(--theme-accent))]" />
                        <span className="font-medium text-[hsl(var(--theme-accent))]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-[#1E73BE] font-medium">
                    View Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}