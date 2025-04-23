import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { storeContext } from '../context/storeContext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(storeContext)

  const [currState,setCurrState] = useState("Login")
  const [data,setData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setData((data)=>({...data,[name]:value}))
  }

  const onLogin = async(e) =>{
    e.preventDefault()
    let newUrl = url
    if(currState === 'Login'){
      newUrl+= '/api/user/login'
    }
    else{
      newUrl+= '/api/user/register'
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div class='absolute z-[1] w-full h-full bg-[#00000090] grid'>
      <form onSubmit={onLogin} class='place-self-center width-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] font-[14px] animate-[fadeIn_1.5s_ease-in-out_forwards]'>
        <div class='flex justify-between items-center text-black text-2xl'>
          <h2>{currState}</h2>
          <img class='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div class='flex flex-col gap-5'>
          {currState === 'Login'?<></>:
          <input name='name' onChange={onChangeHandler} value={data.name} class='outline-none p-2.5 border border-black rounded-[4px]' type="text" placeholder='Enter Name' required/>}
          <input name='email' onChange={onChangeHandler} value={data.email} class='outline-none p-2.5 border border-black rounded-[4px]' type="email" placeholder='Enter Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} class='outline-none p-2.5 border border-black rounded-[4px]' type="password" placeholder='Enter Password' />
        </div>
        <button type='submit' class='border-none p-2.5 rounded-[4px] text-white bg-orange-600 font-[15px] cursor-pointer'>{currState==='Sign Up' ? "Create Account" : "Login"}</button>
        <div class='flex items-start gap-[8px] mt-[-15px]'>
          <input class='mt-[6px]' type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privecy policy. </p>
        </div>
        {
          currState === 'Login' ? 
          <p>Create a new Account? <span class='text-orange-500 font-medium cursor-pointer' onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
          : 
          <p>Already have an Account? <span class='text-orange-500 font-medium cursor-pointer' onClick={()=>setCurrState('Login')}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
