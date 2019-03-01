import { postsAreLoading, addPost, editPost, displayPosts, deletePost } from './actions/postActions.js';
import { RetrieveAllPosts } from '../actions/actionCreators/postsThunk.js';

export const mapStateToProps = (state) => {
  return ({
    loadingPosts: state.postsAreLoading,
    postInput: state.addPost,
    editPost: state.editPost,
    deletePost: state.deletePost,
    posts: state.posts
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchPosts: (url) => dispatch(RetrieveAllPosts(url))
    };
};
