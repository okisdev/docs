import React from 'react';

import clsx from 'clsx';

import styles from './Feature.styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    pic: string;
    description: JSX.Element;
    doc: string;
    github: string;
    demo: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Notion Blog React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png',
        description: <>Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.</>,
        doc: '/docs/notion-blog-react',
        github: 'https://github.com/Harry-Yep/Notion-Blog-React',
        demo: 'https://react-notion-blog.demo.harisfox.com/',
    },
    {
        title: 'Notion Photo React',
        pic: 'https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png',
        description: <>Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.</>,
        doc: '/docs/notion-photo-react',
        github: 'https://github.com/Harry-Yep/Notion-Photo-React',
        demo: 'https://react-notion-photo.demo.harisfox.com/',
    },
];

function Feature({ title, pic, description, doc, github, demo }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div>
                <img src={pic} alt='' />
            </div>
            <div className='text--center padding-horiz--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.bar}>
                <Link href={doc}>Docs</Link>
                <Link href={github}>GitHub</Link>
                <Link href={demo}>Demo</Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
