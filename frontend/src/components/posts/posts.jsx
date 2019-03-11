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
    console.log(this.state)
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
            className='post'>{post.body}
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


// if(post_title_input && subfriggit){
//
//   util.createNewPost({
//     title: post_title_input.value,
//     post: post_text_input.value,
//     thumbnail: img_vid_src.value,
//     _link: link_url.value,
//     oc: oc.value,
//     nsfw: nsfw.value,
//     spoiler: spoiler.value
//   })
//   .then((res) => {
//     console.log(res, 'hello world')
//   })
//   .catch(err => console.log('You suck', err))
// } else {console.log(typeof subfriggit, 'You suck harder')}
// }
