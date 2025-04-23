import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../context/storeContext'
import axios from 'axios'
import { assets } from '../assets/assets'

const MyOrders = () => {

    const {url,token} = useContext(storeContext)
    const [data,setData] = useState([])
    
    const fetchOrders = async() =>{
        const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}})
        setData(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])
  return (
    <div class='my-[50px] mx-0'>
      <h2 class='font-bold'>My Orders</h2>
      <div class='flex flex-col gap-5 mt-[30px]'>
        {
            data.map((order,index)=>{
                return(
                    <div key={index} class='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-2.5 px-5 text-[#454545] border border-orange-500'>
                        <img class='w-[50px]' src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name + " x " + item.quantity
                            }
                            else{
                                return item.name + " x " + item.quantity + ","
                            }
                        })}</p>
                        <p>₹{order.amount}.00</p>
                        <p>Items : {order.items.length}</p>
                        <p><span class='text-orange-500'>&#x25cf;</span> <b class='font-medium text-[#454545]'>{order.status}</b></p>
                        <button onClick={fetchOrders} class='border-none py-3 px-0 rounded-[4px] text-[#454545] bg-[#ffe1e1] cursor-pointer'>Track Order</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default MyOrders
