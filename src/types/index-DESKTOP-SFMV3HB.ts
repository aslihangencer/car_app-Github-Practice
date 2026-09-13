export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';

export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    engineSize: number; // cc cinsinden, Elektrikli için 0
    hp: number;
    torque?: number; // Nm (Newtonmetre) cinsinden tork değeri
    fuelType: FuelType;
    mileage: number;
    image: string;
    generation?: number; // Nesil farkı için
}

// Keeping legacy definitions for app compatibility where needed
export interface UserPreferences {
    budget: number;
    fuelType: FuelType | 'Any';
}

export interface RecommendationResult {
    car: Car;
    score: number;
    explanation: string;
}
