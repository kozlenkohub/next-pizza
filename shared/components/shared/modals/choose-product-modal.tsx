'use client';

import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { Product } from '@prisma/client';
import { Title } from '../title';
import { cn } from '@/shared/lib/utils';
import { useEffect, useState } from 'react';
import { prisma } from '@/prisma/prisma-client';
import { Api } from '@/shared/services/api-client';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';

const getProduct = async (id: string) => {
  const product = await prisma.product.findFirst({
    where: {
      id: +id,
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  return product;
};

type PropsType = {
  id: string;
  className?: string;
  onClose: () => void;
};

export const ChooseProductModal = ({ id, onClose, className }: PropsType) => {
  const [product, setProduct] = useState<ProductWithRelations | null>(null);

  const isPizzaForm = Boolean(product?.items[0].pizzaType);

  useEffect(() => {
    Api.products
      .getProduct(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Dialog open={Boolean(id)} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product?.imageUrl ?? ''}
            name={product?.name ?? ''}
            ingredients={product?.ingredients}
            items={product?.items}
          />
        ) : (
          product && <ChooseProductForm imageUrl={product?.imageUrl} name={product?.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
