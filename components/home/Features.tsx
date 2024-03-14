import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

interface FeatureItem {
    title: string;
    pic: string;
    description: string;
    doc: string;
    github: string;
    demo: string;
    date: string;
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Notion Blog React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png',
        description: 'Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.',
        doc: '/notion-blog-react',
        github: 'https://github.com/okisdev/Notion-Blog-React',
        demo: 'https://nbr.okis.dev/',
        date: '2021-08',
    },
    {
        title: 'Notion Photo React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png',
        description: 'Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.',
        doc: '/notion-photo-react',
        github: 'https://github.com/okisdev/Notion-Photo-React',
        demo: 'https://npr.okis.dev/',
        date: '2022-02',
    },
    {
        title: 'TfL Tube',
        pic: 'https://cdn.harrly.com/project/GitHub/TfL-Tube/img/TfL-Tube.Banner.png',
        description: 'A platform gathers and visualises London transportation information, including Underground, Overground, Elizabeth Line and more.',
        doc: '/tfl-tube',
        github: 'https://github.com/okisdev/TfL-Tube',
        demo: 'https://tube.okis.dev/',
        date: '2023-02',
    },
    {
        title: 'Chat Chat',
        pic: 'https://cdn.harrly.com/project/GitHub/Chat-Chat/img/Chat-Chat.Banner.png',
        description: 'Unlock next-level conversations with AI.',
        doc: '/chat',
        github: 'https://github.com/okisdev/ChatChat',
        demo: 'https://chat.okis.dev/',
        date: '2023-03',
    },
];

function FeatureCard({ title, pic, description, doc, github, demo }: FeatureItem) {
    return (
        <div className='grid rounded-md break-inside-avoid border border-zinc-900/30 dark:border-zinc-200/30 overflow-hidden transition duration-300 ease-in-out transform hover:border-zinc-200/70 hover:shadow-lg dark:hover:shadow-xl dark:hover:border-zinc-200/50 bg-zinc-50 dark:bg-zinc-900/50'>
            <img src={pic} alt={title} />
            <div className='flex flex-col p-3 space-y-3'>
                <Link href={demo} target='_blank'>
                    <div className='flex flex-row items-center justify-start space-x-1'>
                        <p className='font-bold'>{title}</p>
                        <FiArrowUpRight />
                    </div>
                </Link>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{description}</p>
            </div>
            <div className='border-zinc-900/30 dark:border-zinc-200/30 border-b' />
            <div className='px-3 my-5 flex justify-between'>
                <Link href={doc}>
                    <div className='flex flex-row items-center justify-start space-x-1'>
                        <p>Read me</p>
                        <FiArrowRight />
                    </div>
                </Link>
                <div className='flex flex-row space-x-3'>
                    {github && (
                        <Link href={github} target='_blank'>
                            <FaGithub className='' size={25} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Features(): JSX.Element {
    return (
        <div className='container mx-auto my-10 w-11/12 columns-1 space-y-2 md:w-10/12 md:columns-3 md:space-y-3'>
            {FeatureList.sort((a, b) => (a.date > b.date ? -1 : 1)).map((props, idx) => (
                <FeatureCard key={idx} {...props} />
            ))}
        </div>
    );
}
