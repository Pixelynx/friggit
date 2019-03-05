import axios from 'axios';
import { postsAreLoading, displayPosts } from '../postActions.js';

export const RetrieveAllPosts = (url) => (dispatch) => {
    dispatch(postsAreLoading(true));
    axios.get(url)
    .then(res => dispatch(displayPosts(res.data.posts)))
    .catch(err => console.log(err))
  }
