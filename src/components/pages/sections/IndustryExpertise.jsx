import { Button } from '@/components/ui/button';
import { LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { caseStudies } from '@/data/caseStudies';

export function IndustryExpertise() {
  // Get the last 3 case studies
  const latestCaseStudies = [...caseStudies].reverse().slice(0, 3);

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results through data-driven optimization, regardless of your sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestCaseStudies.map((study) => (
            <div
              key={study.slug}
              className={cn(
                'group p-6 bg-white rounded-xl border border-gray-100',
                'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--theme-accent))] transition-colors">
                  <LineChart className="h-6 w-6 text-[hsl(var(--theme-accent))] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{study.category}</h3>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 line-clamp-2">{study.challenge}</p>
                <p className="text-[hsl(var(--theme-accent))] font-semibold">{study.results.conversionRate} improvement</p>
                <p className="text-sm text-gray-500">{study.title}</p>
              </div>

              <Link to={`/case-studies/${study.slug}`}>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-[hsl(var(--theme-accent))] hover:text-[hsl(var(--theme-accent))]/80"
                >
                  View Case Study →
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}