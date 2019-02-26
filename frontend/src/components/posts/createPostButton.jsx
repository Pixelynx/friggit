import React from 'react';
import { Link } from 'react-router-dom';

export const CreatePostButton = () => {
  return (
    <>
      <Link to='/submit'>
        <input type='button' className='create_post_button' value='Create Post' />
      </Link>
    </>
  )
}
