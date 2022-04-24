//   const handleClick = (id) => {
//     const del = blogs.filter((blog) => blog.id !== id);
//     setBlogs(del);
//   };
import React, { useState, useEffect } from 'react';
import { BlogList, Loading, Navbar } from '../components';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='content'>
      {isLoading && <Loading />}
      {blogs && (
        <>
          {' '}
          <BlogList blogs={blogs} title='All Blogs' />
          <BlogList
            blogs={blogs.filter((name) => name.author === 'Eoin')}
            title="Eoin's Blogs"
          />{' '}
        </>
      )}
    </div>
  );
};

export default Home;
