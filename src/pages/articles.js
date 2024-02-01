import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImage = ({ img, title, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const mouseHandler = (event) => {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10)
    }
    const mouseLeaveHandler = (event) => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0)
    }



    return (

        <Link href={link}
            onMouseMove={mouseHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <h2 className='capitalize font-semibold text-xl hover:underline' >{title}</h2>
            <FramerImage style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: 0.9 }}
                ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10' />
        </Link>
    )

}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 flex items-center justify-between dark:text-light dark:bg-dark bg-light text-dark border border-solid dark:border-light border-dark rounded-xl first:mt-0  border-r-4 border-b-4 sm:flex-col'
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
        >
            <MovingImage title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return (
        <li className='col-span-1 w-full p-4 dark:text-light dark:bg-dark bg-light border border-solid dark:border-light border-dark rounded-2xl relative rounded-br-2xl'>
            <div className='absolute w-[102%] h-[103%] top-0 -right-3 dark:bg-light bg-dark -z-10 rounded-3xl' />
            <Link href={link} target='_blank' className='w-full rounded-lg cursor-pointer inline-block overflow-hidden'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 mt-4 capitalize text-2xl font-bold xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Abdelrahman | About Page</title>
                <meta name='description' content='abdelrahman about page' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Words Can Change the World !'
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
                    />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedArticle
                            title=' Build A Custom Pagination Component In Reactjs From Scratch'
                            summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                            time='9 min read'
                            link='https://www.google.com/'
                            img={article3}
                        />
                        <FeaturedArticle
                            title=' Build A Custom Pagination Component In Reactjs From Scratch'
                            summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                            time='9 min read'
                            link='https://www.google.com/'
                            img={article3}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>

                    <ul className=''>
                        <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date='January 27 2023'
                            link='http://www.google.com'
                            img={article3}
                        />
                        <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date='January 27 2023'
                            link='http://www.google.com'
                            img={article3}

                        />
                        <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date='January 27 2023'
                            link='http://www.google.com'
                            img={article3}

                        />
                        <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date='January 27 2023'
                            link='http://www.google.com'
                            img={article3}
                        />
                        <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                            date='January 27 2023'
                            link='http://www.google.com'
                            img={article3}

                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles