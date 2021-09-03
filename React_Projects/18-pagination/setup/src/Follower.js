import React from 'react'

const Follower = ({ login, avatar_url, html_url }) => {
  return (<article className='card'>
    <img src={avatar_url} alt={login} />
    <h4>{login}</h4>
    <a href={html_url} className='btn'>View Profile</a>
  </article>)
}

export default Follower
