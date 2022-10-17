import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/amazon.svg';
import './Header.css'
const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav className='hedaer'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/register">Register</Link>
                <p></p>
            </div>
        </nav>
    );
};

export default Header;