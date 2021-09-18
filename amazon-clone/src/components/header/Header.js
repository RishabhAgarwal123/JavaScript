import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header__logo" />
            {/* Search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* Header nav */}
            <div className="header__nav">
                <div className="header__nav-item">
                    <span className="header__nav-item-1">Hello Guest</span>
                    <span className="header__nav-item-2">Sign In</span>
                </div>
                <div className="header__nav-item">
                    <span className="header__nav-item-1">Returns</span>
                    <span className="header__nav-item-2">& Orders</span>
                </div>
                <div className="header__nav-item">
                    <span className="header__nav-item-1">Your</span>
                    <span className="header__nav-item-2">Prime</span>
                </div>
                <div className='header__nav-cart'>
                    <ShoppingCartIcon />
                    <span className="header__itemCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;