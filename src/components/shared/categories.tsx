'use client';
import { cn } from '@/lib/utils';
import React, { use } from 'react';
import { useCategoryStore } from '../../../store/category';

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const categories = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Combo' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Cocktails' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Drinks' },
    { id: 7, name: 'Desserts' },
    { id: 8, name: 'Salads' },
  ];

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId == id && 'bg-white text-primary shadow-md shadow-gray-200',
          )}
          href={`/#${name}`}
          key={index}>
          <button>
            <span>{name}</span>
          </button>
        </a>
      ))}
    </div>
  );
};
