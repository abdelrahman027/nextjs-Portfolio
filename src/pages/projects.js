import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import mernEstate from '../../public/images/projects/mern-estate.png';
import gymEvo from '../../public/images/projects/gymEvo.png';
import losAngeles from '../../public/images/projects/losangeles.png';
import ImdbClone from '../../public/images/projects/imdb-clone.png';
import nikeStore from '../../public/images/projects/nikeStore.png';
import BsDesign from '../../public/images/projects/bootstrapDesign.png';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
// Sub Component
const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center  dark:text-light justify-between rounded-3xl border border-solid dark:border-light border-dark dark:bg-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] dark:bg-light bg-dark rounded-[2.5rem] rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 lg:w-full rounded-lg cursor-pointer overflow-hidden'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex lg:w-full flex-col items-start justify between pl-6 lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium dark:text-light text-dark sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} className='ml-4 rounded-lg dark:bg-light dark:text-dark bg-dark text-light p-2 px-6 font-semibold sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col  dark:text-light items-center justify-center rounded-2xl border border-solid dark:border-light border-dark bg-light dark:bg-dark p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem] dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full rounded-lg cursor-pointer overflow-hidden'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>

        </article>
    )
}





// Main component
const projects = () => {
    return (
        <>
            <Head>
                <title>Abdelrahman | Projects</title>
                <meta name='description' content='abdelrahman description page page' />
            </Head>
            <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center mb-16'>
                <Layout>
                    <AnimatedText text='Imagination trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type='Featured Project'
                                title='Mern Real state app'
                                summary='A mern real estate app fullu functional using React and nodjs for backend and mongo db as a db'
                                link='https://mern-estate-ovlj.onrender.com/'
                                github='https://github.com/abdelrahman027/mern-estate'
                                img={mernEstate}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type='Featured Project'
                                title='Gym Evo'
                                link='https://evo-original.vercel.app/'
                                github='https://github.com/abdelrahman027/evo-original/tree/master'
                                img={gymEvo}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type='Featured Project'
                                title='LosAngeles mountains'
                                link='https://losangeles-mountains-ten.vercel.app/'
                                github='https://github.com/abdelrahman027/losangeles-mountains/tree/main'
                                img={losAngeles}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                type='Featured Project'
                                title='Imdb-Clone'
                                summary='Imdb clone useing the real imdb Database YOu can search for the movies you want and display the most trending moveis and read the story ,see rating'
                                link='https://imdb-clone-lac.vercel.app/'
                                github='https://github.com/abdelrahman027/imdb-clone/tree/main'
                                img={ImdbClone}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type='Featured Project'
                                title='Nike Store'
                                link='http://google.https://react-nike-store-omega.vercel.app/'
                                github='https://github.com/abdelrahman027/React-nike-Store/tree/master'
                                img={nikeStore}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type='Featured Project'
                                title='SimpleBs Design'
                                link='https://abdelrahman027.github.io/basic-bootstrap-Design/'
                                github='https://github.com/abdelrahman027/basic-bootstrap-Design'
                                img={BsDesign}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects