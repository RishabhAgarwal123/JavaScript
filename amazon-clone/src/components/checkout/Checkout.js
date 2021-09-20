import React from 'react';
import { useGlobalContext } from '../../StateProvider';
import CartItem from '../CartItem/CartItem';
import SubTotal from '../subtotal/SubTotal';
import './Checkout.css';

function Checkout() {
    const { cart } = useGlobalContext();
    console.log(cart);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg" alt="Offer" />
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                </div>
                {cart.length > 0 ? <div>
                    {
                        cart.map((item, index) => {
                            return <CartItem key={index} {...item} />
                        })
                    }
                </div> : <h1>Your Cart is Empty</h1>}
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
