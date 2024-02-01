import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 w-[60%] last:mb-0 flex flex-col items-center justify-center md:w-[50%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium sm:text-sm xs:text-xs dark:text-light/75 text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div className='my-64 md:my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div ref={ref} className='absolute left-5 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top sm:w-[2px] sm:left-[30px] xs:left-[20px]' style={{ scaleY: scrollYProgress }} />
                <ul className='w-full flex items-start sm:items-center justify-between flex-col ml-10 xs:ml-5'>
                    <Details
                        type='Bachelor Of civil engineering
                        '
                        place='Higher institute of engineering and technology'
                        time='2009-2017'
                        info='was planning to be a a civil engineering but after years of studying i decided turn my back to it and start my real passion'
                    />
                    <Details
                        type='Self study
                        '
                        place='My laptop :)'
                        time='2022-2023'
                        info='i learned the basics of web development and started to study html and java script'
                    />
                    <Details
                        type='Kimit innovation Front-end diploma
                        '
                        place='Kimit Innovation'
                        time='2023-2024'
                        info='was ready to sharpen my skills beside self study and learning on my own by a good instructors to help me tackle some difficulties and save much time'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education