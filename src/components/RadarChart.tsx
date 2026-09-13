"use client";
import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Car } from '../types';
import { getRadarData } from '../utils/comparisonEngine';

interface Props {
    cars: Car[];
}

export default function RadarChart({ cars }: Props) {
    if (cars.length !== 2) return null;

    const carA = cars[0];
    const carB = cars[1];
    
    // Engine içerisindeki 5 eksenli yeni hesaplamayı çağırıyoruz
    const radarDataA = getRadarData(carA);
    const radarDataB = getRadarData(carB);

    // İki aracı Recharts kütüphanesinin anlayacağı formata (tekil bir array'e) birleştiriyoruz
    const data = radarDataA.map((metric, idx) => ({
        subject: metric.subject,
        A: Math.round(metric.A),
        B: Math.round(radarDataB[idx].A),
        fullMark: metric.fullMark
    }));

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl h-[450px] w-full flex flex-col items-center">
            <h3 className="text-slate-300 font-black mb-2 text-xl flex items-center gap-2">
                <span>🕸️</span> Örümcek Ağı Analizi
            </h3>
            <p className="text-slate-500 text-sm mb-4">5 Eksenli Detaylı Kıyaslama</p>
            
            <ResponsiveContainer width="100%" height="100%">
                <RechartsRadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name={`${carA.brand} ${carA.model}`} dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} strokeWidth={2} />
                    <Radar name={`${carB.brand} ${carB.model}`} dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.4} strokeWidth={2} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                        itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </RechartsRadarChart>
            </ResponsiveContainer>
        </div>
    );
}
