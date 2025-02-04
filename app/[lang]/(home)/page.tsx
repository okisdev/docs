import { ArrowRight, Image, MessageSquare, Network, Newspaper, Train } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-1 flex-col'>
      <section className='flex flex-col items-center justify-center space-y-2 py-10 text-center md:py-20'>
        <h1 className='font-bold text-[var(--color-primary)] text-xl leading-[var(--leading-tight)] md:text-3xl'>okisdev's docs</h1>
        <p className='mb-8 max-w-2xl text-[var(--color-secondary)] leading-[var(--leading-relaxed)]'>A comprehensive collection of documentation and guides for various projects and APIs.</p>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link
            href='/docs'
            className='inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-[var(--font-semibold)] text-[var(--color-accent-text)] transition-colors hover:opacity-90'
          >
            Get Started
            <ArrowRight className='h-4 w-4' />
          </Link>
          {/* <Link
            href='https://github.com/harryyep'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg border border-[var(--color-muted)] bg-[var(--background)] px-6 py-3 font-[var(--font-semibold)] text-[var(--color-primary)] transition-colors hover:bg-[var(--pattern-color)]'
          >
            View on GitHub
            <Code2 className='h-4 w-4' />
          </Link> */}
        </div>
      </section>

      <section className='py-6 md:py-20'>
        <div className='container mx-auto'>
          <h2 className='mb-12 text-center font-[var(--font-bold)] text-[var(--text-h2)] leading-[var(--leading-tight)]'>Projects</h2>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Link href='/docs/notion-blog-react' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <Newspaper className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>Notion Blog React</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>Create a blog using Notion as your CMS with React</p>
            </Link>

            <Link href='/docs/notion-photo-react' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <Image className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>Notion Photo React</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>Build a photo gallery using Notion as your backend</p>
            </Link>

            <Link href='/docs/chat' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <MessageSquare className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>Chat</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>Documentation for chat-related features and implementations</p>
            </Link>

            <Link href='/docs/tfl-tube' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <Train className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>TfL Tube</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>Transport for London Tube service information and APIs</p>
            </Link>

            <Link href='/docs/rail' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <Train className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>Rail</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>Rail service information and related APIs</p>
            </Link>

            <Link href='/docs/apis' className='group rounded-lg border border-[var(--color-muted)] bg-[var(--background)] p-6 transition-colors hover:bg-[var(--pattern-color)]'>
              <Network className='mb-4 h-8 w-8 text-[var(--color-accent)]' />
              <h3 className='mb-2 font-[var(--font-semibold)] text-[var(--text-h4)] group-hover:text-[var(--color-accent)]'>APIs</h3>
              <p className='text-[var(--color-secondary)] leading-[var(--leading-normal)]'>General API documentation and references</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
