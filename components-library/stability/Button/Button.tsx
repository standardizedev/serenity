import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', disabled = false, onClick, className = '' }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-interactive-default hover:bg-interactive-hover text-white focus:ring-interactive-default',
    secondary: 'bg-surface hover:bg-border text-text-primary border border-border focus:ring-interactive-default',
    tertiary: 'bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary focus:ring-interactive-default',
    destructive: 'bg-negative-default/80 hover:bg-negative-default text-white focus:ring-negative-default',
  };

  const disabledClasses = 'disabled:opacity-40 disabled:cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;