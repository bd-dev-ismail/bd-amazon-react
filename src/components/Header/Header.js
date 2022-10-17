import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/amazon.svg';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handalLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
      <nav className="hedaer">
        <img src={logo} alt="" />
        {user?.uid && <p style={{color: 'white', fontWeight: 'bold'}}>Welcome {user?.email}</p>}
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About Us</Link>
          {user?.uid ? (
            <>
              {" "}
              <button onClick={handalLogOut}>LogOut</button>
            </>
          ) : (
            <>
              <Link to="/login">LogIn</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    );
};

export default Header;