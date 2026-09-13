import React, { useState } from 'react';
import { Car } from '../types';
import { calculateScores, getCarBadge } from '../utils/comparisonEngine';

interface Props {
    cars: Car[];
}

export default function CompareTable({ cars }: Props) {
    const [highlightDifferences, setHighlightDifferences] = useState(false);

    if (cars.length === 0) return null;

    const carScores = cars.map(car => ({ ...car, scores: calculateScores(car) }));

    const formatPrice = (p: number) => (p >= 1000000 ? (p / 1000000).toFixed(2) + ' M ₺' : p.toLocaleString('tr-TR') + ' ₺');

    const hasEV = cars.some(c => c.fuelType === 'Electric');

    const rows = [
        { label: 'Fiyat', key: 'price', format: formatPrice, better: 'lower' },
        { label: 'Yıl', key: 'year', better: 'higher' },
        { label: 'Şanzıman', key: 'transmission' },
        { label: 'Çekiş', key: 'driveType' },
        { label: 'Motor (cc)', key: 'engineSize', better: 'higher' },
        { label: 'Güç (HP)', key: 'hp', better: 'higher' },
        { label: '0-100 km/s', key: 'acceleration', format: (val: any) => val ? val + ' sn' : '-', better: 'lower' },
        { label: 'Maks. Hız', key: 'topSpeed', format: (val: any) => val ? val + ' km/s' : '-', better: 'higher' },
        { label: 'Bagaj Hacmi', key: 'baggageVolume', format: (val: any) => val ? val + ' L' : '-', better: 'higher' },
        { label: 'Güvenlik', key: 'safetyRating', format: (val: any) => val ? val + ' ⭐' : '-', better: 'higher' },
        ...(hasEV ? [
            { label: 'Elektrikli Menzil', key: 'range', isEV: true, format: (c: Car) => c.evDetails?.range ? c.evDetails.range + ' km' : '-', better: 'higher' },
            { label: 'Batarya Kapasitesi', key: 'battery', isEV: true, format: (c: Car) => c.evDetails?.batteryCapacity ? c.evDetails.batteryCapacity + ' kWh' : '-', better: 'higher' },
            { label: 'Hızlı Şarj (DC)', key: 'chargeTime', isEV: true, format: (c: Car) => c.evDetails?.chargeTime ? c.evDetails.chargeTime + ' dk' : '-', better: 'lower' },
        ] : []),
        { label: 'Performans Skoru', key: 'power', isScore: true, better: 'higher' },
        { label: 'Verimlilik Skoru', key: 'efficiency', isScore: true, better: 'higher' },
    ];

    const getBestValue = (row: any) => {
        const values = carScores.map(car => {
            if (row.isEV) {
                if (row.key === 'range') return car.evDetails?.range || 0;
                if (row.key === 'battery') return car.evDetails?.batteryCapacity || 0;
                if (row.key === 'chargeTime') return car.evDetails?.chargeTime || 999;
                return 0;
            }
            const val = row.isScore ? (car.scores as any)[row.key] : (car as any)[row.key];
            return typeof val === 'number' ? val : null;
        }).filter(v => v !== null && v !== undefined);

        if (values.length === 0) return null;
        return row.better === 'lower' ? Math.min(...values) : Math.max(...values);
    };

    const isDifferent = (row: any) => {
        const values = carScores.map(car => {
            if (row.isEV) {
                if (row.key === 'range') return car.evDetails?.range;
                if (row.key === 'battery') return car.evDetails?.batteryCapacity;
                if (row.key === 'chargeTime') return car.evDetails?.chargeTime;
            }
            return row.isScore ? (car.scores as any)[row.key] : (car as any)[row.key];
        });
        return new Set(values).size > 1;
    };

    return (
        <div className="space-y-4 mt-8">
            <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                    Detaylı Karşılaştırma
                </h3>
                <button
                    onClick={() => setHighlightDifferences(!highlightDifferences)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                        highlightDifferences 
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                >
                    {highlightDifferences ? 'Tüm Özellikler' : 'Sadece Farklılıklar'}
                </button>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/80">
                            <th className="p-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest bg-slate-900/20">Özellikler</th>
                            {carScores.map(car => (
                                <th key={car.id} className="p-6 text-white text-center border-l border-slate-800/50">
                                    <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold opacity-70">{car.brand}</div>
                                    <div className="text-lg font-black mt-1 line-clamp-1">{car.model}</div>
                                    {(() => {
                                        const badge = getCarBadge(car);
                                        if (!badge) return null;
                                        return (
                                            <div className={`mt-3 mx-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border border-white/5 shadow-lg ${badge.color}`}>
                                                {badge.label}
                                            </div>
                                        );
                                    })()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => {
                            const different = isDifferent(row);
                            if (highlightDifferences && !different) return null;

                            const bestValue = getBestValue(row);

                            return (
                                <tr key={row.label} className="border-b border-slate-800/30 hover:bg-slate-800/20 transition-all group">
                                    <td className="p-4 text-slate-400 text-sm font-medium bg-slate-900/10 group-hover:text-slate-200 transition-colors">
                                        {row.label}
                                    </td>
                                    {carScores.map((car) => {
                                        let val: any;
                                        if (row.isEV) {
                                            if (row.key === 'range') val = car.evDetails?.range;
                                            else if (row.key === 'battery') val = car.evDetails?.batteryCapacity;
                                            else if (row.key === 'chargeTime') val = car.evDetails?.chargeTime;
                                        } else {
                                            val = row.isScore ? (car.scores as any)[row.key] : (car as any)[row.key];
                                        }

                                        const isBest = row.better && bestValue !== null && val === bestValue && cars.length > 1;

                                        return (
                                            <td key={car.id} className={`p-4 text-center font-mono text-sm border-l border-slate-800/30 transition-all ${
                                                isBest ? 'text-green-400 font-bold bg-green-500/5' : 'text-slate-400'
                                            }`}>
                                                <div className="flex items-center justify-center gap-2">
                                                    {row.format ? (row.isEV ? row.format(car) : row.format(val)) : (val || '-')}
                                                    {isBest && (
                                                        <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                                    )}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
