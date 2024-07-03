import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Card from '../Component/Card/Card';
import './Home.css'
const Home = () => {
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

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Home</h1>
      <div className="homebody">
      {
      data.map((entry)=>{
        return <Card userId={entry.userId} id={entry.id} title={entry.title} body={entry.body} />
      })}
      </div>
    </div>
  );
};

export default Home;
