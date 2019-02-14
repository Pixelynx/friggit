import { TOGGLE_LOG_IN, TOGGLE_SIGN_UP } from "./actionTypes";

export const toggleLogIn = () => body => {
  return { type: TOGGLE_LOG_IN, payload: body }
}
export const toggleSignUp = () => body => {
  return { type: TOGGLE_SIGN_UP, payload: body }
}

export { TOGGLE_LOG_IN, TOGGLE_SIGN_UP };
