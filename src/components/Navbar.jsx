import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"


const Navbar = ({ theme, setTheme }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <motion.div
        initial={{opacity: 0, y:-50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
         className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt="" />

            <div className={`text-gray-700 dark:text-white md:text-md ${!sidebarOpen ? 'max-md:w-0 overflow-hidden' : 'max-md:w-60 max-md:pl-10'} max-md:fixed top-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-primary max-md:text-white max-md:pt-20 flex md:items-center gap-5 transition-all`}>

                <img src={assets.close_icon} alt="" onClick={()=>setSidebarOpen(!sidebarOpen)} className='w-5 absolute right-5 top-5 md:hidden' />

                <a href="#" className='sm:hover:border-b' onClick={()=>setSidebarOpen(!sidebarOpen)}>Home</a>
                <a href="#services" className='sm:hover:border-b' onClick={()=>setSidebarOpen(!sidebarOpen)}>Services</a>
                <a href="#our-work" className='sm:hover:border-b' onClick={()=>setSidebarOpen(!sidebarOpen)}>Our Work</a>
                <a href="#contact-us" className='sm:hover:border-b' onClick={()=>setSidebarOpen(!sidebarOpen)}>Contact Us</a>
            </div>

            <div className='flex items-center gap-2 md:gap-4'>

                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=>setSidebarOpen(!sidebarOpen)} className='w-8 md:hidden' />

                <a href="#contact-us" className='text-sm max-md:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Contact <img src={assets.arrow_icon} width={14} alt="" />
                </a>
            </div>
        </motion.div>
    )
}

export default Navbar