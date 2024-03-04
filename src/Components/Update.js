import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Update({
  posts,
  handleUpdate,
  setUpdateTitle,
  setUpdateBody,
  updateTitle,
  updateBody,
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  const handleTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleBody = (e) => {
    setUpdateBody(e.target.value);
  };

  useEffect(() => {
    if (post) {
      setUpdateTitle(post.title);
       setUpdateBody(post.body);
    }
  }, [setUpdateBody,setUpdateTitle,post]);
  return (
    <div className="update">
        <h1>Update Post</h1>
      {post ? (
        <div className="add">
          <section>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={updateTitle}
              onInput={(e) => handleTitle(e)}
              required
            />
          </section>
          <br />
          <section>
            <label htmlFor="post">Post:</label>
            <textarea
              type="text"
              name="post"
              id="post"
              value={updateBody}
              onInput={(e) => handleBody(e)}
              required
            />
          </section>
          <br/>
          <button onClick={() => handleUpdate(post.id)} id="btn">
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Update;
