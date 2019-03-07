import React, { Component } from 'react';
import { CreatePost } from './createPost.jsx';

import '../../css/posts/createPost.css';

class PostForm extends Component {
  state = {
    subfriggit: '',
    post: {
      title_input: '',
      text_input: ''
    },
    img_vid: {
      title_input: '',
      img_vid_src: ''
    },
    link_: {
      title_input: '',
      url: ''
    },
    oc: false,
    spoiler: false,
    nsfw: false,
    isValid: false
  };


  handlePostInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    <CreatePost />

    return(
      <>

        <div className='submit_post_containers_container'>
            <form className='submit_post_container'>
              <span className='create_post_text'>Create a post</span>
              <br />
              <select className='choose_community_dropdown'>
                <option>Choose a community</option>
                <option>Prolly Won't be a Select Element</option>
                <option>Prolly Won't be a Select Element</option>
                <option>Prolly Won't be a Select Element</option>
                <option>Prolly Won't be a Select Element</option>
              </select>
              <br />

            <div className='post_box' onSubmit={this.handlePostSubmit}>

              <div className='post_options'>
                <div name='post' id='post'>Post</div>
                <div name='img_vid' id='img_vid'>Image & Video</div>
                <div name='link_' id='link_'>Link</div>
              </div>

              <input
                type='text'
                name='title_input'
                className='title_input'
                placeholder='Title'

                />
                <br />
              <input
                type='text'
                name='post_text_box'
                className='post_text_box'
                placeholder='Text (optional)'

                />

              <div className='selections_post_container'>
                <div className='mark_as_selections'>
                  <div id='oc'>+ OC</div>
                  <div id='spoiler'>+ SPOILER</div>
                  <div id='nsfw'>+ NSFW</div>
                </div>
                <div className='draft_post'>
                  <input type='button' id='draft' value='SAVE DRAFT' />
                  <input type='button' id='submit_post' value='POST' />
                </div>
              </div>
            <div className='post_notif'></div>
            </div>
          </form>
        </div>
            <div className='rules_policy_container'></div>

      </>
    )
  }
}


export default PostForm;
