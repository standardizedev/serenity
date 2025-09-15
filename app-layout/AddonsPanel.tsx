import React, { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import type { ArgType, ActionArg } from '../types';

type Tab = 'Controls' | 'Actions';

const AddonsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Controls');
  const { currentStoryData, props, updateProp, actions, resetProps } = useAppState();

  const renderControl = (propName: string, argType: ArgType, value: any) => {
    const { control, options } = argType;
    const commonClasses = "w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500";

    switch (control.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => updateProp(propName, e.target.value)}
            className={commonClasses}
          />
        );
      case 'boolean':
        return (
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => updateProp(propName, e.target.checked)}
            className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-blue-500 focus:ring-blue-500"
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => updateProp(propName, e.target.value)}
            className={commonClasses}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return <span className="text-gray-400 dark:text-gray-500 text-sm">Unsupported control</span>;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-full flex flex-col">
      <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="flex">
            <button
            onClick={() => setActiveTab('Controls')}
            className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'Controls' ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}
            >
            Controls
            </button>
            <button
            onClick={() => setActiveTab('Actions')}
            className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'Actions' ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}
            >
            Actions
            </button>
        </div>
        {activeTab === 'Controls' && (
             <button onClick={resetProps} className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 py-1 rounded mr-4">Reset</button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'Controls' && (
          <div className="space-y-4">
            {currentStoryData &&
              Object.entries(currentStoryData.argTypes).map(([propName, argType]) => {
                // Don't render controls for actions
                if ('action' in argType) {
                  return null;
                }
                return (
                  <div key={propName} className="grid grid-cols-3 items-center gap-4">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{propName}</label>
                    <div className="col-span-2">
                        {renderControl(propName, argType as ArgType, props[propName])}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {activeTab === 'Actions' && (
          <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
            {actions.length === 0 ? (
                <p className="text-gray-400 dark:text-gray-500">No actions logged yet.</p>
            ) : (
                actions.map((log, index) => <p key={index}>{log}</p>)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddonsPanel;