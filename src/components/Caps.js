import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Caps(props) {
  const { caps } = props;
  return (
    <div key={caps._id} className="card">
      <Link to={`/caps/${caps._id}`}>
        <img className="medium" src={caps.image} alt={caps.name} />
      </Link>
      <div className="card-body">
        <Link to={`/caps/${caps._id}`}>
          <h2>{caps.name}</h2>
        </Link>
        <Rating
          rating={caps.rating}
          numReviews={caps.numReviews}
        ></Rating>
        <div className="price">${caps.price}</div>
      </div>
    </div>
  );
}