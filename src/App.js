import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import PostPage from "./Components/PostPage";
import Post from "./Components/Post";
import NewPost from "./Components/NewPost";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Api from "./Components/apiRequest";
import axios from "axios";
import Update from "./Components/Update";
import WindowsizeHook from "./Components/WindowsizeHook";

function App() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [newPost, setNewPost] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateBody, setUpdateBody] = useState("");
  const {width}=WindowsizeHook();

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  //the useEffect will be exceute only when the dependencies values redndering at the time

  useEffect(() => {
    const apiRequest = async () => {
      try {
        const response = await Api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    apiRequest();
  }, []);

  useEffect(() => {
    const result =
      posts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ) ||
      posts.filter((p) => p.body.toLowerCase().includes(search.toLowerCase));
    setSearchPosts(result.reverse());
  }, [search, posts]);

  const handleSubmit = async () => {
    const titlecheck =
      title.length <= 0 ? alert("Cannot add empty titles !") : null;
    const titlecheck1 =
      newPost.length <= 0 ? alert("Cannot add empty posts !") : null;

    if (titlecheck === null && titlecheck1 === null) {
      const body = newPost;
      const id = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd,yyyy pp");
      const newObj = { id, title, datetime, body };

      try {
        const response = await Api.post("/posts", newObj);
      } catch (err) {
        console.log(err.message);
      }
      //we can add newObj neither or response.dada into the addingItems
      const addingItems = [...posts, newObj];
      setPosts(addingItems);
      setNewPost("");
      setTitle("");
      alert("Successfully added our new gem!");
      navigate("/");
    }
  };

  const handleDelete = async (id) => {
    console.log("del");
    try {
      await Api.delete(`/posts/${id}`);
      //the filter was keep the values without our prefernces (id)
      const deletePost = posts.filter((p) => p.id !== id);
      setPosts(deletePost);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const title = updateTitle;
      const body = updateBody;
      const datetime = format(new Date(), "MMMM dd,yyyy pp");
      const updateObj = { id, title, datetime, body };
      const response = await Api.put(`/posts/${id}`, updateObj);

      setPosts(posts.map((p) => (p.id === id ? { ...response.data } : p)));
      setUpdateBody("");
      setUpdateTitle("");
      alert("Successfully added our updated gem!");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const length = posts.length;

  return (
    <div className="App">
      <Header title="Social Media Template" width={width} />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={<Home posts={searchPosts} length={length} />}
        />
        <Route path="/posts">
          <Route
            index
            element={
              <NewPost
                Title={title}
                setTitle={setTitle}
                newPost={newPost}
                setNewPost={setNewPost}
                handleSubmit={handleSubmit}
              />
            }
          />

          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>

        <Route
          path="/update/:id"
          element={
            <Update
              posts={posts}
              handleUpdate={handleUpdate}
              updateTitle={updateTitle}
              updateBody={updateBody}
              setUpdateTitle={setUpdateTitle}
              setUpdateBody={setUpdateBody}
            />
          }
        />

        <Route path="/about" Component={About} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
