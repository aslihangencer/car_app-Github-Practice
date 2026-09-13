import { Car } from '../types';

export const mockCars: Car[] = [
    {
        id: '1', brand: 'Tesla', model: 'Model 3 Performance', year: 2024, price: 2150000,
        engineSize: 0, hp: 510, fuelType: 'Electric', mileage: 0,
        image: '/images/tesla-model-3-performance.png',
        segment: 'D',
        transmission: 'Otomatik', driveType: 'AWD', acceleration: 3.1, topSpeed: 261, baggageVolume: 594, safetyRating: 5,
        evDetails: { range: 567, batteryCapacity: 82, chargeTime: 15 }
    },
    {
        id: '2', brand: 'BMW', model: '320i M Sport', year: 2024, price: 3450000,
        engineSize: 1600, hp: 170, fuelType: 'Petrol', mileage: 0,
        image: '/images/bmw-320i-m-sport.png',
        segment: 'D',
        transmission: 'Otomatik', driveType: 'RWD', acceleration: 7.4, topSpeed: 235, baggageVolume: 480, safetyRating: 5
    },
    {
        id: '3', brand: 'Fiat', model: '500e La Prima', year: 2024, price: 1420000,
        engineSize: 0, hp: 118, fuelType: 'Electric', mileage: 0,
        image: '/images/fiat-500e-la-prima.png',
        segment: 'A',
        transmission: 'Otomatik', driveType: 'FWD', acceleration: 9.0, topSpeed: 150, baggageVolume: 185, safetyRating: 4,
        evDetails: { range: 320, batteryCapacity: 42, chargeTime: 35 }
    },
    {
        id: '4', brand: 'Volkswagen', model: 'Golf 1.5 TSI', year: 2024, price: 1780000,
        engineSize: 1500, hp: 150, fuelType: 'Petrol', mileage: 0,
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800',
        segment: 'C',
        transmission: 'Otomatik', driveType: 'FWD', acceleration: 8.5, topSpeed: 224, baggageVolume: 381, safetyRating: 5
    },
    {
        id: '5', brand: 'Mercedes', model: 'C200 4MATIC', year: 2024, price: 3850000,
        engineSize: 1500, hp: 204, fuelType: 'Petrol', mileage: 0,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800',
        segment: 'D',
        transmission: 'Otomatik', driveType: 'AWD', acceleration: 7.3, topSpeed: 246, baggageVolume: 455, safetyRating: 5
    },
    {
        id: '6', brand: 'Hyundai', model: 'Ioniq 5 Progress', year: 2024, price: 1950000,
        engineSize: 0, hp: 170, fuelType: 'Electric', mileage: 0,
        image: '/images/hyundai-ioniq-5-progress.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'RWD', acceleration: 8.5, topSpeed: 185, baggageVolume: 527, safetyRating: 5,
        evDetails: { range: 384, batteryCapacity: 58, chargeTime: 18 }
    },
    {
        id: '7', brand: 'Toyota', model: 'Corolla Hybrid', year: 2024, price: 1650000,
        engineSize: 1800, hp: 140, fuelType: 'Hybrid', mileage: 0,
        image: '/images/toyota-corolla-hybrid.png',
        segment: 'C',
        transmission: 'e-CVT', driveType: 'FWD', acceleration: 9.3, topSpeed: 180, baggageVolume: 471, safetyRating: 5
    },
    {
        id: '8', brand: 'Volvo', model: 'XC40 Recharge', year: 2024, price: 2650000,
        engineSize: 0, hp: 238, fuelType: 'Electric', mileage: 0,
        image: '/images/volvo-xc40-recharge.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'RWD', acceleration: 7.3, topSpeed: 180, baggageVolume: 452, safetyRating: 5,
        evDetails: { range: 475, batteryCapacity: 69, chargeTime: 28 }
    },
    {
        id: '9', brand: 'Honda', model: 'Civic 1.5 VTEC', year: 2024, price: 1820000,
        engineSize: 1500, hp: 129, fuelType: 'Petrol', mileage: 0,
        image: '/images/honda-civic-1-5-vtec.png',
        segment: 'C',
        transmission: 'CVT', driveType: 'FWD', acceleration: 8.1, topSpeed: 200, baggageVolume: 412, safetyRating: 5
    },
    {
        id: '10', brand: 'Porsche', model: 'Taycan Turbo S', year: 2024, price: 12500000,
        engineSize: 0, hp: 761, fuelType: 'Electric', mileage: 0,
        image: '/images/porsche-taycan-turbo-s.png',
        segment: 'E',
        transmission: '2 Vitesli Otomatik', driveType: 'AWD', acceleration: 2.8, topSpeed: 260, baggageVolume: 366, safetyRating: 5,
        evDetails: { range: 412, batteryCapacity: 93, chargeTime: 18 }
    },
    {
        id: '11', brand: 'Renault', model: 'Clio E-Tech', year: 2024, price: 1450000,
        engineSize: 1600, hp: 145, fuelType: 'Hybrid', mileage: 0,
        image: '/images/renault-clio-e-tech.png',
        segment: 'B',
        transmission: 'Otomatik', driveType: 'FWD', acceleration: 9.3, topSpeed: 175, baggageVolume: 254, safetyRating: 5
    },
    {
        id: '12', brand: 'Dacia', model: 'Duster Journey', year: 2024, price: 1320000,
        engineSize: 1300, hp: 150, fuelType: 'Petrol', mileage: 0,
        image: '/images/dacia-duster-journey.png',
        segment: 'B-SUV',
        transmission: 'Manuel', driveType: '4x4', acceleration: 10.2, topSpeed: 175, baggageVolume: 445, safetyRating: 3
    },
    {
        id: '13', brand: 'Kia', model: 'EV6 GT-Line', year: 2024, price: 3100000,
        engineSize: 0, hp: 325, fuelType: 'Electric', mileage: 0,
        image: '/images/kia-ev6-gt-line.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'AWD', acceleration: 5.2, topSpeed: 188, baggageVolume: 490, safetyRating: 5,
        evDetails: { range: 506, batteryCapacity: 77, chargeTime: 18 }
    },
    {
        id: '14', brand: 'Peugeot', model: '3008 GT BlueHDi', year: 2024, price: 2150000,
        engineSize: 1500, hp: 130, fuelType: 'Diesel', mileage: 0,
        image: '/images/peugeot-3008-gt-bluehdi.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'FWD', acceleration: 8.9, topSpeed: 188, baggageVolume: 520, safetyRating: 5
    },
    {
        id: '15', brand: 'Skoda', model: 'Octavia Premium', year: 2024, price: 1850000,
        engineSize: 1500, hp: 150, fuelType: 'Petrol', mileage: 0,
        image: '/images/skoda-octavia-premium.png',
        segment: 'C',
        transmission: 'DSG', driveType: 'FWD', acceleration: 8.5, topSpeed: 228, baggageVolume: 600, safetyRating: 5
    },
    {
        id: '16', brand: 'Land Rover', model: 'Defender 110', year: 2024, price: 9500000,
        engineSize: 2000, hp: 300, fuelType: 'Petrol', mileage: 0,
        image: '/images/land-rover-defender-110.png',
        segment: 'Large SUV',
        transmission: 'Otomatik', driveType: '4WD', acceleration: 6.1, topSpeed: 191, baggageVolume: 786, safetyRating: 5
    },
    {
        id: '17', brand: 'Nissan', model: 'Qashqai e-POWER', year: 2024, price: 2250000,
        engineSize: 1500, hp: 190, fuelType: 'Hybrid', mileage: 0,
        image: '/images/nissan-qashqai-e-power.png',
        segment: 'C-SUV',
        transmission: 'Tek Oranlı Otomatik', driveType: 'FWD', acceleration: 7.9, topSpeed: 170, baggageVolume: 504, safetyRating: 5
    },
    {
        id: '18', brand: 'Ford', model: 'Mach-E GT', year: 2024, price: 4200000,
        engineSize: 0, hp: 487, fuelType: 'Electric', mileage: 0,
        image: '/images/ford-mach-e-gt.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'AWD', acceleration: 3.7, topSpeed: 200, baggageVolume: 402, safetyRating: 5,
        evDetails: { range: 490, batteryCapacity: 91, chargeTime: 45 }
    },
    {
        id: '19', brand: 'Tofaş', model: 'Şahin 1.6 ie', year: 2002, price: 450000,
        engineSize: 1600, hp: 80, fuelType: 'Petrol', mileage: 185000,
        image: '/images/tofas-sahin-1-6-ie.png',
        segment: 'C',
        transmission: 'Manuel', driveType: 'RWD', acceleration: 13.1, topSpeed: 170, baggageVolume: 400, safetyRating: 0
    },
    {
        id: '20', brand: 'Togg', model: 'T10X V2 RWD', year: 2024, price: 2371000,
        engineSize: 0, hp: 218, fuelType: 'Electric', mileage: 0,
        image: '/images/togg-t10x-v2-rwd.png',
        segment: 'C-SUV',
        transmission: 'Otomatik', driveType: 'RWD', acceleration: 7.4, topSpeed: 185, baggageVolume: 441, safetyRating: 5,
        evDetails: { range: 523, batteryCapacity: 88, chargeTime: 28 }
    },
    {
        id: '21', brand: 'BMW', model: '320i Sedan', year: 2020, price: 1850000,
        engineSize: 2000, hp: 184, fuelType: 'Petrol', mileage: 45000,
        image: '/images/bmw-320i-sedan.png',
        segment: 'D',
        transmission: 'Otomatik', driveType: 'RWD', acceleration: 7.1, topSpeed: 235, baggageVolume: 480, safetyRating: 5
    },
    {
        id: '22', brand: 'Audi', model: 'A4 Sedan 40 TDI', year: 2023, price: 2950000,
        engineSize: 2000, hp: 204, fuelType: 'Diesel', mileage: 5000,
        image: '/images/audi-a4-sedan-40-tdi.png',
        segment: 'D',
        transmission: 'S-tronic', driveType: 'AWD', acceleration: 6.9, topSpeed: 210, baggageVolume: 460, safetyRating: 5
    },
    {
        id: '23', brand: 'Mercedes-Benz', model: 'C200 4MATIC', year: 2022, price: 3150000,
        engineSize: 1500, hp: 204, fuelType: 'Mild Hybrid', mileage: 15000,
        image: '/images/mercedes-c200-4matic.png',
        segment: 'D',
        transmission: '9G-TRONIC', driveType: 'AWD', acceleration: 7.3, topSpeed: 241, baggageVolume: 455, safetyRating: 5
    },
    {
        id: '24', brand: 'FIAT', model: 'Doblo Combi', year: 2024, price: 1250000,
        engineSize: 1500, hp: 100, fuelType: 'Diesel', mileage: 0,
        image: '/images/fiat-doblo-combi.png',
        segment: 'Combi',
        transmission: 'Manuel', driveType: 'FWD', acceleration: 11.5, topSpeed: 172, baggageVolume: 775, safetyRating: 4
    }
];

export const carsDatabase = mockCars;
export const cars = mockCars;
