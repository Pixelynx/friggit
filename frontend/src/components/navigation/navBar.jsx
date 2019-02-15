import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ toggleLogIn, toggleSignUp }) => {
  return(
    <>
      <nav>
          <Link to='/'>Home</Link>
      </nav>
      <select className='site_nav'>
        <option>Surf</option>
        <option>All</option>
        <option>Original Content</option>
      </select>
      <div className="sign_in_up">
        <button name="log_in"  onClick={SignUp_LogInModal}>Log In</button>
        <button name="sign_up" onClick={toggleSignUp}>Sign Up</button>
      </div>
    </>
  )
}
