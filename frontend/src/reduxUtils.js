import { userInput, toggleLogIn, toggleSignUp } from './actions/navActions/logInAction.js';

const mapStateToProps = (state) => {
  return ({
    logSign: state.logInReducer.loginOrSignup
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    userInput: logSign => {
      dispatch(userInput(logSign))
    },
    toggleLogIn: logSign => {
      dispatch(toggleLogIn(logSign))
    },
    toggleSignUp: logSign => {
      dispatch(toggleSignUp(logSign))
    }
  })
}

export { mapStateToProps, mapDispatchToProps };
