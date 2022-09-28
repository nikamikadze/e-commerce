import React from 'react'
import Announcments from '../components/Announcments'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'



const Home = () => {
  return (
    <div>
      <Announcments />
      <Slider />
      <Categories/>
      <Footer />
    </div>
  )
}

export default Home
