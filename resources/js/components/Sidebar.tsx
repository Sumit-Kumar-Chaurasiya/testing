import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const navigation = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: '⌂',
        },
        {
            name: 'Users',
            path: '/users',
            icon: '👥',
        },
        {
            name: 'Posts',
            path: '/posts',
            icon: '📝',
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: '⚙',
        },
        {
            name: 'Logout',
            path: '/logout',
            icon: '📤',
        }
    ];

    return (
        <aside className="flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white">
            
            {/* Logo */}
            <div className="flex h-16 items-center border-b border-gray-200 px-6">
                <h1 className="text-xl font-bold">
                    Dashboard
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-4">
                {navigation.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                                isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`
                        }
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Bottom */}
            <div className="border-t border-gray-200 p-4">
                <p className="text-xs text-gray-500">
                    Dashboard v1.0
                </p>
            </div>

        </aside>
    );
}