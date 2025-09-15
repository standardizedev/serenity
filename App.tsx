import React, { useEffect } from 'react';
import { AppStateProvider, useAppState } from './context/AppStateContext';
import Header from './app-layout/Header';
import Sidebar from './app-layout/Sidebar';
import MainView from './app-layout/MainView';

const ThemedApp: React.FC = () => {
  const { theme } = useAppState();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
}


const App: React.FC = () => {
  return (
    <AppStateProvider>
      <ThemedApp />
    </AppStateProvider>
  );
};

export default App;