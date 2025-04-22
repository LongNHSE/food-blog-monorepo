import { CardDemo } from '@/components/ui/ShopCard';
import React from 'react';

const page = () => {
  return (
    <div className="">
      <div className="mt-36">
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </div>
    </div>
  );
};

export default page;
