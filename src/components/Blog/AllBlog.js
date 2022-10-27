import React, { useState } from "react";
import Blog from "./Blog";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import './BlogHome.css'

const AllBlog = () => {
  const [items, setItems] = useState(BlogData);
  return (
    <>
      <section className="blog top">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <BlogCard key={item.id} item = {item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlog;
