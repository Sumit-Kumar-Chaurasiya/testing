import StatCard from '../components/StatCard';
import ActivityItem from '../components/ActivityItem';

const statistics = [
    {
        title: 'Total Users',
        value: '12,480',
        change: '+12.5%',
        description: 'Compared with last month',
    },
    {
        title: 'Total Posts',
        value: '3,842',
        change: '+8.2%',
        description: 'Compared with last month',
    },
    {
        title: 'Total Views',
        value: '48,920',
        change: '+18.4%',
        description: 'Compared with last month',
    },
    {
        title: 'Revenue',
        value: '$24,580',
        change: '+6.8%',
        description: 'Compared with last month',
    },
];

const activities = [
    {
        id: 1,
        user: 'John Doe',
        action: 'Created a new post',
        time: '5 min ago',
    },
    {
        id: 2,
        user: 'Jane Smith',
        action: 'Registered a new account',
        time: '20 min ago',
    },
    {
        id: 3,
        user: 'Robert Wilson',
        action: 'Updated his profile',
        time: '1 hour ago',
    },
    {
        id: 4,
        user: 'Sarah Brown',
        action: 'Published a new article',
        time: '2 hours ago',
    },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">

            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Welcome back! Here's what's happening today.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {statistics.map((stat) => (
                    <StatCard
                        key={stat.title}
                        data={stat}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* Chart placeholder */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold">
                                Overview
                            </h2>

                            <p className="text-sm text-gray-500">
                                Activity over the last 7 days
                            </p>
                        </div>

                        <select className="rounded-lg border-2 border-gray-300 px-3 py-2 text-sm">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                        </select>
                    </div>

                    {/* Temporary chart area */}
                    <div className="mt-6 flex h-64 items-end gap-4 border-b border-gray-200 px-4">

                        {[40, 65, 45, 80, 60, 90, 72].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="flex flex-1 flex-col items-center gap-2"
                                >
                                    <div
                                        className="w-full rounded-t-lg bg-gray-900"
                                        style={{
                                            height: `${height}%`,
                                        }}
                                    />

                                    <span className="text-xs text-gray-400">
                                        Day {index + 1}
                                    </span>
                                </div>
                            )
                        )}

                    </div>

                </div>

                {/* Activity */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">

                    <div className="mb-2">
                        <h2 className="font-semibold">
                            Recent Activity
                        </h2>

                        <p className="text-sm text-gray-500">
                            Latest activity
                        </p>
                    </div>

                    <div>
                        {activities.map((activity) => (
                            <ActivityItem
                                key={activity.id}
                                activity={activity}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}