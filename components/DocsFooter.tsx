const DocsFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='leading-relaxed h-auto mb-3 text-sm dark:text-[#adbac7]'>
            <div className='text-center'>
                <a
                    href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
                    className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    CC BY-NC-SA 4.0
                </a>
                <p>Copyright &#169; {currentYear} Harry Yep. All rights reserved.</p>
                <p>
                    Made by Harry Yep with <span className='text-red-600'>♥</span>
                </p>
                <p className='text-sm md:px-52'>
                    Built with{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://reactjs.org'>
                        React
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://nextjs.org'>
                        Next.js
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://tailwindcss.com'>
                        tailwindcss
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://www.typescriptlang.org/'>
                        TypeScript
                    </a>
                </p>
                <p id='harrly-footer-powered-by'>
                    Powered By{' '}
                    <a href='https://harisfox.com' className='transition duration-500 underline hover:bg-yellow-500' target='_blank' rel='noopener noreferrer'>
                        Harrison Foxes
                    </a>
                </p>
            </div>
        </div>
    );
};

export default DocsFooter;
