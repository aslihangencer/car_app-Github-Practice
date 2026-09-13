import { Car } from "../types";

export interface EngineScore {
    power: number;
    efficiency: number;
    overall: number;
}

export const calculateScores = (car: Car): EngineScore => {
    // Performans Skoru: HP, Hızlanma ve Maks Hız kombinasyonu
    const accelBonus = car.acceleration ? (15 - Math.min(15, car.acceleration)) * 3 : 0;
    const speedBonus = car.topSpeed ? (car.topSpeed / 3.5) : 0;
    const powerScore = Math.max(0, Math.min(100, (car.hp / 6) + accelBonus + (speedBonus / 10) + 15));

    // Verimlilik Skoru: FuelType, EngineSize ve EV verileri
    let efficiencyBase = 100 - (car.engineSize / 35);
    if (car.fuelType === 'Electric') {
        efficiencyBase = 85 + (car.evDetails?.range ? car.evDetails.range / 20 : 0);
    } else if (car.fuelType === 'Hybrid' || car.fuelType === 'Mild Hybrid') {
        efficiencyBase += 15;
    }
    const efficiencyScore = Math.max(0, Math.min(100, efficiencyBase));

    return {
        power: Math.round(powerScore),
        efficiency: Math.round(efficiencyScore),
        overall: Math.round((powerScore + efficiencyScore) / 2)
    };
};

export const generateComprehensiveInsights = (carA: Car, carB: Car) => {
    const insights = [];

    // 1. Performans ve Motor Analizi
    if (carA.hp > carB.hp + 50) {
        insights.push(`🚀 **Performans Odaklılık:** ${carA.brand} ${carA.model}, ${carB.brand} modeline göre tam ${carA.hp - carB.hp} beygir daha güçlü. Bu fark özellikle otoyol hızlanmalarında ve sollamalarda kendini hissettirecektir.`);
    }

    // 2. Elektrik vs Fosil Yakıt Analizi
    if (carA.fuelType === 'Electric' && carB.fuelType !== 'Electric') {
        insights.push(`🔋 **Teknoloji Dönüşümü:** ${carA.brand} tamamen elektrikli bir yapıdayken ${carB.brand} geleneksel motor kullanıyor. ${carA.brand} ile yakıt masrafınız %80 azalacak ancak şarj planlaması yapmanız gerekecek.`);
    }

    // 3. Vergi ve Motor Hacmi (Türkiye Gerçeği)
    if (carA.engineSize > 1600 || carB.engineSize > 1600) {
        const bigEngine = carA.engineSize > 1600 ? carA : carB;
        insights.push(`⚖️ **Vergi Uyarı:** ${bigEngine.brand} modelinin motor hacmi 1.6 litrenin üzerinde olduğu için yıllık MTV ödemesi daha yüksek olacaktır.`);
    }

    // 4. Değer Kaybı ve KM Analizi
    if (carA.mileage > carB.mileage + 20000) {
        insights.push(`🔍 **Kullanım Durumu:** ${carB.brand} çok daha düşük kilometrede, bu da ikinci el satış değerini korumasını sağlar.`);
    }

    // 5. Şehir İçi vs Uzun Yol
    if (carA.engineSize < 1400 && carA.engineSize > 0) {
        insights.push(`🏙️ **Şehir Dostu:** ${carA.brand} küçük motor hacmiyle şehir içi yoğun trafikte dur-kalklarda çok daha verimli.`);
    }

    return insights;
};

export function compareCars(carA: Car, carB: Car) {
    const isSameModel = carA.brand === carB.brand && carA.model === carB.model;
    const scoreA = calculateScores(carA);
    const scoreB = calculateScores(carB);

    return {
        isSameModel,
        scoreA,
        scoreB,
        overallA: scoreA.overall,
        overallB: scoreB.overall,
        insights: generateComprehensiveInsights(carA, carB)
    };
}

export const getCarBadge = (car: Car) => {
    if (car.fuelType === 'Electric' || (car.engineSize <= 1200 && car.engineSize > 0)) {
        return { label: 'City Warrior', color: 'bg-emerald-500/20 text-emerald-400', icon: '🌆' };
    }
    if (car.hp > 200 && car.engineSize >= 2000) {
        return { label: 'Highway King', color: 'bg-purple-500/20 text-purple-400', icon: '🛣️' };
    }
    // Fiyat şartını 40000 yerine TL veritabanımız için 1000000'a (1 Milyon TL) uyarlıyoruz.
    if (car.year >= 2022 && car.price < 1000000) {
        return { label: 'Value Choice', color: 'bg-blue-500/20 text-blue-400', icon: '💰' };
    }
    return null;
};

export const getSimilarCars = (currentCar: Car, allCars: Car[]) => {
    return allCars
        .filter(c => c.id !== currentCar.id &&
            // Fiyat eşiğini TL veritabanımızdaki yüksek fiyatlar için 10.000'den 250.000 TL'ye uyarladık.
            (c.fuelType === currentCar.fuelType || Math.abs(c.price - currentCar.price) < 250000))
        .slice(0, 3);
};

export const getExpertReview = (car: Car) => {
    if (car.fuelType === 'Electric') return "Sessiz sürüş ve inanılmaz ivmelenme. Şehir içi için rakipsiz.";
    if (car.hp > 250) return "Performans tutkunları için ideal. Uzun yolda yüksek güven hissi.";
    if (car.engineSize < 1400 && car.engineSize > 0) return "Yakıt ekonomisi odaklı, tam bir aile aracı.";
    return "Dengeli performans ve konforun buluştuğu nokta.";
};

export const generateExpertInsights = (cars: Car[]) => {
    if (cars.length === 0) return ["Lütfen analiz için en az bir araç seçiniz."];

    const analysis = [];
    const bestHP = [...cars].sort((a, b) => b.hp - a.hp)[0];
    const bestPrice = [...cars].sort((a, b) => a.price - b.price)[0];
    const electrics = cars.filter(c => c.fuelType === 'Electric');

    // Cümle 1: Giriş ve Segment Analizi
    const brands = Array.from(new Set(cars.map(c => c.brand))).join(', ');
    analysis.push(`İncelemekte olduğunuz bu seçki, otomotiv dünyasının farklı disiplinlerini bir araya getiriyor. ${brands} markalarının sunduğu bu modeller, mühendislik yaklaşımları bakımından birbirlerinden ayrışan karakterlere sahip.`);

    // Cümle 2: Performans Detayı
    analysis.push(`Performans parametrelerine odaklandığımızda, ${bestHP.brand} ${bestHP.model} modelinin ${bestHP.hp} beygir gücüyle rakiplerine karşı net bir üstünlük kurduğunu görüyoruz; bu güç özellikle otoyol sürüşlerinde ve ani hızlanma ihtiyaçlarında size büyük bir güven alanı sağlayacaktır.`);

    // Cümle 3: Yakıt ve Verimlilik (Elektrikli varsa)
    if (electrics.length > 0) {
        analysis.push(`Teknoloji cephesinde ise ${electrics.map(c => c.model).join(', ')} gibi tam elektrikli modeller, geleneksel içten yanmalı motorların aksine sıfır emisyon ve düşük işletme maliyeti vaat ederek modern ulaşımın tüm avantajlarını önünüze seriyor.`);
    } else {
        analysis.push(`Seçilen modellerin tamamı içten yanmalı veya hibrit sistemlere sahip olduğundan, yakıt tüketimi verileri ve motor hacmine bağlı yıllık MTV oranları bütçe yönetimi açısından en kritik karar kriterleriniz olmalıdır.`);
    }

    // Cümle 4: Vergi ve Türkiye Piyasası Analizi
    const highTax = cars.find(c => c.engineSize > 1600);
    if (highTax) {
        analysis.push(`Dikkat edilmesi gereken bir diğer husus ise vergi dilimleridir; ${highTax.brand} gibi 1.6 litrenin üzerindeki motor hacmine sahip araçlar, Türkiye'deki mevcut vergi sistemi gereği daha yüksek yıllık maliyetlere yol açabilir.`);
    } else {
        analysis.push(`Tüm araçların 1.6 litre ve altı veya elektrikli olması, vergi dilimi avantajı sağlayarak toplam sahip olma maliyetini düşüren olumlu bir etken olarak öne çıkıyor.`);
    }

    // Cümle 5: Ekonomik Tercih
    analysis.push(`Bütçe dostu bir yaklaşım sergilemek isterseniz, ${bestPrice.price.toLocaleString('tr-TR')} ₺ fiyatıyla ${bestPrice.brand} ${bestPrice.model} modeli, sunduğu özelliklere oranla en rasyonel fiyat-performans dengesini temsil ediyor.`);

    // Özel Kültürel / Efsane Modellerin İşlenmesi
    if (cars.some(c => c.brand === 'Tofaş')) {
        analysis.push(`🛠️ **Klasik Değerlendirmesi:** Listede bir 'Efsane' olan Tofaş Şahin bulunuyor. Modern güvenlik sistemlerinden yoksun olsa da, parça bolluğu ve mekanik basitliği ile Türkiye'nin bir dönemine damga vuran bu model, bugün daha çok bir hobi veya koleksiyon objesi olarak değerlendirilmeli.`);
    }

    if (cars.some(c => c.brand === 'Land Rover' && c.model.includes('Range'))) {
        analysis.push(`🏰 **Ultra Lüks Analizi:** Range Rover, incelediğiniz diğer araçlardan tamamen farklı bir ligde, bir 'statü sembolü' olarak duruyor. 14 milyon TL'yi aşan fiyatı ve 3.0 litrelik motorunun vergi yükü, onu sadece bir ulaşım aracı değil, bir yatırım ve lüks tercihi haline getiriyor.`);
    }

    if (cars.some(c => c.model.includes('Doblo'))) {
        analysis.push(`📦 **Fonksiyonellik:** Yeni nesil elektrikli Doblo, hem geniş aileler hem de ticaretle uğraşan kullanıcılar için 'yılın mantık tercihi' olabilir. Elektrikli motorun sunduğu tork avantajı, yük altındayken bile akıcı bir sürüş sağlayacaktır.`);
    }

    if (cars.some(c => c.model.includes('Passat'))) {
        analysis.push(`👑 **Konforun Simgesi:** Türkiye yollarının vazgeçilmezi Passat, geniş iç hacmi ve prestijli duruşuyla grubun en dengeli modeli olarak öne çıkıyor. İkinci el değerini en iyi koruyan araçlardan biri olması, onu rasyonel bir yatırım haline getiriyor.`);
    }

    if (cars.some(c => c.model.includes('Egea'))) {
        analysis.push(`🔧 **Milli Tercih:** Egea, bakım maliyetlerinin düşüklüğü ve parça bolluğu ile tam bir 'fiyat-performans' şampiyonu. Özellikle şehir içi yoğun kullanım ve filo tercihleri için rakipsiz bir maliyet avantajı sunuyor.`);
    }

    if (cars.some(c => c.brand === 'Togg')) {
        analysis.push(`🇹🇷 **Yerli Teknoloji:** Togg T10X, sadece bir otomobil değil, 'akıllı cihaz' ekosisteminin bir parçası olarak öne çıkıyor. 523 km'lik uzun menzili ve yüksek teknolojik donanımıyla, Türkiye'deki şarj altyapısı (Trugo) ile tam uyumlu çalışarak elektrikli dönüşümde en güçlü aday konumunda.`);
    }

    // Cümle 6: Final Tavsiyesi
    analysis.push(`Nihai karar aşamasında; eğer önceliğiniz teknolojik prestij ise elektrikli modellere, eğer servis yaygınlığı ve geleneksel sürüş konforu ise köklü markaların hibrit/benzinli seçeneklerine yönelmeniz en doğru tercih olacaktır.`);

    return analysis;
};

export const generateGlobalInsights = (cars: Car[]) => {
    if (cars.length === 0) return [];

    const points = [];
    const topSpeed = [...cars].sort((a, b) => b.hp - a.hp)[0];
    const budgetOption = [...cars].sort((a, b) => a.price - b.price)[0];

    points.push(`🔎 İncelediğiniz bu ${cars.length} araçlık liste, Türkiye pazarının farklı kullanıcı segmentlerine hitap ediyor.`);
    points.push(`🚀 Performans lideri ${topSpeed.hp} HP gücüyle ${topSpeed.brand} ${topSpeed.model}. Bu güç, güvenli sollamalar için kritik önem taşır.`);
    points.push(`💰 Ekonomik açıdan ${budgetOption.price.toLocaleString('tr-TR')} ₺ fiyatıyla ${budgetOption.brand} en ulaşılabilir seçenek.`);
    points.push(`🔋 Elektrikli/Hibrit modeller yakıt tasarrufunda devrim yaratırken, içten yanmalı motorlar hala servis yaygınlığı avantajını koruyor.`);
    points.push(`⚖️ Karar vermeden önce yıllık MTV (vergi) yükünü ve kasko maliyetlerini de hesaba katmanızı profesyonel olarak öneririz.`);

    return points;
};

export const getRadarData = (car: Car) => {
    // 0-100 arası 5 eksenli bilimsel puanlama mantığı
    return [
        { subject: 'Performans', A: Math.max(0, Math.min(100, (car.hp / 5) + (15 - (car.acceleration || 10)) * 4 + 10)), fullMark: 100 },
        { subject: 'Verimlilik', A: car.fuelType === 'Electric' ? 98 : Math.max(0, 100 - (car.engineSize / 35)), fullMark: 100 },
        { subject: 'Hacim', A: Math.max(0, Math.min(100, (car.baggageVolume || 400) / 9 + 40)), fullMark: 100 },
        { subject: 'Güvenlik', A: (car.safetyRating || 3) * 20, fullMark: 100 },
        { subject: 'Teknoloji', A: car.fuelType === 'Electric' || car.year >= 2024 ? 95 : 75, fullMark: 100 },
    ];
};
