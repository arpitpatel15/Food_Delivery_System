import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../context/storeContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(storeContext)
  const navigate = useNavigate()
  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    pincode : "",
    country : "",
    phone : ""
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }
  
  
  const placeOrder = async(e) =>{
    e.preventDefault()
    let orderItems = []
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item
        itemInfo['quantity'] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address : data,
      items : orderItems,
      amount : getTotalCartAmount()+2
    };
    let response = await axios.post(url+'/api/order/place',orderData,{headers : {token}})
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
    }
    else{
      alert('Error')
    }
  }

  const css = 'mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-[4px] outline-orange-500'
  const multifield = 'flex gap-2.5 '

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} action="" class='flex items-start justify-between gap-[50px] mt-25 '>
      <div class='w-full max-w-[max(30%,500px)]'>
        <p class='text-[30px] font-medium mb-[50px]'>Delivery Information</p>
        <div class={multifield}>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} class={css} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} class={css} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} class={css} type="text" placeholder='Email Address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} class={css} type="text" placeholder='Street' />
        <div class={multifield}>
          <input required name='city' onChange={onChangeHandler} value={data.city} class={css} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} class={css} type="text" placeholder='State'/>
        </div>
        <div class={multifield}>
          <input required name='pincode' onChange={onChangeHandler} value={data.pincode} class={css} type="text" placeholder='Pin Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} class={css} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} class={css} type="text" placeholder='Phone' />
      </div>
      <div class='w-full max-w-[max(40%,500px)]'>
      <div class='flex-1 flex flex-col gap-5 '>
          <h2>Cart Totals</h2>
          <div>
            <div class='flex justify-between text-[#555]'>
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr class='h-[1px] bg-[#e2e2e2] border-none my-2.5 mx-0'/>
            <div class='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr class='h-[1px] bg-[#e2e2e2] border-none my-2.5 mx-0'/>
            <div class='flex justify-between text-[#555] '>
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>  
          </div>
          <button type='submit'  class='mt-8 border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 px-0 rounded-[4px] cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
