import { ADD_POST, EDIT_POST, DELETE_POST, DISPLAY_POSTS } from './types';

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

export { addPost, editPost, deletePost; displayPosts };
