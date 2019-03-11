import React, { Component } from 'react';
import axios from 'axios';
import PostsForm from './postForm.jsx';
import { DisplayPosts } from './displayPosts.jsx';
import * as util from '../../utils/apiCalls.js';

import '../../css/posts/allPosts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.fetchPosts()
  }

  fetchPosts = () => {
    axios.get('/posts')
    .then(res => {
      this.setState({ posts: res.data.body })
    })
   }


  render() {
    const { posts } = this.state;
    let idGen;

    return(
      <>
      <div>
        {posts.map((post) => {
          return (
            <>
            <div className='title'>{post.title}</div>
            <div
            key={post.id}
            className='post'>{post.post}
            </div>
            </>)
        })
      }
      </div>
        </>
    )
  }
}



export default Posts;
