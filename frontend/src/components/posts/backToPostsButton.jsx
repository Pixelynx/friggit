import React from 'react';
import { Link } from 'react-router-dom';

export const BackToPostsButton = ({ isValid }) => {
  return(
    <>{isValid ?
    <div className='back_to_post_container'>
      <Link to='/posts'>
        <input type='button' className='back_to_post' value='POST' />
      </Link>
    </div> : null}
    </>
  )
};
