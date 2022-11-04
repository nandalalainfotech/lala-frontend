import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Blazer(props) {
  const { blazer } = props;
  return (
    <div key={blazer._id} className="card">
      <Link to={`/blazer/${blazer._id}`}>
        <img className="medium" src={blazer.image} alt={blazer.name} />
      </Link>
      <div className="card-body">
        <Link to={`/blazer/${blazer._id}`}>
          <h2>{blazer.name}</h2>
        </Link>
        <Rating
          rating={blazer.rating}
          numReviews={blazer.numReviews}
        ></Rating>
        <div className="price">${blazer.price}</div>
      </div>
    </div>
  );
}