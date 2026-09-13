import { Car } from '../types';

export const mockCars: Car[] = [
    { id: '1', brand: 'Tesla', model: 'Model 3 Performance', year: 2024, price: 2850000, engineSize: 0, hp: 498, torque: 660, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800' },
    { id: '2', brand: 'BMW', model: '320i Sedan', year: 2020, price: 2150000, engineSize: 1600, hp: 170, torque: 250, fuelType: 'Petrol', mileage: 45000, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800' },
    { id: '3', brand: 'BMW', model: '320i M Sport', year: 2024, price: 3450000, engineSize: 1600, hp: 170, torque: 250, fuelType: 'Hybrid', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/7704887506739585388_0' },
    { id: '4', brand: 'Fiat', model: '500e La Prima', year: 2023, price: 1450000, engineSize: 0, hp: 118, torque: 220, fuelType: 'Electric', mileage: 2000, image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=800' },
    { id: '5', brand: 'Volkswagen', model: 'Golf 1.5 TSI', year: 2022, price: 1650000, engineSize: 1500, hp: 150, torque: 250, fuelType: 'Petrol', mileage: 15000, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800' },
    { id: '6', brand: 'Audi', model: 'A4 Sedan 40 TDI', year: 2023, price: 2950000, engineSize: 2000, hp: 204, torque: 400, fuelType: 'Diesel', mileage: 5000, image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800' },
    { id: '7', brand: 'Mercedes', model: 'C200 4MATIC', year: 2024, price: 3850000, engineSize: 1500, hp: 204, torque: 300, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800' },
    { id: '8', brand: 'Hyundai', model: 'Ioniq 5 Progress', year: 2024, price: 2250000, engineSize: 0, hp: 225, torque: 350, fuelType: 'Electric', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/10541522226090821194_0' },
    { id: '9', brand: 'Toyota', model: 'Corolla Hybrid', year: 2023, price: 1550000, engineSize: 1800, hp: 140, torque: 142, fuelType: 'Hybrid', mileage: 10000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800' },
    { id: '10', brand: 'Volvo', model: 'XC40 Recharge', year: 2024, price: 2650000, engineSize: 0, hp: 408, torque: 660, fuelType: 'Electric', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/6061608214150482999_0' },
    { id: '11', brand: 'Honda', model: 'Civic 1.5 VTEC', year: 2022, price: 1480000, engineSize: 1500, hp: 182, torque: 240, fuelType: 'Petrol', mileage: 20000, image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800' },
    { id: '12', brand: 'Porsche', model: 'Taycan Turbo S', year: 2024, price: 12500000, engineSize: 0, hp: 761, torque: 1050, fuelType: 'Electric', mileage: 0, image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800' },
    { id: '13', brand: 'Renault', model: 'Clio E-Tech', year: 2024, price: 1250000, engineSize: 1600, hp: 145, torque: 148, fuelType: 'Hybrid', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/4677471996630706599_0' },
    { id: '14', brand: 'Dacia', model: 'Duster Journey', year: 2024, price: 1150000, engineSize: 1300, hp: 150, torque: 250, fuelType: 'Petrol', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/2260041922765385920_0' },
    { id: '15', brand: 'Kia', model: 'EV6 GT-Line', year: 2024, price: 2950000, engineSize: 0, hp: 325, torque: 605, fuelType: 'Electric', mileage: 0, image: 'http://googleusercontent.com/image_collection/image_retrieval/16551702961531545678_0' },
    { id: '16', brand: 'Peugeot', model: '3008 GT BlueHDi', year: 2024, price: 1950000, engineSize: 1500, hp: 130, torque: 300, fuelType: 'Diesel', mileage: 0, image: 'https://images.unsplash.com/photo-1630149651237-38134844666d?q=80&w=800' },
    { id: '17', brand: 'Skoda', model: 'Octavia Premium', year: 2024, price: 1850000, engineSize: 1500, hp: 150, torque: 250, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=800' },
    { id: '18', brand: 'Land Rover', model: 'Defender 110', year: 2024, price: 8500000, engineSize: 3000, hp: 300, torque: 650, fuelType: 'Diesel', mileage: 0, image: 'https://images.unsplash.com/photo-1601051515570-877292215c2d?q=80&w=800' },
    { id: '19', brand: 'Nissan', model: 'Qashqai e-POWER', year: 2023, price: 1850000, engineSize: 1500, hp: 190, torque: 330, fuelType: 'Hybrid', mileage: 9000, image: 'https://images.unsplash.com/photo-1623933344131-096236968840?q=80&w=800' },
    { id: '20', brand: 'Ford', model: 'Mach-E GT', year: 2024, price: 3250000, engineSize: 0, hp: 487, torque: 860, fuelType: 'Electric', mileage: 2000, image: 'https://images.unsplash.com/photo-1616422285623-241e3309a9be?q=80&w=800' },
    { 
        id: '21', brand: 'Fiat', model: 'Doblo Combi (E-Doblo)', year: 2024, price: 1650000, 
        engineSize: 0, hp: 136, torque: 260, fuelType: 'Electric', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1671413474240-54714115169a?q=80&w=1000' 
    },
    { 
        id: '22', brand: 'Mini', model: 'Cooper SE', year: 2024, price: 1850000, 
        engineSize: 0, hp: 184, torque: 270, fuelType: 'Electric', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000' 
    },
    { 
        id: '23', brand: 'Land Rover', model: 'Range Rover P440e', year: 2024, price: 14500000, 
        engineSize: 3000, hp: 440, torque: 620, fuelType: 'Hybrid', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=1000' 
    },
    { 
        id: '24', brand: 'Tofaş', model: 'Şahin 1.6 ie', year: 2002, price: 450000, 
        engineSize: 1600, hp: 80, torque: 135, fuelType: 'Petrol', mileage: 185000, 
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000' 
    },
    { id: '101', brand: 'Volkswagen', model: 'Passat 1.5 TSI Elegance', year: 2024, price: 2450000, engineSize: 1500, hp: 150, torque: 250, fuelType: 'Petrol', mileage: 0, image: 'https://images.unsplash.com/photo-1621359953476-b16299ad2ff0?q=80&w=1200' },
    { id: '102', brand: 'Fiat', model: 'Egea Sedan 1.3 Multijet', year: 2024, price: 1150000, engineSize: 1300, hp: 95, torque: 200, fuelType: 'Diesel', mileage: 0, image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200' },
    { id: '103', brand: 'Renault', model: 'Megane Sedan 1.3 TCe', year: 2024, price: 1380000, engineSize: 1300, hp: 140, torque: 240, fuelType: 'Petrol', mileage: 0, image: 'https://images.unsplash.com/photo-1549239120-0146bc8a760a?q=80&w=1200' },
    { id: '104', brand: 'Toyota', model: 'Corolla 1.8 Hybrid Dream', year: 2024, price: 1620000, engineSize: 1800, hp: 140, torque: 142, fuelType: 'Hybrid', mileage: 0, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200' },
    { id: '105', brand: 'Honda', model: 'Civic 1.5 VTEC Eco', year: 2024, price: 1750000, engineSize: 1500, hp: 129, torque: 240, fuelType: 'Petrol', mileage: 0, image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200' },
    { id: '106', brand: 'Dacia', model: 'Duster 1.3 TCe EDC', year: 2024, price: 1280000, engineSize: 1300, hp: 150, torque: 250, fuelType: 'Petrol', mileage: 0, image: 'https://images.unsplash.com/photo-1603811440715-617887798363?q=80&w=1200' },
    { id: '107', brand: 'Hyundai', model: 'i20 1.4 MPI Jump', year: 2024, price: 980000, engineSize: 1400, hp: 100, torque: 134, fuelType: 'Petrol', mileage: 0, image: 'https://images.unsplash.com/photo-1623069818809-51a4aa67b848?q=80&w=800' },
    { 
        id: '111', brand: 'Togg', model: 'T10X V2 Uzun Menzil', year: 2024, price: 2371000, 
        engineSize: 0, hp: 218, torque: 350, fuelType: 'Electric', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1685108030283-7d04e58866f8?q=80&w=1200' 
    },
    { 
        id: '112', brand: 'Renault', model: 'Taliant 1.0 Turbo X-Tronic', year: 2024, price: 1050000, 
        engineSize: 1000, hp: 90, torque: 142, fuelType: 'Petrol', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000' 
    },
    { 
        id: '113', brand: 'Chery', model: 'Tiggo 8 Pro Excellent', year: 2024, price: 1850000, 
        engineSize: 1600, hp: 183, torque: 275, fuelType: 'Petrol', mileage: 0, 
        image: 'https://images.unsplash.com/photo-1623933344131-096236968840?q=80&w=1000' 
    }
];
