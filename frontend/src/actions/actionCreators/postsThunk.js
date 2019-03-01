import axios from 'axios';

export const RetrieveAllPosts = (url) => {
  return (dispatch) => {
    dispatch(postsAreLoading(true));
    axios.get(url)
    .then(res => res)
    .then(posts => dispatch(displayPosts(posts)))
    .catch(err => console.log(err))
  }
}
