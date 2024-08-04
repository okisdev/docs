import { projects } from '@/config/project';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-screen'>
      <header className='sticky top-0 z-50 flex w-full items-center justify-between bg-zinc-200/60 px-6 py-2 backdrop-blur dark:bg-zinc-800/60'>
        <div>
          <p>okisdev's docs</p>
        </div>
        <div>
          <RootToggle options={projects} />
        </div>
        <div className='flex items-center'>
          <Link href='https://harryyep.com' target='_blank'>
            <div className='rounded-md px-2 py-1 transition duration-300 ease-in-out hover:bg-zinc-300/20'>
              <p className='text-sm'>About</p>
            </div>
          </Link>
          <Link href='https://github.com/okisdev' target='_blank'>
            <div className='rounded-md p-2 transition duration-300 ease-in-out hover:bg-zinc-300/20'>
              <FaGithub />
            </div>
          </Link>
        </div>
      </header>

      {children}

      <footer>
        <div className='flex justify-between bg-zinc-200/60 p-4 dark:bg-zinc-800/60'>
          <div>
            <p className='text-xs'>Copyright © {currentYear} Harry Yep. All rights reserved.</p>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}
