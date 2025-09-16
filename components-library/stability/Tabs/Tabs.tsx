import React from 'react';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-semibold text-sm focus:outline-none transition-colors duration-200
                focus:ring-2 focus:ring-inset focus:ring-interactive-default rounded-t-sm
              ${
                isActive
                  ? 'border-interactive-default text-interactive-default'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;