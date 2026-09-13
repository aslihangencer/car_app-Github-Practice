export function explain(car: any) {
  const lines: string[] = [];

  // Intro sentence
  lines.push(
    `${car.name} is positioned in the ${car.segment} segment and offers a balanced combination of performance and practicality.`
  );

  const minPrice = car.priceRange?.min ?? car.price_tr?.min ?? 0;
  // Price analysis
  if (minPrice < 1200000) {
    lines.push(
      `It is considered a budget-friendly option in the Turkish market, making it attractive for first-time buyers or city drivers.`
    );
  } else {
    lines.push(
      `It sits in a more premium price range, targeting users who expect higher comfort and better features.`
    );
  }

  const fuelE = car.performanceScores?.fuelEfficiency ?? 80;
  // Fuel efficiency
  if (fuelE > 85) {
    lines.push(
      `Fuel efficiency is one of its strongest points, making it very suitable for daily urban use and long-term cost savings.`
    );
  } else {
    lines.push(
      `Its fuel consumption is average, meaning running costs are acceptable but not class-leading.`
    );
  }

  const resale = car.performanceScores?.resaleValue ?? 80;
  // Reliability / resale
  if (resale > 90) {
    lines.push(
      `It has a very strong resale value, which is a major advantage in the Turkish second-hand market.`
    );
  } else {
    lines.push(
      `Resale value is moderate, so it may not retain its price as strongly as some competitors.`
    );
  }

  const features = car.performanceScores?.features ?? 80;
  // Features
  if (features > 85) {
    lines.push(
      `The car offers a rich feature set with modern technology, enhancing driving comfort and safety.`
    );
  } else {
    lines.push(
      `Its feature set is relatively basic, focusing more on practicality than advanced technology.`
    );
  }

  // Final conclusion
  lines.push(
    `Overall, ${car.name} is a solid choice for users who prioritize reliability, efficiency, and everyday usability rather than luxury performance.`
  );

  return lines.join(" ");
}

// Preserve backwards compatibility with the existing pages
export function explainDecision(car: any, userProfile?: any) {
  return [explain(car)];
}
