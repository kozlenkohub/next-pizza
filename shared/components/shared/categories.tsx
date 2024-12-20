'use client';

import { cn } from '@/shared/lib/utils';
import { prisma } from '@/prisma/prisma-client';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';

type PropsType = {
  className?: string;
  activeIndex?: number;
  categories: Category[];
};

export const Categories = ({ className, categories }: PropsType) => {
  const categoryActiveId = useCategoryStore((state) => state.categoryId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({ name, id }, index) => {
        return (
          <a
            key={id}
            href={`#${name}`}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )}>
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
