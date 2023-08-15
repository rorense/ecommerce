import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.css";
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import Category from '../../Components/Categories/Category';
import Contact from '../../Components/Contact/Contact';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type="featured" />
      <Category />
      <FeaturedProduct type="trending" />
      <Contact />
    </div>
  )
}

export default Home