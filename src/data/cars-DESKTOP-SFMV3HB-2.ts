export const cars = [
  {
    id: 1,
    name: "Renault Clio",
    segment: "B",
    hp: 90,
    torque: 160,
    priceRange: { min: 900000, max: 1150000 },
    fuelConsumption: { city: 6.2, highway: 4.5 },

    strengths: ["Low fuel consumption", "Affordable", "Easy city use"],
    weaknesses: ["Small trunk", "Low performance"],

    aiImagePrompts: {
      front: "Renault Clio 2025 ultra realistic studio front view, sharp details, cinematic lighting",
      side: "Renault Clio side profile, city street, sunset reflections, ultra realistic",
      interior: "Renault Clio modern cockpit, digital display, clean dashboard, premium feel",
      night: "Renault Clio night driving Istanbul, neon lights, cinematic motion blur"
    },

    performanceScores: {
      priceAffordability: 90,
      fuelEfficiency: 88,
      durability: 80,
      features: 70,
      resaleValue: 82
    }
  },

  {
    id: 2,
    name: "Fiat Egea Sedan",
    segment: "C",
    hp: 95,
    torque: 200,
    priceRange: { min: 850000, max: 1100000 },
    fuelConsumption: { city: 6.5, highway: 4.8 },

    strengths: ["Cheap maintenance", "Big trunk"],
    weaknesses: ["Basic interior", "Low tech"],

    aiImagePrompts: {
      front: "Fiat Egea Sedan 2025 realistic studio lighting front view",
      side: "Fiat Egea side profile urban road daylight cinematic",
      interior: "Fiat Egea simple dashboard realistic lighting",
      night: "Fiat Egea night highway cinematic lights"
    },

    performanceScores: {
      priceAffordability: 95,
      fuelEfficiency: 80,
      durability: 85,
      features: 60,
      resaleValue: 78
    }
  },

  {
    id: 3,
    name: "Toyota Corolla",
    segment: "C",
    hp: 125,
    torque: 156,
    priceRange: { min: 1100000, max: 1450000 },
    fuelConsumption: { city: 5.5, highway: 4.2 },

    strengths: ["Very reliable", "High resale value", "Hybrid option"],
    weaknesses: ["Average performance"],

    aiImagePrompts: {
      front: "Toyota Corolla 2025 ultra realistic showroom lighting",
      side: "Toyota Corolla elegant side profile city sunset",
      interior: "Toyota Corolla hybrid modern dashboard clean design",
      night: "Toyota Corolla night drive neon reflections cinematic"
    },

    performanceScores: {
      priceAffordability: 85,
      fuelEfficiency: 92,
      durability: 95,
      features: 80,
      resaleValue: 95
    }
  },

  {
    id: 4,
    name: "Hyundai i20",
    segment: "B",
    hp: 100,
    torque: 172,
    priceRange: { min: 900000, max: 1200000 },
    fuelConsumption: { city: 5.8, highway: 4.3 },

    strengths: ["Modern design", "Efficient"],
    weaknesses: ["Small engine"],

    aiImagePrompts: {
      front: "Hyundai i20 sporty hatchback studio lighting ultra realistic",
      side: "Hyundai i20 dynamic city sunset drive",
      interior: "Hyundai i20 digital cockpit modern layout",
      night: "Hyundai i20 neon city night drive cinematic"
    },

    performanceScores: {
      priceAffordability: 88,
      fuelEfficiency: 85,
      durability: 80,
      features: 85,
      resaleValue: 80
    }
  },

  {
    id: 5,
    name: "Renault Megane Sedan",
    segment: "C",
    hp: 140,
    torque: 240,
    priceRange: { min: 1200000, max: 1600000 },
    fuelConsumption: { city: 6.8, highway: 5.0 },

    strengths: ["Comfort", "Strong engine"],
    weaknesses: ["Fuel consumption"],

    aiImagePrompts: {
      front: "Renault Megane aggressive front design ultra realistic",
      side: "Megane sedan luxury side profile sunset",
      interior: "Megane premium interior ambient lighting leather seats",
      night: "Megane night highway rain cinematic reflections"
    },

    performanceScores: {
      priceAffordability: 80,
      fuelEfficiency: 75,
      durability: 85,
      features: 88,
      resaleValue: 82
    }
  },

  {
    id: 6,
    name: "Dacia Duster",
    segment: "SUV",
    hp: 115,
    torque: 260,
    priceRange: { min: 1100000, max: 1500000 },
    fuelConsumption: { city: 7.0, highway: 5.5 },

    strengths: ["Off-road", "Affordable SUV"],
    weaknesses: ["Basic interior"],

    aiImagePrompts: {
      front: "Dacia Duster SUV off-road dusty terrain ultra realistic",
      side: "Duster mountain road cinematic adventure shot",
      interior: "Duster rugged interior durable materials",
      night: "Duster forest night headlights cinematic fog"
    },

    performanceScores: {
      priceAffordability: 92,
      fuelEfficiency: 70,
      durability: 88,
      features: 65,
      resaleValue: 75
    }
  },

  {
    id: 7,
    name: "Toyota C-HR",
    segment: "SUV",
    hp: 184,
    torque: 190,
    priceRange: { min: 1500000, max: 2000000 },
    fuelConsumption: { city: 4.8, highway: 4.0 },

    strengths: ["Hybrid efficiency", "Design"],
    weaknesses: ["Pricey"],

    aiImagePrompts: {
      front: "Toyota C-HR futuristic hybrid SUV ultra realistic studio",
      side: "C-HR coupe SUV neon city sunset",
      interior: "C-HR futuristic cockpit ambient lighting digital cluster",
      night: "C-HR cyberpunk city night drive neon reflections"
    },

    performanceScores: {
      priceAffordability: 75,
      fuelEfficiency: 95,
      durability: 85,
      features: 90,
      resaleValue: 88
    }
  }
];

export const carsDatabase = cars;
export const mockCars: any[] = cars;
