import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useEffect } from 'react'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div
                className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <a href="#Home">
                    <img src={assets.logo} alt="" className='cursor-pointer' />
                </a>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block px-8 py-2 bg-white rounded-full cursor-pointer'>Sign Up</button>
                <img
                    src={assets.menu_icon}
                    className='md:hidden w-7 cursor-pointer'
                    alt=""
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                />
            </div>
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
                <div
                    className='flex justify-end p-6 cursor-pointer'
                    onClick={() => setShowMobileMenu(false)}
                >
                    <img src={assets.cross_icon} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Home" className='px-4 py-2 rounded-full inline-block' 
                    onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" className='px-4 py-2 rounded-full inline-block' 
                    onClick={() => setShowMobileMenu(false)}>About</a>
                    <a href="#Projects" className='px-4 py-2 rounded-full inline-block' 
                    onClick={() => setShowMobileMenu(false)}>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' 
                    onClick={() => setShowMobileMenu(false)}>Testimonials</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
