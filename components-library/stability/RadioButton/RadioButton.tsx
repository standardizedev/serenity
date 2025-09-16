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
      <div className="relative w-5 h-5 flex-shrink-0 border-2 border-border rounded-full peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-surface peer-focus:ring-interactive-default">
        {checked && (
          <div className="absolute inset-[3px] bg-interactive-default rounded-full transition-all duration-200" />
        )}
      </div>
      <span className="text-text-primary">{label}</span>
    </label>
  );
};

export default RadioButton;