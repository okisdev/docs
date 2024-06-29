import Features from '@/components/home/Features';

export default function HomePage() {
    return (
        <main className='flex h-screen flex-col justify-center text-center'>
            <h1 className='mb-4 text-2xl font-bold'>okisdev's docs</h1>

            <Features />
        </main>
    );
}
