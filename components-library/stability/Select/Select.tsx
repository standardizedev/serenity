import React from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label }) => {
  const id = label ? `select-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;
  
  return (
    <div className="relative w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1">{label}</label>}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-surface border border-border rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-interactive-default"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary" style={label ? { top: '22px'} : {}}>
        <ChevronDownIcon />
      </div>
    </div>
  );
};

export default Select;