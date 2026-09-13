import React from 'react';
import { generateGlobalInsights } from '../utils/comparisonEngine';
import { Car } from '../types';

export default function InsightBox({ cars }: { cars: Car[] }) {
    if (!cars || cars.length === 0) return null;
    const insights = generateGlobalInsights(cars);

    return (
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/30 rounded-2xl shadow-xl">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                <span>🪄</span> AI Karşılaştırma Analizi
            </h3>
            <div className="space-y-3">
                {insights.map((text: string, i: number) => (
                    <div key={i} className="flex gap-3 text-slate-300 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <p className="text-sm leading-relaxed">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
