
import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  helperText?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  helperText,
  error,
}) => {
  const id = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const hasError = !!error;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" " 
        className={`
          block w-full px-0.5 pt-4 pb-1 text-sm bg-transparent 
          border-0 border-b-2 appearance-none 
          text-stone-900 dark:text-white 
          focus:outline-none focus:ring-0 peer
          ${hasError 
            ? 'border-red-500 focus:border-red-500'
            : 'border-stone-300 dark:border-stone-600 focus:border-clay-500'
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-4
           ${hasError
            ? 'text-red-500'
            : 'text-stone-500 dark:text-stone-400 peer-focus:text-clay-500'
          }
        `}
      >
        {label}
      </label>
      {(helperText || error) && (
        <p className={`mt-2 text-xs ${hasError ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;
