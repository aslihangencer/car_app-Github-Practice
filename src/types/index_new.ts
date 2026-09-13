export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    engineSize: number;
    hp: number;
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
    mileage: number;
    image: string;
    torque?: number;
    segment?: string;
    consumption?: {
        city: number;
        highway: number;
    };
    fuelConsumption?: {
        city: number;
        highway: number;
    };
    priceRange?: {
        min: number;
        max: number;
    };
    price_tr?: {
        min: number;
        max: number;
    };
    performanceScores?: {
        priceAffordability: number;
        fuelEfficiency: number;
        durability: number;
        features: number;
        resaleValue: number;
    };
    strengths?: string[];
    reliability_score?: number;
    second_hand_value?: number;
    comfort_score?: number;
}
