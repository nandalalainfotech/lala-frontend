import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Formalshirt(props) {
  const { formalshirt } = props;
  return (
    <div key={formalshirt._id} className="card">
      <Link to={`/formalshirt/${formalshirt._id}`}>
        <img className="medium" src={formalshirt.image} alt={formalshirt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/formalshirt/${formalshirt._id}`}>
          <h2>{formalshirt.name}</h2>
        </Link>
        <Rating
          rating={formalshirt.rating}
          numReviews={formalshirt.numReviews}
        ></Rating>
        <div className="price">${formalshirt.price}</div>
      </div>
    </div>
  );
}