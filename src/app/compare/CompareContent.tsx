"use client";

import { useSearchParams } from "next/navigation";
import { mockCars as cars } from "@/data/cars";
import CompareTable from "@/components/CompareTable";
import CarRadarChart from "@/components/CarRadarChart";
import InsightBox from "@/components/InsightBox";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CompareContent() {
    const searchParams = useSearchParams();
    const ids = searchParams.get("ids")?.split(",") || [];

    const selectedCars = cars.filter(car => ids.includes(car.id));

    if (selectedCars.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800">
                    <span className="text-4xl text-slate-500">⚖️</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Henüz araç seçilmedi</h2>
                <p className="text-slate-400 mb-8 max-w-md">Analiz yapabilmek için ana sayfadan en az bir adet araç seçmelisiniz.</p>
                <Link href="/" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40">
                    Araç Seçimine Dön
                </Link>
            </div>
        );
    }

    const chartColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

    return (
        <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="flex items-center gap-4 mb-12">
                    <Link href="/" className="p-2 hover:bg-slate-900 rounded-full transition-colors text-slate-400">
                        <ChevronLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight">Kıyaslama Analizi</h1>
                </div>

                {/* RADAR CHARTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {selectedCars.map((car, i) => (
                        <div key={car.id} className="space-y-4">
                            <div className="flex items-center gap-3 ml-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartColors[i % chartColors.length] }} />
                                <span className="font-bold text-slate-300">{car.brand} {car.model}</span>
                            </div>
                            <CarRadarChart car={car} color={chartColors[i % chartColors.length]} />
                        </div>
                    ))}
                </div>

                {/* AI INSIGHTS */}
                <InsightBox cars={selectedCars} />

                {/* COMPARISON TABLE */}
                <div className="mt-12 bg-slate-900/50 rounded-3xl border border-slate-800/50 p-2 overflow-hidden shadow-2xl">
                    <CompareTable cars={selectedCars} />
                </div>
            </div>
        </main>
    );
}
