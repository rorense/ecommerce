import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

function Cart() {

    // Grabbing products from reducer
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();
    
    // Function for calculating total price in cart
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }

    // // Connecting to Stripe API payment
    // const stripePromise = loadStripe('pk_test_51Nfv4pI7uwQoieYNfUuKtcmWZlO2NRtE2hg7jFzJElY7OBGkhSBKFyKMbmvJk9I1vs1g7yYYjBE8qDPqv45wkoSe0053d1YlEu')
    // const handlePayment = async() => {
    //     try {
    //         const stripe = await stripePromise;
    //         const res = await makeRequest.post("/orders", {
    //             products,
    //         });

    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id,
    //         });

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {/* Map over each data */}
        { products.map(item=> (
            <div className="item" key={ item.id }>
                <img src={ process.env.REACT_APP_UPLOAD_URL + item.img } alt="" />
                <div className="details">
                    <h1>{ item.title }</h1>
                    <p>{ item.desc?.substring(0,100) }</p>
                    <div className="price">{ item.quantity } x ${ item.price }</div>
                </div>
                <DeleteIcon className='delete' onClick={ ()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${ totalPrice() }</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={ ()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart