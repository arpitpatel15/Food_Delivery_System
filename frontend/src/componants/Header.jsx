import React from 'react'

const Header = () => {
  return (
    <div class='h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat relative bg-contain'>
      <div class='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
        <h2 class='font-medium text-white text-[max(4.5vw,22px)]'>Order your Favourite food here</h2>
        <p class='text-white font-[1vw]'>Discover the best food & drinks in Ahmedabad</p>
        <button class='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] cursor-pointer'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
