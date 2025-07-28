import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/ >
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home</p>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home</p>
        </div>
      </div>
      
      <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py20 flwx flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'> Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py20 flwx flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'> Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py20 flwx flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'> Forever was born out of a passion for innovation and a desire to revolutionize the way shop Online to discover explore and purchase a wide range of proucts from the comfort of their home </p>
        </div>

      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
