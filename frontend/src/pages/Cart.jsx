import React, { useContext } from 'react'
import { storeContext } from '../context/storeContext'
import {useNavigate} from 'react-router-dom'
const Cart = () => {

  const {food_list,cartItems,removeFromCart,getTotalCartAmount,url} = useContext(storeContext)
  const navigate = useNavigate()
  return (
    <div class='mt-25 '>
      <div>
        <div class='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr class='h-[1px] bg-[#e2e2e2] border-none' />
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (
                <div key={index}>
                  <div class='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black text-[max(1vw,12px)] my-2.5 mx-0'>
                  <img class='w-[50px]' src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price*cartItems[item._id]}</p>
                  <p class='cursor-pointer' onClick={()=>removeFromCart(item._id)}><i class="fa-solid fa-xmark text-red-500"></i></p>
                  </div>
                  <hr class='h-[1px] bg-[#e2e2e2] border-none' />
                </div>
                
              )
              
            }
          })
        }
      </div>
      <div class='mt-20 flex justify-between gap-[max(12vw,20px)]'>
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
          <button onClick={()=>navigate('/order')} class='border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 px-0 rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div class='flex-1'>
          <div>
            <p class='text-[#555]'>If You have a propmo code, Enter it here</p>
            <div class='mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input class='bg-transparent border-none outline-none pl-2.5' type="text" placeholder='Promo code'/>
              <button class='w-[max(10vw,150px)] py-3 px-[5px] bg-black border-none text-white rounded-[4px] cursor-pointer'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
