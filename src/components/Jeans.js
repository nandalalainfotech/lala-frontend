import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Jeans(props) {
  const { jeans } = props;
  return (
    <div key={jeans._id} className="card">
      <Link to={`/jeans/${jeans._id}`}>
        <img className="medium" src={jeans.image} alt={jeans.name} />
      </Link>
      <div className="card-body">
        <Link to={`/jeans/${jeans._id}`}>
          <h2>{jeans.name}</h2>
        </Link>
        <Rating
          rating={jeans.rating}
          numReviews={jeans.numReviews}
        ></Rating>
        <div className="price">${jeans.price}</div>
      </div>
    </div>
  );
}