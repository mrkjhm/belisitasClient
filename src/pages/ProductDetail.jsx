import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import {toast} from "react-toastify";

export default function ProductDetail() {
    const { id } = useParams(); // Get the current product ID from URL
    const [categories, setCategories] = useState([]);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]); // Store related products

    const navigate = useNavigate();

    const URL = import.meta.env.VITE_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${URL}/products/${id}`);
                if (response.data.success) {
                    const fetchedProduct = response.data.data;
                    setProduct(fetchedProduct);
                    setSelectedImage(fetchedProduct.images[0]?.url || "");

                    // Fetch related products (excluding the current product)
                    fetchRelatedProducts(fetchedProduct.category?._id, fetchedProduct._id);
                } else {
                    console.error("Product not found");
                }
            } catch (error) {
                console.error("Server Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id, URL]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${URL}/categories/`);
                if (response.data.success) {
                    setCategories(response.data.categories);
                }
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        fetchCategories();
    }, [URL]);

    // Fetch related products
    const fetchRelatedProducts = async (categoryId, currentProductId) => {
        try {
            const response = await axios.get(`${URL}/products`);
            if (response.data.success) {
                const allProducts = response.data.data;

                // Filter products: same category, exclude current product
                const related = allProducts.filter(
                    (item) =>
                        item.category?._id === categoryId &&
                        String(item._id) !== String(currentProductId) // Ensure current product is excluded
                );

                setRelatedProducts(related);
            }
        } catch (error) {
            console.error("Error fetching related products", error);
        }
    };



    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
            {/* Product Details Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="bg-[#EDEDED] flex justify-center"
            >
                <div className="items-center custom-padding grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30">
                    <div className="container mx-auto flex lg:justify-start justify-center items-center">
                        <div className="lg:py-40 md:py-15 py-10 lg:text-start text-center">
                            <h1 className="text-5xl font-bold mb-5 text-[#0D2893]">
                                Product Details
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:px-0 sm:px-33 px-[15px]">
                        <img className="" src={assets.page_img} alt="Page Background" />
                    </div>
                </div>
            </motion.div>

          {/*  <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                <p className='text-white hidden xl:block'>xl screen</p>
                <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                <p className='text-white lg:hidden md:block hidden'>md screen</p>
                <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                <p className='text-white sm:hidden block'>xs screen</p>
            </div>*/}
            {/* Product Detail Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="custom-padding my-20"
            >
                <div className="container mx-auto">
                    <div className="product-detail grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-5">
                        <div>
                            <div className="main-image bg-[#f2f2f2] border border-gray-200 mb-5">
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className="large-image w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                {product.images
                                    .filter((img) => img.url !== selectedImage)
                                    .map((img, index) => (
                                        <img
                                            key={index}
                                            src={img.url}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="bg-[#f2f2f2] border border-gray-200 thumbnail w-[20%] h-full object-cover cursor-pointer transition-transform"
                                            onClick={() => setSelectedImage(img.url)}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="flex md:flex-col flex-col-reverse md:gap-0 gap-10 justify-between">
                            <div className="text-detail space-y-5 mb-8">
                                <h1 className="font-bold text-4xl mb-6">{product.name}</h1>
                                <p className="font-bold text-2xl">
                                    <span className="bg-blue px-5 py-2 rounded text-white">
                                        ₱ {product.price}
                                    </span>
                                </p>
                                <p className="text-xl">
                                    <span className="text-sm">Details:</span> <br /> {product.description}
                                </p>
                                <p>
                                    <span className="text-sm">Category:</span> <br />{" "}
                                    {product.category?.name || "No Category"}
                                </p>
                                <p>
                                    <span className="text-sm">Code:</span> <br />
                                    <span className="font-bold">{product.code}</span>
                                </p>
                            </div>
                        </div>
                        <div className="lg:block hidden">
                            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                            <ul className="space-y-7">
                                {categories?.length > 0 ? (
                                    categories.map((category) => (
                                        <li
                                            key={category.name}
                                            className="cursor-pointer hover:font-bold transition"
                                            onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)}
                                        >
                                            {category.name}
                                        </li>
                                    ))
                                ) : (
                                    <p>No categories found.</p>
                                )}
                            </ul>

                        </div>
                    </div>

                    {/* Related Products Section */}
                    <div className="md:mt-20 my-10">
                        <h2 className="text-4xl font-bold mb-7">Related Products</h2>
                        {relatedProducts.length > 0 ? (
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                                {relatedProducts.map((item) => (
                                    <div key={item.name} className="">
                                        <img
                                            src={item.images[0]?.url || assets.placeholder}
                                            alt={item.name}
                                            className="w-full  object-cover mb-3 bg-gray-200"
                                            onClick={() => navigate(`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
                                        />
                                        <h3 className="font-bold text-xl">{item.name}</h3>
                                        <div className="flex justify-between">

                                        <p className="text-gray-600 font-semibold">₱ {item.price}</p>
                                        <p className="text-gray-600 text-sm">Code: {item.code}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No related products found.</p>
                        )}
                    </div>
                    <div className="lg:hidden block pt-10">
                        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                        <ul className="space-y-7">
                            {categories?.length > 0 ? (
                                categories.map((category) => (
                                    <li
                                        key={category.name}
                                        className="cursor-pointer hover:font-bold transition"
                                        onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)}
                                    >
                                        {category.name}
                                    </li>
                                ))
                            ) : (
                                <p>No categories found.</p>
                            )}
                        </ul>

                    </div>
                </div>
            </motion.div>
        </>
    );
}
