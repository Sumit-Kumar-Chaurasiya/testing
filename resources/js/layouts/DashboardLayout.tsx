import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <Sidebar />

            {/* Right side */}
            <div className="flex min-w-0 flex-1 flex-col">

                {/* Header */}
                <Header />

                {/* Page content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}