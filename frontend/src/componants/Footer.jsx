import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='footer' class='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-[20px] px-[8vw] pt-[80px] mt-25'>
      <div class='w-full grid grid-cols-[2fr_1fr_1fr] gap-20'>
        <div class='flex flex-col items-start gap-5'>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium itaque necessitatibus quisquam voluptates facilis sapiente, mollitia illum repellendus reiciendis nesciunt dignissimos ipsum quas fugit et iste. Repellendus, sint cum.</p>
          <div class='flex flex-row '>
            <img class='w-10 mr-[15px]' src={assets.twitter_icon} alt="" />
            <img class='w-10 mr-[15px]' src={assets.facebook_icon} alt="" />
            <img class='w-10 mr-[15px]' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div class='flex flex-col items-start gap-5'>
          <h2 class='text-white'>COMPANY</h2>
          <ul>
            <li class='mb-2.5 cursor-pointer'>Home</li>
            <li class='mb-2.5 cursor-pointer'>About us</li>
            <li class='mb-2.5 cursor-pointer'>Delivery</li>
            <li class='mb-2.5 cursor-pointer'>Privacy policy</li>
          </ul>
        </div>
        <div class='flex flex-col items-start gap-5'>
          <h2 class='text-white'>GET IN TOUCH</h2>
          <ul>
            <li>+91-5487452130</li>
            <li>contect@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr class='w-full h-[2px] my-5 mx-0 bg-gray-300 border-none' />
      <p>&#169; Copyright 2025 - All Rights Reserved </p>
    </div>
  )
}

export default Footer
