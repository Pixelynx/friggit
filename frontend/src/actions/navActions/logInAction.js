import { USER_INPUT, TOGGLE_LOG_IN, TOGGLE_SIGN_UP } from "./actionTypes";

export const userInput = () => logSign => {
  return { type: USER_INPUT, payload: logSign }
}
export const toggleLogIn = () => logSign => {
  return { type: TOGGLE_LOG_IN, payload: logSign }
}
export const toggleSignUp = () => logSign => {
  return { type: TOGGLE_SIGN_UP, payload: logSign }
}
