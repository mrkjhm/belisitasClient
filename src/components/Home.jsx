import React from 'react'
import { assets } from '../assets/assets'
import Category from './Category'
import Button from './Button'
import Proudly from './Proudly'
import ProductBanner from './ProductBanner'
import ProductCategory from './ProductCategory'
import FeaturedProduct from './FeaturedProduct'
import LandingComponent from "./LandingComponent.jsx";
import Landing from './Landing.jsx';

export default function Home() {
    return (
        <>
            {/*<div className=' bg-[#EDEDED]  flex justify-center' id='home'>*/}
            {/*    <div className='items-center gap-10 xl:px-70  lg:px-15 md:px-7 sm:px-33 px-[30px] grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 md:gap-20 lg:pb-0 lg:my-20 md:mb-20 mb-20'>*/}
            {/*        <div className='container  flex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>*/}
            {/*            <img src={assets.landing_img2} alt="" />*/}
            {/*        </div>*/}
            {/*        <div className='container mx-auto rounded-2xl flex lg:justify-start items-center'>*/}
            {/*            <div>*/}
            {/*                <div className=''>*/}
            {/*                    <p className='font-bold'>WELCOME TO OUR</p>*/}
            {/*                    <h1 className='font-bold sm:text-[96px] text-[50px] text-[#0D2893] sm:leading-[110px] leading-[70px]'>BELISITAS</h1>*/}
            {/*                    <h2 className='sm:text-[64px] text-[40px] sm:leading-[70px] leading-[50px] sm:mb-5 mb-3'>RATTAN <br />FURNITURE</h2>*/}
            {/*                    <Button text="View Collection" bgColor="#0D2893" link='/product' />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="background custom-padding flex items-center pt-40 md:pb-40 pb-20 border-b border-gray-200 mt-20">*/}
            {/*    <div className=" lg:flex lg:justify-between justify-center items-center gap-20  container mx-auto">*/}
            {/*        <div className="lg:text-start text-center lg:mb-0 mb-20">*/}
            {/*            <p className='font-bold'>WELCOME TO OUR</p>*/}
            {/*            <h1 className='font-bold xl:text-[90px] lg:text-[80px] text-[70px] text-blue sm:leading-[110px] leading-[85px]'>BELISITAS</h1>*/}
            {/*            <h2 className='sm:text-[64px] text-[40px] sm:leading-[70px] leading-[50px] sm:mb-5 mb-7'>RATTAN <br />FURNITURE</h2>*/}
            {/*            <Button text="View Collection" bgColor="#0D2893" link='/product' className="px-5 py-3" />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={assets.landing_img3} alt="" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}




            <Landing />

            <LandingComponent />

            {/*<ProductBanner />*/}
            <Category />
            <FeaturedProduct />
          {/*  <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                <p className='text-white hidden xl:block'>xl screen</p>
                <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                <p className='text-white lg:hidden md:block hidden'>md screen</p>
                <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                <p className='text-white sm:hidden block'>xs screen</p>
            </div>*/}

            <Proudly />
            <ProductCategory />
        </>
    )
}
