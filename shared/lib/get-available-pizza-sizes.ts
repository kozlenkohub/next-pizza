import { ProductItem } from '@prisma/client';
import { PizzaType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

/**
 *
 * @param type - тип пиццы
 * @param items - список вариаций
 * @returns
 */

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
