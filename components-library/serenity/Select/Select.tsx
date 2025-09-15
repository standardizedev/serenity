
import React from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-600 rounded-md px-3 py-2 text-stone-600 dark:text-sand-100 focus:outline-none focus:ring-2 focus:ring-clay-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-400">
        <ChevronDownIcon />
      </div>
    </div>
  );
};

export default Select;
