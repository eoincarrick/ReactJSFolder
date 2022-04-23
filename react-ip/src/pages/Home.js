import React from 'react';

const Home = () => {
  const handleClick = (event) => {
    console.log(event);
  };

  const handleClickAgain = (event) => {
    console.log(` ${event}`);
  };
  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(event) => {
          handleClickAgain(event);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
