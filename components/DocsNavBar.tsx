import Link from 'next/link';

import { RiRssFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineMail, HiOutlinePhotograph } from 'react-icons/hi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { CgHomeAlt } from 'react-icons/cg';
import { FaTags } from 'react-icons/fa';

const DocsNavBar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <div className='bg-white dark:bg-gray-500'>
                <div className='flex justify-center py-3'>
                    <nav className='flex'>
                        <div className='flex items-start mr-20 md:mr-80'>
                            <div className='mx-3'>
                                <Link href='/' passHref>
                                    <a title='Homepage'>
                                        <BiHome className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='/tags' passHref>
                                    <a title='Tags'>
                                        <FaTags className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-end'>
                            <div className='mx-3'>
                                <Link href='https://www.harrly.com' passHref>
                                    <a title='Home'>
                                        <CgHomeAlt className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://photo.harrly.com/' passHref>
                                    <a title='Photo'>
                                        <HiOutlinePhotograph className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://github.com/Harry-Yep' passHref>
                                    <a title='GitHub'>
                                        <FiGithub className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://www.harrly.com/privacy-policy' passHref>
                                    <a title='Privacy Policy'>
                                        <AiOutlineSafety className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DocsNavBar;
