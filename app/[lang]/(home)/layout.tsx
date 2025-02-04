import { baseOptions } from '@/app/layout.config';
import { Footer } from '@/components/home/footer';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}
