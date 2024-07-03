import React from 'react';
import './Card.css'; 

const Card = ({ userId, id, title, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="card-footer">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default Card;
