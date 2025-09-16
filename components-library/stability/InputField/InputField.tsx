import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'number';
  helperText?: string;
  error?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  helperText,
  error,
  disabled = false,
}) => {
  const id = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const hasError = !!error;

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          block w-full px-3 py-2 text-sm bg-surface border rounded-md
          text-text-primary 
          focus:outline-none focus:ring-2 focus:ring-interactive-default
          disabled:opacity-50 disabled:cursor-not-allowed
          ${hasError 
            ? 'border-negative-default focus:border-negative-default'
            : 'border-border focus:border-interactive-default'
          }
        `}
      />
      {(helperText || error) && (
        <p className={`mt-2 text-xs ${hasError ? 'text-negative-default' : 'text-text-secondary'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;