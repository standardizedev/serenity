import React from 'react';
import { useAppState } from '../context/AppStateContext';
import Canvas from './Canvas';
import AddonsPanel from './AddonsPanel';

const MainView: React.FC = () => {
    const { currentStoryData } = useAppState();

    return (
        <main className="flex-1 flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
            {currentStoryData ? (
                <>
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Canvas />
                    </div>
                    <div className="h-1/3 flex-shrink-0 border-t border-gray-200 dark:border-gray-700">
                        <AddonsPanel />
                    </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-semibold">No Component Selected</h3>
                        <p className="mt-1 text-sm">Select a component from the sidebar to begin.</p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default MainView;