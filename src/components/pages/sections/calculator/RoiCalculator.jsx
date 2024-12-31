import { RoiCalculatorForm } from './RoiCalculatorForm';
import { RoiCalculatorResults } from './RoiCalculatorResults';
import { useState } from 'react';
import { calculateRoi } from '@/lib/calculator';

export function RoiCalculator() {
  const [results, setResults] = useState(null);

  const handleCalculate = (values) => {
    const calculatedResults = calculateRoi(values);
    setResults(calculatedResults);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Growth Potential
          </h2>
          <p className="text-lg text-gray-600">
            See how much additional revenue you can generate with data-driven optimization. 
            Calculate your potential ROI instantly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <RoiCalculatorForm onCalculate={handleCalculate} />
          {results && <RoiCalculatorResults results={results} />}
        </div>
      </div>
    </section>
  );
}