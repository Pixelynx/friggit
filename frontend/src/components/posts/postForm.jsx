import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions/actionCreators/postsThunk.js';

import '../../css/posts/createPost.css';

class PostForm extends Component {
  state = {
    title_input: '',
    post_text_box: ''
  }


  handlePostInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlePostSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.props;

    return ({
      title: this.state.title_input,
      body: this.state.post_text_box
    })
  }


  render() {
     console.log(this.state)
     console.log(this.props)

    return(
      <>

        <div className='submit_post_containers_container'>
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

            <form className='post_box' onSubmit={this.handlePostSubmit}>

              <div className='post_options'>
                <div id='post'>Post</div>
                <div id='img_vid'>Image & Video</div>
                <div id='link'>Link</div>
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
            </form>
            </div>
        </div>
            <div className='rules_policy_container'></div>

      </>
    )
  }
}


export const mapStateToProps = (state) => {
  return ({
    postInput: state.postInput,
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      addNewPost: (id, body) => dispatch(addNewPost(body))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
