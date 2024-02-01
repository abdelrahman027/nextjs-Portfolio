import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    const router = useRouter();
    // Normal Link Component
    const CustomLink = ({ href, title, className = "" }) => {
        return <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] bg-dark inline-block absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : "w-0"} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    }

    // Mobile Link Component


    const MobileLink = ({ href, title, className = "", toggle }) => {
        const router = useRouter();
        const clickHandler = () => {
            toggle();
            router.push(href)
        }

        return <button href={href} onClick={clickHandler} className={`${className} my-2 relative group text-light dark:text-dark`}>
            {title}
            <span className={`h-[1px] bg-light inline-block absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : "w-0"} dark:bg-dark`}>
                &nbsp;
            </span>
        </button>
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light z-10 lg:px-16 md:px-16 sm:px-8'>
            <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleNav}>
                <span className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-1"}`}></span>
                <span className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"}`}></span>
            </button>

            {/* Normal Nav */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4 ' />
                    <CustomLink href='/about' title='About'
                        className='mx-4 ' />
                    <CustomLink href='/projects' title='Projects'
                        className='mx-4 '
                    />
                    <CustomLink href='/articles' title='Articles'
                        className='ml-4 '
                    />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3' href='https://twitter.com/Abdoo027' target='_blank'><TwitterIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href='https://github.com/abdelrahman027' target='_blank'><GithubIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href='https://www.linkedin.com/in/abdelrahman-s-145561255/' target='_blank'><LinkedInIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full ' href='https://www.pinterest.com/abdelrahmansaad027/' target='_blank'><PinterestIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3' href='https://dribbble.com/abdelrahman027' target='_blank'><DribbbleIcon /></motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                    >
                        {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}

                    </button>
                </nav>

            </div>
            {/* Responsive Nav */}
            {isOpen && <motion.div
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity: 1 }}
                className={`min-w-[70vw] flex justify-between z-30 flex-col items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32`}>
                <nav className='flex justify-center items-center flex-col'>
                    <MobileLink href='/' title='Home' className=' ' toggle={handleNav} />
                    <MobileLink href='/about' title='About'
                        className=' ' toggle={handleNav} />
                    <MobileLink href='/projects' title='Projects' toggle={handleNav}
                        className=' '
                    />
                    <MobileLink href='/articles' title='Articles' toggle={handleNav}
                        className=' '
                    />
                </nav>

                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 sm:mx-1' href='https://twitter.com/Abdoo027' target='_blank'><TwitterIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3  sm:mx-1 bg-light rounded-full dark:bg-dark' href='https://github.com/abdelrahman027' target='_blank'><GithubIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href='https://www.linkedin.com/in/abdelrahman-s-145561255/' target='_blank'><LinkedInIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1 bg-light rounded-full ' href='https://www.pinterest.com/abdelrahmansaad027/' target='_blank'><PinterestIcon /></motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3 sm:mx-1' href='https://dribbble.com/abdelrahman027' target='_blank'><DribbbleIcon /></motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                    >
                        {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}

                    </button>
                </nav>

            </motion.div>}
            {/* Logo */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar