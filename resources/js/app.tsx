import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Settings from './pages/Settings';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    element={<DashboardLayout />}
                >
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/users"
                        element={<Users />}
                    />

                    <Route
                        path="/posts"
                        element={<Posts />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />
                </Route>

                {/* Default route */}
                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/dashboard"
                            replace
                        />
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

const root = document.getElementById('app');

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}