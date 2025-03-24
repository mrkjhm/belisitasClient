import React from 'react'
import { motion } from 'framer-motion'

import { assets } from '../assets/assets'


export default function About() {

  return (
    <>

      <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move up
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className=' bg-[#EDEDED]  flex justify-center'>
        <div className='items-center custom-padding grid lg:grid-cols-2 md:grid-rows-1  lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30'>
          <div className='container mx-auto rounded-2xl flex lg:justify-start justify-center items-center'>
            <div className='lg:py-40 md:py-15 py-10 lg:text-start text-center'>
              <h1 className='text-5xl font-bold mb-5 text-[#0D2893]'>About Us</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='flex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
            <img src={assets.page_img} alt="" />
          </div>
        </div>
      </motion.div>

      {/* start */}
      <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move up
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className='custom-padding text-center  py-20  w-full overflow-hidden' id='contact'>


        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10'>
          <div className='flex justify-center items-center mb-10'>
            <div className='text-start max-w-2xl mx-auto text-gray-500 '>
              <h2 className='flex font-semibold text-5xl mb-5'>Welcome to Belisitas Rattan Furnitures</h2>
              <div className='space-y-5'>
                <p className='flex flex-wrap'>
                  Provide best quality  of Furniture and we always focus on quality, technology and try to make our customer happy
                </p>
                <p>
                  Belisitas is a DIRECT manufacturer of Rattan Furniture and Home Decor. Based in the Philippines, we pride ourselves on producing high-quality products using traditional techniques, showcasing talented craftsmanship, and offering the LOWEST deals.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel hendrerit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis sed metus quis vulputate.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center sm:px-5 px-[15px]'>

            {/* <img src={assets.chair_3} alt="" /> */}
            <img className='rounded-2xl' src={assets.banner_img1} alt="" />
          </div>
        </div>
      </motion.div>




      {/* Screen Sizes */}
      {/* <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
        <p className='text-white hidden xl:block'>xl screen</p>
        <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
        <p className='text-white lg:hidden md:block hidden'>md screen</p>
        <p className='text-white md:hidden sm:block hidden'>sm screen</p>
        <p className='text-white sm:hidden block'>xs screen</p>
      </div> */}
    </>
  )
}
