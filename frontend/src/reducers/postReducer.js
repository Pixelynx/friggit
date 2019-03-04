import { POSTS_ARE_LOADING, ADD_POST, EDIT_POST, DELETE_POST, DISPLAY_POSTS } from '../actions/types.js';

export const postsAreLoading = (state = false, action) => {
  switch (action.type) {
    case POSTS_ARE_LOADING:
    return action.loadingPosts;
    break;
    default: return state;
    break;
  }
};

export const addPost = (state = [], action) => {
  // [I think?] grabs the state for target?
    let posts = [...state.posts];
    let newState = state;

    switch (action.type) {
      case ADD_POST:
      let idGen = newState.posts[newState.posts.length - 1].id + 1;
      newState.posts.push({
        id: idGen,
        title: action.postInput,
        body: action.postInput
      });
      break;
      default: return state;
      break;
    }
    return newState;
};


export const editPost = (state = { message: '' }, action) => {
  let newState = state;
  let posts = [...state.posts];
  let postIndex;

  switch (action.type) {
    case EDIT_POST:
    // Needs to be fxed
    postIndex = newState.CHANGE_THIS.findIndex(post => {
    return post.id === action.editPost;
  });
    break;
    default: return state;
    break;
  }
  return newState;
};

export const deletePost = (state = TBD, action) => {
  let newState = state;
  let postIndex;

// loops though posts in state. slices array at point of deletion and concats at point after.
  switch (action.type) {
    case DELETE_POST:
    postIndex = newState.posts.findIndex(post => {
      return post.id === action.deletePost;
    });
    newState.posts = newState.posts.slice(0, postIndex).concat(newState.posts.slice(postIndex + 1))
    break;
    default: return state;
    break;
  }
  return newState;
};

export const displayPosts = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_POSTS:
    return action.displayPosts;
    break;
    default: return state;
    break;
  }
};
