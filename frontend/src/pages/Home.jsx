import React, { useState } from 'react'
import Header from '../componants/Header'
import ExploreMenu from '../componants/ExploreMenu'
import FoodDisplay from '../componants/FoodDisplay'
import AppDownload from '../componants/AppDownload'

const Home = () => {

  const [category,setCategory] = useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
