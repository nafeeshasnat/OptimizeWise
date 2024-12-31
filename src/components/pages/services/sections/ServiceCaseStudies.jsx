import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '@/data/caseStudies';

export function ServiceCaseStudies() {
  // Get the 3 most recent case studies
  const recentCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses achieve exceptional results through 
            data-driven optimization strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recentCaseStudies.map((study) => (
            <Card key={study.slug} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className="absolute top-4 left-4 bg-white/90 text-gray-900"
                >
                  {study.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {study.description}
                </p>
                
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                      <LineChart className="h-4 w-4 text-[hsl(var(--theme-accent))]" />
                      <span className="font-medium text-[hsl(var(--theme-accent))]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to={`/case-studies/${study.slug}`}>
                  <Button 
                    variant="link" 
                    className="p-0 text-[hsl(var(--theme-accent))]"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/case-studies">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-50"
            >
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}