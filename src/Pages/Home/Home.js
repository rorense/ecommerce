import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.css";
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import Category from '../../Components/Categories/Category';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type="Featured" />
      <Category />
      <FeaturedProduct type="Trending" />
    </div>
  )
}

export default Home