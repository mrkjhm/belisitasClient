import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function ProductBanner() {
    return (
        <div className="custom-padding w-full bg-gray-100 flex justify-center items-center border-b border-gray-200">
            <div className="container mx-auto my-20">
                <div className="relative md:flex gap-5 justify-between">

                    {/* Left Image Container */}
                    <div className="md:w-2/5 w-full bg-gray-200 p-10 relative group overflow-hidden md:mb-0 mb-10">
                        <p className="px-5 py-2 bg-blue inline text-white">New</p>
                        <p className="text-2xl font-semibold mt-3">Rattan Chair</p>
                        <img src={assets.img_chair_1} alt="Chair" className="w-full" />

                        {/* Hover Effect: Slide Up & Fade In */}
                        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue text-white
                        opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-in-out">
                            <Link to="/product" className="text-lg font-semibold">View Products</Link>
                        </div>
                    </div>

                    {/* Right Image Container */}
                    <div className="md:w-3/5 w-full bg-gray-200 p-10 relative group overflow-hidden">
                        <p className="text-2xl font-semibold">Bunddle Products</p>
                        <img src={assets.landing_img3} alt="Landing Image" className="w-full" />

                        {/* Hover Effect: Slide Up & Fade In */}
                        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue text-white bg-opacit text-white
                        opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-in-out">
                            <Link to="/product" className="text-lg font-semibold">View Products</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
