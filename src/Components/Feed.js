import React from 'react'
import Post from './Post'

function Feed({posts}) {
  return (
    <div className='feed'>
            {
              posts.map((post)=>(
                <Post key={post.id} posts={post}/>
              ))
            }
    </div>
  )
}

export default Feed