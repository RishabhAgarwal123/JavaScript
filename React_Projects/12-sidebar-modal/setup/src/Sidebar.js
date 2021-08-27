import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { socials, links } from './data'

const Sidebar = () => {
  return <aside className={`sidebar`}>
    <div className='sidebar-header'>
      <img src={logo} alt='Coding Addiicts' />
      <button className='close-btn'>
        <FaTimes />
      </button>
    </div>

    <ul className='links'>
      {
        links.map((link) => {
          const { id, url, text, icon } = link;
          return <li key={id}>
            <a href={url}> {icon} {text}</a>
          </li>
        })
      }
    </ul>

    <ul className='social-icons'>
      {
        socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })
      }
    </ul>
  </aside>
}

export default Sidebar
