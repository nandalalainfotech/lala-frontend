import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Casualshirt(props) {
  const { casualshirt } = props;
  return (
    <div key={casualshirt._id} className="card">
      <Link to={`/casualshirt/${casualshirt._id}`}>
        <img className="medium" src={casualshirt.image} alt={casualshirt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/casualshirt/${casualshirt._id}`}>
          <h2>{casualshirt.name}</h2>
        </Link>
        <Rating
          rating={casualshirt.rating}
          numReviews={casualshirt.numReviews}
        ></Rating>
        <div className="price">${casualshirt.price}</div>
      </div>
    </div>
  );
}