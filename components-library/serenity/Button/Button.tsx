
import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', disabled = false, onClick }) => {
  const baseClasses = 'px-6 py-2.5 rounded text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-stone-800 transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-clay-400 hover:bg-clay-500 text-white focus:ring-clay-500 shadow-sm',
    secondary: 'bg-transparent hover:bg-sand-200 dark:hover:bg-stone-900 text-clay-500 dark:text-clay-400 border border-clay-400 focus:ring-clay-500',
    tertiary: 'bg-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-sand-100 focus:ring-clay-500 px-2 py-1',
  };

  const disabledClasses = 'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-transparent';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;
