import React from 'react';
import * as util from '../../utils/apiCalls.js';
import '../../css/posts/createPost.css';

export const CreatePost = ({
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
  const postIsValid = () => {
    {!post.title_input || !subfriggit ? !isValid : isValid }
  }

  return(

    <>

    </>
  )

};
