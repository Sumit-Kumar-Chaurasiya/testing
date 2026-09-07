export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
            
            {/* Search */}
            <div className="w-96">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
                />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-5">

                {/* Notification */}
                <button
                    type="button"
                    className="relative text-xl"
                >
                    🔔
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                        SK
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                            Sumit
                        </p>

                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>
                </div>

            </div>

        </header>
    );
}