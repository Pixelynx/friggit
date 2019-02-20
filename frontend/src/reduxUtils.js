import { userInput, toggleLogIn, toggleSignUp } from './actions/navActions/logInAction.js';

const mapStateToProps = (state) => {
  return ({
    logIn: state.logInReducer.isLoggedIn
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    userInput: logIn => {
      dispatch(userInput(logIn))
    },
    toggleLogIn: logIn => {
      dispatch(toggleLogIn(logIn))
    },
    toggleSignUp: logIn => {
      dispatch(toggleSignUp(logIn))
    }
  })
}

export { mapStateToProps, mapDispatchToProps };
