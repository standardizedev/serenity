import React from 'react';

interface ButtonToggleProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex rounded-md bg-surface p-1" role="group">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`px-3 py-1 text-sm font-medium transition-colors duration-200 rounded-md focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-interactive-default ${
              isSelected
                ? 'bg-interactive-default text-white'
                : 'bg-transparent text-text-secondary hover:bg-border hover:text-text-primary'
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