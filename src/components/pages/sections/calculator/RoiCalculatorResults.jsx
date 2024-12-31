import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function RoiCalculatorResults({ results }) {
  const { currentRevenue, potentialRevenue, additionalRevenue } = results;

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2 font-medium">Current Monthly Revenue</p>
          <p className="text-3xl font-bold text-gray-900">
            ${currentRevenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2 font-medium">Potential Monthly Revenue</p>
          <p className="text-3xl font-bold text-[hsl(var(--theme-accent))]">
            ${potentialRevenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2 font-medium">Additional Revenue</p>
          <p className="text-3xl font-bold text-green-600">
            +${additionalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white px-8 py-3 rounded-lg transform transition-transform hover:scale-105 font-medium text-base"
        >
          Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}