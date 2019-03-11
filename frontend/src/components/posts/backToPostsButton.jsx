import React from 'react';
import { Link } from 'react-router-dom';

export const BackToPostsButton = ({
    post_title_input,
    subfriggit,
    isValid,
    handlePostSubmit }) => {
  return(
    <>{post_title_input && subfriggit ?
    <div className='back_to_post_container'>
        <input
          type='submit'
          className='back_to_post'
          value='POST'
          />

    </div> : null}
    </>
  )
};
