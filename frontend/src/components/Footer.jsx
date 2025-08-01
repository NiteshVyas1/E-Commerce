import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 ,y-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
                <p className='text-xl font-meduim mb-5'> GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91- 43439-212</li>
                    <li>forever@gmail.com</li>
                    
                </ul>
            </div>
            
      </div>

      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@forever.com -All Right Reserved</p> 
      </div>
    </div>
  )
}

export default Footer
