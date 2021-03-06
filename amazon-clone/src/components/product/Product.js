import React from 'react';
import { useGlobalContext } from '../../StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    const { addToCart } = useGlobalContext();
    const item = {
        title, image, price, rating
    }

    return (
        <div className="product">
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
            <button onClick={() => addToCart(item)}>Add To Cart</button>
        </div>
    )
}

export default Product
