import React, { useState, useEffect } from 'react';
import { BlogList, Loader } from '../components';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(blogs);

  //   const handleClick = (id) => {
  //     const del = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(del);
  //   };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:8000/blogs', {
        method: 'GET',
        'Content-Type': 'application/json',
      });
      console.log(response);
      if (!response.ok) {
        throw Error('Could not fetch data correctly');
      }
      const data = await response.json();
      setBlogs(data);
      setIsLoading(!isLoading);
    };
    getData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
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
