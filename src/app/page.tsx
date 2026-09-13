"use client";

import { useState, useMemo } from "react";
import { mockCars as cars } from "../data/cars";
import CarCard from "../components/CarCard";
import ComparePanel from "../components/ComparePanel";
import CompareCars from "../components/CompareCars";
import FilterBar from "../components/FilterBar";
import { Car } from "../types";

export default function Home() {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [budget, setBudget] = useState<number>(0);
  const [fuelType, setFuelType] = useState<string>("hepsi");
  const [brand, setBrand] = useState<string>("Tümü");
  const [segment, setSegment] = useState<string>("Tümü");

  const toggleCar = (car: Car) => {
    if (selectedCars.find(c => c.id === car.id)) {
      setSelectedCars(selectedCars.filter(c => c.id !== car.id));
    } else if (selectedCars.length < 4) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const brands = useMemo(() => Array.from(new Set(cars.map(c => c.brand))), []);
  const segments = useMemo(() => Array.from(new Set(cars.map(c => c.segment).filter(Boolean))) as string[], []);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchBudget = budget === 0 || car.price <= budget;
      const matchFuel = fuelType === "hepsi" || car.fuelType === fuelType;
      const matchBrand = brand === "Tümü" || car.brand === brand;
      const matchSegment = segment === "Tümü" || car.segment === segment;
      return matchBudget && matchFuel && matchBrand && matchSegment;
    });
  }, [budget, fuelType, brand, segment]);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-24 space-y-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Geleceğin Sürüşünü Karşılaştırın
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-70">
          Türkiye'nin en kapsamlı araç karşılaştırma motoru ile rasyonel kararlar verin.
        </p>
      </div>

      {/* FILTER BAR */}
      <FilterBar 
        budget={budget} setBudget={setBudget}
        fuelType={fuelType} setFuelType={setFuelType}
        brand={brand} setBrand={setBrand}
        segment={segment} setSegment={setSegment}
        brands={brands} segments={segments}
      />

      {/* QUICK AGENT COMPARISON */}
      <CompareCars />

      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-end px-4">
        <div>
          <h2 className="text-2xl font-bold">Tüm Araçlar</h2>
          <p className="text-slate-500 text-sm">{filteredCars.length} araç listeleniyor</p>
        </div>
      </div>

      {/* CAR GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
        {filteredCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onSelect={toggleCar}
            isSelected={selectedCars.some(c => c.id === car.id)}
          />
        ))}
        {filteredCars.length === 0 && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-800 rounded-3xl">
             <p className="text-slate-500 text-lg">Seçtiğiniz kriterlere uygun araç bulunamadı.</p>
             <button 
                onClick={() => { setBudget(0); setFuelType("hepsi"); setBrand("Tümü"); setSegment("Tümü"); }}
                className="mt-4 text-blue-500 font-bold hover:underline"
             >
                Filtreleri Sıfırla
             </button>
          </div>
        )}
      </div>

      {/* FLOATING PANEL */}
      <ComparePanel
        selectedCars={selectedCars}
        onRemove={(id) => setSelectedCars(selectedCars.filter(c => c.id !== id))}
        onClear={() => setSelectedCars([])}
      />
    </main>
  );
}
