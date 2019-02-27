import React, { Component } from 'react';
import axios from 'axios';

import '../../css/posts/createPost.css';

class SubmitPost extends Component {

  componentDidMount = () => {
    axios.get('/submit')
      .then(res => {
        console.log('got submit page')
      }).catch(err => console.log(err))
  }

  render() {
    return(
      <>
          <div className='submit_post_container'>
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

          <div className='post_box'>

            <div className='post_options'>
              <div id='post'>Post</div>
              <div id='img_vid'>Image & Video</div>
              <div id='link'>Link</div>
            </div>

            <input type='text' className='title_input' placeholder='Title' />
              <br />
            <input type='text' className='post_text_box' placeholder='Text (optional)' />

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
          </div>
          <div className='rules_policy_container'></div>
      </>
    )
  }
}

export default SubmitPost;
