import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Card from '../Component/Card/Card';
import './Home.css';

const Home = ({ searchQuery }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/posts');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data ? data.filter(entry => {
    return entry.title.toLowerCase().includes(searchQuery.toLowerCase())
      || entry.body.toLowerCase().includes(searchQuery.toLowerCase());
  }) : [];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((entry) => (
            <Card key={entry.id} userId={entry.userId} id={entry.id} title={entry.title} body={entry.body} />
          ))
        ) : (
          <p>No matching results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
