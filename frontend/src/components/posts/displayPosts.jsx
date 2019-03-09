import React from 'react';

export const DisplayPosts = ({ posts }) => {




  return(
    <>
    {posts ? posts.map(post => {
      return <div className='posts'>{post}</div>
    }) : <div className='no_posts'>No Posts</div>
  }
  </>
)

}
