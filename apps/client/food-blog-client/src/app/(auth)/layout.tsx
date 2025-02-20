'use client';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`h-screen flex items-center justify-center bg-[url('/back_ground.svg')] bg-cover bg-center bg-no-repeat ${montserrat.className}`}
    >
      {children}
    </body>
  );
}
