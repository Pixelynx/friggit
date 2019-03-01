import { POSTS_ARE_LOADING, ADD_POST, EDIT_POST, DELETE_POST, DISPLAY_POSTS } from '../actions/types.js';

export const postsAreLoading = (state = false, action) => {
  switch (action.type) {
    case POSTS_ARE_LOADING:
    return action.loadingPosts;
    break;
    default: return state;
  }
}

export const addPost = (state = [], action) => {
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
      default: return state;
    }
    return newState;
}
