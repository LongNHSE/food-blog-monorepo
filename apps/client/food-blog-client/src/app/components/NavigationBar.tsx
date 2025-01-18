'use client';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { MenuProps, NavigationProps } from '../types/navigationProps.interface';
import Image from 'next/image';
import { HomeIcon, ContactIcon, Book, Store } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

const menuItems: MenuProps[] = [
  {
    title: 'Home',
    renderIcon: <HomeIcon size={24} />,
    link: '/',
  },
  {
    title: 'Blogs',
    renderIcon: <Book size={24} />,
    link: '/blogs',
  },
  {
    title: 'Shops',
    renderIcon: <Store size={24} />,
    link: '/shops',
  },
];

const NavigationBar = ({ menu }: NavigationProps) => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between">
      <div className="relative w-24 h-24 border-[0.5px] rounded-full overflow-hidden my-2 ml-2">
        <Image
          src="/logo.webp"
          alt="Food Blog Logo"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex my-auto ">
        <NavigationMenu orientation="horizontal">
          <NavigationMenuList className="flex items-center space-x-28">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex border-2 rounded-full w-full h-12 px-5 py-2${
                  pathName === item.link ? 'bg-warm-beige/90' : 'bg-warm-beige'
                }`}
              >
                <Link href={item.link ? item.link : ''}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center space-x-2 ">
                        <div>{item.renderIcon}</div>
                        <span>{item.title}</span>
                      </div>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                </Link>
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div></div>
    </div>
  );
};
export default NavigationBar;
