import { FeatureLoadingSkeleton } from '@/components/loading-skeleton';
import { ProjectType } from '@/types/project';
import { getProjects } from '@/utils/project';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

function FeatureCard(props: Readonly<ProjectType>) {
    return (
        <div className='grid transform break-inside-avoid overflow-hidden rounded-md border border-zinc-900/30 bg-zinc-50 transition duration-300 ease-in-out hover:border-zinc-200/70 hover:shadow-lg dark:border-zinc-200/30 dark:bg-zinc-900/50 dark:hover:border-zinc-200/50 dark:hover:shadow-xl'>
            <img src={props.image} alt={props.name} />
            <div className='flex flex-col space-y-2 p-3 md:space-y-3'>
                <Link href={props.url} target='_blank'>
                    <div className='hover-underline-animation inline-flex flex-row items-center justify-start space-x-1'>
                        <p className='font-bold'>{props.name}</p>
                        <FiArrowUpRight />
                    </div>
                </Link>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{props.description}</p>
            </div>
            <div className='border-b border-zinc-900/30 dark:border-zinc-200/30' />
            <div className='my-5 flex justify-between px-3'>
                <Link href={props.doc}>
                    <div className='flex flex-row items-center justify-start space-x-1'>
                        <p>Read me</p>
                        <FiArrowRight />
                    </div>
                </Link>
                <div className='flex flex-row space-x-3'>
                    {props.github && (
                        <Link href={props.github} target='_blank'>
                            <FaGithub className='' size={25} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Features(): JSX.Element {
    const [p, setP] = useState<ProjectType[] | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();

            setP(projects);
        };

        fetchProjects();
    }, []);

    return (
        <div className='container mx-auto my-10 w-11/12 columns-1 space-y-2 md:w-10/12 md:columns-3 md:space-y-3'>
            {p ? p.filter((i) => i.doc).map((props) => <FeatureCard key={props.id} {...props} />) : <FeatureLoadingSkeleton />}
        </div>
    );
}
