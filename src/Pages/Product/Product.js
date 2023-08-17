import React, { useState } from 'react';
import "./product.css"
// Importing icons from MUI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import Cart from '../../Components/Cart/Cart';

// For individual product page
function Product() {

  // Use state for the selected image to enlarge
  const [selectedImg, setSelectedImg] = useState("img");

  // Use state for quantity
  const [quantity, setQuantity] = useState(1);

  // Cart appears when add to cart is clicked
  const [cartOpen, setCartOpen] = useState(false);

  const id = useParams().id;

  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );

  const dispatch = useDispatch()

  return (
    <div className='product'>
      { loading ? (
          "loading") : (
          <>
          <div className="left">
            <div className="images">
              <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url } alt="" onClick={ e=>setSelectedImg("img") }/>
              <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url } alt="" onClick={ e=>setSelectedImg("img2") }/>
            </div>
            <div className="mainImg">
              <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url } alt="" />
            </div>
          </div>

          <div className="right">
            <h1>{ data?.attributes?.title }</h1>
            <span className='price'>${ data?.attributes?.price }</span>
            <p>{ data?.attributes?.desc }</p>
            <div className="quantity">
              <button onClick={ ()=>setQuantity((prev)=>(prev === 1 ? 1: prev-1)) }>-</button>
              { quantity }
              <button onClick={ ()=>setQuantity((prev)=>prev+1) }>+</button>
            </div>
            {/* Add button with redux */}
            <button className="add" onClick={()=> dispatch(addToCart({
              // Information to send
                id: data.id,
                title: data.attributes.title,
                desc:data.attributes.desc,
                img:data.attributes.img.data.attributes.url,
                price: data.attributes.price,
                quantity,
              }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <hr />
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Shoes</span>
              <span>Tag: Women, Men, Shoes</span>
            </div>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div></> )}
    </div>
  )
}

export default Product