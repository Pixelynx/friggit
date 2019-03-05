import axios from 'axios';
import * as util from '../../utils/utils.js';
import { postsAreLoading, displayPosts } from '../postActions.js';

export const retrieveAllPosts = () => (dispatch) => {

  return util.getAllPosts()
              .then(res => {
                dispatch(displayPosts(res.data.posts))
              })
              .catch(err => console.log(err))

  }
