import React, { useState } from 'react'
import Navbar from './componants/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './componants/Footer'
import LoginPopup from './componants/LoginPopup'
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    { showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div class='w-[80%] m-auto'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes> 
    </div>
    <Footer/>
    </>
  )
}

export default App
