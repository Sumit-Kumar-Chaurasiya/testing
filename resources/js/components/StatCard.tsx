import type { StatCardData } from '../types';

interface StatCardProps {
    data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            
            <p className="text-sm font-medium text-gray-500">
                {data.title}
            </p>

            <div className="mt-2 flex items-end justify-between">
                <h3 className="text-2xl font-bold">
                    {data.value}
                </h3>

                <span className="text-sm font-medium text-green-800">
                    {data.change}
                </span>
            </div>

            <p className="mt-2 text-xs text-gray-400">
                {data.description}
            </p>

        </div>
    );
}