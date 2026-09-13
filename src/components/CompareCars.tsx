"use client";

import { useState } from "react";
import CarSelector from "./CarSelector";
import { runComparison } from "../core/runComparison";

export default function CompareCars() {
    const [car1, setCar1] = useState("");
    const [car2, setCar2] = useState("");
    const [result, setResult] = useState("");

    const handleCompare = () => {
        if (!car1 || !car2) return alert("Select two cars");
        const comparisonText = runComparison(car1, car2);
        setResult(comparisonText);
        console.log("Compare:", car1, car2);
    };

    return (
        <div className="flex flex-col gap-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 max-w-2xl mx-auto my-12">
            <h2 className="text-2xl font-black text-white text-center">Hızlı Karşılaştırma (Agent)</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <CarSelector onSelect={setCar1} />
                <CarSelector onSelect={setCar2} />

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
                    onClick={handleCompare}
                >
                    Kıyasla
                </button>
            </div>

            {result && (
                <pre className="p-4 bg-slate-950 rounded-lg text-blue-400 font-mono text-sm whitespace-pre-wrap border border-blue-500/20">
                    {result}
                </pre>
            )}
        </div>
    );
}
