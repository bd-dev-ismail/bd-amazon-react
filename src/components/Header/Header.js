import React from 'react';
import logo from '../../images/amazon.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='hedaer'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;