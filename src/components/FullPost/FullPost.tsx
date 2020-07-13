import React, { Component } from "react";

import "./FullPost.module.css";

class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="FullPost">
        <h1>Title</h1>
        <p>Content</p>
        <div>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default FullPost;
