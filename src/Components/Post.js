import React from 'react'
import { Link, useParams } from "react-router-dom";

function Post({key,posts}) {

  return (
    <div className='post'> 
         {
          <article key={key}>
                <Link to={`/posts/${posts.id}`}  id='link' >
                <h1>{posts.title}</h1>
                <p>{posts.datetime}</p>
                </Link>
                {/* <p>{(posts.body).length >= 20 ? posts.body.slice(0,20)&&<p>...</p>: posts.body}</p> */}
                {
                  (posts.body).length >= 25 ? <p>{posts.body.slice(0,20)}...</p> : <p>{posts.body}</p>
                }
          </article>

         }
     </div>
  )
}



export default Post