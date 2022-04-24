import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Loading } from './index';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  return (
    <div>
      <Navbar />
      {isLoading && <Loading />}
    </div>
  );
};

export default BlogDetails;
