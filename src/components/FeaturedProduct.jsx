import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FeaturedProduct() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_URL;
    const swiperRef = useRef(null); // Reference for Swiper instance

    const categorySelection = {
        Chair: 1,
        "Pendant light": 1,
        Basket: 1,
        "Table Lamp": 1,
        Hamper: 3,
        Mirror: 0
    };

    const fetchList = async () => {
        try {
            const response = await axios.get(`${URL}/products/`);
            if (response.data.success) {
                const products = response.data.data;
                setList(selectFeaturedProducts(products));
            } else {
                toast.error("Error fetching products");
            }
        } catch (error) {
            toast.error("Server Error");
            console.error(error);
        }
    };

    const selectFeaturedProducts = (products) => {
        const categoryGroups = {};
        const normalizedCategorySelection = {};
        Object.entries(categorySelection).forEach(([key, value]) => {
            normalizedCategorySelection[key.toLowerCase().trim()] = value;
        });

        products.forEach((product) => {
            const category = product.category.toLowerCase().trim();
            if (!categoryGroups[category]) {
                categoryGroups[category] = [];
            }
            categoryGroups[category].push(product);
        });

        const selectedProducts = [];
        Object.entries(categoryGroups).forEach(([category, items]) => {
            const selectedIndex = normalizedCategorySelection[category];

            if (selectedIndex !== undefined && selectedIndex < items.length) {
                selectedProducts.push(items[selectedIndex]);
            } else {
                selectedProducts.push(items[0]);
            }
        });

        return selectedProducts.slice(0, 6);
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="custom-padding md:py-20 py-15 border-b border-gray-200">
            <div className="container mx-auto relative">
                <div className="mb-10 text-center">
                    <h3 className="mb-4 text-[#666]">Featured Products</h3>
                    <p className="mx-auto h-1 w-12 border-b-[2px] border-blue"></p>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    loop={list.length > 4} // ✅ Enable loop only if more than 4 products
                    className="relative flex justify-center"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >

                    {list.map((item, index) => (  // ✅ Add index here
                        <SwiperSlide key={item._id} className="sm:px-0 px-15 pb-7 pt-5 flex justify-center">
                        <div className="bg-white p-4 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 mx-auto">
                                {item.images?.length > 0 && (
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}  // ✅ Now using index safely
                                        onClick={() => navigate(`/product/${item._id}`)}
                                        className="bg-gray-100 cursor-pointer mb-3 w-full"
                                    />
                                )}
                                <p className="sm:text-2xl text-[20px] font-semibold mb-1">{item.name}</p>
                                <p className="font-bold sm:text-[16px ]text-sm text-blue">
                                    ₱ {item.price}.00
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>


                {/* Custom Navigation Buttons */}
                {/* Previous Button */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute top-1/2 left-2 sm:left-[-40px] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-black hover:bg-gray-200 transition z-10"
                >
                    ❮
                </button>

                {/* Next Button */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute top-1/2 right-2 sm:right-[-40px] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-black hover:bg-gray-200 transition z-10"
                >
                    ❯
                </button>


            </div>
        </div>
    );
}
