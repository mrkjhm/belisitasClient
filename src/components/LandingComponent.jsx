import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { assets } from "../assets/assets.jsx";
import Button from "./Button.jsx";

const LandingComponent = () => {
    return (
        <div className="custom-padding md:py-20 py-10 border-b border-gray-200 background overflow-hidden">
            <div className="flex justify-center container mx-auto">
                <div className="flex md:flex-row flex-col gap-7">

                    {/* Left Image Animation (Slides in from Left) */}
                    <div className="relative hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                        <img className="w-full" src={assets.product_img_1} alt=""/>
                        <div className="absolute bottom-0 w-full">
                            <div className="p-5 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-lg">Lorem Ipsum</p>
                                    <p>Lorem ipsum.</p>
                                </div>
                                <Button text="View" textColor="#666" link="/category/all" className="border-2 border-gray-500 sm:px-3 sm:py-2 px-2 py-1  sm:text-[16px] text-sm"/>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Animation (Slides in from Right) */}
                    <div className="relative hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                        <img className="w-full" src={assets.product_img_2} alt=""/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center ps-40">
                            <div className="space-y-2">
                                <h2 className="md:text-3xl text-2xl font-bold">Lorem Ipsum</h2>
                                <p className="text-sm w-50 md:mb-5 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum posuere accumsan.
                                </p>
                                <Button text="View products" textColor="#666" link="/category/all" className="border-2 border-gray-500 sm:px-3 sm:py-2 px-2 py-1  sm:text-[16px] text-sm"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LandingComponent;
