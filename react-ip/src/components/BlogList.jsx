import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map(({ id, title, author }, index) => {
        return (
          <div className='blog-preview' key={id}>
            <Link to={`/blog/${id}`}>
              <h2>{title}</h2>
              <p>Written by {author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
