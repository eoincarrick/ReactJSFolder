import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url, {
        method: 'GET',
        'Content-Type': 'application/json',
      });
      console.log(response);
      if (!response.ok) {
        throw Error('Could not fetch data correctly');
      }
      const data = await response.json();
      setData(data);
      setIsLoading(!isLoading);
    };
    getData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
