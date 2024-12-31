import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function RoiCalculatorForm({ onCalculate }) {
  const [values, setValues] = useState({
    visitors: '',
    conversionRate: '',
    orderValue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="visitors" className="text-gray-700 font-medium">
            Monthly Visitors
          </Label>
          <Input
            id="visitors"
            name="visitors"
            type="number"
            placeholder="e.g., 10000"
            value={values.visitors}
            onChange={handleChange}
            required
            className="h-12 rounded-lg border-gray-200 focus:border-[hsl(var(--theme-accent))] focus:ring-[hsl(var(--theme-accent))]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="conversionRate" className="text-gray-700 font-medium">
            Current Conversion Rate (%)
          </Label>
          <Input
            id="conversionRate"
            name="conversionRate"
            type="number"
            step="0.1"
            placeholder="e.g., 2.5"
            value={values.conversionRate}
            onChange={handleChange}
            required
            className="h-12 rounded-lg border-gray-200 focus:border-[hsl(var(--theme-accent))] focus:ring-[hsl(var(--theme-accent))]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderValue" className="text-gray-700 font-medium">
            Average Order Value ($)
          </Label>
          <Input
            id="orderValue"
            name="orderValue"
            type="number"
            placeholder="e.g., 100"
            value={values.orderValue}
            onChange={handleChange}
            required
            className="h-12 rounded-lg border-gray-200 focus:border-[hsl(var(--theme-accent))] focus:ring-[hsl(var(--theme-accent))]"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          type="submit"
          size="lg"
          className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white px-8 py-3 rounded-lg transform transition-transform hover:scale-105 font-medium text-base"
        >
          Calculate Potential Revenue
        </Button>
      </div>
    </form>
  );
}