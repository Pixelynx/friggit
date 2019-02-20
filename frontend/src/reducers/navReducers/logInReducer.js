import {
  USER_INPUT,
  TOGGLE_LOG_IN,
  TOGGLE_SIGN_UP
} from "../../actions/navActions/actionTypes";

let defaultState = {
  loginOrSignup: [{ logSign: "Log in?" },
                  { logSign: "Sign up?"}]
}

const logInReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let logSign = state.loginOrSignup;
  let newState = { logSign: logSign };

  switch(action.type) {
    case USER_INPUT:
      newState.logSign.push({
        logSign: action.payload
      });
      break;
    case TOGGLE_LOG_IN:
      return logSign.body === action.payload;
      break;

    case TOGGLE_SIGN_UP:
      return logSign.body === action.payload;
      break;
    }

    return newState;
}

export default logInReducer;
