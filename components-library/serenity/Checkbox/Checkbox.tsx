
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
      <div className="relative w-5 h-5 flex-shrink-0 border-2 border-stone-400 dark:border-stone-500 rounded-sm peer-focus:ring-2 peer-focus:ring-offset-2 dark:peer-focus:ring-offset-stone-800 peer-focus:ring-clay-400 transition-all duration-200">
        {checked && (
          <div className="absolute inset-0 bg-clay-400 rounded-sm flex items-center justify-center">
            <CheckIcon className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      <span className="text-stone-600 dark:text-sand-100">{label}</span>
    </label>
  );
};

export default Checkbox;
