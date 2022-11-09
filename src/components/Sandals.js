import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sandals(props) {
  const { sandals } = props;
  return (
    <div key={sandals._id} className="card">
      <Link to={`/sandals/${sandals._id}`}>
        <img className="medium" src={sandals.image} alt={sandals.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sandals/${sandals._id}`}>
          <h2>{sandals.name}</h2>
        </Link>
        <Rating
          rating={sandals.rating}
          numReviews={sandals.numReviews}
        ></Rating>
        <div className="price">${sandals.price}</div>
      </div>
    </div>
  );
}