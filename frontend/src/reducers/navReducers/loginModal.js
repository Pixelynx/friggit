import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL
} from "../../actions/navActions/actionTypes";

let defaultState = {
  loginModalIsShowing: false
}

export const loginModalReducer = (state = defaultState, action) => {
  console.log('Login button clicked')
  switch(action.type) {
    case SHOW_LOGIN_MODAL:
      return { loginModalIsShowing: action.payload }
    case HIDE_LOGIN_MODAL:
      return { loginModalIsShowing: action.payload }
    default:
      return state;
    }


}
