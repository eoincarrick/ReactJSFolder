import React from 'react';

const BlogList = ({ blogs, title, handleClick }) => {
  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map(({ id, title, body, author }, index) => {
        return (
          <div className='blog-preview' key={id}>
            <h2>{title}</h2>
            <p>Written by {author}</p>
            <button
              onClick={() => {
                handleClick(id);
              }}
            >
              Delete Blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
