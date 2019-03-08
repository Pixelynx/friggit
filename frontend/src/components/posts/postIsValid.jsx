import React from 'react';

export const PostIsValid = ({ isValid }) => {
  return(
    <>
        {isValid ?
          <div className='post_text_box'>Eww</div>
          : null
        }

    </>
)
  
};
