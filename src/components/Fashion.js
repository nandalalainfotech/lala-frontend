import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Fashion(props) {
  const { fashion } = props;
  return (
    <div key={fashion._id} className="card">
      <Link to={`/fashion/${fashion._id}`}>
        <img className="medium" src={fashion.image} alt={fashion.name} />
      </Link>
      <div className="card-body">
        <Link to={`/fashion/${fashion._id}`}>
          <h2>{fashion.name}</h2>
        </Link>
        <Rating
          rating={fashion.rating}
          numReviews={fashion.numReviews}
        ></Rating>
        <div className="price">${fashion.price}</div>
      </div>
    </div>
  );
}