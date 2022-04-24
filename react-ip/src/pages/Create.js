import React, { useRef, useState } from 'react';
import { Loading, Navbar } from '../components';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setIsLoading(!isLoading);
    setTitle('');
    setBody('');

    const obj = { title, body, author };
    const submitObj = async (obj) => {
      const request = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
      const response = await request.json();
    };
    submitObj(obj).then((response) => {
      setIsLoading(isLoading);
      setShowSuccessMessage(!showSuccessMessage);

      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/');
      }, 1500);
    });
  };


  return (
    <div className='create'>
      <h1>Add a New Blog</h1>
      <form onSubmit={handleFormSubmission}>
        <div>
          <label>Blog Title:</label>
          <input
            min='5'
            max='10'
            required
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Blog Body:</label>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          ></textarea>
        </div>
        <div className='flex'>
          <label>Blog Author:</label>
          <select
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option value='mario'>mario</option>
            <option value='yoshi'>yoshi</option>
            <option value='eoin'>eoin</option>
          </select>
          {showSuccessMessage && (
            <span className='submitted'>Blog has been added.</span>
          )}
          {!isLoading && <button>Add Blog</button>}
          {isLoading && <button>Adding blog</button>}
        </div>
      </form>
      <h2>{title}</h2>
      <p>
        <strong>{author}</strong>
      </p>
      <p>{body}</p>
    </div>
  );
};

export default Create;
