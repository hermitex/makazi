import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Blog from "./Blog";

function BlogList() {
  return (
    <div
      style={{ width: "100%", borderRadius: "0.5rem" }}
      className="bg-light p-2"
    >
      <ul
        className="list-unstyled d-flex justify-content-between p-2"
        style={{ width: "100%" }}
      >
        <li>Latest Blog</li>
        <li>
          <Link to="/new-blog">
            <Button>Add New Blog</Button>
          </Link>
        </li>
      </ul>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}

export default BlogList;
