import React from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <div class='flex justify-between items-center py-[8px] px-[4%]'>
      <img class='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <img class='w-10 ' src={assets.profile_image} alt="" />
    </div>
  )
}

export default NavBar
