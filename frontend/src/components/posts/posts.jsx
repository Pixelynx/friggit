import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { retrieveAllPosts } from '../../actions/actionCreators/postsThunk.js';

class Posts extends Component {

  componentDidMount = () => {
    let { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    return(
      <div></div>
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
