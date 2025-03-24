import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // ✅ Detect Scroll Direction (Hide on Scroll Down, Show on Scroll Up)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // ✅ Close menu when resizing to a larger screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ✅ Disable scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <>
            <nav className={`!bg-white z-[100] shadow-md fixed w-full top-0 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className=" w-full sm:px-25  px-[30px] top-0 shadow-md z-[100] bg-white">
                    <div className='container mx-auto flex md:justify-end justify-center gap-10 border-b border-[#ededed] py-2 text-[13px] md:text-[16px]'>
                        <div className=" flex gap-5 sm:justify-end justify-center">
                            <div className='flex gap-2'>
                                <i className="ri-phone-fill"></i>
                                <h1>+63 912 3456 789</h1>
                            </div>
                            <div className='flex gap-2'>
                                <i className="ri-mail-fill"></i>
                                <h1>sample@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-between items-center py-5">
                        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img className="logo" src={assets.belisitas_logo} alt="Logo" /></NavLink>
                        <div className="hidden md:flex">
                            <ul className="flex gap-8 cursor-pointer">
                                <NavLink to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}><li>Home</li></NavLink>
                                <NavLink to='/about-us' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}><li>About Us</li></NavLink>
                                <NavLink to='/category/all' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}><li>Products</li></NavLink>
                                <NavLink to="/contact-us" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}><li>Contact Us</li></NavLink>
                            </ul>
                        </div>

                        <button className="md:hidden text-2xl relative z-50" onClick={toggleMenu}>
                            {menuOpen ? (
                                <i className="ri-close-line transition-transform duration-300 rotate-180"></i>
                            ) : (
                                <i className="ri-menu-3-line transition-transform duration-300 rotate-0"></i>
                            )}
                        </button>

                        <div className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transition-transform duration-500 ease-in-out
                        ${menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none opacity-0"}`}>
                            <ul className="text-left p-10 space-y-6">
                                <NavLink to='/' onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-item-1 active" : "nav-item"}><li className="my-5">Home</li></NavLink>
                                <NavLink to='/about-us' onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-item-1 active" : "nav-item"}><li className="my-5">About Us</li></NavLink>
                                <NavLink to="/category/all" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-item-1 active" : "nav-item"}><li>Products</li></NavLink>
                                <NavLink to="/contact-us" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-item-1 active" : "nav-item"}><li className="my-5">Contact Us</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
