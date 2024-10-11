import React, {useState, useEffect } from 'react';
import DataContext from './DataContext';

const DataContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <DataContext.Provider value={{ posts, setPosts }}>
        {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
