import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 w-[60%] last:mb-0 flex flex-col items-center justify-center md:w-[50%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a target='_blank' href={companyLink} className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div className='my-64 md:my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div ref={ref} className='absolute left-5 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top sm:w-[2px] sm:left-[30px] xs:left-[20px] ' style={{ scaleY: scrollYProgress }} />
                <ul className='w-full flex items-start sm:items-center justify-between flex-col ml-10 xs:ml-5 '>
                    <Details
                        position="Front-End trainee"
                        company='Kimit'
                        time='9-2022'
                        address="Cairo"
                        work='I trained to be a front end developer at Kimit Innovation, great experience learning from skilled instructor.
                    Tt was an intensive boot camp in front-end using React, it last for 8 months of hard working to accuire the knowledge needed to become a web developer .'
                        companyLink="https://www.kimitin.com"
                    />

                    <Details
                        position="NODJS INTERN"
                        company='Innovation Technologies'
                        time='1-2023'
                        address="Cairo"
                        work='I trained to be a nodjs  developer at Great place , i learned a lot from the the team of the agency.'
                        companyLink="https://www.innovationtech.com"
                    />

                    <Details
                        position="Full stack web developer"
                        company='freelancer'
                        time='8-2024'
                        address="My computer"
                        work='Its the time i started to go to the wild by my self and do some freelancing work, which was a good experience for me'
                        companyLink="/"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience