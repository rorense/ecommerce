import React from 'react';
import "./FeaturedProduct.css";
import Card from '../Card/Card';

function FeaturedProduct({ type }) {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1943846/pexels-photo-1943846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "",
            isNew: true,
            oldPrice: 34,
            price: 26,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
    ]

  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1>{ type } Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="bottom">
            { data.map(item =>(
                <Card item={ item } key={ item.id } />
            ) )}
        </div>
    </div>
  )
}

export default FeaturedProduct