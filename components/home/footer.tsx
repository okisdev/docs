import Link from 'next/link';

export function Footer() {
  return (
    <footer className='mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground'>
      <div className='container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <Link href='https://okis.dev/privacy-policy' target='_blank' rel='noopener noreferrer' className='text-sm'>
            privacy policy
          </Link>
          <Link href='https://okis.dev/cookies' target='_blank' rel='noopener noreferrer' className='text-sm'>
            cookie
          </Link>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm'>© {new Date().getFullYear()} Harry Yep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
