import { combineReducers } from 'redux';
import {
  postsAreLoading,
  addPost,
  editPost,
  deletePost,
  displayPosts } from './postReducer.js';

export default combineReducers({
  postsAreLoading,
  addPost,
  editPost,
  deletePost,
  displayPosts })
