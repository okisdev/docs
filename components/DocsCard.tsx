import Link from 'next/link';

import { MdOutlineLibraryBooks, MdEmojiFlags } from 'react-icons/md';
import { VscGithub } from 'react-icons/vsc';

const DocsCard = ({ title, description, docs_url, github_url, demo_url }: any) => {
    return (
        <div className='grid break-inside-avoid dark:text-[#adbac7]'>
            <div className='rounded-md border-2 p-3 m-3'>
                <div className='flex flex-col '>
                    <span className='font-bold my-1'>{title}</span>
                    <span className='text-gray-400 dark:text-gray-500'>{description}</span>
                </div>
                <div className='flex w-full justify-between my-1'>
                    <div className='p-3'>
                        <Link href={docs_url} passHref>
                            <a className='inline-flex items-center space-x-2'>
                                <MdOutlineLibraryBooks />
                                <span>Docs</span>
                            </a>
                        </Link>
                    </div>
                    <div className='p-3'>
                        <Link href={github_url} passHref>
                            <a className='inline-flex items-center space-x-2' target='_blank' rel='noopener noreferrer'>
                                <VscGithub />
                                <span>GitHub</span>
                            </a>
                        </Link>
                    </div>
                    <div className='p-3'>
                        <Link href={demo_url} passHref>
                            <a className='inline-flex items-center space-x-2' target='_blank' rel='noopener noreferrer'>
                                <MdEmojiFlags />
                                <span>Demo</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsCard;
