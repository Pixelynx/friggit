import React, { Component } from 'react';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';
import { ClearState } from './postCall.jsx';
import { PostIsValid } from './postIsValid.jsx';
import { ErrorModal } from './errorModal.jsx';
import Posts from './posts.jsx';


import '../../css/posts/createPost.css';


class PostForm extends Component {
  // state = {
  //   subfriggit: '',
  //   post: {
  //     title_input: '',
  //     text_input: ''
  //   },
  //   img_vid: {
  //     title_input: '',
  //     img_vid_src: ''
  //   },
  //   link_: {
  //     title_input: '',
  //     url: ''
  //   },
  //   oc: false,
  //   spoiler: false,
  //   nsfw: false,
  //   isValid: false,
  //   submitEnabled: false
  // };
  state = {
    submit_post: false,
    errorModalIsOpen: false

  }

  openModal = (event) => {
    let currentState = this.state;
    this.setState({ [event.target.name]: !currentState })
  };

  closeModal = (event) => {
    this.setState({ [event.target.name]: false })
  };

  handlePostInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


// HACKY AF BUT WORKS
  ocClick = () => {
    let currentState = this.props;
      if(!this.props.oc){
        this.setState({ oc: true })
      } else {
        this.setState({ oc: false })
      }
    }

  nsfwClick = () => {
    let currentState = this.props;
      if(!this.props.nsfw){
        this.setState({ nsfw: true })
      } else {
        this.setState({ nsfw: false })
      }
    }

  spoilerClick = () => {
    let currentState = this.props;
      if(!this.props.spoiler){
        this.setState({ spoiler: true })
      } else {
        this.setState({ spoiler: false })
      }
    }

  handleSubmitState = () => {
    let currentState = this.props;
      if(this.props.submitEnabled) {
        this.setState({ submitEnabled: false })
      } else {
        this.setState({ submitEnabled: true })
      }
    }

  handlePostSubmit = () => {
    const { isValid, post, subfriggit, oc, nsfw, spoiler, img_vid, link_ } = this.props;

    if(post.title_input && subfriggit){
      util.createNewPost({
        title: post.title_input.value,
        post: post.text_input.value,
        thumbnail: img_vid.img_vid_src.value,
        _link: link_.url.value,
        oc: oc.value,
        nsfw: nsfw.value,
        spoiler: spoiler.value
      })
      .then(() => {
        util.getAllPosts()
      })
      .catch(err => console.log(err))
    } else console.log("you're an idiot")
  }

  render() {
    console.log(this.state)
    console.log(this.props)


    return(
      <>

        <div className='submit_post_containers_container'>
            <form className='submit_post_container'  onSubmit={this.handlePostSubmit}>
              <span className='create_post_text'>Create a post</span>
              <br />
              <select onChange={this.handlePostInput} className='choose_community_dropdown'>
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
                name='title_input'
                className='title_input'
                placeholder='Title'
                onChange={this.handlePostInput}
                />
                <br />
              <input
                type='text'
                name='post_text_box'
                className='post_text_box'
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
                  <input
                    type='button'
                    id='submit_post'
                    value='POST'
                    name='errorModalIsOpen'
                    onClick={this.state.errorModalIsOpen ? this.closeModal : null}
                    />
                </div>
              </div>
            <div className='post_notif'></div>
            </div>
          </form>
        </div>
            <div className='rules_policy_container'></div>

              <ErrorModal

                isOpen={this.state.errorModalIsOpen}
                openLoginModal={this.openModal}
                closeLoginModal={this.closeModal}
                />

      </>
    )
  } 
  }



export default PostForm;
