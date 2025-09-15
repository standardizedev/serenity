
import React, { useState } from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';

interface ExpansionPanelProps {
  title: string;
  children: React.ReactNode;
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sand-200 dark:border-stone-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-stone-600 dark:text-sand-100 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-stone-500 dark:text-stone-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
