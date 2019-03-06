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
    let mapPosts;
    const { posts } = this.props;



    return(
      <>
      {posts ?
        mapPosts = posts.map(post => {
          return <p className="test">{post.body}</p>

        }) : <p className="test">Sorry. Ya still suck.</p>
      }
        </>
    )
  }
}




export const mapStateToProps = (state) => {
  return ({
    loadingPosts: state.postsAreLoading,
    postInput: state.postInput,
    editPost: state.editPost,
    deletePost: state.deletePost,
    posts: state.displayPosts
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchPosts: () => dispatch(retrieveAllPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
