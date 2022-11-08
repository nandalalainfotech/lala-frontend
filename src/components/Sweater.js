import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sweater(props) {
  const { sweater } = props;
  return (
    <div key={sweater._id} className="card">
      <Link to={`/sweater/${sweater._id}`}>
        <img className="medium" src={sweater.image} alt={sweater.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sweater/${sweater._id}`}>
          <h2>{sweater.name}</h2>
        </Link>
        <Rating
          rating={sweater.rating}
          numReviews={sweater.numReviews}
        ></Rating>
        <div className="price">${sweater.price}</div>
      </div>
    </div>
  );
}