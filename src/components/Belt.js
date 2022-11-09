import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Belt(props) {
  const { belt } = props;
  return (
    <div key={belt._id} className="card">
      <Link to={`/belt/${belt._id}`}>
        <img className="medium" src={belt.image} alt={belt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/belt/${belt._id}`}>
          <h2>{belt.name}</h2>
        </Link>
        <Rating
          rating={belt.rating}
          numReviews={belt.numReviews}
        ></Rating>
        <div className="price">${belt.price}</div>
      </div>
    </div>
  );
}