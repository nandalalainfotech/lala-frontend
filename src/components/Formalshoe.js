import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Formalshoe(props) {
  const { formalshoe } = props;
  return (
    <div key={formalshoe._id} className="card">
      <Link to={`/formalshoe/${formalshoe._id}`}>
        <img className="medium" src={formalshoe.image} alt={formalshoe.name} />
      </Link>
      <div className="card-body">
        <Link to={`/formalshoe/${formalshoe._id}`}>
          <h2>{formalshoe.name}</h2>
        </Link>
        <Rating
          rating={formalshoe.rating}
          numReviews={formalshoe.numReviews}
        ></Rating>
        <div className="price">${formalshoe.price}</div>
      </div>
    </div>
  );
}