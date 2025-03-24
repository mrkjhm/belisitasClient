import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import icons
import { GiMirrorMirror } from "react-icons/gi";
import { BsLamp } from "react-icons/bs";
import { PiLampPendant } from "react-icons/pi";
import { BiChair } from "react-icons/bi";
import { GrBasket } from "react-icons/gr";

const iconMapping = {
    "Chair": <BiChair className="text-lg mb-1" />,
    "Pendant Light": <PiLampPendant className="text-lg mb-1" />,
    "Basket": <GrBasket className="text-lg mb-1" />,
    "Mirror": <GiMirrorMirror className="text-lg mb-1" />,
    "Table Lamp": <BsLamp className="text-lg mb-1" />,
    "Hamper": <GrBasket className="text-lg mb-1" />
};

export default function Category() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_URL; // Ensure your backend URL is set

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${URL}/categories/`);
                if (response.data.success) {
                    setCategories(response.data.categories);
                } else {
                    toast.error("Error fetching categories");
                }
            } catch (error) {
                toast.error("Failed to load categories");
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="custom-padding border-b border-gray-200 md:py-20 py-10">
            <div className=" space-y-5 text-center mb-5">
                <h3>Choose your Category</h3>
                <div className="mx-auto h-1 w-12 border-b-[2px] border-blue"></div>
            </div>
            <div className="flex justify-center">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2} // Default for mobile

                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 }
                    }}
                    className="w-full max-w-6xl"
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category._id} className="my-5">

                            <div className="bg-white flex flex-col justify-center items-center hover:shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:-translate-y-1 p-6"
                                 onClick={() => navigate(`/product?category=${category._id}&page=1`)}
                            >
                                {iconMapping[category.name] || <GrBasket className="text-lg" />} {/* Default icon */}
                                <p className="text-center">{category.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
