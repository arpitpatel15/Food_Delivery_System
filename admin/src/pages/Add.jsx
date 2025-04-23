import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {

    const [image,setImage] = useState(false)
    const [data,setData] = useState({
        name : "",
        description : "",
        price : "",
        catagory : "Salad"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("catagory",data.catagory)
        formData.append("image",image)

        const response = await axios.post(`${url}/api/food/add`,formData)
        if(response.data.success){
            setData({
                name : "",
                description : "",
                price : "",
                catagory : "Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }
  return (
    <div class='w-[70%] ml-[max(5vw,25px)] mt-13 text-[#6d6d6d] text-[16px]'>
      <form class='gap-5 flex flex-col' onSubmit={onSubmitHandler}>
        <div class='gap-5 flex flex-col '>
            <p>Upload Image</p>
            <label htmlFor="image">
                <img class='w-40' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>
        <div class='gap-5 flex flex-col w-[max(40%,280px)]'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} class='p-2.5' type="text" name="name" placeholder='Type Here' />
        </div>
        <div class='gap-5 flex flex-col w-[max(40%,280px)]'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} class='p-2.5' name="description" rows="6" placeholder='Write content here' ></textarea>
        </div>
        <div class='flex gap-8'>
            <div>
                <p>Product catagory</p>
                <select onChange={onChangeHandler} class='max-w-30 p-2.5' name="catagory" id="">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodels">Noodels</option>
                </select>
            </div>
            <div>
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} class='max-w-30 p-2.5' type="number" name='price'  />
            </div>
        </div>
        <button class='max-w-30 border-none p-2.5 bg-black text-white cursor-pointer rounded-[4px]' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add
