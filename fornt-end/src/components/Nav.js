import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    console.log('done');
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <img
        alt='logo'
        className='logo'
        src='https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png' />
      {auth ? (
        <ul className='nav-ul'>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          {/* <li><Link to="/update">Update Products</Link></li> */}
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/login">Logout  ({JSON.parse(auth).name})</Link></li>
        </ul>
      ) : (
        <ul className='nav-ul nav-right'>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
