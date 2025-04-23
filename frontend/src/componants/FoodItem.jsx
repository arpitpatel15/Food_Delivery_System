import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { storeContext } from '../context/storeContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(storeContext)
  return (
    <div class='w-[100%] m-auto rounded-[15px] shadow-[0_0_10px_#00000015] transition-all duration-300 animate-fadeIn'>
      <div class='relative '>
        <img class='w-full rounded-[15px_15px_0_0]' src={url+"/images/"+image} alt="" />
        {
          !cartItems[id] ? <img class='w-[35px] absolute bottom-[15px] right-[15px] rounded-[50%] cursor-pointer' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> : 
          <div class='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img class='w-[30px] cursor-pointer' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img class='w-[30px] cursor-pointer' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div class='p-5 '>
        <div class='flex justify-between items-center mb-[10px]'>
            <p class='text-[20px] font-medium'>{name}</p>
            <img class='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p class='text-[#676767] text-[12px]'>{description}</p>
        <p class='text-red-500 text-[22px] font-medium my-2.5 mx-0'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
