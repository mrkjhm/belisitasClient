import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets';

export default function ProductDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    const URL = import.meta.env.VITE_URL;


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${URL}/products/${id}`);
                if (response.data.success) {
                    setProduct(response.data.data);
                    // Directly set the first Cloudinary image as default
                    setSelectedImage(response.data.data.images[0]);
                } else {
                    console.error("Product not found");
                }
            } catch (error) {
                console.error("Server Error");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id, URL])


    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start from bottom
                animate={{ opacity: 1, y: 0 }} // Move up
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className='bg-[#EDEDED] flex justify-center'
            >
                <div className='items-center custom-padding grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30'>
                    {/* Left section: Title and description */}
                    <div className='container mx-auto flex lg:justify-start justify-center items-center'>
                        <div className='lg:py-40 md:py-15 py-10 lg:text-start text-center'>
                            <h1 className='text-5xl font-bold mb-5 text-[#0D2893]'>Product Details</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* Right section: Image */}
                    <div className='flex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
                        <img className='' src={assets.page_img} alt="Page Background" />
                    </div>
                    {/* Product Details Section */}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start from bottom
                animate={{ opacity: 1, y: 0 }} // Move up
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className='custom-padding my-20'
            >
                <div className="container mx-auto">
                    <div className="product-detail grid md:grid-cols-2  grid-cols-1 gap-6 p-10 bg-white">
                        <div>
                            {/* Large Main Image */}
                            <div className="main-image background">
                                <img src={selectedImage} alt={product.name} className="large-image w-full object-cover" />
                            </div>
                            {/* Small Thumbnail Images (Hide Active Image) */}
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className='text-detail space-y-3 mb-8'>
                                <h1 className='font-bold text-3xl'>{product.name}</h1>
                                <p className='font-semibold text-blue-800'>₱ {product.price}</p>
                                <p className='text-[15px]'>{product.description}</p>
                                {/*<p>Category: {product.category}</p>*/}
                                {/* <button className='bg-blue-500 py-2 px-5 rounded-md text-white me-3'>Update</button> */}
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                {product.images
                                    .filter(image => image !== selectedImage) // Exclude active image
                                    .map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="background thumbnail w-[20%] h-full object-cover cursor-pointer transition-transform "
                                            onClick={() => setSelectedImage(image)}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
