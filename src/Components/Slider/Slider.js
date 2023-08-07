import React, { useState } from 'react';
import "./Slider.css";
// Importing from MUI
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

// The slider component in the home page
function Slider() {
    // State Hooks
    const [currentSlide, setCurrentSlide] = useState(0);

    // Picture data stored as an array
    const data = [
        "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];

    // If the button is pressed, sets the data to previous picture
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    // If the button is pressed, sets the data to next picture
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='slider'>
        {/* Inline transition styling */}
        <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={ data[0] } alt=""/>
            <img src={ data[1] } alt=""/>
            <img src={ data[2] } alt=""/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}><WestIcon /></div>
            <div className="icon" onClick={nextSlide}><EastIcon /></div>
        </div>
    </div>
  )
}

export default Slider