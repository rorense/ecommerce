import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.css";
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type="Featured" />
      <FeaturedProduct type="Trending" />
    </div>
  )
}

export default Home