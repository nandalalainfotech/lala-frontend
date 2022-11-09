import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Casualshoe(props) {
  const { casualshoe } = props;
  return (
    <div key={casualshoe._id} className="card">
      <Link to={`/casualshoe/${casualshoe._id}`}>
        <img className="medium" src={casualshoe.image} alt={casualshoe.name} />
      </Link>
      <div className="card-body">
        <Link to={`/casualshoe/${casualshoe._id}`}>
          <h2>{casualshoe.name}</h2>
        </Link>
        <Rating
          rating={casualshoe.rating}
          numReviews={casualshoe.numReviews}
        ></Rating>
        <div className="price">${casualshoe.price}</div>
      </div>
    </div>
  );
}