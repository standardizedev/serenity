import React from 'react';

export interface BadgeProps {
  label: string;
  variant?: 'positive' | 'negative' | 'warning' | 'interactive';
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'interactive' }) => {
  const variantClasses = {
    positive: 'bg-positive-default/20 text-positive-default',
    negative: 'bg-negative-default/20 text-negative-default',
    warning: 'bg-warning-default/20 text-warning-default',
    interactive: 'bg-interactive-default/20 text-interactive-default',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold ${variantClasses[variant]}`}>
      {label}
    </span>
  );
};

export default Badge;