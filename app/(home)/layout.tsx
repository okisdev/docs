import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import type { ReactNode } from 'react';

export default function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='min-h-screen'>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
