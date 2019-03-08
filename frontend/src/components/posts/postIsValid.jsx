import React from 'react';

export const PostIsValid = ({ isValid }) => {
  return(
    <>
      {!isValid ? <div className='post_not_valid'>
      </div>
    }
    </>
  )
};
