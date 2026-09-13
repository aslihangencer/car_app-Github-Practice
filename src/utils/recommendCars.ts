import { calculateScore } from "./scoring";

export function recommendCars(cars: any[], user: any) {
  const filtered = cars.filter(car => {
    const minPrice = car.priceRange?.min ?? car.price_tr?.min ?? 0;
    const meetsBudget = minPrice <= (user.budget || Number.MAX_SAFE_INTEGER);
    const meetsSegment = user.segment ? car.segment === user.segment : true;
    return meetsBudget && meetsSegment;
  });

  const ranked = filtered
    .map(car => ({
      ...car,
      score: calculateScore(car)
    }))
    .sort((a, b) => b.score - a.score);

  return ranked.slice(0, 3);
}

// Dedicated smart filter directly extracted from user request
export function smartFilterCars(cars: any[], budget: number, selectedSegment: string) {
  return cars.filter(car =>
    (car.priceRange?.min ?? 0) <= budget &&
    car.segment === selectedSegment
  );
}
