import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Kid(props) {
  const { kid } = props;
  return (
    <div key={kid._id} className="card">
      <Link to={`/kid/${kid._id}`}>
        <img className="medium" src={kid.image} alt={kid.name} />
      </Link>
      <div className="card-body">
        <Link to={`/kid/${kid._id}`}>
          <h2>{kid.name}</h2>
        </Link>
        <Rating
          rating={kid.rating}
          numReviews={kid.numReviews}
        ></Rating>
        <div className="price">${kid.price}</div>
      </div>
    </div>
  );
}