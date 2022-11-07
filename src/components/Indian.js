import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Indian(props) {
  const { indian } = props;
  return (
    <div key={indian._id} className="card">
      <Link to={`/indian/${indian._id}`}>
        <img className="medium" src={indian.image} alt={indian.name} />
      </Link>
      <div className="card-body">
        <Link to={`/indian/${indian._id}`}>
          <h2>{indian.name}</h2>
        </Link>
        <Rating
          rating={indian.rating}
          numReviews={indian.numReviews}
        ></Rating>
        <div className="price">₹{indian.price}</div>
      </div>
    </div>
  );
}