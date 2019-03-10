import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as util from '../../utils/apiCalls.js';
import { ClearState } from './postCall.jsx';
import { PostIsValid } from './postIsValid.jsx';
import { ErrorModal } from './errorModal.jsx';
import { BackToPostsButton } from './backToPostsButton.jsx';
import Posts from './posts.jsx';


import '../../css/posts/createPost.css';


class PostForm extends Component {
  state = {
    subfriggit: '',
      post_title_input: '',
      post_text_input: '',
      img_vid_title_input: '',
      img_vid_src: '',
      link_title_input: '',
      link_url: '',
    oc: false,
    spoiler: false,
    nsfw: false,
    isValid: false,
    submitEnabled: false,
    errorModalIsOpen: false,
    completed: false

  }

// HACKY AF BUT WORKS


  openModal = (event) => {
    let currentState = this.state;
    this.setState({ [event.target.name]: true })
  };

  closeModal = (event) => {
    this.setState({ [event.target.name]: false })
  };

  handlePostInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubfriggitSelect = (e) => {
    this.setState({ subfriggit: e.target.value })
  }

  ocClick = () => {
    let currentState = this.state;
      if(!this.state.oc){
        this.setState({ oc: true })
      } else {
        this.setState({ oc: false })
      }
    }

  nsfwClick = () => {
    let currentState = this.state;
      if(!this.state.nsfw){
        this.setState({ nsfw: true })
      } else {
        this.setState({ nsfw: false })
      }
    }

  spoilerClick = () => {
    let currentState = this.state;
      if(!this.state.spoiler){
        this.setState({ spoiler: true })
      } else {
        this.setState({ spoiler: false })
      }
    }

    // END OF HACKINESS

  handlePostSubmit = (e) => {
    e.preventDefault();
    const {
      post_title_input,
      post_text_input,
      subfriggit,
      isValid,
      img_vid_src,
      link_url,
      completed,
      oc,
      nsfw,
      spoiler} = this.state

    

    if(post_title_input && subfriggit) {
      this.setState({ isValid: true })
    }

    if(isValid){

      util.createNewPost({
        title: post_title_input.value,
        post: post_text_input.value,
        thumbnail: img_vid_src.value,
        _link: link_url.value,
        oc: oc.value,
        nsfw: nsfw.value,
        spoiler: spoiler.value
      })
      .then((res) => {
        console.log(res, 'hello world')
      })
      .catch(err => console.log('You suck', err))
    } else {
      console.log(typeof subfriggit, 'You suck harder')
    }
    }


  render() {
    const { subfriggit, post_title_input, isValid } = this.state;
    console.log(this.state)



    return(
      <>

        <div className='submit_post_containers_container'>
            <form className='submit_post_container'  onSubmit={this.handlePostSubmit}>
              <span className='create_post_text'>Create a post</span>
              <br />
              <select
                onChange={this.handleSubfriggitSelect}
                className='choose_community_dropdown'
                value={this.state.subfriggit}>
                <option>Choose a community</option>
                <option>Prolly Won't be a Select Element</option>
                <option>Prolly Won't be a Select Element1</option>
                <option>Prolly Won't be a Select Element</option>
                <option>Prolly Won't be a Select Element</option>
              </select>
              <br />

            <div className='post_box'>

              <div className='post_options'>
                <div name='post' id='post'>Post</div>
                <div name='img_vid' id='img_vid'>Image & Video</div>
                <div name='link_' id='link_'>Link</div>
              </div>

              <input
                type='text'
                name='post_title_input'
                value={this.state.post_title_input}
                className='title_input'
                placeholder='Title'
                onChange={this.handlePostInput}

                />
                <br />
              <input
                type='text'
                name='post_text_input'
                value={this.state.post_text_input}
                className='post_text_input'
                placeholder='Text (optional)'
                onChange={this.handlePostInput}
                />

              <div className='selections_post_container'>
                <div className='mark_as_selections'>
                  <div
                    id='oc'
                    onClick={this.ocClick}>+ OC</div>
                  <div
                    id='spoiler'
                    onClick={this.spoilerClick}>+ SPOILER</div>
                  <div
                    id='nsfw'
                    onClick={this.nsfwClick}>+ NSFW</div>
                </div>
                <div className='draft_post'>
                  <input type='button' id='draft' value='SAVE DRAFT' />

                    <BackToPostsButton
                      post_title_input={this.state.post_title_input}
                      subfriggit={this.state.subfriggit}/>
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
