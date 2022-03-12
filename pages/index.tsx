import type { NextPage } from 'next';
import Head from 'next/head';

import { Toaster } from 'react-hot-toast';

import DocsCard from '../components/DocsCard';
import DocsFooter from '../components/DocsFooter';
import DocsHeader from '../components/DocsHeader';
import DocsNavBar from '../components/DocsNavBar';
import DocsThemeSwitcher from '../components/DocsThemeSwitcher';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Harry Yep&apos;s Docs</title>

                <meta charSet='UTF-8' />
                <meta name='author' content='Harry Yep' />
                <meta name='description' content="Harry Yep's Docs | Harrly" />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                <meta name='description' content="Harry Yep's Personal Website | Harrly" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta property='og:title' content="Harry Yep's Docs | Harrly" />
                <meta property='og:description' content="Harry Yep's Docs" />
                <meta property='og:url' content='https://docs.harrly.com/' />
                <meta property='og:image' content={`https://cdn.harrly.com/global/assets/icon/android-chrome-512x512.png`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content="Harry Yep's Docs | Harrly" />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`Harry Yep's Docs | Harrly`} />
                <meta name='twitter:description' content={`Harry Yep's Docs`} />
                <meta name='twitter:image' content={`https://cdn.harrly.com/global/assets/icon/android-chrome-512x512.png`} />
                <meta name='twitter:url' content={`https://docs.harrly.com/`} />
            </Head>

            <div className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik'>
                <Toaster />

                <DocsNavBar></DocsNavBar>

                <DocsHeader></DocsHeader>

                <div className='container mx-auto justify-center flex-grow'>
                    <div className='columns-1 md:columns-3'>
                        <DocsCard
                            title='Notion-Blog-React'
                            description='Blog powered by Notion, built with React, Next.JS, tailwindcss, TypeScript, Notion-Api-Worker and more.'
                            docs_url='/notion-blog-react'
                            github_url='https://github.com/Harry-Yep/Notion-Blog-React'
                            demo_url='https://react-notion-blog.demo.harisfox.com/'
                        />
                        <DocsCard
                            title='Notion-Photo-React'
                            description='A Photo Gallery powered by Notion, built with React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.'
                            docs_url='/notion-photo-react'
                            github_url='https://github.com/Harry-Yep/Notion-Blog-React'
                            demo_url='https://react-notion-photo.demo.harisfox.com/'
                        />
                    </div>
                </div>

                <DocsFooter></DocsFooter>

                <DocsThemeSwitcher></DocsThemeSwitcher>
            </div>
        </div>
    );
};

export default Home;
