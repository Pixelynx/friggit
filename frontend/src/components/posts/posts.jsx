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
      this.setState({ posts: res.data.posts })
    })

   }


  render() {
    const { posts } = this.state;
    console.log(this.state)
    let idGen;

    return(
      <>
      <div>
        {posts.map((post) => {
          return <> <div key={post.id} className='post'>{post.body}</div> </>
        })
      }
      </div>
        </>
    )
  }
}



export default Posts;
