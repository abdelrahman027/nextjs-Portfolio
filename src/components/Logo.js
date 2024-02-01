import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex item-center justify-center mt-2'>
            <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >AS</MotionLink>
        </div>
    )
}

export default Logo