import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Assemble" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={100} defaultValue={0} />
          <Input type="number" placeholder="10" min={10} max={100} defaultValue={100} />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { value: '1', text: 'Cheese' },
          { value: '2', text: 'Tomato' },
          { value: '3', text: 'Mushrooms' },
          { value: '4', text: 'Pepperoni' },
          { value: '5', text: 'Bacon' },
          { value: '6', text: 'Onion' },
          { value: '1', text: 'Cheese' },
          { value: '2', text: 'Tomato' },
          { value: '3', text: 'Mushrooms' },
          { value: '4', text: 'Pepperoni' },
          { value: '5', text: 'Bacon' },
          { value: '6', text: 'Onion' },
        ]}
        items={[
          { value: '1', text: 'Cheese' },
          { value: '2', text: 'Tomato' },
          { value: '3', text: 'Mushrooms' },
          { value: '4', text: 'Pepperoni' },
          { value: '5', text: 'Bacon' },
          { value: '6', text: 'Onion' },
          { value: '1', text: 'Cheese' },
          { value: '2', text: 'Tomato' },
          { value: '3', text: 'Mushrooms' },
          { value: '4', text: 'Pepperoni' },
          { value: '5', text: 'Bacon' },
          { value: '6', text: 'Onion' },
        ]}
      />
    </div>
  );
};
