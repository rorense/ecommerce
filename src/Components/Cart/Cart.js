import React from 'react';
import "./Cart.css";

import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shoes",
            isNew: true,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1943846/pexels-photo-1943846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "Dress",
            isNew: true,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            oldPrice: 34,
            price: 26,
        },
    ]

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {/* Map over each data */}
        { data.map(item=> (
            <div className="item" key={ item.id }>
                <img src={ item.img } alt="" />
                <div className="details">
                    <h1>{ item.title }</h1>
                    <p>{ item.desc?.substring(0,100) }</p>
                    <div className="price">1 x ${ item.price }</div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart