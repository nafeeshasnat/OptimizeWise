export function calculateRoi(values) {
  const visitors = parseInt(values.visitors);
  const conversionRate = parseFloat(values.conversionRate) / 100;
  const orderValue = parseFloat(values.orderValue);

  const currentRevenue = visitors * conversionRate * orderValue;
  const potentialRevenue = currentRevenue * 1.2; // Assuming 20% improvement
  const additionalRevenue = potentialRevenue - currentRevenue;

  return {
    currentRevenue: Math.round(currentRevenue),
    potentialRevenue: Math.round(potentialRevenue),
    additionalRevenue: Math.round(additionalRevenue)
  };
}