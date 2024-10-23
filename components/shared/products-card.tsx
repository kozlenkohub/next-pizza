import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type PropsType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
  callBack: () => void; //m
};

export const ProductsCard = ({ id, className, imageUrl, name, price, callBack }: PropsType) => {
  return (
    <div className={className} onClick={callBack}>
      {/* <Link href={`/product/${id}`}> */}
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
      </div>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel minima laudantium dolore
        suscipit culpa a ea assumenda quidem sit tempore animi dicta repudiandae recusandae
        explicabo vitae fugiat, debitis eligendi.
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          from <b>{price} $</b>
        </span>

        <Button variant={'secondary'}>
          <Plus size={20} className="w-5 h-5 mr-1" />
          Add
        </Button>
      </div>
      {/* </Link> */}
    </div>
  );
};
