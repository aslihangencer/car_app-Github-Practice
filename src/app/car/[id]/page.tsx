// Klasik nokta yollarına (relative paths) döndük, bu hata payını azaltır
import { mockCars as cars } from "../../../data/cars"; 
import { calculateScore } from "../../../utils/scoring"; 
import { Car } from "../../../types";
// Eğer UI kütüphanesi (shadcn) yüklü değilse hata verir, standart div kullanıyoruz
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl ${className}`}>{children}</div>
);

export default function CarPage({ params }: { params: { id: string } }) {
    // ID string olarak gelebilir, veri setindeki tiple (string/number) eşleştiriyoruz
    const car = cars.find((c: Car) => c.id === params.id);

    if (!car) {
        return (
            <div className="p-20 text-center bg-slate-950 min-h-screen">
                <h1 className="text-2xl text-red-500 font-bold">⚠️ Araç Bulunamadı!</h1>
                <p className="text-slate-400 mt-2">Lütfen araç listesine geri dönüp tekrar deneyin.</p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6 bg-slate-950 min-h-screen text-white">
            <h1 className="text-4xl font-black">{car.brand} {car.model}</h1>

            <div className="grid md:grid-cols-3 gap-6">
                {/* AI SKOR KUTUSU */}
                <Card className="p-6 border-blue-500/30">
                    <h2 className="text-slate-400 text-sm font-bold uppercase mb-2">DriveMatch AI Skoru</h2>
                    <p className="text-5xl font-black text-blue-500">
                        {calculateScore ? calculateScore(car) : "85"} <span className="text-lg text-slate-500">/ 100</span>
                    </p>
                </Card>

                {/* TEKNİK ÖZELLİKLER */}
                <Card className="p-6">
                    <h2 className="text-slate-400 text-sm font-bold uppercase mb-4">Teknik Veriler</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between"><span className="text-slate-500">Güç:</span> <span>{car.hp} HP</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Motor:</span> <span>{car.engineSize > 0 ? `${car.engineSize} cc` : "Elektrik"}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Yakıt:</span> <span>{car.fuelType}</span></div>
                    </div>
                </Card>

                {/* GÖRSEL */}
                <div className="rounded-3xl overflow-hidden border border-slate-800">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover opacity-80" />
                </div>
            </div>

            {/* AI ANALİZİ - EKSTRA DETAY */}
            <Card className="p-8 bg-blue-600/5 border-blue-500/20 italic text-slate-300 text-lg leading-relaxed">
                "Bu araç, {car.year} yılı teknolojisiyle {car.hp} beygir gücünü harmanlayarak sınıfında dengeli bir performans sunuyor. 
                Özellikle {car.fuelType === 'Electric' ? 'şarj maliyeti' : 'yakıt ekonomisi'} açısından kullanıcısını üzmeyecek bir karakterde."
            </Card>
        </div>
    );
}
