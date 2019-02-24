import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginModal } from './loginModal.jsx';

import '../../css/navigation/navBar.css';

class NavBar extends Component {
  state = {
    loginModalIsOpen: false,
    signupModalIsOpen: false
  };


  openLoginModal = () => {
    console.log('Open')
    this.setState({ loginModalIsOpen: true })
  };

  closeLoginModal = () => {
    console.log('closing')
    this.setState({ loginModalIsOpen: false })
  };

  render() {
    console.log(this.state)

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
          <button
            className='log_in'
            name='log_in'
            onClick={ this.openLoginModal }>Log In</button>
          <button className='sign_up' name='sign_up' >Sign Up</button>
        </div>

        <select className='user_menu'>
          <option></option>
          <option>Log In/Sign Up</option>
        </select>
      </div>
      <LoginModal />

    </>
  )}
}

export default NavBar;
