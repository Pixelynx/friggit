import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/posts/postCommunityButtonContainer.css';

export const CreatePostCommunityButton = () => {
  return (
    <>
      <div className='post_community_button_container'>
        <Link to='/submit'>
          <input type='button' className='create_post_button' value='Create Post' />
        </Link>
      </div>
    </>
  )
}
