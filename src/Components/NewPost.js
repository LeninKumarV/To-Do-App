import React from "react";

function NewPost({ Title, setTitle, newPost, setNewPost, handleSubmit }) {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePost = (e) => {
    setNewPost(e.target.value);
  };

  return (
    <div className="new">
      <h1>New Post</h1>
      <div className="add">
        <section>
          <label htmlFor="title">Title:</label> 
          <input
            type="text"
            name="title"
            id="title"
            value={Title}
            onInput={(e) => handleTitle(e)}
            required
          />
        </section>
        <br/>
        <section>
          <label htmlFor="post">Post:</label> 
          <textarea
            type="text"
            name="post"
            id="post"
            value={newPost}
            onInput={(e) => handlePost(e)}
            required
          />
        </section>
        <br/>
        <button onClick={handleSubmit} id="btn">Submit</button>
      </div>
    </div>
  );
}

export default NewPost;
