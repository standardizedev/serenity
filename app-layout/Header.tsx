import React from 'react';
import { useAppState } from '../context/AppStateContext';
import SunIcon from '../components/icons/SunIcon';
import MoonIcon from '../components/icons/MoonIcon';

const Header: React.FC = () => {
  // FIX: Destructure only `theme` and `toggleTheme` which are now available in the context.
  // Properties related to multi-design-system support have been removed from the context.
  const { theme, toggleTheme } = useAppState();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-8v-2m0 16V4m0 0h-2m2 0h2M6 12H4m16 0h-2m-8 0H8m16 0h-2m0-8l-2-2m2 2l-2 2m-8-4l2-2m-2 2l2 2m8 8l2 2m-2-2l2-2m-8 4l-2 2m2-2l-2-2" />
        </svg>
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Component Forge</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* FIX: Remove the design system selector as it is no longer supported in the app state. */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle theme"
        >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
