import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar, Loading } from './index';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    const deleteBlog = async () => {
      const request = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const response = await request.json();
      navigate('/');
    };
    deleteBlog();
  };
  return (
    <div className='blog-details'>
      {isLoading && <Loading />}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
