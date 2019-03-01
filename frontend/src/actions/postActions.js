import { POSTS_ARE_LOADING, ADD_POST, EDIT_POST, DELETE_POST, DISPLAY_POSTS } from './types';

const postsAreLoading = (bool) => {
  return {
    type: POSTS_ARE_LOADING,
    loadingPosts: false
  }
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    postInput: post
  }
};

const editPost = (post) => {
  return {
    type: EDIT_POST,
    editInput: post
  }
};

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    deletePost: id
  }
};

const displayPosts = (posts) => {
  return {
    type: DISPLAY_POSTS,
    posts
  }
};

export { postsAreLoading, addPost, editPost, deletePost, displayPosts };
