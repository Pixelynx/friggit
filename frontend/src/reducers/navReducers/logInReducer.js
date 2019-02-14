import {
  TOGGLE_LOG_IN,
  TOGGLE_SIGN_UP
} from "../../actions/navActions/actionTypes";

let defaultState = {
  loginOrSignup: [{ logIn: "Log in?" },
                  { signUp: "Sign up?"}]
}

const logInReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let login = state.logIn;
  let newState = loginOrSignup: loginOrSignup;

  switch(action.type) {
    case TOGGLE_LOG_IN:
      return logIn.body === action.payload;
      break;

    case TOGGLE_SIGN_UP:
      return signUp.body === action.payload;
      break;
    }

    return newState;
}

export default logInReducer;
