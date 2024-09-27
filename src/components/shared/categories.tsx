import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categories = [
    'Pizza',
    'Combo',
    'Snacks',
    'Cockteils',
    'Coffe',
    'Drinks',
    'Deserts',
    'Salads',
  ];

  const activeCategory = 0;

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((category, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeCategory == index && 'bg-white text-primary shadow-md shadow-gray-200',
          )}
          key={index}>
          <button>
            <span>{category}</span>
          </button>
        </a>
      ))}
    </div>
  );
};
