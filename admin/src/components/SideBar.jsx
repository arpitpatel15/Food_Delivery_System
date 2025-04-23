import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const sidebarcss = 'flex items-center gap-3 border border-black border-r-0 py-2 px-2.5 rounded-tl-[3px] rounded-bl-[3px] cursor-pointer'
  return (
    <div class='w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
        <div class='pt-[50px] pl-[20%] flex flex-col gap-5'>
            <NavLink to={'/add'} >
                <div class={sidebarcss}>
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
                </div>
            </NavLink>
            <NavLink to={'/list'}>
                <div class={sidebarcss}>
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
                </div>
            </NavLink>
            <NavLink to={'/orders'} >
                <div class={sidebarcss}>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar
