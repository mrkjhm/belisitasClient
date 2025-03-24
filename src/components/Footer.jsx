import React from 'react'
import { Link } from "react-router-dom";
import { assets } from '../assets/assets'

export default function Footer() {
    return (
        <>

            <div className='bg-[#EDEDED] custom-padding py-15 border-t border-gray-200' id='footer'>
                <div className='container mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                    {/*<div>*/}
                    {/*    <img src={assets.belisitas_logo} alt="" className='logo1' />*/}
                    {/*</div>*/}

                    <div className=''>
                        <h3 className='font-bold text-xl md:mb-3 mb-4'>Contact Us</h3>
                        <div className='flex gap-10'>
                            {/*<div className='flex flex-col gap-2 max-w-32'>*/}
                            {/*    <p>Address:</p>*/}
                            {/*    <br/>*/}
                            {/*    <p>Cell-Phone:</p>*/}
                            {/*    <p>Email:</p>*/}
                            {/*</div>*/}
                            <ul className="flex flex-col gap-3">
                                <li>#75 A. Bonifacio Street, <br/> San Pablo City, 4000, Laguna</li>
                                <li>09123456789</li>
                                <li>sample@gmail.com</li>
                            </ul>
                            {/*<div className='flex flex-col gap-2 max-w-80'>*/}
                            {/*    <p>#75 A. Bonifacio Street, San Pablo City, 4000, Laguna</p>*/}

                            {/*    <p>09123456789</p>*/}
                            {/*    <p>sample@gmail.com</p>*/}
                            {/*</div>*/}


                        </div>
                    </div>
                    <div className=''>
                        <h3 className='font-bold text-xl md:mb-3 mb-4'>Company</h3>
                        <div className='flex flex-col gap-3'>
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                Home
                            </Link>


                            <Link to="/about-us">About us</Link>
                            <Link to="/category/all">Products</Link>
                            <Link to="/contact-us">Contact Us</Link>
                        </div>
                    </div>
                    <div >

                        <img src={assets.belisitas_logo} alt="" className='logo1' />
                    </div>
                </div>
            </div>
            <div className='text-center my-2 sm:text-[16px] text-sm'>
                <p>Copyright  © 2025 by <span className='font-semibold'>Belisitas Rattan Furniture</span> </p>
            </div>
        </>
    )
}
