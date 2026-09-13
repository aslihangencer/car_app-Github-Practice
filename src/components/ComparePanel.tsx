"use client";

import React from 'react';
import { Car } from '../types';
import { Button } from './ui/button';
import { X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
    selectedCars: Car[];
    onRemove: (id: string) => void;
    onClear: () => void;
}

export default function ComparePanel({ selectedCars, onRemove, onClear }: Props) {
    if (selectedCars.length === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl p-4 flex items-center gap-6 overflow-hidden">
                <div className="flex-1 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {selectedCars.map((car) => (
                        <div key={car.id} className="relative group shrink-0">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                                <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                            </div>
                            <button
                                onClick={() => onRemove(car.id)}
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X size={10} />
                            </button>
                            <p className="text-[10px] text-center mt-1 text-slate-400 font-medium truncate w-16">{car.model}</p>
                        </div>
                    ))}
                    {Array.from({ length: Math.max(0, 3 - selectedCars.length) }).map((_, i) => (
                        <div key={i} className="w-16 h-16 rounded-xl border border-dashed border-slate-700 flex items-center justify-center text-slate-600">
                            <span className="text-xl">+</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <button onClick={onClear} className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium">Temizle</button>
                    <Link href={`/compare?ids=${selectedCars.map(c => c.id).join(',')}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-5 flex items-center gap-2 font-bold shadow-lg shadow-blue-900/40 border-0">
                            Kıyasla ({selectedCars.length})
                            <ChevronRight size={16} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
