import { Suspense } from "react";
import CompareContent from "./CompareContent";

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-2xl font-bold mb-2">Analiz Yükleniyor...</h2>
          <p className="text-slate-400">Araç verileri ve AI içgörüleri hazırlanıyor.</p>
        </div>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
