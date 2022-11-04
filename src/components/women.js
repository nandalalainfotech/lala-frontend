import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Women(props) {
  const { women } = props;
  return (
    <div key={women._id} className="card">
      <Link to={`/women/${women._id}`}>
        <img className="medium" src={women.image} alt={women.name} />
      </Link>
      <div className="card-body">
        <Link to={`/women/${women._id}`}>
          <h2>{women?.name}</h2>
        </Link>
        <Rating
          rating={women.rating}
          numReviews={women.numReviews}
        ></Rating>
        <div className="price">${women.price}</div>
      </div>
    </div>
  );
}