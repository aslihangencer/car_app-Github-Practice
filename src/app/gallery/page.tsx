import { carsDatabase as cars } from "@/data/cars";
import { calculateScore } from "@/utils/scoring";

export default function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-10">🖼️ AI Image Gallery</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cars.map(car => {
          const carName = car.name || `${car.brand} ${car.model}`;
          const frontPrompt = car.aiImagePrompts?.front || carName;
          
          return (
            <div key={car.id} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(frontPrompt)}?width=800&height=450&nologo=true`}
                className="w-full h-48 object-cover bg-gray-200"
                alt={carName}
              />

              <div className="p-4 space-y-2">
                <h2 className="font-bold text-black">{carName}</h2>

                <div className="text-green-600 font-bold">
                  Score: {calculateScore(car)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
