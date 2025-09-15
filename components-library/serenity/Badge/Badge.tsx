
import React from 'react';

interface BadgeProps {
  label: string;
  color?: 'moss' | 'sky' | 'clay';
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'clay' }) => {
  const colorClasses = {
    moss: 'bg-moss-500/20 text-moss-500 dark:text-moss-400',
    sky: 'bg-sky-400/20 text-sky-400',
    clay: 'bg-clay-500/20 text-clay-500 dark:text-clay-400',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${colorClasses[color]}`}>
      {label}
    </span>
  );
};

export default Badge;
