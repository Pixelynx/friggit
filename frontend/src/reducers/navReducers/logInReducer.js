import {
  USER_INPUT,
  TOGGLE_LOG_IN,
  TOGGLE_SIGN_UP
} from "../../actions/navActions/actionTypes";

let defaultState = {
  isLoggedIn: false
}

export const logInReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let logIn = state.isLoggedIn;


  switch(action.type) {

    case TOGGLE_LOG_IN:
      return { isLoggedIn: true }
      break;
    }

    return logIn;
}
