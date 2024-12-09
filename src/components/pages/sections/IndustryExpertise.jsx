import { Building2, Briefcase, PiggyBank, Heart, GraduationCap, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: Building2,
    title: 'E-commerce & Retail',
    challenge: 'Cart abandonment rates above industry average',
    metric: '+45% checkout completion',
    case: 'Major retailer saw 2.3x ROI in 3 months',
  },
  {
    icon: Briefcase,
    title: 'SaaS & Technology',
    challenge: 'Low trial-to-paid conversion rates',
    metric: '+65% trial conversions',
    case: 'B2B SaaS increased MRR by 40%',
  },
  {
    icon: PiggyBank,
    title: 'Finance & Banking',
    challenge: 'Complex application forms causing drop-offs',
    metric: '+38% form completion',
    case: 'Digital bank doubled sign-ups',
  },
  {
    icon: Heart,
    title: 'Healthcare & Wellness',
    challenge: 'Patient booking friction',
    metric: '+52% appointment bookings',
    case: 'Telehealth platform optimization',
  },
  {
    icon: GraduationCap,
    title: 'Education & Learning',
    challenge: 'Course enrollment barriers',
    metric: '+71% enrollment rate',
    case: 'Online learning platform success',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    challenge: 'Booking process complexity',
    metric: '+33% booking completion',
    case: 'Travel site revenue boost',
  },
];

export function IndustryExpertise() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results through data-driven optimization, regardless of your sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={cn(
                'group p-6 bg-white rounded-xl border border-gray-100',
                'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center group-hover:bg-[#1E73BE] transition-colors">
                  <industry.icon className="h-6 w-6 text-[#1E73BE] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600">{industry.challenge}</p>
                <p className="text-[#2ECC71] font-semibold">{industry.metric}</p>
                <p className="text-sm text-gray-500">{industry.case}</p>
              </div>

              <Button
                variant="link"
                className="mt-4 p-0 text-[#1E73BE] hover:text-[#1E73BE]/80"
              >
                View Case Study →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}