import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginModal } from '../login/loginModal.jsx';
import { SignupModal } from '../signup/signupModal.jsx';

import '../../css/navigation/navBar.css';

class NavBar extends Component {
  state = {
    loginModalIsOpen: false,
    signupModalIsOpen: false
  };


  openModal = (event) => {
    console.log('Open')
    this.setState({ [event.target.name]: true })
  };

  closeModal = (event) => {
    console.log('closing')
    this.setState({ [event.target.name]: false })
  };

  render() {
    const { loginModalIsOpen, signupModalIsOpen } = this.state;
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
            name='loginModalIsOpen'
            onClick={ loginModalIsOpen ? this.closeModal : this.openModal }>Log In</button>
          <button
            className='sign_up'
            name='signupModalIsOpen'
            onClick={ signupModalIsOpen ? this.closeModal : this.openModal} >Sign Up</button>
        </div>

        <select className='user_menu'>
          <option></option>
          <option>Log In/Sign Up</option>
        </select>
      </div>

      <LoginModal
        isOpen={loginModalIsOpen}
        openLoginModal={this.openModal}
        closeLoginModal={this.closeModal}
        />

      <SignupModal
        isOpen={signupModalIsOpen}
        openSignupModal={this.openModal}
        closeSignupModal={this.closeModal}
        />

    </>
  )}
}

export default NavBar;
