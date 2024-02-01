import { motion } from 'framer-motion'
import React from 'react';


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className=' flex items-center justify-center rounded-full dark:text-dark text-light bg-dark dark:bg-light font-semibold py-3 px-6 shadow-dark shadow-md absolute cursor-pointer
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:text-xs
        ' whileHover={{ scale: 1.1 }} initial={{ x: 0, y: 0 }} whileInView={{ x, y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}


const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm-[60vh] xs-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularDarkMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm '
            >
                <motion.div className=' flex items-center justify-center rounded-full text-light bg-dark font-semibold p-8 shadow-dark shadow-md dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.1 }}>
                    WEB
                </motion.div>
                <Skill name='CSS' x='-5vw' y='-10vw' />
                <Skill name='HTML' x='-20vw' y='-2vw' />
                <Skill name='JAVASCRIPT' x='20vw' y='6vw' />
                <Skill name='REACT' x='0vw' y='12vw' />
                <Skill name='NODEJS' x='-20vw' y='-15vw' />
                <Skill name='MONGODB' x='15vw' y='-12vw' />
                <Skill name='NEXTJS' x='32vw' y='-5vw' />
                <Skill name='REDUX' x='0vw' y='-20vw' />
                <Skill name='SASS' x='-25vw' y='18vw' />
                <Skill name='TAILWIND' x='18vw' y='18vw' />
                <Skill name='BOOTSTRAP' x='-12vw' y='6vw' />
                <Skill name='FIGMA' x='15vw' y='-4vw' />
                <Skill name='TYPESCRIPT' x='-32vw' y='5vw' />
                <Skill name='PUGJS/JADE' x='0vw' y='24vw' />
                <Skill name='EJS' x='-32vw' y='-8vw' />

            </div>
        </>
    )
}

export default Skills