import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logged, handleClick, userLogged }) => {
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
      <form className="sign_in_up" onSubmit={userLogged}>
        <button name="log_in" value={logged} onClick={handleClick}>Log In</button>
        <button name="sign_up" value={logged} >Sign Up</button>
      </form>
    </>
  )
}

export default NavBar
