
import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange, disabled }) => {
  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="sr-only peer"
      />
      <div className="relative w-5 h-5 flex-shrink-0 border-2 border-stone-400 dark:border-stone-500 rounded-full peer-focus:ring-2 peer-focus:ring-offset-2 dark:peer-focus:ring-offset-stone-800 peer-focus:ring-clay-400">
        {checked && (
          <div className="absolute inset-[3px] bg-clay-400 rounded-full transition-all duration-200" />
        )}
      </div>
      <span className="text-stone-600 dark:text-sand-100">{label}</span>
    </label>
  );
};

export default RadioButton;
