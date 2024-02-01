import Link from 'next/link'
import React from 'react'
import Layout from './Layout'


const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-dark font-medium text-lg dark:border-light  dark:text-light sm:text-base xs:text-sm'>
            <Layout className='py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6  '>
                <p>
                    2023 © All Rights Reserved.
                </p>
                <div className='flex items-center lg:py-2'>
                    Built with <span className='text-2xl text-pink-600  dark:text-primaryDark'>&#9825;</span>
                    by  <Link className='underline' href='https://github.com/abdelrahman027'>&nbsp;abdelrahman027</Link>
                    <span className='text-xs md:text-[8px] xs:hidden'>&nbsp;UI by CodeBucks</span>
                </div>
                <p>
                    <Link className='underline' href="/about">Say Hello</Link>
                </p>
            </Layout>
        </footer>
    )
}

export default Footer