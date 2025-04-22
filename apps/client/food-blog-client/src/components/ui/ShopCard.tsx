'use client';
import { cn } from '@/libs/utils';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function CardDemo() {
  return (
    <div className="max-w-screen-xl w-full group/card">
      <div
        className={cn(
          ' cursor-pointer overflow-hidden w-full relative card h-96 rounded-xl shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4',
          'bg-[url(/background_food_blog.png)] bg-cover'
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/avatar_placeholder.jpg"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="flex flex-col text-gray-50">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Bánh Xèo Thảo Vy – Crispy, Flavorful, and Full of Vietnamese
            Tradition
          </h1>
          <div className="flex flex-row z-10 items-center justify-start text-center relative leading-none text-sm">
            <MapPin color="white" className="mr-[3px]" size={13} />
            <span className="">
              300 Đ. Sư Vạn Hạnh, Phường 2, Quận 10, Hồ Chí Minh
            </span>
          </div>
          <p className="font-normal text-xl text-gray-50 relative z-10">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </div>
    </div>
  );
}
