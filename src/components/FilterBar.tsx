import React from 'react';
import { FuelType } from '../types';

interface FilterBarProps {
    budget: number;
    setBudget: (val: number) => void;
    fuelType: string;
    setFuelType: (val: string) => void;
    brand: string;
    setBrand: (val: string) => void;
    segment: string;
    setSegment: (val: string) => void;
    brands: string[];
    segments: string[];
}

export default function FilterBar({ 
    budget, setBudget, 
    fuelType, setFuelType, 
    brand, setBrand, 
    segment, setSegment,
    brands, segments
}: FilterBarProps) {
    return (
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl w-full max-w-6xl mx-auto -translate-y-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block ml-1">Maksimum Bütçe (₺)</label>
                    <div className="relative group">
                        <input
                            type="number"
                            value={budget || ''}
                            onChange={e => setBudget(Number(e.target.value))}
                            placeholder="Limitsiz"
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-mono group-hover:border-slate-700"
                            min="0"
                            step="100000"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 text-[10px] font-bold">TL</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block ml-1">Marka</label>
                    <div className="relative group">
                        <select
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm appearance-none cursor-pointer group-hover:border-slate-700"
                        >
                            <option value="Tümü">Tüm Markalar</option>
                            {brands.sort().map(b => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block ml-1">Segment</label>
                    <div className="relative group">
                        <select
                            value={segment}
                            onChange={e => setSegment(e.target.value)}
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm appearance-none cursor-pointer group-hover:border-slate-700"
                        >
                            <option value="Tümü">Tüm Segmentler</option>
                            {segments.sort().map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block ml-1">Yakıt Tipi</label>
                    <div className="relative group">
                        <select
                            value={fuelType}
                            onChange={e => setFuelType(e.target.value)}
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm appearance-none cursor-pointer group-hover:border-slate-700"
                        >
                            <option value="hepsi">Farketmez</option>
                            <option value="Petrol">Benzin</option>
                            <option value="Diesel">Dizel</option>
                            <option value="Electric">Elektrikli</option>
                            <option value="Hybrid">Hibrit</option>
                            <option value="Mild Hybrid">Yarı Hibrit</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
