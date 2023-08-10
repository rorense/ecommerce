import React from 'react';
import "./Category.css"
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/5947552/pexels-photo-5947552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button><Link className="link" to="/products/1">Sale</Link></button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button><Link className="link" to="/products/1">Women</Link></button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button><Link className="link" to="/products/1">New Season</Link></button></div>
        </div>
        <div className="col">
            <div className="row">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <button><Link className="link" to="/products/1">Men</Link></button>
                    </div>
                    <div className="row">
                        <img src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <button><Link className="link" to="/products/1">Accessories</Link></button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Category