import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({url}) => {
  const [list,setList] = useState([])

  const fetchList = async() =>{
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div class='p-6 w-[75%] '>
      <p class='text-xl font-semibold mb-4'>Food List</p>
      <div>
        <div class='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-[12px] px-[15px] border border-[#cacaca] text-[13px] bg-[#f9f9f9] rounded-t-md'>
          <b>Image</b>
          <b>Name</b>
          <b>Catagory</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} class='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-[12px] px-[15px] text-[13px] border border-[#cacaca] hover:bg-gray-50 transition'>
              <img class='w-[70px]' src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.catagory}</p>
              <p>₹{item.price}</p>
              <p onClick={()=>removeFood(item._id)} class='cursor-pointer hover:text-red-700 text-red-600 text-xl'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
