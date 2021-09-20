import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css';
import { useGlobalContext } from '../../StateProvider';

function Header() {
    const { cart } = useGlobalContext();
    return (
        <div className='header'>
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header__logo" />
            </Link>
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
                <Link to="/checkout">
                    <div className='header__nav-cart'>
                        <ShoppingCartIcon />
                        <span className="header__itemCount">{cart.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;