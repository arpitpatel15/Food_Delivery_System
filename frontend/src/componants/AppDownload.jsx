import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' class='m-auto mt-20 text-[max(3vw,15px)] text-center font-medium'>
      <p>For Better Experience Download our App</p>
      <div class='flex justify-center gap-[max(2vw,10px)] '>
        <img class='w-[max(30vw,120px)] max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
        <img class='w-[max(30vw,120px)] max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
