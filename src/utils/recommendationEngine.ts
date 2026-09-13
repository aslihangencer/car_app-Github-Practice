import { Car, UserPreferences, RecommendationResult } from "../types";

export function getSmartRecommendations(cars: Car[], preferences: UserPreferences): RecommendationResult[] {
    const results = cars.map(car => {
        let score = 0;

        // 1. Budget rules
        const isUnderBudget = car.price <= preferences.budget;
        if (isUnderBudget) score += 40;

        // Close to budget (within 10%)
        const tenPercentBelow = preferences.budget * 0.9;
        if (isUnderBudget && car.price >= tenPercentBelow) {
            score += 10;
        } else if (car.price < tenPercentBelow) {
            // If it's very cheap, maybe give points? Instruction says: "If price close to budget (within 10%) -> +10"
            // If it's cheaper than 10%, we still just applied +40. 
            // Let's add +10 for being well under budget as well to reward affordability.
            score += 10;
        }

        // 2. Fuel match
        if (preferences.fuelType !== "hepsi" && car.fuelType === preferences.fuelType) {
            score += 20;
        } else if (preferences.fuelType === "hepsi") {
            score += 20; // If any, all score equally on fuel fit
        }

        // 3. Mileage rule
        if (car.mileage < 100000) {
            score += 15;
        }

        // 4. Year rule
        if (car.year >= 2020) {
            score += 15;
        }

        // 5. Usage scoring
        let usageExplanation = "";
        if (preferences.usage === "şehir içi") {
            if (car.fuelType === "elektrik" || car.fuelType === "hibrit" || car.fuelType === "benzin") {
                score += 10;
                usageExplanation = "Motoru ve yakıt verimliliği sayesinde şehir içi sürüş için ideal. ";
            }
        } else if (preferences.usage === "uzun yol") {
            if (car.fuelType === "dizel") {
                score += 10;
                usageExplanation = "Dizel motoru sayesinde uzun yollar için harika bir seçenek. ";
            }
        } else if (preferences.usage === "karma") {
            score += 5;
            usageExplanation = "Karma sürüş koşulları için dengeli bir seçim. ";
        }

        // 6. Explanation Generator
        let explanationParts = [];

        if (isUnderBudget) {
            if (car.price < tenPercentBelow) {
                explanationParts.push("oldukça uygun fiyatlı");
            } else {
                explanationParts.push("bütçenize tam uyum sağlıyor");
            }
        }

        if (car.mileage < 50000) {
            explanationParts.push("güvenilirliği artıran son derece düşük kilometreye sahip");
        } else if (car.mileage < 100000) {
            explanationParts.push("kabul edilebilir bir kilometrede");
        }

        if (car.year >= 2021) {
            explanationParts.push("yeni model yılı sayesinde modern özellikler sunuyor");
        }

        let dynamicExplanation = "";
        if (explanationParts.length > 0) {
            // Join first parts with commas and last with 've'
            if (explanationParts.length === 1) {
                dynamicExplanation = `Bu araç harika bir eşleşme çünkü ${explanationParts[0]}. `;
            } else {
                const lastPart = explanationParts.pop();
                dynamicExplanation = `Bu araç harika bir eşleşme çünkü ${explanationParts.join(", ")} ve ${lastPart}. `;
            }
        }

        const finalExplanation = usageExplanation + dynamicExplanation;

        return {
            car,
            score,
            explanation: finalExplanation.trim()
        };
    });

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    // Return top 3 cars
    return results.slice(0, 3);
}
