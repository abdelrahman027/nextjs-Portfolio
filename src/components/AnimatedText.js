import { motion } from 'framer-motion'
import React from 'react'

const animater = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1
        }
    }
}
const singleAnimater = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}
const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className='w-full mx-auto py-2 sm:py-0 flex  items-center justify-center text-center'>
            <motion.h1 className={`${className} inline-block w-full dark:text-light text-dark font-bold capitalize text-6xl`}
                variants={animater}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                    (<motion.span key={`${word}/${index}`} className="inline-block"
                        variants={singleAnimater}
                    >
                        {word}&nbsp;
                    </motion.span>)
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText