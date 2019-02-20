import React from 'react';

export const SignUp_LogInModal = ({ toggleLogIn, toggleSignUp }) => {
  return(
    <>
      <div>{toggleLogIn === true ? "Logged in" : "Error"}</div>
    </>
  )
}
