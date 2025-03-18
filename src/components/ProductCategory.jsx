import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { product_category } from "../assets/assets";

export default function ProductCategory() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="xl:px-70 lg:px-20 md:px-7 sm:px-20 px-[30px] md:my-20 my-10">
            <div className="container mx-auto">
                <div className="grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {product_category.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 flex flex-col items-start hover:shadow-xl transition-all duration-600 ease-in-out transform hover:-translate-y-1"
                        >
                            <div
                                className="relative w-full flex justify-center cursor-pointer mb-3"
                                // onMouseEnter={() => setHoveredIndex(index)}
                                // onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => navigate(`/product?category=${item.product_category_name}`)}
                            >
                                {/* Base Image */}
                                <img
                                    className={`px-10 transition-opacity duration-500 ease-in-out -mt-10 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                                    src={item.product_category_image}
                                    alt={item.product_category_name}
                                />
                                {/* Hover Image */}
                                <img
                                    className={`absolute top-0 px-10 transition-all duration-500 ease-in-out  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                                    src={item.hoverImage}
                                    alt={item.product_category_name}
                                />
                            </div>
                            <p className="mb-2 sm:text-2xl text-[20px] font-semibold">
                                {item.product_category_name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
