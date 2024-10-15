import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { Container } from './container';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex gap-4 items-center">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div className="">
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">Order your favorite pizza</p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1 ">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3 cl">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Login
          </Button>
          <div className="">
            <Button className="group relative">
              <b>10 $</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} strokeWidth={2} className="relative" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
