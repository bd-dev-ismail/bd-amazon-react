import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/amazon.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='hedaer'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    );
};

export default Header;