// TopBar.js
import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

export default function TopBar({ user, onLogout }) {
  return (
    <div className='top'>
      <div className='topLeft'>
        {/* Icons here */}
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          <li className='topListItem'>
            {user ? <span onClick={onLogout}>LOGOUT</span> : <Link to="/login" className='link'>LOGIN</Link>}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link to="/settings" className='link'>
            <img className='topImage' src="https://i.pinimg.com/736x/4f/8b/b2/4f8bb2aeb0a799227ce71acdc01129d7.jpg" alt="profile pic"></img>
          </Link>
        ) : (
          <ul className='topList'>
            <li className="topListItem">
              <Link to="/login" className='link'>LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/Register" className='link'>REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
