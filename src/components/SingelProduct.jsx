import React from 'react';
import { assets, category_list, product_list } from '../assets/assets';

export default function SingleProduct() {
    

    return (
        <>
            <div className='bg-[#EDEDED] flex justify-center'>
                <div className='items-center xl:px-70 lg:px-20 md:px-7 sm:px-5 px-[15px] grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30'>

                    {/* Left section: Title and description */}
                    <div className='container mx-auto rounded-2xl flex lg:justify-start justify-center items-center'>
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
            </div>
            <div className='xl:px-70 lg:px-20 md:px-7 sm:px-5 px-[15px] my-20'>
                <div className="container mx-auto">

                   
                        <div className="grid grid-cols-2 gap-10">
                            <div>

                                <img className="w-full rounded-lg mb-4" src={firstProduct.image} alt={firstProduct.name} />
                            </div>
                            <div className='space-y-2'>

                                <h2 className="text-4xl font-semibold mb-2">{firstProduct.name}</h2>
                                <p className="text-2xl font-semibold">₱ {firstProduct.price}</p>
                                <p className="text-gray-600 mb-2">{firstProduct.description}</p>
                                <p className="text-gray-700">Category: {firstProduct.category}</p>
                            </div>
                            {/* <div>
                                <h2 className='font-bold'>Categories</h2>
                                {category_list.map((item, index)=> {
                                    return (
                                        <div key={index}>
                                            <p className='my-5 hover:font-bold cursor-pointer'>{item.category_name}</p>
                                        </div>
                                    )
                                })}
                            </div> */}
                        </div>
                </div>
            </div>
        </>
    );
}
