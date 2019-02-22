import { SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL } from "./actionTypes";

export const loginModalIsShowing = () => {
  return { type: SHOW_LOGIN_MODAL, payload: true }
}
export const loginModalIsHidden = () => {
  return { type: HIDE_LOGIN_MODAL, payload: false }
}
