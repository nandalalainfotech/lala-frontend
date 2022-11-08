import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Suit(props) {
  const { suit } = props;
  return (
    <div key={suit._id} className="card">
      <Link to={`/suit/${suit._id}`}>
        <img className="medium" src={suit.image} alt={suit.name} />
      </Link>
      <div className="card-body">
        <Link to={`/suit/${suit._id}`}>
          <h2>{suit.name}</h2>
        </Link>
        <Rating
          rating={suit.rating}
          numReviews={suit.numReviews}
        ></Rating>
        <div className="price">${suit.price}</div>
      </div>
    </div>
  );
}