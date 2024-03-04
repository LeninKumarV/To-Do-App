import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PostPage from "./PostPage";
import About from "./About";

function Nav({ search, setSearch }) {
  console.log(search);
  return (
    <div className="nav">
      <form>
        <input
          type="search"
          id="search"
          placeholder="Search Posts"
          name="search-posts"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
      </form>


      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/posts" className="link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
