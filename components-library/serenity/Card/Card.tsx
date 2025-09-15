
import React from 'react';
import Badge from '../Badge/Badge';

interface CardProps {
  imageUrl: string;
  title: string;
  duration: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, duration, category }) => {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-lg shadow-sm hover:shadow-md border border-sand-200 dark:border-stone-800 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-72">
      <img className="h-40 w-full object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-stone-600 dark:text-sand-100 mb-1">{title}</h3>
          <Badge label={category} color="moss" />
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400">{duration}</p>
      </div>
    </div>
  );
};

export default Card;
