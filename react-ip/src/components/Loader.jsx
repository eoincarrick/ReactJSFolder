import React from 'react';
import LoaderIcon from '../assets/loading.svg';

const css = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loader = () => {
  return (
    <div style={css} className='loader'>
      <img src={LoaderIcon} alt='loading image' />
    </div>
  );
};

export default Loader;
