import React from "react";
import { Link, useParams } from "react-router-dom";

function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  return (
    <div className="page">
      {post ? (
        <article key={post.id} id="s_post">
          <h1>{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{post.body}</p>

          <Link to={`/update/${post.id}`}>
            <button id="update" >
              Update
            </button>
          </Link>

          <button id="delete" onClick={() => handleDelete(post.id)}>
            Delete
          </button>
        </article>
      ) : (
        <article id="m_post">
          <h1>Post Not Found</h1>
          <p>Well, that's disappointing!</p>
          <Link to="/">
            <p>Visit Our Homepage</p>
          </Link>
        </article>
      )}
    </div>
  );
}

export default PostPage;
