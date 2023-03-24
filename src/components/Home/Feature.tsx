import React from 'react';

import Link from '@docusaurus/Link';

import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
    title: string;
    pic: string;
    description: JSX.Element;
    doc: string;
    github: string;
    demo: string;
    date: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Notion Blog React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png',
        description: <Translate>Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.</Translate>,
        doc: '/notion-blog-react',
        github: 'https://github.com/okisdev/Notion-Blog-React',
        demo: 'https://nbr.okis.dev/',
        date: '2021-08',
    },
    {
        title: 'Notion Photo React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png',
        description: <Translate>Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.</Translate>,
        doc: '/notion-photo-react',
        github: 'https://github.com/okisdev/Notion-Photo-React',
        demo: 'https://npr.okis.dev/',
        date: '2022-02',
    },
    {
        title: 'TfL Tube',
        pic: 'https://cdn.harrly.com/project/GitHub/TfL-Tube/img/TfL-Tube.Banner.png',
        description: <Translate>A platform gathers and visualises London transportation information, including Underground, Overground, Elizabeth Line and more.</Translate>,
        doc: '/tfl-tube',
        github: 'https://github.com/okisdev/TfL-Tube',
        demo: 'https://tube.okis.dev/',
        date: '2023-02',
    },
    {
        title: 'Chat Chat',
        pic: 'https://cdn.harrly.com/project/GitHub/Chat-Chat/img/Chat-Chat.Banner.png',
        description: <Translate>Unlock next-level conversations with AI.</Translate>,
        doc: '/chat',
        github: null,
        demo: 'https://chat.okis.dev/',
        date: '2023-03',
    },
];

function Feature({ title, pic, description, doc, github, demo }: FeatureItem) {
    return (
        <div className='grid break-inside-avoid rounded-xl bg-gray-100 p-3 text-center dark:bg-stone-500'>
            <div className='p-3'>
                <img src={pic} alt={title} />
            </div>
            <div className='mx-auto flex w-10/12 flex-col items-center justify-center'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='mx-auto my-5 flex w-8/12 items-center justify-between'>
                <Link
                    href={doc}
                    className='mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 transition duration-500 ease-in-out hover:bg-sky-300 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                >
                    <Translate id='home.feature.bar.docs'>Docs</Translate>
                </Link>
                {github && (
                    <Link
                        href={github}
                        target='_blank'
                        className='mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 transition duration-500 ease-in-out hover:bg-sky-300 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                    >
                        <Translate id='home.feature.bar.github'>GitHub</Translate>
                    </Link>
                )}
                <Link
                    href={demo}
                    target='_blank'
                    className='mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 transition duration-500 ease-in-out hover:bg-sky-300 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                >
                    <Translate id='home.feature.bar.demo'>Demo</Translate>
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className=''>
            <div className='container mx-auto my-10 w-11/12 columns-1 space-y-2 md:w-10/12 md:columns-3 md:space-y-3'>
                {FeatureList.sort((a, b) => (a.date > b.date ? -1 : 1)).map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
