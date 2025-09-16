import React from 'react';
import CheckIcon from '../../../components/icons/CheckIcon';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <div className={`relative w-5 h-5 flex-shrink-0 border-2 rounded-md transition-colors duration-200 
        ${checked ? 'bg-interactive-default border-interactive-default' : 'bg-surface border-border'}
        peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-surface peer-focus:ring-interactive-default
      `}>
        {checked && (
            <CheckIcon className="w-4 h-4 text-white" />
        )}
      </div>
      <span className="text-text-primary">{label}</span>
    </label>
  );
};

export default Checkbox;