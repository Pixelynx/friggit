import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubmitPost from '../posts/submitPost.jsx';

class PostsContainer extends Component {
  render() {
    return(
      <>
        <SubmitPost />
      </>
    )
  }
}
