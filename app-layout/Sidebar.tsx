import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { designSystems } from '../componentRegistry';

const Sidebar: React.FC = () => {
  const { selectedComponent, selectedStory, selectComponentStory } = useAppState();
  const currentSystem = designSystems['Serenity'];

  if (!currentSystem) {
    return (
      <aside className="w-64 bg-surface border-r border-border p-4 overflow-y-auto flex-shrink-0">
        <p className="text-text-secondary">Design system not found.</p>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-surface/30 border-r border-border p-4 overflow-y-auto flex-shrink-0">
      <h2 className="text-xl font-semibold text-text-primary mb-4 px-2">Serenity</h2>
      <nav>
        <ul>
          {Object.entries(currentSystem.components).map(([componentName, stories]) => (
            <li key={componentName} className="mb-4">
              <h3 className="font-semibold text-lg text-text-secondary mb-2 px-2">{componentName}</h3>
              <ul>
                {Object.keys(stories).map((storyName) => {
                  const isActive = componentName === selectedComponent && storyName === selectedStory;
                  return (
                    <li key={storyName}>
                      <button
                        onClick={() => selectComponentStory(componentName, storyName)}
                        className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                          isActive
                            ? 'bg-interactive-default text-white'
                            : 'text-text-secondary hover:bg-surface hover:text-text-primary'
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