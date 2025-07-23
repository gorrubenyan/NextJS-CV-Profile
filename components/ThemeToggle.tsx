import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({
                         dark,
                         setDark
                     }: {
    dark: boolean;
    setDark: (d: boolean) => void
}) => {
    return (
        <button
            onClick={() => setDark(!dark)}
            className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 hover:shadow-lg"
            aria-label="Toggle Theme"
        >
            {/* Toggle Background */}
            <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
                dark
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500'
            }`} />

            {/* Toggle Circle */}
            <div className={`relative w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
                dark ? 'translate-x-6' : 'translate-x-0'
            }`}>
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {dark ? (
                        <HiMoon className="w-4 h-4 text-purple-600 animate-scale-in" />
                    ) : (
                        <HiSun className="w-4 h-4 text-yellow-500 animate-scale-in" />
                    )}
                </div>
            </div>

            {/* Background Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <HiSun className={`w-3 h-3 transition-all duration-300 ${
                    !dark ? 'text-white opacity-100' : 'text-gray-400 opacity-50'
                }`} />
                <HiMoon className={`w-3 h-3 transition-all duration-300 ${
                    dark ? 'text-white opacity-100' : 'text-gray-400 opacity-50'
                }`} />
            </div>
        </button>
    );
};

export default ThemeToggle;