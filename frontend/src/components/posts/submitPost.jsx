import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { retrieveAllPosts } from '../../actions/actionCreators/postsThunk.js';

import '../../css/posts/createPost.css';

class SubmitPost extends Component {

  componentDidMount = () => {
    let { fetchPosts } = this.props;
    debugger
    fetchPosts();
  }

  render() {


    return(
      <>
      {this.props.loadingPosts ?
        <p>Loading...</p> : <p>Sorry. You suck.</p>
      }

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
        </div>
            <div className='rules_policy_container'></div>
      </>
    )
  }
}

export const mapStateToProps = (state) => {
  return ({
    loadingPosts: state.postsAreLoading,
    postInput: state.addPost,
    editPost: state.editPost,
    deletePost: state.deletePost,
    posts: state.posts
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchPosts: () => dispatch(retrieveAllPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPost);
