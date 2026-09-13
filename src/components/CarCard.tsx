import { Car } from '../types';
import { getCarBadge } from '../utils/comparisonEngine';

interface Props {
    car: Car;
    onSelect: (car: Car) => void;
    isSelected: boolean;
}

export default function CarCard({ car, onSelect, isSelected }: Props) {
    const badge = getCarBadge(car);
    const formatPrice = (p: number) => (p >= 1000000 ? (p / 1000000).toFixed(2) + ' M ₺' : p.toLocaleString('tr-TR') + ' ₺');

    return (
        <div className={`group relative bg-slate-900 border-2 rounded-3xl overflow-hidden transition-all duration-500 ${isSelected ? 'border-blue-500 scale-[1.02] shadow-2xl shadow-blue-500/20' : 'border-slate-800/50 hover:border-slate-700'}`}>
            <div className="aspect-[16/10] bg-slate-800 relative overflow-hidden">
                <img 
                  src={car.image || 'https://via.placeholder.com/400x250?text=Görsel+Hazırlanıyor'} 
                  alt={car.model}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Görsel+Bulunamadı' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10 shadow-xl ${badge.color}`}>
                        {badge.label}
                    </span>
                )}

                {car.segment && (
                    <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-900/80 text-slate-300 backdrop-blur-md border border-white/5">
                        {car.segment}
                    </span>
                )}
            </div>
            
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1 truncate">{car.brand}</h3>
                        <p className="text-white text-2xl font-black leading-tight truncate">{car.model}</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-slate-400">
                    <div className="bg-slate-800/30 rounded-xl p-2 text-center">
                        <p className="text-[10px] font-bold uppercase opacity-50 mb-1">Yıl</p>
                        <p className="text-sm font-black text-slate-200">{car.year}</p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-2 text-center">
                        <p className="text-[10px] font-bold uppercase opacity-50 mb-1">Güç</p>
                        <p className="text-sm font-black text-slate-200">{car.hp}</p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-2 text-center">
                        <p className="text-[10px] font-bold uppercase opacity-50 mb-1">Yakıt</p>
                        <p className="text-xs font-black text-slate-200 truncate">{car.fuelType}</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Fiyat</span>
                        <span className="text-white font-mono font-black text-xl">{formatPrice(car.price)}</span>
                    </div>
                    <button 
                        onClick={() => onSelect(car)}
                        className={`px-6 py-3 rounded-2xl font-black transition-all text-xs uppercase tracking-widest ${
                            isSelected 
                            ? 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20' 
                            : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5'
                        }`}
                    >
                        {isSelected ? 'Kaldır' : 'Ekle'}
                    </button>
                </div>
            </div>
        </div>
    );
}
