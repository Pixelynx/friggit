import React from 'react';
import { Link } from 'react-router-dom';

export const BackToPostsButton = ({ post_title_input, subfriggit, isValid, handlePostSubmit }) => {
  return(
    <>{post_title_input && subfriggit ?
    <div className='back_to_post_container'>
      <Link to='/posts'>
        <input
          type='button'
          className='back_to_post'
          value='POST'
          />
      </Link>

    </div> : null}
    </>
  )
};
