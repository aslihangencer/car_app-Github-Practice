export default function ScoreBar({ score }: { score: number }) {
    let colorClass = "bg-red-500";
    if (score >= 80) colorClass = "bg-emerald-500";
    else if (score >= 60) colorClass = "bg-amber-500";

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Match Score</span>
                <span className={`text-sm font-black ${colorClass.replace('bg-', 'text-')}`}>
                    {score}%
                </span>
            </div>
            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                    className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
}
