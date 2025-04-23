import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../../frontend/src/assets/assets'
const Orders = ({url}) => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async() =>{
    const response  = await axios.get(url+'/api/order/list')
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data);  
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async(e,orderId) =>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:e.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div  class='p-6 w-[75%] '>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order,index)=>(
            <div key={index} class='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border border-orange-500 p-5 my-[30px] mx-0 text-[14px] text-[#505050]'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p class='font-medium '>{order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ","
                  }
                })}</p>
                <p class='font-medium mt-[30px] mb-[5px]'>{order.address.firstName + " " + order.address.lastName}</p>
                <div class='mb-2.5 '>
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.pincode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>₹{order.amount}</p>
              <select onChange={(e) => statusHandler(e,order._id)} value={order.status} class='bg-[#ffe8e4] border border-orange-500 w-[max(10vw,120px)] p-2.5 outline-none rounded-[3px]'>
                <option value="Food Processing">Food processing</option>
                <option value="Out For Delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
