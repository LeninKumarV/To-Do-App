import React, { useState } from "react";
import Feed from "./Feed";
import { Route, Routes } from "react-router-dom";

function Home({posts,length}) {



  return (
    <div className="home">
      {
          length > 0 ? 
          <Feed posts={posts} />:
          <h1>Posts are not available here ..! </h1>
      }
    </div>
  );
}

export default Home;
