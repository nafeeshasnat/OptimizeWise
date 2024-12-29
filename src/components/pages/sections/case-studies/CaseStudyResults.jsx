import { TrendingUp, ArrowDownRight, DollarSign, BarChart } from 'lucide-react';

export function CaseStudyResults({ results }) {
  const metrics = [
    {
      label: 'Conversion Rate',
      value: results.conversionRate,
      icon: TrendingUp,
      description: 'Increase in overall conversion rate',
      color: 'text-[hsl(var(--theme-accent))]',
      bgColor: 'bg-[hsl(var(--theme-accent))]/10'
    },
    {
      label: 'Abandonment',
      value: results.cartAbandonment,
      icon: ArrowDownRight,
      description: 'Reduction in cart abandonment',
      color: 'text-[#1E73BE]',
      bgColor: 'bg-[#1E73BE]/10'
    },
    {
      label: 'Revenue/User',
      value: results.revenuePerUser,
      icon: DollarSign,
      description: 'Increase in revenue per user',
      color: 'text-[hsl(var(--theme-accent))]',
      bgColor: 'bg-[hsl(var(--theme-accent))]/10'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <BarChart className="h-8 w-8 text-[hsl(var(--theme-accent))]" />
            <h2 className="text-3xl font-bold text-center">Key Results</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 mb-6 rounded-xl ${metric.bgColor} flex items-center justify-center`}>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <p className="text-4xl font-bold mb-2">{metric.value}</p>
                <p className="text-lg font-semibold mb-2">{metric.label}</p>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}