import { cars } from "@/data/cars";

export function runComparison(carId1: string, carId2: string) {
    const car1 = cars.find((c) => c.id === carId1);
    const car2 = cars.find((c) => c.id === carId2);

    if (!car1 || !car2) {
        throw new Error("Car not found");
    }

    return `
Comparing:
- ${car1.brand} ${car1.model}
- ${car2.brand} ${car2.model}

[Agent: Performance] analyzing...
[Agent: Cost] analyzing...
[Agent: Final] generating decision...
`;
}
