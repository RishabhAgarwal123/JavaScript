import React from 'react';
import './CartItem.css';

function CartItem({ title, image, price, rating }) {
    console.log(title)
    return (
        <div className="cart__product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, index) => {
                        return <p key={index}>⭐</p>
                    })}
                </div>
            </div>
            <img src={image} alt={image} />
            <button>Remove from cart</button>
        </div>
    )
}

export default CartItem;
