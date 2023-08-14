import React, { useState } from 'react';
import "./product.css"
// Importing icons from MUI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { Add } from '@mui/icons-material';

// For individual product page
function Product() {

  // Use state for the selected image to enlarge
  const [selectedImg, setSelectedImg] = useState(0);

  // Use state for quantity
  const [quantity, setQuantity] = useState(0);

  const img = [
    "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ]

  return (
    <div className='product'>

      <div className="left">
        <div className="images">
          <img src={ img[0] } alt="" onClick={ e=>setSelectedImg(0) }/>
          <img src={ img[1] } alt="" onClick={ e=>setSelectedImg(1) }/>
        </div>
        <div className="mainImg">
          <img src={ img[selectedImg] } alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod laudantium. Quos impedit dolores odit eius illo? 
          Labore nihil sapiente quasi perspiciatis numquam explicabo ipsa et consequuntur, optio molestias quod?</p>
        <div className="quantity">
          <button onClick={ ()=>setQuantity((prev)=>(prev === 0 ? 0: prev-1)) }>-</button>
          { quantity }
          <button onClick={ ()=>setQuantity((prev)=>prev+1) }>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default Product