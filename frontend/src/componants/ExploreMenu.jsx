import React from 'react'
import {menu_list} from '../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id='explore-menu' class='flex flex-col gap-5 '>
      <h1 class='text-[#262626] font-medium '>Explore our Menu</h1>
      <p class='max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a deletable array of dishes. Our mission is to setisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
      <div class='flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-scroll   '>
        {
          menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev => prev === item.menu_name ? "All":item.menu_name)} key={index}>
                <img  class={`w-[7.2vw] min-w-20 cursor-pointer rounded-[50%] transition-all duration-200 
                ${category ===item.menu_name ? "border-[4px] border-orange-500  p-[2px]" : ""}`} src={item.menu_image} alt="" />
                <p class='mt-2.5 text-[#747474] font-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr class='my-2.5 mx-0 h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu
