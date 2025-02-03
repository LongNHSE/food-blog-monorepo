'use client';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { MenuProps, NavigationProps } from '../types/navigationProps.interface';
import Image from 'next/image';
import { HomeIcon, ContactIcon, Book, Store } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AvatarComponent from './AvatarComponent';

const menuItems: MenuProps[] = [
  {
    title: 'Home',
    renderIcon: <HomeIcon size={36} />,
    link: '/',
  },
  {
    title: 'Blogs',
    renderIcon: <Book size={36} />,
    link: '/blogs',
  },
  {
    title: 'Shops',
    renderIcon: <Store size={36} />,
    link: '/shops',
  },
];

const NavigationBar = ({ menu }: NavigationProps) => {
  const pathName = usePathname();
  return (
    <div className="flex items-center px-6 shadow-md mb-6">
      <div className="relative w-24 h-24 rounded-full overflow-hidden my-2">
        <Image
          src="/logo.webp"
          alt="Food Blog Logo"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-grow justify-center">
        <NavigationMenu orientation="horizontal">
          <NavigationMenuList className="flex items-center space-x-28">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex  rounded-full w-full h-full ${
                  pathName === item.link ? 'bg-olive-beige/40' : 'bg-warm-beige'
                }`}
              >
                <Link href={item.link ? item.link : ''}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center space-x-2  px-5 py-2">
                        <div>{item.renderIcon}</div>
                        <span className='text-2xl'>{item.title}</span>
                      </div>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                </Link>
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="mr-2 flex items-center">
        <AvatarComponent />
      </div>
    </div>
  );
};
export default NavigationBar;
