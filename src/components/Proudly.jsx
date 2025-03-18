import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'

export default function Proudly() {
    return (
        // <div className='flex justify-center' >
        //     <div className="o w-full  bg-[#0D2893] text-white flex py-30">
        //         <div className='flex flex-col justify-center xl:ps-70 pe-10 lg:ps-20 ps-10 text-start'>

        //             <h2 className='text-2xl font-bold'>MADE-TO-MEASURE</h2>
        //             <p>Our service begins when we understand what your space needs.</p>
        //             <h3>Talk to us for your custom-made-piece.</h3>
        //         </div>

        //     </div>
        //     <div className="w-full  bg-[#8d8d8d] text-white py-30">
        //         <div className='container mx-auto flex flex-col justify-center text-start'>

        //             <img src={assets.belisitas_logo} alt="" />
        //         </div>

        //     </div>

        // </div>
        /*<div className="bg-[#0D2893] custom-padding">
            <div className="container mx-auto">
                <div className="flex flex-col  md:flex-row">
                    {/!* Left Side - Blue Section *!/}
                    <div className="md:w-1/2 w-full flex justify-center items-center text-white md:py-40 py-20">
                        {/!* lg:px-20 md:px-7 sm:px-20 px-[30px] *!/}
                        <div className="">
                            <h2 className="text-4xl font-bold mb-2">MADE-TO-MEASURE</h2>
                            <p className=" text-sm">
                                Our service begins when we understand what your space needs.

                            </p>
                            <p className='mb-7'>Talk to us for your custom-made piece.</p>
                            <Button text="Contact Us" bgColor="white" textColor="#002885" link="/contact-us" className="px-5 py-3" />
                        </div>
                    </div>

                    {/!* Right Side - Gray Section *!/}
                    <div className="md:w-1/2 w-full flex justify-center items-center md:py-20 pb-20">
                        <img src={assets.landing_img3} alt="Belisitas Handicraft Philippines" />
                    </div>
                </div>
            </div>

        </div>*/
        <div className="background lg:px-25 px-5 md:py-20 py-15 border-b border-gray-200">
            <div className="flex justify-center container mx-auto">
                <div className="flex md:flex-row flex-col gap-7">

                            <div className="flex flex-col md:flex-row">
                                <div className="flex justify-center">
                                    <img src={assets.banner_img1} alt=""/>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="space-y-2 p-5">

                                        <h2 className="sm:text-4xl text-2xl font-bold uppercase">Made-to-Measure</h2>
                                        <p className="">Our service begins when we understand what your space needs.</p>
                                        <p className='sm:mb-7 mb-5'>Talk to us for your custom-made piece.</p>
                                        <Button text="Contact Us" textColor="#666" link='/contact-us' className="border-2 border-gray-500 px-3 py-2 sm:text-[16px] text-sm"  />
                                    </div>
                                </div>

                            </div>

                    {/*<div className="relative hover:shadow-xl transition-all duration-500 ease-in-out   transform hover:-translate-y-1">

                        <img className="w-full" src={assets.product_img_1} alt=""/>
                        <div className="absolute top-0 w-full">
                            <div className="py-5 px-8 flex  justify-between items-center">
                                <p className="py-1 px-3 bg-blue text-white rounded-lg">New</p>
                                <p className="text-[25px] font-semibold">₱200.00</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full">
                            <div className="p-5 flex  justify-between items-center">
                                <div>
                                    <p className="text-black font-semibold text-lg">Product Name</p>
                                    <p>Details</p>
                                </div>
                                <button className="py-1 px-3 border-2 border-gray-300 bg-gray-100">Buy New</button>
                            </div>
                        </div>
                    </div>*/}

                </div>
            </div>

        </div>

    )
}
