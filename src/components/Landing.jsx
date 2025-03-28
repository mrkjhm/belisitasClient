import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

import {assets} from "../assets/assets.jsx";

import Button from "./Button.jsx";

const Landing = () => {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_URL;

    const fetchList = async () => {
        try {
            const response = await axios.get(`${URL}/products/`);
            if (response.data.success) {
                let products = response.data.data;

                // Shuffle and get only 2 random products
                const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);

                setProduct(randomProducts);

            } else {
                toast.error("Error fetching products.");
            }
        } catch (error) {
            toast.error("Server Error");
            console.log(error);
        }
    }



    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <div className="lg:px-25 px-5 py-25 mt-15">
                <div className="container mx-auto relative flex ga xl:flex-row flex-col-reverse gap-10">
                    <div className="flex xl:flex-col md:flex-row flex-col justify-between gap-10 ">

                        <div className="grid xl:grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:px-0 px-5">
                            {product.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 50 }} // Start from bottom
                                    animate={{ opacity: 1, y: 0 }} // Move up
                                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }} // Staggered animation
                                    className="w-full"
                                >
                                    <div className="relative hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                                        {item.images?.length > 0 && (
                                            <img
                                                src={item.images[0]?.url} // ✅ Extract the 'url' field
                                                alt={item.name}
                                                className="cursor-pointer product-image w-full  border-gray-100  shadow-sm"

                                                 // Hide broken images
                                                onClick={() => navigate(`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
                                            />
                                        )}

                                        <div className="absolute bottom-0 w-full">
                                            <div className="p-5 flex justify-between items-center">
                                                <div>
                                                    <p className="text-black font-semibold">{item.name}</p>
                                                    <p className="text-sm">Code: {item.code}
                                                    </p>
                                                </div>
                                                <p className="text-blue font-semibold text-lg">₱ {item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                    <div className="relative">
                        <img src={assets.landing_img_1} alt=""/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center lg:ps-100 md:ps-75 sm:ps-56 ps-45 w-full">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                    hidden: { opacity: 0, y: 50 }, // Start BELOW
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            staggerChildren: 0.5, // Delay each child by 0.3s
                                        }
                                    },
                                    exit: { opacity: 0, y: -50 } // Exit by going UP
                                }}
                            >
                                <motion.p
                                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.8 }}
                                    className="uppercase lg:text-[22px] md:text-[18px] text-sm font-semibold"
                                >
                                    Welcome to our
                                </motion.p>

                                <motion.h1
                                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-blue font-bold lg:text-[85px] md:text-[65px] sm:text-[50px] text-[35px] md:-my-4 -my-1"
                                >
                                    Belisitas
                                </motion.h1>

                                <motion.p
                                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="lg:text-[35px] md:text-[30px] sm:text-[22px] mb-5 font-bold"
                                >
                                    Rattan Furnitures
                                </motion.p>

                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <Button
                                        text="View Collection"
                                        bgColor="#0D2893"
                                        link='/product'
                                        className="sm:px-5 sm:py-3 px-3 py-2 sm:text-[16px] text-sm"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Landing