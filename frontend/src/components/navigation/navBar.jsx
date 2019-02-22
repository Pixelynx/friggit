import React from 'react';
import { Link } from 'react-router-dom';
// import { SignUp_LogInModal } from '../components/navigation/signUp_LogInModal';

import '../../css/navigation/navBar.css';

const NavBar = ({ loginClick }) => {
  return(
    <>
      <div className='navBar_Container'>
        <nav className='home_icon'>
            <Link to='/'>Friggit</Link>
        </nav>

        <select className='site_nav'>
          <option>Surf</option>
          <option>All</option>
          <option>Original Content</option>
        </select>

        <div className='login_signup_container'>
          <button className='log_in' name='log_in' onClick={loginClick}>Log In</button>
          <button className='sign_up' name='sign_up' >Sign Up</button>
        </div>

        <select className='user_menu'>
          <option></option>
          <option>Log In/Sign Up</option>
        </select>

      </div>
    </>
  )
}

export default NavBar
