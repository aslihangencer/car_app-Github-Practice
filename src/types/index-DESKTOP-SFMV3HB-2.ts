export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Any' | 'hepsi' | 'Petrol/Diesel' | 'benzin' | 'dizel' | 'elektrik' | 'hibrit';

export interface Car {
    id: string | number;
    brand?: string;
    model?: string;
    year?: number;
    price?: number;
    engineSize?: number;
    mileage?: number;
    fuelType?: FuelType;
    
    name: string;
    segment: string;
    fuel?: FuelType;
    engine?: string;
    hp: number;
    torque?: number;
    priceRange?: {
        min: number;
        max: number;
    };
    price_tr?: {
        min: number;
        max: number;
    };
    fuelConsumption?: {
        city: number;
        highway: number;
    };
    consumption?: {
        city: number;
        highway: number;
    };
    performanceScores?: {
      priceAffordability: number;
      fuelEfficiency: number;
      durability: number;
      features: number;
      resaleValue: number;
    };
    reliability_score?: number; // Durability
    second_hand_value?: number; // Resale
    comfort_score?: number; // Features/Equipment substitute
    // Fields from the AI Engine requirements
    strengths?: string[];
    weaknesses?: string[];
    suitableFor?: string;
    imagePrompt?: {
        front: string;
        side: string;
        interior: string;
        night: string;
    };
    image?: string; // Fallback URL
}

export interface UserPreferences {
    budget: number;
    fuelType: string;
    usage: string;
}

export interface RecommendationResult {
    car: Car;
    score: number;
    explanation: string;
}

export type UserProfile = {
  budget: number;
  fuelPreference: "low" | "balanced" | "power";
  bodyType?: "sedan" | "suv" | "hatchback";
};
