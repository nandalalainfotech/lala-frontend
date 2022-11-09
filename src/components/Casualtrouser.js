import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Casualtrouser(props) {
  const { casualtrouser } = props;
  return (
    <div key={casualtrouser._id} className="card">
      <Link to={`/casualtrouser/${casualtrouser._id}`}>
        <img className="medium" src={casualtrouser.image} alt={casualtrouser.name} />
      </Link>
      <div className="card-body">
        <Link to={`/casualtrouser/${casualtrouser._id}`}>
          <h2>{casualtrouser.name}</h2>
        </Link>
        <Rating
          rating={casualtrouser.rating}
          numReviews={casualtrouser.numReviews}
        ></Rating>
        <div className="price">${casualtrouser.price}</div>
      </div>
    </div>
  );
}