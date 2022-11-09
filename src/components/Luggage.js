import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Luggage(props) {
  const { luggage } = props;
  return (
    <div key={luggage._id} className="card">
      <Link to={`/luggage/${luggage._id}`}>
        <img className="medium" src={luggage.image} alt={luggage.name} />
      </Link>
      <div className="card-body">
        <Link to={`/luggage/${luggage._id}`}>
          <h2>{luggage.name}</h2>
        </Link>
        <Rating
          rating={luggage.rating}
          numReviews={luggage.numReviews}
        ></Rating>
        <div className="price">${luggage.price}</div>
      </div>
    </div>
  );
}