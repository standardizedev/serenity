import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { designSystems } from '../componentRegistry';

const Sidebar: React.FC = () => {
  const { selectedSystem, selectedComponent, selectedStory, selectComponentStory } = useAppState();
  const currentSystem = designSystems[selectedSystem];

  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto flex-shrink-0">
      <nav>
        <ul>
          {Object.entries(currentSystem.components).map(([componentName, stories]) => (
            <li key={componentName} className="mb-4">
              <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-2">{componentName}</h3>
              <ul>
                {Object.keys(stories).map((storyName) => {
                  const isActive = componentName === selectedComponent && storyName === selectedStory;
                  return (
                    <li key={storyName}>
                      <button
                        onClick={() => selectComponentStory(componentName, storyName)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                      >
                        {storyName}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;