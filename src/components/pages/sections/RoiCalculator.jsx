import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

export function RoiCalculator() {
  const [visitors, setVisitors] = useState('10000');
  const [conversionRate, setConversionRate] = useState('2');
  const [orderValue, setOrderValue] = useState('100');

  const calculatePotentialRevenue = () => {
    const currentRevenue = 
      (parseInt(visitors) * (parseFloat(conversionRate) / 100) * parseFloat(orderValue));
    const potentialRevenue = currentRevenue * 1.2; // Assuming 20% improvement
    return {
      current: currentRevenue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      potential: potentialRevenue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      increase: (potentialRevenue - currentRevenue).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    };
  };

  const revenue = calculatePotentialRevenue();

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Potential ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much revenue you could unlock with optimization
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="visitors">Monthly Visitors</Label>
                <Input
                  id="visitors"
                  type="number"
                  value={visitors}
                  onChange={(e) => setVisitors(e.target.value)}
                  min="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="conversion">Current Conversion Rate (%)</Label>
                <Input
                  id="conversion"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Average Order Value ($)</Label>
                <Input
                  id="value"
                  type="number"
                  value={orderValue}
                  onChange={(e) => setOrderValue(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{revenue.current}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Potential Revenue</p>
                  <p className="text-2xl font-bold text-[#2ECC71]">{revenue.potential}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Potential Increase</p>
                  <p className="text-2xl font-bold text-[#1E73BE]">{revenue.increase}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-accent))/90] text-white hover:text-[#1E73BE]">
                Get Detailed Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}