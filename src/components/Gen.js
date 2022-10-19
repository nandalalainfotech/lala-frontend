import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Gen(props) {
  const { gen } = props;
  return (
    <div key={gen._id} className="card">
      <Link to={`/gen/${gen._id}`}>
        <img className="medium" src={gen.image} alt={gen.name} />
      </Link>
      <div className="card-body">
        <Link to={`/gen/${gen._id}`}>
          <h2>{gen.name}</h2>
        </Link>
        <Rating
          rating={gen.rating}
          numReviews={gen.numReviews}
        ></Rating>
        <div className="price">${gen.price}</div>
      </div>
    </div>
  );
}