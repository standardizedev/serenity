import React from 'react';
import { AppStateProvider } from './context/AppStateContext';
import Sidebar from './app-layout/Sidebar';
import MainView from './app-layout/MainView';

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <div className="h-screen font-sans bg-background text-text-primary">
        <div className="flex h-full overflow-hidden">
          <Sidebar />
          <MainView />
        </div>
      </div>
    </AppStateProvider>
  );
};

export default App;