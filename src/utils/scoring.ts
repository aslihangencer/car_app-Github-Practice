export function calculateScore(car: any): number {
  // Try new schema first
  if (car.performanceScores) {
    const { priceAffordability, fuelEfficiency, durability, features, resaleValue } = car.performanceScores;
    return Math.round((priceAffordability + fuelEfficiency + durability + features + resaleValue) / 5);
  }

  // Fallback map for the existing old schema
  const durability = car.reliability_score ?? 80;
  const resale = car.second_hand_value ?? 80;
  const comfort = car.comfort_score ?? 80;
  
  // Fake some values based on consumption and price
  const fuel = car.consumption?.city < 6 ? 90 : 70;
  const price = car.price_tr?.max < 1500000 ? 90 : 70;

  return Math.round((durability + resale + comfort + fuel + price) / 5);
}
