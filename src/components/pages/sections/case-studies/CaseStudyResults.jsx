import { TrendingUp, ArrowDownRight, DollarSign } from 'lucide-react';

export function CaseStudyResults({ results }) {
  const metrics = [
    {
      label: 'Conversion Rate',
      value: results.conversionRate,
      icon: TrendingUp,
      color: 'text-[#2ECC71]'
    },
    {
      label: 'Cart Abandonment',
      value: results.cartAbandonment,
      icon: ArrowDownRight,
      color: 'text-[#1E73BE]'
    },
    {
      label: 'Revenue per User',
      value: results.revenuePerUser,
      icon: DollarSign,
      color: 'text-[#2ECC71]'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <p className="text-3xl font-bold mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}