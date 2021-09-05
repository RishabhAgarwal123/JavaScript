import React from 'react'
import { FaHeart } from 'react-icons/fa';
const Photo = (photo) => {
  const { alt_description, urls: { regular }, likes, user: { name, portfolio_url, profile_image: { medium } } } = photo;
  return <article className='photo'>
    <img src={regular} alt={alt_description} />
    <div className='photo-info'>
      <div>
        <h4>{name}</h4>
        <p>{likes} <span><FaHeart /> </span> </p>
      </div>
      <a href={portfolio_url} >
        <img src={medium} alt={name} className='user-img' />
      </a>
    </div>
  </article>
}

export default Photo
