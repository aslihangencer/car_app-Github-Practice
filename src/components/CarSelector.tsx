import { cars } from "@/data/cars";

type Props = {
    onSelect: (carId: string) => void;
};

export default function CarSelector({ onSelect }: Props) {
    return (
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="p-2 border rounded bg-slate-800 text-white border-slate-700"
        >
            <option value="">Select a car</option>

            {cars.map((car) => (
                <option key={car.id} value={car.id}>
                    {car.brand} {car.model}
                </option>
            ))}
        </select>
    );
}
