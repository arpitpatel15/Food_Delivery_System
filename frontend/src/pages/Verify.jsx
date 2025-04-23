import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { storeContext } from '../context/storeContext'
import axios from 'axios'

const Verify = () => {

    const [searchParams,setserachParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    const navigate = useNavigate()
    const {url} = useContext(storeContext)

    const verifyPayment = async() =>{
        const response = await axios.post(url+'/api/order/verify',{success,orderId})
        if(response.data.success){
            navigate('/myorders')
        }
        else{
            navigate('/')
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div class='min-h-[60vh] grid'>
        <div style={{animation: 'rotate 1s linear infinite'}} class='w-25 h-25 place-self-center border-[5px] border-[#bdbdbd] border-t-orange-500 rounded-[50%] ' >

        </div>
    </div>
  )
}

export default Verify
