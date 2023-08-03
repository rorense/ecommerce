import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
// Importing icons from Material UI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Navbar component
function Navbar() {
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
                    <Link to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link to="/products/3">Children</Link>
                </div>
            </div>
            {/* The middle component */}
            <div className="center">
                <Link to="/">Ryan Store</Link>
            </div>
            {/* The right component */}
            <div className="right">
                <div className="center">
                    <Link to="/"></Link>
                </div>
                <div className="center">
                    <Link to="/">Homepage</Link>
                </div>
                <div className="center">
                    <Link to="/">About</Link>
                </div>
                <div className="center">
                    <Link to="/">Contact</Link>
                </div>
                <div className="center">
                    <Link to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <FavoriteIcon />
                    <div className="cartIcon">
                        <ShoppingCartIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar