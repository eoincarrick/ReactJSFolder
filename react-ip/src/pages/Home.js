import React, { useState } from 'react';
import { BlogList } from '../components';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'My pain is gone',
      body: 'Hahaha, this is the end of me now.',
      author: 'Eoin defaultPropsssssss',
    },
    {
      id: 2,
      title: 'My pain is come',
      body: 'Hahaha, this is the start of me now.',
      author: 'Eoin defaultProps',
    },
    {
      id: 3,
      title: 'My pain is yet to go and come',
      body: 'Hahaha, this is the of me now.',
      author: 'Eoin',
    },
  ]);

  const handleClick = (id) => {
    const del = blogs.filter((blog) => blog.id !== id);
    setBlogs(del);
  };

  return (
    <div>
      <BlogList blogs={blogs} title='All Blogs' handleClick={handleClick} />
      <BlogList
        blogs={blogs.filter((name) => name.author === 'Eoin')}
        title="Eoin's Blogs"
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
