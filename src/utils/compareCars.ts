import { calculateScore } from "./scoring";

export function compareCars(cars: any[]) {
  return cars.map(car => ({
    name: car.name,
    hp: car.hp,
    torque: car.torque,
    fuelCity: car.fuelConsumption?.city || car.consumption?.city,
    fuelHighway: car.fuelConsumption?.highway || car.consumption?.highway,
    score: calculateScore(car)
  }));
}
