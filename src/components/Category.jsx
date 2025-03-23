import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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
            <div className='container mx-auto space-y-2 text-center mb-10'>
                <h3>Choose your Category</h3>
                <p className="mx-auto h-1 w-12 border-b-[2px] border-blue"></p>
            </div>
            <div className="flex justify-center">
                <div className='lg:flex lg:flex-wrap grid sm:grid-cols-3 grid-cols-2 gap-10 justify-center'>
                    {categories.map((category) => (
                        <div
                            key={category._id}  // Assuming _id exists in backend data
                            className='h-30 w-30 bg-white flex flex-col justify-center items-center hover:shadow-lg cursor-pointer
                            transition-all duration-500 ease-in-out transform hover:-translate-y-1'
                            onClick={() => navigate(`/product?category=${category.name}`)}
                        >
                            {iconMapping[category.name] || <GrBasket className="text-lg mb-1" />} {/* Default icon */}
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
