import type { Activity } from '../types';

interface ActivityItemProps {
    activity: Activity;
}

export default function ActivityItem({
    activity,
}: ActivityItemProps) {
    return (
        <div className="flex items-center justify-between border-b border-gray-100 py-4 last:border-0">
            
            <div>
                <p className="text-sm font-medium">
                    {activity.user}
                </p>

                <p className="text-sm text-gray-500">
                    {activity.action}
                </p>
            </div>

            <span className="text-xs text-gray-400">
                {activity.time}
            </span>

        </div>
    );
}