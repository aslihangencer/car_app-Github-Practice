import React from 'react';
import Link from 'next/link';
import { RecommendationResult } from '../types';
import ScoreBar from './ScoreBar';

interface RecommendationCardProps {
    result: RecommendationResult;
    isTopPick?: boolean;
}

export default function RecommendationCard({ result, isTopPick = false }: RecommendationCardProps) {
    const { car, score, explanation } = result;

    return (
        <div className={`relative bg-slate-800 border ${isTopPick ? 'border-amber-500 shadow-amber-900/20' : 'border-slate-700 shadow-slate-900/50'} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col md:flex-row group`}>

            {isTopPick && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-black text-xs px-4 py-1.5 rounded-full shadow-lg">
                    🌟 EN İYİ SEÇİM
                </div>
            )}

            {/* Image Section */}
            <Link href={`/car/${car.id}`} className="block relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${car.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent md:bg-gradient-to-r" />
            </Link>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 bg-slate-800/90 md:bg-transparent -mt-6 md:mt-0 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl backdrop-blur-sm">

                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <span className="text-slate-400 font-semibold mb-1 block">{car.year} • {car.fuelType}</span>
                        <Link href={`/car/${car.id}`}>
                            <h3 className="text-2xl md:text-3xl font-black text-white hover:text-blue-400 transition-colors uppercase tracking-tight">
                                {car.brand} {car.model}
                            </h3>
                        </Link>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-emerald-400 block mb-1">
                            {car.price.toLocaleString('tr-TR')} ₺
                        </span>
                        <span className="text-xs font-bold text-slate-400 bg-slate-900/50 px-3 py-1 rounded-lg border border-slate-700">
                            {car.mileage.toLocaleString()} km
                        </span>
                    </div>
                </div>

                <div className="mb-6">
                    <ScoreBar score={score} />
                </div>

                <div className="bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-blue-400 font-bold mr-2">💡 Neden bu araç?</span>
                        {explanation}
                    </p>
                </div>

                <div className="mt-auto flex gap-3">
                    {car.price < 1000000 && <span className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 rounded-lg text-xs font-bold text-slate-300">💰 Bütçe Dostu</span>}

                </div>
            </div>
        </div>
    );
}
