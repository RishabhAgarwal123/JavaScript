import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  const getUser = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const user = await response.json();
      setUser(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>We have an error.</h1>
  }

  return <h2>{user.name}</h2>;
};

export default MultipleReturns;
