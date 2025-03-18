import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiMirrorMirror } from "react-icons/gi";
import { BsLamp } from "react-icons/bs";
import { PiLampPendant } from "react-icons/pi";
import { BiChair } from "react-icons/bi";
import { GrBasket } from "react-icons/gr";


export default function Category() {
    const navigate = useNavigate();

    const categories = [
        { name: "Chair", icon: <BiChair  className="text-lg mb-1" /> },
        { name: "Pendant Light", icon: <PiLampPendant className="text-lg mb-1" /> },
        { name: "Basket", icon: <GrBasket className="text-lg mb-1" /> },
        { name: "Mirror", icon: <GiMirrorMirror className="text-lg mb-1" /> },
        { name: "Table Lamp", icon: <BsLamp className="text-lg mb-1" /> },
        { name: "Hamper", icon: <GrBasket className="text-lg mb-1" /> }
    ];

    return (
        <>
            <div className="custom-padding border-b border-gray-200 md:py-20 py-10">
                <div className='container mx-auto space-y-2 text-center mb-10'>
                    <h3>Choose your Category</h3>
                    <p className="mx-auto h-1 w-12 border-b-[2px] border-blue"></p>
                </div>
                <div className="flex justify-center">
                    <div className='lg:flex lg:flex-wrap grid sm:grid-cols-3 grid-cols-2 gap-10 justify-center'>
                        {categories.map((category) => (
                            <div
                                key={category.name}  // ✅ Use category name as key instead of index
                                className='h-30 w-30 bg-white flex flex-col justify-center items-center hover:shadow-lg cursor-pointer
        transition-all duration-500 ease-in-out transform hover:-translate-y-1'
                                onClick={() => navigate(`/product?category=${category.name}`)}
                            >
                                {category.icon}
                                <p>{category.name}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}
