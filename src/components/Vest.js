import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Vest(props) {
  const { vest } = props;
  return (
    <div key={vest._id} className="card">
      <Link to={`/vest/${vest._id}`}>
        <img className="medium" src={vest.image} alt={vest.name} />
      </Link>
      <div className="card-body">
        <Link to={`/vest/${vest._id}`}>
          <h2>{vest.name}</h2>
        </Link>
        <Rating
          rating={vest.rating}
          numReviews={vest.numReviews}
        ></Rating>
        <div className="price">${vest.price}</div>
      </div>
    </div>
  );
}