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

export const addPost = (state = { posts: [] }, action) => {
  // created a posts object and set the state to an empty array to push into
    let newState = state;
    // let posts = [...newState.posts];

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
  // let newState = state;
  // let posts = [...newState.posts];
  // let postIndex;

  switch (action.type) {
    case EDIT_POST:
    // Needs to be fxed
    return state.message = 'Posts was edited.';
    break;
    default: return state;
    break;
  }
  return state.message;
};

export const deletePost = (state = { message: '' }, action) => {
  let newState = state;
  // let posts = [...newState.posts];
  // let postIndex;

  switch (action.type) {
    case DELETE_POST:
    return state.message = 'Post was deleted.';
    break;
    default: return state;
    break;
  }
  return state.message;
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
