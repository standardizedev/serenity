
import React from 'react';

interface ButtonToggleProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm bg-sand-200/50 dark:bg-stone-900 p-1" role="group">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md focus:z-10 focus:outline-none focus:ring-2 focus:ring-clay-400 ${
              isSelected
                ? 'bg-white dark:bg-stone-600 text-clay-500 dark:text-sand-100 shadow'
                : 'bg-transparent text-stone-500 dark:text-stone-400 hover:bg-white/50 dark:hover:bg-stone-800/50'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonToggle;
