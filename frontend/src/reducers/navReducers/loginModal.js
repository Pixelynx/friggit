import {

} from "../../actions/navActions/actionTypes";

let defaultState = {
  isLoggedIn: false
}

export const logInReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let logIn = state.isLoggedIn;


  switch(action.type) {

    }


}
