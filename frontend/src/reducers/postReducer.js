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
    let posts = this.displayPosts.posts;
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

export const editPost = (state = posts, action) => {
  let posts = this.displayPosts.posts;
  let newState = state;
  let postIndex;

  switch (action.type) {
    case EDIT_POST:
    postIndex = newState.posts.findIndex(post => {
    return post.id === action.editPost;
  });
    newState.posts = newState.posts.slice(0, postIndex).concat(newState.posts.slice(postIndex + 1))
    break;
    default: return state;
    break;
  }
  return newState;
};

export const deletePost = (state = posts, action) => {
  let posts = this.displayPosts.posts;
  let newState = state;
  let postIndex;

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
