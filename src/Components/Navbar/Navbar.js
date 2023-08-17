import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
// Importing icons from Material UI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

// Navbar component
function Navbar() {

    // Cart component use state hook for opening and closing cart
    const [open, setOpen] = useState(false);

    // Using Redux to keep track of the quantity in the cart
    const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
        <div className='wrapper'>
            {/* The Left component */}
            <div className='left'>
                <div className="item">
                    <img src='/img/flag.png' alt=""/>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>NZD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/3">Children</Link>
                </div>
            </div>
            {/* The middle component */}
            <div className="center">
                <Link className="link" to="/">Ryan Store</Link>
            </div>
            {/* The right component */}
            <div className="right">
                <div className="item">
                    <Link className="link" to="/"></Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <FavoriteIcon />
                    {/* On click action for cart */}
                    <div className="cartIcon" onClick={ ()=> setOpen(!open) }>
                        <ShoppingCartIcon />
                        <span>{ products.length }</span>
                    </div>
                </div>
            </div>
        </div>
        {/* If open is true, show Cart */}
        { open && <Cart /> }
    </div>
  )
}

export default Navbar