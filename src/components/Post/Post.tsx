import React, { ReactNode } from "react";

import "./Post.module.css";

interface props {
  clicked:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  author: ReactNode;
  title: React.ReactNode;
}

const post = (props: props) => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
