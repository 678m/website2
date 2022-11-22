import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="12th May 2021"
            title="How to use GPT-3 to build a chatbot"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="12th May 2021"
            title="How to use GPT-3 to build a chatbot"
          />
          <Article
            imgUrl={blog03}
            date="12th May 2021"
            title="How to use GPT-3 to build a chatbot"
          />
          <Article
            imgUrl={blog04}
            date="12th May 2021"
            title="How to use GPT-3 to build a chatbot"
          />
          <Article
            imgUrl={blog05}
            date="12th May 2021"
            title="How to use GPT-3 to build a chatbot"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
