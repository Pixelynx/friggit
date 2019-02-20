import { USER_INPUT, TOGGLE_LOG_IN, TOGGLE_SIGN_UP } from "./actionTypes";

export const userInput = () => isLoggedIn => {
  return { type: USER_INPUT, payload: isLoggedIn }
}
export const toggleLogIn = () => isLoggedIn => {
  return { type: TOGGLE_LOG_IN, payload: isLoggedIn }
}
export const toggleSignUp = () => isLoggedIn => {
  return { type: TOGGLE_SIGN_UP, payload: isLoggedIn }
}
