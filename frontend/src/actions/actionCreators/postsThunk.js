import axios from 'axios';
import * as util from '../../utils/utils.js';
import { postsAreLoading, displayPosts, addPost } from '../postActions.js';

export const retrieveAllPosts = () => (dispatch) => {

  return util.getAllPosts()
              .then(res => {
                dispatch(displayPosts(res.data.posts))
              })
              .catch(err => console.log(err))

  };

export const addNewPost = (id, body) => (dispatch) => {

  return util.createNewPost(id, body)
              .then(() => {
                dispatch(addPost(body))
              })
              .catch(err => console.log(err))
};
