import React from 'react';
import '../../css/navigation/loginSignupModal.css';

export const SignupModal = ({ isOpen }) => {
  return (
    <>
      { isOpen ?
        <div className='login_signup_modal_container'>
          <form className='login_modal'>

            <input
              className='login_signup_input'
              type='text'
              name='email'
              placeholder='Email'
              />

            <br />

            <input
              className='login_signup_submit'
              name='next'
              type='submit'
              value='Next'
              />

          </form>
        </div> : null }
    </>
  )
}
