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
            <Landing />
            <LandingComponent />
            <Category />
            <FeaturedProduct />
            <Proudly />
            <ProductCategory />
          {/*  <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                <p className='text-white hidden xl:block'>xl screen</p>
                <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                <p className='text-white lg:hidden md:block hidden'>md screen</p>
                <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                <p className='text-white sm:hidden block'>xs screen</p>
            </div>*/}
        </>
    )
}
