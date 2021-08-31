import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, price, name }) => {
  const imageUrl = image && image.url;
  return <article className='product'>
    <img src={imageUrl || defaultImage} alt={name} />
    <h4>{name}</h4>
    <h4>{price || 5.00}</h4>
  </article>;
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// Setting default props
// Product.defaultProps = {
//   name: 'Default',
//   price: 5,
//   image: {
//     url: '/src/assets/default-image.jpeg'
//   }
// }

export default Product;
