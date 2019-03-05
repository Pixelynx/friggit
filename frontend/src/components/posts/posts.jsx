import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { retrieveAllPosts } from '../../actions/actionCreators/postsThunk.js';

import '../../css/posts/createPost.css';

class Posts extends Component {

  componentDidMount = () => {
    let { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { loadingPosts } = this.props;
    return(
      <>
        {loadingPosts ?
          <p className="test">Loading...</p> : <p className="test">Sorry. You suck.</p>
        }
        </>
    )
  }
}




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
      fetchPosts: () => dispatch(retrieveAllPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
