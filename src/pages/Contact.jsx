import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'

export default function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b23a059-98bf-4c40-bea4-01d67ce111d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move up
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className=' bg-[#EDEDED]  flex justify-center'>
        <div className='justify-between custom-padding grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30'>

          <div className='rounded-2xl flex lg:justify-start justify-center items-center'>
            <div className='lg:py-40 md:py-15 py-10 lg:text-start text-center'>
              <h1 className='text-5xl font-bold mb-5 text-[#0D2893]'>Contact Us</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='flex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
            <img src={assets.page_img} alt="" />
          </div>
        </div>
      </motion.div>
      {/* Screen sizes  */}
      {/* <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
        <p className='text-white hidden xl:block'>xl screen</p>
        <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
        <p className='text-white lg:hidden md:block hidden'>md screen</p>
        <p className='text-white md:hidden sm:block hidden'>sm screen</p>
        <p className='text-white sm:hidden block'>xs screen</p>
      </div> */}


      <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move up
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className='text-center py-20 lg:px-32 w-full overflow-hidden px-10' id='contact'>
        {/*<h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-[#0D2893]'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-gray-500 max-w-85 text-center mx-auto'>Transform Your Space with Handcrafted Rattan.
          Contact Us Today!</p>*/}
        <div className='flex md:flex-row flex-col md:gap-30 gap-5  justify-center'>
          <div className='text-center space-y-3'>
            <div className='font-bold'>Phone</div>
            <div className='text-[20px]'>+63 091 2345 678</div>
          </div>
          <div className='text-center space-y-3'>
            <div className='font-bold'>Email</div>
            <div className='text-[20px]'>sample@gmail.com</div>
          </div>
          <div className='text-center space-y-3'>
            <div className='font-bold'>Facebook</div>
            <div className='text-[20px]'>Nameoffacebook</div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col lg:gap-20 justify-center mt-20'>
          <div className='  rounded-2xl flex items-center justify-center md:mb-0 mb-15'>

            <img src={assets.banner_img1} alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-500 '>
              <h2 className='flex font-semibold text-2xl mb-5'>Leave a comments</h2>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left md:mb-0 mb-2'>
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Name*' required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Email*' required />
                </div>
              </div>
              <div className='flex flex-wrap my-2'>
                <div className='w-full md:w-1/2 text-left md:mb-0 mb-2'>
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="number" name='Phone' placeholder='Phone' />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Subject' placeholder='Subject*' required />
                </div>
              </div>
              <div className='my-2 text-left'>
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" id="" placeholder='Message*' required></textarea>
              </div>
              <button className='bg-[#0D2893] text-white py-2 px-12 flex'>{result ? result : "Send Message"}</button>
            </form>
          </div>
        </div>
      </motion.div>






    </>

  )
}
