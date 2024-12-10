import { Link } from 'react-router-dom';
import { ArrowUpRight, LineChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    slug: 'eshopx-checkout-optimization',
    title: 'E-Shop X: Checkout Flow Optimization',
    description: 'How we helped a leading e-commerce platform increase their checkout conversion rate by 22% through strategic A/B testing and UX improvements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    results: [
      '+22% Conversion Rate',
      '-15% Cart Abandonment',
      '+18% Revenue per User'
    ]
  },
  {
    slug: 'saasy-engagement-boost',
    title: 'SaaS Y: User Engagement Enhancement',
    description: 'Discover how our optimization strategy helped a SaaS platform increase user engagement by 30% and reduce churn through targeted improvements.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'SaaS',
    results: [
      '+30% User Engagement',
      '-25% Churn Rate',
      '+40% Feature Adoption'
    ]
  },
  {
    slug: 'retailco-lead-generation',
    title: 'RetailCo: Lead Generation Success',
    description: 'Learn how we helped RetailCo double their email signup rate while maintaining lead quality through strategic landing page optimization.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80',
    category: 'Retail',
    results: [
      '2x Email Signups',
      '+45% Lead Quality',
      '+60% Conversion to Sale'
    ]
  }
];

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
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1E73BE] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2">
                    {study.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <LineChart className="h-4 w-4 text-[#2ECC71]" />
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-[#1E73BE] font-medium">
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