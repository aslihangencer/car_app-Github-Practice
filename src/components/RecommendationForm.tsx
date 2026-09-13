"use client";

import { useState } from "react";
import { UserPreferences, RecommendationResult, FuelType, UsageType } from "../types";
import { mockCars } from "../data/cars";
import { getSmartRecommendations } from "../utils/recommendationEngine";
import styles from "./RecommendationForm.module.css";

export default function RecommendationForm() {
    const [budget, setBudget] = useState<number>(30000);
    const [fuelType, setFuelType] = useState<FuelType>("hepsi");
    const [usage, setUsage] = useState<UsageType>("karma");

    const [results, setResults] = useState<RecommendationResult[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const prefs: UserPreferences = { budget, fuelType, usage };
        const bestCars = getSmartRecommendations(mockCars, prefs);
        setResults(bestCars);
        setHasSearched(true);
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return "#10B981"; // Green
        if (score >= 60) return "#F59E0B"; // Yellow
        return "#EF4444"; // Red
    };

    return (
        <div className={styles.container}>
            {/* Search Form Wrapper */}
            <div className={styles.formSection}>
                <div className={styles.formHeader}>
                    <h2>Kriterlerinizi Belirleyin</h2>
                    <p>Sizin için neyin önemli olduğunu söyleyin.</p>
                </div>
                <form onSubmit={handleSearch} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Maksimum Bütçe (₺)</label>
                        <input
                            type="number"
                            value={budget}
                            onChange={e => setBudget(Number(e.target.value))}
                            className={styles.input}
                            min="1000"
                            step="500"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Tercih Edilen Yakıt</label>
                        <select
                            value={fuelType}
                            onChange={e => setFuelType(e.target.value as FuelType)}
                            className={styles.input}
                        >
                            <option value="hepsi">Farketmez (Hepsi)</option>
                            <option value="benzin">Benzin</option>
                            <option value="dizel">Dizel</option>
                            <option value="elektrik">Elektrikli</option>
                            <option value="hibrit">Hibrit</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Temel Sürüş Rotası</label>
                        <select
                            value={usage}
                            onChange={e => setUsage(e.target.value as UsageType)}
                            className={styles.input}
                        >
                            <option value="karma">Karma (Şehir İçi & Uzun Yol)</option>
                            <option value="şehir içi">Sadece Şehir İçi</option>
                            <option value="uzun yol">Uzun Yolculuklar</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Aracımı Bul
                    </button>
                </form>
            </div>

            {/* Results Section */}
            {hasSearched && (
                <div className={styles.resultsWrapper} id="results">
                    {results.length > 0 ? (
                        <>
                            <div className={styles.resultsHeader}>
                                <h3>En İyi Eşleşmeleriniz</h3>
                                <p>Kriterlerinize göre en akıllıca seçimler.</p>
                            </div>

                            <div className={styles.cardsGrid}>
                                {results.map((req, i) => {
                                    const color = getScoreColor(req.score);
                                    return (
                                        <div key={req.car.id} className={`${styles.card} ${i === 0 ? styles.bestOverallCard : ""}`}>

                                            {i === 0 && <div className={styles.bestBadge}>🏆 En İyi Seçim</div>}

                                            <div
                                                className={styles.cardImage}
                                                style={{ backgroundImage: `url(${req.car.image})` }}
                                                role="img"
                                                aria-label={`${req.car.brand} ${req.car.model}`}
                                            />

                                            <div className={styles.cardBody}>

                                                {/* Header: Title and Match Score */}
                                                <div className={styles.cardHeader}>
                                                    <div>
                                                        <span className={styles.carYear}>{req.car.year}</span>
                                                        <h4 className={styles.carTitle}>{req.car.brand} {req.car.model}</h4>
                                                    </div>

                                                    <div className={styles.scoreContainer}>
                                                        <div className={styles.scoreText} style={{ color }}>% {req.score} Eşleşme</div>
                                                    </div>
                                                </div>

                                                {/* Progress Bar for Score */}
                                                <div className={styles.progressBarBg}>
                                                    <div
                                                        className={styles.progressBarFill}
                                                        style={{ width: `${req.score}%`, backgroundColor: color }}
                                                    />
                                                </div>

                                                {/* Badges / Tags */}
                                                <div className={styles.tagsContainer}>
                                                    {req.car.price <= budget * 0.9 && <span className={styles.tag}>💰 Bütçe Altında</span>}
                                                    {(req.car.fuelType === "hibrit" || req.car.fuelType === "elektrik") && <span className={styles.tag}>🌱 Çevre Dostu</span>}

                                                    {req.car.fuelType === "dizel" && <span className={styles.tag}>🛣️ Uzun Yol Aracı</span>}
                                                </div>

                                                {/* Specs grid */}
                                                <div className={styles.specsGrid}>
                                                    <div className={styles.specItem}>
                                                        <span className={styles.specLabel}>Fiyat</span>
                                                        <span className={styles.specValue}>{req.car.price.toLocaleString('tr-TR')} ₺</span>
                                                    </div>
                                                    <div className={styles.specItem}>
                                                        <span className={styles.specLabel}>Yakıt</span>
                                                        <span className={styles.specValue} style={{ textTransform: 'capitalize' }}>{req.car.fuelType}</span>
                                                    </div>
                                                    <div className={styles.specItem}>
                                                        <span className={styles.specLabel}>Kilometre</span>
                                                        <span className={styles.specValue}>{req.car.mileage.toLocaleString()} km</span>
                                                    </div>
                                                </div>

                                                {/* Explanation */}
                                                <div className={styles.explanationSection}>
                                                    <div className={styles.explanationIcon}>💡</div>
                                                    <p className={styles.explanationText}>{req.explanation}</p>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>🔍</div>
                            <h3>Kusursuz Eşleşme Bulunamadı</h3>
                            <p>Daha fazla araç görmek için bütçenizi artırmayı veya tercihlerinizi değiştirmeyi deneyin.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
