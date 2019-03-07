import { ADD_POST, DELETE_POST, DISPLAY_POSTS } from './types';
import axios from 'axios';

export const addPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post('/submit', {title, body})
      .then(res => {
        dispatch(addPostSuccessful(res.data))
      })
      .catch(err => throw(err));
  };
};

export const addPostSuccessful = (data) => {
  return {
    type: ADD_POST,
    payload: {
      id: data,
      title: data,
      body: data
    }
  }
};

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.get(`/submit/${id}`)
      .then(res => {
        dispatch(deletePostSuccessful(res.data))
      })
      .catch(err => throw(err));
  };
};

export const deletePostSuccessful = (id) => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const displayPosts = () => {
  return (dispatch) => {
    return axios.get(`/posts`)
      .then(res => {
        dispatch(displayPostsSuccessful(res.data))
      })
      .catch(err => throw(err));
  };
};

export const displayPostsSuccessful = (posts) => {
  return {
    type: DISPLAY_POSTS,
    payload: {
      posts
    }
  };
};
