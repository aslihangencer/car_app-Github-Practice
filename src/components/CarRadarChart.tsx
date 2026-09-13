"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getRadarData } from '../utils/comparisonEngine';
import { Car } from '../types';

export default function CarRadarChart({ car, color }: { car: Car, color: string }) {
    const data = getRadarData(car);

    return (
        <div className="w-full h-64 bg-slate-900/30 rounded-2xl p-4 border border-slate-800">
            <h4 className="text-center text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                Karakter Analizi
            </h4>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                    <Radar
                        name={car.model}
                        dataKey="A"
                        stroke={color}
                        fill={color}
                        fillOpacity={0.5}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
