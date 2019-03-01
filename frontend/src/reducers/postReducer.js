import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions/types.js';

const postReducer = (state = [], action) => {
    let newState = state;
    let postIndex;

    switch (action.type) {
      case ADD_POST:
      let idGen = newState.posts[newState.posts.length - 1].id + 1;
      newState.posts.push({
        id: idGen,
        title: action.payload,
        body: action.payload
      });
      break;
      default:
      break;
    }
    return newState;
}

export default postReducer;
