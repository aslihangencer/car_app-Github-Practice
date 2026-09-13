"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";

export function CarRadar({ car }: { car: any }) {
  // Fallbacks provided to prevent crashes if the old schema is passed
  const data = [
    { subject: "Price", A: car.performanceScores?.priceAffordability ?? 80, fullMark: 100 },
    { subject: "Fuel", A: car.performanceScores?.fuelEfficiency ?? 80, fullMark: 100 },
    { subject: "Durability", A: car.performanceScores?.durability ?? 80, fullMark: 100 },
    { subject: "Features", A: car.performanceScores?.features ?? 80, fullMark: 100 },
    { subject: "Resale", A: car.performanceScores?.resaleValue ?? 80, fullMark: 100 }
  ];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Radar 
            name={car.name || "AI Score"} 
            dataKey="A" 
            stroke="#10b981" 
            fill="#10b981" 
            fillOpacity={0.5} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
