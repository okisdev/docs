import React from 'react';

export function FeatureLoadingSkeleton() {
  return (
    <>
      <div className='skeleton grid h-64 w-full transform break-inside-avoid overflow-hidden rounded-md border border-zinc-900/30 bg-zinc-50 transition duration-300 ease-in-out hover:border-zinc-200/70 hover:shadow-lg dark:border-zinc-200/30 dark:bg-zinc-900/50 dark:hover:border-zinc-200/50 dark:hover:shadow-xl' />
      <div className='skeleton hidden h-64 w-full transform break-inside-avoid overflow-hidden rounded-md border border-zinc-900/30 bg-zinc-50 transition duration-300 ease-in-out hover:border-zinc-200/70 hover:shadow-lg dark:border-zinc-200/30 dark:bg-zinc-900/50 dark:hover:border-zinc-200/50 dark:hover:shadow-xl md:grid' />
      <div className='skeleton hidden h-64 w-full transform break-inside-avoid overflow-hidden rounded-md border border-zinc-900/30 bg-zinc-50 transition duration-300 ease-in-out hover:border-zinc-200/70 hover:shadow-lg dark:border-zinc-200/30 dark:bg-zinc-900/50 dark:hover:border-zinc-200/50 dark:hover:shadow-xl md:grid' />
    </>
  );
}
