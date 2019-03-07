import React from 'react';
import * as util from '../../utils/apiCalls.js';
import '../../css/posts/createPost.css';

export const CreatePost = ({
  clearState,
  isValid,
  handlePostInput,
  subfriggit,
  post,
  img_vid,
  link_,
  oc,
  spoiler,
  nsfw
}) => {
return(
  if(isValid) {

          util.createNewPost({
            title: post.title_input,
            post: post.text_input,
            thumbnail: img_vid.img_vid_src,
            _link: link_.url,
            oc: oc,
            nsfw: nsfw,
            spoiler: spoiler
          })
          .then(() => util.getAllPosts())
        } else {
          null
        }

      return this.setState({isValid:false}))
};
